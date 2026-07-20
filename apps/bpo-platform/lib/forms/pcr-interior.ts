import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

const yesNoUnknownOptions = ["Yes", "No", "Unknown"];
const yesNoNaOptions = ["Yes", "No", "N/A"];
const overallConditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "N/A"];
const componentConditionOptions = ["Good", "Average", "Fair", "Poor", "Damaged", "N/A"];
const commonAreaConditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "N/A - Not Applicable", "Unknown / Not Accessible / Not Inspected"];
const associationVisible = {
  fieldId: "ownershipType",
  values: ["Fee Simple - Subject to HOA", "Condominium Ownership", "Cooperative (Co-Op) Ownership"]
};
const detailPropertyTypeVisible = { fieldId: "propertyType", values: ["Commercial", "Special Use / Institutional", "Land & Site Types"] };
const landSiteVisible = { fieldId: "propertyType", values: ["Land & Site Types"] };

const settingOptions = [
  "Urban - Central Business District (CBD)",
  "Urban - High-Density Residential",
  "Urban - Mixed Residential/Commercial",
  "Urban - Industrial/Commercial Corridor",
  "Urban - Transitional (Redevelopment Area)",
  "Urban - Rowhome/Townhouse District",
  "Urban - Multi-Family Residential Cluster",
  "Urban - Institutional/Campus Area",
  "Urban - Waterfront or Riverfront",
  "Urban - Heavy Traffic Arterial",
  "Suburban - Established Residential Neighborhood",
  "Suburban - Newer Residential Development",
  "Suburban - Mixed Residential/Commercial Corridor",
  "Suburban - Residential Cul-de-Sac or Court",
  "Suburban - Near Shopping Center or Retail Strip",
  "Suburban - Adjacent to Park, School, or Recreation Area",
  "Suburban - Transitional/Developing Area",
  "Suburban - Light Industrial Fringe",
  "Suburban - Golf Course or Planned Community",
  "Suburban - Near Major Highway or Commuter Route",
  "Rural - Agricultural / Farmland Area",
  "Rural - Low-Density Residential",
  "Rural - Village / Small Town Center",
  "Rural - Wooded / Forested Area",
  "Rural - Open Pasture / Meadow Setting",
  "Rural - Mountain / Hilltop Setting",
  "Rural - Lakeside / Riverfront Setting",
  "Rural - Mixed Agricultural and Residential",
  "Rural - Remote / Isolated Area",
  "Rural - Near Quarry, Mining, or Industrial Use",
  "Other (describe)",
  "Unknown / Not Assessed"
];

const primaryViewOptions = [
  "Park / Greenbelt",
  "Open Space (Unobstructed)",
  "Water View (River/Lake/Creek)",
  "Golf Course",
  "City Skyline",
  "Courtyard / Garden",
  "Trees / Wooded",
  "Seasonal Water View",
  "Mountain / Hilltop",
  "Residential Street - Similar Homes",
  "Residential Street - Mixed Housing Types",
  "Rear Alley / Service Drive",
  "Interior Block / Courtyard",
  "School / Playground",
  "Community Facilities (Library/Rec)",
  "Local Retail (Neighborhood-Scale)",
  "Light Rail/Transit (Not Adjacent)",
  "Commercial Corridor (Arterial)",
  "Industrial / Warehouse",
  "Highway / Ramp",
  "Railroad / Utility Corridor",
  "Parking Lot (Surface)",
  "Vacant Lots / Boarded Structures",
  "Construction / Redevelopment Site",
  "Municipal Facility (Treatment Plant/Depot)",
  "Cemetery",
  "Billboards / Signage Cluster",
  "Obstructed / Limited View",
  "Other (describe)",
  "Unknown / Not Assessed"
];

const levelOptions = [
  "Basement/Foundation",
  "First Floor Level",
  "Second Floor Level",
  "Third Floor Level",
  "Fourth Floor Level",
  "Fifth Floor Level",
  "Roof Top Level",
  "Other"
];

export const pcrInteriorForm: LocalFormDefinition = {
  id: "pcr-interior",
  title: "Property Condition Report (PCR) - Full Inspection",
  category: "Property Condition Report (PCR)",
  description: "Full interior and exterior property condition report with site, utilities, public records, room-level condition, repairs, and safety observations.",
  fields: [
    { id: "generalInfoDivider", label: "General Property Info", kind: "divider", placeholder: "Identify the property and confirm the report is tied to the correct parcel." },
    { id: "parcelId", label: "Parcel ID (PIN/BRT/OPA)", kind: "text", placeholder: "Use PIN/BRT/OPA format if known.", layoutSpan: 4 },
    { id: "propertyAddress", label: "Property Address", kind: "text", required: true, placeholder: "e.g., 123 Main St", layoutSpan: 3 },
    { id: "propertyUnit", label: "Unit #", kind: "text", placeholder: "e.g., Apt/Unit", layoutSpan: 1 },
    { id: "propertyCity", label: "City", kind: "text", required: true, layoutSpan: 2 },
    { id: "propertyState", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "propertyZip", label: "ZIP Code", kind: "text", required: true, placeholder: "e.g., 19104", layoutSpan: 1 },
    { id: "county", label: "County", kind: "text" },
    { id: "schoolDistrict", label: "School District", kind: "text" },
    {
      id: "propertyType",
      label: "Land / Site Type",
      kind: "select",
      required: true,
      options: [
        "Single Family Residence",
        "2-Unit Duplex",
        "3-Unit Triplex",
        "4-Unit Quadplex",
        "Multifamily (5+ Units)",
        "Condominium (Low-Rise)",
        "Condominium (High-Rise)",
        "Cooperative (Co-Op)",
        "Manufactured / Mobile Home",
        "Modular Home",
        "Mixed-Use (Residential + Commercial)",
        "Commercial",
        "Special Use / Institutional",
        "Land & Site Types"
      ]
    },
    {
      id: "ownershipType",
      label: "Ownership Type",
      kind: "select",
      required: true,
      options: [
        "Fee Simple (Full Ownership)",
        "Fee Simple - Subject to HOA",
        "Condominium Ownership",
        "Cooperative (Co-Op) Ownership",
        "Leasehold (Ground Lease / Long-Term Lease)",
        "Partial Interest / Fractional Ownership",
        "Life Estate"
      ]
    },
    { id: "occupancy", label: "Occupancy Status", kind: "select", required: true, options: ["Owner-Occupied", "Tenant-Occupied", "Vacant"] },
    { id: "propertyTypeDetail", label: "Detail Property Type", kind: "text", placeholder: "e.g., Office Building, Church, Warehouse", fullWidth: true, visibleWhen: detailPropertyTypeVisible },
    { id: "legalDescription", label: "Legal Description", kind: "textarea", placeholder: "Suggested: 100-400 characters." },
    { id: "landSiteTypesNotice", label: "Vacant Lot Feasibility Report Notice", kind: "divider", placeholder: "Please consider using the Vacant Lot Feasibility Report web form for land/site-only analysis.", visibleWhen: landSiteVisible },

    { id: "siteCharacteristicsDivider", label: "Site Characteristics", kind: "divider", placeholder: "Physical property attributes that affect utility, marketability, and condition." },
    { id: "siteSource", label: "Source", kind: "select", options: ["Public Records", "Assessment", "MLS Record", "Client Provided", "Self Inspection", "Other", "Unknown"], fullWidth: true },
    { id: "lotSize", label: "Lot Size (Sq Ft or Acres)", kind: "text", placeholder: "e.g., 10,000 or 0.25" },
    { id: "lotShape", label: "Lot Shape", kind: "select", options: ["Rectangular", "Irregular", "Flag", "Corner", "Pie", "N/A", "Unknown / Not Assessed"] },
    { id: "topography", label: "Topography", kind: "select", options: ["Level", "Gently Sloped", "Moderate Slope", "Steep", "Terraced", "Unknown / Not Assessed"], fullWidth: true },
    { id: "zoning", label: "Zoning", kind: "text", placeholder: "e.g., RSA-5", fullWidth: true },
    { id: "useConsistent", label: "Use Consistent?", kind: "select", options: ["Yes", "No"] },
    { id: "useConsistentExplain", label: "Explain Inconsistency", kind: "textarea", placeholder: "Suggested: 50-150 characters." },
    { id: "buildingStories", label: "Stories", kind: "number", placeholder: "e.g., 2" },
    { id: "buildingSize", label: "Bldg Size (SF)", kind: "number", placeholder: "e.g., 1500" },
    { id: "sitePropertyType", label: "Property Type", kind: "select", options: ["Detached", "Semi-detached", "Row/Townhouse", "Single Level Condominium", "Multi-Level Condominium", "Duplex", "Triplex", "Quadplex", "5+ Units", "Mixed Use", "Lot/Land", "Other"] },
    { id: "propertyStyle", label: "Property Style", kind: "select", options: ["Colonial", "Ranch", "Split-Level", "Contemporary", "Cape Cod", "Victorian", "Other"] },
    { id: "buildingConstruction", label: "Building Construction", kind: "select", options: ["Frame", "Masonry", "Brick", "Stone", "Mixed", "Other"], fullWidth: true },
    { id: "basementType", label: "Basement Type", kind: "select", options: ["None", "Crawlspace", "Partial Basement", "Full Basement"] },
    { id: "basementFinishing", label: "Basement Finishing", kind: "select", options: ["Fully Finished", "Partially Finished", "Unfinished", "N/A"] },
    { id: "garageParking", label: "Garage / Parking", kind: "select", options: ["None", "On-Street", "Driveway", "1-Car Garage", "2-Car+ Garage", "Other"] },
    { id: "poolSpa", label: "Pool / Spa", kind: "select", options: ["None", "Pool", "Spa", "Pool & Spa"] },
    { id: "extraAmenities", label: "Extra Amenities", kind: "textarea", placeholder: "e.g., Tennis Court, View. Suggested: 50-250 characters." },
    { id: "outbuildings", label: "Outbuildings", kind: "textarea", placeholder: "e.g., Shed, Detached Garage. Suggested: 50-250 characters." },
    { id: "siteInspectionSummary", label: "Site Inspection Summary", kind: "textarea", placeholder: "Suggested: 100-400 characters." },

    { id: "utilityDivider", label: "Utility Availability", kind: "divider", placeholder: "Check all utility connections known to be available at the lot line or immediately serviceable." },
    { id: "utilityPower", label: "Power", kind: "checkboxes", options: ["Electricity (overhead/underground)", "Renewable Energy (solar, wind)", "Backup Power (generator, battery)", "Unknown / Not Assessed"] },
    { id: "utilityHeatingCooling", label: "Heating & Cooling", kind: "checkboxes", options: ["Natural Gas (utility line)", "Propane (private tank)", "Fuel Oil (storage tank)", "Electric Heat Pump / HVAC", "Geothermal Heating & Cooling", "Unknown / Not Assessed"] },
    { id: "utilityWater", label: "Water Supply", kind: "checkboxes", options: ["Public/Municipal Water", "Private Well / Community Well", "Shared/Community System", "Irrigation Water (rights, etc.)", "Rainwater Harvesting / Cistern", "Unknown / Not Assessed"] },
    { id: "utilityWastewater", label: "Wastewater Disposal", kind: "checkboxes", options: ["Public Sewer", "Private Septic System", "Holding Tank", "Greywater Recycling System", "Unknown / Not Assessed"] },
    { id: "utilityCommunications", label: "Communications", kind: "checkboxes", options: ["Landline Telephone", "Internet (DSL, cable, fiber, etc.)", "Cable TV", "Cellular Network Coverage", "Unknown / Not Assessed"] },
    { id: "utilityDrainage", label: "Drainage & Environmental Systems", kind: "checkboxes", options: ["Stormwater Drainage (sewer, swales)", "Irrigation/Drainage Canals", "Retention Ponds / Rainwater Capture", "Unknown / Not Assessed"] },
    { id: "utilityMunicipalServices", label: "Municipal & Community Services", kind: "checkboxes", options: ["Solid Waste Disposal", "Street Lighting", "Fire Hydrant / Protection", "Unknown / Not Assessed"] },
    { id: "utilitiesNotes", label: "Notes on Utility Connections", kind: "textarea", placeholder: "Suggested: 100-300 characters." },

    { id: "associationDivider", label: "Association and Common Area Information", kind: "divider", placeholder: "Use when the property is subject to an HOA, condominium, cooperative, or shared common area arrangement.", visibleWhen: associationVisible },
    { id: "associationName", label: "Association / Cooperative Name", kind: "text", placeholder: "As shown in MLS/public records or signage.", visibleWhen: associationVisible },
    { id: "seniorOnlyCommunity", label: "Senior-Only Community", kind: "select", options: yesNoUnknownOptions, visibleWhen: associationVisible },
    { id: "associationDescription", label: "Association / Cooperative Summary Description", kind: "textarea", placeholder: "Short summary; public/MLS info only.", visibleWhen: associationVisible },
    { id: "associationAddress", label: "Contact Address", kind: "text", placeholder: "Street address if published.", visibleWhen: associationVisible },
    { id: "associationPhone", label: "Contact Phone", kind: "text", placeholder: "Numbers only if unsure of format.", visibleWhen: associationVisible },
    { id: "associationFeeAmount", label: "Association / Condo Fee", kind: "text", placeholder: "e.g., $425", visibleWhen: associationVisible },
    { id: "associationFeeFrequency", label: "Fee Paid", kind: "select", options: ["Monthly", "Quarterly", "Yearly", "Unknown"], visibleWhen: associationVisible },
    { id: "associationFeeIncludes", label: "Fee Includes", kind: "text", placeholder: "e.g., Water, Sewer, Trash, Exterior Maintenance", visibleWhen: associationVisible },
    { id: "associationParkingType", label: "Parking Type", kind: "select", options: ["Deeded", "Assigned", "Garage", "Open Lot", "Street Parking", "Unknown"], visibleWhen: associationVisible },
    { id: "associationPool", label: "Community Pool", kind: "select", options: yesNoUnknownOptions, visibleWhen: associationVisible },
    { id: "associationAmenities", label: "Common Amenities", kind: "text", placeholder: "e.g., Elevator, gym, community room", visibleWhen: associationVisible },
    { id: "associationNotes", label: "Association / Cooperative Detailed Summary", kind: "textarea", placeholder: "Keep concise; public/MLS info only.", visibleWhen: associationVisible },

    { id: "subjectSettingDivider", label: "Subject Setting and View", kind: "divider", placeholder: "Describe immediate surroundings, view quality, nearby construction, and broader external influences." },
    { id: "immediateSurroundings", label: "Immediate Surroundings (Setting)", kind: "select", required: true, options: settingOptions },
    { id: "surroundingsRating", label: "Surrounding Property Condition", kind: "select", required: true, options: ["Well Kept", "Mixed Condition", "Poorly Kept", "Unknown / Not Assessed"] },
    { id: "surroundingsReasonShort", label: "Brief reason for surrounding property condition", kind: "textarea", placeholder: "Limit: 350 characters." },
    { id: "primaryView", label: "Primary View", kind: "select", required: true, options: primaryViewOptions },
    { id: "constructionActive", label: "Nearby Active Construction / Renovation?", kind: "select", required: true, options: yesNoUnknownOptions },
    { id: "constructionReasonShort", label: "Construction / Renovation Notes", kind: "textarea", placeholder: "Limit: 350 characters." },
    { id: "contextDescription", label: "Comprehensive Setting and View Summary", kind: "textarea", placeholder: "Suggested: 150-400 characters." },

    { id: "publicRecordsDivider", label: "Public Records and Compliance", kind: "divider", placeholder: "Good-faith public-record and visible-use observations. Verify with the authority having jurisdiction as needed." },
    { id: "knownLiensEncroachments", label: "Any known liens or encroachments?", kind: "select", options: yesNoUnknownOptions },
    { id: "liensEncroachmentsExplain", label: "Liens / Encroachments Explanation", kind: "textarea", placeholder: "Type of lien/encroachment, document number/source, date if known." },
    { id: "activeLicenses", label: "Any active licenses on the property?", kind: "select", options: yesNoUnknownOptions },
    { id: "activeLicensesExplain", label: "Active Licenses Explanation", kind: "textarea", placeholder: "Rental license, use and occupancy, business license, etc." },
    { id: "knownViolations", label: "Any known violations on the property?", kind: "select", options: yesNoUnknownOptions },
    { id: "knownViolationsExplain", label: "Violations Explanation", kind: "textarea", placeholder: "Type of violation, notice number/source, approximate date." },
    { id: "knownFloodZone", label: "Is the property within a known Flood Zone?", kind: "select", options: yesNoUnknownOptions },
    { id: "knownFloodZoneExplain", label: "Known Flood Zone Explanation", kind: "textarea", placeholder: "FEMA zone, FIRM/MSC source, panel/date if known." },
    { id: "publicRecordsDisclaimer", label: "Public Records and Use Disclaimer", kind: "divider", placeholder: "Public-record lookups in this report are a good-faith snapshot from available sources and are not a code inspection, engineering report, legal opinion, or flood certification. Verify with the authority having jurisdiction and consult qualified professionals as needed." },

    { id: "overallConditionDivider", label: "Overall Condition Rating", kind: "divider", placeholder: "Overall property condition across interior and exterior observations." },
    { id: "overallConditionRating", label: "Overall Condition", kind: "select", required: true, options: overallConditionOptions, fullWidth: true },
    { id: "overallConditionNotes", label: "Explanation for Rating (required if Fair, Poor, Damaged, or N/A)", kind: "textarea", placeholder: "Max 1200 characters." },

    { id: "exteriorConditionDivider", label: "Exterior Condition", kind: "divider", placeholder: "Rate observed exterior components and summarize visible condition." },
    { id: "overallExteriorCondition", label: "Overall Exterior Condition Rating", kind: "select", required: true, options: overallConditionOptions, fullWidth: true },
    { id: "overallExteriorConditionExplain", label: "Brief explanation (required if Fair, Poor, or Damaged)", kind: "textarea", placeholder: "Suggested: 75-200 characters." },
    { id: "siteGroundsRating", label: "Condition Rating (Site and Grounds)", kind: "select", required: true, options: componentConditionOptions },
    { id: "siteGroundsExplain", label: "Site and Grounds Explanation", kind: "textarea", placeholder: "Sidewalks, driveways, landscaping, grading, retaining walls, fencing, etc." },
    { id: "exteriorStructureRating", label: "Condition Rating (Exterior Structure)", kind: "select", required: true, options: componentConditionOptions },
    { id: "exteriorStructureExplain", label: "Exterior Structure Explanation", kind: "textarea", placeholder: "Walls, siding, trim, foundation, soffit, fascia, garage structure, etc." },
    { id: "roofSystemRating", label: "Condition Rating (Roof System)", kind: "select", required: true, options: componentConditionOptions },
    { id: "roofSystemExplain", label: "Roof System Explanation", kind: "textarea", placeholder: "Roofing material, chimneys, gutters, downspouts, vents, etc." },
    { id: "entryOpeningsRating", label: "Condition Rating (Entry and Openings)", kind: "select", required: true, options: componentConditionOptions },
    { id: "entryOpeningsExplain", label: "Entry and Openings Explanation", kind: "textarea", placeholder: "Steps/porch, doors, windows, exterior lighting, outlets, hose bibs, etc." },

    { id: "commonAreaInspectionDivider", label: "Common Area Inspection", kind: "divider", placeholder: "Assess shared areas and amenities when available for inspection.", visibleWhen: associationVisible },
    { id: "commonAreaOverallCondition", label: "Overall Condition of Common Areas and Amenities", kind: "select", options: commonAreaConditionOptions, fullWidth: true, visibleWhen: associationVisible },
    { id: "commonAreaSummary", label: "Overall Condition of Common Areas and Amenities - Summary", kind: "textarea", placeholder: "Suggested: 150-400 characters.", visibleWhen: associationVisible },
    { id: "commonAreasCondition", label: "Common Areas", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "commonAreasNotes", label: "Common Area Notes", kind: "textarea", placeholder: "Max 200 characters.", visibleWhen: associationVisible },
    { id: "parkingAreaCondition", label: "Parking Area", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "parkingAreaNotes", label: "Parking Area Notes", kind: "textarea", placeholder: "Max 200 characters.", visibleWhen: associationVisible },
    { id: "poolAreaCondition", label: "Pool", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "poolAreaNotes", label: "Pool Area Notes", kind: "textarea", placeholder: "Max 200 characters.", visibleWhen: associationVisible },
    { id: "extraAmenitiesCondition", label: "Extra Amenities", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "extraAmenitiesNotes", label: "Extra Amenities Notes", kind: "textarea", placeholder: "Max 200 characters.", visibleWhen: associationVisible },
    { id: "elevatorCondition", label: "Elevator", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "elevatorNotes", label: "Elevator Notes", kind: "textarea", placeholder: "Max 200 characters.", visibleWhen: associationVisible },
    { id: "securityCondition", label: "Security", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "securityNotes", label: "Security Notes", kind: "textarea", placeholder: "Max 200 characters.", visibleWhen: associationVisible },

    { id: "interiorConditionDivider", label: "Interior Condition and Level Details", kind: "divider", placeholder: "Document overall interior condition, levels, rooms, room counts, and room-level notes." },
    { id: "overallInteriorCondition", label: "Overall Interior Condition Rating", kind: "select", required: true, options: overallConditionOptions, fullWidth: true },
    { id: "overallInteriorConditionNotes", label: "Brief explanation (required if Fair, Poor, Damaged, or N/A)", kind: "textarea", placeholder: "Suggested: 80-200 characters." },
    { id: "interiorLevels", label: "Number of Levels", kind: "number", required: true, placeholder: "Range: 1-8" },
    { id: "totalRooms", label: "No. of Rooms (Total)", kind: "number" },
    { id: "totalBedrooms", label: "No. of Bedrooms", kind: "number" },
    { id: "totalFullBaths", label: "Full Baths", kind: "number" },
    { id: "totalHalfBaths", label: "Half Baths", kind: "number" },
    {
      id: "levelDetails",
      label: "Level Details",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Level",
      fields: [
        { id: "title", label: "Level Title", kind: "select", required: true, options: levelOptions },
        { id: "condition", label: "Level Condition", kind: "select", required: true, options: overallConditionOptions },
        { id: "otherTitle", label: "If Other, Level Name", kind: "text", placeholder: "e.g., Mezzanine" },
        { id: "notes", label: "Level Notes", kind: "textarea", placeholder: "Suggested: 80-200 characters." }
      ]
    },
    {
      id: "roomDetails",
      label: "Room Details",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Room",
      fields: [
        { id: "level", label: "Level", kind: "select", required: true, options: levelOptions },
        { id: "type", label: "Room Type", kind: "select", required: true, options: ["Living Room", "Family Room", "Dining Room", "Kitchen", "Bedroom", "Full Bath", "Half Bath", "Laundry/Utility", "Office/Den", "Hall/Closet", "Other"] },
        { id: "name", label: "Room Name", kind: "text", placeholder: "e.g., Primary Bedroom, Front Living" },
        { id: "condition", label: "Room Condition", kind: "select", required: true, options: overallConditionOptions },
        { id: "notes", label: "Room Notes", kind: "textarea", placeholder: "Required if below Average." }
      ]
    },

    { id: "repairsDivider", label: "Recent Repairs and Upgrades", kind: "divider", placeholder: "Document recent kitchen/bath updates, major repairs, and individual repair or upgrade items." },
    { id: "recentKitchenBath", label: "Major updates to kitchen and/or bathrooms within the last 10 years?", kind: "select", required: true, options: ["Yes", "No"] },
    { id: "recentKitchenBathExplain", label: "If Yes, please explain", kind: "textarea", placeholder: "Suggested: 100-300 characters." },
    { id: "recentMajorUpdate", label: "Major updates or repairs within the last 5 years?", kind: "select", required: true, options: ["Yes", "No"] },
    { id: "recentMajorUpdateExplain", label: "If Yes, please explain", kind: "textarea", placeholder: "Suggested: 100-300 characters." },
    {
      id: "repairItems",
      label: "Individual Repairs / Upgrades",
      kind: "repeater",
      addButtonLabel: "Add Repair / Upgrade",
      fields: [
        { id: "category", label: "Category", kind: "select", options: ["Roof", "Exterior/Siding", "Windows/Doors", "Foundation/Structure", "HVAC", "Electrical", "Plumbing", "Kitchen", "Bathroom", "Flooring", "Interior/Finish", "Appliances", "Landscaping/Site", "Other"] },
        { id: "description", label: "Description", kind: "text" },
        { id: "cost", label: "Cost ($)", kind: "number", placeholder: "0.00" }
      ]
    },
    { id: "totalRepairCost", label: "Total Approx. Repair / Upgrade Cost", kind: "number", placeholder: "0.00" },

    { id: "healthSafetyDivider", label: "Health and Safety", kind: "divider", placeholder: "Immediate concerns related to potential harm, code compliance, or external factors." },
    { id: "visibleHazards", label: "Visible hazards (loose steps, missing railings, unsafe entry)?", kind: "select", required: true, options: yesNoNaOptions },
    { id: "visibleHazardsNotes", label: "Visible Hazards Notes / Details", kind: "textarea", placeholder: "Notes recommended if you select Yes. Max 200 characters." },
    { id: "visibleCodeViolations", label: "Visible code violations?", kind: "select", required: true, options: yesNoNaOptions },
    { id: "visibleCodeViolationsNotes", label: "Visible Code Violations Notes / Details", kind: "textarea", placeholder: "Notes recommended if you select Yes. Max 200 characters." },
    { id: "exteriorOdors", label: "Obvious exterior odors present?", kind: "select", required: true, options: yesNoNaOptions },
    { id: "exteriorOdorsNotes", label: "Exterior Odors Notes / Details", kind: "textarea", placeholder: "Notes recommended if you select Yes. Max 200 characters." },
    { id: "healthSafetySummary", label: "Health & Safety Summary", kind: "textarea", placeholder: "Suggested: 120-300 characters." }
  ]
};
