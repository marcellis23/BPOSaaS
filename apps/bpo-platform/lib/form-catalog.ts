import type {
  AssignmentIntent,
  FormWorkflowType,
  PropertyAccess,
  PropertyCondition,
  PropertyType,
  ValuationGoal
} from "./types";

export interface FormCatalogItem {
  id: string;
  title: string;
  category: string;
  description: string;
  wordpressUrl: string;
  workflowType: FormWorkflowType;
  sortOrder: number;
  alwaysRecommended?: boolean;
  recommendedWhen?: {
    assignmentIntents?: AssignmentIntent[];
    propertyTypes?: PropertyType[];
    propertyAccess?: PropertyAccess[];
    propertyConditions?: PropertyCondition[];
    valuationGoals?: ValuationGoal[];
    reportTypes?: string[];
  };
}

export interface RecommendationInput {
  reportType: string;
  assignmentIntent: AssignmentIntent;
  propertyType: PropertyType;
  propertyAccess: PropertyAccess;
  propertyCondition: PropertyCondition;
  valuationGoal: ValuationGoal;
}

export const finalReportMergerFormId = "merge-files-final-report";

export const formCatalog: FormCatalogItem[] = [
  {
    id: "cover-page",
    title: "Cover Page",
    category: "Final Report",
    description: "Property identifiers, client details, order type, inspection type, and report date.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cover-page/",
    workflowType: "native_saas",
    sortOrder: 10,
    alwaysRecommended: true
  },
  {
    id: "front-photos",
    title: "Front Photos",
    category: "Addendums",
    description: "Primary front shots, angle views, and street view documentation.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/subject-front-photos/",
    workflowType: "native_saas",
    sortOrder: 20,
    alwaysRecommended: true
  },
  {
    id: "additional-photos",
    title: "Additional Photos",
    category: "Addendums",
    description: "Labeled interior, exterior, repair, and supporting condition photo sets.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/additional-photos/",
    workflowType: "native_saas",
    sortOrder: 30,
    recommendedWhen: { propertyAccess: ["full_interior", "restricted"], propertyConditions: ["needs_repairs", "distressed", "after_repair"] }
  },
  {
    id: "floorplans-sketches",
    title: "Floorplans / Sketches",
    category: "Addendums",
    description: "Layout diagrams, room dimensions, sketches, and floor plan exhibits.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/floor-plan-sketch-photos/",
    workflowType: "native_saas",
    sortOrder: 40,
    recommendedWhen: { propertyAccess: ["full_interior"], propertyTypes: ["single_family", "multi_unit", "mixed_use"] }
  },
  {
    id: "aerial-views",
    title: "Aerial Views",
    category: "Addendums",
    description: "Subject, comparable, aerial, map, and neighborhood views.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/aerial-views/",
    workflowType: "native_saas",
    sortOrder: 50,
    recommendedWhen: { propertyTypes: ["vacant_lot"], valuationGoals: ["lot_feasibility"] }
  },
  {
    id: "other-pdf-addendum",
    title: "Other PDF Addendum",
    category: "Addendums",
    description: "Upload an additional PDF exhibit, addendum, or supporting document into the final report.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/create-report/",
    workflowType: "native_saas",
    sortOrder: 60
  },
  {
    id: "subject-comps",
    title: "Comparable Map & Photos",
    category: "Comparable Market Analysis (CMA)",
    description: "Map exhibit and photos showing the subject property and selected active, sold, and ARV comparables.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/comp-photos/",
    workflowType: "native_saas",
    sortOrder: 430,
    recommendedWhen: { valuationGoals: ["as_is", "after_repair", "reconciliation"] }
  },
  {
    id: "vacant-land-site-data",
    title: "Property Condition Report - Vacant Lot",
    category: "Property Condition Report (PCR)",
    description: "Zoning, frontage, utilities, topography, access, and easement observations.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/vacant-land-report/",
    workflowType: "native_saas",
    sortOrder: 100,
    recommendedWhen: { propertyTypes: ["vacant_lot"], propertyAccess: ["vacant_land"], valuationGoals: ["lot_feasibility"] }
  },
  {
    id: "pcr-exterior",
    title: "Property Condition Report (PCR) - Exterior Only",
    category: "Property Condition Report (PCR)",
    description: "Exterior condition, safety, curb appeal, major defects, and restricted-access observations.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/pcr-exterior-only/",
    workflowType: "native_saas",
    sortOrder: 110,
    recommendedWhen: { propertyAccess: ["exterior_only", "drive_by", "restricted"], propertyConditions: ["needs_repairs", "distressed", "unknown"] }
  },
  {
    id: "pcr-interior",
    title: "Property Condition Report (PCR) - Full Inspection",
    category: "Property Condition Report (PCR)",
    description: "Interior rooms, finishes, systems, condition notes, and photo support.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/pcr-full/",
    workflowType: "native_saas",
    sortOrder: 120,
    recommendedWhen: { propertyAccess: ["full_interior"], propertyTypes: ["single_family", "multi_unit", "condo_townhome", "mixed_use"] }
  },
  {
    id: "pcr-summary",
    title: "Property Condition Report (PCR) Summary",
    category: "Property Condition Report (PCR)",
    description: "Summary of property condition, repairs, risks, and overall assessment.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/property-condition-report-summary-form/",
    workflowType: "native_saas",
    sortOrder: 130,
    recommendedWhen: { propertyConditions: ["needs_repairs", "distressed", "after_repair"], reportTypes: ["Property Condition Report", "BPO"] }
  },
  {
    id: "construction-costs",
    title: "Construction Cost Estimate - Lot Development",
    category: "Construction, Renovation, & Repair Cost",
    description: "Lot development construction costs, big-ticket items, quotes, and allowances.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/residential-construction-cost-estimate-report-vacant-lot/",
    workflowType: "native_saas",
    sortOrder: 200,
    recommendedWhen: { propertyTypes: ["vacant_lot"], valuationGoals: ["lot_feasibility"] }
  },
  {
    id: "repair-renov-estimate",
    title: "Repair Estimate (Contributory Value Assessment)",
    category: "Construction, Renovation, & Repair Cost",
    description: "Line-item repair and renovation estimates with contributory value assessment.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/repair-estimate-exterior-only/",
    workflowType: "native_saas",
    sortOrder: 210,
    recommendedWhen: { propertyConditions: ["needs_repairs", "distressed", "after_repair"], valuationGoals: ["after_repair", "as_is", "support_only"] }
  },
  {
    id: "market-analysis-asis",
    title: "Market Analysis Report (MAR)",
    category: "Market Analysis Report (MAR)",
    description: "Subject overview, market area trends, submarket definition, pricing segmentation, rental analysis, and target buyer profile.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/market-analysis-report/",
    workflowType: "native_saas",
    sortOrder: 300,
    recommendedWhen: { reportTypes: ["BPO", "Market Analysis Report", "Valuation Support Report"], valuationGoals: ["as_is", "support_only", "reconciliation"] }
  },
  {
    id: "submarket-analysis-asis",
    title: "Submarket Analysis (As-Is)",
    category: "Market Analysis Report (MAR)",
    description: "Specific submarket definitions, competitive segment sales and rentals, price tiers, and target buyer profiles.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/submarket-analysis-report-asis/",
    workflowType: "native_saas",
    sortOrder: 305,
    recommendedWhen: { reportTypes: ["BPO", "Market Analysis Report", "Valuation Support Report"], valuationGoals: ["as_is", "support_only", "reconciliation"] }
  },
  {
    id: "market-analysis-after-repair",
    title: "After-Repair Market Analysis (MAR)",
    category: "Market Analysis Report (MAR)",
    description: "After-repair value support, projected condition, competitive submarket analysis, pricing segmentation, rental analysis, and target buyer profile.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/market-analysis-report-after-repair-condition/",
    workflowType: "native_saas",
    sortOrder: 310,
    recommendedWhen: { propertyConditions: ["after_repair", "needs_repairs", "distressed"], valuationGoals: ["after_repair"] }
  },
  {
    id: "mar-summary",
    title: "Market Analysis Summary Report",
    category: "Market Analysis Report (MAR)",
    description: "Market overview, primary market connection, submarket position, review history, and optional after-repair condition assessment.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/mar-summary-conclusion/",
    workflowType: "native_saas",
    sortOrder: 340,
    recommendedWhen: { reportTypes: ["BPO", "Market Analysis Report", "Valuation Support Report"] }
  },
  {
    id: "multi-unit-apartment",
    title: "Multi-Unit Apartment Market Assessment",
    category: "Market Analysis Report (MAR)",
    description: "Subject overview, current and after-repair unit mix, condition, rent potential, and income context.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/multi-unit-apartment-market-assessment/",
    workflowType: "native_saas",
    sortOrder: 330,
    recommendedWhen: { propertyTypes: ["multi_unit"], valuationGoals: ["rental_income", "as_is"] }
  },
  {
    id: "cma-active-grid",
    title: "Active Comparables Analysis",
    category: "Comparable Market Analysis (CMA)",
    description: "Active and pending listings comparison grid with subject data, comp adjustments, rental analysis, market ranges, and asking-price reconciliation.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cma-active-comparison-grid/",
    workflowType: "native_saas",
    sortOrder: 400,
    recommendedWhen: { valuationGoals: ["as_is", "after_repair", "reconciliation"], reportTypes: ["BPO"] }
  },
  {
    id: "cma-sold-grid",
    title: "Sold Comparables Analysis",
    category: "Comparable Market Analysis (CMA)",
    description: "Sold comparable sales grid with concessions, adjustments, rental analysis, market ranges, and sale-price reconciliation.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cma-sold-comparison-grid/",
    workflowType: "native_saas",
    sortOrder: 410,
    recommendedWhen: { valuationGoals: ["as_is", "reconciliation"], reportTypes: ["BPO", "Valuation Support Report"] }
  },
  {
    id: "cma-arv-grid",
    title: "Sold Comparables (After-Repair) Analysis",
    category: "Comparable Market Analysis (CMA)",
    description: "After-repair sold comparable sales grid with concessions, adjustments, rental analysis, market ranges, and ARV reconciliation.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cma-arv-comparison-grid/",
    workflowType: "native_saas",
    sortOrder: 420,
    recommendedWhen: { valuationGoals: ["after_repair"], propertyConditions: ["after_repair", "needs_repairs", "distressed"] }
  },
  {
    id: "residential-value-reconciliation",
    title: "Sales Comparison Reconciliation",
    category: "Broker Price Opinion (BPO)",
    description: "Final reconciliation of active listings, as-is sold comparables, ARV sold comparables, repair feasibility, and price conclusion.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/final-report-merged/",
    workflowType: "native_saas",
    sortOrder: 500,
    recommendedWhen: { reportTypes: ["BPO"], valuationGoals: ["as_is", "after_repair", "reconciliation"] }
  },
  {
    id: "gross-rent-multiplier",
    title: "Gross Rent Multiplier (GRM) Analysis",
    category: "Broker Price Opinion (BPO)",
    description: "Income-producing property GRM analysis with active and sold rental comps, calculated GRM range, and value reconciliation.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/gross-rent-multiplier-grm/",
    workflowType: "native_saas",
    sortOrder: 510,
    recommendedWhen: { valuationGoals: ["rental_income"], propertyTypes: ["multi_unit", "single_family", "mixed_use"] }
  },
  {
    id: "cost-approach",
    title: "Cost Approach Add-On (Used with CMA)",
    category: "Broker Price Opinion (BPO)",
    description: "Additional cost approach value cross-check using replacement cost, depreciation, and land value.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cost-approach-analysis/",
    workflowType: "native_saas",
    sortOrder: 520,
    recommendedWhen: { propertyTypes: ["vacant_lot"], valuationGoals: ["lot_feasibility", "reconciliation"] }
  },
  {
    id: "signature-page",
    title: "Signature Page",
    category: "Final Report",
    description: "Scope limits, certifications, compliance notes, and final sign-off.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/signature-page/",
    workflowType: "native_saas",
    sortOrder: 610,
    alwaysRecommended: true
  }
];

function matchesAny<T extends string>(values: T[] | undefined, selected: T | string) {
  return Boolean(values?.includes(selected as T));
}

export function getRecommendedFormIds(input: RecommendationInput) {
  return formCatalog
    .filter((form) => {
      if (form.alwaysRecommended) return true;
      const rule = form.recommendedWhen;
      if (!rule) return false;
      return (
        matchesAny(rule.assignmentIntents, input.assignmentIntent) ||
        matchesAny(rule.propertyTypes, input.propertyType) ||
        matchesAny(rule.propertyAccess, input.propertyAccess) ||
        matchesAny(rule.propertyConditions, input.propertyCondition) ||
        matchesAny(rule.valuationGoals, input.valuationGoal) ||
        matchesAny(rule.reportTypes, input.reportType)
      );
    })
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((form) => form.id);
}

export function getCatalogForm(id: string) {
  return formCatalog.find((form) => form.id === getBaseFormId(id));
}

export function normalizeFormInstanceIds(ids: string[]) {
  const seen = new Set<string>();
  return ids.filter((id) => {
    if (getBaseFormId(id) === finalReportMergerFormId || !getCatalogForm(id) || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

export function getBaseFormId(id: string) {
  return id.split("__")[0];
}

export function createFormInstanceId(formId: string, suffix: string) {
  return `${formId}__${suffix}`;
}

export function isFormInstance(id: string) {
  return id.includes("__");
}

export function getLocalFormHref(projectId: string, formId: string) {
  return `/reports/${projectId}/forms/${formId}`;
}

export function groupCatalogForms(forms: FormCatalogItem[]) {
  const groups = forms.reduce<Record<string, FormCatalogItem[]>>((groups, form) => {
    groups[form.category] ??= [];
    groups[form.category].push(form);
    return groups;
  }, {});

  Object.values(groups).forEach((group) => group.sort((a, b) => a.sortOrder - b.sortOrder));
  return groups;
}
