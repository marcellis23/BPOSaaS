import type { LocalFormDefinition } from "./types";

export const residentialValueReconciliationForm: LocalFormDefinition = {
  id: "residential-value-reconciliation",
  title: "Residential Value Reconciliation",
  category: "Broker Price Opinion (BPO)",
  description: "Weighting logic across residential valuation approaches.",
  fields: [
    { id: "salesApproachWeight", label: "Sales Approach Weighting", kind: "textarea", required: true },
    { id: "conditionAdjustment", label: "Condition Adjustment", kind: "textarea" },
    { id: "reconciledValue", label: "Reconciled Value", kind: "text", required: true },
    { id: "confidenceLevel", label: "Confidence Level", kind: "select", required: true, options: ["High", "Moderate", "Limited"] },
    { id: "reconciliationNarrative", label: "Reconciliation Narrative", kind: "textarea", required: true }
  ]
};
