import type { FormField } from "../types";
import type { LocalFormDefinition } from "./types";

const viewOptions = [
  "A. Beneficial / Desirable",
  "Park / Greenbelt",
  "Open Space (Unobstructed)",
  "Water View (River/Lake/Creek)",
  "Golf Course",
  "City Skyline",
  "Courtyard / Garden",
  "Trees / Wooded",
  "Seasonal Water View",
  "Mountain / Hilltop",
  "B. Typical / Neutral",
  "Residential Street - Similar Homes",
  "Residential Street - Mixed Housing Types",
  "Rear Alley / Service Drive",
  "Interior Block / Courtyard",
  "School / Playground",
  "Community Facilities (Library/Rec)",
  "Local Retail (Neighborhood-Scale)",
  "Light Rail/Transit (Not Adjacent)",
  "C. Adverse / Potentially Adverse",
  "Commercial Corridor (Arterial)",
  "Industrial / Warehouse",
  "Highway / Ramp",
  "Railroad / Utility Corridor",
  "Parking Lot (Surface)",
  "Vacant Lots / Boarded Structures",
  "Construction / Redevelopment Site",
  "Municipal Facility (Treatment Plant/Depot)",
  "Cemetery",
  "Billboards / Signage Cluster"
];

const comparisonOptions = ["Superior", "Similar", "Inferior"];

function compFields(prefix: string, title: string, mapId: string): FormField[] {
  return [
    { id: `${prefix}Divider`, label: title, kind: "divider", placeholder: `Upload the ${title.toLowerCase()} photo and identify its location relationship to the subject.` },
    { id: `${prefix}Photo`, label: `${title} Photo`, kind: "image", placeholder: "Upload JPG or PNG photo." },
    { id: `${prefix}MapId`, label: "Map ID", kind: "text", placeholder: mapId },
    { id: `${prefix}Proximity`, label: "Proximity to Subject", kind: "text", placeholder: "e.g., 0.3 miles NE" },
    { id: `${prefix}Address`, label: "Property Address", kind: "text", placeholder: "Comparable property address" },
    { id: `${prefix}PrimaryView`, label: "Primary View", kind: "select", options: viewOptions },
    { id: `${prefix}Comparison`, label: "Property Comparison", kind: "select", options: comparisonOptions }
  ];
}

export const subjectCompsForm: LocalFormDefinition = {
  id: "subject-comps",
  title: "Comparable Map & Photos",
  category: "Comparable Market Analysis (CMA)",
  description: "Map addendum and photo exhibit showing the subject property and selected active, sold, and ARV comparables.",
  fields: [
    { id: "locationMapDivider", label: "Location Map", kind: "divider", placeholder: "Upload the map showing the subject and selected comparable property locations." },
    { id: "mapImage", label: "Map of Subject and Selected Comps", kind: "image", required: true, placeholder: "Upload JPG or PNG map image." },

    { id: "subjectDivider", label: "Subject Property", kind: "divider", placeholder: "Identify the subject property as it appears on the comparable location map." },
    { id: "subjectPhoto", label: "Subject Property Photo", kind: "image", required: true, placeholder: "Upload JPG or PNG subject photo." },
    { id: "subjectMapId", label: "Map ID", kind: "text", placeholder: "S" },
    { id: "subjectAddress", label: "Property Address", kind: "text", required: true, placeholder: "Subject property address" },
    { id: "subjectPrimaryView", label: "Primary View", kind: "select", options: viewOptions },

    { id: "activeCompsDivider", label: "Active / Pending Comparables", kind: "divider", placeholder: "Upload selected active or pending comparable photos and location details." },
    ...compFields("activeComp1", "Active Comp 1", "1"),
    ...compFields("activeComp2", "Active Comp 2", "2"),
    ...compFields("activeComp3", "Active Comp 3", "3"),

    { id: "soldCompsDivider", label: "Sold Comparables", kind: "divider", placeholder: "Upload selected sold comparable photos and location details." },
    ...compFields("soldComp1", "Sold Comp 1", "4"),
    ...compFields("soldComp2", "Sold Comp 2", "5"),
    ...compFields("soldComp3", "Sold Comp 3", "6"),

    { id: "arvCompsDivider", label: "ARV Comparables (Optional)", kind: "divider", placeholder: "Upload after-repair comparable photos when the assignment includes ARV analysis." },
    ...compFields("arvComp1", "ARV Comp 1", "7"),
    ...compFields("arvComp2", "ARV Comp 2", "8"),
    ...compFields("arvComp3", "ARV Comp 3", "9")
  ]
};
