import Link from "next/link";
import { notFound } from "next/navigation";
import { saveLocalFormAction } from "../../../../actions";
import { LocalFormFields } from "../../../../../components/LocalFormFields";
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
    clientCompany: project.clientCompany ?? "",
    clientPoc: project.clientName,
    clientAddress: project.clientAddress ?? "",
    clientCity: project.clientCity ?? "",
    clientState: project.clientState ?? "",
    clientZip: project.clientZip ?? "",
    clientPhone: project.clientPhone ?? "",
    clientEmail: project.clientEmail ?? "",
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

function getPropertyFieldPrefill(field: FormField, property?: PropertyRecord) {
  const defaults: Record<string, string> = {
    subjectAddress: property?.address ?? "",
    propertyAddress: property?.address ?? "",
    address: property?.address ?? "",
    soldSubjectAddress: property?.address ?? "",
    arvSubjectAddress: property?.address ?? "",
    costSubjectAddress: property?.address ?? "",
    grmSubjectAddress: property?.address ?? "",
    subjectUnit: property?.unit ?? "",
    propertyUnit: property?.unit ?? "",
    unit: property?.unit ?? "",
    costSubjectUnit: property?.unit ?? "",
    subjectCity: property?.city ?? "",
    propertyCity: property?.city ?? "",
    city: property?.city ?? "",
    soldSubjectCity: property?.city ?? "",
    arvSubjectCity: property?.city ?? "",
    costSubjectCity: property?.city ?? "",
    subjectState: property?.state ?? "",
    propertyState: property?.state ?? "",
    state: property?.state ?? "",
    soldSubjectState: property?.state ?? "",
    arvSubjectState: property?.state ?? "",
    costSubjectState: property?.state ?? "",
    subjectZip: property?.zip ?? "",
    propertyZip: property?.zip ?? "",
    zip: property?.zip ?? "",
    zipCode: property?.zip ?? "",
    soldSubjectZip: property?.zip ?? "",
    arvSubjectZip: property?.zip ?? "",
    costSubjectZip: property?.zip ?? "",
    parcelId: property?.parcelId ?? "",
    propertyType: property?.propertyType ?? "",
    subjectMapId: "S",
    activeComp1MapId: "1",
    activeComp2MapId: "2",
    activeComp3MapId: "3",
    soldComp1MapId: "4",
    soldComp2MapId: "5",
    soldComp3MapId: "6",
    arvComp1MapId: "7",
    arvComp2MapId: "8",
    arvComp3MapId: "9"
  };

  return defaults[field.id] ?? "";
}

function getFieldValue(formId: string, field: FormField, project: ReportProject, user: User, property?: PropertyRecord, savedValue?: string) {
  if (savedValue) return savedValue;
  if (formId === "cover-page") {
    return getCoverPagePrefill(field, project, user, property) || getProfileFieldPrefill(field, user);
  }
  return getPropertyFieldPrefill(field, property) || getProfileFieldPrefill(field, user);
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

  const getRepeaterValue = (fieldId: string) => {
    if (!submission?.values) return "{}";
    const repeaterValues = Object.entries(submission.values).reduce((acc, [key, value]) => {
      if (key.startsWith(fieldId)) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>);
    return JSON.stringify(repeaterValues);
  };

  const fields = schema.fields.map((field) => ({
    field,
    sectionTitle: schema.id === "cover-page" ? getCoverPageSectionTitle(field.id) : undefined,
    value: field.kind === "repeater" ? getRepeaterValue(field.id) : getFieldValue(schema.id, field, project, user, property, submission?.values[field.id])
  }));

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
            <h2 className="text-xl font-bold text-blue-700">Form details</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Complete this form locally. You can save it to the report package or save and immediately download a PDF.
            </p>
          </div>
          {saved ? (
            <div className="mt-5 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
              Form saved to this report package.
            </div>
          ) : null}
          <LocalFormFields fields={fields} />
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
            <h2 className="font-bold text-blue-700">Shared report data</h2>
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
