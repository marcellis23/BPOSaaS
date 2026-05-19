import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

const yesNoOptions = ["Yes", "No"];
const yesNoNaOptions = ["Yes", "No", "N/A"];
const yesNoUnknownOptions = ["Yes", "No", "Unknown"];
const conditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "Not Applicable"];
const useOptions = [
  "Vacant Land (no active use)",
  "Idle / Abandoned (previous use but currently unused)",
  "Single-Family Residence",
  "Residential Condominium",
  "Multifamily Residence (2-4 units)",
  "Apartment Building (5+ units)",
  "Manufactured / Mobile Home Use",
  "Retail Use (storefront, shopping, etc.)",
  "Office Use",
  "Mixed-Use Occupancy (residential + commercial)",
  "Industrial / Warehouse Use",
  "Special Commercial (gas station, auto repair, pad site, etc.)",
  "Other / Restricted",
  "Unknown",
  "N/A"
];
const associationVisible = { fieldId: "assocInCommunity", values: ["Yes"] };
const futureUseVisible = { fieldId: "futureUseAssessed", values: ["Yes"] };

export const pcrSummaryForm: LocalFormDefinition = {
  id: "pcr-summary",
  title: "PCR Summary",
  category: "Property Condition Report (PCR)",
  description: "Client-ready synthesis of current condition, financing likelihood, association risks, future use, feasibility, and final recommendations.",
  fields: [
    { id: "generalInfoDivider", label: "General Property Info", kind: "divider", placeholder: "Confirm the subject property identity for this summary report." },
    { id: "propertyAddress", label: "Property Address", kind: "text", required: true, placeholder: "e.g., 123 Main St", layoutSpan: 3 },
    { id: "propertyUnit", label: "Unit #", kind: "text", placeholder: "e.g., Apt/Unit", layoutSpan: 1 },
    { id: "propertyCity", label: "City", kind: "text", required: true, layoutSpan: 2 },
    { id: "propertyState", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "propertyZip", label: "ZIP Code", kind: "text", required: true, placeholder: "e.g., 19104", layoutSpan: 1 },

    { id: "currentUseDivider", label: "Current Use Assessment", kind: "divider", placeholder: "Establish the subject's current use and physical condition as the foundation for the analysis." },
    { id: "currentUse", label: "What is the current use?", kind: "select", required: true, options: useOptions },
    { id: "subjectPropertyCondition", label: "What is the current condition?", kind: "select", required: true, options: conditionOptions },
    { id: "currentAssessmentRating", label: "What is the current assessment rating?", kind: "select", required: true, options: ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged"] },
    { id: "currentAssessmentExplain", label: "Explain Current Assessment Rating", kind: "textarea", required: true, placeholder: "Explain the why behind your rating." },
    { id: "comparisonSurroundingsRating", label: "How does it compare to surroundings?", kind: "select", required: true, options: ["Superior", "Similar", "Inferior"] },
    { id: "comparisonSurroundingsExplain", label: "Explain Comparison to Surroundings", kind: "textarea", required: true, placeholder: "e.g., Superior due to recent exterior renovation..." },
    { id: "currentUseFitRating", label: "Current use fit within market area?", kind: "select", required: true, options: ["Typical", "Atypical", "Non-Conforming"] },
    { id: "currentUseFitExplain", label: "Explain Current Use Fit", kind: "textarea", required: true, placeholder: "e.g., Typical single-family use in a residential zone..." },

    { id: "financingDivider", label: "Financing Assessment", kind: "divider", placeholder: "Assess the property's condition relative to common lender requirements." },
    { id: "financingType", label: "Most likely financing available?", kind: "select", required: true, options: ["Conventional", "FHA Standard", "FHA 203(k)", "VA", "USDA", "Cash", "Owner/Seller Financing", "Other"] },
    { id: "financingTypeExplain", label: "Financing Explanation", kind: "textarea", placeholder: "Explain the reasoning for the selected financing type." },
    { id: "financingMeetsStandards", label: "Does property meet FHA/lender standards?", kind: "select", required: true, options: yesNoNaOptions },
    { id: "financingDeficienciesExplain", label: "If not, explain deficiencies", kind: "textarea", placeholder: "e.g., Peeling paint, missing handrails..." },

    { id: "associationDivider", label: "Association Financial and Legal Status", kind: "divider", placeholder: "Evaluate association financial health, legal exposure, occupancy mix, and financing limitations." },
    { id: "assocInCommunity", label: "Is the subject property within a Condo, Coop, or HOA community?", kind: "select", required: true, options: yesNoOptions, fullWidth: true },
    { id: "assocOccupancyMix", label: "Occupancy Mix", kind: "select", options: ["Mostly Owner-Occupied", "Mostly Tenant-Occupied", "Mixed Owner/Tenant", "Unknown", "N/A"], visibleWhen: associationVisible },
    { id: "assocSpecialAssessments", label: "Special Assessments", kind: "select", options: yesNoUnknownOptions, visibleWhen: associationVisible },
    { id: "assocLegalIssues", label: "Legal / Management Issues", kind: "select", options: yesNoUnknownOptions, visibleWhen: associationVisible },
    { id: "assocFinancingEligibility", label: "Financial Limitations", kind: "select", options: yesNoUnknownOptions, visibleWhen: associationVisible },
    { id: "assocFinLegalNotes", label: "Association Status Summary", kind: "textarea", placeholder: "Summarize any special assessments, legal/management issues, or financing limitations.", visibleWhen: associationVisible },

    { id: "futureUseToggleDivider", label: "Future Use / Condition Assessment", kind: "divider", placeholder: "Use this when an ARV or future-condition scenario was prepared." },
    { id: "futureUseAssessed", label: "Have you completed a future use or condition assessment?", kind: "select", required: true, options: yesNoOptions, fullWidth: true },

    { id: "proposedUseDivider", label: "Proposed Use Assessment", kind: "divider", placeholder: "Document the planned future use and compare it to typical land use in the surrounding market.", visibleWhen: futureUseVisible },
    { id: "proposedUse", label: "What is the proposed use?", kind: "select", required: true, options: useOptions, visibleWhen: futureUseVisible },
    { id: "conditionAfterRepair", label: "Condition after repair / development?", kind: "select", required: true, options: conditionOptions, visibleWhen: futureUseVisible },
    { id: "marketCommonUse", label: "Most common use of similar land parcels?", kind: "select", required: true, options: useOptions, visibleWhen: futureUseVisible },
    { id: "marketUseConsistent", label: "Consistent with common use?", kind: "select", required: true, options: yesNoOptions, visibleWhen: futureUseVisible },
    { id: "proposedUseSummary", label: "Provide a summary of the Proposed Use", kind: "textarea", placeholder: "Summarize planned use, expected condition, market fit, and relevant assumptions.", visibleWhen: futureUseVisible },

    { id: "financialFeasibilityDivider", label: "Financial Feasibility Assessment", kind: "divider", placeholder: "Combine cost estimate and market values to gauge project viability.", visibleWhen: futureUseVisible },
    { id: "feasTotalCost", label: "Total Estimated Repair / Rehab / Development Cost ($)", kind: "text", required: true, placeholder: "e.g., 85,000", fullWidth: true, visibleWhen: futureUseVisible },
    { id: "feasValueCurrent", label: "Estimated Current Value ($)", kind: "text", required: true, placeholder: "e.g., 150,000", visibleWhen: futureUseVisible },
    { id: "feasValueArv", label: "Estimated After Completion (ARV) Value ($)", kind: "text", required: true, placeholder: "e.g., 225,000", visibleWhen: futureUseVisible },
    { id: "feasGrossGain", label: "Gross Value Gain (ARV - Current)", kind: "text", placeholder: "Calculated or entered value", visibleWhen: futureUseVisible },
    { id: "feasNetProfit", label: "Net Project Profit (Gross Gain - Cost)", kind: "text", placeholder: "Calculated or entered value", visibleWhen: futureUseVisible },
    { id: "feasRoi", label: "Estimated ROI", kind: "text", placeholder: "e.g., 18.5%", visibleWhen: futureUseVisible },
    { id: "feasibilityAssessment", label: "Financial Feasible Assessment", kind: "select", required: true, options: ["Financially Feasible", "Feasibility is Contingent to Specified Conditions", "Not Financially Feasible"], visibleWhen: futureUseVisible },
    { id: "recommendation", label: "Recommended Action", kind: "select", options: ["Proceed", "Proceed with Conditions", "Do Not Proceed"], visibleWhen: futureUseVisible },
    { id: "feasibilitySummary", label: "Feasibility Summary", kind: "textarea", placeholder: "Summarize the financial reasoning.", visibleWhen: futureUseVisible },

    { id: "executiveSummaryDivider", label: "Executive Summary & Client Conclusion", kind: "divider", placeholder: "Pull together key findings into a clear, client-ready conclusion." },
    { id: "propertyConditionSummary", label: "Property Condition Assessment Summary", kind: "textarea", placeholder: "Client-ready summary of current condition, strengths, and key risks." },
    { id: "additionalNotes", label: "Additional Notes / Special Assessment Summary", kind: "textarea", placeholder: "Special assessments, nuanced risk factors, or advisory notes." }
  ]
};
