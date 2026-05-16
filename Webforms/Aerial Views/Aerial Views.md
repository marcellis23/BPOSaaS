# Aerial Views  
<!-- wp:html -->  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
  <title>Subject Aerial View Photo Form</title>  
  
  <script src="https://cdn.tailwindcss.com"></script>  
  <script>  
    tailwind.config = {  
      theme: {  
        extend: {  
          fontFamily: { sans: ['Inter','sans-serif'] },  
        },  
      },  
    }  
  </script>  
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">  
  
  <style>  
    .photo-upload-box {  
      border: 2px dashed #d1d5db;  
      transition: border-color 0.2s, background-color 0.2s;  
    }  
    .photo-upload-box:hover { border-color:#4f46e5; background-color:#f9fafb; }  
    .photo-upload-box img { display:none; }  
    .photo-upload-box.has-image { border-style:solid; border-color:#16a34a; }  
    .photo-upload-box.has-image img { display:block; }  
    .photo-upload-box.has-image .upload-prompt { display:none; }  
  </style>  
</head>  
<body class="bg-gray-100 text-gray-800 font-sans">  
  <div class="container mx-auto p-4 sm:p-6 lg:p-8 max-w-5xl">  
    <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">  
      <div class="text-center mb-8">  
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Aerial Photos of Subject Property</h1>  
        <p class="mt-2 text-gray-600">Add labeled photos and generate a PDF. Include optional aerial views.</p>  
      </div>  
  
      <div class="mt-4 mb-8 max-w-3xl mx-auto">  
        <h3 class="block text-lg font-semibold text-gray-900 mb-3 text-center">Subject Property Address</h3>  
        <div class="grid grid-cols-1 md:grid-cols-6 gap-4">  
          <div class="md:col-span-4">  
            <label for="propertyAddress" class="block text-sm font-medium text-gray-700">Property Address</label>  
            <input type="text" id="propertyAddress" name="propertyAddress" placeholder="123 Main St" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
          </div>  
          <div class="md:col-span-2">  
            <label for="propertyUnit" class="block text-sm font-medium text-gray-700">Apt/Lot/Parcel#</label>  
            <input type="text" id="propertyUnit" name="propertyUnit" placeholder="Unit 2B" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
          </div>  
          <div class="md:col-span-3">  
            <label for="propertyCity" class="block text-sm font-medium text-gray-700">City / Town</label>  
            <input type="text" id="propertyCity" name="propertyCity" placeholder="Philadelphia" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
          </div>  
          <div class="md:col-span-1">  
            <label for="propertyState" class="block text-sm font-medium text-gray-700">State</label>  
            <select id="propertyState" name="propertyState" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
              <option value="">--</option>  
              <option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option>  
              <option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="FL">FL</option><option value="GA">GA</option>  
              <option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option>  
              <option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option>  
              <option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option>  
              <option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option>  
              <option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="OH">OH</option>  
              <option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option>  
              <option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option>  
              <option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option>  
            </select>  
          </div>  
          <div class="md:col-span-2">  
            <label for="propertyZip" class="block text-sm font-medium text-gray-700">Zip Code</label>  
            <input type="text" id="propertyZip" name="propertyZip" placeholder="19103" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
          </div>  
        </div>  
      </div>  
  
      <div class="flex flex-wrap items-center gap-3 mb-4">  
        <button id="addPhotoBtn" class="inline-flex items-center px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">  
          + Add Photo  
        </button>  
        <span id="photoCount" class="text-sm text-gray-600">0 photos</span>  
      </div>  
  
      <div id="photo-upload-container" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>  
  
      <div class="mt-12 pt-8 border-t border-gray-200">  
        <h2 class="text-xl font-semibold text-gray-900">Map & Aerial Views (Optional)</h2>  
        <p class="text-sm text-gray-600 mt-1">Upload desired aerials, maps, and exhibits. PDF output will be formatted based on your selections.</p>  
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">  
            
          <!-- Market Area View Standard -->  
          <div>  
            <label for="aerial-market-std-input" class="font-medium text-gray-800">Market Area View Standard</label>  
            <label id="aerial-market-std-box" for="aerial-market-std-input" class="photo-upload-box w-full h-48 rounded-lg mt-2 flex items-center justify-center text-center cursor-pointer p-2">  
              <div class="upload-prompt text-gray-500">  
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <p>Click to upload</p>  
              </div>  
              <img id="aerial-market-std-preview" alt="" class="w-full h-full object-contain rounded-md"/>  
            </label>  
            <input id="aerial-market-std-input" type="file" accept="image/*" class="hidden">  
          </div>  
  
          <!-- Market Area View Satellite -->  
          <div>  
            <label for="aerial-market-sat-input" class="font-medium text-gray-800">Market Area View Satellite</label>  
            <label id="aerial-market-sat-box" for="aerial-market-sat-input" class="photo-upload-box w-full h-48 rounded-lg mt-2 flex items-center justify-center text-center cursor-pointer p-2">  
              <div class="upload-prompt text-gray-500">  
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <p>Click to upload</p>  
              </div>  
              <img id="aerial-market-sat-preview" alt="" class="w-full h-full object-contain rounded-md"/>  
            </label>  
            <input id="aerial-market-sat-input" type="file" accept="image/*" class="hidden">  
          </div>  
  
          <!-- Neighborhood View Standard -->  
          <div>  
            <label for="aerial-neighbor-std-input" class="font-medium text-gray-800">Neighborhood View Standard</label>  
            <label id="aerial-neighbor-std-box" for="aerial-neighbor-std-input" class="photo-upload-box w-full h-48 rounded-lg mt-2 flex items-center justify-center text-center cursor-pointer p-2">  
              <div class="upload-prompt text-gray-500">  
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <p>Click to upload</p>  
              </div>  
              <img id="aerial-neighbor-std-preview" alt="" class="w-full h-full object-contain rounded-md"/>  
            </label>  
            <input id="aerial-neighbor-std-input" type="file" accept="image/*" class="hidden">  
          </div>  
  
          <!-- Neighborhood View Satellite -->  
          <div>  
            <label for="aerial-neighbor-sat-input" class="font-medium text-gray-800">Neighborhood View Satellite</label>  
            <label id="aerial-neighbor-sat-box" for="aerial-neighbor-sat-input" class="photo-upload-box w-full h-48 rounded-lg mt-2 flex items-center justify-center text-center cursor-pointer p-2">  
              <div class="upload-prompt text-gray-500">  
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <p>Click to upload</p>  
              </div>  
              <img id="aerial-neighbor-sat-preview" alt="" class="w-full h-full object-contain rounded-md"/>  
            </label>  
            <input id="aerial-neighbor-sat-input" type="file" accept="image/*" class="hidden">  
          </div>  
  
          <!-- Flood Map (Neighborhood View) -->  
          <div>  
            <label for="aerial-flood-input" class="font-medium text-gray-800">Flood Map (Neighborhood View)</label>  
            <label id="aerial-flood-box" for="aerial-flood-input" class="photo-upload-box w-full h-48 rounded-lg mt-2 flex items-center justify-center text-center cursor-pointer p-2">  
              <div class="upload-prompt text-gray-500">  
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <p>Click to upload</p>  
              </div>  
              <img id="aerial-flood-preview" alt="" class="w-full h-full object-contain rounded-md"/>  
            </label>  
            <input id="aerial-flood-input" type="file" accept="image/*" class="hidden">  
          </div>  
  
          <!-- Plat/Tax Map -->  
          <div>  
            <label for="aerial-plat-input" class="font-medium text-gray-800">Plat/Tax Map</label>  
            <label id="aerial-plat-box" for="aerial-plat-input" class="photo-upload-box w-full h-48 rounded-lg mt-2 flex items-center justify-center text-center cursor-pointer p-2">  
              <div class="upload-prompt text-gray-500">  
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <p>Click to upload</p>  
              </div>  
              <img id="aerial-plat-preview" alt="" class="w-full h-full object-contain rounded-md"/>  
            </label>  
            <input id="aerial-plat-input" type="file" accept="image/*" class="hidden">  
          </div>  
  
          <!-- Zoning Map (Neighborhood View) -->  
          <div>  
            <label for="aerial-zoning-input" class="font-medium text-gray-800">Zoning Map (Neighborhood View)</label>  
            <label id="aerial-zoning-box" for="aerial-zoning-input" class="photo-upload-box w-full h-48 rounded-lg mt-2 flex items-center justify-center text-center cursor-pointer p-2">  
              <div class="upload-prompt text-gray-500">  
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <p>Click to upload</p>  
              </div>  
              <img id="aerial-zoning-preview" alt="" class="w-full h-full object-contain rounded-md"/>  
            </label>  
            <input id="aerial-zoning-input" type="file" accept="image/*" class="hidden">  
          </div>  
  
        </div>  
      </div>  
  
      <div id="messageBox" class="mt-6 hidden p-4 rounded-md text-sm"></div>  
  
      <div class="mt-8 flex flex-wrap gap-3 justify-center">  
        <button id="generatePdfBtn" class="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100" disabled>  
          Generate PDF  
        </button>  
        <button id="clearAllBtn" class="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">  
          Clear All  
        </button>  
      </div>  
    </div>  
  </div>  
  
  <script>  
    /* Setup */  
    window.jsPDF = window.jspdf.jsPDF;  
    const photoContainer   = document.getElementById('photo-upload-container');  
    const addPhotoBtn      = document.getElementById('addPhotoBtn');  
    const generatePdfBtn   = document.getElementById('generatePdfBtn');  
    const clearAllBtn      = document.getElementById('clearAllBtn');  
    const messageBox       = document.getElementById('messageBox');  
    const photoCountEl     = document.getElementById('photoCount');  
      
    // Address Elements  
    const propertyAddressInput = document.getElementById('propertyAddress');  
    const propertyUnitInput    = document.getElementById('propertyUnit');  
    const propertyCityInput    = document.getElementById('propertyCity');  
    const propertyStateInput   = document.getElementById('propertyState');  
    const propertyZipInput     = document.getElementById('propertyZip');  
  
    // Map & Aerial Elements  
    const aerialMarketStdInput   = document.getElementById('aerial-market-std-input');  
    const aerialMarketStdBox     = document.getElementById('aerial-market-std-box');  
    const aerialMarketStdPreview = document.getElementById('aerial-market-std-preview');  
  
    const aerialMarketSatInput   = document.getElementById('aerial-market-sat-input');  
    const aerialMarketSatBox     = document.getElementById('aerial-market-sat-box');  
    const aerialMarketSatPreview = document.getElementById('aerial-market-sat-preview');  
  
    const aerialNeighborStdInput   = document.getElementById('aerial-neighbor-std-input');  
    const aerialNeighborStdBox     = document.getElementById('aerial-neighbor-std-box');  
    const aerialNeighborStdPreview = document.getElementById('aerial-neighbor-std-preview');  
  
    const aerialNeighborSatInput   = document.getElementById('aerial-neighbor-sat-input');  
    const aerialNeighborSatBox     = document.getElementById('aerial-neighbor-sat-box');  
    const aerialNeighborSatPreview = document.getElementById('aerial-neighbor-sat-preview');  
  
    const aerialFloodInput   = document.getElementById('aerial-flood-input');  
    const aerialFloodBox     = document.getElementById('aerial-flood-box');  
    const aerialFloodPreview = document.getElementById('aerial-flood-preview');  
  
    const aerialPlatInput   = document.getElementById('aerial-plat-input');  
    const aerialPlatBox     = document.getElementById('aerial-plat-box');  
    const aerialPlatPreview = document.getElementById('aerial-plat-preview');  
      
    const aerialZoningInput   = document.getElementById('aerial-zoning-input');  
    const aerialZoningBox     = document.getElementById('aerial-zoning-box');  
    const aerialZoningPreview = document.getElementById('aerial-zoning-preview');  
  
    // Internal state  
    // Dynamic regular photos (each: { id, file, dataUrl, label })  
    let photos = [];  
  
    // Aerials Configuration  
    const aerials = {  
      marketStd:   { key:'marketStd',   label:'Market Area View Standard',    file:null, dataUrl:null, el:{input:aerialMarketStdInput, box:aerialMarketStdBox, img:aerialMarketStdPreview} },  
      marketSat:   { key:'marketSat',   label:'Market Area View Satellite',   file:null, dataUrl:null, el:{input:aerialMarketSatInput, box:aerialMarketSatBox, img:aerialMarketSatPreview} },  
      neighborStd: { key:'neighborStd', label:'Neighborhood View Standard',   file:null, dataUrl:null, el:{input:aerialNeighborStdInput, box:aerialNeighborStdBox, img:aerialNeighborStdPreview} },  
      neighborSat: { key:'neighborSat', label:'Neighborhood View Satellite',  file:null, dataUrl:null, el:{input:aerialNeighborSatInput, box:aerialNeighborSatBox, img:aerialNeighborSatPreview} },  
      flood:       { key:'flood',       label:'Flood Map (Neighborhood View)',file:null, dataUrl:null, el:{input:aerialFloodInput, box:aerialFloodBox, img:aerialFloodPreview} },  
      plat:        { key:'plat',        label:'Plat/Tax Map',                 file:null, dataUrl:null, el:{input:aerialPlatInput, box:aerialPlatBox, img:aerialPlatPreview} },  
      zoning:      { key:'zoning',      label:'Zoning Map (Neighborhood View)',file:null, dataUrl:null, el:{input:aerialZoningInput, box:aerialZoningBox, img:aerialZoningPreview} },  
    };  
  
    /* Utilities */  
    function uid() {  
      return 'p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);  
    }  
  
    function totalUploadedCount() {  
      const reg = photos.filter(p => !!p.file).length;  
      const aer = Object.values(aerials).filter(a => !!a.file).length;  
      return reg + aer;  
    }  
  
    function updatePhotoCount() {  
      const count = totalUploadedCount();  
      photoCountEl.textContent = `${count} ${count === 1 ? 'photo' : 'photos'}`;  
    }  
  
    function setGenerateEnabled() {  
      generatePdfBtn.disabled = totalUploadedCount() === 0;  
    }  
  
    function showMessage(text, type='info') {  
      messageBox.textContent = text;  
      messageBox.classList.remove('hidden','bg-blue-100','text-blue-800','bg-green-100','text-green-800','bg-red-100','text-red-800');  
      if (type==='info')    messageBox.classList.add('bg-blue-100','text-blue-800');  
      if (type==='success') messageBox.classList.add('bg-green-100','text-green-800');  
      if (type==='error')   messageBox.classList.add('bg-red-100','text-red-800');  
    }  
  
    /* Dynamic Photo Slots (regular, labeled) */  
    function addPhotoSlot(prefill = {}) {  
      const id = prefill.id || uid();  
  
      const container = document.createElement('div');  
      container.className = 'flex flex-col gap-2';  
      container.id = `${id}-slot`;  
  
      const labelWrap = document.createElement('div');  
      labelWrap.className = 'flex items-center gap-2';  
  
      const labelEl = document.createElement('input');  
      labelEl.type = 'text';  
      labelEl.placeholder = 'Enter photo label (e.g., Subject Front)';  
      labelEl.className = 'flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500';  
      labelEl.value = prefill.label || '';  
  
      const removeBtn = document.createElement('button');  
      removeBtn.type = 'button';  
      removeBtn.className = 'px-3 py-2 rounded-lg bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700';  
      removeBtn.textContent = 'Remove';  
      removeBtn.addEventListener('click', () => removePhotoSlot(id));  
  
      labelWrap.appendChild(labelEl);  
      labelWrap.appendChild(removeBtn);  
      const uploadBox = document.createElement('label');  
      uploadBox.htmlFor = `${id}-input`;  
      uploadBox.className = 'photo-upload-box w-full h-48 rounded-lg flex items-center justify-center text-center cursor-pointer p-2';  
      uploadBox.id = `${id}-box`;  
  
      const prompt = document.createElement('div');  
      prompt.className = 'upload-prompt text-gray-500';  
      prompt.innerHTML = `  
        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">  
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>  
        </svg>  
        <p>Click to upload</p>  
      `;  
  
      const img = document.createElement('img');  
      img.id = `${id}-preview`;  
      img.alt = '';  
      img.className = 'w-full h-full object-contain rounded-md';  
        
      const input = document.createElement('input');  
      input.type = 'file';  
      input.id = `${id}-input`;  
      input.accept = 'image/*';  
      input.className = 'hidden';  
      input.addEventListener('change', e => handleRegularFileSelect(e, id));  
        
      labelEl.addEventListener('input', () => {  
        const p = photos.find(x => x.id === id);  
        if (p) p.label = labelEl.value.trim();  
      });  
        
      uploadBox.appendChild(prompt);  
      uploadBox.appendChild(img);  
  
      container.appendChild(labelWrap);  
      container.appendChild(uploadBox);  
      container.appendChild(input);  
  
      photoContainer.appendChild(container);  
  
      if (!photos.find(x => x.id === id)) {  
        photos.push({ id, file: null, dataUrl: null, label: labelEl.value.trim() });  
        updatePhotoCount();  
        setGenerateEnabled();  
      }  
    }  
  
    function removePhotoSlot(id) {  
      const el = document.getElementById(`${id}-slot`);  
      if (el) el.remove();  
      photos = photos.filter(p => p.id !== id);  
      updatePhotoCount();  
      setGenerateEnabled();  
    }  
  
    function handleRegularFileSelect(event, id) {  
      const file = event.target.files?.[0];  
      if (!file) return;  
      const p = photos.find(x => x.id === id);  
      if (!p) return;  
  
      const reader = new FileReader();  
      reader.onload = e => {  
        p.file   = file;  
        p.dataUrl = e.target.result;  
        const imgEl = document.getElementById(`${id}-preview`);  
        const box   = document.getElementById(`${id}-box`);  
        imgEl.src   = p.dataUrl;  
        box.classList.add('has-image');  
  
        updatePhotoCount();  
        setGenerateEnabled();  
        showMessage('Photo added. You can add more or generate the PDF.', 'success');  
      };  
      reader.readAsDataURL(file);  
    }  
  
    /* Aerial Upload Handlers */  
    function bindAerialInput(a) {  
      a.el.input.addEventListener('change', (e) => {  
        const file = e.target.files?.[0];  
        if (!file) return;  
  
        const reader = new FileReader();  
        reader.onload = ev => {  
          a.file = file;  
          a.dataUrl = ev.target.result;  
          
          a.el.img.src = a.dataUrl;  
          a.el.box.classList.add('has-image');  
  
          updatePhotoCount();  
          setGenerateEnabled();  
          showMessage(`${a.label} added.`, 'success');  
        };  
        reader.readAsDataURL(file);  
      });  
    }  
  
    Object.values(aerials).forEach(bindAerialInput);  
  
    /* --- PDF Generation --- */  
  
    function drawPageHeader(doc, title, address) {  
      const w = doc.internal.pageSize.getWidth();  
      const titleTop = 16;  
      let dateTop = titleTop + 7;  
      let contentTopMargin = dateTop + 6;  
        
      doc.setFontSize(18);  
      doc.setFont('helvetica', 'bold');  
      doc.text(title, w/2, titleTop, { align:'center' });  
  
      if (address) {  
        doc.setFontSize(12);  
        doc.setFont('helvetica', 'normal');  
        doc.text(address, w/2, titleTop + 7, { align:'center', maxWidth: w - 40 });  
        const addressLines = doc.splitTextToSize(address, w - 40).length;  
        dateTop = titleTop + (addressLines * 5) + 4;  
      }  
  
      doc.setFontSize(9);  
      doc.setFont('helvetica', 'normal');  
      doc.setTextColor(120);  
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, w/2, dateTop, { align:'center' });  
      doc.setTextColor(0);  
        
      contentTopMargin = dateTop + 6;  
  
      return contentTopMargin;  
    }  
      
    function drawImageInRect(doc, slot, x, y, w, h) {  
      const type = (slot.file?.type || '').toLowerCase().endsWith('png') ? 'PNG' : 'JPEG';  
      const props = doc.getImageProperties(slot.dataUrl);  
        
      let imgW = w;  
      let imgH = (props.height * imgW) / props.width;  
      if (imgH > h) {  
        imgH = h;  
        imgW = (props.width * imgH) / props.height;  
      }  
        
      const imgX = x + (w - imgW) / 2;  
      const imgY = y + (h - imgH) / 2;  
      doc.addImage(slot.dataUrl, type, imgX, imgY, imgW, imgH);  
    }  
      
    function drawTwoUpStack(doc, slot1, slot2, topMargin) {  
      const w = doc.internal.pageSize.getWidth();  
      const h = doc.internal.pageSize.getHeight();  
      const margin = 12;  
      const gutter = 10;  
      const labelHeight = 8;  
        
      const usableW = w - 2 * margin;  
      const usableH = h - topMargin - margin;  
      const blockHeight = (usableH - gutter) / 2;  
      const imgHeight = blockHeight - labelHeight;  
        
      const x = margin;  
        
      if (slot1) {  
        const y1 = topMargin;  
        doc.setFontSize(11);  
        doc.setFont('helvetica', 'bold');  
        doc.text(slot1.label, w/2, y1 + 5, { align:'center', maxWidth: usableW - 2 });  
        drawImageInRect(doc, slot1, x, y1 + labelHeight, usableW, imgHeight);  
      }  
        
      if (slot2) {  
        const y2 = topMargin + blockHeight + gutter;  
        doc.setFontSize(11);  
        doc.setFont('helvetica', 'bold');  
        doc.text(slot2.label, w/2, y2 + 5, { align:'center', maxWidth: usableW - 2 });  
        drawImageInRect(doc, slot2, x, y2 + labelHeight, usableW, imgHeight);  
      }  
    }  
  
    function generatePDF() {  
      try {  
        const addr = propertyAddressInput.value.trim();  
        const unit = propertyUnitInput.value.trim();  
        const city = propertyCityInput.value.trim();  
        const state = propertyStateInput.value.trim();  
        const zip = propertyZipInput.value.trim();  
          
        let line1 = addr;  
        if (unit) line1 += `, ${unit}`;  
          
        let line2 = city;  
        if (city && state) line2 += `, ${state}`;  
        else if (state) line2 += state;  
        if (zip) line2 += ` ${zip}`;  
  
        let fullAddress = line1;  
        if (line2) fullAddress += `\n${line2}`;  
          
        const address = fullAddress.trim() ? fullAddress.trim() : null;  
          
        const printable = photos.filter(p => !!p.file);  
          
        // Grab values from predefined fields  
        const mStd = aerials.marketStd.file ? aerials.marketStd : null;  
        const mSat = aerials.marketSat.file ? aerials.marketSat : null;  
        const nStd = aerials.neighborStd.file ? aerials.neighborStd : null;  
        const nSat = aerials.neighborSat.file ? aerials.neighborSat : null;  
        const flood = aerials.flood.file ? aerials.flood : null;  
        const plat = aerials.plat.file ? aerials.plat : null;  
        const zoning = aerials.zoning.file ? aerials.zoning : null;  
  
        if (printable.length === 0 && !mStd && !mSat && !nStd && !nSat && !flood && !plat && !zoning) {  
          showMessage('Please add at least one photo before generating the PDF.', 'error');  
          return;  
        }  
  
        const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });  
        const w = doc.internal.pageSize.getWidth();  
        const h = doc.internal.pageSize.getHeight();  
        let pageAdded = false;  
        let headerHeight = 0;  
  
        // --- Page Layout Logic ---  
  
        const aerialPairs = [  
          [mStd, mSat],  
          [nStd, nSat],  
          [flood, plat],  
          [zoning, null]  
        ];  
  
        aerialPairs.forEach(pair => {  
          if (pair[0] || pair[1]) {  
            if (pageAdded) doc.addPage();  
            headerHeight = drawPageHeader(doc, 'Map & Aerial Views', address);  
              
            // Shift second image to top slot if first is missing  
            let topImg = pair[0];  
            let btmImg = pair[1];  
            if (!topImg && btmImg) {  
              topImg = btmImg;  
              btmImg = null;  
            }  
            drawTwoUpStack(doc, topImg, btmImg, headerHeight);  
            pageAdded = true;  
          }  
        });  
  
        // Render regular dynamic photos, 2 per row, 3 rows per page  
        if (printable.length > 0) {  
          if (pageAdded) doc.addPage();  
            
          const marginX = 12;  
          const topOtherPages = 15;  
          const firstPageHeaderHeight = drawPageHeader(doc, 'Property & Field Photos', address);  
          const topFirstPage = firstPageHeaderHeight;   
            
          const cols = 2;  
          const rows = 3;  
          const gutterX = 8;  
          const gutterY = 10;  
          const labelHeight = 6;  
          const perPage = cols * rows;  
  
          let pageIndex = 0;  
          printable.forEach((p, i) => {  
            const slotIndex = i % perPage;  
            if (i > 0 && slotIndex === 0) {  
              doc.addPage();  
              pageIndex++;  
              drawPageHeader(doc, 'Property & Field Photos (cont.)', address);  
            }  
  
            const topMargin = (pageIndex === 0) ? topFirstPage : topOtherPages;  
            const usableWidth = w - 2 * marginX;  
            const pageHeaderHeight = (pageIndex === 0) ? topFirstPage : topOtherPages;  
            const usableHeight = h - pageHeaderHeight - marginX;  
            const thumbWidth = (usableWidth - (cols - 1) * gutterX) / cols;  
            const blockHeight = (usableHeight - (rows - 1) * gutterY) / rows;  
            const row = Math.floor(slotIndex / cols);  
            const col = slotIndex % cols;  
            const x = marginX + col * (thumbWidth + gutterX);  
            const y = topMargin + row * (blockHeight + gutterY);  
  
            const label = (p.label && p.label.trim()) ? p.label.trim() : 'Untitled Photo';  
            doc.setFontSize(10);  
            doc.setFont('helvetica', 'normal');  
            doc.text(label, x + thumbWidth / 2, y + 4, { align:'center', maxWidth: thumbWidth - 2 });  
            const maxImgH = blockHeight - labelHeight - 4;  
              
            drawImageInRect(doc, p, x, y + labelHeight + 2, thumbWidth, maxImgH);  
          });  
        }  
  
        doc.save('Subject-Photos.pdf');  
        showMessage('PDF generated successfully!', 'success');  
      } catch (err) {  
        console.error(err);  
        showMessage('Error generating PDF. Please try again or check console.', 'error');  
      }  
    }  
  
    /* Event Listeners */  
    addPhotoBtn.addEventListener('click', () => addPhotoSlot());  
    document.addEventListener('DOMContentLoaded', () => {  
      messageBox.classList.add('hidden');  
      addPhotoSlot();   
      updatePhotoCount();  
      setGenerateEnabled();  
    });  
  
    document.getElementById('generatePdfBtn').addEventListener('click', () => {  
      generatePdfBtn.disabled = true;  
      generatePdfBtn.textContent = 'Generating...';  
      showMessage('Creating your PDF...', 'info');  
      setTimeout(() => {  
        generatePDF();  
        generatePdfBtn.disabled = false;  
        generatePdfBtn.textContent = 'Generate PDF';  
      }, 50);  
    });  
      
    clearAllBtn.addEventListener('click', () => {  
      photos = [];  
      photoContainer.innerHTML = '';  
      addPhotoSlot();  
  
      Object.values(aerials).forEach(a => {  
        a.file = null;  
        a.dataUrl = null;  
        a.el.img.removeAttribute('src');  
        a.el.box.classList.remove('has-image');  
        a.el.input.value = '';  
      });  
        
      propertyAddressInput.value = '';  
      propertyUnitInput.value = '';  
      propertyCityInput.value = '';  
      propertyStateInput.value = '';  
      propertyZipInput.value = '';  
  
      updatePhotoCount();  
      setGenerateEnabled();  
      showMessage('All fields and photos cleared.', 'info');  
    });  
  </script>  
</body>  
</html>  
<!-- /wp:html -->  
