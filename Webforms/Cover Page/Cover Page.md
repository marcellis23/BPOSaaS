# Cover Page  
<!-- wp:html -->  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />  
  <title>BPO Cover Page – Subject Front Photo</title>  
  
  <!-- Tailwind CDN -->  
  <script src="https://cdn.tailwindcss.com"></script>  
  <script>  
    tailwind.config = {  
      theme: {  
        extend: {  
          fontFamily: {  
            sans: ['Inter', 'sans-serif'],  
          },  
        },  
      },  
    };  
  </script>  
  
  <!-- jsPDF (UMD) -->  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  
  <!-- Google Font: Inter -->  
  <link  
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"  
    rel="stylesheet"  
  />  
  
  <style>  
    /* =========================================  
       Subject Front Photo Uploader (Main)  
       ====================================== */  
    .bpo-cover-photo-upload-box {  
      border: 2px dashed #d1d5db;  
      transition: border-color 0.2s, background-color 0.2s;  
    }  
  
    .bpo-cover-photo-upload-box:hover {  
      border-color: #4f46e5;  
      background-color: #f9fafb;  
    }  
  
    .bpo-cover-photo-upload-box img {  
      display: none;  
    }  
  
    .bpo-cover-photo-upload-box.has-image {  
      border-style: solid;  
      border-color: #16a34a;  
    }  
  
    .bpo-cover-photo-upload-box.has-image img {  
      display: block;  
    }  
  
    .bpo-cover-photo-upload-box.has-image .upload-prompt {  
      display: none;  
    }  
  
    /* =========================================  
       Agent Photo & Brokerage Logo Uploaders  
       ====================================== */  
    .bpo-cover-logo-upload-box {  
      border: 2px dashed #d1d5db;  
      transition: border-color 0.2s, background-color 0.2s;  
      width: 10rem;  /* 160px */  
      height: 10rem; /* 160px */  
    }  
  
    .bpo-cover-logo-upload-box:hover {  
      border-color: #4f46e5;  
      background-color: #f9fafb;  
    }  
  
    .bpo-cover-logo-upload-box img {  
      display: none;  
    }  
  
    .bpo-cover-logo-upload-box.has-image {  
      border-style: solid;  
      border-color: #16a34a;  
      padding: 0.25rem; /* Small padding */  
    }  
  
    .bpo-cover-logo-upload-box.has-image img {  
      display: block;  
    }  
  
    .bpo-cover-logo-upload-box.has-image .upload-prompt {  
      display: none;  
    }  
  
    /* =========================================  
       Texas Minimum Font Override  
       ====================================== */  
    .tx-min-font {  
      font-size: 16px;  
      line-height: 1.4;  
    }  
  </style>  
</head>  
  
<body class="bg-gray-100 text-gray-800 font-sans">  
  <div class="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">  
    <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- =========================================  
     Section: Report Title / Report Type  
     ====================================== -->  
<section class="mb-6">  
  <label  
    for="bpoCover_reportTitle"  
    class="block text-sm font-medium text-gray-700"  
  >  
    Report Title  
  </label>  
  
  <select  
    id="bpoCover_reportTitle"  
    class="mt-1 w-full rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-2xl font-bold p-3"  
  >  
    <option value="" selected disabled>-- Select a Report Type --</option>  
  
    <!-- Property Condition Reports -->  
    <optgroup label="Property Condition Report (PCR)">  
      <option value="Vacant Lot Site Report">Vacant Lot Site Report</option>  
      <option value="Property Condition Report (PCR) - Exterior Only">  
        Property Condition Report (PCR) - Exterior Only  
      </option>  
      <option value="Property Condition Report (PCR) - Full Site">  
        Property Condition Report (PCR) - Full Site  
      </option>  
    </optgroup>  
  
    <!-- Market Analysis (CMA) -->  
    <optgroup label="Market Analysis (CMA)">  
      <option value="Market Analysis Report">Market Analysis Report</option>  
      <option value="Comparable Market Analysis - Residential Vacant Lot">  
        Comparable Market Analysis - Residential Vacant Lot  
      </option>  
      <option value="Comparable Market Analysis - Residential SFR">  
        Comparable Market Analysis - Residential SFR  
      </option>  
      <option value="Comparable Market Analysis - Residential Multifamily (2-4 Units)">  
        Comparable Market Analysis - Residential Multifamily (2-4 Units)  
      </option>  
      <option value="Comparable Market Analysis - Multifamily (5+ Units)">  
        Comparable Market Analysis - Multifamily (5+ Units)  
      </option>  
      <option value="Comparable Market Analysis - Mixed-Use">  
        Comparable Market Analysis - Mixed-Use  
      </option>  
      <option value="Comparable Market Analysis - Commercial">  
        Comparable Market Analysis - Commercial  
      </option>  
      <option value="Comparable Market Analysis - Residential Vacant Lot w/Proposed Construction">  
        Comparable Market Analysis - Residential Vacant Lot w/Proposed Construction  
      </option>  
      <option value="Comparable Market Analysis - Residential SFR w/ARV">  
        Comparable Market Analysis - Residential SFR w/ARV  
      </option>  
      <option value="Comparable Market Analysis - Residential Multifamily (2-4 Units) w/ARV">  
        Comparable Market Analysis - Residential Multifamily (2-4 Units) w/ARV  
      </option>  
      <option value="Comparable Market Analysis - Multifamily (5+ Units) w/ARV">  
        Comparable Market Analysis - Multifamily (5+ Units) w/ARV  
      </option>  
      <option value="Comparable Market Analysis - Mixed-Use w/ARV">  
        Comparable Market Analysis - Mixed-Use w/ARV  
      </option>  
      <option value="Comparable Market Analysis - Commercial w/ARV">  
        Comparable Market Analysis - Commercial w/ARV  
      </option>  
    </optgroup>  
  
    <!-- Broker Price Opinion (BPO) -->  
    <optgroup label="Broker Price Opinion (BPO)">  
      <option value="Broker Price Opinion - Residential Vacant Lot">  
        Broker Price Opinion - Residential Vacant Lot  
      </option>  
      <option value="Broker Price Opinion - Residential SFR">  
        Broker Price Opinion - Residential SFR  
      </option>  
      <option value="Broker Price Opinion - Residential Multifamily (2-4 Units)">  
        Broker Price Opinion - Residential Multifamily (2-4 Units)  
      </option>  
      <option value="Broker Price Opinion - Multifamily (5+ Units)">  
        Broker Price Opinion - Multifamily (5+ Units)  
      </option>  
      <option value="Broker Price Opinion - Mixed-Use">  
        Broker Price Opinion - Mixed-Use  
      </option>  
      <option value="Broker Price Opinion - Commercial">  
        Broker Price Opinion - Commercial  
      </option>  
      <option value="Broker Price Opinion - Residential Vacant Lot w/Proposed Construction">  
        Broker Price Opinion - Residential Vacant Lot w/Proposed Construction  
      </option>  
      <option value="Broker Price Opinion - Residential SFR w/ARV">  
        Broker Price Opinion - Residential SFR w/ARV  
      </option>  
      <option value="Broker Price Opinion - Residential Multifamily (2-4 Units) w/ARV">  
        Broker Price Opinion - Residential Multifamily (2-4 Units) w/ARV  
      </option>  
      <option value="Broker Price Opinion - Multifamily (5+ Units) w/ARV">  
        Broker Price Opinion - Multifamily (5+ Units) w/ARV  
      </option>  
      <option value="Broker Price Opinion - Mixed-Use w/ARV">  
        Broker Price Opinion - Mixed-Use w/ARV  
      </option>  
      <option value="Broker Price Opinion - Commercial w/ARV">  
        Broker Price Opinion - Commercial w/ARV  
      </option>  
    </optgroup>  
  </select>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<hr class="mt-8 border-gray-200" />  
  
<!-- =========================================  
     Section: Client’s Stated Goal  
     ====================================== -->  
<section class="mt-6">  
  <label  
    for="bpoCover_clientGoalSelect"  
    class="block text-sm font-medium text-gray-700"  
  >  
    Client’s Stated Goal  
  </label>  
  
  <select  
    id="bpoCover_clientGoalSelect"  
    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
  >  
    <option value="" selected disabled>-- Select Client Goal --</option>  
    <option value="Purchase due diligence (confirming value before making an offer)">  
      Purchase due diligence (confirming value before making an offer)  
    </option>  
    <option value="Investor decision-making (buy/sell/hold analysis)">  
      Investor decision-making (buy/sell/hold analysis)  
    </option>  
    <option value="Pre-listing strategy (establishing listing price)">  
      Pre-listing strategy (establishing listing price)  
    </option>  
    <option value="Post-listing review (expired/withdrawn listing)">  
      Post-listing review (expired/withdrawn listing)  
    </option>  
    <option value="Portfolio review / Asset management">  
      Portfolio review / Asset management  
    </option>  
    <option value="Property management support (rent adjustment, investor reporting)">  
      Property management support (rent adjustment, investor reporting)  
    </option>  
    <option value="Insurance review (coverage adequacy, risk assessment)">  
      Insurance review (coverage adequacy, risk assessment)  
    </option>  
    <option value="Estate or divorce planning (non-court advisory only)">  
      Estate or divorce planning (non-court advisory only)  
    </option>  
    <option value="Other">Other (Specify below)</option>  
  </select>  
  
  <div id="bpoCover_clientGoalOtherWrapper" class="hidden mt-4">  
    <label  
      for="bpoCover_clientGoalOtherText"  
      class="block text-sm font-medium text-gray-700"  
    >  
      Specify Other Goal  
    </label>  
    <input  
      id="bpoCover_clientGoalOtherText"  
      type="text"  
      placeholder="Specify other goal..."  
      class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm p-2"  
    />  
  </div>  
  
  <p class="mt-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">  
    <span class="font-semibold">Instruction:</span>  
    Please select or document the client’s stated reason for ordering this report.  
    This confirms the report was created for a permitted purpose and not for  
    restricted uses such as mortgage loan origination, federally related  
    transactions, or court-ordered valuation.  
  </p>  
</section>  
  
<hr class="mt-8 border-gray-200" />  
  
<!-- =========================================  
     Section: Subject Address  
     ====================================== -->  
<section class="mt-6">  
  <h2 class="text-xl font-semibold text-gray-900">Subject Address</h2>  
  
  <!-- Address + Unit -->  
  <div class="grid grid-cols-1 md:grid-cols-12 gap-4 mt-3">  
    <div class="md:col-span-9">  
      <label  
        for="bpoCover_addr1"  
        class="block text-sm font-medium text-gray-700"  
      >  
        Address  
      </label>  
      <input  
        id="bpoCover_addr1"  
        type="text"  
        placeholder="123 Main St"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  
    <div class="md:col-span-3">  
      <label  
        for="bpoCover_unit"  
        class="block text-sm font-medium text-gray-700"  
      >  
        Unit (optional)  
      </label>  
      <input  
        id="bpoCover_unit"  
        type="text"  
        placeholder="Unit/Apt"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  </div>  
  
  <!-- City / State / Zip -->  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">  
    <!-- City -->  
    <div>  
      <label  
        for="bpoCover_city"  
        class="block text-sm font-medium text-gray-700"  
      >  
        City  
      </label>  
      <input  
        id="bpoCover_city"  
        type="text"  
        placeholder="City"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  
    <!-- State -->  
    <div>  
      <label  
        for="bpoCover_state"  
        class="block text-sm font-medium text-gray-700"  
      >  
        State  
      </label>  
      <select  
        id="bpoCover_state"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      >  
        <option value="" selected disabled>-- Select State --</option>  
  
        <optgroup label="States">  
          <option value="AL">AL</option>  
          <option value="AK">AK</option>  
          <option value="AZ">AZ</option>  
          <option value="AR">AR</option>  
          <option value="CA">CA</option>  
          <option value="CO">CO</option>  
          <option value="CT">CT</option>  
          <option value="DE">DE</option>  
          <option value="FL">FL</option>  
          <option value="GA">GA</option>  
          <option value="HI">HI</option>  
          <option value="ID">ID</option>  
          <option value="IL">IL</option>  
          <option value="IN">IN</option>  
          <option value="IA">IA</option>  
          <option value="KS">KS</option>  
          <option value="KY">KY</option>  
          <option value="LA">LA</option>  
          <option value="ME">ME</option>  
          <option value="MD">MD</option>  
          <option value="MA">MA</option>  
          <option value="MI">MI</option>  
          <option value="MN">MN</option>  
          <option value="MS">MS</option>  
          <option value="MO">MO</option>  
          <option value="MT">MT</option>  
          <option value="NE">NE</option>  
          <option value="NV">NV</option>  
          <option value="NH">NH</option>  
          <option value="NJ">NJ</option>  
          <option value="NM">NM</option>  
          <option value="NY">NY</option>  
          <option value="NC">NC</option>  
          <option value="ND">ND</option>  
          <option value="OH">OH</option>  
          <option value="OK">OK</option>  
          <option value="OR">OR</option>  
          <option value="PA">PA</option>  
          <option value="RI">RI</option>  
          <option value="SC">SC</option>  
          <option value="SD">SD</option>  
          <option value="TN">TN</option>  
          <option value="TX">TX</option>  
          <option value="UT">UT</option>  
          <option value="VT">VT</option>  
          <option value="VA">VA</option>  
          <option value="WA">WA</option>  
          <option value="WV">WV</option>  
          <option value="WI">WI</option>  
          <option value="WY">WY</option>  
        </optgroup>  
  
        <optgroup label="District & Territories">  
          <option value="DC">DC</option>  
          <option value="AS">AS</option>  
          <option value="GU">GU</option>  
          <option value="MP">MP</option>  
          <option value="PR">PR</option>  
          <option value="VI">VI</option>  
        </optgroup>  
      </select>  
    </div>  
  
    <!-- Zip -->  
    <div>  
      <label  
        for="bpoCover_zip"  
        class="block text-sm font-medium text-gray-700"  
      >  
        Zip  
      </label>  
      <input  
        id="bpoCover_zip"  
        type="text"  
        placeholder="19123"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<hr class="mt-8 border-gray-200" />  
  
<!-- =========================================  
     Section: Mandatory BPO / PDC Disclosure  
     (Auto-populated based on Subject State)  
     ====================================== -->  
<section class="mt-6">  
  <label  
    for="bpoCover_disclosure"  
    class="block text-sm font-medium text-gray-700"  
  >  
    Mandatory BPO/PDC Disclosure  
    <span class="text-gray-500 font-normal">  
      (Auto-populates from Subject State)  
    </span>  
  </label>  
  
  <textarea  
    id="bpoCover_disclosure"  
    rows="4"  
    placeholder="Select a subject state to populate the required disclosure..."  
    class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
  ></textarea>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<hr class="mt-8 border-gray-200" />  
  
<!-- =========================================  
     Section: Client Information  
     ====================================== -->  
<section class="mt-6">  
  <h2 class="text-xl font-semibold text-gray-900">Client Information</h2>  
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">  
    <!-- Company -->  
    <div>  
      <label  
        for="bpoCover_clientCompany"  
        class="block text-sm font-medium text-gray-700"  
      >  
        Company  
      </label>  
      <input  
        id="bpoCover_clientCompany"  
        type="text"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  
    <!-- Client Name (POC) -->  
    <div>  
      <label  
        for="bpoCover_clientPOC"  
        class="block text-sm font-medium text-gray-700"  
      >  
        Client's Name (POC)  
      </label>  
      <input  
        id="bpoCover_clientPOC"  
        type="text"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  
    <!-- Address -->  
    <div class="md:col-span-2">  
      <label  
        for="bpoCover_clientAddr1"  
        class="block text-sm font-medium text-gray-700"  
      >  
        Address  
      </label>  
      <input  
        id="bpoCover_clientAddr1"  
        type="text"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  
    <!-- City / State / Zip -->  
    <div class="md:col-span-2">  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">  
        <!-- City -->  
        <div>  
          <label  
            for="bpoCover_clientCity"  
            class="block text-sm font-medium text-gray-700"  
          >  
            City  
          </label>  
          <input  
            id="bpoCover_clientCity"  
            type="text"  
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
          />  
        </div>  
  
        <!-- State -->  
        <div>  
          <label  
            for="bpoCover_clientState"  
            class="block text-sm font-medium text-gray-700"  
          >  
            State  
          </label>  
          <select  
            id="bpoCover_clientState"  
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
          >  
            <option value="" selected disabled>-- Select State --</option>  
  
            <optgroup label="States">  
              <option value="AL">AL</option>  
              <option value="AK">AK</option>  
              <option value="AZ">AZ</option>  
              <option value="AR">AR</option>  
              <option value="CA">CA</option>  
              <option value="CO">CO</option>  
              <option value="CT">CT</option>  
              <option value="DE">DE</option>  
              <option value="FL">FL</option>  
              <option value="GA">GA</option>  
              <option value="HI">HI</option>  
              <option value="ID">ID</option>  
              <option value="IL">IL</option>  
              <option value="IN">IN</option>  
              <option value="IA">IA</option>  
              <option value="KS">KS</option>  
              <option value="KY">KY</option>  
              <option value="LA">LA</option>  
              <option value="ME">ME</option>  
              <option value="MD">MD</option>  
              <option value="MA">MA</option>  
              <option value="MI">MI</option>  
              <option value="MN">MN</option>  
              <option value="MS">MS</option>  
              <option value="MO">MO</option>  
              <option value="MT">MT</option>  
              <option value="NE">NE</option>  
              <option value="NV">NV</option>  
              <option value="NH">NH</option>  
              <option value="NJ">NJ</option>  
              <option value="NM">NM</option>  
              <option value="NY">NY</option>  
              <option value="NC">NC</option>  
              <option value="ND">ND</option>  
              <option value="OH">OH</option>  
              <option value="OK">OK</option>  
              <option value="OR">OR</option>  
              <option value="PA">PA</option>  
              <option value="RI">RI</option>  
              <option value="SC">SC</option>  
              <option value="SD">SD</option>  
              <option value="TN">TN</option>  
              <option value="TX">TX</option>  
              <option value="UT">UT</option>  
              <option value="VT">VT</option>  
              <option value="VA">VA</option>  
              <option value="WA">WA</option>  
              <option value="WV">WV</option>  
              <option value="WI">WI</option>  
              <option value="WY">WY</option>  
            </optgroup>  
  
            <optgroup label="District & Territories">  
              <option value="DC">DC</option>  
              <option value="AS">AS</option>  
              <option value="GU">GU</option>  
              <option value="MP">MP</option>  
              <option value="PR">PR</option>  
              <option value="VI">VI</option>  
            </optgroup>  
          </select>  
        </div>  
  
        <!-- Zip Code -->  
        <div>  
          <label  
            for="bpoCover_clientZip"  
            class="block text-sm font-medium text-gray-700"  
          >  
            Zip Code  
          </label>  
          <input  
            id="bpoCover_clientZip"  
            type="text"  
            class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
          />  
        </div>  
      </div>  
    </div>  
  
    <!-- Client Phone -->  
    <div>  
      <label  
        for="bpoCover_clientPhone"  
        class="block text-sm font-medium text-gray-700"  
      >  
        Client's Phone  
      </label>  
      <input  
        id="bpoCover_clientPhone"  
        type="text"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  
    <!-- Client Email -->  
    <div>  
      <label  
        for="bpoCover_clientEmail"  
        class="block text-sm font-medium text-gray-700"  
      >  
        Client's Email  
      </label>  
      <input  
        id="bpoCover_clientEmail"  
        type="email"  
        class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
      />  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<hr class="mt-8 border-gray-200" />  
  
<!-- =========================================  
     Section: Subject Front Photo  
     ====================================== -->  
<section class="mt-6">  
  <h2 class="text-xl font-semibold text-gray-900">Subject Front Photo</h2>  
  <p class="text-sm text-gray-600">  
    Upload the front (street-facing) view of the subject property.  
  </p>  
  
  <label  
    id="bpoCover_frontPhotoBox"  
    for="bpoCover_frontPhotoInput"  
    class="bpo-cover-photo-upload-box w-full h-72 rounded-xl mt-3 flex items-center justify-center text-center cursor-pointer p-2"  
  >  
    <div class="upload-prompt text-gray-500">  
      <svg  
        class="mx-auto h-12 w-12 text-gray-400"  
        stroke="currentColor"  
        fill="none"  
        viewBox="0 0 48 48"  
        aria-hidden="true"  
      >  
        <path  
          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4   
             0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32  
             l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"  
          stroke-width="2"  
          stroke-linecap="round"  
          stroke-linejoin="round"  
        ></path>  
      </svg>  
      <p>Click to upload</p>  
    </div>  
  
    <img  
      id="bpoCover_frontPhotoPreview"  
      alt=""  
      class="w-full h-full object-contain rounded-md"  
    />  
  </label>  
  
  <input  
    id="bpoCover_frontPhotoInput"  
    type="file"  
    accept="image/*"  
    class="hidden"  
  />  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- =========================================  
     Section: Report Created By  
     ====================================== -->  
<section class="mt-8">  
  <h2 class="text-xl font-semibold text-gray-900">Report Created By</h2>  
  
  <div class="mt-3 flex flex-col md:flex-row gap-6 items-start">  
    <!-- Agent Photo -->  
    <div class="flex-shrink-0">  
      <label  
        for="bpoCover_agentPhotoInput"  
        class="block text-sm font-medium text-gray-700 mb-1"  
      >  
        Agent's Photo  
      </label>  
  
      <label  
        id="bpoCover_agentPhotoBox"  
        for="bpoCover_agentPhotoInput"  
        class="bpo-cover-logo-upload-box mx-auto rounded-xl flex items-center justify-center text-center cursor-pointer p-2"  
      >  
        <div class="upload-prompt text-gray-500 text-sm">  
          <svg  
            class="mx-auto h-10 w-10 text-gray-400"  
            stroke="currentColor"  
            fill="none"  
            viewBox="0 0 48 48"  
            aria-hidden="true"  
          >  
            <path  
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4   
                 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32  
                 l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"  
              stroke-width="2"  
              stroke-linecap="round"  
              stroke-linejoin="round"  
            ></path>  
          </svg>  
          <p>Click to upload</p>  
        </div>  
  
        <img  
          id="bpoCover_agentPhotoPreview"  
          alt=""  
          class="w-full h-full object-contain rounded-md"  
        />  
      </label>  
  
      <input  
        id="bpoCover_agentPhotoInput"  
        type="file"  
        accept="image/*"  
        class="hidden"  
      />  
    </div>  
  
    <!-- Agent Details -->  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">  
      <!-- Name -->  
      <div class="md:col-span-2">  
        <label  
          for="bpoCover_agentName"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Agent's Name  
        </label>  
        <input  
          id="bpoCover_agentName"  
          type="text"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
  
      <!-- Title -->  
      <div class="md:col-span-2">  
        <label  
          for="bpoCover_agentTitle"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Agent's Title  
        </label>  
        <input  
          id="bpoCover_agentTitle"  
          type="text"  
          placeholder="Real Estate Salesperson / Valuation Specialist"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
  
      <!-- Phone -->  
      <div>  
        <label  
          for="bpoCover_agentPhone"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Agent's Phone  
        </label>  
        <input  
          id="bpoCover_agentPhone"  
          type="text"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
  
      <!-- Email -->  
      <div>  
        <label  
          for="bpoCover_agentEmail"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Agent's Email  
        </label>  
        <input  
          id="bpoCover_agentEmail"  
          type="email"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
  
      <!-- Website -->  
      <div class="md:col-span-2">  
        <label  
          for="bpoCover_agentWebsite"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Agent's Website  
        </label>  
        <input  
          id="bpoCover_agentWebsite"  
          type="text"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<hr class="mt-8 border-gray-200" />  
  
<!-- =========================================  
     Section: Brokerage Information  
     ====================================== -->  
<section class="mt-6">  
  <h2 class="text-xl font-semibold text-gray-900">Brokerage Information</h2>  
  
  <div class="mt-3 flex flex-col md:flex-row gap-6 items-start">  
    <!-- Brokerage Logo -->  
    <div class="flex-shrink-0">  
      <label  
        for="bpoCover_brokerageLogoInput"  
        class="block text-sm font-medium text-gray-700 mb-1"  
      >  
        Brokerage Logo  
      </label>  
  
      <label  
        id="bpoCover_brokerageLogoBox"  
        for="bpoCover_brokerageLogoInput"  
        class="bpo-cover-logo-upload-box mx-auto rounded-xl flex items-center justify-center text-center cursor-pointer p-2"  
      >  
        <div class="upload-prompt text-gray-500 text-sm">  
          <svg  
            class="mx-auto h-10 w-10 text-gray-400"  
            stroke="currentColor"  
            fill="none"  
            viewBox="0 0 48 48"  
            aria-hidden="true"  
          >  
            <path  
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4   
                 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32  
                 l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"  
              stroke-width="2"  
              stroke-linecap="round"  
              stroke-linejoin="round"  
            ></path>  
          </svg>  
          <p>Click to upload</p>  
        </div>  
  
        <img  
          id="bpoCover_brokerageLogoPreview"  
          alt=""  
          class="w-full h-full object-contain rounded-md"  
        />  
      </label>  
  
      <input  
        id="bpoCover_brokerageLogoInput"  
        type="file"  
        accept="image/*"  
        class="hidden"  
      />  
    </div>  
  
    <!-- Brokerage Details -->  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">  
      <!-- Brokerage Name -->  
      <div class="md:col-span-2">  
        <label  
          for="bpoCover_brokerage"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Brokerage  
        </label>  
        <input  
          id="bpoCover_brokerage"  
          type="text"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
  
      <!-- Brokerage Address -->  
      <div class="md:col-span-2">  
        <label  
          for="bpoCover_brokerageAddr1"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Brokerage Address  
        </label>  
        <input  
          id="bpoCover_brokerageAddr1"  
          type="text"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
  
      <!-- City -->  
      <div>  
        <label  
          for="bpoCover_brokerageCity"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Brokerage City  
        </label>  
        <input  
          id="bpoCover_brokerageCity"  
          type="text"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
  
      <!-- State -->  
      <div>  
        <label  
          for="bpoCover_brokerageState"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Brokerage State  
        </label>  
        <select  
          id="bpoCover_brokerageState"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        >  
          <option value="" selected disabled>-- Select State --</option>  
  
          <optgroup label="States">  
            <option value="AL">AL</option>  
            <option value="AK">AK</option>  
            <option value="AZ">AZ</option>  
            <option value="AR">AR</option>  
            <option value="CA">CA</option>  
            <option value="CO">CO</option>  
            <option value="CT">CT</option>  
            <option value="DE">DE</option>  
            <option value="FL">FL</option>  
            <option value="GA">GA</option>  
            <option value="HI">HI</option>  
            <option value="ID">ID</option>  
            <option value="IL">IL</option>  
            <option value="IN">IN</option>  
            <option value="IA">IA</option>  
            <option value="KS">KS</option>  
            <option value="KY">KY</option>  
            <option value="LA">LA</option>  
            <option value="ME">ME</option>  
            <option value="MD">MD</option>  
            <option value="MA">MA</option>  
            <option value="MI">MI</option>  
            <option value="MN">MN</option>  
            <option value="MS">MS</option>  
            <option value="MO">MO</option>  
            <option value="MT">MT</option>  
            <option value="NE">NE</option>  
            <option value="NV">NV</option>  
            <option value="NH">NH</option>  
            <option value="NJ">NJ</option>  
            <option value="NM">NM</option>  
            <option value="NY">NY</option>  
            <option value="NC">NC</option>  
            <option value="ND">ND</option>  
            <option value="OH">OH</option>  
            <option value="OK">OK</option>  
            <option value="OR">OR</option>  
            <option value="PA">PA</option>  
            <option value="RI">RI</option>  
            <option value="SC">SC</option>  
            <option value="SD">SD</option>  
            <option value="TN">TN</option>  
            <option value="TX">TX</option>  
            <option value="UT">UT</option>  
            <option value="VT">VT</option>  
            <option value="VA">VA</option>  
            <option value="WA">WA</option>  
            <option value="WV">WV</option>  
            <option value="WI">WI</option>  
            <option value="WY">WY</option>  
          </optgroup>  
  
          <optgroup label="District & Territories">  
            <option value="DC">DC</option>  
            <option value="AS">AS</option>  
            <option value="GU">GU</option>  
            <option value="MP">MP</option>  
            <option value="PR">PR</option>  
            <option value="VI">VI</option>  
          </optgroup>  
        </select>  
      </div>  
  
      <!-- Zip Code -->  
      <div>  
        <label  
          for="bpoCover_brokerageZip"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Brokerage Zip Code  
        </label>  
        <input  
          id="bpoCover_brokerageZip"  
          type="text"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
  
      <!-- Phone -->  
      <div>  
        <label  
          for="bpoCover_brokeragePhone"  
          class="block text-sm font-medium text-gray-700"  
        >  
          Brokerage Phone  
        </label>  
        <input  
          id="bpoCover_brokeragePhone"  
          type="text"  
          class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"  
        />  
      </div>  
    </div>  
  </div>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<hr class="mt-8 border-gray-200" />  
  
<!-- =========================================  
     Section: Equal Housing Opportunity Notice  
     ====================================== -->  
<section class="mt-6 flex items-start gap-4">  
  <svg  
    aria-hidden="true"  
    class="w-12 h-12 text-gray-800 flex-shrink-0"  
    viewBox="0 0 64 64"  
    fill="currentColor"  
  >  
    <path  
      d="M32 6L4 24v6h6v22h44V30h6v-6L32 6zm16 44H16V26.9L32 16l16 10.9V50z"  
    ></path>  
    <rect x="22" y="34" width="20" height="4"></rect>  
    <rect x="22" y="42" width="20" height="4"></rect>  
  </svg>  
  
  <p class="text-sm text-gray-700 leading-6">  
    <span class="font-semibold">Equal Housing Opportunity.</span>  
    We are pledged to the letter and spirit of U.S. policy for the achievement of  
    equal housing opportunity throughout the Nation. We encourage and support an  
    affirmative advertising and marketing program in which there are no barriers  
    to obtaining housing because of race, color, religion, sex, handicap,  
    familial status, or national origin.  
  </p>  
</section>  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<!-- =========================================  
     Status / Messaging  
     ====================================== -->  
<div  
  id="bpoCover_messageBox"  
  class="mt-6 hidden p-4 rounded-md text-sm"  
></div>  
  
<!-- =========================================  
     Actions: Generate PDF / Clear Form  
     ====================================== -->  
<div class="mt-8 flex flex-wrap gap-3 justify-center">  
  <button  
    id="bpoCover_generatePdfBtn"  
    class="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"  
    disabled  
  >  
    Generate PDF  
  </button>  
  
  <button  
    id="bpoCover_clearBtn"  
    class="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"  
  >  
    Clear  
  </button>  
</div>  
  
    </div> <!-- end inner card -->  
  </div>   <!-- end container -->  
<!-- /wp:html -->  
  
<!-- wp:html -->  
<script>  
    // Self-executing anonymous function to scope variables and avoid WP conflicts (Rule 9)  
    (function() {  
      const el = (id) => document.getElementById(id); // Define el first  
        
      // --- FIXED: Added jsPDF Guard Clause ---  
      if (window.jspdf && window.jspdf.jsPDF) {  
        window.jsPDF = window.jspdf.jsPDF;  
      } else {  
        console.error("jsPDF script not loaded.");  
        const btn = el('bpoCover_generatePdfBtn');  
        const msg = el('bpoCover_messageBox');  
          
        if (btn) {  
          btn.disabled = true;  
          btn.textContent = 'PDF Library Error';  
        }  
        if (msg) {  
          msg.textContent = 'Fatal Error: PDF library (jsPDF) failed to load. Please refresh.';  
          msg.className = 'mt-6 p-4 rounded-md text-sm bg-red-100 text-red-800';  
        }  
        return; // Stop execution  
      }  
      // --- END FIX ---  
  
      // --- Subject Property Elements ---  
      const reportTitle       = el('bpoCover_reportTitle'); // <select>  
        
      // === MODIFICATION START ===  
      // --- Client Goal Elements (Select + Other) ---  
      const clientGoalSelect = el('bpoCover_clientGoalSelect');  
      const clientGoalOtherWrapper = el('bpoCover_clientGoalOtherWrapper');  
      const clientGoalOtherText  = el('bpoCover_clientGoalOtherText');  
      // === MODIFICATION END ===  
  
      const addr1             = el('bpoCover_addr1');  
      const unit              = el('bpoCover_unit');  
      const city              = el('bpoCover_city');  
      const stateEl           = el('bpoCover_state'); // <select>  
      const zip               = el('bpoCover_zip');  
      const disclosureBox     = el('bpoCover_disclosure');  
      const frontPhotoInput   = el('bpoCover_frontPhotoInput');  
      const frontPhotoBox     = el('bpoCover_frontPhotoBox');  
      const frontPhotoPreview = el('bpoCover_frontPhotoPreview');  
      // --- Client Info Elements ---  
      const clientCompany     = el('bpoCover_clientCompany');  
      const clientPOC         = el('bpoCover_clientPOC');  
      const clientAddr1       = el('bpoCover_clientAddr1');  
      const clientCity        = el('bpoCover_clientCity');  
      const clientState       = el('bpoCover_clientState'); // <select>  
      const clientZip         = el('bpoCover_clientZip');  
      const clientPhone       = el('bpoCover_clientPhone');  
      const clientEmail       = el('bpoCover_clientEmail');  
      // --- Agent Info Elements ---  
      const agentName         = el('bpoCover_agentName');  
      const agentTitle        = el('bpoCover_agentTitle');  
      const agentPhone        = el('bpoCover_agentPhone');  
      const agentEmail        = el('bpoCover_agentEmail');  
      const agentWebsite      = el('bpoCover_agentWebsite');  
      const agentPhotoInput   = el('bpoCover_agentPhotoInput');  
      const agentPhotoBox     = el('bpoCover_agentPhotoBox');  
      const agentPhotoPreview = el('bpoCover_agentPhotoPreview');  
      // --- Brokerage Info Elements ---  
      const brokerage         = el('bpoCover_brokerage');  
      const brokerageAddr1    = el('bpoCover_brokerageAddr1');  
      const brokerageCity     = el('bpoCover_brokerageCity');  
      const brokerageState    = el('bpoCover_brokerageState'); // <select>  
      const brokerageZip      = el('bpoCover_brokerageZip');  
      const brokeragePhone    = el('bpoCover_brokeragePhone');  
      const brokerageLogoInput  = el('bpoCover_brokerageLogoInput');  
      const brokerageLogoBox    = el('bpoCover_brokerageLogoBox');  
      const brokerageLogoPreview = el('bpoCover_brokerageLogoPreview');  
  
      // --- System Elements ---  
      const messageBox        = el('bpoCover_messageBox');  
      const generatePdfBtn    = el('bpoCover_generatePdfBtn');  
      const clearBtn          = el('bpoCover_clearBtn');  
      // --- Photo Data Objects ---  
      let subjectPhoto = { file:null, dataUrl:null };  
      let agentPhoto = { file:null, dataUrl:null };  
      let brokerageLogo = { file:null, dataUrl:null };  
      // --- Disclosure Text DB ---  
      const federalOverlay =  
        "This BPO may not be used as the primary basis for determining the value of property in a federally related mortgage transaction.";  
      const genericTemplate = (name) =>  
        `This Broker Price Opinion/Comparative Market Analysis was completed within the rules and guidelines outlined by the laws of ${name}.  
` +  
        `It is not an appraisal and may not be used in lieu of an appraisal or as the primary basis for a mortgage loan origination.`;  
        
      const mandatedByAbbr = {  
        "PA": "This analysis has not been prepared in accordance with the Uniform Standards of Professional Appraisal Practice (USPAP). It is not to be construed as an appraisal and may not be used as such for any purpose.",  
        "TX": "This represents an estimated sale price for this property. It is not the same as the opinion of value in an appraisal developed by a licensed appraiser under the Uniform Standards of Professional Appraisal Practice.",  
        "NC": "This opinion is not an appraisal of the market value of the property, and may not be used in lieu of an appraisal. If an appraisal is desired, the services of a licensed or certified appraiser shall be obtained. This opinion may not be used by any party as the primary basis to determine the value of a parcel of or interest in real property for a mortgage loan origination, including first and second mortgages, refinances, or equity lines of credit.",  
        "SC": "This market analysis or price opinion may not be used for the purposes of obtaining financing in a federally related transaction.",  
        "NJ": "This CMA or BPO should not be considered the equivalent of an appraisal prepared by a New Jersey licensed or certified real estate appraiser."  
      };  
        
      // --- FIXED: Corrected broken object literals ---  
      const stateToFullName = {  
        "AL": "Alabama", "AK": "Alaska", "AZ": "Arizona", "AR": "Arkansas", "CA": "California",  
        "CO": "Colorado", "CT": "Connecticut", "DE": "Delaware", "FL": "Florida", "GA": "Georgia",  
        "HI": "Hawaii", "ID": "Idaho", "IL": "Illinois", "IN": "Indiana", "IA": "Iowa",  
        "KS": "Kansas", "KY": "Kentucky", "LA": "Louisiana", "ME": "Maine", "MD": "Maryland",  
        "MA": "Massachusetts", "MI": "Michigan", "MN": "Minnesota", "MS": "Mississippi", "MO": "Missouri",  
        "MT": "Montana", "NE": "Nebraska", "NV": "Nevada", "NH": "New Hampshire", "NJ": "New Jersey",  
        "NM": "New Mexico", "NY": "New York", "NC": "North Carolina", "ND": "North Dakota", "OH": "Ohio",  
        "OK": "Oklahoma", "OR": "Oregon", "PA": "Pennsylvania", "RI": "Rhode Island", "SC": "South Carolina",  
        "SD": "South Dakota", "TN": "Tennessee", "TX": "Texas", "UT": "Utah", "VT": "Vermont",  
        "VA": "Virginia", "WA": "Washington", "WV": "West Virginia", "WI": "Wisconsin", "WY": "Wyoming",  
        "DC": "District of Columbia", "AS": "American Samoa", "GU": "Guam", "MP": "Northern Mariana Islands",  
        "PR": "Puerto Rico", "VI": "U.S. Virgin Islands"  
      };  
      // --- END FIX ---  
  
      function updateDisclosure() {  
        const abbr = stateEl.value; // Tied to *subject* state  
          
        if (!abbr) {  
          disclosureBox.value = '';  
          disclosureBox.classList.remove('tx-min-font');  
          return;  
        }  
          
        const fullName = stateToFullName[abbr] || abbr;  
        let text = mandatedByAbbr[abbr] ? mandatedByAbbr[abbr] : genericTemplate(fullName);  
        text += (text.endsWith('.') ? ' ' : '. ') + federalOverlay;  
  
        if (abbr === 'TX') {  
          disclosureBox.classList.add('tx-min-font');  
        } else {  
          disclosureBox.classList.remove('tx-min-font');  
        }  
          
        disclosureBox.value = text;  
      }  
  
      function showMessage(text, type='info') {  
        messageBox.textContent = text;  
        messageBox.classList.remove('hidden','bg-blue-100','text-blue-800','bg-green-100','text-green-800','bg-red-100','text-red-800');  
        if (type==='info')    messageBox.classList.add('bg-blue-100','text-blue-800');  
        if (type==='success') messageBox.classList.add('bg-green-100','text-green-800');  
        if (type==='error')   messageBox.classList.add('bg-red-100','text-red-800');  
      }  
  
      function requiredReady() {  
        // Validation only checks for core subject property info  
        return reportTitle.value.trim() &&   
               addr1.value.trim() &&   
               city.value.trim() &&   
               stateEl.value.trim() &&   
               zip.value.trim() &&   
               subjectPhoto.file; // Only subject photo is required  
      }  
  
      function updateButtonState() {  
        generatePdfBtn.disabled = !requiredReady();  
      }  
  
      // --- Bind All Inputs ---  
      const allTextInputs = [  
        addr1, unit, city, zip, disclosureBox,  
        clientGoalOtherText, // Added  
        clientCompany, clientPOC, clientAddr1, clientCity, clientZip, clientPhone, clientEmail,  
        agentName, agentTitle, agentPhone, agentEmail, agentWebsite,  
        brokerage, brokerageAddr1, brokerageCity, brokerageZip, brokeragePhone  
      ];  
      const allSelects = [  
        reportTitle,   
        clientGoalSelect, // Added  
        stateEl, clientState, brokerageState  
      ];  
        
      allTextInputs.forEach(input => input.addEventListener('input', updateButtonState));  
        
      // Subject state select triggers disclosure update  
      stateEl.addEventListener('change', () => {   
        updateButtonState();  
        updateDisclosure();  
      });  
        
      // === MODIFICATION START ===  
      // Client Goal select triggers show/hide  
      clientGoalSelect.addEventListener('change', () => {  
          clientGoalOtherWrapper.classList.toggle('hidden', clientGoalSelect.value !== 'Other');  
          updateButtonState(); // Not strictly needed, but good practice  
      });  
      // Other selects just update the button  
      [reportTitle, clientState, brokerageState].forEach(sel => sel.addEventListener('change', updateButtonState));  
      // === MODIFICATION END ===  
  
  
      // --- Reusable Photo Handler ---  
      function handlePhotoUpload(e, photoData, previewEl, boxEl, successMsg) {  
        const file = e.target.files?.[0];  
        if (!file) return;  
        const reader = new FileReader();  
        reader.onload = (ev) => {  
          photoData.file = file;  
          photoData.dataUrl = ev.target.result;  
          previewEl.src = photoData.dataUrl;  
          boxEl.classList.add('has-image');  
          showMessage(successMsg, 'success');  
          // Only call updateButtonState if it's the subject photo  
          if (photoData === subjectPhoto) {  
            updateButtonState();  
          }  
        };  
        reader.readAsDataURL(file);  
      }  
  
      // --- Bind Photo Uploads ---  
      frontPhotoInput.addEventListener('change', (e) => {  
        handlePhotoUpload(e, subjectPhoto, frontPhotoPreview, frontPhotoBox, 'Subject front photo added.');  
      });  
      agentPhotoInput.addEventListener('change', (e) => {  
        handlePhotoUpload(e, agentPhoto, agentPhotoPreview, agentPhotoBox, 'Agent photo added.');  
      });  
      brokerageLogoInput.addEventListener('change', (e) => {  
        handlePhotoUpload(e, brokerageLogo, brokerageLogoPreview, brokerageLogoBox, 'Brokerage logo added.');  
      });  
        
      // --- Clear Button ---  
      clearBtn.addEventListener('click', () => {  
        // Clear all inputs and selects  
        [...allTextInputs, ...allSelects].forEach(input => input.value = '');  
          
        // === MODIFICATION START ===  
        clientGoalOtherWrapper.classList.add('hidden'); // Re-hide "Other" box  
        // === MODIFICATION END ===  
          
        // Reset Subject photo  
        frontPhotoInput.value = '';  
        frontPhotoPreview.removeAttribute('src');  
        frontPhotoBox.classList.remove('has-image');  
        subjectPhoto = { file:null, dataUrl:null };  
          
        // Reset Agent photo  
        agentPhotoInput.value = '';  
        agentPhotoPreview.removeAttribute('src');  
        agentPhotoBox.classList.remove('has-image');  
        agentPhoto = { file:null, dataUrl:null };  
          
        // Reset Brokerage logo  
        brokerageLogoInput.value = '';  
        brokerageLogoPreview.removeAttribute('src');  
        brokerageLogoBox.classList.remove('has-image');  
        brokerageLogo = { file:null, dataUrl:null };  
          
        // Manually update state-dependent fields  
        updateButtonState();  
        updateDisclosure(); // This will clear the disclosure box  
          
        showMessage('Form cleared.', 'info');  
      });  
  
      // --- PDF generation ---  
      generatePdfBtn.addEventListener('click', () => {  
        if (!requiredReady()) {  
          showMessage('Please complete required fields (Report Title, Subject Address & Photo).', 'error');  
          return;  
        }  
        generatePdfBtn.disabled = true;  
        generatePdfBtn.textContent = 'Generating...';  
        showMessage('Creating your PDF cover page...', 'info');  
  
        // =================================================================  
        // === START OF MODIFIED PDF GENERATION LOGIC ======================  
        // =================================================================  
        setTimeout(() => {  
          try {  
            const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });  
            const w = doc.internal.pageSize.getWidth();  
            const h = doc.internal.pageSize.getHeight();  
            const marginX = 15;  
              
            // --- HELPER FUNCTIONS (Scoped to this callback) ---  
  
            /** Helper to draw an image, scaling it to fit max dimensions */  
            function drawScaledImage(doc, imgData, x, y, maxW, maxH) {  
                try {  
                    const props = doc.getImageProperties(imgData.dataUrl);  
                    let imgW = props.width;  
                    let imgH = props.height;  
  
                    if (imgW > maxW) {  
                        imgH = (imgH * maxW) / imgW;  
                        imgW = maxW;  
                    }  
                      
                    if (imgH > maxH) {  
                        imgW = (imgW * maxH) / imgH;  
                        imgH = maxH;  
                    }  
                      
                    const imgType = (imgData.file.type || '').toLowerCase().endsWith('png') ? 'PNG' : 'JPEG';  
                    doc.addImage(imgData.dataUrl, imgType, x, y, imgW, imgH);  
                    return imgH; // Return the drawn height  
                } catch (e) {  
                    console.error("Error drawing image: ", e);  
                    return 0;  
                }  
            }  
              
            /** Helper to draw an aligned text field (Label: Value) */  
            function drawField(doc, label, value, x, y, labelWidth = 25) {  
                value = value.trim();  
                if (value) {  
                    doc.text(label, x, y);  
                    doc.text(value, x + labelWidth, y);  
                    return 5; // y-increment  
                }  
                return 0;  
            }  
  
            // === NEW HELPER 1: Calculate Scaled Image Height ===  
            /** Helper to CALCULATE the scaled height of an image */  
            function calculateScaledImageHeight(doc, imgData, maxW, maxH) {  
                if (!imgData || !imgData.dataUrl) return 0;  
                try {  
                    const props = doc.getImageProperties(imgData.dataUrl);  
                    let imgW = props.width;  
                    let imgH = props.height;  
                    if (imgW > maxW) { imgH = (imgH * maxW) / imgW; imgW = maxW; }  
                    if (imgH > maxH) { imgW = (imgW * maxH) / imgH; imgH = maxH; }  
                    return imgH;  
                } catch (e) {  
                    console.error("Error calculating image height: ", e);  
                    return 0;  
                }  
            }  
              
            // === NEW HELPER 2: Calculate Agent Block Height ===  
            /** Helper to calculate Agent block height */  
            function getAgentBlockHeight(doc) {  
                let h = 0;  
                h += 6; // Title  
                const imgH = calculateScaledImageHeight(doc, agentPhoto, 30, 30);  
                if (imgH > 0) {  
                    h += imgH + 5; // Image + padding  
                }  
                h += agentName.value.trim() ? 5 : 0;  
                h += agentTitle.value.trim() ? 5 : 0;  
                h += agentPhone.value.trim() ? 5 : 0;  
                h += agentEmail.value.trim() ? 5 : 0;  
                h += agentWebsite.value.trim() ? 5 : 0;  
                return h;  
            }  
  
            // === NEW HELPER 3: Calculate Brokerage Block Height ===  
            /** Helper to calculate Brokerage block height */  
            function getBrokerageBlockHeight(doc) {  
                let h = 0;  
                h += 6; // Title  
                const imgH = calculateScaledImageHeight(doc, brokerageLogo, 30, 30);  
                if (imgH > 0) {  
                    h += imgH + 5; // Image + padding  
                }  
                const brokerAddr2 = `${brokerageCity.value.trim()}, ${brokerageState.value.trim()} ${brokerageZip.value.trim()}`;  
                  
                h += brokerage.value.trim() ? 5 : 0;  
                h += brokerageAddr1.value.trim() ? 5 : 0;  
                if (brokerAddr2.trim() !== ',') {  
                    h += 5;  
                }  
                h += brokeragePhone.value.trim() ? 5 : 0;  
                return h;  
            }  
  
            // --- END OF HELPER FUNCTIONS ---  
  
            let y = 18; // Start Y position  
  
            // --- Title ---  
            doc.setFontSize(22);  
            doc.text(reportTitle.value.trim(), w/2, y, { align:'center' });  
            y += 10;  
  
            // --- Subject Address ---  
            doc.setFontSize(11);  
            doc.setTextColor(0);  
            const subjAddr = addr1.value.trim() + (unit.value.trim() ? (", " + unit.value.trim()) : "");  
            const subjCity = `${city.value.trim()}, ${stateEl.value.trim()} ${zip.value.trim()}`;  
            doc.text(subjAddr, w/2, y, { align:'center' }); y += 6;  
            doc.text(subjCity, w/2, y, { align:'center' }); y += 10;  
  
            // --- Client's Stated Goal ---  
            let clientGoalVal = clientGoalSelect.value.trim();  
            if (clientGoalVal === 'Other') {  
                clientGoalVal = clientGoalOtherText.value.trim();  
            }  
            if (clientGoalVal) {  
                doc.setFontSize(10);  
                doc.text("Client's Stated Goal: " + clientGoalVal, w/2, y, { align: 'center' });  
                y += 8;  
            }  
              
            // --- Disclosure ---  
            const disclosure = disclosureBox.value.trim();  
            const discX = marginX;  
            let discY = y;  
            const discW = w - 2*marginX;  
            doc.setDrawColor(200);  
            doc.setLineWidth(0.2);  
            doc.setFontSize(9);  
            const discLines = doc.splitTextToSize(disclosure, discW - 6);  
            const discH = discLines.length * 4 + 6;  
            doc.rect(discX, discY, discW, discH);  
            doc.text(discLines, discX + 3, discY + 5);  
            y = discY + discH + 6;  
  
            // --- Client Info Block (Full-Width) ---  
            doc.setFontSize(12);  
            doc.text('Client Information', w/2, y, { align: 'center' }); y += 6;  
              
            doc.setFontSize(10);  
            const clientLabelWidth = 25;  
            const clientAddr2Val = `${clientCity.value.trim()}, ${clientState.value.trim()} ${clientZip.value.trim()}`;  
  
            let maxClientWidth = 0;  
            const clientFields = [  
                {label: "Company:", value: clientCompany.value.trim()},  
                {label: "POC:", value: clientPOC.value.trim()},  
                {label: "Address:", value: clientAddr1.value.trim()},  
                {label: "", value: (clientAddr2Val.trim() !== ',') ? clientAddr2Val : ""},  
                {label: "Phone:", value: clientPhone.value.trim()},  
                {label: "Email:", value: clientEmail.value.trim()}  
            ];  
            clientFields.forEach(field => {  
                if (field.value) {  
                    const labelW = clientLabelWidth;  
                    const valueW = doc.getTextWidth(field.value);  
                    const totalW = labelW + valueW;  
                    if (totalW > maxClientWidth) maxClientWidth = totalW;  
                }  
            });  
            const clientStartX = Math.max(marginX, (w - maxClientWidth) / 2);   
  
            y += drawField(doc, "Company:", clientCompany.value.trim(), clientStartX, y, clientLabelWidth);  
            y += drawField(doc, "POC:", clientPOC.value.trim(), clientStartX, y, clientLabelWidth);  
            y += drawField(doc, "Address:", clientAddr1.value.trim(), clientStartX, y, clientLabelWidth);  
            if (clientAddr2Val.trim() !== ',') {  
                doc.text(clientAddr2Val, clientStartX + clientLabelWidth, y);  
                y += 5;  
            }  
            y += drawField(doc, "Phone:", clientPhone.value.trim(), clientStartX, y, clientLabelWidth);  
            y += drawField(doc, "Email:", clientEmail.value.trim(), clientStartX, y, clientLabelWidth);  
              
            y += 8; // Add padding before photo  
              
            // --- Subject Photo (Centered) ---  
            if (subjectPhoto.dataUrl) {  
                const props = doc.getImageProperties(subjectPhoto.dataUrl);  
                const maxW = w - 2*marginX;   
                const maxH = 70;   
                  
                let imgW = props.width;  
                let imgH = props.height;  
                if (imgW > maxW) { imgH = (imgH * maxW) / imgW; imgW = maxW; }  
                if (imgH > maxH) { imgW = (imgW * maxH) / imgH; imgH = maxH; }  
                  
                const imgX = (w - imgW) / 2;  
                const imgType = (subjectPhoto.file.type || '').toLowerCase().endsWith('png') ? 'PNG' : 'JPEG';  
                doc.addImage(subjectPhoto.dataUrl, imgType, imgX, y, imgW, imgH);  
                y += imgH + 8;  
            }  
              
            // === MODIFICATION: Pre-calculate column heights for bottom-alignment ===  
            const agentBlockH = getAgentBlockHeight(doc);  
            const brokerageBlockH = getBrokerageBlockHeight(doc);  
            const maxBlockH = Math.max(agentBlockH, brokerageBlockH);  
              
            // --- Two-Column Layout ---  
            const col1X = marginX;  
            const col2X = w / 2 + 5;  
            const colWidth = (w / 2) - marginX - 2.5;  
              
            // Set Y-start positions based on calculated heights to bottom-align  
            let yCol1 = y + (maxBlockH - agentBlockH);  
            let yCol2 = y + (maxBlockH - brokerageBlockH);  
              
            // === Column 1: Agent Info ===  
            doc.setFontSize(12);  
            doc.text('Report Created By', col1X, yCol1); yCol1 += 6;   
              
            if (agentPhoto.dataUrl) {  
                const imgW = 30;  
                const imgH = 30;  
                const centeredImgX = col1X + (colWidth - imgW) / 2;   
                const drawnHeight = drawScaledImage(doc, agentPhoto, centeredImgX, yCol1, imgW, imgH);  
                yCol1 += drawnHeight + 5;  
            }  
              
            doc.setFontSize(10);  
            const agentLabelWidth = 15;  
            yCol1 += drawField(doc, "Name:", agentName.value.trim(), col1X, yCol1, agentLabelWidth);   
            yCol1 += drawField(doc, "Title:", agentTitle.value.trim(), col1X, yCol1, agentLabelWidth);   
            yCol1 += drawField(doc, "Phone:", agentPhone.value.trim(), col1X, yCol1, agentLabelWidth);   
            yCol1 += drawField(doc, "Email:", agentEmail.value.trim(), col1X, yCol1, agentLabelWidth);   
            yCol1 += drawField(doc, "Web:", agentWebsite.value.trim(), col1X, yCol1, agentLabelWidth);   
  
            // === Column 2: Brokerage Info ===  
            doc.setFontSize(12);  
            doc.text('Brokerage Information', col2X, yCol2); yCol2 += 6;   
              
            if (brokerageLogo.dataUrl) {  
                const imgW = 30;  
                const imgH = 30;  
                const centeredImgX = col2X + (colWidth - imgW) / 2;   
                const drawnHeight = drawScaledImage(doc, brokerageLogo, centeredImgX, yCol2, imgW, imgH);   
                yCol2 += drawnHeight + 5;   
            }  
              
            doc.setFontSize(10);  
            const brokerLabelWidth = 25;  
            const brokerAddr2 = `${brokerageCity.value.trim()}, ${brokerageState.value.trim()} ${brokerageZip.value.trim()}`;  
              
            yCol2 += drawField(doc, "Brokerage:", brokerage.value.trim(), col2X, yCol2, brokerLabelWidth);   
            yCol2 += drawField(doc, "Address:", brokerageAddr1.value.trim(), col2X, yCol2, brokerLabelWidth);   
            if (brokerAddr2.trim() !== ',') {  
                doc.text(brokerAddr2, col2X + brokerLabelWidth, yCol2);   
                yCol2 += 5;  
            }  
            yCol2 += drawField(doc, "Phone:", brokeragePhone.value.trim(), col2X, yCol2, brokerLabelWidth);   
              
            // --- Set Y to the bottom of the (now aligned) blocks ---  
            y = y + maxBlockH; // MODIFIED: Was Math.max(yCol1, yCol2)  
            y += 8; // Add section break  
  
            // --- Fair Housing ---  
            const fhText = `Equal Housing Opportunity.  
We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation.  
We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.`;  
  
            doc.setFontSize(9);  
            let fhY = Math.max(y + 10, h - 30); // Place at bottom  
            const fhLines = doc.splitTextToSize(fhText, w - 2*marginX);  
            doc.text(fhLines, marginX, fhY);  
  
            doc.save('BPO-Cover-Subject.pdf');  
            showMessage('PDF generated successfully!', 'success');  
          } catch (err) {  
            console.error(err);  
            showMessage('Error generating PDF: ' + err.message, 'error');  
          } finally {  
            generatePdfBtn.disabled = false;  
            generatePdfBtn.textContent = 'Generate PDF';  
          }  
        }, 50);  
        // =================================================================  
        // === END OF MODIFIED PDF GENERATION LOGIC ========================  
        // =================================================================  
      });  
        
      // Initial state  
      updateButtonState();  
      updateDisclosure();  
      // --- FIXED: Check "Other" goal on load ---  
      clientGoalOtherWrapper.classList.toggle('hidden', clientGoalSelect.value !== 'Other'); // Run on load to set initial state  
    })(); // End of IIFE scope  
  </script>  
  
  
<!-- /wp:html -->  
  
<!-- wp:html -->  
</body>  
</html>  
<!-- /wp:html -->  
