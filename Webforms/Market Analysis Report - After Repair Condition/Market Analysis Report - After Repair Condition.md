# Market Analysis Report - After Repair Condition  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>After-Repair Market Analysis Report (MAR)</title>  
  
  <script src="https://cdn.tailwindcss.com"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  
  <style>  
    .form-input{  
      margin-top:.25rem; width:100%;  
      border:1px solid #d1d5db; border-radius:.75rem;  
      padding:.625rem .75rem; box-shadow:0 1px 2px rgba(0,0,0,.03);  
      outline:none; background:#fff;  
    }  
    .form-input:focus{ border-color:#3b82f6; box-shadow:0 0 0 3px rgba(59,130,246,.2); }  
    .section-card{ background:#fff; box-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1),0 4px 6px -4px rgb(0 0 0 / 0.1); border-radius:1rem; padding:1.5rem; border:1px solid #f3f4f6; }  
    .hidden{ display:none; }  
    .bg-gray-100{ background:#f3f4f6 !important; }  
    .bg-red-100{ background:#fee2e2 !important; }  
    .error-border{ border-color:#ef4444 !important; box-shadow:0 0 0 2px rgba(239,68,68,.35) !important; }  
    .counter-wrap {  
      text-align: right; font-size: 0.75rem; color: #6b7280; padding-right: 0.25rem; margin-top: -0.125rem;  
    }  
    .counter-wrap.near-limit { color: #ef4444; font-weight: 500; }  
  </style>  
</head>  
<body class="bg-gray-50 text-gray-900 font-sans">  
<main class="max-w-4xl mx-auto p-6 space-y-10">  
  <header class="text-center pt-4 pb-6">  
    <h1 class="text-3xl font-extrabold text-gray-800">After-Repair Market Analysis (MAR)</h1>  
    <p class="text-md text-gray-600 mt-2">Input Data for After-Repair Value (ARV) Generation</p>  
  </header>  
  
  <form id="marForm" class="space-y-12">  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="subject-property-overview" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Subject Property Overview</h2>  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Context:</p>  
    <p>This section confirms the subject’s identity and current "As-Is" state before applying repair assumptions.</p>  
  </div>  
  
  <div class="space-y-6">  
    <div>  
      <h3 class="text-sm font-semibold text-gray-800 mb-2">Location &amp; Identity</h3>  
      <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">  
        <label class="block sm:col-span-4">  
          <span class="block text-sm font-medium">Property Address *</span>  
          <input name="address" required type="text" class="form-input" placeholder="123 Main St" />  
        </label>  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium">Unit #</span>  
          <input name="unit" type="text" class="form-input" placeholder="Apt/Unit" />  
        </label>  
        <label class="block sm:col-span-3">  
          <span class="block text-sm font-medium">City *</span>  
          <input name="city" required type="text" class="form-input" placeholder="Philadelphia" />  
        </label>  
        <label class="block sm:col-span-1">  
          <span class="block text-sm font-medium">State *</span>  
          <select name="state" required class="form-input">  
            <option value="">Select…</option>  
            <option value="PA" selected>PA</option>  
            <option value="NY">NY</option>  
            <option value="NJ">NJ</option>  
            <option value="DE">DE</option>  
            <option value="MD">MD</option>  
            </select>  
        </label>  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium">Zip Code *</span>  
          <input name="zip" required type="text" class="form-input" placeholder="19104" />  
        </label>  
      </div>  
    </div>  
  
    <div class="pt-4 border-t border-gray-100">  
      <h3 class="text-sm font-semibold text-gray-800 mb-2">Current Use, Occupancy &amp; Condition</h3>  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block text-sm font-medium">Property Type *</span>  
          <select name="property_type" required class="form-input">  
             <option value="">Select Type...</option>  
             <option>Single-Family Residence</option>  
             <option>Residential Condo/Coop</option>  
             <option>Multifamily Residence (2–4 units)</option>  
             <option>Apartment Building (5+ units)</option>  
             <option>Commercial/Mixed-Use</option>  
          </select>  
        </label>  
        <label class="block">  
          <span class="block text-sm font-medium">Occupancy Status *</span>  
          <select name="occupancy" required class="form-input">  
            <option value="">Select…</option>  
            <option>Owner</option>  
            <option>Tenant</option>  
            <option>Vacant</option>  
          </select>  
        </label>  
        <label class="block">  
          <span class="block text-sm font-medium">Overall Condition (As-Is) *</span>  
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
<section id="after-repair-overview" class="section-card ring-2 ring-indigo-50 border-indigo-100">  
  <h2 class="text-2xl font-bold text-indigo-700 mb-2">After Repair Overview</h2>  
    
  <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 text-sm text-indigo-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Hypothetical Condition:</p>  
    <p>Define the projected characteristics of the subject property <strong>after</strong> all proposed renovations are complete. This forms the basis for the ARV analysis.</p>  
  </div>  
  
  <div class="space-y-6">  
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">  
      <label class="block">  
        <span class="block text-sm font-medium">ARV Property Type *</span>  
        <span class="block text-[0.7rem] text-gray-500 mb-1">Will the usage change? (e.g. SF converted to Duplex)</span>  
        <select name="arv_property_type" required class="form-input">  
           <option value="">Select Type...</option>  
           <option>Same as Current</option>  
           <option>Single-Family Residence</option>  
           <option>Residential Condo/Coop</option>  
           <option>Multifamily Residence (2–4 units)</option>  
           <option>Commercial/Mixed-Use</option>  
        </select>  
      </label>  
  
      <label class="block">  
        <span class="block text-sm font-medium">ARV Condition Rating *</span>  
        <span class="block text-[0.7rem] text-gray-500 mb-1">Target condition after repairs are complete.</span>  
        <select name="arv_condition" required class="form-input">  
          <option value="">Select Rating…</option>  
          <option selected>Excellent (Like New)</option>  
          <option>Good (Updated)</option>  
          <option>Average (Market Standard)</option>  
          <option>Fair</option>  
        </select>  
      </label>  
    </div>  
  
    <label class="block">  
      <span class="block text-sm font-medium">ARV Brief Summary *</span>  
      <span class="block text-xs text-gray-500 mb-1">  
        Summarize the scope of work and the resulting appeal (e.g., "Full gut renovation with open floor plan, new HVAC, and high-end finishes").  
      </span>  
      <textarea  
        name="arv_summary"  
        required  
        rows="4"  
        class="form-input"  
        placeholder="Describe the finished product..."  
        maxlength="1000"  
      ></textarea>  
      <div class="counter-wrap"><span data-counter-for="arv_summary">0</span> / 1000</div>  
    </label>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-definition" class="section-card">  
  <div class="flex items-center justify-between mb-2">  
    <h2 class="text-2xl font-bold text-blue-700">Submarket Definition (Subject’s Competitive Set)</h2>  
      
    <label class="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-200">  
      <input type="checkbox" id="cb_sm_def" onchange="toggleSection('cb_sm_def', 'sm_def_content')" class="rounded text-blue-600 focus:ring-blue-500">  
      <span>Same as Current (Hide)</span>  
    </label>  
  </div>  
  
  <div id="sm_def_content">  
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
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-sales-activity" class="section-card">  
  <div class="flex items-center justify-between mb-2">  
    <h2 class="text-2xl font-bold text-blue-700">Submarket Sales Activity</h2>  
      
    <label class="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-200">  
      <input type="checkbox" id="cb_sm_sales" onchange="toggleSection('cb_sm_sales', 'sm_sales_content')" class="rounded text-blue-600 focus:ring-blue-500">  
      <span>Same as Current (Hide)</span>  
    </label>  
  </div>  
  
  <div id="sm_sales_content">  
      
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
      <p class="font-semibold mb-1">Why this matters to you:</p>  
      <p>  
        This section drills down into the specific <strong>Submarket</strong> defined earlier.  
        By analyzing sales volume, pricing, and marketing times specifically for this competitive set, we can determine the  
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
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-distressed-activity" class="section-card">  
  <div class="flex items-center justify-between mb-2">  
    <h2 class="text-2xl font-bold text-blue-700">Submarket Distressed Activity</h2>  
      
    <label class="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-200">  
      <input type="checkbox" id="cb_sm_distress" onchange="toggleSection('cb_sm_distress', 'sm_distress_content')" class="rounded text-blue-600 focus:ring-blue-500">  
      <span>Same as Current (Hide)</span>  
    </label>  
  </div>  
  
  <div id="sm_distress_content">  
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
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="submarket-rental-activity" class="section-card">  
  <div class="flex items-center justify-between mb-2">  
    <h2 class="text-2xl font-bold text-blue-700">Submarket Rental Activity</h2>  
      
    <label class="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-200">  
      <input type="checkbox" id="cb_sm_rent" onchange="toggleSection('cb_sm_rent', 'sm_rent_content')" class="rounded text-blue-600 focus:ring-blue-500">  
      <span>Same as Current (Hide)</span>  
    </label>  
  </div>  
  
  <div id="sm_rent_content">  
      
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
  
      </div>  
    </div>  
  </div>  
</section>  
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
  <label class="block">  
    <span class="block text-sm font-medium">Submarket (Niche) Narrative Summary *</span>  
    <textarea name="submarket_summary_narrative" rows="4" required class="form-input" placeholder="Summarize submarket strengths, weaknesses, and how the renovated subject property fits within this niche."></textarea>  
  </label>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="target-buyer-profile" class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-2">Target Buyer Profile (After Repair)</h2>  
  
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
    Identify the most likely buyer segment based on the subject’s location, projected condition, affordability, and overall position within the market.  
  </p>  
  
  <div class="space-y-6">  
  
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
    <button type="button" class="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium bg-white hover:bg-gray-50">Clear Form</button>  
    <button type="button" class="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-lg shadow-xl hover:bg-blue-700">Generate ARV PDF</button>  
  </div>  
</div>  
  
</form>  
</main>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
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
  
  // Button references  
  const pdfBtn = document.querySelector('button.bg-blue-600'); // Generate PDF button  
  const clearBtn = document.querySelector('button.bg-white');  // Clear form button  
  
  const STORAGE_KEY = 'marFormData_ARV_v1';  
  
  /* =============================================  
   * 1. CORE HELPER FUNCTIONS  
   * ============================================= */  
  function formToObject(formEl) {  
    const fd = new FormData(formEl);  
    const obj = {};  
    fd.forEach((value, key) => {  
      // Handle multiple checkboxes with same name if necessary,   
      // but here we mostly have single values.  
      obj[key] = value;  
    });  
      
    // Explicitly handle checkboxes that might not be in FormData if unchecked  
    const checkboxes = formEl.querySelectorAll('input[type="checkbox"]');  
    checkboxes.forEach(cb => {  
      obj[cb.id || cb.name] = cb.checked;   
    });  
      
    return obj;  
  }  
  
  function showStatus(message, type = 'info') {  
    if (!status) return;  
    status.textContent = message || '';  
      
    let cls = 'text-gray-600';  
    if (type === 'success') cls = 'text-green-600';  
    if (type === 'error')   cls = 'text-red-600';  
    status.className = `text-sm font-medium ${cls}`;  
      
    // Auto-clear success messages  
    if (type === 'success') {  
        setTimeout(() => { status.textContent = ''; }, 3000);  
    }  
  }  
  
  // --- LocalStorage Logic ---  
  function saveToStorage() {  
    try {  
      const data = formToObject(form);  
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));  
    } catch (err) {  
      console.error('Save error', err);  
    }  
  }  
  
  function loadFromStorage() {  
    try {  
      const raw = localStorage.getItem(STORAGE_KEY);  
      if (!raw) return;  
      const data = JSON.parse(raw);  
        
      Object.keys(data).forEach((key) => {  
        // Try by name first, then by ID (for checkboxes)  
        let field = form.elements[key] || document.getElementById(key);  
          
        if (!field) return;  
  
        // Handle RadioNodeList (multiple inputs with same name)  
        if (field instanceof RadioNodeList) {  
             // For radios, find the one with the value and check it  
             Array.from(field).forEach(radio => {  
                 if (radio.value === data[key]) radio.checked = true;  
             });  
             return;  
        }  
  
        if (field.type === 'checkbox') {  
          field.checked = !!data[key];  
        } else {  
          field.value = data[key];  
        }  
      });  
      showStatus('Draft loaded.', 'info');  
        
      // Trigger updates after load  
      updateVisibility();   
      initCharCounters();  
    } catch (err) {  
      console.error('Load error', err);  
    }  
  }  
  
  // --- Character Counters ---  
  function initCharCounters() {  
    const textareas = form.querySelectorAll('textarea');  
    textareas.forEach((ta) => {  
      const name = ta.getAttribute('name');  
      if (!name) return;  
      const counterSpan = form.querySelector(`[data-counter-for="${name}"]`);  
      if (!counterSpan) return;  
        
      const update = () => {   
          const len = ta.value.length;  
          counterSpan.textContent = len;  
          // Visual warning if near limit  
          const max = ta.getAttribute('maxlength');  
          if(max && len > (max * 0.9)) counterSpan.classList.add('near-limit');  
          else counterSpan.classList.remove('near-limit');  
      };  
        
      ta.addEventListener('input', update);  
      update(); // Init on load  
    });  
  }  
  
  /* =============================================  
   * 2. VISIBILITY / TOGGLE LOGIC  
   * ============================================= */  
    
  // Generic toggle helper based on ID  
  function toggleById(checkboxId, contentId) {  
    const cb = document.getElementById(checkboxId);  
    const content = document.getElementById(contentId);  
    if (cb && content) {  
        if (cb.checked) content.classList.add('hidden');  
        else content.classList.remove('hidden');  
    }  
  }  
  
  function updateVisibility() {  
    // 1. Submarket Definition (Same as Current)  
    toggleById('cb_sm_def', 'sm_def_content');  
  
    // 2. Submarket Sales (Same as Current)  
    toggleById('cb_sm_sales', 'sm_sales_content');  
  
    // 3. Submarket Distressed (Same as Current)  
    toggleById('cb_sm_distress', 'sm_distress_content');  
  
    // 4. Submarket Rental (Same as Current)  
    toggleById('cb_sm_rent', 'sm_rent_content');  
      
    // 5. Custom Submarket Name input  
    const smSelect = document.getElementById('submarket_name_select');  
    const smCustom = document.getElementById('submarket_name_custom');  
    if (smSelect && smCustom) {  
        if (smSelect.value === 'other') smCustom.classList.remove('hidden');  
        else smCustom.classList.add('hidden');  
    }  
  
    // 6. Rental Price Brackets Exclusion (Pricing Segmentation)  
    // The checkbox uses name="ps_rent_analysis_exclude"  
    const rentExcludeCb = form.querySelector('input[name="ps_rent_analysis_exclude"]');  
    if (rentExcludeCb) {  
        // Find the container for rental brackets.   
        // Based on HTML structure, it is the next sibling .border div of the scope container.  
        const scopeContainer = rentExcludeCb.closest('.border');  
        if (scopeContainer && scopeContainer.nextElementSibling) {  
            const bracketContainer = scopeContainer.nextElementSibling;  
            if (rentExcludeCb.checked) bracketContainer.classList.add('hidden');  
            else bracketContainer.classList.remove('hidden');  
        }  
    }  
  }  
  
  // Global exposure for inline onclicks (if any remain)  
  window.toggleSection = function(checkboxId, contentId) {  
      toggleById(checkboxId, contentId);  
  };  
  
  /* =============================================  
   * 3. PDF GENERATION (JSPDF)  
   * ============================================= */  
  function generatePdf() {  
    if (!window.jsPDF) {  
      showStatus('jsPDF library not loaded.', 'error');  
      return;  
    }  
  
    const data = formToObject(form);  
      
    // Initialize Doc  
    const doc = new window.jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });  
    const pageW = doc.internal.pageSize.getWidth();  
    const pageH = doc.internal.pageSize.getHeight();  
    const LM = 15; // Left Margin  
    const RM = 15; // Right Margin  
    const CONTENT_W = pageW - LM - RM;  
    const COL_VAL_X = LM + 60; // X position for values in Key-Value pairs  
    let y = 20; // Current Y cursor  
  
    // --- Styling Helpers ---  
    function checkPageBreak(neededSpace = 20) {  
      if (y + neededSpace > pageH - 15) {  
        doc.addPage();  
        y = 20;  
        return true;  
      }  
      return false;  
    }  
  
    function sectionHeader(text) {  
      checkPageBreak(15);  
      doc.setFillColor(240, 242, 245); // Light Gray/Blue  
      doc.rect(LM, y, CONTENT_W, 8, 'F');  
        
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(11);  
      doc.setTextColor(26, 86, 219); // Blue-700  
      doc.text(text, LM + 2, y + 5.5);  
        
      y += 14;  
    }  
  
    function subHeader(text) {  
        checkPageBreak(10);  
        doc.setFont('helvetica', 'bold');  
        doc.setFontSize(10);  
        doc.setTextColor(55, 65, 81); // Gray-700  
        doc.text(text, LM, y);  
        y += 6;  
    }  
  
    function printKV(label, value) {  
      if (!value) return; // Skip empty  
      checkPageBreak(7);  
        
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(9);  
      doc.setTextColor(75, 85, 99); // Gray-600  
      doc.text(label, LM, y);  
        
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(0);  
        
      // Wrap text  
      const valStr = String(value);  
      const splitVal = doc.splitTextToSize(valStr, CONTENT_W - 60);  
      doc.text(splitVal, COL_VAL_X, y);  
        
      const height = splitVal.length * 4.5;  
      y += Math.max(5, height + 2);  
    }  
  
    function printNarrative(label, text) {  
      if (!text) return;  
      checkPageBreak(15);  
        
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(9);  
      doc.setTextColor(75, 85, 99);  
      doc.text(label, LM, y);  
      y += 5;  
        
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(0);  
      const splitText = doc.splitTextToSize(text, CONTENT_W);  
        
      // Handle page break inside narrative  
      if (y + (splitText.length * 4.5) > pageH - 15) {  
          doc.text(splitText, LM, y);  
          // Simplified page break logic for long text blocks usually involves loops  
          // For simplicity here, we let text flow or cut, but strictly we trigger standard break  
          doc.addPage();   
          y = 20;  
      } else {  
          doc.text(splitText, LM, y);  
          y += (splitText.length * 4.5) + 4;  
      }  
    }  
  
    function printSameAsCurrent(sectionName) {  
        checkPageBreak(10);  
        doc.setFont('helvetica', 'italic');  
        doc.setTextColor(100);  
        doc.text(`[${sectionName} is same as Current "As-Is" condition - See Base Report]`, LM, y);  
        y += 10;  
        doc.setTextColor(0); // reset  
        doc.setFont('helvetica', 'normal');  
    }  
  
    // --- PDF CONTENT ---  
  
    // TITLE BLOCK  
    doc.setFontSize(18);  
    doc.setFont('helvetica', 'bold');  
    doc.setTextColor(30, 64, 175); // Blue-800  
    doc.text('After-Repair Market Analysis Report', pageW/2, y, { align: 'center' });  
    y += 8;  
      
    doc.setFontSize(12);  
    doc.setFont('helvetica', 'normal');  
    doc.setTextColor(0);  
    const addrTitle = `${data.address || ''} ${data.unit ? '#'+data.unit : ''}, ${data.city || ''}`;  
    doc.text(addrTitle, pageW/2, y, { align: 'center' });  
    y += 10;  
      
    doc.setLineWidth(0.5);  
    doc.setDrawColor(200);  
    doc.line(LM, y, pageW - RM, y);  
    y += 10;  
  
    // 1. SUBJECT PROPERTY OVERVIEW  
    sectionHeader('1. Subject Property Overview (As-Is)');  
    printKV('Address', addrTitle);  
    printKV('State/Zip', `${data.state || ''} ${data.zip || ''}`);  
    printKV('Property Type', data.property_type);  
    printKV('Occupancy', data.occupancy);  
    printKV('Condition', data.overall_condition);  
  
    // 2. AFTER REPAIR OVERVIEW  
    sectionHeader('2. After Repair Overview (Hypothetical)');  
    printKV('ARV Property Type', data.arv_property_type);  
    printKV('ARV Condition', data.arv_condition);  
    printNarrative('ARV Brief Summary', data.arv_summary);  
  
    // 3. SUBMARKET DEFINITION  
    sectionHeader('3. Submarket Definition (Competitive Set)');  
    if (data.cb_sm_def) {  
        printSameAsCurrent('Submarket Definition');  
    } else {  
        const smName = (data.submarket_name_select === 'other') ? data.submarket_name_custom : data.submarket_name_select;  
        printKV('Submarket Name', smName);  
        printNarrative('Description', data.submarket_description);  
        printKV('Timeframe', data.sm_timeframe);  
        printNarrative('Timeframe Note', data.sm_timeframe_explain);  
          
        subHeader('Inventory & Marketing Trends');  
        printKV('Total Listings', data.sm_total_listing_activity);  
        printKV('Inventory Trend', `${data.sm_inventory_trend || '-'} (${data.sm_inventory_trend_explain || ''})`);  
        printKV('Marketing Trend', `${data.sm_marketing_trend || '-'} (${data.sm_marketing_trend_explain || ''})`);  
    }  
  
    // 4. SUBMARKET SALES ACTIVITY  
    sectionHeader('4. Submarket Sales Activity');  
    if (data.cb_sm_sales) {  
        printSameAsCurrent('Sales Activity');  
    } else {  
        // Sold  
        subHeader('Sold Listings');  
        printKV('Total Sold', data.sm_sold_total);  
        printKV('Price Range', `${data.sm_sold_low_price || '-'} to ${data.sm_sold_high_price || '-'}`);  
        printKV('Median Price', data.sm_sold_median_price);  
        printKV('Avg DOM', data.sm_sold_avg_dom);  
        printKV('List-to-Price', data.sm_sold_list_to_price);  
        printNarrative('Sold Summary', data.sm_sold_summary);  
          
        // Active  
        subHeader('Active Listings');  
        printKV('Total Active', data.sm_active_total);  
        printKV('Price Range', `${data.sm_active_low_price || '-'} to ${data.sm_active_high_price || '-'}`);  
        printKV('Median Price', data.sm_active_median_price);  
        printNarrative('Active Summary', data.sm_active_summary);  
          
        // General  
        printNarrative('Other Listing Types', data.sm_other_types_summary);  
        printNarrative('Overall Sales Summary', data.sm_sales_activity_summary);  
    }  
  
    // 5. DISTRESSED ACTIVITY  
    sectionHeader('5. Submarket Distressed Activity');  
    if (data.cb_sm_distress) {  
        printSameAsCurrent('Distressed Activity');  
    } else {  
        const distDetails = `REO: ${data.sm_distressed_reos||0}, Short: ${data.sm_distressed_short_sales||0}, Foreclosure: ${data.sm_distressed_in_foreclosure||0}`;  
        printKV('Breakdown', distDetails);  
        printKV('Total Distressed', data.sm_distressed_total);  
        printKV('Distressed %', data.sm_distressed_pct);  
        printNarrative('Distressed Summary', data.sm_distressed_summary);  
    }  
  
    // 6. RENTAL ACTIVITY  
    sectionHeader('6. Submarket Rental Activity');  
    if (data.cb_sm_rent) {  
        printSameAsCurrent('Rental Activity');  
    } else {  
        if (data.sm_rental_analysis_exclude) {  
            printNarrative('Analysis Excluded', data.sm_rental_excluded_explain);  
        } else {  
            printKV('Timeframe', data.sm_rent_timeframe);  
              
            subHeader('Rental Data');  
            printKV('Total Listings', data.sm_rent_total_listing_activity);  
            printKV('Inv. Trend', data.sm_rent_inventory_trend);  
            printKV('Vacancy Rate', data.sm_rent_vacancy_rate);  
  
            subHeader('Rented Listings');  
            printKV('Total Rented', data.sm_rented_total);  
            printKV('Rent Range', `${data.sm_rented_low_price||'-'} to ${data.sm_rented_high_price||'-'}`);  
            printKV('Median Rent', data.sm_rented_median_price);  
            printNarrative('Rented Summary', data.sm_rented_summary);  
  
            subHeader('Active Rentals');  
            printKV('Active Total', data.sm_rent_active_total);  
            printKV('Median Ask', data.sm_rent_active_median_price);  
            printNarrative('Active Summary', data.sm_rent_active_summary);  
              
            printNarrative('Overall Rental Summary', data.sm_rental_activity_summary);  
        }  
    }  
  
    // 7. PRICING SEGMENTATION  
    sectionHeader('7. Pricing Segmentation');  
      
    subHeader('Sales Price Brackets');  
    printKV('Avg Cond. Range', `${data.ps_sales_avg_low||'-'} to ${data.ps_sales_avg_high||'-'} (Med: ${data.ps_sales_avg_median||'-'})`);  
    printKV('High (ARV) Range', `${data.ps_sales_high_low||'-'} to ${data.ps_sales_high_high||'-'} (Med: ${data.ps_sales_high_median||'-'})`);  
      
    printKV('ARV Sales Position', data.ps_sales_subject_segment);  
    printNarrative('Position Explanation', data.ps_sales_subject_explain);  
  
    subHeader('Rental Price Brackets');  
    if (data.ps_rent_analysis_exclude) {  
        printNarrative('Rental Analysis', 'Excluded per user selection.');  
        if(data.ps_rent_excluded_explain) printNarrative('Reason', data.ps_rent_excluded_explain);  
    } else {  
        printKV('Avg Cond. Rent', `${data.ps_rent_avg_low||'-'} to ${data.ps_rent_avg_high||'-'} (Med: ${data.ps_rent_avg_median||'-'})`);  
        printKV('High Cond. Rent', `${data.ps_rent_high_low||'-'} to ${data.ps_rent_high_high||'-'} (Med: ${data.ps_rent_high_median||'-'})`);  
        printKV('ARV Rent Position', data.ps_rent_subject_segment);  
        printNarrative('Rent Position Explain', data.ps_rent_subject_explain);  
    }  
  
    // 8. NARRATIVE SUMMARY  
    sectionHeader('8. Submarket Narrative Summary');  
    printNarrative('Summary', data.submarket_summary_narrative);  
  
    // 9. TARGET BUYER  
    sectionHeader('9. Target Buyer Profile (After Repair)');  
    printKV('Probable Buyer', data.buyer_type);  
    printKV('Financing', data.buyer_financing);  
    printNarrative('Assessment', data.buyer_narrative);  
  
    // Footer with Pages  
    const pageCount = doc.internal.getNumberOfPages();  
    for(let i = 1; i <= pageCount; i++) {  
        doc.setPage(i);  
        doc.setFontSize(8);  
        doc.setTextColor(150);  
        doc.text(`Page ${i} of ${pageCount}`, pageW/2, pageH - 10, {align:'center'});  
    }  
  
    // Save  
    const filename = `ARV_MAR_${(data.address||'report').replace(/[^a-z0-9]/gi, '_')}.pdf`;  
    doc.save(filename);  
    showStatus('PDF Generated!', 'success');  
  }  
  
  
  /* =============================================  
   * 4. EVENT LISTENERS  
   * ============================================= */  
    
  // 1. Inputs: Save to local storage on input  
  form.addEventListener('input', () => {  
    saveToStorage();  
    // For character counters specifically  
  });  
  
  // 2. Change: Update visibility logic  
  form.addEventListener('change', () => {  
    updateVisibility();  
    saveToStorage();  
  });  
  
  // 3. Generate PDF Button  
  if (pdfBtn) {  
      pdfBtn.addEventListener('click', (e) => {  
          e.preventDefault();  
          generatePdf();  
      });  
  }  
  
  // 4. Clear Form Button  
  if (clearBtn) {  
      clearBtn.addEventListener('click', (e) => {  
          e.preventDefault();  
          if(confirm('Are you sure you want to clear all data?')) {  
              form.reset();  
              localStorage.removeItem(STORAGE_KEY);  
              updateVisibility();  
              initCharCounters();  
              showStatus('Form cleared.', 'success');  
          }  
      });  
  }  
  
  // Initial calls  
  loadFromStorage(); // This calls updateVisibility internally  
});  
</script>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
