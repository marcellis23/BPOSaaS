import type { LocalFormDefinition } from "./types";

export const marketAnalysisGeneralForm: LocalFormDefinition = {
  id: "market-analysis-general",
  title: "Market Analysis (General)",
  category: "Market Analysis Report (MAR)",
  description: "Neighborhood use mix, boundaries, DOM, inventory, distress, and market conditions.",
  fields: [
    { id: "neighborhoodBoundaries", label: "Neighborhood Boundaries", kind: "textarea", required: true },
    { id: "marketTrend", label: "Market Trend", kind: "select", required: true, options: ["Increasing", "Stable", "Declining", "Mixed"] },
    { id: "inventoryNotes", label: "Inventory / DOM Notes", kind: "textarea" },
    { id: "currentConditionMarketability", label: "Current Condition Marketability", kind: "textarea", required: true }
  ]
};
