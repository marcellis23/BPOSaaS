import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

const propertyTypeOptions = ["Triplex", "Quadruplex", "5+ Unit Apartment", "Mixed-Use", "Other"];
const conditionOptions = ["Not Rentable", "Fair", "Average", "Good", "Excellent"];
const occupancyOptions = ["Vacant", "Partially Occupied", "Fully Occupied"];
const unitTypeOptions = ["Studio", "1 Bed / 1 Bath", "2 Bed / 1 Bath", "2 Bed / 2 Bath", "3 Bed / 1 Bath", "Commercial", "Other"];
const unitConditionOptions = ["Poor", "Fair", "Average", "Good", "Excellent", "Gutted/Shell"];
const skipProposedRepairsVisible = { fieldId: "skipProposedRepairs", values: ["", "No"] };
const arvVisible = { fieldId: "skipArvAssessment", values: ["", "No"] };
const arvSkippedVisible = { fieldId: "skipArvAssessment", values: ["Yes"] };

const unitMixFields = [
  { id: "type", label: "Unit Type", kind: "select" as const, options: unitTypeOptions },
  { id: "condition", label: "Condition", kind: "select" as const, options: unitConditionOptions },
  { id: "count", label: "No. of Units", kind: "number" as const, placeholder: "0" },
  { id: "lowRange", label: "Low Range ($)", kind: "number" as const, placeholder: "1000" },
  { id: "highRange", label: "High Range ($)", kind: "number" as const, placeholder: "1500" },
  { id: "medianRent", label: "Median Price ($)", kind: "number" as const, placeholder: "1250" },
  { id: "features", label: "Unit Features", kind: "text" as const, placeholder: "Hardwood floors, new appliances, balcony", fullWidth: true },
  { id: "description", label: "Unit Description", kind: "textarea" as const, placeholder: "Brief details about layout, view, access, and functional appeal." },
  { id: "suggestedRent", label: "Suggested Unit Price / Rent ($)", kind: "number" as const, placeholder: "0.00" }
];

export const multiUnitApartmentForm: LocalFormDefinition = {
  id: "multi-unit-apartment",
  title: "Multi-Unit Apartment Market Assessment",
  category: "Market Analysis Report (MAR)",
  description: "Subject overview, current and after-repair unit mix, condition, rent potential, and income context.",
  fields: [
    { id: "subjectOverviewDivider", label: "Subject Property Overview", kind: "divider", placeholder: "Identify the subject's location, basic characteristics, and current occupancy profile." },
    { id: "address", label: "Property Address", kind: "text", required: true, placeholder: "123 Main St", layoutSpan: 3 },
    { id: "unit", label: "Unit", kind: "text", placeholder: "Apt 1", layoutSpan: 1 },
    { id: "city", label: "City", kind: "text", required: true, layoutSpan: 2 },
    { id: "state", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "zip", label: "Zip Code", kind: "text", required: true, placeholder: "19140", layoutSpan: 1 },
    { id: "property_type", label: "Property Type", kind: "select", required: true, options: propertyTypeOptions, layoutSpan: 5 },
    { id: "overall_condition", label: "Overall Condition", kind: "select", required: true, options: conditionOptions, layoutSpan: 5 },
    { id: "occupancy_status", label: "Subject Occupancy Status", kind: "select", required: true, options: occupancyOptions, layoutSpan: 5 },
    { id: "property_summary", label: "Summary Description of the Subject Property", kind: "textarea", placeholder: "Summarize physical configuration, unit count, condition, occupancy, location, and observed market appeal." },

    { id: "proposedRepairsDivider", label: "Proposed Repairs Summary", kind: "divider", placeholder: "Describe proposed repairs unless no repairs are proposed or a separate repair schedule will be attached." },
    { id: "skipProposedRepairs", label: "Skip Proposed Repairs Summary?", kind: "select", required: true, options: ["No", "Yes"], layoutSpan: 4 },
    { id: "proposed_repairs_summary", label: "Summary Description of Proposed Repairs", kind: "textarea", placeholder: "Describe proposed repairs, alterations, development, or improvements.", visibleWhen: skipProposedRepairsVisible },

    { id: "marketNarrativeDivider", label: "Subject Property & Market Summary", kind: "divider", placeholder: "Optional narrative fields used to frame the PDF assessment and connect rent conclusions to the broader market." },
    { id: "market_area_summary", label: "Market Area Summary", kind: "textarea", placeholder: "Summarize neighborhood rental demand, location, transportation, employment access, and competing apartment inventory." },
    { id: "unit_mix_summary", label: "Unit Mix Overview", kind: "textarea", placeholder: "Explain the subject's unit mix, tenant appeal, rent roll context, and market positioning." },
    { id: "current_condition_summary", label: "Current Condition Narrative", kind: "textarea", placeholder: "Explain current condition, rentability, and any condition-related rent limitations." },

    { id: "currentUnitMixDivider", label: "Subject Property Unit Mix & Condition (Current)", kind: "divider", placeholder: "Document the subject's current unit configuration, condition, rent ranges, features, and suggested rent levels." },
    {
      id: "currentUnits",
      label: "Current Unit Types",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Unit Type (Current)",
      fields: unitMixFields
    },
    { id: "totalCurrentRent", label: "Total Estimated Rent (Current)", kind: "text", placeholder: "$0.00", readOnly: true },

    { id: "arvUnitMixDivider", label: "Subject Property After Repair Unit Mix & Rent Potential", kind: "divider", placeholder: "Outline the projected unit mix and stabilized market rents after repairs." },
    { id: "skipArvAssessment", label: "Skip ARV Assessment?", kind: "select", required: true, options: ["No", "Yes"], layoutSpan: 4 },
    { id: "skip_arv_reason", label: "Please Explain Why Skipped", kind: "textarea", placeholder: "ARV assessment not required, insufficient data, or outside assignment scope.", visibleWhen: arvSkippedVisible },
    { id: "arv_assessment_summary", label: "ARV Assessment Narrative", kind: "textarea", placeholder: "Summarize projected rentability, stabilized appeal, and any post-repair unit mix assumptions.", visibleWhen: arvVisible },
    {
      id: "arvUnits",
      label: "After Repair Unit Types",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Unit Type (After Repair)",
      fields: unitMixFields,
      visibleWhen: arvVisible
    },
    { id: "totalArvRent", label: "Total Estimated Rent (After Repair)", kind: "text", placeholder: "$0.00", readOnly: true, visibleWhen: arvVisible },

    { id: "rentSummaryDivider", label: "Rent Summary & Notes", kind: "divider", placeholder: "Summarize total current rent, stabilized after-repair rent, and analyst conclusions." },
    { id: "rent_summary_notes", label: "Analyst Rent Summary Notes", kind: "textarea", placeholder: "Explain rent conclusions, rent roll limitations, vacancy assumptions, lease quality, and market rent support." }
  ]
};
