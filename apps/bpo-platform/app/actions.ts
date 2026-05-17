"use server";

import { promises as fs } from "fs";
import path from "path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { clearUserCookie, requireUser, setUserCookie } from "../lib/auth";
import { formCatalog, getRecommendedFormIds } from "../lib/form-catalog";
import { reportSections, reportTypes } from "../lib/form-sections";
import { createMergedReportPdf } from "../lib/pdf";
import { newId, nowIso, readData, updateData } from "../lib/store";
import type { AssignmentIntent, PropertyAccess, PropertyCondition, PropertyType, ReportFormStatus, ReportType, ValuationGoal } from "../lib/types";

function requireString(formData: FormData, key: string) {
  const value = String(formData.get(key) ?? "").trim();
  if (!value) throw new Error(`${key} is required`);
  return value;
}

function optionalString(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function ensureProjectFormProgress(data: Awaited<ReturnType<typeof readData>>, projectId: string, formIds: string[]) {
  const now = nowIso();
  const selected = formCatalog.filter((form) => formIds.includes(form.id)).sort((a, b) => a.sortOrder - b.sortOrder);

  data.formProgress = data.formProgress.filter((progress) => progress.reportProjectId !== projectId || formIds.includes(progress.formId));

  selected.forEach((form, index) => {
    const existing = data.formProgress.find((progress) => progress.reportProjectId === projectId && progress.formId === form.id);
    if (existing) {
      existing.displayOrder = index + 1;
      existing.includedInFinal = existing.includedInFinal ?? true;
      existing.updatedAt = now;
    } else {
      data.formProgress.push({
        id: newId("form-progress"),
        reportProjectId: projectId,
        formId: form.id,
        status: "not_started",
        includedInFinal: true,
        displayOrder: index + 1,
        updatedAt: now
      });
    }
  });
}

export async function loginAction(formData: FormData) {
  const email = requireString(formData, "email").toLowerCase();
  const data = await readData();
  const user = data.users.find((item) => item.email.toLowerCase() === email);
  if (!user) redirect("/login?error=unknown");
  await setUserCookie(user.id);
  redirect("/dashboard");
}

export async function logoutAction() {
  await clearUserCookie();
  redirect("/login");
}

export async function createReportAction(formData: FormData) {
  const user = await requireUser();
  const reportType = requireString(formData, "reportType") as ReportType;
  if (!reportTypes.includes(reportType)) throw new Error("Unsupported report type");
  const assignmentIntent = requireString(formData, "assignmentIntent") as AssignmentIntent;
  const propertyType = requireString(formData, "propertyType") as PropertyType;
  const propertyAccess = requireString(formData, "propertyAccess") as PropertyAccess;
  const propertyCondition = requireString(formData, "propertyCondition") as PropertyCondition;
  const valuationGoal = requireString(formData, "valuationGoal") as ValuationGoal;
  const selectedFormIds = getRecommendedFormIds({ reportType, assignmentIntent, propertyType, propertyAccess, propertyCondition, valuationGoal });

  let projectId = "";
  await updateData((data) => {
    const now = nowIso();
    const propertyId = newId("property");
    projectId = newId("report");
    data.properties.push({
      id: propertyId,
      address: requireString(formData, "address"),
      unit: String(formData.get("unit") ?? "").trim(),
      city: requireString(formData, "city"),
      state: requireString(formData, "state"),
      zip: requireString(formData, "zip"),
      parcelId: String(formData.get("parcelId") ?? "").trim(),
      propertyType
    });
    data.projects.push({
      id: projectId,
      organizationId: user.organizationId,
      ownerUserId: user.id,
      propertyId,
      title: requireString(formData, "title"),
      clientName: requireString(formData, "clientName"),
      reportType,
      status: "draft",
      selectedSectionIds: reportSections.filter((section) => section.required || section.order <= 80).map((section) => section.id),
      assignmentIntent,
      propertyAccess,
      propertyCondition,
      valuationGoal,
      selectedFormIds,
      createdAt: now,
      updatedAt: now
    });
    ensureProjectFormProgress(data, projectId, selectedFormIds);
  });

  redirect(`/reports/${projectId}`);
}

export async function updateProjectAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  await updateData((data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    const property = data.properties.find((item) => item.id === project.propertyId);
    project.title = requireString(formData, "title");
    project.clientName = requireString(formData, "clientName");
    project.reportType = requireString(formData, "reportType") as ReportType;
    project.assignmentIntent = optionalString(formData, "assignmentIntent") as AssignmentIntent || project.assignmentIntent;
    project.propertyAccess = optionalString(formData, "propertyAccess") as PropertyAccess || project.propertyAccess;
    project.propertyCondition = optionalString(formData, "propertyCondition") as PropertyCondition || project.propertyCondition;
    project.valuationGoal = optionalString(formData, "valuationGoal") as ValuationGoal || project.valuationGoal;
    project.updatedAt = nowIso();
    if (property) {
      property.address = requireString(formData, "address");
      property.unit = String(formData.get("unit") ?? "").trim();
      property.city = requireString(formData, "city");
      property.state = requireString(formData, "state");
      property.zip = requireString(formData, "zip");
      property.parcelId = String(formData.get("parcelId") ?? "").trim();
      property.propertyType = optionalString(formData, "propertyType") || property.propertyType;
    }
  });
  revalidatePath(`/reports/${projectId}`);
}

export async function updateFormPlanAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  const selectedFormIds = formData.getAll("formIds").map(String).filter((id) => formCatalog.some((form) => form.id === id));

  await updateData((data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    project.selectedFormIds = selectedFormIds;
    project.updatedAt = nowIso();
    ensureProjectFormProgress(data, projectId, selectedFormIds);
  });
  revalidatePath(`/reports/${projectId}`);
}

export async function saveFormProgressAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  const formId = requireString(formData, "formId");
  const status = requireString(formData, "status") as ReportFormStatus;
  const includedInFinal = formData.get("includedInFinal") === "on";
  const notes = optionalString(formData, "notes");
  const displayOrder = Number(optionalString(formData, "displayOrder")) || 999;

  await updateData((data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    const progress = data.formProgress.find((item) => item.reportProjectId === projectId && item.formId === formId);
    if (!progress) throw new Error("Form progress not found");
    progress.status = status;
    progress.includedInFinal = includedInFinal;
    progress.notes = notes;
    progress.displayOrder = displayOrder;
    progress.updatedAt = nowIso();
    project.updatedAt = nowIso();
  });
  revalidatePath(`/reports/${projectId}`);
}

export async function uploadFormPdfAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  const formId = requireString(formData, "formId");
  const file = formData.get("pdf");
  if (!(file instanceof File) || file.size === 0) throw new Error("PDF upload is required");
  if (file.type && file.type !== "application/pdf") throw new Error("Only PDF uploads are supported");

  await updateData(async (data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    const progress = data.formProgress.find((item) => item.reportProjectId === projectId && item.formId === formId);
    if (!progress) throw new Error("Form progress not found");
    const uploadsDir = path.join(process.cwd(), "data", "uploads", projectId);
    await fs.mkdir(uploadsDir, { recursive: true });
    const safeName = file.name.replace(/[^a-z0-9._-]+/gi, "-") || `${formId}.pdf`;
    const filePath = path.join(uploadsDir, `${Date.now()}-${safeName}`);
    const bytes = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(filePath, bytes);
    progress.uploadedPdfPath = filePath;
    progress.uploadedPdfName = file.name;
    progress.status = "pdf_uploaded";
    progress.includedInFinal = true;
    progress.updatedAt = nowIso();
    project.updatedAt = nowIso();
  });
  revalidatePath(`/reports/${projectId}`);
}

export async function saveSectionAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  const sectionId = requireString(formData, "sectionId");
  const section = reportSections.find((item) => item.id === sectionId);
  if (!section) throw new Error("Unknown section");

  await updateData((data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    const values: Record<string, string> = {};
    for (const field of section.fields) {
      values[field.id] = String(formData.get(field.id) ?? "").trim();
    }
    const existing = data.submissions.find((item) => item.reportProjectId === projectId && item.sectionId === sectionId);
    if (existing) {
      existing.values = values;
      existing.updatedAt = nowIso();
    } else {
      data.submissions.push({ id: newId("submission"), reportProjectId: projectId, sectionId, values, updatedAt: nowIso() });
    }
    project.updatedAt = nowIso();
  });
  revalidatePath(`/reports/${projectId}`);
}

export async function updateSectionsAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  const selected = new Set(formData.getAll("sectionIds").map(String));
  for (const section of reportSections.filter((item) => item.required)) selected.add(section.id);

  await updateData((data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    project.selectedSectionIds = reportSections.filter((section) => selected.has(section.id)).map((section) => section.id);
    project.updatedAt = nowIso();
  });
  revalidatePath(`/reports/${projectId}`);
}

export async function markReadyAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  await updateData((data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    project.status = "ready_for_review";
    project.updatedAt = nowIso();
  });
  revalidatePath(`/reports/${projectId}`);
}

export async function exportReportAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  await updateData(async (data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    const generated = await createMergedReportPdf(data, project);
    data.generatedPdfs.push(generated);
    project.generatedPdfPath = generated.filePath;
    project.status = "exported";
    project.updatedAt = nowIso();
  });
  revalidatePath(`/reports/${projectId}`);
}
