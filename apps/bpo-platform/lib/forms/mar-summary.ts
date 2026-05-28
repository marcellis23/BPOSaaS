import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";

export const marSummaryForm: LocalFormDefinition = {
  id: "mar-summary",
  title: "MAR Summary & Conclusion",
  category: "Market Analysis Report (MAR)",
  description: "Market overview summary, primary market connection, submarket tiers, listing history, and optional after-repair condition assessment.",
  fields: [
    { id: "subjectInfoDivider", label: "Subject Property Information", kind: "divider", placeholder: "Confirm the core property details and current condition as supported by the Property Condition Report (PCR)." },
    { id: "address", label: "Property Address", kind: "text", required: true, placeholder: "123 Main St", layoutSpan: 3 },
    { id: "unit", label: "Unit #", kind: "text", placeholder: "Apt B", layoutSpan: 1 },
    { id: "city", label: "City", kind: "text", required: true, layoutSpan: 2 },
    { id: "state", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "zip", label: "Zip Code", kind: "text", required: true, placeholder: "12345", layoutSpan: 1 },
    {
      id: "property_type",
      label: "Property Type",
      kind: "select",
      required: true,
      options: ["Single Family", "Multifamily", "Condo", "Commercial", "Land", "Other"]
    },
    {
      id: "occupancy",
      label: "Occupancy Status",
      kind: "select",
      required: true,
      options: ["Owner", "Tenant", "Vacant"]
    },
    {
      id: "condition_current",
      label: "Overall Condition (Current)",
      kind: "select",
      required: true,
      options: ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged"]
    },

    { id: "marketContextDivider", label: "Market Context", kind: "divider", placeholder: "Describe the broader metro and the subject's primary market to help readers understand drivers and trends." },
    { id: "broad_metro_area", label: "Broad Metropolitan Area Overview", kind: "textarea", placeholder: "Summary of broader metropolitan area characteristics, economy, and general housing trends.", fullWidth: true },
    { id: "primary_market_summary", label: "Summary of the Subject Property’s Primary Market", kind: "textarea", placeholder: "Detailed summary of the subject's immediate neighborhood market.", fullWidth: true },
    { id: "primary_connection_summary", label: "Primary Market’s Connection to the Broader Metropolitan Area", kind: "textarea", placeholder: "Explain connectivity to employment hubs, transport nodes, etc.", fullWidth: true },

    { id: "subjectAnalysisDivider", label: "Subject Analysis & Submarket", kind: "divider", placeholder: "Analyze the subject property's position within its competitive submarket." },
    { id: "subject_summary_current", label: "Summary of the Subject Property (Current Condition)", kind: "textarea", placeholder: "Summarize the physical traits, design, and overall condition of the property.", fullWidth: true },
    { id: "subject_position_primary", label: "Subject Property’s Position in the Primary Market", kind: "textarea", placeholder: "Explain how typical buyers perceive the subject versus prevailing housing stock.", fullWidth: true },
    { id: "submarket_summary", label: "Summary of the Subject Property’s Submarket", kind: "textarea", placeholder: "Define the specific submarket/competitive set segment the subject competes in.", fullWidth: true },
    {
      id: "subject_position_tier",
      label: "Subject Property Position in Submarket",
      kind: "select",
      options: ["High Positioning", "Average Positioning", "Low Positioning"]
    },
    { id: "price_low", label: "Estimated Price Range - Low ($)", kind: "number" },
    { id: "price_high", label: "Estimated Price Range - High ($)", kind: "number" },
    { id: "subject_position_submarket", label: "Summary of Subject’s Position in the Submarket", kind: "textarea", placeholder: "Explain how the subject competes, including price, condition, and appeal...", fullWidth: true },

    { id: "reviewPurposeDivider", label: "Review Purpose & History", kind: "divider", placeholder: "Establish the objective of the report and the property's transaction history." },
    {
      id: "review_purpose",
      label: "Review Purpose",
      kind: "select",
      options: [
        "Pre-Listing Review",
        "Active Listing – Offer Review",
        "Due Diligence – Offer Review",
        "Off Market – Offer Review",
        "Off Market – Tax Assessment Review",
        "Off Market – Insurance Review",
        "Off Market – Other Review"
      ]
    },
    { id: "review_objective", label: "Briefly Describe the Review Objective", kind: "textarea", placeholder: "State specific goals for this review...", fullWidth: true },
    { id: "history_summary", label: "Summary of the Subject Property’s Sales/Listing History", kind: "textarea", placeholder: "Detail previous listings, sales, days on market, price changes...", fullWidth: true },
    { id: "review_position_submarket", label: "Review (Price / Offer / Listing) Position in the Submarket", kind: "textarea", placeholder: "Describe how proposed terms compare to submarket standards.", fullWidth: true },

    { id: "arvDivider", label: "After Repair Condition Assessment", kind: "divider", placeholder: "Assess the property's potential value and marketability after renovations." },
    {
      id: "arv_active",
      label: "Perform After Repair Assessment?",
      kind: "select",
      required: true,
      options: ["No", "Yes"]
    },
    { id: "arv_repairs_summary", label: "Summary of Estimated Repairs / Improvements / Alterations / Development", kind: "textarea", placeholder: "Describe the scope of renovations...", fullWidth: true, visibleWhen: { fieldId: "arv_active", values: ["Yes"] } },
    {
      id: "arv_change_submarket",
      label: "Do the Proposed Improvements Change the Subject’s Submarket?",
      kind: "select",
      options: ["No", "Yes"],
      visibleWhen: { fieldId: "arv_active", values: ["Yes"] }
    },
    { id: "arv_subject_summary", label: "Summary of the Subject Property (After Repair Condition)", kind: "textarea", placeholder: "Describe property traits after improvements...", fullWidth: true, visibleWhen: { fieldId: "arv_active", values: ["Yes"] } },
    { id: "arv_position_primary", label: "Subject Property’s Position in the Primary Market (After Repair)", kind: "textarea", placeholder: "Describe market position post-repairs...", fullWidth: true, visibleWhen: { fieldId: "arv_active", values: ["Yes"] } },
    { id: "arv_new_submarket_summary", label: "Summary of the New Submarket (Required if Submarket Changes)", kind: "textarea", placeholder: "Describe the new competitive set segment...", fullWidth: true, visibleWhen: { fieldId: "arv_change_submarket", values: ["Yes"] } },
    {
      id: "arv_position_tier",
      label: "Subject Property Position in Submarket (ARV)",
      kind: "select",
      options: ["High Positioning", "Average Positioning", "Low Positioning"],
      visibleWhen: { fieldId: "arv_active", values: ["Yes"] }
    },
    { id: "arv_price_low", label: "Estimated Price Range (ARV) - Low ($)", kind: "number", visibleWhen: { fieldId: "arv_active", values: ["Yes"] } },
    { id: "arv_price_high", label: "Estimated Price Range (ARV) - High ($)", kind: "number", visibleWhen: { fieldId: "arv_active", values: ["Yes"] } },
    { id: "arv_position_submarket", label: "Summary of the Subject's Position in the Submarket (ARV)", kind: "textarea", placeholder: "Explain the ARV positioning, including expected competitive set, buyer pool, and price tier...", fullWidth: true, visibleWhen: { fieldId: "arv_active", values: ["Yes"] } }
  ]
};
