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
  return addStandardPage(pdf, undefined, fonts);
}

function drawFooterPageNumbers(pdf: PDFDocument, font: PdfFont, leftText?: string) {
  const pages = pdf.getPages();
  pages.forEach((page, index) => {
    if (leftText) {
      page.drawText(leftText, {
        x: pdfStyle.margin,
        y: 36,
        size: pdfStyle.footerSize,
        font,
        color: pdfStyle.mutedColor
      });
    }

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

function detectImageMimeType(bytes: Buffer) {
  if (bytes.length >= 8 && bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return "image/png";
  }
  if (bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return "image/jpeg";
  }
  return null;
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
    const detectedType = detectImageMimeType(bytes) ?? upload.type;
    const image = detectedType === "image/png" ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
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

function getRepeaterTextItems(submission: FormSubmission, fieldId: string) {
  return getRepeaterItemIds(submission, fieldId)
    .map((itemId) => valueOf(submission, `${fieldId}_${itemId}_text`))
    .filter(Boolean);
}

function isFieldVisibleForSubmission(field: FormField, submission: FormSubmission) {
  if (!field.visibleWhen) return true;
  return field.visibleWhen.values.includes(valueOf(submission, field.visibleWhen.fieldId));
}



async function drawFieldCell(
  pdf: PDFDocument,
  page: PdfPage,
  field: FormField,
  value: string,
  x: number,
  y: number,
  width: number,
  fonts: Pick<PdfFonts, "headingFont" | "bodyFont">
) {
  const { headingFont, bodyFont } = fonts;
  const label = field.label;
  
  const lines = wrapText(value, bodyFont, 9, width - 12);
  const valueHeight = Math.max(1, lines.length) * 12;
  const cellHeight = 16 + valueHeight + 8; // 16 for label/padding
  
  page.drawRectangle({
    x,
    y: y - cellHeight,
    width,
    height: cellHeight,
    color: rgb(0.97, 0.98, 0.99),
    borderColor: rgb(0.88, 0.91, 0.94),
    borderWidth: 0.5
  });
  
  page.drawText(label, {
    x: x + 6,
    y: y - 13,
    size: 7.5,
    font: headingFont,
    color: pdfStyle.mutedColor,
    maxWidth: width - 12
  });
  
  let valY = y - 25;
  for (const line of lines) {
    page.drawText(line, {
      x: x + 6,
      y: valY,
      size: 9,
      font: bodyFont,
      color: pdfStyle.bodyColor
    });
    valY -= 12;
  }
  
  return cellHeight;
}

async function drawFormFieldsList(
  pdf: PDFDocument,
  page: PdfPage,
  fields: FormField[],
  submission: FormSubmission,
  y: number,
  fonts: PdfFonts,
  continuationTitle = "Continued"
) {
  const { headingFont, bodyFont } = fonts;
  let currentPage = page;
  let currentY = y;
  
  let leftField: FormField | null = null;
  let leftFieldHeight = 0;
  
  const colGap = 16;
  const colWidth = (contentWidth() - colGap) / 2;
  const colX = [pdfStyle.margin, pdfStyle.margin + colWidth + colGap];

  const flushColumns = () => {
    if (leftField) {
      currentY -= leftFieldHeight + 8;
      leftField = null;
      leftFieldHeight = 0;
    }
  };

  for (const field of fields) {
    if (!isFieldVisibleForSubmission(field, submission)) continue;
    
    const isFullWidth = field.kind === "repeater" || field.kind === "image" || field.kind === "divider" || field.kind === "textarea" || field.fullWidth;
    
    if (isFullWidth) {
      flushColumns();
      
      if (field.kind === "divider") {
        const result = ensureSpace(pdf, currentPage, currentY, 45, continuationTitle, fonts);
        currentPage = result.page;
        currentY = result.y;
        
        currentPage.drawRectangle({
          x: pdfStyle.margin,
          y: currentY - 14,
          width: 3,
          height: 14,
          color: rgb(0.1, 0.3, 0.6)
        });
        
        currentPage.drawText(field.label, {
          x: pdfStyle.margin + 8,
          y: currentY - 12,
          size: 11,
          font: headingFont,
          color: pdfStyle.headingColor
        });
        currentY -= 18;
        
        if (field.placeholder) {
          const wrapResult = drawWrappedText(currentPage, field.placeholder, pdfStyle.margin + 8, currentY, {
            size: 8,
            maxWidth: contentWidth() - 8,
            lineHeight: 11,
            font: bodyFont,
            color: pdfStyle.mutedColor
          });
          currentY = wrapResult.y - 12;
        } else {
          currentY -= 6;
        }
      }
      else if (field.kind === "repeater") {
        const result = ensureSpace(pdf, currentPage, currentY, 45, continuationTitle, fonts);
        currentPage = result.page;
        currentY = result.y;
        
        currentPage.drawText(field.label, {
          x: pdfStyle.margin,
          y: currentY - 12,
          size: 12,
          font: headingFont,
          color: pdfStyle.headingColor
        });
        currentY -= 20;
        
        const itemIds = getRepeaterItemIds(submission, field.id);
        if (itemIds.length === 0) {
          const wrapResult = drawWrappedText(currentPage, "Not provided", pdfStyle.margin, currentY, {
            size: 9.5,
            maxWidth: contentWidth(),
            lineHeight: 14,
            font: bodyFont,
            color: pdfStyle.mutedColor
          });
          currentY = wrapResult.y - 10;
        } else {
          for (let index = 0; index < itemIds.length; index += 1) {
            const itemId = itemIds[index];
            const spaceResult = ensureSpace(pdf, currentPage, currentY, 30, continuationTitle, fonts);
            currentPage = spaceResult.page;
            currentY = spaceResult.y;
            
            currentPage.drawText(`Item ${index + 1}`, {
              x: pdfStyle.margin,
              y: currentY - 10,
              size: 9.5,
              font: headingFont,
              color: pdfStyle.mutedColor
            });
            currentY -= 15;
            
            const repeatedSubFields = (field.fields ?? []).map(sf => ({
              ...sf,
              id: `${field.id}_${itemId}_${sf.id}`
            }));
            
            const subResult = await drawFormFieldsList(pdf, currentPage, repeatedSubFields, submission, currentY, fonts, continuationTitle);
            currentPage = subResult.page;
            currentY = subResult.y - 10;
          }
        }
      }
      else if (field.kind === "image") {
        const upload = parseUploadValue(submission.values[field.id]);
        const requiredHeight = upload ? Math.min(220, topY() - minY()) + pdfStyle.imageBuffer + 20 : 45;
        
        const result = ensureSpace(pdf, currentPage, currentY, requiredHeight, continuationTitle, fonts);
        currentPage = result.page;
        currentY = result.y;
        
        currentPage.drawText(field.label, {
          x: pdfStyle.margin,
          y: currentY - 12,
          size: 9.5,
          font: headingFont,
          color: pdfStyle.headingColor
        });
        currentY -= 16;
        
        if (upload) {
          const imgH = await drawUploadedImage(pdf, currentPage, upload, pdfStyle.margin, currentY, contentWidth(), Math.min(220, currentY - minY()));
          currentY -= imgH + pdfStyle.imageBuffer;
        } else {
          currentPage.drawText("No image uploaded.", {
            x: pdfStyle.margin,
            y: currentY - 10,
            size: 9,
            font: bodyFont,
            color: pdfStyle.mutedColor
          });
          currentY -= 22;
        }
      }
      else {
        const value = valueOf(submission, field.id) || "Not provided";
        const lines = wrapText(value, bodyFont, 9, contentWidth() - 12);
        const valHeight = Math.max(1, lines.length) * 12;
        const reqH = 16 + valHeight + 12;
        
        const result = ensureSpace(pdf, currentPage, currentY, reqH, continuationTitle, fonts);
        currentPage = result.page;
        currentY = result.y;
        
        const cellH = await drawFieldCell(pdf, currentPage, field, value, pdfStyle.margin, currentY, contentWidth(), { headingFont, bodyFont });
        currentY -= cellH + 8;
      }
    } else {
      const value = valueOf(submission, field.id) || "Not provided";
      const lines = wrapText(value, bodyFont, 9, colWidth - 12);
      const valHeight = Math.max(1, lines.length) * 12;
      const reqH = 16 + valHeight + 12;
      
      if (!leftField) {
        const result = ensureSpace(pdf, currentPage, currentY, reqH, continuationTitle, fonts);
        currentPage = result.page;
        currentY = result.y;
        
        leftFieldHeight = await drawFieldCell(pdf, currentPage, field, value, colX[0], currentY, colWidth, { headingFont, bodyFont });
        leftField = field;
      } else {
        if (currentY - reqH < minY()) {
          flushColumns();
          const result = ensureSpace(pdf, currentPage, currentY, reqH, continuationTitle, fonts);
          currentPage = result.page;
          currentY = result.y;
          
          leftFieldHeight = await drawFieldCell(pdf, currentPage, field, value, colX[0], currentY, colWidth, { headingFont, bodyFont });
          leftField = field;
        } else {
          const rightFieldHeight = await drawFieldCell(pdf, currentPage, field, value, colX[1], currentY, colWidth, { headingFont, bodyFont });
          currentY -= Math.max(leftFieldHeight, rightFieldHeight) + 8;
          leftField = null;
          leftFieldHeight = 0;
        }
      }
    }
  }
  
  flushColumns();
  return { page: currentPage, y: currentY };
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

async function addAdditionalPhotosPdf(
  pdf: PDFDocument,
  submission: FormSubmission,
  fonts: PdfFonts
) {
  const { bodyFont } = fonts;
  let { page, y } = addStandardPage(pdf, "Additional Photos", fonts);
  const subjectAddress = `${valueOf(submission, "subjectAddress")}${valueOf(submission, "subjectUnit") ? ` ${valueOf(submission, "subjectUnit")}` : ""}`.trim();
  const subjectCityLine = `${valueOf(submission, "subjectCity")}, ${valueOf(submission, "subjectState")} ${valueOf(submission, "subjectZip")}`.replace(/^, /, "").trim();
  const photoArea = valueOf(submission, "photoAreaSelect") === "Other" && valueOf(submission, "photoAreaOther")
    ? valueOf(submission, "photoAreaOther")
    : valueOf(submission, "photoAreaSelect");

  for (const line of [subjectAddress, subjectCityLine, photoArea ? `Photo Area: ${photoArea}` : ""]) {
    if (!line) continue;
    const result = drawWrappedText(page, line, pdfStyle.margin, y, {
      size: pdfStyle.bodySize,
      maxWidth: contentWidth(),
      lineHeight: pdfStyle.bodyLineHeight,
      font: bodyFont
    });
    y = result.y;
  }
  y -= 18;

  const itemIds = getRepeaterItemIds(submission, "photoList");
  const photos = itemIds
    .map((itemId) => ({
      upload: parseUploadValue(submission.values[`photoList_${itemId}_photo`]),
      description: submission.values[`photoList_${itemId}_description`]?.trim() ?? ""
    }))
    .filter((item) => item.upload);

  if (photos.length === 0) {
    page.drawText("No additional photos uploaded.", { x: pdfStyle.margin, y, size: 11, font: bodyFont, color: pdfStyle.mutedColor });
    return page;
  }

  const columns = 2;
  const rows = 3;
  const perPage = columns * rows;
  const gapX = 12;
  const gapY = 14;
  const labelHeight = 30;
  const cellWidth = (contentWidth() - gapX) / columns;
  const availableHeight = y - minY();
  const cellHeight = (availableHeight - gapY * (rows - 1)) / rows;
  const maxImageHeight = Math.max(90, cellHeight - labelHeight);

  for (let index = 0; index < photos.length; index += 1) {
    const slot = index % perPage;
    if (index > 0 && slot === 0) {
      const next = addStandardPage(pdf, "Additional Photos continued", fonts);
      page = next.page;
      y = next.y;
    }

    const col = slot % columns;
    const row = Math.floor(slot / columns);
    const x = pdfStyle.margin + col * (cellWidth + gapX);
    const cellTop = y - row * (cellHeight + gapY);
    const photo = photos[index];

    page.drawRectangle({
      x: x - 4,
      y: cellTop - cellHeight,
      width: cellWidth + 8,
      height: cellHeight,
      borderColor: pdfStyle.ruleColor,
      borderWidth: 0.8
    });

    await drawUploadedImage(pdf, page, photo.upload, x, cellTop - 10, cellWidth, maxImageHeight);
    const caption = photo.description || `Photo ${index + 1}`;
    const captionY = cellTop - maxImageHeight - 20;
    const captionResult = drawWrappedText(page, caption, x, captionY, {
      size: 9,
      maxWidth: cellWidth,
      lineHeight: 11,
      font: bodyFont,
      color: pdfStyle.bodyColor,
      minLinesOnPage: 1
    });
    if (captionResult.needsNewPage) {
      page.drawText(caption.slice(0, 80), { x, y: captionY, size: 9, font: bodyFont, color: pdfStyle.bodyColor, maxWidth: cellWidth });
    }
  }

  return page;
}

function drawCompactField(
  page: PdfPage,
  label: string,
  value: string,
  x: number,
  y: number,
  width: number,
  fonts: Pick<PdfFonts, "headingFont" | "bodyFont">
) {
  const { headingFont, bodyFont } = fonts;
  page.drawText(label, { x, y, size: 8.5, font: headingFont, color: pdfStyle.headingColor });
  const result = drawWrappedText(page, value || "Not provided", x, y - 12, {
    size: 9.5,
    maxWidth: width,
    lineHeight: 12,
    font: bodyFont,
    minLinesOnPage: 1
  });
  return result.y;
}

function drawCompactParagraph(
  pdf: PDFDocument,
  page: PdfPage,
  y: number,
  label: string,
  value: string,
  fonts: Pick<PdfFonts, "headingFont" | "bodyFont">,
  continuationTitle: string
) {
  ({ page, y } = ensureSpace(pdf, page, y, 42, continuationTitle, fonts));
  page.drawText(label, { x: pdfStyle.margin, y, size: 10.5, font: fonts.headingFont, color: pdfStyle.headingColor });
  y -= 14;
  const result = drawWrappedText(page, value || "Not provided", pdfStyle.margin, y, {
    size: 9.5,
    maxWidth: contentWidth(),
    lineHeight: 13,
    font: fonts.bodyFont
  });
  return { page, y: result.y - 8 };
}

function drawCompactBulletList(
  pdf: PDFDocument,
  page: PdfPage,
  y: number,
  label: string,
  items: string[],
  fonts: Pick<PdfFonts, "headingFont" | "bodyFont">,
  continuationTitle: string
) {
  if (items.length === 0) return { page, y };
  ({ page, y } = ensureSpace(pdf, page, y, 42, continuationTitle, fonts));
  page.drawText(label, { x: pdfStyle.margin, y, size: 10.5, font: fonts.headingFont, color: pdfStyle.headingColor });
  y -= 15;

  for (const item of items) {
    ({ page, y } = ensureSpace(pdf, page, y, 28, continuationTitle, fonts));
    page.drawText("-", { x: pdfStyle.margin, y, size: 9.5, font: fonts.bodyFont, color: pdfStyle.bodyColor });
    const result = drawWrappedText(page, item, pdfStyle.margin + 14, y, {
      size: 9.5,
      maxWidth: contentWidth() - 14,
      lineHeight: 12,
      font: fonts.bodyFont,
      minLinesOnPage: 1
    });
    y = result.y - 2;
  }

  return { page, y: y - 5 };
}

async function addSignaturePagePdf(
  pdf: PDFDocument,
  submission: FormSubmission,
  fonts: PdfFonts
) {
  let { page, y } = addStandardPage(pdf, "Signature and Disclosure", fonts);
  const { headingFont } = fonts;
  const gap = 14;
  const halfWidth = (contentWidth() - gap) / 2;
  const cityWidth = contentWidth() * 0.5 - gap;
  const stateWidth = contentWidth() * 0.25 - gap / 2;
  const zipWidth = contentWidth() * 0.25 - gap / 2;
  const continuationTitle = "Signature and Disclosure continued";

  const reportTitle = valueOf(submission, "reportTitle");
  if (reportTitle) {
    page.drawText(reportTitle, { x: pdfStyle.margin, y, size: 12, font: headingFont, color: rgb(0.1, 0.28, 0.6), maxWidth: contentWidth() });
    y -= 22;
  }

  ({ page, y } = ensureSpace(pdf, page, y, 66, continuationTitle, fonts));
  const addressY = drawCompactField(page, "Subject Property Address", valueOf(submission, "propertyAddress"), pdfStyle.margin, y, halfWidth, fonts);
  const unitY = drawCompactField(page, "Unit #", valueOf(submission, "propertyUnit"), pdfStyle.margin + halfWidth + gap, y, halfWidth, fonts);
  y = Math.min(addressY, unitY) - 10;

  ({ page, y } = ensureSpace(pdf, page, y, 42, continuationTitle, fonts));
  const cityY = drawCompactField(page, "City", valueOf(submission, "propertyCity"), pdfStyle.margin, y, cityWidth, fonts);
  const stateY = drawCompactField(page, "State", valueOf(submission, "propertyState"), pdfStyle.margin + cityWidth + gap, y, stateWidth, fonts);
  const zipY = drawCompactField(page, "ZIP Code", valueOf(submission, "propertyZip"), pdfStyle.margin + cityWidth + stateWidth + gap * 1.5, y, zipWidth, fonts);
  y = Math.min(cityY, stateY, zipY) - 10;

  ({ page, y } = ensureSpace(pdf, page, y, 42, continuationTitle, fonts));
  const dateY = drawCompactField(page, "Effective Date", valueOf(submission, "effectiveDate"), pdfStyle.margin, y, halfWidth, fonts);
  const userY = drawCompactField(page, "Intended User", valueOf(submission, "intendedUser"), pdfStyle.margin + halfWidth + gap, y, halfWidth, fonts);
  y = Math.min(dateY, userY) - 10;

  ({ page, y } = drawCompactParagraph(pdf, page, y, "Intended Use / Purpose", valueOf(submission, "purpose"), fonts, continuationTitle));
  ({ page, y } = drawCompactBulletList(pdf, page, y, "Assumptions", getRepeaterTextItems(submission, "assumptions"), fonts, continuationTitle));
  ({ page, y } = drawCompactBulletList(pdf, page, y, "Limiting Conditions", getRepeaterTextItems(submission, "limitingConditions"), fonts, continuationTitle));
  ({ page, y } = drawCompactBulletList(pdf, page, y, "Additional Disclosures", getRepeaterTextItems(submission, "additionalDisclosures"), fonts, continuationTitle));
  ({ page, y } = drawCompactParagraph(pdf, page, y, "State-Specific Disclosure", valueOf(submission, "stateDisclosureText"), fonts, continuationTitle));
  ({ page, y } = drawCompactParagraph(pdf, page, y, "Certification Statement", valueOf(submission, "certificationText"), fonts, continuationTitle));

  const agentInterest = [valueOf(submission, "agentInterest"), valueOf(submission, "agentInterestNote")].filter(Boolean).join(" - ");
  if (agentInterest) ({ page, y } = drawCompactParagraph(pdf, page, y, "Agent Interest Disclosure", agentInterest, fonts, continuationTitle));

  const acknowledgements = [valueOf(submission, "mlsCompliant"), valueOf(submission, "nonLending")].filter(Boolean);
  ({ page, y } = drawCompactBulletList(pdf, page, y, "Compliance Acknowledgements", acknowledgements, fonts, continuationTitle));

  ({ page, y } = ensureSpace(pdf, page, y, 92, continuationTitle, fonts));
  page.drawText("Signature", { x: pdfStyle.margin, y, size: 10.5, font: headingFont, color: pdfStyle.headingColor });
  y -= 12;
  const signatureHeight = await drawUploadedImage(pdf, page, parseUploadValue(valueOf(submission, "signatureImage")), pdfStyle.margin, y, 150, 42);
  if (signatureHeight) y -= signatureHeight + 7;
  page.drawLine({ start: { x: pdfStyle.margin, y }, end: { x: pdfStyle.margin + 190, y }, thickness: 0.8, color: pdfStyle.ruleColor });
  y -= 16;
  drawCompactField(page, "Licensee Full Name", valueOf(submission, "licenseeName"), pdfStyle.margin, y, 190, fonts);
  drawCompactField(page, "License Number", valueOf(submission, "licenseNumber"), pdfStyle.margin + 206, y, 120, fonts);
  drawCompactField(page, "Signature Date", valueOf(submission, "signatureDate"), pdfStyle.margin + 342, y, 120, fonts);

  return page;
}

async function addFloorplansSketchesPdf(
  pdf: PDFDocument,
  submission: FormSubmission,
  fonts: PdfFonts
) {
  const { bodyFont } = fonts;
  let { page, y } = addStandardPage(pdf, "Floorplans / Sketches", fonts);
  const gap = 14;
  const halfWidth = (contentWidth() - gap) / 2;
  const cityWidth = contentWidth() * 0.5 - gap;
  const stateWidth = contentWidth() * 0.25 - gap / 2;
  const zipWidth = contentWidth() * 0.25 - gap / 2;

  ({ page, y } = ensureSpace(pdf, page, y, 66, "Floorplans / Sketches continued", fonts));
  const addressY = drawCompactField(page, "Subject Property Address", valueOf(submission, "propertyAddress"), pdfStyle.margin, y, halfWidth, fonts);
  const unitY = drawCompactField(page, "Unit #", valueOf(submission, "propertyUnit"), pdfStyle.margin + halfWidth + gap, y, halfWidth, fonts);
  y = Math.min(addressY, unitY) - 10;

  ({ page, y } = ensureSpace(pdf, page, y, 42, "Floorplans / Sketches continued", fonts));
  const cityY = drawCompactField(page, "City", valueOf(submission, "propertyCity"), pdfStyle.margin, y, cityWidth, fonts);
  const stateY = drawCompactField(page, "State", valueOf(submission, "propertyState"), pdfStyle.margin + cityWidth + gap, y, stateWidth, fonts);
  const zipY = drawCompactField(page, "ZIP Code", valueOf(submission, "propertyZip"), pdfStyle.margin + cityWidth + stateWidth + gap * 1.5, y, zipWidth, fonts);
  y = Math.min(cityY, stateY, zipY) - 18;

  const photos = getRepeaterItemIds(submission, "floorPlanList")
    .map((itemId) => ({
      upload: parseUploadValue(submission.values[`floorPlanList_${itemId}_photo`]),
      caption: valueOf(submission, `floorPlanList_${itemId}_label`) || "Floor Plan Sketch"
    }))
    .filter((item) => item.upload);

  if (photos.length === 0) {
    page.drawText("No floor plan sketches uploaded.", { x: pdfStyle.margin, y, size: 11, font: bodyFont, color: pdfStyle.mutedColor });
    return page;
  }

  const columns = 2;
  const rows = 2;
  const perPage = columns * rows;
  const gapX = 12;
  const gapY = 16;
  const labelHeight = 34;
  const cellWidth = (contentWidth() - gapX) / columns;
  const availableHeight = y - minY();
  const cellHeight = (availableHeight - gapY * (rows - 1)) / rows;
  const maxImageHeight = Math.max(140, cellHeight - labelHeight);

  for (let index = 0; index < photos.length; index += 1) {
    const slot = index % perPage;
    if (index > 0 && slot === 0) {
      const next = addStandardPage(pdf, "Floorplans / Sketches continued", fonts);
      page = next.page;
      y = next.y;
    }

    const col = slot % columns;
    const row = Math.floor(slot / columns);
    const x = pdfStyle.margin + col * (cellWidth + gapX);
    const cellTop = y - row * (cellHeight + gapY);
    const photo = photos[index];

    page.drawRectangle({
      x: x - 4,
      y: cellTop - cellHeight,
      width: cellWidth + 8,
      height: cellHeight,
      borderColor: pdfStyle.ruleColor,
      borderWidth: 0.8
    });

    await drawUploadedImage(pdf, page, photo.upload, x, cellTop - 10, cellWidth, maxImageHeight);
    drawWrappedText(page, photo.caption, x, cellTop - maxImageHeight - 20, {
      size: 9,
      maxWidth: cellWidth,
      lineHeight: 11,
      font: bodyFont,
      color: pdfStyle.bodyColor,
      minLinesOnPage: 1
    });
  }

  return page;
}

const aerialViewImageFields = [
  { id: "marketAreaStandard", label: "Market Area View Standard" },
  { id: "marketAreaSatellite", label: "Market Area View Satellite" },
  { id: "neighborhoodStandard", label: "Neighborhood View Standard" },
  { id: "neighborhoodSatellite", label: "Neighborhood View Satellite" },
  { id: "floodMapNeighborhood", label: "Flood Map (Neighborhood View)" },
  { id: "platTaxMap", label: "Plat / Tax Map" },
  { id: "zoningMapNeighborhood", label: "Zoning Map (Neighborhood View)" }
] as const;

async function addAerialViewsPdf(
  pdf: PDFDocument,
  submission: FormSubmission,
  fonts: PdfFonts
) {
  const { bodyFont } = fonts;
  let { page, y } = addStandardPage(pdf, "Aerial Views", fonts);
  const subjectAddress = `${valueOf(submission, "propertyAddress")}${valueOf(submission, "propertyUnit") ? ` ${valueOf(submission, "propertyUnit")}` : ""}`.trim();
  const subjectCityLine = `${valueOf(submission, "propertyCity")}, ${valueOf(submission, "propertyState")} ${valueOf(submission, "propertyZip")}`.replace(/^, /, "").trim();

  for (const line of [subjectAddress, subjectCityLine]) {
    if (!line) continue;
    const result = drawWrappedText(page, line, pdfStyle.margin, y, {
      size: pdfStyle.bodySize,
      maxWidth: contentWidth(),
      lineHeight: pdfStyle.bodyLineHeight,
      font: bodyFont
    });
    y = result.y;
  }
  y -= 18;

  const fieldPhotoIds = getRepeaterItemIds(submission, "fieldPhotoList");
  const fieldPhotos = fieldPhotoIds
    .map((itemId) => ({
      upload: parseUploadValue(submission.values[`fieldPhotoList_${itemId}_photo`]),
      caption: submission.values[`fieldPhotoList_${itemId}_label`]?.trim() || "Property & Field Photo"
    }))
    .filter((item) => item.upload);
  const mapPhotos = aerialViewImageFields
    .map((field) => ({
      upload: parseUploadValue(submission.values[field.id]),
      caption: field.label
    }))
    .filter((item) => item.upload);
  const photos = [...fieldPhotos, ...mapPhotos];

  if (photos.length === 0) {
    page.drawText("No aerial photos uploaded.", { x: pdfStyle.margin, y, size: 11, font: bodyFont, color: pdfStyle.mutedColor });
    return page;
  }

  const columns = 2;
  const rows = 2;
  const perPage = columns * rows;
  const gapX = 12;
  const gapY = 16;
  const labelHeight = 34;
  const cellWidth = (contentWidth() - gapX) / columns;
  const availableHeight = y - minY();
  const cellHeight = (availableHeight - gapY * (rows - 1)) / rows;
  const maxImageHeight = Math.max(140, cellHeight - labelHeight);

  for (let index = 0; index < photos.length; index += 1) {
    const slot = index % perPage;
    if (index > 0 && slot === 0) {
      const next = addStandardPage(pdf, "Aerial Views continued", fonts);
      page = next.page;
      y = next.y;
    }

    const col = slot % columns;
    const row = Math.floor(slot / columns);
    const x = pdfStyle.margin + col * (cellWidth + gapX);
    const cellTop = y - row * (cellHeight + gapY);
    const photo = photos[index];

    page.drawRectangle({
      x: x - 4,
      y: cellTop - cellHeight,
      width: cellWidth + 8,
      height: cellHeight,
      borderColor: pdfStyle.ruleColor,
      borderWidth: 0.8
    });

    await drawUploadedImage(pdf, page, photo.upload, x, cellTop - 10, cellWidth, maxImageHeight);
    drawWrappedText(page, photo.caption, x, cellTop - maxImageHeight - 20, {
      size: 9,
      maxWidth: cellWidth,
      lineHeight: 11,
      font: bodyFont,
      color: pdfStyle.bodyColor,
      minLinesOnPage: 1
    });
  }

  return page;
}

function moveFirstPageToEnd(pdf: PDFDocument) {
  const pages = pdf.getPages();
  if (pages.length <= 1) return;
  const pagesCopy = [...pages];
  const count = pages.length;
  for (let i = 0; i < count; i++) {
    pdf.removePage(0);
  }
  for (let i = 1; i < count; i++) {
    pdf.addPage(pagesCopy[i]);
  }
  pdf.addPage(pagesCopy[0]);
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
      if (schema.id === "additional-photos" && submission) {
        await addAdditionalPhotosPdf(pdf, submission, { headingFont, bodyFont, smallFont });
        continue;
      }
      if (schema.id === "signature-page" && submission) {
        await addSignaturePagePdf(pdf, submission, { headingFont, bodyFont, smallFont });
        continue;
      }
      if (schema.id === "floorplans-sketches" && submission) {
        await addFloorplansSketchesPdf(pdf, submission, { headingFont, bodyFont, smallFont });
        continue;
      }
      if (schema.id === "aerial-views" && submission) {
        await addAerialViewsPdf(pdf, submission, { headingFont, bodyFont, smallFont });
        continue;
      }
      const pageResult = addStandardPage(pdf, schema.title, { headingFont });
      page = pageResult.page;
      let formY = pageResult.y;

      page.drawText(schema.category, { x: pdfStyle.margin, y: formY, size: 11, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
      formY -= 16;
      const description = drawWrappedText(page, form?.description ?? schema.description, pdfStyle.margin, formY, { size: 9, maxWidth: contentWidth(), lineHeight: 13, font: smallFont, color: pdfStyle.mutedColor });
      formY = description.y - 18;

      if (!submission) {
        page.drawText("No local submission saved for this form.", { x: pdfStyle.margin, y: formY, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
        continue;
      }

      const result = await drawFormFieldsList(pdf, page, schema.fields, submission, formY, { headingFont, bodyFont, smallFont }, `${schema.title} continued`);
      page = result.page;
      formY = result.y;
    }

    await fs.mkdir(generatedDir, { recursive: true });
    moveFirstPageToEnd(pdf);
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
    const pageResult = addStandardPage(pdf, section.title, { headingFont });
    page = pageResult.page;
    let y = pageResult.y;

    page.drawText(section.category, { x: pdfStyle.margin, y, size: 11, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
    y -= 16;
    if (section.description) {
      const description = drawWrappedText(page, section.description, pdfStyle.margin, y, { size: 9, maxWidth: contentWidth(), lineHeight: 13, font: smallFont, color: pdfStyle.mutedColor });
      y = description.y - 18;
    } else {
      y -= 10;
    }

    const submission = submissions.find((item) => item.sectionId === section.id);

    if (!submission) {
      page.drawText("No submission saved for this section.", { x: pdfStyle.margin, y, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
      continue;
    }

    const result = await drawFormFieldsList(pdf, page, section.fields, submission, y, { headingFont, bodyFont, smallFont }, `${section.title} continued`);
    page = result.page;
    y = result.y;
  }

  await fs.mkdir(generatedDir, { recursive: true });
  moveFirstPageToEnd(pdf);
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
  } else if (schema?.id === "additional-photos" && submission) {
    await addAdditionalPhotosPdf(pdf, submission, { headingFont, bodyFont, smallFont });
  } else if (schema?.id === "signature-page" && submission) {
    await addSignaturePagePdf(pdf, submission, { headingFont, bodyFont, smallFont });
  } else if (schema?.id === "floorplans-sketches" && submission) {
    await addFloorplansSketchesPdf(pdf, submission, { headingFont, bodyFont, smallFont });
  } else if (schema?.id === "aerial-views" && submission) {
    await addAerialViewsPdf(pdf, submission, { headingFont, bodyFont, smallFont });
  } else {
    let { page, y } = addStandardPage(pdf, schema?.title ?? formId, { headingFont });

    if (!schema || !submission) {
      page.drawText("No local submission saved for this form.", { x: pdfStyle.margin, y, size: 11, font: smallFont, color: rgb(0.56, 0.36, 0.1) });
    } else {
      page.drawText(schema.category, { x: pdfStyle.margin, y, size: 11, font: headingFont, color: rgb(0.1, 0.28, 0.6) });
      y -= 16;
      const form = getCatalogForm(formId);
      const description = drawWrappedText(page, form?.description ?? schema.description, pdfStyle.margin, y, { size: 9, maxWidth: contentWidth(), lineHeight: 13, font: smallFont, color: pdfStyle.mutedColor });
      y = description.y - 18;

      const result = await drawFormFieldsList(pdf, page, schema.fields, submission, y, { headingFont, bodyFont, smallFont }, `${schema.title} continued`);
      page = result.page;
      y = result.y;
    }
  }

  await fs.mkdir(generatedDir, { recursive: true });
  drawFooterPageNumbers(pdf, smallFont, schema?.title ?? formId);
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
