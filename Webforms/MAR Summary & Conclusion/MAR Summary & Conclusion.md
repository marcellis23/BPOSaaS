# MAR Summary & Conclusion  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
  <title>Market Analysis Summary Report</title>  
  
  <!-- Tailwind CSS -->  
  <script src="https://cdn.tailwindcss.com"></script>  
  
  <!-- jsPDF UMD (used in main script later) -->  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  
  <style>  
    /* Base input styling (mirrors main MAR form) */  
    .form-input {  
      margin-top: 0.25rem;  
      width: 100%;  
      border: 1px solid #d1d5db;  
      border-radius: 0.75rem;  
      padding: 0.625rem 0.75rem;  
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);  
      outline: none;  
      background: #fff;  
      font-size: 0.875rem;  
      line-height: 1.25rem;  
    }  
    .form-input:focus {  
      border-color: #3b82f6;  
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);  
    }  
  
    /* Textareas & selects share same base look */  
    .form-textarea,  
    .form-select {  
      margin-top: 0.25rem;  
      width: 100%;  
      border: 1px solid #d1d5db;  
      border-radius: 0.75rem;  
      padding: 0.625rem 0.75rem;  
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);  
      outline: none;  
      background: #fff;  
      font-size: 0.875rem;  
      line-height: 1.25rem;  
    }  
    .form-textarea {  
      min-height: 4rem;  
      resize: vertical;  
    }  
    .form-textarea:focus,  
    .form-select:focus {  
      border-color: #3b82f6;  
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);  
    }  
  
    /* Reusable card container */  
    .section-card {  
      background: #fff;  
      box-shadow:  
        0 10px 15px -3px rgb(0 0 0 / 0.1),  
        0 4px 6px -4px rgb(0 0 0 / 0.1);  
      border-radius: 1rem;  
      padding: 1.5rem;  
      border: 1px solid #f3f4f6;  
    }  
  
    /* Utility / validation helpers (shared with other forms) */  
    .hidden {  
      display: none;  
    }  
    .bg-gray-100 {  
      background: #f3f4f6 !important;  
    }  
    .bg-red-100 {  
      background: #fee2e2 !important;  
    }  
    .error-border {  
      border-color: #ef4444 !important;  
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.35) !important;  
    }  
  
    /* Character counter (shared look) */  
    .counter-wrap {  
      text-align: right;  
      font-size: 0.75rem;  
      color: #6b7280;  
      padding-right: 0.25rem;  
      margin-top: -0.125rem;  
    }  
    .counter-wrap.near-limit {  
      color: #ef4444;  
      font-weight: 500;  
    }  
  
    /* Disabled state for ARV and other locked fields */  
    .form-input:disabled,  
    .form-textarea:disabled,  
    .form-select:disabled {  
      background-color: #f3f4f6;  
      cursor: not-allowed;  
      opacity: 0.7;  
    }  
  </style>  
</head>  
  
<body class="bg-gray-50 text-gray-900 font-sans">  
  <main class="max-w-4xl mx-auto p-6 space-y-10">  
    <header class="text-center pt-4 pb-6">  
      <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900">  
        Market Analysis Summary Report  
      </h1>  
      <p class="mt-2 text-sm md:text-base text-gray-600">  
        Enter your narrative inputs to generate the Market Analysis Summary PDF.  
      </p>  
    </header>  
  
    <form id="marSummaryForm" class="space-y-10">  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
      <section class="section-card">  
        <h2 class="text-2xl font-bold text-blue-700 mb-4">Subject Property Information</h2>  
  
        <!-- Why this matters -->  
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
          <p class="font-semibold mb-1">Why this matters to you:</p>  
          <p>  
            This section anchors your analysis to a specific property. Confirming the address, basic  
            characteristics, and current condition ensures that your narrative and value conclusions  
            are clearly tied to the correct subject.  
          </p>  
        </div>  
          
        <div class="space-y-4">  
          <!-- Address / Unit -->  
          <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">  
            <label class="block sm:col-span-3">  
              <span class="block text-sm font-medium text-gray-700 mb-1">Property Address</span>  
              <input  
                name="address"  
                type="text"  
                class="form-input"  
                placeholder="123 Main St"  
                autocomplete="street-address"  
              />  
            </label>  
            <label class="block sm:col-span-1">  
              <span class="block text-sm font-medium text-gray-700 mb-1">Unit #</span>  
              <input  
                name="unit"  
                type="text"  
                class="form-input"  
                placeholder="Apt B"  
                autocomplete="address-line2"  
              />  
            </label>  
          </div>  
  
          <!-- City / State / Zip -->  
          <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">  
            <label class="block sm:col-span-3">  
              <span class="block text-sm font-medium text-gray-700 mb-1">City</span>  
              <input  
                name="city"  
                type="text"  
                class="form-input"  
                placeholder="City"  
                autocomplete="address-level2"  
              />  
            </label>  
            <label class="block sm:col-span-1">  
              <span class="block text-sm font-medium text-gray-700 mb-1">State</span>  
              <input  
                name="state"  
                type="text"  
                class="form-input"  
                placeholder="ST"  
                maxlength="2"  
                autocomplete="address-level1"  
              />  
            </label>  
            <label class="block sm:col-span-2">  
              <span class="block text-sm font-medium text-gray-700 mb-1">Zip Code</span>  
              <input  
                name="zip"  
                type="text"  
                class="form-input"  
                placeholder="12345"  
                inputmode="numeric"  
                autocomplete="postal-code"  
              />  
            </label>  
          </div>  
  
          <!-- Type / Occupancy / Condition -->  
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
            <label class="block">  
              <span class="block text-sm font-medium text-gray-700 mb-1">Property Type</span>  
              <select name="property_type" class="form-select">  
                <option value="">Select...</option>  
                <option>Single Family</option>  
                <option>Multifamily</option>  
                <option>Condo</option>  
                <option>Commercial</option>  
                <option>Land</option>  
                <option>Other</option>  
              </select>  
            </label>  
  
            <label class="block">  
              <span class="block text-sm font-medium text-gray-700 mb-1">Occupancy Status</span>  
              <select name="occupancy" class="form-select">  
                <option value="">Select...</option>  
                <option>Owner</option>  
                <option>Tenant</option>  
                <option>Vacant</option>  
              </select>  
            </label>  
  
            <label class="block">  
              <span class="block text-sm font-medium text-gray-700 mb-1">Overall Condition (Current)</span>  
              <select name="condition_current" class="form-select">  
                <option value="">Select...</option>  
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
      </section>  
  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
      <section class="section-card">  
        <h2 class="text-2xl font-bold text-blue-700 mb-4">Market Context</h2>  
  
        <!-- Why this matters -->  
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
          <p class="font-semibold mb-1">Why this matters to you:</p>  
          <p>  
            These narratives describe the broader metro and the subject’s primary market. They help  
            readers understand where the property competes, what drives demand, and how local trends  
            relate to the wider metropolitan economy.  
          </p>  
        </div>  
  
        <div class="space-y-6">  
          <!-- Broad Metro -->  
          <label class="block">  
            <span class="block text-sm font-medium text-gray-700 mb-1">  
              Broad Metropolitan Area Overview  
              <span class="text-xs text-gray-500">(1000 character limit)</span>  
            </span>  
            <textarea  
              name="broad_metro_area"  
              rows="3"  
              maxlength="1000"  
              class="form-textarea"  
            ></textarea>  
            <div class="counter-wrap" id="broad_metro_area_counter">0 / 1000</div>  
          </label>  
  
          <!-- Primary Market Summary -->  
          <label class="block">  
            <span class="block text-sm font-medium text-gray-700 mb-1">  
              Summary of the Subject Property’s Primary Market  
              <span class="text-xs text-gray-500">(1000 character limit)</span>  
            </span>  
            <textarea  
              name="primary_market_summary"  
              rows="3"  
              maxlength="1000"  
              class="form-textarea"  
            ></textarea>  
            <div class="counter-wrap" id="primary_market_summary_counter">0 / 1000</div>  
          </label>  
  
          <!-- Connection to Metro -->  
          <label class="block">  
            <span class="block text-sm font-medium text-gray-700 mb-1">  
              Primary Market’s Connection to the Broader Metropolitan Area  
              <span class="text-xs text-gray-500">(600 character limit)</span>  
            </span>  
            <textarea  
              name="primary_connection_summary"  
              rows="2"  
              maxlength="600"  
              class="form-textarea"  
            ></textarea>  
            <div class="counter-wrap" id="primary_connection_summary_counter">0 / 600</div>  
          </label>  
        </div>  
      </section>  
  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-4">Subject Analysis & Submarket</h2>  
  
  <!-- Why this matters -->  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section explains how the subject competes in its immediate market and submarket.  
      It connects property condition, pricing, and appeal to local buyer demand and the  
      surrounding inventory.  
    </p>  
  </div>  
  
  <div class="space-y-6">  
    <!-- SUBJECT CURRENT CONDITION SUMMARY -->  
    <label class="block">  
      <span class="block text-sm font-medium text-gray-700 mb-1">  
        Summary of the Subject Property (Current Condition)  
        <span class="text-xs text-gray-500">(1000 character limit)</span>  
      </span>  
      <textarea  
        name="subject_summary_current"  
        rows="3"  
        maxlength="1000"  
        class="form-textarea"  
      ></textarea>  
      <div class="counter-wrap" id="subject_summary_current_counter">0 / 1000</div>  
    </label>  
  
    <!-- SUBJECT POSITION IN PRIMARY MARKET -->  
    <label class="block">  
      <span class="block text-sm font-medium text-gray-700 mb-1">  
        Subject Property’s Position in the Primary Market  
        <span class="text-xs text-gray-500">(600 character limit)</span>  
      </span>  
      <textarea  
        name="subject_position_primary"  
        rows="2"  
        maxlength="600"  
        class="form-textarea"  
      ></textarea>  
      <div class="counter-wrap" id="subject_position_primary_counter">0 / 600</div>  
    </label>  
  
    <!-- SUBMARKET BLOCK -->  
    <div class="pt-6 border-t border-gray-200">  
      <h3 class="text-lg font-bold text-gray-800 mb-4">Submarket</h3>  
  
      <!-- SUBMARKET SUMMARY -->  
      <label class="block mb-6">  
        <span class="block text-sm font-medium text-gray-700 mb-1">  
          Summary of the Subject Property’s Submarket  
          <span class="text-xs text-gray-500">(1000 character limit)</span>  
        </span>  
        <textarea  
          name="submarket_summary"  
          rows="3"  
          maxlength="1000"  
          class="form-textarea"  
        ></textarea>  
        <div class="counter-wrap" id="submarket_summary_counter">0 / 1000</div>  
      </label>  
  
      <!-- SUBMARKET POSITION + PRICE RANGE -->  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">  
        <!-- POSITIONING DROPDOWN -->  
        <label class="block">  
          <span class="block text-sm font-medium text-gray-700 mb-1">  
            Subject Property Position in Submarket  
          </span>  
          <select name="subject_position_tier" class="form-select">  
            <option value="">Select Positioning...</option>  
            <option value="High Positioning">High Positioning</option>  
            <option value="Average Positioning">Average Positioning</option>  
            <option value="Low Positioning">Low Positioning</option>  
          </select>  
        </label>  
  
        <!-- PRICE RANGE -->  
        <div class="block">  
          <span class="block text-sm font-medium text-gray-700 mb-1">Estimated Price Range</span>  
          <div class="grid grid-cols-2 gap-2">  
            <input  
              name="price_low"  
              type="number"  
              inputmode="numeric"  
              class="form-input"  
              placeholder="Low ($)"  
            />  
            <input  
              name="price_high"  
              type="number"  
              inputmode="numeric"  
              class="form-input"  
              placeholder="High ($)"  
            />  
          </div>  
        </div>  
      </div>  
  
      <!-- POSITIONING SUMMARY -->  
      <label class="block">  
        <span class="block text-sm font-medium text-gray-700 mb-1">  
          Summary of Subject’s Position in the Submarket  
          <span class="text-xs text-gray-500">(600 character limit)</span>  
        </span>  
        <textarea  
          name="subject_position_submarket"  
          rows="3"  
          maxlength="600"  
          class="form-textarea"  
          placeholder="Explain how the subject competes, including price, condition, and appeal..."  
        ></textarea>  
        <div class="counter-wrap" id="subject_position_submarket_counter">0 / 600</div>  
      </label>  
    </div>  
  </div>  
</section>  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-2xl font-bold text-blue-700 mb-4">Review Purpose & History</h2>  
  
  <!-- Why this matters -->  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section clarifies why the review is being completed and how the subject’s past  
      sales and listing activity relate to today’s pricing decisions and risk profile.  
    </p>  
  </div>  
  
  <div class="space-y-6">  
    <!-- REVIEW PURPOSE -->  
    <label class="block">  
      <span class="block text-sm font-medium text-gray-700 mb-1">Review Purpose</span>  
      <select name="review_purpose" class="form-select">  
        <option value="">Select Purpose...</option>  
        <option>Pre-Listing Review</option>  
        <option>Active Listing – Offer Review</option>  
        <option>Due Diligence – Offer Review</option>  
        <option>Off Market – Offer Review</option>  
        <option>Off Market – Tax Assessment Review</option>  
        <option>Off Market – Insurance Review</option>  
        <option>Off Market – Other Review</option>  
      </select>  
    </label>  
  
    <!-- REVIEW OBJECTIVE -->  
    <label class="block">  
      <span class="block text-sm font-medium text-gray-700 mb-1">  
        Briefly Describe the Review Objective  
        <span class="text-xs text-gray-500">(600 character limit)</span>  
      </span>  
      <textarea  
        name="review_objective"  
        rows="2"  
        maxlength="600"  
        class="form-textarea"  
      ></textarea>  
      <div class="counter-wrap" id="review_objective_counter">0 / 600</div>  
    </label>  
  
    <!-- HISTORY SUMMARY -->  
    <label class="block">  
      <span class="block text-sm font-medium text-gray-700 mb-1">  
        Summary of the Subject Property’s Sales/Listing History  
        <span class="text-xs text-gray-500">(1000 character limit)</span>  
      </span>  
      <textarea  
        name="history_summary"  
        rows="3"  
        maxlength="1000"  
        class="form-textarea"  
      ></textarea>  
      <div class="counter-wrap" id="history_summary_counter">0 / 1000</div>  
    </label>  
  
    <!-- REVIEW POSITIONING -->  
    <label class="block">  
      <span class="block text-sm font-medium text-gray-700 mb-1">  
        Review (Price / Offer / Listing) Position in the Submarket  
        <span class="text-xs text-gray-500">(600 character limit)</span>  
      </span>  
      <textarea  
        name="review_position_submarket"  
        rows="2"  
        maxlength="600"  
        class="form-textarea"  
      ></textarea>  
      <div class="counter-wrap" id="review_position_submarket_counter">0 / 600</div>  
    </label>  
  </div>  
</section>  
  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card border-l-4 border-blue-500">  
  <div class="flex items-center justify-between mb-6">  
    <h2 class="text-2xl font-bold text-blue-700">After Repair Condition Assessment</h2>  
    <div class="flex items-center">  
      <input  
        id="arv_toggle"  
        name="arv_active"  
        type="checkbox"  
        class="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"  
      />  
      <label for="arv_toggle" class="ml-2 text-sm text-gray-700 font-medium">  
        Perform After Repair Assessment?  
      </label>  
    </div>  
  </div>  
  
  <!-- Why this matters -->  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section estimates how targeted repairs and improvements could reposition the property,  
      affect its price range, and potentially shift it into a different, stronger submarket.  
    </p>  
  </div>  
  
  <div  
    id="arv_container"  
    class="space-y-6 opacity-50 pointer-events-none transition-opacity duration-200"  
  >  
    <!-- REPAIRS / IMPROVEMENTS SUMMARY -->  
    <label class="block">  
      <span class="block text-sm font-medium text-gray-700 mb-1">  
        Summary of Estimated Repairs / Improvements / Alterations / Development  
        <span class="text-xs text-gray-500">(1000 character limit)</span>  
      </span>  
      <textarea  
        name="arv_repairs_summary"  
        rows="3"  
        maxlength="1000"  
        class="form-textarea"  
        disabled  
      ></textarea>  
      <div class="counter-wrap" id="arv_repairs_summary_counter">0 / 1000</div>  
    </label>  
  
    <!-- SUBMARKET CHANGE QUESTION -->  
    <label class="block">  
      <span class="block text-sm font-medium text-gray-700 mb-1">  
        Do the Proposed Improvements Change the Subject’s Submarket?  
      </span>  
      <select  
        id="arv_change_submarket"  
        name="arv_change_submarket"  
        class="form-select"  
        disabled  
      >  
        <option value="">Select...</option>  
        <option value="Yes">Yes</option>  
        <option value="No">No</option>  
      </select>  
    </label>  
  
    <div class="pt-4 border-t border-gray-200">  
      <!-- SUBJECT ARV SUMMARY -->  
      <label class="block mb-4">  
        <span class="block text-sm font-medium text-gray-700 mb-1">  
          Summary of the Subject Property (After Repair Condition)  
          <span class="text-xs text-gray-500">(1000 character limit)</span>  
        </span>  
        <textarea  
          name="arv_subject_summary"  
          rows="3"  
          maxlength="1000"  
          class="form-textarea"  
          disabled  
        ></textarea>  
        <div class="counter-wrap" id="arv_subject_summary_counter">0 / 1000</div>  
      </label>  
  
      <!-- SUBJECT POSITION IN PRIMARY MARKET (ARV) -->  
      <label class="block mb-6">  
        <span class="block text-sm font-medium text-gray-700 mb-1">  
          Subject Property’s Position in the Primary Market (After Repair)  
          <span class="text-xs text-gray-500">(600 character limit)</span>  
        </span>  
        <textarea  
          name="arv_position_primary"  
          rows="2"  
          maxlength="600"  
          class="form-textarea"  
          disabled  
        ></textarea>  
        <div class="counter-wrap" id="arv_position_primary_counter">0 / 600</div>  
      </label>  
  
      <!-- ARV SUBMARKET ANALYSIS -->  
      <div class="pt-6 border-t border-gray-200">  
        <h3 class="text-lg font-bold text-gray-800 mb-4">ARV Submarket Analysis</h3>  
  
        <!-- NEW SUBMARKET SUMMARY (IF CHANGED) -->  
        <div id="arv_new_submarket_block" class="hidden mb-6">  
          <label class="block">  
            <span class="block text-sm font-medium text-gray-700 mb-1">  
              Summary of the New Submarket (Required if Submarket Changes)  
              <span class="text-xs text-gray-500">(1000 character limit)</span>  
            </span>  
            <textarea  
              name="arv_new_submarket_summary"  
              rows="3"  
              maxlength="1000"  
              class="form-textarea"  
              disabled  
            ></textarea>  
            <div class="counter-wrap" id="arv_new_submarket_summary_counter">0 / 1000</div>  
          </label>  
        </div>  
  
        <!-- ARV POSITION + PRICE RANGE -->  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">  
          <!-- POSITIONING DROPDOWN -->  
          <label class="block">  
            <span class="block text-sm font-medium text-gray-700 mb-1">  
              Subject Property Position in Submarket (ARV)  
            </span>  
            <select  
              name="arv_position_tier"  
              class="form-select"  
              disabled  
            >  
              <option value="">Select Positioning...</option>  
              <option value="High Positioning">High Positioning</option>  
              <option value="Average Positioning">Average Positioning</option>  
              <option value="Low Positioning">Low Positioning</option>  
            </select>  
          </label>  
  
          <!-- ARV PRICE RANGE -->  
          <div class="block">  
            <span class="block text-sm font-medium text-gray-700 mb-1">  
              Estimated Price Range (ARV)  
            </span>  
            <div class="grid grid-cols-2 gap-2">  
              <input  
                name="arv_price_low"  
                type="number"  
                inputmode="numeric"  
                class="form-input"  
                placeholder="Low ($)"  
                disabled  
              />  
              <input  
                name="arv_price_high"  
                type="number"  
                inputmode="numeric"  
                class="form-input"  
                placeholder="High ($)"  
                disabled  
              />  
            </div>  
          </div>  
        </div>  
  
        <!-- SUMMARY OF ARV POSITIONING -->  
        <label class="block">  
          <span class="block text-sm font-medium text-gray-700 mb-1">  
            Summary of the Subject’s Position in the Submarket (ARV)  
            <span class="text-xs text-gray-500">(600 character limit)</span>  
          </span>  
          <textarea  
            name="arv_position_submarket"  
            rows="3"  
            maxlength="600"  
            class="form-textarea"  
            placeholder="Explain the ARV positioning, including expected competitive set, buyer pool, and price tier..."  
            disabled  
          ></textarea>  
          <div class="counter-wrap" id="arv_position_submarket_counter">0 / 600</div>  
        </label>  
      </div>  
    </div>  
  </div>  
</section>  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
      <section class="section-card">  
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">  
          <button  
            type="button"  
            id="clearFormBtn"  
            class="px-4 py-2 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"  
          >  
            Clear Form  
          </button>  
  
          <button  
            type="button"  
            id="generatePdfBtn"  
            class="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"  
          >  
            Generate PDF  
          </button>  
        </div>  
  
        <!-- Status / message box (shared style with other forms) -->  
        <div  
          id="statusBox"  
          class="mt-4 text-sm rounded-xl px-3 py-2 border hidden"  
        ></div>  
      </section>  
  
    </form>  
  </main>  
  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
  /* ==========================================  
     1. jsPDF Initialization  
     ========================================== */  
  if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
    window.jsPDF = window.jspdf.jsPDF;  
  }  
  
  (function () {  
    "use strict";  
  
    /* ==========================================  
       2. Globals & Helpers  
       ========================================== */  
    const STORAGE_KEY = "MAR_SUMMARY_FINAL";  
    let autosaveTimer = null;  
    let statusTimer = null;  
  
    function $(id) {  
      return document.getElementById(id);  
    }  
  
    // Simple money formatter for display in PDF  
    function formatMoney(value) {  
      const n = Number(value);  
      if (!isFinite(n) || n === 0) return "$0";  
      return `$${n.toLocaleString("en-US", { maximumFractionDigits: 0 })}`;  
    }  
  
    // Helper to display status messages  
    // type: "success" | "error" | "warning" | anything else (info)  
    function showStatus(message, type) {  
      const box = $("statusBox");  
      if (!box) return;  
  
      // Clear any existing hide timer  
      if (statusTimer) {  
        clearTimeout(statusTimer);  
        statusTimer = null;  
      }  
  
      if (!message) {  
        box.textContent = "";  
        box.classList.add("hidden");  
        return;  
      }  
  
      box.textContent = message;  
  
      let styleClasses = "";  
      switch (type) {  
        case "success":  
          styleClasses = "bg-green-50 text-green-800 border-green-200";  
          break;  
        case "error":  
          styleClasses = "bg-red-50 text-red-800 border-red-200";  
          break;  
        case "warning":  
          styleClasses = "bg-yellow-50 text-yellow-800 border-yellow-200";  
          break;  
        default:  
          styleClasses = "bg-blue-50 text-blue-800 border-blue-200";  
          break;  
      }  
  
      box.className =  
        "mt-4 text-sm rounded-xl border px-3 py-2 " + styleClasses;  
      box.classList.remove("hidden");  
  
      // Auto-hide after 3 seconds  
      statusTimer = setTimeout(() => {  
        box.classList.add("hidden");  
      }, 3000);  
    }  
  
    /* ==========================================  
       3. Form Data Handling (Save/Load)  
       ========================================== */  
    function collectFormData(form) {  
      const data = {};  
      Array.from(form.elements).forEach((el) => {  
        if (!el.name) return;  
        if (el.type === "checkbox") {  
          data[el.name] = el.checked;  
        } else {  
          data[el.name] = el.value;  
        }  
      });  
      return data;  
    }  
  
    function restoreFormData(form, saved) {  
      if (!saved) return;  
      Object.keys(saved).forEach((name) => {  
        const el = form.elements[name];  
        if (!el) return;  
  
        // In this form everything is single-element per name (no radios),  
        // so we can safely set the value directly.  
        if (el.type === "checkbox") {  
          el.checked = !!saved[name];  
        } else {  
          el.value = saved[name];  
        }  
      });  
    }  
  
    function saveToStorage(form) {  
      try {  
        const data = collectFormData(form);  
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));  
      } catch (e) {  
        console.error("Autosave failed", e);  
      }  
    }  
  
    /* ==========================================  
       4. Visibility Logic (ARV & Submarket)  
       ========================================== */  
  
    // Toggles the entire ARV section based on the checkbox  
    function updateArvState() {  
      const toggle = $("arv_toggle");  
      const container = $("arv_container");  
      if (!toggle || !container) return;  
  
      const inputs = container.querySelectorAll("input, select, textarea");  
  
      if (toggle.checked) {  
        // Enable  
        container.classList.remove("opacity-50", "pointer-events-none");  
        inputs.forEach((el) => (el.disabled = false));  
        // Re-run submarket check to see if the inner block should be shown  
        updateSubmarketChangeVisibility();  
      } else {  
        // Disable  
        container.classList.add("opacity-50", "pointer-events-none");  
        inputs.forEach((el) => (el.disabled = true));  
        // Visually hide the inner "New Submarket" block regardless of select value  
        const subBlock = $("arv_new_submarket_block");  
        if (subBlock) subBlock.classList.add("hidden");  
      }  
    }  
  
    // Toggles the "New Submarket Summary" textarea based on "Yes" selection  
    function updateSubmarketChangeVisibility() {  
      const select = $("arv_change_submarket");  
      const block = $("arv_new_submarket_block");  
      if (!select || !block) return;  
  
      // Only show if ARV is active (not disabled) AND value is "Yes"  
      if (select.value === "Yes" && !select.disabled) {  
        block.classList.remove("hidden");  
      } else {  
        block.classList.add("hidden");  
      }  
    }  
  
    /* ==========================================  
       5. PDF Generation  
       ========================================== */  
    function generatePdf(form) {  
      if (!window.jsPDF) {  
        showStatus("PDF library not loaded.", "error");  
        return;  
      }  
  
      try {  
        const doc = new window.jsPDF({  
          orientation: "p",  
          unit: "pt",  
          format: "letter",  
        });  
  
        const data = collectFormData(form);  
  
        let y = 50;  
        const left = 40;  
        const rightLimit = 550; // Text wrapping width  
        const lineHeight = 12;  
  
        // --- Helper: Add a titled block of text ---  
        function addBlock(title, content, extraGap = 15) {  
          // Check page break before starting block  
          if (y > 700) {  
            doc.addPage();  
            y = 50;  
          }  
  
          doc.setFont("helvetica", "bold");  
          doc.setFontSize(10);  
          doc.text(title, left, y);  
          y += lineHeight;  
  
          doc.setFont("helvetica", "normal");  
          const text = content && String(content).trim().length ? content : "N/A";  
          const lines = doc.splitTextToSize(text, rightLimit);  
  
          lines.forEach((line) => {  
            // Check page break inside text  
            if (y > 750) {  
              doc.addPage();  
              y = 50;  
            }  
            doc.text(line, left, y);  
            y += lineHeight;  
          });  
  
          y += extraGap;  
        }  
  
        // --- Helper: Add Section Header ---  
        function addSectionHeader(text) {  
          if (y > 700) {  
            doc.addPage();  
            y = 50;  
          }  
          doc.setFont("helvetica", "bold");  
          doc.setFontSize(12);  
          doc.setTextColor(30, 64, 175); // Blue-800  
          doc.text(text, left, y);  
          doc.setTextColor(0, 0, 0); // Reset to black  
          y += 20;  
        }  
  
        // ================= HEADER =================  
        doc.setFontSize(18);  
        doc.setFont("helvetica", "bold");  
        doc.text("Market Analysis Summary Report", left, y);  
        y += 30;  
  
        // ================= SECTION 1 =================  
        addSectionHeader("1. Subject Property Information");  
  
        doc.setFontSize(10);  
        doc.setFont("helvetica", "bold");  
        const addressStr = [data.address, data.unit ? `Unit ${data.unit}` : ""]  
          .filter(Boolean)  
          .join(", ");  
  
        const cityStr = [data.city, data.state, data.zip]  
          .filter(Boolean)  
          .join(", ");  
  
        doc.text(`Address: ${addressStr || "N/A"}`, left, y);  
        y += lineHeight;  
        doc.text(`Location: ${cityStr || "N/A"}`, left, y);  
        y += lineHeight + 5;  
  
        // Single line details  
        doc.setFont("helvetica", "normal");  
        const details = `Type: ${data.property_type || "-"}  |  Occupancy: ${  
          data.occupancy || "-"  
        }  |  Condition: ${data.condition_current || "-"}`;  
        doc.text(details, left, y);  
        y += 25;  
  
        // ================= SECTION 2 =================  
        addSectionHeader("2. Market Context");  
        addBlock("Broad Metropolitan Area:", data.broad_metro_area);  
        addBlock("Primary Market Summary:", data.primary_market_summary);  
        addBlock("Connection to Broad Metro:", data.primary_connection_summary);  
  
        // ================= SECTION 3 =================  
        if (y > 600) {  
          doc.addPage();  
          y = 50;  
        }  
        addSectionHeader("3. Subject Analysis & Submarket");  
  
        addBlock(  
          "Subject Property (Current Condition):",  
          data.subject_summary_current  
        );  
        addBlock("Position in Primary Market:", data.subject_position_primary);  
        addBlock("Submarket Summary:", data.submarket_summary);  
  
        // Tier & Price Line  
        if (y > 720) {  
          doc.addPage();  
          y = 50;  
        }  
        doc.setFont("helvetica", "bold");  
        const tier = data.subject_position_tier || "(Not Selected)";  
        const price = `${formatMoney(data.price_low)} - ${formatMoney(  
          data.price_high  
        )}`;  
        doc.text(`Positioning: ${tier}   |   Price Range: ${price}`, left, y);  
        y += lineHeight + 5;  
  
        // Narrative  
        addBlock(  
          "Position in Submarket (Narrative):",  
          data.subject_position_submarket  
        );  
  
        // ================= SECTION 4 =================  
        if (y > 600) {  
          doc.addPage();  
          y = 50;  
        }  
        addSectionHeader("4. Review Purpose & History");  
  
        doc.setFont("helvetica", "bold");  
        doc.text(  
          `Review Purpose: ${data.review_purpose || "N/A"}`,  
          left,  
          y  
        );  
        y += lineHeight + 10;  
  
        addBlock("Review Objective:", data.review_objective);  
        addBlock("Sales/Listing History:", data.history_summary);  
        addBlock("Review Position in Submarket:", data.review_position_submarket);  
  
        // ================= SECTION 5 (ARV) =================  
        if (data.arv_active) {  
          if (y > 500) {  
            doc.addPage();  
            y = 50;  
          }  
          addSectionHeader("5. After Repair Condition Assessment");  
  
          addBlock(  
            "Proposed Repairs/Improvements:",  
            data.arv_repairs_summary  
          );  
  
          // Change Submarket?  
          doc.setFont("helvetica", "bold");  
          doc.text(  
            `Changes Submarket? ${data.arv_change_submarket || "No"}`,  
            left,  
            y  
          );  
          y += lineHeight + 10;  
  
          addBlock(  
            "Subject Property (After Repair):",  
            data.arv_subject_summary  
          );  
          addBlock(  
            "Position in Primary Market (After Repair):",  
            data.arv_position_primary  
          );  
  
          // Conditional New Submarket  
          if (data.arv_change_submarket === "Yes") {  
            addBlock(  
              "New ARV Submarket Summary:",  
              data.arv_new_submarket_summary  
            );  
          }  
  
          // ARV Tier & Price  
          if (y > 720) {  
            doc.addPage();  
            y = 50;  
          }  
          doc.setFont("helvetica", "bold");  
          const arvTier = data.arv_position_tier || "(Not Selected)";  
          const arvPrice = `${formatMoney(  
            data.arv_price_low  
          )} - ${formatMoney(data.arv_price_high)}`;  
          doc.text(  
            `ARV Positioning: ${arvTier}   |   ARV Price Range: ${arvPrice}`,  
            left,  
            y  
          );  
          y += lineHeight + 5;  
  
          // ARV Narrative  
          addBlock(  
            "Position in Submarket (ARV Narrative):",  
            data.arv_position_submarket  
          );  
        }  
  
        doc.save("MAR_Summary_Report.pdf");  
        showStatus("PDF generated successfully.", "success");  
      } catch (err) {  
        console.error("PDF Generation Error: ", err);  
        showStatus("Error generating PDF.", "error");  
      }  
    }  
  
    /* ==========================================  
       6. Initialization & Event Listeners  
       ========================================== */  
    document.addEventListener("DOMContentLoaded", function () {  
      const form = $("marSummaryForm");  
      if (!form) return;  
  
      // 1. Restore Data  
      const savedData = localStorage.getItem(STORAGE_KEY);  
      if (savedData) {  
        try {  
          restoreFormData(form, JSON.parse(savedData));  
        } catch (e) {  
          console.error("Error parsing saved data", e);  
        }  
      }  
  
      // 2. Initial UI State  
      updateArvState();  
  
      // 3. Character counters  
      function initCharCounter(fieldName, max) {  
        const field = form.elements[fieldName];  
        const counter = $(`${fieldName}_counter`);  
        if (!field || !counter) return;  
  
        const update = () => {  
          const len = field.value ? field.value.length : 0;  
          counter.textContent = `${len} / ${max}`;  
          if (len >= max * 0.9) {  
            counter.classList.add("near-limit");  
          } else {  
            counter.classList.remove("near-limit");  
          }  
        };  
  
        field.addEventListener("input", update);  
        update(); // initialize with current value  
      }  
  
      // Attach counters for all limited textareas  
      initCharCounter("broad_metro_area", 1000);  
      initCharCounter("primary_market_summary", 1000);  
      initCharCounter("primary_connection_summary", 600);  
  
      initCharCounter("subject_summary_current", 1000);  
      initCharCounter("subject_position_primary", 600);  
      initCharCounter("submarket_summary", 1000);  
      initCharCounter("subject_position_submarket", 600);  
  
      initCharCounter("review_objective", 600);  
      initCharCounter("history_summary", 1000);  
      initCharCounter("review_position_submarket", 600);  
  
      initCharCounter("arv_repairs_summary", 1000);  
      initCharCounter("arv_subject_summary", 1000);  
      initCharCounter("arv_position_primary", 600);  
      initCharCounter("arv_new_submarket_summary", 1000);  
      initCharCounter("arv_position_submarket", 600);  
  
      // 4. Event: ARV Checkbox Toggle  
      const arvToggle = $("arv_toggle");  
      if (arvToggle) {  
        arvToggle.addEventListener("change", function () {  
          updateArvState();  
          saveToStorage(form);  
        });  
      }  
  
      // 5. Event: Submarket Change Select  
      const submarketSelect = $("arv_change_submarket");  
      if (submarketSelect) {  
        submarketSelect.addEventListener("change", function () {  
          updateSubmarketChangeVisibility();  
          saveToStorage(form);  
        });  
      }  
  
      // 6. Event: Autosave on Input  
      form.addEventListener("input", function () {  
        if (autosaveTimer) clearTimeout(autosaveTimer);  
        autosaveTimer = setTimeout(() => {  
          saveToStorage(form);  
        }, 1000); // 1 second debounce  
      });  
  
      // 7. Event: Clear Form  
      const clearBtn = $("clearFormBtn");  
      if (clearBtn) {  
        clearBtn.addEventListener("click", function () {  
          if (confirm("Are you sure you want to clear all data?")) {  
            form.reset();  
            localStorage.removeItem(STORAGE_KEY);  
            updateArvState(); // Reset UI visibility  
            showStatus("Form cleared.", "warning");  
  
            // Re-sync counters after reset  
            [  
              ["broad_metro_area", 1000],  
              ["primary_market_summary", 1000],  
              ["primary_connection_summary", 600],  
              ["subject_summary_current", 1000],  
              ["subject_position_primary", 600],  
              ["submarket_summary", 1000],  
              ["subject_position_submarket", 600],  
              ["review_objective", 600],  
              ["history_summary", 1000],  
              ["review_position_submarket", 600],  
              ["arv_repairs_summary", 1000],  
              ["arv_subject_summary", 1000],  
              ["arv_position_primary", 600],  
              ["arv_new_submarket_summary", 1000],  
              ["arv_position_submarket", 600],  
            ].forEach(([name, max]) => {  
              const field = form.elements[name];  
              const counter = $(`${name}_counter`);  
              if (field && counter) {  
                counter.textContent = `0 / ${max}`;  
                counter.classList.remove("near-limit");  
              }  
            });  
          }  
        });  
      }  
  
      // 8. Event: Generate PDF  
      const pdfBtn = $("generatePdfBtn");  
      if (pdfBtn) {  
        pdfBtn.addEventListener("click", function () {  
          // Save latest state before generating  
          saveToStorage(form);  
          generatePdf(form);  
        });  
      }  
    });  
  })();  
</script>  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
  
<!-- wp:paragraph -->  
<p></p>  
<!-- /wp:paragraph -->  
