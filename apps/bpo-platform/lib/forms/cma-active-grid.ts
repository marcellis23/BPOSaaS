import type { FormField } from "../types";
import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

const statusOptions = ["Active", "Active Under Contract", "Pending", "Off-Market"];
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
    { id: "subjectAddress", label: "Address", kind: "text", placeholder: "123 Main St", layoutSpan: 3 },
    { id: "subjectCity", label: "City", kind: "text", layoutSpan: 2 },
    { id: "subjectState", label: "State", kind: "select", options: stateOptions, layoutSpan: 1 },
    { id: "subjectZip", label: "Zip", kind: "text", layoutSpan: 1 },
    { id: "subjectStatus", label: "Sales Status", kind: "select", options: statusOptions, layoutSpan: 5 },
    { id: "subjectLastSaleDate", label: "Last Sales Date", kind: "date", layoutSpan: 5 },
    { id: "subjectLastSalePrice", label: "Last Sales Price ($)", kind: "number", placeholder: "450000", layoutSpan: 5 },
    { id: "subjectActivitySummary", label: "Summary of Subject Property's Market Activity", kind: "textarea", placeholder: "Enter notes on market activity, listing history, price changes, and current status." },
    { id: "compSelectionNarrative", label: "Comparable Selection Narrative", kind: "textarea", placeholder: "Explain the search criteria and selection process for active/pending comparables." }
  ];
}

function characteristicFields(prefix: string, labelPrefix: string): FormField[] {
  return [
    { id: `${prefix}DataSource`, label: `${labelPrefix} Data Source`, kind: "text", layoutSpan: 5 },
    { id: `${prefix}ParcelMls`, label: `${labelPrefix} Parcel ID / MLS #`, kind: "text", layoutSpan: 5 },
    { id: `${prefix}CurrentStatus`, label: `${labelPrefix} Current Status`, kind: "select", options: ["Sold", ...statusOptions], layoutSpan: 5 },
    { id: `${prefix}CompAddress`, label: `${labelPrefix} Address`, kind: "text", layoutSpan: 3 },
    { id: `${prefix}Proximity`, label: `${labelPrefix} Proximity to Subject`, kind: "text", layoutSpan: 5 },
    { id: `${prefix}OriginalListDate`, label: `${labelPrefix} Original List Date`, kind: "date", layoutSpan: 5 },
    { id: `${prefix}OriginalListPrice`, label: `${labelPrefix} Original List Price ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}StatusDate`, label: `${labelPrefix} Current Status Date`, kind: "date", layoutSpan: 5 },
    { id: `${prefix}ListPrice`, label: `${labelPrefix} Current List Price ($)`, kind: "number", layoutSpan: 5 },
    { id: `${prefix}Dom`, label: `${labelPrefix} Days on Market`, kind: "number", layoutSpan: 5 },
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
    { id: `${prefix}AdjustedListPrice`, label: `${labelPrefix} Adjusted List Price`, kind: "text", readOnly: true, layoutSpan: 5 },
    { id: `${prefix}OverallComparison`, label: `${labelPrefix} Overall Comparison`, kind: "select", options: comparisonOptions, layoutSpan: 4 },
    { id: `${prefix}AnalysisNotes`, label: `${labelPrefix} Analysis Notes`, kind: "textarea", placeholder: "Why is this comp superior, similar, or inferior?" }
  ];
}

export const cmaActiveGridForm: LocalFormDefinition = {
  id: "cma-active-grid",
  title: "Active Comparables Analysis",
  category: "Comparable Market Analysis (CMA)",
  description: "Active and pending listings comparison grid with adjustments, market summary metrics, and asking-price reconciliation.",
  fields: [
    { id: "subjectIdentificationDivider", label: "Subject Property Identification", kind: "divider", placeholder: "Enter subject property data and market activity details." },
    ...subjectFields(),

    { id: "subjectCharacteristicsDivider", label: "Subject Property Characteristics", kind: "divider", placeholder: "Enter subject physical and market characteristics used for comparison." },
    ...characteristicFields("subject", "Subject"),

    { id: "activeComp1Divider", label: "Active Comp 1", kind: "divider", placeholder: "Enter Active / Pending Comparable 1 details, adjustments, rental data, and analysis." },
    ...characteristicFields("activeComp1", "Comp 1"),
    ...adjustmentFields("activeComp1", "Comp 1"),

    { id: "activeComp2Divider", label: "Active Comp 2", kind: "divider", placeholder: "Enter Active / Pending Comparable 2 details, adjustments, rental data, and analysis." },
    ...characteristicFields("activeComp2", "Comp 2"),
    ...adjustmentFields("activeComp2", "Comp 2"),

    { id: "activeComp3Divider", label: "Active Comp 3", kind: "divider", placeholder: "Enter Active / Pending Comparable 3 details, adjustments, rental data, and analysis." },
    ...characteristicFields("activeComp3", "Comp 3"),
    ...adjustmentFields("activeComp3", "Comp 3"),

    { id: "marketDataSummaryDivider", label: "Market Data Summary", kind: "divider", placeholder: "Calculated ranges based on active comparable entries." },
    { id: "activeSalePriceRange", label: "Sale Price Range", kind: "text", readOnly: true, layoutSpan: 2 },
    { id: "activeAdjustedPriceRange", label: "Adjusted Price Range", kind: "text", readOnly: true, layoutSpan: 2 },
    { id: "activeGlaRange", label: "GLA Range", kind: "text", readOnly: true, layoutSpan: 2 },
    { id: "activeDomRange", label: "DOM Range", kind: "text", readOnly: true, layoutSpan: 2 },

    { id: "activeSummaryDivider", label: "Active Comparables Analysis Summary", kind: "divider", placeholder: "Reconcile active listing evidence into a probable asking price and projected exposure period." },
    { id: "probableAskingPrice", label: "Most Probable Asking Price ($)", kind: "number", required: true, placeholder: "500000", layoutSpan: 2 },
    { id: "projectedDom", label: "Projected DOM", kind: "number", placeholder: "30", layoutSpan: 2 },
    { id: "fullSummaryAnalysis", label: "Full Summary Conclusion Analysis", kind: "textarea", required: true, placeholder: "Enter final active comparable reconciliation and conclusion." }
  ]
};
