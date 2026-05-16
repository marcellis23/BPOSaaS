# Construction Cost Estimate - Lot Development  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>Construction Cost Estimate - Lot Development</title>  
  
  <!-- Inter font & shared UI styles to match Vacant Lot Inspection -->  
  <link rel="preconnect" href="https://fonts.googleapis.com">  
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">  
  <style>  
    :root { color-scheme: light; }  
    html, body { height: 100%; }  
    body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; background:#f8fafc; }  
    .section-card { background:#fff; border-radius:1rem; box-shadow:0 1px 2px rgba(0,0,0,.05); border:1px solid #e5e7eb; padding:1.5rem; }  
    .label { display:block; font-size:.875rem; font-weight:600; color:#374151; }  
    .input, .select, .textarea {  
      width:100%; margin-top:.25rem; border:1px solid #d1d5db; border-radius:.75rem; padding:.625rem .875rem; outline:0;  
      transition:border-color .15s, box-shadow .15s;  
    }  
    .input:focus, .select:focus, .textarea:focus { border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,.2); }  
    .hint { font-size:.75rem; color:#6b7280; margin-top:.25rem; }  
    [hidden] { display:none !important; }  
  
    /* Optional: print tweaks for cleaner PDFs printed from the page (not jsPDF output) */  
    @media print { .no-print { display: none !important; } }  
  </style>  
  
  <!-- Tailwind (non-blocking) -->  
  <script src="https://cdn.tailwindcss.com" defer></script>  
  
  <!-- jsPDF (non-blocking) -->  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" defer></script>  
</head>  
<body class="text-gray-900">  
  <main class="max-w-4xl mx-auto p-6 space-y-10">  
    <section id="construction-estimate-form" class="section-card">  
      <header class="mb-6">  
        <h1 class="text-2xl font-bold">Construction Cost Estimate - Lot Development</h1>  
        <p class="text-sm text-gray-600">  
          Estimate total development costs for a proposed residential project on a vacant lot.  
        </p>  
      </header>  
  
      <form id="formConstructionEstimate" class="space-y-10" novalidate>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div class="space-y-4">  
          <h2 class="text-xl font-semibold">General Property Info</h2>  
          <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">  
            <label class="block sm:col-span-4">  
              <span class="block text-sm font-medium">Property Address *</span>  
              <input name="address" required type="text" class="mt-1 w-full rounded-xl border-gray-300" placeholder="123 Main St" />  
            </label>  
            <label class="block sm:col-span-2">  
              <span class="block text-sm font-medium">Unit #</span>  
              <input name="unit" type="text" class="mt-1 w-full rounded-xl border-gray-300" placeholder="Apt/Unit" />  
            </label>  
            <label class="block sm:col-span-3">  
              <span class="block text-sm font-medium">City *</span>  
              <input name="city" required type="text" class="mt-1 w-full rounded-xl border-gray-300" />  
            </label>  
  
            <!-- State: changed to dropdown (default PA) -->  
            <label class="block sm:col-span-1">  
              <span class="block text-sm font-medium">State *</span>  
              <select name="state" required class="mt-1 w-full rounded-xl border-gray-300">  
                <option value="">Select…</option>  
                <option value="AL">AL – Alabama</option>  
                <option value="AK">AK – Alaska</option>  
                <option value="AZ">AZ – Arizona</option>  
                <option value="AR">AR – Arkansas</option>  
                <option value="CA">CA – California</option>  
                <option value="CO">CO – Colorado</option>  
                <option value="CT">CT – Connecticut</option>  
                <option value="DE">DE – Delaware</option>  
                <option value="DC">DC – District of Columbia</option>  
                <option value="FL">FL – Florida</option>  
                <option value="GA">GA – Georgia</option>  
                <option value="HI">HI – Hawaii</option>  
                <option value="ID">ID – Idaho</option>  
                <option value="IL">IL – Illinois</option>  
                <option value="IN">IN – Indiana</option>  
                <option value="IA">IA – Iowa</option>  
                <option value="KS">KS – Kansas</option>  
                <option value="KY">KY – Kentucky</option>  
                <option value="LA">LA – Louisiana</option>  
                <option value="ME">ME – Maine</option>  
                <option value="MD">MD – Maryland</option>  
                <option value="MA">MA – Massachusetts</option>  
                <option value="MI">MI – Michigan</option>  
                <option value="MN">MN – Minnesota</option>  
                <option value="MS">MS – Mississippi</option>  
                <option value="MO">MO – Missouri</option>  
                <option value="MT">MT – Montana</option>  
                <option value="NE">NE – Nebraska</option>  
                <option value="NV">NV – Nevada</option>  
                <option value="NH">NH – New Hampshire</option>  
                <option value="NJ">NJ – New Jersey</option>  
                <option value="NM">NM – New Mexico</option>  
                <option value="NY">NY – New York</option>  
                <option value="NC">NC – North Carolina</option>  
                <option value="ND">ND – North Dakota</option>  
                <option value="OH">OH – Ohio</option>  
                <option value="OK">OK – Oklahoma</option>  
                <option value="OR">OR – Oregon</option>  
                <option value="PA" selected>PA – Pennsylvania</option>  
                <option value="RI">RI – Rhode Island</option>  
                <option value="SC">SC – South Carolina</option>  
                <option value="SD">SD – South Dakota</option>  
                <option value="TN">TN – Tennessee</option>  
                <option value="TX">TX – Texas</option>  
                <option value="UT">UT – Utah</option>  
                <option value="VT">VT – Vermont</option>  
                <option value="VA">VA – Virginia</option>  
                <option value="WA">WA – Washington</option>  
                <option value="WV">WV – West Virginia</option>  
                <option value="WI">WI – Wisconsin</option>  
                <option value="WY">WY – Wyoming</option>  
                <option disabled>──────────</option>  
                <option value="PR">PR – Puerto Rico</option>  
                <option value="VI">VI – U.S. Virgin Islands</option>  
                <option value="GU">GU – Guam</option>  
                <option value="MP">MP – Northern Mariana Islands</option>  
                <option value="AS">AS – American Samoa</option>  
              </select>  
            </label>  
  
            <label class="block sm:col-span-2">  
              <span class="block text-sm font-medium">Zip Code *</span>  
              <input name="zip" required pattern="\d{5}(-\d{4})?" inputmode="numeric" type="text" class="mt-1 w-full rounded-xl border-gray-300" placeholder="19104" />  
            </label>  
          </div>  
        </div>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="development_plan_site_condition" class="section-card space-y-4">  
  <h2 class="text-lg font-semibold">Development Plan and Site Condition</h2>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">  
    <div class="space-y-2">  
      <label class="label" for="current_condition">  
        What is the <strong>current status</strong> of the subject property? *  
      </label>  
      <p id="current_condition_help" class="hint">Select the current state of the lot.</p>  
      <select  
        id="current_condition"  
        name="current_condition"  
        required  
        class="select"  
        aria-describedby="current_condition_help"  
      >  
        <option value="">Select Status...</option>  
        <optgroup label="Residential Lots">  
          <option>Residential Lot (Single-Family)</option>  
          <option>Multifamily Lot (2–4 Units)</option>  
          <option>Condominium Lot / Pad Site</option>  
          <option>Planned Unit Development (PUD) Lot</option>  
        </optgroup>  
        <optgroup label="Commercial &amp; Industrial">  
          <option>Commercial Lot</option>  
          <option>Mixed-Use Lot</option>  
          <option>Industrial Lot</option>  
        </optgroup>  
        <optgroup label="Agricultural &amp; Rural">  
          <option>Agricultural / Farm Land</option>  
          <option>Rural / Vacant Land</option>  
        </optgroup>  
        <optgroup label="Special Location / Shape">  
          <option>Corner Lot</option>  
          <option>Interior Lot</option>  
          <option>Cul-de-sac Lot</option>  
          <option>Flag Lot</option>  
          <option>Irregular Lot</option>  
          <option>Waterfront Lot</option>  
        </optgroup>  
        <optgroup label="Vacant &amp; Development">  
          <option>Improved Lot (utilities present)</option>  
          <option>Unimproved Lot (raw land)</option>  
          <option>Buildable Lot</option>  
          <option>Non-Buildable Lot</option>  
          <option>Subdividable Lot</option>  
        </optgroup>  
      </select>  
    </div>  
  
    <div class="space-y-2">  
      <label class="label" for="development_type">  
        What is the <strong>proposed development type</strong>? *  
      </label>  
      <p id="development_type_help" class="hint">The type of residential structure to be built.</p>  
      <select  
        id="development_type"  
        name="development_type"  
        required  
        class="select"  
        aria-describedby="development_type_help"  
      >  
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
          <option>Small Residential Condo/Coop Development</option>  
          <option>Apartment Building (5+ units)</option>  
        </optgroup>  
        <optgroup label="Commercial / Industrial">  
          <option>Mixed-Use Occupancy (residential + commercial)</option>  
          <option>Retail Use (storefront, shopping, etc.)</option>  
          <option>Office Use</option>  
          <option>Industrial / Warehouse Use</option>  
          <option>Special Commercial (gas station, auto repair, pad site, etc.)</option>  
        </optgroup>  
        <optgroup label="Other">  
          <option>Other / Restricted</option>  
        </optgroup>  
      </select>  
    </div>  
  
    <div class="space-y-2">  
      <label class="label" for="subject_property_condition">  
        What is the <strong>current condition</strong> of the subject property? *  
      </label>  
      <p id="subject_property_condition_help" class="hint">Rate the current physical condition of the property.</p>  
      <select  
        id="subject_property_condition"  
        name="subject_property_condition"  
        required  
        class="select"  
        aria-describedby="subject_property_condition_help"  
      >  
        <option value="">Select Condition...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="Not Applicable">Not Applicable</option>  
      </select>  
    </div>  
  
    <div class="space-y-2">  
      <label class="label" for="proposed_development_condition">  
        What is the <strong>proposed condition</strong> of the planned development? *  
      </label>  
      <p id="proposed_development_condition_help" class="hint">The intended final condition of the completed development.</p>  
      <select  
        id="proposed_development_condition"  
        name="proposed_development_condition"  
        required  
        class="select"  
        aria-describedby="proposed_development_condition_help"  
      >  
        <option value="">Select Condition...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="Not Applicable">Not Applicable</option>  
      </select>  
    </div>  
  </div>  
</section>  
  
<section id="cost_estimate_disclaimer" class="section-card space-y-4">  
  <h2 class="text-lg font-semibold">Cost Estimate Disclaimer</h2>  
  <div class="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700 rounded-xl">  
    <p class="font-semibold mb-1">IMPORTANT NOTICE: Scope of Estimate</p>  
    <p>  
      This report provides an estimate for planning purposes only and is based on preliminary development plans.  
      The costs provided are subject to change based on final engineering, official contractor bids, permitting fees,  
      and market volatility. This estimate is NOT a guarantee of final project cost.  
    </p>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- =========================   
     PROJECT SUMMARY & MARKET SUPPORT  
     ========================= -->  
<section id="project_market_support" class="section-card space-y-6">  
  <h2 class="text-lg font-semibold">Project Summary and Market Support</h2>  
  
  <!-- Project Summary -->  
  <div>  
    <label for="project_summary" class="label">Project Summary (scope &amp; intent)</label>  
    <p id="project_summary_help" class="hint">  
      Summarize the development (product type, bedrooms, parking, materials, timeline, construction method, any phasing).  
    </p>  
    <textarea  
      id="project_summary"  
      name="project_summary"  
      rows="5"  
      data-max="1200"  
      class="textarea"  
      placeholder="Example: Proposed 3-story single-family new build of ~1,800 sf with 3 beds / 2.5 baths, roof deck, and 1-car rear parking. Stick-built on slab with fiber-cement siding. Target delivery in 9–12 months."  
      aria-describedby="project_summary_help project_summary_count"  
    ></textarea>  
    <div class="hint text-right" aria-live="polite">  
      <span id="project_summary_count">0</span>/1200  
    </div>  
  </div>  
  
  <!-- Market Support – narrative only -->  
  <div>  
    <label for="market_support_narrative" class="label">Market Support (narrative)</label>  
    <p id="market_support_narrative_help" class="hint">  
      Briefly explain demand, buyer profile, and how recent sales/active listings support pricing for this plan.  
    </p>  
    <textarea  
      id="market_support_narrative"  
      name="market_support_narrative"  
      rows="4"  
      data-max="800"  
      class="textarea"  
      placeholder="Example: Nearby new/renovated rowhomes trade $300–$330/sf. DOM &lt; 20 for well-finished 3BR inventory. Target buyer is owner-occupant seeking urban amenities near transit."  
      aria-describedby="market_support_narrative_help market_support_narrative_count"  
    ></textarea>  
    <div class="hint text-right" aria-live="polite">  
      <span id="market_support_narrative_count">0</span>/800  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="residential_construction_cost_estimates" class="section-card space-y-4">  
  <h2 class="text-lg font-semibold">Residential Construction Cost Estimates</h2>  
  <p class="hint">  
    Group estimated costs by category to establish a comprehensive budget.  
  </p>  
  
  <!-- Dynamic cost rows injected by JS -->  
  <div id="repairs-container" class="space-y-4"></div>  
  
  <button  
    type="button"  
    id="add-repair-btn"  
    class="px-4 py-2 rounded-xl border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 hover:text-blue-800 transition duration-150"  
    aria-controls="repairs-container"  
  >  
    + Add New Cost Item  
  </button>  
  
  <!-- Total -->  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl items-start border border-blue-100 bg-blue-50 mt-6">  
    <div class="text-base font-semibold text-blue-800">Total Estimated Development Cost:</div>  
    <div class="text-base font-semibold text-blue-800" aria-live="polite">  
      <span id="total_cost_display">$0.00</span>  
      <input type="hidden" name="total_cost" id="total_cost_input" value="0.00" />  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- ===== Estimated Current Value — Comparable Evidence (Current Condition) ===== -->  
<section id="comps_current" class="section-card space-y-3">  
  <div class="flex items-center justify-between">  
    <h3 class="text-lg font-semibold">Estimated Current Value — Comparable Evidence (Current Condition)</h3>  
    <button  
      type="button"  
      id="add-comp-current"  
      class="px-3 py-1 text-sm rounded-xl border border-gray-300 hover:bg-gray-50"  
      aria-controls="comps_current_container"  
    >  
      + Add Comp  
    </button>  
  </div>  
  
  <p class="hint">  
    Add 1–5 references (sold/active) supporting the subject’s <strong>current condition</strong> value.  
  </p>  
  
  <!-- Dynamic rows injected by JS -->  
  <div id="comps_current_container" class="space-y-3" data-max-rows="5"></div>  
  
  <!-- Optional worksheet value (used in your Feasibility Inputs elsewhere) -->  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">  
    <label class="label" for="estimated_current_value">Estimated Current Value ($)</label>  
    <input  
      id="estimated_current_value"  
      name="estimated_current_value"  
      type="number"  
      step="1"  
      min="0"  
      class="input sm:col-span-1"  
      placeholder="e.g., 125000"  
      inputmode="numeric"  
    />  
  </div>  
  
  <!-- Data sources / notes (text input) -->  
  <div>  
    <label for="market_sources" class="label mt-1">Data Sources / Notes</label>  
    <p id="market_sources_help" class="hint">List data providers/tools used.</p>  
    <input  
      id="market_sources"  
      name="market_sources"  
      type="text"  
      maxlength="400"  
      class="input"  
      placeholder="Example: Bright MLS, OPA public records, walkscore.com, builder bid letters (on file)."  
      aria-describedby="market_sources_help"  
    />  
  </div>  
  
  <!-- Justification Summary -->  
  <div>  
    <label for="estimated_current_justification" class="label">  
      Justification Summary  
    </label>  
    <p id="estimated_current_justification_help" class="hint">  
      Explain how these comps support your current-condition value (e.g., PPSF, condition vs. subject, location/time adjustments).  
    </p>  
    <textarea  
      id="estimated_current_justification"  
      name="estimated_current_justification"  
      rows="4"  
      data-max="800"  
      class="textarea"  
      placeholder="Example: Used three as-is sales within 0.25 mi, similar GLA/lot. Adjusted −$12k for inferior exterior condition and +$8/sf for finished basement variance; reconciled near $210/sf."  
      aria-describedby="estimated_current_justification_help estimated_current_justification_count"  
    ></textarea>  
    <div class="hint text-right" aria-live="polite">  
      <span id="estimated_current_justification_count">0</span>/800  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- ===== Estimated After Completion Value — Comparable Evidence (Proposed Condition) ===== -->  
<section id="comps_proposed" class="section-card space-y-3">  
  <div class="flex items-center justify-between">  
    <h3 class="text-lg font-semibold">  
      Est. After Completion Value — Comparable Evidence (Proposed Condition)  
    </h3>  
    <button  
      type="button"  
      id="add-comp-proposed"  
      class="px-3 py-1 text-sm rounded-xl border border-gray-300 hover:bg-gray-50"  
      aria-controls="comps_proposed_container"  
    >  
      + Add Comp  
    </button>  
  </div>  
  
  <p class="hint">  
    Add 1–5 references (sold/active) supporting the subject’s <strong>after completion</strong> value for the proposed plan.  
  </p>  
  
  <!-- Dynamic rows injected by JS -->  
  <div id="comps_proposed_container" class="space-y-3" data-max-rows="5"></div>  
  
  <!-- Optional worksheet value (used by your Feasibility Inputs elsewhere) -->  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">  
    <label class="label" for="estimated_after_value">Estimated After Completion Value ($)</label>  
    <input  
      id="estimated_after_value"  
      name="estimated_after_value"  
      type="number"  
      step="1"  
      min="0"  
      class="input sm:col-span-1"  
      placeholder="e.g., 375000"  
      inputmode="numeric"  
    />  
  </div>  
  
  <!-- Data sources / notes (text input with unique IDs) -->  
  <div>  
    <label for="market_sources_proposed" class="label mt-1">Data Sources / Notes</label>  
    <p id="market_sources_proposed_help" class="hint">List data providers/tools used.</p>  
    <input  
      id="market_sources_proposed"  
      name="market_sources_proposed"  
      type="text"  
      maxlength="400"  
      class="input"  
      placeholder="Example: Bright MLS, OPA public records, walkscore.com, builder bid letters (on file)."  
      aria-describedby="market_sources_proposed_help"  
    />  
  </div>  
  
  <!-- Justification Summary -->  
  <div>  
    <label for="estimated_after_justification" class="label">  
      Justification Summary  
    </label>  
    <p id="estimated_after_justification_help" class="hint">  
      Briefly explain how these comps support your after-completion value (e.g., PPSF, quality level, age/renovation, location/time adjustments).  
    </p>  
    <textarea  
      id="estimated_after_justification"  
      name="estimated_after_justification"  
      rows="4"  
      data-max="800"  
      class="textarea"  
      placeholder="Example: Selected three renovated SFRs within 0.3 mi, 1,700–1,900 sf, similar finish. Adjusted $10k for parking and $15/sf for roof deck variance; reconciled at ~$325/sf."  
      aria-describedby="estimated_after_justification_help estimated_after_justification_count"  
    ></textarea>  
    <div class="hint text-right" aria-live="polite">  
      <span id="estimated_after_justification_count">0</span>/800  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="feasibility_inputs" class="section-card space-y-4">  
  <h2 class="text-lg font-semibold">Feasibility Inputs</h2>  
  <p class="hint">  
    Enter the current lot value and expected after-completion value to model ROI.  
  </p>  
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
    <div>  
      <label class="label" for="value_current">Current Lot Value ($)</label>  
      <input  
        name="value_current"  
        id="value_current"  
        type="number"  
        step="0.01"  
        min="0"  
        class="input"  
        placeholder="0.00"  
        value="0.00"  
      />  
    </div>  
  
    <div>  
      <label class="label" for="value_after_repair">After Completion Value ($)</label>  
      <input  
        name="value_after_repair"  
        id="value_after_repair"  
        type="number"  
        step="0.01"  
        min="0"  
        class="input"  
        placeholder="0.00"  
        value="0.00"  
      />  
    </div>  
  
    <div>  
      <span class="label">Estimated ROI</span>  
      <div id="roi_display" class="mt-2 text-lg font-semibold" aria-live="polite">0.00%</div>  
      <input type="hidden" id="roi_input" name="roi_input" value="0.00" />  
    </div>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
    <div>  
      <span class="label">Gross Value Gain</span>  
      <div id="gross_value_gain_display" class="mt-2 font-semibold" aria-live="polite">$0.00</div>  
      <input type="hidden" id="gross_value_gain_input" name="gross_value_gain_input" value="0.00" />  
    </div>  
  
    <div>  
      <span class="label">Net Project Profit</span>  
      <div id="contributory_value_display" class="mt-2 font-semibold" aria-live="polite">$0.00</div>  
      <input type="hidden" id="contributory_value_input" name="contributory_value_input" value="0.00" />  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="actions" class="section-card">  
  <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">  
    <!-- Left: CLEAR (destructive) -->  
    <button  
      type="button"  
      id="clearFormBtn"  
      class="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-red-500 text-red-600 hover:bg-red-50"  
      aria-describedby="statusMsg"  
    >  
      Clear Form  
    </button>  
  
    <!-- Right: STATUS + GENERATE -->  
    <div class="flex items-center gap-3 justify-between sm:justify-end w-full sm:w-auto">  
      <span id="statusMsg" class="hint" aria-live="polite" aria-busy="false"></span>  
      <button  
        type="submit"  
        id="btnGenerateBottom"  
        class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"  
      >  
        Generate PDF  
      </button>  
    </div>  
  </div>  
</section>  
  
</form>  
</section>  
</main>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
/* =========================  
   UMD shim (if CDN already loaded)  
   ========================= */  
if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
  window.jsPDF = window.jspdf.jsPDF;  
}  
  
/* =========================  
   Globals / constants  
   ========================= */  
let repairItemCounter = 0;  
const STORAGE_KEY = "construction_estimate_v1";  
let autosaveTimer = null;  
  
const COMP_GROUPS = {  
  cur:  { containerId: "comps_current_container",  buttonId: "add-comp-current",  nextId: 0, prefix: "cur"  },  
  prop: { containerId: "comps_proposed_container", buttonId: "add-comp-proposed", nextId: 0, prefix: "prop" }  
};  
  
const CONSTRUCTION_CATEGORIES = [  
  "Professional & Administrative (Soft Costs)",  
  "Pre-Construction & Site Costs",  
  "Core Construction (Hard Costs)",  
  "Exterior & Site Development",  
  "Post-Construction & Compliance",  
  "Financing & Carrying Costs"  
];  
const CAT_SANITIZE = /[\s\/&,\.\-\(\)]/g;  
  
/* =========================  
   Helpers  
   ========================= */  
const $  = (sel, ctx=document) => ctx.querySelector(sel);  
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));  
  
const formatCurrency = (v) => {  
  const n = parseFloat(v || 0);  
  return "$" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
};  
const formatPercent = (v) => (parseFloat(v || 0)).toFixed(2) + "%";  
  
function attachCharCounter(textarea, counterEl){  
  if (!textarea || !counterEl) return;  
  const max = parseInt(textarea.dataset.max || "0", 10) || 0;  
  const update = () => {  
    const len = (textarea.value || "").trim().length;  
    const clamped = max ? Math.min(len, max) : len;  
    counterEl.textContent = String(clamped);  
    if (max && len > max) textarea.value = textarea.value.slice(0, max);  
  };  
  textarea.addEventListener("input", update);  
  update();  
}  
  
/* =========================  
   jsPDF lazy loader (single-flight + timeout)  
   ========================= */  
const JSPDF_URL = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";  
let _pdfReady = !!window.jsPDF;  
let _pdfLoadPromise = null;  
  
function loadJsPdfOnce(timeoutMs = 12000){  
  if (_pdfReady) return Promise.resolve(true);  
  if (_pdfLoadPromise) return _pdfLoadPromise;  
  
  _pdfLoadPromise = new Promise((resolve, reject) => {  
    const done = (ok) => { _pdfReady = !!window.jsPDF; ok ? resolve(true) : reject(new Error("Failed to load jsPDF.")); };  
  
    // If CDN already provided UMD namespace but shim not assigned yet  
    if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
      window.jsPDF = window.jspdf.jsPDF;  
      _pdfReady = true;  
      resolve(true);  
      return;  
    }  
  
    // Inject script  
    const s = document.createElement("script");  
    s.src = JSPDF_URL;  
    s.async = true;  
    s.onload = () => {  
      if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) window.jsPDF = window.jspdf.jsPDF;  
      done(!!window.jsPDF);  
    };  
    s.onerror = () => done(false);  
    document.head.appendChild(s);  
  
    // Timeout guard  
    setTimeout(() => {  
      if (!window.jsPDF) done(false);  
    }, timeoutMs);  
  });  
  
  return _pdfLoadPromise;  
}  
  
/* =========================  
   Dynamic rows: Cost items  
   ========================= */  
function createRepairItemBlock() {  
  repairItemCounter++;  
  const id = repairItemCounter;  
  
  const container = $("#repairs-container");  
  if (!container) return;  
  
  const options = CONSTRUCTION_CATEGORIES  
    .map((cat) => `<option value="${cat.replace(CAT_SANITIZE, "_")}">${cat}</option>`)  
    .join("");  
  
  const div = document.createElement("div");  
  div.className = "repair-item repeatable-row bg-gray-50 p-4 rounded-xl space-y-3 border border-amber-200";  
  div.setAttribute("data-id", String(id));  
  div.innerHTML = `  
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">  
      <div class="md:col-span-4">  
        <label class="label" for="repair_description_${id}">Cost Item Description *</label>  
        <input id="repair_description_${id}" name="repair_description_${id}" type="text" required class="input" placeholder="e.g., Structural Engineer Site Visit Fee" />  
      </div>  
      <div class="md:col-span-2">  
        <label class="label" for="repair_category_${id}">Cost Category *</label>  
        <select id="repair_category_${id}" name="repair_category_${id}" required class="select">  
          <option value="">Select Category...</option>  
          ${options}  
        </select>  
      </div>  
      <div class="md:col-span-2">  
        <label class="label" for="repair_cost_${id}">Est. Cost ($) *</label>  
        <div class="flex items-center gap-2">  
          <input id="repair_cost_${id}" name="repair_cost_${id}" type="number" step="0.01" min="0" inputmode="decimal" required class="input" placeholder="0.00" value="0.00" />  
          <button type="button" class="text-sm text-red-600 hover:text-red-800" data-action="remove-repair" aria-label="Remove cost item">  
            Remove  
          </button>  
        </div>  
      </div>  
    </div>  
  `;  
  container.appendChild(div);  
  calculateTotalsAndROI();  
}  
  
/* =========================  
   Dynamic rows: comps  
   ========================= */  
function addCompRowFor(groupKey){  
  const g = COMP_GROUPS[groupKey];  
  if (!g) return;  
  const wrap = document.getElementById(g.containerId);  
  if (!wrap) return;  
  
  const maxRows = parseInt(wrap.dataset.maxRows || "0", 10) || 0;  
  const existing = wrap.querySelectorAll("[data-comp-row]").length;  
  if (maxRows && existing >= maxRows) return;  
  
  g.nextId += 1;  
  const id = g.nextId;  
  const row = document.createElement("div");  
  row.className = "grid grid-cols-1 md:grid-cols-5 gap-3 p-3 rounded-xl bg-gray-50 border";  
  row.setAttribute("data-comp-row", `${g.prefix}-${id}`);  
  row.innerHTML = `  
    <input name="${g.prefix}_addr_${id}" class="input md:col-span-2" placeholder="Address / Dev name" />  
    <select name="${g.prefix}_status_${id}" class="select">  
      <option value="">Status</option>  
      <option>Sold</option>  
      <option>Active</option>  
      <option>Pending</option>  
    </select>  
    <input name="${g.prefix}_price_${id}" type="number" step="1" min="0" class="input" placeholder="Price" />  
    <input name="${g.prefix}_date_${id}" type="date" class="input" />  
    <textarea name="${g.prefix}_notes_${id}" rows="1" class="textarea md:col-span-5" placeholder="Notes (beds/baths/sf, finish, distance, similarity)"></textarea>  
    <div class="md:col-span-5 text-right">  
      <button type="button" class="text-sm text-red-600 hover:text-red-800" data-action="remove-comp">Remove</button>  
    </div>  
  `;  
  wrap.appendChild(row);  
}  
  
/* =========================  
   Totals + Feasibility (ROI)  
   ========================= */  
function calculateTotalsAndROI() {  
  const form = $("#formConstructionEstimate");  
  if (!form) return;  
  
  const costInputs = $$('input[name^="repair_cost_"]', form);  
  let total = 0;  
  costInputs.forEach((input) => { total += parseFloat(input.value) || 0; });  
  
  const totalDisplay = $("#total_cost_display");  
  const totalInput   = $("#total_cost_input");  
  if (totalDisplay) totalDisplay.textContent = formatCurrency(total);  
  if (totalInput)   totalInput.value = total.toFixed(2);  
  
  const valCurrentEl = $("#value_current");  
  const valAfterEl   = $("#value_after_repair");  
  
  const currentVal = parseFloat(valCurrentEl?.value || 0) || 0;  
  const afterVal   = parseFloat(valAfterEl?.value || 0) || 0;  
  
  const totalInvestment = currentVal + total;  
  const grossGain = afterVal - currentVal;  
  const netProfit = afterVal - totalInvestment;  
  const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;  
  
  const grossGainDisp = $("#gross_value_gain_display");  
  const grossGainInp  = $("#gross_value_gain_input");  
  if (grossGainDisp) grossGainDisp.textContent = formatCurrency(grossGain);  
  if (grossGainInp)  grossGainInp.value = grossGain.toFixed(2);  
  
  const netDisp = $("#contributory_value_display");  
  const netInp  = $("#contributory_value_input");  
  if (netDisp) netDisp.textContent = formatCurrency(netProfit);  
  if (netInp)  netInp.value = netProfit.toFixed(2);  
  
  const roiDisp = $("#roi_display");  
  const roiInp  = $("#roi_input");  
  if (roiDisp) roiDisp.textContent = formatPercent(roi);  
  if (roiInp)  roiInp.value = roi.toFixed(2);  
}  
  
/* =========================  
   PDF utils  
   ========================= */  
function pdfKV(doc, label, value, x, y, maxWidth) {  
  doc.setFontSize(10);  
  doc.setTextColor(60);  
  doc.text(label, x, y);  
  doc.setTextColor(20);  
  const lines = doc.splitTextToSize(String(value || ""), maxWidth);  
  doc.text(lines, x + 50, y, { maxWidth });  
  const lineHeight = 6;  
  return y + (lines.length * lineHeight);  
}  
  
function sectionHeader(doc, text, y, pageW) {  
  doc.setFillColor(240);  
  doc.rect(12, y - 6, pageW - 24, 10, "F");  
  doc.setFontSize(12);  
  doc.setTextColor(0);  
  doc.text(text, 16, y + 1);  
  return y + 12;  
}  
  
const disclaimerText = [  
  "IMPORTANT NOTICE: Scope of Estimate",  
  "1. Purpose of Report: This report is for initial planning only. The preparer is not acting as a licensed engineer, appraiser, or general contractor.",  
  "2. Scope Limitation: Costs are based on preliminary assumptions (site conditions, utility access) and may change after formal inspection and bidding.",  
  "3. Full Bidding Recommendation: For decisions requiring accuracy, obtain official contractor bids, surveys, and professional assessments.",  
  "4. Final Costs: Estimates are subject to change based on market rates and unforeseen conditions."  
];  
  
function collectCostItems(fv){  
  const rows = [];  
  for (const [key, value] of Object.entries(fv)) {  
    if (key.startsWith("repair_description_")) {  
      const id = key.replace("repair_description_", "");  
      const catKey = fv[`repair_category_${id}`] || "";  
      const catDisplay =  
        CONSTRUCTION_CATEGORIES.find((cat) => cat.replace(CAT_SANITIZE, "_") === catKey) || catKey || "";  
      rows.push({  
        description: (value || "").trim(),  
        category: catDisplay,  
        cost: parseFloat(fv[`repair_cost_${id}`] || 0) || 0  
      });  
    }  
  }  
  return rows;  
}  
  
function collectComps(fv, prefix){  
  const out = [];  
  Object.keys(fv).forEach((k) => {  
    if (k.startsWith(`${prefix}_addr_`)) {  
      const id   = k.replace(`${prefix}_addr_`, "");  
      const addr = (fv[`${prefix}_addr_${id}`] || "").trim();  
      const status = fv[`${prefix}_status_${id}`] || "";  
      const price  = parseFloat(fv[`${prefix}_price_${id}`] || 0) || 0;  
      const date   = fv[`${prefix}_date_${id}`] || "";  
      const notes  = (fv[`${prefix}_notes_${id}`] || "").trim();  
      if (addr || status || price || date || notes) out.push({ addr, status, price, date, notes });  
    }  
  });  
  return out;  
}  
  
async function buildConstructionEstimatePDF(form) {  
  // Ensure jsPDF is ready (throws if CDN fails)  
  await loadJsPdfOnce();  
  
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });  
  const pageW = doc.internal.pageSize.getWidth();  
  const pageH = doc.internal.pageSize.getHeight();  
  const fv = Object.fromEntries(new FormData(form).entries());  
  
  // Validate at least one cost item > 0  
  const costItems = collectCostItems(fv);  
  if (!costItems.some((it) => (it.cost || 0) > 0)) {  
    throw new Error("Please add at least one cost item with a value greater than $0.00 before generating the PDF.");  
  }  
  
  const addressLine = [fv.address, fv.unit ? ("Parcel: " + fv.unit) : null, fv.city, fv.state, fv.zip]  
    .filter(Boolean)  
    .join(", ");  
  
  // Title  
  doc.setFontSize(18);  
  doc.text("Residential Construction & Cost Estimate Report", pageW / 2, 22, { align: "center" });  
  doc.setFontSize(12);  
  doc.setTextColor(120);  
  doc.text(new Date().toLocaleString(), pageW / 2, 30, { align: "center" });  
  doc.setTextColor(0);  
  
  let y = 46;  
  
  // Subject Property  
  y = sectionHeader(doc, "Subject Property", y, pageW);  
  y = pdfKV(doc, "Lot Address", addressLine, 16, y, pageW - 32);  
  
  // Development Plan & Site Condition  
  y = sectionHeader(doc, "Development Plan & Site Condition", y + 4, pageW);  
  y = pdfKV(doc, "Current Status", fv.current_condition || "", 16, y, pageW - 32);  
  y = pdfKV(doc, "Proposed Type", fv.development_type || "", 16, y, pageW - 32);  
  
  // Disclaimer  
  if (y > pageH - 50) { doc.addPage(); y = 16; }  
  y += 4;  
  doc.setFontSize(12);  
  doc.setTextColor(200, 0, 0);  
  doc.setFont("helvetica", "bold");  
  doc.text("COST ESTIMATE DISCLAIMER", 16, y);  
  y += 2;  
  doc.setFontSize(9);  
  doc.setFont("helvetica", "normal");  
  doc.setTextColor(50);  
  const disclaimerLines = doc.splitTextToSize(disclaimerText.join("\n"), pageW - 32);  
  doc.text(disclaimerLines, 16, y + 4);  
  y += disclaimerLines.length * 4.5 + 4;  
  doc.setTextColor(0);  
  
  // Cost Estimates Table  
  y = sectionHeader(doc, "Residential Construction Cost Estimates", y + 4, pageW);  
  doc.setFontSize(10);  
  doc.setTextColor(60);  
  y += 2;  
  doc.text("Description", 16, y);  
  doc.text("Cost Category", 90, y);  
  doc.text("Est. Cost", 170, y);  
  y += 6;  
  doc.setDrawColor(200);  
  doc.line(12, y - 2, pageW - 12, y - 2);  
  
  doc.setFont("helvetica", "normal");  
  for (const item of costItems) {  
    const costDisplay = formatCurrency(item.cost);  
    doc.setTextColor(20);  
    const lines = doc.splitTextToSize(item.description || "", 70);  
    doc.text(lines, 16, y);  
    doc.setTextColor(0);  
    doc.text(item.category || "", 90, y);  
    doc.text(costDisplay, 170, y);  
    y += lines.length * 5 + 3;  
    doc.line(12, y - 2, pageW - 12, y - 2);  
  
    if (y > pageH - 20) {  
      doc.addPage();  
      y = 16;  
      doc.setFontSize(10);  
      doc.setTextColor(60);  
      y += 2;  
      doc.text("Description", 16, y);  
      doc.text("Cost Category", 90, y);  
      doc.text("Est. Cost", 170, y);  
      y += 6;  
      doc.setDrawColor(200);  
      doc.line(12, y - 2, pageW - 12, y - 2);  
    }  
  }  
  
  // Total Cost  
  y += 4;  
  doc.setFontSize(12);  
  doc.setTextColor(0);  
  doc.setFont("helvetica", "bold");  
  doc.text("Total Estimated Development Cost:", 100, y);  
  doc.text(formatCurrency(fv.total_cost || 0), 170, y);  
  doc.setFont("helvetica", "normal");  
  y += 8;  
  
  // Feasibility  
  if (y > pageH - 80) { doc.addPage(); y = 16; }  
  y = sectionHeader(doc, "Feasibility Summary", y + 4, pageW);  
  
  const valCurrent = parseFloat(fv.value_current || 0) || 0;  
  const valAfter   = parseFloat(fv.value_after_repair || 0) || 0;  
  const totalCost  = parseFloat(fv.total_cost || 0) || 0;  
  
  const totalInvestment = valCurrent + totalCost;  
  const grossGain = valAfter - valCurrent;  
  const netProfit = valAfter - totalInvestment;  
  const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;  
  
  y = pdfKV(doc, "Current Lot Value", formatCurrency(valCurrent), 16, y, pageW - 32);  
  y = pdfKV(doc, "After Completion Value", formatCurrency(valAfter), 16, y, pageW - 32);  
  y = pdfKV(doc, "Total Investment Cost", formatCurrency(totalInvestment), 16, y, pageW - 32);  
  y = pdfKV(doc, "Gross Value Gain", formatCurrency(grossGain), 16, y, pageW - 32);  
  
  doc.setFont("helvetica", "bold");  
  doc.setTextColor(0);  
  doc.text("Net Project Profit:", 16, y + 4);  
  doc.text(formatCurrency(netProfit), 70, y + 4);  
  doc.setFont("helvetica", "normal");  
  doc.setTextColor(60);  
  doc.text("Estimated ROI:", 100, y + 4);  
  doc.text(formatPercent(roi), 140, y + 4);  
  y += 10;  
  
  // Project Summary & Market Support  
  if (y > pageH - 80) { doc.addPage(); y = 16; }  
  y = sectionHeader(doc, "Project Summary & Market Support", y + 4, pageW);  
  
  const summaryTxt   = (fv.project_summary || "").trim();  
  const narrativeTxt = (fv.market_support_narrative || "").trim();  
  
  if (summaryTxt) {  
    doc.setFontSize(10); doc.setTextColor(60);  
    doc.text("Project Summary", 16, y); y += 5;  
    doc.setTextColor(20);  
    const lines = doc.splitTextToSize(summaryTxt, pageW - 32);  
    doc.text(lines, 16, y);  
    y += lines.length * 5 + 4;  
  }  
  
  if (narrativeTxt) {  
    doc.setFontSize(10); doc.setTextColor(60);  
    doc.text("Market Support (Narrative)", 16, y); y += 5;  
    doc.setTextColor(20);  
    const lines2 = doc.splitTextToSize(narrativeTxt, pageW - 32);  
    doc.text(lines2, 16, y);  
    y += lines2.length * 5 + 4;  
  }  
  
  // Current comps + justification  
  const compsCur = collectComps(fv, "cur");  
  const estCurVal = parseFloat(fv.estimated_current_value || 0) || 0;  
  const curJust   = (fv.estimated_current_justification || "").trim();  
  
  if (y > pageH - 80) { doc.addPage(); y = 16; }  
  y = sectionHeader(doc, "Estimated Current Value — Comparable Evidence (Current Condition)", y + 4, pageW);  
  
  if (estCurVal > 0){  
    doc.setFontSize(10); doc.setTextColor(60);  
    doc.text("Estimated Current Value (worksheet):", 16, y);  
    doc.setTextColor(20); doc.text(formatCurrency(estCurVal), 90, y);  
    y += 6;  
  }  
  if (compsCur.length){  
    doc.setFontSize(10); doc.setTextColor(60);  
    doc.text("Comparable Evidence (summary)", 16, y); y += 6;  
    doc.setTextColor(20); doc.setFontSize(9);  
    for (const [i,c] of compsCur.entries()){  
      const priceStr = c.price ? ("$" + c.price.toLocaleString()) : "";  
      const header = `${i + 1}. ${c.addr || "—"}  ${c.status ? `(${c.status})` : ""}  ${priceStr}  ${c.date || ""}`;  
      doc.text(header, 16, y); y += 4;  
      if (c.notes){  
        const noteLines = doc.splitTextToSize(c.notes, pageW - 30);  
        doc.text(noteLines, 20, y);  
        y += noteLines.length * 4 + 2;  
      }  
      doc.setDrawColor(220); doc.line(16, y, pageW - 16, y); y += 2;  
      if (y > pageH - 20) { doc.addPage(); y = 16; }  
    }  
  }  
  if (curJust){  
    if (y > pageH - 40) { doc.addPage(); y = 16; }  
    doc.setFontSize(10); doc.setTextColor(60);  
    doc.text("Justification Summary", 16, y); y += 5;  
    doc.setTextColor(20);  
    const jLines = doc.splitTextToSize(curJust, pageW - 32);  
    doc.text(jLines, 16, y);  
    y += jLines.length * 5 + 2;  
  }  
  
  // Proposed comps + justification  
  const compsProp = collectComps(fv, "prop");  
  const estAfterVal = parseFloat(fv.estimated_after_value || 0) || 0;  
  const propJust    = (fv.estimated_after_justification || "").trim();  
  
  if (y > pageH - 80) { doc.addPage(); y = 16; }  
  y = sectionHeader(doc, "Estimated After Completion Value — Comparable Evidence (Proposed Condition)", y + 4, pageW);  
  
  if (estAfterVal > 0){  
    doc.setFontSize(10); doc.setTextColor(60);  
    doc.text("Estimated After Completion Value (worksheet):", 16, y);  
    doc.setTextColor(20); doc.text(formatCurrency(estAfterVal), 100, y);  
    y += 6;  
  }  
  if (compsProp.length){  
    doc.setFontSize(10); doc.setTextColor(60);  
    doc.text("Comparable Evidence (summary)", 16, y); y += 6;  
    doc.setTextColor(20); doc.setFontSize(9);  
    for (const [i,c] of compsProp.entries()){  
      const priceStr = c.price ? ("$" + c.price.toLocaleString()) : "";  
      const header = `${i + 1}. ${c.addr || "—"}  ${c.status ? `(${c.status})` : ""}  ${priceStr}  ${c.date || ""}`;  
      doc.text(header, 16, y); y += 4;  
      if (c.notes){  
        const noteLines = doc.splitTextToSize(c.notes, pageW - 30);  
        doc.text(noteLines, 20, y);  
        y += noteLines.length * 4 + 2;  
      }  
      doc.setDrawColor(220); doc.line(16, y, pageW - 16, y); y += 2;  
      if (y > pageH - 20) { doc.addPage(); y = 16; }  
    }  
  }  
  if (propJust){  
    if (y > pageH - 40) { doc.addPage(); y = 16; }  
    doc.setFontSize(10); doc.setTextColor(60);  
    doc.text("Justification Summary", 16, y); y += 5;  
    doc.setTextColor(20);  
    const j2Lines = doc.splitTextToSize(propJust, pageW - 32);  
    doc.text(j2Lines, 16, y);  
    y += j2Lines.length * 5 + 2;  
  }  
  
  const safeName = (fv.address || "Construction-Cost-Estimate")  
    .replace(/[^a-z0-9\- ]/gi, "_")  
    .replace(/\s+/g, "_");  
  
  doc.save(`${safeName}_Construction_Cost_Estimate.pdf`);  
}  
  
/* =========================  
   AUTOSAVE: save / restore / clear  
   ========================= */  
function serializeForm(form){  
  return Object.fromEntries(new FormData(form).entries());  
}  
  
function restoreDynamicRowsForKeys(form, data){  
  // Ensure enough repair rows exist  
  const repairIds = Object.keys(data)  
    .filter(k => k.startsWith("repair_description_"))  
    .map(k => parseInt(k.replace("repair_description_", ""), 10))  
    .filter(n => !isNaN(n));  
  const maxRepairId = repairIds.length ? Math.max(...repairIds) : 0;  
  const currentRows = $$("#repairs-container .repair-item").length;  
  for (let i = currentRows; i < maxRepairId; i++) createRepairItemBlock();  
  
  // Ensure enough comp rows exist for each group  
  ["cur","prop"].forEach(prefix => {  
    const ids = Object.keys(data)  
      .filter(k => k.startsWith(prefix + "_addr_"))  
      .map(k => parseInt(k.replace(prefix + "_addr_", ""), 10))  
      .filter(n => !isNaN(n));  
    const maxId = ids.length ? Math.max(...ids) : 0;  
    const wrap = document.getElementById(prefix === "cur" ? COMP_GROUPS.cur.containerId : COMP_GROUPS.prop.containerId);  
    const present = wrap ? wrap.querySelectorAll("[data-comp-row]").length : 0;  
    for (let i = present; i < maxId; i++) addCompRowFor(prefix);  
  });  
}  
  
function fillFormFromObject(form, obj){  
  // Prepare dynamic rows first  
  restoreDynamicRowsForKeys(form, obj);  
  
  for (const [k,v] of Object.entries(obj)){  
    const el = form.elements[k];  
    if (!el) continue;  
    if (el instanceof RadioNodeList) {  
      Array.from(el).forEach(input => { if (String(input.value) === String(v)) input.checked = true; });  
    } else if (el.type === "checkbox") {  
      el.checked = !!v;  
    } else {  
      el.value = v;  
    }  
  }  
  calculateTotalsAndROI();  
}  
  
function saveFormThrottled(form){  
  if (autosaveTimer) clearTimeout(autosaveTimer);  
  autosaveTimer = setTimeout(() => {  
    try {  
      const payload = serializeForm(form);  
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));  
      const s = $("#statusMsg");  
      if (s) s.textContent = "Saved.";  
    } catch (e) { /* ignore quota errors */ }  
  }, 300);  
}  
  
function tryRestoreForm(form){  
  try {  
    const raw = localStorage.getItem(STORAGE_KEY);  
    if (!raw) return;  
    const data = JSON.parse(raw);  
    if (data && typeof data === "object") fillFormFromObject(form, data);  
  } catch (e) { /* ignore parse errors */ }  
}  
  
function clearFormAndStorage(form){  
  form.reset();  
  
  // Remove dynamic rows and re-seed a single one  
  const repairs = $$("#repairs-container .repair-item");  
  repairs.forEach(r => r.remove());  
  repairItemCounter = 0;  
  createRepairItemBlock();  
  
  // Clear comps  
  Object.values(COMP_GROUPS).forEach(g => {  
    const wrap = document.getElementById(g.containerId);  
    if (wrap) wrap.innerHTML = "";  
    g.nextId = 0;  
    // Seed 2 rows each to match your original behavior  
    addCompRowFor(g.prefix); addCompRowFor(g.prefix);  
  });  
  
  calculateTotalsAndROI();  
  localStorage.removeItem(STORAGE_KEY);  
}  
  
/* =========================  
   Wire-up  
   ========================= */  
document.addEventListener("DOMContentLoaded", () => {  
  const form         = $("#formConstructionEstimate");  
  const status       = $("#statusMsg");  
  const btnGenerate  = $("#btnGenerateBottom");  
  const addRepairBtn = $("#add-repair-btn");  
  const clearBtn     = $("#clearFormBtn");  
  
  // Seed one cost row  
  createRepairItemBlock();  
  if (addRepairBtn) addRepairBtn.addEventListener("click", createRepairItemBlock);  
  
  // Delegated removal for repair rows + live totals  
  const repairsContainer = $("#repairs-container");  
  if (repairsContainer) {  
    repairsContainer.addEventListener("input", (e) => {  
      if (e.target && /^repair_cost_\d+$/.test(e.target.name)) calculateTotalsAndROI();  
      if (form) saveFormThrottled(form);  
    });  
    repairsContainer.addEventListener("click", (e) => {  
      const btn = e.target.closest("[data-action='remove-repair']");  
      if (btn) {  
        const row = btn.closest(".repair-item");  
        if (row) { row.remove(); calculateTotalsAndROI(); if (form) saveFormThrottled(form); }  
      }  
    });  
  }  
  
  // ROI inputs  
  const curVal = $("#value_current");  
  const aftVal = $("#value_after_repair");  
  if (curVal) curVal.addEventListener("input", () => { calculateTotalsAndROI(); if (form) saveFormThrottled(form); });  
  if (aftVal) aftVal.addEventListener("input", () => { calculateTotalsAndROI(); if (form) saveFormThrottled(form); });  
  
  // Character counters  
  attachCharCounter($("#project_summary"), $("#project_summary_count"));  
  attachCharCounter($("#market_support_narrative"), $("#market_support_narrative_count"));  
  attachCharCounter($("#estimated_current_justification"), $("#estimated_current_justification_count"));  
  attachCharCounter($("#estimated_after_justification"), $("#estimated_after_justification_count"));  
  
  // Comps: hook buttons + seed 2 rows each  
  const btnCur  = document.getElementById(COMP_GROUPS.cur.buttonId);  
  const btnProp = document.getElementById(COMP_GROUPS.prop.buttonId);  
  if (btnCur)  btnCur.addEventListener("click", () => { addCompRowFor("cur"); if (form) saveFormThrottled(form); });  
  if (btnProp) btnProp.addEventListener("click", () => { addCompRowFor("prop"); if (form) saveFormThrottled(form); });  
  addCompRowFor("cur");  addCompRowFor("cur");  
  addCompRowFor("prop"); addCompRowFor("prop");  
  
  // Delegated comp removal  
  [COMP_GROUPS.cur.containerId, COMP_GROUPS.prop.containerId].forEach(id => {  
    const wrap = document.getElementById(id);  
    if (!wrap) return;  
    wrap.addEventListener("click", (e) => {  
      const btn = e.target.closest("[data-action='remove-comp']");  
      if (btn) {  
        const row = btn.closest("[data-comp-row]");  
        if (row) row.remove();  
        if (form) saveFormThrottled(form);  
      }  
    });  
    wrap.addEventListener("input", () => { if (form) saveFormThrottled(form); });  
  });  
  
  // Auto-restore before first calculation so dynamic rows can be created  
  tryRestoreForm(form);  
  
  // Submit -> PDF (with lazy loader)  
  if (form) {  
    form.addEventListener("submit", async (e) => {  
      e.preventDefault();  
      if (status) { status.textContent = "Generating PDF…"; status.setAttribute("aria-busy", "true"); }  
      if (btnGenerate) btnGenerate.disabled = true;  
      try {  
        calculateTotalsAndROI();  
        await buildConstructionEstimatePDF(form);  
        if (status) status.textContent = "PDF generated.";  
      } catch (err) {  
        console.error(err);  
        if (status) status.textContent = err?.message || "Error generating PDF. See console.";  
      } finally {  
        if (status) status.setAttribute("aria-busy", "false");  
        if (btnGenerate) btnGenerate.disabled = false;  
      }  
    });  
  }  
  
  // Clear Form  
  if (clearBtn && form) {  
    clearBtn.addEventListener("click", () => {  
      clearFormAndStorage(form);  
      if (status) status.textContent = "Form cleared.";  
    });  
  }  
  
  // Initial totals/ROI  
  calculateTotalsAndROI();  
  
  // Global input listener for autosave  
  if (form) {  
    form.addEventListener("input", () => saveFormThrottled(form));  
    form.addEventListener("change", () => saveFormThrottled(form));  
  }  
});  
</script>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
