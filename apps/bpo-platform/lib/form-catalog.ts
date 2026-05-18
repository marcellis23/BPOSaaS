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
    workflowType: "external_wordpress",
    sortOrder: 20,
    alwaysRecommended: true
  },
  {
    id: "additional-photos",
    title: "Additional Photos",
    category: "Addendums",
    description: "Labeled interior, exterior, repair, and supporting condition photo sets.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/additional-photos/",
    workflowType: "external_wordpress",
    sortOrder: 30,
    recommendedWhen: { propertyAccess: ["full_interior", "restricted"], propertyConditions: ["needs_repairs", "distressed", "after_repair"] }
  },
  {
    id: "floorplans-sketches",
    title: "Floorplans / Sketches",
    category: "Addendums",
    description: "Layout diagrams, room dimensions, sketches, and floor plan exhibits.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/floor-plan-sketch-photos/",
    workflowType: "external_wordpress",
    sortOrder: 40,
    recommendedWhen: { propertyAccess: ["full_interior"], propertyTypes: ["single_family", "multi_unit", "mixed_use"] }
  },
  {
    id: "aerial-views",
    title: "Aerial Views",
    category: "Addendums",
    description: "Subject, comparable, aerial, map, and neighborhood views.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/aerial-views/",
    workflowType: "external_wordpress",
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
    title: "Subject Comps",
    category: "Comparable Market Analysis (CMA)",
    description: "Photos and notes for selected comparable properties.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/comp-photos/",
    workflowType: "external_wordpress",
    sortOrder: 430,
    recommendedWhen: { valuationGoals: ["as_is", "after_repair", "reconciliation"] }
  },
  {
    id: "vacant-land-site-data",
    title: "Vacant Land Site Data",
    category: "Property Condition Report (PCR)",
    description: "Zoning, frontage, utilities, topography, access, and easement observations.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/vacant-land-report/",
    workflowType: "external_wordpress",
    sortOrder: 100,
    recommendedWhen: { propertyTypes: ["vacant_lot"], propertyAccess: ["vacant_land"], valuationGoals: ["lot_feasibility"] }
  },
  {
    id: "pcr-exterior",
    title: "PCR - Exterior",
    category: "Property Condition Report (PCR)",
    description: "Exterior condition, safety, curb appeal, major defects, and restricted-access observations.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/pcr-exterior-only/",
    workflowType: "native_saas",
    sortOrder: 110,
    recommendedWhen: { propertyAccess: ["exterior_only", "drive_by", "restricted"], propertyConditions: ["needs_repairs", "distressed", "unknown"] }
  },
  {
    id: "pcr-interior",
    title: "PCR - Interior",
    category: "Property Condition Report (PCR)",
    description: "Interior rooms, finishes, systems, condition notes, and photo support.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/pcr-full/",
    workflowType: "external_wordpress",
    sortOrder: 120,
    recommendedWhen: { propertyAccess: ["full_interior"], propertyTypes: ["single_family", "multi_unit", "condo_townhome", "mixed_use"] }
  },
  {
    id: "pcr-summary",
    title: "PCR Summary",
    category: "Property Condition Report (PCR)",
    description: "Summary of property condition, repairs, risks, and overall assessment.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/property-condition-report-summary-form/",
    workflowType: "native_saas",
    sortOrder: 130,
    recommendedWhen: { propertyConditions: ["needs_repairs", "distressed", "after_repair"], reportTypes: ["Property Condition Report", "BPO"] }
  },
  {
    id: "construction-costs",
    title: "Construction Costs",
    category: "Construction, Renovation, & Repair Cost",
    description: "Lot development construction costs, big-ticket items, quotes, and allowances.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/residential-construction-cost-estimate-report-vacant-lot/",
    workflowType: "external_wordpress",
    sortOrder: 200,
    recommendedWhen: { propertyTypes: ["vacant_lot"], valuationGoals: ["lot_feasibility"] }
  },
  {
    id: "repair-renov-estimate",
    title: "Repair / Renovation Estimate",
    category: "Construction, Renovation, & Repair Cost",
    description: "Line-item repair and renovation estimates with contributory value assessment.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/repair-estimate-exterior-only/",
    workflowType: "external_wordpress",
    sortOrder: 210,
    recommendedWhen: { propertyConditions: ["needs_repairs", "distressed", "after_repair"], valuationGoals: ["after_repair", "as_is", "support_only"] }
  },
  {
    id: "market-analysis-general",
    title: "Market Analysis (General)",
    category: "Market Analysis Report (MAR)",
    description: "Neighborhood use mix, boundaries, DOM, inventory, distress, and market conditions.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/market-analysis-report/",
    workflowType: "native_saas",
    sortOrder: 300,
    recommendedWhen: { reportTypes: ["BPO", "Market Analysis Report", "Valuation Support Report"], valuationGoals: ["as_is", "support_only", "reconciliation"] }
  },
  {
    id: "market-analysis-after-repair",
    title: "Market Analysis (After Repair)",
    category: "Market Analysis Report (MAR)",
    description: "Market conditions, trends, and inventory reflecting post-repair condition.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/market-analysis-report-after-repair-condition/",
    workflowType: "external_wordpress",
    sortOrder: 310,
    recommendedWhen: { propertyConditions: ["after_repair", "needs_repairs", "distressed"], valuationGoals: ["after_repair"] }
  },
  {
    id: "mar-summary",
    title: "MAR Summary",
    category: "Market Analysis Report (MAR)",
    description: "Summary of market trends, inventory, and neighborhood analysis.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/mar-summary-conclusion/",
    workflowType: "external_wordpress",
    sortOrder: 340,
    recommendedWhen: { reportTypes: ["BPO", "Market Analysis Report", "Valuation Support Report"] }
  },
  {
    id: "multi-unit-apartment",
    title: "Multi-Unit Apartment",
    category: "Market Analysis Report (MAR)",
    description: "Unit mix, condition, rent potential, market activity, and income context.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/multi-unit-apartment-market-assessment/",
    workflowType: "external_wordpress",
    sortOrder: 330,
    recommendedWhen: { propertyTypes: ["multi_unit"], valuationGoals: ["rental_income", "as_is"] }
  },
  {
    id: "cma-active-grid",
    title: "CMA - ACTIVE Comp Grid",
    category: "Comparable Market Analysis (CMA)",
    description: "Active and pending listings comparison grid with adjustment notes.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cma-active-comparison-grid/",
    workflowType: "external_wordpress",
    sortOrder: 400,
    recommendedWhen: { valuationGoals: ["as_is", "after_repair", "reconciliation"], reportTypes: ["BPO"] }
  },
  {
    id: "cma-sold-grid",
    title: "CMA - SOLD Comp Grid",
    category: "Comparable Market Analysis (CMA)",
    description: "Sold properties comparison grid with adjustments and indicated range.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cma-sold-comparison-grid/",
    workflowType: "native_saas",
    sortOrder: 410,
    recommendedWhen: { valuationGoals: ["as_is", "reconciliation"], reportTypes: ["BPO", "Valuation Support Report"] }
  },
  {
    id: "cma-arv-grid",
    title: "CMA - ARV Comp Grid",
    category: "Comparable Market Analysis (CMA)",
    description: "After-repair comparable grid for repaired condition analysis.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cma-arv-comparison-grid/",
    workflowType: "external_wordpress",
    sortOrder: 420,
    recommendedWhen: { valuationGoals: ["after_repair"], propertyConditions: ["after_repair", "needs_repairs", "distressed"] }
  },
  {
    id: "residential-value-reconciliation",
    title: "Residential Value Reconciliation",
    category: "Broker Price Opinion (BPO)",
    description: "Weighting logic across residential valuation approaches.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/final-report-merged/",
    workflowType: "native_saas",
    sortOrder: 500,
    recommendedWhen: { reportTypes: ["BPO"], valuationGoals: ["as_is", "after_repair", "reconciliation"] }
  },
  {
    id: "gross-rent-multiplier",
    title: "Gross Rent Multiplier (GRM)",
    category: "Broker Price Opinion (BPO)",
    description: "Rent multiplied by GRM as an income-based value cross-check.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/gross-rent-multiplier-grm/",
    workflowType: "external_wordpress",
    sortOrder: 510,
    recommendedWhen: { valuationGoals: ["rental_income"], propertyTypes: ["multi_unit", "single_family", "mixed_use"] }
  },
  {
    id: "cost-approach",
    title: "Cost Approach",
    category: "Broker Price Opinion (BPO)",
    description: "Land value plus depreciated improvement cost as a value cross-check.",
    wordpressUrl: "https://rwilliamspropertyadvisor.com/cost-approach/",
    workflowType: "external_wordpress",
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
