import Link from "next/link";
import { requireUser } from "../../lib/auth";
import { readData } from "../../lib/store";

export default async function DashboardPage() {
  const user = await requireUser();
  const data = await readData();
  const projects = data.projects
    .filter((project) => project.organizationId === user.organizationId)
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

  return (
    <main className="page-shell">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Member workspace</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Report projects</h1>
          <p className="mt-2 max-w-2xl text-slate-600">Create, continue, review, and export BPO and valuation support report packages.</p>
        </div>
        <Link href="/reports/new" className="inline-flex min-h-10 items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">
          New report
        </Link>
      </div>

      <section className="mt-8 grid-dashboard">
        <div className="card overflow-hidden">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-bold text-slate-950">Active projects</h2>
          </div>
          {projects.length ? (
            <div className="divide-y divide-slate-200">
              {projects.map((project) => {
                const property = data.properties.find((item) => item.id === project.propertyId);
                return (
                  <Link href={`/reports/${project.id}`} key={project.id} className="block px-5 py-4 hover:bg-slate-50">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <h3 className="font-semibold text-slate-950">{project.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">
                          {property?.address ?? "Property not found"} · {project.clientName}
                        </p>
                      </div>
                      <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700">
                        {project.status.replaceAll("_", " ")}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="px-5 py-12 text-center text-sm text-slate-600">
              No reports yet. Create the first project to begin the MVP workflow.
            </div>
          )}
        </div>

        <aside className="card p-5">
          <h2 className="font-bold text-slate-950">Membership readiness</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-600">Role</dt>
              <dd className="font-semibold capitalize text-slate-950">{user.role.replace("_", " ")}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-600">Projects</dt>
              <dd className="font-semibold text-slate-950">{projects.length}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-600">Generated PDFs</dt>
              <dd className="font-semibold text-slate-950">{data.generatedPdfs.length}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}
