import { promises as fs } from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { reportSections } from "./form-sections";
import type { AppData, GeneratedPdf, ReportProject } from "./types";
import { newId, nowIso } from "./store";

const generatedDir = path.join(process.cwd(), "data", "generated");

function drawWrappedText(
  page: import("pdf-lib").PDFPage,
  text: string,
  x: number,
  y: number,
  options: { size: number; maxWidth: number; lineHeight: number; font: import("pdf-lib").PDFFont }
) {
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  const lines: string[] = [];
  let line = "";

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (options.font.widthOfTextAtSize(candidate, options.size) <= options.maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);

  for (const item of lines) {
    page.drawText(item, { x, y, size: options.size, font: options.font, color: rgb(0.16, 0.2, 0.26) });
    y -= options.lineHeight;
  }
  return y;
}

export async function createMergedReportPdf(data: AppData, project: ReportProject): Promise<GeneratedPdf> {
  const property = data.properties.find((item) => item.id === project.propertyId);
  const submissions = data.submissions.filter((item) => item.reportProjectId === project.id);
  const selectedSections = reportSections
    .filter((section) => project.selectedSectionIds.includes(section.id))
    .sort((a, b) => a.order - b.order);

  const pdf = await PDFDocument.create();
  const headingFont = await pdf.embedFont(StandardFonts.HelveticaBold);
  const bodyFont = await pdf.embedFont(StandardFonts.Helvetica);
  const smallFont = await pdf.embedFont(StandardFonts.HelveticaOblique);

  const addPage = (title: string) => {
    const page = pdf.addPage([612, 792]);
    page.drawText(title, { x: 54, y: 734, size: 22, font: headingFont, color: rgb(0.06, 0.11, 0.2) });
    page.drawLine({ start: { x: 54, y: 716 }, end: { x: 558, y: 716 }, thickness: 1, color: rgb(0.79, 0.84, 0.9) });
    return page;
  };

  let page = addPage(project.title);
  page.drawText(project.reportType, { x: 54, y: 696, size: 13, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
  const address = property
    ? `${property.address}${property.unit ? ` ${property.unit}` : ""}, ${property.city}, ${property.state} ${property.zip}`
    : "No property saved";
  page.drawText(address, { x: 54, y: 670, size: 12, font: bodyFont, color: rgb(0.16, 0.2, 0.26) });
  page.drawText(`Client: ${project.clientName || "Not specified"}`, { x: 54, y: 650, size: 12, font: bodyFont });
  page.drawText(`Status: ${project.status.replaceAll("_", " ")}`, { x: 54, y: 630, size: 12, font: bodyFont });
  page.drawText(`Generated: ${new Date().toLocaleString()}`, { x: 54, y: 610, size: 10, font: smallFont, color: rgb(0.39, 0.45, 0.55) });

  for (const section of selectedSections) {
    page = addPage(section.title);
    page.drawText(section.category, { x: 54, y: 696, size: 11, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
    let y = 666;
    const submission = submissions.find((item) => item.sectionId === section.id);

    if (!submission) {
      page.drawText("No submission saved for this section.", { x: 54, y, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
      continue;
    }

    for (const field of section.fields) {
      if (y < 94) {
        page = addPage(`${section.title} continued`);
        y = 680;
      }
      const value = submission.values[field.id]?.trim() || "Not provided";
      page.drawText(field.label, { x: 54, y, size: 10, font: headingFont, color: rgb(0.06, 0.11, 0.2) });
      y -= 16;
      y = drawWrappedText(page, value, 54, y, { size: 10, maxWidth: 500, lineHeight: 13, font: bodyFont }) - 10;
    }
  }

  await fs.mkdir(generatedDir, { recursive: true });
  const bytes = await pdf.save();
  const fileName = `${project.id}-${Date.now()}.pdf`;
  const filePath = path.join(generatedDir, fileName);
  await fs.writeFile(filePath, bytes);

  return {
    id: newId("pdf"),
    reportProjectId: project.id,
    filePath,
    sectionIds: selectedSections.map((section) => section.id),
    createdAt: nowIso()
  };
}
