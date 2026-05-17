import type { LocalFormDefinition } from "./types";

export const cmaArvGridForm: LocalFormDefinition = {
  id: "cma-arv-grid",
  title: "CMA - ARV Comp Grid",
  category: "Comparable Market Analysis (CMA)",
  description: "After-repair comparable grid for repaired condition analysis.",
  fields: [
    { id: "arvCompOne", label: "ARV Comparable 1", kind: "textarea", required: true },
    { id: "arvCompTwo", label: "ARV Comparable 2", kind: "textarea" },
    { id: "arvCompThree", label: "ARV Comparable 3", kind: "textarea" },
    { id: "arvAdjustmentNotes", label: "ARV Adjustment Notes", kind: "textarea", required: true },
    { id: "arvRange", label: "After-Repair Value Range", kind: "text", required: true }
  ]
};
