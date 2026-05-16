import Link from "next/link";
import { notFound } from "next/navigation";
import { exportReportAction, markReadyAction, saveSectionAction, updateProjectAction, updateSectionsAction } from "../../actions";
import { FieldControl } from "../../../components/FieldControl";
import { SubmitButton } from "../../../components/SubmitButton";
import { requireUser } from "../../../lib/auth";
import { reportSections, reportTypes } from "../../../lib/form-sections";
import { readData } from "../../../lib/store";

export default async function ReportBuilderPage({ params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const data = await readData();
  const project = data.projects.find((item) => item.id === id && item.organizationId === user.organizationId);
  if (!project) notFound();
  const property = data.properties.find((item) => item.id === project.propertyId);
  const submissions = data.submissions.filter((item) => item.reportProjectId === project.id);
  const selected = new Set(project.selectedSectionIds);

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
            <input name="propertyType" defaultValue={property?.propertyType} placeholder="Property type" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <SubmitButton variant="secondary">Save shared data</SubmitButton>
          </form>

          <form action={updateSectionsAction} className="card space-y-3 p-5">
            <input type="hidden" name="projectId" value={project.id} />
            <h2 className="font-bold text-slate-950">Report sections</h2>
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
            <p className="text-sm leading-6 text-slate-600">Mark ready when your selected forms are complete, then export a server-generated merged PDF.</p>
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
