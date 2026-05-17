import type { LocalFormDefinition } from "./types";

export const cmaSoldGridForm: LocalFormDefinition = {
  id: "cma-sold-grid",
  title: "CMA - SOLD Comp Grid",
  category: "Comparable Market Analysis (CMA)",
  description: "Sold properties comparison grid with adjustments and indicated range.",
  fields: [
    { id: "soldCompOne", label: "Sold Comparable 1", kind: "textarea", required: true },
    { id: "soldCompTwo", label: "Sold Comparable 2", kind: "textarea" },
    { id: "soldCompThree", label: "Sold Comparable 3", kind: "textarea" },
    { id: "soldAdjustmentNotes", label: "Adjustment Notes", kind: "textarea", required: true },
    { id: "indicatedValueRange", label: "Indicated Value Range", kind: "text", required: true }
  ]
};
