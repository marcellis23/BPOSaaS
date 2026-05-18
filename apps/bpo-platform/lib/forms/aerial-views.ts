import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

export const aerialViewsForm: LocalFormDefinition = {
  id: "aerial-views",
  title: "Aerial Views",
  category: "Addendums",
  description: "Upload subject property field photos plus optional market, neighborhood, flood, plat, and zoning map exhibits.",
  fields: [
    { id: "propertyAddress", label: "Property Address", kind: "text", placeholder: "123 Main St" },
    { id: "propertyUnit", label: "Apt / Lot / Parcel #", kind: "text", placeholder: "Unit 2B" },
    { id: "propertyCity", label: "City / Town", kind: "text" },
    { id: "propertyState", label: "State", kind: "select", options: stateOptions },
    { id: "propertyZip", label: "ZIP Code", kind: "text" },
    { id: "fieldPhotosDivider", label: "Property & Field Photos", kind: "divider", placeholder: "Upload any labeled field photos needed for the aerial views exhibit." },
    {
      id: "fieldPhotoList",
      label: "Property & Field Photos",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Photo",
      fields: [
        { id: "label", label: "Photo Label", kind: "text", placeholder: "e.g., Subject Front" },
        { id: "photo", label: "Photo", kind: "image" }
      ]
    },
    { id: "mapAerialDivider", label: "Map & Aerial Views", kind: "divider", placeholder: "Upload desired aerials, maps, and exhibits. These are optional." },
    { id: "marketAreaStandard", label: "Market Area View Standard", kind: "image" },
    { id: "marketAreaSatellite", label: "Market Area View Satellite", kind: "image" },
    { id: "neighborhoodStandard", label: "Neighborhood View Standard", kind: "image" },
    { id: "neighborhoodSatellite", label: "Neighborhood View Satellite", kind: "image" },
    { id: "floodMapNeighborhood", label: "Flood Map (Neighborhood View)", kind: "image" },
    { id: "platTaxMap", label: "Plat / Tax Map", kind: "image" },
    { id: "zoningMapNeighborhood", label: "Zoning Map (Neighborhood View)", kind: "image" }
  ]
};
