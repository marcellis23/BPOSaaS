"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { clearUserCookie, requireUser, setUserCookie } from "../lib/auth";
import { reportSections, reportTypes } from "../lib/form-sections";
import { createMergedReportPdf } from "../lib/pdf";
import { newId, nowIso, readData, updateData } from "../lib/store";
import type { ReportType } from "../lib/types";

function requireString(formData: FormData, key: string) {
  const value = String(formData.get(key) ?? "").trim();
  if (!value) throw new Error(`${key} is required`);
  return value;
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
      propertyType: String(formData.get("propertyType") ?? "").trim()
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
      createdAt: now,
      updatedAt: now
    });
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
    project.updatedAt = nowIso();
    if (property) {
      property.address = requireString(formData, "address");
      property.unit = String(formData.get("unit") ?? "").trim();
      property.city = requireString(formData, "city");
      property.state = requireString(formData, "state");
      property.zip = requireString(formData, "zip");
      property.parcelId = String(formData.get("parcelId") ?? "").trim();
      property.propertyType = String(formData.get("propertyType") ?? "").trim();
    }
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
