import { NewReportForm } from "../../../components/NewReportForm";
import { requireUser } from "../../../lib/auth";
import { readData } from "../../../lib/store";

export default async function NewReportPage() {
  const user = await requireUser();
  const data = await readData();
  const clients = data.clients
    .filter((client) => client.organizationId === user.organizationId)
    .sort((a, b) => (a.company || a.contact).localeCompare(b.company || b.contact));

  return (
    <main className="page-shell">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Create report</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">New report project</h1>
        <p className="mt-2 max-w-2xl text-slate-600 font-normal">Start with shared property data and guided assignment questions. The app will recommend a form package after you create the project.</p>
      </div>
      <NewReportForm initialClients={clients} />
    </main>
  );
}
