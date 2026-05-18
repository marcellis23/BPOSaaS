import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

export const additionalPhotosForm: LocalFormDefinition = {
  id: "additional-photos",
  title: "Additional Photos",
  category: "Addendums",
  description: "Upload additional interior, exterior, repair, and supporting condition photos.",
  fields: [
    { id: "subjectAddress", label: "Street Address", kind: "text", required: true, placeholder: "123 Main St" },
    { id: "subjectUnit", label: "Unit No. (Apt, Ste, etc.)", kind: "text", placeholder: "Apt/Unit" },
    { id: "subjectCity", label: "City", kind: "text", required: true },
    { id: "subjectState", label: "State", kind: "select", required: true, options: stateOptions },
    { id: "subjectZip", label: "ZIP / Postal Code", kind: "text", required: true },
    { id: "photoUploadDivider", label: "Additional Photo Set", kind: "divider", placeholder: "Upload any number of additional photos. Start with one and add more as needed." },
    {
      id: "photoAreaSelect",
      label: "Photo Area",
      kind: "select",
      required: true,
      options: [
        "Basement", "First Floor", "Second Floor", "Third Floor", 
        "Fourth Floor", "Additional Exterior", "Utilities/Mechanicals", "Other"
      ]
    },
    { id: "photoAreaOther", label: "If Other, please describe", kind: "text", placeholder: "e.g., Detached Garage" },
    {
      id: "photoList",
      label: "Photos",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Another Photo",
      fields: [
        { id: "photo", label: "Photo", kind: "image", required: true },
        { id: "description", label: "Photo Description", kind: "text" }
      ]
    }
  ]
};
