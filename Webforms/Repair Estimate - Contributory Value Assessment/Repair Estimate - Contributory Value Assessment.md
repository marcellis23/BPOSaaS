# Repair Estimate - Contributory Value Assessment  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>Repair Estimate Form (Contributory Value Assessment)</title>  
  <script src="https://cdn.tailwindcss.com"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  <style>  
    /* Green styling for the combined Total Repair Cost Summary section */  
    .total-summary {  
      background-color: #ecfdf5; /* Tailwind green-50 */  
      border-color: #16a34a;    /* Tailwind green-600 */  
    }  
  </style>  
</head>  
<body class="bg-gray-50 text-gray-900">  
  <main class="max-w-4xl mx-auto p-6 space-y-16">  
    <section id="exterior-repair-form" class="bg-white shadow rounded-2xl p-6">  
      <header class="mb-6">  
        <h1 class="text-2xl font-bold">  
          Repair Estimate (Contributory Value Assessment)  
        </h1>  
        <p class="text-sm text-gray-600">  
          Use this worksheet to document the <strong>full scope of work</strong> needed  
          for the subject property, including <strong>exterior</strong> and, when  
          applicable, <strong>interior</strong> repairs. The combined repair budget  
          will be used to estimate total project cost and its impact on the property's  
          current and after-repair value.  
        </p>  
      </header>  
  
      <form id="exteriorRepairForm" class="space-y-10">  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section  
  id="section_general_property_info"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white"  
>  
  <div class="space-y-4">  
    <h2 class="text-xl font-semibold">General Property Info</h2>  
  
    <!-- Why this section matters -->  
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-2">  
      <p class="font-semibold mb-1">Why this matters to you:</p>  
      <p>  
        This section clearly identifies the <strong>subject property</strong> for your  
        repair estimate and PCR. A complete address (with unit, city, state, and ZIP)  
        ensures that your exterior inspection, photos, and value conclusions are tied to  
        the correct parcel and can be cross-checked against <strong>MLS, public  
        records, and client files</strong>. Accurate property info reduces confusion,  
        supports compliance, and helps clients match this report to their internal  
        records.  
      </p>  
    </div>  
  
    <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">  
      <label class="block sm:col-span-4">  
        <span class="block text-sm font-medium">Property Address *</span>  
        <input  
          name="address"  
          required  
          type="text"  
          class="mt-1 w-full rounded-xl border-gray-300"  
          placeholder="123 Main St"  
        />  
      </label>  
  
      <label class="block sm:col-span-2">  
        <span class="block text-sm font-medium">Unit #</span>  
        <input  
          name="unit"  
          type="text"  
          class="mt-1 w-full rounded-xl border-gray-300"  
          placeholder="Apt/Unit"  
        />  
      </label>  
  
      <label class="block sm:col-span-3">  
        <span class="block text-sm font-medium">City *</span>  
        <input  
          name="city"  
          required  
          type="text"  
          class="mt-1 w-full rounded-xl border-gray-300"  
        />  
      </label>  
  
      <!-- State: dropdown (default PA) -->  
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
        <input  
          name="zip"  
          required  
          pattern="\d{5}(-\d{4})?"  
          inputmode="numeric"  
          type="text"  
          class="mt-1 w-full rounded-xl border-gray-300"  
          placeholder="19104"  
        />  
      </label>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section  
  id="section_property_condition"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white"  
>  
  <!-- Property Condition Assessment -->  
  <div class="space-y-4">  
    <h2 class="text-xl font-semibold">Property Condition Assessment</h2>  
  
    <!-- Why this section matters -->  
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-2">  
      <p class="font-semibold mb-1">Why this matters to you:</p>  
      <p>  
        This section documents both the <strong>current</strong> and  
        <strong>proposed</strong> use and condition of the subject. These inputs drive  
        whether an <strong>exterior-only or full repair estimate</strong> is appropriate,  
        what level of <strong>ARV potential</strong> is realistic, and how your repair  
        budget will be interpreted by <strong>clients, lenders, and appraisers</strong>.  
        Clear property type and condition ratings help align expectations about risk,  
        scope of work, and expected marketability after improvements.  
      </p>  
    </div>  
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-blue-50 p-4 rounded-xl border-l-4 border-blue-600">  
      <!-- Current Property Type -->  
      <div class="space-y-3">  
        <label class="block text-sm font-bold text-blue-800">  
          What is the current property type of the subject property? *  
        </label>  
        <p class="text-xs text-blue-700">  
          Select the current use or occupancy type for the subject.  
        </p>  
        <select  
          id="current_property_type"  
          name="current_property_type"  
          required  
          class="mt-1 w-full rounded-xl border-blue-300"  
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
      </div>  
  
      <!-- Proposed Property Type -->  
      <div class="space-y-3">  
        <label class="block text-sm font-bold text-blue-800">  
          What is the <strong>proposed property type</strong> of the subject property? *  
        </label>  
        <p class="text-xs text-blue-700">  
          Select the planned or target use after repairs or redevelopment.  
        </p>  
        <select  
          id="proposed_property_type"  
          name="proposed_property_type"  
          required  
          class="mt-1 w-full rounded-xl border-blue-300"  
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
      </div>  
  
      <!-- Current Condition -->  
      <div class="space-y-3">  
        <label class="block text-sm font-bold text-blue-800">  
          What is the <strong>current condition</strong> of the subject property? *  
        </label>  
        <p class="text-xs text-blue-700">  
          Select the condition based on exterior observations and available information.  
        </p>  
        <select  
          name="current_condition"  
          required  
          class="mt-1 w-full rounded-xl border-blue-300"  
        >  
          <option value="">Select Condition...</option>  
          <option>Average</option>  
          <option>Fair</option>  
          <option>Poor</option>  
          <option>Damaged</option>  
        </select>  
      </div>  
  
      <!-- Post-Repair Condition -->  
      <div class="space-y-3">  
        <label class="block text-sm font-bold text-blue-800">  
          What will the condition rating be <strong>after</strong> the recommended repairs are completed? *  
        </label>  
        <p class="text-xs text-blue-700">  
          The goal is to bring the property to at least an Average rating (e.g., Average, Good, or Excellent).  
        </p>  
        <select  
          name="post_repair_condition"  
          required  
          class="mt-1 w-full rounded-xl border-blue-300"  
        >  
          <option value="">Select Target Condition...</option>  
          <option>Excellent</option>  
          <option>Good</option>  
          <option>Average</option>  
        </select>  
      </div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section  
  id="project_market_support"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white"  
>  
  <!-- =========================   
       PROJECT SUMMARY & MARKET SUPPORT (FULL SCOPE)  
       ========================= -->  
  <h2 class="text-lg font-semibold">  
    Project Repair Summary &amp; Market Support  
  </h2>  
  
  <!-- Why this matters to you (single concise box) -->  
  <div  
    class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-2"  
  >  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section connects the <strong>repair plan</strong> (exterior-only or  
      full interior&nbsp;+&nbsp;exterior scope) to the  
      <strong>neighborhood market</strong>. Your project summary explains  
      <em>what</em> work is planned, while the market narrative explains  
      <em>why</em> those repairs matter for <strong>curb appeal, buyer  
      expectations, and resale value</strong>. Together, they help clients see  
      how the recommended work supports the <strong>project’s feasibility, ARV,  
      and marketing strategy</strong>.  
    </p>  
  </div>  
  
  <!-- Overall Repair Summary -->  
  <div>  
    <label for="project_summary" class="label">  
      Overall Repair Summary (scope &amp; intent)  
    </label>  
    <p id="project_summary_help" class="hint">  
      Summarize the key issues observed and the intended scope of work. Note  
      whether this is an <strong>exterior-only</strong> scope or a  
      <strong>full interior&nbsp;+&nbsp;exterior</strong> repair plan  
      (e.g., roof, siding, steps, windows, interior finishes, systems, safety  
      hazards, functional obsolescence).  
    </p>  
  
    <textarea  
      id="project_summary"  
      name="project_summary"  
      rows="4"  
      data-max="1000"  
      class="textarea"  
      placeholder="Example: Recommended work includes roof repairs, gutter and step replacement, exterior clean-up, and interior upgrades to kitchens, baths, flooring, and paint. Scope is designed to bring the property to an average-to-good condition level consistent with typical renovated homes in the immediate market area."  
      aria-describedby="project_summary_help project_summary_count"  
    ></textarea>  
  
    <div class="hint text-right" aria-live="polite">  
      <span id="project_summary_count">0</span>/1000  
    </div>  
  </div>  
  
  <!-- Market Support – narrative only -->  
  <div>  
    <label for="market_support_narrative" class="label">  
      Market Support (Condition &amp; Scope Narrative)  
    </label>  
    <p id="market_support_narrative_help" class="hint">  
      Briefly explain how the subject’s <strong>current</strong> condition  
      compares to nearby homes and how the <strong>proposed scope of work</strong>  
      aligns with local market expectations for achieving typical or competitive  
      market appeal (exterior-only or full rehab).  
    </p>  
  
    <textarea  
      id="market_support_narrative"  
      name="market_support_narrative"  
      rows="4"  
      data-max="1500"  
      class="textarea"  
      placeholder="Example: Competing listings and recent sales with updated exteriors and refreshed interiors show stronger buyer interest and shorter DOM. Completing the recommended scope of work would bring the subject closer to neighborhood norms and support pricing in line with similarly improved properties."  
      aria-describedby="market_support_narrative_help market_support_narrative_count"  
    ></textarea>  
  
    <div class="hint text-right" aria-live="polite">  
      <span id="market_support_narrative_count">0</span>/1500  
    </div>  
  </div>  
  
  <!-- IMPORTANT NOTICE at the end -->  
  <div class="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700 rounded-xl mt-4">  
    <p class="font-bold mb-1">IMPORTANT NOTICE: Scope of Assessment</p>  
    <p>  
      This report is a limited, visual, and non-invasive assessment for  
      <strong>property assessment purposes only</strong>. The agent conducting this assessment  
      <strong>is not acting as a licensed Home Inspector</strong>. Repair costs provided are  
      planning-level estimates and are subject to change based on actual contractor bids,  
      code requirements, and detailed inspections.  
    </p>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section  
  id="section_exterior_repairs"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white"  
>  
  <!-- Section Header -->  
  <div class="space-y-1">  
    <p class="text-xs font-semibold tracking-wide text-gray-500 uppercase">  
      Exterior Repair Assessment  
    </p>  
    <h2 class="text-xl font-semibold text-gray-900">  
      Exterior Repair Estimates (Line-Item Budget)  
    </h2>  
    <p class="text-xs text-gray-600">  
      Use this section to document <strong>exterior-only</strong> repair items observed  
      during the inspection. Interior repairs, if included in this report, are recorded  
      separately in the Interior Repair Estimates section.  
    </p>  
  </div>  
  
  <!-- Why this matters to you -->  
  <div  
    class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl"  
  >  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section converts your <strong>visual exterior observations</strong> into a  
      <strong>line-item repair budget</strong>. Each item you enter helps clarify  
      <em>what work is needed</em>, while the exterior total is later combined (if  
      applicable) with interior repairs to calculate  
      <strong>total project cost, net profit, and ROI</strong> in the Feasibility  
      section and on the final PDF. A clear, categorized repair list makes it easier  
      for clients, contractors, and lenders to understand the scope, negotiate pricing,  
      and plan next steps.  
    </p>  
  </div>  
  
  <!-- Dynamic exterior repair items -->  
  <div id="repairs-container" class="space-y-4"></div>  
  
  <button  
    type="button"  
    id="add-repair-btn"  
    class="text-blue-600 font-medium hover:text-blue-800 border border-blue-600 rounded-xl px-4 py-2 hover:bg-blue-50 transition duration-150"  
  >  
    + Add New Exterior Repair Item  
  </button>  
  
  <!-- Exterior Total -->  
  <div  
    class="grid grid-cols-1 gap-4 p-4 rounded-xl items-start border-t-2 border-blue-600 bg-blue-50 mt-4"  
  >  
    <div class="block text-lg font-bold text-blue-800">  
      Total Cost of Estimated <span class="underline">Exterior</span> Repairs:  
    </div>  
    <div class="block text-lg font-bold text-blue-800">  
      <span id="total_exterior_cost_display">$0.00</span>  
      <input  
        type="hidden"  
        name="total_exterior_cost"  
        id="total_exterior_cost_input"  
        value="0.00"  
      />  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section  
  id="section_interior_repairs"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white mt-10"  
>  
  <!-- Section Header -->  
  <div class="space-y-1">  
    <p class="text-xs font-semibold tracking-wide text-gray-500 uppercase">  
      Interior Repair Assessment (Optional)  
    </p>  
    <h2 class="text-xl font-semibold text-gray-900">  
      Interior Repair Estimates (Line-Item Budget)  
    </h2>  
    <p class="text-xs text-gray-600">  
      Use this section to document <strong>interior</strong> repair items when the  
      assignment includes interior access. If interior access was not available or the  
      scope is exterior-only, leave this section disabled using the toggle below.  
    </p>  
  </div>  
  
  <!-- Toggle: enable/disable interior repairs -->  
  <div  
    class="border border-purple-200 rounded-2xl p-4 bg-purple-50 flex flex-col gap-2"  
  >  
    <label class="flex items-center gap-3">  
      <input  
        type="checkbox"  
        id="include_interior_toggle"  
        name="include_interior"  
        class="h-4 w-4 rounded border-purple-300 text-purple-600 focus:ring-purple-500"  
      />  
      <span class="text-sm font-semibold text-purple-800">  
        Does this report include an  
        <span class="font-bold">interior repair assessment</span>?  
      </span>  
    </label>  
    <p class="text-xs text-purple-700">  
      Check this box if you inspected the interior and want to include interior repair  
      line items. When enabled, interior repair totals are  
      <strong>combined with exterior repairs</strong> to calculate total project cost,  
      net value impact, and ROI. Leave unchecked for <strong>exterior-only</strong>  
      assessments.  
    </p>  
  </div>  
  
  <!-- Why this matters to you -->  
  <div  
    class="bg-purple-50 border-l-4 border-purple-500 p-4 text-sm text-purple-700 rounded-xl"  
  >  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section converts your <strong>interior observations</strong> into a  
      <strong>line-item repair budget</strong>. Each item you enter helps clarify  
      <em>what interior work is needed</em> (rooms, finishes, systems), while the  
      interior total is combined with exterior repairs to show  
      <strong>total project cost, net contributory value, and ROI</strong> on the  
      feasibility worksheet and final PDF. A clear, categorized interior list helps  
      clients, contractors, and lenders understand the full rehab scope and prioritize  
      spending.  
    </p>  
  </div>  
  
  <!-- Interior Repair Line Items (hidden by default, shown when toggle is ON) -->  
  <div id="interior-repairs-section" class="space-y-4 hidden">  
    <!-- Dynamic interior repair items -->  
    <div id="interior-repairs-container" class="space-y-4"></div>  
  
    <button  
      type="button"  
      id="add-interior-repair-btn"  
      class="text-purple-600 font-medium hover:text-purple-800 border border-purple-600 rounded-xl px-4 py-2 hover:bg-purple-50 transition duration-150"  
    >  
      + Add New <strong>Interior</strong> Repair Item  
    </button>  
  
    <!-- Interior Total -->  
    <div  
      class="grid grid-cols-1 gap-4 p-4 rounded-xl items-start border-t-2 border-purple-600 bg-purple-50 mt-4"  
    >  
      <div class="block text-lg font-bold text-purple-800">  
        Total Cost of Estimated <span class="underline">Interior</span> Repairs:  
      </div>  
      <div class="block text-lg font-bold text-purple-800">  
        <span id="total_interior_cost_display">$0.00</span>  
        <input  
          type="hidden"  
          name="total_interior_cost"  
          id="total_interior_cost_input"  
          value="0.00"  
        />  
      </div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section  
  id="section_total_repair_summary"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white"  
>  
  <!-- Section Header -->  
  <div class="space-y-1">  
    <h2 class="text-xl font-semibold text-gray-900">  
      Total Repair Cost Summary  
    </h2>  
    <p class="text-xs text-gray-600">  
      This section combines the <strong>exterior</strong> and, when applicable,  
      <strong>interior</strong> repair estimates into a single total project repair cost.  
      This combined figure is used in the feasibility and value impact calculations and  
      is highlighted on the final PDF for client review.  
    </p>  
  </div>  
  
  <!-- Combined Total Repair Cost -->  
  <div  
    class="grid grid-cols-1 gap-4 p-4 rounded-xl items-start border-t-2 bg-green-50 mt-4 total-summary border"  
  >  
    <div class="block text-xl font-bold text-green-800">  
      TOTAL COST OF ESTIMATED REPAIRS (Interior &amp; Exterior):  
    </div>  
    <div class="block text-xl font-bold text-green-800">  
      <span id="total_cost_display">$0.00</span>  
      <input  
        type="hidden"  
        name="total_cost"  
        id="total_cost_input"  
        value="0.00"  
      />  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section  
  id="comps_current"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white"  
>  
  <div class="flex items-center justify-between">  
    <h2 class="text-lg font-semibold">  
      Estimated Current Value — Comparable Evidence (Current Condition)  
    </h2>  
    </div>  
  
  <div  
    class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl"  
  >  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section establishes the "before" value. By providing comparable sales  
      or listings (comps) for properties in  
      <strong>similar "as-is" condition</strong>, you are documenting the  
      subject's market value <strong>before</strong> any repairs are made. This  
      "Current Condition Value" is the baseline for calculating the project's  
      potential profit and ROI in the feasibility section.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">  
    <div class="sm:col-span-1">  
      <label for="estimated_current_value" class="label">  
        Estimated Current Value ($)  
      </label>  
    </div>  
    <div class="sm:col-span-1">  
      <input  
        id="estimated_current_value"  
        name="estimated_current_value"  
        type="number"  
        step="1"  
        min="0"  
        class="input"  
        placeholder="e.g., 125000"  
        inputmode="numeric"  
      />  
    </div>  
  </div>  
  
  <div>  
    <label for="market_sources" class="label mt-1">  
      Data Sources / Notes  
    </label>  
    <p id="market_sources_help" class="hint">  
      List the main data providers/tools used to support your estimate.  
    </p>  
    <input  
      id="market_sources"  
      name="market_sources"  
      type="text"  
      maxlength="400"  
      class="input"  
      placeholder="Example: Bright MLS, OPA public records, walkscore.com, contractor bid letters (on file)."  
      aria-describedby="market_sources_help"  
    />  
  </div>  
  
  <div>  
    <label for="estimated_current_justification" class="label">  
      Justification Summary  
    </label>  
    <p id="estimated_current_justification_help" class="hint">  
      Explain how these comps support your current-condition value (e.g., PPSF,  
      condition vs. subject, location/time adjustments).  
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
<section  
  id="comps_proposed"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white"  
>  
  <div class="flex items-center justify-between">  
    <h2 class="text-lg font-semibold">  
      Est. After Completion Value — Comparable Evidence (Proposed Condition)  
    </h2>  
    </div>  
  
  <div  
    class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl"  
  >  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section establishes the "after" value. By providing comps for  
      properties that are already in the <strong>target condition</strong> (e.g.,  
      renovated, updated), you are documenting the subject's potential market  
      value <strong>after</strong> all recommended repairs are completed. This  
      "After Completion Value" is the most critical number for determining the  
      project's feasibility and potential profit.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">  
    <div class="sm:col-span-1">  
      <label class="label" for="estimated_after_value">  
        Estimated After Completion Value ($)  
      </label>  
    </div>  
    <div class="sm:col-span-1">  
      <input  
        id="estimated_after_value"  
        name="estimated_after_value"  
        type="number"  
        step="1"  
        min="0"  
        class="input"  
        placeholder="e.g., 375000"  
        inputmode="numeric"  
      />  
    </div>  
  </div>  
  
  <div>  
    <label for="market_sources_proposed" class="label mt-1">  
      Data Sources / Notes  
    </label>  
    <p id="market_sources_proposed_help" class="hint">  
      List the main data providers/tools used to support your after-completion  
      estimate.  
    </p>  
    <input  
      id="market_sources_proposed"  
      name="market_sources_proposed"  
      type="text"  
      maxlength="400"  
      class="input"  
      placeholder="Example: Bright MLS, OPA public records, walkscore.com, contractor/builder bid letters (on file)."  
      aria-describedby="market_sources_proposed_help"  
    />  
  </div>  
  
  <div>  
    <label for="estimated_after_justification" class="label">  
      Justification Summary  
    </label>  
    <p id="estimated_after_justification_help" class="hint">  
      Briefly explain how these comps support your after-completion value (e.g.,  
      PPSF, quality level, age/renovation, location/time adjustments).  
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
<section  
  id="feasibility_inputs"  
  class="space-y-6 border border-gray-200 rounded-2xl p-6 bg-white"  
>  
  <h2 class="text-xl font-semibold text-gray-900">  
    Feasibility &amp; Contributory Value Inputs  
  </h2>  
  <p class="text-xs text-gray-600">  
    Enter your reconciled <strong>current-condition value</strong> and  
    <strong>after-completion value</strong>. These will be combined with the  
    total repair cost to model <strong>gross value gain</strong>,  
    <strong>net contributory value</strong>, and <strong>ROI</strong>.  
  </p>  
  
  <div  
    class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl"  
  >  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This is the final calculation. This section connects your  
      <strong>total repair cost</strong> to your  
      <strong>current and after-repair value</strong> estimates. The results  
      (Net Contributory Value and ROI) are the key metrics your clients need to  
      judge the project's financial feasibility and potential profit.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6">  
    <div>  
      <label class="label" for="value_current">  
        Current Condition Value ($)  
      </label>  
      <input  
        name="value_current"  
        id="value_current"  
        type="number"  
        step="0.01"  
        min="0"  
        class="input mt-1"  
        placeholder="0.00"  
        value="0.00"  
      />  
    </div>  
  
    <div>  
      <label class="label" for="value_after_repair">  
        After-Repair ARV estimate ($)  
      </label>  
      <input  
        name="value_after_repair"  
        id="value_after_repair"  
        type="number"  
        step="0.01"  
        min="0"  
        class="input mt-1"  
        placeholder="0.00"  
        value="0.00"  
      />  
    </div>  
  
    <div>  
      <span class="label">Estimated ROI</span>  
      <div  
        id="roi_display"  
        class="mt-1 text-lg font-semibold"  
        aria-live="polite"  
      >  
        0.00%  
      </div>  
      <input  
        type="hidden"  
        id="roi_input"  
        name="roi_input"  
        value="0.00"  
      />  
    </div>  
  
    <div>  
      <span class="label">Gross Value Gain</span>  
      <div  
        id="gross_value_gain_display"  
        class="mt-1 font-semibold"  
        aria-live="polite"  
      >  
        $0.00  
      </div>  
      <input  
        type="hidden"  
        id="gross_value_gain_input"  
        name="gross_value_gain_input"  
        value="0.00"  
      />  
    </div>  
  
    <div>  
      <span class="label">Net Contributory Value </span>  
      <div  
        id="contributory_value_display"  
        class="mt-1 font-semibold"  
        aria-live="polite"  
      >  
        $0.00  
      </div>  
      <input  
        type="hidden"  
        id="contributory_value_input"  
        name="contributory_value_input"  
        value="0.00"  
      />  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div id="actions" class="pt-4 border-t">  
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
      <span  
        id="statusMsg"  
        class="text-sm text-gray-600"  
        aria-live="polite"  
        aria-busy="false"  
      ></span>  
      <button  
        type="submit"  
        id="btnGenerateBottom"  
        class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"  
      >  
        Generate PDF  
      </button>  
    </div>  
  </div>  
</div>  
</form>  
</section>  
</main>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>   
  /* =========================  
     jsPDF UMD shim (if CDN already loaded)  
     =========================   
  */  
  if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
    window.jsPDF = window.jspdf.jsPDF;  
  }  
  
  (function () {  
    /* =========================  
       Globals / constants  
       ========================= */  
    const STORAGE_KEY = "REPAIR_ESTIMATE_V2";  
  
    let repairItemCounter = 0;  
    let interiorRepairCounter = 0;  
  
    const COMP_GROUPS = {  
      cur: {  
        containerId: "comps_current_container",  
        buttonId: "add-comp-current",  
        nextId: 0,  
        prefix: "cur",  
      },  
      prop: {  
        containerId: "comps_proposed_container",  
        buttonId: "add-comp-proposed",  
        nextId: 0,  
        prefix: "prop",  
      },  
    };  
  
    // Sanitize for value keys  
    const CAT_SANITIZE = /[\s\/&,\.\-\(\)\[\]]/g;  
  
    /**  
     * Category groups used for the Repair Category dropdown  
     */  
    const CATEGORY_GROUPS = {  
      "Construction & Development": [  
        "Professional & Administrative (Soft Costs)",  
        "Pre-Construction & Site Costs",  
        "Core Construction (Hard Costs)",  
        "Exterior & Site Development",  
        "Post-Construction & Compliance",  
        "Financing & Carrying Costs",  
      ],  
  
      Exterior: [  
        "Site & Grounds",  
        "Exterior Structure & Walls",  
        "Roof System",  
        "Entry, Steps, & Railings",  
        "Windows & Exterior Doors",  
        "Garage / Outbuildings",  
        "Health, Safety, & Code Issues (Exterior)",  
        "Other Exterior Items",  
      ],  
  
      Interior: [  
        "Interior Structure (Framing, Subfloors, Supports)",  
        "Interior Walls & Ceilings",  
        "Flooring Systems",  
        "Interior Doors & Trim",  
        "Kitchen",  
        "Bathrooms (Full / Half)",  
        "Bedrooms & Living Spaces",  
        "Basement / Lower Level (Finished or Unfinished)",  
        "Attic / Upper Level Spaces",  
        "Stairs & Railings (Interior)",  
        "Fireplaces / Chimneys",  
        "Built-Ins & Millwork",  
        "Interior Paint & Finishes",  
        "Health, Safety, & Code Issues (Interior)",  
        "Other Interior Items",  
      ],  
  
      "Mechanical / Building Systems": [  
        "Plumbing System",  
        "Electrical System",  
        "HVAC / Mechanical Systems",  
        "Water Heater / Boilers",  
        "Insulation & Energy Efficiency",  
        "Smart Home / Low-Voltage Systems",  
        "Other Mechanical Items",  
      ],  
  
      "Appliances & Fixtures": [  
        "Major Appliances",  
        "Plumbing Fixtures",  
        "Lighting Fixtures",  
        "Other Fixtures / Equipment",  
      ],  
    };  
  
    /**  
     * Map from <option value> -> human label ("Group – Item")  
     * used when building the PDF / summaries.  
     */  
    const CATEGORY_VALUE_TO_LABEL = {};  
  
    /**  
     * Build the HTML for all <option> elements (with <optgroup>).  
     * Called once and reused for all Repair Category selects.  
     */  
    function buildCategoryOptionsHTML() {  
      let html = "";  
      Object.entries(CATEGORY_GROUPS).forEach(([group, items]) => {  
        html += `<optgroup label="${group}">`;  
        items.forEach((item) => {  
          const fullLabel = `${group} – ${item}`;  
          const value = fullLabel.replace(CAT_SANITIZE, "_"); // machine-friendly key  
          CATEGORY_VALUE_TO_LABEL[value] = fullLabel;  
          html += `<option value="${value}">${item}</option>`;  
        });  
        html += `</optgroup>`;  
      });  
  
      return html;  
    }  
  
    // Prebuilt options string for both exterior & interior selects  
    const CATEGORY_OPTIONS_HTML = buildCategoryOptionsHTML();  
  
    /* =========================  
       Utilities  
       ========================= */  
    const $ = (sel, ctx = document) => ctx.querySelector(sel);  
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));  
  
    const formatCurrency = (v) => {  
      const n = parseFloat(v || 0);  
      return "$" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
    };  
  
    const formatPercent = (v) =>  
      (parseFloat(v || 0) || 0).toFixed(2) + "%";  
  
    function attachCharCounter(textarea, counterEl) {  
      if (!textarea || !counterEl) return;  
      // Prefer data-max, fall back to maxlength if present  
      const maxAttr =  
        textarea.dataset.max ||  
        textarea.getAttribute("maxlength") ||  
        "0";  
      const max = parseInt(maxAttr, 10) || 0;  
      const update = () => {  
        const len = (textarea.value || "").trim().length;  
        const clamped = max ? Math.min(len, max) : len;  
        counterEl.textContent = String(clamped);  
        if (max && len > max) {  
          textarea.value = textarea.value.slice(0, max);  
        }  
      };  
  
      textarea.addEventListener("input", update);  
      update();  
    }  
  
    /* =========================  
       Dynamic rows: Exterior Repair Items  
       ========================= */  
    function createRepairItemBlock() {  
      repairItemCounter++;  
      const id = repairItemCounter;  
  
      const container = $("#repairs-container");  
      if (!container) return;  
  
      const div = document.createElement("div");  
      div.className =  
        "repair-item repeatable-row bg-gray-50 p-4 rounded-xl space-y-3 border border-amber-200";  
      div.setAttribute("data-id", String(id));  
      div.innerHTML = `  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">  
          <div class="md:col-span-4">  
            <label class="label" for="repair_description_${id}">Repair Item Description *</label>  
            <input  
              id="repair_description_${id}"  
              name="repair_description_${id}"  
              type="text"  
              required  
              class="input"  
              placeholder="e.g., Replace rotted front steps and install new handrail"  
            />  
          </div>  
  
          <div class="md:col-span-2">  
            <label class="label" for="repair_category_${id}">Repair Category *</label>  
            <select  
              id="repair_category_${id}"  
              name="repair_category_${id}"  
              required  
              class="select"  
            >  
              <option value="">Select Category</option>  
              ${CATEGORY_OPTIONS_HTML}  
            </select>  
          </div>  
  
          <div class="md:col-span-2">  
            <label class="label" for="repair_cost_${id}">Est. Cost ($) *</label>  
            <div class="flex items-center gap-2">  
              <input  
                id="repair_cost_${id}"  
                name="repair_cost_${id}"  
                type="number"  
                step="0.01"  
                min="0"  
                inputmode="decimal"  
                required  
                class="input"  
                placeholder="0.00"  
                value="0.00"  
              />  
              <button  
                type="button"  
                class="text-sm text-red-600 hover:text-red-800"  
                data-action="remove-repair"  
                aria-label="Remove repair item"  
              >  
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
       Dynamic rows: Interior Repair Items  
       ========================= */  
    function createInteriorRepairItemBlock() {  
      interiorRepairCounter += 1;  
      const id = interiorRepairCounter;  
      const container = document.getElementById("interior-repairs-container");  
      if (!container) return;  
  
      const div = document.createElement("div");  
      // Mirror exterior styling  
      div.className =  
        "repair-item repeatable-row bg-gray-50 p-4 rounded-xl space-y-3 border border-amber-200";  
      div.setAttribute("data-id", String(id));  
      div.innerHTML = `  
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">  
          <div class="md:col-span-4">  
            <label class="label" for="interior_description_${id}">  
              Interior Repair Item Description *  
            </label>  
            <input  
              id="interior_description_${id}"  
              name="interior_description_${id}"  
              type="text"  
              required  
              class="input"  
              placeholder="e.g., Refinish hardwood floors, replace kitchen cabinets, repair drywall"  
            />  
          </div>  
  
          <div class="md:col-span-2">  
            <label class="label" for="interior_category_${id}">Repair Category *</label>  
            <select  
              id="interior_category_${id}"  
              name="interior_category_${id}"  
              required  
              class="select"  
            >  
              <option value="">Select Category</option>  
              ${CATEGORY_OPTIONS_HTML}  
            </select>  
          </div>  
  
          <div class="md:col-span-2">  
            <label class="label" for="interior_cost_${id}">Est. Cost ($) *</label>  
            <div class="flex items-center gap-2">  
              <input  
                id="interior_cost_${id}"  
                name="interior_cost_${id}"  
                type="number"  
                step="0.01"  
                min="0"  
                inputmode="decimal"  
                required  
                class="input"  
                placeholder="0.00"  
                value="0.00"  
              />  
              <button  
                type="button"  
                class="text-sm text-red-600 hover:text-red-800"  
                data-action="remove-interior-repair"  
                aria-label="Remove interior repair item"  
              >  
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
       Dynamic rows: Comps (current / proposed)  
       ========================= */  
    function addCompRowFor(groupKey) {  
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
      row.className =  
        "grid grid-cols-1 md:grid-cols-5 gap-3 p-3 rounded-xl bg-gray-50 border";  
      row.setAttribute("data-comp-row", `${g.prefix}-${id}`);  
      row.innerHTML = `  
        <input  
          name="${g.prefix}_addr_${id}"  
          class="input md:col-span-2"  
          placeholder="Address / Dev name"  
        />  
        <select name="${g.prefix}_status_${id}" class="select">  
          <option value="">Status</option>  
          <option>Sold</option>  
          <option>Active</option>  
          <option>Pending</option>  
        </select>  
        <input  
          name="${g.prefix}_price_${id}"  
          type="number"  
          step="1"  
          min="0"  
          class="input"  
          placeholder="Price"  
        />  
        <input  
          name="${g.prefix}_date_${id}"  
          type="date"  
          class="input"  
        />  
        <textarea  
          name="${g.prefix}_notes_${id}"  
          rows="1"  
          class="textarea md:col-span-5"  
          placeholder="Notes (beds/baths/sf, finish, distance, similarity)"  
        ></textarea>  
  
        <div class="md:col-span-5 text-right">  
          <button  
            type="button"  
            class="text-sm text-red-600 hover:text-red-800"  
            data-action="remove-comp"  
          >  
            Remove  
          </button>  
        </div>  
      `;  
      wrap.appendChild(row);  
    }  
  
    /* =========================  
       Totals + Feasibility (ROI)  — with visual cues  
       ========================= */  
    function calculateTotalsAndROI() {  
      const form =  
        document.getElementById("exteriorRepairForm") ||  
        document.querySelector("form");  
      if (!form) return;  
  
      // ----- Exterior repair costs -----  
      const extInputs = $$('input[name^="repair_cost_"]', form);  
      let totalExterior = 0;  
      extInputs.forEach((input) => {  
        totalExterior += parseFloat(input.value) || 0;  
      });  
      const extDisplay = $("#total_exterior_cost_display");  
      const extInput = $("#total_exterior_cost_input");  
      if (extDisplay) extDisplay.textContent = formatCurrency(totalExterior);  
      if (extInput) extInput.value = totalExterior.toFixed(2);  
  
      // ----- Interior repair costs (only if toggle is on) -----  
      const includeInteriorEl = $("#include_interior_toggle");  
      const includeInterior =  
        !includeInteriorEl || includeInteriorEl.checked === true;  
  
      let totalInterior = 0;  
      if (includeInterior) {  
        const intInputs = $$('input[name^="interior_cost_"]', form);  
        intInputs.forEach((input) => {  
          totalInterior += parseFloat(input.value) || 0;  
        });  
      }  
  
      const intDisplay = $("#total_interior_cost_display");  
      const intInput = $("#total_interior_cost_input");  
      if (intDisplay) intDisplay.textContent = formatCurrency(totalInterior);  
      if (intInput) intInput.value = totalInterior.toFixed(2);  
  
      // ----- Combined repairs -----  
      const totalRepairs = totalExterior + totalInterior;  
      const totalDisplay = $("#total_cost_display");  
      const totalInput = $("#total_cost_input");  
      if (totalDisplay) totalDisplay.textContent = formatCurrency(totalRepairs);  
      if (totalInput) totalInput.value = totalRepairs.toFixed(2);  
  
      // ----- Feasibility inputs -----  
      const valCurrentEl = $("#value_current");  
      const valAfterEl = $("#value_after_repair");  
      const currentVal = parseFloat(valCurrentEl?.value || 0) || 0;  
      const afterVal = parseFloat(valAfterEl?.value || 0) || 0;  
      const totalInvestment = currentVal + totalRepairs;  
      const grossGain = afterVal - currentVal;  
      const netContrib = afterVal - totalInvestment;  
      const roi =  
        totalInvestment > 0 ? (netContrib / totalInvestment) * 100 : 0;  
  
      // ----- Displays + hidden inputs -----  
      const grossGainDisp = $("#gross_value_gain_display");  
      const grossGainInp = $("#gross_value_gain_input");  
      if (grossGainDisp)  
        grossGainDisp.textContent = formatCurrency(grossGain);  
      if (grossGainInp) grossGainInp.value = grossGain.toFixed(2);  
  
      const netDisp = $("#contributory_value_display");  
      const netInp = $("#contributory_value_input");  
      if (netDisp) netDisp.textContent = formatCurrency(netContrib);  
      if (netInp) netInp.value = netContrib.toFixed(2);  
  
      const roiDisp = $("#roi_display");  
      const roiInp = $("#roi_input");  
      if (roiDisp) roiDisp.textContent = formatPercent(roi);  
      if (roiInp) roiInp.value = roi.toFixed(2);  
  
      // ===== Visual cues (Tailwind colors) =====  
      const applyPolarityColor = (el, value) => {  
        if (!el) return;  
        el.classList.remove("text-green-600", "text-red-600");  
        if (value > 0) {  
          el.classList.add("text-green-600");  
        } else if (value < 0) {  
          el.classList.add("text-red-600");  
        }  
      };  
  
      applyPolarityColor(roiDisp, roi);  
      applyPolarityColor(netDisp, netContrib);  
      applyPolarityColor(grossGainDisp, grossGain);  
    }  
  
    /* =========================  
       PDF helpers  
       ========================= */  
  
    /* ▼▼▼ REPLACEMENT for pdfKV FUNCTION ▼▼▼  
       This new version creates a two-column layout and wraps text   
       in both the label and value columns to prevent overlap.  
    */  
    function pdfKV(doc, label, value, x, y) {  
      // Get page width from the document object  
      const pageW = doc.internal.pageSize.getWidth();  
        
      // Define column start positions and widths  
      const valueStartX = 80; // Start values at 80mm from left  
      const labelMaxWidth = valueStartX - x - 2; // Max width for label (with 2mm margin)  
      const valueMaxWidth = pageW - valueStartX - x; // Max width for value (using x as right margin)  
  
      // Set font for Label (Column 1)  
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(10);  
      doc.setTextColor(60);  
        
      // Split label text to fit its column and print it  
      const labelLines = doc.splitTextToSize(String(label || ''), labelMaxWidth);  
      doc.text(labelLines, x, y);  
  
      // Set font for Value (Column 2)  
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(20);  
        
      // Split value text to fit its column and print it  
      const valueLines = doc.splitTextToSize(String(value || ''), valueMaxWidth);  
      doc.text(valueLines, valueStartX, y);  
        
      // Calculate new 'y' position  
      const lineHeight = 5; // Approx line height for 10pt font  
      // Use the taller of the two columns to determine new 'y'  
      const linesUsed = Math.max(labelLines.length, valueLines.length);  
        
      // Return new 'y' position, ready for the next line  
      return y + (linesUsed * lineHeight) + 2; // Add 2mm padding  
    }  
    /* ▲▲▲ END OF REPLACEMENT pdfKV FUNCTION ▲▲▲ */  
  
    function sectionHeader(doc, text, y, pageW) {  
      doc.setFillColor(240);  
      doc.rect(12, y - 6, pageW - 24, 10, "F");  
      doc.setFontSize(12);  
      doc.setTextColor(0);  
      doc.text(text, 16, y + 1);  
      return y + 12;  
    }  
  
    const disclaimerText = [  
      "IMPORTANT NOTICE: Scope of Repair Estimate",  
      "1. This is a limited, visual, and non-invasive assessment prepared for planning and assessment purposes only.",  
      "2. The preparer is not acting as a licensed Home Inspector and this is not a full home inspection or appraisal.",  
      "3. Costs are estimates only and must be confirmed with licensed contractors, trades, and vendors.",  
      "4. Actual repair costs, code requirements, and scope may change based on detailed inspections and bids.",  
    ];  
  
    function collectCostItems(fv) {  
      const rows = [];  
      // Exterior items  
      for (const [key, value] of Object.entries(fv)) {  
        if (key.startsWith("repair_description_")) {  
          const id = key.replace("repair_description_", "");  
          const catKey = fv[`repair_category_${id}`] || "";  
          const catDisplay = CATEGORY_VALUE_TO_LABEL[catKey] || catKey || "";  
          rows.push({  
            type: "Exterior",  
            description: (value || "").trim(),  
            category: catDisplay,  
            cost: parseFloat(fv[`repair_cost_${id}`] || 0) || 0,  
          });  
        }  
      }  
  
      // Interior items  
      for (const [key, value] of Object.entries(fv)) {  
        if (key.startsWith("interior_description_")) {  
          const id = key.replace("interior_description_", "");  
          const catKey = fv[`interior_category_${id}`] || "";  
          const catDisplay = CATEGORY_VALUE_TO_LABEL[catKey] || catKey || "";  
          rows.push({  
            type: "Interior",  
            description: (value || "").trim(),  
            category: catDisplay,  
            cost: parseFloat(fv[`interior_cost_${id}`] || 0) || 0,  
          });  
        }  
      }  
  
      return rows;  
    }  
  
    function collectComps(fv, prefix) {  
      const out = [];  
      Object.keys(fv).forEach((k) => {  
        if (k.startsWith(`${prefix}_addr_`)) {  
          const id = k.replace(`${prefix}_addr_`, "");  
          const addr = (fv[`${prefix}_addr_${id}`] || "").trim();  
          const status = fv[`${prefix}_status_${id}`] || "";  
          const price = parseFloat(fv[`${prefix}_price_${id}`] || 0) || 0;  
          const date = fv[`${prefix}_date_${id}`] || "";  
          const notes = (fv[`${prefix}_notes_${id}`] || "").trim();  
          if (addr || status || price || date || notes) {  
            out.push({ addr, status, price, date, notes });  
          }  
        }  
      });  
      return out;  
    }  
  
    async function buildRepairEstimatePDF(form) {  
      // Guard: make sure jsPDF is available  
      const JSPDFCtor = window.jsPDF || (window.jspdf && window.jspdf.jsPDF);  
      if (!JSPDFCtor) {  
        throw new Error(  
          "PDF library (jsPDF) failed to load. Please refresh the page and try again."  
        );  
      }  
  
      const doc = new JSPDFCtor({  
        orientation: "portrait",  
        unit: "mm",  
        format: "a4",  
      });  
      const pageW = doc.internal.pageSize.getWidth();  
      const pageH = doc.internal.pageSize.getHeight();  
  
      const fv = Object.fromEntries(new FormData(form).entries());  
      // Collect cost items (exterior + interior) and require at least one > 0  
      const costItems = collectCostItems(fv);  
      if (!costItems.some((it) => (it.cost || 0) > 0)) {  
        throw new Error(  
          "Please add at least one repair item (exterior or interior) with a cost greater than $0.00 before generating the PDF."  
        );  
      }  
  
      const costExterior = costItems.filter((it) => it.type === "Exterior");  
      const costInterior = costItems.filter((it) => it.type === "Interior");  
  
      const addressLine = [  
        fv.address,  
        fv.unit ? "Unit " + fv.unit : null,  
        fv.city,  
        fv.state,  
        fv.zip,  
      ]  
        .filter(Boolean)  
        .join(", ");  
  
      // Title  
      doc.setFontSize(18);  
      doc.setTextColor(0);  
      doc.text(  
        "Repair Estimate & Market Support Report",  
        pageW / 2,  
        22,  
        { align: "center" }  
      );  
      doc.setFontSize(12);  
      doc.setTextColor(120);  
      doc.text(new Date().toLocaleString(), pageW / 2, 30, {  
        align: "center",  
      });  
      doc.setTextColor(0);  
  
      let y = 46;  
  
      // Subject Property  
      y = sectionHeader(doc, "Subject Property", y, pageW);  
      y = pdfKV(doc, "Property Address", addressLine, 16, y);  
  
      // Property Type & Condition  
      y = sectionHeader(doc, "Property Type & Condition", y + 4, pageW);  
      y = pdfKV(  
        doc,  
        "Current Property Type",  
        fv.current_property_type || "",  
        16,  
        y  
      );  
      y = pdfKV(  
        doc,  
        "Proposed Property Type",  
        fv.proposed_property_type || "",  
        16,  
        y  
      );  
      y = pdfKV(  
        doc,  
        "Current Condition",  
        fv.current_condition || "",  
        16,  
        y  
      );  
      y = pdfKV(  
        doc,  
        "Target Post-Repair Condition",  
        fv.post_repair_condition || "",  
        16,  
        y  
      );  
  
      // Disclaimer  
      if (y > pageH - 50) {  
        doc.addPage();  
        y = 16;  
      }  
      y += 4;  
      doc.setFontSize(12);  
      doc.setTextColor(200, 0, 0);  
      doc.setFont("helvetica", "bold");  
      doc.text("REPAIR ESTIMATE DISCLAIMER", 16, y);  
      y += 2;  
      doc.setFontSize(9);  
      doc.setFont("helvetica", "normal");  
      doc.setTextColor(50);  
      const disclaimerLines = doc.splitTextToSize(  
        disclaimerText.join("\n"),  
        pageW - 32  
      );  
      doc.text(disclaimerLines, 16, y + 4);  
      y += disclaimerLines.length * 4.5 + 4;  
      doc.setTextColor(0);  
  
      // Exterior Repair Cost Estimates  
      if (costExterior.length) {  
        y = sectionHeader(doc, "Exterior Repair Cost Estimates", y + 4, pageW);  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        y += 2;  
        doc.text("Description", 16, y);  
        doc.text("Repair Category", 90, y);  
        doc.text("Est. Cost", 170, y);  
        y += 6;  
        doc.setDrawColor(200);  
        doc.line(12, y - 2, pageW - 12, y - 2);  
  
        doc.setFont("helvetica", "normal");  
  
        /* ▼▼▼ REPLACEMENT for Exterior Repair loop ▼▼▼ */  
        for (const item of costExterior) {  
          const costDisplay = formatCurrency(item.cost);  
          doc.setTextColor(20);  
  
          // 1. Define column widths and split text for each column  
          const descLines = doc.splitTextToSize(item.description || "", 70); // x=16, width=70mm  
          const catLines = doc.splitTextToSize(item.category || "", 75); // x=90, width=75mm  
          // Cost column (costDisplay) is short, no split needed  
  
          // 2. Find max lines to determine row height  
          const maxLines = Math.max(descLines.length, catLines.length);  
          const lineHeight = 5; // 5mm per line for 10pt font  
  
          // 3. Draw text for all columns  
          doc.text(descLines, 16, y); // Description  
          doc.setTextColor(0);  
          doc.text(catLines, 90, y); // Category  
          doc.text(costDisplay, 170, y); // Est. Cost  
  
          // 4. Increment y position based on the tallest column  
          y += maxLines * lineHeight + 3; // +3mm for padding  
  
          // 5. Draw divider line  
          doc.line(12, y - 2, pageW - 12, y - 2);  
  
          // 6. Page break logic (with a safer 30mm margin)  
          if (y > pageH - 30) {  
            doc.addPage();  
            y = 16;  
            doc.setFontSize(10);  
            doc.setTextColor(60);  
            y += 2;  
            doc.text("Description", 16, y);  
            doc.text("Repair Category", 90, y);  
            doc.text("Est. Cost", 170, y);  
            y += 6;  
            doc.setDrawColor(200);  
            doc.line(12, y - 2, pageW - 12, y - 2);  
          }  
        }  
        /* ▲▲▲ END OF REPLACEMENT Loop ▲▲▲ */  
      }  
  
      // Interior Repair Cost Estimates (if any)  
      if (costInterior.length) {  
        if (y > pageH - 40) {  
          doc.addPage();  
          y = 16;  
        }  
        y = sectionHeader(  
          doc,  
          "Interior Repair Cost Estimates (If Provided)",  
          y + 4,  
          pageW  
        );  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        y += 2;  
        doc.text("Description", 16, y);  
        doc.text("Repair Category", 90, y);  
        doc.text("Est. Cost", 170, y);  
        y += 6;  
        doc.setDrawColor(200);  
        doc.line(12, y - 2, pageW - 12, y - 2);  
  
        doc.setFont("helvetica", "normal");  
  
        /* ▼▼▼ REPLACEMENT for Interior Repair loop ▼▼▼ */  
        for (const item of costInterior) {  
          const costDisplay = formatCurrency(item.cost);  
          doc.setTextColor(20);  
  
          // 1. Define column widths and split text for each column  
          const descLines = doc.splitTextToSize(item.description || "", 70); // x=16, width=70mm  
          const catLines = doc.splitTextToSize(item.category || "", 75); // x=90, width=75mm  
  
          // 2. Find max lines to determine row height  
          const maxLines = Math.max(descLines.length, catLines.length);  
          const lineHeight = 5; // 5mm per line for 10pt font  
  
          // 3. Draw text for all columns  
          doc.text(descLines, 16, y); // Description  
          doc.setTextColor(0);  
          doc.text(catLines, 90, y); // Category  
          doc.text(costDisplay, 170, y); // Est. Cost  
  
          // 4. Increment y position based on the tallest column  
          y += maxLines * lineHeight + 3; // +3mm for padding  
  
          // 5. Draw divider line  
          doc.line(12, y - 2, pageW - 12, y - 2);  
  
          // 6. Page break logic (with a safer 30mm margin)  
          if (y > pageH - 30) {  
            doc.addPage();  
            y = 16;  
            doc.setFontSize(10);  
            doc.setTextColor(60);  
            y += 2;  
            doc.text("Description", 16, y);  
            doc.text("Repair Category", 90, y);  
            doc.text("Est. Cost", 170, y);  
            y += 6;  
            doc.setDrawColor(200);  
            doc.line(12, y - 2, pageW - 12, y - 2);  
          }  
        }  
        /* ▲▲▲ END OF REPLACEMENT Loop ▲▲▲ */  
      }  
  
      // Total Repair Costs (Exterior, Interior, Combined)  
      const totalExterior =  
        parseFloat(  
          fv.total_exterior_cost_input || fv.total_exterior_cost || 0  
        ) || 0;  
      const totalInterior =  
        parseFloat(  
          fv.total_interior_cost_input || fv.total_interior_cost || 0  
        ) || 0;  
      const combinedTotal =  
        parseFloat(fv.total_cost_input || fv.total_cost || 0) ||  
        totalExterior + totalInterior;  
  
      y += 4;  
      doc.setFontSize(12);  
      doc.setTextColor(0);  
      doc.setFont("helvetica", "bold");  
      doc.text("Total Estimated Exterior Repairs:", 16, y);  
      doc.text(formatCurrency(totalExterior), 170, y);  
      y += 6;  
      if (totalInterior > 0) {  
        doc.text("Total Estimated Interior Repairs:", 16, y);  
        doc.text(formatCurrency(totalInterior), 170, y);  
        y += 6;  
      }  
  
      doc.text(  
        "Combined Total Estimated Repairs (Interior & Exterior):",  
        16,  
        y  
      );  
      doc.text(formatCurrency(combinedTotal), 170, y);  
      doc.setFont("helvetica", "normal");  
      y += 10;  
  
      // Feasibility (from inputs)  
      if (y > pageH - 80) {  
        doc.addPage();  
        y = 16;  
      }  
      y = sectionHeader(  
        doc,  
        "Feasibility Summary (Repairs & Value Impact)",  
        y + 4,  
        pageW  
      );  
      const valCurrent = parseFloat(fv.value_current || 0) || 0;  
      const valAfter = parseFloat(fv.value_after_repair || 0) || 0;  
      const totalInvestment = valCurrent + combinedTotal;  
      const grossGain = valAfter - valCurrent;  
      const netContrib = valAfter - totalInvestment;  
      const roi =  
        totalInvestment > 0 ? (netContrib / totalInvestment) * 100 : 0;  
  
      y = pdfKV(  
        doc,  
        "Current Condition Value",  
        formatCurrency(valCurrent),  
        16,  
        y  
      );  
      y = pdfKV(  
        doc,  
        "After-Repair Value",  
        formatCurrency(valAfter),  
        16,  
        y  
      );  
      y = pdfKV(  
        doc,  
        "Total Investment",  
        formatCurrency(totalInvestment),  
        16,  
        y  
      );  
      y = pdfKV(  
        doc,  
        "Gross Value Gain",  
        formatCurrency(grossGain),  
        16,  
        y  
      );  
      doc.setFont("helvetica", "bold");  
      doc.setTextColor(0);  
      doc.text("Net Contributory Value:", 16, y + 4);  
      doc.text(formatCurrency(netContrib), 70, y + 4);  
      doc.setFont("helvetica", "normal");  
      doc.setTextColor(60);  
      doc.text("Estimated ROI on Repairs:", 100, y + 4);  
      doc.text(formatPercent(roi), 170, y + 4);  
      y += 10;  
  
      // Project Summary & Market Support  
      if (y > pageH - 80) {  
        doc.addPage();  
        y = 16;  
      }  
      y = sectionHeader(  
        doc,  
        "Project Repair Summary & Market Support",  
        y + 4,  
        pageW  
      );  
      const summaryTxt = (fv.project_summary || "").trim();  
      const narrativeTxt = (fv.market_support_narrative || "").trim();  
      if (summaryTxt) {  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        doc.text("Project Repair Summary (Scope & Intent)", 16, y);  
        y += 5;  
        doc.setTextColor(20);  
        const lines = doc.splitTextToSize(summaryTxt, pageW - 32);  
        doc.text(lines, 16, y);  
        y += lines.length * 5 + 4;  
      }  
  
      if (narrativeTxt) {  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        doc.text("Market Support (Condition & Scope Narrative)", 16, y);  
        y += 5;  
        doc.setTextColor(20);  
        const lines2 = doc.splitTextToSize(narrativeTxt, pageW - 32);  
        doc.text(lines2, 16, y);  
        y += lines2.length * 5 + 4;  
      }  
  
      // Current comps + justification  
      const compsCur = collectComps(fv, "cur");  
      const estCurVal = parseFloat(fv.estimated_current_value || 0) || 0;  
      const curJust = (fv.estimated_current_justification || "").trim();  
      if (y > pageH - 80) {  
        doc.addPage();  
        y = 16;  
      }  
      y = sectionHeader(  
        doc,  
        "Estimated Current Value — Comparable Evidence (Current Condition)",  
        y + 4,  
        pageW  
      );  
      if (estCurVal > 0) {  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        doc.text("Estimated Current Value (worksheet):", 16, y);  
        doc.setTextColor(20);  
        doc.text(formatCurrency(estCurVal), 100, y);  
        y += 6;  
      }  
  
      if (compsCur.length) {  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        doc.text("Comparable Evidence (summary)", 16, y);  
        y += 6;  
        doc.setTextColor(20);  
        doc.setFontSize(9);  
        for (const [i, c] of compsCur.entries()) {  
          const priceStr = c.price ? "$" + c.price.toLocaleString() : "";  
          const header = `${i + 1}. ${c.addr || "—"}  ${  
            c.status ? "(" + c.status + ")" : ""  
          }  ${priceStr}  ${c.date || ""}`;  
          doc.text(header, 16, y);  
          y += 4;  
          if (c.notes) {  
            const noteLines = doc.splitTextToSize(c.notes, pageW - 30);  
            doc.text(noteLines, 20, y);  
            y += noteLines.length * 4 + 2;  
          }  
          doc.setDrawColor(220);  
          doc.line(16, y, pageW - 16, y);  
          y += 2;  
          if (y > pageH - 20) {  
            doc.addPage();  
            y = 16;  
          }  
        }  
      }  
  
      if (curJust) {  
        if (y > pageH - 40) {  
          doc.addPage();  
          y = 16;  
        }  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        doc.text("Current-Condition Justification Summary", 16, y);  
        y += 5;  
        doc.setTextColor(20);  
        const jLines = doc.splitTextToSize(curJust, pageW - 32);  
        doc.text(jLines, 16, y);  
        y += jLines.length * 5 + 2;  
      }  
  
      // Proposed comps + justification  
      const compsProp = collectComps(fv, "prop");  
      const estAfterVal = parseFloat(fv.estimated_after_value || 0) || 0;  
      const propJust = (fv.estimated_after_justification || "").trim();  
      if (y > pageH - 80) {  
        doc.addPage();  
        y = 16;  
      }  
      y = sectionHeader(  
        doc,  
        "Estimated After Completion Value — Comparable Evidence (Proposed Condition)",  
        y + 4,  
        pageW  
      );  
      if (estAfterVal > 0) {  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        doc.text("Estimated After-Repair Value (worksheet):", 16, y);  
        doc.setTextColor(20);  
        doc.text(formatCurrency(estAfterVal), 120, y);  
        y += 6;  
      }  
  
      if (compsProp.length) {  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        doc.text("Comparable Evidence (summary)", 16, y);  
        y += 6;  
        doc.setTextColor(20);  
        doc.setFontSize(9);  
        for (const [i, c] of compsProp.entries()) {  
          const priceStr = c.price ? "$" + c.price.toLocaleString() : "";  
          const header = `${i + 1}. ${c.addr || "—"}  ${  
            c.status ? "(" + c.status + ")" : ""  
          }  ${priceStr}  ${c.date || ""}`;  
          doc.text(header, 16, y);  
          y += 4;  
          if (c.notes) {  
            const noteLines = doc.splitTextToSize(c.notes, pageW - 30);  
            doc.text(noteLines, 20, y);  
            y += noteLines.length * 4 + 2;  
          }  
          doc.setDrawColor(220);  
          doc.line(16, y, pageW - 16, y);  
          y += 2;  
          if (y > pageH - 20) {  
            doc.addPage();  
            y = 16;  
          }  
        }  
      }  
  
      if (propJust) {  
        if (y > pageH - 40) {  
          doc.addPage();  
          y = 16;  
        }  
        doc.setFontSize(10);  
        doc.setTextColor(60);  
        doc.text("After-Repair Justification Summary", 16, y);  
        y += 5;  
        doc.setTextColor(20);  
        const j2Lines = doc.splitTextToSize(propJust, pageW - 32);  
        doc.text(j2Lines, 16, y);  
        y += j2Lines.length * 5 + 2;  
      }  
  
      const safeName = (fv.address || "Repair-Estimate")  
        .replace(/[^a-z0-9\- ]/gi, "_")  
        .replace(/\s+/g, "_");  
      doc.save(`${safeName}_Repair_Estimate.pdf`);  
    }  
  
    /* =========================  
       Autosave (localStorage)  
       ========================= */  
    function saveFormToStorage(form) {  
      if (!form) return;  
      const data = {};  
      const fd = new FormData(form);  
      for (const [name, value] of fd.entries()) {  
        data[name] = value;  
      }  
      try {  
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));  
      } catch (e) {  
        console.warn("Autosave failed:", e);  
      }  
    }  
  
    function restoreFormFromStorage(form) {  
      if (!form) return;  
      let parsed = null;  
      try {  
        const raw = localStorage.getItem(STORAGE_KEY);  
        if (!raw) {  
          // No saved data: seed default rows  
          createRepairItemBlock();  
          addCompRowFor("cur");  
          addCompRowFor("cur");  
          addCompRowFor("prop");  
          addCompRowFor("prop");  
          calculateTotalsAndROI();  
          return;  
        }  
        parsed = JSON.parse(raw);  
      } catch (e) {  
        console.warn("Failed to parse saved form data:", e);  
      }  
  
      if (!parsed || typeof parsed !== "object") {  
        createRepairItemBlock();  
        addCompRowFor("cur");  
        addCompRowFor("cur");  
        addCompRowFor("prop");  
        addCompRowFor("prop");  
        calculateTotalsAndROI();  
        return;  
      }  
  
      // Determine how many repair and comp rows are needed  
      let maxRepairId = 0;  
      let maxInteriorId = 0;  
      let maxCurId = 0;  
      let maxPropId = 0;  
      for (const key of Object.keys(parsed)) {  
        if (key.startsWith("repair_description_")) {  
          maxRepairId = Math.max(  
            maxRepairId,  
            parseInt(key.replace("repair_description_", ""), 10) || 0  
          );  
        }  
        if (key.startsWith("interior_description_")) {  
          maxInteriorId = Math.max(  
            maxInteriorId,  
            parseInt(key.replace("interior_description_", ""), 10) || 0  
          );  
        }  
        if (key.startsWith("cur_addr_")) {  
          maxCurId = Math.max(  
            maxCurId,  
            parseInt(key.replace("cur_addr_", ""), 10) || 0  
          );  
        }  
        if (key.startsWith("prop_addr_")) {  
          maxPropId = Math.max(  
            maxPropId,  
            parseInt(key.replace("prop_addr_", ""), 10) || 0  
          );  
        }  
      }  
  
      // Build required rows  
      for (let i = 0; i < maxRepairId; i++) {  
        createRepairItemBlock();  
      }  
      for (let i = 0; i < maxInteriorId; i++) {  
        createInteriorRepairItemBlock();  
      }  
      for (let i = 0; i < maxCurId; i++) {  
        addCompRowFor("cur");  
      }  
      for (let i = 0; i < maxPropId; i++) {  
        addCompRowFor("prop");  
      }  
  
      // If nothing in storage for these, still seed some defaults  
      if (maxRepairId === 0) createRepairItemBlock();  
      if (maxCurId === 0) {  
        addCompRowFor("cur");  
        addCompRowFor("cur");  
      }  
      if (maxPropId === 0) {  
        addCompRowFor("prop");  
        addCompRowFor("prop");  
      }  
  
      // Populate values (including checkbox restore)  
      for (const [name, value] of Object.entries(parsed)) {  
        const field = form.elements[name];  
        if (!field) continue;  
  
        if (field.type === "checkbox") {  
          field.checked =  
            value === "on" ||  
            value === "true" ||  
            value === "yes" ||  
            value === "1";  
        } else {  
          field.value = value;  
        }  
      }  
  
      calculateTotalsAndROI();  
    }  
  
    /* =========================  
       Wire-up DOM  
       ========================= */  
    document.addEventListener("DOMContentLoaded", () => {  
      const form =  
        document.getElementById("exteriorRepairForm") ||  
        document.querySelector("form");  
      if (!form) return;  
  
      const status = $("#statusMsg");  
      const btnGenerate = $("#btnGenerateBottom");  
      const addRepairBtn = $("#add-repair-btn");  
      const clearFormBtn = $("#clearFormBtn");  
  
      const addInteriorBtn = $("#add-interior-repair-btn");  
      const interiorSection = $("#interior-repairs-section");  
      const includeInteriorToggle = $("#include_interior_toggle");  
      const interiorContainer = $("#interior-repairs-container");  
  
      let autosaveTimer = null;  
      const queueAutosave = () => {  
        if (!form) return;  
        clearTimeout(autosaveTimer);  
        autosaveTimer = setTimeout(() => saveFormToStorage(form), 500);  
      };  
  
      // Helper: sync interior visibility with toggle  
      const syncInteriorVisibility = () => {  
        if (!interiorSection || !includeInteriorToggle) return;  
        const enabled = includeInteriorToggle.checked === true;  
        interiorSection.classList.toggle("hidden", !enabled);  
        if (!enabled) {  
          // Clear interior rows & reset totals when disabled  
          $$(".repair-item", interiorSection).forEach((row) => row.remove());  
          interiorRepairCounter = 0;  
          const disp = $("#total_interior_cost_display");  
          const inp = $("#total_interior_cost_input");  
          if (disp) disp.textContent = "$0.00";  
          if (inp) inp.value = "0.00";  
        } else {  
          // Ensure at least one row when enabled and none exist  
          if (  
            interiorContainer &&  
            !interiorContainer.querySelector(".repair-item")  
          ) {  
            createInteriorRepairItemBlock();  
          }  
        }  
        calculateTotalsAndROI();  
      };  
  
      // Add exterior repair item button  
      if (addRepairBtn) {  
        addRepairBtn.addEventListener("click", () => {  
          createRepairItemBlock();  
          queueAutosave();  
        });  
      }  
  
      // Delegated exterior repair container events  
      const repairsContainer = $("#repairs-container");  
      if (repairsContainer) {  
        repairsContainer.addEventListener("input", (e) => {  
          if (e.target && /^repair_cost_\d+$/.test(e.target.name)) {  
            calculateTotalsAndROI();  
          }  
          queueAutosave();  
        });  
        repairsContainer.addEventListener("click", (e) => {  
          const btn = e.target.closest("[data-action='remove-repair']");  
          if (btn) {  
            const row = btn.closest(".repair-item");  
            if (row) row.remove();  
            calculateTotalsAndROI();  
            queueAutosave();  
          }  
        });  
      }  
  
      // Interior toggle  
      if (includeInteriorToggle) {  
        includeInteriorToggle.addEventListener("change", () => {  
          syncInteriorVisibility();  
          queueAutosave();  
        });  
      }  
  
      // Add interior repair item button  
      if (addInteriorBtn) {  
        addInteriorBtn.addEventListener("click", () => {  
          createInteriorRepairItemBlock();  
          queueAutosave();  
        });  
      }  
  
      // Delegated interior repair container events  
      if (interiorContainer) {  
        interiorContainer.addEventListener("input", (e) => {  
          if (e.target && /^interior_cost_\d+$/.test(e.target.name)) {  
            calculateTotalsAndROI();  
          }  
          queueAutosave();  
        });  
        interiorContainer.addEventListener("click", (e) => {  
          const btn = e.target.closest(  
            "[data-action='remove-interior-repair']"  
          );  
          if (btn) {  
            const row = btn.closest(".repair-item");  
            if (row) row.remove();  
            calculateTotalsAndROI();  
            queueAutosave();  
          }  
        });  
      }  
  
      // ROI input events (Feasibility)  
      const curVal = $("#value_current");  
      const aftVal = $("#value_after_repair");  
      if (curVal)  
        curVal.addEventListener("input", () => {  
          calculateTotalsAndROI();  
          queueAutosave();  
        });  
      if (aftVal)  
        aftVal.addEventListener("input", () => {  
          calculateTotalsAndROI();  
          queueAutosave();  
        });  
  
      // Character counters (if present)  
      attachCharCounter($("#project_summary"), $("#project_summary_count"));  
      attachCharCounter(  
        $("#market_support_narrative"),  
        $("#market_support_narrative_count")  
      );  
      attachCharCounter(  
        $("#estimated_current_justification"),  
        $("#estimated_current_justification_count")  
      );  
      attachCharCounter(  
        $("#estimated_after_justification"),  
        $("#estimated_after_justification_count")  
      );  
  
      // Comps: add row buttons  
      const btnCur = document.getElementById(COMP_GROUPS.cur.buttonId);  
      const btnProp = document.getElementById(COMP_GROUPS.prop.buttonId);  
      if (btnCur)  
        btnCur.addEventListener("click", () => {  
          addCompRowFor("cur");  
          queueAutosave();  
        });  
      if (btnProp)  
        btnProp.addEventListener("click", () => {  
          addCompRowFor("prop");  
          queueAutosave();  
        });  
  
      // Delegated comp row removal  
      const curWrap = document.getElementById(COMP_GROUPS.cur.containerId);  
      const propWrap = document.getElementById(COMP_GROUPS.prop.containerId);  
      [curWrap, propWrap].forEach((wrap) => {  
        if (!wrap) return;  
        wrap.addEventListener("click", (e) => {  
          const btn = e.target.closest("[data-action='remove-comp']");  
          if (btn) {  
            const row = btn.closest("[data-comp-row]");  
            if (row) row.remove();  
            queueAutosave();  
          }  
        });  
      });  
  
      // Generic autosave on all form input/change  
      form.addEventListener("input", queueAutosave);  
      form.addEventListener("change", queueAutosave);  
  
      // Restore from localStorage (also seeds default rows)  
      restoreFormFromStorage(form);  
  
      // After restore, sync interior visibility based on restored toggle  
      syncInteriorVisibility();  
  
      // Clear form button  
      if (clearFormBtn) {  
        clearFormBtn.addEventListener("click", () => {  
          if (  
            !window.confirm(  
              "Clear all repair estimate data for this form (exterior and interior)?"  
            )  
          ) {  
            return;  
          }  
  
          // Reset form fields  
          form.reset();  
  
          // Remove dynamic rows  
          $$(".repair-item", form).forEach((row) => row.remove());  
          $$("#comps_current_container [data-comp-row]").forEach((r) =>  
            r.remove()  
          );  
          $$("#comps_proposed_container [data-comp-row]").forEach((r) =>  
            r.remove()  
          );  
  
          // Reset counters  
          repairItemCounter = 0;  
          interiorRepairCounter = 0;  
          COMP_GROUPS.cur.nextId = 0;  
          COMP_GROUPS.prop.nextId = 0;  
  
          // Seed defaults again  
          createRepairItemBlock();  
          addCompRowFor("cur");  
          addCompRowFor("cur");  
          addCompRowFor("prop");  
          addCompRowFor("prop");  
  
          // Clear storage + recalc  
          localStorage.removeItem(STORAGE_KEY);  
          syncInteriorVisibility();  
          calculateTotalsAndROI();  
          if (status) status.textContent = "Form cleared.";  
        });  
      }  
  
      // Submit => Generate PDF  
      if (form) {  
        form.addEventListener("submit", async (e) => {  
          e.preventDefault();  
          if (status) {  
            status.textContent = "Generating PDF…";  
            status.setAttribute("aria-busy", "true");  
          }  
          if (btnGenerate) btnGenerate.disabled = true;  
  
          try {  
            calculateTotalsAndROI(); // make sure totals are fresh  
            await buildRepairEstimatePDF(form);  
            if (status) status.textContent = "PDF generated.";  
            // Save final state after successful generation  
            saveFormToStorage(form);  
          } catch (err) {  
            console.error(err);  
            if (status)  
              status.textContent =  
                err?.message || "Error generating PDF. See console.";  
          } finally {  
            if (status) status.setAttribute("aria-busy", "false");  
            if (btnGenerate) btnGenerate.disabled = false;  
          }  
        });  
      }  
  
      // Initial totals/ROI  
      calculateTotalsAndROI();  
    });  
  })();  
</script>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
