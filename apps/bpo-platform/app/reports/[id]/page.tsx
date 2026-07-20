import Link from "next/link";
import { notFound } from "next/navigation";
import {
  duplicateFormInstanceAction,
  exportReportAction,
  moveFormOrderAction,
  removeFormFromReportAction,
  removeUploadedFormPdfAction,
  saveFormProgressAction,
  updateFormPlanAction,
  updateProjectAction,
  uploadFormPdfAction
} from "../../actions";
import { SubmitButton } from "../../../components/SubmitButton";
import { SidebarClientSection } from "../../../components/SidebarClientSection";
import { requireUser } from "../../../lib/auth";
import { formCatalog, getBaseFormId, getCatalogForm, getLocalFormHref, groupCatalogForms, isFormInstance, normalizeFormInstanceIds } from "../../../lib/form-catalog";
import { reportTypes } from "../../../lib/form-sections";
import { readData } from "../../../lib/store";
import type { ReportFormStatus } from "../../../lib/types";

const assignmentIntentOptions = [
  { value: "general_bpo", label: "General BPO" },
  { value: "seller_due_diligence", label: "Seller due diligence" },
  { value: "buyer_due_diligence", label: "Buyer due diligence" },
  { value: "investor_analysis", label: "Investor analysis" },
  { value: "professional_support", label: "Professional support" },
  { value: "default_distressed", label: "Default / distressed property" }
];

const propertyTypeOptions = [
  { value: "single_family", label: "Single family" },
  { value: "multi_unit", label: "Multi-unit" },
  { value: "condo_townhome", label: "Condo / townhome" },
  { value: "vacant_lot", label: "Vacant lot" },
  { value: "mixed_use", label: "Mixed use" },
  { value: "unknown", label: "Unknown" }
];

const accessOptions = [
  { value: "full_interior", label: "Full interior access" },
  { value: "exterior_only", label: "Exterior only" },
  { value: "drive_by", label: "Drive-by" },
  { value: "restricted", label: "Restricted access" },
  { value: "vacant_land", label: "Vacant land" }
];

const conditionOptions = [
  { value: "market_ready", label: "Market ready" },
  { value: "average", label: "Average" },
  { value: "needs_repairs", label: "Needs repairs" },
  { value: "distressed", label: "Distressed" },
  { value: "after_repair", label: "After-repair condition" },
  { value: "unknown", label: "Unknown" }
];

const valuationGoalOptions = [
  { value: "as_is", label: "As-is value" },
  { value: "after_repair", label: "After-repair value" },
  { value: "rental_income", label: "Rental / income support" },
  { value: "lot_feasibility", label: "Lot feasibility" },
  { value: "reconciliation", label: "Value reconciliation" },
  { value: "support_only", label: "Support-only documentation" }
];

const statusOptions: Array<{ value: ReportFormStatus; label: string }> = [
  { value: "not_started", label: "Not started" },
  { value: "in_progress", label: "In progress" },
  { value: "pdf_uploaded", label: "PDF uploaded" },
  { value: "included", label: "Included in final" }
];

function normalizeStatus(status?: string): ReportFormStatus {
  if (status === "not_started" || status === "in_progress" || status === "pdf_uploaded" || status === "included") return status;
  return status === "reviewed" ? "included" : "not_started";
}

const formPackageCategoryOrder = [
  "Addendums",
  "Property Condition Report (PCR)",
  "Construction, Renovation, & Repair Cost",
  "Market Analysis Report (MAR)",
  "Comparable Market Analysis (CMA)",
  "Broker Price Opinion (BPO)",
  "Final Report"
];

const repeatableFormIds = new Set(["additional-photos", "other-pdf-addendum"]);

export default async function ReportBuilderPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const data = await readData();
  const project = data.projects.find((item) => item.id === id && item.organizationId === user.organizationId);
  if (!project) notFound();
  const property = data.properties.find((item) => item.id === project.propertyId);
  const clients = data.clients
    .filter((client) => client.organizationId === user.organizationId)
    .sort((a, b) => (a.company || a.contact).localeCompare(b.company || b.contact));
  const selectedFormInstanceIds = normalizeFormInstanceIds(project.selectedFormIds ?? data.formProgress.filter((item) => item.reportProjectId === project.id).map((item) => item.formId));
  const selectedBaseFormIds = new Set(selectedFormInstanceIds.map(getBaseFormId));
  const allCatalogGroups = groupCatalogForms(formCatalog);
  const allCatalogGroupEntries = Object.entries(allCatalogGroups).sort(([a], [b]) => {
    const aIndex = formPackageCategoryOrder.indexOf(a);
    const bIndex = formPackageCategoryOrder.indexOf(b);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });
  const progressByForm = new Map(data.formProgress.filter((item) => item.reportProjectId === project.id).map((item) => [item.formId, item]));
  const selectedCatalogForms = selectedFormInstanceIds
    .map((formInstanceId) => ({ formInstanceId, form: getCatalogForm(formInstanceId) }))
    .filter((item): item is { formInstanceId: string; form: NonNullable<ReturnType<typeof getCatalogForm>> } => Boolean(item.form))
    .sort((a, b) => (progressByForm.get(a.formInstanceId)?.displayOrder ?? a.form.sortOrder) - (progressByForm.get(b.formInstanceId)?.displayOrder ?? b.form.sortOrder));
  const uploadedCount = selectedCatalogForms.filter(({ formInstanceId }) => progressByForm.get(formInstanceId)?.uploadedPdfPath).length;
  const completedLocalCount = selectedCatalogForms.filter(({ formInstanceId }) => {
    const status = normalizeStatus(progressByForm.get(formInstanceId)?.status);
    return status === "included" || status === "pdf_uploaded";
  }).length;

  return (
    <main className="page-shell">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div>
          <Link href="/dashboard" className="text-sm font-semibold text-blue-700 hover:text-blue-800">Back to dashboard</Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{project.title}</h1>
          <p className="mt-2 text-slate-600">{project.reportType} for {project.clientName}</p>
        </div>
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[360px_1fr]">
        <aside className="space-y-6">
          <form action={updateProjectAction} className="card space-y-4 p-5">
            <input type="hidden" name="projectId" value={project.id} />
            <h2 className="font-bold text-blue-700">Shared report data</h2>
            <input name="title" defaultValue={project.title} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <select name="reportType" defaultValue={project.reportType} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {reportTypes.map((type) => <option value={type} key={type}>{type}</option>)}
            </select>
            <SidebarClientSection
              initialClients={clients}
              defaultValues={{
                clientId: project.clientId,
                clientCompany: project.clientCompany,
                clientName: project.clientName,
                clientAddress: project.clientAddress,
                clientCity: project.clientCity,
                clientState: project.clientState,
                clientZip: project.clientZip,
                clientPhone: project.clientPhone,
                clientEmail: project.clientEmail
              }}
            />
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-sm font-bold text-blue-700">Subject property</h3>
            </div>
            <input name="address" defaultValue={property?.address} required placeholder="Address" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="unit" defaultValue={property?.unit} placeholder="Unit" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <div className="grid grid-cols-4 gap-2">
              <input name="city" defaultValue={property?.city} required placeholder="City" className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm" />
              <input name="state" defaultValue={property?.state} required placeholder="ST" className="rounded-md border border-slate-300 px-3 py-2 text-sm uppercase" />
              <input name="zip" defaultValue={property?.zip} required placeholder="ZIP" className="rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <input name="parcelId" defaultValue={property?.parcelId} placeholder="Parcel ID" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <select name="propertyType" defaultValue={property?.propertyType ?? "single_family"} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {propertyTypeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-sm font-bold text-blue-700">Guided questions</h3>
              <p className="mt-1 text-xs text-slate-500">These describe why this package was recommended.</p>
            </div>
            <select name="assignmentIntent" defaultValue={project.assignmentIntent ?? "general_bpo"} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {assignmentIntentOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <select name="valuationGoal" defaultValue={project.valuationGoal ?? "as_is"} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {valuationGoalOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <div className="grid gap-2 sm:grid-cols-2">
              <select name="propertyAccess" defaultValue={project.propertyAccess ?? "exterior_only"} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
                {accessOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
              </select>
              <select name="propertyCondition" defaultValue={project.propertyCondition ?? "average"} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
                {conditionOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
              </select>
            </div>
            <SubmitButton variant="secondary">Save shared data</SubmitButton>
          </form>

          <form action={updateFormPlanAction} className="card space-y-4 p-5">
            <input type="hidden" name="projectId" value={project.id} />
            <div>
              <h2 className="font-bold text-blue-700">Form package</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{selectedCatalogForms.length} selected forms · {completedLocalCount} completed locally · {uploadedCount} PDFs uploaded</p>
            </div>
            {allCatalogGroupEntries.map(([category, forms]) => (
              <fieldset key={category} className="space-y-2">
                <legend className="text-xs font-bold uppercase tracking-wide text-blue-700">{category}</legend>
                {forms.map((form) => (
                  <label key={form.id} className="grid gap-3 rounded-md border border-slate-200 p-3 text-sm">
                    <span className="flex items-start gap-3">
                      <input type="checkbox" name="formIds" value={form.id} defaultChecked={selectedBaseFormIds.has(form.id)} className="mt-1" />
                      <span>
                        <span className="block font-semibold text-slate-900">{form.title}</span>
                        <span className="block text-xs text-slate-500">Local app form</span>
                      </span>
                    </span>
                  </label>
                ))}
              </fieldset>
            ))}
            <SubmitButton variant="secondary">Update selected forms</SubmitButton>
          </form>
        </aside>

        <section className="space-y-6">
          <section className="card p-6">
            <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 sm:flex-row">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Guided builder</p>
                <h2 className="mt-1 text-xl font-bold text-blue-700">Recommended form workflow</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Complete each selected form inside the app. You can still attach outside PDFs when needed, but local forms are now the primary workflow.
                </p>
              </div>
              <span className="h-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {completedLocalCount} of {selectedCatalogForms.length} completed
              </span>
            </div>
            <div className="mt-6 grid gap-4">
              {selectedCatalogForms.map(({ formInstanceId, form }, index) => {
                const progress = progressByForm.get(formInstanceId);
                const status = normalizeStatus(progress?.status);
                const canMoveUp = index > 0;
                const canMoveDown = index < selectedCatalogForms.length - 1;
                return (
                  <article key={formInstanceId} className="rounded-lg border border-slate-200 bg-white p-4">
                    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-slate-950 px-2 py-1 text-xs font-semibold text-white">
                            #{progress?.displayOrder ?? form.sortOrder}
                          </span>
                          <h4 className="font-bold text-slate-950">
                            {form.title}{isFormInstance(formInstanceId) ? " copy" : ""}
                          </h4>
                          <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                            {form.category}
                          </span>
                          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold capitalize text-slate-700">
                            {status.replaceAll("_", " ")}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{form.description}</p>
                        {progress?.uploadedPdfName ? (
                          <div className="mt-2 flex flex-wrap items-center gap-2">
                            <p className="text-xs font-semibold text-emerald-700">Uploaded: {progress.uploadedPdfName}</p>
                            <form action={removeUploadedFormPdfAction}>
                              <input type="hidden" name="projectId" value={project.id} />
                              <input type="hidden" name="formId" value={formInstanceId} />
                              <button type="submit" className="inline-flex min-h-7 items-center justify-center rounded-md bg-red-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-red-700">
                                Remove PDF
                              </button>
                            </form>
                          </div>
                        ) : null}
                      </div>
                      <div className="flex shrink-0 flex-wrap gap-2">
                        {canMoveUp ? (
                          <form action={moveFormOrderAction}>
                            <input type="hidden" name="projectId" value={project.id} />
                            <input type="hidden" name="formId" value={formInstanceId} />
                            <input type="hidden" name="direction" value="up" />
                            <SubmitButton variant="secondary">Move up</SubmitButton>
                          </form>
                        ) : null}
                        {canMoveDown ? (
                          <form action={moveFormOrderAction}>
                            <input type="hidden" name="projectId" value={project.id} />
                            <input type="hidden" name="formId" value={formInstanceId} />
                            <input type="hidden" name="direction" value="down" />
                            <SubmitButton variant="secondary">Move down</SubmitButton>
                          </form>
                        ) : null}
                        <Link href={getLocalFormHref(project.id, formInstanceId)} className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
                          Open form
                        </Link>
                        <form action={removeFormFromReportAction}>
                          <input type="hidden" name="projectId" value={project.id} />
                          <input type="hidden" name="formId" value={formInstanceId} />
                          <SubmitButton variant="danger">Remove</SubmitButton>
                        </form>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1fr]">
                      <form action={saveFormProgressAction} className="grid gap-3 rounded-md bg-slate-50 p-3 md:grid-cols-[1fr_96px_auto]">
                        <input type="hidden" name="projectId" value={project.id} />
                        <input type="hidden" name="formId" value={formInstanceId} />
                        <input type="hidden" name="displayOrder" value={progress?.displayOrder ?? form.sortOrder} />
                        <select name="status" defaultValue={status} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
                          {statusOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
                        </select>
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                          <input type="checkbox" name="includedInFinal" defaultChecked={progress?.includedInFinal ?? true} />
                          Include
                        </label>
                        <input name="notes" defaultValue={progress?.notes} placeholder="Notes" className="rounded-md border border-slate-300 px-3 py-2 text-sm md:col-span-2" />
                        <SubmitButton variant="secondary">Save</SubmitButton>
                      </form>
                      <form action={uploadFormPdfAction} className="grid gap-3 rounded-md bg-slate-50 p-3 md:grid-cols-[1fr_auto]">
                        <input type="hidden" name="projectId" value={project.id} />
                        <input type="hidden" name="formId" value={formInstanceId} />
                        <input name="pdf" type="file" accept="application/pdf,.pdf" className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" />
                        <SubmitButton>Upload PDF</SubmitButton>
                      </form>
                      {repeatableFormIds.has(getBaseFormId(formInstanceId)) ? (
                        <form action={duplicateFormInstanceAction} className="rounded-md bg-slate-50 p-3">
                          <input type="hidden" name="projectId" value={project.id} />
                          <input type="hidden" name="formId" value={getBaseFormId(formInstanceId)} />
                          <SubmitButton variant="secondary">Add another {form.title}</SubmitButton>
                        </form>
                      ) : null}
                    </div>
                  </article>
                );
              })}
              {selectedCatalogForms.length === 0 ? (
                <p className="rounded-md bg-amber-50 p-4 text-sm text-amber-900">No forms are selected. Use the Form package panel to select the web forms needed for this report.</p>
              ) : null}
              <article className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-700 px-2 py-1 text-xs font-semibold text-white">
                        Final
                      </span>
                      <h4 className="font-bold text-slate-950">Merge PDFs to final report</h4>
                      <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-emerald-800">
                        Export step
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-emerald-900">
                      When you export, uploaded PDFs and saved local form pages are assembled into one client-ready PDF using the display order above.
                    </p>
                  </div>
                  <form action={exportReportAction} className="shrink-0">
                    <input type="hidden" name="projectId" value={project.id} />
                    <SubmitButton>Export merged PDF</SubmitButton>
                  </form>
                </div>
              </article>
            </div>
          </section>

        </section>
      </section>
    </main>
  );
}
