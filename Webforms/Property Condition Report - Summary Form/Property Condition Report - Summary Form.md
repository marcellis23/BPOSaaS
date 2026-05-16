# Property Condition Report - Summary Form  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
  <title>PCR Summary Form</title>  
  <script src="https://cdn.tailwindcss.com"></script>  
  <link rel="preconnect" href="https://fonts.googleapis.com"/>  
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>  
  
  <style>  
    body { font-family: 'Inter', sans-serif; }  
  
    /* Plain CSS so it works with Tailwind CDN (no @apply at runtime) */  
    .input, .select, .textarea {  
      display:block; width:100%;  
      border:1px solid #D1D5DB; border-radius:0.75rem;  
      padding:0.625rem 0.75rem; font-size:0.875rem; line-height:1.25rem;  
      background:#fff; color:#111827; margin-top:0.25rem;  
      box-shadow:0 1px 2px rgba(0,0,0,0.03);  
    }  
    .input:focus, .select:focus, .textarea:focus {  
      outline:none; border-color:#3B82F6; box-shadow:0 0 0 3px rgba(59,130,246,0.2);  
    }  
    .label { display:block; font-size:0.875rem; font-weight:600; color:#374151; }  
    .hint  { font-size:0.75rem; color:#6B7280; margin-top:0.25rem; }  
    .field-error { font-size:0.75rem; color:#DC2626; font-weight:500; margin-top:0.25rem; display:none; }  
    .field-error.show { display:block; }  
    .section-card { background:#fff; border:1px solid #E5E7EB; border-radius:0.75rem; padding:1rem; }  
    .required-label::after { content:' *'; color:#ef4444; }  
  </style>  
</head>  
  
<body class="bg-gray-100 p-4 md:p-8">  
  <div class="max-w-4xl mx-auto">  
    <form id="pcrSummaryForm" novalidate>  
      <div class="bg-white rounded-2xl shadow-lg ring-1 ring-gray-200 overflow-hidden">  
        <div class="px-6 py-5 border-b border-gray-200 bg-gray-50">  
          <h1 class="text-2xl font-bold text-gray-900">Property Condition Report (PCR) Summary</h1>  
          <p class="mt-1 text-sm text-gray-600">A final synthesis of all findings for a client-ready report.</p>  
        </div>  
  
        <div class="p-6 md:p-8 space-y-8">  
          <!-- (next sections will be pasted here, unchanged structure) -->  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- SECTION: General Property Info -->  
<section id="sec-general" class="section-card">  
  <h2 class="text-lg font-semibold">General Property Info</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This information establishes the property's unique identity. It ensures the  
      <strong>Address</strong> matches the correct property, forming the foundation for the entire report.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 sm:grid-cols-6 gap-4 mt-4">  
    <div class="sm:col-span-4">  
      <label class="label" for="address">Property Address</label>  
      <input id="address" name="address" required type="text" class="input"  
             placeholder="e.g., 123 Main St" autocomplete="street-address"  
             autocapitalize="off" spellcheck="false" maxlength="100" />  
      <div id="address_error" class="field-error hidden">Property Address is required.</div>  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="unit">Unit #</label>  
      <input id="unit" name="unit" type="text" class="input"  
             placeholder="e.g., Apt/Unit" autocomplete="address-line2"  
             autocapitalize="off" spellcheck="false" maxlength="20" />  
      <div id="unit_error" class="field-error hidden"></div>  
    </div>  
  
    <div class="sm:col-span-3">  
      <label class="label" for="city">City</label>  
      <input id="city" name="city" required type="text" class="input"  
             autocomplete="address-level2" autocapitalize="words" maxlength="50" />  
      <div id="city_error" class="field-error hidden">City is required.</div>  
    </div>  
  
    <div class="sm:col-span-1">  
      <label class="label" for="state">State</label>  
      <select id="state" name="state" required class="select" autocomplete="address-level1">  
        <option value="">Select…</option>  
        <option value="PA">PA</option><option value="NJ">NJ</option><option value="DE">DE</option><option value="MD">MD</option>  
        <option value="NY">NY</option><option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option>  
        <option value="CO">CO</option><option value="CT">CT</option><option value="DC">DC</option><option value="FL">FL</option>  
        <option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option>  
        <option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option>  
        <option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option>  
        <option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option>  
        <option value="NM">NM</option><option value="NC">NC</option><option value="ND">ND</option>  
        <option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="RI">RI</option>  
        <option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option>  
        <option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option>  
        <option value="WY">WY</option>  
      </select>  
      <div id="state_error" class="field-error hidden">State is required.</div>  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="zip">Zip Code</label>  
      <input id="zip" name="zip" required pattern="\d{5}(-\d{4})?" type="text" class="input"  
             placeholder="e.g., 19104" inputmode="numeric" autocomplete="postal-code" maxlength="10" />  
      <div id="zip_error" class="field-error hidden">Valid Zip Code is required.</div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- SECTION: Current Use Assessment -->  
<section id="sec-current-use">  
  <div class="space-y-6">  
    <div class="pb-4 border-b border-gray-200">  
      <h2 class="text-lg font-semibold text-gray-800">Current Use Assessment</h2>  
    </div>  
  
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 rounded-xl">  
      <p class="font-semibold mb-1">Why this section matters</p>  
      <p>Establishing the subject’s <em>current use</em> and <em>current condition</em> is the foundation for the entire analysis.</p>  
    </div>  
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
      <div class="space-y-2">  
        <label class="label" for="current_use">What is the <strong>current use</strong>?</label>  
        <p id="cu_current_use_help" class="hint">Select the use as it exists today.</p>  
        <select id="current_use" name="current_use" required class="select" aria-describedby="cu_current_use_help">  
          <option value="">Select Current Use...</option>  
          <optgroup label="Vacant / Idle">  
            <option>Vacant Land (no active use)</option>  
            <option>Idle / Abandoned (previous use but currently unused)</option>  
          </optgroup>  
          <optgroup label="Residential">  
            <option>Single-Family Residence</option>  
            <option>Residential Condominium</option>  
            <option>Multifamily Residence (2–4 units)</option>  
            <option>Apartment Building (5+ units)</option>  
            <option>Manufactured / Mobile Home Use</option>  
          </optgroup>  
          <optgroup label="Commercial / Industrial">  
            <option>Retail Use (storefront, shopping, etc.)</option>  
            <option>Office Use</option>  
            <option>Mixed-Use Occupancy (residential + commercial)</option>  
            <option>Industrial / Warehouse Use</option>  
            <option>Special Commercial (gas station, auto repair, pad site, etc.)</option>  
          </optgroup>  
          <optgroup label="Other">  
            <option>Other / Restricted</option>  
            <option>Unknown</option>  
            <option>N/A</option>  
          </optgroup>  
        </select>  
        <div id="current_use_error" class="field-error hidden">Current Use is required.</div>  
      </div>  
  
      <div class="space-y-2">  
        <label class="label" for="subject_property_condition">What is the <strong>current condition</strong>?</label>  
        <p id="cu_subject_property_condition_help" class="hint">Rate the current physical condition.</p>  
        <select id="subject_property_condition" name="subject_property_condition" required class="select" aria-describedby="cu_subject_property_condition_help">  
          <option value="">Select Condition...</option>  
          <option value="Excellent">Excellent</option>  
          <option value="Good">Good</option>  
          <option value="Average">Average</option>  
          <option value="Fair">Fair</option>  
          <option value="Poor">Poor</option>  
          <option value="Damaged">Damaged</option>  
          <option value="Not Applicable">Not Applicable</option>  
        </select>  
        <div id="subject_property_condition_error" class="field-error hidden">Current Condition is required.</div>  
      </div>  
    </div>  
  
    <div class="form-question-group p-4 rounded-lg bg-gray-50/70 ring-1 ring-gray-200">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label for="current_assessment_rating" class="label required-label">What is the current assessment rating?</label>  
          <select id="current_assessment_rating" name="current_assessment_rating" required class="select">  
            <option value="">Select a rating...</option>  
            <option>Excellent</option>  
            <option>Good</option>  
            <option>Average</option>  
            <option>Fair</option>  
            <option>Poor</option>  
            <option>Damaged</option>  
          </select>  
          <div id="current_assessment_rating_error" class="field-error hidden">Rating is required.</div>  
        </div>  
  
        <div>  
          <label for="current_assessment_explain" class="label required-label">Explain Choice</label>  
          <textarea id="current_assessment_explain" name="current_assessment_explain" rows="3" required maxlength="300" class="textarea" placeholder="Explain the 'why' behind your rating..."></textarea>  
          <div id="current_assessment_explain_counter" class="hint text-right" aria-live="polite">0 / 300</div>  
          <div id="current_assessment_explain_error" class="field-error hidden">Explanation is required.</div>  
        </div>  
      </div>  
    </div>  
  
    <div class="form-question-group p-4 rounded-lg bg-gray-50/70 ring-1 ring-gray-200">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label for="comparison_surroundings_rating" class="label required-label">How does it compare to surroundings?</label>  
          <select id="comparison_surroundings_rating" name="comparison_surroundings_rating" required class="select">  
            <option value="">Select a comparison...</option>  
            <option>Superior</option>  
            <option>Similar</option>  
            <option>Inferior</option>  
          </select>  
          <div id="comparison_surroundings_rating_error" class="field-error hidden">Comparison is required.</div>  
        </div>  
  
        <div>  
          <label for="comparison_surroundings_explain" class="label required-label">Explain Choice</label>  
          <textarea id="comparison_surroundings_explain" name="comparison_surroundings_explain" rows="3" required maxlength="300" class="textarea" placeholder="e.g., 'Superior due to recent exterior renovation...'"></textarea>  
          <div id="comparison_surroundings_explain_counter" class="hint text-right" aria-live="polite">0 / 300</div>  
          <div id="comparison_surroundings_explain_error" class="field-error hidden">Explanation is required.</div>  
        </div>  
      </div>  
    </div>  
  
    <div class="form-question-group p-4 rounded-lg bg-gray-50/70 ring-1 ring-gray-200">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label for="current_use_fit_rating" class="label required-label">Current use fit within market area?</label>  
          <select id="current_use_fit_rating" name="current_use_fit_rating" required class="select">  
            <option value="">Select a fit...</option>  
            <option>Typical</option>  
            <option>Atypical</option>  
            <option>Non-Conforming</option>  
          </select>  
          <div id="current_use_fit_rating_error" class="field-error hidden">Fit rating is required.</div>  
        </div>  
  
        <div>  
          <label for="current_use_fit_explain" class="label required-label">Explain Choice</label>  
          <textarea id="current_use_fit_explain" name="current_use_fit_explain" rows="3" required maxlength="300" class="textarea" placeholder="e.g., 'Typical single-family use in a residential zone...'"></textarea>  
          <div id="current_use_fit_explain_counter" class="hint text-right" aria-live="polite">0 / 300</div>  
          <div id="current_use_fit_explain_error" class="field-error hidden">Explanation is required.</div>  
        </div>  
      </div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card" id="sec-financing">  
  <h2 class="text-lg font-semibold">Financing Assessment</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Financing Likelihood</p>  
    <p>Assess the property's condition relative to common lender requirements.</p>  
  </div>  
  
  <div class="flex flex-col space-y-4 mt-4">  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="financing_type">Most likely financing available?</label>  
          <select  
            id="financing_type"  
            name="financing_type"  
            required  
            class="select"  
            aria-describedby="financing_type_hint"  
          >  
            <option value="">Select...</option>  
            <option value="Conventional">Conventional</option>  
            <option value="FHA Standard">FHA Standard</option>  
            <option value="FHA 203(k)">FHA 203(k)</option>  
            <option value="VA">VA</option>  
            <option value="USDA">USDA</option>  
            <option value="Cash">Cash</option>  
            <option value="Owner/Seller Financing">Owner/Seller Financing</option>  
            <option value="Other">Other</option>  
          </select>  
          <p id="financing_type_hint" class="hint">Select the single most likely program.</p>  
          <div id="financing_type_error" class="field-error hidden">Financing type is required.</div>  
        </div>  
  
      <div class="mt-4">  
        <label class="label" for="financing_type_explain">Financing Explanation</label>  
        <textarea  
          id="financing_type_explain"  
          name="financing_type_explain"  
          rows="3"  
          class="textarea"  
          maxlength="750"  
          placeholder="Explain the reasoning for the selected financing type (e.g., 'Cash' is likely due to condition...)"  
        ></textarea>  
        <div id="financing_type_explain_error" class="field-error hidden"></div>  
      </div>  
      </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="financing_meets_standards_yn">Does property meet FHA/lender standards?</label>  
          <select  
            id="financing_meets_standards_yn"  
            name="financing_meets_standards_yn"  
            class="select"  
            required  
          >  
            <option value="">Select Yes/No/N/A</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="N/A">N/A</option>  
          </select>  
          <div id="financing_meets_standards_yn_error" class="field-error hidden">  
            Selection is required.  
          </div>  
        </div>  
  
        <div>  
          <label class="label" for="financing_deficiencies_explain">If not, explain deficiencies:</label>  
          <textarea  
            id="financing_deficiencies_explain"  
            name="financing_deficiencies_explain"  
            rows="3"  
            class="textarea"  
            placeholder="e.g., Peeling paint, missing handrails..."  
            maxlength="750"  
          ></textarea>  
          <div id="financing_deficiencies_explain_error" class="field-error hidden">  
            Please describe deficiencies when standards are not met.  
          </div>  
        </div>  
      </div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- SECTION: Association Financial and Legal Status -->  
<section class="section-card" id="sec-assoc">  
  <h2 class="text-lg font-semibold">Association Financial and Legal Status</h2>  
  
  <!-- TOGGLE: Is the property in an association community? -->  
<fieldset class="mt-4">  
    <legend class="label">  
      Is the subject property within a Condo, Coop, or HOA community?  
    </legend>  
    <p class="hint mb-2">  
      Select “Yes” to complete this section. If “No,” you may leave the association  
      fields blank and they will be omitted from the report.  
    </p>  
    <div class="flex flex-wrap gap-4">  
      <label class="inline-flex items-center gap-2">  
        <input  
          type="radio"  
          name="assoc_in_community"  
          id="assoc_in_community_yes"  
          value="Yes"  
          class="radio"  
        />  
        <span>Yes</span>  
      </label>  
      
      <label class="inline-flex items-center gap-2">  
        <input  
          type="radio"  
          name="assoc_in_community"  
          id="assoc_in_community_no"  
          value="No"  
          class="radio"  
        />  
        <span>No</span>  
      </label>  
    </div>  
  </fieldset>  
  
  <!-- Association details wrapper (hidden until "Yes") -->  
  <div id="assoc_details_wrapper" class="hidden">  
    <!-- Context / Info Box -->  
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
      <p class="font-semibold mb-1">Why Association Status Matters</p>  
      <p>  
        This section evaluates the financial health, legal exposure, and occupancy mix of any  
        homeowners, condo, or co-op association tied to the subject property. Significant special  
        assessments, legal/management issues, or financing limitations can impact buyer demand,  
        available loan programs, and long-term affordability. If any items are marked “Yes,” provide  
        a concise summary below.  
      </p>  
    </div>  
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">  
      <div>  
        <label class="label" for="al_assoc_occupancy_mix">Occupancy Mix</label>  
        <select id="al_assoc_occupancy_mix" name="assoc_occupancy_mix" class="select">  
          <option value="">Select...</option>  
          <option value="Mostly Owner-Occupied">Mostly Owner-Occupied</option>  
          <option value="Mostly Tenant-Occupied">Mostly Tenant-Occupied</option>  
          <option value="Mixed Owner/Tenant">Mixed Owner/Tenant</option>  
          <option value="Unknown">Unknown</option>  
          <option value="N/A">N/A</option>  
        </select>  
        <div id="al_assoc_occupancy_mix_error" class="field-error hidden"></div>  
      </div>  
  
      <div>  
        <label class="label" for="al_assoc_special_assessments">Special Assessments</label>  
        <select id="al_assoc_special_assessments" name="assoc_special_assessments" class="select">  
          <option value="">Select...</option>  
          <option value="Yes">Yes</option>  
          <option value="No">No</option>  
          <option value="Unknown">Unknown</option>  
        </select>  
        <div id="al_assoc_special_assessments_error" class="field-error hidden"></div>  
      </div>  
  
      <div>  
        <label class="label" for="al_assoc_legal_issues">Legal/Management Issues</label>  
        <select id="al_assoc_legal_issues" name="assoc_legal_issues" class="select">  
          <option value="">Select...</option>  
          <option value="Yes">Yes</option>  
          <option value="No">No</option>  
          <option value="Unknown">Unknown</option>  
        </select>  
        <div id="al_assoc_legal_issues_error" class="field-error hidden"></div>  
      </div>  
  
      <div>  
        <label class="label" for="al_assoc_financing_eligibility">Financial Limitations</label>  
        <select id="al_assoc_financing_eligibility" name="assoc_financing_eligibility" class="select">  
          <option value="">Select...</option>  
          <option value="Yes">Yes</option>  
          <option value="No">No</option>  
          <option value="Unknown">Unknown</option>  
        </select>  
        <div id="al_assoc_financing_eligibility_error" class="field-error hidden"></div>  
      </div>  
  
      <div class="md:col-span-2">  
        <label class="label" for="al_assoc_fin_legal_notes">Association Status Summary</label>  
        <textarea  
          id="al_assoc_fin_legal_notes"  
          name="assoc_fin_legal_notes"  
          rows="3"  
          class="textarea"  
          maxlength="1200"  
          placeholder="Concise summary..."  
        ></textarea>  
        <div  
          id="al_assoc_fin_legal_notes_counter"  
          class="hint text-right"  
          aria-live="polite"  
        >  
          0 / 1200  
        </div>  
        <div  
          id="al_assoc_fin_legal_notes_error"  
          class="field-error hidden"  
        >  
          Please summarize when any item is “Yes”.  
        </div>  
      </div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- FUTURE USE / CONDITION ASSESSMENT TOGGLE -->  
<fieldset class="section-card mb-4">  
  <legend class="label">  
    Have you completed a future use or condition assessment on the subject property?  
  </legend>  
  <p class="hint mb-2">  
    Select “Yes” if you prepared an ARV/future-condition scenario. If “No,”  
    you may skip the Proposed Use and Financial Feasibility sections.  
  </p>  
  <div class="flex flex-wrap gap-4">  
    <label class="inline-flex items-center gap-2">  
      <input  
        type="radio"  
        name="future_use_assessed"  
        id="fu_assessed_yes"  
        value="Yes"  
        class="radio"  
      />  
      <span>Yes</span>  
    </label>  
    <label class="inline-flex items-center gap-2">  
      <input  
        type="radio"  
        name="future_use_assessed"  
        id="fu_assessed_no"  
        value="No"  
        class="radio"  
      />  
      <span>No</span>  
    </label>  
  </div>  
</fieldset>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- SECTION: Proposed Use Assessment -->   
<section class="section-card" id="sec-proposed-use">  
  <h2 class="text-lg font-semibold">Proposed Use Assessment</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this section matters</p>  
    <p>  
      This section documents the planned future use and expected condition of the subject property and compares it to typical  
      land use in the surrounding market. It helps support ARV estimates, financial feasibility, and highest-and-best-use discussions.  
    </p>  
  </div>  
  
  <div class="space-y-4 mt-4">  
    <!-- Proposed Use + ARV Condition -->  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
      <div class="border border-gray-200 rounded-xl p-4">  
        <label class="label" for="pu_mkt_proposed_use">What is the proposed use?</label>  
        <select id="pu_mkt_proposed_use" name="mkt_proposed_use" required class="select">  
          <option value="">Select Proposed Use...</option>  
  
          <optgroup label="Vacant / Idle">  
            <option value="Vacant Land (no active use)">Vacant Land (no active use)</option>  
            <option value="Idle / Abandoned (previous use but currently unused)">Idle / Abandoned (previous use but currently unused)</option>  
          </optgroup>  
  
          <optgroup label="Residential">  
            <option value="Single-Family Residence">Single-Family Residence</option>  
            <option value="Residential Condominium">Residential Condominium</option>  
            <option value="Multifamily Residence (2–4 units)">Multifamily Residence (2–4 units)</option>  
            <option value="Apartment Building (5+ units)">Apartment Building (5+ units)</option>  
            <option value="Manufactured / Mobile Home Use">Manufactured / Mobile Home Use</option>  
          </optgroup>  
  
          <optgroup label="Commercial / Industrial">  
            <option value="Retail Use (storefront, shopping, etc.)">Retail Use (storefront, shopping, etc.)</option>  
            <option value="Office Use">Office Use</option>  
            <option value="Mixed-Use Occupancy (residential + commercial)">Mixed-Use Occupancy (residential + commercial)</option>  
            <option value="Industrial / Warehouse Use">Industrial / Warehouse Use</option>  
            <option value="Special Commercial (gas station, auto repair, pad site, etc.)">  
              Special Commercial (gas station, auto repair, pad site, etc.)  
            </option>  
          </optgroup>  
  
          <optgroup label="Other">  
            <option value="Other / Restricted">Other / Restricted</option>  
            <option value="Unknown">Unknown</option>  
            <option value="N/A">N/A</option>  
          </optgroup>  
        </select>  
        <div id="pu_mkt_proposed_use_error" class="field-error hidden">Proposed use is required.</div>  
      </div>  
  
      <div class="border border-gray-200 rounded-xl p-4">  
        <label class="label" for="pu_subject_property_condition_arv">Condition after repair/development?</label>  
        <select id="pu_subject_property_condition_arv" name="subject_property_condition_arv" required class="select">  
          <option value="">Select Condition...</option>  
          <option value="Excellent">Excellent</option>  
          <option value="Good">Good</option>  
          <option value="Average">Average</option>  
          <option value="Fair">Fair</option>  
          <option value="Poor">Poor</option>  
          <option value="Damaged">Damaged</option>  
          <option value="Not Applicable">Not Applicable</option>  
        </select>  
        <div id="pu_subject_property_condition_arv_error" class="field-error hidden">ARV condition is required.</div>  
      </div>  
    </div>  
  
    <!-- Common Use + Consistency (same row) -->  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
      <div class="border border-gray-200 rounded-xl p-4">  
        <label class="label" for="pu_mkt_common_use">Most common use of similar land parcels?</label>  
        <select id="pu_mkt_common_use" name="mkt_common_use" required class="select">  
          <option value="">Select Common Use...</option>  
  
          <optgroup label="Vacant / Idle">  
            <option value="Vacant Land (no active use)">Vacant Land (no active use)</option>  
            <option value="Idle / Abandoned (previous use but currently unused)">Idle / Abandoned (previous use but currently unused)</option>  
          </optgroup>  
  
          <optgroup label="Residential">  
            <option value="Single-Family Residence">Single-Family Residence</option>  
            <option value="Residential Condominium">Residential Condominium</option>  
            <option value="Multifamily Residence (2–4 units)">Multifamily Residence (2–4 units)</option>  
            <option value="Apartment Building (5+ units)">Apartment Building (5+ units)</option>  
            <option value="Manufactured / Mobile Home Use">Manufactured / Mobile Home Use</option>  
          </optgroup>  
  
          <optgroup label="Commercial / Industrial">  
            <option value="Retail Use (storefront, shopping, etc.)">Retail Use (storefront, shopping, etc.)</option>  
            <option value="Office Use">Office Use</option>  
            <option value="Mixed-Use Occupancy (residential + commercial)">Mixed-Use Occupancy (residential + commercial)</option>  
            <option value="Industrial / Warehouse Use">Industrial / Warehouse Use</option>  
            <option value="Special Commercial (gas station, auto repair, pad site, etc.)">  
              Special Commercial (gas station, auto repair, pad site, etc.)  
            </option>  
          </optgroup>  
  
          <optgroup label="Other">  
            <option value="Other / Restricted">Other / Restricted</option>  
            <option value="Unknown">Unknown</option>  
            <option value="N/A">N/A</option>  
          </optgroup>  
        </select>  
        <div id="pu_mkt_common_use_error" class="field-error hidden">Common use is required.</div>  
      </div>  
  
      <div class="border border-gray-200 rounded-xl p-4">  
        <label class="label" for="pu_mkt_use_consistent_yn">Consistent with common use?</label>  
        <select id="pu_mkt_use_consistent_yn" name="mkt_use_consistent_yn" required class="select">  
          <option value="">Select Yes/No</option>  
          <option value="Yes">Yes</option>  
          <option value="No">No</option>  
        </select>  
        <div id="pu_mkt_use_consistent_yn_error" class="field-error hidden">Field required.</div>  
      </div>  
    </div>  
  
    <!-- Proposed Use Summary -->  
    <div class="border border-gray-200 rounded-xl p-4">  
      <label class="label" for="pu_proposed_use_summary">Provide a summary of the Proposed Use</label>  
      <textarea  
        id="pu_proposed_use_summary"  
        name="proposed_use_summary"  
        rows="4"  
        class="textarea"  
        maxlength="1500"  
      ></textarea>  
      <div  
        id="pu_proposed_use_summary_counter"  
        class="hint text-right"  
        aria-live="polite"  
      >  
        0 / 1500  
      </div>  
      <div id="pu_proposed_use_summary_error" class="field-error hidden">  
        <!-- Optional: only use this if you decide to make the summary required -->  
      </div>  
    </div>  
  </div>  
</section>  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- SECTION: Financial Feasibility Assessment -->  
<section id="sec-feasibility" class="section-card mt-8">  
  <h2 class="text-xl font-semibold">Financial Feasibility Assessment</h2>  
  
  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this section matters</p>  
    <p>This section combines your cost estimate with market values to gauge project viability.</p>  
  </div>  
  
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border">  
    <label class="block lg:col-span-2">  
      <span class="label">Total Estimated Repair/Rehab/Development Cost ($)</span>  
      <span class="hint">Enter the Total Estimated Cost from the Cost Estimate web form.</span>  
      <input  
        id="feas_total_cost"  
        name="feas_total_cost"  
        type="text"  
        inputmode="decimal"  
        required  
        class="input"  
        placeholder="e.g., 85,000"  
      />  
      <div id="feas_total_cost_error" class="field-error hidden">Cost is required.</div>  
    </label>  
  
    <label class="block">  
      <span class="label">Estimated Current Value ($)</span>  
      <span class="hint">Enter the Current Value from the Cost Estimate web form.</span>  
      <input  
        id="feas_value_current"  
        name="feas_value_current"  
        type="text"  
        inputmode="decimal"  
        required  
        class="input"  
        placeholder="e.g., 150,000"  
      />  
      <div id="feas_value_current_error" class="field-error hidden">Current value is required.</div>  
    </label>  
  
    <label class="block">  
      <span class="label">Estimated After Completion (ARV) Value ($)</span>  
      <span class="hint">Enter the ARV from the Cost Estimate web form.</span>  
      <input  
        id="feas_value_arv"  
        name="feas_value_arv"  
        type="text"  
        inputmode="decimal"  
        required  
        class="input"  
        placeholder="e.g., 225,000"  
      />  
      <div id="feas_value_arv_error" class="field-error hidden">ARV is required.</div>  
    </label>  
  </div>  
  
  <div class="space-y-2 p-4 rounded-xl items-start border-l-4 border-teal-500 bg-white ring-1 ring-teal-100 mt-4">  
    <div class="flex justify-between">  
      <span class="text-sm font-medium text-teal-800">Gross Value Gain (ARV − Current):</span>  
      <span id="feas_gross_gain_display" class="text-sm font-medium text-teal-800">$0.00</span>  
    </div>  
    <input type="hidden" id="feas_gross_gain" name="feas_gross_gain" value="0.00" />  
  
    <div class="flex justify-between">  
      <span class="text-sm font-medium text-teal-800">Net Project Profit (Gross Gain − Cost):</span>  
      <span id="feas_net_profit_display" class="text-sm font-medium text-teal-800">$0.00</span>  
    </div>  
    <input type="hidden" id="feas_net_profit" name="feas_net_profit" value="0.00" />  
  
    <div class="flex justify-between">  
      <span class="text-sm font-bold text-teal-900">Estimated ROI:</span>  
      <span id="feas_roi_display" class="text-sm font-bold text-teal-900">0.00%</span>  
    </div>  
    <input type="hidden" id="feas_roi" name="feas_roi" value="0.00" />  
    <p class="text-xs text-gray-500">ROI = (Net Project Profit ÷ Total Estimated Cost) × 100.</p>  
  </div>  
  
  <!-- Two selects on the same row, summary full-width below -->  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">  
    <label class="block">  
      <span class="label">Financial Feasible Assessment</span>  
      <select  
        id="feasibility_assessment"  
        name="feasibility_assessment"  
        required  
        class="select w-full"  
      >  
        <option value="">Select...</option>  
        <option>Financially Feasible</option>  
        <option>Feasibility is Contingent to Specified Conditions</option>  
        <option>Not Financially Feasible</option>  
      </select>  
      <div id="feasibility_assessment_error" class="field-error hidden">Assessment is required.</div>  
    </label>  
  
    <label class="block">  
      <span class="label">Recommended Action</span>  
      <select  
        id="sum_recommendation"  
        name="sum_recommendation"  
        class="select w-full"  
      >  
        <option value="">Select...</option>  
        <option>Proceed</option>  
        <option>Proceed with Conditions</option>  
        <option>Do Not Proceed</option>  
      </select>  
    </label>  
  
    <label class="block md:col-span-2">  
      <span class="label">Feasibility Summary</span>  
      <textarea  
        id="feasibility_summary"  
        name="feasibility_summary"  
        rows="5"  
        maxlength="1500"  
        class="textarea"  
        placeholder="Summarize the financial reasoning..."  
      ></textarea>  
      <div id="feasibility_summary_counter" class="hint text-right" aria-live="polite">0 / 1500</div>  
    </label>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- SECTION: Executive Summary & Client Conclusion -->   
<section id="sec-exec-summary" class="section-card space-y-6 mt-8">  
  <h2 class="text-xl font-semibold">Executive Summary & Client Conclusion</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this section matters</p>  
    <p>  
      This section pulls together the key findings from the entire report into a clear, client-ready conclusion.   
      Use it to highlight the subject's overall condition, major risks or strengths, and any special considerations   
      that should guide the client’s final decision.  
    </p>  
  </div>  
  
  <!-- Overall condition summary -->  
  <label class="block">  
    <span class="label">Property Condition Assessment Summary</span>  
    <textarea  
      id="sum_prop_condition"  
      name="sum_prop_condition"  
      rows="5"  
      maxlength="2500"  
      class="textarea"  
      placeholder="Concise, client-ready summary of the property’s current condition, strengths, and key risks..."  
    ></textarea>  
    <div id="sum_prop_condition_counter" class="hint text-right" aria-live="polite">0 / 2500</div>  
  </label>  
  
  <!-- Additional notes -->  
  <label class="block">  
    <span class="label">Additional Notes / Special Assessment Summary</span>  
    <textarea  
      id="sum_additional_notes"  
      name="sum_additional_notes"  
      rows="5"  
      maxlength="1500"  
      class="textarea"  
      placeholder="Use this space for any special assessments, nuanced risk factors, or advisory notes to the client..."  
    ></textarea>  
    <div id="sum_additional_notes_counter" class="hint text-right" aria-live="polite">0 / 1500</div>  
  </label>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div class="px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row justify-between sm:items-center gap-3 mt-8 rounded-b-2xl">  
  <button  
    id="clear_draft_button"  
    type="button"  
    class="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"  
  >  
    Clear Draft  
  </button>  
  
  <button  
    id="generate_pdf_button"  
    type="button"  
    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"  
  >  
    Generate PDF  
  </button>  
</div>  
  
  
            </div>  
        </form>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>    
document.addEventListener('DOMContentLoaded', () => {  
  
  /* =========================  
     0) jsPDF UMD Shim  
     ========================= */  
  if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
    window.jsPDF = window.jspdf.jsPDF;  
  }  
    
  // Load library via CDN if not present  
  const PDF_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';  
  if (!window.jspdf) {  
    const s = document.createElement('script');  
    s.src = PDF_CDN;  
    s.onload = () => {  
      if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
        window.jsPDF = window.jspdf.jsPDF;  
      }  
    };  
    document.head.appendChild(s);  
  }  
  
  /* =========================  
     1) PCR Utils & Registry  
     ========================= */  
  (function ensurePCR(){  
    if (!window.PCR) window.PCR = {};  
    const PCR = window.PCR;  
  
    if (!PCR.utils) {  
      const $  = (sel, ctx=document) => ctx.querySelector(sel);  
      const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));  
      const normalizeNum = (v) => {  
        if (v == null) return 0;  
        if (typeof v === 'number') return v;  
        const s = String(v).replace(/,/g, '').trim();  
        const n = parseFloat(s);  
        return isNaN(n) ? 0 : n;  
      };  
      PCR.utils = { $, $$, normalizeNum };  
    }  
  
    if (!PCR.sections) PCR.sections = {};  
    PCR.register = function(key, api){ this.sections[key] = api || {}; };  
    PCR.validateAll = function(){  
      let ok = true, firstEl = null;  
      Object.values(this.sections).forEach(s => {  
        try {  
          if (s.validate){  
            const r = s.validate();  
            if (!r.ok) ok = false;  
            if (!firstEl && r.firstEl) firstEl = r.firstEl;  
          }  
        } catch(e) {  
          console.error('validate', e);  
          ok = false;  
        }  
      });  
      return { ok, firstEl };  
    };  
    PCR.loadAll = function(){ Object.values(this.sections).forEach(s => { try { s.load && s.load(); } catch(e){} }); };  
    PCR.saveAll = function(){ Object.values(this.sections).forEach(s => { try { s.save && s.save(); } catch(e){} }); };  
    PCR.initAll = function(){ Object.values(this.sections).forEach(s => { try { s.init && s.init(); } catch(e){} }); };  
  })();  
  
  const FORM_ID     = 'pcrSummaryForm';  
  const FORM_VERSION = 'PCR_SUMMARY_V2';  
  const PREFILL_KEY  = 'PCR_ACTIVE_PROPERTY';  
  const formEl       = document.getElementById(FORM_ID);  
  const generatePdfBtn = document.getElementById('generate_pdf_button');  
  const clearDraftBtn  = document.getElementById('clear_draft_button');  
  
  if (!formEl) return;  
  
  const { $, normalizeNum } = window.PCR.utils;  
  
  // Helper: show/hide inline error  
  function showErr(id, show, msg){  
    if (!id) return;  
    const el = document.getElementById(id + '_error');  
    if (!el) return;  
    if (msg) el.textContent = msg;  
    el.classList.toggle('hidden', !show);  
    el.classList.toggle('show', !!show);  
  }  
  
  /* =========================  
     2) Modules  
     ========================= */  
       
  // A) General  
  window.PCR.register('general', {  
    validate: function(){  
      const req = ['address','city','state','zip'];  
      let ok = true, firstEl = null;  
      req.forEach(id => {  
        const el = document.getElementById(id);  
        const good = !!(el.value || '').trim();  
        showErr(id, !good);  
        if (!good && !firstEl) firstEl = el;  
        if (!good) ok = false;  
      });  
      return { ok, firstEl };  
    },  
    collect: function(){ return {}; },  
    save: function(){  
      const fd  = new FormData(formEl);  
      const raw = JSON.parse(localStorage.getItem(FORM_VERSION) || '{}');  
      // Currently only persisting key address fields  
      ['address','unit','city','state','zip'].forEach(k => raw[k] = fd.get(k));  
      localStorage.setItem(FORM_VERSION, JSON.stringify(raw));  
    },  
    load: function(){  
      const raw = JSON.parse(localStorage.getItem(FORM_VERSION) || '{}');  
      ['address','unit','city','state','zip'].forEach(n => {  
        if (raw[n] && formEl.elements[n]) formEl.elements[n].value = raw[n];  
      });  
    }  
  });  
  
  // B) Current Use  
  window.PCR.register('current_use', (() => {  
    const pairs = [  
      ['current_assessment_explain','current_assessment_explain_counter'],  
      ['comparison_surroundings_explain','comparison_surroundings_explain_counter'],  
      ['current_use_fit_explain','current_use_fit_explain_counter']  
    ];  
    function updateCounter(tid,cid){  
      const t = document.getElementById(tid), c = document.getElementById(cid);  
      if (!t || !c) return;  
      const max = t.getAttribute('maxlength') || 300;  
      c.textContent = `${t.value.length} / ${max}`;  
    }  
    return {  
      init: () => pairs.forEach(p =>   
        document.getElementById(p[0])?.addEventListener('input', () => updateCounter(p[0],p[1]))  
      ),  
      validate: () => {  
        const req = [  
          'current_use',  
          'subject_property_condition',  
          'current_assessment_rating',  
          'current_assessment_explain',  
          'comparison_surroundings_rating',  
          'comparison_surroundings_explain',  
          'current_use_fit_rating',  
          'current_use_fit_explain'  
        ];  
        let ok = true, firstEl = null;  
        req.forEach(id => {  
          const el   = document.getElementById(id);  
          const good = !!(el.value || '').trim();  
          showErr(id, !good);  
          if (!good){ ok = false; if (!firstEl) firstEl = el; }  
        });  
        return { ok, firstEl };  
      },  
      load: () => {  
        JSON.parse(localStorage.getItem(FORM_VERSION) || '{}'); // reserved for future  
        pairs.forEach(p => updateCounter(p[0],p[1]));  
      }  
    };  
  })());  
  
  // C) Financing  
  window.PCR.register('financing', (() => {  
    const els = {  
      type:  $('#financing_type'),  
      other: $('#financing_type_other'),  
      meets: $('#financing_meets_standards_yn'),  
      defx:  $('#financing_deficiencies_explain')  
      // NOTE: explanation textbox is optional and doesn't need extra validation  
    };  
    return {  
      init: () => {  
        els.type?.addEventListener('change', () => {  
          const isOther = els.type.value === 'Other';  
          showErr('financing_type_other', isOther && !els.other.value.trim());  
        });  
        els.meets?.addEventListener('change', () => {  
          const isNo = els.meets.value === 'No';  
          showErr('financing_deficiencies_explain', isNo && !els.defx.value.trim());  
        });  
      },  
      validate: () => {  
        let ok = true, firstEl = null;  
  
        const tGood = !!els.type.value;  
        showErr('financing_type', !tGood);  
        if (!tGood){ ok = false; if (!firstEl) firstEl = els.type; }  
  
        if (els.type.value === 'Other' && !els.other.value.trim()){  
          showErr('financing_type_other', true);  
          ok = false;  
          if (!firstEl) firstEl = els.other;  
        }  
          
        const mGood = !!els.meets.value;  
        showErr('financing_meets_standards_yn', !mGood);  
        if (!mGood){ ok = false; if (!firstEl) firstEl = els.meets; }  
  
        if (els.meets.value === 'No' && !els.defx.value.trim()){  
          showErr('financing_deficiencies_explain', true);  
          ok = false;  
          if (!firstEl) firstEl = els.defx;  
        }  
  
        return { ok, firstEl };  
      }  
    };  
  })());  
  
  // D) Association  
  window.PCR.register('assoc', (() => {  
    const els = {   
      notes: $('#al_assoc_fin_legal_notes'),   
      asses: $('#al_assoc_special_assessments'),   
      legal: $('#al_assoc_legal_issues'),   
      fin:   $('#al_assoc_financing_eligibility')   
    };  
    const needsSum = () =>  
      (els.asses?.value === 'Yes' || els.legal?.value === 'Yes' || els.fin?.value === 'Yes');  
    return {  
      init: () => els.notes?.addEventListener('input', () => {  
        const c = document.getElementById('al_assoc_fin_legal_notes_counter');  
        if (c) c.textContent = `${els.notes.value.length} / 1200`;  
      }),  
      validate: () => {  
        if (document.querySelector('input[name="assoc_in_community"]:checked')?.value !== 'Yes') {  
          return { ok: true };  
        }  
        if (needsSum() && !els.notes.value.trim()){  
          showErr('al_assoc_fin_legal_notes', true);  
          return { ok: false, firstEl: els.notes };  
        }  
        return { ok: true };  
      }  
    };  
  })());  
  
  // E) Proposed Use  
  window.PCR.register('proposed_use', (() => {  
    const els = {  
      yn:             $('#pu_mkt_use_consistent_yn'),  
      summary:        $('#pu_proposed_use_summary'),  
      summaryCounter: $('#pu_proposed_use_summary_counter')  
    };  
  
    function updateSummaryCounter() {  
      if (!els.summary || !els.summaryCounter) return;  
      const max = parseInt(els.summary.getAttribute('maxlength') || '1500', 10);  
      els.summaryCounter.textContent = `${els.summary.value.length} / ${max}`;  
    }  
  
    return {  
      init: () => {  
        if (els.summary) {  
          updateSummaryCounter();  
          els.summary.addEventListener('input', updateSummaryCounter);  
        }  
      },  
      validate: () => {  
        if (document.querySelector('input[name="future_use_assessed"]:checked')?.value !== 'Yes') {  
          return { ok: true };  
        }  
        let ok = true, firstEl = null;  
        [  
          'pu_mkt_proposed_use',  
          'pu_subject_property_condition_arv',  
          'pu_mkt_common_use',  
          'pu_mkt_use_consistent_yn'  
        ].forEach(id => {  
          const el   = document.getElementById(id);  
          const good = !!(el && el.value);  
          showErr(id, !good);  
          if (!good){ ok = false; if (!firstEl) firstEl = el; }  
        });  
        // summary is optional (no hard validation)  
        return { ok, firstEl };  
      }  
    };  
  })());  
  
  // F) Feasibility  
  window.PCR.register('feasibility', (() => {  
    const els = {  
      cost:  document.getElementById('feas_total_cost'),  
      cur:   document.getElementById('feas_value_current'),  
      arv:   document.getElementById('feas_value_arv'),  
      gainH: document.getElementById('feas_gross_gain'),  
      profH: document.getElementById('feas_net_profit'),  
      roiH:  document.getElementById('feas_roi'),  
      gainD: document.getElementById('feas_gross_gain_display'),  
      profD: document.getElementById('feas_net_profit_display'),  
      roiD:  document.getElementById('feas_roi_display')  
    };  
  
    function recalc(){  
      const cost = normalizeNum(els.cost?.value); // Total repair/rehab/development cost  
      const cv   = normalizeNum(els.cur?.value);  // Current-condition value  
      const av   = normalizeNum(els.arv?.value);  // After-completion (ARV) value  
  
      // Mirror Feasibility & Contributory Value inputs  
      const totalInvestment = cv + cost;  
      const grossGain       = av - cv;  
      const netContrib      = av - totalInvestment;  
  
      const roi = totalInvestment > 0 ? (netContrib / totalInvestment) * 100 : 0;  
  
      // Hidden values  
      if (els.gainH) els.gainH.value = grossGain.toFixed(2);  
      if (els.profH) els.profH.value = netContrib.toFixed(2);  
      if (els.roiH)  els.roiH.value  = roi.toFixed(2);  
  
      // Displays  
      const money = (n) =>  
        Number(n || 0).toLocaleString('en-US', {  
          style: 'currency',  
          currency: 'USD'  
        });  
  
      if (els.gainD) els.gainD.textContent = money(grossGain);  
      if (els.profD) els.profD.textContent = money(netContrib);  
      if (els.roiD)  els.roiD.textContent  = roi.toFixed(2) + '%';  
    }  
  
    return {  
      init: () => {  
        ['feas_total_cost','feas_value_current','feas_value_arv'].forEach(id => {  
          const el = document.getElementById(id);  
          if (el) el.addEventListener('input', recalc);  
        });  
        // Initial calculation on load  
        recalc();  
      },  
      recalc,  
      validate: () => {  
        if (document.querySelector('input[name="future_use_assessed"]:checked')?.value !== 'Yes') {  
          return { ok: true };  
        }  
        let ok = true, firstEl = null;  
        ['feas_total_cost','feas_value_current','feas_value_arv','feasibility_assessment'].forEach(id => {  
          const el   = document.getElementById(id);  
          const good = !!(el && (el.value || '').trim());  
          showErr(id, !good);  
          if (!good){ ok = false; if (!firstEl) firstEl = el; }  
        });  
        // Ensure latest numbers before submission/PDF  
        recalc();  
        return { ok, firstEl };  
      }  
    };  
  })());  
  
  
  /* =========================  
     3) PDF Generation  
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
    doc.setFillColor(240); // Light gray  
    doc.rect(12, y - 6, pageW - 24, 10, 'F');  
    doc.setFontSize(12);  
    doc.setFont('helvetica', 'bold');  
    doc.setTextColor(0);  
    doc.text(text, 16, y + 1);  
    return y + 12;  
  }  
  
  function pdfNarrative(doc, label, text, y, pageW, pageH) {  
    if (!text) return y;  
      
    if (y > pageH - 20) {  
      doc.addPage();   
      y = 20;  
    }  
      
    doc.setFont('helvetica', 'bold');  
    doc.setFontSize(10);  
    doc.setTextColor(60);  
    doc.text(label, 16, y);  
    y += 5;  
  
    doc.setFont('helvetica', 'normal');  
    doc.setTextColor(20);  
    const lines = doc.splitTextToSize(text, pageW - 32);  
      
    if (y + (lines.length * 5) > pageH - 20) {  
      doc.addPage();  
      y = 20;  
      doc.setFont('helvetica', 'bold');  
      doc.text(label + ' (cont.)', 16, y);  
      y += 5;  
      doc.setFont('helvetica', 'normal');  
    }  
      
    doc.text(lines, 16, y);  
    return y + (lines.length * 5) + 4;  
  }  
  
  async function generatePdf() {  
    const val = window.PCR.validateAll();  
    if (!val.ok) {  
      alert('Please fix validation errors before generating PDF.');  
      if (val.firstEl) val.firstEl.focus();  
      return;  
    }  
      
    if (!window.jsPDF) {  
      alert('PDF library not loaded. Please refresh.');  
      return;  
    }  
      
    const doc   = new window.jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });  
    const pageW = doc.internal.pageSize.getWidth();  
    const pageH = doc.internal.pageSize.getHeight();  
      
    if (window.PCR.sections.feasibility && window.PCR.sections.feasibility.recalc) {  
      window.PCR.sections.feasibility.recalc();  
    }  
    const fd = new FormData(formEl);  
    const fv = Object.fromEntries(fd.entries());  
  
    let y = 20;  
  
    // --- TITLE ---  
    doc.setFontSize(18);  
    doc.setFont('helvetica', 'bold');  
    doc.text('PCR Summary Report', pageW / 2, y, { align: 'center' });  
    y += 8;  
    doc.setFontSize(10);  
    doc.setFont('helvetica', 'normal');  
    doc.setTextColor(100);  
    doc.text(`Generated: ${new Date().toLocaleDateString()}`, pageW / 2, y, { align: 'center' });  
    doc.setTextColor(0);  
    y += 12;  
  
    // --- GENERAL INFO ---  
    y = sectionHeader(doc, 'General Property Info', y, pageW);  
    const addressStr =  
      `${fv.address || ''}, ` +  
      `${fv.unit ? 'Unit ' + fv.unit + ', ' : ''}` +  
      `${fv.city || ''}, ${fv.state || ''} ${fv.zip || ''}`;  
      
    /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
    y = pdfKV(doc, 'Property Address', addressStr, 16, y);  
      
    // --- CURRENT USE ---  
    y = sectionHeader(doc, 'Current Use Assessment', y + 4, pageW);  
    /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
    y = pdfKV(doc, 'Current Use', fv.current_use, 16, y);  
    /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
    y = pdfKV(doc, 'Current Condition', fv.subject_property_condition, 16, y);  
    y = pdfNarrative(doc, 'Assessment Rating: ' + (fv.current_assessment_rating || ''), fv.current_assessment_explain, y, pageW, pageH);  
    y = pdfNarrative(doc, 'Comparison to Surroundings: ' + (fv.comparison_surroundings_rating || ''), fv.comparison_surroundings_explain, y, pageW, pageH);  
    y = pdfNarrative(doc, 'Current Use Fit: ' + (fv.current_use_fit_rating || ''), fv.current_use_fit_explain, y, pageW, pageH);  
  
    // --- FINANCING & ASSOCIATION ---  
    if (y > pageH - 40) { doc.addPage(); y = 20; }  
    y = sectionHeader(doc, 'Financing & Association', y + 4, pageW);  
      
    let finType = fv.financing_type || '';  
    if (finType === 'Other' && fv.financing_type_other) {  
      finType += ` (${fv.financing_type_other})`;  
    }  
    /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
    y = pdfKV(doc, 'Likely Financing', finType, 16, y);  
  
    // NEW: Explanation for "Most likely financing available?"  
    // expects textarea with name="financing_type_explain"  
    y = pdfNarrative(doc, 'Financing Explanation', fv.financing_type_explain, y, pageW, pageH);  
      
    /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
    y = pdfKV(doc, 'Meets Standards?', fv.financing_meets_standards_yn || '', 16, y);  
    if (fv.financing_meets_standards_yn === 'No') {  
      y = pdfNarrative(doc, 'Deficiencies', fv.financing_deficiencies_explain, y, pageW, pageH);  
    }  
  
    // Association  
    const hasAssoc = document.querySelector('input[name="assoc_in_community"]:checked')?.value === 'Yes';  
    /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
    y = pdfKV(doc, 'HOA/Assoc Community?', hasAssoc ? 'Yes' : 'No', 16, y);  
      
    if (hasAssoc) {  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Occupancy Mix', fv.assoc_occupancy_mix, 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Special Assessments', fv.assoc_special_assessments, 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Legal Issues', fv.assoc_legal_issues, 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Financing Eligibility', fv.assoc_financing_eligibility, 16, y);  
      y = pdfNarrative(doc, 'Association Notes', fv.assoc_fin_legal_notes, y, pageW, pageH);  
    }  
  
    // --- FUTURE USE & FEASIBILITY (Conditional) ---  
    const hasFuture = document.querySelector('input[name="future_use_assessed"]:checked')?.value === 'Yes';  
      
    if (hasFuture) {  
      if (y > pageH - 60) { doc.addPage(); y = 20; }  
      y = sectionHeader(doc, 'Proposed Use & Feasibility', y + 4, pageW);  
        
      // Proposed Use block (names from form)  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Proposed Use', fv.mkt_proposed_use, 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'ARV Condition', fv.subject_property_condition_arv, 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Most Common Use of Similar Parcels', fv.mkt_common_use, 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Consistent with Common Use?', fv.mkt_use_consistent_yn, 16, y);  
  
      // Proposed Use Summary (textarea name="proposed_use_summary")  
      y = pdfNarrative(doc, 'Proposed Use Summary', fv.proposed_use_summary, y, pageW, pageH);  
  
      y += 4;  
      doc.setFont('helvetica', 'bold');  
      doc.text('Financial Analysis', 16, y);  
      y += 6;  
        
      const money = (v) =>  
        '$' + parseFloat(v || 0)  
          .toFixed(2)  
          .replace(/\d(?=(\d{3})+\.)/g, '$&,');  
        
      // Inputs  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Total Estimated Repair / Rehab / Development Cost', money(fv.feas_total_cost), 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Current Condition Value', money(fv.feas_value_current), 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'After-Completion (ARV) Value', money(fv.feas_value_arv), 16, y);  
  
      // Outputs (calculated)  
      doc.setTextColor(0, 128, 128);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Gross Value Gain', money(fv.feas_gross_gain), 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Net Contributory Value (Project Profit)', money(fv.feas_net_profit), 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Estimated ROI', (fv.feas_roi || '0') + '%', 16, y);  
      doc.setTextColor(0);  
  
      // Narrative feasibility fields  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Feasibility Assessment', fv.feasibility_assessment, 16, y);  
      /* ▼▼▼ pdfKV Call Updated ▼▼▼ */  
      y = pdfKV(doc, 'Client Recommendation', fv.sum_recommendation, 16, y);  
      y = pdfNarrative(doc, 'Feasibility Summary', fv.feasibility_summary, y, pageW, pageH);  
    }  
  
    // --- EXECUTIVE SUMMARY ---  
    if (y > pageH - 60) { doc.addPage(); y = 20; }  
    y = sectionHeader(doc, 'Executive Summary', y + 4, pageW);  
      
    y = pdfNarrative(doc, 'Condition Summary', fv.sum_prop_condition, y, pageW, pageH);  
    y = pdfNarrative(doc, 'Additional Notes', fv.sum_additional_notes, y, pageW, pageH);  
  
    // --- FOOTER ---  
    const pages = doc.internal.getNumberOfPages();  
    for (let i = 1; i <= pages; i++) {  
      doc.setPage(i);  
      doc.setFontSize(8);  
      doc.setTextColor(150);  
      doc.text(`Page ${i} of ${pages}`, pageW / 2, pageH - 10, { align: 'center' });  
    }  
  
    const safeName = (fv.address || 'Property').replace(/[^a-z0-9]/gi, '_');  
    doc.save(`PCR_Summary_${safeName}.pdf`);  
  }  
  
  /* =========================  
     4) Toggles & Init  
     ========================= */  
  function initToggles(){  
    // Association  
    const assocRadios = document.querySelectorAll('input[name="assoc_in_community"]');  
    const assocWrap   = document.getElementById('assoc_details_wrapper');  
    const handleAssoc = () => {  
      const yes = document.querySelector('input[name="assoc_in_community"]:checked')?.value === 'Yes';  
      assocWrap?.classList.toggle('hidden', !yes);  
    };  
    assocRadios.forEach(r => r.addEventListener('change', handleAssoc));  
    handleAssoc();  
  
    // Future Use  
    const fuRadios = document.querySelectorAll('input[name="future_use_assessed"]');  
    const secProp  = document.getElementById('sec-proposed-use');  
    const secFeas  = document.getElementById('sec-feasibility');  
    const handleFu = () => {  
      const yes = document.querySelector('input[name="future_use_assessed"]:checked')?.value === 'Yes';  
      secProp?.classList.toggle('hidden', !yes);  
      secFeas?.classList.toggle('hidden', !yes);  
    };  
    fuRadios.forEach(r => r.addEventListener('change', handleFu));  
    handleFu();  
  }  
  
  function loadPrefill(){  
    try {  
      const d = JSON.parse(localStorage.getItem(PREFILL_KEY) || '{}');  
      if (d.address) formEl.elements['address'].value = d.address;  
      if (d.city)    formEl.elements['city'].value    = d.city;  
      if (d.state)   formEl.elements['state'].value   = d.state;  
      if (d.zip)     formEl.elements['zip'].value     = d.zip;  
    } catch(e){}  
  }  
    
  function loadDraft(){  
    const raw = JSON.parse(localStorage.getItem(FORM_VERSION) || '{}');  
    Object.keys(raw).forEach(k => {  
      if (formEl.elements[k]) formEl.elements[k].value = raw[k];  
    });  
    window.PCR.loadAll();  
    try { window.PCR.sections.feasibility.recalc(); } catch(e){}  
  }  
  
  initToggles();  
  window.PCR.initAll();  
  loadPrefill();  
  loadDraft();  
  
  // Autosave hook (currently only 'general' has a save() implementation)  
  formEl.addEventListener('input', () => window.PCR.saveAll());  
  
  generatePdfBtn.addEventListener('click', generatePdf);  
  clearDraftBtn.addEventListener('click', () => {  
    if (confirm('Clear form?')) {  
      localStorage.removeItem(FORM_VERSION);  
      location.reload();  
    }  
  });  
  
});  
</script>  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
