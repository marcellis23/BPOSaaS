# Subject Property - Additional Photos  
<!-- wp:html -->  
<html lang="en">  
<head>  
  <meta charset="UTF-8" />  
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
  <title>Subject Property - Additional Photos Form</title>  
  
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
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Subject Property Photos</h1>  
        <p class="mt-2 text-gray-600">Add labeled photos and generate a PDF (2 per row, 6 per page).</p>  
      </div>  
  
      <div class="mb-6">  
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Property Address</h2>  
          
        <div class="grid grid-cols-1 gap-4">  
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
            <div class="sm:col-span-2">  
              <label for="streetAddress" class="block text-sm font-medium text-gray-700 mb-1">Street Address</label>  
              <input type="text" id="streetAddress" placeholder="123 Main St" class="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
            </div>  
            <div>  
              <label for="unitApt" class="block text-sm font-medium text-gray-700 mb-1">Unit/Apt No.</label>  
              <input type="text" id="unitApt" placeholder="e.g., #201" class="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
            </div>  
          </div>  
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">  
            <div>  
              <label for="city" class="block text-sm font-medium text-gray-700 mb-1">City</label>  
              <input type="text" id="city" placeholder="Philadelphia" class="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
            </div>  
            <div>  
              <label for="state" class="block text-sm font-medium text-gray-700 mb-1">State</label>  
              <select id="state" class="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
                <option value="">— Select —</option>  
                <option value="AL">AL</option>  
                <option value="AK">AK</option>  
                <option value="AZ">AZ</option>  
                <option value="AR">AR</option>  
                <option value="CA">CA</option>  
                <option value="CO">CO</option>  
                <option value="CT">CT</option>  
                <option value="DE">DE</option>  
                <option value="DC">DC</option>  
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
                <option value="PA" selected>PA</option>  
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
                <option value="AS">AS</option>  
                <option value="GU">GU</option>  
                <option value="MP">MP</option>  
                <option value="PR">PR</option>  
                <option value="VI">VI</option>  
              </select>  
            </div>  
            <div>  
              <label for="zipCode" class="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>  
              <input type="text" id="zipCode" placeholder="19103" class="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
            </div>  
          </div>  
        </div>  
      </div>  
  
      <hr class="my-8 border-gray-200">  
  
      <div class="mb-6">  
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Photo Area</h2>  
        <div>  
          <label for="photoAreaSelect" class="block text-sm font-medium text-gray-700 mb-1">Select Area</label>  
          <select id="photoAreaSelect" class="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
            <option>Basement</option>  
            <option>First Floor</option>  
            <option>Second Floor</option>  
            <option>Third Floor</option>  
            <option>Fourth Floor</option>  
            <option>Additional Exterior</option>  
            <option>Utilities/Mechanicals</option>  
            <option>Other</option>  
          </select>  
        </div>  
        <div id="otherDescriptionWrapper" class="mt-4 hidden">  
          <label for="otherDescription" class="block text-sm font-medium text-gray-700 mb-1">If Other, please describe:</label>  
          <input type="text" id="otherDescription" placeholder="e.g., Detached Garage" class="w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">  
        </div>  
      </div>  
  
      <hr class="my-8 border-gray-200">  
  
      <div>  
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Upload Photos</h2>  
        <div class="flex flex-wrap items-center gap-3 mb-4">  
          <button id="addPhotoBtn" class="inline-flex items-center px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">  
            + Add Photo  
          </button>  
          <span id="photoCount" class="text-sm text-gray-600">0 photos</span>  
        </div>  
  
        <div id="photo-upload-container" class="grid grid-cols-1 md:grid-cols-2 gap-6"></div>  
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
    // Internal state of photos  
    // Each: { id, file, dataUrl, label }  
    let photos = [];  
    /* Utilities */  
    function uid() {  
      return 'p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);  
    }  
  
    function updatePhotoCount() {  
      const count = photos.filter(p => !!p.file).length;  
      photoCountEl.textContent = `${count} ${count === 1 ? 'photo' : 'photos'}`;  
    }  
  
    function setGenerateEnabled() {  
      const any = photos.some(p => p.file);  
      generatePdfBtn.disabled = !any;  
    }  
  
    function showMessage(text, type='info') {  
      messageBox.textContent = text;  
      messageBox.classList.remove('hidden','bg-blue-100','text-blue-800','bg-green-100','text-green-800','bg-red-100','text-red-800');  
      if (type==='info')    messageBox.classList.add('bg-blue-100','text-blue-800');  
      if (type==='success') messageBox.classList.add('bg-green-100','text-green-800');  
      if (type==='error')   messageBox.classList.add('bg-red-100','text-red-800');  
    }  
  
    /* Rendering */  
    function addPhotoSlot(prefill = {}) {  
      const id = prefill.id || uid();  
  
      // Slot container  
      const container = document.createElement('div');  
      container.className = 'flex flex-col gap-2';  
      container.id = `${id}-slot`;  
  
      // Label input  
      const labelWrap = document.createElement('div');  
      labelWrap.className = 'flex items-center gap-2';  
      const labelEl = document.createElement('input');  
      labelEl.type = 'text';  
      labelEl.placeholder = 'Enter photo label (e.g., Subject Front)';  
      labelEl.className = 'flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500';  
      labelEl.value = prefill.label || '';  
      // Remove button  
      const removeBtn = document.createElement('button');  
      removeBtn.type = 'button';  
      removeBtn.className = 'px-3 py-2 rounded-lg bg-rose-600 text-white text-sm font-semibold hover:bg-rose-700';  
      removeBtn.textContent = 'Remove';  
      removeBtn.addEventListener('click', () => removePhotoSlot(id));  
  
      labelWrap.appendChild(labelEl);  
      labelWrap.appendChild(removeBtn);  
      // Upload box  
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
  
      // Wiring events  
      input.addEventListener('change', e => handleFileSelect(e, id));  
      labelEl.addEventListener('input', () => {  
        const p = photos.find(x => x.id === id);  
        if (p) p.label = labelEl.value.trim();  
      });  
      uploadBox.appendChild(prompt);  
      uploadBox.appendChild(img);  
  
      // Mount  
      container.appendChild(labelWrap);  
      container.appendChild(uploadBox);  
      container.appendChild(input);  
  
      photoContainer.appendChild(container);  
      // Add to state if not exists  
      if (!photos.find(x => x.id === id)) {  
        photos.push({ id, file: null, dataUrl: null, label: labelEl.value.trim() });  
        updatePhotoCount();  
        setGenerateEnabled();  
      }  
    }  
  
    function removePhotoSlot(id) {  
      // Remove DOM  
      const el = document.getElementById(`${id}-slot`);  
      if (el) el.remove();  
      // Remove state  
      photos = photos.filter(p => p.id !== id);  
      updatePhotoCount();  
      setGenerateEnabled();  
    }  
  
    function handleFileSelect(event, id) {  
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
  
    /* PDF Generation */  
    function generatePDF() {  
      try {  
        // === Get data from form fields ===  
        const street = document.getElementById('streetAddress').value.trim();  
        const unit = document.getElementById('unitApt').value.trim();   
        const city = document.getElementById('city').value.trim();  
        const state = document.getElementById('state').value.trim();  
        const zip = document.getElementById('zipCode').value.trim();  
        const fullAddressLine1 = [street, unit].filter(Boolean).join(' ');   
        const fullAddressLine2 = [city, state, zip].filter(Boolean).join(', ');  
  
        let photoArea = document.getElementById('photoAreaSelect').value;  
        if (photoArea === 'Other') {  
          photoArea = document.getElementById('otherDescription').value.trim() || 'Other';  
        }  
  
        const printable = photos.filter(p => !!p.file);  
        if (printable.length === 0) {  
          showMessage('Please add at least one photo before generating the PDF.', 'error');  
          return;  
        }  
  
        const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });  
        const w = doc.internal.pageSize.getWidth();  
        const h = doc.internal.pageSize.getHeight();  
  
        // Title on first page  
        const titleTop = 16;  
        doc.setFontSize(18);  
        doc.text(fullAddressLine1 || 'Property Photos', w/2, titleTop, { align:'center' });  
        let currentY = titleTop;  
        if (fullAddressLine2) {  
          currentY += 6;  
          doc.setFontSize(14);  
          doc.text(fullAddressLine2, w/2, currentY, { align:'center' });  
        }  
  
        // Add Photo Area  
        currentY += 8;  
        doc.setFontSize(12);  
        doc.setFont('helvetica', 'bold');  
        doc.text(`Photo Area: ${photoArea}`, w/2, currentY, { align:'center' });  
        // Generated date  
        doc.setFont('helvetica', 'normal');  
        doc.setFontSize(10);  
        doc.setTextColor(120);  
        currentY += 6;  
        doc.text(`Generated on: ${new Date().toLocaleDateString()}`, w/2, currentY, { align:'center' });  
        doc.setTextColor(0);  
        // Layout constants  
        const marginX = 12;  
        const topFirstPage = currentY + 10;  
        const topOtherPages = 15;  
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
          }  
  
          const isFirstPage = (pageIndex === 0);  
          const topMargin = isFirstPage ? topFirstPage : topOtherPages;  
          const usableWidth = w - 2 * marginX;  
          const usableHeight = h - topMargin - marginX;  
  
          const thumbWidth = (usableWidth - (cols - 1) * gutterX) / cols;  
          const blockHeight = (usableHeight - (rows - 1) * gutterY) / rows;  
  
          const row = Math.floor(slotIndex / cols);  
           const col = slotIndex % cols;  
  
          const x = marginX + col * (thumbWidth + gutterX);  
          const y = topMargin + row * (blockHeight + gutterY);  
  
          // Label (centered above image)  
          const label = (p.label && p.label.trim()) ? p.label.trim() : 'Untitled Photo';  
          doc.setFontSize(10);  
          doc.text(label, x + thumbWidth / 2, y + 4, { align:'center', maxWidth: thumbWidth - 2 });  
          // Image sizing  
          const maxImgH = blockHeight - labelHeight - 4;  
          const type = (p.file?.type || '').toLowerCase().endsWith('png') ? 'PNG' : 'JPEG';  
          const props = doc.getImageProperties(p.dataUrl);  
  
          let imgW = thumbWidth;  
          let imgH = (props.height * imgW) / props.width;  
          if (imgH > maxImgH) {  
            imgH = maxImgH;  
            imgW = (props.width * imgH) / props.height;  
          }  
  
          const imgX = x + (thumbWidth - imgW) / 2;  
          const imgY = y + labelHeight + 6;  
  
          doc.addImage(p.dataUrl, type, imgX, imgY, imgW, imgH);  
        });  
  
        doc.save('Subject-Photos.pdf');  
        showMessage('PDF generated successfully!', 'success');  
      } catch (err) {  
        console.error(err);  
        showMessage('Error generating PDF. Please try again.', 'error');  
      }  
    }  
  
    /* Event Listeners */  
    addPhotoBtn.addEventListener('click', () => addPhotoSlot());  
    generatePdfBtn.addEventListener('click', () => {  
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
      updatePhotoCount();  
      setGenerateEnabled();  
      showMessage('All photos cleared.', 'info');  
      addPhotoSlot();  
    });  
    document.addEventListener('DOMContentLoaded', () => {  
      messageBox.classList.add('hidden');  
      addPhotoSlot();  
      updatePhotoCount();  
      setGenerateEnabled();  
  
      // Show/hide "Other" area description  
      const photoAreaSelect = document.getElementById('photoAreaSelect');  
      const otherDescriptionWrapper = document.getElementById('otherDescriptionWrapper');  
  
      photoAreaSelect.addEventListener('change', () => {  
        if (photoAreaSelect.value === 'Other') {  
          otherDescriptionWrapper.classList.remove('hidden');  
        } else {  
          otherDescriptionWrapper.classList.add('hidden');  
        }  
      });  
    });  
  </script>  
</body>  
</html>  
<!-- /wp:html -->  
