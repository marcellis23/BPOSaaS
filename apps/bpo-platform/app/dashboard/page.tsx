import Link from "next/link";
import { updateAgentProfileAction, updateBrokerProfileAction } from "../actions";
import { DeleteProjectForm } from "../../components/DeleteProjectForm";
import { SubmitButton } from "../../components/SubmitButton";
import { requireUser } from "../../lib/auth";
import { stateOptions } from "../../lib/forms/cover-page";
import { readData } from "../../lib/store";
import type { Membership } from "../../lib/types";

function membershipLabel(membership?: Membership) {
  if (!membership) return "Basic";
  if (membership.plan === "owner") return "Owner";
  if (membership.plan === "premium") return "Premium";
  return "Basic";
}

export default async function DashboardPage({ searchParams }: { searchParams: Promise<{ profile?: string; broker?: string; report?: string }> }) {
  const user = await requireUser();
  const data = await readData();
  const { profile, broker, report } = await searchParams;
  const membership = data.memberships.find((item) => item.userId === user.id && item.organizationId === user.organizationId);
  const projects = data.projects
    .filter((project) => project.organizationId === user.organizationId)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
  const generatedPdfCount = data.generatedPdfs.filter((item) => projects.some((project) => project.id === item.reportProjectId)).length;

  return (
    <main className="page-shell">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Member workspace</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Agent dashboard</h1>
          <p className="mt-2 max-w-2xl text-slate-600">Manage your report projects, membership details, agent profile, and brokerage information.</p>
        </div>
        <Link href="/reports/new" className="inline-flex min-h-10 items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">
          New report
        </Link>
      </div>

      {profile || broker || report ? (
        <div className="mt-6 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          {profile ? "Agent information updated." : broker ? "Broker information updated." : "Report deleted."}
        </div>
      ) : null}

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="card overflow-hidden">
            <div className="flex flex-col justify-between gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-bold text-blue-700">Active projects</h2>
                <p className="mt-1 text-sm text-slate-600">Open a report to continue forms, or delete reports you no longer need.</p>
              </div>
              <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{projects.length} reports</span>
            </div>
            {projects.length ? (
              <div className="divide-y divide-slate-200">
                {projects.map((project) => {
                  const property = data.properties.find((item) => item.id === project.propertyId);
                  return (
                    <article key={project.id} className="px-5 py-4 hover:bg-slate-50">
                      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
                        <Link href={`/reports/${project.id}`} className="min-w-0 flex-1">
                          <h3 className="font-semibold text-slate-950">{project.title}</h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {property?.address ?? "Property not found"} · {project.clientName}
                          </p>
                        </Link>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700">
                            {project.status.replaceAll("_", " ")}
                          </span>
                          <DeleteProjectForm projectId={project.id} />
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="px-5 py-12 text-center text-sm text-slate-600">
                No reports yet. Create the first project to begin the MVP workflow.
              </div>
            )}
          </div>
        </div>

        <aside className="space-y-6">
          <section className="card p-5">
            <h2 className="font-bold text-blue-700">Membership</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Type</dt>
                <dd className="font-semibold text-slate-950">{membershipLabel(membership)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Status</dt>
                <dd className="font-semibold capitalize text-slate-950">{membership?.status ?? "trial"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Role</dt>
                <dd className="font-semibold capitalize text-slate-950">{user.role.replace("_", " ")}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-600">Generated PDFs</dt>
                <dd className="font-semibold text-slate-950">{generatedPdfCount}</dd>
              </div>
            </dl>
          </section>

          <form action={updateAgentProfileAction} className="card space-y-4 p-5">
            <div>
              <h2 className="font-bold text-blue-700">Agent information</h2>
              <p className="mt-1 text-sm text-slate-600">Used for your dashboard profile and report cover pages.</p>
            </div>
            <input name="name" defaultValue={user.name} required placeholder="Agent name" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="title" defaultValue={user.title} placeholder="Title" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="email" type="email" defaultValue={user.email} required placeholder="Email" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="phone" defaultValue={user.phone} placeholder="Phone" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="website" defaultValue={user.website} placeholder="Website" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="licenseNumber" defaultValue={user.licenseNumber} placeholder="License number" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <SubmitButton variant="secondary">Update agent info</SubmitButton>
          </form>

          <form action={updateBrokerProfileAction} className="card space-y-4 p-5">
            <div>
              <h2 className="font-bold text-blue-700">Broker information</h2>
              <p className="mt-1 text-sm text-slate-600">Saved brokerage details can prefill report cover pages.</p>
            </div>
            <input name="brokerageName" defaultValue={user.brokerageName} placeholder="Brokerage name" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <input name="brokerageAddress" defaultValue={user.brokerageAddress} placeholder="Brokerage address" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <div className="grid grid-cols-3 gap-2">
              <input name="brokerageCity" defaultValue={user.brokerageCity} placeholder="City" className="rounded-md border border-slate-300 px-3 py-2 text-sm" />
              <select name="brokerageState" defaultValue={user.brokerageState ?? ""} className="rounded-md border border-slate-300 px-3 py-2 text-sm">
                <option value="">State</option>
                {stateOptions.map((state) => <option value={state} key={state}>{state}</option>)}
              </select>
              <input name="brokerageZip" defaultValue={user.brokerageZip} placeholder="ZIP" className="rounded-md border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <input name="brokeragePhone" defaultValue={user.brokeragePhone} placeholder="Brokerage phone" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm" />
            <SubmitButton variant="secondary">Update broker info</SubmitButton>
          </form>
        </aside>
      </section>
    </main>
  );
}
