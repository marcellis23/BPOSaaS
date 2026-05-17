import { formCatalog, getCatalogForm } from "./form-catalog";
import type { FormField, ReportSection } from "./types";

type LocalFormDefinition = Omit<ReportSection, "order" | "required">;

const standardNotes: FormField[] = [
  { id: "summary", label: "Summary Narrative", kind: "textarea", required: true },
  { id: "supportingDetails", label: "Supporting Details", kind: "textarea" },
  { id: "agentConclusion", label: "Agent Conclusion", kind: "textarea", required: true }
];

const schemas: Record<string, FormField[]> = {
  "cover-page": [
    { id: "reportPurpose", label: "Report Purpose", kind: "textarea", required: true },
    { id: "effectiveDate", label: "Effective Date", kind: "date", required: true },
    { id: "inspectionType", label: "Inspection Type", kind: "select", required: true, options: ["Interior and exterior", "Exterior only", "Drive-by", "Desktop review"] },
    { id: "preparedBy", label: "Prepared By", kind: "text", required: true },
    { id: "licenseNumber", label: "License Number", kind: "text" }
  ],
  "front-photos": [
    { id: "frontPhotoDescription", label: "Front Photo Description", kind: "textarea", required: true },
    { id: "streetSceneDescription", label: "Street Scene Description", kind: "textarea" },
    { id: "photoDate", label: "Photo Date", kind: "date" },
    { id: "photoExceptions", label: "Missing or Restricted Photos", kind: "textarea" }
  ],
  "additional-photos": [
    { id: "photoInventory", label: "Photo Inventory", kind: "textarea", required: true },
    { id: "conditionObserved", label: "Condition Observed in Photos", kind: "textarea", required: true },
    { id: "repairPhotoNotes", label: "Repair Photo Notes", kind: "textarea" },
    { id: "photoLimitations", label: "Photo Limitations", kind: "textarea" }
  ],
  "floorplans-sketches": [
    { id: "layoutSummary", label: "Layout Summary", kind: "textarea", required: true },
    { id: "roomCountNotes", label: "Room Count / Dimensions Notes", kind: "textarea" },
    { id: "functionalUtility", label: "Functional Utility Notes", kind: "textarea" },
    { id: "sketchLimitations", label: "Sketch Limitations", kind: "textarea" }
  ],
  "aerial-views": [
    { id: "mapSource", label: "Map / Aerial Source", kind: "text" },
    { id: "siteOrientation", label: "Site Orientation", kind: "textarea", required: true },
    { id: "nearbyInfluences", label: "Nearby Influences", kind: "textarea" },
    { id: "accessAndVisibility", label: "Access and Visibility", kind: "textarea" }
  ],
  "subject-comps": [
    { id: "compPhotoInventory", label: "Comparable Photo Inventory", kind: "textarea", required: true },
    { id: "compConditionNotes", label: "Comparable Condition Notes", kind: "textarea" },
    { id: "compLocationNotes", label: "Comparable Location Notes", kind: "textarea" }
  ],
  "vacant-land-site-data": [
    { id: "zoning", label: "Zoning", kind: "text" },
    { id: "frontageDepth", label: "Frontage / Depth", kind: "text" },
    { id: "utilities", label: "Utilities", kind: "textarea", required: true },
    { id: "topography", label: "Topography", kind: "textarea" },
    { id: "easementsAccess", label: "Easements / Access", kind: "textarea" }
  ],
  "pcr-exterior": [
    { id: "occupancy", label: "Occupancy", kind: "select", required: true, options: ["Occupied", "Vacant", "Unknown", "Restricted access"] },
    { id: "overallExteriorCondition", label: "Overall Exterior Condition", kind: "select", required: true, options: ["Excellent", "Good", "Average", "Fair", "Poor"] },
    { id: "siteCharacteristics", label: "Site Characteristics", kind: "textarea", required: true },
    { id: "visibleRepairs", label: "Visible Repairs / Deferred Maintenance", kind: "textarea" },
    { id: "safetyConcerns", label: "Safety Concerns", kind: "textarea" }
  ],
  "pcr-interior": [
    { id: "roomCondition", label: "Room Condition Summary", kind: "textarea", required: true },
    { id: "kitchenBathCondition", label: "Kitchen / Bath Condition", kind: "textarea" },
    { id: "systemsObserved", label: "Systems Observed", kind: "textarea" },
    { id: "interiorRepairs", label: "Interior Repairs", kind: "textarea" }
  ],
  "pcr-summary": [
    { id: "conditionSummary", label: "Condition Summary", kind: "textarea", required: true },
    { id: "repairPriority", label: "Repair Priority", kind: "select", required: true, options: ["Low", "Moderate", "High", "Critical"] },
    { id: "estimatedRepairRange", label: "Estimated Repair Range", kind: "text" },
    { id: "recommendedNextSteps", label: "Recommended Next Steps", kind: "textarea", required: true }
  ],
  "construction-costs": [
    { id: "scopeOfWork", label: "Scope of Work", kind: "textarea", required: true },
    { id: "sitePrep", label: "Site Prep / Utility Costs", kind: "textarea" },
    { id: "hardCosts", label: "Hard Costs", kind: "textarea", required: true },
    { id: "softCosts", label: "Soft Costs / Contingency", kind: "textarea" },
    { id: "totalCostEstimate", label: "Total Cost Estimate", kind: "text", required: true }
  ],
  "repair-renov-estimate": [
    { id: "repairScope", label: "Repair Scope", kind: "textarea", required: true },
    { id: "priorityItems", label: "Priority Items", kind: "textarea" },
    { id: "costEstimate", label: "Cost Estimate", kind: "text", required: true },
    { id: "contributoryValue", label: "Contributory Value Impact", kind: "textarea" }
  ],
  "market-analysis-general": [
    { id: "neighborhoodBoundaries", label: "Neighborhood Boundaries", kind: "textarea", required: true },
    { id: "marketTrend", label: "Market Trend", kind: "select", required: true, options: ["Increasing", "Stable", "Declining", "Mixed"] },
    { id: "inventoryNotes", label: "Inventory / DOM Notes", kind: "textarea" },
    { id: "currentConditionMarketability", label: "Current Condition Marketability", kind: "textarea", required: true }
  ],
  "market-analysis-after-repair": [
    { id: "arvMarketTrend", label: "After-Repair Market Trend", kind: "select", required: true, options: ["Increasing", "Stable", "Declining", "Mixed"] },
    { id: "renovatedInventory", label: "Renovated Inventory Notes", kind: "textarea", required: true },
    { id: "buyerDemand", label: "Buyer Demand for Repaired Condition", kind: "textarea" },
    { id: "arvMarketability", label: "After-Repair Marketability", kind: "textarea", required: true }
  ],
  "mar-summary": [
    { id: "marketSummary", label: "Market Summary", kind: "textarea", required: true },
    { id: "supplyDemand", label: "Supply / Demand", kind: "textarea" },
    { id: "marketRisk", label: "Market Risk", kind: "textarea" },
    { id: "marketConclusion", label: "Market Conclusion", kind: "textarea", required: true }
  ],
  "multi-unit-apartment": [
    { id: "unitMix", label: "Unit Mix", kind: "textarea", required: true },
    { id: "rentRollNotes", label: "Rent Roll Notes", kind: "textarea" },
    { id: "incomePotential", label: "Income Potential", kind: "textarea", required: true },
    { id: "multiUnitRisks", label: "Multi-Unit Risks", kind: "textarea" }
  ],
  "cma-active-grid": [
    { id: "activeCompOne", label: "Active / Pending Comparable 1", kind: "textarea", required: true },
    { id: "activeCompTwo", label: "Active / Pending Comparable 2", kind: "textarea" },
    { id: "activeCompThree", label: "Active / Pending Comparable 3", kind: "textarea" },
    { id: "activeAdjustmentNotes", label: "Adjustment Notes", kind: "textarea", required: true },
    { id: "activeRange", label: "Active Listing Range", kind: "text" }
  ],
  "cma-sold-grid": [
    { id: "soldCompOne", label: "Sold Comparable 1", kind: "textarea", required: true },
    { id: "soldCompTwo", label: "Sold Comparable 2", kind: "textarea" },
    { id: "soldCompThree", label: "Sold Comparable 3", kind: "textarea" },
    { id: "soldAdjustmentNotes", label: "Adjustment Notes", kind: "textarea", required: true },
    { id: "indicatedValueRange", label: "Indicated Value Range", kind: "text", required: true }
  ],
  "cma-arv-grid": [
    { id: "arvCompOne", label: "ARV Comparable 1", kind: "textarea", required: true },
    { id: "arvCompTwo", label: "ARV Comparable 2", kind: "textarea" },
    { id: "arvCompThree", label: "ARV Comparable 3", kind: "textarea" },
    { id: "arvAdjustmentNotes", label: "ARV Adjustment Notes", kind: "textarea", required: true },
    { id: "arvRange", label: "After-Repair Value Range", kind: "text", required: true }
  ],
  "residential-value-reconciliation": [
    { id: "salesApproachWeight", label: "Sales Approach Weighting", kind: "textarea", required: true },
    { id: "conditionAdjustment", label: "Condition Adjustment", kind: "textarea" },
    { id: "reconciledValue", label: "Reconciled Value", kind: "text", required: true },
    { id: "confidenceLevel", label: "Confidence Level", kind: "select", required: true, options: ["High", "Moderate", "Limited"] },
    { id: "reconciliationNarrative", label: "Reconciliation Narrative", kind: "textarea", required: true }
  ],
  "gross-rent-multiplier": [
    { id: "marketRent", label: "Market Rent", kind: "text", required: true },
    { id: "grmRange", label: "GRM Range", kind: "text", required: true },
    { id: "grmIndicatedValue", label: "GRM Indicated Value", kind: "text", required: true },
    { id: "incomeNarrative", label: "Income Approach Narrative", kind: "textarea" }
  ],
  "cost-approach": [
    { id: "landValue", label: "Land Value", kind: "text", required: true },
    { id: "replacementCost", label: "Replacement Cost", kind: "text" },
    { id: "depreciation", label: "Depreciation / Obsolescence", kind: "textarea" },
    { id: "costApproachValue", label: "Cost Approach Value", kind: "text", required: true },
    { id: "costApproachNarrative", label: "Cost Approach Narrative", kind: "textarea" }
  ],
  "signature-page": [
    { id: "scopeDisclosure", label: "Scope Disclosure", kind: "textarea", required: true },
    { id: "notAppraisalDisclosure", label: "Non-Appraisal Disclosure", kind: "textarea", required: true },
    { id: "agentCertification", label: "Agent Certification", kind: "textarea", required: true },
    { id: "signatureName", label: "Signature Name", kind: "text", required: true },
    { id: "signatureDate", label: "Signature Date", kind: "date", required: true }
  ],
  "merge-files-final-report": [
    { id: "assemblyOrderNotes", label: "Assembly Order Notes", kind: "textarea", required: true },
    { id: "externalPdfNotes", label: "External PDFs to Attach", kind: "textarea" },
    { id: "finalReviewNotes", label: "Final Review Notes", kind: "textarea", required: true }
  ]
};

export function getLocalFormSchema(formId: string): LocalFormDefinition | undefined {
  const catalogItem = getCatalogForm(formId);
  if (!catalogItem) return undefined;

  return {
    id: catalogItem.id,
    title: catalogItem.title,
    category: catalogItem.category,
    description: catalogItem.description,
    fields: schemas[formId] ?? standardNotes
  };
}

export function getAllLocalFormSchemas() {
  return formCatalog.map((form) => getLocalFormSchema(form.id)).filter((form): form is LocalFormDefinition => Boolean(form));
}
