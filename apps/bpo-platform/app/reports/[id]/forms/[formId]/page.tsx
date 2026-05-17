import Link from "next/link";
import { notFound } from "next/navigation";
import { saveLocalFormAction } from "../../../../actions";
import { FieldControl } from "../../../../../components/FieldControl";
import { SubmitButton } from "../../../../../components/SubmitButton";
import { requireUser } from "../../../../../lib/auth";
import { getCatalogForm } from "../../../../../lib/form-catalog";
import { getCoverPageDisclosure } from "../../../../../lib/forms/cover-page";
import { getLocalFormSchema } from "../../../../../lib/local-form-schemas";
import { getProfileFieldPrefill } from "../../../../../lib/profile-prefill";
import { readData } from "../../../../../lib/store";
import type { FormField, PropertyRecord, ReportProject, User } from "../../../../../lib/types";

function getCoverPagePrefill(field: FormField, project: ReportProject, user: User, property?: PropertyRecord) {
  const isArv = project.valuationGoal === "after_repair";
  const bpoTitleByPropertyType: Record<string, string> = {
    vacant_lot: isArv ? "Broker Price Opinion - Residential Vacant Lot w/Proposed Construction" : "Broker Price Opinion - Residential Vacant Lot",
    single_family: isArv ? "Broker Price Opinion - Residential SFR w/ARV" : "Broker Price Opinion - Residential SFR",
    multi_unit: isArv ? "Broker Price Opinion - Residential Multifamily (2-4 Units) w/ARV" : "Broker Price Opinion - Residential Multifamily (2-4 Units)",
    condo_townhome: isArv ? "Broker Price Opinion - Residential SFR w/ARV" : "Broker Price Opinion - Residential SFR",
    mixed_use: isArv ? "Broker Price Opinion - Mixed-Use w/ARV" : "Broker Price Opinion - Mixed-Use"
  };
  const reportTitleByType: Record<string, string> = {
    BPO: bpoTitleByPropertyType[property?.propertyType ?? ""] ?? "Broker Price Opinion - Residential SFR",
    "Property Condition Report": "Property Condition Report (PCR) - Exterior Only",
    "Market Analysis Report": "Market Analysis Report",
    "Valuation Support Report": bpoTitleByPropertyType[property?.propertyType ?? ""] ?? "Broker Price Opinion - Residential SFR",
    "Investor Due Diligence Report": bpoTitleByPropertyType[property?.propertyType ?? ""] ?? "Broker Price Opinion - Residential SFR"
  };
  const clientGoalByIntent: Record<string, string> = {
    seller_due_diligence: "Pre-listing strategy (establishing listing price)",
    buyer_due_diligence: "Purchase due diligence (confirming value before making an offer)",
    investor_analysis: "Investor decision-making (buy/sell/hold analysis)",
    professional_support: "Other",
    default_distressed: "Investor decision-making (buy/sell/hold analysis)",
    general_bpo: "Other"
  };

  const defaults: Record<string, string> = {
    reportTitle: reportTitleByType[project.reportType] ?? project.reportType,
    clientGoal: project.assignmentIntent ? clientGoalByIntent[project.assignmentIntent] ?? "" : "",
    clientGoalOther: project.assignmentIntent === "professional_support" ? "Professional valuation support" : "",
    subjectAddress: property?.address ?? "",
    subjectUnit: property?.unit ?? "",
    subjectCity: property?.city ?? "",
    subjectState: property?.state ?? "",
    subjectZip: property?.zip ?? "",
    mandatoryDisclosure: getCoverPageDisclosure(property?.state ?? ""),
    clientPoc: project.clientName,
    agentName: user.name,
    agentTitle: user.title ?? "",
    agentPhone: user.phone ?? "",
    agentEmail: user.email,
    agentWebsite: user.website ?? "",
    brokerage: user.brokerageName ?? "",
    brokerageAddress: user.brokerageAddress ?? "",
    brokerageCity: user.brokerageCity ?? "",
    brokerageState: user.brokerageState ?? "",
    brokerageZip: user.brokerageZip ?? "",
    brokeragePhone: user.brokeragePhone ?? ""
  };

  return defaults[field.id] ?? "";
}

function getFieldValue(formId: string, field: FormField, project: ReportProject, user: User, property?: PropertyRecord, savedValue?: string) {
  if (savedValue) return savedValue;
  if (formId === "cover-page") {
    return getCoverPagePrefill(field, project, user, property) || getProfileFieldPrefill(field, user);
  }
  return getProfileFieldPrefill(field, user);
}

function getCoverPageSectionTitle(fieldId: string) {
  const sectionStarts: Record<string, string> = {
    reportTitle: "Form Detail",
    clientCompany: "Client Information",
    agentPhoto: "Agent Information",
    brokerageLogo: "Broker Information"
  };

  return sectionStarts[fieldId];
}

export default async function LocalReportFormPage({
  params,
  searchParams
}: {
  params: Promise<{ id: string; formId: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const user = await requireUser();
  const { id, formId } = await params;
  const { saved } = await searchParams;
  const data = await readData();
  const project = data.projects.find((item) => item.id === id && item.organizationId === user.organizationId);
  if (!project) notFound();

  const property = data.properties.find((item) => item.id === project.propertyId);
  const catalogForm = getCatalogForm(formId);
  const schema = getLocalFormSchema(formId);
  if (!catalogForm || !schema) notFound();

  const submission = data.submissions.find((item) => item.reportProjectId === project.id && item.sectionId === formId);
  const progress = data.formProgress.find((item) => item.reportProjectId === project.id && item.formId === formId);
  const address = property
    ? `${property.address}${property.unit ? ` ${property.unit}` : ""}, ${property.city}, ${property.state} ${property.zip}`
    : "Property details not saved";

  return (
    <main className="page-shell">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div>
          <Link href={`/reports/${project.id}`} className="text-sm font-semibold text-blue-700 hover:text-blue-800">Back to report builder</Link>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-blue-700">{schema.category}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">{schema.title}</h1>
          <p className="mt-2 max-w-3xl text-slate-600">{schema.description}</p>
        </div>
        <div className="card p-4 text-sm">
          <p className="font-semibold text-slate-950">{project.title}</p>
          <p className="mt-1 text-slate-600">{address}</p>
          <p className="mt-2 text-xs font-semibold capitalize text-slate-500">Status: {(progress?.status ?? "not_started").replaceAll("_", " ")}</p>
        </div>
      </div>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_320px]">
        <form action={saveLocalFormAction} className="card p-6">
          <input type="hidden" name="projectId" value={project.id} />
          <input type="hidden" name="formId" value={formId} />
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-xl font-bold text-slate-950">Form details</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Complete this form locally. You can save it to the report package or save and immediately download a PDF.
            </p>
          </div>
          {saved ? (
            <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
              Form saved to this report package.
            </div>
          ) : null}
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {schema.fields.map((field) => {
              const sectionTitle = schema.id === "cover-page" ? getCoverPageSectionTitle(field.id) : undefined;
              return (
                <div key={field.id} className={field.kind === "textarea" || sectionTitle ? "md:col-span-2" : undefined}>
                  {sectionTitle ? (
                    <div className={field.id === "reportTitle" ? "mb-5" : "mb-5 mt-3 border-t border-slate-200 pt-6"}>
                      <h3 className="text-base font-bold text-slate-950">{sectionTitle}</h3>
                    </div>
                  ) : null}
                <FieldControl field={field} value={getFieldValue(schema.id, field, project, user, property, submission?.values[field.id])} />
                </div>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <SubmitButton name="intent" value="save_export">Save & download PDF</SubmitButton>
            <SubmitButton name="intent" value="save" variant="secondary">Save only</SubmitButton>
            <Link href={`/reports/${project.id}`} className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
              Return to builder
            </Link>
          </div>
        </form>

        <aside className="space-y-4">
          <div className="card p-5">
            <h2 className="font-bold text-slate-950">Shared report data</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-slate-500">Client</dt>
                <dd className="text-slate-900">{project.clientName}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Report type</dt>
                <dd className="text-slate-900">{project.reportType}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Parcel ID</dt>
                <dd className="text-slate-900">{property?.parcelId || "Not provided"}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Property type</dt>
                <dd className="text-slate-900 capitalize">{property?.propertyType?.replaceAll("_", " ") || "Not provided"}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-lg border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-blue-950">
            This replaces the prior WordPress handoff for this form. The legacy source URL remains in code only as migration reference.
          </div>
        </aside>
      </section>
    </main>
  );
}
