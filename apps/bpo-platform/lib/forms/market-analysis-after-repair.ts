import type { LocalFormDefinition } from "./types";

export const marketAnalysisAfterRepairForm: LocalFormDefinition = {
  id: "market-analysis-after-repair",
  title: "Market Analysis (After Repair)",
  category: "Market Analysis Report (MAR)",
  description: "Market conditions, trends, and inventory reflecting post-repair condition.",
  fields: [
    { id: "arvMarketTrend", label: "After-Repair Market Trend", kind: "select", required: true, options: ["Increasing", "Stable", "Declining", "Mixed"] },
    { id: "renovatedInventory", label: "Renovated Inventory Notes", kind: "textarea", required: true },
    { id: "buyerDemand", label: "Buyer Demand for Repaired Condition", kind: "textarea" },
    { id: "arvMarketability", label: "After-Repair Marketability", kind: "textarea", required: true }
  ]
};
