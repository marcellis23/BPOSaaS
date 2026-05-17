import type { LocalFormDefinition } from "./types";

export const cmaActiveGridForm: LocalFormDefinition = {
  id: "cma-active-grid",
  title: "CMA - ACTIVE Comp Grid",
  category: "Comparable Market Analysis (CMA)",
  description: "Active and pending listings comparison grid with adjustment notes.",
  fields: [
    { id: "activeCompOne", label: "Active / Pending Comparable 1", kind: "textarea", required: true },
    { id: "activeCompTwo", label: "Active / Pending Comparable 2", kind: "textarea" },
    { id: "activeCompThree", label: "Active / Pending Comparable 3", kind: "textarea" },
    { id: "activeAdjustmentNotes", label: "Adjustment Notes", kind: "textarea", required: true },
    { id: "activeRange", label: "Active Listing Range", kind: "text" }
  ]
};
