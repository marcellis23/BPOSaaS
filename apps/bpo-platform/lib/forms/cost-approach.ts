import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

export const costApproachForm: LocalFormDefinition = {
  id: "cost-approach",
  title: "Cost Approach Add-On (Used with CMA)",
  category: "Broker Price Opinion (BPO)",
  description: "Additional cost approach value cross-check using replacement cost, depreciation, and land value.",
  fields: [
    { id: "costApproachNotice", label: "Cost Approach Add-On", kind: "divider", placeholder: "This Cost Approach is provided as an additional valuation method to complement the CMA. It does not replace market-based conclusions." },
    { id: "costSubjectAddress", label: "Subject Property Address", kind: "text", placeholder: "123 Main Street", layoutSpan: 3 },
    { id: "costSubjectUnit", label: "Unit #", kind: "text", layoutSpan: 1 },
    { id: "costSubjectCity", label: "City", kind: "text", placeholder: "Philadelphia", layoutSpan: 2 },
    { id: "costSubjectState", label: "State", kind: "select", options: stateOptions, layoutSpan: 1 },
    { id: "costSubjectZip", label: "Zip Code", kind: "text", placeholder: "19103", layoutSpan: 1 },

    { id: "replacementCostDivider", label: "Replacement Cost Estimation", kind: "divider", placeholder: "Estimate the cost to replace the subject improvements new." },
    { id: "costGla", label: "Gross Living Area (GLA)", kind: "number", required: true, placeholder: "2000", layoutSpan: 5 },
    { id: "costPerSqft", label: "Cost per Sq. Ft. ($)", kind: "number", required: true, placeholder: "150", layoutSpan: 5 },
    { id: "baseReplacementCost", label: "Base Replacement Cost", kind: "text", readOnly: true, placeholder: "$0.00", layoutSpan: 5 },
    { id: "garageCost", label: "Garage Cost ($)", kind: "number", placeholder: "20000", layoutSpan: 5 },
    { id: "deckCost", label: "Porch / Deck Cost ($)", kind: "number", placeholder: "5000", layoutSpan: 5 },
    { id: "basementCost", label: "Basement Cost ($)", kind: "number", placeholder: "15000", layoutSpan: 5 },
    { id: "outbuildingCost", label: "Outbuildings Cost ($)", kind: "number", placeholder: "10000", layoutSpan: 5 },
    { id: "totalReplacementCost", label: "Total Replacement Cost (New)", kind: "text", readOnly: true, placeholder: "$0.00" },

    { id: "depreciationEstimateDivider", label: "Depreciation Estimate", kind: "divider", placeholder: "Estimate depreciation using effective age divided by economic life." },
    { id: "effectiveAge", label: "Effective Age", kind: "number", placeholder: "15", layoutSpan: 5 },
    { id: "economicLife", label: "Economic Life", kind: "select", options: ["40", "50", "60", "70"], layoutSpan: 5 },
    { id: "depreciationPercent", label: "Depreciation %", kind: "text", readOnly: true, placeholder: "0.0%", layoutSpan: 5 },
    { id: "depreciationAdjustment", label: "Depreciation Adj. ($)", kind: "text", readOnly: true, placeholder: "$0.00", layoutSpan: 5 },
    { id: "depreciatedReplacementCost", label: "Depreciated Replacement Cost", kind: "text", readOnly: true, placeholder: "$0.00" },

    { id: "landValueDivider", label: "Land Value", kind: "divider", placeholder: "Enter the estimated land value and source." },
    { id: "landValue", label: "Estimated Land Value ($)", kind: "number", required: true, placeholder: "80000", layoutSpan: 2 },
    { id: "landValueSource", label: "Source of Land Value", kind: "select", options: ["Vacant Land Sale", "Extraction from CMA", "Other"], layoutSpan: 2 },

    { id: "finalCostReconciliationDivider", label: "Final Value Reconciliation", kind: "divider", placeholder: "Compare the cost approach indication against the CMA value." },
    { id: "finalCostValue", label: "Final Cost Approach Value", kind: "text", readOnly: true, placeholder: "$0.00", layoutSpan: 2 },
    { id: "cmaValue", label: "CMA Value (for reference)", kind: "text", placeholder: "$315,000", layoutSpan: 2 },
    { id: "costApproachNarrative", label: "Commentary / Narrative", kind: "textarea", placeholder: "Explanation of cost data sources, depreciation rationale, and land valuation method." },
    { id: "costApproachDisclaimer", label: "Disclaimer", kind: "divider", placeholder: "The Cost Approach is primarily used for insurance, underwriting, or new construction analysis. It may not reflect current market value." }
  ]
};
