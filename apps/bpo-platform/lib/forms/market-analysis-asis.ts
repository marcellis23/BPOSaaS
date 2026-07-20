import type { LocalFormDefinition } from "./types";
import { stateOptions } from "./cover-page";
import { submarketAnalysisAsIsForm } from "./submarket-analysis-asis";

export const marketAnalysisAsIsForm: LocalFormDefinition = {
  id: "market-analysis-asis",
  title: "Market Analysis Report (MAR)",
  category: "Market Analysis Report (MAR)",
  description: "Subject overview, market area trends, submarket definition, pricing segmentation, rental analysis, and target buyer profile.",
  fields: [
    { id: "subjectPropertyOverviewDivider", label: "Subject Property Overview", kind: "divider", placeholder: "Confirm the core property details and current condition as supported by the Property Condition Report (PCR)." },
    { id: "address", label: "Property Address", kind: "text", required: true, placeholder: "123 Main St", layoutSpan: 3 },
    { id: "unit", label: "Unit #", kind: "text", placeholder: "Apt/Unit", layoutSpan: 1 },
    { id: "city", label: "City", kind: "text", required: true, layoutSpan: 2 },
    { id: "state", label: "State", kind: "select", required: true, options: stateOptions, layoutSpan: 1 },
    { id: "zip", label: "ZIP Code", kind: "text", required: true, placeholder: "19104", layoutSpan: 1 },
    {
      id: "property_type",
      label: "Property Type",
      kind: "select",
      required: true,
      options: [
        "Vacant Land (no active use)",
        "Idle / Abandoned (previous use but currently unused)",
        "Single-Family Residence",
        "Residential Condo/Coop",
        "Manufactured / Mobile Home Use",
        "Multifamily Residence (2–4 units)",
        "Mixed-Use Occupancy (residential + commercial)",
        "Small Residential Condo/Coop Development",
        "Apartment Building (5+ units)",
        "Retail Use (storefront, shopping, etc.)",
        "Office Use",
        "Industrial / Warehouse / Workshop Use",
        "Special Commercial (gas station, auto repair, pad site, etc.)",
        "Other / Not Listed"
      ],
      layoutSpan: 5
    },
    { id: "occupancy", label: "Occupancy Status", kind: "select", required: true, options: ["Owner", "Tenant", "Vacant"], layoutSpan: 5 },
    { id: "overall_condition", label: "Overall Condition Rating (from PCR)", kind: "select", required: true, options: ["Excellent", "Good", "Average", "Fair", "Poor", "Damaged"], layoutSpan: 5 },

    { id: "marketAreaIdentificationDivider", label: "Market Area Identification", kind: "divider", placeholder: "Use MLS data, parcel maps, assessor records, and local knowledge to complete a concise, data-driven description of the subject’s competitive market area." },
    { id: "market_area_description", label: "Market Area Description", kind: "textarea", required: true, placeholder: "Example: Bounded by A St (N), B Ave (E), C St (S), and D Blvd (W); walkable residential corridor with small neighborhood shopping nodes.", fullWidth: true },
    
    { id: "landUseSummaryDivider", label: "Land Use Summary", kind: "divider" },
    { id: "lu_total_parcels", label: "Total Parcels", kind: "number", layoutSpan: 4 },
    
    // Grouped columns rendered via custom layout: left (Property Type Mix) and right (Total Occupancy Mix)
    { id: "lu_mix_total_pct", label: "Property Type Mix (%)", kind: "text", layoutSpan: 2 },
    { id: "occ_total_pct", label: "Total Occupancy Mix (%)", kind: "text", layoutSpan: 2 },
    { id: "lu_residential", label: "Residential (SF / Townhouse / Condo) (%)", kind: "number", layoutSpan: 2 },
    { id: "occ_owner", label: "Owner-Occupied (Approx. % of Residential)", kind: "number", layoutSpan: 2 },
    { id: "lu_multifamily", label: "Multifamily (2–4 units) (%)", kind: "number", layoutSpan: 2 },
    { id: "occ_tenant", label: "Tenant-Occupied (Approx. % of Residential)", kind: "number", layoutSpan: 2 },
    { id: "lu_apartments", label: "Apartment Buildings (5+ units) (%)", kind: "number", layoutSpan: 2 },
    { id: "occ_vacant", label: "Vacant Parcels (Approx. % of Parcels)", kind: "number", layoutSpan: 2 },
    { id: "lu_commercial", label: "Commercial / Industrial / Institutional (%)", kind: "number", layoutSpan: 2 },
    { id: "lu_other", label: "Other (vacant land, parking, misc.) (%)", kind: "number", layoutSpan: 2 },
    
    { id: "zoning_summary", label: "Key Zoning Characteristics", kind: "textarea" },
    { id: "land_use_narrative", label: "Land Use Narrative", kind: "textarea" },
    
    { id: "housingStockSummaryDivider", label: "Housing Stock Summary", kind: "divider" },
    { id: "housing_primary_summary", label: "Summary Description of Primary Housing Stock in Market Area", kind: "textarea" },
    { id: "housing_special_features", label: "Special Housing Features Prominent in Market Area", kind: "textarea" },
    { id: "housing_subject_comparison", label: "Compare the Subject Property to the Current Housing Stock", kind: "textarea" },
    { id: "market_summary_narrative", label: "Overall Market Summary Narrative", kind: "textarea", required: true },

    { id: "marketAreaEconomyDivider", label: "Market Area Economic Influences", kind: "divider", placeholder: "Census data, labor statistics, and local market knowledge summarizing economic forces." },
    
    { id: "workforceIncomeAffordabilityDivider", label: "Workforce, Income & Affordability", kind: "divider" },
    { id: "econ_income_range", label: "Typical Household Income Range", kind: "text", layoutSpan: 5 },
    { id: "econ_price_to_income", label: "Typical Price-to-Income Ratio", kind: "text", layoutSpan: 5 },
    { id: "econ_rent_to_income", label: "Typical Rent-to-Income Ratio", kind: "text", layoutSpan: 5 },
    {
      id: "econ_affordability_pressure",
      label: "Affordability Pressure",
      kind: "select",
      options: ["Low (Generally Affordable)", "Moderate (Some Pressure)", "High (Cost-Burdened)"]
    },
    { id: "econ_affordability_explain", label: "Explain affordability pressure", kind: "textarea" },
    
    { id: "employmentConditionsDivider", label: "Employment Conditions", kind: "divider" },
    {
      id: "econ_job_trend",
      label: "Overall Job Market Trend",
      kind: "select",
      options: ["Growing", "Stable", "Declining"]
    },
    { id: "econ_job_trend_explain", label: "Explain observed employment trend", kind: "textarea" },
    
    { id: "dominantEmployersBusinessDistrictsDivider", label: "Dominant Employers & Business Districts", kind: "divider" },
    { id: "econ_key_employers", label: "Key Employers / Institutions", kind: "textarea" },
    { id: "econ_business_districts", label: "Primary Business Districts / Commercial Nodes", kind: "textarea" },
    
    { id: "economicDevelopmentRiskResilienceDivider", label: "Economic Development, Risk & Resilience", kind: "divider" },
    { id: "econ_development_activity", label: "Economic Development & Investment Activity", kind: "textarea" },
    { id: "econ_risk_concentration", label: "Economic Risk & Concentration", kind: "textarea" },
    { id: "econ_metro_relationship", label: "Relationship and Connectivity to Broader Metropolitan Area", kind: "textarea" },
    { id: "econ_overall_narrative", label: "Summary of Economic Influences", kind: "textarea", required: true },

    { id: "marketabilityFactorsDivider", label: "Marketability Factors", kind: "divider", placeholder: "Locational, physical, and environmental influences that affect the subject’s ability to attract buyers or tenants." },
    { id: "pos_influences_list", label: "Positive Marketability Influences", kind: "textarea", required: true },
    { id: "neg_influences_list", label: "Negative Marketability Influences", kind: "textarea", required: true },
    { id: "marketability_summary", label: "Marketability Summary & Value Impact", kind: "textarea", required: true },

    { id: "marketAreaSalesActivityDivider", label: "Market Area Sales Activity", kind: "divider", placeholder: "General market sales and listings metrics." },
    
    { id: "soldListingActivityDivider", label: "Sold Listing Activity", kind: "divider" },
    { id: "ma_sold_total", label: "Total Sold Listings", kind: "number", layoutSpan: 5 },
    { id: "ma_sold_low_price", label: "Low Price", kind: "text", layoutSpan: 5 },
    { id: "ma_sold_high_price", label: "High Price", kind: "text", layoutSpan: 5 },
    { id: "ma_sold_median_price", label: "Median Price", kind: "text", layoutSpan: 5 },
    { id: "ma_sold_avg_dom", label: "Average DOM", kind: "text", layoutSpan: 5 },
    { id: "ma_sold_list_to_price", label: "List-to-Price Ratio", kind: "text", layoutSpan: 5 },
    { id: "ma_sold_summary", label: "Summary of Sold Listing Activity", kind: "textarea" },
    
    { id: "activeListingActivityDivider", label: "Active Listing Activity", kind: "divider" },
    { id: "ma_active_total", label: "Total Active Listings", kind: "number", layoutSpan: 5 },
    { id: "ma_active_low_price", label: "Low Price", kind: "text", layoutSpan: 5 },
    { id: "ma_active_high_price", label: "High Price", kind: "text", layoutSpan: 5 },
    { id: "ma_active_median_price", label: "Median Price", kind: "text", layoutSpan: 2 },
    { id: "ma_active_avg_dom", label: "Average DOM", kind: "text", layoutSpan: 2 },
    { id: "ma_active_summary", label: "Summary of Active Listing Activity", kind: "textarea" },
    { id: "ma_other_types_summary", label: "Summary of Other Listing Types Activity", kind: "textarea" },
    { id: "ma_sales_activity_summary", label: "Summarize the Sales market activity", kind: "textarea" },

    { id: "marketAreaDistressedSalesActivityDivider", label: "Distressed Listing Activity", kind: "divider", placeholder: "Presence and impact of distressed inventory." },
    { id: "ma_distressed_total", label: "Total Distressed Listings", kind: "number", layoutSpan: 2 },
    { id: "ma_distressed_pct", label: "Percent of Listings that Were Distressed", kind: "text", layoutSpan: 2 },
    { id: "ma_distressed_reos", label: "REOs", kind: "text", layoutSpan: 5 },
    { id: "ma_distressed_short_sales", label: "Short Sales", kind: "text", layoutSpan: 5 },
    { id: "ma_distressed_probates", label: "Probates", kind: "text", layoutSpan: 5 },
    { id: "ma_distressed_in_foreclosure", label: "In Foreclosure", kind: "text", layoutSpan: 5 },
    { id: "ma_distressed_bankruptcies", label: "Bankruptcies", kind: "text", layoutSpan: 5 },
    { id: "ma_distressed_hud", label: "HUD Owned", kind: "text", layoutSpan: 5 },
    { id: "ma_distressed_summary", label: "Summary of Distressed Listings Activity", kind: "textarea" },

    { id: "rentalMarketAnalysisDivider", label: "Rental Market Analysis", kind: "divider", placeholder: "Analyze the local rental market conditions." },
    { id: "rent_total_listing_activity", label: "Total Rental Listing Activity", kind: "number", layoutSpan: 5 },
    {
      id: "rent_inventory_trend",
      label: "Inventory Trend",
      kind: "select",
      options: ["Increasing", "Stable", "Decreasing"],
      layoutSpan: 5
    },
    { id: "rent_vacancy_rate", label: "Vacancy Rate", kind: "text", layoutSpan: 5 },
    
    { id: "rentedListingActivityDivider", label: "Rented Listing Activity", kind: "divider" },
    { id: "rented_total", label: "Total Rented Listings", kind: "number", layoutSpan: 5 },
    { id: "rented_low_price", label: "Low Price", kind: "text", layoutSpan: 5 },
    { id: "rented_high_price", label: "High Price", kind: "text", layoutSpan: 5 },
    { id: "rented_median_price", label: "Median Price", kind: "text", layoutSpan: 5 },
    { id: "rented_avg_dom", label: "Average DOM", kind: "text", layoutSpan: 5 },
    { id: "rented_list_to_price", label: "List-to-Price Ratio", kind: "text", layoutSpan: 5 },
    { id: "rented_summary", label: "Summary of Rented Listing Activity", kind: "textarea" },
    
    { id: "activeRentalListingActivityDivider", label: "Active Rental Listing Activity", kind: "divider" },
    { id: "rent_active_total", label: "Total Active Rental Listings", kind: "number", layoutSpan: 5 },
    { id: "rent_active_low_price", label: "Low Price", kind: "text", layoutSpan: 5 },
    { id: "rent_active_high_price", label: "High Price", kind: "text", layoutSpan: 5 },
    { id: "rent_active_median_price", label: "Median Price", kind: "text", layoutSpan: 2 },
    { id: "rent_active_avg_dom", label: "Average DOM", kind: "text", layoutSpan: 2 },
    { id: "rent_active_summary", label: "Summary of Active Rental Listing Activity", kind: "textarea" },
    { id: "rent_other_types_summary", label: "Summary of Other Rental Listing Types Activity", kind: "textarea" },
    { id: "rent_market_activity_summary", label: "Summarize the Rental market activity for the market area", kind: "textarea" },

    ...submarketAnalysisAsIsForm.fields
  ]
};
