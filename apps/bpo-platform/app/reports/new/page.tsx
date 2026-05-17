import { createReportAction } from "../../actions";
import { SubmitButton } from "../../../components/SubmitButton";
import { requireUser } from "../../../lib/auth";
import { reportTypes } from "../../../lib/form-sections";

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

export default async function NewReportPage() {
  await requireUser();

  return (
    <main className="page-shell">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Create report</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">New report project</h1>
        <p className="mt-2 max-w-2xl text-slate-600">Start with shared property data and guided assignment questions. The app will recommend a form package after you create the project.</p>
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
        <div className="md:col-span-2 border-t border-slate-200 pt-5">
          <h2 className="text-lg font-bold text-slate-950">Guided report questions</h2>
          <p className="mt-1 text-sm text-slate-600">These choices recommend the right forms. You can adjust the package on the next screen.</p>
        </div>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Assignment Intent</span>
          <select name="assignmentIntent" required defaultValue="general_bpo" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {assignmentIntentOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Valuation Goal</span>
          <select name="valuationGoal" required defaultValue="as_is" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {valuationGoalOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
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
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Property Type</span>
          <select name="propertyType" required defaultValue="single_family" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {propertyTypeOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-medium text-slate-800">Property Access</span>
          <select name="propertyAccess" required defaultValue="exterior_only" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {accessOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm font-medium text-slate-800">Property Condition</span>
          <select name="propertyCondition" required defaultValue="average" className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
            {conditionOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
          </select>
        </label>
        <div className="md:col-span-2">
          <SubmitButton>Create report</SubmitButton>
        </div>
      </form>
    </main>
  );
}
