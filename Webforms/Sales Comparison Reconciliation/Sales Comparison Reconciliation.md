# Sales Comparison Reconciliation  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>Sales Comparison Reconciliation</title>  
  <script src="https://cdn.tailwindcss.com"></script>  
  <!-- Lucide Icons -->  
  <script src="https://unpkg.com/lucide@latest"></script>  
  <!-- jsPDF Library -->  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  <style>  
    /* Print Styles to ensure clean PDF exports */  
    @media print {  
      body { background-color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }  
      .no-print { display: none !important; }  
      main { padding: 0 !important; max-width: 100% !important; }  
      .shadow-sm, .shadow-md, .shadow-lg, .shadow-xl { box-shadow: none !important; }  
      .bg-slate-50, .bg-blue-50 { background-color: #f8fafc !important; }  
      input, select, textarea { border: 1px solid #cbd5e1 !important; border-radius: 4px !important; }  
      textarea { resize: none; overflow: hidden; }  
      /* Force page breaks avoiding breaking inside sections if possible */  
      section { page-break-inside: avoid; margin-bottom: 2rem !important; }  
    }  
  </style>  
</head>  
<body class="bg-gray-50 text-gray-900 antialiased relative">  
  <main class="bg-white py-10 md:py-14 min-h-screen">  
    <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">  
        
      <!-- Header -->  
      <header class="text-center mb-12">  
        <div class="flex items-center justify-center gap-3 mb-4">  
          <div class="bg-blue-600 p-3 rounded-2xl text-white shadow-md print:bg-blue-600 print:text-white">  
            <i data-lucide="building-2" class="w-8 h-8"></i>  
          </div>  
          <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Sales Comparison Reconciliation</h1>  
        </div>  
        <p class="text-lg text-gray-600 max-w-2xl mx-auto no-print">  
          Complete the market data analysis below to determine your final valuation conclusion. Your progress is auto-saved.  
        </p>  
      </header>  
  
      <form id="reconciliationForm" class="space-y-12 md:space-y-16">  
          
        <!-- Step 1: Subject Property -->  
        <section id="step-subject">  
          <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-2">  
            <i data-lucide="map-pin" class="text-blue-600 w-6 h-6"></i> Subject Property Overview  
          </h2>  
          <span class="block mt-2 h-1 w-12 rounded-full bg-blue-600 mb-6"></span>  
            
          <!-- Section detail box -->  
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-800 rounded-xl mb-8 shadow-sm no-print">  
            <p class="font-bold mb-1 flex items-center gap-2">  
              <i data-lucide="info" class="w-4 h-4 text-blue-600"></i> Why this matters to you:  
            </p>  
            <p class="text-blue-700 ml-6">  
              This section confirms the subject’s <strong>identity, use, occupancy, and overall condition</strong> as  
              supported by the Property Condition Report (PCR). These details anchor the entire Market Analysis Report,  
              ensuring that all later sections&mdash;including the <strong>market area trends, submarket definition, target  
              buyer profile, and pricing conclusions</strong>&mdash;are interpreted in the correct physical and functional context.  
            </p>  
          </div>  
  
          <div class="space-y-8">  
            <!-- Address & Location -->  
            <div class="p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-2xl">  
              <h3 class="text-lg font-bold text-gray-900 mb-1">Location &amp; Identity</h3>  
              <p class="text-sm text-gray-500 mb-6 no-print">  
                Enter the full mailing address used to identify the subject in public records, MLS, and lender documents.  
              </p>  
  
              <div class="grid grid-cols-1 sm:grid-cols-6 gap-6">  
                <div class="sm:col-span-4">  
                  <label for="address" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Property Address <span class="text-red-500">*</span></label>  
                  <input type="text" id="address" name="address" required placeholder="123 Main St" class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white" />  
                </div>  
  
                <div class="sm:col-span-2">  
                  <label for="unit" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Unit #</label>  
                  <input type="text" id="unit" name="unit" placeholder="Apt/Unit" class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white" />  
                </div>  
  
                <div class="sm:col-span-3">  
                  <label for="city" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">City <span class="text-red-500">*</span></label>  
                  <input type="text" id="city" name="city" required placeholder="Philadelphia" class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white" />  
                </div>  
  
                <div class="sm:col-span-1">  
                  <label for="state" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">State <span class="text-red-500">*</span></label>  
                  <select id="state" name="state" required class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white">  
                    <option value="">Select…</option>  
                    <option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option>  
                    <option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option>  
                    <option value="CT">CT</option><option value="DE">DE</option><option value="FL">FL</option>  
                    <option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option>  
                    <option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option>  
                    <option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option>  
                    <option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option>  
                    <option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option>  
                    <option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option>  
                    <option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option>  
                    <option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option>  
                    <option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option>  
                    <option value="OR">OR</option><option value="PA" selected>PA</option><option value="RI">RI</option>  
                    <option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option>  
                    <option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option>  
                    <option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option>  
                    <option value="WI">WI</option><option value="WY">WY</option><option value="DC">DC</option>  
                    <option value="AS">AS</option><option value="GU">GU</option><option value="MP">MP</option>  
                    <option value="PR">PR</option><option value="VI">VI</option><option value="AA">AA</option>  
                    <option value="AE">AE</option><option value="AP">AP</option>  
                  </select>  
                </div>  
  
                <div class="sm:col-span-2">  
                  <label for="zipCode" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Zip Code <span class="text-red-500">*</span></label>  
                  <input type="text" id="zipCode" name="zipCode" required placeholder="19104" class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white" />  
                </div>  
              </div>  
            </div>  
  
            <!-- Use, Occupancy & Condition -->  
            <div class="p-6 md:p-8 bg-slate-50 border border-slate-100 rounded-2xl">  
              <h3 class="text-lg font-bold text-gray-900 mb-1">Current Use, Occupancy &amp; Condition</h3>  
              <p class="text-sm text-gray-500 mb-6 no-print">  
                Select the current legal/functional use, occupancy, and overall condition rating as supported by your PCR.  
                These responses define how the subject competes within the broader market and submarket.  
              </p>  
  
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">  
                <!-- Property Type -->  
                <div>  
                  <label for="property_type" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Property Type <span class="text-red-500">*</span></label>  
                  <p class="text-[0.7rem] text-gray-500 mb-2 mt-1 leading-tight no-print">Primary current use category based on public records.</p>  
                  <select id="property_type" name="property_type" required class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white">  
                    <option value="">Select Type...</option>  
                    <optgroup label="Vacant / Idle">  
                      <option value="Vacant Land">Vacant Land (no active use)</option>  
                      <option value="Idle / Abandoned">Idle / Abandoned (previous use but currently unused)</option>  
                    </optgroup>  
                    <optgroup label="Residential">  
                      <option value="Single-Family Residence">Single-Family Residence</option>  
                      <option value="Residential Condo/Coop">Residential Condo/Coop</option>  
                      <option value="Manufactured / Mobile Home Use">Manufactured / Mobile Home Use</option>  
                      <option value="Multifamily Residence (2–4 units)">Multifamily Residence (2–4 units)</option>  
                    </optgroup>  
                    <optgroup label="Commercial">  
                      <option value="Mixed-Use Occupancy">Mixed-Use Occupancy (residential + commercial)</option>  
                      <option value="Small Residential Condo/Coop Development">Small Residential Condo/Coop Development</option>  
                      <option value="Apartment Building (5+ units)">Apartment Building (5+ units)</option>  
                      <option value="Retail Use">Retail Use (storefront, shopping, etc.)</option>  
                      <option value="Office Use">Office Use</option>  
                      <option value="Industrial / Warehouse / Workshop Use">Industrial / Warehouse / Workshop Use</option>  
                      <option value="Special Commercial">Special Commercial (gas station, auto repair, pad site, etc.)</option>  
                    </optgroup>  
                    <optgroup label="Other">  
                      <option value="Other / Not Listed">Other / Not Listed</option>  
                    </optgroup>  
                  </select>  
                </div>  
  
                <!-- Occupancy Status -->  
                <div>  
                  <label for="occupancy" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Occupancy Status <span class="text-red-500">*</span></label>  
                  <p class="text-[0.7rem] text-gray-500 mb-2 mt-1 leading-tight no-print">Physical occupancy at the time of inspection.</p>  
                  <select id="occupancy" name="occupancy" required class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white">  
                    <option value="">Select…</option>  
                    <option value="Owner">Owner</option>  
                    <option value="Tenant">Tenant</option>  
                    <option value="Vacant">Vacant</option>  
                  </select>  
                </div>  
  
                <!-- Overall Condition -->  
                <div>  
                  <label for="overall_condition" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Overall Condition <span class="text-red-500">*</span></label>  
                  <p class="text-[0.7rem] text-gray-500 mb-2 mt-1 leading-tight no-print">Global rating from the PCR.</p>  
                  <select id="overall_condition" name="overall_condition" required class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white">  
                    <option value="">Select Rating…</option>  
                    <option value="Excellent">Excellent</option>  
                    <option value="Good">Good</option>  
                    <option value="Average">Average</option>  
                    <option value="Fair">Fair</option>  
                    <option value="Poor">Poor</option>  
                    <option value="Damaged">Damaged</option>  
                  </select>  
                </div>  
              </div>  
            </div>  
          </div>  
        </section>  
  
        <!-- Step 2: Active Listings -->  
        <section id="step-active">  
          <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-2">  
            <i data-lucide="trending-up" class="text-blue-600 w-6 h-6"></i> Active Listings Comparison  
          </h2>  
          <span class="block mt-2 h-1 w-12 rounded-full bg-blue-600 mb-6"></span>  
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">  
            <div>  
              <label for="activeLow" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Low Price Range</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="activeLow" name="activeLow" class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white" />  
              </div>  
            </div>  
            <div>  
              <label for="activeHigh" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">High Price Range</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="activeHigh" name="activeHigh" class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white" />  
              </div>  
            </div>  
            <div class="md:col-span-2">  
              <label for="activeProbable" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Most Probable Asking Price</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="activeProbable" name="activeProbable" class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white" />  
              </div>  
            </div>  
            <div class="md:col-span-2">  
              <label for="activeJustification" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Justification</label>  
              <textarea id="activeJustification" name="activeJustification" rows="3" placeholder="Explain reasoning based on current active competition..." class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white"></textarea>  
            </div>  
          </div>  
        </section>  
  
        <!-- Step 3: Current Condition Sales -->  
        <section id="step-sold-current">  
          <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-2">  
            <i data-lucide="clipboard-check" class="text-blue-600 w-6 h-6"></i> Sold Listings (Current Condition)  
          </h2>  
          <span class="block mt-2 h-1 w-12 rounded-full bg-blue-600 mb-6"></span>  
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">  
            <div>  
              <label for="soldCurrentLow" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Low Price Range</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="soldCurrentLow" name="soldCurrentLow" class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white" />  
              </div>  
            </div>  
            <div>  
              <label for="soldCurrentHigh" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">High Price Range</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="soldCurrentHigh" name="soldCurrentHigh" class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white" />  
              </div>  
            </div>  
            <div class="md:col-span-2">  
              <label for="soldCurrentProbable" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Most Probable Sale Price (As-Is)</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="soldCurrentProbable" name="soldCurrentProbable" class="calc-trigger w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white font-bold text-blue-700" />  
              </div>  
            </div>  
            <div class="md:col-span-2">  
              <label for="soldCurrentJustification" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Justification for As-Is Value</label>  
              <textarea id="soldCurrentJustification" name="soldCurrentJustification" rows="3" placeholder="Factors influencing this valuation in its current state..." class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white"></textarea>  
            </div>  
          </div>  
        </section>  
  
        <!-- Step 4: ARV Sales -->  
        <section id="step-sold-arv">  
          <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-2">  
            <i data-lucide="hammer" class="text-blue-600 w-6 h-6"></i> Sold Listings (After Repair Condition)  
          </h2>  
          <span class="block mt-2 h-1 w-12 rounded-full bg-blue-600 mb-2"></span>  
          <p class="text-sm text-gray-500 mb-6 italic no-print">Fill this section only if repairs or improvements are proposed.</p>  
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 border border-slate-100 rounded-2xl">  
            <div>  
              <label for="soldArvLow" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Low Price Range (ARV)</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="soldArvLow" name="soldArvLow" class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white" />  
              </div>  
            </div>  
            <div>  
              <label for="soldArvHigh" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">High Price Range (ARV)</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="soldArvHigh" name="soldArvHigh" class="w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white" />  
              </div>  
            </div>  
            <div class="md:col-span-2">  
              <label for="soldArvProbable" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Most Probable Sale Price (ARV)</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="soldArvProbable" name="soldArvProbable" class="calc-trigger w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white font-bold text-emerald-700" />  
              </div>  
            </div>  
            <div class="md:col-span-2">  
              <label for="soldArvJustification" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Justification for ARV Estimate</label>  
              <textarea id="soldArvJustification" name="soldArvJustification" rows="3" placeholder="Explain the premium based on the level of finishes proposed..." class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white"></textarea>  
            </div>  
          </div>  
        </section>  
  
        <!-- Step 5: Repairs & Financials -->  
        <section id="step-financials">  
          <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-2">  
            <i data-lucide="dollar-sign" class="text-blue-600 w-6 h-6"></i> Repair Summary & Feasibility  
          </h2>  
          <span class="block mt-2 h-1 w-12 rounded-full bg-blue-600 mb-6"></span>  
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">  
            <div>  
              <label for="proposedUse" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Proposed Use</label>  
              <select id="proposedUse" name="proposedUse" class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white">  
                <option value="">Select Proposed Use...</option>  
                <optgroup label="Vacant / Idle">  
                  <option value="Vacant Land">Vacant Land (no active use)</option>  
                  <option value="Idle / Abandoned">Idle / Abandoned (previous use but currently unused)</option>  
                </optgroup>  
                <optgroup label="Residential">  
                  <option value="Single-Family Residence">Single-Family Residence</option>  
                  <option value="Residential Condo/Coop">Residential Condo/Coop</option>  
                  <option value="Manufactured / Mobile Home Use">Manufactured / Mobile Home Use</option>  
                  <option value="Multifamily Residence (2–4 units)">Multifamily Residence (2–4 units)</option>  
                </optgroup>  
                <optgroup label="Commercial">  
                  <option value="Mixed-Use Occupancy">Mixed-Use Occupancy (residential + commercial)</option>  
                  <option value="Small Residential Condo/Coop Development">Small Residential Condo/Coop Development</option>  
                  <option value="Apartment Building (5+ units)">Apartment Building (5+ units)</option>  
                  <option value="Retail Use">Retail Use (storefront, shopping, etc.)</option>  
                  <option value="Office Use">Office Use</option>  
                  <option value="Industrial / Warehouse / Workshop Use">Industrial / Warehouse / Workshop Use</option>  
                  <option value="Special Commercial">Special Commercial (gas station, auto repair, pad site, etc.)</option>  
                </optgroup>  
                <optgroup label="Other">  
                  <option value="Other / Not Listed">Other / Not Listed</option>  
                </optgroup>  
              </select>  
            </div>  
            <div>  
              <label for="proposedCondition" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Proposed Condition Rating</label>  
              <select id="proposedCondition" name="proposedCondition" class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white">  
                <option value="">Select Proposed Rating…</option>  
                <option value="Excellent">Excellent</option>  
                <option value="Good">Good</option>  
                <option value="Average">Average</option>  
                <option value="Fair">Fair</option>  
                <option value="Poor">Poor</option>  
                <option value="Damaged">Damaged</option>  
              </select>  
            </div>  
            <div class="md:col-span-2">  
              <label for="repairSummary" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Summary of Proposed Repairs</label>  
              <textarea id="repairSummary" name="repairSummary" rows="3" class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white"></textarea>  
            </div>  
            <div class="md:col-span-2">  
              <label for="repairCost" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Estimated Cost of Repairs</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="repairCost" name="repairCost" class="calc-trigger w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 pl-8 transition-all bg-white" />  
              </div>  
            </div>  
          </div>  
  
          <!-- Auto-Calculated Financial Analysis -->  
          <div class="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">  
            <h4 class="font-bold text-blue-900 mb-4 flex items-center gap-2">  
              <i data-lucide="trending-up" class="w-5 h-5"></i> Financial Analysis (Auto-Calculated)  
            </h4>  
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">  
              <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">  
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Gross Value Gain</p>  
                <p id="out-gross-gain" class="text-2xl font-mono text-gray-400">$0</p>  
              </div>  
              <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">  
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Net Contributory Value</p>  
                <p id="out-net-value" class="text-2xl font-mono text-gray-400">$0</p>  
              </div>  
              <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">  
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wide mb-1">Estimated ROI</p>  
                <p id="out-roi" class="text-2xl font-mono text-gray-400">0.00%</p>  
              </div>  
            </div>  
            <div class="mt-4 flex gap-3 text-sm text-blue-700 bg-blue-100/50 p-4 rounded-xl no-print">  
              <i data-lucide="alert-circle" class="w-5 h-5 flex-shrink-0"></i>  
              <p>ROI is calculated as: (Net Contributory Value) / (Purchase Price + Repair Cost). Calculations assume As-Is value as the purchase price.</p>  
            </div>  
          </div>  
        </section>  
  
        <!-- Step 6: Final Conclusion -->  
        <section id="step-final">  
          <h2 class="text-2xl font-bold text-gray-900 flex items-center gap-2">  
            <i data-lucide="file-text" class="text-blue-600 w-6 h-6"></i> Final Reconciliation  
          </h2>  
          <span class="block mt-2 h-1 w-12 rounded-full bg-blue-600 mb-6"></span>  
  
          <div class="grid grid-cols-1 gap-6">  
            <div>  
              <label for="finalPrice" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Final Price Conclusion</label>  
              <div class="relative mt-2">  
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><span class="text-gray-500">$</span></div>  
                <input type="number" id="finalPrice" name="finalPrice" class="calc-trigger w-full text-xl font-bold rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-4 pl-8 transition-all bg-white text-blue-700" />  
              </div>  
            </div>  
            <div>  
              <label for="finalJustification" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Justification of Price Conclusion</label>  
              <textarea id="finalJustification" name="finalJustification" rows="4" placeholder="Reconcile the findings from active listings, current condition solds, and ARV..." class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white"></textarea>  
            </div>  
            <div>  
              <label for="additionalNotes" class="block text-sm font-semibold text-gray-700 uppercase tracking-wide">Additional Notes</label>  
              <textarea id="additionalNotes" name="additionalNotes" rows="3" class="mt-2 w-full rounded-xl border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-3 transition-all bg-white"></textarea>  
            </div>  
          </div>  
  
          <!-- Summary Review Card -->  
          <div class="mt-8 p-6 md:p-8 bg-gray-900 rounded-2xl text-white shadow-xl print:bg-white print:text-black print:border print:border-gray-300">  
            <h4 class="font-bold text-lg mb-6 flex items-center gap-2 border-b border-gray-700 pb-3 print:border-gray-300">Summary Review</h4>  
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">  
              <div>  
                <span class="text-gray-400 block uppercase tracking-wider text-xs mb-1 font-semibold print:text-gray-600">Subject</span>  
                <span id="summary-address" class="font-medium">N/A</span>  
              </div>  
              <div>  
                <span class="text-gray-400 block uppercase tracking-wider text-xs mb-1 font-semibold print:text-gray-600">As-Is Estimate</span>  
                <span id="summary-asis" class="font-medium">$0</span>  
              </div>  
              <div>  
                <span class="text-gray-400 block uppercase tracking-wider text-xs mb-1 font-semibold print:text-gray-600">ARV Estimate</span>  
                <span id="summary-arv" class="font-medium">$0</span>  
              </div>  
              <div>  
                <span class="text-gray-400 block uppercase tracking-wider text-xs mb-1 font-semibold print:text-gray-600">Price Conclusion</span>  
                <span id="summary-final" class="text-blue-400 font-bold text-lg print:text-black">$0</span>  
              </div>  
            </div>  
          </div>  
        </section>  
  
        <!-- Actions (Hidden on Print) -->  
        <div class="no-print pt-8 border-t border-gray-200 flex flex-col justify-between items-start gap-4">  
          <div class="flex flex-col sm:flex-row justify-between items-center w-full gap-4">  
            <div class="flex items-center gap-3 w-full sm:w-auto">  
              <button type="button" id="clearBtn" class="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center">  
                <i data-lucide="trash-2" class="w-4 h-4 mr-2"></i> Clear Form  
              </button>  
              <span id="saveStatus" class="text-sm text-gray-400 flex items-center gap-1 opacity-0 transition-opacity duration-300">  
                <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500"></i> Saved  
              </span>  
            </div>  
  
            <div class="flex items-center gap-3 w-full sm:w-auto">  
              <button type="button" id="printBtn" class="w-full sm:w-auto px-5 py-3 rounded-xl border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center">  
                <i data-lucide="file-down" class="w-4 h-4 mr-2"></i> Generate PDF  
              </button>  
            </div>  
          </div>  
            
          <!-- Status Messages for PDF output -->  
          <div id="statusBox" class="hidden w-full transition-all duration-300"></div>  
        </div>  
      </form>  
    </div>  
  </main>  
  
  <!-- Clear Confirmation Modal -->  
  <div id="clearModal" class="fixed inset-0 z-50 hidden bg-gray-900/50 backdrop-blur-sm flex items-center justify-center p-4">  
    <div class="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full animate-in fade-in zoom-in duration-200">  
      <div class="flex items-center gap-3 text-red-600 mb-4">  
        <div class="bg-red-100 p-2 rounded-full">  
          <i data-lucide="alert-triangle" class="w-6 h-6"></i>  
        </div>  
        <h3 class="text-xl font-bold">Clear All Data?</h3>  
      </div>  
      <p class="text-gray-600 mb-6">Are you sure you want to clear this form? This will permanently delete your auto-saved progress.</p>  
      <div class="flex gap-3 justify-end">  
        <button id="cancelClearBtn" class="px-4 py-2 text-gray-600 font-semibold hover:bg-gray-100 rounded-lg transition-colors">Cancel</button>  
        <button id="confirmClearBtn" class="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-md">Yes, Clear It</button>  
      </div>  
    </div>  
  </div>  
  
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
      const STORAGE_KEY = 'bpoSalesReconciliationAutoSave';  
      let saveTimeout = null;  
      let statusTimer = null;  
  
      function $(id) {  
        return document.getElementById(id);  
      }  
  
      // Initialize Icons  
      lucide.createIcons();  
  
      // Elements  
      const form = $("reconciliationForm");  
        
      const currentValInput = $("soldCurrentProbable");  
      const arvValInput = $("soldArvProbable");  
      const repairCostInput = $("repairCost");  
      const finalPriceInput = $("finalPrice");  
  
      // Formatter  
      const currencyFormatter = new Intl.NumberFormat('en-US', {  
        style: 'currency',  
        currency: 'USD',  
        maximumFractionDigits: 0  
      });  
  
      function formatMoney(value) {  
        const n = Number(value);  
        if (!isFinite(n) || n === 0) return "$0";  
        return currencyFormatter.format(n);  
      }  
  
      // Helper to display status messages  
      function showStatus(message, type) {  
        const box = $("statusBox");  
        if (!box) return;  
  
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
  
        box.className = "mt-4 text-sm font-semibold rounded-xl border px-4 py-3 " + styleClasses;  
        box.classList.remove("hidden");  
  
        statusTimer = setTimeout(() => {  
          box.classList.add("hidden");  
        }, 3000);  
      }  
  
      /* ==========================================  
         3. Financial Calculations  
         ========================================== */  
      function calculateFinancials() {  
        const currentVal = parseFloat(currentValInput.value) || 0;  
        const arvVal = parseFloat(arvValInput.value) || 0;  
        const repairs = parseFloat(repairCostInput.value) || 0;  
        const finalPrice = parseFloat(finalPriceInput.value) || 0;  
  
        const grossValueGain = arvVal - currentVal;  
        const netContributoryValue = grossValueGain - repairs;  
        let roi = 0;  
        if (currentVal > 0) {  
          roi = ((netContributoryValue) / (currentVal + repairs)) * 100;  
        }  
  
        // Update Financial Blocks  
        $("out-gross-gain").textContent = formatMoney(grossValueGain);  
        $("out-net-value").textContent = formatMoney(netContributoryValue);  
        $("out-roi").textContent = roi.toFixed(2) + '%';  
  
        // Colors for positive/negative returns  
        [$("out-gross-gain"), $("out-net-value")].forEach(el => {  
          const val = parseFloat(el.textContent.replace(/[^0-9.-]+/g,""));  
          el.className = `text-2xl font-mono ${val > 0 ? 'text-emerald-600' : (val < 0 ? 'text-rose-600' : 'text-gray-400')}`;  
        });  
  
        $("out-roi").className = `text-2xl font-mono ${roi > 0 ? 'text-emerald-600' : (roi < 0 ? 'text-rose-600' : 'text-gray-400')}`;  
  
        // Update Bottom Summary  
        const addressVal = $("address").value.trim();  
        $("summary-address").textContent = addressVal || 'N/A';  
        $("summary-asis").textContent = currentVal > 0 ? formatMoney(currentVal) : '$0';  
        $("summary-arv").textContent = arvVal > 0 ? formatMoney(arvVal) : '$0';  
        $("summary-final").textContent = finalPrice > 0 ? formatMoney(finalPrice) : '$0';  
  
        return { currentVal, arvVal, repairs, grossValueGain, netContributoryValue, roi };  
      }  
  
      /* ==========================================  
         4. Form Data Handling (Save/Load)  
         ========================================== */  
      function collectFormData(formEl) {  
        const data = {};  
        Array.from(formEl.elements).forEach((el) => {  
          if (!el.name) return;  
          if (el.type === "checkbox") {  
            data[el.name] = el.checked;  
          } else {  
            data[el.name] = el.value;  
          }  
        });  
        return data;  
      }  
  
      function restoreFormData(formEl, saved) {  
        if (!saved) return;  
        Object.keys(saved).forEach((name) => {  
          const el = formEl.elements[name];  
          if (!el) return;  
          if (el.type === "checkbox") {  
            el.checked = !!saved[name];  
          } else {  
            el.value = saved[name];  
          }  
        });  
      }  
  
      function saveToStorage() {  
        try {  
          const data = collectFormData(form);  
          localStorage.setItem(STORAGE_KEY, JSON.stringify(data));  
            
          const saveStatus = $("saveStatus");  
          saveStatus.style.opacity = '1';  
          clearTimeout(saveTimeout);  
          saveTimeout = setTimeout(() => {  
            saveStatus.style.opacity = '0';  
          }, 2000);  
        } catch (e) {  
          console.error("Autosave failed", e);  
        }  
      }  
  
      function loadFromMemory() {  
        const saved = localStorage.getItem(STORAGE_KEY);  
        if (saved) {  
          try {  
            restoreFormData(form, JSON.parse(saved));  
            calculateFinancials();  
          } catch(e) {  
            console.error("Error parsing saved data", e);  
          }  
        }  
      }  
  
      /* ==========================================  
         5. PDF Generation  
         ========================================== */  
      function generatePdf(formEl) {  
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
  
          const data = collectFormData(formEl);  
          const financials = calculateFinancials();  
  
          let y = 50;  
          const left = 40;  
          const rightLimit = 550; // Text wrapping width  
          const lineHeight = 12;  
  
          // --- Helper: Add a titled block of text ---  
          function addBlock(title, content, extraGap = 15) {  
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
            const lines = doc.splitTextToSize(text, rightLimit - left);  
  
            lines.forEach((line) => {  
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
          doc.text("Sales Comparison Reconciliation", left, y);  
          y += 30;  
  
          // ================= SECTION 1 =================  
          addSectionHeader("1. Subject Property Overview");  
  
          doc.setFontSize(10);  
          doc.setFont("helvetica", "bold");  
          const addressStr = [data.address, data.unit ? `Unit ${data.unit}` : ""]  
            .filter(Boolean).join(", ");  
          const cityStr = [data.city, data.state, data.zipCode]  
            .filter(Boolean).join(", ");  
  
          doc.text(`Address: ${addressStr || "N/A"}`, left, y);  
          y += lineHeight;  
          doc.text(`Location: ${cityStr || "N/A"}`, left, y);  
          y += lineHeight + 5;  
  
          doc.setFont("helvetica", "normal");  
          const details = `Type: ${data.property_type || "N/A"}  |  Occupancy: ${data.occupancy || "N/A"}  |  Condition: ${data.overall_condition || "N/A"}`;  
          doc.text(details, left, y);  
          y += 25;  
  
          // ================= SECTION 2 =================  
          addSectionHeader("2. Active Listings Comparison");  
          const activeRange = `${formatMoney(data.activeLow)} - ${formatMoney(data.activeHigh)}`;  
          doc.setFont("helvetica", "bold");  
          doc.text(`Price Range: ${activeRange}   |   Probable Asking Price: ${formatMoney(data.activeProbable)}`, left, y);  
          y += lineHeight + 5;  
          addBlock("Justification:", data.activeJustification);  
  
          // ================= SECTION 3 =================  
          if (y > 600) { doc.addPage(); y = 50; }  
          addSectionHeader("3. Sold Listings (Current Condition)");  
          const currentRange = `${formatMoney(data.soldCurrentLow)} - ${formatMoney(data.soldCurrentHigh)}`;  
          doc.setFont("helvetica", "bold");  
          doc.text(`Price Range: ${currentRange}   |   Probable Sale Price (As-Is): ${formatMoney(data.soldCurrentProbable)}`, left, y);  
          y += lineHeight + 5;  
          addBlock("Justification for As-Is Value:", data.soldCurrentJustification);  
  
          // ================= SECTION 4 =================  
          if (data.soldArvProbable || data.soldArvHigh || data.soldArvLow || data.soldArvJustification) {  
            if (y > 600) { doc.addPage(); y = 50; }  
            addSectionHeader("4. Sold Listings (After Repair Condition)");  
            const arvRange = `${formatMoney(data.soldArvLow)} - ${formatMoney(data.soldArvHigh)}`;  
            doc.setFont("helvetica", "bold");  
            doc.text(`Price Range: ${arvRange}   |   Probable Sale Price (ARV): ${formatMoney(data.soldArvProbable)}`, left, y);  
            y += lineHeight + 5;  
            addBlock("Justification for ARV Estimate:", data.soldArvJustification);  
          }  
  
          // ================= SECTION 5 =================  
          if (y > 600) { doc.addPage(); y = 50; }  
          addSectionHeader("5. Repair Summary & Feasibility");  
          doc.setFont("helvetica", "bold");  
          const repairDetails = `Proposed Use: ${data.proposedUse || "N/A"}  |  Proposed Condition: ${data.proposedCondition || "N/A"}`;  
          doc.text(repairDetails, left, y);  
          y += lineHeight + 5;  
            
          addBlock("Summary of Proposed Repairs:", data.repairSummary, 10);  
            
          // Financials  
          doc.setFont("helvetica", "bold");  
          doc.text(`Estimated Repair Cost: ${formatMoney(data.repairCost)}`, left, y);  
          y += lineHeight + 5;  
          doc.setFont("helvetica", "normal");  
          doc.text(`Gross Value Gain: ${formatMoney(financials.grossValueGain)}`, left + 20, y);  
          y += lineHeight;  
          doc.text(`Net Contributory Value: ${formatMoney(financials.netContributoryValue)}`, left + 20, y);  
          y += lineHeight;  
          doc.text(`Estimated ROI: ${financials.roi.toFixed(2)}%`, left + 20, y);  
          y += 20;  
  
          // ================= SECTION 6 =================  
          if (y > 600) { doc.addPage(); y = 50; }  
          addSectionHeader("6. Final Reconciliation");  
          doc.setFont("helvetica", "bold");  
          doc.text(`Final Price Conclusion: ${formatMoney(data.finalPrice)}`, left, y);  
          y += lineHeight + 10;  
            
          addBlock("Justification of Price Conclusion:", data.finalJustification);  
          addBlock("Additional Notes:", data.additionalNotes);  
  
          // Save  
          const fileName = data.address ? `Reconciliation_${data.address.replace(/\s+/g, '_')}.pdf` : 'Sales_Reconciliation.pdf';  
          doc.save(fileName);  
          showStatus("PDF generated successfully.", "success");  
  
        } catch (err) {  
          console.error("PDF Generation Error: ", err);  
          showStatus("Error generating PDF.", "error");  
        }  
      }  
  
      /* ==========================================  
         6. Initialization & Listeners  
         ========================================== */  
      document.addEventListener("DOMContentLoaded", function () {  
        loadFromMemory();  
  
        form.addEventListener('input', () => {  
          calculateFinancials();  
          if (saveTimeout) clearTimeout(saveTimeout);  
          saveTimeout = setTimeout(saveToStorage, 1000);  
        });  
  
        form.addEventListener('change', () => {   
          calculateFinancials();  
          saveToStorage();  
        });  
  
        // Clear Form Logic  
        const clearModal = $("clearModal");  
          
        $("clearBtn").addEventListener('click', () => {  
          clearModal.classList.remove('hidden');  
        });  
  
        $("cancelClearBtn").addEventListener('click', () => {  
          clearModal.classList.add('hidden');  
        });  
  
        $("confirmClearBtn").addEventListener('click', () => {  
          localStorage.removeItem(STORAGE_KEY);  
          form.reset();  
          calculateFinancials();  
          clearModal.classList.add('hidden');  
          showStatus("Form cleared.", "warning");  
        });  
  
        // PDF Generation Logic  
        $("printBtn").addEventListener('click', () => {  
          saveToStorage(); // Save latest state before generating  
          generatePdf(form);  
        });  
      });  
    })();  
  </script>  
</body>  
</html>  
<!-- /wp:html -->  
