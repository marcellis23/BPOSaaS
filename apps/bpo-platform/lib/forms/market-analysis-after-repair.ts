import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";
import { submarketAnalysisAsIsForm } from "./submarket-analysis-asis";

const propertyTypeOptions = [
  "Vacant Land (no active use)",
  "Idle / Abandoned (previous use but currently unused)",
  "Single-Family Residence",
  "Residential Condo/Coop",
  "Manufactured / Mobile Home Use",
  "Multifamily Residence (2-4 units)",
  "Apartment Building (5+ units)",
  "Commercial/Mixed-Use",
  "Mixed-Use Occupancy (residential + commercial)",
  "Retail Use (storefront, shopping, etc.)",
  "Office Use",
  "Industrial / Warehouse / Workshop Use",
  "Special Commercial (gas station, auto repair, pad site, etc.)",
  "Other / Not Listed"
];

const arvPropertyTypeOptions = [
  "Same as Current",
  "Single-Family Residence",
  "Residential Condo/Coop",
  "Manufactured / Mobile Home Use",
  "Multifamily Residence (2-4 units)",
  "Apartment Building (5+ units)",
  "Commercial/Mixed-Use",
  "Mixed-Use Occupancy (residential + commercial)",
  "Other / Not Listed"
];

export const marketAnalysisAfterRepairForm: LocalFormDefinition = {
  id: "market-analysis-after-repair",
  title: "After-Repair Market Analysis (MAR)",
  category: "Market Analysis Report (MAR)",
  description: "After-repair value support, projected condition, competitive submarket analysis, pricing segmentation, rental analysis, and target buyer profile.",
  fields: [
    { id: "subjectPropertyOverviewDivider", label: "Subject Property Overview", kind: "divider", placeholder: "Confirm the subject's identity and current as-is state before applying repair assumptions." },
    { id: "address", label: "Property Address", kind: "text", required: true, placeholder: "123 Main St", layoutSpan: 3 },
    { id: "unit", label: "Unit #", kind: "text", placeholder: "Apt/Unit", layoutSpan: 1 },
    { id: "city", label: "City", kind: "text", required: true, placeholder: "Philadelphia", layoutSpan: 2 },
    { id: "state", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "zip", label: "ZIP Code", kind: "text", required: true, placeholder: "19104", layoutSpan: 1 },
    { id: "property_type", label: "Property Type", kind: "select", required: true, options: propertyTypeOptions, layoutSpan: 5 },
    { id: "occupancy", label: "Occupancy Status", kind: "select", required: true, options: ["Owner", "Tenant", "Vacant"], layoutSpan: 5 },
    { id: "overall_condition", label: "Overall Condition (As-Is)", kind: "select", required: true, options: ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged"], layoutSpan: 5 },

    { id: "afterRepairOverviewDivider", label: "After Repair Overview", kind: "divider", placeholder: "Define the projected characteristics of the subject property after all proposed renovations are complete. These assumptions form the basis for the ARV analysis." },
    { id: "arv_property_type", label: "ARV Property Type", kind: "select", required: true, options: arvPropertyTypeOptions, layoutSpan: 2 },
    { id: "arv_condition", label: "ARV Condition Rating", kind: "select", required: true, options: ["Excellent (Like New)", "Good (Updated)", "Average (Market Standard)", "Fair"], layoutSpan: 2 },
    { id: "arv_summary", label: "ARV Brief Summary", kind: "textarea", required: true, placeholder: "Describe the finished product, scope of work, resulting appeal, and key assumptions supporting the after-repair value analysis." },

    ...submarketAnalysisAsIsForm.fields
  ]
};
