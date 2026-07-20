import type { FormField } from "../types";
import type { LocalFormDefinition } from "./types";

const propertyTypeOptions = ["SFH", "Duplex", "Triplex", "Quadplex", "5+ Units", "Mixed-Use"];

const unitMixFields: FormField[] = [
  { id: "studioUnits", label: "Studios", kind: "number", layoutSpan: 5 },
  { id: "oneBedroomUnits", label: "1BR", kind: "number", layoutSpan: 5 },
  { id: "twoBedroomUnits", label: "2BR", kind: "number", layoutSpan: 5 },
  { id: "threeBedroomUnits", label: "3BR", kind: "number", layoutSpan: 5 },
  { id: "fourPlusBedroomUnits", label: "4BR+", kind: "number", layoutSpan: 5 },
  { id: "otherUnits", label: "Other Units", kind: "number", layoutSpan: 5 }
];

function compFields(priceFieldId: string, priceLabel: string): FormField[] {
  return [
    { id: "propertyType", label: "Property Type", kind: "select", options: propertyTypeOptions, layoutSpan: 5 },
    { id: "address", label: "Address / MLS #", kind: "text", placeholder: "MLS # or property address", layoutSpan: 5 },
    { id: priceFieldId, label: `${priceLabel} ($)`, kind: "number", placeholder: "500000", layoutSpan: 5 },
    ...unitMixFields,
    { id: "totalUnits", label: "Total Units", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "monthlyRent", label: "Monthly Rent ($)", kind: "number", placeholder: "2500", layoutSpan: 5 },
    { id: "averageRentPerUnit", label: "Avg. Rent / Unit", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "annualRent", label: "Gross Annual Rent ($)", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "grm", label: "Calculated GRM", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "notes", label: "Notes", kind: "textarea", placeholder: "Document condition, lease assumptions, rent support, or comp limitations." }
  ];
}

export const grossRentMultiplierForm: LocalFormDefinition = {
  id: "gross-rent-multiplier",
  title: "Gross Rent Multiplier (GRM) Analysis",
  category: "Broker Price Opinion (BPO)",
  description: "Income-producing property GRM analysis with active and sold rental comps, calculated GRM range, and value reconciliation.",
  fields: [
    { id: "grmSubjectDivider", label: "Subject Property Rental Information", kind: "divider", placeholder: "Enter subject rental assumptions used for the GRM approach." },
    { id: "grmSubjectAddress", label: "Property Address / ID", kind: "text", placeholder: "123 Main St, Anytown, ST 90210", layoutSpan: 3 },
    { id: "grmSubjectType", label: "Property Type", kind: "select", options: propertyTypeOptions, layoutSpan: 5 },
    { id: "grmSubjectMonthlyRent", label: "Estimated Monthly Market Rent ($)", kind: "number", required: true, placeholder: "3000", layoutSpan: 5 },
    { id: "grmSubjectAnnualRent", label: "Gross Annual Rent (Calculated)", kind: "text", readOnly: true, placeholder: "$0.00", layoutSpan: 5 },

    { id: "grmSubjectUnitMixDivider", label: "Subject Unit Mix", kind: "divider", placeholder: "Optional unit mix support for income-producing subject properties." },
    { id: "grmSubjectStudioUnits", label: "Studios", kind: "number", layoutSpan: 5 },
    { id: "grmSubjectOneBedroomUnits", label: "1BR", kind: "number", layoutSpan: 5 },
    { id: "grmSubjectTwoBedroomUnits", label: "2BR", kind: "number", layoutSpan: 5 },
    { id: "grmSubjectThreeBedroomUnits", label: "3BR", kind: "number", layoutSpan: 5 },
    { id: "grmSubjectFourPlusBedroomUnits", label: "4BR+", kind: "number", layoutSpan: 5 },
    { id: "grmSubjectOtherUnits", label: "Other Units", kind: "number", layoutSpan: 5 },
    { id: "grmSubjectTotalUnits", label: "Total Units", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "grmSubjectAverageRentPerUnit", label: "Avg. Rent / Unit", kind: "text", readOnly: true, layoutSpan: 5 },

    {
      id: "grmActiveComps",
      label: "Active/Pending Comparables",
      kind: "repeater",
      minItems: 3,
      maxItems: 6,
      addButtonLabel: "Add Active/Pending Comp",
      placeholder: "Enter at least 3 active or pending income/rental comparables.",
      fields: compFields("listingPrice", "Listing Price")
    },
    {
      id: "grmSoldComps",
      label: "Sold Comparables",
      kind: "repeater",
      minItems: 3,
      maxItems: 6,
      addButtonLabel: "Add Sold Comp",
      placeholder: "Enter at least 3 sold income/rental comparables.",
      fields: compFields("salePrice", "Sale Price")
    },

    { id: "grmMarketRangeDivider", label: "Market GRM Range", kind: "divider", placeholder: "Calculated from active/pending and sold comparable GRMs." },
    { id: "grmLow", label: "Lowest GRM (from comps)", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "grmHigh", label: "Highest GRM (from comps)", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "grmMedianEstimate", label: "Typical / Median GRM (Your Estimate)", kind: "number", placeholder: "12.5", layoutSpan: 5 },
    { id: "grmNarrative", label: "Narrative (Justification for GRM Range)", kind: "textarea", placeholder: "Explain why this range is appropriate for the subject property's market." },

    { id: "grmValueEstimateDivider", label: "Subject Value Estimate (GRM Approach)", kind: "divider", placeholder: "Calculated by applying the market GRM range to the subject gross annual rent." },
    { id: "grmValueSubjectAnnual", label: "Subject Gross Annual Rent", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "grmValueLow", label: "Value Estimate (Low GRM)", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "grmValueHigh", label: "Value Estimate (High GRM)", kind: "text", readOnly: true, layoutSpan: 5 },
    { id: "grmReconciledValue", label: "Reconciled GRM Value ($)", kind: "number", required: true, placeholder: "450000", layoutSpan: 5 },

    { id: "grmSummaryDivider", label: "Summary & Reconciliation", kind: "divider", placeholder: "Reconcile the GRM value indication with the broader sales comparison analysis." },
    { id: "grmVsCma", label: "GRM Value vs. Sales Comparison (CMA) Value", kind: "textarea", placeholder: "Compare the value derived from the GRM approach with a traditional sales comparison approach." },
    { id: "grmMarketConditions", label: "Commentary on Investor Demand, Rent Strength, and Vacancy Risk", kind: "textarea", placeholder: "Discuss market trends for rental properties in the area." },
    { id: "grmFinalConclusion", label: "Final Reconciled Conclusion", kind: "textarea", required: true, placeholder: "Provide a final GRM value conclusion." }
  ]
};
