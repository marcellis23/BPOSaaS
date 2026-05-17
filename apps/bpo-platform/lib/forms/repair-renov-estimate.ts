import type { LocalFormDefinition } from "./types";

export const repairRenovEstimateForm: LocalFormDefinition = {
  id: "repair-renov-estimate",
  title: "Repair / Renovation Estimate",
  category: "Construction, Renovation, & Repair Cost",
  description: "Line-item repair and renovation estimates with contributory value assessment.",
  fields: [
    { id: "repairScope", label: "Repair Scope", kind: "textarea", required: true },
    { id: "priorityItems", label: "Priority Items", kind: "textarea" },
    { id: "costEstimate", label: "Cost Estimate", kind: "text", required: true },
    { id: "contributoryValue", label: "Contributory Value Impact", kind: "textarea" }
  ]
};
