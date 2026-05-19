import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

const yesNoUnknownOptions = ["Yes", "No", "Unknown"];
const yesNoNaOptions = ["Yes", "No", "N/A"];
const conditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "N/A"];
const exteriorConditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "N/A - Not Applicable", "Unknown / Not Inspected"];
const commonAreaConditionOptions = ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "N/A - Not Applicable", "Unknown / Not Accessible / Not Inspected"];
const associationVisible = { fieldId: "hasAssociation", values: ["Yes"] };

export const pcrInteriorForm: LocalFormDefinition = {
  id: "pcr-interior",
  title: "PCR - Interior",
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
    { id: "propertyTypeDetail", label: "Detail Property Type", kind: "text", placeholder: "e.g., Office Building, Church, Warehouse", fullWidth: true },
    { id: "legalDescription", label: "Legal Description", kind: "textarea", placeholder: "Suggested: 100-400 characters." },

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
    { id: "basementType", label: "Basement Type", kind: "select", options: ["None", "Full", "Partial", "Crawl Space", "Slab", "Unknown"] },
    { id: "basementFinishing", label: "Basement Finishing", kind: "select", options: ["N/A", "Unfinished", "Partially Finished", "Finished", "Unknown"] },
    { id: "garageParking", label: "Garage / Parking", kind: "select", options: ["None", "On-Street", "Driveway", "1-Car Garage", "2-Car+ Garage", "Other"] },
    { id: "poolSpa", label: "Pool / Spa", kind: "select", options: ["None", "Pool", "Spa", "Pool & Spa"] },
    { id: "extraAmenities", label: "Extra Amenities", kind: "textarea", placeholder: "e.g., Tennis Court, View" },
    { id: "outbuildings", label: "Outbuildings", kind: "textarea", placeholder: "e.g., Shed, Detached Garage" },
    { id: "siteInspectionSummary", label: "Site Inspection Summary", kind: "textarea", placeholder: "Easements, encroachments, site influences, proximity to amenities, traffic, etc." },

    { id: "utilityDivider", label: "Utility Availability", kind: "divider", placeholder: "Check all utility connections known to be available at the lot line or immediately serviceable." },
    { id: "utilityPower", label: "Power", kind: "checkboxes", options: ["Electricity", "Renewable Energy", "Backup Power", "Unknown / Not Assessed"] },
    { id: "utilityHeatingCooling", label: "Heating & Cooling", kind: "checkboxes", options: ["Natural Gas", "Propane", "Fuel Oil", "Electric Heat Pump / HVAC", "Geothermal Heating & Cooling", "Unknown / Not Assessed"] },
    { id: "utilityWater", label: "Water Supply", kind: "checkboxes", options: ["Public/Municipal Water", "Private/Community Well", "Shared/Community System", "Irrigation Water", "Rainwater Harvesting / Cistern", "Unknown / Not Assessed"] },
    { id: "utilityWastewater", label: "Wastewater Disposal", kind: "checkboxes", options: ["Public Sewer", "Private Septic System", "Holding Tank", "Greywater Recycling System", "Unknown / Not Assessed"] },
    { id: "utilityCommunications", label: "Communications", kind: "checkboxes", options: ["Landline Telephone", "Internet", "Cable TV", "Cellular Network Coverage", "Unknown / Not Assessed"] },
    { id: "utilityDrainage", label: "Drainage & Environmental Systems", kind: "checkboxes", options: ["Stormwater Drainage", "Irrigation/Drainage Canals", "Retention Ponds / Rainwater Capture", "Unknown / Not Assessed"] },
    { id: "utilityMunicipalServices", label: "Municipal & Community Services", kind: "checkboxes", options: ["Solid Waste Disposal", "Street Lighting", "Fire Hydrant / Protection", "Unknown / Not Assessed"] },
    { id: "utilitiesNotes", label: "Notes on Utility Connections", kind: "textarea", placeholder: "Mix, distance, costs, special needs, etc." },

    { id: "hasAssociation", label: "Is this property part of an HOA / Condo / Cooperative community?", kind: "select", required: true, options: yesNoUnknownOptions },
    { id: "associationDivider", label: "Association and Common Area Information", kind: "divider", placeholder: "Use when the property is subject to an HOA, condominium, cooperative, or shared common area arrangement.", visibleWhen: associationVisible },
    { id: "associationName", label: "Association / Cooperative Name", kind: "text", visibleWhen: associationVisible },
    { id: "seniorOnlyCommunity", label: "Senior-Only Community", kind: "select", options: yesNoUnknownOptions, visibleWhen: associationVisible },
    { id: "associationDescription", label: "Association / Cooperative Summary Description", kind: "textarea", visibleWhen: associationVisible },
    { id: "associationAddress", label: "Contact Address", kind: "text", visibleWhen: associationVisible },
    { id: "associationPhone", label: "Contact Phone", kind: "text", visibleWhen: associationVisible },
    { id: "associationFeeAmount", label: "Association / Condo Fee", kind: "text", placeholder: "e.g., $425", visibleWhen: associationVisible },
    { id: "associationFeeFrequency", label: "Fee Paid", kind: "select", options: ["Monthly", "Quarterly", "Yearly", "Unknown"], visibleWhen: associationVisible },
    { id: "associationFeeIncludes", label: "Fee Includes", kind: "text", placeholder: "e.g., Water, Sewer, Trash, Exterior Maintenance", visibleWhen: associationVisible },
    { id: "associationParkingType", label: "Parking Type", kind: "select", options: ["Deeded", "Assigned", "Garage", "Open Lot", "Street Parking", "Unknown"], visibleWhen: associationVisible },
    { id: "associationPool", label: "Community Pool", kind: "select", options: yesNoUnknownOptions, visibleWhen: associationVisible },
    { id: "associationAmenities", label: "Common Amenities", kind: "text", placeholder: "e.g., Elevator, gym, community room", visibleWhen: associationVisible },
    { id: "associationNotes", label: "Association / Cooperative Detailed Summary", kind: "textarea", visibleWhen: associationVisible },

    { id: "subjectSettingDivider", label: "Subject Setting and View", kind: "divider", placeholder: "Describe immediate surroundings, view quality, nearby construction, and broader external influences." },
    { id: "immediateSurroundings", label: "Immediate Surroundings", kind: "textarea", placeholder: "Describe the immediate surroundings of the subject property." },
    { id: "surroundingsRating", label: "Rating of Immediately Surrounding Properties", kind: "select", options: ["Excellent", "Good", "Average", "Fair", "Poor", "Mixed / Transitioning", "Unknown / Not Assessed"] },
    { id: "surroundingsReasonShort", label: "Surroundings Rating Reason", kind: "textarea", placeholder: "Limit: 350 characters." },
    { id: "primaryView", label: "Primary View", kind: "textarea", placeholder: "Describe the primary view from or toward the subject property." },
    { id: "constructionActive", label: "Nearby Active Construction / Renovation?", kind: "select", options: yesNoUnknownOptions },
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

    { id: "overallConditionDivider", label: "Overall Condition Rating", kind: "divider", placeholder: "Overall property condition across interior and exterior observations." },
    { id: "overallConditionRating", label: "Overall Condition Rating", kind: "select", required: true, options: ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged", "N/A"], fullWidth: true },
    { id: "overallConditionNotes", label: "Overall Condition Notes", kind: "textarea", placeholder: "Brief explanation required if Fair, Poor, Damaged, or N/A." },

    { id: "exteriorConditionDivider", label: "Exterior Condition", kind: "divider", placeholder: "Rate observed exterior components and summarize visible condition." },
    { id: "overallExteriorCondition", label: "Overall Exterior Condition", kind: "select", required: true, options: ["C1 - New / Recently Renovated", "C2 - Well Maintained", "C3 - Average / Typical", "C4 - Fair / Deferred Maintenance", "C5 - Poor / Significant Repairs Needed", "C6 - Severe Damage / Unsafe", "Unknown / Not Inspected"], fullWidth: true },
    { id: "overallExteriorConditionExplain", label: "Overall Exterior Condition Explanation", kind: "textarea", placeholder: "Explain the selected overall exterior condition." },
    { id: "siteGroundsRating", label: "Condition Rating (Site and Grounds)", kind: "select", required: true, options: exteriorConditionOptions },
    { id: "siteGroundsExplain", label: "Site and Grounds Explanation", kind: "textarea", placeholder: "Landscaping, grading, retaining walls, fencing, debris, standing water, etc." },
    { id: "exteriorStructureRating", label: "Condition Rating (Exterior Structure and Components)", kind: "select", required: true, options: exteriorConditionOptions },
    { id: "exteriorStructureExplain", label: "Exterior Structure and Components Explanation", kind: "textarea", placeholder: "Siding, masonry, trim, foundation exposure, gutters, visible damage, etc." },
    { id: "roofSystemRating", label: "Condition Rating (Roof System)", kind: "select", required: true, options: exteriorConditionOptions },
    { id: "roofSystemExplain", label: "Roof System Explanation", kind: "textarea", placeholder: "Roof covering, flashing, visible sagging, missing shingles, gutters, etc." },
    { id: "entryOpeningsRating", label: "Condition Rating (Entry and Exterior Openings)", kind: "select", required: true, options: exteriorConditionOptions },
    { id: "entryOpeningsExplain", label: "Entry and Exterior Openings Explanation", kind: "textarea", placeholder: "Doors, windows, frames, steps, porch, railing, garage doors, etc." },

    { id: "commonAreaInspectionDivider", label: "Common Area Inspection", kind: "divider", placeholder: "Assess shared areas and amenities when available for inspection.", visibleWhen: associationVisible },
    { id: "commonAreaOverallCondition", label: "Overall Condition of Common Areas and Amenities", kind: "select", options: commonAreaConditionOptions, fullWidth: true, visibleWhen: associationVisible },
    { id: "commonAreaSummary", label: "Overall Condition of Common Areas and Amenities - Summary", kind: "textarea", placeholder: "Significant observations, deferred maintenance, or safety concerns.", visibleWhen: associationVisible },
    { id: "commonAreasCondition", label: "Common Areas", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "commonAreasNotes", label: "Common Area Notes", kind: "textarea", placeholder: "Lobbies, corridors, clubhouse, mailroom, etc.", visibleWhen: associationVisible },
    { id: "parkingAreaCondition", label: "Parking Area", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "parkingAreaNotes", label: "Parking Area Notes", kind: "textarea", placeholder: "Lot/garage condition, striping, lighting, access, signage.", visibleWhen: associationVisible },
    { id: "poolAreaCondition", label: "Pool", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "poolAreaNotes", label: "Pool Area Notes", kind: "textarea", placeholder: "Fencing, deck surface, visible maintenance; leave blank if N/A.", visibleWhen: associationVisible },
    { id: "extraAmenitiesCondition", label: "Extra Amenities", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "extraAmenitiesNotes", label: "Extra Amenities Notes", kind: "textarea", placeholder: "Gym, community room, playground, courtyard, etc.", visibleWhen: associationVisible },
    { id: "elevatorCondition", label: "Elevator", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "elevatorNotes", label: "Elevator Notes", kind: "textarea", placeholder: "Operational status not tested; call panel condition; signage.", visibleWhen: associationVisible },
    { id: "securityCondition", label: "Security", kind: "select", options: commonAreaConditionOptions, visibleWhen: associationVisible },
    { id: "securityNotes", label: "Security Notes", kind: "textarea", placeholder: "Cameras, intercoms, access control, gate/door hardware.", visibleWhen: associationVisible },

    { id: "interiorConditionDivider", label: "Interior Condition and Level Details", kind: "divider", placeholder: "Document overall interior condition, levels, rooms, room counts, and room-level notes." },
    { id: "overallInteriorCondition", label: "Overall Interior Condition Rating", kind: "select", required: true, options: conditionOptions, fullWidth: true },
    { id: "overallInteriorConditionNotes", label: "Overall Interior Condition Notes", kind: "textarea", placeholder: "Brief explanation required if Fair, Poor, Damaged, or N/A." },
    { id: "interiorLevels", label: "Number of Levels", kind: "number", required: true, placeholder: "1" },
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
        { id: "title", label: "Level Title", kind: "select", required: true, options: ["Basement/Foundation", "First Floor Level", "Second Floor Level", "Third Floor Level", "Fourth Floor Level", "Fifth Floor Level", "Roof Top Level", "Other"] },
        { id: "condition", label: "Level Condition", kind: "select", required: true, options: conditionOptions },
        { id: "otherTitle", label: "If Other, Level Name", kind: "text", placeholder: "e.g., Mezzanine" },
        { id: "notes", label: "Level Notes", kind: "textarea", placeholder: "Summarize finish quality, moisture evidence, ceiling/wall/floor condition, trim/doors, etc." }
      ]
    },
    {
      id: "roomDetails",
      label: "Room Details",
      kind: "repeater",
      minItems: 1,
      addButtonLabel: "Add Room",
      fields: [
        { id: "level", label: "Level", kind: "text", placeholder: "e.g., First Floor" },
        { id: "type", label: "Room Type", kind: "select", required: true, options: ["Living Room", "Family Room", "Dining Room", "Kitchen", "Bedroom", "Full Bath", "Half Bath", "Laundry/Utility", "Office/Den", "Hall/Closet", "Other"] },
        { id: "name", label: "Room Name", kind: "text", placeholder: "e.g., Primary Bedroom, Front Living" },
        { id: "condition", label: "Room Condition", kind: "select", required: true, options: conditionOptions },
        { id: "notes", label: "Room Notes", kind: "textarea", placeholder: "Required if below Average. Note worn flooring, missing GFCI, moisture staining, etc." }
      ]
    },

    { id: "repairsDivider", label: "Recent Repairs and Upgrades", kind: "divider", placeholder: "Document recent kitchen/bath updates, major repairs, and individual repair or upgrade items." },
    { id: "recentKitchenBath", label: "Major updates to kitchen and/or bathrooms within the last 10 years?", kind: "select", required: true, options: ["Yes", "No"] },
    { id: "recentKitchenBathExplain", label: "Kitchen / Bath Update Explanation", kind: "textarea", placeholder: "e.g., Kitchen remodeled 2019; hall bath updated 2021." },
    { id: "recentMajorUpdate", label: "Major updates or repairs within the last 5 years?", kind: "select", required: true, options: ["Yes", "No"] },
    { id: "recentMajorUpdateExplain", label: "Major Update / Repair Explanation", kind: "textarea", placeholder: "e.g., New roof 2023, HVAC 2022, electrical panel upgrade 2021." },
    {
      id: "repairItems",
      label: "Individual Repairs / Upgrades",
      kind: "repeater",
      addButtonLabel: "Add Repair / Upgrade",
      fields: [
        { id: "category", label: "Category", kind: "select", options: ["Roof", "Exterior/Siding", "Windows/Doors", "Foundation/Structure", "HVAC", "Electrical", "Plumbing", "Kitchen", "Bathroom", "Flooring", "Interior/Finish", "Appliances", "Landscaping/Site", "Other"] },
        { id: "description", label: "Description", kind: "text", placeholder: "e.g., Replace 30-yr architectural shingles" },
        { id: "cost", label: "Cost ($)", kind: "number", placeholder: "0.00" }
      ]
    },
    { id: "totalRepairCost", label: "Total Approx. Repair / Upgrade Cost", kind: "number", placeholder: "0.00" },

    { id: "healthSafetyDivider", label: "Health and Safety", kind: "divider", placeholder: "Immediate concerns related to potential harm, code compliance, or external factors." },
    { id: "visibleHazards", label: "Visible hazards (loose steps, missing railings, unsafe entry)?", kind: "select", required: true, options: yesNoNaOptions },
    { id: "visibleHazardsNotes", label: "Visible Hazards Notes / Details", kind: "textarea", placeholder: "e.g., Missing handrail at front steps; loose paver at walkway." },
    { id: "visibleCodeViolations", label: "Visible code violations?", kind: "select", required: true, options: yesNoNaOptions },
    { id: "visibleCodeViolationsNotes", label: "Visible Code Violations Notes / Details", kind: "textarea", placeholder: "e.g., Exposed wiring, unsafe exterior condition, visible municipal notice." },
    { id: "exteriorOdors", label: "Obvious exterior odors present?", kind: "select", required: true, options: yesNoNaOptions },
    { id: "exteriorOdorsNotes", label: "Exterior Odors Notes / Details", kind: "textarea", placeholder: "e.g., Industrial, landfill, stagnant water, petroleum, sewer." },
    { id: "healthSafetySummary", label: "Health & Safety Summary", kind: "textarea", placeholder: "Concise summary of critical concerns, locations, and immediate recommendations." }
  ]
};
