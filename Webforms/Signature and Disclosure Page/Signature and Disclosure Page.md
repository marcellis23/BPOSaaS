**Signature and Disclosure Page**  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
  <title>Signature and Disclosure Page</title>  
  <script src="https://cdn.tailwindcss.com"></script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">  
  <style>  
    body{font-family:'Inter',sans-serif;background:#f3f4f6}  
    .form-card{background:#fff;border-radius:.75rem;box-shadow:0 4px 6px -1px rgb(0 0 0 / .1),0 2px 4px -2px rgb(0 0 0 / .1);padding:1.5rem;margin-bottom:1.5rem}  
    .form-input{width:100%;padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.375rem;transition:border-color .2s,box-shadow .2s}  
    .form-input:focus{outline:none;border-color:#4f46e5;box-shadow:0 0 0 2px rgba(79,70,229,.3)}  
    .upload-box{border:2px dashed #d1d5db;transition:border-color .2s,background-color .2s;cursor:pointer}  
    .upload-box:hover{border-color:#4f46e5;background:#f9fafb}  
    .upload-box img{display:none}  
    .upload-box.has-image{border-style:solid;border-color:#16a34a}  
    .upload-box.has-image img{display:block}  
      
.upload-box.has-image .upload-prompt{display:none}  
    .error-message{color:#ef4444;font-size:.875rem;margin-top:.25rem;display:none}  
    .is-invalid{border-color:#ef4444}  
    .repeater-row{display:flex;align-items:flex-start;gap:.5rem;margin-bottom:.5rem}  
    .remove-btn{height:2.5rem;width:2.5rem;flex-shrink:0;border:1px solid #d1d5db;color:#6b7280;border-radius:.375rem;background:#f9fafb;font-weight:bold}  
    .remove-btn:hover{background:#f3f4f6}  
    .add-btn{width:auto;background:#eef2ff;color:#4338ca;font-weight:500;padding:.5rem 1rem;border-radius:.375rem}  
    .add-btn:hover{background:#e0e7ff}  
  </style>  
</head>  
<body class="p-4 sm:p-8">  
  <div class="max-w-4xl mx-auto">  
    <h1 class="text-3xl font-bold text-gray-800 mb-2">Signature and Disclosure Page</h1>  
    <p class="text-gray-600 mb-8">Fill out the form below to generate a professional, one-page PDF signature page for your BPO report.</p>  
  
    <form id="bpo-form" novalidate>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div class="form-card">  
  <h2 class="text-xl font-semibold text-gray-900 border-b pb-3 mb-6">Report Context</h2>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">  
    <!-- Report Title -->  
    <div class="md:col-span-2">  
      <label for="reportTitle" class="block text-sm font-medium text-gray-700">Report Title</label>  
      <select id="reportTitle" name="reportTitle" class="form-input mt-1">  
        <option value="" selected disabled>-- Select a Report Type --</option>  
  
        <optgroup label="Condition & Site Reports">  
          <option value="Property Condition Report (PCR) - Exterior Only">Property Condition Report (PCR) - Exterior Only</option>  
          <option value="Property Condition Report (PCR) - Full Site">Property Condition Report (PCR) - Full Site</option>  
          <option value="Vacant Lot Site Report">Vacant Lot Site Report</option>  
        </optgroup>  
  
        <optgroup label="Cost & Repair Estimates">  
          <option value="Repair Estimates - Exterior Only">Repair Estimates - Exterior Only</option>  
          <option value="Repair Estimates - Full Site">Repair Estimates - Full Site</option>  
          <option value="New Construction Cost Assessment">New Construction Cost Assessment</option>  
        </optgroup>  
  
        <optgroup label="Market Analysis (CMA)">  
          <option value="Market Analysis Report">Market Analysis Report</option>  
          <option value="Comparable Market Analysis - Residential Vacant Lot">Comparable Market Analysis - Residential Vacant Lot</option>  
          <option value="Comparable Market Analysis - Residential SFR">Comparable Market Analysis - Residential SFR</option>  
          <option value="Comparable Market Analysis - Residential Multifamily (2-4 Units)">Comparable Market Analysis - Residential Multifamily (2-4 Units)</option>  
          <option value="Comparable Market Analysis - Multifamily (5+ Units)">Comparable Market Analysis - Multifamily (5+ Units)</option>  
          <option value="Comparable Market Analysis - Mixed-Use">Comparable Market Analysis - Mixed-Use</option>  
          <option value="Comparable Market Analysis - Commercial">Comparable Market Analysis - Commercial</option>  
          <option value="Comparable Market Analysis - Residential Vacant Lot w/Proposed Construction">Comparable Market Analysis - Residential Vacant Lot w/Proposed Construction</option>  
          <option value="Comparable Market Analysis - Residential SFR w/ARV">Comparable Market Analysis - Residential SFR w/ARV</option>  
          <option value="Comparable Market Analysis - Residential Multifamily (2-4 Units) w/ARV">Comparable Market Analysis - Residential Multifamily (2-4 Units) w/ARV</option>  
          <option value="Comparable Market Analysis - Multifamily (5+ Units) w/ARV">Comparable Market Analysis - Multifamily (5+ Units) w/ARV</option>  
          <option value="Comparable Market Analysis - Mixed-Use w/ARV">Comparable Market Analysis - Mixed-Use w/ARV</option>  
          <option value="Comparable Market Analysis - Commercial w/ARV">Comparable Market Analysis - Commercial w/ARV</option>  
        </optgroup>  
  
        <optgroup label="Real Estate Market Analysis">  
          <option value="Real Estate Market Analysis - Residential Vacant Lot">Real Estate Market Analysis - Residential Vacant Lot</option>  
          <option value="Real Estate Market Analysis - Residential SFR">Real Estate Market Analysis - Residential SFR</option>  
          <option value="Real Estate Market Analysis - Residential Multifamily (2-4 Units)">Real Estate Market Analysis - Residential Multifamily (2-4 Units)</option>  
          <option value="Real Estate Market Analysis - Multifamily (5+ Units)">Real Estate Market Analysis - Multifamily (5+ Units)</option>  
          <option value="Real Estate Market Analysis - Mixed-Use">Real Estate Market Analysis - Mixed-Use</option>  
          <option value="Real Estate Market Analysis - Commercial">Real Estate Market Analysis - Commercial</option>  
          <option value="Real Estate Market Analysis - Residential Vacant Lot w/Proposed Construction">Real Estate Market Analysis - Residential Vacant Lot w/Proposed Construction</option>  
          <option value="Real Estate Market Analysis - Residential SFR w/ARV">Real Estate Market Analysis - Residential SFR w/ARV</option>  
          <option value="Real Estate Market Analysis - Residential Multifamily (2-4 Units) w/ARV">Real Estate Market Analysis - Residential Multifamily (2-4 Units) w/ARV</option>  
          <option value="Real Estate Market Analysis - Multifamily (5+ Units) w/ARV">Real Estate Market Analysis - Multifamily (5+ Units) w/ARV</option>  
          <option value="Real Estate Market Analysis - Mixed-Use w/ARV">Real Estate Market Analysis - Mixed-Use w/ARV</option>  
          <option value="Real Estate Market Analysis - Commercial w/ARV">Real Estate Market Analysis - Commercial w/ARV</option>  
        </optgroup>  
  
        <optgroup label="Broker Price Opinion (BPO)">  
          <option value="Broker Price Opinion - Residential Vacant Lot">Broker Price Opinion - Residential Vacant Lot</option>  
          <option value="Broker Price Opinion - Residential SFR">Broker Price Opinion - Residential SFR</option>  
          <option value="Broker Price Opinion - Residential Multifamily (2-4 Units)">Broker Price Opinion - Residential Multifamily (2-4 Units)</option>  
          <option value="Broker Price Opinion - Multifamily (5+ Units)">Broker Price Opinion - Multifamily (5+ Units)</option>  
          <option value="Broker Price Opinion - Mixed-Use">Broker Price Opinion - Mixed-Use</option>  
          <option value="Broker Price Opinion - Commercial">Broker Price Opinion - Commercial</option>  
          <option value="Broker Price Opinion - Residential Vacant Lot w/Proposed Construction">Broker Price Opinion - Residential Vacant Lot w/Proposed Construction</option>  
          <option value="Broker Price Opinion - Residential SFR w/ARV">Broker Price Opinion - Residential SFR w/ARV</option>  
          <option value="Broker Price Opinion - Residential Multifamily (2-4 Units) w/ARV">Broker Price Opinion - Residential Multifamily (2-4 Units) w/ARV</option>  
          <option value="Broker Price Opinion - Multifamily (5+ Units) w/ARV">Broker Price Opinion - Multifamily (5+ Units) w/ARV</option>  
          <option value="Broker Price Opinion - Mixed-Use w/ARV">Broker Price Opinion - Mixed-Use w/ARV</option>  
          <option value="Broker Price Opinion - Commercial w/ARV">Broker Price Opinion - Commercial w/ARV</option>  
        </optgroup>  
      </select>  
    </div>  
  
    <!-- Effective Date (own row) -->  
    <div class="md:col-span-2">  
      <label for="effectiveDate" class="block text-sm font-medium text-gray-700">Effective Date</label>  
      <input type="date" id="effectiveDate" name="effectiveDate" class="form-input mt-1" required>  
      <p class="error-message">This field is required.</p>  
    </div>  
  
    <!-- Street + Unit # on same row -->  
    <div class="md:col-span-2">  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <div class="md:col-span-2">  
          <label for="street" class="block text-sm font-medium text-gray-700">Subject Property Address</label>  
          <input type="text" id="street" name="property_street" class="form-input mt-1" placeholder="123 Main St" required>  
          <p class="error-message">This field is required.</p>  
        </div>  
        <div>  
          <label for="unitNumber" class="block text-sm font-medium text-gray-700">Unit #</label>  
          <input type="text" id="unitNumber" name="property_unit" class="form-input mt-1" placeholder="Apt 2B">  
        </div>  
      </div>  
    </div>  
  
    <!-- City, State, ZIP on same row -->  
    <div class="md:col-span-2">  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <div>  
          <label for="city" class="block text-sm font-medium text-gray-700">City</label>  
          <input type="text" id="city" name="property_city" class="form-input mt-1" required>  
          <p class="error-message">This field is required.</p>  
        </div>  
        <div>  
          <label for="state" class="block text-sm font-medium text-gray-700">Property State</label>  
          <select id="state" name="property_state" class="form-input mt-1" required></select>  
          <p class="error-message">Please select a state.</p>  
        </div>  
        <div>  
          <label for="zip" class="block text-sm font-medium text-gray-700">ZIP Code</label>  
          <input  
            type="text"  
            id="zip"  
            name="property_zip"  
            class="form-input mt-1"  
            pattern="^[0-9A-Za-z -]{3,10}$"  
            title="Enter a valid ZIP/Postal code"  
            required  
          >  
          <p class="error-message">Enter a valid ZIP/Postal code.</p>  
        </div>  
      </div>  
    </div>  
  
    <!-- Intended User -->  
    <div class="md:col-span-2">  
      <label for="intendedUser" class="block text-sm font-medium text-gray-700">Intended User</label>  
      <input  
        type="text"  
        id="intendedUser"  
        name="intendedUser"  
        class="form-input mt-1"  
        placeholder="e.g., Property Owner, Attorney"  
        required  
      >  
      <p class="error-message">This field is required.</p>  
    </div>  
  
    <!-- Purpose -->  
    <div class="md:col-span-2">  
      <label for="purpose" class="block text-sm font-medium text-gray-700">Intended Use / Purpose</label>  
      <textarea  
        id="purpose"  
        name="purpose"  
        rows="3"  
        class="form-input mt-1"  
        required  
      >assist the client in estimating a probable selling price for the subject property</textarea>  
      <p class="error-message">This field is required.</p>  
    </div>  
  </div>  
</div>  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div class="form-card">  
   
       <h2 class="text-xl font-semibold text-gray-900 border-b pb-3 mb-6">Assumptions & Limiting Conditions</h2>  
        <div id="assumptions-container" class="space-y-2"></div>  
        <button type="button" id="add-assumption-btn" class="add-btn mt-4">+ Add Assumption</button>  
      </div>  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
      <div class="form-card">  
        <h2 class="text-xl font-semibold text-gray-900 border-b pb-3 mb-6">Additional Disclosures</h2>  
        <div id="disclosures-container" class="space-y-2"></div>  
        <button type="button"   
id="add-disclosure-btn" class="add-btn mt-4">+ Add Disclosure</button>  
      </div>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
      <div class="form-card">  
        <h2 class="text-xl font-semibold text-gray-900 border-b pb-3 mb-6">Disclosures & Certifications</h2>  
        <div class="space-y-6">  
          <div>  
            <h3 class="font-semibold text-gray-800 mb-2">State-Specific Disclosure</h3>  
  
            <label for="disclosureState" class="block   
text-sm font-medium text-gray-700">Disclosure State</label>  
            <select id="disclosureState" class="form-input mt-1"></select>  
  
            <div id="state-disclosure-text" class="mt-3 p-3 bg-gray-100 rounded-md text-sm text-gray-700 whitespace-pre-line">  
              Please select a state.  
</div>  
          </div>  
  
          <div>  
            <label for="certificationText" class="block text-sm font-medium text-gray-700">Certification Statement</label>  
            <textarea id="certificationText" name="certificationText" rows="4" class="form-input mt-1">I certify that this Broker's Price Opinion was prepared by me or under my direct supervision.  
The statements of fact contained in this report are true and correct to the best of my knowledge and belief.  
I understand that this BPO is not an appraisal and has been prepared for the intended user and purpose stated herein.</textarea>  
          </div>  
  
          <div>  
            <fieldset>  
              <legend class="text-sm font-medium text-gray-700">Agent Interest Disclosure</legend>  
              <div class="mt-2 space-y-2">  
               
   <div class="flex items-center">  
                  <input id="interest-none" name="agentInterest" type="radio" value="None" class="h-4 w-4 text-indigo-600 border-gray-300" checked>  
                  <label for="interest-none" class="ml-3 block text-sm text-gray-800">I have no present or prospective interest in the property.</label>  
                </div>  
                <div class="flex items-center">  
    
                <input id="interest-other" name="agentInterest" type="radio" value="Other" class="h-4 w-4 text-indigo-600 border-gray-300">  
                  <label for="interest-other" class="ml-3 block text-sm text-gray-800">Other (explain)</label>  
                </div>  
              </div>  
            </fieldset>  
            
  <div id="agent-interest-note-container" class="mt-4 hidden">  
              <textarea id="agentInterestNote" name="agentInterestNote" rows="2" class="form-input" placeholder="Explain agent interest..."></textarea>  
              <p class="error-message">Please explain your interest.</p>  
            </div>  
          </div>  
        </div>  
      </div>  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div class="form-card">  
    
      <h2 class="text-xl font-semibold text-gray-900 border-b pb-3 mb-6">Compliance & Signature</h2>  
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6">  
          <div class="md:col-span-3 space-y-6">  
            <fieldset>  
              <legend class="text-sm font-medium text-gray-700 mb-2">Compliance Checkboxes</legend>  
              <div class="flex items-start">  
                 
 <input id="mlsCompliant" name="mlsCompliant" type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded" required>  
                <label for="mlsCompliant" class="ml-3 block text-sm text-gray-800">I have complied with applicable state law and MLS rules in preparing this BPO.</label>  
              </div>  
              <div class="flex items-start mt-2">  
                <input id="nonLending" name="nonLending" type="checkbox" class="h-4 w-4 text-indigo-600 border-gray-300 rounded"   
required>  
                <label for="nonLending" class="ml-3 block text-sm text-gray-800">I understand this BPO is for non-lending purposes unless otherwise permitted by law.</label>  
              </div>  
              <p class="error-message">Both compliance boxes must be checked.</p>  
            </fieldset>  
  
            <div>  
           
     <label for="licenseeName" class="block text-sm font-medium text-gray-700">Licensee Full Name *</label>  
              <input type="text" id="licenseeName" name="licenseeName" class="form-input mt-1" required>  
              <p class="error-message">This field is required.</p>  
            </div>  
            <div>  
              <label for="licenseNumber" class="block text-sm font-medium text-gray-700">License Number</label>  
       
         <input type="text" id="licenseNumber" name="licenseNumber" class="form-input mt-1">  
            </div>  
            <div>  
              <label for="signatureDate" class="block text-sm font-medium text-gray-700">Signature Date *</label>  
              <input type="date" id="signatureDate" name="signatureDate" class="form-input mt-1" required>  
              <p class="error-message">This field is required.</p>  
     
         </div>  
          </div>  
  
          <div class="md:col-span-2">  
            <label class="block text-sm font-medium text-gray-700 mb-1">Signature Image *</label>  
            <label for="signature-input" id="signature-upload-box" class="upload-box w-full h-32 rounded-lg flex items-center justify-center text-center p-2">  
              <div class="upload-prompt text-gray-500">  
              
    <svg class="mx-auto h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/></svg>  
                <p class="text-xs mt-1">Click to upload signature</p>  
              </div>  
              <img id="signature-preview" alt="Signature   
preview" class="w-full h-full object-contain rounded-md">  
            </label>  
            <input type="file" id="signature-input" accept="image/png, image/jpeg" class="hidden">  
            <p id="signature-error" class="error-message">A signature image is required.</p>  
          </div>  
        </div>  
      </div>  
  
      <div class="mt-6">  
        <button type="submit" class="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg   
hover:bg-indigo-700 disabled:bg-gray-400">Generate PDF</button>  
        <p id="statusMsg" class="mt-2 text-sm text-gray-600"></p>  
      </div>  
    </form>  
  </div>  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
    document.addEventListener('DOMContentLoaded', () => {  
      // --- STATE & DATA ---  
        
      const STATE_DISCLOSURES = {  
        "PA": "State of Pennsylvania Disclaimer\nThis analysis has not been prepared in accordance with the Uniform Standards of Professional Appraisal Practice which require valuers to act as unbiased, disinterested third parties with impartiality, objectivity and independence and without accommodation of personal interest. It is not to be construed as an appraisal and may not be used as such for any purpose.",  
        "NJ": "This CMA or BPO should not be considered the equivalent of an appraisal prepared by a New Jersey licensed or certified real estate appraiser.",  
        "DE": "This Broker Price Opinion/Comparative Market Analysis was completed within the rules and guidelines outlined by the laws of Delaware. It is not an appraisal and may not be used in lieu of an appraisal or as the primary basis for a mortgage loan origination.",  
        "TX": "This represents an estimated sale price for this property. It is not the same as the opinion of value in an appraisal developed by a licensed appraiser under the Uniform Standards of Professional Appraisal Practice.",  
        "NC": "This opinion is not an appraisal of the market value of the property, and may not be used in lieu of an appraisal. If an appraisal is desired, the services of a licensed or certified appraiser shall be obtained. This opinion may not be used by any party as the primary basis to determine the value of a parcel of or interest in real property for a mortgage loan origination, including first and second mortgages, refinances, or equity lines of credit.",  
        "SC": "This market analysis or price opinion may not be used for the purposes of obtaining financing in a federally related transaction.",  
        "DEFAULT": "This broker’s price opinion is not an appraisal of market value and should not be used for that purpose."  
      };  
  
      const US_STATES_AND_TERRITORIES = [  
        { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" },  
        { code: "AS", name: "American Samoa" }, { code: "AZ", name: "Arizona" },  
        { code: "AR", name: "Arkansas" }, { code: "CA", name: "California" },  
        { code: "CO", name: "Colorado" }, { code: "CT", name: "Connecticut" },  
        { code: "DE", name: "Delaware" }, { code: "DC", name: "District of Columbia" },  
        { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" },  
        { code: "GU", name: "Guam" }, { code: "HI", name: "Hawaii" },  
        { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" },  
        { code: "IN", name: "Indiana" }, { code: "IA", name: "Iowa" },  
        { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" },  
        { code: "LA", name: "Louisiana" }, { code: "ME", name: "Maine" },  
        { code: "MD", name: "Maryland" }, { code: "MA", name: "Massachusetts" },  
        { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" },  
        { code: "MS", name: "Mississippi" }, { code: "MO", name: "Missouri" },  
        { code: "MT", name: "Montana" }, { code: "NE", name: "Nebraska" },  
        { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" },  
        { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" },  
        { code: "NY", name: "New York" }, { code: "NC", name: "North Carolina" },  
        { code: "ND", name: "North Dakota" }, { code: "MP", name: "Northern Mariana Islands" },  
        { code: "OH", name: "Ohio" }, { code: "OK", name: "Oklahoma" },  
        { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },  
        { code: "PR", name: "Puerto Rico" }, { code: "RI", name: "Rhode Island" },  
        { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },  
        { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" },  
        { code: "UT", name: "Utah" }, { code: "VT", name: "Vermont" },  
        { code: "VI", name: "U.S. Virgin Islands" }, { code: "VA", name: "Virginia" },  
        { code: "WA", name: "Washington" }, { code: "WV", name: "West Virginia" },  
        { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" }  
      ];  
  
const stateSelect = document.getElementById('state');           // property state  
      const disclosureSelect = document.getElementById('disclosureState');  
// disclosure state  
      const disclosureBox = document.getElementById('state-disclosure-text');  
// Helper function to populate select elements  
      function populateStateSelect(selectElement) {  
        const defaultOpt = document.createElement('option');  
        defaultOpt.value = "";  
        defaultOpt.textContent = "Select State / Territory...";  
        defaultOpt.disabled = true;  
        defaultOpt.selected = true;  
        selectElement.appendChild(defaultOpt);  
        US_STATES_AND_TERRITORIES.forEach(({code, name}) => {  
          selectElement.add(new Option(name, code));  
        });  
      }  
  
      // Populate both dropdowns with the full list  
      populateStateSelect(stateSelect);  
      populateStateSelect(disclosureSelect);  
        
      // Set default for disclosure state and update text  
disclosureSelect.value = 'PA';  
      disclosureBox.textContent = STATE_DISCLOSURES['PA'] || STATE_DISCLOSURES.DEFAULT;  
  
      disclosureSelect.addEventListener('change', (e) => {  
        const code = e.target.value;  
        disclosureBox.textContent = STATE_DISCLOSURES[code] || STATE_DISCLOSURES.DEFAULT;  
      });  
let signatureDataUrl = null;  
  
      // --- DOM Refs ---  
      const form = document.getElementById('bpo-form');  
const statusMsg = document.getElementById('statusMsg');  
  
      // Default dates  
      const today = new Date().toISOString().split('T')[0];  
      document.getElementById('effectiveDate').value = today;  
document.getElementById('signatureDate').value = today;  
  
      // Agent interest note toggle  
      const agentInterestRadios = document.querySelectorAll('input[name="agentInterest"]');  
const interestNoteWrap = document.getElementById('agent-interest-note-container');  
      const interestNote = document.getElementById('agentInterestNote');  
      agentInterestRadios.forEach(r => {  
        r.addEventListener('change', (e) => {  
          const other = e.target.value === 'Other';  
          interestNoteWrap.classList.toggle('hidden', !other);  
          interestNote.required = other;  
        });  
      });  
// Signature upload  
      const sigBox = document.getElementById('signature-upload-box');  
      const sigInput = document.getElementById('signature-input');  
      const sigPreview = document.getElementById('signature-preview');  
sigBox.addEventListener('click', () => sigInput.click());  
      sigInput.addEventListener('change', (e) => {  
        const file = e.target.files[0];  
        if (!file) return;  
        const reader = new FileReader();  
        reader.onload = (ev) => {  
          signatureDataUrl = ev.target.result;  
          sigPreview.src = signatureDataUrl;  
          sigBox.classList.add('has-image');  
          document.getElementById('signature-error').style.display = 'none';  
    
      };  
        reader.readAsDataURL(file);  
      });  
// Repeaters  
      document.getElementById('add-assumption-btn').addEventListener('click', () => {  
        addRepeaterField('assumptions-container', 'Enter an assumption...');  
      });  
document.getElementById('add-disclosure-btn').addEventListener('click', () => {  
        addRepeaterField('disclosures-container', 'Enter a disclosure...');  
      });  
// Submit  
      form.addEventListener('submit', (e) => {  
        e.preventDefault();  
        const submitBtn = e.target.querySelector('button[type="submit"]');  
        submitBtn.disabled = true;  
        statusMsg.textContent = 'Generating PDF...';  
  
        if (!validateForm()) {  
          submitBtn.disabled = false;  
          statusMsg.textContent = 'Please fix the errors above.';  
          return;  
    
      }  
  
        try {  
          renderSignaturePDF(getFormData());  
          statusMsg.textContent = 'PDF generated successfully.';  
        } catch (err) {  
          console.error('PDF Generation Error:', err);  
          statusMsg.textContent = 'An error occurred while generating the PDF.';  
        } finally {  
           
 submitBtn.disabled = false;  
        }  
      });  
// --- Helpers ---  
      function addRepeaterField(containerId, placeholder) {  
        const container = document.getElementById(containerId);  
const row = document.createElement('div');  
        row.className = 'repeater-row';  
        row.innerHTML = `  
          <textarea class="form-input" rows="2" placeholder="${placeholder}"></textarea>  
          <button type="button" class="remove-btn" aria-label="Remove" title="Remove">×</button>  
        `;  
row.querySelector('.remove-btn').addEventListener('click', () => row.remove());  
        container.appendChild(row);  
      }  
  
      function sanitizeFilename(str) {  
        return String(str || '')  
          .replace(/\s+/g, '_')  
          .replace(/[^\w\-\.]/g, '')  
          .substring(0, 80) ||  
'BPO_Signature';  
      }  
  
      function getImageFormatFromDataUrl(dataUrl) {  
        if (!dataUrl) return undefined;  
if (dataUrl.startsWith('data:image/png')) return 'PNG';  
        if (dataUrl.startsWith('data:image/jpeg') || dataUrl.startsWith('data:image/jpg')) return 'JPEG';  
        return undefined;  
}  
  
      function getFormData() {  
        return {  
          reportTitle: document.getElementById('reportTitle').value,  
          property: {  
            street: document.getElementById('street').value,  
            city: document.getElementById('city').value,  
            state: document.getElementById('state').value,  
            zip: document.getElementById('zip').value  
           
 },  
          effectiveDate: document.getElementById('effectiveDate').value,  
          intendedUser: document.getElementById('intendedUser').value,  
          purpose: document.getElementById('purpose').value,  
          licensee: {  
            name: document.getElementById('licenseeName').value,  
            number: document.getElementById('licenseNumber').value  
          },  
          disclosures: {  
          
    certificationText: document.getElementById('certificationText').value,  
            agentInterest: document.querySelector('input[name="agentInterest"]:checked').value,  
            agentInterestNote: interestNote.value ||  
''  
          },  
          disclosureState: disclosureSelect.value,  
          stateDisclosure: STATE_DISCLOSURES[disclosureSelect.value] ||  
STATE_DISCLOSURES.DEFAULT,  
          assumptions: Array.from(document.querySelectorAll('#assumptions-container textarea')).map(ta => ta.value.trim()).filter(Boolean),  
          additionalDisclosures: Array.from(document.querySelectorAll('#disclosures-container textarea')).map(ta => ta.value.trim()).filter(Boolean),  
          signature: {  
            imageDataUrl: signatureDataUrl,  
            date: document.getElementById('signatureDate').value  
          }  
        };  
}  
  
      function validateForm() {  
        let isValid = true;  
form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));  
        form.querySelectorAll('.error-message').forEach(el => (el.style.display = 'none'));  
  
        form.querySelectorAll('[required]').forEach(field => {  
          const type = field.getAttribute('type');  
          let fieldValid = true;  
  
          if (type === 'checkbox') fieldValid = field.checked;  
          else if (field.tagName === 'SELECT') fieldValid = !!field.value;  
          else fieldValid = !!String(field.value || '').trim();  
  
          if (!fieldValid) {  
      
        field.classList.add('is-invalid');  
            const errorContainer = field.closest('fieldset') || field.parentElement;  
            const errorEl = errorContainer.querySelector('.error-message');  
            if (errorEl) errorEl.style.display = 'block';  
            isValid = false;  
          }  
        });  
if (!signatureDataUrl) {  
          document.getElementById('signature-error').style.display = 'block';  
          isValid = false;  
}  
  
        const interestVal = document.querySelector('input[name="agentInterest"]:checked')?.value;  
if (interestVal === 'Other' && !document.getElementById('agentInterestNote').value.trim()) {  
          document.getElementById('agentInterestNote').classList.add('is-invalid');  
document.querySelector('#agent-interest-note-container .error-message').style.display = 'block';  
          isValid = false;  
        }  
  
        return isValid;  
}  
  
      function renderSignaturePDF(formData) {  
        const { jsPDF } = window.jspdf;  
const doc = new jsPDF({ unit: 'pt', format: 'letter' });  
  
        const pageW = doc.internal.pageSize.getWidth();  
        const pageH = doc.internal.pageSize.getHeight();  
const margin = 50;  
        const contentW = pageW - margin * 2;  
  
        const footerReserve = 40;  
        const signatureReserve = 110;  
let y = margin;  
  
        const setHeaderStyle = () => doc.setFont('helvetica', 'bold').setFontSize(14);  
        const setSubheaderStyle = () => doc.setFont('helvetica', 'bold').setFontSize(10);  
const setBodyStyle = (style='normal') => doc.setFont('helvetica', style).setFontSize(10);  
        const setSmallStyle = () => doc.setFont('helvetica', 'normal').setFontSize(8);  
const ensureSpace = (need) => {  
          const limit = pageH - margin - footerReserve;  
if (y + need > limit) {  
            doc.addPage();  
y = margin;  
          }  
        };  
// Header  
        setHeaderStyle();  
        doc.text(formData.reportTitle, pageW / 2, y, { align: 'center' });  
y += 20;  
  
        setBodyStyle();  
        const fullAddress = `${formData.property.street}, ${formData.property.city}, ${formData.property.state} ${formData.property.zip}`;  
doc.text(`Subject: ${fullAddress}`, pageW / 2, y, { align: 'center' });  
        y += 15;  
doc.text(`Effective Date: ${new Date(formData.effectiveDate + 'T00:00:00').toLocaleDateString()}`, pageW / 2, y, { align: 'center' });  
        y += 20;  
  
        doc.setLineWidth(0.5);  
doc.line(margin, y, pageW - margin, y);  
        y += 20;  
  
        const writePara = (title, body) => {  
          ensureSpace(30);  
setSubheaderStyle();  
          doc.text(title, margin, y);  
          y += 15;  
          setBodyStyle();  
          const split = doc.splitTextToSize(body, contentW);  
          ensureSpace(split.length * 12 + 6);  
doc.text(split, margin, y);  
          y += split.length * 12;  
        };  
  
        // Certification & Disclosures  
        writePara('Certification & Disclosures',  
          `This opinion is provided solely to assist the ${formData.intendedUser} with ${formData.purpose} as of the effective date.\n\n${formData.disclosures.certificationText}`  
        );  
// State disclaimer  
        const sd = formData.stateDisclosure || '';  
        const sdParts = sd.split('\n');  
const sdTitle = sdParts[0] || `State Disclaimer (${formData.disclosureState})`;  
        const sdBody = sdParts.slice(1).join('\n');  
        writePara(sdTitle, sdBody || STATE_DISCLOSURES.DEFAULT);  
// Agent interest (conditional)  
        if ((formData.disclosures.agentInterest || '') === 'Other' && formData.disclosures.agentInterestNote) {  
          writePara('Agent Interest', formData.disclosures.agentInterestNote);  
}  
  
        // Lists  
        const renderList = (title, items) => {  
          if (!items || !items.length) return;  
ensureSpace(24);  
          setSubheaderStyle();  
          doc.text(title, margin, y);  
          y += 15;  
          setBodyStyle();  
          items.forEach((item, i) => {  
            const txt = `${i + 1}. ${item}`;  
            const split = doc.splitTextToSize(txt, contentW);  
            ensureSpace(split.length * 12 + 4);  
            doc.text(split, margin, y);  
            y += split.length * 12 + 2;  
        
    });  
        };  
  
        renderList('Assumptions & Limiting Conditions', formData.assumptions);  
        renderList('Additional Disclosures', formData.additionalDisclosures);  
// Ensure signature block space  
        if (y + signatureReserve + footerReserve > pageH - margin) {  
          doc.addPage();  
y = margin;  
        }  
  
        // Signature Block  
        const sigTop = Math.max(y + 20, pageH - margin - footerReserve - signatureReserve);  
const sigLineY = sigTop + 60;  
  
        if (formData.signature.imageDataUrl) {  
          const imgFmt = getImageFormatFromDataUrl(formData.signature.imageDataUrl);  
const imgProps = doc.getImageProperties(formData.signature.imageDataUrl);  
          const sigHeight = 50;  
          const sigWidth = (imgProps.width * sigHeight) / imgProps.height;  
doc.addImage(formData.signature.imageDataUrl, imgFmt, margin, sigLineY - sigHeight, sigWidth, sigHeight);  
        } else {  
          doc.setLineWidth(0.5);  
doc.rect(margin, sigLineY - 50, 180, 50);  
          setSmallStyle();  
          doc.text('Signature', margin + 60, sigLineY - 20);  
          setBodyStyle();  
}  
  
        doc.setLineWidth(1);  
        doc.line(margin, sigLineY, margin + 250, sigLineY);  
doc.line(pageW - margin - 200, sigLineY, pageW - margin, sigLineY);  
  
        setBodyStyle();  
        doc.text(formData.licensee.name, margin, sigLineY + 15);  
if (formData.licensee.number) doc.text(`License #: ${formData.licensee.number}`, margin, sigLineY + 27);  
        const sigDate = new Date(formData.signature.date + 'T00:00:00').toLocaleDateString();  
doc.text(sigDate, pageW - margin, sigLineY + 15, { align: 'right' });  
doc.text("Date", pageW - margin, sigLineY + 27, { align: 'right' });  
// Footer  
        const footerY = pageH - margin;  
        doc.setLineWidth(0.5);  
doc.line(margin, footerY, pageW - margin, footerY);  
        setSmallStyle();  
        doc.text("BPO – Signature & Certification", margin, footerY + 15);  
doc.text("Equal Housing Opportunity", pageW - margin, footerY + 15, { align: 'right' });  
  
        const safeStreet = sanitizeFilename(formData.property.street);  
        doc.save(`BPO-Signature-${safeStreet}.pdf`);  
}  
    });  
  </script>  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
