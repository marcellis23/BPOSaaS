import type { LocalFormDefinition } from "./types";

export const vacantLandSiteDataForm: LocalFormDefinition = {
  id: "vacant-land-site-data",
  title: "Vacant Land Site Data",
  category: "Property Condition Report (PCR)",
  description: "Zoning, frontage, utilities, topography, access, and easement observations.",
  fields: [
    { id: "zoning", label: "Zoning", kind: "text" },
    { id: "frontageDepth", label: "Frontage / Depth", kind: "text" },
    { id: "utilities", label: "Utilities", kind: "textarea", required: true },
    { id: "topography", label: "Topography", kind: "textarea" },
    { id: "easementsAccess", label: "Easements / Access", kind: "textarea" }
  ]
};
