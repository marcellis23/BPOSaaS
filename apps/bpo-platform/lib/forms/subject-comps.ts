import type { LocalFormDefinition } from "./types";

export const subjectCompsForm: LocalFormDefinition = {
  id: "subject-comps",
  title: "Subject Comps",
  category: "Comparable Market Analysis (CMA)",
  description: "Photos and notes for selected comparable properties.",
  fields: [
    { id: "compPhotoInventory", label: "Comparable Photo Inventory", kind: "textarea", required: true },
    { id: "compConditionNotes", label: "Comparable Condition Notes", kind: "textarea" },
    { id: "compLocationNotes", label: "Comparable Location Notes", kind: "textarea" }
  ]
};
