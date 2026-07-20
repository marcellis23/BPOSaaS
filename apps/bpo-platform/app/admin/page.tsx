import Link from "next/link";
import { requireAdmin } from "../../lib/auth";
import { readData } from "../../lib/store";

export default async function AdminPage() {
  const user = await requireAdmin();
  const data = await readData();
  const members = data.users.filter((item) => item.organizationId === user.organizationId);
  const projects = data.projects.filter((item) => item.organizationId === user.organizationId);

  return (
    <main className="page-shell">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Admin</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">Membership and projects</h1>
        <p className="mt-2 max-w-2xl text-slate-600">MVP admin view for member access, report activity, and generated packages.</p>
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card overflow-hidden">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-bold text-blue-700">Members</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {members.map((member) => {
              const membership = data.memberships.find((item) => item.userId === member.id);
              return (
                <div key={member.id} className="px-5 py-4">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-slate-950">{member.name}</h3>
                      <p className="text-sm text-slate-600">{member.email}</p>
                    </div>
                    <span className="h-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700">
                      {membership?.status ?? "unknown"}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold capitalize text-slate-500">{member.role.replace("_", " ")}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="font-bold text-blue-700">All report projects</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {projects.length ? projects.map((project) => (
              <Link href={`/reports/${project.id}`} key={project.id} className="block px-5 py-4 hover:bg-slate-50">
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-slate-950">{project.title}</h3>
                    <p className="text-sm text-slate-600">{project.reportType} · {project.clientName}</p>
                  </div>
                  <span className="h-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700">
                    {project.status.replaceAll("_", " ")}
                  </span>
                </div>
              </Link>
            )) : (
              <div className="px-5 py-10 text-sm text-slate-600">No projects yet.</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
