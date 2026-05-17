import type { LocalFormDefinition } from "./types";

export const pcrInteriorForm: LocalFormDefinition = {
  id: "pcr-interior",
  title: "PCR - Interior",
  category: "Property Condition Report (PCR)",
  description: "Interior rooms, finishes, systems, condition notes, and photo support.",
  fields: [
    { id: "roomCondition", label: "Room Condition Summary", kind: "textarea", required: true },
    { id: "kitchenBathCondition", label: "Kitchen / Bath Condition", kind: "textarea" },
    { id: "systemsObserved", label: "Systems Observed", kind: "textarea" },
    { id: "interiorRepairs", label: "Interior Repairs", kind: "textarea" }
  ]
};
