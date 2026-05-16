# Property Condition Report (Full Inspection)  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>PCR – Full Inspection</title>  
  
  <!-- Google Fonts -->  
  <link rel="preconnect" href="https://fonts.googleapis.com" />  
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />  
  
  <!-- Tailwind (CDN) -->  
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
    .input:focus, .select:focus, .textarea:focus { border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,.2); }  
    .hint { font-size:.75rem; color:#6b7280; margin-top:.25rem; }  
    [hidden] { display:none !important; }  
    /* Noscript card styling */  
    noscript .noscript-card {  
      background:#fff2f2; border-radius:1rem; border:1px solid #fecaca; padding:1.5rem;  
      font-size:.875rem; font-weight:500; color:#b91c1c;  
    }  
  </style>  
  
  <!-- NOTE: Do NOT load jsPDF here; your app script lazy-loads it safely. -->  
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script> -->  
</head>  
  
<body class="bg-gray-50 text-gray-900">  
  <main class="max-w-4xl mx-auto p-6 space-y-10" role="main">  
    <header class="flex flex-col sm:flex-row sm:items-center sm:justify-between">  
      <div>  
        <h1 class="text-2xl md:text-3xl font-bold">  
          Property Condition Report (PCR) – Full Inspection  
        </h1>  
        <p class="text-sm text-gray-600 mt-1">  
          Use for <strong>full interior &amp; exterior inspections</strong> of residential or mixed-use properties.  
          Click <em>Generate PDF</em> when finished.  
        </p>  
      </div>  
    </header>  
  
    <noscript>  
      <div class="noscript-card" role="alert">  
        <p><strong>JavaScript is disabled.</strong></p>  
        <p class="mt-1">  
          This form requires JavaScript for show/hide fields, validation, and PDF generation.  
          Please enable JavaScript to use this tool.  
        </p>  
      </div>  
    </noscript>  
  
    <form id="formFullInspection" class="space-y-8" novalidate>  
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
    <!-- Parcel ID -->  
    <div class="sm:col-span-6">  
      <label class="label" for="parcel_id">Parcel ID (PIN/BRT/OPA)</label>  
      <input id="parcel_id" name="parcel_id" type="text" class="input"  
             autocomplete="off" autocapitalize="off" spellcheck="false" maxlength="50"  
             aria-describedby="parcel_format_hint" />  
      <p id="parcel_format_hint" class="hint text-xs text-gray-500 mt-1">Use PIN/BRT/OPA format if known.</p>  
    </div>  
  
    <!-- Address / Unit -->  
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
  
    <!-- City / State / Zip -->  
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
  
    <!-- County / School District -->  
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
  
    <!-- Property / Ownership / Occupancy -->  
    <div class="sm:col-span-2">  
      <label class="label" for="property_type">Land/Site Type <span class="text-red-600">*</span></label>  
      <select id="property_type" name="property_type" required class="select" aria-describedby="property_type_hint">  
        <option value="">Select…</option>  
        <option value="Single Family Residence">Single Family Residence</option>  
        <option value="2-Unit Duplex">2-Unit Duplex</option>  
        <option value="3-Unit Triplex">3-Unit Triplex</option>  
        <option value="4-Unit Quadplex">4-Unit Quadplex</option>  
        <option value="Multifamily (5+ Units)">Multifamily (5+ Units)</option>  
        <option value="Condominium (Low-Rise)">Condominium (Low-Rise)</option>  
        <option value="Condominium (High-Rise)">Condominium (High-Rise)</option>  
        <option value="Cooperative (Co-Op)">Cooperative (Co-Op)</option>  
        <option value="Manufactured / Mobile Home">Manufactured / Mobile Home</option>  
        <option value="Modular Home">Modular Home</option>  
        <option value="Mixed-Use (Residential + Commercial)">Mixed-Use (Residential + Commercial)</option>  
        <option value="Commercial">Commercial</option>  
        <option value="Special Use / Institutional">Special Use / Institutional</option>  
        <option value="Land &amp; Site Types">Land &amp; Site Types</option>  
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
  
    <!-- Conditional details -->  
    <div id="property_type_detail_wrapper" class="sm:col-span-6 hidden" role="region" aria-live="polite" aria-label="Detail Property Type">  
      <label class="label" for="property_type_detail">Detail Property Type</label>  
      <input id="property_type_detail" name="property_type_detail" type="text" class="input"  
             placeholder="e.g., Office Building, Church, Warehouse" maxlength="80" />  
    </div>  
  
    <!-- Legal description -->  
    <div class="sm:col-span-6">  
      <label class="label" for="legal_description">Legal Description</label>  
      <textarea id="legal_description" name="legal_description" rows="2" class="textarea" maxlength="1000"  
                aria-describedby="legal_description_hint"></textarea>  
      <p id="legal_description_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 100–400 characters.</p>  
    </div>  
  </div>  
  
  <!-- Land notice (conditionally shown) -->  
  <div id="land_report_message" class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4 hidden">  
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
  
    <!-- Source -->  
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
  
    <!-- Lot size -->  
    <div>  
      <label class="label" for="lot_size">Lot Size (Sq Ft or Acres)</label>  
      <input id="lot_size" name="lot_size" type="text" class="input" placeholder="e.g., 10,000 or 0.25"  
             inputmode="decimal" maxlength="30" autocapitalize="off" spellcheck="false"  
             aria-describedby="lot_size_hint" />  
      <p id="lot_size_hint" class="hint text-xs text-gray-500 mt-1">Use whole SF or decimal acres.</p>  
    </div>  
  
    <!-- Lot shape -->  
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
  
    <!-- Topography -->  
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
  
    <!-- Zoning -->  
    <div class="md:col-span-2">  
      <label class="label" for="zoning">Zoning</label>  
      <input id="zoning" name="zoning" type="text" class="input" placeholder="e.g., RSA-5"  
             maxlength="50" autocapitalize="characters" aria-describedby="zoning_hint" />  
      <p id="zoning_hint" class="hint text-xs text-gray-500 mt-1">Enter the code as shown in public records (e.g., RSA-5).</p>  
    </div>  
  
    <!-- Use consistent? and explanation (BOTH visible by default) -->  
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
      <p id="use_consistent_explain_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 50–150 characters.</p>  
    </div>  
  
    <!-- Stories -->  
    <div>  
      <label class="label" for="building_stories">Stories</label>  
      <input id="building_stories" name="building_stories" type="number" min="0" step="0.5"  
             class="input" placeholder="e.g., 2" inputmode="decimal" />  
    </div>  
  
    <!-- Building size -->  
    <div>  
      <label class="label" for="building_size">Bldg Size (SF)</label>  
      <input id="building_size" name="building_size" type="number" min="0" step="1"  
             class="input" placeholder="e.g., 1500" inputmode="numeric" />  
    </div>  
  
    <!-- Property type -->  
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
  
    <!-- Property style -->  
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
  
    <!-- Building construction -->  
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
  
    <!-- Basement -->  
    <div class="md:col-span-2">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="basement_type">Basement Type</label>  
          <select id="basement_type" name="basement_type" class="select">  
            <option value="">Select…</option>  
            <option value="None">None</option>  
            <option value="Crawlspace">Crawlspace</option>  
            <option value="Partial Basement">Partial Basement</option>  
            <option value="Full Basement">Full Basement</option>  
          </select>  
        </div>  
        <div>  
          <label class="label" for="basement_finishing">Basement Finishing</label>  
          <select id="basement_finishing" name="basement_finishing" class="select">  
            <option value="">Select…</option>  
            <option value="Fully Finished">Fully Finished</option>  
            <option value="Partially Finished">Partially Finished</option>  
            <option value="Unfinished">Unfinished</option>  
            <option value="N/A">N/A</option>  
          </select>  
        </div>  
      </div>  
    </div>  
  
    <!-- Parking -->  
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
  
    <!-- Pool/Spa -->  
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
  
    <!-- Extra amenities -->  
    <div class="md:col-span-2">  
      <label class="label" for="extra_amenities">Extra Amenities</label>  
      <textarea id="extra_amenities" name="extra_amenities" rows="2" class="textarea"  
                placeholder="e.g., Tennis Court, View" maxlength="500"  
                aria-describedby="extra_amenities_hint"></textarea>  
      <p id="extra_amenities_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 50–250 characters.</p>  
    </div>  
  
    <!-- Outbuildings -->  
    <div class="md:col-span-2">  
      <label class="label" for="outbuildings">Outbuildings</label>  
      <textarea id="outbuildings" name="outbuildings" rows="2" class="textarea"  
                placeholder="e.g., Shed, Detached Garage" maxlength="500"  
                aria-describedby="outbuildings_hint"></textarea>  
      <p id="outbuildings_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 50–250 characters.</p>  
    </div>  
  
    <!-- Site inspection summary -->  
    <div class="md:col-span-2">  
      <label class="label" for="site_inspection_summary">Site Inspection Summary</label>  
      <textarea id="site_inspection_summary" name="site_inspection_summary" rows="3" class="textarea"  
                placeholder="Easements, encroachments, site influences, proximity to amenities, traffic, etc."  
                maxlength="1000" aria-describedby="site_inspection_summary_hint"></textarea>  
      <p id="site_inspection_summary_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 800 characters.</p>  
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
        <!-- Power -->  
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
  
        <!-- Heating & Cooling -->  
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
              <input type="checkbox" name="util_heat_geo" value="Geothermal Heating & Cooling" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Geothermal Heating &amp; Cooling</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_heat_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <!-- Water Supply -->  
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
  
        <!-- Wastewater -->  
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
              <input type="checkbox" name="util_waste_grey" value="Greywater Recycling System" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Greywater Recycling System</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_waste_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <!-- Communications -->  
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
  
        <!-- Drainage & Environmental -->  
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
              <input type="checkbox" name="util_drain_retention" value="Retention Ponds / Rainwater Capture" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Retention Ponds / Rainwater Capture</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_drain_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <!-- Municipal & Community Services -->  
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
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_service_unknown" value="Unknown / Not Assessed" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
      </div>  
    </div>  
  
    <!-- Notes -->  
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
<section class="section-card hidden" id="association_common_area_info" aria-live="polite">  
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
        <option value="No">No</option>  
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
    <!-- I. Immediate Surroundings -->  
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
        aria-describedby="immediate_surroundings_hint immediate_surroundings_detail_hint"  
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
  
    <!-- II. Surrounding Property Condition -->  
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
        aria-describedby="surroundings_reason_short_hint surroundings_explain_hint"  
      >  
        <option value="">Select Condition…</option>  
        <option value="Well Kept">Well Kept</option>  
        <option value="Mixed Condition">Mixed Condition</option>  
        <option value="Poorly Kept">Poorly Kept</option>  
        <option value="Unknown / Not Assessed">Unknown / Not Assessed</option>  
      </select>  
  
      <!-- Reason text box (350 chars) -->  
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
  
    <!-- III. Primary View -->  
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
  
    <!-- IV. Local Construction Activity -->  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
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
        aria-describedby="construction_reason_short_hint construction_active_hint"  
      >  
        <option value="">Select Yes/No…</option>  
        <option value="Yes">Yes</option>  
        <option value="No">No</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
  
      <!-- Reason text box (350 chars) -->  
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
  
    <!-- V. Comprehensive Description -->  
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
    <!-- Liens / Encroachments -->  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_liens_yn">Any known liens or encroachments?</label>  
          <select id="pr_liens_yn" name="pr_liens_yn" class="select" aria-describedby="pr_liens_explain_hint">  
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
  
    <!-- Licenses -->  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_licenses_yn">Any active licenses on the property?</label>  
          <select id="pr_licenses_yn" name="pr_licenses_yn" class="select" aria-describedby="pr_licenses_explain_hint">  
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
  
    <!-- Violations -->  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_violations_yn">Any known violations on the property?</label>  
          <select id="pr_violations_yn" name="pr_violations_yn" class="select" aria-describedby="pr_violations_explain_hint">  
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
  
    <!-- Flood Zone -->  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_flood_known_yn">Is the property within a known Flood Zone?</label>  
          <select id="pr_flood_known_yn" name="pr_flood_known_yn" class="select" aria-describedby="pr_flood_explain_hint">  
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
  <h2 class="text-lg font-semibold">Overall Condition Rating</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This rating summarizes the property's overall state. It influences value,  
      repair costs, and marketability, providing a holistic view of condition.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-4">  
  
    <!-- CONDITION DROPDOWN -->  
    <div class="md:col-span-1">  
      <label class="label" for="overall_condition_rating">  
        Overall Condition <span class="text-red-600">*</span>  
      </label>  
      <select  
        id="overall_condition_rating"  
        name="overall_condition_rating"  
        required  
        class="select"  
        aria-describedby="ocr_hint"  
        autocomplete="off"  
      >  
        <option value="">Select…</option>  
        <option value="Excellent">Excellent</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A">N/A</option>  
      </select>  
      <p id="ocr_hint" class="hint text-xs text-gray-500 mt-1">  
        <strong>Guide:</strong> Excellent/Good = well-maintained; Average = typical wear;  
        Fair/Poor = notable deferred items; Damaged = major defects; N/A = not applicable.  
      </p>  
    </div>  
  
    <!-- EMPTY SPACER to keep grid alignment -->  
    <div></div>  
  
    <!-- EXPLANATION ROW (full width) -->  
    <div class="md:col-span-2" id="overall_condition_notes_wrapper" role="region" aria-live="polite">  
      <label class="label" for="overall_condition_notes">  
        Explanation for Rating  
        <span class="text-gray-500 text-xs">(required if Fair, Poor, Damaged, or N/A)</span>  
      </label>  
      <textarea  
        id="overall_condition_notes"  
        name="overall_condition_notes"  
        rows="3"  
        class="textarea"  
        placeholder="Summarize key factors that drove the rating (repairs observed, finish quality, systems age, safety issues, etc.)."  
        maxlength="1200"  
        aria-describedby="overall_condition_notes_hint"  
      ></textarea>  
      <p id="overall_condition_notes_hint" class="hint text-xs text-gray-500 mt-1">  
        Max 1200 characters.  
      </p>  
    </div>  
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-lg font-semibold">Exterior Condition</h2>  
  
  <!-- Overall Exterior Condition -->  
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
  
    <!-- Own full-width row -->  
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
    <!-- I. Site and Grounds -->  
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
  
      <!-- Own full-width row -->  
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
  
    <!-- II. Exterior Structure and Components -->  
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
  
      <!-- Own full-width row -->  
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
  
    <!-- III. Roof System -->  
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
        <option value="Damaged">Damaged</option>  
        <option value="N/A">N/A</option>  
      </select>  
  
      <!-- Own full-width row -->  
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
  
    <!-- IV. Entry and Exterior Openings -->  
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
  
      <!-- Own full-width row -->  
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
  
    
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card" id="assoc_access_condition_section" aria-live="polite" data-skip-required="true">  
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
    <!-- Overall -->  
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
  
    <!-- Summary -->  
    <div class="md:col-span-2">  
      <label class="label" for="assoc\_overall\_condition\_summary">  
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
      <p id="assoc\_overall\_condition\_summary\_hint" class="hint text-xs text-gray-500 mt-1">  
        Suggested: 150–400 characters.  
      </p>  
    </div>  
  
    <!-- Common Areas -->  
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
  
    <!-- Parking -->  
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
  
    <!-- Pool -->  
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
  
    <!-- Extra Amenities -->  
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
  
    <!-- Elevator -->  
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
      </p>  
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
  
    <!-- Security -->  
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
  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card" id="interior_condition_section">  
  <div class="space-y-4">  
    <h2 class="text-lg font-semibold">Interior Condition and Level Details</h2>  
  
    <!-- Overall Interior Condition (always visible) -->  
    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-lg space-y-2">  
      <label class="label font-bold text-blue-800 mb-2" for="overall_interior_condition_rating">  
        Overall Interior Condition Rating <span class="text-red-600">*</span>  
      </label>  
      <select  
        id="overall_interior_condition_rating"  
        name="overall_interior_condition_rating"  
        required  
        class="select"  
        aria-describedby="overall_interior_condition_hint"  
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
      <p id="overall_interior_condition_hint" class="text-xs text-blue-700 mt-1 hint">  
        Note: Condition below <strong>Average</strong> (Fair, Poor, Damaged, or N/A) requires a brief explanation here and/or details in room sections.  
      </p>  
  
      <!-- Explanation is ALWAYS visible -->  
      <div id="overall_interior_condition_notes_wrapper" class="mt-3" role="region" aria-live="polite">  
        <label class="label text-sm" for="overall_interior_condition_notes">  
          Brief explanation (required if Fair, Poor, Damaged, or N/A)  
        </label>  
        <textarea  
          id="overall_interior_condition_notes"  
          name="overall_interior_condition_notes"  
          rows="2"  
          class="textarea"  
          maxlength="600"  
          placeholder="e.g., Deferred maintenance: worn flooring, dated baths; evidence of moisture staining in basement family room."  
          aria-describedby="overall_interior_condition_notes_hint"  
        ></textarea>  
        <p id="overall_interior_condition_notes_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 80–200 characters (max 600).</p>  
      </div>  
    </div>  
  
    <!-- Level controls -->  
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end pt-4 border-t border-gray-200">  
      <label class="block md:col-span-1">  
        <span class="block text-sm font-medium">Number of Levels <span class="text-red-600">*</span></span>  
        <input  
          id="interior_levels"  
          name="interior_levels"  
          type="number"  
          min="1"  
          max="8"  
          value="1"  
          required  
          class="input"  
          inputmode="numeric"  
          aria-describedby="interior_levels_hint"  
        />  
        <p id="interior_levels_hint" class="hint text-xs text-gray-500 mt-1">Range: 1–8. Click “Generate Levels” to add sections below.</p>  
      </label>  
  
      <button  
        id="generate_levels_btn"  
        type="button"  
        class="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50"  
        aria-controls="level_sections"  
      >  
        Generate Levels  
      </button>  
  
      <div class="md:block"></div>  
    </div>  
  
    <!-- Totals row -->  
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">  
      <label class="block">  
        <span class="block text-sm font-medium">No. of Rooms (Total)</span>  
        <input name="total_rooms" type="number" min="0" class="input" inputmode="numeric" />  
      </label>  
  
      <label class="block">  
        <span class="block text-sm font-medium">No. of Bedrooms</span>  
        <input name="total_bedrooms" type="number" min="0" class="input" inputmode="numeric" />  
      </label>  
  
      <label class="block">  
        <span class="block text-sm font-medium">Full Baths</span>  
        <input name="total_full_baths" type="number" min="0" class="input" inputmode="numeric" placeholder="Full" />  
      </label>  
  
      <label class="block">  
        <span class="block text-sm font-medium">Half Baths</span>  
        <input name="total_half_baths" type="number" min="0" class="input" inputmode="numeric" placeholder="Half" />  
      </label>  
    </div>  
  
    <p class="text-sm text-gray-500 pt-4 border-t border-gray-200">  
      <strong>Level &amp; Room Details:</strong> Press “Generate Levels” above to create level blocks. Use “Add Room” inside each block.  
    </p>  
  
    <!-- Generated levels mount here -->  
    <div id="level_sections" class="space-y-6 pt-2" role="region" aria-live="polite"></div>  
  </div>  
</section>  
  
<!-- Level Template -->  
<template id="level_template">  
  <section class="rounded-xl border border-gray-200 p-4 space-y-4 bg-white">  
    <div class="flex items-start justify-between gap-3">  
      <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">  
        <label class="block">  
          <span class="block text-sm font-medium">Level Title <span class="text-red-600">*</span></span>  
          <select name="level_title[]" class="select" required autocomplete="off">  
            <option value="">Select level…</option>  
            <option value="Basement/Foundation">Basement/Foundation</option>  
            <option value="First Floor Level">First Floor Level</option>  
            <option value="Second Floor Level">Second Floor Level</option>  
            <option value="Third Floor Level">Third Floor Level</option>  
            <option value="Fourth Floor Level">Fourth Floor Level</option>  
            <option value="Fifth Floor Level">Fifth Floor Level</option>  
            <option value="Roof Top Level">Roof Top Level</option>  
            <option value="Other">Other</option>  
          </select>  
        </label>  
  
        <label class="block">  
          <span class="block text-sm font-medium">Level Condition <span class="text-red-600">*</span></span>  
          <select  
            name="level_condition[]"  
            class="select"  
            required  
            autocomplete="off"  
          >  
            <option value="">Select…</option>  
            <option value="Excellent">Excellent</option>  
            <option value="Good">Good</option>  
            <option value="Average">Average</option>  
            <option value="Fair">Fair</option>  
            <option value="Poor">Poor</option>  
            <option value="Damaged">Damaged</option>  
            <option value="N/A">N/A</option>  
          </select>  
        </label>  
  
        <label class="block">  
          <span class="block text-sm font-medium">If “Other,” Level Name</span>  
          <input type="text" name="level_title_other[]" class="input" maxlength="60" placeholder="e.g., Mezzanine" />  
        </label>  
      </div>  
  
      <button type="button"  
        class="shrink-0 inline-flex items-center rounded-lg px-3 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400/40"  
        data-action="remove-level"  
        aria-label="Remove level">  
        Remove  
      </button>  
    </div>  
  
    <div>  
      <label class="label">  
        Level Notes <span class="text-gray-500 text-xs">(required if Fair, Poor, Damaged, or N/A)</span>  
      </label>  
      <textarea  
        name="level_notes[]"  
        rows="2"  
        class="textarea"  
        maxlength="600"  
        placeholder="Summarize key interior issues/strengths for this level: finish quality, moisture evidence, ceiling/wall/floor condition, trim/doors, etc."  
      ></textarea>  
      <p class="hint text-xs text-gray-500 mt-1">Suggested: 80–200 characters (max 600).</p>  
    </div>  
  
    <!-- Rooms list -->  
    <div class="space-y-3">  
      <div class="flex items-center justify-between">  
        <h4 class="text-sm font-semibold text-gray-700">Rooms on this Level</h4>  
        <button type="button"  
          class="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40"  
          data-action="add-room">  
          Add Room  
        </button>  
      </div>  
  
      <div class="space-y-3" data-rooms></div>  
    </div>  
  </section>  
</template>  
  
<!-- Room Template: Row 1 = Type/Name/Condition; Row 2 = Notes -->  
<template id="room_template">  
  <div class="rounded-lg border border-gray-200 p-3 space-y-3">  
    <!-- Row 1 -->  
    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">  
      <label class="block">  
        <span class="block text-xs font-medium">Room Type <span class="text-red-600">*</span></span>  
        <select name="room_type[]" class="select" required autocomplete="off">  
          <option value="">Select…</option>  
          <option value="Living Room">Living Room</option>  
          <option value="Family Room">Family Room</option>  
          <option value="Dining Room">Dining Room</option>  
          <option value="Kitchen">Kitchen</option>  
          <option value="Bedroom">Bedroom</option>  
          <option value="Full Bath">Full Bath</option>  
          <option value="Half Bath">Half Bath</option>  
          <option value="Laundry/Utility">Laundry/Utility</option>  
          <option value="Office/Den">Office/Den</option>  
          <option value="Hall/Closet">Hall/Closet</option>  
          <option value="Other">Other</option>  
        </select>  
      </label>  
  
      <label class="block">  
        <span class="block text-xs font-medium">Room Name</span>  
        <input type="text" name="room_name[]" class="input" maxlength="60" placeholder="e.g., Primary Bedroom, Front Living" />  
      </label>  
  
      <label class="block">  
        <span class="block text-xs font-medium">Room Condition <span class="text-red-600">*</span></span>  
        <select name="room_condition[]" class="select" required autocomplete="off">  
          <option value="">Select…</option>  
          <option value="Excellent">Excellent</option>  
          <option value="Good">Good</option>  
          <option value="Average">Average</option>  
          <option value="Fair">Fair</option>  
          <option value="Poor">Poor</option>  
          <option value="Damaged">Damaged</option>  
          <option value="N/A">N/A</option>  
        </select>  
      </label>  
    </div>  
  
    <!-- Row 2 -->  
    <div>  
      <label class="block">  
        <span class="block text-xs font-medium">Notes <span class="text-gray-500">(required if below Average)</span></span>  
        <textarea  
          name="room_notes[]"  
          class="textarea"  
          rows="2"  
          maxlength="200"  
          placeholder="e.g., Worn flooring; GFCI missing; moisture staining NE corner."  
        ></textarea>  
      </label>  
    </div>  
  
    <div class="mt-2 flex justify-end">  
      <button type="button"  
        class="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400/40"  
        data-action="remove-room">  
        Remove Room  
      </button>  
    </div>  
  </div>  
</template>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card" id="repairs_upgrades_section">  
  <div class="space-y-4 pt-8 border-t border-gray-300">  
    <h2 class="text-lg font-semibold">Recent Repairs and Upgrades</h2>  
  
    <!-- Q1: Kitchen/Bath updates -->  
    <div class="grid grid-cols-1 gap-3">  
      <label class="block">  
        <span class="block text-sm font-medium">  
          Have there been any major updates to the kitchen and/or bathrooms within the last 10 years?  
          <span class="text-red-600">*</span>  
        </span>  
        <select  
          id="recent_kitchen_bath_yn"  
          name="recent_kitchen_bath_yn"  
          required  
          class="input"  
          aria-describedby="recent_kitchen_bath_hint"  
          autocomplete="off"  
        >  
          <option value="">Select Yes/No</option>  
          <option value="Yes">Yes</option>  
          <option value="No">No</option>  
        </select>  
        <p id="recent_kitchen_bath_hint" class="hint text-xs text-gray-500 mt-1">  
          Explain if you select Yes.  
        </p>  
      </label>  
  
      <label class="block">  
        <span class="block text-sm font-medium">If Yes, please explain</span>  
        <textarea  
          id="recent_kitchen_bath_explain"  
          name="recent_kitchen_bath_explain"  
          rows="2"  
          class="input"  
          maxlength="500"  
          placeholder="e.g., Kitchen remodeled 2019 (cabinets, quartz, appliances). Hall bath updated 2021."  
          aria-describedby="recent_kitchen_bath_explain_hint"  
        ></textarea>  
        <p id="recent_kitchen_bath_explain_hint" class="hint text-xs text-gray-500 mt-1">  
          Suggested: 100–300 characters.  
        </p>  
      </label>  
    </div>  
  
    <!-- Q2: Major updates/repairs (5 years) -->  
    <div class="grid grid-cols-1 gap-3">  
      <label class="block">  
        <span class="block text-sm font-medium">  
          Have there been any major updates or repairs to the property within the last 5 years?  
          <span class="text-red-600">*</span>  
        </span>  
        <select  
          id="recent_major_update_yn"  
          name="recent_major_update_yn"  
          required  
          class="input"  
          aria-describedby="recent_major_update_hint"  
          autocomplete="off"  
        >  
          <option value="">Select Yes/No</option>  
          <option value="Yes">Yes</option>  
          <option value="No">No</option>  
        </select>  
        <p id="recent_major_update_hint" class="hint text-xs text-gray-500 mt-1">  
          Explain if you select Yes.  
        </p>  
      </label>  
  
      <label class="block">  
        <span class="block text-sm font-medium">If Yes, please explain</span>  
        <textarea  
          id="recent_major_update_explain"  
          name="recent_major_update_explain"  
          rows="2"  
          class="input"  
          maxlength="500"  
          placeholder="e.g., New roof (2023), HVAC (2022), electrical panel upgrade (2021)."  
          aria-describedby="recent_major_update_explain_hint"  
        ></textarea>  
        <p id="recent_major_update_explain_hint" class="hint text-xs text-gray-500 mt-1">  
          Suggested: 100–300 characters.  
        </p>  
      </label>  
    </div>  
  
    <!-- ===== Continue with the rest as coded ===== -->  
    <h3 class="text-lg font-semibold pt-4 border-t border-gray-200">Individual Repairs/Upgrades</h3>  
  
    <div id="repair_rows_container" class="space-y-3"></div>  
  
    <div class="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center pt-2">  
      <button type="button" id="add_repair_row" class="btn btn-gray">+ Add Repair/Upgrade</button>  
      <div class="text-md font-semibold text-gray-800">  
        Total Approx. Cost: <span id="total_repair_cost">$0.00</span>  
        <input type="hidden" name="total_repair_cost" value="0.00" />  
      </div>  
    </div>  
  
    <template id="repair_row_template">  
      <div class="grid grid-cols-1 md:grid-cols-12 gap-3 p-3 border rounded-xl bg-white">  
        <div class="md:col-span-3">  
          <label class="label text-sm" for="">Category</label>  
          <select name="repair_category[]" class="input">  
            <option value="">Select…</option>  
            <option>Roof</option>  
            <option>Exterior/Siding</option>  
            <option>Windows/Doors</option>  
            <option>Foundation/Structure</option>  
            <option>HVAC</option>  
            <option>Electrical</option>  
            <option>Plumbing</option>  
            <option>Kitchen</option>  
            <option>Bathroom</option>  
            <option>Flooring</option>  
            <option>Interior/Finish</option>  
            <option>Appliances</option>  
            <option>Landscaping/Site</option>  
            <option>Other</option>  
          </select>  
        </div>  
  
        <div class="md:col-span-7">  
          <label class="label text-sm">Description</label>  
          <input  
            name="repair_description[]"  
            type="text"  
            class="input"  
            maxlength="120"  
            placeholder="e.g., Replace 30-yr architectural shingles"  
          />  
        </div>  
  
        <div class="md:col-span-2">  
          <label class="label text-sm">Cost ($)</label>  
          <input  
            name="repair_cost[]"  
            type="number"  
            step="0.01"  
            min="0"  
            class="input text-right"  
            placeholder="0.00"  
          />  
        </div>  
  
        <div class="md:col-span-12 flex justify-end">  
          <button type="button" class="btn btn-gray btn-remove-repair">Remove</button>  
        </div>  
      </div>  
    </template>  
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
    <!-- Hazards -->  
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
            class="input"  
            required  
            aria-describedby="hazards_hint"  
            autocomplete="off"  
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
            class="input"  
            placeholder="e.g., Missing handrail at front steps; loose paver at walkway."  
            maxlength="200"  
            aria-describedby="hazards_notes_help"  
          ></textarea>  
          <p id="hazards_notes_help" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <!-- Code violations -->  
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
            class="input"  
            required  
            aria-describedby="code_violations_hint"  
            autocomplete="off"  
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
            class="input"  
            placeholder="e.g., Non-GFCI outlets near sink; exposed wiring in basement."  
            maxlength="200"  
            aria-describedby="code_violations_notes_help"  
          ></textarea>  
          <p id="code_violations_notes_help" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <!-- Exterior odors -->  
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
            class="input"  
            required  
            aria-describedby="ext_odors_hint"  
            autocomplete="off"  
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
            class="input"  
            placeholder="e.g., Noticeable petroleum odor near alley on windy days."  
            maxlength="200"  
            aria-describedby="ext_odors_notes_help"  
          ></textarea>  
          <p id="ext_odors_notes_help" class="hint text-xs text-gray-500 mt-1">Max 200 characters.</p>  
        </div>  
      </div>  
    </div>  
  
    <!-- Summary -->  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <label class="label" for="health_safety_summary">Health &amp; Safety Summary (optional)</label>  
      <textarea  
        id="health_safety_summary"  
        name="health_safety_summary"  
        rows="3"  
        class="input"  
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
  <p id="status" class="text-sm text-gray-600 mb-3" role="status" aria-live="polite">  
    Complete all required fields to **Generate PDF**, or **Clear Form** to start over.  
  </p>  
  
  <div id="pcr-actions" data-actions class="flex items-center justify-between gap-3">  
    <button type="button" id="clearFormBtn" class="btn-red" aria-describedby="clear_hint">Clear Form</button>  
    <p data-status="pcr-full" class="text-sm text-gray-500"></p>  
    <button type="button" id="btnGenerateBottom" class="btn-blue" aria-describedby="generate_hint">Generate PDF</button>  
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
   DOM + STATUS HELPERS  
   ========================= */  
const $  = (sel, ctx=document) => ctx.querySelector(sel);  
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));  
  
function updateStatus(el, msg, kind="info"){  
  if (!el) return;  
  el.textContent = msg;  
  el.dataset.kind = kind;  
}  
  
/* =========================  
   jsPDF LAZY LOADER (single-flight + timeout)  
   ========================= */  
const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';  
let _pdfReady = false;  
let _pdfLoadPromise = null;  
  
function loadJsPdfOnce(){  
  if (_pdfReady) return Promise.resolve(true);  
  if (_pdfLoadPromise) return _pdfLoadPromise;  
  
  _pdfLoadPromise = new Promise((resolve, reject)=>{  
    let done = false;  
    const finish = (ok) => { if (!done){ done = true; ok ? resolve(true) : reject(new Error('Failed to load jsPDF')); } };  
  
    // already present  
    if (window.jspdf && typeof window.jspdf.jsPDF === 'function') {  
      if (!window.jsPDF) window.jsPDF = window.jspdf.jsPDF;  
      _pdfReady = true; return finish(true);  
    }  
  
    // if a tag exists, poll briefly (bounded)  
    const existing = document.querySelector(`script[src="${JSPDF_URL}"]`);  
    let tries = 0;  
    const POLL_MS = 100, MAX_TRIES = 80; // ~8s  
    const poll = () => {  
      if (window.jspdf && window.jspdf.jsPDF) {  
        if (!window.jsPDF) window.jsPDF = window.jspdf.jsPDF;  
        _pdfReady = true; return finish(true);  
      }  
      if (++tries > MAX_TRIES) return finish(false);  
      setTimeout(poll, POLL_MS);  
    };  
  
    if (existing){  
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
    setTimeout(()=>finish(_pdfReady), 10000);  
  });  
  
  return _pdfLoadPromise;  
}  
  
/* =========================  
   LABEL OVERRIDES + HELPERS  
   ========================= */  
const LABEL_ALIASES = {  
  // Summary counts  
  interior_levels:     'Interior Levels',  
  total_rooms:         'Total Rooms',  
  total_bedrooms:      'Total Bedrooms',  
  total_full_baths:    'Full Baths',  
  total_half_baths:    'Half Baths',  
  
  // Recent Repairs & Upgrades (explicit labels)  
  recent_kitchen_bath_yn: 'Any major updates to the kitchen and/or bathrooms within the last 10 years?',  
  recent_major_update_yn: 'Any major updates or repairs to the property within the last 5 years?'  
  // Note: no alias for total_repair_cost (we do not print the control label)  
};  
  
function cssEscapeSafe(s){  
  if (window.CSS && typeof CSS.escape === 'function') return CSS.escape(s);  
  return String(s).replace(/["\\]/g, '\\$&').replace(/[\n\r\t]/g, ' ');  
}  
  
function getLabelForField(field){  
  if (!field) return '';  
  
  // 1) Aliases by id or (arrayless) name  
  const byId   = (field.id || '').trim();  
  const byName = (field.name || '').replace(/\[\]$/, '').trim();  
  if (byId   && LABEL_ALIASES[byId])   return LABEL_ALIASES[byId];  
  if (byName && LABEL_ALIASES[byName]) return LABEL_ALIASES[byName];  
  
  // 2) Explicit <label for="id">  
  if (byId){  
    const explicit = document.querySelector(`label[for="${cssEscapeSafe(byId)}"]`);  
    if (explicit){  
      const t = explicit.textContent.replace(/\s+/g,' ').trim();  
      if (t) return t;  
    }  
  }  
  
  // 3) Wrapped label: prefer a visible text node/span inside  
  const wrapLabel = field.closest?.('label');  
  if (wrapLabel){  
    const preferred = wrapLabel.querySelector('.label, .block.text-sm, .block.font-medium, span, strong, b');  
    if (preferred){  
      const t = preferred.textContent.replace(/\s+/g,' ').trim();  
      if (t) return t;  
    }  
    const clone = wrapLabel.cloneNode(true);  
    clone.querySelectorAll('input,select,textarea,button').forEach(n=>n.remove());  
    const t2 = clone.textContent.replace(/\s+/g,' ').trim();  
    if (t2) return t2;  
  }  
  
  // 4) Nearby .label element (grid cell)  
  const cell = field.closest?.('div');  
  if (cell){  
    const lab = cell.querySelector('.label');  
    if (lab){  
      const t = lab.textContent.replace(/\s+/g,' ').trim();  
      if (t) return t;  
    }  
  }  
  
  // 5) Fallbacks  
  if (field.placeholder) return field.placeholder;  
  if (field.name)        return field.name;  
  return '(unnamed field)';  
}  
  
/* Safe selected option */  
function getSelectChoice(selectEl){  
  if (!selectEl || selectEl.tagName !== 'SELECT') return { text:'', value:'' };  
  const opt = selectEl.options[selectEl.selectedIndex];  
  if (!opt) return { text:'', value:'' };  
  return { text: (opt.text || '').trim(), value: (opt.value || '').trim() };  
}  
  
/* =========================  
   ERROR UI HELPERS  
   ========================= */  
function clearFieldError(el){  
  if (!el) return;  
  el.removeAttribute('aria-invalid');  
  el.classList.remove('ring-2','ring-red-500','border-red-500','ring-offset-2','animate-pulse');  
  const p = el.parentElement?.querySelector?.('.field-error');  
  if (p) p.remove();  
}  
function clearAllErrors(form){  
  $$('[aria-invalid="true"]', form).forEach(clearFieldError);  
  $$('.field-error', form).forEach(n=>n.remove());  
  const box = form.querySelector('#pcr-error-summary');  
  if (box) box.remove();  
}  
function setFieldError(el, message){  
  if (!el) return;  
  el.setAttribute('aria-invalid','true');  
  el.classList.add('ring-2','ring-red-500','border-red-500');  
  if (!el.parentElement) return;  
  let msg = el.parentElement.querySelector('.field-error');  
  if (!msg){  
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
const inSkip     = (el) => !!el?.closest?.(SKIP_SELECTOR);  
const isOptional = (el) => el?.dataset?.optional === 'true';  
const isEmpty    = v => v == null || String(v).trim() === '';  
  
/* =========================  
   ERROR REVEAL HELPERS  
   ========================= */  
function ensureId(el){  
  if (!el?.id) el.id = 'fld_' + Math.random().toString(36).slice(2, 9);  
  return el.id;  
}  
function unhideAncestors(el){  
  let n = el;  
  while (n && n !== document.body){  
    if (n.classList && n.classList.contains('hidden')) n.classList.remove('hidden');  
    if (n.hasAttribute && n.hasAttribute('hidden')) n.removeAttribute('hidden');  
    if (n.getAttribute && n.getAttribute('aria-hidden') === 'true') n.setAttribute('aria-hidden','false');  
    n = n.parentElement;  
  }  
}  
function revealField(el){  
  if (!el) return;  
  unhideAncestors(el);  
  el.scrollIntoView({ behavior:'smooth', block:'center' });  
  try { el.focus({ preventScroll:true }); } catch {}  
  el.classList.add('ring-2','ring-red-500','ring-offset-2','animate-pulse');  
  setTimeout(()=> el.classList.remove('animate-pulse'), 1800);  
}  
function showErrorSummary(form, errors){  
  const items = errors.map(el => {  
    const label = getLabelForField(el) || el.name || 'Required field';  
    const id = ensureId(el);  
    return { id, label, el };  
  });  
  
  let box = form.querySelector('#pcr-error-summary');  
  if (!box){  
    box = document.createElement('div');  
    box.id = 'pcr-error-summary';  
    box.className = 'mb-4 rounded-xl border border-red-300 bg-red-50 p-4';  
    box.setAttribute('role','alert');  
    box.setAttribute('aria-live','assertive');  
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
  
  box.querySelectorAll('a[data-jump]').forEach(a=>{  
    a.addEventListener('click', (e)=>{  
      e.preventDefault();  
      const id = a.getAttribute('data-jump');  
      const target = form.querySelector('#'+CSS.escape(id));  
      if (target) revealField(target);  
    });  
  });  
}  
  
/* =========================  
   VISIBILITY + VALIDATION  
   ========================= */  
function validateRequired(form){  
  clearAllErrors(form);  
  
  const required = Array.from(  
    form.querySelectorAll('input[required], select[required], textarea[required]')  
  ).filter(el => !inSkip(el) && !isOptional(el) && !el.disabled);  
  
  const errors = [];  
  const groups = new Map();  
  
  for (const el of required){  
    if ((el.type==='radio'||el.type==='checkbox') && el.name){  
      if (!groups.has(el.name)) groups.set(el.name, []);  
      groups.get(el.name).push(el);  
    } else {  
      if (isEmpty(el.value)) errors.push(el);  
    }  
  }  
  
  for (const [, group] of groups){  
    if (!group.some(el=>el.checked)) errors.push(group[0]);  
  }  
  
  if (errors.length){  
    const seen = new Set();  
    const unique = errors.filter(el => (seen.has(el) ? false : (seen.add(el), true)));  
    unique.forEach(el => {  
      const msg = (el.type==='radio'||el.type==='checkbox')  
        ? 'Please choose an option.'  
        : (el.getAttribute('data-error')||'This field is required.');  
      setFieldError(el, msg);  
      ensureId(el);  
      unhideAncestors(el);  
    });  
    showErrorSummary(form, unique);  
    const first = unique[0];  
    revealField(first);  
    return { ok:false, count: unique.length, first };  
  }  
  
  const box = form.querySelector('#pcr-error-summary');  
  if (box) box.remove();  
  
  return { ok:true, count:0 };  
}  
  
/* ====== Require-only helpers (no hiding) for general fields ====== */  
function wireRequire(selectId, targetValues, textareaId){  
  const selectEl   = $(`#${selectId}`);  
  const textareaEl = textareaId ? $(`#${textareaId}`) : null;  
  if (!selectEl || !textareaEl) return;  
  
  if (inSkip(selectEl) || inSkip(textareaEl) || isOptional(textareaEl)) return;  
  
  const values = Array.isArray(targetValues) ? targetValues : [targetValues];  
  const update = () => { textareaEl.required = values.includes(selectEl.value); };  
  selectEl.addEventListener('change', update, {passive:true});  
  update();  
}  
// Back-compat wrappers  
function wireToggle(selectId, _wrapperId, targetValue, textareaId){ wireRequire(selectId, targetValue, textareaId); }  
function wireToggleMulti(selectId, _wrapperId, textareaId){ wireRequire(selectId, ['Fair','Poor','Damaged'], textareaId); }  
  
/* =========================  
   RESET + DRAFT HELPERS  
   ========================= */  
const PCR_DRAFT_KEY = 'pcr_full_inspection_draft';  
  
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
    try { localStorage.setItem(PCR_DRAFT_KEY, JSON.stringify(data)); }  
    catch (e) { console.warn('Auto-save failed:', e); }  
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
                  (o.text  || '').trim().toLowerCase() === want  
                );  
                if (match) el.value = match.value;  
              }  
              el.dispatchEvent(new Event('change', { bubbles: true }));  
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
                (o.text  || '').trim().toLowerCase() === want  
              );  
              if (match) el.value = match.value;  
            }  
            el.dispatchEvent(new Event('change', { bubbles: true }));  
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
      ['pcr-full-draft', 'pcrFullDraft', 'pcr_full_autosave_draft'].forEach(k => localStorage.removeItem(k));  
    }  
  }  
};  
  
function refreshUIAfterReset(form){  
  $$('input,select,textarea', form).forEach(el=>{  
    el.dispatchEvent(new Event('input',  {bubbles:true}));  
    el.dispatchEvent(new Event('change', {bubbles:true}));  
  });  
  try { form.dispatchEvent(new CustomEvent('pcr:form-reset',{bubbles:true})); } catch {}  
}  
function clearDraftSafely(){ pcrDraftManager.clearDraft(); }  
  
/* =========================  
   LEVEL & ROOM LOGIC  
   ========================= */  
const LEVEL_HOST = $('#level_sections');  
const LEVEL_TPL  = $('#level_template');  
const ROOM_TPL   = $('#room_template');  
  
function wireLevelEvents(levelEl) {  
  if (!levelEl) return;  
  
  // condition -> notes (require only; do not hide)  
  const conditionSelect = levelEl.querySelector('select[name^="level_condition"]');  
  const notesTextarea   = levelEl.querySelector('textarea[name^="level_notes"]');  
  if (conditionSelect && notesTextarea) {  
    wireToggleMulti(conditionSelect.id, /*wrapperId*/ null, notesTextarea.id);  
  }  
  
  // title "Other" (require only; do not hide input)  
  const titleSelect = levelEl.querySelector('select[name^="level_title"]');  
  const otherInput  = levelEl.querySelector('input[name^="level_title_other"]');  
  if (titleSelect && otherInput) {  
    const updateOther = () => { otherInput.required = (titleSelect.value === 'Other') && !inSkip(otherInput) && !isOptional(otherInput); };  
    titleSelect.addEventListener('change', updateOther);  
    updateOther();  
  }  
  
  // add room  
  const addRoomBtn = levelEl.querySelector('button[data-action="add-room"]');  
  if (addRoomBtn) addRoomBtn.addEventListener('click', () => addRoom(levelEl.querySelector('[data-rooms]')));  
  
  // remove level  
  const removeLevelBtn = levelEl.querySelector('button[data-action="remove-level"]');  
  if (removeLevelBtn) {  
    removeLevelBtn.addEventListener('click', () => {  
      if (confirm('Are you sure you want to remove this entire level? This cannot be undone.')) {  
        levelEl.remove();  
      }  
    });  
  }  
}  
  
function wireRoomEvents(roomEl) {  
  if (!roomEl) return;  
  
  const typeSelect      = roomEl.querySelector('select[name="room_type[]"]');  
  const nameInput       = roomEl.querySelector('input[name="room_name[]"]');  
  const conditionSelect = roomEl.querySelector('select[name="room_condition[]"]');  
  const notesInput      = roomEl.querySelector('textarea[name="room_notes[]"]');  
  
  // Make Room Name required once a Room Type is selected  
  if (typeSelect && nameInput) {  
    const syncNameRequired = () => {  
      const hasType = !!(typeSelect.value && !/^Select/i.test(typeSelect.value));  
      nameInput.required = hasType && !inSkip(nameInput) && !isOptional(nameInput);  
    };  
    typeSelect.addEventListener('change', syncNameRequired, { passive: true });  
    syncNameRequired();  
  }  
  
  // Require notes when condition is Fair/Poor/Damaged  
  if (conditionSelect && notesInput) {  
    const updateNotes = () => {  
      const isPoor = ['Fair','Poor','Damaged'].includes(conditionSelect.value);  
      notesInput.required = isPoor && !inSkip(notesInput) && !isOptional(notesInput);  
    };  
    conditionSelect.addEventListener('change', updateNotes);  
    updateNotes();  
  }  
  
  const removeRoomBtn = roomEl.querySelector('button[data-action="remove-room"]');  
  if (removeRoomBtn) removeRoomBtn.addEventListener('click', () => roomEl.remove());  
}  
  
function addRoom(roomsContainer) {  
  if (!ROOM_TPL || !roomsContainer) return;  
  const roomEl = ROOM_TPL.content.firstElementChild.cloneNode(true);  
  
  const roomIndex = roomsContainer.children.length;  
  const uniqueId  = Date.now();  
  
  roomEl.querySelectorAll('select, input, textarea').forEach(field => {  
    field.id = `${field.name.replace(/\[|\]/g, '_')}_${uniqueId}_${roomIndex}`;  
    const label = field.closest('label');  
    if (label) label.htmlFor = field.id;  
  });  
  
  wireRoomEvents(roomEl);  
  roomsContainer.appendChild(roomEl);  
}  
  
function handleGenerateLevels(e) {  
  e?.preventDefault();  
  const input = $('#interior_levels');  
  const numLevels = parseInt(input?.value, 10);  
  const container = LEVEL_HOST;  
  
  if (!container || !LEVEL_TPL || isNaN(numLevels) || numLevels < 1 || numLevels > 8) {  
    alert('Please enter a valid number of levels (1-8).');  
    return;  
  }  
  
  container.innerHTML = '';  
  for (let i = 0; i < numLevels; i++) {  
    const levelEl = LEVEL_TPL.content.firstElementChild.cloneNode(true);  
    const levelIdPrefix = `level${i+1}_${Date.now()}`;  
  
    const conditionSelect = levelEl.querySelector('select[name^="level_condition"]');  
    const notesTextarea   = levelEl.querySelector('textarea[name^="level_notes"]');  
    const originalNotesContainer = notesTextarea?.parentElement;  
  
    levelEl.querySelectorAll('select, input, textarea').forEach(field => {  
      if (field.name) field.name = field.name.replace('[]', `_${i}[]`);  
    });  
  
    const notesWrapper = document.createElement('div');  
    notesWrapper.id = `${levelIdPrefix}_notes_wrapper`;  
    notesWrapper.className = '';  
    if (originalNotesContainer){  
      while (originalNotesContainer.firstChild) {  
        notesWrapper.appendChild(originalNotesContainer.firstChild);  
      }  
      originalNotesContainer.appendChild(notesWrapper);  
    }  
  
    if (conditionSelect) {  
      conditionSelect.id = `${levelIdPrefix}_condition`;  
      if (notesTextarea) notesTextarea.id = `${levelIdPrefix}_notes`;  
    }  
  
    LEVEL_HOST.appendChild(levelEl);  
    wireLevelEvents(levelEl);  
    addRoom(levelEl.querySelector('[data-rooms]'));  
  }  
}  
  
/* =========================  
   REPAIR ROW LOGIC (SECTION I)  
   ========================= */  
function initRepairRows() {  
  const container   = $('#repair_rows_container');  
  const addBtn      = $('#add_repair_row');  
  const tpl         = $('#repair_row_template');  
  const totalEl     = $('#total_repair_cost');  
  const totalHidden = $('input[name="total_repair_cost"]');  
  
  function fmt(n) { return n.toLocaleString(undefined, { style: 'currency', currency: 'USD' }); }  
  
  function recalc() {  
    const costs = $$('input[name="repair_cost[]"]', container);  
    const sum = costs.reduce((s, el) => s + (parseFloat(el.value) || 0), 0);  
    if (totalEl) totalEl.textContent = fmt(sum);  
    if (totalHidden) totalHidden.value = sum.toFixed(2);  
  }  
  
  function onInput(e) {  
    if (e.target && e.target.name === 'repair_cost[]') recalc();  
  }  
  
  function addRow() {  
    if (!tpl) return;  
    const node = tpl.content.firstElementChild.cloneNode(true);  
  
    const uniqueId = `repair-${Date.now()}`;  
    node.querySelectorAll('select, input, textarea').forEach((el, index) => {  
      if (!el.id) el.id = `${uniqueId}-${index}`;  
      const label = el.closest('div')?.querySelector('label');  
      if (label && (label.getAttribute('for') === '' || !label.getAttribute('for'))) {  
        label.setAttribute('for', el.id);  
      }  
    });  
  
    node.querySelector('.btn-remove-repair')?.addEventListener('click', () => {  
      node.remove();  
      recalc();  
    });  
    node.addEventListener('input', onInput);  
    container.appendChild(node);  
    recalc();  
  }  
  
  addBtn?.addEventListener('click', addRow);  
  if (container && !container.children.length) addRow();  
}  
  
/* =========================  
   REPAIRS: LAYOUT FIX (move explain boxes directly after their questions)  
   ========================= */  
function layoutRepairsSection(){  
  const sec = document.querySelector('#repairs_upgrades_section');  
  if (!sec) return;  
  
  const rows   = sec.querySelector('#repair_rows_container'); // Individual Repairs list  
  
  const moveQA = (selectId, explainWrapId) => {  
    const sel  = sec.querySelector(`#${selectId}`);  
    const wrap = sec.querySelector(`#${explainWrapId}`);  
    if (!sel || !wrap) return;  
  
    // Ensure question appears before rows  
    if (rows && rows.compareDocumentPosition(sel) & Node.DOCUMENT_POSITION_FOLLOWING){  
      const selBlock = sel.closest('.grid, .flex, .space-y-4, div') || sel;  
      rows.parentElement.insertBefore(selBlock, rows);  
    }  
    // Place the explain wrapper immediately after its question/select  
    sel.insertAdjacentElement('afterend', wrap);  
  };  
  
  moveQA('recent_kitchen_bath_yn',     'recent_kitchen_bath_explain_wrap');  
  moveQA('recent_major_update_yn',     'recent_major_update_explain_wrap');  
}  
  
/* =========================  
   PDF GENERATOR (FULL)  
   ========================= */  
async function handleGeneratePdf(form, statusEl){  
  const res = validateRequired(form);  
  if (!res.ok){  
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
  
  const { jsPDF } = window.jspdf || {};  
  if (!jsPDF) {  
    updateStatus(statusEl, 'Error: jsPDF is unavailable after load.', 'error');  
    return;  
  }  
  
  const A4W = 210, A4H = 297, M = 18, FOOT = 12, LINE_H = 5;  
  const CONTENT_W = A4W - M*2;  
  const COL_1_W = CONTENT_W * 0.40;  
  const COL_2_X = M + COL_1_W + 2;  
  const COL_2_W = CONTENT_W * 0.60 - 2;  
  
  const doc = new jsPDF('p','mm','a4');  
  let state = { y: M };  
  
  function ensureSpace(need){  
    if (state.y + need > (A4H - M - FOOT)) {  
      doc.addPage();  
      state.y = M;  
    }  
  }  
  function textLines(txt, maxW){  
    return doc.splitTextToSize(String(txt ?? ''), maxW);  
  }  
  
  function addHeader(title){  
    if (!title) return;  
    ensureSpace(5);  
    state.y += 5;  
    const lines = textLines(title, CONTENT_W);  
    const need  = lines.length * LINE_H + 4;  
    ensureSpace(need + 2);  
    doc.setFont('helvetica','bold'); doc.setFontSize(12);  
    doc.text(lines, M, state.y);  
    doc.setFont('helvetica','normal'); doc.setFontSize(10);  
    state.y += need;  
    doc.setDrawColor(200);  
    doc.line(M, state.y - 2, A4W - M, state.y - 2);  
  }  
  
  function addKV(label, value){  
    const lbl = (label||'').toString().trim().replace(/ \*$/, '');  
    const val = (value||'').toString().trim();  
    if (!lbl || !val || /^Select/i.test(val)) return;  
  
    doc.setFontSize(10);  
    doc.setFont('helvetica','bold');  
    const lblLines = textLines(lbl, COL_1_W);  
  
    doc.setFont('helvetica','normal');  
    const valLines = textLines(val, COL_2_W);  
  
    const need = Math.max(lblLines.length, valLines.length) * LINE_H + 2;  
    ensureSpace(need);  
  
    doc.setFont('helvetica','bold');  
    doc.text(lblLines, M, state.y + LINE_H - 1);  
  
    doc.setFont('helvetica','normal');  
    doc.text(valLines, COL_2_X, state.y + LINE_H - 1);  
  
    state.y += need;  
  }  
  
  function addBullets(title, items){  
    const list = (items||[]).map(s=>String(s||'').trim()).filter(Boolean);  
    if (!list.length) return;  
  
    ensureSpace(LINE_H * (list.length + 2) + 4);  
    doc.setFontSize(10);  
    doc.setFont('helvetica','bold');  
    if (title) doc.text(title, M, state.y);  
    state.y += LINE_H + 1;  
    doc.setFont('helvetica','normal');  
    for (const item of list) {  
      const txt = `• ${item}`;  
      const wrapped = textLines(txt, CONTENT_W - 3);  
      ensureSpace(wrapped.length * LINE_H + 1);  
      doc.text(wrapped, M + 3, state.y);  
      state.y += (wrapped.length * LINE_H);  
    }  
    state.y += 2;  
  }  
  
  function addK_V_stacked(label, value){  
    const lbl = (label||'').toString().trim().replace(/ \*$/, '');  
    const val = (value||'').toString().trim();  
    if (!lbl || !val) return;  
  
    doc.setFontSize(10);  
    doc.setFont('helvetica','bold');  
    const lblLines = textLines(lbl, CONTENT_W);  
    let need = lblLines.length * LINE_H + 1;  
    ensureSpace(need);  
    doc.text(lblLines, M, state.y + LINE_H - 1);  
    state.y += need;  
  
    doc.setFont('helvetica','normal');  
    const valLines = textLines(val, CONTENT_W);  
    need = valLines.length * LINE_H + 3;  
    ensureSpace(need);  
    doc.text(valLines, M, state.y + LINE_H - 1);  
    state.y += need;  
  }  
  
  // Repairs renderer (Q&A then bullets then total)  
  function renderRepairsSection(section){  
    // Controls  
    const q1Sel   = section.querySelector('#recent_kitchen_bath_yn');  
    const q1Exp   = section.querySelector('#recent_kitchen_bath_explain');  
    const q2Sel   = section.querySelector('#recent_major_update_yn');  
    const q2Exp   = section.querySelector('#recent_major_update_explain');  
  
    const readChoice = (el) => {  
      if (!el) return '';  
      if (el.tagName === 'SELECT') {  
        const c = getSelectChoice(el);  
        return (c.text || c.value || '').trim();  
      }  
      if (el.type === 'radio') {  
        const group = section.querySelectorAll(`input[type="radio"][name="${el.name}"]`);  
        const sel = Array.from(group).find(r=>r.checked);  
        return (sel?.value || '').trim();  
      }  
      if (el.type === 'checkbox') return el.checked ? 'Yes' : 'No';  
      return (el.value || '').trim();  
    };  
  
    // 1) Q1 then explanation  
    const q1Val = readChoice(q1Sel);  
    if (q1Val) addKV(LABEL_ALIASES.recent_kitchen_bath_yn, q1Val);  
    const q1ExpVal = (q1Exp?.value || '').trim();  
    if (q1ExpVal) addK_V_stacked(getLabelForField(q1Exp) || 'If Yes, please explain', q1ExpVal);  
  
    // 2) Q2 then explanation  
    const q2Val = readChoice(q2Sel);  
    if (q2Val) addKV(LABEL_ALIASES.recent_major_update_yn, q2Val);  
    const q2ExpVal = (q2Exp?.value || '').trim();  
    if (q2ExpVal) addK_V_stacked(getLabelForField(q2Exp) || 'If Yes, please explain', q2ExpVal);  
  
    // 3) Repairs list (bullets)  
    const rows = $$('#repair_rows_container > div', section);  
    if (rows.length){  
      const bullets = [];  
      rows.forEach(row => {  
        const cat  = row.querySelector('select[name="repair_category[]"]')?.value?.trim() || '';  
        const desc = row.querySelector('input[name="repair_description[]"]')?.value?.trim() || '';  
        const costRaw = row.querySelector('input[name="repair_cost[]"]')?.value || '';  
        const costTxt = costRaw !== '' ? Number(costRaw).toLocaleString(undefined,{style:'currency',currency:'USD'}) : '';  
  
        let line = '';  
        if (cat)  line += `[${cat}] `;  
        if (desc) line += desc;  
        if (costTxt) line += (line ? ' — ' : '') + costTxt;  
        if (line) bullets.push(line);  
      });  
      if (bullets.length) addBullets('Individual Repairs/Upgrades', bullets);  
    }  
  
    // 4) Total at the end (computed), do not print raw control label  
    const totalHidden = section.querySelector('input[name="total_repair_cost"]')?.value;  
    if (totalHidden && !isNaN(totalHidden)) {  
      addKV('Total Approx. Cost', Number(totalHidden).toLocaleString(undefined, {style:'currency', currency:'USD'}));  
    }  
  }  
  
  try {  
    updateStatus(statusEl, 'Generating PDF…', 'info');  
  
    // Title  
    doc.setFont('helvetica','bold'); doc.setFontSize(16);  
    doc.text('Property Condition Report (PCR) – Full Inspection', M, state.y);  
    state.y += 8;  
    const address = $('#address')?.value?.trim();  
    if (address) {  
      doc.setFontSize(12);  
      doc.text(`Subject: ${address}`, M, state.y);  
      state.y += 6;  
    }  
    doc.setFont('helvetica','normal'); doc.setFontSize(10);  
    doc.text(`Generated: ${new Date().toLocaleString()}`, M, state.y);  
    state.y += 10;  
  
    // Sections  
    for (const section of $$('.section-card')){  
      const title = section.querySelector('h2')?.textContent?.trim();  
      addHeader(title);  
  
      // Dedicated repairs handling  
      const isRepairs = section.id === 'repairs_upgrades_section' || !!section.querySelector('#repair_rows_container');  
      if (isRepairs) renderRepairsSection(section);  
  
      const seen = new Set();  
      const elements = $$('input, select, textarea, fieldset > legend', section);  
  
      for (const el of elements) {  
        const nm = el.name;  
  
        // =========================  
        // Guards to prevent re-printing live controls  
        // =========================  
        // Skip any controls inside the dynamic Rooms container (already summarized)  
        if (el.closest?.('[data-rooms]')) continue;  
        // Skip array-style room fields by name, as a backstop (includes room_name)  
        if (nm && /^room_(type|name|condition|notes)\[\]$/.test(nm)) continue;  
  
        // If this is the repairs section, skip anything inside the rows container  
        if (isRepairs && el.closest?.('#repair_rows_container')) continue;  
  
        // Skip the two Q&A and the hidden total here (handled in renderRepairsSection)  
        if (isRepairs && nm && (  
          nm === 'recent_kitchen_bath_yn' ||  
          nm === 'recent_major_update_yn' ||  
          nm === 'total_repair_cost' ||  
          nm === 'recent_kitchen_bath_explain' ||  
          nm === 'recent_major_update_explain'  
        )) continue;  
  
        // Name-based backup skip for repairs rows  
        if (isRepairs && nm && /^repair_(category|description|cost)\[\]$/.test(nm)) continue;  
  
        if (nm && seen.has(nm)) continue;  
  
        if (el.tagName === 'LEGEND') {  
          const groupTitle = el.textContent.trim();  
          const fieldset = el.closest('fieldset');  
          if (!fieldset) continue;  
  
          const checked = $$('input[type="checkbox"]', fieldset)  
            .filter(cb => cb.checked)  
            .map(cb => cb.closest('label')?.innerText?.trim() || cb.value || cb.name)  
            .filter(Boolean);  
          if (checked.length) addBullets(groupTitle, checked);  
          $$('input[type="checkbox"]', fieldset).forEach(cb => cb.name && seen.add(cb.name));  
  
        } else if (nm && nm.startsWith('level_title_')) {  
          const levelIndex = nm.match(/_(\d+)\[\]/)?.[1];  
          if (levelIndex === undefined) continue;  
  
          const levelTitleEl       = el;  
          const levelConditionEl   = $(`select[name="level_condition_${levelIndex}[]"]`, section);  
          const levelNotesEl       = $(`textarea[name="level_notes_${levelIndex}[]"]`, section);  
          const levelTitleOtherEl  = $(`input[name="level_title_other_${levelIndex}[]"]`, section);  
  
          let titleVal = levelTitleEl.value;  
          if (titleVal === 'Other' && levelTitleOtherEl?.value) titleVal = levelTitleOtherEl.value;  
  
          if (titleVal && !/^Select/i.test(titleVal)) {  
            const conditionVal = levelConditionEl?.value || 'N/A';  
            addHeader(`Level Detail: ${titleVal} (Condition: ${conditionVal})`);  
            if (levelNotesEl?.value) addK_V_stacked('Level Notes', levelNotesEl.value);  
  
            const levelContainer = levelTitleEl.closest('section');  
            if (levelContainer) {  
              const roomElements = $$('[data-rooms] > div.rounded-lg', levelContainer);  
              const roomDetails = [];  
  
              for (const roomEl of roomElements) {  
                const roomTypeEl      = roomEl.querySelector('select[name^="room_type"]');  
                const roomNameEl      = roomEl.querySelector('input[name^="room_name"]');  
                const roomConditionEl = roomEl.querySelector('select[name^="room_condition"]');  
                const roomNotesEl     = roomEl.querySelector('textarea[name^="room_notes"]');  
  
                // Type (prefer option text)  
                const roomTypeChoice  = roomTypeEl ? getSelectChoice(roomTypeEl) : {text:'',value:''};  
                const roomTypeValue   = (roomTypeChoice.text || roomTypeChoice.value || '').trim();  
  
                // Name (free text)  
                const roomNameValue   = (roomNameEl?.value || '').trim();  
  
                // Condition (prefer option text)  
                const roomCondChoice  = roomConditionEl ? getSelectChoice(roomConditionEl) : {text:'',value:''};  
                const condLabel       = (roomCondChoice.text || roomCondChoice.value || 'N/A').trim();  
  
                // Notes  
                const notesValue      = (roomNotesEl?.value || '').trim();  
  
                if (roomTypeValue && !/^Select/i.test(roomTypeValue)) {  
                  // Assemble: Room Type, Room Name, Room Condition, Notes  
                  let detail = roomTypeValue;  
                  if (roomNameValue) detail += ` — ${roomNameValue}`;  
                  detail += ` (Condition: ${condLabel})`;  
                  if (notesValue) detail += ` — Notes: ${notesValue}`;  
  
                  roomDetails.push(detail);  
  
                  if (roomTypeEl?.name)       seen.add(roomTypeEl.name);  
                  if (roomNameEl?.name)       seen.add(roomNameEl.name);  
                  if (roomConditionEl?.name)  seen.add(roomConditionEl.name);  
                  if (roomNotesEl?.name)      seen.add(roomNotesEl.name);  
                }  
              }  
              if (roomDetails.length) addBullets('Rooms on This Level', roomDetails);  
            }  
          }  
  
          seen.add(levelTitleEl.name);  
          if (levelConditionEl?.name) seen.add(levelConditionEl.name);  
          if (levelNotesEl?.name)     seen.add(levelNotesEl.name);  
          if (levelTitleOtherEl?.name)seen.add(levelTitleOtherEl.name);  
  
        } else if (el.type === 'radio') {  
          const group = $$(`input[type="radio"][name="${cssEscapeSafe(nm)}"]`, section);  
          const sel = group.find(r => r.checked);  
          addKV(getLabelForField(group[0] || el), sel ? sel.value : '');  
          seen.add(nm);  
  
        } else if (el.type === 'checkbox') {  
          addKV(getLabelForField(el), el.checked ? 'Yes' : 'No');  
          seen.add(nm);  
  
        } else if (el.tagName === 'SELECT') {  
          const choice = getSelectChoice(el);  
          if (choice.text && !/^Select/i.test(choice.text) && choice.value !== '') {  
            addKV(getLabelForField(el), choice.text);  
          }  
          seen.add(nm);  
  
        } else if (el.name && !['button','submit','reset','file'].includes(el.type||'')) {  
          let val = el.value || '';  
          if (el.type === 'hidden' && !val) { seen.add(nm); continue; }  
  
          if (el.tagName === 'TEXTAREA') {  
            addK_V_stacked(getLabelForField(el), val);  
          } else {  
            addKV(getLabelForField(el), val);  
          }  
          seen.add(nm);  
        }  
      }  
    }  
  
    doc.save('PCR-Full-Inspection.pdf');  
    updateStatus(statusEl, 'PDF generated successfully.', 'success');  
  } catch(err) {  
    console.error('PDF Generation Error:', err);  
    updateStatus(statusEl, 'Error generating PDF. See console for details.', 'error');  
  }  
}  
  
/* =========================  
   CLEAR FORM  
   ========================= */  
function handleClearForm(form, statusEl){  
  if (!form) return;  
  form.reset();  
  clearAllErrors(form);  
  pcrDraftManager.clearDraft();  
  refreshUIAfterReset(form);  
  updateStatus(statusEl, 'Form cleared. Draft deleted.', 'success');  
}  
  
/* =========================  
   OWNERSHIP TYPE: SHOW/HIDE ASSOCIATION SECTIONS  
   ========================= */  
function initOwnershipVisibility(){  
  const ownershipTypeSelect = $('#ownership_type');  
  
  const ASSOC_SECTION_IDS = [  
    '#association_common_area_info',  
    '#assoc_access_condition_section',  
    '#assoc_fin_legal_section'  
  ];  
  
  const ASSOC_REQUIRED_SELECTORS = [  
    '#association_name',  
    '#association_summary',  
    '#association_contact_address',  
    '#association_fee',  
    '#association_fee_includes',  
    '#parking_type',  
    '#common_amenities',  
    '#association_detail_summary',  
    '#assoc_common_areas_condition',  
    '#assoc_parking_condition',  
    '#assoc_pool_condition',  
    '#assoc_extra_amenities_condition',  
    '#assoc_elevator_condition',  
    '#assoc_security_condition'  
  ];  
  
  const TARGET_VALUES = [  
    'fee simple - subject to hoa',  
    'condominium ownership',  
    'cooperative (co-op) ownership'  
  ];  
  
  const norm = (s) => String(s || '')  
    .toLowerCase()  
    .replace(/[–—]/g, '-')  
    .replace(/\s+/g, ' ')  
    .trim();  
  
  function setVis(el, show){  
    if (!el) return;  
    el.classList.toggle('hidden', !show);  
    el.toggleAttribute('hidden', !show);  
    el.setAttribute('aria-hidden', String(!show));  
  }  
  
  function setAssocSectionsVisible(show){  
    ASSOC_SECTION_IDS.forEach(id => setVis($(id), show));  
  
    ASSOC_REQUIRED_SELECTORS.forEach(sel => {  
      let el = $(sel);  
      if (el && !['input','select','textarea'].includes(el.tagName?.toLowerCase())) {  
        el = $('input, select, textarea', el);  
      }  
      if (!el) return;  
  
      if (inSkip(el) || isOptional(el)) {  
        el.required = false;  
        return;  
      }  
      el.required = !!show;  
    });  
  }  
  
  function applyOwnershipRules(){  
    let show = false;  
    if (ownershipTypeSelect) {  
      const opt = ownershipTypeSelect.options[ownershipTypeSelect.selectedIndex];  
      const value = norm(opt?.value ?? ownershipTypeSelect.value);  
      const text  = norm(opt?.text  ?? ownershipTypeSelect.value);  
      const hay   = `${value} ${text}`;  
      show = TARGET_VALUES.some(tv => hay.includes(norm(tv)));  
    }  
    setAssocSectionsVisible(show);  
  }  
  
  setAssocSectionsVisible(false);  
  
  if (ownershipTypeSelect){  
    ownershipTypeSelect.addEventListener('change', applyOwnershipRules, { passive: true });  
    applyOwnershipRules();  
  }  
}  
  
/* =========================  
   APP INIT  
   ========================= */  
function pickForm(){  return $('#formFullInspection') || $('#formPCR') || $('#formExterior') || document.querySelector('form'); }  
function pickScope(form){ return $('#pcr-actions') || $('#exterior-actions') || form; }  
function pickStatus(scope){ return $('[data-status="pcr-full"]', scope) || $('[data-status="pcr-exterior"]', scope) || $('#status') || null; }  
  
function wireAllToggles(){  
  // Site Characteristics (require only)  
  wireToggle('use_consistent', 'use_consistent_explain_wrapper', 'No', 'use_consistent_explain');  
  
  // Subject Setting and View (require only)  
  wireToggle('immediate_surroundings', 'immediate_surroundings_detail_wrapper', 'Other (describe)', 'immediate_surroundings_detail');  
  wireToggle('primary_view', 'primary_view_detail_wrapper', 'Other (describe)', 'primary_view_detail');  
  wireToggle('surroundings_rating', 'surroundings_explain_wrapper', ['Mixed Condition', 'Poorly Kept'], 'surroundings_explain');  
  wireToggle('construction_active_yn', 'construction_active_notes_wrapper', 'Yes', 'construction_active_notes');  
  
  // Public Records and Compliance (require only)  
  wireToggle('pr_liens_yn', 'pr_liens_explain_wrapper', 'Yes', 'pr_liens_explain');  
  wireToggle('pr_licenses_yn', 'pr_licenses_explain_wrapper', 'Yes', 'pr_licenses_explain');  
  wireToggle('pr_violations_yn', 'pr_violations_explain_wrapper', 'Yes', 'pr_violations_explain');  
  wireToggle('pr_flood_known_yn', 'pr_flood_explain_wrapper', 'Yes', 'pr_flood_explain');  
  
  // Overall Condition Rating (require only)  
  wireToggle('overall_condition_rating', 'overall_condition_notes_wrapper', ['Fair', 'Poor', 'Damaged', 'N/A'], 'overall_condition_notes');  
  
  // Exterior Condition (require only)  
  wireToggleMulti('overall_exterior_condition_rating', 'overall_exterior_condition_explain_wrapper', 'overall_exterior_condition_explain');  
  wireToggleMulti('site_grounds_rating', 'site_grounds_explain_wrapper', 'site_grounds_explain');  
  wireToggleMulti('ext_structure_rating', 'ext_structure_explain_wrapper', 'ext_structure_explain');  
  wireToggleMulti('roof_system_rating', 'roof_system_explain_wrapper', 'roof_system_explain');  
  wireToggleMulti('entry_openings_rating', 'entry_openings_explain_wrapper', 'entry_openings_explain');  
  
  // Assoc: Common Area Inspection (require only)  
  wireToggleMulti('assoc_common_areas_condition', 'assoc_common_areas_notes_wrapper', 'assoc_common_areas_notes');  
  wireToggleMulti('assoc_parking_condition', 'assoc_parking_notes_wrapper', 'assoc_parking_notes');  
  wireToggleMulti('assoc_pool_condition', 'assoc_pool_notes_wrapper', 'assoc_pool_notes');  
  wireToggleMulti('assoc_extra_amenities_condition', 'assoc_extra_amenities_notes_wrapper', 'assoc_extra_amenities_notes');  
  wireToggleMulti('assoc_elevator_condition', 'assoc_elevator_notes_wrapper', 'assoc_elevator_notes');  
  wireToggleMulti('assoc_security_condition', 'assoc_security_notes_wrapper', 'assoc_security_notes');  
  
  // Interior Condition (require only)  
  wireToggle('overall_interior_condition_rating', 'overall_interior_condition_notes_wrapper', ['Fair', 'Poor', 'Damaged', 'N/A'], 'overall_interior_condition_notes');  
  
  // Repairs and Upgrades (require only) — these keep textareas required only when "Yes"  
  wireToggle('recent_kitchen_bath_yn', 'recent_kitchen_bath_explain_wrap', 'Yes', 'recent_kitchen_bath_explain');  
  wireToggle('recent_major_update_yn', 'recent_major_update_explain_wrap', 'Yes', 'recent_major_update_explain');  
  
  // Health & Safety (require only)  
  wireToggle('hazards_yn', 'hazards_notes_wrap', 'Yes', 'hazards_notes');  
  wireToggle('code_violations_yn', 'code_violations_notes_wrap', 'Yes', 'code_violations_notes');  
  wireToggle('ext_odors_yn', 'ext_odors_notes_wrap', 'Yes', 'ext_odors_notes');  
  
  // Financing Assessment (require only)  
  wireToggle('financing_type', 'financing_type_other_wrap', 'Other', 'financing_type_other');  
  wireToggle('financing_meets_standards_yn', 'financing_deficiencies_wrap', 'No', 'financing_deficiencies_explain');  
  
  // Assoc: Financial & Legal Status (require only)  
  wireToggle('assoc_special_assessments', 'assoc_special_assessments_notes_wrap', 'Yes', 'assoc_special_assessments_notes');  
  wireToggle('assoc_legal_issues', 'assoc_legal_issues_notes_wrap', 'Yes', 'assoc_legal_issues_notes');  
  wireToggle('assoc_financing_eligibility', 'assoc_financing_eligibility_other_wrap', 'Other', 'assoc_financing_eligibility_other');  
  
  // Investment & Market Use (require only)  
  wireToggle('mkt_proposed_use', 'mkt_proposed_use_other_wrap', 'Other / Restricted', 'mkt_proposed_use_other');  
  wireToggle('mkt_common_use', 'mkt_common_use_other_wrap', 'Other / Restricted', 'mkt_common_use_other');  
  wireToggle('mkt_use_consistent_yn', 'mkt_use_consistent_wrap', 'No', 'mkt_use_consistent_explain');  
  
  // Ownership sections (the only place we hide/show)  
  initOwnershipVisibility();  
}  
  
function initializeApp(){  
  const form   = pickForm();  
  if (!form){ console.error('Form not found. Expected #formFullInspection.'); return; }  
  
  const scope  = pickScope(form);  
  const status = pickStatus(scope);  
  
  // Attempt draft restore first  
  if (pcrDraftManager.loadDraft(form)) {  
    refreshUIAfterReset(form);  
    updateStatus(status, 'Draft restored.', 'info');  
  }  
  
  // Wire autosave  
  form.addEventListener('input', () => pcrDraftManager.saveDraft(form), { passive: true });  
  
  // Levels & Repairs  
  const btnGenerateLevels = $('#generate_levels_btn');  
  if (btnGenerateLevels) btnGenerateLevels.addEventListener('click', handleGenerateLevels);  
  initRepairRows();  
  
  // Buttons  
  const btnPDFb = $('#btnGenerateBottom', scope) || $('#btnGenerate', scope);  
  const btnClr  = $('#clearFormBtn', scope);  
  if (btnPDFb && btnPDFb.type !== 'button') btnPDFb.type = 'button';  
  if (btnClr  && btnClr.type  !== 'button') btnClr.type  = 'button';  
  if (btnPDFb) btnPDFb.addEventListener('click', (e) => { e.preventDefault(); handleGeneratePdf(form, status); });  
  if (btnClr)  btnClr.addEventListener('click', (e) => { e.preventDefault(); handleClearForm(form, status); });  
  
  // Toggle wiring and ownership visibility  
  wireAllToggles();  
  
  // Ensure the “If Yes, please explain” boxes sit right after their questions and before the rows  
  layoutRepairsSection();  
  
  // If levels were preset, render them  
  if (parseInt($('#interior_levels')?.value, 10) > 1) {  
    handleGenerateLevels();  
  }  
  
  updateStatus(status, 'Ready.', 'info');  
}  
  
/* =========================  
   DOM READY  
   ========================= */  
if (document.readyState === 'loading'){  
  document.addEventListener('DOMContentLoaded', initializeApp, {once:true});  
} else {  
  initializeApp();  
}  
</script>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
