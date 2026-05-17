import type { LocalFormDefinition } from "./types";

export const aerialViewsForm: LocalFormDefinition = {
  id: "aerial-views",
  title: "Aerial Views",
  category: "Addendums",
  description: "Subject, comparable, aerial, map, and neighborhood views.",
  fields: [
    { id: "mapSource", label: "Map / Aerial Source", kind: "text" },
    { id: "siteOrientation", label: "Site Orientation", kind: "textarea", required: true },
    { id: "nearbyInfluences", label: "Nearby Influences", kind: "textarea" },
    { id: "accessAndVisibility", label: "Access and Visibility", kind: "textarea" }
  ]
};
