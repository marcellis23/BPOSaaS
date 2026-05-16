# Property Condition Report (PCR) - Exterior Only  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta http-equiv="x-ua-compatible" content="IE=edge" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>PCR – Exterior Inspection</title>  
  
  <link rel="preconnect" href="https://fonts.googleapis.com" />  
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />  
  
  <script src="https://cdn.tailwindcss.com"></script>  
  
  <style>  
    :root { color-scheme: light; }  
    html, body { height: 100%; }  
    body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; background:#f8fafc; }  
    .section-card { background:#fff; border-radius:1rem; box-shadow:0 1px 2px rgba(0,0,0,.05); border:1px solid #e5e7eb; padding:1.5rem; }  
    .label { display:block; font-size:.875rem; font-weight:600; color:#374151; }  
    .input, .select, .textarea {  
      width:100%; margin-top:.25rem; border:1px solid #d1d5db; border-radius:.75rem; padding:.625rem .875rem;  
      outline:0; transition:border-color .15s, box-shadow .15s;  
    }  
    /* Rule 10: Corrected focus ring alpha value */  
    .input:focus, .select:focus, .textarea:focus { border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,0.2); }  
    .hint { font-size:.75rem; color:#6b7280; margin-top:.25rem; }  
    [hidden] { display:none !important; }  
    noscript .noscript-card {  
      background:#fff2f2; border-radius:1rem; border:1px solid #fecaca; padding:1.5rem;  
      font-size:.875rem; font-weight:500; color:#b91c1c;  
    }  
  </style>  
  
  </head>  
  
<body class="bg-gray-50 text-gray-900">  
  <main class="max-w-4xl mx-auto p-6 space-y-10">  
  
<header class="flex flex-col sm:flex-row sm:items-center sm:justify-between">  
      <div>  
        <h1 class="text-2xl md:text-3xl font-bold">Property Condition Report (PCR) - Exterior Only</h1>  
        <p class="text-sm text-gray-600 mt-1">Use for drive-by, curbside, or restricted-access inspections. Click <em>Generate PDF</em> when finished.</p>  
      </div>  
    </header>  
  
<noscript>  
  <div class="noscript-card">  
    <p><strong>JavaScript is disabled.</strong></p>  
    <p class="mt-1">This form requires JavaScript to function correctly (such as showing/hiding fields, validating, and generating the PDF). Please enable JavaScript in your browser settings to use this tool.</p>  
  </div>  
</noscript>  
  
<form id="formExterior" class="space-y-8">  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-lg font-semibold">General Property Info</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This information establishes the property's unique identity. It ensures the  
      <strong>Parcel ID</strong> and <strong>Address</strong> match the correct property, forming the foundation for the entire report.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 sm:grid-cols-6 gap-4 mt-4">  
    <div class="sm:col-span-6">  
      <label class="label" for="parcel_id">Parcel ID (PIN/BRT/OPA)</label>  
      <input id="parcel_id" name="parcel_id" type="text" class="input"  
             autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="50"  
             aria-describedby="parcel_format_hint" />  
      <p id="parcel_format_hint" class="hint text-xs text-gray-500 mt-1">Use PIN/BRT/OPA format if known.</p>  
    </div>  
  
    <div class="sm:col-span-4">  
      <label class="label" for="address">Property Address <span class="text-red-600">*</span></label>  
      <input id="address" name="address" required type="text" class="input"  
             placeholder="e.g., 123 Main St" autocomplete="street-address"  
             autocapitalize="off" spellcheck="false" maxlength="100" />  
    </div>  
    <div class="sm:col-span-2">  
      <label class="label" for="unit">Unit #</label>  
      <input id="unit" name="unit" type="text" class="input"  
             placeholder="e.g., Apt/Unit" autocomplete="address-line2"  
             autocapitalize="off" spellcheck="false" maxlength="20" />  
    </div>  
  
    <div class="sm:col-span-3">  
      <label class="label" for="city">City <span class="text-red-600">*</span></label>  
      <input id="city" name="city" required type="text" class="input"  
             autocomplete="address-level2" autocapitalize="words" maxlength="50" />  
    </div>  
  
    <div class="sm:col-span-1">  
      <label class="label" for="state">State <span class="text-red-600">*</span></label>  
      <select id="state" name="state" required class="select" autocomplete="address-level1">  
        <option value="">Select…</option>  
        <option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option>  
        <option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FL">FL</option>  
        <option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option>  
        <option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option>  
        <option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option>  
        <option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option>  
        <option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option>  
        <option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option>  
        <option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option>  
        <option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option>  
        <option value="WY">WY</option>  
        <optgroup label="Territories">  
          <option value="AS">AS</option><option value="GU">GU</option><option value="MP">MP</option><option value="PR">PR</option><option value="VI">VI</option>  
        </optgroup>  
      </select>  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="zip">Zip Code <span class="text-red-600">*</span></label>  
      <input id="zip" name="zip" required pattern="\d{5}(-\d{4})?"  
             type="text" class="input"  
             placeholder="e.g., 19104" inputmode="numeric" autocomplete="postal-code" maxlength="10" />  
    </div>  
  
    <div class="sm:col-span-3">  
      <label class="label" for="county">County</label>  
      <input id="county" name="county" type="text" class="input"  
             autocomplete="off" autocapitalize="words" maxlength="50" />  
    </div>  
    <div class="sm:col-span-3">  
      <label class="label" for="school_district">School District</label>  
      <input id="school_district" name="school_district" type="text" class="input"  
             autocomplete="off" autocapitalize="words" maxlength="75" />  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="property_type">Land/Site Type <span class="text-red-600">*</span></label>  
      <select id="property_type" name="property_type" required class="select" aria-describedby="property_type_hint">  
        <option value="">Select…</option>  
        <option value="Single Family Residence">Single Family Residence</option>  
        <option value="2-Unit Duplex">2-Unit Duplex</option>  
        <option value="3-Unit Triplex">3-Unit Triplex</option>  
        <option value_a="4-Unit Quadplex">4-Unit Quadplex</option>  
        <option value="Multifamily (5+ Units)">Multifamily (5+ Units)</option>  
        <option value="Condominium (Low-Rise)">Condominium (Low-Rise)</option>  
        <option value="Condominium (High-Rise)">Condominium (High-Rise)</option>  
        <option value="Cooperative (Co-Op)">Cooperative (Co-Op)</option>  
        <option value="Manufactured / Mobile Home">Manufactured / Mobile Home</option>  
        <option value="Modular Home">Modular Home</option>  
        <option value="Mixed-Use (Residential + Commercial)">Mixed-Use (Residential + Commercial)</option>  
        <option value="Commercial">Commercial</option>  
        <option value="Special Use / Institutional">Special Use / Institutional</option>  
        <option value="Land & Site Types">Land &amp; Site Types</option>  
      </select>  
      <p id="property_type_hint" class="hint text-xs text-gray-500 mt-1">Selecting “Land &amp; Site Types” may prompt a link to the Vacant Lot form.</p>  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="ownership_type">Ownership Type <span class="text-red-600">*</span></label>  
      <select id="ownership_type" name="ownership_type" required class="select">  
        <option value="">Select…</option>  
        <option value="Fee Simple (Full Ownership)">Fee Simple (Full Ownership)</option>  
        <option value="Fee Simple - Subject to HOA">Fee Simple - Subject to HOA</option>  
        <option value="Condominium Ownership">Condominium Ownership</option>  
        <option value="Cooperative (Co-Op) Ownership">Cooperative (Co-Op) Ownership</option>  
        <option value="Leasehold (Ground Lease / Long-Term Lease)">Leasehold (Ground Lease / Long-Term Lease)</option>  
        <option value="Partial Interest / Fractional Ownership">Partial Interest / Fractional Ownership</option>  
        <option value="Life Estate">Life Estate</option>  
      </select>  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="occupancy">Occupancy Status <span class="text-red-600">*</span></label>  
      <select id="occupancy" name="occupancy" required class="select">  
        <option value="">Select…</option>  
        <option value="Owner-Occupied">Owner-Occupied</option>  
        <option value="Tenant-Occupied">Tenant-Occupied</option>  
        <option value="Vacant">Vacant</option>  
      </select>  
    </div>  
  
    <div id="property_type_detail_wrapper" class="sm:col-span-6 hidden" role="region" aria-live="polite" aria-label="Detail Property Type">  
      <label class="label" for="property_type_detail">Detail Property Type</albel>  
      <input id="property_type_detail" name="property_type_detail" type="text" class="input"  
             placeholder="e.g., Office Building, Church, Warehouse" maxlength="80" />  
    </div>  
  
    <div class="sm:col-span-6">  
      <label class="label" for="legal_description">Legal Description</label>  
      <textarea id="legal_description" name="legal_description" rows="2" class="textarea" maxlength="1000"  
                aria-describedby="legal_description_hint"></textarea>  
      <p id="legal_description_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 100–400 characters.</p>  
    </div>  
  </div>  
  
  <div id="land_site_types_notice" class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4 hidden" role="alert">  
    <p class="font-semibold mb-1">  
      Please consider using the <strong>Vacant Lot Feasibility Report</strong> web form for your analysis:  
    </p>  
    <a href="https://rwilliamspropertyadvisor.com/vacant-land-report/" target="_blank" rel="noopener noreferrer" class="font-medium underline break-all">  
      https://rwilliamspropertyadvisor.com/vacant-land-report/  
    </a>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-lg font-semibold">Site Characteristics</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section details the property's physical attributes, from <strong>Lot Size</strong> and  
      <strong>Zoning</strong> to <strong>Building Style</strong>. These characteristics define the property's  
      utility and are fundamental to its overall value.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-4">  
  
    <div class="md:col-span-2">  
      <label class="label" for="site_source">Source</label>  
      <select id="site_source" name="site_source" class="select">  
        <option value="">Select…</option>  
        <option value="Public Records">Public Records</option>  
        <option value="Assessment">Assessment</option>  
        <option value="MLS Record">MLS Record</option>  
        <option value="Client Provided">Client Provided</option>  
        <option value="Self Inspection">Self Inspection</option>  
        <option value="Other">Other</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div>  
      <label class="label" for="lot_size">Lot Size (Sq Ft or Acres)</label>  
      <input id="lot_size" name="lot_size" type="text" class="input" placeholder="e.g., 10,000 or 0.25"  
             inputmode="decimal" maxlength="30" autocapitalize="off" spellcheck="false"  
             aria-describedby="lot_size_hint" />  
      <p id="lot_size_hint" class="hint text-xs text-gray-500 mt-1">Use whole SF or decimal acres.</p>  
    </div>  
  
    <div>  
      <label class="label" for="lot_shape">Lot Shape</label>  
      <select id="lot_shape" name="lot_shape" class="select">  
        <option value="">Select…</option>  
        <option value="Rectangular">Rectangular</option>  
        <option value="Irregular">Irregular</option>  
        <option value="Flag">Flag</option>  
        <option value="Corner">Corner</option>  
        <option value="Pie">Pie</option>  
        <option value="N/A">N/A</option>  
        <option value="Unknown / Not Assessed">Unknown / Not Assessed</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="topography">Topography</label>  
      <select id="topography" name="topography" class="select">  
        <option value="">Select…</option>  
        <option value="Level">Level</option>  
        <option value="Gently Sloped">Gently Sloped</option>  
        <option value="Moderate Slope">Moderate Slope</option>  
        <option value="Steep">Steep</option>  
        <option value="Terraced">Terraced</option>  
        <option value="Unknown / Not Assessed">Unknown / Not Assessed</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="zoning">Zoning</label>  
      <input id="zoning" name="zoning" type="text" class="input" placeholder="e.g., RSA-5"  
             maxlength="50" autocapitalize="characters" aria-describedby="zoning_hint" />  
      <p id="zoning_hint" class="hint text-xs text-gray-500 mt-1">Enter the code as shown in public records (e.g., RSA-5).</p>  
    </div>  
  
    <div>  
      <label class="label" for="use_consistent">Use Consistent?</label>  
      <select id="use_consistent" name="use_consistent" class="select"  
              aria-controls="use_consistent_explain_wrapper" aria-expanded="true">  
        <option value="">Select…</option>  
        <option value="Yes">Yes</option>  
        <option value="No">No</option>  
      </select>  
    </div>  
  
    <div id="use_consistent_explain_wrapper" class="md:col-span-1" role="region"  
         aria-live="polite" aria-label="Explain inconsistency">  
      <label class="label" for="use_consistent_explain">Explain Inconsistency</label>  
      <textarea id="use_consistent_explain" name="use_consistent_explain" rows="1"  
                class="textarea" maxlength="300"  
                aria-describedby="use_consistent_explain_hint"></textarea>  
      <p id="use_consistent_explain_hint" class="hint text-xs text-gray-500 mt-1">Required if "No" is selected. Suggested: 50–150 characters.</p>  
    </div>  
  
    <div>  
      <label class="label" for="building_stories">Stories</label>  
      <input id="building_stories" name="building_stories" type="number" min="0" step="0.5"  
             class="input" placeholder="e.g., 2" inputmode="decimal" />  
    </div>  
  
    <div>  
      <label class="label" for="building_size">Bldg Size (SF)</label>  
      <input id="building_size" name="building_size" type="number" min="0" step="1"  
             class="input" placeholder="e.g., 1500" inputmode="numeric" />  
    </div>  
  
    <div>  
      <label class="label" for="site_property_type">Property Type</label>  
      <select id="site_property_type" name="site_property_type" class="select">  
        <option value="">Select…</option>  
        <option value="Detached">Detached</option>  
        <option value="Semi-detached">Semi-detached</option>  
        <option value="Row/Townhouse">Row/Townhouse</option>  
        <option value="Single Level Condominium">Single Level Condominium</option>  
        <option value="Multi-Level Condominium">Multi-Level Condominium</option>  
        <option value="Duplex">Duplex</option>  
        <option value="Triplex">Triplex</option>  
        <option value="Quadplex">Quadplex</option>  
        <option value="5+ Units">5+ Units</option>  
        <option value="Mixed Use">Mixed Use</option>  
        <option value="Lot/Land">Lot/Land</option>  
        <option value="Other">Other</option>  
      </select>  
    </div>  
  
    <div>  
      <label class="label" for="property_style">Property Style</label>  
      <select id="property_style" name="property_style" class="select">  
        <option value="">Select…</option>  
        <option value="Colonial">Colonial</option>  
        <option value="Ranch">Ranch</option>  
        <option value="Split-Level">Split-Level</option>  
        <option value="Contemporary">Contemporary</option>  
        <option value="Cape Cod">Cape Cod</option>  
        <option value="Victorian">Victorian</option>  
        <option value="Other">Other</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="building_construction">Building Construction</label>  
      <select id="building_construction" name="building_construction" class="select">  
        <option value="">Select…</option>  
        <option value="Frame">Frame</option>  
        <option value="Masonry">Masonry</option>  
        <option value="Brick">Brick</option>  
        <option value="Stone">Stone</option>  
        <option value="Mixed">Mixed</option>  
        <option value="Other">Other</option>  
      </select>  
    </div>  
  
    <div>  
      <label class="label" for="garage_parking">Garage/Parking</label>  
      <select id="garage_parking" name="garage_parking" class="select">  
        <option value="">Select…</option>  
        <option value="None">None</option>  
        <option value="On-Street">On-Street</option>  
        <option value="Driveway">Driveway</option>  
        <option value="1-Car Garage">1-Car Garage</option>  
        <option value="2-Car+ Garage">2-Car+ Garage</option>  
        <option value="Other">Other</option>  
      </select>  
    </div>  
  
    <div>  
      <label class="label" for="pool_spa">Pool/Spa</label>  
      <select id="pool_spa" name="pool_spa" class="select">  
        <option value="">Select…</option>  
        <option value="None">None</option>  
        <option value="Pool">Pool</option>  
        <option value="Spa">Spa</option>  
        <option value="Pool &amp; Spa">Pool &amp; Spa</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="extra_amenities">Extra Amenities</label>  
      <textarea id="extra_amenities" name="extra_amenities" rows="2" class="textarea"  
                placeholder="e.g., Tennis Court, View" maxlength="500"  
                aria-describedby="extra_amenities_hint"></textarea>  
      <p id="extra_amenities_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 50–250 characters.</p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="outbuildings">Outbuildings</label>  
      <textarea id="outbuildings" name="outbuildings" rows="2" class="textarea"  
                placeholder="e.g., Shed, Detached Garage" maxlength="500"  
                aria-describedby="outbuildings_hint"></textarea>  
      <p id="outbuildings_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 50–250 characters.</p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="site_inspection_summary">Site Inspection Summary</label>  
      <textarea id="site_inspection_summary" name="site_inspection_summary" rows="3" class="textarea"  
                placeholder="Easements, encroachments, site influences, proximity to amenities, traffic, etc."  
                maxlength="1000" aria-describedby="site_inspection_summary_hint"></textarea>  
      <p id="site_inspection_summary_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 100–400 characters.</p>  
    </div>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card mt-6">  
  <h2 class="text-lg font-semibold">Utility Availability</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>This section details all available utility connections. These are critical for assessing a property's  
      habitability, functionality, and potential development costs.</p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-4">  
    <div class="md:col-span-2">  
      <p class="text-sm text-gray-500">  
        Check all utility connections known to be <strong>available</strong> at the lot line (or immediately serviceable).  
      </p>  
  
      <div class="mt-4 space-y-6">  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Power</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_power_electric" value="Electricity" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Electricity (overhead/underground)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_power_renewable" value="Renewable Energy" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Renewable Energy (solar, wind)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_power_backup" value="Backup Power" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Backup Power (generator, battery)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_power_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Heating &amp; Cooling</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_heat_gas" value="Natural Gas" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Natural Gas (utility line)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_heat_propane" value="Propane" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Propane (private tank)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_heat_oil" value="Fuel Oil" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Fuel Oil (storage tank)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_heat_pump" value="Electric Heat Pump / HVAC" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Electric Heat Pump / HVAC</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_heat_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Water Supply</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_public" value="Public/Municipal Water" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Public/Municipal Water</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_well" value="Private/Community Well" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Private Well / Community Well</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_shared" value="Shared/Community System" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Shared/Community System</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_irrigation" value="Irrigation Water" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Irrigation Water (rights, etc.)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_harvest" value="Rainwater Harvesting / Cistern" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Rainwater Harvesting / Cistern</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Wastewater Disposal</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_waste_sewer" value="Public Sewer" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Public Sewer</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_waste_septic" value="Private Septic System" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Private Septic System</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_waste_holding" value="Holding Tank" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Holding Tank</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_waste_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Communications</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_comm_landline" value="Landline Telephone" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Landline Telephone</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_comm_internet" value="Internet" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Internet (DSL, cable, fiber, etc.)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_comm_cable" value="Cable TV" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Cable TV</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_comm_cell" value="Cellular Network Coverage" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Cellular Network Coverage</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_comm_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Drainage &amp; Environmental Systems</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_drain_storm" value="Stormwater Drainage" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Stormwater Drainage (sewer, swales)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_drain_canal" value="Irrigation/Drainage Canals" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Irrigation/Drainage Canals</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name_a="util_drain_retention" value="Retention Ponds / Rainwater Capture" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Retention Ponds / Rainwater Capture</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_drain_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Municipal &amp; Community Services</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_service_waste" value="Solid Waste Disposal" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Solid Waste Disposal</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_service_light" value="Street Lighting" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Street Lighting</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_service_fire" value="Fire Hydrant / Protection" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Fire Hydrant / Protection</span>  
            </Route>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_service_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
      </div>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="utilities_notes">Notes on Utility Connections (mix, distance, costs, special needs, etc.)</label>  
      <textarea id="utilities_notes" name="utilities_notes" rows="3" class="textarea"  
                placeholder="e.g., Sewer hookup requires pump station; electricity pole ~500 ft away."  
                maxlength="500" aria-describedby="utilities_notes_hint"></textarea>  
      <p id="utilities_notes_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 100–300 characters.</p>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card hidden" id="hoa_association_section" aria-live="polite">  
  <h2 class="text-lg font-semibold">Association and Common Area Information</h2>  
  
  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>For condos or HOAs, this section is vital. It identifies the association, its <strong>fees</strong>, and the  
      <strong>common amenities</strong> that impact the property's value, marketability, and the owner's financial obligations.</p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">  
  
    <div>  
      <label class="label" for="assoc_name">Association/Cooperative Name</label>  
      <input id="assoc_name" name="assoc_name" type="text" class="input"  
             placeholder="e.g., Parkside Condominiums" maxlength="120"  
             autocomplete="organization" autocapitalize="words" spellcheck="false">  
      <p class="hint text-xs text-gray-500 mt-1">As shown in MLS/public records or signage.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_senior_only">Senior-Only Community</label>  
      <select id="assoc_senior_only" name="assoc_senior_only" class="select">  
        <option value="">Select…</option>  
        <option value="Yes">Yes</option>  
        <option value"No">No</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_detail">Association/Cooperative Summary Description</label>  
      <textarea id="assoc_detail" name="assoc_detail" rows="2" class="textarea" maxlength="1000"  
                placeholder="Brief description from MLS/signage (e.g., self-managed, on-site mgmt, # of buildings)."  
                aria-describedby="assoc_detail_hint"></textarea>  
      <p id="assoc_detail_hint" class="hint text-xs text-gray-500 mt-1">Short summary; public/MLS info only.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_contact_address">Contact Address</label>  
      <input id="assoc_contact_address" name="assoc_contact_address" type="text" class="input"  
             placeholder="e.g., 123 Main St, Suite 200" maxlength="160"  
             autocomplete="address-line1" autocapitalize="words">  
      <p class="hint text-xs text-gray-500 mt-1">Street address (if published).</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_contact_phone">Contact Phone</label>  
      <input id="assoc_contact_phone" name="assoc_contact_phone" type="tel" class="input"  
             placeholder="e.g., (215) 555-1234" maxlength="24" autocomplete="tel" inputmode="tel">  
      <p class="hint text-xs text-gray-500 mt-1">Numbers only if unsure of format.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_fee_amount">Association/Condo Fee</label>  
      <input id="assoc_fee_amount" name="assoc_fee_amount" type="text" class="input"  
             placeholder="e.g., $425" maxlength="24" autocomplete="off" inputmode="decimal"  
             aria-describedby="assoc_fee_amount_hint">  
      <p id="assoc_fee_amount_hint" class="hint text-xs text-gray-500 mt-1">Enter numeric amount; currency symbol optional.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_fee_freq">Fee Paid</label>  
      <select id="assoc_fee_freq" name="assoc_fee_freq" class="select">  
        <option value="">Select…</option>  
        <option value="Monthly">Monthly</option>  
        <option value="Quarterly">Quarterly</option>  
        <option value="Yearly">Yearly</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_fee_includes_text">Fee Includes</label>  
      <input id="assoc_fee_includes_text" name="assoc_fee_includes_text" type="text" class="input"  
             placeholder="e.g., Water, Sewer, Trash, Exterior Maintenance" maxlength="200" autocomplete="off">  
      <p class="hint text-xs text-gray-500 mt-1">Short list; separate items with commas.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_parking_type">Parking Type</label>  
      <select id="assoc_parking_type" name="assoc_parking_type" class="select">  
        <option value="">Select…</option>  
        <option value="Deeded">Deeded</option>  
        <option value="Assigned">Assigned</option>  
        <option value="Garage">Garage</option>  
        <option value="Open Lot">Open Lot</option>  
        <option value="Street Parking">Street Parking</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_pool">Community Pool</label>  
      <select id="assoc_pool" name="assoc_pool" class="select">  
        <option value="">Select…</option>  
        <option value="Yes">Yes</option>  
        <option value="No">No</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_common_amenities">Common Amenities</label>  
      <input id="assoc_common_amenities" name="assoc_common_amenities" type="text" class="input"  
             placeholder="e.g., Elevator, gym, community room" maxlength="200" autocomplete="off">  
      <p class="hint text-xs text-gray-500 mt-1">Short list; separate items with commas.</p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_notes">Association/Cooperative Detailed Summary</label>  
      <textarea id="assoc_notes" name="assoc_notes" rows="3" class="textarea" maxlength="1500"  
                placeholder="Additional MLS/observed details. Do not speculate."  
                aria-describedby="assoc_notes_hint"></textarea>  
      <p id="assoc_notes_hint" class="hint text-xs text-gray-500 mt-1">Keep concise; public/MLS info only.</p>  
    </div>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-lg font-semibold">Subject Setting and View</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section captures the property's "feel" and context. The  
      <strong>Immediate Surroundings</strong> and <strong>Primary View</strong>  
      influence desirability and value by highlighting positive and negative external factors.  
    </p>  
  </div>  
  
  <div class="space-y-4 mt-4">  
    <div class="space-y-3">  
      <h3 class="text-base font-semibold text-gray-700">  
        I. Immediate Surroundings (Setting) <span class="text-red-600">*</span>  
      </h3>  
  
      <label class="label" for="immediate_surroundings">Please describe the immediate surroundings of the subject property.</label>  
  
      <select  
        id="immediate_surroundings"  
        name="immediate_surroundings"  
        required  
        class="select"  
        aria-describedby="immediate_surroundings_hint"  
      >  
        <option value="">Select Setting…</option>  
  
        <optgroup label="A. Urban Settings">  
          <option value="Urban – Central Business District (CBD)">Urban – Central Business District (CBD)</option>  
          <option value="Urban – High-Density Residential">Urban – High-Density Residential</option>  
          <option value="Urban – Mixed Residential/Commercial">Urban – Mixed Residential/Commercial</option>  
          <option value="Urban – Industrial/Commercial Corridor">Urban – Industrial/Commercial Corridor</option>  
          <option value="Urban – Transitional (Redevelopment Area)">Urban – Transitional (Redevelopment Area)</option>  
          <option value="Urban – Rowhome/Townhouse District">Urban – Rowhome/Townhouse District</option>  
          <option value="Urban – Multi-Family Residential Cluster">Urban – Multi-Family Residential Cluster</option>  
          <option value="Urban – Institutional/Campus Area">Urban – Institutional/Campus Area</option>  
          <option value="Urban – Waterfront or Riverfront">Urban – Waterfront or Riverfront</option>  
          <option value="Urban – Heavy Traffic Arterial">Urban – Heavy Traffic Arterial</option>  
        </optgroup>  
  
        <optgroup label="B. Suburban Settings">  
          <option value="Suburban – Established Residential Neighborhood">Suburban – Established Residential Neighborhood</option>  
          <option value="Suburban – Newer Residential Development">Suburban – Newer Residential Development</option>  
          <option value="Suburban – Mixed Residential/Commercial Corridor">Suburban – Mixed Residential/Commercial Corridor</option>  
          <option value="Suburban – Residential Cul-de-Sac or Court">Suburban – Residential Cul-de-Sac or Court</option>  
          <option value="Suburban – Near Shopping Center or Retail Strip">Suburban – Near Shopping Center or Retail Strip</option>  
          <option value="Suburban – Adjacent to Park, School, or Recreation Area">Suburban – Adjacent to Park, School, or Recreation Area</option>  
          <option value="Suburban – Transitional/Developing Area">Suburban – Transitional/Developing Area</option>  
          <option value="Suburban – Light Industrial Fringe">Suburban – Light Industrial Fringe</option>  
          <option value="Suburban – Golf Course or Planned Community">Suburban – Golf Course or Planned Community</option>  
          <option value="Suburban – Near Major Highway or Commuter Route">Suburban – Near Major Highway or Commuter Route</option>  
        </optgroup>  
  
        <optgroup label="C. Rural Settings">  
          <option value="Rural – Agricultural / Farmland Area">Rural – Agricultural / Farmland Area</option>  
          <option value="Rural – Low-Density Residential">Rural – Low-Density Residential</option>  
          <option value="Rural – Village / Small Town Center">Rural – Village / Small Town Center</option>  
          <option value="Rural – Wooded / Forested Area">Rural – Wooded / Forested Area</option>  
          <option value="Rural – Open Pasture / Meadow Setting">Rural – Open Pasture / Meadow Setting</option>  
          <option value="Rural – Mountain / Hilltop Setting">Rural – Mountain / Hilltop Setting</option>  
          <option value="Rural – Lakeside / Riverfront Setting">Rural – Lakeside / Riverfront Setting</option>  
          <option value="Rural – Mixed Agricultural and Residential">Rural – Mixed Agricultural and Residential</option>  
          <option value="Rural – Remote / Isolated Area">Rural – Remote / Isolated Area</option>  
          <option value="Rural – Near Quarry, Mining, or Industrial Use">Rural – Near Quarry, Mining, or Industrial Use</option>  
        </optgroup>  
  
        <optgroup label="Other / Not Listed">  
          <option value="Other (describe)">Other (describe)</option>  
          <option value="Unknown / Not Assessed">Unknown / Not Assessed</option>  
        </optgroup>  
      </select>  
  
      <div id="immediate_surroundings_hint" class="text-xs text-gray-600 space-y-1 mt-2 hint">  
        <p><strong>Urban:</strong> High density, built-up, mixed land use.</p>  
        <p><strong>Suburban:</strong> Moderate density, primarily residential with amenities.</p>  
        <p><strong>Rural:</strong> Low density, larger parcels; agricultural/undeveloped nearby.</p>  
      </div>  
    </div>  
  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">  
        II. Surrounding Property Condition <span class="text-red-600">*</span>  
      </h3>  
  
      <label class="label" for="surroundings_rating">Please rate the properties immediately surrounding the subject property.</label>  
  
      <select  
        id="surroundings_rating"  
        name="surroundings_rating"  
        required  
        class="select"  
        aria-describedby="surroundings_reason_short_hint"  
      >  
        <option value="">Select Condition…</option>  
        <option value="Well Kept">Well Kept</option>  
        <option value="Mixed Condition">Mixed Condition</option>  
        <option value="Poorly Kept">Poorly Kept</option>  
        <option value="Unknown / Not Assessed">Unknown / Not Assessed</option>  
      </select>  
  
      <label class="label mt-2" for="surroundings_reason_short">Brief reason for your selection:</label>  
      <textarea  
        id="surroundings_reason_short"  
        name="surroundings_reason_short"  
        rows="3"  
        class="textarea"  
        maxlength="350"  
        placeholder="e.g., Majority renovated with good upkeep; a few deferred-maintenance homes"  
        aria-describedby="surroundings_reason_short_hint"  
      ></textarea>  
      <p id="surroundings_reason_short_hint" class="hint text-xs text-gray-500 mt-1">Limit: 350 characters.</p>  
    </div>  
  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">  
        III. Primary View <span class="text-red-600">*</span>  
      </h3>  
  
      <label class="label" for="primary_view">Please describe the primary view of the subject property.</label>  
  
      <select  
        id="primary_view"  
        name="primary_view"  
        required  
        class="select"  
        aria-describedby="primary_view_hint"  
      >  
        <option value="">Select View…</option>  
  
        <optgroup label="A. Beneficial / Desirable">  
          <option value="Park / Greenbelt">Park / Greenbelt</option>  
          <option value="Open Space (Unobstructed)">Open Space (Unobstructed)</option>  
          <option value="Water View (River/Lake/Creek)">Water View (River/Lake/Creek)</option>  
          <option value="Golf Course">Golf Course</option>  
          <option value="City Skyline">City Skyline</option>  
          <option value="Courtyard / Garden">Courtyard / Garden</option>  
          <option value="Trees / Wooded">Trees / Wooded</option>  
          <option value="Seasonal Water View">Seasonal Water View</option>  
          <option value="Mountain / Hilltop">Mountain / Hilltop</option>  
        </optgroup>  
  
        <optgroup label="B. Typical / Neutral">  
          <option value="Residential Street – Similar Homes">Residential Street – Similar Homes</option>  
          <option value="Residential Street – Mixed Housing Types">Residential Street – Mixed Housing Types</option>  
          <option value="Rear Alley / Service Drive">Rear Alley / Service Drive</option>  
          <option value="Interior Block / Courtyard">Interior Block / Courtyard</option>  
          <option value="School / Playground">School / Playground</option>  
          <option value="Community Facilities (Library/Rec)">Community Facilities (Library/Rec)</option>  
          <option value="Local Retail (Neighborhood-Scale)">Local Retail (Neighborhood-Scale)</option>  
          <option value="Light Rail/Transit (Not Adjacent)">Light Rail/Transit (Not Adjacent)</option>  
        </optgroup>  
  
        <optgroup label="C. Adverse / Potentially Adverse">  
          <option value="Commercial Corridor (Arterial)">Commercial Corridor (Arterial)</option>  
          <option value="Industrial / Warehouse">Industrial / Warehouse</option>  
          <option value="Highway / Ramp">Highway / Ramp</option>  
          <option value="Railroad / Utility Corridor">Railroad / Utility Corridor</option>  
          <option value="Parking Lot (Surface)">Parking Lot (Surface)</option>  
          <option value="Vacant Lots / Boarded Structures">Vacant Lots / Boarded Structures</option>  
          <option value="Construction / Redevelopment Site">Construction / Redevelopment Site</option>  
          <option value="Municipal Facility (Treatment Plant/Depot)">Municipal Facility (Treatment Plant/Depot)</option>  
          <option value="Cemetery">Cemetery</option>  
          <option value="Billboards / Signage Cluster">Billboards / Signage Cluster</option>  
          <option value="Obstructed / Limited View">Obstructed / Limited View</option>  
        </optgroup>  
  
        <optgroup label="Other / Not Listed">  
          <option value="Other (describe)">Other (describe)</option>  
          <option value="Unknown / Not Assessed">Unknown / Not Assessed</option>  
        </optgroup>  
      </select>  
  
      <p id="primary_view_hint" class="hint text-xs text-gray-500 mt-1">  
        Choose the predominant view from main living areas or primary exposure.  
      </p>  
    </div>  
  
    <div classs="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">  
        IV. Local Construction Activity <span class="text-red-600">*</span>  
      </h3>  
  
      <label class="label" for="construction_active_yn">  
        Are there any major construction or public works planned or currently active in the immediate area?  
      </label>  
  
      <select  
        id="construction_active_yn"  
        name="construction_active_yn"  
        class="select"  
        required  
        aria-describedby="construction_reason_short_hint"  
      >  
        <option value="">Select Yes/No…</option>  
        <option value="Yes">Yes</option>  
        <option value="No">No</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
  
      <label class="label mt-2" for="construction_reason_short">Brief reason for your selection:</label>  
      <textarea  
        id="construction_reason_short"  
        name="construction_reason_short"  
        rows="3"  
        class="textarea"  
        maxlength="350"  
        placeholder="e.g., Ongoing streetscape work on 3rd St; noise during weekdays"  
        aria-describedby="construction_reason_short_hint"  
      ></textarea>  
      <p id="construction_reason_short_hint" class="hint text-xs text-gray-500 mt-1">Limit: 350 characters.</p>  
    </div>  
  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">V. Comprehensive Description</h3>  
  
      <label class="label" for="context_description">Provide a comprehensive summary of the setting and views:</label>  
  
      <textarea  
        id="context_description"  
        name="context_description"  
        rows="3"  
        class="textarea"  
        placeholder="Summarize the setting, views, surrounding property conditions, and any local construction activity..."  
        maxlength="1000"  
        aria-describedby="context_description_hint"  
      ></textarea>  
  
      <p id="context_description_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 150–400 characters. Limit: 1000 characters.</p>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-lg font-semibold">Public Records and Compliance</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>These checks flag issues like <strong>Liens</strong> or <strong>Violations</strong>, assessing the property's legal status.</p>  
  </div>  
  
  <div class="flex flex-col space-y-4">  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_liens_yn">Any known liens or encroachments?</label>  
          <select id="pr_liens_yn" name="pr_liens_yn" class="select" aria-describedby="pr_liens_explain_hint" aria-controls="pr_liens_explain_wrapper">  
            <option value="">Select…</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="Unknown">Unknown</option>  
          </select>  
        </div>  
        <div id="pr_liens_explain_wrapper" role="region" aria-live="polite">  
          <label class="label text-sm" for="pr_liens_explain">Explain (required if Yes):</label>  
          <textarea id="pr_liens_explain" name="pr_liens_explain" rows="2" class="textarea" maxlength="200" placeholder="Type of lien/encroachment, doc #/source, date if known."></textarea>  
          <p id="pr_liens_explain_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_licenses_yn">Any active licenses on the property?</label>  
          <select id="pr_licenses_yn" name="pr_licenses_yn" class="select" aria-describedby="pr_licenses_explain_hint" aria-controls="pr_licenses_explain_wrapper">  
            <option value="">Select…</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="Unknown">Unknown</option>  
          </select>  
        </div>  
        <div id="pr_licenses_explain_wrapper" role="region" aria-live="polite">  
          <label class="label text-sm" for="pr_licenses_explain">Explain (required if Yes):</label>  
          <textarea id="pr_licenses_explain" name="pr_licenses_explain" rows="2" class="textarea" maxlength="200" placeholder="Rental license, use &amp; occupancy, business license, etc."></textarea>  
          <p id="pr_licenses_explain_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_violations_yn">Any known violations on the property?</label>  
          <select id="pr_violations_yn" name="pr_violations_yn" class="select" aria-describedby="pr_violations_explain_hint" aria-controls="pr_violations_explain_wrapper">  
            <option value="">Select…</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="Unknown">Unknown</option>  
          </select>  
        </div>  
        <div id="pr_violations_explain_wrapper" role="region" aria-live="polite">  
          <label class="label text-sm" for="pr_violations_explain">Explain (required if Yes):</label>  
          <textarea id="pr_violations_explain" name="pr_violations_explain" rows="2" class="textarea" maxlength="200" placeholder="Type of violation, notice #/source, approximate date."></textarea>  
          <p id="pr_violations_explain_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_flood_known_yn">Is the property within a known Flood Zone?</label>  
          <select id="pr_flood_known_yn" name="pr_flood_known_yn" class="select" aria-describedby="pr_flood_explain_hint" aria-controls="pr_flood_explain_wrapper">  
            <option value="">Select…</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="Unknown">Unknown</option>  
          </select>  
        </div>  
        <div id="pr_flood_explain_wrapper" role="region" aria-live="polite">  
          <label class="label text-sm" for="pr_flood_explain">Explain (required if Yes):</label>  
          <textarea id="pr_flood_explain" name="pr_flood_explain" rows="2" class="textarea" maxlength="200" placeholder="FEMA zone (e.g., AE, X), source (FIRM/MSC), panel/date if known."></textarea>  
          <p id="pr_flood_explain_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  </div>  
  
  <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900 mt-4">  
    <p class="font-semibold">Public Records and Use Disclaimer</p>  
    <p class="mt-1">  
      Public-record lookups in this report are a good-faith snapshot from available sources and are  
      <strong>not</strong> a code inspection, engineering report, legal opinion, or flood certification.  
      Verify with the authority having jurisdiction and consult qualified professionals as needed.  
    </p>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-lg font-semibold">Exterior Condition</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-lg">  
    <label class="label font-bold text-blue-800 mb-2" for="overall_exterior_condition_rating">  
      Overall Exterior Condition Rating <span class="text-red-600">*</span>  
    </label>  
    <select  
      id="overall_exterior_condition_rating"  
      name="overall_exterior_condition_rating"  
      required  
      class="select"  
      aria-describedby="overall_exterior_condition_hint"  
      autocomplete="off"  
    >  
      <option value="">Select Condition…</option>  
      <option value="Excellent">Excellent</option>  
      <option value="Good">Good</option>  
      <option value="Average">Average</option>  
      <option value="Fair">Fair</option>  
      <option value="Poor">Poor</option>  
      <option value="Damaged">Damaged</option>  
      <option value="N/A">N/A</option>  
    </select>  
    <p id="overall_exterior_condition_hint" class="text-xs text-blue-700 mt-1 hint">  
      Note: Condition below <strong>Average</strong> (Fair, Poor, Damaged) will require detailed notes.  
    </p>  
  
    <div class="mt-3" role="region" aria-live="polite">  
      <label class="label text-sm" for="overall_exterior_condition_explain">  
        Brief explanation (required if Fair, Poor, or Damaged)  
      </label>  
      <textarea  
        id="overall_exterior_condition_explain"  
        name="overall_exterior_condition_explain"  
        rows="2"  
        class="textarea"  
        maxlength="750"  
        placeholder="e.g., Multiple areas of peeling paint and wood rot on soffits; loose handrail at front steps."  
        aria-describedby="overall_exterior_condition_explain_hint"  
      ></textarea>  
      <p id="overall_exterior_condition_explain_hint" class="hint text-xs text-gray-500 mt-1">  
        Suggested: 75–200 characters.  
      </p>  
    </div>  
  </div>  
  
  <div class="space-y-4">  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">I. Site and Grounds</h3>  
      <p class="text-sm text-gray-500">Sidewalks, driveways, landscaping, grading, retaining walls, fencing, etc.</p>  
  
      <label class="label" for="site_grounds_rating">  
        Condition Rating (Site and Grounds) <span class="text-red-600">*</span>  
      </label>  
      <select  
        id="site_grounds_rating"  
        name="site_grounds_rating"  
        required  
        class="select"  
        aria-describedby="site_grounds_explain_hint"  
        autocomplete="off"  
      >  
        <option value="">Select Rating…</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A">N/A</option>  
      </select>  
  
      <div role="region" aria-live="polite">  
        <label class="label mt-2" for="site_grounds_explain">Explain (required if Fair, Poor, or Damaged)</label>  
        <textarea  
          id="site_grounds_explain"  
          name="site_grounds_explain"  
          rows="2"  
          class="textarea"  
          placeholder="e.g., Sidewalk has major cracking/trip hazard near driveway; rear fence leaning ~10°."  
          maxlength="750"  
          aria-describedby="site_grounds_explain_hint"  
        ></textarea>  
        <p id="site_grounds_explain_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 75–200 characters.</p>  
      </div>  
    </div>  
  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">II. Exterior Structure and Components</h3>  
      <p class="text-sm text-gray-500">Walls, siding, trim, foundation, soffit, fascia, garage structure, etc.</p>  
  
      <label class="label" for="ext_structure_rating">  
        Condition Rating (Exterior Structure) <span class="text-red-600">*</span>  
      </label>  
      <select  
        id="ext_structure_rating"  
        name="ext_structure_rating"  
        required  
        class="select"  
        aria-describedby="ext_structure_explain_hint"  
        autocomplete="off"  
      >  
        <option value="">Select Rating…</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A">N/A</option>  
      </select>  
  
      <div role="region" aria-live="polite">  
        <label class="label mt-2" for="ext_structure_explain">Explain (required if Fair, Poor, or Damaged)</label>  
        <textarea  
          id="ext_structure_explain"  
          name="ext_structure_explain"  
          rows="2"  
          class="textarea"  
          placeholder="e.g., Siding is warped/peeling on south elevation; step cracks at front foundation."  
          maxlength="750"  
          aria-describedby="ext_structure_explain_hint"  
        ></textarea>  
        <p id="ext_structure_explain_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 75–200 characters.</p>  
      </div>  
    </div>  
  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">III. Roof System</h3>  
      <p class="text-sm text-gray-500">Roofing material, chimneys, gutters, downspouts, vents, etc.</p>  
  
      <label class="label" for="roof_system_rating">  
        Condition Rating (Roof System) <span class="text-red-600">*</span>  
      </label>  
      <select  
        id="roof_system_rating"  
        name="roof_system_rating"  
        required  
        class="select"  
        aria-describedby="roof_system_explain_hint"  
        autocomplete="off"  
      >  
        <option value="">Select Rating…</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</Nption>  
        <option value="N/A">N/A</option>  
      </select>  
  
      <div role="region" aria-live="polite">  
        <label class="label mt-2" for="roof_system_explain">Explain (required if Fair, Poor, or Damaged)</label>  
        <textarea  
          id="roof_system_explain"  
          name="roof_system_explain"  
          rows="2"  
          class="textarea"  
          placeholder="e.g., Missing shingles at rear slope; clogged gutters causing fascia staining."  
          maxlength="750"  
          aria-describedby="roof_system_explain_hint"  
        ></textarea>  
        <p id="roof_system_explain_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 75–200 characters.</p>  
      </div>  
    </div>  
  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">IV. Entry and Exterior Openings</h3>  
      <p class="text-sm text-gray-500">Steps/porch, doors, windows, exterior lighting, outlets, hose bibs, etc.</p>  
  
      <label class="label" for="entry_openings_rating">  
        Condition Rating (Entry and Openings) <span class="text-red-600">*</span>  
      </label>  
      <select  
        id="entry_openings_rating"  
        name="entry_openings_rating"  
        required  
        class="select"  
        aria-describedby="entry_openings_explain_hint"  
        autocomplete="off"  
      >  
        <option value="">Select Rating…</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A">N/A</option>  
      </select>  
  
      <div role="region" aria-live="polite">  
        <label class="label mt-2" for="entry_openings_explain">Explain (required if Fair, Poor, or Damaged)</label>  
        <textarea  
          id="entry_openings_explain"  
          name="entry_openings_explain"  
          rows="2"  
          class="textarea"  
          placeholder="e.g., Front window cracked; porch step riser loose; missing GFCI cover at rear outlet."  
          maxlength="750"  
          aria-describedby="entry_openings_explain_hint"  
        ></textarea>  
        <p id="entry_openings_explain_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 75–200 characters.</p>  
      </div>  
    </div>  
  </div>  
  
  <div class="pt-6 border-t border-gray-300 mt-6">  
    <label class="label font-semibold" for="overall_exterior_summary_details">  
      Overall Exterior Details Summary  
    </label>  
    <textarea  
      id="overall_exterior_summary_details"  
      name="overall_exterior_summary_details"  
      rows="3"  
      class="textarea"  
      placeholder="Provide a detailed narrative on the overall exterior condition, highlighting any major deferred maintenance items, recent improvements, or specific external issues not covered above."  
      maxlength="1500"  
      aria-describedby="overall_exterior_summary_hint"  
    ></textarea>  
    <p id="overall_exterior_summary_hint" class="hint text-xs text-gray-500 mt-1">  
      Max 1500 characters. Use this for the final summary/explanation.  
    </p>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card hidden" id="assoc_access_condition_section" aria-live="polite" data-skip-required="true">  
  <h2 class="text-lg font-semibold">Common Area Inspection</h2>  
  
  <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-yellow-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section assesses the <em>physical health</em> of the common areas. The observed  
      condition of lobbies, parking, and amenities directly impacts usability and can  
      indicate association management effectiveness or deferred maintenance.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_overall_condition">Overall Condition of Common Areas and Amenities</label>  
      <select id="assoc_overall_condition" name="assoc_overall_condition" class="select" autocomplete="off" aria-required="false" data-optional="true">  
        <option value="">Select...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="Unknown / Not Accessible / Not Inspected">Unknown / Not Accessible / Not Inspected</option>  
      </select>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_common_areas_condition">Common Areas</label>  
      <select id="assoc_common_areas_condition" name="assoc_common_areas_condition" class="select" autocomplete="off" aria-required="false" data-optional="true">  
        <option value="">Select...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A — Not Applicable">N/A — Not Applicable</option>  
        <option value="Unknown / Not Accessible / Not Inspected">Unknown / Not Accessible / Not Inspected</option>  
      </select>  
      <p id="assoc_common_areas_hint" class="hint text-xs text-gray-500 mt-1">  
        Notes are helpful, especially if Fair, Poor, or Damaged.  
      </p>  
    </div>  
    <div>  
      <label class="label" for="assoc_common_areas_notes">Common Area Notes</label>  
      <textarea  
        id="assoc_common_areas_notes"  
        name="assoc_common_areas_notes"  
        rows="2"  
        class="textarea"  
        maxlength="200"  
        placeholder="Brief notes on lobbies, corridors, clubhouse, mailroom, etc."  
        aria-describedby="assoc_common_areas_notes_hint"  
        aria-required="false"  
        data-optional="true"  
      ></textarea>  
      <p id="assoc_common_areas_notes_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_parking_condition">Parking Area</label>  
      <select id="assoc_parking_condition" name="assoc_parking_condition" class="select" autocomplete="off" aria-required="false" data-optional="true">  
        <option value="">Select...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A — Not Applicable">N/A — Not Applicable</option>  
        <option value="Unknown / Not Accessible / Not Inspected">Unknown / Not Accessible / Not Inspected</option>  
      </select>  
      <p id="assoc_parking_hint" class="hint text-xs text-gray-500 mt-1">  
        Notes are helpful, especially if Fair, Poor, or Damaged.  
      </p>  
    </div>  
    <div>  
      <label class="label" for="assoc_parking_notes">Parking Area Notes</label>  
      <textarea  
        id="assoc_parking_notes"  
        name="assoc_parking_notes"  
        rows="2"  
        class="textarea"  
        maxlength="200"  
        placeholder="Lot/garage condition, striping, lighting, access, signage."  
        aria-describedby="assoc_parking_notes_hint"  
        aria-required="false"  
        data-optional="true"  
      ></textarea>  
      <p id="assoc_parking_notes_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_pool_condition">Pool</label>  
      <select id="assoc_pool_condition" name="assoc_pool_condition" class="select" autocomplete="off" aria-required="false" data-optional="true">  
        <option value="">Select...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A — Not Applicable">N/A — Not Applicable</option>  
        <option value="Unknown / Not Accessible / Not Inspected">Unknown / Not Accessible / Not Inspected</option>  
      </select>  
      <p id="assoc_pool_hint" class="hint text-xs text-gray-500 mt-1">  
        Notes are helpful, especially if Fair, Poor, or Damaged.  
      </p>  
    </div>  
    <div>  
      <label class="label" for="assoc_pool_notes">Pool Area Notes</label>  
      <textarea  
        id="assoc_pool_notes"  
        name="assoc_pool_notes"  
        rows="2"  
        class="textarea"  
        maxlength="200"  
        placeholder="Fencing, deck surface, visible maintenance; if N/A, leave blank."  
        aria-describedby="assoc_pool_notes_hint"  
        aria-required="false"  
        data-optional="true"  
      ></textarea>  
      <p id="assoc_pool_notes_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_extra_amenities_condition">Extra Amenities</label>  
      <select id="assoc_extra_amenities_condition" name="assoc_extra_amenities_condition" class="select" autocomplete="off" aria-required="false" data-optional="true">  
        <option value="">Select...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A — Not Applicable">N/A — Not Applicable</option>  
        <option value="Unknown / Not Accessible / Not Inspected">Unknown / Not Accessible / Not Inspected</option>  
      </select>  
      <p id="assoc_extra_amenities_hint" class="hint text-xs text-gray-500 mt-1">  
        Notes are helpful, especially if Fair, Poor, or Damaged.  
      </p>  
    </div>  
    <div>  
      <label class="label" for="assoc_extra_amenities_notes">Extra Amenities Notes</label>  
      <textarea  
        id="assoc_extra_amenities_notes"  
        name="assoc_extra_amenities_notes"  
        rows="2"  
        class="textarea"  
        maxlength="200"  
        placeholder="Gym, community room, playground, courtyard, etc."  
        aria-describedby="assoc_extra_amenities_notes_hint"  
        aria-required="false"  
        data-optional="true"  
      ></textarea>  
      <p id="assoc_extra_amenities_notes_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_elevator_condition">Elevator</label>  
      <select id="assoc_elevator_condition" name="assoc_elevator_condition" class="select" autocomplete="off" aria-required="false" data-optional="true">  
        <option value="">Select...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A — Not Applicable">N/A — Not Applicable</option>  
        <option value="Unknown / Not Accessible / Not Inspected">Unknown / Not Accessible / Not Inspected</option>  
      </select>  
      <p id="assoc_elevator_hint" class="hint text-xs text-gray-500 mt-1">  
        Notes are helpful, especially if Fair, Poor, or Damaged.  
      </fs>  
    </div>  
    <div>  
      <label class="label" for="assoc_elevator_notes">Elevator Notes</label>  
      <textarea  
        id="assoc_elevator_notes"  
        name="assoc_elevator_notes"  
        rows="2"  
        class="textarea"  
        maxlength="200"  
        placeholder="Operational status not tested; call panel condition; signage."  
        aria-describedby="assoc_elevator_notes_hint"  
        aria-required="false"  
        data-optional="true"  
      ></textarea>  
      <p id="assoc_elevator_notes_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_security_condition">Security</label>  
      <select id="assoc_security_condition" name="assoc_security_condition" class="select" autocomplete="off" aria-required="false" data-optional="true">  
        <option value="">Select...</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A — Not Applicable">N/A — Not Applicable</option>  
        <option value="Unknown / Not Accessible / Not Inspected">Unknown / Not Accessible / Not Inspected</option>  
      </select>  
      <p id="assoc_security_hint" class="hint text-xs text-gray-500 mt-1">  
        Notes are helpful, especially if Fair, Poor, or Damaged.  
      </p>  
    </div>  
    <div>  
      <label class="label" for="assoc_security_notes">Security Notes</label>  
      <textarea  
        id="assoc_security_notes"  
        name="assoc_security_notes"  
        rows="2"  
        class="textarea"  
        maxlength="200"  
        placeholder="Cameras, intercoms, access control, gate/door hardware."  
        aria-describedby="assoc_security_notes_hint"  
        aria-required="false"  
        data-optional="true"  
      ></textarea>  
      <p id="assoc_security_notes_hint" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_overall_condition_summary">  
        Overall Condition of Common Areas and Amenities — Summary  
      </label>  
      <textarea  
        id="assoc_overall_condition_summary"  
        name="assoc_overall_condition_summary"  
        rows="3"  
        class="textarea"  
        maxlength="1000"  
        placeholder="Provide a concise summary, noting significant observations, deferred maintenance, or safety concerns."  
        aria-describedby="assoc_overall_condition_summary_hint"  
        aria-required="false"  
        data-optional="true"  
      ></textarea>  
      <p id="assoc_overall_condition_summary_hint" class="hint text-xs text-gray-500 mt-1">  
        Suggested: 150–400 characters.  
      </p>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card" id="health_safety_section">  
  <h2 class="text-lg font-semibold">Health and Safety</h2>  
  
  <div class="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">IMMEDIATE CONCERNS:</p>  
    <p>Issues related to potential harm, code compliance, or external factors affecting health or property.</p>  
  </div>  
  
  <div class="flex flex-col space-y-4">  
    <div class="border border-gray-100 p-4 rounded-xl space-y-3">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="hazards_yn">  
            Visible hazards (loose steps, missing railings, unsafe entry)?  
            <span class="text-red-600">*</span>  
          </label>  
          <select  
            id="hazards_yn"  
            name="hazards_yn"  
            class="select"  
            required  
            aria-describedby="hazards_hint"  
            autocomplete="off"  
            aria-controls="hazards_notes_wrap"  
          >  
            <option value="">Select Yes/No</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="N/A">N/A</option>  
          </select>  
          <p id="hazards_hint" class="hint text-xs text-gray-500 mt-1">Notes recommended if you select Yes.</p>  
        </div>  
  
        <div id="hazards_notes_wrap" role="region" aria-live="polite">  
          <label class="label text-sm" for="hazards_notes">Notes / Details</label>  
          <textarea  
            id="hazards_notes"  
            name="hazards_notes"  
            rows="2"  
            class="textarea"  
            placeholder="e.g., Missing handrail at front steps; loose paver at walkway."  
            maxlength="200"  
            aria-describedby="hazards_notes_help"  
          ></textarea>  
          <p id="hazards_notes_help" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl space-y-3">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="code_violations_yn">  
            Visible code violations?  
            <span class="text-red-600">*</span>  
          </label>  
          <select  
            id="code_violations_yn"  
            name="code_violations_yn"  
            class="select"  
            required  
            aria-describedby="code_violations_hint"  
            autocomplete="off"  
            aria-controls="code_violations_notes_wrap"  
          >  
            <option value="">Select Yes/No</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="N/A">N/A</option>  
          </select>  
          <p id="code_violations_hint" class="hint text-xs text-gray-500 mt-1">Notes recommended if you select Yes.</p>  
        </div>  
  
        <div id="code_violations_notes_wrap" role="region" aria-live="polite">  
          <label class="label text-sm" for="code_violations_notes">Notes / Details</label>  
          <textarea  
            id="code_violations_notes"  
            name="code_violations_notes"  
            rows="2"  
            class="textarea"  
            placeholder="e.g., Non-GFCI outlets near hose bib; exposed wiring at A/C disconnect."  
            maxlength="200"  
            aria-describedby="code_violations_notes_help"  
          ></textarea>  
          <p id="code_violations_notes_help" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl space-y-3">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="ext_odors_yn">  
            Obvious exterior odors present? (e.g., industrial, landfill, stagnant water)  
            <span class="text-red-600">*</span>  
          </label>  
          <select  
            id="ext_odors_yn"  
            name="ext_odors_yn"  
            class="select"  
            required  
            aria-describedby="ext_odors_hint"  
            autocomplete="off"  
            aria-controls="ext_odors_notes_wrap"  
          >  
            <option value="">Select Yes/No</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="N/A">N/A</option>  
          </select>  
          <p id="ext_odors_hint" class="hint text-xs text-gray-500 mt-1">Notes recommended if you select Yes.</p>  
        </div>  
  
        <div id="ext_odors_notes_wrap" role="region" aria-live="polite">  
          <label class="label text-sm" for="ext_odors_notes">Notes / Details</label>  
          <textarea  
            id="ext_odors_notes"  
            name="ext_odors_notes"  
            rows="2"  
            class="textarea"  
            placeholder="e.g., Noticeable petroleum odor near alley on windy days."  
            maxlength="200"  
            aria-describedby="ext_odors_notes_help"  
          ></textarea>  
          <p id="ext_odors_notes_help" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <label class="label" for="health_safety_summary">Health &amp; Safety Summary (optional)</label>  
      <textarea  
        id="health_safety_summary"  
        name="health_safety_summary"  
        rows="3"  
        class="textarea"  
        maxlength="600"  
        placeholder="Concise summary of any critical concerns, locations, and immediate recommendations."  
        aria-describedby="health_safety_summary_hint"  
      ></textarea>  
      <p id="health_safety_summary_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 120–300 characters (max 600).</p>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div class="mt-6" id="inspector_actions">  
  <p id="exterior-status-message" class="text-sm text-gray-600 mb-3" role="status" aria-live="polite">  
    Complete all required fields to <strong>Generate PDF</strong>, or <strong>Clear Form</strong> to start over.  
  </p>  
  
  <div id="exterior-actions" data-actions class="flex items-center justify-between gap-3">  
    <button type="button" id="btnClearExterior" class="btn-red" aria-describedby="clear_hint">Clear Form</button>  
    <p data-status="pcr-exterior" class="text-sm text-gray-500"></p>  
    <button type="button" id="btnGenerateExterior" class="btn-blue" aria-describedby="generate_hint">Generate PDF</button>  
  </div>  
  
  <p id="clear_hint" class="sr-only">Clears all inputs in the form.</p>  
  <p id="generate_hint" class="sr-only">Validates required fields and triggers PDF generation.</p>  
</div>  
  
</form>  
</main>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
/* =========================  
  D-OM + STATUS HELPERS  
  ========================= */  
const $ = (sel, ctx = document) => ctx.querySelector(sel);  
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));  
  
function updateStatus(el, msg, kind = "info") {  
  if (!el) return;  
  el.textContent = msg;  
  el.dataset.kind = kind;  
}  
  
// Helper to show/hide sections (for Rules 2, 3, & 4)  
function setVis(el, show) {  
  if (!el) return;  
  el.classList.toggle('hidden', !show);  
  el.toggleAttribute('hidden', !show);  
  el.setAttribute('aria-hidden', String(!show));  
}  
  
/* =========================  
   jsPDF LAZY LOADER (Rule 9: single-flight + timeout)  
  ========================= */  
const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';  
let _pdfReady = false;  
let _pdfLoadPromise = null;  
  
function loadJsPdfOnce() {  
  if (_pdfReady) return Promise.resolve(true);  
  if (_pdfLoadPromise) return _pdfLoadPromise;  
  _pdfLoadPromise = new Promise((resolve, reject) => {  
    let done = false;  
    const finish = (ok) => {  
      if (!done) {  
        done = true;  
        ok ? resolve(true) : reject(new Error('Failed to load jsPDF'));  
      }  
    };  
  
    // already present  
    if (window.jspdf && typeof window.jspdf.jsPDF === 'function') {  
      if (!window.jsPDF) window.jsPDF = window.jspdf.jsPDF;  
      _pdfReady = true;  
      return finish(true);  
    }  
  
    // if a tag exists, poll briefly (bounded)  
    const existing = document.querySelector(`script[src="${JSPDF_URL}"]`);  
    let tries = 0;  
    const POLL_MS = 100,  
      MAX_TRIES = 80; // ~8s  
    const poll = () => {  
      if (window.jspdf && window.jspdf.jsPDF) {  
        if (!window.jsPDF) window.jsPDF = window.jspdf.jsPDF;  
        _pdfReady = true;  
         return finish(true);  
      }  
      if (++tries > MAX_TRIES) return finish(false);  
      setTimeout(poll, POLL_MS);  
    };  
  
    if (existing) {  
      poll();  
      return;  
    }  
  
    // inject new script tag  
    const s = document.createElement('script');  
    s.src = JSPDF_URL;  
    s.async = true;  
    s.onload = () => {  
      if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
        window.jsPDF = window.jspdf.jsPDF;  
      }  
      _pdfReady = !!(window.jspdf && window.jspdf.jsPDF);  
      finish(_pdfReady);  
    };  
    s.onerror = () => finish(false);  
    document.head.appendChild(s);  
    // hard timeout guard (~10s total)  
    setTimeout(() => finish(_pdfReady), 10000);  
  });  
  
  return _pdfLoadPromise;  
}  
  
/* =========================  
   LABEL OVERRIDES + HELPERS  
  ========================= */  
// Rule 1: Removed repair-related aliases  
const LABEL_ALIASES = {};  
function cssEscapeSafe(s) {  
  if (window.CSS && typeof CSS.escape === 'function') return CSS.escape(s);  
  return String(s).replace(/["\\]/g, '\\$&').replace(/[\n\r\t]/g, ' ');  
}  
  
function getLabelForField(field) {  
  if (!field) return '';  
  
  // 1) Aliases by id or (arrayless) name  
  const byId = (field.id || '').trim();  
  const byName = (field.name || '').replace(/\[\]$/, '').trim();  
  if (byId && LABEL_ALIASES[byId]) return LABEL_ALIASES[byId];  
  if (byName && LABEL_ALIASES[byName]) return LABEL_ALIASES[byName];  
  
  // 2) Explicit <label for="id">  
  if (byId) {  
    const explicit = document.querySelector(`label[for="${cssEscapeSafe(byId)}"]`);  
    if (explicit) {  
      const t = explicit.textContent.replace(/\s+/g, ' ').trim();  
      if (t) return t;  
    }  
  }  
  
    
  // 3) Wrapped label: prefer a visible text node/span inside  
  const wrapLabel = field.closest?.('label');  
  if (wrapLabel) {  
    const preferred = wrapLabel.querySelector('.label, .block.text-sm, .block.font-medium, span, strong, b');  
    if (preferred) {  
      const t = preferred.textContent.replace(/\s+/g, ' ').trim();  
      if (t) return t;  
    }  
    const clone = wrapLabel.cloneNode(true);  
    clone.querySelectorAll('input,select,textarea,button').forEach(n => n.remove());  
    const t2 = clone.textContent.replace(/\s+/g, ' ').trim();  
    if (t2) return t2;  
  }  
  
  // 4) Nearby .label element (grid cell)  
  const cell = field.closest?.('div');  
  if (cell) {  
    const lab = cell.querySelector('.label');  
    if (lab) {  
      const t = lab.textContent.replace(/\s+/g, ' ').trim();  
      if (t) return t;  
    }  
  }  
  
  // 5) Fallbacks  
  if (field.placeholder) return field.placeholder;  
  if (field.name) return field.name;  
  return '(unnamed field)';  
}  
  
/* Safe selected option */  
function getSelectChoice(selectEl) {  
  if (!selectEl || selectEl.tagName !== 'SELECT') return {  
    text: '',  
    value: ''  
  };  
  const opt = selectEl.options[selectEl.selectedIndex];  
  if (!opt) return {  
    text: '',  
    value: ''  
  };  
  return {  
    text: (opt.text || '').trim(),  
    value: (opt.value || '').trim()  
  };  
}  
  
/* =========================  
   ERROR UI HELPERS  
  ========================= */  
function clearFieldError(el) {  
  if (!el) return;  
  el.removeAttribute('aria-invalid');  
  el.classList.remove('ring-2', 'ring-red-500', 'border-red-500', 'ring-offset-2', 'animate-pulse');  
  const p = el.parentElement?.querySelector?.('.field-error');  
  if (p) p.remove();  
}  
  
function clearAllErrors(form) {  
  $$('[aria-invalid="true"]', form).forEach(clearFieldError);  
  $$('.field-error', form).forEach(n => n.remove());  
  const box = form.querySelector('#pcr-error-summary');  
  if (box) box.remove();  
}  
  
function setFieldError(el, message) {  
  if (!el) return;  
  el.setAttribute('aria-invalid', 'true');  
  el.classList.add('ring-2', 'ring-red-500', 'border-red-500');  
  if (!el.parentElement) return;  
  let msg = el.parentElement.querySelector('.field-error');  
  if (!msg) {  
    msg = document.createElement('p');  
    msg.className = 'field-error text-xs text-red-600 mt-1';  
    el.parentElement.appendChild(msg);  
  }  
  msg.textContent = message || 'This field is required.';  
}  
  
/* =========================  
   SKIP/OPTIONAL GUARDS  
  ========================= */  
const SKIP_SELECTOR = '[data-skip-required]';  
const inSkip = (el) => !!el?.closest?.(SKIP_SELECTOR);  
const isOptional = (el) => el?.dataset?.optional === 'true';  
const isEmpty = v => v == null || String(v).trim() === '';  
/* =========================  
   ERROR REVEAL HELPERS  
  ========================= */  
function ensureId(el) {  
  if (!el?.id) el.id = 'fld_' + Math.random().toString(36).slice(2, 9);  
  return el.id;  
}  
  
function unhideAncestors(el) {  
  let n = el;  
  while (n && n !== document.body) {  
    if (n.classList && n.classList.contains('hidden')) n.classList.remove('hidden');  
    if (n.hasAttribute && n.hasAttribute('hidden')) n.removeAttribute('hidden');  
    if (n.getAttribute && n.getAttribute('aria-hidden') === 'true') n.setAttribute('aria-hidden', 'false');  
    n = n.parentElement;  
  }  
}  
  
function revealField(el) {  
  if (!el) return;  
  unhideAncestors(el);  
  el.scrollIntoView({  
    behavior: 'smooth',  
    block: 'center'  
  });  
  try {  
    el.focus({  
      preventScroll: true  
    });  
  } catch {}  
  el.classList.add('ring-2', 'ring-red-500', 'ring-offset-2', 'animate-pulse');  
  setTimeout(() => el.classList.remove('animate-pulse'), 1800);  
}  
  
function showErrorSummary(form, errors) {  
  const items = errors.map(el => {  
    const label = getLabelForField(el) || el.name || 'Required field';  
    const id = ensureId(el);  
    return {  
      id,  
      label,  
      el  
    };  
  });  
  let box = form.querySelector('#pcr-error-summary');  
  if (!box) {  
    box = document.createElement('div');  
    box.id = 'pcr-error-summary';  
    box.className = 'mb-4 rounded-xl border border-red-300 bg-red-50 p-4';  
    box.setAttribute('role', 'alert');  
    box.setAttribute('aria-live', 'assertive');  
    form.insertBefore(box, form.firstChild);  
  }  
  
  box.innerHTML = `  
    <p class="text-sm font-semibold text-red-800 mb-2">  
      Please complete the required field${items.length>1?'s':''}:  
    </p>  
    <ul class="list-disc pl-5 space-y-1">  
      ${items.map(it => `  
        <li>  
          <a href="#${it.id}" data-jump="${it.id}" class="text-red-700 underline hover:no-underline">  
            ${it.label}  
          </a>  
        </li>  
      `).join('')}  
    </ul>  
  `;  
  
  box.querySelectorAll('a[data-jump]').forEach(a => {  
    a.addEventListener('click', (e) => {  
      e.preventDefault();  
      const id = a.getAttribute('data-jump');  
      const target = form.querySelector('#' + CSS.escape(id));  
      if (target) revealField(target);  
    });  
  });  
}  
  
/* =========================  
   VISIBILITY + VALIDATION  
  ========================= */  
// Rule 12: Custom validation logic  
function validateRequired(form) {  
  clearAllErrors(form);  
  const required = Array.from(  
    form.querySelectorAll('input[required], select[required], textarea[required]')  
  ).filter(el => !inSkip(el) && !isOptional(el) && !el.disabled);  
  const errors = [];  
  const groups = new Map();  
  
  for (const el of required) {  
    if ((el.type === 'radio' || el.type === 'checkbox') && el.name) {  
      if (!groups.has(el.name)) groups.set(el.name, []);  
      groups.get(el.name).push(el);  
    } else {  
      if (isEmpty(el.value)) errors.push(el);  
    }  
  }  
  
  for (const [, group] of groups) {  
    if (!group.some(el => el.checked)) errors.push(group[0]);  
  }  
  
  if (errors.length) {  
    const seen = new Set();  
    const unique = errors.filter(el => (seen.has(el) ? false : (seen.add(el), true)));  
    unique.forEach(el => {  
      const msg = (el.type === 'radio' || el.type === 'checkbox') ?  
        'Please choose an option.' :  
        (el.getAttribute('data-error') || 'This field is required.');  
      setFieldError(el, msg);  
      ensureId(el);  
      unhideAncestors(el);  
    });  
    showErrorSummary(form, unique);  
    const first = unique[0];  
    revealField(first);  
    return {  
      ok: false,  
      count: unique.length,  
      first  
    };  
  }  
  
  const box = form.querySelector('#pcr-error-summary');  
  if (box) box.remove();  
  
  return {  
    ok: true,  
    count: 0  
  };  
}  
  
/* ====== Require-only helpers (no hiding) for general fields ====== */  
// Rule 5: This function toggles 'required' attribute, not visibility  
function wireRequire(selectId, targetValues, textareaId) {  
  const selectEl = $(`#${selectId}`);  
  const textareaEl = textareaId ? $(`#${textareaId}`) : null;  
  if (!selectEl || !textareaEl) return;  
  
  if (inSkip(selectEl) || inSkip(textareaEl) || isOptional(textareaEl)) return;  
  const values = Array.isArray(targetValues) ? targetValues : [targetValues];  
  const update = () => {  
    textareaEl.required = values.includes(selectEl.value);  
  };  
  selectEl.addEventListener('change', update, {  
    passive: true  
  });  
  update();  
}  
// Back-compat wrappers  
function wireToggle(selectId, _wrapperId, targetValue, textareaId) {  
  wireRequire(selectId, targetValue, textareaId);  
}  
  
function wireToggleMulti(selectId, _wrapperId, textareaId) {  
  wireRequire(selectId, ['Fair', 'Poor', 'Damaged'], textareaId);  
}  
  
/* =========================  
   RESET + DRAFT HELPERS  
  ========================= */  
// Rule 8: Use the unique key for the Exterior-Only form  
const PCR_DRAFT_KEY = 'pcr_exterior_draft';  
const pcrDraftManager = {  
  getDraftData: (form) => {  
    const formData = new FormData(form);  
    const data = {};  
    for (const [key, value] of formData.entries()) {  
      if (data[key] !== undefined) {  
        if (!Array.isArray(data[key])) data[key] = [data[key]];  
        data[key].push(value);  
      } else {  
        data[key] = value;  
      }  
    }  
    return data;  
  },  
  saveDraft: (form) => {  
    if (!window.localStorage) return;  
    const data = pcrDraftManager.getDraftData(form);  
    try {  
      localStorage.setItem(PCR_DRAFT_KEY, JSON.stringify(data));  
    } catch (e) {  
      console.warn('Auto-save failed:', e);  
    }  
  },  
  loadDraft: (form) => {  
    if (!window.localStorage) return false;  
    const savedData = localStorage.getItem(PCR_DRAFT_KEY);  
    if (!savedData) return false;  
  
    try {  
      const data = JSON.parse(savedData);  
      form.reset();  
      Object.entries(data).forEach(([key, value]) => {  
        const elements = form.elements[key];  
        if (!elements) return;  
  
        if (Array.isArray(elements) || (elements.length !== undefined && elements.tagName === undefined)) {  
          const arr = Array.isArray(value) ? value : [value];  
          Array.from(elements).forEach(el => {  
            if ((el.type === 'radio' || el.type === 'checkbox') && arr.includes(el.value)) {  
               el.checked = true;  
            } else if (el.tagName === 'SELECT') {  
              el.value = value;  
              if (el.value !== String(value)) {  
                const want = String(value).trim().toLowerCase();  
                const match = Array.from(el.options).find(o =>  
                  (o.value || '').trim().toLowerCase() === want ||  
                  (o.text || '').trim().toLowerCase() === want  
                );  
                if (match) el.value = match.value;  
              }  
               el.dispatchEvent(new Event('change', {  
                bubbles: true  
              }));  
            } else if (el.type !== 'radio' && el.type !== 'checkbox') {  
              el.value = value;  
            }  
          });  
        } else {  
          const el = elements;  
          if (el.tagName === 'SELECT') {  
            el.value = value;  
            if (el.value !== String(value)) {  
              const want = String(value).trim().toLowerCase();  
              const match = Array.from(el.options).find(o =>  
                (o.value || '').trim().toLowerCase() === want ||  
                (o.text || '').trim().toLowerCase() === want  
              );  
              if (match) el.value = match.value;  
            }  
            el.dispatchEvent(new Event('change', {  
              bubbles: true  
            }));  
          } else if (el.type === 'radio' || el.type === 'checkbox') {  
            el.checked = !!value;  
          } else {  
            el.value = value;  
          }  
        }  
      });  
      return true;  
    } catch (e) {  
      console.error('Failed to parse or load draft data:', e);  
      pcrDraftManager.clearDraft();  
      return false;  
    }  
  },  
  clearDraft: () => {  
    if (window.localStorage) {  
      localStorage.removeItem(PCR_DRAFT_KEY);  
      // Clear legacy/other keys just in case  
      ['pcr-full-draft', 'pcrFullDraft', 'pcr_full_autosave_draft', 'pcr_full_inspection_draft'].forEach(k => localStorage.removeItem(k));  
    }  
  }  
};  
  
function refreshUIAfterReset(form) {  
  $$('input,select,textarea', form).forEach(el => {  
    el.dispatchEvent(new Event('input', {  
      bubbles: true  
    }));  
    el.dispatchEvent(new Event('change', {  
      bubbles: true  
    }));  
  });  
  try {  
    form.dispatchEvent(new CustomEvent('pcr:form-reset', {  
      bubbles: true  
    }));  
  } catch {}  
}  
  
function clearDraftSafely() {  
  pcrDraftManager.clearDraft();  
}  
  
/* =========================  
   LEVEL & ROOM LOGIC (REMOVED - Rule 1)  
  ========================= */  
  
/* =========================  
   REPAIR ROW LOGIC (REMOVED - Rule 1)  
  ========================= */  
  
/* =========================  
   REPAIRS: LAYOUT FIX (REMOVED - Rule 1 / 6)  
  ========================= */  
  
/* =========================  
   PDF GENERATOR (EXTERIOR - Rule 1)  
  ========================= */  
async function handleGeneratePdf(form, statusEl) {  
  // Rule 12: Validate before proceeding  
  const res = validateRequired(form);  
  if (!res.ok) {  
    const firstLabel = getLabelForField(res.first) || res.first?.name || 'a required field';  
    updateStatus(statusEl, `Please complete: ${firstLabel}`, 'error');  
    return;  
  }  
  
  updateStatus(statusEl, 'Loading PDF engine…', 'info');  
  try {  
    if (!_pdfReady) await loadJsPdfOnce();  
  } catch (e) {  
    console.error('jsPDF Load Error:', e);  
    updateStatus(statusEl, 'Error: PDF library (jsPDF) not loaded.', 'error');  
    return;  
  }  
  
  const {  
    jsPDF  
  } = window.jspdf || {};  
  if (!jsPDF) {  
    updateStatus(statusEl, 'Error: jsPDF is unavailable after load.', 'error');  
    return;  
  }  
  
  try {  
    updateStatus(statusEl, 'Generating PDF…', 'info');  
      
    // --- 1. NEW: Page Setup (from PCR Summary) ---  
    const doc = new window.jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });  
    const pageW = doc.internal.pageSize.getWidth();  
    const pageH = doc.internal.pageSize.getHeight();  
    const LM = 16; // Left Margin  
    const CONTENT_W = pageW - (LM * 2);  
    const VAL_X = LM + 50; // X position for values (Label width = 50mm)  
    const VAL_W = pageW - VAL_X - LM; // Width for value text  
    let y = 20; // Start Y position  
  
    // --- 2. NEW: Helper Functions (from PCR Summary) ---  
  
    // Page break helper  
    function checkPageBreak(cost = 20) {  
      if (y + cost > pageH - 20) { // 20mm bottom margin  
        doc.addPage();  
        y = 20; // Reset Y  
        return true;  
      }  
      return false;  
    }  
  
    // Section Header (styled like Summary [cite: 43-46])  
    function sectionHeader(text) {  
      if (!text) return;  
      checkPageBreak(12);  
      doc.setFillColor(240); // Light gray [cite: 43]  
      doc.rect(LM - 4, y - 6, pageW - (LM * 2) + 8, 10, "F"); // [cite: 44]  
      doc.setFontSize(12);  
      doc.setFont('helvetica', 'bold');  
      doc.setTextColor(0); // [cite: 45]  
      doc.text(text, LM, y + 1); // [cite: 45]  
      y += 12; // [cite: 45]  
    }  
  
    // Key-Value Pair (styled like Summary [cite: 40-42])  
    function pdfKV(label, value) {  
      const lbl = (label || '').toString().trim().replace(/ \*$/, '');  
      const val = (value || '').toString().trim();  
      if (!lbl || !val || /^Select/i.test(val)) return;  
  
      checkPageBreak(10); // Minimum space  
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(10);  
      doc.setTextColor(60); // Dark gray label [cite: 41]  
      const lblLines = doc.splitTextToSize(lbl, (VAL_X - LM - 2)); // Label width  
      doc.text(lblLines, LM, y);  
  
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(20); // Black value [cite: 41]  
      const valLines = doc.splitTextToSize(val, VAL_W);  
      doc.text(valLines, VAL_X, y); // [cite: 41]  
        
      const lineCount = Math.max(lblLines.length, valLines.length);  
      y += (lineCount * 5) + 3; // 5mm per line [cite: 42] + 3mm padding  
    }  
  
    // Narrative/Textarea (styled like Summary [cite: 46-53])  
    function pdfNarrative(label, text) {  
      const lbl = (label || '').toString().trim().replace(/ \*$/, '');  
      const txt = (text || '').toString().trim();  
      if (!lbl || !txt) return;  
  
      checkPageBreak(10);  
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(10);  
      doc.setTextColor(60); // [cite: 48]  
      doc.text(lbl, LM, y); // [cite: 48]  
      y += 5; // [cite: 49]  
  
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(20); // [cite: 49]  
      const lines = doc.splitTextToSize(txt, CONTENT_W); // [cite: 49]  
      if (checkPageBreak(lines.length * 5)) { // [cite: 50]  
          // Re-draw label on new page if text block broke  
          doc.setFont('helvetica', 'bold');  
          doc.setFontSize(10);  
          doc.setTextColor(60);  
          doc.text(lbl + " (cont.)", LM, y); // [cite: 51]  
          y += 5;  
          doc.setFont('helvetica', 'normal');  
          doc.setTextColor(20);  
      }  
      doc.text(lines, LM, y); // [cite: 52]  
      y += (lines.length * 5) + 4; // [cite: 53]  
    }  
      
    // Bullets (New, but styled like Summary)  
    function pdfBullets(title, items) {  
      const list = (items || []).map(s => String(s || '').trim()).filter(Boolean);  
      if (!list.length) return;  
  
      checkPageBreak(10 + (list.length * 5));  
      doc.setFont('helvetica', 'bold');  
      doc.setFontSize(10);  
      doc.setTextColor(60); // Dark gray title  
      doc.text(title, LM, y);  
      y += 6;  
  
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(20); // Black items  
      for (const item of list) {  
        const txt = `• ${item}`;  
        const wrapped = doc.splitTextToSize(txt, CONTENT_W - 3); // Indent bullet  
        checkPageBreak(wrapped.length * 5);  
        doc.text(wrapped, LM + 3, y); // Indent bullets  
        y += (wrapped.length * 5);  
      }  
      y += 4;  
    }  
  
    // --- 3. NEW: Title Block (from PCR Summary) ---  
    doc.setFontSize(18);  
    doc.setFont('helvetica', 'bold');  
    doc.text('Property Condition Report (PCR) – Exterior Only', pageW / 2, y, { align: "center" }); //   
    y += 8;  
      
    const address = $('#address')?.value?.trim();  
    if (address) {  
        doc.setFontSize(12);  
        doc.setFont('helvetica', 'normal');  
        doc.setTextColor(0); // Black  
        doc.text(`Subject: ${address}`, pageW / 2, y, { align: "center" });  
        y += 6;  
    }  
  
    doc.setFontSize(10);  
    doc.setFont('helvetica', 'normal');  
    doc.setTextColor(100); // Gray [cite: 61]  
    doc.text(`Generated: ${new Date().toLocaleString()}`, pageW / 2, y, { align: "center" }); // [cite: 61]  
    doc.setTextColor(0); // Reset color  
    y += 12;  
  
    // --- 4. MODIFIED: Data Loop ---  
    for (const section of $$('.section-card')) {  
      // Rule 1: Skip sections that are hidden  
      if (section.classList.contains('hidden') || section.hasAttribute('hidden')) {  
        continue;  
      }  
  
      const title = section.querySelector('h2')?.textContent?.trim();  
      sectionHeader(title); // USE NEW HELPER [cite: 62, 65]  
  
      const seen = new Set();  
      const elements = $$('input, select, textarea, fieldset > legend', section);  
      for (const el of elements) {  
        const nm = el.name;  
        // Rule 1: Skip hidden elements  
        if (el.closest?.('.hidden') || el.closest?.('[hidden]')) {  
          continue;  
        }  
  
        // Rule 1: Skip all interior/level/room/repair logic  
        if (nm && /^(level_|room_|repair_)/.test(nm)) continue;  
        if (nm && (nm === 'total_repair_cost' || nm.startsWith('recent_'))) continue;  
  
  
        if (nm && seen.has(nm)) continue;  
        if (el.tagName === 'LEGEND') {  
          const groupTitle = el.textContent.trim();  
          const fieldset = el.closest('fieldset');  
          if (!fieldset) continue;  
  
          const checked = $$('input[type="checkbox"]', fieldset)  
            .filter(cb => cb.checked)  
            .map(cb => cb.closest('label')?.innerText?.trim() || cb.value || cb.name)  
            .filter(Boolean);  
          if (checked.length) pdfBullets(groupTitle, checked); // USE NEW HELPER  
          $$('input[type="checkbox"]', fieldset).forEach(cb => cb.name && seen.add(cb.name));  
  
        } else if (el.type === 'radio') {  
          const group = $$(`input[type="radio"][name="${cssEscapeSafe(nm)}"]`, section);  
          const sel = group.find(r => r.checked);  
          pdfKV(getLabelForField(group[0] || el), sel ? sel.value : ''); // USE NEW HELPER [cite: 66, 67]  
          seen.add(nm);  
        } else if (el.type === 'checkbox') {  
          pdfKV(getLabelForField(el), el.checked ? 'Yes' : 'No'); // USE NEW HELPER  
          seen.add(nm);  
  
        } else if (el.tagName === 'SELECT') {  
          const choice = getSelectChoice(el);  
          if (choice.text && !/^Select/i.test(choice.text) && choice.value !== '') {  
            pdfKV(getLabelForField(el), choice.text); // USE NEW HELPER  
          }  
          seen.add(nm);  
        } else if (el.name && !['button', 'submit', 'reset', 'file'].includes(el.type || '')) {  
          let val = el.value || '';  
          if (el.type === 'hidden' && !val) {  
            seen.add(nm);  
            continue;  
          }  
  
          if (el.tagName === 'TEXTAREA') {  
            pdfNarrative(getLabelForField(el), val); // USE NEW HELPER [cite: 68, 69]  
          } else {  
            pdfKV(getLabelForField(el), val); // USE NEW HELPER  
          }  
          seen.add(nm);  
        }  
      }  
    }  
  
    // --- 5. NEW: Footer (from PCR Summary) ---  
    const pages = doc.internal.getNumberOfPages(); // [cite: 99]  
    for (let i = 1; i <= pages; i++) { // [cite: 100]  
        doc.setPage(i);  
        doc.setFontSize(8);  
        doc.setTextColor(150); // [cite: 101]  
        doc.text(`Page ${i} of ${pages}`, pageW / 2, pageH - 10, { align: 'center' }); // [cite: 101]  
    }  
  
    // --- 6. Save (unchanged) ---  
    doc.save('PCR-Exterior-Only.pdf');  
    updateStatus(statusEl, 'PDF generated successfully.', 'success');  
  } catch (err) {  
    console.error('PDF Generation Error:', err);  
    updateStatus(statusEl, 'Error generating PDF. See console for details.', 'error');  
  }  
}  
  
/* =========================  
   CLEAR FORM  
  ========================= */  
function handleClearForm(form, statusEl) {  
  if (!form) return;  
  form.reset();  
  clearAllErrors(form);  
  pcrDraftManager.clearDraft();  
  refreshUIAfterReset(form);  
  updateStatus(statusEl, 'Form cleared. Draft deleted.', 'success');  
}  
  
/* =========================  
   LAND & SITE TYPE VISIBILITY (Rule 4)  
  ========================= */  
function initLandSiteTypeVisibility() {  
  const propertyTypeSelect = $('#property_type');  
  const landSiteNotice = $('#land_site_types_notice'); // ID confirmed from HTML  
  
  if (!propertyTypeSelect || !landSiteNotice) return;  
  const update = () => {  
    const choice = getSelectChoice(propertyTypeSelect);  
    // Rule 4: Use the value, which is "Land & Site Types"  
    const show = (choice.value === 'Land & Site Types');  
    setVis(landSiteNotice, show);  
  };  
  
  propertyTypeSelect.addEventListener('change', update, {  
    passive: true  
  });  
  update();  
  // Run on init  
}  
  
  
/* =========================  
   OWNERSHIP TYPE: SHOW/HIDE ASSOCIATION SECTIONS (Rule 2 & 3)  
  ========================= */  
function initOwnershipVisibility() {  
  const ownershipTypeSelect = $('#ownership_type');  
  // Section wrapper(s) to show/hide.  
  const ASSOC_SECTION_SELECTORS = [  
    '#hoa_association_section', // ID confirmed from HTML  
    // These sections exist but are not part of the Exterior-Only required fields  
    // We still hide/show them for UI consistency if they are ever un-hidden  
    '#assoc_access_condition_section',  
    '#assoc_fin_legal_section'  
  ];  
  // Fields to mark as required (per Rule 2)  
  const ASSOC_REQUIRED_SELECTORS = [  
    '#assoc_name',  
    '#assoc_detail',  
    '#assoc_contact_address',  
    '#assoc_contact_phone',  
    '#assoc_fee_amount',  
    '#assoc_fee_freq',  
    '#assoc_fee_includes_text'  
  ];  
  // Rule 3: Triggers  
  const TARGET_VALUES = [  
    'Fee Simple - Subject to HOA',  
    'Condominium Ownership',  
    'Cooperative (Co-Op) Ownership'  
  ];  
  // Rule 2: Normalization  
  const norm = (s) => String(s || '')  
    .toLowerCase()  
    .replace(/[–—]/g, '-')  
    .replace(/\s+/g, ' ')  
    .trim();  
      
  function setAssocRequiredStatus(show) {  
    ASSOC_REQUIRED_SELECTORS.forEach(sel => {  
      let el = $(sel);  
      if (el && !['input', 'select', 'textarea'].includes(el.tagName?.toLowerCase())) {  
        // Handle cases where ID is on a wrapper  
        el = $('input, select, textarea', el);  
      }  
      if (!el) {  
        // console.warn('Association required field not found:', sel);  
        return;  
        
      }  
  
      if (inSkip(el) || isOptional(el)) {  
        el.required = false;  
        return;  
      }  
      el.required = !!show;  
    });  
  }  
  
  function applyOwnershipRules() {  
    let show = false;  
    if (ownershipTypeSelect) {  
      // Get the currently selected <option>  
      const opt = ownershipTypeSelect.options[ownershipTypeSelect.selectedIndex];  
        
      // Get its value (which is the full string, e.g., "Condominium Ownership")  
      const value = (opt?.value ?? ownershipTypeSelect.value);  
  
      // --- THIS IS THE FIX ---  
      // Check if our array of target values includes the selected value.  
      // This is a direct and exact match.  
      show = TARGET_VALUES.includes(value);  
      // --- END FIX ---  
    }  
  
    // Apply both visibility AND required status per Rule 2 & 3  
    ASSOC_SECTION_SELECTORS.forEach(sel => setVis($(sel), show));  
    setAssocRequiredStatus(show);  
  }  
  
  // Set initial state on load (Rule 3)  
  if (ownershipTypeSelect) {  
    ownershipTypeSelect.addEventListener('change', applyOwnershipRules, {  
      passive: true  
    });  
    applyOwnershipRules(); // This will run once and hide/show as needed  
  } else {  
    // If no select, hide by default  
    ASSOC_SECTION_SELECTORS.forEach(sel => setVis($(sel), false));  
    setAssocRequiredStatus(false);  
  }  
}  
  
/* =========================  
   APP INIT  
  ========================= */  
function pickForm() {  
  // Rule 7: Find #formExterior first  
  return $('#formExterior') ||  
  document.querySelector('form');  
}  
  
function pickScope(form) {  
  // Rule 7: Find #exterior-actions first  
  return $('#exterior-actions') || form;  
}  
  
function pickStatus(scope) {  
  // Rule 7: Find data-status="pcr-exterior" first  
  return $('[data-status="pcr-exterior"]', scope) || $('#status') || null;  
}  
  
function wireAllToggles() {  
  // Site Characteristics (Rule 5)  
  wireToggle('use_consistent', 'use_consistent_explain_wrapper', 'No', 'use_consistent_explain');  
  // Subject Setting and View (Fixing IDs based on HTML)  
  wireToggle('surroundings_rating', 'surroundings_reason_short_hint', ['Mixed Condition', 'Poorly Kept'], 'surroundings_reason_short');  
  wireToggle('construction_active_yn', 'construction_reason_short_hint', 'Yes', 'construction_reason_short');  
  
  // Public Records and Compliance  
  wireToggle('pr_liens_yn', 'pr_liens_explain_wrapper', 'Yes', 'pr_liens_explain');  
  wireToggle('pr_licenses_yn', 'pr_licenses_explain_wrapper', 'Yes', 'pr_licenses_explain');  
  wireToggle('pr_violations_yn', 'pr_violations_explain_wrapper', 'Yes', 'pr_violations_explain');  
  wireToggle('pr_flood_known_yn', 'pr_flood_explain_wrapper', 'Yes', 'pr_flood_explain');  
  
  // Exterior Condition  
  wireToggleMulti('overall_exterior_condition_rating', 'overall_exterior_condition_explain_wrapper', 'overall_exterior_condition_explain');  
  wireToggleMulti('site_grounds_rating', 'site_grounds_explain_wrapper', 'site_grounds_explain');  
  wireToggleMulti('ext_structure_rating', 'ext_structure_explain_wrapper', 'ext_structure_explain');  
  wireToggleMulti('roof_system_rating', 'roof_system_explain_wrapper', 'roof_system_explain');  
  wireToggleMulti('entry_openings_rating', 'entry_openings_explain_wrapper', 'entry_openings_explain');  
  
  // Assoc: Common Area Inspection (Note: these fields are in a hidden section)  
  wireToggleMulti('assoc_common_areas_condition', 'assoc_common_areas_notes_wrapper', 'assoc_common_areas_notes');  
  wireToggleMulti('assoc_parking_condition', 'assoc_parking_notes_wrapper', 'assoc_parking_notes');  
  wireToggleMulti('assoc_pool_condition', 'assoc_pool_notes_wrapper', 'assoc_pool_notes');  
  wireToggleMulti('assoc_extra_amenities_condition', 'assoc_extra_amenities_notes_wrapper', 'assoc_extra_amenities_notes');  
  wireToggleMulti('assoc_elevator_condition', 'assoc_elevator_notes_wrapper', 'assoc_elevator_notes');  
  wireToggleMulti('assoc_security_condition', 'assoc_security_notes_wrapper', 'assoc_security_notes');  
  // Rule 1: Repairs and Upgrades toggles removed  
  
  // Health & Safety  
  wireToggle('hazards_yn', 'hazards_notes_wrap', 'Yes', 'hazards_notes');  
  wireToggle('code_violations_yn', 'code_violations_notes_wrap', 'Yes', 'code_violations_notes');  
  wireToggle('ext_odors_yn', 'ext_odors_notes_wrap', 'Yes', 'ext_odors_notes');  
  
  // Ownership sections (the only place we hide/show) (Rule 2 & 3)  
  initOwnershipVisibility();  
  // Land & Site Types visibility (Rule 4)  
  initLandSiteTypeVisibility();  
}  
  
function initializeApp() {  
  const form = pickForm();  
  if (!form) {  
    console.error('Form not found. Expected #formExterior.');  
    return;  
  }  
  
  const scope = pickScope(form);  
  const status = pickStatus(scope);  
  
  // Rule 8: Attempt draft restore first  
  if (pcrDraftManager.loadDraft(form)) {  
    refreshUIAfterReset(form);  
    updateStatus(status, 'Draft restored.', 'info');  
  }  
  
  // Rule 8: Wire autosave (10-second interval)  
  form.addEventListener('input', () => pcrDraftManager.saveDraft(form), {  
    passive: true  
  });  
  setInterval(() => pcrDraftManager.saveDraft(form), 10000);  
  
  // Rule 1: Levels & Repairs logic removed.  
  // Rule 7: Buttons - wire up the new Exterior-Only IDs  
  const btnPDFb = $('#btnGenerateExterior', scope);  
  const btnClr = $('#btnClearExterior', scope);  
  
  if (btnPDFb) {  
    if (btnPDFb.type !== 'button') btnPDFb.type = 'button';  
    btnPDFb.addEventListener('click', (e) => {  
      e.preventDefault();  
      handleGeneratePdf(form, status);  
    });  
  }  
  if (btnClr) {  
    if (btnClr.type !== 'button') btnClr.type = 'button';  
    btnClr.addEventListener('click', (e) => {  
      e.preventDefault();  
      handleClearForm(form, status);  
    });  
  }  
  
  // Rule 7: Wire all visibility and required toggles  
  wireAllToggles();  
  // Rule 1 & 7: layoutRepairsSection() call removed.  
  // Rule 1: "If levels were preset" logic removed.  
  updateStatus(status, 'Ready.', 'info');  
}  
  
/* =========================  
   DOM READY (Rule 7: Single Initializer)  
  ========================= */  
if (document.readyState === 'loading') {  
  document.addEventListener('DOMContentLoaded', initializeApp, {  
    once: true  
  });  
} else {  
  initializeApp();  
}  
</script>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
