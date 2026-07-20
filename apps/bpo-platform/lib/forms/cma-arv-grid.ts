import type { FormField } from "../types";
import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

const statusOptions = ["Sold", "Active", "Active Under Contract", "Pending", "Off-Market"];
const propertyTypeOptions = [
  "Single Family - Detached",
  "Single Family - Semidetached",
  "Single Family - Townhome/Rowhome",
  "Residential Condo - Low-Rise",
  "Residential Condo - High Rise",
  "Multifamily - Duplex",
  "Multifamily - Triplex",
  "Multifamily - Quadplex",
  "Multifamily - 5+ Units",
  "Mix-Use Building",
  "Commercial",
  "Vacant Land/Lot"
];
const styleOptions = ["Ranch", "Colonial", "Contemporary", "Traditional", "Bungalow", "Cape Cod", "Split Level", "Other"];
const foundationOptions = ["Slab", "Crawl Space", "Full Basement", "Partial Basement", "Pier & Beam"];
const parkingOptions = ["Attached Garage", "Detached Garage", "Carport", "Driveway", "Street", "None"];
const conditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "Vacant Land"];
const comparisonOptions = ["Superior", "Similar", "Inferior"];
const rentalBracketOptions = ["Premium Rent Range", "Average Rent Range", "Not Rentable"];

function subjectFields(): FormField[] {
  return [
    { id: "arvSubjectAddress", label: "Address", kind: "text", placeholder: "123 Main St", layoutSpan: 3 },
    { id: "arvSubjectCity", label: "City", kind: "text", layoutSpan: 2 },
    { id: "arvSubjectState", label: "State", kind: "select", options: stateOptions, layoutSpan: 1 },
    { id: "arvSubjectZip", label: "Zip", kind: "text", layoutSpan: 1 },
    { id: "arvSubjectProjectedUseCondition", label: "Summary of the Subject's Projected / Proposed Use & Condition", kind: "textarea", placeholder: "Enter notes on projected use, proposed renovations, and after-repair condition." },
    { id: "arvCompSelectionNarrative", label: "Comparable Selection Narrative", kind: "textarea", placeholder: "Explain the search criteria and selection process for after-repair comparables." }
  ];
}

function characteristicFields(prefix: string, labelPrefix: string, isSubject = false): FormField[] {
  return [
    { id: `${prefix}DataSource`, label: `${labelPrefix} Data Source`, kind: "text", placeholder: isSubject ? "N/A" : undefined, layoutSpan: 5 },
    { id: `${prefix}ParcelMls`, label: `${labelPrefix} Parcel ID / MLS #`, kind: "text", placeholder: isSubject ? "N/A" : undefined, layoutSpan: 5 },
    { id: `${prefix}CurrentStatus`, label: `${labelPrefix} Current Status`, kind: "select", options: statusOptions, layoutSpan: 5 },
    { id: `${prefix}CompAddress`, label: `${labelPrefix} Address`, kind: "text", layoutSpan: 3 },
    { id: `${prefix}Proximity`, label: `${labelPrefix} Proximity to Subject`, kind: "text", placeholder: isSubject ? "N/A" : undefined, layoutSpan: 5 },
    { id: `${prefix}OriginalListDate`, label: `${labelPrefix} Original List Date`, kind: "date", layoutSpan: 5 },
    { id: `${prefix}OriginalListPrice`, label: `${labelPrefix} Original List Price ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}SaleDate`, label: `${labelPrefix} Sale Date`, kind: "date", layoutSpan: 5 },
    { id: `${prefix}SalePrice`, label: `${labelPrefix} Sale Price ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Dom`, label: `${labelPrefix} Days on Market`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}ListToSaleRatio`, label: `${labelPrefix} List-to-Sales Ratio`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}Gba`, label: `${labelPrefix} GBA (Sq. Ft.)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Gla`, label: `${labelPrefix} GLA (Sq. Ft.)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Lot`, label: `${labelPrefix} Lot Size`, kind: "text", layoutSpan: 5 },
    { id: `${prefix}LotShape`, label: `${labelPrefix} Lot Shape`, kind: "text", layoutSpan: 5 },
    { id: `${prefix}PropertyType`, label: `${labelPrefix} Property Type`, kind: "select", options: propertyTypeOptions, layoutSpan: 5 },
    { id: `${prefix}Style`, label: `${labelPrefix} Property Style`, kind: "select", options: styleOptions, layoutSpan: 5 },
    { id: `${prefix}Units`, label: `${labelPrefix} Units`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}UnitMix`, label: `${labelPrefix} Unit Mix`, kind: "text", layoutSpan: 5 },
    { id: `${prefix}Rooms`, label: `${labelPrefix} Total Rooms`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Beds`, label: `${labelPrefix} Bedrooms`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}FullBaths`, label: `${labelPrefix} Full Baths`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}HalfBaths`, label: `${labelPrefix} Half Baths`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}YearBuilt`, label: `${labelPrefix} Year Built`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Foundation`, label: `${labelPrefix} Foundation`, kind: "select", options: foundationOptions, layoutSpan: 5 },
    { id: `${prefix}BasementSqft`, label: `${labelPrefix} Basement (Sq. Ft.)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Garage`, label: `${labelPrefix} Garage / Parking`, kind: "select", options: parkingOptions, layoutSpan: 5 },
    { id: `${prefix}ParkingSpaces`, label: `${labelPrefix} Parking Spaces`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Fireplaces`, label: `${labelPrefix} Fireplaces`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Pool`, label: `${labelPrefix} Pool / Spas`, kind: "select", options: ["Yes", "No"], layoutSpan: 5 },
    { id: `${prefix}Utilities`, label: `${labelPrefix} Utility Mix`, kind: "text", layoutSpan: 5 },
    { id: `${prefix}Condition`, label: `${labelPrefix} Condition`, kind: "select", options: conditionOptions, layoutSpan: 5 },
    { id: `${prefix}PriceSqft`, label: `${labelPrefix} Price per Sq Ft ($)`, kind: "text", readOnly: true, layoutSpan: 5 }
  ];
}

function adjustmentFields(prefix: string, labelPrefix: string): FormField[] {
  return [
    { id: `${prefix}AdjConcessions`, label: `${labelPrefix} Sale Concessions ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjFinancing`, label: `${labelPrefix} Financing Concession ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjDate`, label: `${labelPrefix} Date / Time Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjLocation`, label: `${labelPrefix} Location Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjLot`, label: `${labelPrefix} Lot / Land Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjGlaRate`, label: `${labelPrefix} GLA Adjustment Rate ($/sf)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjBeds`, label: `${labelPrefix} Bedrooms Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjBaths`, label: `${labelPrefix} Bathrooms Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjBasement`, label: `${labelPrefix} Basement Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjGarage`, label: `${labelPrefix} Garage Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjPool`, label: `${labelPrefix} Pool Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjCondition`, label: `${labelPrefix} Condition / Quality Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}AdjOther`, label: `${labelPrefix} Other Adjustment ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}RentalBracket`, label: `${labelPrefix} Rental Bracket Range`, kind: "select", options: rentalBracketOptions, layoutSpan: 5 },
    { id: `${prefix}Rent`, label: `${labelPrefix} Estimated / Actual Rent ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}RentPsf`, label: `${labelPrefix} Rent per Sq Ft ($)`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}UnadjustedPpsf`, label: `${labelPrefix} Unadjusted PPSF ($)`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}GlaAdjustment`, label: `${labelPrefix} GLA Adjustment ($)`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}NetAdjustment`, label: `${labelPrefix} Net Adjustment ($)`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}NetAdjustmentPct`, label: `${labelPrefix} Net Adjustment (%)`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}GrossAdjustmentPct`, label: `${labelPrefix} Gross Adjustment (%)`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}AdjustedSalePrice`, label: `${labelPrefix} Adjusted Sale Price`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}OverallComparison`, label: `${labelPrefix} Overall Comparison`, kind: "select", options: comparisonOptions, layoutSpan: 4 },
    { id: `${prefix}AnalysisNotes`, label: `${labelPrefix} Analysis Notes`, kind: "textarea", placeholder: "Why is this comp superior, similar, or inferior?" }
  ];
}

export const cmaArvGridForm: LocalFormDefinition = {
  id: "cma-arv-grid",
  title: "Sold Comparables (After-Repair) Analysis",
  category: "Comparable Market Analysis (CMA)",
  description: "After-repair sold comparable sales grid with concessions, adjustments, market summary metrics, and ARV reconciliation.",
  fields: [
    { id: "arvSubjectIdentificationDivider", label: "Subject Property Identification", kind: "divider", placeholder: "Enter subject address and projected after-repair use/condition." },
    ...subjectFields(),

    { id: "arvSubjectCharacteristicsDivider", label: "Subject Property Characteristics", kind: "divider", placeholder: "Enter projected subject characteristics used for after-repair comparison." },
    ...characteristicFields("arvSubject", "Subject", true),

    { id: "arvComp1Divider", label: "Sold Comp 1", kind: "divider", placeholder: "Enter Sold Comparable 1 details, adjustments, rental data, and analysis." },
    ...characteristicFields("arvComp1", "Comp 1"),
    ...adjustmentFields("arvComp1", "Comp 1"),

    { id: "arvComp2Divider", label: "Sold Comp 2", kind: "divider", placeholder: "Enter Sold Comparable 2 details, adjustments, rental data, and analysis." },
    ...characteristicFields("arvComp2", "Comp 2"),
    ...adjustmentFields("arvComp2", "Comp 2"),

    { id: "arvComp3Divider", label: "Sold Comp 3", kind: "divider", placeholder: "Enter Sold Comparable 3 details, adjustments, rental data, and analysis." },
    ...characteristicFields("arvComp3", "Comp 3"),
    ...adjustmentFields("arvComp3", "Comp 3"),

    { id: "arvMarketDataSummaryDivider", label: "Market Data Summary", kind: "divider", placeholder: "Calculated ranges based on after-repair sold comparable entries." },
    { id: "arvSalePriceRange", label: "Sale Price Range", kind: "text", readOnly: true, layoutSpan: 2 },
    { id: "arvAdjustedPriceRange", label: "Adjusted Price Range", kind: "text", readOnly: true, layoutSpan: 2 },
    { id: "arvGlaRange", label: "GLA Range", kind: "text", readOnly: true, layoutSpan: 2 },
    { id: "arvDomRange", label: "DOM Range", kind: "text", readOnly: true, layoutSpan: 2 },

    { id: "arvSummaryDivider", label: "Sold Comparables (After-Repair) Analysis Summary", kind: "divider", placeholder: "Reconcile after-repair comparable evidence into a probable sale price and projected exposure period." },
    { id: "probableArvSalePrice", label: "Most Probable (After-Repair) Sale Price ($)", kind: "number", required: true, placeholder: "500000", layoutSpan: 2 },
    { id: "arvProjectedDom", label: "Projected DOM", kind: "number", placeholder: "30", layoutSpan: 2 },
    { id: "arvFullSummaryAnalysis", label: "Full Summary Conclusion Analysis", kind: "textarea", required: true, placeholder: "Enter final after-repair value reconciliation and conclusion." }
  ]
};
