import { promises as fs } from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { getCatalogForm } from "./form-catalog";
import { reportSections } from "./form-sections";
import { getLocalFormSchema } from "./local-form-schemas";
import type { AppData, FormSubmission, GeneratedPdf, ReportProject } from "./types";
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

function parseUploadValue(value?: string): { filePath: string; name: string; type: string } | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as { filePath?: string; name?: string; type?: string };
    return parsed.filePath && parsed.name && parsed.type ? { filePath: parsed.filePath, name: parsed.name, type: parsed.type } : null;
  } catch {
    return null;
  }
}

async function drawUploadedImage(
  pdf: PDFDocument,
  page: import("pdf-lib").PDFPage,
  upload: { filePath: string; type: string } | null,
  x: number,
  y: number,
  maxWidth: number,
  maxHeight: number
) {
  if (!upload) return 0;
  try {
    const bytes = await fs.readFile(upload.filePath);
    const image = upload.type === "image/png" ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
    const scaled = image.scaleToFit(maxWidth, maxHeight);
    page.drawImage(image, { x: x + (maxWidth - scaled.width) / 2, y: y - scaled.height, width: scaled.width, height: scaled.height });
    return scaled.height;
  } catch {
    return 0;
  }
}

function valueOf(submission: FormSubmission, key: string) {
  return submission.values[key]?.trim() ?? "";
}

function drawCoverField(
  page: import("pdf-lib").PDFPage,
  label: string,
  value: string,
  x: number,
  y: number,
  options: { labelWidth: number; labelFont: import("pdf-lib").PDFFont; bodyFont: import("pdf-lib").PDFFont }
) {
  if (!value.trim()) return 0;
  page.drawText(label, { x, y, size: 9, font: options.labelFont, color: rgb(0.06, 0.11, 0.2) });
  page.drawText(value.trim(), { x: x + options.labelWidth, y, size: 9, font: options.bodyFont, color: rgb(0.16, 0.2, 0.26), maxWidth: 190 });
  return 13;
}

function wrapText(text: string, font: import("pdf-lib").PDFFont, size: number, maxWidth: number) {
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) line = candidate;
    else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

async function addCoverPagePdf(
  pdf: PDFDocument,
  submission: FormSubmission,
  fonts: { headingFont: import("pdf-lib").PDFFont; bodyFont: import("pdf-lib").PDFFont; smallFont: import("pdf-lib").PDFFont }
) {
  const page = pdf.addPage([612, 792]);
  const { headingFont, bodyFont } = fonts;
  const fieldOptions = { labelWidth: 58, labelFont: headingFont, bodyFont };
  let y = 742;

  page.drawText(valueOf(submission, "reportTitle") || "Broker Price Opinion", { x: 54, y, size: 21, font: headingFont, color: rgb(0.06, 0.11, 0.2), maxWidth: 504 });
  y -= 30;
  const subjectAddress = `${valueOf(submission, "subjectAddress")}${valueOf(submission, "subjectUnit") ? `, ${valueOf(submission, "subjectUnit")}` : ""}`;
  page.drawText(subjectAddress, { x: 54, y, size: 11, font: bodyFont, color: rgb(0.16, 0.2, 0.26), maxWidth: 504 });
  y -= 16;
  page.drawText(`${valueOf(submission, "subjectCity")}, ${valueOf(submission, "subjectState")} ${valueOf(submission, "subjectZip")}`.replace(/^, /, "").trim(), { x: 54, y, size: 11, font: bodyFont, color: rgb(0.16, 0.2, 0.26) });
  y -= 22;

  const goal = valueOf(submission, "clientGoal") === "Other" ? valueOf(submission, "clientGoalOther") : valueOf(submission, "clientGoal");
  if (goal) y = drawWrappedText(page, `Client's Stated Goal: ${goal}`, 54, y, { size: 9, maxWidth: 504, lineHeight: 12, font: bodyFont }) - 8;

  const disclosure = valueOf(submission, "mandatoryDisclosure");
  if (disclosure) {
    const lines = wrapText(disclosure, bodyFont, 8, 480);
    const boxHeight = Math.max(42, lines.length * 10 + 18);
    page.drawRectangle({ x: 54, y: y - boxHeight, width: 504, height: boxHeight, borderColor: rgb(0.79, 0.84, 0.9), borderWidth: 1 });
    let lineY = y - 15;
    for (const text of lines) {
      page.drawText(text, { x: 66, y: lineY, size: 8, font: bodyFont, color: rgb(0.16, 0.2, 0.26) });
      lineY -= 10;
    }
    y -= boxHeight + 18;
  }

  page.drawText("Client Information", { x: 54, y, size: 12, font: headingFont, color: rgb(0.06, 0.11, 0.2) });
  y -= 17;
  y -= drawCoverField(page, "Company:", valueOf(submission, "clientCompany"), 54, y, fieldOptions);
  y -= drawCoverField(page, "POC:", valueOf(submission, "clientPoc"), 54, y, fieldOptions);
  y -= drawCoverField(page, "Address:", valueOf(submission, "clientAddress"), 54, y, fieldOptions);
  const clientCityLine = `${valueOf(submission, "clientCity")}, ${valueOf(submission, "clientState")} ${valueOf(submission, "clientZip")}`.replace(/^, /, "").trim();
  if (clientCityLine !== ",") y -= drawCoverField(page, "", clientCityLine, 54, y, fieldOptions);
  y -= drawCoverField(page, "Phone:", valueOf(submission, "clientPhone"), 54, y, fieldOptions);
  y -= drawCoverField(page, "Email:", valueOf(submission, "clientEmail"), 54, y, fieldOptions);
  y -= 8;

  const subjectImageHeight = await drawUploadedImage(pdf, page, parseUploadValue(valueOf(submission, "subjectFrontPhoto")), 54, y, 504, 190);
  if (subjectImageHeight) y -= subjectImageHeight + 20;

  const columnTop = Math.max(128, y);
  const leftX = 54;
  const rightX = 320;
  page.drawText("Report Created By", { x: leftX, y: columnTop, size: 12, font: headingFont, color: rgb(0.06, 0.11, 0.2) });
  page.drawText("Brokerage Information", { x: rightX, y: columnTop, size: 12, font: headingFont, color: rgb(0.06, 0.11, 0.2) });

  let leftY = columnTop - 18;
  const agentImageHeight = await drawUploadedImage(pdf, page, parseUploadValue(valueOf(submission, "agentPhoto")), leftX, leftY, 120, 80);
  if (agentImageHeight) leftY -= agentImageHeight + 12;
  leftY -= drawCoverField(page, "Name:", valueOf(submission, "agentName"), leftX, leftY, { ...fieldOptions, labelWidth: 42 });
  leftY -= drawCoverField(page, "Title:", valueOf(submission, "agentTitle"), leftX, leftY, { ...fieldOptions, labelWidth: 42 });
  leftY -= drawCoverField(page, "Phone:", valueOf(submission, "agentPhone"), leftX, leftY, { ...fieldOptions, labelWidth: 42 });
  leftY -= drawCoverField(page, "Email:", valueOf(submission, "agentEmail"), leftX, leftY, { ...fieldOptions, labelWidth: 42 });
  leftY -= drawCoverField(page, "Web:", valueOf(submission, "agentWebsite"), leftX, leftY, { ...fieldOptions, labelWidth: 42 });

  let rightY = columnTop - 18;
  const logoHeight = await drawUploadedImage(pdf, page, parseUploadValue(valueOf(submission, "brokerageLogo")), rightX, rightY, 120, 80);
  if (logoHeight) rightY -= logoHeight + 12;
  rightY -= drawCoverField(page, "Brokerage:", valueOf(submission, "brokerage"), rightX, rightY, fieldOptions);
  rightY -= drawCoverField(page, "Address:", valueOf(submission, "brokerageAddress"), rightX, rightY, fieldOptions);
  const brokerCityLine = `${valueOf(submission, "brokerageCity")}, ${valueOf(submission, "brokerageState")} ${valueOf(submission, "brokerageZip")}`.replace(/^, /, "").trim();
  if (brokerCityLine !== ",") rightY -= drawCoverField(page, "", brokerCityLine, rightX, rightY, fieldOptions);
  rightY -= drawCoverField(page, "Phone:", valueOf(submission, "brokeragePhone"), rightX, rightY, fieldOptions);
}

export async function createMergedReportPdf(data: AppData, project: ReportProject): Promise<GeneratedPdf> {
  const property = data.properties.find((item) => item.id === project.propertyId);
  const submissions = data.submissions.filter((item) => item.reportProjectId === project.id);
  const submissionBySection = new Map(submissions.map((submission) => [submission.sectionId, submission]));
  const selectedSections = reportSections
    .filter((section) => project.selectedSectionIds.includes(section.id))
    .sort((a, b) => a.order - b.order);
  const selectedFormProgress = data.formProgress
    .filter((progress) => progress.reportProjectId === project.id && progress.includedInFinal)
    .sort((a, b) => a.displayOrder - b.displayOrder);

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

  if (selectedFormProgress.length > 0) {
    let y = 580;
    page.drawText("Included report forms", { x: 54, y, size: 12, font: headingFont, color: rgb(0.06, 0.11, 0.2) });
    y -= 20;
    for (const progress of selectedFormProgress) {
      const form = getCatalogForm(progress.formId);
      page.drawText(`${progress.displayOrder}. ${form?.title ?? progress.formId}`, { x: 54, y, size: 10, font: bodyFont, color: rgb(0.16, 0.2, 0.26) });
      y -= 14;
    }

    for (const progress of selectedFormProgress) {
      const form = getCatalogForm(progress.formId);
      const schema = getLocalFormSchema(progress.formId);

      if (progress.uploadedPdfPath) {
        const sourceBytes = await fs.readFile(progress.uploadedPdfPath);
        const sourcePdf = await PDFDocument.load(sourceBytes);
        const copiedPages = await pdf.copyPages(sourcePdf, sourcePdf.getPageIndices());
        copiedPages.forEach((copiedPage) => pdf.addPage(copiedPage));
        continue;
      }

      if (!schema) continue;
      const submission = submissionBySection.get(progress.formId);
      if (schema.id === "cover-page" && submission) {
        await addCoverPagePdf(pdf, submission, { headingFont, bodyFont, smallFont });
        continue;
      }
      page = addPage(schema.title);
      page.drawText(schema.category, { x: 54, y: 696, size: 11, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
      page.drawText(form?.description ?? schema.description, { x: 54, y: 676, size: 9, font: smallFont, color: rgb(0.39, 0.45, 0.55) });
      let formY = 646;

      if (!submission) {
        page.drawText("No local submission saved for this form.", { x: 54, y: formY, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
        continue;
      }

      for (const field of schema.fields) {
        if (formY < 94) {
          page = addPage(`${schema.title} continued`);
          formY = 680;
        }
        const upload = field.kind === "image" ? parseUploadValue(submission.values[field.id]) : null;
        const value = upload?.name ? `Uploaded image: ${upload.name}` : submission.values[field.id]?.trim() || "Not provided";
        page.drawText(field.label, { x: 54, y: formY, size: 10, font: headingFont, color: rgb(0.06, 0.11, 0.2) });
        formY -= 16;
        formY = drawWrappedText(page, value, 54, formY, { size: 10, maxWidth: 500, lineHeight: 13, font: bodyFont }) - 10;
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
      sectionIds: selectedFormProgress.map((progress) => progress.formId),
      createdAt: nowIso()
    };
  }

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

export async function createLocalFormPdf(data: AppData, project: ReportProject, formId: string): Promise<GeneratedPdf> {
  const pdf = await PDFDocument.create();
  const headingFont = await pdf.embedFont(StandardFonts.HelveticaBold);
  const bodyFont = await pdf.embedFont(StandardFonts.Helvetica);
  const smallFont = await pdf.embedFont(StandardFonts.HelveticaOblique);
  const schema = getLocalFormSchema(formId);
  const submission = data.submissions.find((item) => item.reportProjectId === project.id && item.sectionId === formId);

  if (schema?.id === "cover-page" && submission) {
    await addCoverPagePdf(pdf, submission, { headingFont, bodyFont, smallFont });
  } else {
    const page = pdf.addPage([612, 792]);
    page.drawText(schema?.title ?? formId, { x: 54, y: 734, size: 22, font: headingFont, color: rgb(0.06, 0.11, 0.2) });
    page.drawLine({ start: { x: 54, y: 716 }, end: { x: 558, y: 716 }, thickness: 1, color: rgb(0.79, 0.84, 0.9) });
    let y = 676;

    if (!schema || !submission) {
      page.drawText("No local submission saved for this form.", { x: 54, y, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
    } else {
      for (const field of schema.fields) {
        const upload = field.kind === "image" ? parseUploadValue(submission.values[field.id]) : null;
        const value = upload?.name ? `Uploaded image: ${upload.name}` : submission.values[field.id]?.trim() || "Not provided";
        page.drawText(field.label, { x: 54, y, size: 10, font: headingFont, color: rgb(0.06, 0.11, 0.2) });
        y -= 16;
        y = drawWrappedText(page, value, 54, y, { size: 10, maxWidth: 500, lineHeight: 13, font: bodyFont }) - 10;
      }
    }
  }

  await fs.mkdir(generatedDir, { recursive: true });
  const bytes = await pdf.save();
  const fileName = `${project.id}-${formId}-${Date.now()}.pdf`;
  const filePath = path.join(generatedDir, fileName);
  await fs.writeFile(filePath, bytes);

  return {
    id: newId("pdf"),
    reportProjectId: project.id,
    filePath,
    sectionIds: [formId],
    createdAt: nowIso()
  };
}
