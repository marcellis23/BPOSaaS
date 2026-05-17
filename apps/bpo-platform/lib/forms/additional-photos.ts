import type { LocalFormDefinition } from "./types";

export const additionalPhotosForm: LocalFormDefinition = {
  id: "additional-photos",
  title: "Additional Photos",
  category: "Addendums",
  description: "Labeled interior, exterior, repair, and supporting condition photo sets.",
  fields: [
    { id: "photoInventory", label: "Photo Inventory", kind: "textarea", required: true },
    { id: "conditionObserved", label: "Condition Observed in Photos", kind: "textarea", required: true },
    { id: "repairPhotoNotes", label: "Repair Photo Notes", kind: "textarea" },
    { id: "photoLimitations", label: "Photo Limitations", kind: "textarea" }
  ]
};
