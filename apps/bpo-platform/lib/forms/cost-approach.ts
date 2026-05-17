import type { LocalFormDefinition } from "./types";

export const costApproachForm: LocalFormDefinition = {
  id: "cost-approach",
  title: "Cost Approach",
  category: "Broker Price Opinion (BPO)",
  description: "Land value plus depreciated improvement cost as a value cross-check.",
  fields: [
    { id: "landValue", label: "Land Value", kind: "text", required: true },
    { id: "replacementCost", label: "Replacement Cost", kind: "text" },
    { id: "depreciation", label: "Depreciation / Obsolescence", kind: "textarea" },
    { id: "costApproachValue", label: "Cost Approach Value", kind: "text", required: true },
    { id: "costApproachNarrative", label: "Cost Approach Narrative", kind: "textarea" }
  ]
};
