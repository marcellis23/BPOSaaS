# Market Analysis Report - Current Condition  
<!-- wp:paragraph -->  
<p></p>  
<!-- /wp:paragraph -->  
  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>Market Analysis Report (MAR) Web Form</title>  
  
  <script src="https://cdn.tailwindcss.com"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  
  <style>  
    .form-input{  
      margin-top:.25rem;  
      width:100%;  
      border:1px solid #d1d5db; border-radius:.75rem;  
      padding:.625rem .75rem; box-shadow:0 1px 2px rgba(0,0,0,.03);  
      outline:none; background:#fff;  
    }  
    .form-input:focus{ border-color:#3b82f6;  
      box-shadow:0 0 0 3px rgba(59,130,246,.2); }  
    .section-card{ background:#fff;  
      box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1),0 4px 6px -4px rgb(0 0 0 / 0.1); border-radius:1rem; padding:1.5rem;  
      border:1px solid #f3f4f6; }  
    .hidden{ display:none; }  
    .bg-gray-100{ background:#f3f4f6 !important;  
    }  
    .bg-red-100{ background:#fee2e2 !important; }  
    .error-border{ border-color:#ef4444 !important; box-shadow:0 0 0 2px rgba(239,68,68,.35) !important;  
    }  
    .counter-wrap {  
      text-align: right;  
      font-size: 0.75rem;  
      color: #6b7280;  
      padding-right: 0.25rem;  
      margin-top: -0.125rem;  
    }  
    .counter-wrap.near-limit { color: #ef4444; font-weight: 500;  
    }  
  </style>  
</head>  
<body class="bg-gray-50 text-gray-900 font-sans">  
<main class="max-w-4xl mx-auto p-6 space-y-10">  
  <header class="text-center pt-4 pb-6">  
    <h1 class="text-3xl font-extrabold text-gray-800">Market Analysis Report (MAR)</h1>  
    <p class="text-md text-gray-600 mt-2">Input Data for Automated PDF Generation</p>  
  </header>  
  
  <form id="marForm" class="space-y-12">  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="subject-property-overview" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Subject Property Overview</h2>  
  
  <!-- Section detail box -->  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section confirms the subject’s <strong>identity, use, occupancy, and overall condition</strong> as  
      supported by the Property Condition Report (PCR). These details anchor the entire Market Analysis Report,  
      ensuring that all later sections&mdash;including the <strong>market area trends, submarket definition, target  
      buyer profile, and pricing conclusions</strong>&mdash;are interpreted in the correct physical and functional  
      context.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Confirm the core property details and current condition as supported by the Property Condition Report (PCR).  
  </p>  
  
  <div class="space-y-6">  
    <!-- Address & Location -->  
    <div>  
      <h3 class="text-sm font-semibold text-gray-800 mb-2">Location &amp; Identity</h3>  
      <p class="text-xs text-gray-500 mb-4">  
        Enter the full mailing address used to identify the subject in public records, MLS, and lender documents.  
      </p>  
  
      <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">  
        <label class="block sm:col-span-4">  
          <span class="block text-sm font-medium">Property Address *</span>  
          <input  
            name="address"  
            required  
            type="text"  
            class="form-input"  
            placeholder="123 Main St"  
          />  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium">Unit #</span>  
          <input  
            name="unit"  
            type="text"  
            class="form-input"  
            placeholder="Apt/Unit"  
          />  
        </label>  
  
        <label class="block sm:col-span-3">  
          <span class="block text-sm font-medium">City *</span>  
          <input  
            name="city"  
            required  
            type="text"  
            class="form-input"  
            placeholder="Philadelphia"  
          />  
        </label>  
  
        <label class="block sm:col-span-1">  
          <span class="block text-sm font-medium">State *</span>  
          <select name="state" required class="form-input">  
            <option value="">Select…</option>  
            <option value="AL">AL</option><option value="AK">AK</option>  
            <option value="AZ">AZ</option><option value="AR">AR</option>  
            <option value="CA">CA</option><option value="CO">CO</option>  
            <option value="CT">CT</option><option value="DE">DE</option>  
            <option value="FL">FL</option><option value="GA">GA</option>  
            <option value="HI">HI</option><option value="ID">ID</option>  
            <option value="IL">IL</option><option value="IN">IN</option>  
            <option value="IA">IA</option><option value="KS">KS</option>  
            <option value="KY">KY</option><option value="LA">LA</option>  
            <option value="ME">ME</option><option value="MD">MD</option>  
            <option value="MA">MA</option><option value="MI">MI</option>  
            <option value="MN">MN</option><option value="MS">MS</option>  
            <option value="MO">MO</option><option value="MT">MT</option>  
            <option value="NE">NE</option><option value="NV">NV</option>  
            <option value="NH">NH</option><option value="NJ">NJ</option>  
            <option value="NM">NM</option><option value="NY">NY</option>  
            <option value="NC">NC</option><option value="ND">ND</option>  
            <option value="OH">OH</option><option value="OK">OK</option>  
            <option value="OR">OR</option><option value="PA" selected>PA</option>  
            <option value="RI">RI</option><option value="SC">SC</option>  
            <option value="SD">SD</option><option value="TN">TN</option>  
            <option value="TX">TX</option><option value="UT">UT</option>  
            <option value="VT">VT</option><option value="VA">VA</option>  
            <option value="WA">WA</option><option value="WV">WV</option>  
            <option value="WI">WI</option><option value="WY">WY</option>  
            <option value="DC">DC</option><option value="AS">AS</option>  
            <option value="GU">GU</option><option value="MP">MP</option>  
            <option value="PR">PR</option><option value="VI">VI</option>  
            <option value="AA">AA</option><option value="AE">AE</option>  
            <option value="AP">AP</option>  
          </select>  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium">Zip Code *</span>  
          <input  
            name="zip"  
            required  
            type="text"  
            class="form-input"  
            placeholder="19104"  
          />  
        </label>  
      </div>  
    </div>  
  
    <!-- Use, Occupancy & Condition -->  
    <div class="pt-4 border-t border-gray-100">  
      <h3 class="text-sm font-semibold text-gray-800 mb-2">Current Use, Occupancy &amp; Condition</h3>  
      <p class="text-xs text-gray-500 mb-4">  
        Select the current legal/functional use, occupancy, and overall condition rating as supported by your PCR.  
        These responses define how the subject competes within the broader market and submarket.  
      </p>  
  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
        <!-- Property Type -->  
        <label class="block">  
          <span class="block text-sm font-medium">Property Type *</span>  
          <span class="block text-[0.7rem] text-gray-500 mb-1">  
            Choose the primary current use category that best matches public records and observed use.  
          </span>  
          <select name="property_type" required class="form-input">  
         <option value="">Select Type...</option>  
          <optgroup label="Vacant / Idle">  
            <option>Vacant Land (no active use)</option>  
            <option>Idle / Abandoned (previous use but currently unused)</option>  
          </optgroup>  
          <optgroup label="Residential">  
            <option>Single-Family Residence</option>  
            <option>Residential Condo/Coop</option>  
            <option>Manufactured / Mobile Home Use</option>  
            <option>Multifamily Residence (2–4 units)</option>  
          </optgroup>  
          <optgroup label="Commercial">  
            <option>Mixed-Use Occupancy (residential + commercial)</option>  
            <option>Small Residential Condo/Coop Development</option>  
            <option>Apartment Building (5+ units)</option>  
            <option>Retail Use (storefront, shopping, etc.)</option>  
            <option>Office Use</option>  
            <option>Industrial / Warehouse / Workshop Use</option>  
            <option>Special Commercial (gas station, auto repair, pad site, etc.)</option>  
          </optgroup>  
          <optgroup label="Other">  
            <option>Other / Not Listed</option>  
          </optgroup>  
  
          </select>  
        </label>  
  
        <!-- Occupancy Status -->  
        <label class="block">  
          <span class="block text-sm font-medium">Occupancy Status *</span>  
          <span class="block text-[0.7rem] text-gray-500 mb-1">  
            Reflect the current physical occupancy at the time of inspection (not projected use).  
          </span>  
          <select name="occupancy" required class="form-input">  
            <option value="">Select…</option>  
            <option>Owner</option>  
            <option>Tenant</option>  
            <option>Vacant</option>  
          </select>  
        </label>  
  
        <!-- Overall Condition -->  
        <label class="block">  
          <span class="block text-sm font-medium">Overall Condition Rating (from PCR) *</span>  
          <span class="block text-[0.7rem] text-gray-500 mb-1">  
            Use the global rating from the PCR that best represents the subject’s overall physical condition.  
          </span>  
          <select name="overall_condition" required class="form-input">  
            <option value="">Select Rating…</option>  
            <option>Excellent</option>  
            <option>Good</option>  
            <option>Average</option>  
            <option>Fair</option>  
            <option>Poor</option>  
            <option>Damaged</option>  
          </select>  
        </label>  
      </div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="market-area-identification" class="section-card">   
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Market Area Identification</h2>  
  
  <!-- Section detail box -->  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section defines the <strong>market environment</strong> in which the subject property competes.  
      By summarizing land use, housing stock, and recent market activity, we create the context for  
      <strong>pricing strategy, buyer demand, and risk</strong> in the rest of the Market Analysis Report.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Use MLS data, parcel maps, assessor records, and local knowledge to complete a concise, data-driven  
    description of the subject’s competitive market area.  
  </p>  
  
  <div class="space-y-8">  
  
    <!-- 1. Geographic Market Definition -->  
    <div class="space-y-6">  
      <label class="block">  
        <span class="block text-sm font-medium">Market Area Description *</span>  
        <span class="block text-xs text-gray-500 mb-1">  
          Identify the primary geographic boundaries and briefly describe neighborhood character  
          (major roads, landmarks, anchors, and overall feel).  
        </span>  
        <textarea  
          name="market_area_description"  
          required  
          rows="3"  
          class="form-input"  
          placeholder="Example: Bounded by A St (N), B Ave (E), C St (S), and D Blvd (W); walkable residential corridor with small neighborhood shopping nodes."  
          maxlength="1500"  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="market_area_description">0</span> / 1500</div>  
      </label>  
    </div>  
  
    <!-- 2. Land Use Summary -->  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50">  
      <h3 class="text-sm font-bold text-gray-700 mb-2">Land Use Summary</h3>  
      <p class="text-xs text-gray-500 mb-3">  
        Describe how land is used in the market area, including property type mix, occupancy vs. vacancy,   
        and notable zoning patterns. Use approximate percentages based on parcel counts or visual survey.  
      </p>  
  
      <!-- Total Parcels -->  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs mb-4">  
        <label class="block">  
          <span class="text-xs font-medium">Total Parcels:</span>  
          <input  
            name="lu_total_parcels"  
            type="number"  
            min="0"  
            class="form-input h-9"  
            placeholder="e.g. 3,109"  
          />  
        </label>  
      </div>  
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mb-4">  
        <!-- Property Type Mix -->  
        <div class="space-y-2">  
          <div class="flex items-end justify-between gap-2">  
            <h4 class="text-xs font-semibold text-gray-700">  
              Property Type Mix (Approx. % of Parcels)  
            </h4>  
            <!-- Tally display for Property Type Mix -->  
            <div class="flex items-center gap-1">  
              <span class="text-[0.7rem] text-gray-500">Current total:</span>  
              <input  
                name="lu_mix_total_pct"  
                type="text"  
                readonly  
                class="form-input h-7 w-20 text-right text-[0.7rem] bg-gray-100"  
                placeholder="0.0%"  
              />  
            </div>  
          </div>  
  
          <label class="block">  
            <span class="text-xs font-medium">Residential (SF / Townhouse / Condo):</span>  
            <input name="lu_residential" type="number" step="0.1" min="0" class="form-input h-9 lu-group" placeholder="%" />  
          </label>  
  
          <label class="block">  
            <span class="text-xs font-medium">Multifamily (2–4 units):</span>  
            <input name="lu_multifamily" type="number" step="0.1" min="0" class="form-input h-9 lu-group" placeholder="%" />  
          </label>  
  
          <label class="block">  
            <span class="text-xs font-medium">Apartment Buildings (5+ units):</span>  
            <input name="lu_apartments" type="number" step="0.1" min="0" class="form-input h-9 lu-group" placeholder="%" />  
          </label>  
  
          <label class="block">  
            <span class="text-xs font-medium">Commercial / Industrial / Institutional:</span>  
            <input name="lu_commercial" type="number" step="0.1" min="0" class="form-input h-9 lu-group" placeholder="%" />  
          </label>  
  
          <label class="block">  
            <span class="text-xs font-medium">Other (vacant land, parking, misc.):</span>  
            <input name="lu_other" type="number" step="0.1" min="0" class="form-input h-9 lu-group" placeholder="%" />  
          </label>  
        </div>  
  
        <!-- Occupancy -->  
        <div class="space-y-2">  
          <div class="flex items-end justify-between gap-2">  
            <h4 class="text-xs font-semibold text-gray-700">Occupancy</h4>  
            <!-- Tally display for Occupancy -->  
            <div class="flex items-center gap-1">  
              <span class="text-[0.7rem] text-gray-500">Current total:</span>  
              <input  
                name="occ_total_pct"  
                type="text"  
                readonly  
                class="form-input h-7 w-20 text-right text-[0.7rem] bg-gray-100"  
                placeholder="0.0%"  
              />  
            </div>  
          </div>  
  
          <label class="block">  
            <span class="text-xs font-medium">Owner-Occupied (Approx. % of Residential):</span>  
            <input name="occ_owner" type="number" step="0.1" min="0" class="form-input h-9 occ-group" placeholder="%" />  
          </label>  
  
          <label class="block">  
            <span class="text-xs font-medium">Tenant-Occupied (Approx. % of Residential):</span>  
            <input name="occ_tenant" type="number" step="0.1" min="0" class="form-input h-9 occ-group" placeholder="%" />  
          </label>  
  
          <label class="block">  
            <span class="text-xs font-medium">Vacant Parcels (Approx. % of Parcels):</span>  
            <input name="occ_vacant" type="number" step="0.1" min="0" class="form-input h-9 occ-group" placeholder="%" />  
          </label>  
        </div>  
      </div>  
  
      <!-- Key Zoning Characteristics - its own row -->  
      <label class="block mb-4">  
        <span class="block text-xs font-medium text-gray-700">Key Zoning Characteristics</span>  
        <textarea  
          name="zoning_summary"  
          rows="3"  
          class="form-input"  
          placeholder="Example: Majority RSA-5 rowhouse zoning with pockets of RM-1 and CMX along commercial corridors."  
          maxlength="600"  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="zoning_summary">0</span> / 600</div>  
      </label>  
  
      <!-- Land Use Narrative -->  
      <label class="block">  
        <span class="block text-xs font-medium text-gray-700">Land Use Narrative:</span>  
        <textarea  
          name="land_use_narrative"  
          rows="3"  
          class="form-input"  
          placeholder="Summarize the dominant land uses, mix of residential vs. non-residential, and any notable zoning constraints or opportunities."  
          maxlength="1000"  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="land_use_narrative">0</span> / 1000</div>  
      </label>  
    </div>  
  
    <!-- 3. Housing Stock Summary -->  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50">  
      <h3 class="text-sm font-bold text-gray-700 mb-2">Housing Stock Summary</h3>  
      <p class="text-xs text-gray-500 mb-3">  
        Summarize the typical residential housing characteristics in the area, identify prominent special features,  
        and compare the subject property to the prevailing housing stock.  
      </p>  
  
      <div class="space-y-4 text-xs">  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">  
            Summary Description of Primary Housing Stock in Market Area:  
            <span class="font-normal">(Based on survey of the typical residential housing characteristics in the area)</span>  
          </span>  
          <textarea  
            name="housing_primary_summary"  
            rows="4"  
            class="form-input"  
            maxlength="1000"  
            placeholder="Describe the dominant housing types, age ranges, styles, and typical configurations found in the market area."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="housing_primary_summary">0</span> / 1000</div>  
        </label>  
  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">  
            Special Housing Features Prominate in Market Area:  
            <span class="font-normal">(Observable features with a significant presence in the area, e.g., garages, basements, pools, etc.)</span>  
          </span>  
          <textarea  
            name="housing_special_features"  
            rows="3"  
            class="form-input"  
            maxlength="600"  
            placeholder="Identify notable features that appear frequently (garages, basements, porches, additions, accessory units, etc.)."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="housing_special_features">0</span> / 600</div>  
        </label>  
  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">Compare the Subject Property to the Current Housing Stock:</span>  
          <textarea  
            name="housing_subject_comparison"  
            rows="4"  
            class="form-input"  
            maxlength="1500"  
            placeholder="Explain whether the subject is typical, superior, or inferior to the prevailing housing stock in terms of size, condition, features, and appeal."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="housing_subject_comparison">0</span> / 1500</div>  
        </label>  
      </div>  
    </div>  
  
    <!-- 4. Market Activity Summary -->  
    <!-- (rest of your existing section remains unchanged) -->  
  
    <!-- 6. Overall Market Summary Narrative -->  
    <label class="block">  
      <span class="block text-sm font-medium">Overall Market Summary Narrative *</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Provide a final overview combining land use, housing stock, and market activity to describe  
        the market’s stability, direction, and key influences on value.  
      </span>  
      <textarea  
        name="market_summary_narrative"  
        rows="4"  
        required  
        class="form-input"  
        placeholder="Summarize how land use, housing stock characteristics, and current listing activity interact to shape pricing, risk, and demand in the subject’s market area."  
        maxlength="1500"  
      ></textarea>  
      <div class="counter-wrap"><span data-counter-for="market_summary_narrative">0</span> / 1500</div>  
    </label>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="market-area-economy" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Market Area Economic Influences</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      Local economic conditions drive <strong>buyer demand, rent levels, and price stability</strong>.  
      By understanding the employment base, major employers, and affordability pressures,  
      we can better gauge the <strong>strength, resilience, and risk profile</strong> of the subject’s market area.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Use census data, labor statistics, and local market knowledge to summarize the  
    economic forces shaping the subject’s market area.  
  </p>  
  
  <div class="space-y-6 text-xs">  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-4">  
      <h3 class="text-sm font-semibold text-gray-700 mb-1">Workforce, Income & Affordability</h3>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Typical Household Income Range</span>  
          <input  
            name="econ_income_range"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $45,000 – $85,000"  
          />  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">Typical Price-to-Income Ratio</span>  
          <input  
            name="econ_price_to_income"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 3.5x – 4.5x"  
          />  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">Typical Rent-to-Income Ratio</span>  
          <input  
            name="econ_rent_to_income"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 25% – 35%"  
          />  
        </label>  
      </div>  
  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
        <label class="block sm:col-span-1">  
          <span class="block font-medium text-gray-700">Affordability Pressure</span>  
          <select name="econ_affordability_pressure" class="form-input h-9">  
            <option value="">Select…</option>  
            <option value="low">Low (Generally Affordable)</option>  
            <option value="moderate">Moderate (Some Pressure)</option>  
            <option value="high">High (Cost-Burdened)</option>  
          </select>  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block font-medium text-gray-700">Explain affordability pressure</span>  
          <textarea  
            name="econ_affordability_explain"  
            rows="2"  
            class="form-input"  
            maxlength="400"  
            placeholder="Describe whether housing costs are rising faster than incomes and how this affects buyer and renter behavior."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="econ_affordability_explain">0</span> / 400</div>  
        </label>  
      </div>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-4">  
      <h3 class="text-sm font-semibold text-gray-700 mb-1">Employment Conditions</h3>  
  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
        <label class="block sm:col-span-1">  
          <span class="block font-medium text-gray-700">Overall Job Market Trend</span>  
          <select name="econ_job_trend" class="form-input h-9">  
            <option value="">Select…</option>  
            <option value="growing">Growing</option>  
            <option value="stable">Stable</option>  
            <option value="declining">Declining</option>  
          </select>  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block font-medium text-gray-700">Explain observed employment trend</span>  
          <textarea  
            name="econ_job_trend_explain"  
            rows="2"  
            class="form-input"  
            maxlength="400"  
            placeholder="Summarize recent hiring, layoffs, or employer movement affecting the area."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="econ_job_trend_explain">0</span> / 400</div>  
        </label>  
      </div>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-4">  
      <h3 class="text-sm font-semibold text-gray-700 mb-1">Dominant Employers & Business Districts</h3>  
  
      <label class="block">  
        <span class="block font-medium text-gray-700">Key Employers / Institutions</span>  
        <span class="block text-xs text-gray-500 mb-1">  
          List major employers, institutions, and anchor facilities influencing local employment.  
        </span>  
        <textarea  
          name="econ_key_employers"  
          rows="3"  
          class="form-input"  
          maxlength="400"  
          placeholder="Example: Regional hospital, university, logistics hubs, municipal government, major manufacturers, etc."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="econ_key_employers">0</span> / 400</div>  
      </label>  
  
      <label class="block">  
        <span class="block font-medium text-gray-700">Primary Business Districts / Commercial Nodes</span>  
        <span class="block text-xs text-gray-500 mb-1">  
          Identify key corridors, downtowns, or commercial centers serving the market area.  
        </span>  
        <textarea  
          name="econ_business_districts"  
          rows="3"  
          class="form-input"  
          maxlength="400"  
          placeholder="Example: Main Street retail corridor, neighborhood shopping centers, industrial parks, or office clusters."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="econ_business_districts">0</span> / 400</div>  
      </label>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 space-y-4">  
      <h3 class="text-sm font-semibold text-gray-700 mb-1">Economic Development, Risk & Resilience</h3>  
  
      <label class="block">  
        <span class="block font-medium text-gray-700">Economic Development & Investment Activity</span>  
        <span class="block text-xs text-gray-500 mb-1">  
          Note any major public or private investments, expansions, or redevelopment plans that may influence demand or pricing.  
        </span>  
        <textarea  
          name="econ_development_activity"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Example: Planned transit improvements, commercial corridors under revitalization, large new employers, or institutional expansions."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="econ_development_activity">0</span> / 600</div>  
      </label>  
  
      <label class="block">  
        <span class="block font-medium text-gray-700">Economic Risk & Concentration</span>  
        <span class="block text-xs text-gray-500 mb-1">  
          Comment on any over-reliance on a single industry/employer or other vulnerabilities (e.g., plant closures, institutional downsizing).  
        </span>  
        <textarea  
          name="econ_risk_concentration"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Identify key risks or diversification strengths that may impact long-term stability and housing demand."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="econ_risk_concentration">0</span> / 600</div>  
      </label>  
    </div>  
  
    <label class="block">  
      <span class="block text-sm font-medium">Relationship and Connectivity to Broader Metropolitan Area:</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Describe connectivity to employment hubs, transit corridors, downtown access, and regional commercial centers.  
      </span>  
      <textarea  
        name="econ_metro_relationship"  
        rows="3"  
        class="form-input"  
        maxlength="1000"  
        placeholder="Example: 20–25 minutes to downtown via highway or rail; direct access to regional job centers, hospitals, universities, and retail corridors."  
      ></textarea>  
      <div class="counter-wrap"><span data-counter-for="econ_metro_relationship">0</span> / 1000</div>  
    </label>  
  
    <label class="block">  
      <span class="block text-sm font-medium">Summary of Economic Influences *</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Provide an integrated summary of how employment trends, dominant employers, incomes, affordability, and  
        economic development shape the market’s <strong>strength, risk, and direction</strong>.  
      </span>  
      <textarea  
        name="econ_overall_narrative"  
        rows="4"  
        required  
        class="form-input"  
        maxlength="1500"  
        placeholder="Summarize how the local economy supports or constrains housing demand, price growth, and investor activity in the subject’s market area."  
      ></textarea>  
      <div class="counter-wrap"><span data-counter-for="econ_overall_narrative">0</span> / 1500</div>  
    </label>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="marketability-factors" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Marketability Factors</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section documents the <strong>strengths and weaknesses</strong> that directly affect how quickly the  
      property is likely to sell or lease and at what <strong>price point</strong>. These marketability factors  
      help explain any <strong>premium or discount</strong> in the final BPO value, connect to the  
      <strong>Target Buyer Profile</strong>, and support your strategy for <strong>repairs, staging, pricing,  
      and marketing time expectations</strong>.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Identify the current physical, locational, and economic influences that affect the subject’s ability  
    to attract buyers or tenants within the market area.  
  </p>  
  
  <div class="space-y-6">  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <h3 class="text-sm font-semibold text-gray-700">Positive Marketability Influences</h3>  
      <p class="text-xs text-gray-500 mb-2">  
        Include any features or nearby amenities that increase buyer interest, enhance stability,  
        or support higher market acceptance.  
      </p>  
  
      <label class="block">  
        <span class="block font-medium text-gray-700">List the current positive influences <span class="text-red-600">*</span></span>  
        <textarea  
          id="pos_influences_list"  
          name="pos_influences_list"  
          rows="3"  
          class="form-input"  
          required  
          maxlength="1500"  
          placeholder="e.g., Proximity to strong school district; recent renovations in the area; walkable commercial corridor; low neighborhood turnover."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="pos_influences_list">0</span> / 1500</div>  
      </label>  
  
      
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <h3 class="text-sm font-semibold text-gray-700">Negative Marketability Influences</h3>  
      <p class="text-xs text-gray-500 mb-2">  
        Identify any adverse physical, locational, or environmental elements that may reduce buyer interest,  
        lengthen marketing time, or place downward pressure on value.  
      </p>  
  
      <label class="block">  
        <span class="block font-medium text-gray-700">List the current negative influences <span class="text-red-600">*</span></span>  
        <textarea  
          id="neg_influences_list"  
          name="neg_influences_list"  
          rows="3"  
          class="form-input"  
          required  
          maxlength="1500"  
          placeholder="e.g., Adjacent to high-traffic roadway; nearby vacant or distressed properties; flood zone influence; industrial adjacency."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="neg_influences_list">0</span> / 1500</div>  
      </label>  
  
        
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <h3 class="text-sm font-semibold text-gray-700">Marketability Summary & Value Impact</h3>  
      <p class="text-xs text-gray-500 mb-2">  
        Provide a concise narrative that ties together the positive and negative influences, land use and occupancy  
        mix, and recent market trends. This summary should explain how the subject’s overall marketability is  
        expected to impact its pricing, marketing time, and buyer pool.  
      </p>  
  
      <label class="block">  
        <span class="block font-medium text-gray-700">Marketability summary narrative <span class="text-red-600">*</span></span>  
        <textarea  
          id="marketability_summary"  
          name="marketability_summary"  
          rows="4"  
          class="form-input"  
          required  
          maxlength="1800"  
          placeholder="Summarize how the subject’s strengths and weaknesses, local demand, and competitive position are likely to influence its value range and expected exposure time."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="marketability_summary">0</span> / 1800</div>  
      </label>  
    </div>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="market-area-sales-activity" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Market Area Sales Activity</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section captures the <strong>broad market context</strong> for sales. By tracking total volume,  
      price ranges, median prices, and marketing times for the entire market area, we establish a baseline  
      to compare against the specific <strong>Submarket</strong> later in the report. This helps identify if  
      the general market is heating up or cooling down.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Enter the sales and listing statistics for the overall market area defined in the previous section.  
  </p>  
  
  <div class="space-y-6">  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <h4 class="text-xs font-semibold text-gray-700">Sold Listing Activity</h4>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Total Sold Listings:</span>  
          <input  
            name="ma_sold_total"  
            type="number"  
            min="0"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Low Price:</span>  
          <input  
            name="ma_sold_low_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $45,000"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">High Price:</span>  
          <input  
            name="ma_sold_high_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $650,000"  
          />  
        </label>  
      </div>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Median Price:</span>  
          <input  
            name="ma_sold_median_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $215,000"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Average DOM:</span>  
          <input  
            name="ma_sold_avg_dom"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 32"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">List-to-Price Ratio:</span>  
          <input  
            name="ma_sold_list_to_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 97.5%"  
          />  
        </label>  
      </div>  
  
      <label class="block">  
        <span class="block text-xs font-medium text-gray-700">Summary of Sold Listing Activity:</span>  
        <textarea  
          name="ma_sold_summary"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Summarize how sold listings are performing, including price brackets with strongest activity, discounting patterns, and overall liquidity."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="ma_sold_summary">0</span> / 600</div>  
      </label>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <h4 class="text-xs font-semibold text-gray-700">Active Listing Activity</h4>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Total Active Listings:</span>  
          <input  
            name="ma_active_total"  
            type="number"  
            min="0"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Low Price:</span>  
          <input  
            name="ma_active_low_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $55,000"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">High Price:</span>  
          <input  
            name="ma_active_high_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $725,000"  
          />  
        </label>  
      </div>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Median Price:</span>  
          <input  
            name="ma_active_median_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $240,000"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Average DOM:</span>  
          <input  
            name="ma_active_avg_dom"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 45"  
          />  
        </label>  
      </div>  
  
      <label class="block">  
        <span class="block text-xs font-medium text-gray-700">Summary of Active Listing Activity:</span>  
        <textarea  
          name="ma_active_summary"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Describe how active listings are positioned versus solds, including pricing, time on market, and any buildup or shortage of inventory."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="ma_active_summary">0</span> / 600</div>  
      </label>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <label class="block">  
        <span class="block text-xs font-medium text-gray-700">Summary of Other Listing Types Activity:</span>  
        <textarea  
          name="ma_other_types_summary"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Summarize contingent, pending, off-market, withdrawn, and other listing statuses within the submarket."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="ma_other_types_summary">0</span> / 600</div>  
      </label>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <label class="block">  
        <span class="block text-sm font-medium text-gray-700">Summarize the Sales market activity:</span>  
        <span class="block text-xs text-gray-500 mb-1">  
          Provide a cohesive overview of the sales market dynamics based on the data above.  
        </span>  
        <textarea  
          name="ma_sales_activity_summary"  
          rows="4"  
          class="form-input"  
          maxlength="1000"  
          placeholder="Summarize the overall sales market activity, trends, and key takeaways for the market area."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="ma_sales_activity_summary">0</span> / 1000</div>  
      </label>  
    </div>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="market-area-distressed-sales-activity" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Market Area Distressed Sales Activity</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section identifies <strong>financial stress</strong> in the market. A high volume of distressed listings  
      (foreclosures, short sales) can drag down property values and indicate increased risk. Understanding this  
      helps justify whether we should use distressed sales as comparables or exclude them to find "fair market value."  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Report on the presence and impact of distressed inventory (REO, short sales, etc.) within the market area.  
  </p>  
  
  <div class="space-y-6">  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-4">  
      <h4 class="text-xs font-semibold text-gray-700">Distressed Listing Activity</h4>  
  
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">REOs:</span>  
          <input  
            name="ma_distressed_reos"  
            type="text"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">Short Sales:</span>  
          <input  
            name="ma_distressed_short_sales"  
            type="text"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">Probates:</span>  
          <input  
            name="ma_distressed_probates"  
            type="text"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">In Foreclosure:</span>  
          <input  
            name="ma_distressed_in_foreclosure"  
            type="text"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">Bankruptcies:</span>  
          <input  
            name="ma_distressed_bankruptcies"  
            type="text"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">HUD Owned:</span>  
          <input  
            name="ma_distressed_hud"  
            type="text"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
      </div>  
  
      <div class="border-t border-gray-200 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Total Distressed Listings:</span>  
          <input  
            name="ma_distressed_total"  
            type="number"  
            min="0"  
            class="form-input h-9"  
            placeholder="Sum of above"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Percent of Listings that Were Distressed:</span>  
          <input  
            name="ma_distressed_pct"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 12% of all listings"  
          />  
        </label>  
      </div>  
  
      <label class="block border-t border-gray-200 pt-4">  
        <span class="block text-xs font-medium text-gray-700">Summary of Distressed Listings Activity:</span>  
        <textarea  
          name="ma_distressed_summary"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Discuss volume, pricing behavior vs. non-distressed listings, and how distress affects investor activity and neighborhood stability."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="ma_distressed_summary">0</span> / 600</div>  
      </label>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="rental-market-analysis" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Rental Market Analysis</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      Rental data provides critical support for value, especially for investment properties or in areas with  
      high tenant occupancy. Analyzing rents, vacancies, and trends helps determine the <strong>income potential</strong>  
      of the subject property and supports the <strong>Income Approach</strong> to value if applicable.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Analyze the local rental market conditions to support income-based value conclusions or investor demand.  
  </p>  
  
  <div class="space-y-6">  
    <div id="rental_block" class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-4">  
      <h3 class="text-sm font-semibold text-gray-700">Rental Market Data</h3>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Total Rental Listing Activity:</span>  
            <input  
              name="rent_total_listing_activity"  
              type="number"  
              min="0"  
              class="form-input h-9"  
              placeholder="Total rental listings analyzed"  
            />  
          </label>  
  
          <label class="block">  
            <span class="block font-medium text-gray-700">Inventory Trend</span>  
            <select name="rent_inventory_trend" class="form-input h-9">  
              <option value="">Select…</option>  
              <option value="increasing">Increasing</option>  
              <option value="stable">Stable</option>  
              <option value="decreasing">Decreasing</option>  
            </select>  
          </label>  
  
          <label class="block">  
            <span class="block font-medium text-gray-700">Vacancy Rate:</span>  
            <input  
              name="rent_vacancy_rate"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. 4.5%"  
            />  
          </label>  
        </div>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <h4 class="text-xs font-semibold text-gray-700">Rented Listing Activity</h4>  
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Total Rented Listings:</span>  
            <input  
              name="rented_total"  
              type="number"  
              min="0"  
              class="form-input h-9"  
              placeholder="Count"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Low Price:</span>  
            <input  
              name="rented_low_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $900"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">High Price:</span>  
            <input  
              name="rented_high_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $2,500"  
            />  
          </label>  
        </div>  
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Median Price:</span>  
            <input  
              name="rented_median_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $1,650"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Average DOM:</span>  
            <input  
              name="rented_avg_dom"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. 22"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">List-to-Price Ratio:</span>  
            <input  
              name="rented_list_to_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. 99.0%"  
            />  
          </label>  
        </div>  
  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">Summary of Rented Listing Activity:</span>  
          <textarea  
            name="rented_summary"  
            rows="3"  
            class="form-input"  
            maxlength="600"  
            data-rental-required="1"  
            placeholder="Summarize how leased properties are performing, including rent levels, time to lease, and concessions if any."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="rented_summary">0</span> / 600</div>  
        </label>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <h4 class="text-xs font-semibold text-gray-700">Active Rental Listing Activity</h4>  
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Total Active Rental Listings:</span>  
            <input  
              name="rent_active_total"  
              type="number"  
              min="0"  
              class="form-input h-9"  
              placeholder="Count"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Low Price:</span>  
            <input  
              name="rent_active_low_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $950"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">High Price:</span>  
            <input  
              name="rent_active_high_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $2,700"  
            />  
          </label>  
        </div>  
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Median Price:</span>  
            <input  
              name="rent_active_median_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $1,700"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Average DOM:</span>  
            <input  
              name="rent_active_avg_dom"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. 28"  
            />  
          </label>  
        </div>  
  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">Summary of Active Rental Listing Activity:</span>  
          <textarea  
            name="rent_active_summary"  
            rows="3"  
            class="form-input"  
            maxlength="600"  
            data-rental-required="1"  
            placeholder="Describe pricing and absorption of active rental listings, including any buildup of supply."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="rent_active_summary">0</span> / 600</div>  
        </label>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">Summary of Other Rental Listing Types Activity:</span>  
          <textarea  
            name="rent_other_types_summary"  
            rows="3"  
            class="form-input"  
            maxlength="600"  
            placeholder="Summarize pending, off-market, corporate rentals, or other rental statuses in the submarket."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="rent_other_types_summary">0</span> / 600</div>  
        </label>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <label class="block">  
          <span class="block text-sm font-medium text-gray-700">Summarize the Rental market activity for the market area:</span>  
          <span class="block text-xs text-gray-500 mb-1">  
            Provide a cohesive overview of the rental market dynamics based on the data above.  
          </span>  
          <textarea  
            name="rent_market_activity_summary"  
            rows="4"  
            class="form-input"  
            maxlength="1000"  
            placeholder="Summarize the overall rental market activity, trends, and key takeaways for the market area."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="rent_market_activity_summary">0</span> / 1000</div>  
        </label>  
      </div>  
  
    </div> </div> </section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-definition" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Submarket Definition (Subject’s Competitive Set)</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section defines the subject’s <strong>true competitive set</strong>—the niche where buyers are actually  
      choosing between this property and its closest substitutes. By naming the submarket, quantifying pricing and  
      rent ranges, and tracking inventory and investor activity, you create the bridge between the  
      <strong>Market Area Report</strong> and the <strong>CMA/BPO value conclusions</strong>.  
      It supports your final opinion on price, exposure time, and the most likely buyer segment.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Define the subject’s immediate competitive niche based on price point, buyer segment,  
    property characteristics, and market behavior.  
  </p>  
  
  <div class="space-y-6">  
  
    <label class="block">  
      <span class="block text-sm font-medium">Submarket (Niche Market) Name *</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Select the niche market segment where properties directly compete with the subject.  
      </span>  
  
      <select id="submarket_name_select" name="submarket_name_select" required class="form-input">  
        <option value="">Select…</option>  
        <option value="First-Time Buyer Starter Homes">First-Time Buyer Starter Homes</option>  
        <option value="Move-Up Family Homes">Move-Up Family Homes</option>  
        <option value="Luxury Homes">Luxury Homes</option>  
        <option value="Historic / Heritage Homes">Historic / Heritage Homes</option>  
        <option value="New Construction / Spec Homes">New Construction / Spec Homes</option>  
        <option value="Townhomes / Rowhomes">Townhomes / Rowhomes</option>  
        <option value="Condominiums (Urban / Mid-High Rise)">Condominiums (Urban / Mid-High Rise)</option>  
        <option value="Duplex / Triplex / Quadplex (2–4 Units)">Duplex / Triplex / Quadplex (2–4 Units)</option>  
        <option value="Small Multifamily Rentals (2–4 Units)">Small Multifamily Rentals (2–4 Units)</option>  
        <option value="Large Multifamily (5+ Units)">Large Multifamily (5+ Units)</option>  
        <option value="Long-Term Rental SFRs">Long-Term Rental SFRs</option>  
        <option value="Short-Term Rentals (STR / Airbnb)">Short-Term Rentals (STR / Airbnb)</option>  
        <option value="Student Housing">Student Housing</option>  
        <option value="Senior / 55+ Housing">Senior / 55+ Housing</option>  
        <option value="Waterfront / View Homes">Waterfront / View Homes</option>  
        <option value="Rural / Acreage Properties">Rural / Acreage Properties</option>  
        <option value="Manufactured / Mobile Homes">Manufactured / Mobile Homes</option>  
        <option value="Mixed-Use Small Buildings">Mixed-Use Small Buildings</option>  
        <option value="Transit-Oriented / Walkable Urban">Transit-Oriented / Walkable Urban</option>  
        <option value="Value-Add / Fixer-Uppers">Value-Add / Fixer-Uppers</option>  
        <option value="Investor Fix & Flip">Investor Fix & Flip</option>  
        <option value="Vacation / Second Homes">Vacation / Second Homes</option>  
        <option value="FHA-Friendly Entry Level">FHA-Friendly Entry Level</option>  
        <option value="VA Buyer–Oriented">VA Buyer–Oriented</option>  
        <option value="other">Other (Custom)</option>  
      </select>  
  
      <input  
        id="submarket_name_custom"  
        name="submarket_name_custom"  
        type="text"  
        class="form-input mt-2 hidden"  
        placeholder="Enter custom submarket name"  
      />  
  
      <p class="text-xs text-gray-500 mt-1">  
        If “Other (Custom)” is selected, enter the custom submarket name above.  
      </p>  
    </label>  
  
    <label class="block">  
      <span class="block text-sm font-medium">Submarket (Niche Market) Description *</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Briefly describe the niche, including typical appeal, property type, and buyer expectations.  
      </span>  
      <textarea  
        name="submarket_description"  
        required  
        rows="3"  
        class="form-input"  
        placeholder="Definition and overview for the niche identified above."  
        maxlength="600"  
      ></textarea>  
      <div class="counter-wrap"><span data-counter-for="submarket_description">0</span> / 600</div>  
    </label>  
  
    <h3 class="text-lg font-semibold mt-6 mb-4 text-gray-700">Submarket Pricing Overview</h3>  
  
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs mb-2">  
      <label class="block sm:col-span-1">  
        <span class="block font-medium text-gray-700">Timeframe</span>  
        <select name="sm_timeframe" class="form-input">  
          <option value="">Select timeframe…</option>  
          <option value="3-months">3-Months</option>  
          <option value="6-months">6-Months</option>  
          <option value="1-year">1-year</option>  
          <option value="2-years">2-years</option>  
          <option value="3-years">3-years</option>  
          <option value="5-years">5-years</option>  
        </select>  
      </label>  
  
      <label class="block sm:col-span-2">  
        <span class="block font-medium text-gray-700">Please explain timeframe</span>  
        <textarea  
          name="sm_timeframe_explain"  
          rows="2"  
          class="form-input"  
          maxlength="300"  
          placeholder="Explain why this timeframe was selected and how it reflects current market conditions."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="sm_timeframe_explain">0</span> / 300</div>  
      </label>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-4">  
        
      <div class="w-full sm:w-1/2">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Total Listing Activity:</span>  
          <input  
            name="sm_total_listing_activity"  
            type="number"  
            min="0"  
            class="form-input h-9"  
            placeholder="Total number of listings analyzed"  
          />  
        </label>  
      </div>  
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Inventory Trend</span>  
          <select name="sm_inventory_trend" class="form-input h-9">  
            <option value="">Select…</option>  
            <option value="increasing">Increasing</option>  
            <option value="stable">Stable</option>  
            <option value="decreasing">Decreasing</option>  
          </select>  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">Inventory Trend – Please explain</span>  
          <textarea  
            name="sm_inventory_trend_explain"  
            rows="2"  
            class="form-input"  
            maxlength="300"  
            placeholder="Explain observed changes in listing inventory over the selected timeframe."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="sm_inventory_trend_explain">0</span> / 300</div>  
        </label>  
      </div>  
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Marketing Trend</span>  
          <select name="sm_marketing_trend" class="form-input h-9">  
            <option value="">Select…</option>  
            <option value="increasing">Increasing</option>  
            <option value="stable">Stable</option>  
            <option value="decreasing">Decreasing</option>  
          </select>  
        </label>  
  
        <label class="block">  
          <span class="block font-medium text-gray-700">Marketing Trend – Please explain</span>  
          <textarea  
            name="sm_marketing_trend_explain"  
            rows="2"  
            class="form-input"  
            maxlength="300"  
            placeholder="Explain how marketing times or strategies are changing in this submarket."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="sm_marketing_trend_explain">0</span> / 300</div>  
        </label>  
      </div>  
  
    </div>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-sales-activity" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Submarket Sales Activity</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section drills down into the specific <strong>Submarket</strong> defined earlier. By analyzing sales  
      volume, pricing, and marketing times specifically for this competitive set, we can determine the  
      <strong>most probable selling price</strong> and <strong>exposure time</strong> for the subject property with  
      greater precision than broad market data allows.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Enter the sales and listing statistics for the specific submarket (competitive set) defined in the previous section.  
  </p>  
  
  <div class="space-y-6">  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <h4 class="text-xs font-semibold text-gray-700">Sold Listing Activity</h4>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Total Sold Listings:</span>  
          <input  
            name="sm_sold_total"  
            type="number"  
            min="0"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Low Price:</span>  
          <input  
            name="sm_sold_low_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $45,000"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">High Price:</span>  
          <input  
            name="sm_sold_high_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $650,000"  
          />  
        </label>  
      </div>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Median Price:</span>  
          <input  
            name="sm_sold_median_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $215,000"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Average DOM:</span>  
          <input  
            name="sm_sold_avg_dom"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 32"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">List-to-Price Ratio:</span>  
          <input  
            name="sm_sold_list_to_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 97.5%"  
          />  
        </label>  
      </div>  
  
      <label class="block">  
        <span class="block text-xs font-medium text-gray-700">Summary of Sold Listing Activity:</span>  
        <textarea  
          name="sm_sold_summary"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Summarize how sold listings are performing, including price brackets with strongest activity, discounting patterns, and overall liquidity."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="sm_sold_summary">0</span> / 600</div>  
      </label>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <h4 class="text-xs font-semibold text-gray-700">Active Listing Activity</h4>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Total Active Listings:</span>  
          <input  
            name="sm_active_total"  
            type="number"  
            min="0"  
            class="form-input h-9"  
            placeholder="Count"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Low Price:</span>  
          <input  
            name="sm_active_low_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $55,000"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">High Price:</span>  
          <input  
            name="sm_active_high_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $725,000"  
          />  
        </label>  
      </div>  
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Median Price:</span>  
          <input  
            name="sm_active_median_price"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. $240,000"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Average DOM:</span>  
          <input  
            name="sm_active_avg_dom"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 45"  
          />  
        </label>  
      </div>  
  
      <label class="block">  
        <span class="block text-xs font-medium text-gray-700">Summary of Active Listing Activity:</span>  
        <textarea  
          name="sm_active_summary"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Describe how active listings are positioned versus solds, including pricing, time on market, and any buildup or shortage of inventory."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="sm_active_summary">0</span> / 600</div>  
      </label>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <label class="block">  
        <span class="block text-xs font-medium text-gray-700">Summary of Other Listing Types Activity:</span>  
        <textarea  
          name="sm_other_types_summary"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Summarize contingent, pending, off-market, withdrawn, and other listing statuses within the submarket."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="sm_other_types_summary">0</span> / 600</div>  
      </label>  
    </div>  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <label class="block">  
        <span class="block text-sm font-medium text-gray-700">Summarize the Submarket Sales Activity:</span>  
        <span class="block text-xs text-gray-500 mb-1">  
          Provide a cohesive overview of the sales activity specifically for this competitive set based on the data above.  
        </span>  
        <textarea  
          name="sm_sales_activity_summary"  
          rows="4"  
          class="form-input"  
          maxlength="1000"  
          placeholder="Summarize the overall sales activity, trends, and key takeaways for this submarket."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="sm_sales_activity_summary">0</span> / 1000</div>  
      </label>  
    </div>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-distressed-activity" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Submarket Distressed Activity</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      Distressed activity specifically within this submarket can signal localized issues or opportunities.  
      While the broader market might be healthy, a high concentration of distressed sales in this specific niche  
      could indicate oversupply, financing difficulties for this buyer type, or specific neighborhood decline.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Report on the presence and impact of distressed inventory (REO, short sales, etc.) within the specific submarket.  
  </p>  
  
  <div class="space-y-6">  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-4">  
      <h4 class="text-xs font-semibold text-gray-700">Distressed Listing Activity</h4>  
  
      <div class="border-t border-gray-200 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">  
        <label class="block">  
          <span class="block font-medium text-gray-700">Total Distressed Listings:</span>  
          <input  
            name="sm_distressed_total"  
            type="number"  
            min="0"  
            class="form-input h-9"  
            placeholder="Sum of above"  
          />  
        </label>  
        <label class="block">  
          <span class="block font-medium text-gray-700">Percent of Listings that Were Distressed:</span>  
          <input  
            name="sm_distressed_pct"  
            type="text"  
            class="form-input h-9"  
            placeholder="e.g. 12% of all listings"  
          />  
        </label>  
      </div>  
  
      <label class="block border-t border-gray-200 pt-4">  
        <span class="block text-xs font-medium text-gray-700">Summary of Distressed Listings Activity:</span>  
        <textarea  
          name="sm_distressed_summary"  
          rows="3"  
          class="form-input"  
          maxlength="600"  
          placeholder="Discuss volume, pricing behavior vs. non-distressed listings, and how distress affects investor activity and neighborhood stability."  
        ></textarea>  
        <div class="counter-wrap"><span data-counter-for="sm_distressed_summary">0</span> / 600</div>  
      </label>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-rental-activity" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Submarket Rental Activity</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      Rental data provides critical support for value, especially for investment properties or in areas with  
      high tenant occupancy. Analyzing rents, vacancies, and trends helps determine the <strong>income potential</strong>  
      of the subject property and supports the <strong>Income Approach</strong> to value if applicable.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Analyze the local rental market conditions to support income-based value conclusions or investor demand.  
  </p>  
  
  <div class="space-y-6">  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
      <h3 class="text-sm font-semibold text-gray-700">Rental Market Analysis Scope</h3>  
  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
        <div class="sm:col-span-1 flex items-center">  
          <label class="inline-flex items-center cursor-pointer">  
            <input  
              type="checkbox"  
              name="sm_rental_analysis_exclude"  
              value="1"  
              class="form-checkbox h-4 w-4 text-gray-600 border-gray-300 rounded"  
            />  
            <span class="ml-2 font-medium text-gray-700">Exclude rental analysis from this report</span>  
          </label>  
        </div>  
  
        <label class="block sm:col-span-2">  
          <span class="block font-medium text-gray-700">  
            Please explain why rental market analysis was excluded (if checked).  
          </span>  
          <textarea  
            name="sm_rental_excluded_explain"  
            rows="2"  
            class="form-input"  
            maxlength="600"  
            placeholder="If rental analysis is excluded, explain why it is not relevant or data is not reliable."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="sm_rental_excluded_explain">0</span> / 600</div>  
        </label>  
      </div>  
    </div>  
  
    <div id="sm_rental_block" class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-4">  
      <h3 class="text-sm font-semibold text-gray-700">Submarket Rental Market Data</h3>  
  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
        <label class="block sm:col-span-1">  
          <span class="block font-medium text-gray-700">Timeframe</span>  
          <select name="sm_rent_timeframe" class="form-input h-9" data-rental-required="1">  
            <option value="">Select timeframe…</option>  
            <option value="3-months">3-Months</option>  
            <option value="6-months">6-Months</option>  
            <option value="1-year">1-year</option>  
            <option value="2-years">2-years</option>  
            <option value="3-years">3-years</option>  
            <option value="5-years">5-years</option>  
          </select>  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block font-medium text-gray-700">Please explain timeframe</span>  
          <textarea  
            name="sm_rent_timeframe_explain"  
            rows="2"  
            class="form-input"  
            maxlength="300"  
            data-rental-required="1"  
            placeholder="Explain why this rental timeframe is appropriate for current market conditions."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="sm_rent_timeframe_explain">0</span> / 300</div>  
        </label>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Total Rental Listing Activity:</span>  
            <input  
              name="sm_rent_total_listing_activity"  
              type="number"  
              min="0"  
              class="form-input h-9"  
              placeholder="Total rental listings analyzed"  
            />  
          </label>  
  
          <label class="block">  
            <span class="block font-medium text-gray-700">Inventory Trend</span>  
            <select name="sm_rent_inventory_trend" class="form-input h-9">  
              <option value="">Select…</option>  
              <option value="increasing">Increasing</option>  
              <option value="stable">Stable</option>  
              <option value="decreasing">Decreasing</option>  
            </select>  
          </label>  
  
          <label class="block">  
            <span class="block font-medium text-gray-700">Vacancy Rate:</span>  
            <input  
              name="sm_rent_vacancy_rate"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. 4.5%"  
            />  
          </label>  
        </div>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <h4 class="text-xs font-semibold text-gray-700">Rented Listing Activity</h4>  
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Total Rented Listings:</span>  
            <input  
              name="sm_rented_total"  
              type="number"  
              min="0"  
              class="form-input h-9"  
              placeholder="Count"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Low Price:</span>  
            <input  
              name="sm_rented_low_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $900"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">High Price:</span>  
            <input  
              name="sm_rented_high_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $2,500"  
            />  
          </label>  
        </div>  
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Median Price:</span>  
            <input  
              name="sm_rented_median_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $1,650"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Average DOM:</span>  
            <input  
              name="sm_rented_avg_dom"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. 22"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">List-to-Price Ratio:</span>  
            <input  
              name="sm_rented_list_to_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. 99.0%"  
            />  
          </label>  
        </div>  
  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">Summary of Rented Listing Activity:</span>  
          <textarea  
            name="sm_rented_summary"  
            rows="3"  
            class="form-input"  
            maxlength="600"  
            data-rental-required="1"  
            placeholder="Summarize how leased properties are performing, including rent levels, time to lease, and concessions if any."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="sm_rented_summary">0</span> / 600</div>  
        </label>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <h4 class="text-xs font-semibold text-gray-700">Active Rental Listing Activity</h4>  
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Total Active Rental Listings:</span>  
            <input  
              name="sm_rent_active_total"  
              type="number"  
              min="0"  
              class="form-input h-9"  
              placeholder="Count"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Low Price:</span>  
            <input  
              name="sm_rent_active_low_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $950"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">High Price:</span>  
            <input  
              name="sm_rent_active_high_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $2,700"  
            />  
          </label>  
        </div>  
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Median Price:</span>  
            <input  
              name="sm_rent_active_median_price"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $1,700"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Average DOM:</span>  
            <input  
              name="sm_rent_active_avg_dom"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. 28"  
            />  
          </label>  
        </div>  
  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">Summary of Active Rental Listing Activity:</span>  
          <textarea  
            name="sm_rent_active_summary"  
            rows="3"  
            class="form-input"  
            maxlength="600"  
            data-rental-required="1"  
            placeholder="Describe pricing and absorption of active rental listings, including any buildup of supply."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="sm_rent_active_summary">0</span> / 600</div>  
        </label>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <label class="block">  
          <span class="block text-xs font-medium text-gray-700">Summary of Other Rental Listing Types Activity:</span>  
          <textarea  
            name="sm_rent_other_types_summary"  
            rows="3"  
            class="form-input"  
            maxlength="600"  
            placeholder="Summarize pending, off-market, corporate rentals, or other rental statuses in the submarket."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="sm_rent_other_types_summary">0</span> / 600</div>  
        </label>  
      </div>  
  
      <div class="border border-gray-100 border-t pt-4 space-y-3">  
        <label class="block">  
          <span class="block text-sm font-medium text-gray-700">Summarize the Submarket Rental Activity:</span>  
          <span class="block text-xs text-gray-500 mb-1">  
            Provide a cohesive overview of the rental dynamics specifically for this competitive set based on the data above.  
          </span>  
          <textarea  
            name="sm_rental_activity_summary"  
            rows="4"  
            class="form-input"  
            maxlength="1000"  
            placeholder="Summarize the overall rental activity, trends, and key takeaways for this submarket."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="sm_rental_activity_summary">0</span> / 1000</div>  
        </label>  
      </div>  
  
    </div> </div> </section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="pricing-segmentation" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Pricing Segmentation</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      Market value is not just a single number; it falls within a range defined by condition. By establishing the  
      pricing brackets for "Low" (fixer-upper), "Average" (livable but dated), and "High" (fully renovated),  
      we can clearly place the subject property on this spectrum. This justifies whether your final value opinion  
      should be at the top, middle, or bottom of the market range.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Define the low, average, and high value ranges for both Sales and Rentals within the submarket.  
  </p>  
  
  <div class="space-y-6">  
  
    <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-4">  
      <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200 pb-2">Sales Price Brackets</h3>  
  
      <div class="space-y-2">  
        <p class="text-xs font-semibold text-gray-700">Low Price Range (Damaged - Poor Condition)</p>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Low Price:</span>  
            <input  
              name="ps_sales_low_low"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $25,000"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">High Price:</span>  
            <input  
              name="ps_sales_low_high"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $85,000"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Median Price:</span>  
            <input  
              name="ps_sales_low_median"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $55,000"  
            />  
          </label>  
        </div>  
      </div>  
  
      <div class="space-y-2">  
        <p class="text-xs font-semibold text-gray-700">Average Price Range (Fair - Average Condition)</p>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Low Price:</span>  
            <input  
              name="ps_sales_avg_low"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $90,000"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">High Price:</span>  
            <input  
              name="ps_sales_avg_high"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $185,000"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Median Price:</span>  
            <input  
              name="ps_sales_avg_median"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $140,000"  
            />  
          </label>  
        </div>  
      </div>  
  
      <div class="space-y-2">  
        <p class="text-xs font-semibold text-gray-700">High Price Range (Good - Excellent Condition)</p>  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
          <label class="block">  
            <span class="block font-medium text-gray-700">Low Price:</span>  
            <input  
              name="ps_sales_high_low"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $190,000"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">High Price:</span>  
            <input  
              name="ps_sales_high_high"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $325,000"  
            />  
          </label>  
          <label class="block">  
            <span class="block font-medium text-gray-700">Median Price:</span>  
            <input  
              name="ps_sales_high_median"  
              type="text"  
              class="form-input h-9"  
              placeholder="e.g. $250,000"  
            />  
          </label>  
        </div>  
      </div>  
  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 pt-4">  
        <label class="block sm:col-span-1">  
          <span class="block font-medium text-gray-700">  
            Subject is within (Sales):  
          </span>  
          <select name="ps_sales_subject_segment" class="form-input h-9">  
            <option value="">Select…</option>  
            <option value="low">Low Price Range</option>  
            <option value="average">Average Price Range</option>  
            <option value="high">High Price Range</option>  
          </select>  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block font-medium text-gray-700">Explain Subject Sales Position</span>  
          <textarea  
            name="ps_sales_subject_explain"  
            rows="2"  
            class="form-input"  
            maxlength="600"  
            placeholder="Explain how the subject’s condition, features, and location position it within these price segments."  
          ></textarea>  
          <div class="counter-wrap"><span data-counter-for="ps_sales_subject_explain">0</span> / 600</div>  
        </label>  
      </div>  
    </div>  
  
    <div class="space-y-6">  
      <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-3">  
        <h3 class="text-sm font-semibold text-gray-700">Rental Market Bracket Scope</h3>  
  
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
          <div class="sm:col-span-1 flex items-center">  
            <label class="inline-flex items-center cursor-pointer">  
              <input  
                type="checkbox"  
                name="ps_rent_analysis_exclude"  
                value="1"  
                class="form-checkbox h-4 w-4 text-gray-600 border-gray-300 rounded"  
              />  
              <span class="ml-2 font-medium text-gray-700">Exclude from this report</span>  
            </label>  
          </div>  
  
          <label class="block sm:col-span-2">  
            <span class="block font-medium text-gray-700">  
              Please explain why rental market analysis was excluded (if checked).  
            </span>  
            <textarea  
              name="ps_rent_excluded_explain"  
              rows="2"  
              class="form-input"  
              maxlength="600"  
              placeholder="If rental analysis is excluded, explain why it is not relevant or data is not reliable."  
            ></textarea>  
            <div class="counter-wrap"><span data-counter-for="ps_rent_excluded_explain">0</span> / 600</div>  
          </label>  
        </div>  
      </div>  
  
      <div class="border border-gray-200 rounded-xl p-4 bg-gray-50 text-xs space-y-4">  
        <h3 class="text-sm font-semibold text-gray-700 uppercase tracking-wide border-b border-gray-200 pb-2">Rental Price Brackets</h3>  
  
        <div class="space-y-2">  
          <p class="text-xs font-semibold text-gray-700">Average Rental Range (Fair - Average Condition)</p>  
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
            <label class="block">  
              <span class="block font-medium text-gray-700">Low Price:</span>  
              <input  
                name="ps_rent_avg_low"  
                type="text"  
                class="form-input h-9"  
                placeholder="e.g. $1,200"  
              />  
            </label>  
            <label class="block">  
              <span class="block font-medium text-gray-700">High Price:</span>  
              <input  
                name="ps_rent_avg_high"  
                type="text"  
                class="form-input h-9"  
                placeholder="e.g. $1,900"  
              />  
            </label>  
            <label class="block">  
              <span class="block font-medium text-gray-700">Median Price:</span>  
              <input  
                name="ps_rent_avg_median"  
                type="text"  
                class="form-input h-9"  
                placeholder="e.g. $1,550"  
              />  
            </label>  
          </div>  
        </div>  
  
        <div class="space-y-2">  
          <p class="text-xs font-semibold text-gray-700">High Rental Range (Good - Excellent Condition)</p>  
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
            <label class="block">  
              <span class="block font-medium text-gray-700">Low Price:</span>  
              <input  
                name="ps_rent_high_low"  
                type="text"  
                class="form-input h-9"  
                placeholder="e.g. $2,000"  
              />  
            </label>  
            <label class="block">  
              <span class="block font-medium text-gray-700">High Price:</span>  
              <input  
                name="ps_rent_high_high"  
                type="text"  
                class="form-input h-9"  
                placeholder="e.g. $3,000"  
              />  
            </label>  
            <label class="block">  
              <span class="block font-medium text-gray-700">Median Price:</span>  
              <input  
                name="ps_rent_high_median"  
                type="text"  
                class="form-input h-9"  
                placeholder="e.g. $2,400"  
              />  
            </label>  
          </div>  
        </div>  
  
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-200 pt-4">  
          <label class="block sm:col-span-1">  
            <span class="block font-medium text-gray-700">  
              Subject is within (Rentals):  
            </span>  
            <select name="ps_rent_subject_segment" class="form-input h-9">  
              <option value="">Select…</option>  
              <option value="unrentable">Unrentable</option>  
              <option value="average-rental-range">Average Rental Range</option>  
              <option value="high-rental-range">High Rental Range</option>  
            </select>  
          </label>  
  
          <label class="block sm:col-span-2">  
            <span class="block font-medium text-gray-700">Explain Subject Rental Position</span>  
            <textarea  
              name="ps_rent_subject_explain"  
              rows="2"  
              class="form-input"  
              maxlength="600"  
              placeholder="Explain the subject’s rental competitiveness based on condition, features, and location."  
            ></textarea>  
            <div class="counter-wrap"><span data-counter-for="ps_rent_subject_explain">0</span> / 600</div>  
          </label>  
        </div>  
      </div>  
    </div>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-narrative-summary" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Submarket Narrative Summary</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This narrative is the <strong>executive summary</strong> of your submarket analysis. It integrates sales volume,  
      distress levels, rental data, and segmentation into a cohesive story. This is where you explain the <strong>risk and opportunity</strong>  
      context that justifies your final value conclusion.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Provide an integrated summary of the specific submarket dynamics impacting the subject property.  
  </p>  
  
  <label class="block">  
    <span class="block text-sm font-medium">Submarket (Niche) Narrative Summary *</span>  
    <span class="block text-xs text-gray-500 mb-1">  
      Provide an integrated narrative of pricing, segmentation, and rental dynamics for this niche, and how they  
      influence the subject’s risk, opportunity, and likely buyer or tenant pool.  
    </span>  
    <textarea  
      name="submarket_summary_narrative"  
      rows="4"  
      required  
      class="form-input"  
      placeholder="Summarize submarket strengths, weaknesses, and how the subject property fits within this niche."  
      maxlength="1500"  
    ></textarea>  
    <div class="counter-wrap"><span data-counter-for="submarket_summary_narrative">0</span> / 1500</div>  
  </label>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="target-buyer-profile" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Target Buyer Profile</h2>  
  
  <!-- Section detail box -->  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section translates the <strong>market data</strong> and <strong>property condition</strong> into a clear  
      picture of <strong>who is most likely to buy this property</strong> and how they will finance it.   
      It connects the <strong>Submarket Definition</strong> and <strong>Affordability Analysis</strong> to a practical  
      buyer profile, supporting decisions about list price, marketing strategy, renovation scope, and expected  
      time on market for both <strong>owner-occupant buyers</strong> and <strong>investors</strong>.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-600 mb-6">  
    Identify the most likely buyer segment based on the subject’s location, condition, affordability, and overall position within the market.  
  </p>  
  
  <div class="space-y-6">  
  
    <!-- Buyer Type -->  
    <label class="block">  
      <span class="block text-sm font-medium">Most Probable Buyer Type *</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Select the buyer group most likely to purchase the subject property based on market trends and property characteristics.  
      </span>  
      <select name="buyer_type" required class="form-input">  
        <option value="">Select…</option>  
        <option>First-Time Buyer</option>  
        <option>Move-Up Buyer</option>  
        <option>Downsizer</option>  
        <option>Relocation Buyer</option>  
        <option>Investor - Fix & Flip</option>  
        <option>Investor - Long-Term Rental</option>  
        <option>Small Developer / Builder</option>  
        <option>Other</option>  
      </select>  
    </label>  
  
    <!-- Financing Type -->  
    <label class="block">  
      <span class="block text-sm font-medium">Typical Buyer Financing Type *</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Based on the price point, condition, and buyer segment, identify the most likely source of financing.  
      </span>  
      <select name="buyer_financing" required class="form-input">  
        <option value="">Select…</option>  
        <option>Conventional</option>  
        <option>FHA</option>  
        <option>VA</option>  
        <option>Cash</option>  
        <option>DSCR/Non-QM</option>  
        <option>Portfolio / Local Lending</option>  
      </select>  
    </label>  
  
    <!-- Narrative -->  
    <label class="block">  
      <span class="block text-sm font-medium">Target Buyer Assessment Narrative *</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Explain why this buyer segment is most probable, referencing PCR findings, market conditions, location, and affordability.  
      </span>  
      <textarea  
        name="buyer_narrative"  
        rows="3"  
        required  
        class="form-input"  
        placeholder="Explain the market evidence supporting the selected buyer profile. Reference location, condition, affordability, and market segment demand."  
        maxlength="1000"  
      ></textarea>  
      <div class="counter-wrap"><span data-counter-for="buyer_narrative">0</span> / 1000</div>  
    </label>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div class="pt-8 border-t mt-8">  
  <div class="flex items-center justify-between gap-3 w-full">  
    <button  
      type="button"  
      id="mar_clearFormBtn"  
      class="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium bg-white hover:bg-gray-50 transition-colors"  
    >  
      Clear Form  
    </button>  
  
    <div class="flex items-center gap-3">  
      <span id="statusMsg" class="text-sm font-medium"></span>  
      <button  
        type="button"  
        id="generateMarketAnalysisReportBtn"  
        class="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow-xl hover:bg-blue-700 transition-colors"  
      >  
        Generate PDF  
      </button>  
    </div>  
  </div>  
</div>  
</form>  
</main>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
/**  
 * Market Analysis Report (MAR) - Main Logic  
 * Handles form validation, auto-calculations, visibility toggles, and PDF generation.  
 */  
  
// jsPDF shim (expects jsPDF UMD from CDN on page)  
if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
  window.jsPDF = window.jspdf.jsPDF;  
}  
  
document.addEventListener('DOMContentLoaded', () => {  
  const form = document.getElementById('marForm');  
  const status = document.getElementById('statusMsg');  
  
  if (!form) {  
    console.error('MAR form #marForm not found.');  
    return;  
  }  
  
  // --- Buttons ---  
  const pdfBtn = document.getElementById('generateMarketAnalysisReportBtn');  
  const clearBtn = document.getElementById('mar_clearFormBtn');  
  const STORAGE_KEY = 'marFormData_v4';  
  
  /* =============================================  
   * 1. CORE HELPER FUNCTIONS  
   * ============================================= */  
  
  function showStatus(message, type = 'info') {  
    if (!status) return;  
    status.textContent = message || '';  
      
    // Base classes  
    let cls = 'text-sm font-medium transition-colors duration-300 ';  
      
    if (type === 'success') cls += 'text-green-700';  
    else if (type === 'error') cls += 'text-red-700';  
    else if (type === 'warning') cls += 'text-yellow-700';  
    else cls += 'text-blue-700'; // info  
      
    status.className = cls;  
  
    // Auto-clear success messages after 3 seconds  
    if (type === 'success') {  
      setTimeout(() => { status.textContent = ''; }, 3000);  
    }  
  }  
  
  function formToObject(formEl) {  
    const fd = new FormData(formEl);  
    const obj = {};  
    fd.forEach((value, key) => {  
      // Handle multiple checkboxes with same name if necessary,   
      // but here we mostly have single values.  
      obj[key] = value;  
    });  
      
    // Explicitly handle checkboxes that might be unchecked (and thus missing from FormData)  
    const checkboxes = formEl.querySelectorAll('input[type="checkbox"]');  
    checkboxes.forEach(cb => {  
      obj[cb.name] = cb.checked ? (cb.value || 'on') : '';  
    });  
  
    return obj;  
  }  
  
  function hasValue(obj, key) {  
    if (!obj) return false;  
    const val = obj[key];  
    return val !== undefined && val !== null && String(val).trim() !== '';  
  }  
  
  /* =============================================  
   * 2. STORAGE & RESTORE  
   * ============================================= */  
  function saveToStorage() {  
    try {  
      const data = formToObject(form);  
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));  
    } catch (err) {  
      console.error('Storage Save Error:', err);  
    }  
  }  
  
  function loadFromStorage() {  
    try {  
      const raw = localStorage.getItem(STORAGE_KEY);  
      if (!raw) return;  
      const data = JSON.parse(raw);  
        
      Object.keys(data).forEach((key) => {  
        const field = form.elements[key];  
        if (!field) return;  
  
        if (field instanceof RadioNodeList) {  
          // Radio buttons  
          field.value = data[key];  
        } else if (field.type === 'checkbox') {  
          // Checkboxes  
          field.checked = !!data[key];   
        } else {  
          // Text, select, textarea  
          field.value = data[key];  
        }  
      });  
      showStatus('Draft loaded from memory.', 'info');  
    } catch (err) {  
      console.error('Storage Load Error:', err);  
    }  
  }  
  
  /* =============================================  
   * 3. CALCULATIONS & VALIDATION (100% Logic)  
   * ============================================= */  
  
  // Helper to sum inputs by selector  
  function getPercentTotal(selector) {  
    let sum = 0;  
    form.querySelectorAll(selector).forEach((input) => {  
      const val = parseFloat(input.value);  
      if (!isNaN(val)) sum += val;  
    });  
    return sum; // Returns raw number (float)  
  }  
  
  // Updates the total field and visual state (Red vs Green)  
  function updateGroupValidation(groupSelector, totalFieldId) {  
    const totalVal = getPercentTotal(groupSelector);  
    const totalField = form.elements[totalFieldId];  
      
    if (!totalField) return;  
  
    // Update the text value  
    totalField.value = totalVal.toFixed(1) + '%';  
  
    // Visual Logic: Green if strictly 100, Red otherwise (unless 0/empty)  
    const epsilon = 0.1; // tolerance for float math  
    const isComplete = Math.abs(totalVal - 100) < epsilon;  
    const isEmpty = totalVal === 0;  
  
    // Reset classes  
    totalField.classList.remove('text-green-700', 'bg-green-100', 'text-red-700', 'bg-red-100', 'font-bold');  
  
    if (isEmpty) {  
        // Neutral state if empty  
        totalField.classList.add('bg-gray-100');  
    } else if (isComplete) {  
        // Success State (Green)  
        totalField.classList.add('text-green-700', 'bg-green-100', 'font-bold');  
    } else {  
        // Error State (Red)  
        totalField.classList.add('text-red-700', 'bg-red-100', 'font-bold');  
    }  
  }  
  
  function validatePercentGroups() {  
    // 1. Land Use Mix  
    updateGroupValidation('.lu-group', 'lu_mix_total_pct');  
    // 2. Occupancy  
    updateGroupValidation('.occ-group', 'occ_total_pct');  
  }  
  
  function attachPercentListeners() {  
    // Listen for input on any percentage field  
    form.querySelectorAll('.lu-group, .occ-group').forEach((input) => {  
      input.addEventListener('input', () => {  
        validatePercentGroups();  
        saveToStorage();  
      });  
    });  
    // Initial run  
    validatePercentGroups();  
  }  
  
  /* =============================================  
   * 4. VISIBILITY TOGGLES (Conditionals)  
   * ============================================= */  
  
  function refreshConditionals() {  
      
    // 1. Rental Market Analysis Scope (Exclude Checkbox)  
    // ID: sm_rental_block (Target to hide)  
    // Checkbox Name: sm_rental_analysis_exclude  
    const smRentExcludeCb = form.elements['sm_rental_analysis_exclude'];  
    const smRentBlock = document.getElementById('sm_rental_block');  
      
    if (smRentExcludeCb && smRentBlock) {  
      const isExcluded = smRentExcludeCb.checked;  
        
      // Toggle visibility  
      smRentBlock.classList.toggle('hidden', isExcluded);  
  
      // Toggle 'required' attributes inside the block to prevent validation errors on hidden fields  
      const requiredInputs = smRentBlock.querySelectorAll('[data-rental-required="1"]');  
      requiredInputs.forEach(el => {  
        if (isExcluded) el.removeAttribute('required');  
        else el.setAttribute('required', 'required');  
      });  
    }  
  
    // 2. Rental Market Bracket Scope (Exclude Checkbox)  
    // Target: The "Rental Price Brackets" container div.  
    // Checkbox Name: ps_rent_analysis_exclude  
    const psRentExcludeCb = form.elements['ps_rent_analysis_exclude'];  
      
    // Strategy: Find the container holding the rental bracket inputs.   
    // We look for a known input inside that section (e.g., 'ps_rent_avg_low')   
    // and traverse up to its container.  
    const psRentSampleInput = form.elements['ps_rent_avg_low'];  
    let psRentBlock = null;  
  
    if (psRentSampleInput) {  
       // Traverse up to the main container (section-card child)  
       psRentBlock = psRentSampleInput.closest('.border-gray-200');   
    }  
  
    if (psRentExcludeCb && psRentBlock) {  
      const isExcluded = psRentExcludeCb.checked;  
      psRentBlock.classList.toggle('hidden', isExcluded);  
    }  
      
    // 3. Submarket Name "Other" Logic  
    const smSelect = document.getElementById('submarket_name_select');  
    const smCustom = document.getElementById('submarket_name_custom');  
    if (smSelect && smCustom) {  
      const isOther = (smSelect.value === 'other');  
      smCustom.classList.toggle('hidden', !isOther);  
      if (isOther) {  
        smCustom.setAttribute('required', 'required');  
        smCustom.focus(); // nice UX touch  
      } else {  
        smCustom.removeAttribute('required');  
      }  
    }  
  }  
  
  /* =============================================  
   * 5. CHARACTER COUNTERS  
   * ============================================= */  
  function initCharCounters() {  
    const textareas = form.querySelectorAll('textarea');  
    textareas.forEach((ta) => {  
      const name = ta.getAttribute('name');  
      if (!name) return;  
        
      const counterSpan = form.querySelector(`[data-counter-for="${name}"]`);  
      if (!counterSpan) return;  
  
      const max = ta.getAttribute('maxlength') || 0;  
        
      const update = () => {  
        const len = ta.value.length;  
        counterSpan.textContent = len.toString();  
          
        // Visual warning if near limit (90%)  
        const wrap = counterSpan.parentElement;  
        if (max > 0 && len >= max * 0.9) {  
           wrap.classList.add('near-limit');  
        } else {  
           wrap.classList.remove('near-limit');  
        }  
      };  
  
      ta.addEventListener('input', update);  
      // init  
      update();  
    });  
  }  
  
  /* =============================================  
   * 6. PDF GENERATOR  
   * ============================================= */  
  function generatePdf() {  
    if (!window.jsPDF) {  
      showStatus('Error: jsPDF library not loaded.', 'error');  
      return;  
    }  
  
    // Refresh calculations before printing  
    validatePercentGroups();  
  
    const data = formToObject(form);  
    const doc = new window.jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });  
      
    // --- Layout Constants ---  
    const pageW = doc.internal.pageSize.getWidth();  
    const pageH = doc.internal.pageSize.getHeight();  
    const LM = 16; // Left Margin  
    const VAL_X = LM + 55; // Where values start  
    const VAL_W = pageW - VAL_X - LM;  
    const CONTENT_W = pageW - (LM * 2);  
    let y = 20;  
  
    // --- Helpers ---  
    function checkPageBreak(neededSpace = 20) {  
      if (y + neededSpace > pageH - 15) {  
        doc.addPage();  
        y = 20;  
        return true;  
      }  
      return false;  
    }  
  
    function drawHeader(text) {  
      if (!text) return;  
      checkPageBreak(12);  
        
      // Light gray background bar  
      doc.setFillColor(245, 247, 250); // Tailwind bg-gray-50 ish  
      doc.setDrawColor(220);  
      doc.rect(LM - 2, y - 6, CONTENT_W + 4, 10, "FD"); // Fill and Draw  
  
      doc.setFontSize(11);  
      doc.setFont('helvetica', 'bold');  
      doc.setTextColor(30, 64, 175); // Blue-800  
      doc.text(text.toUpperCase(), LM, y + 1);  
      y += 10;  
    }  
  
    function drawKV(label, value) {  
      const lbl = (label || '').trim();  
      const val = (value || '').trim();  
      if (!lbl) return;  
  
      checkPageBreak(8);  
  
      // Label (Left)  
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(9);  
      doc.setTextColor(80); // Gray  
        
      // Handle multi-line labels  
      const lblLines = doc.splitTextToSize(lbl, (VAL_X - LM - 4));  
      doc.text(lblLines, LM, y);  
  
      // Value (Right)  
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(0); // Black  
        
      const valLines = doc.splitTextToSize(val || '—', VAL_W);  
      doc.text(valLines, VAL_X, y);  
  
      // Advance Y by the taller of the two  
      const lines = Math.max(lblLines.length, valLines.length);  
      y += (lines * 4.5) + 3;   
    }  
  
    function drawNarrative(label, text) {  
      const lbl = (label || '').trim();  
      const txt = (text || '').trim();  
      if (!lbl) return;  
  
      checkPageBreak(15);  
  
      // Label  
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(9);  
      doc.setTextColor(80);  
      doc.text(lbl, LM, y);  
      y += 5;  
  
      // Body Text  
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(0);  
        
      if (txt) {  
        const lines = doc.splitTextToSize(txt, CONTENT_W);  
        // Check if the whole block fits, if not page break and reprint label  
        if (y + (lines.length * 5) > pageH - 15) {  
            doc.addPage();  
            y = 20;  
            doc.setFont('helvetica', 'bold');  
            doc.setTextColor(80);  
            doc.text(`${lbl} (continued)`, LM, y);  
            y += 5;  
            doc.setFont('helvetica', 'normal');  
            doc.setTextColor(0);  
        }  
          
        doc.text(lines, LM, y);  
        y += (lines.length * 5) + 4;  
      } else {  
        doc.text('N/A', LM, y);  
        y += 8;  
      }  
    }  
  
    /* ================= START PDF CONTENT ================= */  
  
    // Title Block  
    doc.setFontSize(18);  
    doc.setFont('helvetica', 'bold');  
    doc.setTextColor(0);  
    doc.text('Market Analysis Report', pageW / 2, y, { align: "center" });  
    y += 7;  
  
    // Subtitle / Address  
    if (data.address) {  
      doc.setFontSize(12);  
      doc.setFont('helvetica', 'normal');  
      doc.text(  
        `${data.address}${data.unit ? ' #' + data.unit : ''}, ${data.city || ''}, ${data.state || ''} ${data.zip || ''}`,  
        pageW / 2,  
        y,  
        { align: "center" }  
      );  
      y += 10;  
    } else {  
        y += 5;  
    }  
      
    // Timestamp  
    doc.setFontSize(8);  
    doc.setTextColor(150);  
    doc.text(`Generated: ${new Date().toLocaleString()}`, pageW / 2, y, {align: 'center'});  
    y += 10;  
  
    // 1. Subject Property Overview  
    drawHeader('1. Subject Property Overview');  
    drawKV('Property Type', data.property_type);  
    drawKV('Occupancy Status', data.occupancy);  
    drawKV('Overall Condition', data.overall_condition);  
  
    // 2. Market Area Identification  
    drawHeader('2. Market Area Identification');  
    drawNarrative('Market Area Description', data.market_area_description);  
      
    drawKV('Total Parcels', data.lu_total_parcels);  
  
    // Build Land Use String  
    let luStr = [];  
    if (data.lu_residential) luStr.push(`Res: ${data.lu_residential}%`);  
    if (data.lu_multifamily) luStr.push(`Multi: ${data.lu_multifamily}%`);  
    if (data.lu_apartments) luStr.push(`Apts: ${data.lu_apartments}%`);  
    if (data.lu_commercial) luStr.push(`Comm: ${data.lu_commercial}%`);  
    if (data.lu_other) luStr.push(`Other: ${data.lu_other}%`);  
    if (luStr.length) drawNarrative('Land Use Mix', luStr.join(' | '));  
  
    // Build Occupancy String  
    let occStr = [];  
    if (data.occ_owner) occStr.push(`Owner: ${data.occ_owner}%`);  
    if (data.occ_tenant) occStr.push(`Tenant: ${data.occ_tenant}%`);  
    if (data.occ_vacant) occStr.push(`Vacant: ${data.occ_vacant}%`);  
    if (occStr.length) drawNarrative('Occupancy Mix', occStr.join(' | '));  
  
    drawNarrative('Zoning Characteristics', data.zoning_summary);  
    drawNarrative('Land Use Narrative', data.land_use_narrative);  
      
    // Housing Stock  
    drawNarrative('Primary Housing Stock', data.housing_primary_summary);  
    drawNarrative('Special Features', data.housing_special_features);  
    drawNarrative('Subject Comparison', data.housing_subject_comparison);  
    drawNarrative('Overall Market Summary', data.market_summary_narrative);  
  
    // 3. Economic Influences  
    drawHeader('3. Economic Influences');  
      
    const econStats = [  
        data.econ_income_range ? `Inc: ${data.econ_income_range}` : null,  
        data.econ_price_to_income ? `Price/Inc: ${data.econ_price_to_income}` : null,  
        data.econ_rent_to_income ? `Rent/Inc: ${data.econ_rent_to_income}` : null  
    ].filter(Boolean).join(' | ');  
    if (econStats) drawKV('Workforce Stats', econStats);  
  
    drawNarrative('Affordability', `${data.econ_affordability_pressure || ''} - ${data.econ_affordability_explain || ''}`);  
    drawNarrative('Employment Trend', `${data.econ_job_trend || ''} - ${data.econ_job_trend_explain || ''}`);  
    drawNarrative('Key Employers', data.econ_key_employers);  
    drawNarrative('Development Activity', data.econ_development_activity);  
    drawNarrative('Economic Summary', data.econ_overall_narrative);  
  
    // 4. Marketability  
    drawHeader('4. Marketability Factors');  
    drawNarrative('Positive Influences', data.pos_influences_list);  
    drawNarrative('Negative Influences', data.neg_influences_list);  
    drawNarrative('Marketability Summary', data.marketability_summary);  
  
    // 5. Market Area Sales  
    drawHeader('5. Market Area Sales Activity');  
    const maSold = `Total: ${data.ma_sold_total || '-'} | Range: ${data.ma_sold_low_price}-${data.ma_sold_high_price} | Med: ${data.ma_sold_median_price} | DOM: ${data.ma_sold_avg_dom}`;  
    drawNarrative('Sold Listings', maSold);  
    drawNarrative('Sold Summary', data.ma_sold_summary);  
  
    const maActive = `Total: ${data.ma_active_total || '-'} | Range: ${data.ma_active_low_price}-${data.ma_active_high_price} | Med: ${data.ma_active_median_price} | DOM: ${data.ma_active_avg_dom}`;  
    drawNarrative('Active Listings', maActive);  
    drawNarrative('Active Summary', data.ma_active_summary);  
      
    drawNarrative('Distressed Summary', data.ma_distressed_summary);  
    drawNarrative('Sales Market Summary', data.ma_sales_activity_summary);  
  
    // 6. Submarket Definition  
    drawHeader('6. Submarket Definition');  
    const smName = (data.submarket_name_select === 'other' ? data.submarket_name_custom : data.submarket_name_select) || 'Not Defined';  
    drawKV('Submarket Name', smName);  
    drawNarrative('Description', data.submarket_description);  
      
    const smTrends = `Inventory: ${data.sm_inventory_trend || '-'} | Marketing: ${data.sm_marketing_trend || '-'}`;  
    drawNarrative('Submarket Trends', smTrends);  
  
    // 7. Submarket Sales  
    drawHeader('7. Submarket Sales Activity');  
    const smSoldStats = `Total: ${data.sm_sold_total || '-'} | Range: ${data.sm_sold_low_price}-${data.sm_sold_high_price} | Med: ${data.sm_sold_median_price}`;  
    drawNarrative('Sold Activity', smSoldStats);  
    drawNarrative('Sold Summary', data.sm_sold_summary);  
  
    const smActiveStats = `Total: ${data.sm_active_total || '-'} | Range: ${data.sm_active_low_price}-${data.sm_active_high_price} | Med: ${data.sm_active_median_price}`;  
    drawNarrative('Active Activity', smActiveStats);  
    drawNarrative('Active Summary', data.sm_active_summary);  
  
    // 8. Submarket Rental (Conditional)  
    if (data.sm_rental_analysis_exclude) {  
         drawHeader('8. Submarket Rental Activity');  
         drawNarrative('Status', 'Rental Analysis Excluded');  
         drawNarrative('Reason', data.sm_rental_excluded_explain);  
    } else {  
         drawHeader('8. Submarket Rental Activity');  
         drawNarrative('Timeframe', `${data.sm_rent_timeframe} (${data.sm_rent_timeframe_explain})`);  
           
         const smRentStats = `Rented: ${data.sm_rented_total || '-'} (Med: ${data.sm_rented_median_price}) | Active: ${data.sm_rent_active_total || '-'} (Med: ${data.sm_rent_active_median_price})`;  
         drawNarrative('Rental Stats', smRentStats);  
         drawNarrative('Rented Summary', data.sm_rented_summary);  
         drawNarrative('Active Summary', data.sm_rent_active_summary);  
         drawNarrative('Overall Rental Summary', data.sm_rental_activity_summary);  
    }  
  
    // 9. Pricing Segmentation  
    drawHeader('9. Pricing Segmentation');  
      
    // Sales Brackets  
    drawKV('Sales: Low Range', `${data.ps_sales_low_low || ''} - ${data.ps_sales_low_high || ''} (Med: ${data.ps_sales_low_median})`);  
    drawKV('Sales: Avg Range', `${data.ps_sales_avg_low || ''} - ${data.ps_sales_avg_high || ''} (Med: ${data.ps_sales_avg_median})`);  
    drawKV('Sales: High Range', `${data.ps_sales_high_low || ''} - ${data.ps_sales_high_high || ''} (Med: ${data.ps_sales_high_median})`);  
    drawKV('Subject Sales Segment', data.ps_sales_subject_segment);  
    drawNarrative('Sales Position Explain', data.ps_sales_subject_explain);  
  
    // Rental Brackets (Conditional)  
    if (!data.ps_rent_analysis_exclude) {  
        checkPageBreak(30);  
        drawKV('Rent: Avg Range', `${data.ps_rent_avg_low || ''} - ${data.ps_rent_avg_high || ''} (Med: ${data.ps_rent_avg_median})`);  
        drawKV('Rent: High Range', `${data.ps_rent_high_low || ''} - ${data.ps_rent_high_high || ''} (Med: ${data.ps_rent_high_median})`);  
        drawKV('Subject Rent Segment', data.ps_rent_subject_segment);  
        drawNarrative('Rent Position Explain', data.ps_rent_subject_explain);  
    } else {  
        drawNarrative('Rental Segmentation', 'Excluded from analysis.');  
    }  
  
    // 10. Narrative Summary & Buyer  
    drawHeader('10. Summary & Target Buyer');  
    drawNarrative('Submarket Narrative', data.submarket_summary_narrative);  
    drawKV('Target Buyer', data.buyer_type);  
    drawKV('Financing', data.buyer_financing);  
    drawNarrative('Buyer Profile', data.buyer_narrative);  
  
    // --- Footer: Page Numbers ---  
    const pages = doc.internal.getNumberOfPages();  
    for (let i = 1; i <= pages; i++) {  
      doc.setPage(i);  
      doc.setFontSize(8);  
      doc.setTextColor(150);  
      doc.text(`Page ${i} of ${pages}`, pageW / 2, pageH - 10, { align: 'center' });  
    }  
  
    // Save  
    const filename = `MAR_${(data.address || 'Report').replace(/[^a-z0-9]/gi, '_')}.pdf`;  
    doc.save(filename);  
    showStatus('PDF Generated Successfully!', 'success');  
  }  
  
  /* =============================================  
   * 7. EVENT WIRING  
   * ============================================= */  
    
  // Initialize Counters & Values  
  loadFromStorage();  
  initCharCounters();  
  attachPercentListeners();  
    
  // Global form change listener for conditionals  
  form.addEventListener('change', refreshConditionals);  
  form.addEventListener('input', () => {  
    // Debounce save if needed, but simple save is fine  
    saveToStorage();  
  });  
  
  // Run once on load  
  refreshConditionals();  
  
  // Buttons  
  if (pdfBtn) {  
    pdfBtn.addEventListener('click', (e) => {  
      e.preventDefault();  
      generatePdf();  
    });  
  }  
  
  if (clearBtn) {  
    clearBtn.addEventListener('click', () => {  
      if(confirm('Are you sure you want to clear all data?')) {  
        form.reset();  
        localStorage.removeItem(STORAGE_KEY);  
        // Clear calculated fields manually  
        form.elements['lu_mix_total_pct'].value = '';  
        form.elements['occ_total_pct'].value = '';  
        validatePercentGroups(); // Reset colors  
        refreshConditionals(); // Reset hidden fields  
        initCharCounters(); // Reset counters  
        showStatus('Form cleared.', 'success');  
      }  
    });  
  }  
  
});  
</script>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
