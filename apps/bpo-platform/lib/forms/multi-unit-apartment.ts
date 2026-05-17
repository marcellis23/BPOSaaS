import type { LocalFormDefinition } from "./types";

export const multiUnitApartmentForm: LocalFormDefinition = {
  id: "multi-unit-apartment",
  title: "Multi-Unit Apartment",
  category: "Market Analysis Report (MAR)",
  description: "Unit mix, condition, rent potential, market activity, and income context.",
  fields: [
    { id: "unitMix", label: "Unit Mix", kind: "textarea", required: true },
    { id: "rentRollNotes", label: "Rent Roll Notes", kind: "textarea" },
    { id: "incomePotential", label: "Income Potential", kind: "textarea", required: true },
    { id: "multiUnitRisks", label: "Multi-Unit Risks", kind: "textarea" }
  ]
};
