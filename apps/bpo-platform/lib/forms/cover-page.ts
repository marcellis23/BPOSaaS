import type { LocalFormDefinition } from "./types";

export const coverPageForm: LocalFormDefinition = {
  id: "cover-page",
  title: "Cover Page",
  category: "Final Report",
  description: "Property identifiers, client details, order type, inspection type, and report date.",
  fields: [
    { id: "reportPurpose", label: "Report Purpose", kind: "textarea", required: true },
    { id: "effectiveDate", label: "Effective Date", kind: "date", required: true },
    { id: "inspectionType", label: "Inspection Type", kind: "select", required: true, options: ["Interior and exterior", "Exterior only", "Drive-by", "Desktop review"] },
    { id: "preparedBy", label: "Prepared By", kind: "text", required: true },
    { id: "licenseNumber", label: "License Number", kind: "text" }
  ]
};
