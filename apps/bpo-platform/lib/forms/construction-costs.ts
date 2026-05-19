import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

const conditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "Not Applicable"];
const lotStatusOptions = [
  "Residential Lot (Single-Family)",
  "Multifamily Lot (2-4 Units)",
  "Condominium Lot / Pad Site",
  "Planned Unit Development (PUD) Lot",
  "Commercial Lot",
  "Mixed-Use Lot",
  "Industrial Lot",
  "Agricultural / Farm Land",
  "Rural / Vacant Land",
  "Corner Lot",
  "Interior Lot",
  "Cul-de-sac Lot",
  "Flag Lot",
  "Irregular Lot",
  "Waterfront Lot",
  "Improved Lot (utilities present)",
  "Unimproved Lot (raw land)",
  "Buildable Lot",
  "Non-Buildable Lot",
  "Subdividable Lot"
];
const developmentTypeOptions = [
  "Vacant Land (no active use)",
  "Idle / Abandoned (previous use but currently unused)",
  "Single-Family Residence",
  "Residential Condo/Coop",
  "Manufactured / Mobile Home Use",
  "Multifamily Residence (2-4 units)",
  "Small Residential Condo/Coop Development",
  "Apartment Building (5+ units)",
  "Mixed-Use Occupancy (residential + commercial)",
  "Retail Use (storefront, shopping, etc.)",
  "Office Use",
  "Industrial / Warehouse Use",
  "Special Commercial (gas station, auto repair, pad site, etc.)",
  "Other / Restricted"
];
const constructionCategories = [
  "Professional & Administrative (Soft Costs)",
  "Pre-Construction & Site Costs",
  "Core Construction (Hard Costs)",
  "Exterior & Site Development",
  "Post-Construction & Compliance",
  "Financing & Carrying Costs"
];

export const constructionCostsForm: LocalFormDefinition = {
  id: "construction-costs",
  title: "Construction Costs",
  category: "Construction, Renovation, & Repair Cost",
  description: "Lot development construction costs, comparable evidence, current and after-completion values, and feasibility inputs.",
  fields: [
    { id: "generalInfoDivider", label: "General Property Info", kind: "divider", placeholder: "Identify the subject lot for this construction cost estimate." },
    { id: "propertyAddress", label: "Property Address", kind: "text", required: true, placeholder: "123 Main St", layoutSpan: 3 },
    { id: "propertyUnit", label: "Unit #", kind: "text", placeholder: "Apt/Unit", layoutSpan: 1 },
    { id: "propertyCity", label: "City", kind: "text", required: true, layoutSpan: 2 },
    { id: "propertyState", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "propertyZip", label: "ZIP Code", kind: "text", required: true, placeholder: "19104", layoutSpan: 1 },

    { id: "developmentPlanDivider", label: "Development Plan and Site Condition", kind: "divider", placeholder: "Define the current lot status, proposed development type, and intended final condition." },
    { id: "currentCondition", label: "What is the current status of the subject property?", kind: "select", required: true, options: lotStatusOptions },
    { id: "developmentType", label: "What is the proposed development type?", kind: "select", required: true, options: developmentTypeOptions },
    { id: "subjectPropertyCondition", label: "What is the current condition of the subject property?", kind: "select", required: true, options: conditionOptions },
    { id: "proposedDevelopmentCondition", label: "What is the proposed condition of the planned development?", kind: "select", required: true, options: conditionOptions },

    { id: "costDisclaimerDivider", label: "Cost Estimate Disclaimer", kind: "divider", placeholder: "This estimate is for planning purposes only and may change with engineering, bids, permits, and market conditions." },
    { id: "estimateDisclaimer", label: "Cost Estimate Disclaimer Notes", kind: "textarea", placeholder: "Optional notes on scope limitations, assumptions, contractor bid status, or known exclusions." },

    { id: "projectMarketSupportDivider", label: "Project Summary and Market Support", kind: "divider", placeholder: "Summarize the project scope and market support for the proposed plan." },
    { id: "projectSummary", label: "Project Summary (scope & intent)", kind: "textarea", placeholder: "Product type, bedrooms, parking, materials, timeline, construction method, phasing, etc." },
    { id: "marketSupportNarrative", label: "Market Support (narrative)", kind: "textarea", placeholder: "Demand, buyer profile, and how recent sales/listings support pricing for this plan." },

    { id: "costItemsDivider", label: "Residential Construction Cost Estimates", kind: "divider", placeholder: "Group estimated costs by category to establish a comprehensive budget." },
    {
      id: "costItems",
      label: "Construction Cost Items",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Cost Item",
      fields: [
        { id: "description", label: "Cost Item Description", kind: "text", required: true, placeholder: "e.g., Structural Engineer Site Visit Fee" },
        { id: "category", label: "Cost Category", kind: "select", required: true, options: constructionCategories },
        { id: "cost", label: "Est. Cost ($)", kind: "number", required: true, placeholder: "0.00" }
      ]
    },
    { id: "totalCost", label: "Total Estimated Development Cost", kind: "number", required: true, placeholder: "0.00" },

    { id: "currentValueDivider", label: "Estimated Current Value - Comparable Evidence", kind: "divider", placeholder: "Add 1-5 references supporting the subject's current-condition value." },
    {
      id: "currentComps",
      label: "Current Condition Comparable References",
      kind: "repeater",
      addButtonLabel: "Add Current Comp",
      fields: [
        { id: "address", label: "Address / Development Name", kind: "text" },
        { id: "status", label: "Status", kind: "select", options: ["Sold", "Active", "Pending"] },
        { id: "price", label: "Price", kind: "number" },
        { id: "date", label: "Date", kind: "date" },
        { id: "notes", label: "Notes", kind: "textarea", placeholder: "Beds/baths/sf, finish, distance, similarity, condition adjustments." }
      ]
    },
    { id: "estimatedCurrentValue", label: "Estimated Current Value ($)", kind: "number", placeholder: "125000" },
    { id: "marketSources", label: "Data Sources / Notes", kind: "text", placeholder: "Bright MLS, public records, builder bid letters, etc." },
    { id: "estimatedCurrentJustification", label: "Justification Summary", kind: "textarea", placeholder: "Explain how comps support your current-condition value." },

    { id: "afterCompletionDivider", label: "Estimated After Completion Value - Comparable Evidence", kind: "divider", placeholder: "Add 1-5 references supporting after-completion value for the proposed plan." },
    {
      id: "proposedComps",
      label: "Proposed Condition Comparable References",
      kind: "repeater",
      addButtonLabel: "Add Proposed Comp",
      fields: [
        { id: "address", label: "Address / Development Name", kind: "text" },
        { id: "status", label: "Status", kind: "select", options: ["Sold", "Active", "Pending"] },
        { id: "price", label: "Price", kind: "number" },
        { id: "date", label: "Date", kind: "date" },
        { id: "notes", label: "Notes", kind: "textarea", placeholder: "Beds/baths/sf, finish, age, distance, similarity, location/time adjustments." }
      ]
    },
    { id: "estimatedAfterValue", label: "Estimated After Completion Value ($)", kind: "number", placeholder: "375000" },
    { id: "marketSourcesProposed", label: "Data Sources / Notes", kind: "text", placeholder: "Bright MLS, public records, builder bid letters, etc." },
    { id: "estimatedAfterJustification", label: "Justification Summary", kind: "textarea", placeholder: "Explain how comps support your after-completion value." },

    { id: "feasibilityDivider", label: "Feasibility Inputs", kind: "divider", placeholder: "Enter current and after-completion values to model ROI and project contribution." },
    { id: "valueCurrent", label: "Current Lot Value ($)", kind: "number", placeholder: "0.00" },
    { id: "valueAfterRepair", label: "After Completion Value ($)", kind: "number", placeholder: "0.00" },
    { id: "roi", label: "Estimated ROI", kind: "text", placeholder: "0.00%" },
    { id: "grossValueGain", label: "Gross Value Gain", kind: "number", placeholder: "0.00" },
    { id: "netProjectProfit", label: "Net Project Profit", kind: "number", placeholder: "0.00" }
  ]
};
