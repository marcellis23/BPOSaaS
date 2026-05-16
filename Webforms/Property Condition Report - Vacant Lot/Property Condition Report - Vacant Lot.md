# Property Condition Report - Vacant Lot  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1" />  
  <title>Property Condition Report - Vacant Lot</title>  
  
  <link rel="preconnect" href="https://fonts.googleapis.com">  
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>  
  
  <link  
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"  
    rel="stylesheet"  
  />  
  
  <script src="https://cdn.tailwindcss.com"></script>  
  
  <!-- ok to keep; your loader short-circuits if it already exists -->  
  <script  
    src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"  
    defer  
  ></script>  
  
  <style>  
    :root { color-scheme: light; }  
    html, body { height: 100%; }  
    body { font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; background:#f8fafc; }  
    .section-card { background:#fff; border-radius:1rem; box-shadow:0 1px 2px rgba(0,0,0,.05); border:1px solid #e5e7eb; padding:1.5rem; }  
    .label { display:block; font-size:.875rem; font-weight:600; color:#374151; }  
    .input, .select, .textarea { width:100%; margin-top:.25rem; border:1px solid #d1d5db; border-radius:.75rem; padding:.625rem .875rem; outline:0; transition:border-color .15s, box-shadow .15s; }  
    .input:focus, .select:focus, .textarea:focus { border-color:#2563eb; box-shadow:0 0 0 3px rgba(37,99,235,.2); }  
    .hint { font-size:.75rem; color:#6b7280; margin-top:.25rem; }  
    [hidden] { display:none !important; }  
    noscript .noscript-card { background:#fff2f2; border-radius:1rem; border:1px solid #fecaca; padding:1.5rem; font-size:.875rem; font-weight:500; color:#b91c1c; }  
  </style>  
</head>  
<body class="bg-gray-50 text-gray-900">  
  <main id="main" role="main" class="max-w-4xl mx-auto p-6 space-y-10">  
    <header class="flex items-center justify-between">  
      <div>  
        <h1 class="text-2xl md:text-3xl font-bold">Property Condition Report - Vacant Lot</h1>  
        <p class="mt-1 text-sm text-gray-600">  
          Use for drive-by, curbside, or restricted-access lot inspections.  
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
  
    <form id="formVacantLot" class="space-y-8">  
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
      <input id="parcel_id" name="parcel_id" type="text" maxlength="50"  
             class="input"  
             autocomplete="off" autocapitalize="off" spellcheck="false"  
             aria-describedby="parcel_id_hint"  
             placeholder="e.g., 88-123-4567 or 123456789" />  
      <p id="parcel_id_hint" class="hint">Use PIN/BRT/OPA format if known.</p>  
    </div>  
  
    <div class="sm:col-span-4">  
      <label class="label" for="address">  
        Property Address <span class="text-red-600">*</span>  
      </label>  
      <input id="address" name="address" required type="text" maxlength="100"  
             class="input"  
             placeholder="123 Main St"  
             autocomplete="address-line1" autocapitalize="off" spellcheck="false" />  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="lot_number">Lot / Parcel #</label>  
      <input id="lot_number" name="lot_number" type="text" maxlength="20"  
             class="input"  
             placeholder="Lot/Parcel" autocomplete="off" autocapitalize="off" spellcheck="false" />  
    </div>  
  
    <div class="sm:col-span-3">  
      <label class="label" for="city">  
        City / Town <span class="text-red-600">*</span>  
      </label>  
      <input id="city" name="city" required type="text" maxlength="50"  
             class="input"  
             autocomplete="address-level2" />  
    </div>  
  
    <div class="sm:col-span-1">  
      <label class="label" for="state">  
        State <span class="text-red-600">*</span>  
      </label>  
      <select id="state" name="state" required  
              class="select"  
              autocomplete="address-level1">  
        <option value="">Select...</option>  
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
      <label class="label" for="zip">  
        Zip Code <span class="text-red-600">*</span>  
      </label>  
      <input id="zip" name="zip" required pattern="\d{5}(-\d{4})?" type="text" maxlength="10"  
             class="input"  
             placeholder="19104" inputmode="numeric" autocomplete="postal-code" />  
    </div>  
  
    <div class="sm:col-span-3">  
      <label class="label" for="county">County</label>  
      <input id="county" name="county" type="text" maxlength="50"  
             class="input" />  
    </div>  
  
    <div class="sm:col-span-3">  
      <label class="label" for="school_district">School District</label>  
      <input id="school_district" name="school_district" type="text" maxlength="75"  
             class="input" />  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="property_type">  
        Vacant Land/Lot Type <span class="text-red-600">*</span>  
      </label>  
      <select id="property_type" name="property_type" required  
              class="select" aria-describedby="property_type_hint">  
        <option value="">Select Type...</option>  
        <optgroup label="Residential Lots">  
          <option value="Residential Lot (Single-Family)">Residential Lot (Single-Family)</option>  
          <option value="Multifamily Lot (2–4 Units)">Multifamily Lot (2–4 Units)</option>  
          <option value="Condominium Lot / Pad Site">Condominium Lot / Pad Site</option>  
          <option value="Planned Unit Development (PUD) Lot">Planned Unit Development (PUD) Lot</option>  
        </optgroup>  
        <optgroup label="Commercial & Industrial">  
          <option value="Commercial Lot">Commercial Lot</option>  
          <option value="Mixed-Use Lot">Mixed-Use Lot</option>  
          <option value="Industrial Lot">Industrial Lot</option>  
        </optgroup>  
        <optgroup label="Agricultural & Rural">  
          <option value="Agricultural / Farm Land">Agricultural / Farm Land</option>  
          <option value="Rural / Vacant Land">Rural / Vacant Land</option>  
        </optgroup>  
        <optgroup label="Special Location / Shape">  
          <option value="Corner Lot">Corner Lot</option>  
          <option value="Interior Lot">Interior Lot</option>  
          <option value="Cul-de-sac Lot">Cul-de-sac Lot</option>  
          <option value="Flag Lot">Flag Lot</option>  
          <option value="Irregular Lot">Irregular Lot</option>  
          <option value="Waterfront Lot">Waterfront Lot</option>  
        </optgroup>  
        <optgroup label="Vacant & Development">  
          <option value="Improved Lot (utilities present)">Improved Lot (utilities present)</option>  
          <option value="Unimproved Lot (raw land)">Unimproved Lot (raw land)</option>  
          <option value="Buildable Lot">Buildable Lot</option>  
          <option value="Non-Buildable Lot">Non-Buildable Lot</option>  
          <option value="Subdividable Lot">Subdividable Lot</option>  
        </optgroup>  
      </select>  
      <p id="property_type_hint" class="hint">Select the best description for the lot itself.</p>  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="ownership_type">  
        Ownership Type <span class="text-red-600">*</span>  
      </label>  
      <select id="ownership_type" name="ownership_type" required  
              class="select" aria-describedby="ownership_type_hint">  
        <option value="">Select…</option>  
        <option value="Fee Simple (Full Ownership)">Fee Simple (Full Ownership)</option>  
        <option value="Fee Simple - Subject to HOA">Fee Simple - Subject to HOA</option>  
        <option value="Condominium Ownership">Condominium Ownership</option>  
        <option value="Cooperative (Co-Op) Ownership">Cooperative (Co-Op) Ownership</option>  
        <option value="Leasehold (Ground Lease / Long-Term Lease)">Leasehold (Ground Lease / Long-Term Lease)</option>  
        <option value="Partial Interest / Fractional Ownership">Partial Interest / Fractional Ownership</option>  
        <option value="Life Estate">Life Estate</option>  
      </select>  
      <p id="ownership_type_hint" class="hint">Select the legal form of ownership.</p>  
    </div>  
  
    <div class="sm:col-span-2">  
      <label class="label" for="occupancy">  
        Current Use Status <span class="text-red-600">*</span>  
      </label>  
      <select id="occupancy" name="occupancy" required  
              class="select" aria-describedby="occupancy_hint">  
        <option value="">Select Status...</option>  
        <optgroup label="Vacant / Idle">  
          <option value="Vacant Land (no active use)">Vacant Land (no active use)</option>  
          <option value="Idle / Abandoned (previous use but currently unused)">Idle / Abandoned (previous use but currently unused)</option>  
        </optgroup>  
        <optgroup label="Residential">  
          <option value="Single-Family Residence">Single-Family Residence</option>  
          <option value="Multifamily Residence (2–4 units)">Multifamily Residence (2–4 units)</option>  
          <option value="Apartment Building (5+ units)">Apartment Building (5+ units)</option>  
          <option value="Manufactured / Mobile Home Use">Manufactured / Mobile Home Use</option>  
        </optgroup>  
        <optgroup label="Commercial / Industrial">  
          <option value="Retail Use (storefront, shopping, etc.)">Retail Use (storefront, shopping, etc.)</option>  
          <option value="Office Use">Office Use</option>  
          <option value="Mixed-Use Occupancy (residential + commercial)">Mixed-Use Occupancy (residential + commercial)</option>  
          <option value="Industrial / Warehouse Use">Industrial / Warehouse Use</option>  
          <option value="Special Commercial (gas station, auto repair, pad site, etc.)">Special Commercial (gas station, auto repair, pad site, etc.)</option>  
        </optgroup>  
        <optgroup label="Community / Public">  
          <option value="Community / Institutional Use (church, school, nonprofit)">Community / Institutional Use (church, school, nonprofit)</option>  
          <option value="Government / Public Utility Use (road, right-of-way, easement)">Government / Public Utility Use (road, right-of-way, easement)</option>  
          <option value="Open Space / Conservation / Wetlands (non-buildable designated use)">Open Space / Conservation / Wetlands (non-buildable designated use)</option>  
          <option value="Parking Lot Use">Parking Lot Use</option>  
        </optgroup>  
        <optgroup label="Development">  
          <option value="Under Development / Construction">Under Development / Construction</option>  
        </optgroup>  
        <optgroup label="Agricultural / Rural">  
          <option value="Active Farming / Cropland">Active Farming / Cropland</option>  
          <option value="Pasture / Livestock Use">Pasture / Livestock Use</option>  
          <option value="Timber / Forestry Use">Timber / Forestry Use</option>  
          <option value="Recreational Use (campground, hunting, open field)">Recreational Use (campground, hunting, open field)</option>  
        </optgroup>  
        <option value="Other / Restricted">Other / Restricted</option>  
      </select>  
      <p id="occupancy_hint" class="hint">Select the lot's current, observable use.</p>  
    </div>  
  
    <div class="sm:col-span-6">  
      <label class="label" for="legal_description">Legal Description</label>  
      <textarea id="legal_description" name="legal_description" rows="2" maxlength="500"  
              class="textarea" aria-describedby="legal_description_hint"></textarea>  
      <p id="legal_description_hint" class="hint">Suggested: 100-400 characters.</p>  
     <span data-counter>0</span>/500  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card" id="site_characteristics_section">  
  <h2 class="text-lg font-semibold">Site Characteristics</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section details the property's physical attributes, from  
      <strong>Lot Size</strong> and <strong>Zoning</strong> to  
      <strong>Topography</strong>. These characteristics define the property's  
      functional utility and are foundational to evaluating its feasibility and value.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-4">  
    <div class="md:col-span-2">  
      <label class="label" for="site_source">Source</label>  
      <select id="site_source" name="site_source" class="select" autocomplete="off" aria-describedby="site_source_hint">  
        <option value="">Select...</option>  
        <option value="Public Records">Public Records</option>  
        <option value="Assessment">Assessment</option>  
        <option value="MLS Record">MLS Record</option>  
        <option value="Client Provided">Client Provided</option>  
        <option value="Self Inspection">Self Inspection</option>  
        <option value="Other">Other</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
      <p id="site_source_hint" class="hint">Where this site info primarily came from.</p>  
    </div>  
  
    <div>  
      <label class="label" for="lot_size">Lot Size (Sq Ft or Acres)</label>  
      <input id="lot_size" name="lot_size" type="text" maxlength="30"  
             class="input"  
             placeholder="e.g., 10,000 or 0.25" inputmode="decimal" aria-describedby="lot_size_hint" />  
      <p id="lot_size_hint" class="hint">Enter either square feet or acres (estimates are OK).</p>  
    </div>  
  
    <div>  
      <label class="label" for="lot_shape">Lot Shape</label>  
      <select id="lot_shape" name="lot_shape" class="select" autocomplete="off" aria-describedby="lot_shape_hint">  
        <option value="">Select...</option>  
        <option value="Rectangular/Square (Ideal)">Rectangular/Square (Ideal)</option>  
        <option value="Irregular/Pie-shaped (Less Ideal)">Irregular/Pie-shaped (Less Ideal)</option>  
        <option value="Flag Lot (Restricted access)">Flag Lot (Restricted access)</option>  
        <option value="Corner Lot">Corner Lot</option>  
        <option value="Unknown / Not Assessed">Unknown / Not Assessed</option>  
      </select>  
      <p id="lot_shape_hint" class="hint">Select the best description for the parcel shape.</p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="topography">Topography</label>  
      <select id="topography" name="topography" class="select" autocomplete="off" aria-describedby="topography_hint">  
        <option value="">Select...</option>  
        <option value="Flat/Level">Flat/Level</option>  
        <option value="Gently Sloped">Gently Sloped</option>  
        <option value="Steeply Sloped">Steeply Sloped</option>  
        <option value="Hilly/Uneven">Hilly/Uneven</option>  
        <option value="Low-lying (Requires fill)">Low-lying (Requires fill)</option>  
        <option value="Unknown / Not Assessed">Unknown / Not Assessed</option>  
      </select>  
      <p id="topography_hint" class="hint">Slope/grade conditions that may affect feasibility.</p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="zoning">Zoning</label>  
      <input id="zoning" name="zoning" type="text" maxlength="50"  
             class="input"  
             placeholder="e.g., RSA-5" autocomplete="off" autocapitalize="off" spellcheck="false" aria-describedby="zoning_hint" />  
      <p id="zoning_hint" class="hint">List the known or most likely zoning (e.g., RSA-5, CMX-2).</p>  
    </div>  
  
    <div>  
      <label class="label" for="use_consistent">Use Consistent?</label>  
      <select id="use_consistent" name="use_consistent"  
              class="select"  
              aria-controls="use_consistent_explain_wrapper"  
              aria-expanded="false" autocomplete="off">  
        <option value="">Select...</option>  
        <option value="Yes">Yes</option>  
        <option value="No">No</option>  
      </select>  
    </div>  
  
    <div id="use_consistent_explain_wrapper" class="hidden" role="region" aria-live="polite">  
      <label class="label" for="use_consistent_explain">  
        Explain Inconsistency (Required if No)  
      </label>  
      <textarea id="use_consistent_explain" name="use_consistent_explain" rows="2" maxlength="500"  
              class="textarea" aria-describedby="use_consistent_explain_hint use_consistent_explain_counter"></textarea>  
      <p id="use_consistent_explain_hint" class="hint">Suggested: 50–150 characters.</p>  
      <p id="use_consistent_explain_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/500  
      </p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="site_notes">Site Inspection Summary</label>  
      <textarea id="site_notes" name="site_notes" rows="3" maxlength="500"  
              class="textarea"  
              placeholder="Easements, encroachments, site influences, proximity to amenities, traffic, etc."  
              aria-describedby="site_notes_hint site_notes_counter"></textarea>  
      <p id="site_notes_hint" class="hint">Suggested: 100–400 characters.</p>  
      <p id="site_notes_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/500  
      </p>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card" id="utility_availability_section">  
  <h2 class="text-lg font-semibold">Utility Availability</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section identifies all available utility connections. Utilities directly  
      affect a property's habitability, functionality, and the cost of future  
      development, making this a critical part of any feasibility assessment.  
    </p>  
  </div>  
  
  <p class="text-sm text-gray-500 mt-4">  
    Check all utility connections known to be <strong>available</strong> at the lot line.  
  </p>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-4">  
    <div class="md:col-span-2">  
      <div class="space-y-6">  
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
              <input type="checkbox" name="util_power_unknown" value="Unknown" class="rounded text-blue-600 focus:ring-blue-500">  
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
              <input type="checkbox" name="util_heat_pump" value="Electric HVAC" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Electric Heat Pump / HVAC</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_heat_geo" value="Geothermal" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Geothermal Heating &amp; Cooling</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_heat_unknown" value="Unknown" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Water Supply</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_public" value="Public Water" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Public/Municipal Water</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_well" value="Private Well" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Private Well / Community Well</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_shared" value="Shared System" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Shared/Community System</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_irrigation" value="Irrigation Water" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Irrigation Water (rights, etc.)</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_harvest" value="Rainwater/Cistern" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Rainwater Harvesting / Cistern</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_water_unknown" value="Unknown" class="rounded text-blue-600 focus:ring-blue-500">  
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
              <input type="checkbox" name="util_waste_septic" value="Private Septic" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Private Septic System</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_waste_holding" value="Holding Tank" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Holding Tank</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_waste_grey" value="Greywater System" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Greywater Recycling System</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_waste_unknown" value="Unknown" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
  
        <fieldset>  
          <legend class="text-base font-semibold text-gray-600">Communications</legend>  
          <div class="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2">  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_comm_landline" value="Landline" class="rounded text-blue-600 focus:ring-blue-500">  
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
              <input type="checkbox" name="util_comm_cell" value="Cellular Coverage" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Cellular Network Coverage</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_comm_unknown" value="Unknown" class="rounded text-blue-600 focus:ring-blue-500">  
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
              <input type="checkbox" name="util_drain_retention" value="Retention Ponds" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Retention Ponds / Rainwater Capture</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
  <input type="checkbox" name="util_drain_unknown" value="Unknown" class="rounded text-blue-600 focus:ring-blue-500">  
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
              <input type="checkbox" name="util_service_fire" value="Fire Protection" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Fire Hydrant / Protection</span>  
            </label>  
            <label class="flex items-center space-x-2 text-sm font-medium">  
              <input type="checkbox" name="util_service_unknown" value="Unknown" class="rounded text-blue-600 focus:ring-blue-500">  
              <span>Unknown / Not Assessed</span>  
            </label>  
          </div>  
        </fieldset>  
      </div>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="utilities_notes">  
        Notes on Utility Connections (Utility mix, distance, cost, special needs, etc.):  
      </label>  
      <textarea id="utilities_notes" name="utilities_notes" rows="3" maxlength="500"  
              class="textarea"  
              placeholder="e.g., Sewer hookup requires pump station; Electricity pole is 500ft away."  
              aria-describedby="utilities_notes_hint utilities_notes_counter"></textarea>  
      <p id="utilities_notes_hint" class="hint">Suggested: 100-300 characters.</p>  
      <p id="utilities_notes_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/500  
      </p>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card hidden" id="association_common_area_info">  
  <h2 class="text-lg font-semibold">Association and Common Area Information</h2>  
  
  <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 text-sm text-yellow-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      For condos or HOA-governed properties, this section outlines the association’s  
      structure, fees, and shared amenities. These factors influence ongoing costs,  
      marketability, and long-term ownership obligations.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">  
    <div>  
      <label class="label" for="assoc_name">Association/Cooperative Name</label>  
      <input id="assoc_name" name="assoc_name" type="text" maxlength="120"  
             class="input"  
             placeholder="e.g., Parkside Condominiums" autocomplete="organization">  
    </div>  
  
    <div>  
      <label class="label" for="assoc_senior_only">Senior-Only Community</label>  
      <select id="assoc_senior_only" name="assoc_senior_only" class="select">  
        <option value="">Select...</option>  
        <option value="Yes">Yes</option>  
        <option value="No">No</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_detail">Association/Cooperative Summary Description</label>  
      <textarea id="assoc_detail" name="assoc_detail" rows="2" maxlength="300"  
                class="textarea"  
                placeholder="Brief description from MLS/signage (e.g., self-managed, on-site mgmt, # of buildings)."  
                aria-describedby="assoc_detail_hint assoc_detail_counter"></textarea>  
      <p id="assoc_detail_hint" class="hint">Short summary; public/MLS info only.</p>  
      <p id="assoc_detail_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/300  
      </p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_contact_address">Contact Address</label>  
      <input id="assoc_contact_address" name="assoc_contact_address" type="text" maxlength="160"  
             class="input"  
             placeholder="e.g., 123 Main St, Suite 200" autocomplete="address-line1">  
    </div>  
  
    <div>  
      <label class="label" for="assoc_contact_phone">Contact Phone</label>  
      <input id="assoc_contact_phone" name="assoc_contact_phone" type="tel" maxlength="24"  
             class="input"  
             placeholder="e.g., (215) 555-1234" autocomplete="tel" inputmode="tel"  
             pattern="^\(?\d{3}\)?[\s.\-]?\d{3}[\s.\-]?\d{4}$"  
             title="Enter a 10-digit US phone number (e.g., 123-456-7890 or (123) 456-7890)">  
    </div>  
  
    <div>  
      <label class="label" for="assoc_fee_amount">Association/Condo Fee</label>  
      <input id="assoc_fee_amount" name="assoc_fee_amount" type="text" maxlength="24"  
             class="input"  
             placeholder="e.g., $425" autocomplete="off" inputmode="decimal">  
    </div>  
  
    <div>  
      <label class="label" for="assoc_fee_freq">Fee Paid</label>  
      <select id="assoc_fee_freq" name="assoc_fee_freq" class="select">  
        <option value="">Select...</option>  
        <option value="Monthly">Monthly</option>  
        <option value="Quarterly">Quarterly</option>  
        <option value="Yearly">Yearly</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_fee_includes_text">Fee Includes</label>  
      <input id="assoc_fee_includes_text" name="assoc_fee_includes_text" type="text" maxlength="200"  
             class="input"  
             placeholder="e.g., Water, Sewer, Trash, Exterior Maintenance" autocomplete="off"  
             aria-describedby="assoc_fee_includes_hint assoc_fee_includes_text_counter">  
      <p id="assoc_fee_includes_hint" class="hint">Short list; separate items with commas.</p>  
      <p id="assoc_fee_includes_text_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/200  
      </p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_parking_type">Parking Type</label>  
      <select id="assoc_parking_type" name="assoc_parking_type" class="select">  
        <option value="">Select...</option>  
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
        <option value="">Select...</option>  
        <option value="Yes">Yes</option>  
        <option value="No">No</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_common_amenities">Common Amenities</label>  
      <input id="assoc_common_amenities" name="assoc_common_amenities" type="text" maxlength="200"  
             class="input"  
             placeholder="e.g., Elevator, gym, community room" autocomplete="off"  
             aria-describedby="assoc_common_amenities_hint assoc_common_amenities_counter">  
      <p id="assoc_common_amenities_hint" class="hint">Short list; separate items with commas.</p>  
      <p id="assoc_common_amenities_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/200  
      </p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_notes">Association/Cooperative Detailed Summary</label>  
      <textarea id="assoc_notes" name="assoc_notes" rows="3" maxlength="500"  
                class="textarea"  
                placeholder="Additional MLS/observed details. Do not speculate."  
                aria-describedby="assoc_notes_hint assoc_notes_counter"></textarea>  
      <p id="assoc_notes_hint" class="hint">Keep concise; public/MLS info only.</p>  
      <p id="assoc_notes_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/500  
      </p>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<section class="section-card">  
  <h2 class="text-lg font-semibold">Environmental and Site Feasibility</h2>  
  
  <div class="bg-red-50 border-l-4 border-red-500 p-4 text-sm text-red-700 rounded-xl my-4">  
    <p class="font-semibold mb-1">Why this matters to you:</p>  
    <p>  
      This section highlights environmental conditions and site-specific risks—such as  
      <strong>soil stability</strong>, <strong>flooding</strong>, or <strong>contamination</strong>—that may affect feasibility, safety, and  
      eligibility for future development or financing.  
    </p>  
  </div>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 mt-4">  
    <div class="md:col-span-2">  
      <label class="label" for="env_soil_stability">  
        Soil Quality and Stability Assessment (for construction): <span class="text-red-600">*</span>  
      </label>  
      <select id="env_soil_stability" name="env_soil_stability" required  
              class="select">  
        <option value="">Select Assessment</option>  
        <option value="Good (Appears stable, typical quality)">Good (Appears stable, typical quality)</option>  
        <option value="Fair (Some rock or clay observed)">Fair (Some rock or clay observed)</option>  
        <option value="Poor (Sand, expansive clay, or swampy. Soil test recommended.)">Poor (Sand, expansive clay, or swampy. Soil test recommended.)</option>  
        <option value="Unknown/Not Assessed">Unknown/Not Assessed</option>  
      </select>  
    </div>  
  
    <div>  
      <label class="label" for="env_flood_yn">  
        Flood Zone or Drainage Issues? <span class="text-red-600">*</span>  
      </label>  
      <select id="env_flood_yn" name="env_flood_yn" required  
              class="select" aria-controls="env_flood_explain_wrapper" aria-expanded="false">  
        <option value="">Select Y/N</option>  
        <option value="Yes (Known Flood Zone or Drainage Issue)">Yes (Known Flood Zone or Drainage Issue)</option>  
        <option value="No (Appears clear)">No (Appears clear)</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div id="env_flood_explain_wrapper" class="hidden" role="region" aria-live="polite">  
      <label class="label" for="env_flood_explain">  
        Explain Flood/Drainage Issues (Required if Yes)  
      </label>  
      <textarea id="env_flood_explain" name="env_flood_explain" rows="2" maxlength="300"  
              class="textarea"  
              placeholder="e.g., Lot is partially in FEMA Zone A..."  
              aria-describedby="env_flood_explain_hint env_flood_explain_counter"></textarea>  
      <p id="env_flood_explain_hint" class="hint">Note the zone and source if known.</p>  
      <p id="env_flood_explain_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/300  
      </p>  
    </div>  
  
    <div>  
      <label class="label" for="env_contamination_yn">  
        Contamination Risks (Old industrial site, nearby waste)? <span class="text-red-600">*</span>  
      </label>  
      <select id="env_contamination_yn" name="env_contamination_yn" required  
              class="select" aria-controls="env_contamination_explain_wrapper" aria-expanded="false">  
        <option value="">Select Y/N</option>  
        <option value="Yes (High Risk - recommend Phase I)">Yes (High Risk - recommend Phase I)</option>  
        <option value="Low Risk (Residential area)">Low Risk (Residential area)</option>  
        <option value="Unknown">Unknown</option>  
      </select>  
    </div>  
  
    <div id="env_contamination_explain_wrapper" class="hidden" role="region" aria-live="polite">  
      <label class="label" for="env_contamination_explain">  
        Explain Contamination Risk (Required if Yes)  
      </label>  
      <textarea id="env_contamination_explain" name="env_contamination_explain" rows="2" maxlength="300"  
              class="textarea"  
              placeholder="e.g., Adjacent to former dry cleaner..."  
              aria-describedby="env_contamination_explain_hint env_contamination_explain_counter"></textarea>  
      <p id="env_contamination_explain_hint" class="hint">Describe the risk source (e.g., adjacent gas station).</p>  
      <p id="env_contamination_explain_counter" class="hint" aria-live="polite">  
        <span data-counter>0</span>/300  
      </p>  
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
          <select id="pr_liens_yn" name="pr_liens_yn" class="select"  
                  aria-controls="pr_liens_explain_wrapper" aria-expanded="false">  
            <option value="">Select…</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="Unknown">Unknown</option>  
          </select>  
        </div>  
  
        <div id="pr_liens_explain_wrapper" class="hidden" role="region" aria-live="polite">  
          <label class="label text-sm" for="pr_liens_explain">Explain (required if Yes):</label>  
          <textarea id="pr_liens_explain" name="pr_liens_explain" rows="2" class="textarea"  
                  maxlength="200" placeholder="Type of lien/encroachment, doc #/source, date if known."  
                  aria-describedby="pr_liens_explain_counter"></textarea>  
          <p id="pr_liens_explain_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
            <span data-counter>0</span>/200  
          </p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_licenses_yn">Any active licenses on the property?</label>  
          <select id="pr_licenses_yn" name="pr_licenses_yn" class="select"  
                  aria-controls="pr_licenses_explain_wrapper" aria-expanded="false">  
            <option value="">Select…</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="Unknown">Unknown</option>  
          </select>  
        </div>  
  
        <div id="pr_licenses_explain_wrapper" class="hidden" role="region" aria-live="polite">  
          <label class="label text-sm" for="pr_licenses_explain">Explain (required if Yes):</label>  
          <textarea id="pr_licenses_explain" name="pr_licenses_explain" rows="2" class="textarea"  
                  maxlength="200" placeholder="Rental license, use &amp; occupancy, business license, etc."  
                  aria-describedby="pr_licenses_explain_counter"></textarea>  
          <p id="pr_licenses_explain_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
            <span data-counter>0</span>/200  
          </p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_violations_yn">Any known violations on the property?</label>  
          <select id="pr_violations_yn" name="pr_violations_yn" class="select"  
                  aria-controls="pr_violations_explain_wrapper" aria-expanded="false">  
            <option value="">Select…</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="Unknown">Unknown</option>  
          </select>  
        </div>  
  
        <div id="pr_violations_explain_wrapper" class="hidden" role="region" aria-live="polite">  
          <label class="label text-sm" for="pr_violations_explain">Explain (required if Yes):</label>  
          <textarea id="pr_violations_explain" name="pr_violations_explain" rows="2" class="textarea"  
                  maxlength="200" placeholder="Type of violation, notice #/source, approximate date."  
                  aria-describedby="pr_violations_explain_counter"></textarea>  
          <p id="pr_violations_explain_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
            <span data-counter>0</span>/200  
          </p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">  
        <div>  
          <label class="label" for="pr_flood_known_yn">Is the property within a known Flood Zone?</label>  
          <select id="pr_flood_known_yn" name="pr_flood_known_yn" class="select"  
                  aria-controls="pr_flood_explain_wrapper" aria-expanded="false">  
            <option value="">Select…</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="Unknown">Unknown</option>  
          </select>  
        </div>  
  
        <div id="pr_flood_explain_wrapper" class="hidden" role="region" aria-live="polite">  
          <label class="label text-sm" for="pr_flood_explain">Explain (required if Yes):</label>  
          <textarea id="pr_flood_explain" name="pr_flood_explain" rows="2" class="textarea"  
                  maxlength="200" placeholder="FEMA zone (e.g., AE, X), source (FIRM/MSC), panel/date if known."  
                  aria-describedby="pr_flood_explain_counter"></textarea>  
          <p id="pr_flood_explain_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
            <span data-counter>0</span>/200  
          </p>  
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
  <h2 class="text-lg font-semibold">Site Condition</h2>  
  
  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 rounded-lg">  
    <label class="label font-bold text-blue-800 mb-2" for="overall_condition_rating">  
      Overall Site Condition <span class="text-red-600">*</span>  
    </label>  
  
    <select id="overall_condition_rating" name="overall_condition_rating" required  
            class="select">  
      <option value="">Select Condition…</option>  
      <option value="Build-Ready">Build-Ready</option>  
      <option value="Partially Improved">Partially Improved</option>  
      <option value="Unimproved / Raw">Unimproved / Raw</option>  
    </select>  
  
    <div class="hint text-xs text-blue-700 mt-2 space-y-1">  
      <p><strong>Build-Ready:</strong> Cleared, improved, and appears prepared for construction; may have permits or approvals.</p>  
      <p><strong>Partially Improved:</strong> Some site work or utilities present, but additional preparation is needed.</p>  
      <p><strong>Unimproved / Raw:</strong> Natural ground with no visible improvements or utility access.</p>  
    </div>  
  </div>  
  
  
  <div class="space-y-4">  
    <div class="space-y-3 pt-4 border-t border-gray-200">  
      <h3 class="text-base font-semibold text-gray-700">I. Site and Grounds</h3>  
      <p class="text-sm text-gray-500">Landscaping, grading, retaining walls, fencing, debris, standing water, etc.</p>  
  
      <label class="label" for="site_grounds_rating">  
        Condition Rating (Site and Grounds) <span class="text-red-600">*</span>  
      </label>  
      <select id="site_grounds_rating" name="site_grounds_rating" required  
              class="select" aria-controls="site_grounds_explain_wrapper" aria-expanded="false">  
        <option value="">Select Rating…</option>  
        <option value="Good">Good</option>  
        <option value="Average">Average</option>  
        <option value="Fair">Fair</option>  
        <option value="Poor">Poor</option>  
        <option value="Damaged">Damaged</option>  
        <option value="N/A - Not Applicable">N/A - Not Applicable</option>  
        <option value="Unknown / Not Inspected">Unknown / Not Inspected</option>  
      </select>  
  
      <div id="site_grounds_explain_wrapper" class="hidden" role="region" aria-live="polite">  
        <label class="label mt-2" for="site_grounds_explain">  
          Explain (Required if Fair, Poor, or Damaged)  
        </label>  
        <textarea id="site_grounds_explain" name="site_grounds_explain" rows="2" maxlength="500"  
              class="textarea"  
              placeholder="e.g., Significant overgrowth, large debris pile, poor drainage..."  
              aria-describedby="site_grounds_explain_hint site_grounds_explain_counter"></textarea>  
        <p id="site_grounds_explain_hint" class="hint">Suggested: 75-200 characters.</p>  
        <p id="site_grounds_explain_counter" class="hint" aria-live="polite">  
          <span data-counter>0</span>/500  
        </p>  
      </div>  
    </div>  
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
      <label class="label" for="assoc_common_areas">Common Areas</label>  
      <select id="assoc_common_areas" name="assoc_common_areas" class="select" autocomplete="off" aria-required="false" data-optional="true"  
              aria-describedby="assoc_common_areas_hint">  
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
      <textarea id="assoc_common_areas_notes" name="assoc_common_areas_notes" rows="2" class="textarea"  
        maxlength="200" placeholder="Brief notes on lobbies, corridors, clubhouse, mailroom, etc."  
        aria-describedby="assoc_common_areas_notes_counter" aria-required="false" data-optional="true"></textarea>  
      <p id="assoc_common_areas_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
        <span data-counter>0</span>/200  
      </p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_parking">Parking Area</label>  
      <select id="assoc_parking" name="assoc_parking" class="select" autocomplete="off" aria-required="false" data-optional="true"  
              aria-describedby="assoc_parking_hint">  
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
      <textarea id="assoc_parking_notes" name="assoc_parking_notes" rows="2" class="textarea"  
        maxlength="200" placeholder="Lot/garage condition, striping, lighting, access, signage."  
        aria-describedby="assoc_parking_notes_counter" aria-required="false" data-optional="true"></textarea>  
      <p id="assoc_parking_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
        <span data-counter>0</span>/200  
      </p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_pool">Pool</label>  
      <select id="assoc_pool" name="assoc_pool" class="select" autocomplete="off" aria-required="false" data-optional="true"  
              aria-describedby="assoc_pool_hint">  
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
      <textarea id="assoc_pool_notes" name="assoc_pool_notes" rows="2" class="textarea"  
        maxlength="200" placeholder="Fencing, deck surface, visible maintenance; if N/A, leave blank."  
        aria-describedby="assoc_pool_notes_counter" aria-required="false" data-optional="true"></textarea>  
      <p id="assoc_pool_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
        <span data-counter>0</span>/200  
      </p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_extra_amenities">Extra Amenities</label>  
      <select id="assoc_extra_amenities" name="assoc_extra_amenities" class="select" autocomplete="off" aria-required="false" data-optional="true"  
              aria-describedby="assoc_extra_amenities_hint">  
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
      <textarea id="assoc_extra_amenities_notes" name="assoc_extra_amenities_notes" rows="2" class="textarea"  
        maxlength="200" placeholder="Gym, community room, playground, courtyard, etc."  
        aria-describedby="assoc_extra_amenities_notes_counter" aria-required="false" data-optional="true"></textarea>  
      <p id="assoc_extra_amenities_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
        <span data-counter>0</span>/200  
      </p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_elevator">Elevator</label>  
      <select id="assoc_elevator" name="assoc_elevator" class="select" autocomplete="off" aria-required="false" data-optional="true"  
              aria-describedby="assoc_elevator_hint">  
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
      <textarea id="assoc_elevator_notes" name="assoc_elevator_notes" rows="2" class="textarea"  
        maxlength="200" placeholder="Operational status not tested; call panel condition; signage."  
        aria-describedby="assoc_elevator_notes_counter" aria-required="false" data-optional="true"></textarea>  
      <p id="assoc_elevator_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
        <span data-counter>0</span>/200  
      </p>  
    </div>  
  
    <div>  
      <label class="label" for="assoc_security">Security</label>  
      <select id="assoc_security" name="assoc_security" class="select" autocomplete="off" aria-required="false" data-optional="true"  
              aria-describedby="assoc_security_hint">  
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
      <textarea id="assoc_security_notes" name="assoc_security_notes" rows="2" class="textarea"  
        maxlength="200" placeholder="Cameras, intercoms, access control, gate/door hardware."  
        aria-describedby="assoc_security_notes_counter" aria-required="false" data-optional="true"></textarea>  
      <p id="assoc_security_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
        <span data-counter>0</span>/200  
      </p>  
    </div>  
  
    <div class="md:col-span-2">  
      <label class="label" for="assoc_overall_condition_summary">  
        Overall Condition of Common Areas and Amenities — Summary  
      </label>  
      <textarea id="assoc_overall_condition_summary" name="assoc_overall_condition_summary" rows="3" class="textarea"  
        maxlength="500" placeholder="Provide a concise summary, noting significant observations, deferred maintenance, or safety concerns."  
        aria-describedby="assoc_overall_condition_summary_hint assoc_overall_condition_summary_counter"  
        aria-required="false" data-optional="true"></textarea>  
      <p id="assoc_overall_condition_summary_hint" class="hint text-xs text-gray-500 mt-1">  
        Suggested: 150–400 characters.  
      </p>  
      <p id="assoc_overall_condition_summary_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
        <span data-counter>0</span>/500  
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
            aria-expanded="false"  
          >  
            <option value="">Select Yes/No</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="N/A">N/A</option>  
          </select>  
          <p id="hazards_hint" class="hint text-xs text-gray-500 mt-1">Notes recommended if you select Yes.</p>  
        </div>  
  
        <div id="hazards_notes_wrap" class="hidden" role="region" aria-live="polite">  
          <label class="label text-sm" for="hazards_notes">Notes / Details</label>  
          <textarea  
            id="hazards_notes"  
            name="hazards_notes"  
            rows="2"  
            class="textarea"  
            placeholder="e.g., Missing handrail at front steps; loose paver at walkway."  
            maxlength="200"  
            aria-describedby="hazards_notes_counter"  
          ></textarea>  
          <p id="hazards_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
            <span data-counter>0</span>/200  
          </p>  
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
            aria-expanded="false"  
          >  
            <option value="">Select Yes/No</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="N/A">N/A</option>  
          </select>  
          <p id="code_violations_hint" class="hint text-xs text-gray-500 mt-1">Notes recommended if you select Yes.</p>  
        </div>  
  
        <div id="code_violations_notes_wrap" class="hidden" role="region" aria-live="polite">  
          <label class="label text-sm" for="code_violations_notes">Notes / Details</label>  
          <textarea  
            id="code_violations_notes"  
            name="code_violations_notes"  
            rows="2"  
            class="textarea"  
            placeholder="e.g., Non-GFCI outlets near hose bib; exposed wiring at A/C disconnect."  
            maxlength="200"  
            aria-describedby="code_violations_notes_counter"  
          ></textarea>  
          <p id="code_violations_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
            <span data-counter>0</span>/200  
          </p>  
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
            aria-expanded="false"  
          >  
            <option value="">Select Yes/No</option>  
            <option value="Yes">Yes</option>  
            <option value="No">No</option>  
            <option value="N/A">N/A</option>  
          </select>  
          <p id="ext_odors_hint" class="hint text-xs text-gray-500 mt-1">Notes recommended if you select Yes.</p>  
        </div>  
  
        <div id="ext_odors_notes_wrap" class="hidden" role="region" aria-live="polite">  
          <label class="label text-sm" for="ext_odors_notes">Notes / Details</label>  
          <textarea  
            id="ext_odors_notes"  
            name="ext_odors_notes"  
            rows="2"  
            class="textarea"  
            placeholder="e.g., Noticeable petroleum odor near alley on windy days."  
            maxlength="200"  
            aria-describedby="ext_odors_notes_counter"  
          ></textarea>  
          <p id="ext_odors_notes_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
            <span data-counter>0</span>/200  
          </p>  
        </div>  
      </div>  
    </div>  
  
    <div class="border border-gray-100 p-4 rounded-xl">  
      <label class="label" for="health_safety_summary">Health and Safety Summary (optional)</label>  
      <textarea  
        id="health_safety_summary"  
        name="health_safety_summary"  
        rows="3"  
        class="textarea"  
        maxlength="500"  
        placeholder="Concise summary of any critical concerns, locations, and immediate recommendations."  
        aria-describedby="health_safety_summary_hint health_safety_summary_counter"  
      ></textarea>  
      <p id="health_safety_summary_hint" class="hint text-xs text-gray-500 mt-1">Suggested: 120–300 characters.</p>  
      <p id="health_safety_summary_counter" class="hint text-xs text-gray-500 mt-1" aria-live="polite">  
        <span data-counter>0</span>/500  
      </p>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<div class="mt-6" id="inspector_actions">  
  <!-- Central status element used by JS setStatus(...) -->  
  <p id="status"  
     class="text-sm text-gray-600 mb-3"  
     role="status"  
     aria-live="polite">  
    Complete all required fields to <strong>Generate PDF</strong>, or <strong>Clear Form</strong> to start over.  
  </p>  
  
  <div id="exterior-actions" data-actions class="flex items-center justify-between gap-3">  
    <button type="button"  
            id="clearFormBtn"  
            class="btn-red inline-flex items-center rounded-xl px-4 py-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"  
            aria-describedby="clear_hint">  
      Clear Form  
    </button>  
  
    <!-- Optional inline status for this section; JS doesn't target it, so keep as-is -->  
    <p data-status="pcr-exterior" class="text-sm text-gray-500" aria-live="polite"></p>  
  
    <button type="button"  
            id="btnGenerateBottom"  
            class="btn-blue inline-flex items-center rounded-xl px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"  
            aria-describedby="generate_hint">  
      Generate PDF  
    </button>  
  </div>  
  <p id="status" class="text-sm text-gray-500" aria-live="polite"></p>  
  <p id="clear_hint" class="sr-only">Clears all inputs in the form.</p>  
  <p id="generate_hint" class="sr-only">Validates required fields and triggers PDF generation.</p>  
</div>  
  
</form>  
</main>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
document.addEventListener('DOMContentLoaded', () => {  
  /* =========================  
     Main form and action elements  
     ========================= */  
  const form     = document.getElementById('formVacantLot');  
  const genBtn   = document.getElementById('btnGenerateBottom');  
  const clearBtn = document.getElementById('clearFormBtn');  
  const statusEl = document.getElementById('status')   
               || document.querySelector('[data-status="pcr-exterior"]');  
  
  if (!form) {  
    console.error('Form #formVacantLot not found. Halting script.');  
    return;  
  }  
  
  /* =========================  
     Global Helpers  
     ========================= */  
    
  const $  = (s, c=form) => c.querySelector(s);  
  const $$ = (s, c=form) => Array.from(c.querySelectorAll(s));  
  
  function setStatus(msg, kind = 'info'){  
    if (!statusEl) return;  
    statusEl.textContent = msg;  
    statusEl.dataset.kind = kind;  
  }  
  
  function setElementVisibility(element, show) {  
    if (element) element.classList.toggle('hidden', !show);  
  }  
  
  const isEmpty = (v) => v==null || String(v).trim()==='';  
  /* =========================  
     jsPDF Loader (single-flight)  
     ========================= */  
  const JSPDF_URL = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';  
  let _pdfReady = false;  
  let _pdfLoadPromise = null;  
  
  function loadJsPdfOnce(){  
    if (_pdfReady) return Promise.resolve(true);  
    if (_pdfLoadPromise) return _pdfLoadPromise;  
  
    _pdfLoadPromise = new Promise((resolve, reject)=>{  
      // already present?  
      if (window.jspdf && typeof window.jspdf.jsPDF === 'function') {  
        if (!window.jsPDF) window.jsPDF = window.jspdf.jsPDF;  
        _pdfReady = true;  
        return resolve(true);  
      }  
      // existing <script>?  
      const existing = document.querySelector(`script[src="${JSPDF_URL}"]`);  
      if (existing){  
        const check = () => {  
          if (window.jspdf && window.jspdf.jsPDF) {  
            if (!window.jsPDF) window.jsPDF = window.jspdf.jsPDF;  
            _pdfReady = true;  
            resolve(true);  
          } else {  
            setTimeout(check, 50);  
          }  
        };  
        return check();  
      }  
      // insert  
      const s = document.createElement('script');  
      s.src = JSPDF_URL;  
      s.async = true;  
      s.onload = () => {  
        if (window.jspdf && window.jspdf.jsPDF && !window.jsPDF) {  
          window.jsPDF = window.jspdf.jsPDF;  
        }  
        _pdfReady = true;  
        resolve(true);  
      };  
      s.onerror = () => reject(new Error('Failed to load jsPDF'));  
      document.head.appendChild(s);  
    });  
  
    return _pdfLoadPromise;  
  }  
  
  /* =========================  
     Conditional Explain Toggles (show/hide)  
     ========================= */  
  const explainRules = [  
    { controller: '#use_consistent',              wrapper: '#use_consistent_explain_wrapper',      triggers: ['No'] },  
    { controller: '#env_flood_yn',                wrapper: '#env_flood_explain_wrapper',           triggers: ['Yes (Known Flood Zone or Drainage Issue)'] },  
    { controller: '#env_contamination_yn',   
       wrapper: '#env_contamination_explain_wrapper',   triggers: ['Yes (High Risk - recommend Phase I)'] },  
    { controller: '#pr_liens_yn',                 wrapper: '#pr_liens_explain_wrapper',            triggers: ['Yes'] },  
    { controller: '#pr_licenses_yn',              wrapper: '#pr_licenses_explain_wrapper',         triggers: ['Yes'] },  
    { controller: '#pr_violations_yn',       
       wrapper: '#pr_violations_explain_wrapper',       triggers: ['Yes'] },  
    { controller: '#pr_flood_known_yn',           wrapper: '#pr_flood_explain_wrapper',            triggers: ['Yes'] },  
    { controller: '#site_grounds_rating',         wrapper: '#site_grounds_explain_wrapper',        triggers: ['Fair','Poor','Damaged'] },  
    { controller: '#hazards_yn',                  wrapper: '#hazards_notes_wrap',                  triggers: ['Yes'] },  
    { controller: '#code_violations_yn',          wrapper: '#code_violations_notes_wrap',          triggers: ['Yes'] },  
    { controller: '#ext_odors_yn',                wrapper: '#ext_odors_notes_wrap',                triggers: ['Yes'] },  
  ];  
  function applyExplainRule(rule){  
    const ctl = document.querySelector(rule.controller);  
    const wrap = document.querySelector(rule.wrapper);  
    if (!ctl || !wrap) return;  
    const shouldShow = rule.triggers.includes(ctl.value);  
    setElementVisibility(wrap, shouldShow);  
  
    const controlled = wrap.querySelector('textarea, input, select');  
    if (controlled) controlled.required = shouldShow;  
  }  
  
  function wireExplainToggles(){  
    explainRules.forEach(rule => {  
      const ctl = document.querySelector(rule.controller);  
      if (!ctl) return;  
      ctl.addEventListener('change', () => {  
        applyExplainRule(rule);  
        queueAutoSave(); // keep autosave in sync when wrapper visibility changes  
      });  
      applyExplainRule(rule);  
    });  
  }  
  
  /* =========================  
     Validation & Error UI  
     ========================= */  
  function clearFieldError(el){  
    if (!el) return;  
    el.removeAttribute('aria-invalid');  
    el.classList.remove('ring-2','ring-red-500','border-red-500');  
    const wrapper = el.closest('div');  
    const p = wrapper?.querySelector?.('.field-error');  
    if (p) p.remove();  
  }  
  
  function clearAllErrors(){  
    $$('[aria-invalid="true"]').forEach(clearFieldError);  
    $$('.field-error').forEach(n=>n.remove());  
  }  
  
  function setFieldError(el, message){  
    if (!el) return;  
    el.setAttribute('aria-invalid','true');  
    el.classList.add('ring-2','ring-red-500','border-red-500');  
  
    let parent = el.parentElement;  
    if (!parent) return;  
  
    let msg = parent.querySelector('.field-error');  
    if (!msg){  
      msg = document.createElement('p');  
      msg.className = 'field-error text-xs text-red-600 mt-1';  
      parent.appendChild(msg);  
    }  
    msg.textContent = message || 'This field is required.';  
  }  
  
  function checkConditionalRequirement(controller, controlled, triggers, errors) {  
    if (!controller || !controlled) return;  
    if (controller.closest('.hidden')) {  
      controlled.required = false;  
      return;  
    }  
    const match = triggers.includes(controller.value);  
    controlled.required = match;  
    if (match && isEmpty(controlled.value)) errors.push(controlled);  
  }  
  
  function validateRequired(){  
    clearAllErrors();  
    const errors = [];  
    const poor = ['Fair', 'Poor', 'Damaged'];  
  
    // Conditional requirements (explainer fields)  
    checkConditionalRequirement($('#use_consistent'), $('#use_consistent_explain'), ['No'], errors);  
    checkConditionalRequirement($('#env_flood_yn'), $('#env_flood_explain'), ['Yes (Known Flood Zone or Drainage Issue)'], errors);  
    checkConditionalRequirement($('#env_contamination_yn'), $('#env_contamination_explain'), ['Yes (High Risk - recommend Phase I)'], errors);  
    checkConditionalRequirement($('#pr_liens_yn'), $('#pr_liens_explain'), ['Yes'], errors);  
    checkConditionalRequirement($('#pr_licenses_yn'), $('#pr_licenses_explain'), ['Yes'], errors);  
    checkConditionalRequirement($('#pr_violations_yn'), $('#pr_violations_explain'), ['Yes'], errors);  
    checkConditionalRequirement($('#pr_flood_known_yn'), $('#pr_flood_explain'), ['Yes'], errors);  
    checkConditionalRequirement($('#site_grounds_rating'), $('#site_grounds_explain'), poor, errors);  
    checkConditionalRequirement($('#hazards_yn'), $('#hazards_notes'), ['Yes'], errors);  
    checkConditionalRequirement($('#code_violations_yn'), $('#code_violations_notes'), ['Yes'], errors);  
    checkConditionalRequirement($('#ext_odors_yn'), $('#ext_odors_notes'), ['Yes'], errors);  
    // Standard required fields  
    const required = $$('input[required], select[required], textarea[required]');  
    const groups = new Map();  
    for (const el of required){  
      if (el.closest('.hidden')) continue;  
      if (el.disabled) continue;  
      if ((el.type==='radio'||el.type==='checkbox') && el.name){  
        if (!groups.has(el.name)) groups.set(el.name, []);  
        groups.get(el.name).push(el);  
      } else {  
        if (isEmpty(el.value)) errors.push(el);  
      }  
    }  
    for (const [_, group] of groups){  
      if (!group.some(el=>el.checked)) errors.push(group[0]);  
    }  
  
    if (errors.length){  
      const seen = new Set();  
      const uniqueErrors = errors.filter(el => (seen.has(el) ? false : (seen.add(el), true)));  
      for (const el of uniqueErrors){  
        let label = 'Field';  
        const labelEl = form.querySelector(`label[for="${el.id}"]`);  
        if (labelEl) {  
          const clone = labelEl.cloneNode(true);  
          clone.querySelector('span.text-red-600')?.remove();  
          clone.querySelector('span.sr-only')?.remove();  
          label = clone.textContent.trim() || label;  
        }  
        setFieldError(el, `${label} is required.`);  
      }  
      const first = uniqueErrors[0];  
      first.scrollIntoView({behavior:'smooth', block:'center'});  
      first.focus({preventScroll:true});  
      return { ok:false, count: uniqueErrors.length };  
    }  
    return { ok:true, count:0 };  
  }  
  
  /* =========================  
     PDF Generation  
     ========================= */  
  const A4_WIDTH_MM = 210;  
  const A4_HEIGHT_MM = 297;  
  const MARGIN_MM = 18;  
  const FOOTER_HEIGHT_MM = 12;  
  const LINE_HEIGHT_MM = 5;  
  const ROW_GAP_MM = 3;  
  
  // --- [START] REPLACED CONSTANTS ---  
  const SECTION_GAP_MM = 5;  
  const BULLET_INDENT_MM = 5;  
  // CHANGED: Use 10pt body font to match other reports  
  const FONT_SIZE_BODY = 10;  
  const GAP_SPACES = '     ';  
  const TITLE_FONT_SIZE = 18;  
  // CHANGED: Use 12pt header font to match other reports  
  const HEADER_FONT_SIZE = 12;  
  // CHANGED: Use light gray header (rgb(240,240,240))  
  const HEADER_BG_COLOR = '#F0F0F0';  
  // CHANGED: Use black header text  
  const HEADER_TEXT_COLOR = '#000000';  
  // CHANGED: Use gray label text (rgb(60,60,60))  
  const LABEL_TEXT_COLOR = '#3C3C3C';  
  // CHANGED: Use dark gray value text (rgb(20,20,20))  
  const VALUE_TEXT_COLOR = '#141414';  
    
  const MARGIN = { top: MARGIN_MM, right: MARGIN_MM, bottom: MARGIN_MM, left: MARGIN_MM };  
  // --- [END] REPLACED CONSTANTS ---  
  
  const CONTENT_WIDTH = A4_WIDTH_MM - MARGIN.left - MARGIN.right;  
  const PAGE_CONTENT_HEIGHT = A4_HEIGHT_MM - MARGIN.top - MARGIN.bottom - FOOTER_HEIGHT_MM;  
  const PT_TO_MM = 25.4 / 72;  
  
  function hexToRgb(hex) {  
    const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);  
    if (!m) return { r:0,g:0,b:0 };  
    return { r: parseInt(m[1],16), g: parseInt(m[2],16), b: parseInt(m[3],16) };  
  }  
  function setFillHex(doc, hex){ const {r,g,b}=hexToRgb(hex); doc.setFillColor(r,g,b); }  
  function setTextHex(doc, hex){ const {r,g,b}=hexToRgb(hex); doc.setTextColor(r,g,b); }  
  
  function addFooter(doc, currentPage, totalPages) {  
    const pageCount = totalPages || doc.internal.getNumberOfPages();  
    doc.setFontSize(9);  
    doc.setFont('helvetica', 'italic');  
    const text = `Page ${currentPage} of ${pageCount}`;  
    const x = A4_WIDTH_MM - MARGIN.right - doc.getTextWidth(text);  
    const y = A4_HEIGHT_MM - MARGIN.bottom + 3;  
    doc.text(text, x, y);  
    doc.setFont('helvetica', 'normal');  
    doc.setFontSize(FONT_SIZE_BODY);  
  }  
  function ensureSpace(doc, neededHeight, state) {  
    if (state.y + neededHeight > MARGIN.top + PAGE_CONTENT_HEIGHT) {  
      addFooter(doc, state.currentPage, doc.internal.getNumberOfPages());  
      doc.addPage();  
      state.y = MARGIN.top;  
      state.currentPage++;  
    }  
  }  
  function drawLines(doc, lines, x, yStart, state) {  
    let y = yStart;  
    for (const line of lines) {  
      if (y + LINE_HEIGHT_MM > MARGIN.top + PAGE_CONTENT_HEIGHT) {  
        addFooter(doc, state.currentPage, doc.internal.getNumberOfPages());  
        doc.addPage();  
        state.currentPage++;  
        y = MARGIN.top;  
      }  
      doc.text(String(line), x, y);  
      y += LINE_HEIGHT_MM;  
    }  
    return y + ROW_GAP_MM;  
  }  
    
  // --- [START] REPLACED addSectionHeader ---  
  function addSectionHeader(doc, title, state) {  
    const headerText = (title || 'UNTITLED SECTION'); // No longer UPPERCASE  
      
    // CHANGED: Total height is 10mm + gap  
    const totalHeight = 10 + SECTION_GAP_MM;  
    ensureSpace(doc, totalHeight, state);  
  
    // CHANGED: Draw simple gray rect  
    setFillHex(doc, HEADER_BG_COLOR);  
    doc.rect(MARGIN.left, state.y, CONTENT_WIDTH, 10, 'F');  
  
    // CHANGED: Style and position text  
    doc.setFont('helvetica', 'bold');  
    doc.setFontSize(HEADER_FONT_SIZE); // Now 12pt  
    setTextHex(doc, HEADER_TEXT_COLOR); // Now black  
    // Position text inside the bar (4mm padding)  
    doc.text(headerText, MARGIN.left + 4, state.y + 6.5, { baseline: 'middle' });  
  
    // CHANGED: Set y position and reset styles  
    state.y += 10 + SECTION_GAP_MM; // Matches 12mm advance from other reports  
    doc.setFont('helvetica', 'normal');  
    doc.setFontSize(FONT_SIZE_BODY); // Now 10pt  
    doc.setTextColor(0,0,0);  
  }  
  // --- [END] REPLACED addSectionHeader ---  
  
  // --- [START] REPLACED addKV ---  
  function addKV(doc, label, value, state) {  
    const safeValue = value == null ? '' : String(value);  
    const labelText = label ? `${label}:` : '';  
    if (!safeValue.trim()) return;  
  
    // CHANGED: Use fixed 50mm indent for value  
    const xLabel = MARGIN.left;  
    const xValue = MARGIN.left + 50;  
    // CHANGED: Max width based on fixed indent  
    const valueMaxWidth = Math.max(10, CONTENT_WIDTH - 50);  
  
    const lines = doc.splitTextToSize(safeValue, valueMaxWidth);  
    const neededHeight = Math.max(LINE_HEIGHT_MM, lines.length * LINE_HEIGHT_MM) + ROW_GAP_MM;  
    ensureSpace(doc, neededHeight, state);  
      
    // CHANGED: Apply 10pt font and label/value colors  
    doc.setFontSize(10); // Explicitly 10pt  
    doc.setFont('helvetica', 'bold');   
    setTextHex(doc, LABEL_TEXT_COLOR); // Gray label  
    doc.text(labelText, xLabel, state.y);  
  
    doc.setFont('helvetica', 'normal');  
    setTextHex(doc, VALUE_TEXT_COLOR); // Dark gray value  
    state.y = drawLines(doc, lines, xValue, state.y, state);  
      
    doc.setFontSize(FONT_SIZE_BODY); // Reset to body font size  
    doc.setTextColor(0,0,0); // Reset to black  
  }  
  // --- [END] REPLACED addKV ---  
  
  // --- [START] REPLACED addParagraph ---  
  function addParagraph(doc, text, state, opts = {}) {  
    const safe = text == null ? '' : String(text).trim();  
    if (!safe) return;  
      
    const prevStyle = doc.getFont().fontStyle;  
    if (opts.fontStyle) doc.setFont('helvetica', opts.fontStyle);  
      
    // CHANGED: Set text color to match value text  
    setTextHex(doc, VALUE_TEXT_COLOR);  
  
    const lines = doc.splitTextToSize(safe, CONTENT_WIDTH);  
    const needed = (lines.length * LINE_HEIGHT_MM) + ROW_GAP_MM;  
    ensureSpace(doc, needed, state);  
    state.y = drawLines(doc, lines, MARGIN.left, state.y, state);  
      
    if (opts.fontStyle) doc.setFont('helvetica', prevStyle || 'normal');  
      
    // CHANGED: Reset text color  
    doc.setTextColor(0,0,0);  
  }  
  // --- [END] REPLACED addParagraph ---  
  
  // --- [START] REPLACED addBullets ---  
  function addBullets(doc, title, items, state) {  
    const list = Array.isArray(items) ? items.filter(s => (s ?? '').toString().trim()) : [];  
    if (!list.length) return;  
      
    const bullet = '• ';  
    const bulletWidth = doc.getTextWidth(bullet);  
    const maxW = CONTENT_WIDTH - bulletWidth - BULLET_INDENT_MM;  
  
    // CHANGED: Use gray label color for title  
    doc.setFont('helvetica', 'bold');  
    setTextHex(doc, LABEL_TEXT_COLOR);  
    const titleLines = doc.splitTextToSize(title, CONTENT_WIDTH);  
    let needed = (titleLines.length * LINE_HEIGHT_MM) + (ROW_GAP_MM/2);  
  
    // CHANGED: Use dark gray value color for items  
    doc.setFont('helvetica', 'normal');  
    setTextHex(doc, VALUE_TEXT_COLOR);  
    const split = list.map(t => doc.splitTextToSize(String(t), maxW));  
    split.forEach(lines => needed += (lines.length * LINE_HEIGHT_MM) + (ROW_GAP_MM/2));  
    needed += (ROW_GAP_MM/2);  
    ensureSpace(doc, needed, state);  
  
    // Draw Title  
    doc.setFont('helvetica', 'bold');  
    setTextHex(doc, LABEL_TEXT_COLOR);  
    state.y = drawLines(doc, titleLines, MARGIN.left, state.y, state) - ROW_GAP_MM;  
    state.y += (ROW_GAP_MM/2);  
  
    // Draw Items  
    doc.setFont('helvetica', 'normal');  
    setTextHex(doc, VALUE_TEXT_COLOR);  
    split.forEach(lines => {  
      doc.text(bullet, MARGIN.left + BULLET_INDENT_MM, state.y);  
      state.y = drawLines(doc, lines, MARGIN.left + bulletWidth + BULLET_INDENT_MM, state.y, state) - ROW_GAP_MM;  
      state.y += (ROW_GAP_MM/2);  
    });  
    state.y += (ROW_GAP_MM/2);  
      
    // CHANGED: Reset color  
    doc.setTextColor(0,0,0);  
  }  
  // --- [END] REPLACED addBullets ---  
  
  function formatYN(formData, baseName) {  
    const primary =  
      formData.get(`${baseName}_yn`) ??  
      formData.get(`${baseName}`) ??  
      formData.get(`${baseName}_rating`) ?? '';  
    const notes =  
      formData.get(`${baseName}_notes`) ??  
      formData.get(`${baseName}_explain`) ?? '';  
    const other = formData.get(`${baseName}_other`) ?? '';  
  
    const parts = [];  
    if (primary) parts.push(primary);  
    if (other)   parts.push(other);  
    if (notes)   parts.push(notes);  
    return parts.join(' – ');  
  }  
  
  async function handleGeneratePdf(formEl) {  
    if (genBtn) genBtn.disabled = true;  
    const res = validateRequired();  
    if (!res.ok){  
      setStatus(`Please fix ${res.count} required field(s).`, 'error');  
      if (genBtn) genBtn.disabled = false;  
      return;  
    }  
  
    setStatus('Loading PDF engine…', 'info');  
    try {  
      await loadJsPdfOnce();  
    } catch (e) {  
      console.error('jsPDF Load Error:', e);  
      setStatus('Error: PDF library (jsPDF) not loaded.', 'error');  
      if (genBtn) genBtn.disabled = false;  
      return;  
    }  
  
    const { jsPDF } = window.jspdf;  
    const formData = new FormData(formEl);  
    const get = (name) => formData.get(name) || '';  
    const isAssociation = ['Condominium Ownership','Fee Simple - Subject to HOA','Cooperative (Co-Op) Ownership'].includes(get('ownership_type'));  
    const data = {  
      filename: `${get('address') || 'Report'}_VacantLot_Report`,  
      parcelId: get('parcel_id'),  
      address: `${get('address')}${get('lot_number') ? ' #' + get('lot_number') : ''}`,  
      cityStateZip: `${get('city')}, ${get('state')} ${get('zip')}`,  
      county: get('county'),  
      schoolDistrict: get('school_district'),  
      propertyType: get('property_type'),  
      ownership: get('ownership_type'),  
      occupancy: get('occupancy'),  
      legalDescription: get('legal_description'),  
      site: {  
        source: get('site_source'),  
        lotSize: get('lot_size'),  
        shape: get('lot_shape'),  
        topography: get('topography'),  
        zoning: get('zoning'),  
        consistent: formatYN(formData, 'use_consistent'),  
        utilitiesNotes: get('utilities_notes'),  
        notes: get('site_notes')  
      },  
      compliance: {  
        liens: formatYN(formData, 'pr_liens'),  
        activeLicenses: formatYN(formData, 'pr_licenses'),  
        violations: formatYN(formData, 'pr_violations'),  
        inFlood: formatYN(formData, 'pr_flood_known')  
      },  
      exterior: {  
        overall: get('overall_condition_rating'),  
        siteGrounds: formatYN(formData, 'site_grounds')  
      },  
      environmental: {  
        soil: get('env_soil_stability'),  
        flood: formatYN(formData, 'env_flood'),  
        contamination: formatYN(formData, 'env_contamination')  
      },  
      health: {  
        hazards: formatYN(formData, 'hazards'),  
        violations: formatYN(formData, 'code_violations'),  
        odors: formatYN(formData, 'ext_odors'),  
        summary: get('health_safety_summary')  
      },  
      association: isAssociation ? {  
        name: get('assoc_name'),  
        senior: get('assoc_senior_only'),  
        summary: get('assoc_detail'),  
        address: get('assoc_contact_address'),  
        phone: get('assoc_contact_phone'),  
        fee: get('assoc_fee_amount'),  
        feeFreq: get('assoc_fee_freq'),  
        feeIncludes: get('assoc_fee_includes_text'),  
        parking: get('assoc_parking_type'),  
        pool: get('assoc_pool'),  
        amenities: get('assoc_common_amenities'),  
        notes: get('assoc_notes')  
      } : null,  
      commonArea: isAssociation ? {  
        overall: get('assoc_overall_condition'),  
        common: formatYN(formData, 'assoc_common_areas'),  
        parking: formatYN(formData, 'assoc_parking'),  
        pool: formatYN(formData, 'assoc_pool'),  
        amenities: formatYN(formData, 'assoc_extra_amenities'),  
        elevator: formatYN(formData, 'assoc_elevator'),  
        security: formatYN(formData, 'assoc_security'),  
        summary: get('assoc_overall_condition_summary')  
      } : null  
    };  
    try {  
      setStatus('Generating PDF…', 'info');  
      const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });  
      const state = { y: MARGIN.top, currentPage: 1 };  
      doc.setFont('helvetica','normal');  
      doc.setFontSize(FONT_SIZE_BODY);  
      doc.setLineHeightFactor(LINE_HEIGHT_MM / (FONT_SIZE_BODY * PT_TO_MM));  
        
      // Title  
      const titleText = 'Vacant Lot Feasibility Report';  
      doc.setFont('helvetica','bold'); doc.setFontSize(TITLE_FONT_SIZE);  
      const titleH = (doc.getLineHeight(titleText) / doc.internal.scaleFactor) + SECTION_GAP_MM + 3;  
      ensureSpace(doc, titleH, state);  
      doc.text(titleText, A4_WIDTH_MM/2, state.y, { align:'center', baseline:'top' });  
      state.y += titleH;  
      doc.setFont('helvetica','normal'); doc.setFontSize(FONT_SIZE_BODY); doc.setTextColor(0,0,0);  
  
      // General Property Info  
      addSectionHeader(doc, 'General Property Info', state);  
      addKV(doc, 'Parcel ID', data.parcelId, state);  
      addKV(doc, 'Property Address', data.address, state);  
      addKV(doc, 'City, State, ZIP', data.cityStateZip, state);  
      addKV(doc, 'County', data.county, state);  
      addKV(doc, 'School District', data.schoolDistrict, state);  
      addKV(doc, 'Vacant Land/Lot Type', data.propertyType, state);  
      addKV(doc, 'Ownership Type', data.ownership, state);  
      addKV(doc, 'Current Use Status', data.occupancy, state);  
      addParagraph(doc, data.legalDescription, state);  
  
      // Site Characteristics  
      addSectionHeader(doc, 'Site Characteristics', state);  
      addKV(doc, 'Source', data.site?.source, state);  
      addKV(doc, 'Lot Size', data.site?.lotSize, state);  
      addKV(doc, 'Lot Shape', data.site?.shape, state);  
      addKV(doc, 'Topography', data.site?.topography, state);  
      addKV(doc, 'Zoning', data.site?.zoning, state);  
      addKV(doc, 'Use Consistent?', data.site?.consistent, state);  
      addParagraph(doc, data.site?.notes, state);  
        
      // Utility Availability (checkbox groups)  
      addSectionHeader(doc, 'Utility Availability', state);  
      const utilitySection = document.getElementById('utility_availability_section');  
      if (utilitySection) {  
        const fieldsets = utilitySection.querySelectorAll('fieldset');  
        fieldsets.forEach(fs => {  
          const legend = fs.querySelector('legend');  
          if (!legend) return;  
          const title = legend.innerText.trim();  
          const items = Array.from(fs.querySelectorAll('input[type="checkbox"]:checked'))  
            .map(cb => cb.closest('label')?.innerText?.trim() || cb.value);  
          if (items.length) addBullets(doc, title, items, state);  
        });  
        addParagraph(doc, data.site.utilitiesNotes, state);  
      }  
  
      // Association & Common Areas  
      if (data.association) {  
        addSectionHeader(doc, 'Association and Common Area Info', state);  
        addKV(doc, 'Association Name', data.association.name, state);  
        addKV(doc, 'Senior-Only', data.association.senior, state);  
        addKV(doc, 'Contact Address', data.association.address, state);  
        addKV(doc, 'Contact Phone', data.association.phone, state);  
        addKV(doc, 'Association Fee', data.association.fee, state);  
        addKV(doc, 'Fee Frequency', data.association.feeFreq, state);  
        addKV(doc, 'Fee Includes', data.association.feeIncludes, state);  
        addKV(doc, 'Parking Type', data.association.parking, state);  
        addKV(doc, 'Community Pool', data.association.pool, state);  
        addKV(doc, 'Common Amenities', data.association.amenities, state);  
        addParagraph(doc, data.association.summary, state);  
        addParagraph(doc, data.association.notes, state);  
          
        addSectionHeader(doc, 'Common Area Inspection', state);  
        addKV(doc, 'Overall Condition', data.commonArea.overall, state);  
        addKV(doc, 'Common Areas', data.commonArea.common, state);  
        addKV(doc, 'Parking Area', data.commonArea.parking, state);  
        addKV(doc, 'Pool Area', data.commonArea.pool, state);  
        addKV(doc, 'Extra Amenities', data.commonArea.amenities, state);  
        addKV(doc, 'Elevator', data.commonArea.elevator, state);  
        addKV(doc, 'Security', data.commonArea.security, state);  
        addParagraph(doc, data.commonArea.summary, state);  
      }  
  
      // Public Records  
      addSectionHeader(doc, 'Public Records and Compliance', state);  
      addKV(doc, 'Known Liens/Encroachments?', data.compliance?.liens, state);  
      addKV(doc, 'Active Licenses?', data.compliance?.activeLicenses, state);  
      addKV(doc, 'Known Violations?', data.compliance?.violations, state);  
      addKV(doc, 'In Flood Zone?', data.compliance?.inFlood, state);  
  
      // Site Condition  
      addSectionHeader(doc, 'Site Condition', state);  
      addKV(doc, 'Overall Site Condition', data.exterior?.overall, state);  
      addKV(doc, 'I. Site and Grounds', data.exterior?.siteGrounds, state);  
        
      // Environmental  
      addSectionHeader(doc, 'Environmental & Site Feasibility', state);  
      addKV(doc, 'Soil Stability', data.environmental?.soil, state);  
      addKV(doc, 'Flood/Drainage', data.environmental?.flood, state);  
      addKV(doc, 'Contamination Risk', data.environmental?.contamination, state);  
  
      // Health & Safety  
      addSectionHeader(doc, 'Health and Safety', state);  
      addKV(doc, 'Visible Hazards?', data.health?.hazards, state);  
      addKV(doc, 'Visible Code Violations?', data.health?.violations, state);  
      addKV(doc, 'Exterior Odors Present?', data.health?.odors, state);  
      addParagraph(doc, data.health?.summary, state);  
        
      const total = doc.internal.getNumberOfPages();  
      addFooter(doc, total, total);  
  
      const safeFilename = (data.filename || 'VacantLot_Report').replace(/[^a-z0-9\-_ ]/gi, '_') + '.pdf';  
      doc.save(safeFilename);  
      setStatus('PDF generated successfully.', 'ok');  
    } catch(err) {  
      console.error('PDF Generation Error:', err);  
      setStatus(`PDF failed: ${err.message}`, 'error');  
    } finally {  
      if (genBtn) genBtn.disabled = false;  
    }  
  }  
  
  /* =========================  
     Conditional Logic: Ownership → HOA sections  
     ========================= */  
  function toggleAssociationSections(){  
    const select = document.getElementById('ownership_type');  
    if (!select) return;  
  
    const show = [  
      'Condominium Ownership',  
      'Fee Simple - Subject to HOA',  
      'Cooperative (Co-Op) Ownership'  
    ].includes(select.value);  
  
    const sectionIds = [  
      'association_common_area_info',  
      'assoc_access_condition_section',  
    ];  
  
    sectionIds.forEach(id => {  
      const section = document.getElementById(id);  
      if (!section) return;  
  
      setElementVisibility(section, show);  
  
      // keep required attributes in sync  
      section.querySelectorAll('input, select, textarea').forEach(field => {  
        if (field.dataset.wasRequired == null) {  
          field.dataset.wasRequired = String(field.required);  
        }  
        const wasRequired = field.dataset.wasRequired === 'true';  
        const isOptional = field.dataset.optional === 'true' || field.getAttribute('aria-required') === 'false';  
        field.required = show && wasRequired && !isOptional;  
      });  
    });  
  }  
  
  /* =========================  
     AUTOSAVE (localStorage; debounced)  
     ========================= */  
  const STORAGE_KEY = 'vacantLotFeasibility:v1';  
  let saveTimer = null;  
  
  function fieldKey(el){  
    // Prefer stable id; else fallback to name;  
    // include type to disambiguate  
    const base = el.id || el.name;  
    return base ? `${base}::${el.type || 'text'}` : null;  
  }  
  
  function serializeForm(){  
    const data = { _meta:{ ts: Date.now(), path: location.pathname } };  
    $$('input, select, textarea').forEach(el => {  
      const key = fieldKey(el);  
      if (!key) return;  
  
      if (el.type === 'checkbox'){  
        // store checked state  
        data[key] = { t:'chk', v: el.checked };  
      } else if (el.type === 'radio'){  
        if (el.name){ // store selected value per radio name  
          const sel = form.querySelector(`input[type="radio"][name="${el.name}"]:checked`);  
          if (sel){  
            data[`${el.name}::radio`] = { t:'rad', v: sel.value };  
          }  
        }  
      } else if (el.tagName === 'SELECT' && el.multiple){  
        const vals = Array.from(el.selectedOptions).map(o => o.value);  
        data[key] = { t:'selm', v: vals };  
      } else {  
        data[key] = { t:'val', v: el.value };  
      }  
    });  
    return data;  
  }  
  
  function hydrateForm(data){  
    if (!data || typeof data !== 'object') return;  
    $$('input, select, textarea').forEach(el => {  
      const key = fieldKey(el);  
      if (!key) return;  
  
      // radios restored by name bucket  
      if (el.type === 'radio'){  
        const bucket = data[`${el.name}::radio`];  
        if (bucket && bucket.t === 'rad' && el.value === String(bucket.v)){  
          el.checked = true;  
        }  
        return;  
      }  
  
      const entry = data[key];  
      if (!entry) return;  
  
      switch(entry.t){  
        case 'chk':  el.checked = !!entry.v; break;  
        case 'selm':   
          if (Array.isArray(entry.v)){  
            Array.from(el.options).forEach(o => { o.selected = entry.v.includes(o.value); });  
          }  
          break;  
        case 'val':  
        default:     el.value = entry.v ?? ''; break;  
      }  
    });  
    // Re-apply any dependent visibility/required logic after hydration  
    toggleAssociationSections();  
    explainRules.forEach(applyExplainRule);  
  }  
  
  function doAutoSave(){  
    try{  
      const payload = serializeForm();  
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));  
      setStatus('Draft saved.', 'ok');  
    }catch(err){  
      console.warn('Autosave failed:', err);  
      setStatus('Autosave failed (storage full or blocked).', 'error');  
    }  
  }  
  
  function queueAutoSave(){  
    if (saveTimer) clearTimeout(saveTimer);  
    saveTimer = setTimeout(doAutoSave, 500); // debounce  
  }  
  
  function clearAutoSave(){  
    try { localStorage.removeItem(STORAGE_KEY); } catch {}  
  }  
  
  function tryRestore(){  
    try{  
      const raw = localStorage.getItem(STORAGE_KEY);  
      if (!raw) return false;  
      const data = JSON.parse(raw);  
      hydrateForm(data);  
      // fire input/change so counters and derived UI update  
      $$('select, input, textarea').forEach(el => {  
        el.dispatchEvent(new Event('change', { bubbles:true }));  
        el.dispatchEvent(new Event('input',  { bubbles:true }));  
      });  
      setStatus('Previous draft restored.', 'ok');  
      return true;  
    }catch(err){  
      console.warn('Restore failed:', err);  
      return false;  
    }  
  }  
  
  // Wire autosave listeners  
  $$('input, select, textarea').forEach(el => {  
    // Save on user edits  
    el.addEventListener('input',  queueAutoSave);  
    el.addEventListener('change', queueAutoSave);  
  });  
  /* =========================  
     Form Action Handlers  
     ========================= */  
  function handleClearForm(){  
    form.reset();  
    clearAllErrors();  
    clearAutoSave();  
    $$('select, input, textarea').forEach(el => {  
      el.dispatchEvent(new Event('change', { bubbles:true }));  
      el.dispatchEvent(new Event('input',  { bubbles:true }));  
    });  
    setStatus('Form cleared.', 'ok');  
  }  
  
  /* =========================  
     App Initialization  
     ========================= */  
  // Attempt restore first so UI reflects saved state  
  tryRestore();  
    
  genBtn?.addEventListener('click', () => handleGeneratePdf(form));  
  clearBtn?.addEventListener('click', handleClearForm);  
  
  // wire toggles  
  wireExplainToggles();  
  $('#ownership_type')?.addEventListener('change', () => {  
    toggleAssociationSections();  
    queueAutoSave();  
  });  
  toggleAssociationSections(); // initial  
  
  // Character counters  
  $$('textarea[maxlength], input[maxlength]').forEach(el => {  
    let meter = el.closest('div')?.querySelector('[data-counter]');  
    if (!meter) {  
      const describedBy = el.getAttribute('aria-describedby') || '';  
      const counterId = describedBy.split(' ').find(id => id.endsWith('_counter'));  
      if (counterId) {  
        meter = document.getElementById(counterId)?.querySelector('[data-counter]');  
      }  
    }  
    if (!meter) {  
      meter = el.parentElement?.querySelector('[data-counter]');  
    }  
    const update = () => { if (meter) meter.textContent = String(el.value.length); };  
    el.addEventListener('input', update);  
    update();  
  });  
  
  if (statusEl) setStatus('Form ready.', 'ok');  
});  
</script>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
  
<!-- wp:paragraph -->  
<p></p>  
<!-- /wp:paragraph -->  
