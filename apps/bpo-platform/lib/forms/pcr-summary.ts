import type { LocalFormDefinition } from "./types";

export const pcrSummaryForm: LocalFormDefinition = {
  id: "pcr-summary",
  title: "PCR Summary",
  category: "Property Condition Report (PCR)",
  description: "Summary of property condition, repairs, risks, and overall assessment.",
  fields: [
    { id: "conditionSummary", label: "Condition Summary", kind: "textarea", required: true },
    { id: "repairPriority", label: "Repair Priority", kind: "select", required: true, options: ["Low", "Moderate", "High", "Critical"] },
    { id: "estimatedRepairRange", label: "Estimated Repair Range", kind: "text" },
    { id: "recommendedNextSteps", label: "Recommended Next Steps", kind: "textarea", required: true }
  ]
};
