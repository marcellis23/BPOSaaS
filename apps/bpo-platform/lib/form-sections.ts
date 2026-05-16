import type { ReportSection, ReportType } from "./types";

export const reportTypes: ReportType[] = [
  "BPO",
  "Property Condition Report",
  "Market Analysis Report",
  "Valuation Support Report",
  "Investor Due Diligence Report"
];

export const reportSections: ReportSection[] = [
  {
    id: "cover-page",
    title: "Cover Page",
    category: "Property Identity",
    description: "Report title, client context, property identity, and preparer details.",
    order: 10,
    required: true,
    fields: [
      { id: "reportPurpose", label: "Report Purpose", kind: "textarea", required: true },
      { id: "effectiveDate", label: "Effective Date", kind: "date", required: true },
      { id: "preparedBy", label: "Prepared By", kind: "text", required: true },
      { id: "licenseNumber", label: "License Number", kind: "text" }
    ]
  },
  {
    id: "front-additional-photos",
    title: "Front Photos / Additional Photos",
    category: "Photos & Exhibits",
    description: "Front, street, interior, exterior, and labeled supporting photo notes.",
    order: 20,
    fields: [
      { id: "frontPhotoNotes", label: "Front Photo Notes", kind: "textarea", required: true },
      { id: "streetSceneNotes", label: "Street Scene Notes", kind: "textarea" },
      { id: "additionalPhotoInventory", label: "Additional Photo Inventory", kind: "textarea" },
      { id: "photoExceptions", label: "Missing or Restricted Photos", kind: "textarea" }
    ]
  },
  {
    id: "pcr-exterior",
    title: "PCR Exterior",
    category: "Property Condition Reports",
    description: "Exterior condition, site characteristics, access, safety, and visible defects.",
    order: 30,
    fields: [
      { id: "occupancy", label: "Occupancy", kind: "select", required: true, options: ["Occupied", "Vacant", "Unknown", "Restricted access"] },
      { id: "overallExteriorCondition", label: "Overall Exterior Condition", kind: "select", required: true, options: ["Excellent", "Good", "Average", "Fair", "Poor"] },
      { id: "siteCharacteristics", label: "Site Characteristics", kind: "textarea", required: true },
      { id: "visibleRepairs", label: "Visible Repairs / Deferred Maintenance", kind: "textarea" },
      { id: "safetyConcerns", label: "Safety Concerns", kind: "textarea" }
    ]
  },
  {
    id: "pcr-summary",
    title: "PCR Summary",
    category: "Property Condition Reports",
    description: "Client-ready summary of condition, risk, repairs, and recommended next steps.",
    order: 40,
    fields: [
      { id: "conditionSummary", label: "Condition Summary", kind: "textarea", required: true },
      { id: "repairPriority", label: "Repair Priority", kind: "select", required: true, options: ["Low", "Moderate", "High", "Critical"] },
      { id: "estimatedRepairRange", label: "Estimated Repair Range", kind: "text" },
      { id: "recommendedNextSteps", label: "Recommended Next Steps", kind: "textarea", required: true }
    ]
  },
  {
    id: "current-mar",
    title: "Current Condition MAR",
    category: "Market Analysis Reports",
    description: "Current condition market trends, neighborhood context, supply, demand, and risk.",
    order: 50,
    fields: [
      { id: "neighborhoodBoundaries", label: "Neighborhood Boundaries", kind: "textarea", required: true },
      { id: "marketTrend", label: "Market Trend", kind: "select", required: true, options: ["Increasing", "Stable", "Declining", "Mixed"] },
      { id: "inventoryNotes", label: "Inventory / DOM Notes", kind: "textarea" },
      { id: "currentConditionMarketability", label: "Current Condition Marketability", kind: "textarea", required: true }
    ]
  },
  {
    id: "sold-cma-grid",
    title: "Sold CMA Grid",
    category: "Comparable Market Analysis",
    description: "Sold comparable selection, adjustment notes, and indicated value range.",
    order: 60,
    fields: [
      { id: "compOne", label: "Comparable 1", kind: "textarea", required: true },
      { id: "compTwo", label: "Comparable 2", kind: "textarea" },
      { id: "compThree", label: "Comparable 3", kind: "textarea" },
      { id: "adjustmentRationale", label: "Adjustment Rationale", kind: "textarea", required: true },
      { id: "indicatedValueRange", label: "Indicated Value Range", kind: "text", required: true }
    ]
  },
  {
    id: "sales-reconciliation",
    title: "Sales Comparison Reconciliation",
    category: "Reconciliation",
    description: "Weighted conclusion from comparable evidence and market context.",
    order: 70,
    fields: [
      { id: "primaryComparableWeight", label: "Primary Comparable Weighting", kind: "textarea", required: true },
      { id: "reconciledValue", label: "Reconciled Value", kind: "text", required: true },
      { id: "confidenceLevel", label: "Confidence Level", kind: "select", required: true, options: ["High", "Moderate", "Limited"] },
      { id: "reconciliationNarrative", label: "Reconciliation Narrative", kind: "textarea", required: true }
    ]
  },
  {
    id: "signature-disclosure",
    title: "Signature and Disclosure Page",
    category: "Disclosure",
    description: "Scope limits, non-appraisal disclosure, certification, and signature details.",
    order: 80,
    required: true,
    fields: [
      { id: "scopeDisclosure", label: "Scope Disclosure", kind: "textarea", required: true },
      { id: "notAppraisalDisclosure", label: "Non-Appraisal Disclosure", kind: "textarea", required: true },
      { id: "agentCertification", label: "Agent Certification", kind: "textarea", required: true },
      { id: "signatureName", label: "Signature Name", kind: "text", required: true }
    ]
  },
  {
    id: "pdf-merger",
    title: "PDF Merger",
    category: "Report Assembly",
    description: "Ordered report package assembly notes and final export checklist.",
    order: 90,
    fields: [
      { id: "assemblyOrderNotes", label: "Assembly Order Notes", kind: "textarea" },
      { id: "externalPdfNotes", label: "External PDFs to Attach", kind: "textarea" },
      { id: "finalReviewNotes", label: "Final Review Notes", kind: "textarea" }
    ]
  }
];

export function getSection(id: string) {
  return reportSections.find((section) => section.id === id);
}
