import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

export const floorplansSketchesForm: LocalFormDefinition = {
  id: "floorplans-sketches",
  title: "Floorplans / Sketches",
  category: "Addendums",
  description: "Upload labeled floor plan sketches for the subject property.",
  fields: [
    { id: "propertyAddress", label: "Property Address", kind: "text", required: true, placeholder: "123 Main St" },
    { id: "propertyUnit", label: "Apt / Lot / Parcel #", kind: "text", placeholder: "Unit 2B" },
    { id: "propertyCity", label: "City / Town", kind: "text", required: true },
    { id: "propertyState", label: "State", kind: "select", required: true, options: stateOptions },
    { id: "propertyZip", label: "ZIP Code", kind: "text", required: true },
    { id: "floorPlanDivider", label: "Floor Plan Sketches", kind: "divider", placeholder: "Upload one or more labeled floor plan sketches. Start with one and add more as needed." },
    {
      id: "floorPlanList",
      label: "Floor Plans",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Floor Plan",
      fields: [
        { id: "label", label: "Floor Plan Label", kind: "text", required: true, placeholder: "e.g., First Floor" },
        { id: "photo", label: "Floor Plan Sketch", kind: "image", required: true }
      ]
    }
  ]
};
