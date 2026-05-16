import { createReportAction } from "../../actions";
import { SubmitButton } from "../../../components/SubmitButton";
import { requireUser } from "../../../lib/auth";
import { reportTypes } from "../../../lib/form-sections";

export default async function NewReportPage() {
  await requireUser();

  return (
    <main className="page-shell">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Create report</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">New report project</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Start with shared property and client data. These fields anchor every report section.</p>
      </div>
      <form action={createReportAction} className="card mt-8 grid gap-5 p-6 md:grid-cols-2">
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-800">Project Title</span>
          <input name="title" required placeholder="123 Main St BPO" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Report Type</span>
          <select name="reportType" required defaultValue="BPO" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {reportTypes.map((type) => (
              <option value={type} key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Client Name</span>
          <input name="clientName" required className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Street Address</span>
          <input name="address" required autoComplete="street-address" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Unit</span>
          <input name="unit" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">City</span>
          <input name="city" required autoComplete="address-level2" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">State</span>
          <input name="state" required maxLength={2} placeholder="PA" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm uppercase outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">ZIP</span>
          <input name="zip" required autoComplete="postal-code" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Parcel ID</span>
          <input name="parcelId" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-800">Property Type</span>
          <input name="propertyType" placeholder="Single family, duplex, vacant lot..." className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100" />
        </label>
        <div className="md:col-span-2">
          <SubmitButton>Create report</SubmitButton>
        </div>
      </form>
    </main>
  );
}
