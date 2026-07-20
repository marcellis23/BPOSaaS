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

const conditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged"];

export const residentialValueReconciliationForm: LocalFormDefinition = {
  id: "residential-value-reconciliation",
  title: "Sales Comparison Reconciliation",
  category: "Broker Price Opinion (BPO)",
  description: "Final sales comparison reconciliation with active, as-is, ARV, repair feasibility, and price conclusion support.",
  fields: [
    { id: "subjectOverviewDivider", label: "Subject Property Overview", kind: "divider", placeholder: "Confirm the subject identity, use, occupancy, and condition used for reconciliation." },
    { id: "address", label: "Property Address", kind: "text", required: true, placeholder: "123 Main St", layoutSpan: 3 },
    { id: "unit", label: "Unit #", kind: "text", placeholder: "Apt / Unit", layoutSpan: 1 },
    { id: "city", label: "City", kind: "text", required: true, placeholder: "Philadelphia", layoutSpan: 2 },
    { id: "state", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "zipCode", label: "Zip Code", kind: "text", required: true, placeholder: "19104", layoutSpan: 1 },
    { id: "property_type", label: "Property Type", kind: "select", required: true, options: propertyTypeOptions, layoutSpan: 5 },
    { id: "occupancy", label: "Occupancy Status", kind: "select", required: true, options: ["Owner", "Tenant", "Vacant"], layoutSpan: 5 },
    { id: "overall_condition", label: "Overall Condition", kind: "select", required: true, options: conditionOptions, layoutSpan: 5 },

    { id: "activeListingsDivider", label: "Active Listings Comparison", kind: "divider", placeholder: "Summarize the current active competition and probable asking price." },
    { id: "activeLow", label: "Low Price Range ($)", kind: "number", layoutSpan: 2 },
    { id: "activeHigh", label: "High Price Range ($)", kind: "number", layoutSpan: 2 },
    { id: "activeProbable", label: "Most Probable Asking Price ($)", kind: "number", layoutSpan: 2 },
    { id: "activeJustification", label: "Justification", kind: "textarea", placeholder: "Explain reasoning based on current active competition." },

    { id: "soldCurrentDivider", label: "Sold Listings (Current Condition)", kind: "divider", placeholder: "Summarize sold listings supporting the as-is value conclusion." },
    { id: "soldCurrentLow", label: "Low Price Range ($)", kind: "number", layoutSpan: 2 },
    { id: "soldCurrentHigh", label: "High Price Range ($)", kind: "number", layoutSpan: 2 },
    { id: "soldCurrentProbable", label: "Most Probable Sale Price (As-Is) ($)", kind: "number", required: true, layoutSpan: 2 },
    { id: "soldCurrentJustification", label: "Justification for As-Is Value", kind: "textarea", placeholder: "Factors influencing this valuation in its current state." },

    { id: "soldArvDivider", label: "Sold Listings (After Repair Condition)", kind: "divider", placeholder: "Complete this section when repairs or improvements are proposed." },
    { id: "soldArvLow", label: "Low Price Range (ARV) ($)", kind: "number", layoutSpan: 2 },
    { id: "soldArvHigh", label: "High Price Range (ARV) ($)", kind: "number", layoutSpan: 2 },
    { id: "soldArvProbable", label: "Most Probable Sale Price (ARV) ($)", kind: "number", layoutSpan: 2 },
    { id: "soldArvJustification", label: "Justification for ARV Estimate", kind: "textarea", placeholder: "Explain the premium based on the level of finishes proposed." },

    { id: "repairFeasibilityDivider", label: "Repair Summary & Feasibility", kind: "divider", placeholder: "Document proposed repairs and review the auto-calculated financial impact." },
    { id: "proposedUse", label: "Proposed Use", kind: "select", options: propertyTypeOptions, layoutSpan: 2 },
    { id: "proposedCondition", label: "Proposed Condition Rating", kind: "select", options: conditionOptions, layoutSpan: 2 },
    { id: "repairSummary", label: "Summary of Proposed Repairs", kind: "textarea" },
    { id: "repairCost", label: "Estimated Cost of Repairs ($)", kind: "number", layoutSpan: 2 },
    { id: "reconGrossValueGain", label: "Gross Value Gain", kind: "text", readOnly: true, placeholder: "$0", layoutSpan: 5 },
    { id: "reconNetContributoryValue", label: "Net Contributory Value", kind: "text", readOnly: true, placeholder: "$0", layoutSpan: 5 },
    { id: "reconRoi", label: "Estimated ROI", kind: "text", readOnly: true, placeholder: "0.00%", layoutSpan: 5 },

    { id: "finalReconciliationDivider", label: "Final Reconciliation", kind: "divider", placeholder: "Reconcile active listings, as-is sales, ARV sales, and repair feasibility into a final conclusion." },
    { id: "finalPrice", label: "Final Price Conclusion ($)", kind: "number", required: true, layoutSpan: 2 },
    { id: "finalJustification", label: "Justification of Price Conclusion", kind: "textarea", required: true, placeholder: "Reconcile the findings from active listings, current condition solds, and ARV." },
    { id: "additionalNotes", label: "Additional Notes", kind: "textarea" },
    { id: "summaryAddress", label: "Summary Review - Subject", kind: "text", readOnly: true, placeholder: "N/A", layoutSpan: 5 },
    { id: "summaryAsIs", label: "Summary Review - As-Is Estimate", kind: "text", readOnly: true, placeholder: "$0", layoutSpan: 5 },
    { id: "summaryArv", label: "Summary Review - ARV Estimate", kind: "text", readOnly: true, placeholder: "$0", layoutSpan: 5 },
    { id: "summaryFinal", label: "Summary Review - Price Conclusion", kind: "text", readOnly: true, placeholder: "$0", layoutSpan: 5 }
  ]
};
