import type { LocalFormDefinition } from "./types";

export const mergeFilesFinalReportForm: LocalFormDefinition = {
  id: "merge-files-final-report",
  title: "Merge Files to Final Report",
  category: "Final Report",
  description: "Assemble selected section PDFs into a single client-ready BPO report.",
  fields: [
    { id: "assemblyOrderNotes", label: "Assembly Order Notes", kind: "textarea", required: true },
    { id: "externalPdfNotes", label: "External PDFs to Attach", kind: "textarea" },
    { id: "finalReviewNotes", label: "Final Review Notes", kind: "textarea", required: true }
  ]
};
