import type { LocalFormDefinition } from "./types";

export const floorplansSketchesForm: LocalFormDefinition = {
  id: "floorplans-sketches",
  title: "Floorplans / Sketches",
  category: "Addendums",
  description: "Layout diagrams, room dimensions, sketches, and floor plan exhibits.",
  fields: [
    { id: "layoutSummary", label: "Layout Summary", kind: "textarea", required: true },
    { id: "roomCountNotes", label: "Room Count / Dimensions Notes", kind: "textarea" },
    { id: "functionalUtility", label: "Functional Utility Notes", kind: "textarea" },
    { id: "sketchLimitations", label: "Sketch Limitations", kind: "textarea" }
  ]
};
