import type { LocalFormDefinition } from "./types";

export const grossRentMultiplierForm: LocalFormDefinition = {
  id: "gross-rent-multiplier",
  title: "Gross Rent Multiplier (GRM)",
  category: "Broker Price Opinion (BPO)",
  description: "Rent multiplied by GRM as an income-based value cross-check.",
  fields: [
    { id: "marketRent", label: "Market Rent", kind: "text", required: true },
    { id: "grmRange", label: "GRM Range", kind: "text", required: true },
    { id: "grmIndicatedValue", label: "GRM Indicated Value", kind: "text", required: true },
    { id: "incomeNarrative", label: "Income Approach Narrative", kind: "textarea" }
  ]
};
