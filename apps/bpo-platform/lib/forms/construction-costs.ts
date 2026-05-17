import type { LocalFormDefinition } from "./types";

export const constructionCostsForm: LocalFormDefinition = {
  id: "construction-costs",
  title: "Construction Costs",
  category: "Construction, Renovation, & Repair Cost",
  description: "Lot development construction costs, big-ticket items, quotes, and allowances.",
  fields: [
    { id: "scopeOfWork", label: "Scope of Work", kind: "textarea", required: true },
    { id: "sitePrep", label: "Site Prep / Utility Costs", kind: "textarea" },
    { id: "hardCosts", label: "Hard Costs", kind: "textarea", required: true },
    { id: "softCosts", label: "Soft Costs / Contingency", kind: "textarea" },
    { id: "totalCostEstimate", label: "Total Cost Estimate", kind: "text", required: true }
  ]
};
