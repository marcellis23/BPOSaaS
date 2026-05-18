import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

export const frontPhotosForm: LocalFormDefinition = {
  id: "front-photos",
  title: "Front Photos",
  category: "Addendums",
  description: "Subject property address and the eight required front, angle, street view, and street sign photos.",
  fields: [
    { id: "subjectAddress", label: "Street Address", kind: "text", required: true, placeholder: "123 Main St" },
    { id: "subjectUnit", label: "Unit No. (Apt, Ste, etc.)", kind: "text", placeholder: "Apt/Unit" },
    { id: "subjectCity", label: "City", kind: "text", required: true },
    { id: "subjectState", label: "State", kind: "select", required: true, options: stateOptions },
    { id: "subjectZip", label: "ZIP / Postal Code", kind: "text", required: true },
    { id: "photoUploadDivider", label: "Required Front Photo Set", kind: "divider", placeholder: "Upload all eight required subject, angle, street view, and street sign photos. Use JPG or PNG photos; resize very large phone images if upload time is slow." },
    { id: "subjectFront", label: "Subject Front", kind: "image", required: true, placeholder: "Upload the primary front view of the subject property." },
    { id: "subjectAddressPhoto", label: "Subject Address", kind: "image", required: true, placeholder: "Upload a clear image showing the subject address or address marker." },
    { id: "subjectLeftAngle", label: "Subject Left Angle", kind: "image", required: true, placeholder: "Upload the left-angle exterior view." },
    { id: "subjectRightAngle", label: "Subject Right Angle", kind: "image", required: true, placeholder: "Upload the right-angle exterior view." },
    { id: "streetViewLeft", label: "Street View Left", kind: "image", required: true, placeholder: "Upload the street scene looking left from the subject." },
    { id: "streetViewRight", label: "Street View Right", kind: "image", required: true, placeholder: "Upload the street scene looking right from the subject." },
    { id: "frontViewAcrossStreet", label: "Front View (Across the Street)", kind: "image", required: true, placeholder: "Upload the subject-facing view from across the street." },
    { id: "streetSign", label: "Street Sign", kind: "image", required: true, placeholder: "Upload the nearest relevant street sign." }
  ]
};
