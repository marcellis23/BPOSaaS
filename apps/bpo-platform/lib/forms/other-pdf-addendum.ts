import type { LocalFormDefinition } from "./types";

export const otherPdfAddendumForm: LocalFormDefinition = {
  id: "other-pdf-addendum",
  title: "Other PDF Addendum",
  category: "Addendums",
  description: "Upload an additional PDF exhibit, addendum, or supporting document into the final report.",
  fields: [
    { id: "addendumTitle", label: "Addendum Title", kind: "text", required: true },
    { id: "addendumNotes", label: "Addendum Notes", kind: "textarea" }
  ]
};
