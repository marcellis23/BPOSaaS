# Floor Plan Sketch Photos  
<!-- wp:html -->  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
  <title>Subject Floor Plan Sketch Form</title>  
  
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
      border: 2px dashed   
#d1d5db;  
      transition: border-color 0.2s, background-color 0.2s;  
}  
    .photo-upload-box:hover { border-color:#4f46e5; background-color:#f9fafb;  
}  
    .photo-upload-box img { display:none;  
}  
    .photo-upload-box.has-image { border-style:solid; border-color:#16a34a;  
}  
    .photo-upload-box.has-image img { display:block;  
}  
    .photo-upload-box.has-image .upload-prompt { display:none;  
}  
  </style>  
</head>  
<body class="bg-gray-100 text-gray-800 font-sans">  
  <div class="container mx-auto p-4 sm:p-6 lg:p-8 max-w-5xl">  
    <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">  
      <div class="text-center mb-8">  
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Floor Plan Sketch of Subject Property</h1>  
        <p class="mt-2 text-gray-600">Add labeled floor plans and generate a PDF.  
</p>  
      </div>  
  
      <div class="mt-4 mb-8 max-w-3xl mx-auto">  
        <h3 class="block text-lg font-semibold text-gray-900 mb-3 text-center">Subject Property Address</h3>  
        <div class="grid grid-cols-1 md:grid-cols-6 gap-4">  
          <div class="md:col-span-4">  
            <label for="propertyAddress" class="block text-sm font-medium text-gray-700">Property Address</label>  
            <input type="text" id="propertyAddress" name="propertyAddress" placeholder="123 Main St" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500   
focus:ring-indigo-500">  
          </div>  
          <div class="md:col-span-2">  
            <label for="propertyUnit" class="block text-sm font-medium text-gray-700">Apt/Lot/Parcel#</label>  
            <input type="text" id="propertyUnit" name="propertyUnit" placeholder="Unit 2B" class="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
          </div>  
          <div class="md:col-span-3">  
            <label for="propertyCity" class="block text-sm font-medium text-gray-700">City   
/ Town</label>  
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
          + Add Floor Plan  
        </button>  
        <span id="photoCount" class="text-sm text-gray-600">0 floor plans</span>  
      </div>  
  
         <div id="photo-upload-container" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>  
  
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
// MODIFIED: Address Elements  
    const propertyAddressInput = document.getElementById('propertyAddress');  
    const propertyUnitInput    = document.getElementById('propertyUnit');  
const propertyCityInput    = document.getElementById('propertyCity');  
    const propertyStateInput   = document.getElementById('propertyState');  
const propertyZipInput     = document.getElementById('propertyZip');  
  
// Internal state  
    // Dynamic regular photos (each: { id, file, dataUrl, label })  
    let photos = [];  
/* Utilities */  
    function uid() {  
      return 'p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);  
}  
  
    function totalUploadedCount() {  
      const reg = photos.filter(p => !!p.file).length;  
return reg;  
}  
  
    function updatePhotoCount() {  
      const count = totalUploadedCount();  
photoCountEl.textContent = `${count} ${count === 1 ? 'floor plan' : 'floor plans'}`;  
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
      const id = prefill.id ||  
uid();  
  
      const container = document.createElement('div');  
      container.className = 'flex flex-col gap-2';  
      container.id = `${id}-slot`;  
  
      const labelWrap = document.createElement('div');  
labelWrap.className = 'flex items-center gap-2';  
  
      const labelEl = document.createElement('input');  
      labelEl.type = 'text';  
      labelEl.placeholder = 'Enter photo label (e.g., First Floor)';  
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
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"  
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>  
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
showMessage('Floor plan added. You can add more or generate the PDF.', 'success');  
      };  
      reader.readAsDataURL(file);  
}  
  
    /* --- PDF Generation (HEAVILY MODIFIED) --- */  
  
    // NEW HELPER: Draw standardized page header  
    function drawPageHeader(doc, title, address) {  
      const w = doc.internal.pageSize.getWidth();  
const titleTop = 16;  
      let dateTop = titleTop + 7;  
      let contentTopMargin = dateTop + 6;  
// Return this  
        
      doc.setFontSize(18);  
      doc.setFont('helvetica', 'bold');  
doc.text(title, w/2, titleTop, { align:'center' });  
  
      if (address) {  
        doc.setFontSize(12);  
        doc.setFont('helvetica', 'normal');  
// jsPDF handles newlines in the text string  
        doc.text(address, w/2, titleTop + 7, { align:'center', maxWidth: w - 40 });  
// Adjust dateTop based on address lines  
        const addressLines = doc.splitTextToSize(address, w - 40).length;  
dateTop = titleTop + (addressLines * 5) + 4; // 5mm per line + 4mm padding  
      }  
  
      doc.setFontSize(9);  
doc.setFont('helvetica', 'normal');  
      doc.setTextColor(120);  
      doc.text(`Generated on: ${new Date().toLocaleDateString()}`, w/2, dateTop, { align:'center' });  
      doc.setTextColor(0);  
        
      contentTopMargin = dateTop + 6;  
  
      return contentTopMargin;  
// e.g., 34mm  
    }  
      
    // NEW HELPER: Draw an image to fit a specific rect  
    function drawImageInRect(doc, slot, x, y, w, h) {  
      const type = (slot.file?.type || '').toLowerCase().endsWith('png') ?  
'PNG' : 'JPEG';  
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
      
    // NEW HELPER: Draw a single full-page image  
    function drawFullPageImage(doc, slot, topMargin) {  
      const w = doc.internal.pageSize.getWidth();  
const h = doc.internal.pageSize.getHeight();  
      const margin = 12;  
        
      const usableW = w - 2 * margin;  
const usableH = h - topMargin - margin;  
        
      drawImageInRect(doc, slot, margin, topMargin, usableW, usableH);  
}  
  
    // NEW HELPER: Draw two images stacked vertically  
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
// Top Image  
      if (slot1) {  
        const y1 = topMargin;  
doc.setFontSize(11);  
        doc.setFont('helvetica', 'bold');  
        doc.text(slot1.label || 'Untitled', w/2, y1 + 5, { align:'center', maxWidth: usableW - 2 });  
drawImageInRect(doc, slot1, x, y1 + labelHeight, usableW, imgHeight);  
      }  
        
      // Bottom Image  
      if (slot2) {  
        const y2 = topMargin + blockHeight + gutter;  
doc.setFontSize(11);  
        doc.setFont('helvetica', 'bold');  
        doc.text(slot2.label || 'Untitled', w/2, y2 + 5, { align:'center', maxWidth: usableW - 2 });  
drawImageInRect(doc, slot2, x, y2 + labelHeight, usableW, imgHeight);  
      }  
    }  
  
    function generatePDF() {  
      try {  
        // MODIFIED: Build address string  
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
if (printable.length === 0) {  
          showMessage('Please add at least one floor plan before generating the PDF.', 'error');  
return;  
        }  
  
        const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });  
const w = doc.internal.pageSize.getWidth();  
        const h = doc.internal.pageSize.getHeight();  
          
// --- Page Layout Logic ---  
        // MODIFIED: Render all photos 2 per page (stacked)  
        if (printable.length > 0) {  
          for (let i = 0; i < printable.length; i += 2) {  
            if (i > 0) {  
              doc.addPage();  
            }  
              
            const slot1 = printable[i];  
            const slot2 = (i + 1 < printable.length) ? printable[i + 1] : null;  
              
            const title = (i === 0) ? 'Floor Plan Sketches' : 'Floor Plan Sketches (cont.)';   
            const headerHeight = drawPageHeader(doc, title, address);   
              
            // Use the two-up stack helper  
            drawTwoUpStack(doc, slot1, slot2, headerHeight);   
          }  
        }  
  
        doc.save('Floor-Plan-Sketches.pdf');  
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
      addPhotoSlot();        // start with one regular slot  
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
      // Clear regular photos  
      photos = [];  
      photoContainer.innerHTML = '';  
      addPhotoSlot();  
        
      // MODIFIED: Clear address  
      propertyAddressInput.value = '';  
      propertyUnitInput.value = '';  
      propertyCityInput.value = '';  
      propertyStateInput.value = ''; // Resets dropdown to "--"  
propertyZipInput.value = '';  
  
      updatePhotoCount();  
      setGenerateEnabled();  
   
     showMessage('All fields and photos cleared.', 'info');  
    });  
</script>  
</body>  
</html>  
<!-- /wp:html -->  
