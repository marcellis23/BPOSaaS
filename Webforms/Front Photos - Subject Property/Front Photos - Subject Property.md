# Front Photos - Subject Property  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Subject Property Photos Form</title>  
    <script src="https://cdn.tailwindcss.com"></script>  
    <script>  
      tailwind.config = {  
        theme: {  
          extend: {  
            fontFamily: {  
              sans: ['Inter', 'sans-serif'],  
            },  
          },  
        }  
      }  
    </script>  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">  
    <style>  
        .photo-upload-box {  
            border: 2px dashed #d1d5db;  
            transition: border-color 0.2s, background-color 0.2s;  
        }  
        .photo-upload-box:hover {  
            border-color: #4f46e5;  
            background-color: #f9fafb;  
        }  
        .photo-upload-box img {  
            display: none;  
        }  
        .photo-upload-box.has-image {  
            border-style: solid;  
            border-color: #16a34a; /* Green when image present */  
        }  
        .photo-upload-box.has-image img {  
            display: block;  
        }  
        .photo-upload-box.has-image .upload-prompt {  
            display: none;  
        }  
    </style>  
</head>  
<body class="bg-gray-100 text-gray-800 font-sans">  
  
    <div class="container mx-auto p-4 sm:p-6 lg:p-8 max-w-5xl">  
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8">  
            <div class="text-center mb-8">  
                <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Subject Property Photos</h1>  
                <p class="mt-2 text-gray-600">Please provide the address and upload all eight required photos to generate the PDF report.</p>  
            </div>  
  
            <div class="border-b border-gray-200 pb-5 mb-8">  
              <h2 class="text-xl font-semibold leading-7 text-gray-900">Subject Property Address</h2>  
              <div class="mt-4 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">  
                  
                <div class="sm:col-span-4">  
                  <label for="bpoPhotoForm_address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>  
                  <div class="mt-2">  
                    <input type="text" name="bpoPhotoForm_address" id="bpoPhotoForm_address" autocomplete="street-address"  
                      class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300   
                      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>  
                  </div>  
                </div>  
        
                <div class="sm:col-span-2">  
                  <label for="bpoPhotoForm_unit" class="block text-sm font-medium leading-6 text-gray-900">Unit No. (Apt, Ste, etc.)</label>  
                  <div class="mt-2">  
                    <input type="text" name="bpoPhotoForm_unit" id="bpoPhotoForm_unit" autocomplete="address-line2"  
                      class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>  
                  </div>  
                </div>  
        
                <div class="sm:col-span-3">  
                  <label for="bpoPhotoForm_city" class="block text-sm font-medium leading-6 text-gray-900">City</label>  
                  <div class="mt-2">  
                    <input type="text" name="bpoPhotoForm_city" id="bpoPhotoForm_city" autocomplete="address-level2"  
                      class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>  
                  </div>  
                </div>  
        
                <div class="sm:col-span-1">  
                  <label for="bpoPhotoForm_state" class="block text-sm font-medium leading-6 text-gray-900">State</label>  
                  <div class="mt-2">  
                    <select name="bpoPhotoForm_state" id="bpoPhotoForm_state" autocomplete="address-level1"  
                      class="block w-full rounded-md border-0 py-2 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">  
                      <option value="" disabled selected>Select…</option>  
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
                      <option value="WY">WY</option><option value="PR">PR</option><option value="GU">GU</option><option value-"VI">VI</option>  
                    </select>  
                  </div>  
                </div>  
        
                <div class="sm:col-span-2">  
                  <label for="bpoPhotoForm_zip" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>  
                  <div class="mt-2">  
                    <input type="text" name="bpoPhotoForm_zip" id="bpoPhotoForm_zip" autocomplete="postal-code"  
                      class="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>  
                  </div>  
                </div>  
              </div>  
            </div>  
  
            <div id="photo-upload-container"></div>  
  
            <div id="messageBox" class="mt-6 hidden p-4 rounded-md text-sm"></div>  
  
            <div class="mt-8 flex flex-wrap gap-4 justify-center">  
                <button id="generatePdfBtn" class="w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100" disabled>  
                    Generate PDF  
                </button>  
                <button type="button" id="clearAllBtn" class="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors">  
                    Clear All  
                </button>  
            </div>  
        </div>  
    </div>  
  
    <script>  
        window.jsPDF = window.jspdf.jsPDF;  
          
        const requiredPhotos = [  
            { id: 'subjectFront',        title: 'Subject Front',                  file: null, dataUrl: null },  
            { id: 'subjectAddress',      title: 'Subject Address',                file: null, dataUrl: null },  
            { id: 'subjectLeftAngle',    title: 'Subject Left Angle',             file: null, dataUrl: null },  
            { id: 'subjectRightAngle',   title: 'Subject Right Angle',            file: null, dataUrl: null },  
            { id: 'streetViewLeft',      title: 'Street View Left',               file: null, dataUrl: null },  
            { id: 'streetViewRight',     title: 'Street View Right',              file: null, dataUrl: null },  
            { id: 'frontViewAcross',     title: 'Front View (Across the Street)', file: null, dataUrl: null },  
            { id: 'streetSign',          title: 'Street Sign',                    file: null, dataUrl: null }  
        ];  
  
        const photoContainer = document.getElementById('photo-upload-container');  
        const generatePdfBtn = document.getElementById('generatePdfBtn');  
        const messageBox = document.getElementById('messageBox');  
        const clearAllBtn = document.getElementById('clearAllBtn');  
  
        document.addEventListener('DOMContentLoaded', () => {  
            messageBox.classList.add('hidden');  
            renderUploadSlots();  
        });  
  
        function renderUploadSlots() {  
            messageBox.classList.add('hidden');  
            photoContainer.innerHTML = '';  
              
            const subjectFrontConfig = requiredPhotos.find(p => p.id === 'subjectFront');  
            const subjectAddressConfig = requiredPhotos.find(p => p.id === 'subjectAddress');  
            const otherPhotosConfig = requiredPhotos.filter(p => p.id !== 'subjectFront' && p.id !== 'subjectAddress');  
              
            const topPhotosWrapper = document.createElement('div');  
            topPhotosWrapper.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';  
              
            if (subjectFrontConfig) {  
                const subjectSlot = createUploadSlotElement(subjectFrontConfig);  
                topPhotosWrapper.appendChild(subjectSlot);  
            }  
  
            if (subjectAddressConfig) {  
                const addressSlot = createUploadSlotElement(subjectAddressConfig);  
                topPhotosWrapper.appendChild(addressSlot);  
            }  
  
            const otherPhotosGrid = document.createElement('div');  
            otherPhotosGrid.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-8';  
  
            otherPhotosConfig.forEach(photo => {  
                const slotEl = createUploadSlotElement(photo);  
                otherPhotosGrid.appendChild(slotEl);  
            });  
  
            photoContainer.appendChild(topPhotosWrapper);  
            photoContainer.appendChild(otherPhotosGrid);  
        }  
  
        function createUploadSlotElement(photo) {  
            const container = document.createElement('div');  
            container.className = 'flex flex-col gap-2';  
  
            const label = document.createElement('h3');  
            label.className = 'font-semibold text-gray-800';  
            label.textContent = photo.title;  
  
            const uploadBox = document.createElement('label');  
            uploadBox.htmlFor = `${photo.id}-input`;  
            uploadBox.className = 'photo-upload-box w-full h-48 rounded-lg flex items-center justify-center text-center cursor-pointer p-2';  
            uploadBox.id = `${photo.id}-box`;  
  
            const prompt = document.createElement('div');  
            prompt.className = 'upload-prompt text-gray-500';  
            prompt.innerHTML = `  
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <p>Click to upload</p>  
            `;  
  
            const img = document.createElement('img');  
            img.id = `${photo.id}-preview`;  
            img.alt = '';  
            img.className = 'w-full h-full object-contain rounded-md';  
  
            const input = document.createElement('input');  
            input.type = 'file';  
            input.id = `${photo.id}-input`;  
            input.accept = 'image/*';  
            input.className = 'hidden';  
            input.addEventListener('change', e => handleFileSelect(e, photo.id));  
  
            uploadBox.appendChild(prompt);  
            uploadBox.appendChild(img);  
            container.appendChild(label);  
            container.appendChild(uploadBox);  
            container.appendChild(input);  
  
            return container;  
        }  
  
        function handleFileSelect(event, photoId) {  
            const file = event.target.files[0];  
            if (!file) return;  
            const slot = requiredPhotos.find(p => p.id === photoId);  
            if (!slot) return;  
  
            const reader = new FileReader();  
            reader.onload = e => {  
                slot.file = file;  
                slot.dataUrl = e.target.result;  
                const imgEl = document.getElementById(`${photoId}-preview`);  
                const box = document.getElementById(`${photoId}-box`);  
                imgEl.src = slot.dataUrl;  
                box.classList.add('has-image');  
                checkCompletion();  
            };  
            reader.readAsDataURL(file);  
        }  
  
        function checkCompletion() {  
            const allDone = requiredPhotos.every(p => p.file);  
            generatePdfBtn.disabled = !allDone;  
            if (allDone) showMessage('All photos uploaded. You can now generate the PDF.', 'success');  
        }  
  
        generatePdfBtn.addEventListener('click', () => {  
            messageBox.classList.add('hidden');  
            generatePdfBtn.disabled = true;  
            generatePdfBtn.textContent = 'Generating...';  
            showMessage('Creating your PDF. This may take a moment...', 'info');  
  
              
            try {  
                // --- Get Address Values ---  
                const address = document.getElementById('bpoPhotoForm_address').value;  
                const unit = document.getElementById('bpoPhotoForm_unit').value;  
                const city = document.getElementById('bpoPhotoForm_city').value;  
                const state = document.getElementById('bpoPhotoForm_state').value;  
                const zip = document.getElementById('bpoPhotoForm_zip').value;  
  
                const addressLine1 = [address.trim(), unit.trim()].filter(Boolean).join(', ') || '[No Address Provided]';  
                const addressLine2 = `${city || ''}${city && state ? ', ' : ''}${state || ''}${zip ? ' ' + zip : ''}`.trim();  
  
                const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });  
                const w = doc.internal.pageSize.getWidth();  
                const h = doc.internal.pageSize.getHeight();  
                // --- Page Title ---  
                doc.setFontSize(22);  
                doc.text('Subject Property Photos', w/2, 20, { align: 'center' });  
                  
                // --- Add Address to PDF ---  
                doc.setFontSize(14);  
                doc.setTextColor(50);  
                doc.text(addressLine1, w/2, 28, { align:'center' });  
                if (addressLine2) doc.text(addressLine2, w/2, 34, { align:'center' });  
                // --- Date ---  
                doc.setFontSize(12);  
                doc.setTextColor(150);  
                const generatedY = addressLine2 ? 40 : 34; // Adjust 'y' based on address  
                doc.text(`Generated on: ${new Date().toLocaleDateString()}`, w/2, generatedY, { align:'center' });  
                // --- Layout Calculations for Single Page 4x2 Grid ---  
                let y = generatedY + 8;  
                const pageMargin = 15;  
                const gutter = 8;  
                const titleSpace = 10;  
                const availableHeight = h - y - pageMargin;  
                const numRows = Math.ceil(requiredPhotos.length / 2);  
                const gridBlockHeight = (availableHeight - ((numRows - 1) * gutter)) / numRows;  
                // --- Grid for ALL Photos ---  
                const thumbWidth = (w - pageMargin * 2 - gutter) / 2;  
                const x1 = pageMargin;  
                const x2 = pageMargin + thumbWidth + gutter;  
                const maxGridImageHeight = gridBlockHeight - titleSpace;  
  
                for (let i=0; i < requiredPhotos.length; i+=2) {  
                      
                    if (i > 0) {  
                      y += gutter;  
                    }  
                      
                    const photo1 = requiredPhotos[i];  
                    const photo2 = requiredPhotos[i+1] || null;  
                      
                    let rowY = y;  
                      
                    doc.setFontSize(10);  
                    doc.setTextColor(0);  
                      
                    // --- Photo 1 (Left Column) ---  
                    doc.text(photo1.title, x1 + thumbWidth / 2, rowY, { align:'center', maxWidth: thumbWidth - 4 });  
                    const props1 = doc.getImageProperties(photo1.dataUrl);  
                    let h1 = maxGridImageHeight;  
                    let w1 = (props1.width * h1) / props1.height;  
                    if (w1 > thumbWidth) {  
                        w1 = thumbWidth;  
                        h1 = (props1.height * w1) / props1.width;  
                    }  
                    const type1 = (photo1.file.type || '').toLowerCase().endsWith('png') ? 'PNG' : 'JPEG';  
                    doc.addImage(photo1.dataUrl, type1, x1 + (thumbWidth - w1) / 2, rowY + 5, w1, h1);  
                    // --- Photo 2 (Right Column) ---  
                    if (photo2) {  
                        doc.text(photo2.title, x2 + thumbWidth / 2, rowY, { align:'center', maxWidth: thumbWidth - 4 });  
                        const props2 = doc.getImageProperties(photo2.dataUrl);  
                        let h2 = maxGridImageHeight;  
                        let w2 = (props2.width * h2) / props2.height;  
                        if (w2 > thumbWidth) {  
                            w2 = thumbWidth;  
                            h2 = (props2.height * w2) / props2.width;  
                        }  
                        const type2 = (photo2.file.type || '').toLowerCase().endsWith('png') ? 'PNG' : 'JPEG';  
                        doc.addImage(photo2.dataUrl, type2, x2 + (thumbWidth - w2) / 2, rowY + 5, w2, h2);  
                    }  
                    y += gridBlockHeight;  
                }  
  
                doc.save('Subject-Photos.pdf');  
                showMessage('PDF generated successfully!', 'success');  
  
            } catch(err) {  
                console.error(err);  
                showMessage('Error generating PDF, please try again.', 'error');  
            } finally {  
                generatePdfBtn.disabled = false;  
                generatePdfBtn.textContent = 'Generate PDF';  
            }  
        });  
  
        function clearAllForm() {  
            // 1. Clear Address Fields  
            document.getElementById('bpoPhotoForm_address').value = '';  
            document.getElementById('bpoPhotoForm_unit').value = '';  
            document.getElementById('bpoPhotoForm_city').value = '';  
            document.getElementById('bpoPhotoForm_state').value = ''; // Resets dropdown  
            document.getElementById('bpoPhotoForm_zip').value = '';  
  
            // 2. Clear Photo State  
            requiredPhotos.forEach(photo => {  
                photo.file = null;  
                photo.dataUrl = null;  
            });  
  
            // 3. Re-render the empty photo slots  
            renderUploadSlots();   
  
            // 4. Disable Generate Button  
            generatePdfBtn.disabled = true;  
  
            // 5. Show confirmation message  
            showMessage('Form has been cleared.', 'info');  
        }  
  
        clearAllBtn.addEventListener('click', clearAllForm);  
  
        function showMessage(text, type) {  
            messageBox.textContent = text;  
            messageBox.classList.remove('hidden','bg-blue-100','text-blue-800','bg-green-100','text-green-800','bg-red-100','text-red-800');  
            if (type==='info') messageBox.classList.add('bg-blue-100','text-blue-800');  
            if (type==='success') messageBox.classList.add('bg-green-100','text-green-800');  
            if (type==='error') messageBox.classList.add('bg-red-100','text-red-800');  
        }  
    </script>  
</body>  
</html>  
<!-- /wp:html -->  
