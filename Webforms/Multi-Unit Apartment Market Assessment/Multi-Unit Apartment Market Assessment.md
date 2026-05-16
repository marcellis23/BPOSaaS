# Multi-Unit Apartment Market Assessment  
<!-- wp:html -->  
<!-- =========================  
     SECTION 1: LIBRARIES & STYLES  
     ========================= -->  
<!-- Tailwind (utility classes) -->  
<script src="https://cdn.tailwindcss.com"></script>  
  
<!-- jsPDF (PDF generation) -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  
<!-- Shared styles (aligned with Market Analysis Report) -->  
<style>  
  /* Base form control (matches MAR .form-input) */  
  .form-input,  
  .input,  
  .select,  
  .textarea {  
    margin-top: .25rem;  
    width: 100%;  
    border: 1px solid #d1d5db;  
    border-radius: .75rem;  
    padding: .625rem .75rem;  
    box-shadow: 0 1px 2px rgba(0,0,0,.03);  
    outline: none;  
    background: #fff;  
    font-size: 0.875rem;  
  }  
  
  .form-input:focus,  
  .input:focus,  
  .select:focus,  
  .textarea:focus {  
    border-color: #3b82f6;  
    box-shadow: 0 0 0 3px rgba(59,130,246,.2);  
  }  
  
  /* Section card (matches MAR) */  
  .section-card {  
    background: #fff;  
    box-shadow:  
      0 10px 15px -3px rgb(0 0 0 / 0.1),  
      0 4px 6px -4px rgb(0 0 0 / 0.1);  
    border-radius: 1rem;  
    padding: 1.5rem;  
    border: 1px solid #f3f4f6;  
  }  
  
  /* Utility visibility & background helpers (from MAR) */  
  .hidden {  
    display: none;  
  }  
  
  .bg-gray-100 {  
    background: #f3f4f6 !important;  
  }  
  
  .bg-red-100 {  
    background: #fee2e2 !important;  
  }  
  
  /* Error highlighting (from MAR) */  
  .error-border {  
    border-color: #ef4444 !important;  
    box-shadow: 0 0 0 2px rgba(239,68,68,.35) !important;  
  }  
  
  /* Label helper – works alongside Tailwind label patterns */  
  .label {  
    display: block;  
    font-size: 0.875rem;  
    font-weight: 500;  
    color: #374151; /* gray-700 */  
    margin-bottom: 0.25rem;  
  }  
  
  /* Character counter (aligned with MAR .counter-wrap) */  
  .counter-wrap,  
  .hint {  
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
  
  /* Remove number spinner for cleaner UI */  
  input[type="number"]::-webkit-inner-spin-button,  
  input[type="number"]::-webkit-outer-spin-button {  
    -webkit-appearance: none;  
    margin: 0;  
  }  
</style>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- =========================   
     SECTION: SUBJECT PROPERTY OVERVIEW  
     ========================= -->  
<main class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">  
  <!-- HEADER -->  
  <header class="text-center pt-4 pb-6 space-y-1">  
    <h1 class="text-3xl font-extrabold text-gray-800">  
      Multi-Unit Apartment Market Assessment  
    </h1>  
    <p class="text-sm text-gray-600">  
      Enter key subject property details to support your market and rental analysis.  
    </p>  
  </header>  
  
  <form id="assessmentForm" class="space-y-8">  
    <section id="subject-property-overview" class="section-card space-y-6">  
      <div class="flex flex-col gap-1">  
        <h2 class="text-2xl font-bold text-blue-700">  
          Subject Property Overview  
        </h2>  
        <p class="text-sm text-gray-600">  
          Identify the subject’s location, basic characteristics, and current occupancy profile.  
        </p>  
      </div>  
  
      <div class="grid grid-cols-1 sm:grid-cols-6 gap-4">  
        <!-- Property Address (4) + Unit (2) -->  
        <label class="block sm:col-span-4">  
          <span class="block text-sm font-medium text-gray-700">  
            Property Address  
          </span>  
          <input  
            type="text"  
            name="address"  
            class="form-input"  
            placeholder="123 Main St"  
            autocomplete="street-address"  
            required  
          >  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium text-gray-700">  
            Unit  
          </span>  
          <input  
            type="text"  
            name="unit"  
            class="form-input"  
            placeholder="Apt 1"  
            autocomplete="address-line2"  
          >  
        </label>  
  
        <!-- City (2) + State (2) + Zip (2) -->  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium text-gray-700">  
            City  
          </span>  
          <input  
            type="text"  
            name="city"  
            class="form-input"  
            autocomplete="address-level2"  
            required  
          >  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium text-gray-700">  
            State  
          </span>  
          <input  
            type="text"  
            name="state"  
            class="form-input"  
            placeholder="PA"  
            autocomplete="address-level1"  
            maxlength="2"  
            required  
          >  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium text-gray-700">  
            Zip Code  
          </span>  
          <input  
            type="text"  
            name="zip"  
            class="form-input"  
            placeholder="19140"  
            autocomplete="postal-code"  
            inputmode="numeric"  
            pattern="\d{5}"  
            required  
          >  
        </label>  
  
        <!-- Property Type (2) + Overall Condition (2) + Subject Occupancy Status (2) -->  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium text-gray-700">  
            Property Type  
          </span>  
          <select  
            name="property_type"  
            class="form-input"  
            required  
          >  
            <option value="">Select...</option>  
            <option value="Triplex">Triplex</option>  
            <option value="Quadruplex">Quadruplex</option>  
            <option value="5+ Unit Apartment">5+ Unit Apartment</option>  
            <option value="Mixed-Use">Mixed-Use</option>  
            <option value="Other">Other</option>  
          </select>  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium text-gray-700">  
            Overall Condition  
          </span>  
          <select  
            name="overall_condition"  
            class="form-input"  
            required  
          >  
            <option value="">Select...</option>  
            <option value="Not Rentable">Not Rentable</option>  
            <option value="Fair">Fair</option>  
            <option value="Average">Average</option>  
            <option value="Good">Good</option>  
            <option value="Excellent">Excellent</option>  
          </select>  
        </label>  
  
        <label class="block sm:col-span-2">  
          <span class="block text-sm font-medium text-gray-700">  
            Subject Occupancy Status  
          </span>  
          <select  
            name="occupancy_status"  
            class="form-input"  
            required  
          >  
            <option value="">Select...</option>  
            <option value="Vacant">Vacant</option>  
            <option value="Partially Occupied">Partially Occupied</option>  
            <option value="Fully Occupied">Fully Occupied</option>  
          </select>  
        </label>  
  
        <!-- Summary Description -->  
        <label class="block sm:col-span-6">  
          <span class="block text-sm font-medium text-gray-700">  
            Summary Description of the Subject Property  
          </span>  
          <textarea  
            name="property_summary"  
            rows="4"  
            maxlength="1000"  
            class="form-input"  
            aria-describedby="property_summary_count"  
          ></textarea>  
          <div class="counter-wrap text-xs text-gray-500 text-right mt-1">  
            <span id="property_summary_count">0</span>/1000  
          </div>  
        </label>  
  
        <!-- NEW: Summary Description of Proposed Repairs -->  
        <div class="sm:col-span-6 space-y-2">  
          <!-- Checkbox row -->  
          <div class="flex items-start gap-2">  
            <input  
              id="skip_proposed_repairs"  
              name="skip_proposed_repairs"  
              type="checkbox"  
              class="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"  
            >  
            <label for="skip_proposed_repairs" class="text-sm text-gray-700">  
              <span class="font-medium">Skip Proposed Repairs Summary</span><br>  
              <span class="text-gray-500 text-xs">  
                Check this box if no repairs are proposed or if a separate repair schedule will be attached.  
              </span>  
            </label>  
          </div>  
  
          <!-- Textarea -->  
          <label class="block">  
            <span class="block text-sm font-medium text-gray-700">  
              Summary Description of Proposed Repairs  
            </span>  
            <textarea  
              name="proposed_repairs_summary"  
              rows="4"  
              maxlength="1000"  
              class="form-input"  
              aria-describedby="proposed_repairs_summary_count"  
            ></textarea>  
            <div class="counter-wrap text-xs text-gray-500 text-right mt-1">  
              <span id="proposed_repairs_summary_count">0</span>/1000  
            </div>  
          </label>  
        </div>  
      </div>  
    </section>  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="subject-unit-mix-current" class="section-card space-y-6">  
  <div class="flex flex-col gap-1">  
    <h2 class="text-2xl font-bold text-blue-700">  
      Subject Property Unit Mix & Condition (Current)  
    </h2>  
    <p class="text-sm text-gray-600">  
      Document the subject’s current unit configuration, condition, and pricing details.  
    </p>  
  </div>  
  
  <div id="current_units_container" class="space-y-6"></div>  
  
  <button  
    type="button"  
    id="addCurrentUnitBtn"  
    data-add-unit="current"  
    class="w-full py-3 mt-2 border-2 border-dashed border-blue-300 text-blue-600 rounded-xl hover:bg-blue-50 font-semibold text-sm tracking-wide uppercase transition-colors"  
  >  
    + Add Unit Type (Current)  
  </button>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="subject-total-rent-current" class="section-card space-y-3">  
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">  
    <div>  
      <h2 class="text-lg font-semibold text-gray-800">  
        Total Estimated Rent (Current)  
      </h2>  
      <p class="text-xs text-gray-600">  
        Sum of all current unit types and rent levels entered above.  
      </p>  
    </div>  
  </div>  
  
  <div class="bg-gray-100 p-4 rounded-xl flex items-center justify-between border border-gray-200">  
    <span class="font-bold text-gray-700">  
      Total Estimated Rent (Current):  
    </span>  
    <div class="flex items-baseline gap-2">  
      <span class="font-bold text-xl text-blue-800" id="display_total_current_rent">$0.00</span>  
      <input type="hidden" name="total_current_rent" id="input_total_current_rent" value="0">  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="subject-unit-mix-arv" class="section-card space-y-6">  
  <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">  
    <div>  
      <h2 class="text-2xl font-bold text-blue-700">  
        Subject Property After Repair Unit Mix & Rent Potential  
      </h2>  
      <p class="text-sm text-gray-600">  
        Outline the projected unit mix and stabilized market rents after repairs.  
      </p>  
    </div>  
  
    <label class="inline-flex items-center gap-2 mt-2 sm:mt-0 cursor-pointer">  
      <input type="checkbox" id="skip_arv" class="h-4 w-4 text-red-600 border-gray-300 rounded">  
      <span class="text-sm text-gray-700">Skip ARV Assessment</span>  
    </label>  
  </div>  
  
  <div id="arv_content" class="space-y-8 transition-all duration-300">  
    <div id="skip_arv_explanation" class="hidden">  
      <label class="block">  
        <span class="block text-sm font-medium text-gray-700">Please Explain Why Skipped</span>  
        <textarea name="skip_arv_reason" rows="2" maxlength="300" class="form-input" placeholder="e.g., ARV assessment not required..."></textarea>  
      </label>  
    </div>  
  
    <div id="arv_data_container" class="space-y-6">  
      <div id="arv_units_container" class="space-y-6"></div>  
  
      <button  
        type="button"  
        id="addArvUnitBtn"  
        data-add-unit="arv"  
        class="w-full py-3 mt-2 border-2 border-dashed border-purple-300 text-purple-600 rounded-xl hover:bg-purple-50 font-semibold text-sm tracking-wide uppercase transition-colors"  
      >  
        + Add Unit Type (After Repair)  
      </button>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section id="subject-total-rent-arv" class="section-card space-y-3">  
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">  
    <div>  
      <h2 class="text-lg font-semibold text-gray-800">  
        Total Estimated Rent (After Repair)  
      </h2>  
      <p class="text-xs text-gray-600">  
        Projected stabilized rent once all repairs are completed.  
      </p>  
    </div>  
  </div>  
  
  <div class="bg-gray-100 p-4 rounded-xl flex items-center justify-between border border-gray-200">  
    <span class="font-bold text-gray-700">  
      Total Estimated Rent (After Repair):  
    </span>  
    <div class="flex items-baseline gap-2">  
      <span class="font-bold text-xl text-purple-800" id="display_total_arv_rent">$0.00</span>  
      <input type="hidden" name="total_arv_rent" id="input_total_arv_rent" value="0">  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- =========================  
     SECTION: ACTIONS  
     ========================= -->  
<section id="form-actions" class="pt-6 border-t mt-4">  
  <div class="flex flex-col gap-2 mb-4">  
    <h2 class="text-base font-semibold text-gray-800">  
      Form Actions  
    </h2>  
    <p class="text-xs text-gray-600">  
      Clear all inputs or generate a PDF summary of this Multi-Unit Apartment Market Assessment.  
    </p>  
  </div>  
  
  <div class="flex flex-col-reverse sm:flex-row gap-4">  
    <button  
      type="button"  
      id="clearBtn"  
      class="w-full sm:w-auto px-6 py-3 border border-red-300 text-red-600 rounded-xl hover:bg-red-50 font-medium text-sm tracking-wide uppercase"  
    >  
      Clear Form  
    </button>  
  
    <div class="flex-1"></div>  
  
    <button  
      type="submit"  
      class="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 font-bold text-sm tracking-wide uppercase"  
    >  
      Generate PDF  
    </button>  
  </div>  
</section>  
  
</form>  
</main>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
// ========================  
// jsPDF UMD shim  
// ========================  
if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
  window.jsPDF = window.jspdf.jsPDF;  
}  
  
document.addEventListener('DOMContentLoaded', () => {  
  "use strict";  
  
  const STORAGE_KEY = "multiUnitAssessment_v4_updated";  
  const form = document.getElementById('assessmentForm');  
  
  if (!form) {  
    console.error("assessmentForm not found");  
    return;  
  }  
  
  // Containers  
  const currentContainer = document.getElementById('current_units_container');  
  const arvContainer     = document.getElementById('arv_units_container');  
  
  // Totals  
  const currentTotalDisplay = document.getElementById('display_total_current_rent');  
  const currentTotalInput   = document.getElementById('input_total_current_rent');  
  const arvTotalDisplay     = document.getElementById('display_total_arv_rent');  
  const arvTotalInput       = document.getElementById('input_total_arv_rent');  
  
  // Buttons & Toggles  
  const addCurrentBtn   = document.getElementById('addCurrentUnitBtn');  
  const addArvBtn       = document.getElementById('addArvUnitBtn');  
  const clearBtn        = document.getElementById('clearBtn');  
  const skipArvCheckbox = document.getElementById('skip_arv');  
  
  // Proposed Repairs controls & counters  
  const proposedRepairsCheckbox = document.getElementById('skip_proposed_repairs');  
  const proposedRepairsTextarea = form.elements['proposed_repairs_summary'];  
  const proposedRepairsCounter  = document.getElementById('proposed_repairs_summary_count');  
  
  // Subject property summary counter  
  const propertySummaryTextarea = form.elements['property_summary'];  
  const propertySummaryCounter  = document.getElementById('property_summary_count');  
  
  /* ========================================================================  
     HELPER FUNCTIONS  
     ======================================================================== */  
  const fmtMoney = (num) =>  
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num || 0);  
  
  const generateId = () => "_" + Math.random().toString(36).substring(2, 9);  
  
  function debounce(fn, d = 300) {  
    let t;  
    return (...args) => {  
      clearTimeout(t);  
      t = setTimeout(() => fn(...args), d);  
    };  
  }  
  
  const debouncedSave = debounce(() => saveToStorage(), 400);  
  const debouncedCalc = debounce(() => calculateTotals(), 100);  
  
  // Safely get a value by name or id (for PDF fields)  
  function getFieldValue(nameOrId) {  
    if (!form) return "";  
  
    const byName = form.elements[nameOrId];  
    if (byName && typeof byName.value !== "undefined") {  
      return byName.value || "";  
    }  
  
    const byId = document.getElementById(nameOrId);  
    if (byId && typeof byId.value !== "undefined") {  
      return byId.value || "";  
    }  
  
    return "";  
  }  
  
  // Character counter helper  
  function initCharCounter(textarea, counterEl, maxLen = 1000) {  
    if (!textarea || !counterEl) return;  
  
    const update = () => {  
      const len = textarea.value ? textarea.value.length : 0;  
      counterEl.textContent = len;  
    };  
  
    textarea.addEventListener('input', update);  
    update();  
  }  
  
  // Toggle for proposed repairs textarea  
  function applyProposedRepairsToggle() {  
    if (!proposedRepairsTextarea || !proposedRepairsCheckbox) return;  
  
    const skip = proposedRepairsCheckbox.checked;  
    proposedRepairsTextarea.disabled = skip;  
    proposedRepairsTextarea.classList.toggle('bg-gray-100', skip);  
    proposedRepairsTextarea.classList.toggle('cursor-not-allowed', skip);  
  }  
  
  /* ========================================================================  
     TEMPLATE: 5-ROW LAYOUT  
     ======================================================================== */  
  function createUnitRowHTML(type, id) {  
    const prefix = type === "current" ? "curr" : "arv";  
    const highlight = type === "current" ? "blue" : "purple";  
  
    return `  
      <div class="unit-row border border-gray-200 p-5 rounded-xl bg-gray-50 space-y-4 relative shadow-sm" id="${id}">  
        <button type="button" class="remove-row-btn absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors" title="Remove Unit">  
          ✕  
        </button>  
  
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
          <div>  
            <label class="block text-xs font-bold text-gray-700 uppercase tracking-wide">Unit Type</label>  
            <select name="${prefix}_type[]" class="form-input text-sm mt-1 input-type">  
              <option value="">Select...</option>  
              <option>Studio</option>  
              <option>1 Bed / 1 Bath</option>  
              <option>2 Bed / 1 Bath</option>  
              <option>2 Bed / 2 Bath</option>  
              <option>3 Bed / 1 Bath</option>  
              <option>Commercial</option>  
              <option>Other</option>  
            </select>  
          </div>  
          <div>  
            <label class="block text-xs font-bold text-gray-700 uppercase tracking-wide">Condition</label>  
            <select name="${prefix}_condition[]" class="form-input text-sm mt-1 input-condition">  
              <option value="">Select...</option>  
              <option>Poor</option>  
              <option>Fair</option>  
              <option>Average</option>  
              <option>Good</option>  
              <option>Excellent</option>  
              <option>Gutted/Shell</option>  
            </select>  
          </div>  
          <div>  
            <label class="block text-xs font-bold text-gray-700 uppercase tracking-wide">No. of Units</label>  
            <input type="number" name="${prefix}_count[]" class="form-input text-sm mt-1 input-count" min="0" placeholder="0">  
          </div>  
        </div>  
  
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
          <div>  
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide">Low Range ($)</label>  
            <input type="number" name="${prefix}_range_low[]" class="form-input text-sm mt-1 input-low" placeholder="e.g. 1000" step="1">  
          </div>  
          <div>  
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide">High Range ($)</label>  
            <input type="number" name="${prefix}_range_high[]" class="form-input text-sm mt-1 input-high" placeholder="e.g. 1500" step="1">  
          </div>  
          <div>  
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide">Median Price ($)</label>  
            <input type="number" name="${prefix}_range_median[]" class="form-input text-sm mt-1 input-median" placeholder="e.g. 1250" step="1">  
          </div>  
        </div>  
  
        <div>  
          <label class="block text-xs font-bold text-gray-700 uppercase tracking-wide">Unit Features</label>  
          <input type="text" name="${prefix}_features[]" class="form-input text-sm mt-1 input-features" placeholder="e.g. Hardwood floors, new appliances, balcony...">  
        </div>  
  
        <div>  
          <label class="block text-xs font-bold text-gray-700 uppercase tracking-wide">Unit Description</label>  
          <textarea name="${prefix}_description[]" rows="2" class="form-input text-sm mt-1 input-description" placeholder="Brief details about layout, view, etc."></textarea>  
        </div>  
  
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-3 rounded-lg border border-${highlight}-100">  
          <div>  
            <label class="block text-xs font-bold text-${highlight}-700 uppercase tracking-wide">Suggested Unit Price ($)</label>  
            <input type="number" name="${prefix}_suggested_price[]" class="form-input text-sm mt-1 font-semibold text-gray-800 input-price" placeholder="0.00" step="0.01">  
          </div>  
          <div>  
            <label class="block text-xs font-bold text-gray-500 uppercase tracking-wide">Total Rent by Type ($)</label>  
            <input type="text" readonly class="form-input text-sm mt-1 bg-gray-100 text-gray-600 font-bold input-row-total cursor-not-allowed" value="$0.00">  
            <p class="text-[10px] text-gray-400 text-right mt-1">(Units × Price)</p>  
          </div>  
        </div>  
      </div>  
    `;  
  }  
  
  function addRow(container, type, values = null) {  
    const id = generateId();  
    container.insertAdjacentHTML("beforeend", createUnitRowHTML(type, id));  
  
    // Fill values if loading from storage  
    if (values) {  
      const row = document.getElementById(id);  
      if (row) {  
        const setVal = (sel, val) => {  
          const el = row.querySelector(sel);  
          if (el) el.value = val || "";  
        };  
        setVal(".input-type",        values.type);  
        setVal(".input-condition",   values.condition);  
        setVal(".input-count",       values.count);  
        setVal(".input-low",         values.low);  
        setVal(".input-high",        values.high);  
        setVal(".input-median",      values.median);  
        setVal(".input-features",    values.features);  
        setVal(".input-description", values.description);  
        setVal(".input-price",       values.price);  
      }  
    }  
  
    // Initial calc for this row  
    updateRowTotal(document.getElementById(id));  
    debouncedCalc();  
    debouncedSave();  
  }  
  
  /* ========================================================================  
     CALCULATIONS  
     ======================================================================== */  
  function updateRowTotal(row) {  
    if (!row) return 0;  
    const count = parseFloat(row.querySelector(".input-count")?.value || "0") || 0;  
    const price = parseFloat(row.querySelector(".input-price")?.value || "0") || 0;  
    const total = count * price;  
  
    const totalEl = row.querySelector(".input-row-total");  
    if (totalEl) totalEl.value = fmtMoney(total);  
  
    return total;  
  }  
  
  function calculateTotals() {  
    // Current  
    let currentSum = 0;  
    document.querySelectorAll("#current_units_container .unit-row").forEach(row => {  
      currentSum += updateRowTotal(row);  
    });  
    if (currentTotalDisplay) currentTotalDisplay.textContent = fmtMoney(currentSum);  
    if (currentTotalInput)   currentTotalInput.value   = currentSum.toFixed(2);  
  
    // ARV  
    let arvSum = 0;  
    if (!skipArvCheckbox?.checked) {  
      document.querySelectorAll("#arv_units_container .unit-row").forEach(row => {  
        arvSum += updateRowTotal(row);  
      });  
    }  
    if (arvTotalDisplay) arvTotalDisplay.textContent = fmtMoney(arvSum);  
    if (arvTotalInput)   arvTotalInput.value   = arvSum.toFixed(2);  
  }  
  
  /* ========================================================================  
     EVENT LISTENERS  
     ======================================================================== */  
  [currentContainer, arvContainer].forEach(container => {  
    if (!container) return;  
  
    // Delegate Inputs  
    container.addEventListener("input", (e) => {  
      if (e.target.matches("input, select, textarea")) {  
        if (e.target.matches(".input-count, .input-price")) {  
          updateRowTotal(e.target.closest(".unit-row"));  
        }  
        debouncedCalc();  
        debouncedSave();  
      }  
    });  
  
    // Delegate Remove  
    container.addEventListener("click", (e) => {  
      if (e.target.closest(".remove-row-btn")) {  
        if (confirm("Delete this unit type?")) {  
          e.target.closest(".unit-row").remove();  
          debouncedCalc();  
          debouncedSave();  
        }  
      }  
    });  
  });  
  
  // Add rows  
  addCurrentBtn?.addEventListener("click", () => addRow(currentContainer, "current"));  
  addArvBtn?.addEventListener("click", () => addRow(arvContainer, "arv"));  
  
  // Skip ARV toggle  
  function handleArvToggle() {  
    if (!skipArvCheckbox) return;  
  
    const isSkipped   = skipArvCheckbox.checked;  
    const arvSection  = document.getElementById("arv_data_container");  
    const explanation = document.getElementById("skip_arv_explanation");  
    const arvCard     = document.getElementById("subject-total-rent-arv");  
  
    if (arvSection)  arvSection.classList.toggle("hidden", isSkipped);  
    if (explanation) explanation.classList.toggle("hidden", !isSkipped);  
    if (arvCard)     arvCard.classList.toggle("opacity-50", isSkipped);  
  
    debouncedCalc();  
    debouncedSave();  
  }  
  skipArvCheckbox?.addEventListener("change", handleArvToggle);  
  
  // Proposed repairs toggle  
  proposedRepairsCheckbox?.addEventListener('change', () => {  
    applyProposedRepairsToggle();  
    debouncedSave();  
  });  
  
  // Clear Form  
  clearBtn?.addEventListener("click", () => {  
    if (!confirm("Clear all data?")) return;  
    localStorage.removeItem(STORAGE_KEY);  
    form.reset();  
    currentContainer.innerHTML = "";  
    arvContainer.innerHTML     = "";  
    addRow(currentContainer, "current");  
    addRow(arvContainer, "arv");  
    handleArvToggle();  
    applyProposedRepairsToggle();  
    calculateTotals();  
  });  
  
  /* ========================================================================  
     STORAGE (SAVE / LOAD)  
     ======================================================================== */  
  function serializeRows(container) {  
    return Array.from(container.querySelectorAll(".unit-row")).map(row => ({  
      type:        row.querySelector(".input-type")?.value        || "",  
      condition:   row.querySelector(".input-condition")?.value   || "",  
      count:       row.querySelector(".input-count")?.value       || "",  
      low:         row.querySelector(".input-low")?.value         || "",  
      high:        row.querySelector(".input-high")?.value        || "",  
      median:      row.querySelector(".input-median")?.value      || "",  
      features:    row.querySelector(".input-features")?.value    || "",  
      description: row.querySelector(".input-description")?.value || "",  
      price:       row.querySelector(".input-price")?.value       || ""  
    }));  
  }  
  
  function saveToStorage() {  
    if (!form) return;  
  
    const data = {};  
  
    // Save standard (non-array) fields  
    new FormData(form).forEach((val, key) => {  
      if (!key.endsWith("[]")) data[key] = val;  
    });  
  
    data._dynamicCurrent        = serializeRows(currentContainer);  
    data._dynamicArv            = serializeRows(arvContainer);  
    data._skipArv               = !!skipArvCheckbox?.checked;  
    data.skip_proposed_repairs  = !!proposedRepairsCheckbox?.checked;  
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));  
  }  
  
  function loadFromStorage() {  
    const raw = localStorage.getItem(STORAGE_KEY);  
    if (!raw) {  
      addRow(currentContainer, "current");  
      addRow(arvContainer, "arv");  
      return;  
    }  
  
    try {  
      const data = JSON.parse(raw);  
  
      // Restore standard fields  
      for (const key in data) {  
        if (key.startsWith("_")) continue;  
        if (key === 'skip_proposed_repairs') continue; // handled separately  
        const el = form.elements[key];  
        if (el && typeof el.value !== "undefined") {  
          el.value = data[key];  
        }  
      }  
  
      // ARV skip state  
      if (skipArvCheckbox) skipArvCheckbox.checked = !!data._skipArv;  
  
      // Proposed repairs skip state  
      if (typeof data.skip_proposed_repairs !== "undefined" && proposedRepairsCheckbox) {  
        proposedRepairsCheckbox.checked = !!data.skip_proposed_repairs;  
      }  
  
      // Restore rows  
      currentContainer.innerHTML = "";  
      (data._dynamicCurrent || []).forEach(r => addRow(currentContainer, "current", r));  
      if (!currentContainer.children.length) addRow(currentContainer, "current");  
  
      arvContainer.innerHTML = "";  
      (data._dynamicArv || []).forEach(r => addRow(arvContainer, "arv", r));  
      if (!arvContainer.children.length) addRow(arvContainer, "arv");  
  
    } catch (err) {  
      console.error("Load error", err);  
      addRow(currentContainer, "current");  
      addRow(arvContainer, "arv");  
    }  
  }  
  
  /* ========================================================================  
     PDF GENERATION (A4, PROFESSIONAL LAYOUT)  
     ======================================================================== */  
  function generatePdf() {  
    if (!window.jsPDF) {  
      alert("jsPDF library missing. Please ensure it is loaded.");  
      return;  
    }  
  
    // Ensure totals are fresh  
    calculateTotals();  
  
    // Page setup  
    const doc   = new window.jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });  
    const pageW = doc.internal.pageSize.getWidth();  
    const pageH = doc.internal.pageSize.getHeight();  
    const LM    = 16;  
    const VAL_X = LM + 55;  
    const CONTENT_W = pageW - (LM * 2);  
    const VAL_W     = pageW - VAL_X - LM;  
    let y = 20;  
  
    function checkPageBreak(cost = 20) {  
      if (y + cost > pageH - 20) {  
        doc.addPage();  
        y = 20;  
        return true;  
      }  
      return false;  
    }  
  
    function sectionHeader(text) {  
      if (!text) return;  
      checkPageBreak(12);  
      doc.setFillColor(240);  
      doc.rect(LM - 4, y - 6, pageW - (LM * 2) + 8, 10, "F");  
      doc.setFontSize(12);  
      doc.setFont("helvetica", "bold");  
      doc.setTextColor(0);  
      doc.text(text, LM, y + 1);  
      y += 12;  
    }  
  
    function pdfKV(label, value) {  
      const lbl = (label || "").toString().trim();  
      const val = (value || "").toString().trim();  
      if (!lbl) return;  
  
      checkPageBreak(8);  
  
      doc.setFont("helvetica", "bold");  
      doc.setFontSize(10);  
      doc.setTextColor(60);  
      const lblLines = doc.splitTextToSize(lbl, (VAL_X - LM - 2));  
      doc.text(lblLines, LM, y);  
  
      doc.setFont("helvetica", "normal");  
      doc.setTextColor(0);  
      const valLines = doc.splitTextToSize(val || "—", VAL_W);  
      doc.text(valLines, VAL_X, y);  
  
      const lineCount = Math.max(lblLines.length, valLines.length);  
      y += (lineCount * 5) + 2;  
    }  
  
    function pdfNarrative(label, text) {  
      const lbl = (label || "").toString().trim();  
      const txt = (text || "").toString().trim();  
      if (!lbl) return;  
  
      checkPageBreak(15);  
  
      // Label  
      doc.setFont("helvetica", "bold");  
      doc.setFontSize(10);  
      doc.setTextColor(60);  
      doc.text(lbl, LM, y);  
      y += 5;  
  
      // Text  
      doc.setFont("helvetica", "normal");  
      doc.setTextColor(0);  
  
      if (txt) {  
        const lines = doc.splitTextToSize(txt, CONTENT_W);  
        if (checkPageBreak(lines.length * 5)) {  
          doc.setFont("helvetica", "bold");  
          doc.setTextColor(60);  
          doc.text(lbl + " (cont.)", LM, y);  
          y += 5;  
          doc.setFont("helvetica", "normal");  
          doc.setTextColor(0);  
        }  
        doc.text(lines, LM, y);  
        y += (lines.length * 5) + 4;  
      } else {  
        doc.text("N/A", LM, y);  
        y += 9;  
      }  
    }  
  
    // ===== Title block (no subject summary here) =====  
    doc.setFontSize(18);  
    doc.setFont("helvetica", "bold");  
    doc.text("Multi-Unit Apartment Market Assessment", pageW / 2, y, { align: "center" });  
    y += 8;  
  
    doc.setFontSize(9);  
    doc.setTextColor(100);  
    doc.text(`Generated: ${new Date().toLocaleString()}`, pageW / 2, y, { align: "center" });  
    doc.setTextColor(0);  
    y += 10;  
  
    // 0. Subject Property Snapshot  
    sectionHeader("0. Subject Property Snapshot");  
  
    const addrLine = [getFieldValue("address"), getFieldValue("unit")]  
      .filter(Boolean)  
      .join(", ");  
    const cityStateZip = [getFieldValue("city"), getFieldValue("state"), getFieldValue("zip")]  
      .filter(Boolean)  
      .join(" ");  
  
    pdfKV("Subject Property Address",  addrLine || "—");  
    pdfKV("City / State / Zip",       cityStateZip || "—");  
    pdfKV("Property Type",            getFieldValue("property_type")     || "—");  
    pdfKV("Overall Condition",        getFieldValue("overall_condition") || "—");  
    pdfKV("Subject Occupancy Status", getFieldValue("occupancy_status")  || "—");  
  
    // 1. Subject Property & Market Summary  
    sectionHeader("1. Subject Property & Market Summary");  
  
    const headerFields = [  
      { label: "Subject Property Summary",           name: "property_summary" },  
      { label: "Market Area Summary",               name: "market_area_summary" },  
      { label: "Unit Mix Overview",                 name: "unit_mix_summary" },  
      { label: "Current Condition Narrative",       name: "current_condition_summary" },  
      { label: "ARV Assessment Narrative",          name: "arv_assessment_summary" }  
    ];  
    headerFields.forEach(f => {  
      const value = getFieldValue(f.name);  
      if (value) pdfNarrative(f.label, value);  
    });  
  
    // Proposed repairs summary (respecting the skip checkbox)  
    if (proposedRepairsCheckbox && !proposedRepairsCheckbox.checked) {  
      const repairsText = getFieldValue("proposed_repairs_summary");  
      pdfNarrative(  
        "Summary Description of Proposed Repairs",  
        repairsText || "No repair summary provided."  
      );  
    } else {  
      pdfNarrative(  
        "Summary Description of Proposed Repairs",  
        "Proposed repairs summary was intentionally skipped for this assessment."  
      );  
    }  
  
    // If ARV is skipped, capture the explanation here as well  
    if (skipArvCheckbox?.checked) {  
      const reason = getFieldValue("skip_arv_reason");  
      pdfNarrative(  
        "Reason ARV Assessment Was Skipped",  
        reason || "No explanation provided."  
      );  
    }  
  
    // 2. Current Condition Units  
    sectionHeader("2. Current Condition Unit Mix");  
  
    const currentRows = serializeRows(currentContainer);  
  
    function drawUnitTable(title, rows) {  
      if (!rows || !rows.length) {  
        pdfNarrative(title, "No units were entered for this section.");  
        return;  
      }  
  
      checkPageBreak(12);  
      doc.setFontSize(11);  
      doc.setFont("helvetica", "bold");  
      doc.text(title, LM, y);  
      y += 6;  
  
      // Table header  
      doc.setFontSize(9);  
      doc.setFont("helvetica", "bold");  
  
      const colTypeX  = LM;  
      const colCondX  = LM + 35;  
      const colCountX = LM + 75;  
      const colPriceX = LM + 95;  
      const colTotalX = LM + 125;  
  
      checkPageBreak(8);  
      doc.text("Unit Type",  colTypeX,  y);  
      doc.text("Cond.",      colCondX,  y);  
      doc.text("# Units",    colCountX, y);  
      doc.text("Unit Rent",  colPriceX, y);  
      doc.text("Total Rent", colTotalX, y);  
      y += 5;  
  
      doc.setFont("helvetica", "normal");  
      doc.setFontSize(9);  
  
      rows.forEach(row => {  
        const countNum = parseFloat(row.count || "0") || 0;  
        const priceNum = parseFloat(row.price || "0") || 0;  
        const totalNum = countNum * priceNum;  
  
        const typeText  = row.type || "";  
        const condText  = row.condition || "";  
        const countText = countNum ? String(countNum) : "";  
        const priceText = priceNum ? fmtMoney(priceNum) : "";  
        const totalText = totalNum ? fmtMoney(totalNum) : "";  
  
        checkPageBreak(10);  
        doc.text(typeText,  colTypeX,  y);  
        doc.text(condText,  colCondX,  y);  
        doc.text(countText, colCountX, y);  
        doc.text(priceText, colPriceX, y);  
        doc.text(totalText, colTotalX, y);  
        y += 5;  
  
        // Rent range line (Low / High / Median)  
        if (row.low || row.high || row.median) {  
          const lowNum    = row.low    ? parseFloat(row.low)    : NaN;  
          const highNum   = row.high   ? parseFloat(row.high)   : NaN;  
          const medianNum = row.median ? parseFloat(row.median) : NaN;  
  
          const lowText    = !isNaN(lowNum)    ? fmtMoney(lowNum)    : (row.low    || "");  
          const highText   = !isNaN(highNum)   ? fmtMoney(highNum)   : (row.high   || "");  
          const medianText = !isNaN(medianNum) ? fmtMoney(medianNum) : (row.median || "");  
  
          let rangeParts = [];  
          if (lowText || highText) {  
            rangeParts.push(`Range: ${lowText || "—"} to ${highText || "—"}`);  
          }  
          if (medianText) {  
            rangeParts.push(`Median: ${medianText}`);  
          }  
  
          if (rangeParts.length) {  
            const rangeLine  = rangeParts.join(" | ");  
            const rangeLines = doc.splitTextToSize(rangeLine, CONTENT_W - 6);  
            checkPageBreak(rangeLines.length * 4 + 2);  
            doc.setFontSize(8);  
            doc.text(rangeLines, LM + 2, y);  
            doc.setFontSize(9);  
            y += rangeLines.length * 4 + 1;  
          }  
        }  
  
        // Features / description narrative  
        if (row.features || row.description) {  
          const featuresDesc = [row.features, row.description]  
            .filter(Boolean)  
            .join(" | ");  
          const lines = doc.splitTextToSize(featuresDesc, CONTENT_W - 6);  
          checkPageBreak(lines.length * 4 + 2);  
          doc.setFontSize(8);  
          doc.text(lines, LM + 2, y);  
          doc.setFontSize(9);  
          y += lines.length * 4 + 1;  
        }  
      });  
  
      y += 2;  
    }  
  
    drawUnitTable("Current Units by Type", currentRows);  
  
    // 3. After-Repair (ARV) Units  
    sectionHeader("3. After-Repair (ARV) Unit Mix");  
  
    const arvRows = serializeRows(arvContainer);  
  
    if (!skipArvCheckbox?.checked) {  
      drawUnitTable("ARV Units by Type", arvRows);  
    } else {  
      pdfNarrative(  
        "ARV Unit Assessment",  
        "ARV unit mix was intentionally skipped for this assignment at the client's or analyst's request."  
      );  
    }  
  
    // 4. Rent Summary & Notes  
    sectionHeader("4. Rent Summary & Notes");  
  
    const currentTotalNum = parseFloat(currentTotalInput?.value || "0") || 0;  
    const arvTotalNum     = parseFloat(arvTotalInput?.value || "0") || 0;  
  
    pdfKV("Total Current Monthly Rent", fmtMoney(currentTotalNum));  
    pdfKV(  
      "Total ARV Monthly Rent",  
      skipArvCheckbox?.checked ? "N/A (ARV skipped)" : fmtMoney(arvTotalNum)  
    );  
  
    const rentNotes = getFieldValue("rent_summary_notes");  
    if (rentNotes) {  
      pdfNarrative("Analyst Rent Summary Notes", rentNotes);  
    }  
  
    // Footer page numbers  
    const pages = doc.internal.getNumberOfPages();  
    for (let i = 1; i <= pages; i++) {  
      doc.setPage(i);  
      doc.setFontSize(8);  
      doc.setTextColor(150);  
      doc.text(`Page ${i} of ${pages}`, pageW / 2, pageH - 10, { align: "center" });  
    }  
  
    // Filename  
    const today = new Date();  
    const yyyy = today.getFullYear();  
    const mm   = String(today.getMonth() + 1).padStart(2, "0");  
    const dd   = String(today.getDate()).padStart(2, "0");  
    const filename = `MultiUnit_Apt_Assessment_${yyyy}-${mm}-${dd}.pdf`;  
  
    doc.save(filename);  
  }  
  
  /* ========================================================================  
     EVENT: FORM SUBMIT -> GENERATE PDF  
     ======================================================================== */  
  form.addEventListener("submit", (e) => {  
    e.preventDefault();  
    try {  
      generatePdf();  
    } catch (err) {  
      console.error(err);  
      alert("There was an error generating the PDF.");  
    }  
  });  
  
  // Init counters & state  
  initCharCounter(propertySummaryTextarea,  propertySummaryCounter,  1000);  
  initCharCounter(proposedRepairsTextarea,  proposedRepairsCounter,  1000);  
  
  loadFromStorage();  
  handleArvToggle();  
  applyProposedRepairsToggle();  
  calculateTotals();  
});  
</script>  
  
  
  
<!-- /wp:html -->  
