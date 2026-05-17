import type { LocalFormDefinition } from "./types";

export const frontPhotosForm: LocalFormDefinition = {
  id: "front-photos",
  title: "Front Photos",
  category: "Addendums",
  description: "Primary front shots, angle views, and street view documentation.",
  fields: [
    { id: "frontPhotoDescription", label: "Front Photo Description", kind: "textarea", required: true },
    { id: "streetSceneDescription", label: "Street Scene Description", kind: "textarea" },
    { id: "photoDate", label: "Photo Date", kind: "date" },
    { id: "photoExceptions", label: "Missing or Restricted Photos", kind: "textarea" }
  ]
};
