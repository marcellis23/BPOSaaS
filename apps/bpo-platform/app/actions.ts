"use server";

import { promises as fs } from "fs";
import path from "path";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { clearUserCookie, requireUser, setUserCookie } from "../lib/auth";
import { createFormInstanceId, formCatalog, getBaseFormId, getCatalogForm, getRecommendedFormIds, normalizeFormInstanceIds } from "../lib/form-catalog";
import { reportSections, reportTypes } from "../lib/form-sections";
import { getCoverPageDisclosure } from "../lib/forms/cover-page";
import { getLocalFormSchema } from "../lib/local-form-schemas";
import { createLocalFormPdf, createMergedReportPdf } from "../lib/pdf";
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

function ensureProjectFormProgress(
  data: Awaited<ReturnType<typeof readData>>,
  projectId: string,
  formIds: string[],
  displayOrderByFormId: Record<string, number> = {}
) {
  const now = nowIso();
  const selected = normalizeFormInstanceIds(formIds)
    .map((formInstanceId) => ({ formInstanceId, form: getCatalogForm(formInstanceId) }))
    .filter((item): item is { formInstanceId: string; form: NonNullable<ReturnType<typeof getCatalogForm>> } => Boolean(item.form))
    .sort((a, b) => a.form.sortOrder - b.form.sortOrder);

  const selectedIds = selected.map((item) => item.formInstanceId);
  data.formProgress = data.formProgress.filter((progress) => progress.reportProjectId !== projectId || selectedIds.includes(progress.formId));

  selected.forEach(({ formInstanceId }, index) => {
    const existing = data.formProgress.find((progress) => progress.reportProjectId === projectId && progress.formId === formInstanceId);
    const displayOrder = displayOrderByFormId[formInstanceId] || existing?.displayOrder || index + 1;
    if (existing) {
      existing.displayOrder = displayOrder;
      existing.includedInFinal = existing.includedInFinal ?? true;
      existing.updatedAt = now;
    } else {
      data.formProgress.push({
        id: newId("form-progress"),
        reportProjectId: projectId,
        formId: formInstanceId,
        status: "not_started",
        includedInFinal: true,
        displayOrder,
        updatedAt: now
      });
    }
  });
}

async function saveLocalImageUpload(projectId: string, formId: string, fieldId: string, file: File) {
  if (!["image/jpeg", "image/png"].includes(file.type)) throw new Error("Only JPG and PNG image uploads are supported");
  const uploadsDir = path.join(process.cwd(), "data", "uploads", projectId, formId);
  await fs.mkdir(uploadsDir, { recursive: true });
  const safeName = file.name.replace(/[^a-z0-9._-]+/gi, "-") || `${fieldId}.jpg`;
  const filePath = path.join(uploadsDir, `${Date.now()}-${fieldId}-${safeName}`);
  const bytes = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filePath, bytes);
  return JSON.stringify({ kind: "upload", name: file.name, type: file.type, filePath });
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

export async function updateAgentProfileAction(formData: FormData) {
  const user = await requireUser();
  await updateData((data) => {
    const target = data.users.find((item) => item.id === user.id);
    if (!target) throw new Error("User not found");
    target.name = requireString(formData, "name");
    target.email = requireString(formData, "email").toLowerCase();
    target.title = optionalString(formData, "title");
    target.phone = optionalString(formData, "phone");
    target.website = optionalString(formData, "website");
    target.licenseNumber = optionalString(formData, "licenseNumber");
  });
  revalidatePath("/dashboard");
  redirect("/dashboard?profile=updated");
}

export async function updateBrokerProfileAction(formData: FormData) {
  const user = await requireUser();
  await updateData((data) => {
    const target = data.users.find((item) => item.id === user.id);
    if (!target) throw new Error("User not found");
    target.brokerageName = optionalString(formData, "brokerageName");
    target.brokerageAddress = optionalString(formData, "brokerageAddress");
    target.brokerageCity = optionalString(formData, "brokerageCity");
    target.brokerageState = optionalString(formData, "brokerageState").toUpperCase();
    target.brokerageZip = optionalString(formData, "brokerageZip");
    target.brokeragePhone = optionalString(formData, "brokeragePhone");
  });
  revalidatePath("/dashboard");
  redirect("/dashboard?broker=updated");
}

export async function deleteReportAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  await updateData(async (data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");

    const generatedPaths = data.generatedPdfs
      .filter((item) => item.reportProjectId === projectId)
      .map((item) => item.filePath);
    if (project.generatedPdfPath) generatedPaths.push(project.generatedPdfPath);
    await Promise.all([...new Set(generatedPaths)].map((filePath) => fs.rm(filePath, { force: true }).catch(() => undefined)));
    await fs.rm(path.join(process.cwd(), "data", "uploads", projectId), { recursive: true, force: true });

    data.projects = data.projects.filter((item) => item.id !== projectId);
    data.properties = data.properties.filter((item) => item.id !== project.propertyId);
    data.submissions = data.submissions.filter((item) => item.reportProjectId !== projectId);
    data.generatedPdfs = data.generatedPdfs.filter((item) => item.reportProjectId !== projectId);
    data.formProgress = data.formProgress.filter((item) => item.reportProjectId !== projectId);
  });
  revalidatePath("/dashboard");
  redirect("/dashboard?report=deleted");
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
  const selectedFormIds = normalizeFormInstanceIds(formData.getAll("formIds").map(String).filter((id) => formCatalog.some((form) => form.id === id)));

  await updateData((data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    const existingAdditionalPhotoInstances = normalizeFormInstanceIds(project.selectedFormIds ?? []).filter((id) => getBaseFormId(id) === "additional-photos" && id !== "additional-photos");
    const nextSelectedFormIds = selectedFormIds.includes("additional-photos")
      ? [...selectedFormIds, ...existingAdditionalPhotoInstances]
      : selectedFormIds;
    const displayOrderEntries: Array<[string, number]> = [];
    for (const formId of nextSelectedFormIds) {
      const submittedOrder = optionalString(formData, `formOrder_${formId}`);
      const displayOrder = submittedOrder ? Number(submittedOrder) || 0 : 0;
      if (displayOrder > 0) displayOrderEntries.push([formId, displayOrder]);
    }
    const displayOrderByFormId = Object.fromEntries(displayOrderEntries);
    project.selectedFormIds = nextSelectedFormIds;
    project.updatedAt = nowIso();
    ensureProjectFormProgress(data, projectId, nextSelectedFormIds, displayOrderByFormId);
  });
  revalidatePath(`/reports/${projectId}`);
}

export async function duplicateAdditionalPhotosFormAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  await updateData((data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");
    const selectedFormIds = normalizeFormInstanceIds(project.selectedFormIds ?? []);
    if (!selectedFormIds.includes("additional-photos")) selectedFormIds.push("additional-photos");
    const instanceId = createFormInstanceId("additional-photos", newId("copy"));
    selectedFormIds.push(instanceId);
    project.selectedFormIds = selectedFormIds;
    project.updatedAt = nowIso();

    const maxOrder = data.formProgress
      .filter((progress) => progress.reportProjectId === projectId)
      .reduce((max, progress) => Math.max(max, progress.displayOrder), 0);
    ensureProjectFormProgress(data, projectId, selectedFormIds, { [instanceId]: maxOrder + 1 });
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

export async function saveLocalFormAction(formData: FormData) {
  const user = await requireUser();
  const projectId = requireString(formData, "projectId");
  const formId = requireString(formData, "formId");
  const intent = optionalString(formData, "intent");
  const schema = getLocalFormSchema(formId);
  if (!schema) throw new Error("Unknown local form");

  await updateData(async (data) => {
    const project = data.projects.find((item) => item.id === projectId && item.organizationId === user.organizationId);
    if (!project) throw new Error("Report not found");

    const existing = data.submissions.find((item) => item.reportProjectId === projectId && item.sectionId === formId);
    const values: Record<string, string> = {};
    for (const field of schema.fields) {
      if (field.kind === "image") {
        const file = formData.get(field.id);
        if (file instanceof File && file.size > 0) {
          values[field.id] = await saveLocalImageUpload(projectId, formId, field.id, file);
        } else {
          values[field.id] = existing?.values[field.id] ?? "";
        }
      } else {
        values[field.id] = String(formData.get(field.id) ?? "").trim();
      }
    }
    if (formId === "cover-page" && !values.mandatoryDisclosure) {
      values.mandatoryDisclosure = getCoverPageDisclosure(values.subjectState ?? "");
    }

    if (existing) {
      existing.values = values;
      existing.updatedAt = nowIso();
    } else {
      data.submissions.push({ id: newId("submission"), reportProjectId: projectId, sectionId: formId, values, updatedAt: nowIso() });
    }

    const selectedFormIds = new Set(project.selectedFormIds ?? []);
    selectedFormIds.add(formId);
    project.selectedFormIds = [...selectedFormIds];

    ensureProjectFormProgress(data, projectId, project.selectedFormIds);
    const progress = data.formProgress.find((item) => item.reportProjectId === projectId && item.formId === formId);
    if (progress) {
      progress.status = "reviewed";
      progress.includedInFinal = true;
      progress.updatedAt = nowIso();
    }

    project.updatedAt = nowIso();

    if (intent === "save_export") {
      const generated = await createLocalFormPdf(data, project, formId);
      data.generatedPdfs.push(generated);
      project.generatedPdfPath = generated.filePath;
      project.status = "exported";
      project.updatedAt = nowIso();
    }
  });
  revalidatePath(`/reports/${projectId}`);
  revalidatePath(`/reports/${projectId}/forms/${formId}`);
  if (intent === "save_export") redirect(`/api/reports/${projectId}/download`);
  redirect(`/reports/${projectId}/forms/${formId}?saved=1`);
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
