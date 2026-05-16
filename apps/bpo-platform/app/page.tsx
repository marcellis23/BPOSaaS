import Link from "next/link";
import { getCurrentUser } from "../lib/auth";

export default async function HomePage() {
  const user = await getCurrentUser();

  return (
    <main className="page-shell">
      <section className="grid gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Forms MVP</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Create BPO and valuation support report packages from one structured workflow.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            A standalone workspace for BPO-focused agents to create property projects, complete report sections, save repeated property data, and export a merged client-ready PDF package.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={user ? "/dashboard" : "/login"} className="rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-800">
              Open workspace
            </Link>
            <Link href="/reports/new" className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
              New report
            </Link>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="text-lg font-bold text-slate-950">MVP workflow</h2>
          <ol className="mt-4 space-y-4 text-sm text-slate-700">
            <li><strong>1. Create project:</strong> select report type and property basics.</li>
            <li><strong>2. Complete sections:</strong> fill structured BPO, PCR, MAR, CMA, and disclosure forms.</li>
            <li><strong>3. Assemble report:</strong> select sections and export a merged PDF package.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
