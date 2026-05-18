import { promises as fs } from "fs";
import path from "path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { finalReportMergerFormId, getBaseFormId, getCatalogForm } from "./form-catalog";
import { reportSections } from "./form-sections";
import { getLocalFormSchema } from "./local-form-schemas";
import type { AppData, FormField, FormSubmission, GeneratedPdf, ReportProject } from "./types";
import { newId, nowIso } from "./store";

const generatedDir = path.join(process.cwd(), "data", "generated");
const pageSize: [number, number] = [612, 792];
const pdfStyle = {
  margin: 72,
  bodySize: 10,
  bodyLineHeight: 15,
  labelSize: 10,
  sectionSize: 15,
  titleSize: 22,
  imageBuffer: 20,
  footerSize: 9,
  headingColor: rgb(0.06, 0.11, 0.2),
  bodyColor: rgb(0.16, 0.2, 0.26),
  mutedColor: rgb(0.39, 0.45, 0.55),
  ruleColor: rgb(0.79, 0.84, 0.9)
};

type PdfPage = import("pdf-lib").PDFPage;
type PdfFont = import("pdf-lib").PDFFont;
type PdfFonts = {
  headingFont: PdfFont;
  bodyFont: PdfFont;
  smallFont: PdfFont;
};

function contentWidth() {
  return pageSize[0] - pdfStyle.margin * 2;
}

function minY() {
  return pdfStyle.margin;
}

function topY() {
  return pageSize[1] - pdfStyle.margin;
}

function drawWrappedText(
  page: PdfPage,
  text: string,
  x: number,
  y: number,
  options: { size: number; maxWidth: number; lineHeight: number; font: PdfFont; color?: ReturnType<typeof rgb>; minLinesOnPage?: number }
) {
  const lines = wrapText(text, options.font, options.size, options.maxWidth);
  const minLines = Math.min(options.minLinesOnPage ?? 3, lines.length);
  if (lines.length > 1 && y - minLines * options.lineHeight < minY()) {
    return { y, needsNewPage: true };
  }

  for (const item of lines) {
    page.drawText(item, { x, y, size: options.size, font: options.font, color: options.color ?? pdfStyle.bodyColor });
    y -= options.lineHeight;
  }
  return { y, needsNewPage: false };
}

function wrapText(text: string, font: PdfFont, size: number, maxWidth: number) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (!normalized) return [];
  const words = normalized.split(" ");
  const lines: string[] = [];
  let line = "";

  const splitLongWord = (word: string) => {
    const chunks: string[] = [];
    let chunk = "";
    for (const char of word) {
      const candidate = `${chunk}${char}`;
      if (font.widthOfTextAtSize(candidate, size) <= maxWidth || !chunk) {
        chunk = candidate;
      } else {
        chunks.push(chunk);
        chunk = char;
      }
    }
    if (chunk) chunks.push(chunk);
    return chunks;
  };

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
    } else if (font.widthOfTextAtSize(word, size) > maxWidth) {
      if (line) {
        lines.push(line);
        line = "";
      }
      const chunks = splitLongWord(word);
      lines.push(...chunks.slice(0, -1));
      line = chunks[chunks.length - 1] ?? "";
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function addStandardPage(pdf: PDFDocument, title?: string, fonts?: Pick<PdfFonts, "headingFont">) {
  const page = pdf.addPage(pageSize);
  let y = topY();
  if (title && fonts) {
    page.drawText(title, { x: pdfStyle.margin, y, size: pdfStyle.titleSize, font: fonts.headingFont, color: pdfStyle.headingColor, maxWidth: contentWidth() });
    y -= 26;
    page.drawLine({ start: { x: pdfStyle.margin, y }, end: { x: pageSize[0] - pdfStyle.margin, y }, thickness: 1, color: pdfStyle.ruleColor });
    y -= 30;
  }
  return { page, y };
}

function ensureSpace(pdf: PDFDocument, page: PdfPage, y: number, requiredHeight: number, title: string | undefined, fonts: Pick<PdfFonts, "headingFont">) {
  if (y - requiredHeight >= minY()) return { page, y };
  return addStandardPage(pdf, title, fonts);
}

function drawFooterPageNumbers(pdf: PDFDocument, font: PdfFont) {
  const pages = pdf.getPages();
  pages.forEach((page, index) => {
    const text = `Page ${index + 1} of ${pages.length}`;
    const width = font.widthOfTextAtSize(text, pdfStyle.footerSize);
    page.drawText(text, {
      x: pageSize[0] - pdfStyle.margin - width,
      y: 36,
      size: pdfStyle.footerSize,
      font,
      color: pdfStyle.mutedColor
    });
  });
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
  page: PdfPage,
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
  page: PdfPage,
  label: string,
  value: string,
  x: number,
  y: number,
  options: { labelWidth: number; labelFont: PdfFont; bodyFont: PdfFont }
) {
  if (!value.trim()) return 0;
  page.drawText(label, { x, y, size: 9, font: options.labelFont, color: rgb(0.06, 0.11, 0.2) });
  page.drawText(value.trim(), { x: x + options.labelWidth, y, size: 9, font: options.bodyFont, color: pdfStyle.bodyColor, maxWidth: 190 });
  return 13;
}

async function drawFieldValueOrImage(
  pdf: PDFDocument,
  page: PdfPage,
  field: { id: string; kind: string },
  submission: FormSubmission,
  x: number,
  y: number,
  fonts: { bodyFont: PdfFont },
  maxWidth = contentWidth()
) {
  if (field.kind === "image") {
    const upload = parseUploadValue(submission.values[(field as { id: string }).id]);
    if (upload) {
      const imageHeight = await drawUploadedImage(pdf, page, upload, x, y, maxWidth, Math.min(300, y - minY()));
      if (imageHeight) return y - imageHeight - pdfStyle.imageBuffer;
    }
  }

  const rawValue = submission.values[(field as { id: string }).id]?.trim() || "Not provided";
  const result = drawWrappedText(page, field.kind === "image" && rawValue === "" ? "No image uploaded." : rawValue, x, y, {
    size: pdfStyle.bodySize,
    maxWidth,
    lineHeight: pdfStyle.bodyLineHeight,
    font: fonts.bodyFont
  });
  return result.y - 10;
}

function getRepeaterItemIds(submission: FormSubmission, fieldId: string) {
  const raw = submission.values[`${fieldId}__items`];
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string" && item.length > 0) : [];
  } catch {
    return raw.split(",").map((item) => item.trim()).filter(Boolean);
  }
}

async function drawLocalFormField(
  pdf: PDFDocument,
  page: PdfPage,
  field: FormField,
  submission: FormSubmission,
  y: number,
  fonts: Pick<PdfFonts, "headingFont" | "bodyFont">,
  continuationTitle = "Continued"
) {
  const { headingFont, bodyFont } = fonts;
  if (field.kind === "divider") return { page, y };

  if (field.kind === "repeater") {
    const itemIds = getRepeaterItemIds(submission, field.id);
    ({ page, y } = ensureSpace(pdf, page, y, 45, continuationTitle, fonts));
    page.drawText(field.label, { x: pdfStyle.margin, y, size: pdfStyle.sectionSize, font: headingFont, color: pdfStyle.headingColor });
    y -= 22;

    if (itemIds.length === 0) {
      const result = drawWrappedText(page, "Not provided", pdfStyle.margin, y, { size: pdfStyle.bodySize, maxWidth: contentWidth(), lineHeight: pdfStyle.bodyLineHeight, font: bodyFont });
      y = result.y - 10;
      return { page, y };
    }

    for (let index = 0; index < itemIds.length; index += 1) {
      const itemId = itemIds[index];
      ({ page, y } = ensureSpace(pdf, page, y, 44, continuationTitle, fonts));
      page.drawText(`Item ${index + 1}`, { x: pdfStyle.margin, y, size: 10, font: headingFont, color: pdfStyle.mutedColor });
      y -= 18;

      for (const subField of field.fields ?? []) {
        const repeatedField = { ...subField, id: `${field.id}_${itemId}_${subField.id}` };
        const upload = repeatedField.kind === "image" ? parseUploadValue(submission.values[repeatedField.id]) : null;
        const requiredHeight = upload ? Math.min(300, topY() - minY()) + pdfStyle.imageBuffer + 22 : 52;
        ({ page, y } = ensureSpace(pdf, page, y, requiredHeight, continuationTitle, fonts));
        page.drawText(subField.label, { x: pdfStyle.margin, y, size: pdfStyle.labelSize, font: headingFont, color: pdfStyle.headingColor });
        y -= 16;
        y = await drawFieldValueOrImage(pdf, page, repeatedField, submission, pdfStyle.margin, y, { bodyFont }, contentWidth());
      }
    }

    return { page, y };
  }

  const upload = field.kind === "image" ? parseUploadValue(submission.values[field.id]) : null;
  const requiredHeight = upload ? Math.min(300, topY() - minY()) + pdfStyle.imageBuffer + 22 : 52;
  ({ page, y } = ensureSpace(pdf, page, y, requiredHeight, continuationTitle, fonts));
  page.drawText(field.label, { x: pdfStyle.margin, y, size: pdfStyle.labelSize, font: headingFont, color: pdfStyle.headingColor });
  y -= 16;
  y = await drawFieldValueOrImage(pdf, page, field, submission, pdfStyle.margin, y, { bodyFont }, contentWidth());
  return { page, y };
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
  if (goal) y = drawWrappedText(page, `Client's Stated Goal: ${goal}`, 54, y, { size: 9, maxWidth: 504, lineHeight: 12, font: bodyFont }).y - 8;

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

const frontPhotoFields = [
  { id: "subjectFront", label: "Subject Front" },
  { id: "subjectAddressPhoto", label: "Subject Address" },
  { id: "subjectLeftAngle", label: "Subject Left Angle" },
  { id: "subjectRightAngle", label: "Subject Right Angle" },
  { id: "streetViewLeft", label: "Street View Left" },
  { id: "streetViewRight", label: "Street View Right" },
  { id: "frontViewAcrossStreet", label: "Front View (Across the Street)" },
  { id: "streetSign", label: "Street Sign" }
] as const;

async function addFrontPhotosPdf(
  pdf: PDFDocument,
  submission: FormSubmission,
  fonts: PdfFonts
) {
  let { page, y } = addStandardPage(pdf, "Front Photos", fonts);
  const { headingFont, bodyFont } = fonts;
  const subjectAddress = `${valueOf(submission, "subjectAddress")}${valueOf(submission, "subjectUnit") ? ` ${valueOf(submission, "subjectUnit")}` : ""}`.trim();
  const subjectCityLine = `${valueOf(submission, "subjectCity")}, ${valueOf(submission, "subjectState")} ${valueOf(submission, "subjectZip")}`.replace(/^, /, "").trim();
  if (subjectAddress) {
    const result = drawWrappedText(page, subjectAddress, pdfStyle.margin, y, { size: pdfStyle.bodySize, maxWidth: contentWidth(), lineHeight: pdfStyle.bodyLineHeight, font: bodyFont });
    y = result.y;
  }
  if (subjectCityLine) {
    const result = drawWrappedText(page, subjectCityLine, pdfStyle.margin, y, { size: pdfStyle.bodySize, maxWidth: contentWidth(), lineHeight: pdfStyle.bodyLineHeight, font: bodyFont });
    y = result.y;
  }
  y -= 18;

  const gap = 12;
  const columns = 2;
  const rows = 2;
  const cellWidth = (contentWidth() - gap) / columns;
  const cellHeight = 220;
  const maxImageHeight = 170;

  for (let index = 0; index < frontPhotoFields.length; index += 1) {
    const pageSlot = index % (columns * rows);
    if (index > 0 && pageSlot === 0) {
      const next = addStandardPage(pdf, "Front Photos continued", fonts);
      page = next.page;
      y = next.y;
    }
    const field = frontPhotoFields[index];
    const col = pageSlot % columns;
    const row = Math.floor(pageSlot / columns);
    const x = pdfStyle.margin + col * (cellWidth + gap);
    const cellTop = y - row * (cellHeight + gap);

    page.drawRectangle({
      x: x - 4,
      y: cellTop - cellHeight,
      width: cellWidth + 8,
      height: cellHeight,
      borderColor: pdfStyle.ruleColor,
      borderWidth: 0.8
    });

    page.drawText(field.label, { x, y: cellTop - 18, size: pdfStyle.labelSize, font: headingFont, color: pdfStyle.headingColor });
    const upload = parseUploadValue(submission.values[field.id]);
    const imageY = cellTop - 36;
    const imageHeight = await drawUploadedImage(pdf, page, upload, x, imageY, cellWidth, maxImageHeight);
    if (!upload || imageHeight === 0) {
      page.drawText("No image uploaded.", { x, y: imageY - 14, size: 9, font: bodyFont, color: rgb(0.56, 0.36, 0.1) });
    }
  }

  return page;
}

export async function createMergedReportPdf(data: AppData, project: ReportProject): Promise<GeneratedPdf> {
  const property = data.properties.find((item) => item.id === project.propertyId);
  const submissions = data.submissions.filter((item) => item.reportProjectId === project.id);
  const submissionBySection = new Map(submissions.map((submission) => [submission.sectionId, submission]));
  const selectedSections = reportSections
    .filter((section) => project.selectedSectionIds.includes(section.id))
    .sort((a, b) => a.order - b.order);
  const selectedFormProgress = data.formProgress
    .filter((progress) => progress.reportProjectId === project.id && progress.includedInFinal && getBaseFormId(progress.formId) !== finalReportMergerFormId)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  const pdf = await PDFDocument.create();
  const headingFont = await pdf.embedFont(StandardFonts.HelveticaBold);
  const bodyFont = await pdf.embedFont(StandardFonts.TimesRoman);
  const smallFont = await pdf.embedFont(StandardFonts.HelveticaOblique);

  const addPage = (title: string) => {
    return addStandardPage(pdf, title, { headingFont }).page;
  };

  let page = addPage(project.title);
  page.drawText(project.reportType, { x: pdfStyle.margin, y: 696, size: 13, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
  const address = property
    ? `${property.address}${property.unit ? ` ${property.unit}` : ""}, ${property.city}, ${property.state} ${property.zip}`
    : "No property saved";
  page.drawText(address, { x: pdfStyle.margin, y: 670, size: 12, font: bodyFont, color: pdfStyle.bodyColor, maxWidth: contentWidth() });
  page.drawText(`Client: ${[project.clientCompany, project.clientName].filter(Boolean).join(" - ") || "Not specified"}`, { x: pdfStyle.margin, y: 650, size: 12, font: bodyFont, maxWidth: contentWidth() });
  page.drawText(`Status: ${project.status.replaceAll("_", " ")}`, { x: pdfStyle.margin, y: 630, size: 12, font: bodyFont });
  page.drawText(`Generated: ${new Date().toLocaleString()}`, { x: pdfStyle.margin, y: 610, size: 10, font: smallFont, color: pdfStyle.mutedColor });

  if (selectedFormProgress.length > 0) {
    let y = 580;
    page.drawText("Included report forms", { x: pdfStyle.margin, y, size: 12, font: headingFont, color: pdfStyle.headingColor });
    y -= 20;
    for (const progress of selectedFormProgress) {
      const form = getCatalogForm(progress.formId);
      page.drawText(`${progress.displayOrder}. ${form?.title ?? progress.formId}`, { x: pdfStyle.margin, y, size: 10, font: bodyFont, color: pdfStyle.bodyColor });
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
      if (schema.id === "front-photos" && submission) {
        await addFrontPhotosPdf(pdf, submission, { headingFont, bodyFont, smallFont });
        continue;
      }
      page = addPage(schema.title);
      page.drawText(schema.category, { x: pdfStyle.margin, y: 696, size: 11, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
      const description = drawWrappedText(page, form?.description ?? schema.description, pdfStyle.margin, 676, { size: 9, maxWidth: contentWidth(), lineHeight: 13, font: smallFont, color: pdfStyle.mutedColor });
      let formY = description.y - 18;

      if (!submission) {
        page.drawText("No local submission saved for this form.", { x: pdfStyle.margin, y: formY, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
        continue;
      }

      for (const field of schema.fields) {
        const result = await drawLocalFormField(pdf, page, field, submission, formY, { headingFont, bodyFont }, `${schema.title} continued`);
        page = result.page;
        formY = result.y;
      }
    }

    await fs.mkdir(generatedDir, { recursive: true });
    drawFooterPageNumbers(pdf, smallFont);
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
    page.drawText(section.category, { x: pdfStyle.margin, y: 696, size: 11, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
    let y = 666;
    const submission = submissions.find((item) => item.sectionId === section.id);

    if (!submission) {
      page.drawText("No submission saved for this section.", { x: pdfStyle.margin, y, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
      continue;
    }

    for (const field of section.fields) {
      const result = await drawLocalFormField(pdf, page, field, submission, y, { headingFont, bodyFont }, `${section.title} continued`);
      page = result.page;
      y = result.y;
    }
  }

  await fs.mkdir(generatedDir, { recursive: true });
  drawFooterPageNumbers(pdf, smallFont);
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
  const bodyFont = await pdf.embedFont(StandardFonts.TimesRoman);
  const smallFont = await pdf.embedFont(StandardFonts.HelveticaOblique);
  const schema = getLocalFormSchema(formId);
  const submission = data.submissions.find((item) => item.reportProjectId === project.id && item.sectionId === formId);

  if (schema?.id === "cover-page" && submission) {
    await addCoverPagePdf(pdf, submission, { headingFont, bodyFont, smallFont });
  } else if (schema?.id === "front-photos" && submission) {
    await addFrontPhotosPdf(pdf, submission, { headingFont, bodyFont, smallFont });
  } else {
    let { page, y } = addStandardPage(pdf, schema?.title ?? formId, { headingFont });

    if (!schema || !submission) {
      page.drawText("No local submission saved for this form.", { x: pdfStyle.margin, y, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
    } else {
      for (const field of schema.fields) {
        const result = await drawLocalFormField(pdf, page, field, submission, y, { headingFont, bodyFont }, `${schema.title} continued`);
        page = result.page;
        y = result.y;
      }
    }
  }

  await fs.mkdir(generatedDir, { recursive: true });
  drawFooterPageNumbers(pdf, smallFont);
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
