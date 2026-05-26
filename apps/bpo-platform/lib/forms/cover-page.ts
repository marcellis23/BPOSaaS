import type { LocalFormDefinition } from "./types";

export const stateOptions = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
  "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY",
  "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV",
  "WI", "WY", "DC", "AS", "GU", "MP", "PR", "VI"
];

export const reportTitleOptions = [
  "Vacant Lot Site Report",
  "Property Condition Report (PCR) - Exterior Only",
  "Property Condition Report (PCR) - Full Site",
  "Market Analysis Report",
  "Comparable Market Analysis - Residential Vacant Lot",
  "Comparable Market Analysis - Residential SFR",
  "Comparable Market Analysis - Residential Multifamily (2-4 Units)",
  "Comparable Market Analysis - Multifamily (5+ Units)",
  "Comparable Market Analysis - Mixed-Use",
  "Comparable Market Analysis - Commercial",
  "Comparable Market Analysis - Residential Vacant Lot w/Proposed Construction",
  "Comparable Market Analysis - Residential SFR w/ARV",
  "Comparable Market Analysis - Residential Multifamily (2-4 Units) w/ARV",
  "Comparable Market Analysis - Multifamily (5+ Units) w/ARV",
  "Comparable Market Analysis - Mixed-Use w/ARV",
  "Comparable Market Analysis - Commercial w/ARV",
  "Broker Price Opinion - Residential Vacant Lot",
  "Broker Price Opinion - Residential SFR",
  "Broker Price Opinion - Residential Multifamily (2-4 Units)",
  "Broker Price Opinion - Multifamily (5+ Units)",
  "Broker Price Opinion - Mixed-Use",
  "Broker Price Opinion - Commercial",
  "Broker Price Opinion - Residential Vacant Lot w/Proposed Construction",
  "Broker Price Opinion - Residential SFR w/ARV",
  "Broker Price Opinion - Residential Multifamily (2-4 Units) w/ARV",
  "Broker Price Opinion - Multifamily (5+ Units) w/ARV",
  "Broker Price Opinion - Mixed-Use w/ARV",
  "Broker Price Opinion - Commercial w/ARV"
];

export const clientGoalOptions = [
  "Purchase due diligence (confirming value before making an offer)",
  "Investor decision-making (buy/sell/hold analysis)",
  "Pre-listing strategy (establishing listing price)",
  "Post-listing review (expired/withdrawn listing)",
  "Portfolio review / Asset management",
  "Property management support (rent adjustment, investor reporting)",
  "Insurance review (coverage adequacy, risk assessment)",
  "Estate or divorce planning (non-court advisory only)",
  "Other"
];

export const federalOverlay =
  "This BPO may not be used as the primary basis for determining the value of property in a federally related mortgage transaction.";

const mandatedByAbbr: Record<string, string> = {
  PA: "This analysis has not been prepared in accordance with the Uniform Standards of Professional Appraisal Practice (USPAP). It is not to be construed as an appraisal and may not be used as such for any purpose.",
  TX: "This represents an estimated sale price for this property. It is not the same as the opinion of value in an appraisal developed by a licensed appraiser under the Uniform Standards of Professional Appraisal Practice.",
  NC: "This opinion is not an appraisal of the market value of the property, and may not be used in lieu of an appraisal. If an appraisal is desired, the services of a licensed or certified appraiser shall be obtained. This opinion may not be used by any party as the primary basis to determine the value of a parcel of or interest in real property for a mortgage loan origination, including first and second mortgages, refinances, or equity lines of credit.",
  SC: "This market analysis or price opinion may not be used for the purposes of obtaining financing in a federally related transaction.",
  NJ: "This CMA or BPO should not be considered the equivalent of an appraisal prepared by a New Jersey licensed or certified real estate appraiser."
};

const stateToFullName: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California", CO: "Colorado", CT: "Connecticut",
  DE: "Delaware", FL: "Florida", GA: "Georgia", HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana",
  IA: "Iowa", KS: "Kansas", KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland", MA: "Massachusetts",
  MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana", NE: "Nebraska",
  NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico", NY: "New York", NC: "North Carolina",
  ND: "North Dakota", OH: "Ohio", OK: "Oklahoma", OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island",
  SC: "South Carolina", SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming", DC: "District of Columbia",
  AS: "American Samoa", GU: "Guam", MP: "Northern Mariana Islands", PR: "Puerto Rico", VI: "U.S. Virgin Islands"
};

export function getCoverPageDisclosure(state: string) {
  const abbr = state.trim().toUpperCase();
  if (!abbr) return "";
  const fullName = stateToFullName[abbr] ?? abbr;
  const base =
    mandatedByAbbr[abbr] ??
    `This Broker Price Opinion/Comparative Market Analysis was completed within the rules and guidelines outlined by the laws of ${fullName}. It is not an appraisal and may not be used in lieu of an appraisal or as the primary basis for a mortgage loan origination.`;
  return `${base}${base.endsWith(".") ? "" : "."} ${federalOverlay}`;
}

export const coverPageForm: LocalFormDefinition = {
  id: "cover-page",
  title: "Cover Page",
  category: "Final Report",
  description: "Client goal, subject property, mandatory BPO/PDC disclosure, front photo, agent identity, and brokerage information.",
  fields: [
    { id: "reportTitle", label: "Report Title", kind: "select", required: true, options: reportTitleOptions },
    { id: "clientGoal", label: "Client's Stated Goal", kind: "select", options: clientGoalOptions },
    { id: "clientGoalOther", label: "Specify Other Client Goal", kind: "text", placeholder: "Use when Client's Stated Goal is Other" },
    { id: "subjectAddress", label: "Subject Address", kind: "text", required: true, placeholder: "123 Main St" },
    { id: "subjectUnit", label: "Subject Unit", kind: "text", placeholder: "Unit/Apt" },
    { id: "subjectCity", label: "Subject City", kind: "text", required: true },
    { id: "subjectState", label: "Subject State", kind: "select", required: true, options: stateOptions },
    { id: "subjectZip", label: "Subject ZIP", kind: "text", required: true },
    { id: "mandatoryDisclosure", label: "Mandatory BPO/PDC Disclosure", kind: "textarea", placeholder: "Auto-filled from subject state when this form is saved." },
    { id: "subjectFrontPhoto", label: "Subject Front Photo", kind: "image", required: true, placeholder: "Upload the street-facing view of the subject property." },
    { id: "clientCompany", label: "Client Company", kind: "text" },
    { id: "clientPoc", label: "Client's Name (POC)", kind: "text" },
    { id: "clientAddress", label: "Client Address", kind: "text" },
    { id: "clientCity", label: "Client City", kind: "text" },
    { id: "clientState", label: "Client State", kind: "select", options: stateOptions },
    { id: "clientZip", label: "Client ZIP Code", kind: "text" },
    { id: "clientPhone", label: "Client Phone", kind: "text" },
    { id: "clientEmail", label: "Client Email", kind: "email" },
    { id: "agentPhoto", label: "Agent Photo", kind: "image" },
    { id: "agentName", label: "Agent Name", kind: "text" },
    { id: "agentTitle", label: "Agent Title", kind: "text", placeholder: "Real Estate Salesperson / Valuation Specialist" },
    { id: "agentPhone", label: "Agent Phone", kind: "text" },
    { id: "agentEmail", label: "Agent Email", kind: "email" },
    { id: "agentWebsite", label: "Agent Website", kind: "text" },
    { id: "brokerageLogo", label: "Brokerage Logo", kind: "image" },
    { id: "brokerage", label: "Brokerage", kind: "text" },
    { id: "brokerageAddress", label: "Brokerage Address", kind: "text" },
    { id: "brokerageCity", label: "Brokerage City", kind: "text" },
    { id: "brokerageState", label: "Brokerage State", kind: "select", options: stateOptions },
    { id: "brokerageZip", label: "Brokerage ZIP Code", kind: "text" },
    { id: "brokeragePhone", label: "Brokerage Phone", kind: "text" }
  ]
};
