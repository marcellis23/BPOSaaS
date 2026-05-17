import type { LocalFormDefinition } from "./types";

export const marSummaryForm: LocalFormDefinition = {
  id: "mar-summary",
  title: "MAR Summary",
  category: "Market Analysis Report (MAR)",
  description: "Summary of market trends, inventory, and neighborhood analysis.",
  fields: [
    { id: "marketSummary", label: "Market Summary", kind: "textarea", required: true },
    { id: "supplyDemand", label: "Supply / Demand", kind: "textarea" },
    { id: "marketRisk", label: "Market Risk", kind: "textarea" },
    { id: "marketConclusion", label: "Market Conclusion", kind: "textarea", required: true }
  ]
};
