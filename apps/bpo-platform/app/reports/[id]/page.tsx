import Link from "next/link";
import { notFound } from "next/navigation";
import {
  exportReportAction,
  markReadyAction,
  saveFormProgressAction,
  saveSectionAction,
  updateFormPlanAction,
  updateProjectAction,
  updateSectionsAction,
  uploadFormPdfAction
} from "../../actions";
import { FieldControl } from "../../../components/FieldControl";
import { SubmitButton } from "../../../components/SubmitButton";
import { requireUser } from "../../../lib/auth";
import { formCatalog, getLocalFormHref, groupCatalogForms } from "../../../lib/form-catalog";
import { reportSections, reportTypes } from "../../../lib/form-sections";
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
  { value: "reviewed", label: "Reviewed" },
  { value: "included", label: "Included in final" }
];

export default async function ReportBuilderPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const data = await readData();
  const project = data.projects.find((item) => item.id === id && item.organizationId === user.organizationId);
  if (!project) notFound();
  const property = data.properties.find((item) => item.id === project.propertyId);
  const submissions = data.submissions.filter((item) => item.reportProjectId === project.id);
  const selected = new Set(project.selectedSectionIds);
  const selectedFormIds = new Set(project.selectedFormIds ?? data.formProgress.filter((item) => item.reportProjectId === project.id).map((item) => item.formId));
  const selectedCatalogForms = formCatalog.filter((form) => selectedFormIds.has(form.id)).sort((a, b) => a.sortOrder - b.sortOrder);
  const selectedCatalogGroups = groupCatalogForms(selectedCatalogForms);
  const allCatalogGroups = groupCatalogForms(formCatalog);
  const progressByForm = new Map(data.formProgress.filter((item) => item.reportProjectId === project.id).map((item) => [item.formId, item]));
  const uploadedCount = selectedCatalogForms.filter((form) => progressByForm.get(form.id)?.uploadedPdfPath).length;
  const completedLocalCount = selectedCatalogForms.filter((form) => {
    const progress = progressByForm.get(form.id);
    return progress?.status === "reviewed" || progress?.status === "included" || progress?.status === "pdf_uploaded";
  }).length;

  return (
    <main className="page-shell">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div>
          <Link href="/dashboard" className="text-sm font-semibold text-blue-700 hover:text-blue-800">Back to dashboard</Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{project.title}</h1>
          <p className="mt-2 text-slate-600">{project.reportType} for {project.clientName}</p>
        </div>
        <div className="card flex flex-wrap items-center gap-3 p-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700">{project.status.replaceAll("_", " ")}</span>
          {project.generatedPdfPath ? (
            <a href={`/api/reports/${project.id}/download`} className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800">
              Download PDF
            </a>
          ) : null}
        </div>
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[360px_1fr]">
        <aside className="space-y-6">
          <form action={updateProjectAction} className="card space-y-4 p-5">
            <input type="hidden" name="projectId" value={project.id} />
            <h2 className="font-bold text-slate-950">Shared report data</h2>
            <input name="title" defaultValue={project.title} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <select name="reportType" defaultValue={project.reportType} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {reportTypes.map((type) => <option value={type} key={type}>{type}</option>)}
            </select>
            <input name="clientName" defaultValue={project.clientName} required placeholder="Client name" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="address" defaultValue={property?.address} required placeholder="Address" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="unit" defaultValue={property?.unit} placeholder="Unit" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <div className="grid grid-cols-3 gap-2">
              <input name="city" defaultValue={property?.city} required placeholder="City" className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm" />
              <input name="state" defaultValue={property?.state} required placeholder="ST" className="rounded-md border border-slate-300 px-3 py-2 text-sm uppercase" />
              <input name="zip" defaultValue={property?.zip} required placeholder="ZIP" className="rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <input name="parcelId" defaultValue={property?.parcelId} placeholder="Parcel ID" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <select name="propertyType" defaultValue={property?.propertyType ?? "single_family"} required className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {propertyTypeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-sm font-bold text-slate-950">Guided questions</h3>
              <p className="mt-1 text-xs text-slate-500">These describe why this package was recommended.</p>
            </div>
            <select name="assignmentIntent" defaultValue={project.assignmentIntent ?? "general_bpo"} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {assignmentIntentOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <select name="valuationGoal" defaultValue={project.valuationGoal ?? "as_is"} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {valuationGoalOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <select name="propertyAccess" defaultValue={project.propertyAccess ?? "exterior_only"} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {accessOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <select name="propertyCondition" defaultValue={project.propertyCondition ?? "average"} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm">
              {conditionOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
            </select>
            <SubmitButton variant="secondary">Save shared data</SubmitButton>
          </form>

          <form action={updateFormPlanAction} className="card space-y-4 p-5">
            <input type="hidden" name="projectId" value={project.id} />
            <div>
              <h2 className="font-bold text-slate-950">Form package</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{selectedCatalogForms.length} selected forms · {completedLocalCount} completed locally · {uploadedCount} PDFs uploaded</p>
            </div>
            {Object.entries(allCatalogGroups).map(([category, forms]) => (
              <fieldset key={category} className="space-y-2">
                <legend className="text-xs font-bold uppercase tracking-wide text-blue-700">{category}</legend>
                {forms.map((form) => (
                  <label key={form.id} className="flex items-start gap-3 rounded-md border border-slate-200 p-3 text-sm">
                    <input type="checkbox" name="formIds" value={form.id} defaultChecked={selectedFormIds.has(form.id)} className="mt-1" />
                    <span>
                      <span className="block font-semibold text-slate-900">{form.title}</span>
                      <span className="block text-xs text-slate-500">Local app form</span>
                    </span>
                  </label>
                ))}
              </fieldset>
            ))}
            <SubmitButton variant="secondary">Update form package</SubmitButton>
          </form>

          <form action={updateSectionsAction} className="card space-y-3 p-5">
            <input type="hidden" name="projectId" value={project.id} />
            <h2 className="font-bold text-slate-950">Native MVP sections</h2>
            <p className="text-sm leading-6 text-slate-600">Legacy MVP sections remain available while the local form library becomes the primary workflow.</p>
            {reportSections.map((section) => (
              <label key={section.id} className="flex items-start gap-3 rounded-md border border-slate-200 p-3 text-sm">
                <input type="checkbox" name="sectionIds" value={section.id} defaultChecked={selected.has(section.id)} disabled={section.required} className="mt-1" />
                {section.required ? <input type="hidden" name="sectionIds" value={section.id} /> : null}
                <span>
                  <span className="block font-semibold text-slate-900">{section.title}</span>
                  <span className="block text-xs text-slate-500">{section.category}{section.required ? " · required" : ""}</span>
                </span>
              </label>
            ))}
            <SubmitButton variant="secondary">Update sections</SubmitButton>
          </form>

          <div className="card space-y-3 p-5">
            <h2 className="font-bold text-slate-950">Review & export</h2>
            <p className="text-sm leading-6 text-slate-600">Complete local forms, attach any outside PDFs if needed, then export the merged package.</p>
            <form action={markReadyAction}>
              <input type="hidden" name="projectId" value={project.id} />
              <SubmitButton variant="secondary">Mark ready for review</SubmitButton>
            </form>
            <form action={exportReportAction}>
              <input type="hidden" name="projectId" value={project.id} />
              <SubmitButton>Export merged PDF</SubmitButton>
            </form>
          </div>
        </aside>

        <section className="space-y-6">
          <section className="card p-6">
            <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 sm:flex-row">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Guided builder</p>
                <h2 className="mt-1 text-xl font-bold text-slate-950">Recommended form workflow</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Complete each selected form inside the app. You can still attach outside PDFs when needed, but local forms are now the primary workflow.
                </p>
              </div>
              <span className="h-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {completedLocalCount} of {selectedCatalogForms.length} completed
              </span>
            </div>
            <div className="mt-6 space-y-6">
              {Object.entries(selectedCatalogGroups).map(([category, forms]) => (
                <div key={category}>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">{category}</h3>
                  <div className="mt-3 grid gap-4">
                    {forms.map((form) => {
                      const progress = progressByForm.get(form.id);
                      const status = progress?.status ?? "not_started";
                      return (
                        <article key={form.id} className="rounded-lg border border-slate-200 bg-white p-4">
                          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="font-bold text-slate-950">{form.title}</h4>
                                <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                                  Local app form
                                </span>
                                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold capitalize text-slate-700">
                                  {status.replaceAll("_", " ")}
                                </span>
                              </div>
                              <p className="mt-2 text-sm leading-6 text-slate-600">{form.description}</p>
                              {progress?.uploadedPdfName ? (
                                <p className="mt-2 text-xs font-semibold text-emerald-700">Uploaded: {progress.uploadedPdfName}</p>
                              ) : null}
                            </div>
                            <Link href={getLocalFormHref(project.id, form.id)} className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
                              Open form
                            </Link>
                          </div>
                          <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_1fr]">
                            <form action={saveFormProgressAction} className="grid gap-3 rounded-md bg-slate-50 p-3 md:grid-cols-[1fr_96px_auto]">
                              <input type="hidden" name="projectId" value={project.id} />
                              <input type="hidden" name="formId" value={form.id} />
                              <select name="status" defaultValue={status} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
                                {statusOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
                              </select>
                              <input name="displayOrder" defaultValue={progress?.displayOrder ?? form.sortOrder} aria-label="Display order" className="rounded-md border border-slate-300 px-3 py-2 text-sm" />
                              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                <input type="checkbox" name="includedInFinal" defaultChecked={progress?.includedInFinal ?? true} />
                                Include
                              </label>
                              <input name="notes" defaultValue={progress?.notes} placeholder="Notes" className="rounded-md border border-slate-300 px-3 py-2 text-sm md:col-span-2" />
                              <SubmitButton variant="secondary">Save</SubmitButton>
                            </form>
                            <form action={uploadFormPdfAction} className="grid gap-3 rounded-md bg-slate-50 p-3 md:grid-cols-[1fr_auto]">
                              <input type="hidden" name="projectId" value={project.id} />
                              <input type="hidden" name="formId" value={form.id} />
                              <input name="pdf" type="file" accept="application/pdf,.pdf" className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm" />
                              <SubmitButton>Upload PDF</SubmitButton>
                            </form>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              ))}
              {selectedCatalogForms.length === 0 ? (
                <p className="rounded-md bg-amber-50 p-4 text-sm text-amber-900">No forms are selected. Use the Form package panel to select the web forms needed for this report.</p>
              ) : null}
            </div>
          </section>

          {reportSections.filter((section) => selected.has(section.id)).map((section) => {
            const submission = submissions.find((item) => item.sectionId === section.id);
            return (
              <form action={saveSectionAction} key={section.id} className="card p-6">
                <input type="hidden" name="projectId" value={project.id} />
                <input type="hidden" name="sectionId" value={section.id} />
                <div className="flex flex-col justify-between gap-3 border-b border-slate-200 pb-4 sm:flex-row">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{section.category}</p>
                    <h2 className="mt-1 text-xl font-bold text-slate-950">{section.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{section.description}</p>
                  </div>
                  <span className="h-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {submission ? "Saved" : "Not started"}
                  </span>
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {section.fields.map((field) => (
                    <div key={field.id} className={field.kind === "textarea" ? "md:col-span-2" : undefined}>
                      <FieldControl field={field} value={submission?.values[field.id]} />
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <SubmitButton>Save section</SubmitButton>
                </div>
              </form>
            );
          })}
        </section>
      </section>
    </main>
  );
}
