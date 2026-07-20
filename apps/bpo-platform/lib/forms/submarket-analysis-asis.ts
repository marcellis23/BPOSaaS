import type { LocalFormDefinition } from "./types";

const rentalIncludedVisible = { fieldId: "sm_rental_analysis_exclude", values: ["", "No"] };
const rentalExcludedVisible = { fieldId: "sm_rental_analysis_exclude", values: ["Yes"] };
const pricingRentalIncludedVisible = { fieldId: "ps_rent_analysis_exclude", values: ["", "No"] };
const pricingRentalExcludedVisible = { fieldId: "ps_rent_analysis_exclude", values: ["Yes"] };

export const submarketAnalysisAsIsForm: LocalFormDefinition = {
  id: "submarket-analysis-asis",
  title: "Submarket Analysis (As-Is)",
  category: "Market Analysis Report (MAR)",
  description: "Specific submarket definitions, competitive segment sales and rentals, price tiers, and target buyer profiles.",
  fields: [
    { id: "submarketDefinitionDivider", label: "Submarket Definition (Subject’s Competitive Set)", kind: "divider", placeholder: "Define the subject’s immediate competitive niche based on price point, buyer segment, property characteristics, and market behavior." },
    {
      id: "submarket_name_select",
      label: "Submarket (Niche Market) Name",
      kind: "select",
      required: true,
      options: [
        "First-Time Buyer Starter Homes",
        "Move-Up Family Homes",
        "Luxury Homes",
        "Historic / Heritage Homes",
        "New Construction / Spec Homes",
        "Townhomes / Rowhomes",
        "Condominiums (Urban / Mid-High Rise)",
        "Duplex / Triplex / Quadplex (2–4 Units)",
        "Small Multifamily Rentals (2–4 Units)",
        "Large Multifamily (5+ Units)",
        "Long-Term Rental SFRs",
        "Short-Term Rentals (STR / Airbnb)",
        "Student Housing",
        "Senior / 55+ Housing",
        "Waterfront / View Homes",
        "Rural / Acreage Properties",
        "Manufactured / Mobile Homes",
        "Mixed-Use Small Buildings",
        "Transit-Oriented / Walkable Urban",
        "Value-Add / Fixer-Uppers",
        "Investor Fix & Flip",
        "Vacation / Second Homes",
        "FHA-Friendly Entry Level",
        "VA Buyer–Oriented",
        "other"
      ],
      layoutSpan: 2
    },
    {
      id: "submarket_name_custom",
      label: "If Other, Custom Submarket Name",
      kind: "text",
      placeholder: "Enter custom submarket name",
      visibleWhen: { fieldId: "submarket_name_select", values: ["other"] },
      layoutSpan: 2
    },
    { id: "submarket_description", label: "Submarket (Niche Market) Description", kind: "textarea", required: true, placeholder: "Definition and overview for the niche identified above." },
    {
      id: "sm_timeframe",
      label: "Timeframe",
      kind: "select",
      options: ["3-months", "6-months", "1-year", "2-years", "3-years", "5-years"],
      layoutSpan: 4
    },
    { id: "sm_timeframe_explain", label: "Please explain timeframe", kind: "textarea" },
    { id: "sm_total_listing_activity", label: "Total Listing Activity", kind: "number", layoutSpan: 4 },
    {
      id: "sm_inventory_trend",
      label: "Inventory Trend",
      kind: "select",
      options: ["increasing", "stable", "decreasing"],
      layoutSpan: 4
    },
    { id: "sm_inventory_trend_explain", label: "Inventory Trend – Please explain", kind: "textarea" },
    {
      id: "sm_marketing_trend",
      label: "Marketing Trend",
      kind: "select",
      options: ["increasing", "stable", "decreasing"],
      layoutSpan: 4
    },
    { id: "sm_marketing_trend_explain", label: "Marketing Trend – Please explain", kind: "textarea" },

    { id: "submarketSalesActivityDivider", label: "Sold Listing Activity", kind: "divider", placeholder: "Sales and listing statistics for the specific submarket (competitive set)." },
    { id: "sm_sold_total", label: "Total Sold Listings", kind: "number", layoutSpan: 5 },
    { id: "sm_sold_low_price", label: "Low Price", kind: "text", layoutSpan: 5 },
    { id: "sm_sold_high_price", label: "High Price", kind: "text", layoutSpan: 5 },
    { id: "sm_sold_median_price", label: "Median Price", kind: "text", layoutSpan: 5 },
    { id: "sm_sold_avg_dom", label: "Average DOM", kind: "text", layoutSpan: 5 },
    { id: "sm_sold_list_to_price", label: "List-to-Price Ratio", kind: "text", layoutSpan: 5 },
    { id: "sm_sold_summary", label: "Summary of Sold Listing Activity", kind: "textarea" },
    { id: "sm_active_total", label: "Total Active Listings", kind: "number", layoutSpan: 5 },
    { id: "sm_active_low_price", label: "Low Price", kind: "text", layoutSpan: 5 },
    { id: "sm_active_high_price", label: "High Price", kind: "text", layoutSpan: 5 },
    { id: "sm_active_median_price", label: "Median Price", kind: "text", layoutSpan: 2 },
    { id: "sm_active_avg_dom", label: "Average DOM", kind: "text", layoutSpan: 2 },
    { id: "sm_active_summary", label: "Summary of Active Listing Activity", kind: "textarea" },
    { id: "sm_other_types_summary", label: "Summary of Other Listing Types Activity", kind: "textarea" },
    { id: "sm_sales_activity_summary", label: "Summarize the Submarket Sales Activity", kind: "textarea" },

    { id: "submarketDistressedActivityDivider", label: "Distressed Listing Activity", kind: "divider", placeholder: "Presence and impact of distressed inventory within the specific submarket." },
    { id: "sm_distressed_reos", label: "REOs", kind: "text", layoutSpan: 5 },
    { id: "sm_distressed_short_sales", label: "Short Sales", kind: "text", layoutSpan: 5 },
    { id: "sm_distressed_probates", label: "Probates", kind: "text", layoutSpan: 5 },
    { id: "sm_distressed_in_foreclosure", label: "In Foreclosure", kind: "text", layoutSpan: 5 },
    { id: "sm_distressed_bankruptcies", label: "Bankruptcies", kind: "text", layoutSpan: 5 },
    { id: "sm_distressed_hud", label: "HUD Owned", kind: "text", layoutSpan: 5 },
    { id: "sm_distressed_total", label: "Total Distressed Listings", kind: "number", layoutSpan: 2 },
    { id: "sm_distressed_pct", label: "Percent of Listings that Were Distressed", kind: "text", layoutSpan: 2 },
    { id: "sm_distressed_summary", label: "Summary of Distressed Listings Activity", kind: "textarea" },

    { id: "submarketRentalActivityDivider", label: "Submarket Rental Activity", kind: "divider", placeholder: "Analyze the local rental market conditions for this competitive set." },
    {
      id: "sm_rental_analysis_exclude",
      label: "Exclude rental analysis from this report?",
      kind: "select",
      options: ["No", "Yes"],
      required: true
    },
    { id: "sm_rental_excluded_explain", label: "Please explain why rental market analysis was excluded (if checked).", kind: "textarea", visibleWhen: rentalExcludedVisible },
    {
      id: "sm_rent_timeframe",
      label: "Timeframe",
      kind: "select",
      options: ["3-months", "6-months", "1-year", "2-years", "3-years", "5-years"],
      visibleWhen: rentalIncludedVisible,
      layoutSpan: 4
    },
    { id: "sm_rent_timeframe_explain", label: "Please explain timeframe", kind: "textarea", visibleWhen: rentalIncludedVisible },
    
    { id: "submarketActiveRentalListingActivityDivider", label: "Active Rental Listing Activity", kind: "divider", visibleWhen: rentalIncludedVisible },
    { id: "sm_rent_total_listing_activity", label: "Total Rental Listing Activity", kind: "number", visibleWhen: rentalIncludedVisible, layoutSpan: 2 },
    {
      id: "sm_rent_inventory_trend",
      label: "Inventory Trend",
      kind: "select",
      options: ["increasing", "stable", "decreasing"],
      visibleWhen: rentalIncludedVisible,
      layoutSpan: 4
    },
    { id: "sm_rent_vacancy_rate", label: "Vacancy Rate", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 2 },
    { id: "sm_rented_total", label: "Total Rented Listings", kind: "number", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rented_low_price", label: "Low Price", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rented_high_price", label: "High Price", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rented_median_price", label: "Median Price", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rented_avg_dom", label: "Average DOM", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rented_list_to_price", label: "List-to-Price Ratio", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rented_summary", label: "Summary of Rented Listing Activity", kind: "textarea", visibleWhen: rentalIncludedVisible },
    { id: "sm_rent_active_total", label: "Total Active Rental Listings", kind: "number", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rent_active_low_price", label: "Low Price", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rent_active_high_price", label: "High Price", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 5 },
    { id: "sm_rent_active_median_price", label: "Median Price", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 2 },
    { id: "sm_rent_active_avg_dom", label: "Average DOM", kind: "text", visibleWhen: rentalIncludedVisible, layoutSpan: 2 },
    { id: "sm_rent_active_summary", label: "Summary of Active Rental Listing Activity", kind: "textarea", visibleWhen: rentalIncludedVisible },
    { id: "sm_rent_other_types_summary", label: "Summary of Other Rental Listing Types Activity", kind: "textarea", visibleWhen: rentalIncludedVisible },
    { id: "sm_rental_activity_summary", label: "Summarize the Submarket Rental Activity", kind: "textarea", visibleWhen: rentalIncludedVisible },

    { id: "pricingSegmentationDivider", label: "Pricing Segmentation", kind: "divider", placeholder: "Define the low, average, and high value ranges for both Sales and Rentals within the submarket." },
    { id: "ps_sales_low_low", label: "Low Price Range (Damaged-Poor) - Low Price", kind: "text", layoutSpan: 5 },
    { id: "ps_sales_low_high", label: "Low Price Range (Damaged-Poor) - High Price", kind: "text", layoutSpan: 5 },
    { id: "ps_sales_low_median", label: "Low Price Range (Damaged-Poor) - Median Price", kind: "text", layoutSpan: 5 },
    { id: "ps_sales_avg_low", label: "Average Price Range (Fair-Average) - Low Price", kind: "text", layoutSpan: 5 },
    { id: "ps_sales_avg_high", label: "Average Price Range (Fair-Average) - High Price", kind: "text", layoutSpan: 5 },
    { id: "ps_sales_avg_median", label: "Average Price Range (Fair-Average) - Median Price", kind: "text", layoutSpan: 5 },
    { id: "ps_sales_high_low", label: "High Price Range (Good-Excellent) - Low Price", kind: "text", layoutSpan: 5 },
    { id: "ps_sales_high_high", label: "High Price Range (Good-Excellent) - High Price", kind: "text", layoutSpan: 5 },
    { id: "ps_sales_high_median", label: "High Price Range (Good-Excellent) - Median Price", kind: "text", layoutSpan: 5 },
    {
      id: "ps_sales_subject_segment",
      label: "Subject is within (Sales)",
      kind: "select",
      options: ["low", "average", "high"]
    },
    { id: "ps_sales_subject_explain", label: "Explain Subject Sales Position", kind: "textarea" },
    {
      id: "ps_rent_analysis_exclude",
      label: "Exclude rental price brackets from this report?",
      kind: "select",
      options: ["No", "Yes"],
      required: true,
      layoutSpan: 4
    },
    { id: "ps_rent_excluded_explain", label: "Please explain why rental market analysis was excluded (if checked).", kind: "textarea", visibleWhen: pricingRentalExcludedVisible },
    { id: "ps_rent_avg_low", label: "Average Rental Range (Fair-Average) - Low Price", kind: "text", visibleWhen: pricingRentalIncludedVisible, layoutSpan: 5 },
    { id: "ps_rent_avg_high", label: "Average Rental Range (Fair-Average) - High Price", kind: "text", visibleWhen: pricingRentalIncludedVisible, layoutSpan: 5 },
    { id: "ps_rent_avg_median", label: "Average Rental Range (Fair-Average) - Median Price", kind: "text", visibleWhen: pricingRentalIncludedVisible, layoutSpan: 5 },
    { id: "ps_rent_high_low", label: "High Rental Range (Good-Excellent) - Low Price", kind: "text", visibleWhen: pricingRentalIncludedVisible, layoutSpan: 5 },
    { id: "ps_rent_high_high", label: "High Rental Range (Good-Excellent) - High Price", kind: "text", visibleWhen: pricingRentalIncludedVisible, layoutSpan: 5 },
    { id: "ps_rent_high_median", label: "High Rental Range (Good-Excellent) - Median Price", kind: "text", visibleWhen: pricingRentalIncludedVisible, layoutSpan: 5 },
    {
      id: "ps_rent_subject_segment",
      label: "Subject is within (Rentals)",
      kind: "select",
      options: ["unrentable", "average-rental-range", "high-rental-range"],
      visibleWhen: pricingRentalIncludedVisible
    },
    { id: "ps_rent_subject_explain", label: "Explain Subject Rental Position", kind: "textarea", visibleWhen: pricingRentalIncludedVisible },

    { id: "submarketNarrativeSummaryDivider", label: "Submarket Narrative Summary", kind: "divider", placeholder: "Provide an integrated summary of the specific submarket dynamics impacting the subject property." },
    { id: "submarket_summary_narrative", label: "Submarket (Niche) Narrative Summary", kind: "textarea", required: true },

    { id: "targetBuyerProfileDivider", label: "Target Buyer Profile", kind: "divider", placeholder: "Identify the most likely buyer segment based on the subject’s location, condition, affordability, and overall position." },
    {
      id: "buyer_type",
      label: "Most Probable Buyer Type",
      kind: "select",
      required: true,
      options: ["First-Time Buyer", "Move-Up Buyer", "Downsizer", "Relocation Buyer", "Investor - Fix & Flip", "Investor - Long-Term Rental", "Small Developer / Builder", "Other"],
      layoutSpan: 2
    },
    {
      id: "buyer_financing",
      label: "Typical Buyer Financing Type",
      kind: "select",
      required: true,
      options: ["Conventional", "FHA", "VA", "Cash", "DSCR/Non-QM", "Portfolio / Local Lending"],
      layoutSpan: 2
    },
    { id: "buyer_narrative", label: "Target Buyer Assessment Narrative", kind: "textarea", required: true }
  ]
};
