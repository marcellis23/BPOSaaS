import type { LocalFormDefinition } from "./types";

export const pcrExteriorForm: LocalFormDefinition = {
  id: "pcr-exterior",
  title: "PCR - Exterior",
  category: "Property Condition Report (PCR)",
  description: "Exterior condition, safety, curb appeal, major defects, and restricted-access observations.",
  fields: [
    { id: "occupancy", label: "Occupancy", kind: "select", required: true, options: ["Occupied", "Vacant", "Unknown", "Restricted access"] },
    { id: "overallExteriorCondition", label: "Overall Exterior Condition", kind: "select", required: true, options: ["Excellent", "Good", "Average", "Fair", "Poor"] },
    { id: "siteCharacteristics", label: "Site Characteristics", kind: "textarea", required: true },
    { id: "visibleRepairs", label: "Visible Repairs / Deferred Maintenance", kind: "textarea" },
    { id: "safetyConcerns", label: "Safety Concerns", kind: "textarea" }
  ]
};
