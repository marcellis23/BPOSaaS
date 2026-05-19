import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

const propertyTypeOptions = [
  "Vacant Land (no active use)",
  "Idle / Abandoned (previous use but currently unused)",
  "Single-Family Residence",
  "Residential Condo/Coop",
  "Manufactured / Mobile Home Use",
  "Multifamily Residence (2-4 units)",
  "Mixed-Use Occupancy (residential + commercial)",
  "Small Residential Condo/Coop Development",
  "Apartment Building (5+ units)",
  "Retail Use (storefront, shopping, etc.)",
  "Office Use",
  "Industrial / Warehouse / Workshop Use",
  "Special Commercial (gas station, auto repair, pad site, etc.)",
  "Other / Not Listed"
];
const currentConditionOptions = ["Average", "Fair", "Poor", "Damaged"];
const postRepairConditionOptions = ["Excellent", "Good", "Average"];
const repairCategoryOptions = [
  "Professional & Administrative (Soft Costs)",
  "Pre-Construction & Site Costs",
  "Core Construction (Hard Costs)",
  "Exterior & Site Development",
  "Post-Construction & Compliance",
  "Financing & Carrying Costs",
  "Site & Grounds",
  "Exterior Structure & Walls",
  "Roof System",
  "Entry, Steps, & Railings",
  "Windows & Exterior Doors",
  "Garage / Outbuildings",
  "Health, Safety, & Code Issues (Exterior)",
  "Other Exterior Items",
  "Interior Structure (Framing, Subfloors, Supports)",
  "Interior Walls & Ceilings",
  "Flooring Systems",
  "Interior Doors & Trim",
  "Kitchen",
  "Bathrooms (Full / Half)",
  "Bedrooms & Living Spaces",
  "Basement / Lower Level (Finished or Unfinished)",
  "Attic / Upper Level Spaces",
  "Stairs & Railings (Interior)",
  "Fireplaces / Chimneys",
  "Built-Ins & Millwork",
  "Interior Paint & Finishes",
  "Health, Safety, & Code Issues (Interior)",
  "Other Interior Items",
  "Plumbing System",
  "Electrical System",
  "HVAC / Mechanical Systems",
  "Water Heater / Boilers",
  "Insulation & Energy Efficiency",
  "Smart Home / Low-Voltage Systems",
  "Other Mechanical Items",
  "Major Appliances",
  "Plumbing Fixtures",
  "Lighting Fixtures",
  "Other Fixtures / Equipment"
];
const includeInteriorVisible = { fieldId: "includeInteriorRepairs", values: ["Yes"] };

export const repairRenovEstimateForm: LocalFormDefinition = {
  id: "repair-renov-estimate",
  title: "Repair / Renovation Estimate",
  category: "Construction, Renovation, & Repair Cost",
  description: "Exterior and optional interior repair estimate with contributory value and feasibility assessment.",
  fields: [
    { id: "generalInfoDivider", label: "General Property Info", kind: "divider", placeholder: "Identify the subject property for this repair estimate and contributory value assessment." },
    { id: "propertyAddress", label: "Property Address", kind: "text", required: true, placeholder: "123 Main St", layoutSpan: 3 },
    { id: "propertyUnit", label: "Unit #", kind: "text", placeholder: "Apt/Unit", layoutSpan: 1 },
    { id: "propertyCity", label: "City", kind: "text", required: true, layoutSpan: 2 },
    { id: "propertyState", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "propertyZip", label: "ZIP Code", kind: "text", required: true, placeholder: "19104", layoutSpan: 1 },

    { id: "conditionDivider", label: "Property Condition Assessment", kind: "divider", placeholder: "Document current and proposed use/condition so the repair budget can be interpreted correctly." },
    { id: "currentPropertyType", label: "Current property type", kind: "select", required: true, options: propertyTypeOptions },
    { id: "proposedPropertyType", label: "Proposed property type", kind: "select", required: true, options: propertyTypeOptions },
    { id: "currentCondition", label: "Current condition of the subject property", kind: "select", required: true, options: currentConditionOptions },
    { id: "postRepairCondition", label: "Condition rating after recommended repairs", kind: "select", required: true, options: postRepairConditionOptions },

    { id: "marketSupportDivider", label: "Project Repair Summary & Market Support", kind: "divider", placeholder: "Connect the repair plan to neighborhood market expectations and value impact." },
    { id: "projectSummary", label: "Overall Repair Summary (scope & intent)", kind: "textarea", placeholder: "Summarize key issues observed and the intended scope of work." },
    { id: "marketSupportNarrative", label: "Market Support (Condition & Scope Narrative)", kind: "textarea", placeholder: "Explain how current condition compares to nearby homes and how proposed repairs align with market expectations." },
    { id: "scopeNotice", label: "Scope of Assessment Notes", kind: "textarea", placeholder: "Optional notes about visual/non-invasive assessment limits, contractor bids, or scope assumptions." },

    { id: "exteriorRepairsDivider", label: "Exterior Repair Estimates", kind: "divider", placeholder: "Exterior-only repair items observed during inspection." },
    {
      id: "exteriorRepairItems",
      label: "Exterior Repair Items",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Exterior Repair Item",
      fields: [
        { id: "description", label: "Repair Item Description", kind: "text", required: true, placeholder: "e.g., Replace rotted front steps and install new handrail" },
        { id: "category", label: "Repair Category", kind: "select", required: true, options: repairCategoryOptions },
        { id: "cost", label: "Est. Cost ($)", kind: "number", required: true, placeholder: "0.00" }
      ]
    },
    { id: "totalExteriorCost", label: "Total Cost of Estimated Exterior Repairs", kind: "number", placeholder: "0.00" },

    { id: "interiorRepairsDivider", label: "Interior Repair Estimates", kind: "divider", placeholder: "Use when interior access was available and interior repair items should be included." },
    { id: "includeInteriorRepairs", label: "Does this report include an interior repair assessment?", kind: "select", required: true, options: ["Yes", "No"], fullWidth: true },
    {
      id: "interiorRepairItems",
      label: "Interior Repair Items",
      kind: "repeater",
      addButtonLabel: "Add Interior Repair Item",
      visibleWhen: includeInteriorVisible,
      fields: [
        { id: "description", label: "Interior Repair Item Description", kind: "text", required: true, placeholder: "e.g., Refinish hardwood floors, replace kitchen cabinets, repair drywall" },
        { id: "category", label: "Repair Category", kind: "select", required: true, options: repairCategoryOptions },
        { id: "cost", label: "Est. Cost ($)", kind: "number", required: true, placeholder: "0.00" }
      ]
    },
    { id: "totalInteriorCost", label: "Total Cost of Estimated Interior Repairs", kind: "number", placeholder: "0.00", visibleWhen: includeInteriorVisible },

    { id: "totalRepairDivider", label: "Total Repair Cost Summary", kind: "divider", placeholder: "Combined exterior and interior repair estimate used for feasibility and value-impact calculations." },
    { id: "totalCost", label: "Total Cost of Estimated Repairs (Interior & Exterior)", kind: "number", required: true, placeholder: "0.00", fullWidth: true },

    { id: "currentValueDivider", label: "Estimated Current Value - Comparable Evidence", kind: "divider", placeholder: "Establish the before value using current/as-is comparable evidence." },
    { id: "estimatedCurrentValue", label: "Estimated Current Value ($)", kind: "number", placeholder: "125000" },
    { id: "marketSources", label: "Data Sources / Notes", kind: "text", placeholder: "Bright MLS, public records, walkscore.com, contractor bid letters, etc." },
    { id: "estimatedCurrentJustification", label: "Justification Summary", kind: "textarea", placeholder: "Explain how comps support your current-condition value." },

    { id: "afterValueDivider", label: "Estimated After Completion Value - Comparable Evidence", kind: "divider", placeholder: "Establish the after-repair value using target-condition comparable evidence." },
    { id: "estimatedAfterValue", label: "Estimated After Completion Value ($)", kind: "number", placeholder: "375000" },
    { id: "marketSourcesProposed", label: "Data Sources / Notes", kind: "text", placeholder: "Bright MLS, public records, contractor/builder bid letters, etc." },
    { id: "estimatedAfterJustification", label: "Justification Summary", kind: "textarea", placeholder: "Explain how comps support your after-completion value." },

    { id: "feasibilityDivider", label: "Feasibility & Contributory Value Inputs", kind: "divider", placeholder: "Connect total repair cost to current and after-repair values to model value gain, net contributory value, and ROI." },
    { id: "valueCurrent", label: "Current Condition Value ($)", kind: "number", placeholder: "0.00" },
    { id: "valueAfterRepair", label: "After-Repair ARV Estimate ($)", kind: "number", placeholder: "0.00" },
    { id: "roi", label: "Estimated ROI", kind: "text", placeholder: "0.00%" },
    { id: "grossValueGain", label: "Gross Value Gain", kind: "number", placeholder: "0.00" },
    { id: "contributoryValue", label: "Net Contributory Value", kind: "number", placeholder: "0.00" }
  ]
};
