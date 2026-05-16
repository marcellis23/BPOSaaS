# Comparable Map & Photos  
<!-- wp:html -->  
<html lang="en">  
<head>  
  <meta charset="UTF-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
  <title>Comparable Property Photos Form</title>  
  <script src="https://cdn.tailwindcss.com"></script>  
  <script>  
    tailwind.config = {  
      theme: {  
        extend: {  
          fontFamily: { sans: ['Inter', 'sans-serif'] },  
        },  
      },  
    };  
  </script>  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">  
  
  <style>  
    .photo-upload-box {  
      border: 2px dashed #d1d5db;  
      transition: all 0.2s ease-in-out;  
    }  
    .photo-upload-box:hover {  
      border-color: #4f46e5;  
      background-color: #f9fafb;  
    }  
    .photo-upload-box.drag-over {  
      border-color: #4f46e5;  
      background-color: #eef2ff;  
      transform: scale(1.01);  
    }  
    .photo-upload-box img {  
      display: none;  
    }  
    .photo-upload-box.has-image {  
      border-style: solid;  
      border-color: #16a34a;  
    }  
    .photo-upload-box.has-image img {  
      display: block;  
    }  
    .photo-upload-box.has-image .upload-prompt {  
      display: none;  
    }  
    select, input[type="text"] {  
      border: 1px solid #d1d5db;  
      padding: 0.6rem;  
      border-radius: 0.375rem;  
      width: 100%;  
      font-size: 0.95rem;  
    }  
    .section-divider {  
      border-top: 2px solid #e5e7eb;  
      margin: 3rem 0;  
      padding-top: 2rem;  
    }  
  </style>  
</head>  
  
<body class="bg-gray-100 text-gray-800 font-sans pb-20">  
  
  <div class="container mx-auto p-4 sm:p-6 lg:p-8 max-w-6xl">  
    <div class="bg-white rounded-2xl shadow-lg p-6 md:p-10">  
      <div class="text-center mb-10">  
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Comparable Map & Photos</h1>  
        <p class="mt-2 text-gray-600">Enter property details and upload photos to generate your report.</p>  
      </div>  
  
      <!-- 1. Map Upload Section -->  
      <div class="mb-12">  
        <h2 class="text-xl font-bold text-indigo-700 mb-6 border-b pb-2">Location Map</h2>  
        <div id="map-container" class="max-w-2xl mx-auto"></div>  
      </div>  
  
      <!-- 2. Subject Property Section -->  
      <div class="mb-12">  
        <h2 class="text-xl font-bold text-indigo-700 mb-6 border-b pb-2">Subject Property</h2>  
        <div id="subject-container" class="max-w-2xl mx-auto"></div>  
      </div>  
  
      <!-- 3. Active/Pending Section -->  
      <div class="section-divider">  
        <h2 class="text-xl font-bold text-indigo-700 mb-6">Active / Pending Comparables</h2>  
        <div id="active-container" class="grid grid-cols-1 md:grid-cols-2 gap-8"></div>  
      </div>  
  
      <!-- 4. Sold Section -->  
      <div class="section-divider">  
        <h2 class="text-xl font-bold text-indigo-700 mb-6">Sold Comparables</h2>  
        <div id="sold-container" class="grid grid-cols-1 md:grid-cols-2 gap-8"></div>  
      </div>  
  
      <!-- 5. ARV Section -->  
      <div class="section-divider">  
        <h2 class="text-xl font-bold text-indigo-700 mb-6">ARV Comparables (Optional)</h2>  
        <div id="arv-container" class="grid grid-cols-1 md:grid-cols-2 gap-8"></div>  
      </div>  
  
      <!-- Message Box -->  
      <div id="messageBox" class="mt-8 hidden p-4 rounded-md text-sm text-center"></div>  
  
      <!-- Action Button -->  
      <div class="mt-10 text-center">  
        <button id="generatePdfBtn"  
          class="w-full sm:w-auto bg-indigo-600 text-white font-bold py-4 px-16 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all transform hover:scale-105 shadow-xl text-lg">  
          Generate Report PDF  
        </button>  
      </div>  
    </div>  
  </div>  
  
  <script>  
    window.jsPDF = window.jspdf.jsPDF;  
  
    const viewOptions = [  
      "A. Beneficial / Desirable",  
      "Park / Greenbelt", "Open Space (Unobstructed)", "Water View (River/Lake/Creek)", "Golf Course", "City Skyline", "Courtyard / Garden", "Trees / Wooded", "Seasonal Water View", "Mountain / Hilltop",  
      "B. Typical / Neutral",  
      "Residential Street – Similar Homes", "Residential Street – Mixed Housing Types", "Rear Alley / Service Drive", "Interior Block / Courtyard", "School / Playground", "Community Facilities (Library/Rec)", "Local Retail (Neighborhood-Scale)", "Light Rail/Transit (Not Adjacent)",  
      "C. Adverse / Potentially Adverse",  
      "Commercial Corridor (Arterial)", "Industrial / Warehouse", "Highway / Ramp", "Railroad / Utility Corridor", "Parking Lot (Surface)", "Vacant Lots / Boarded Structures", "Construction / Redevelopment Site", "Municipal Facility (Treatment Plant/Depot)", "Cemetery", "Billboards / Signage Cluster"  
    ];  
  
    const comparisonOptions = ["Superior", "Similar", "Inferior"];  
  
    // Structure definitions  
    const sections = {  
      map: [{ id: 'map_image', title: 'Map of Subject and Selected Comps', type: 'image_only', data: {} }],  
      subject: [{ id: 'subject_property', title: 'Subject Property', type: 'subject', data: { mapId: 'S', address: '', view: '' } }],  
      active: [  
        { id: 'active_1', title: 'Active Comp 1', type: 'comp', data: { mapId: '1', proximity: '', address: '', view: '', comparison: '' } },  
        { id: 'active_2', title: 'Active Comp 2', type: 'comp', data: { mapId: '2', proximity: '', address: '', view: '', comparison: '' } },  
        { id: 'active_3', title: 'Active Comp 3', type: 'comp', data: { mapId: '3', proximity: '', address: '', view: '', comparison: '' } }  
      ],  
      sold: [  
        { id: 'sold_1', title: 'Sold Comp 1', type: 'comp', data: { mapId: '4', proximity: '', address: '', view: '', comparison: '' } },  
        { id: 'sold_2', title: 'Sold Comp 2', type: 'comp', data: { mapId: '5', proximity: '', address: '', view: '', comparison: '' } },  
        { id: 'sold_3', title: 'Sold Comp 3', type: 'comp', data: { mapId: '6', proximity: '', address: '', view: '', comparison: '' } }  
      ],  
      arv: [  
        { id: 'arv_1', title: 'ARV Comp 1', type: 'comp', data: { mapId: '7', proximity: '', address: '', view: '', comparison: '' } },  
        { id: 'arv_2', title: 'ARV Comp 2', type: 'comp', data: { mapId: '8', proximity: '', address: '', view: '', comparison: '' } },  
        { id: 'arv_3', title: 'ARV Comp 3', type: 'comp', data: { mapId: '9', proximity: '', address: '', view: '', comparison: '' } }  
      ]  
    };  
  
    const generatePdfBtn = document.getElementById('generatePdfBtn');  
    const messageBox = document.getElementById('messageBox');  
  
    document.addEventListener('DOMContentLoaded', () => {  
      renderAllSections();  
    });  
  
    function renderAllSections() {  
      renderSection('map', 'map-container');  
      renderSection('subject', 'subject-container');  
      renderSection('active', 'active-container');  
      renderSection('sold', 'sold-container');  
      renderSection('arv', 'arv-container');  
    }  
  
    function renderSection(sectionKey, containerId) {  
      const container = document.getElementById(containerId);  
      sections[sectionKey].forEach(item => {  
        const card = createSlot(item);  
        container.appendChild(card);  
      });  
    }  
  
    function createSlot(item) {  
      const div = document.createElement('div');  
      div.className = 'flex flex-col gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm';  
  
      const title = document.createElement('h3');  
      title.className = 'font-bold text-indigo-900 text-sm uppercase tracking-widest';  
      title.textContent = item.title;  
      div.appendChild(title);  
  
      // Image Box  
      const uploadLabel = document.createElement('label');  
      uploadLabel.className = 'photo-upload-box w-full h-52 rounded-xl flex items-center justify-center cursor-pointer bg-white overflow-hidden shadow-inner';  
      uploadLabel.id = `box-${item.id}`;  
  
      // Drag and Drop functionality  
      ['dragenter', 'dragover'].forEach(eventName => {  
        uploadLabel.addEventListener(eventName, (e) => {  
          e.preventDefault();  
          e.stopPropagation();  
          uploadLabel.classList.add('drag-over');  
        });  
      });  
  
      ['dragleave', 'drop'].forEach(eventName => {  
        uploadLabel.addEventListener(eventName, (e) => {  
          e.preventDefault();  
          e.stopPropagation();  
          uploadLabel.classList.remove('drag-over');  
        });  
      });  
  
      uploadLabel.addEventListener('drop', (e) => {  
        const dt = e.dataTransfer;  
        const file = dt.files[0];  
        if (file) handleImage(file, item);  
      });  
  
      const prompt = document.createElement('div');  
      prompt.className = 'upload-prompt text-gray-400 text-sm text-center p-4';  
      prompt.innerHTML = `  
        <svg class="mx-auto h-10 w-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">  
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>  
        </svg>  
        Click or Drag Photo to Upload  
      `;  
  
      const img = document.createElement('img');  
      img.id = `img-${item.id}`;  
      img.className = 'w-full h-full object-cover';  
      img.alt = `${item.title} photo`;  
  
      const fileInput = document.createElement('input');  
      fileInput.type = 'file';  
      fileInput.accept = 'image/*';  
      fileInput.className = 'hidden';  
      fileInput.onchange = (e) => {  
        const file = e.target.files[0];  
        if (file) handleImage(file, item);  
        e.target.value = ''; // Reset input to allow same file re-upload  
      };  
  
      uploadLabel.appendChild(prompt);  
      uploadLabel.appendChild(img);  
      uploadLabel.appendChild(fileInput);  
  
      div.appendChild(uploadLabel);  
  
      // Data Fields  
      if (item.type === 'comp' || item.type === 'subject') {  
        const fieldsDiv = document.createElement('div');  
        fieldsDiv.className = 'space-y-3';  
  
        // Map ID & Proximity row (Conditional Proximity)  
        const metaRow = document.createElement('div');  
        metaRow.className = 'flex gap-3';  
  
        const mapIdInput = document.createElement('input');  
        mapIdInput.type = 'text';  
        mapIdInput.placeholder = 'Map ID';  
        mapIdInput.className = 'w-24 text-center font-bold text-indigo-700 bg-white';  
        mapIdInput.value = item.data.mapId;  
        mapIdInput.oninput = (e) => item.data.mapId = e.target.value;  
        metaRow.appendChild(mapIdInput);  
  
        if (item.type === 'comp') {  
          const proximityInput = document.createElement('input');  
          proximityInput.type = 'text';  
          proximityInput.placeholder = 'Proximity to Subject';  
          proximityInput.className = 'flex-grow bg-white';  
          proximityInput.value = item.data.proximity || '';  
          proximityInput.oninput = (e) => item.data.proximity = e.target.value;  
          metaRow.appendChild(proximityInput);  
        }  
  
        fieldsDiv.appendChild(metaRow);  
  
        // Address field (Own row)  
        const addrInput = document.createElement('input');  
        addrInput.type = 'text';  
        addrInput.placeholder = 'Property Address';  
        addrInput.className = 'bg-white';  
        addrInput.oninput = (e) => item.data.address = e.target.value;  
        fieldsDiv.appendChild(addrInput);  
  
        // View Select  
        const viewSelect = document.createElement('select');  
        viewSelect.className = 'bg-white';  
        const defaultViewOpt = document.createElement('option');  
        defaultViewOpt.textContent = 'Select Primary View...';  
        defaultViewOpt.value = '';  
        viewSelect.appendChild(defaultViewOpt);  
  
        viewOptions.forEach(opt => {  
          const o = document.createElement('option');  
          o.textContent = opt;  
          o.value = opt;  
          if (opt.startsWith('A.') || opt.startsWith('B.') || opt.startsWith('C.')) {  
            o.disabled = true;  
            o.className = 'font-bold bg-gray-100 text-indigo-800 py-1';  
          }  
          viewSelect.appendChild(o);  
        });  
        viewSelect.onchange = (e) => item.data.view = e.target.value;  
        fieldsDiv.appendChild(viewSelect);  
  
        // Comparison Select (only for comps)  
        if (item.type === 'comp') {  
          const compSelect = document.createElement('select');  
          compSelect.className = 'bg-white';  
          const defaultCompOpt = document.createElement('option');  
          defaultCompOpt.textContent = 'Property Comparison...';  
          defaultCompOpt.value = '';  
          compSelect.appendChild(defaultCompOpt);  
  
          comparisonOptions.forEach(opt => {  
            const o = document.createElement('option');  
            o.textContent = opt;  
            o.value = opt;  
            compSelect.appendChild(o);  
          });  
          compSelect.onchange = (e) => item.data.comparison = e.target.value;  
          fieldsDiv.appendChild(compSelect);  
        }  
  
        div.appendChild(fieldsDiv);  
      }  
  
      return div;  
    }  
  
    function handleImage(file, item) {  
      if (!file || !file.type.startsWith('image/')) {  
        showMessage('Please upload a valid image file.', 'error');  
        return;  
      }  
  
      const reader = new FileReader();  
      reader.onload = (event) => {  
        item.dataUrl = event.target.result;  
        item.fileType = file.type.toLowerCase().includes('png') ? 'PNG' : 'JPEG';  
  
        const imgEl = document.getElementById(`img-${item.id}`);  
        const boxEl = document.getElementById(`box-${item.id}`);  
  
        if (imgEl) imgEl.src = item.dataUrl;  
        if (boxEl) boxEl.classList.add('has-image');  
      };  
      reader.readAsDataURL(file);  
    }  
  
    generatePdfBtn.addEventListener('click', async () => {  
      if (!sections.map[0].dataUrl || !sections.subject[0].dataUrl) {  
        showMessage('Please upload at least the Map and Subject Property photos.', 'error');  
        return;  
      }  
  
      generatePdfBtn.disabled = true;  
      generatePdfBtn.textContent = 'Generating PDF...';  
      showMessage('Compiling report pages...', 'info');  
  
      try {  
        const doc = new jsPDF('p', 'mm', 'a4');  
        const pageWidth = doc.internal.pageSize.getWidth();  
        const pageHeight = doc.internal.pageSize.getHeight();  
        const margin = 15;  
        const contentWidth = pageWidth - (margin * 2);  
  
        let currentPage = 1;  
  
        const addHeader = (title) => {  
          doc.setFontSize(18);  
          doc.setTextColor(40);  
          doc.text(title, pageWidth / 2, 20, { align: 'center' });  
          doc.setFontSize(9);  
          doc.setTextColor(150);  
          doc.text(`Generated: ${new Date().toLocaleDateString()} | Page ${currentPage}`, pageWidth - margin, 10, { align: 'right' });  
        };  
  
        // PAGE 1: MAP & SUBJECT  
        addHeader('Comparable Property Report');  
  
        let y = 30;  
        doc.setFontSize(12);  
        doc.setTextColor(70);  
        doc.text('Location Map', margin, y);  
        y += 5;  
  
        if (sections.map[0].dataUrl) {  
          const mImg = sections.map[0];  
          const props = doc.getImageProperties(mImg.dataUrl);  
          const ratio = props.width / props.height;  
          const h = 80;  
          const w = Math.min(contentWidth, h * ratio);  
          doc.addImage(mImg.dataUrl, mImg.fileType, margin + (contentWidth - w) / 2, y, w, h);  
          y += h + 15;  
        }  
  
        doc.text('Subject Property', margin, y);  
        y += 5;  
  
        const subj = sections.subject[0];  
        if (subj.dataUrl) {  
          const props = doc.getImageProperties(subj.dataUrl);  
          const h = 70;  
          const w = Math.min(contentWidth * 0.6, h * (props.width / props.height));  
          doc.addImage(subj.dataUrl, subj.fileType, margin, y, w, h);  
  
          doc.setFontSize(10);  
          doc.setTextColor(0);  
          let textX = margin + w + 10;  
          doc.text(`ID: ${subj.data.mapId}`, textX, y + 10);  
          doc.text(`Address:`, textX, y + 20);  
          doc.setFontSize(9);  
          const splitAddr = doc.splitTextToSize(subj.data.address || 'N/A', contentWidth - w - 20);  
          doc.text(splitAddr, textX, y + 25);  
          doc.setFontSize(10);  
          doc.text(`Primary View:`, textX, y + 40);  
          doc.setFontSize(9);  
          doc.text(subj.data.view || 'N/A', textX, y + 45);  
        }  
  
        // OTHER PAGES: COMPS  
        const compCategories = [  
          { key: 'active', title: 'Active / Pending Comparables' },  
          { key: 'sold', title: 'Sold Comparables' },  
          { key: 'arv', title: 'ARV Comparables' }  
        ];  
  
        for (const cat of compCategories) {  
          const items = sections[cat.key].filter(i => i.dataUrl);  
          if (items.length === 0) continue;  
  
          doc.addPage();  
          currentPage++;  
          addHeader(cat.title);  
  
          let compY = 35;  
          items.forEach((item, idx) => {  
            if (compY > 230) {  
              doc.addPage();  
              currentPage++;  
              addHeader(cat.title);  
              compY = 35;  
            }  
  
            const props = doc.getImageProperties(item.dataUrl);  
            const h = 50;  
            const w = Math.min(80, h * (props.width / props.height));  
  
            doc.setDrawColor(230);  
            doc.line(margin, compY - 5, pageWidth - margin, compY - 5);  
  
            doc.addImage(item.dataUrl, item.fileType, margin, compY, w, h);  
  
            doc.setFontSize(11);  
            doc.setTextColor(0, 0, 150);  
            doc.text(item.title, margin + w + 8, compY + 5);  
  
            doc.setFontSize(10);  
            doc.setTextColor(40);  
            doc.text(`Map ID: ${item.data.mapId}`, margin + w + 8, compY + 14);  
            doc.text(`Proximity: ${item.data.proximity || 'N/A'}`, margin + w + 8, compY + 20);  
            doc.text(`Address: ${item.data.address || 'N/A'}`, margin + w + 8, compY + 28, { maxWidth: contentWidth - w - 10 });  
            doc.text(`View: ${item.data.view || 'N/A'}`, margin + w + 8, compY + 40);  
  
            doc.setFontSize(10);  
            doc.setTextColor(100, 50, 0);  
            doc.text(`Comparison: ${item.data.comparison || 'N/A'}`, margin + w + 8, compY + 50);  
  
            compY += h + 15;  
          });  
        }  
  
        doc.save('Property-Report.pdf');  
        showMessage('PDF Generated successfully!', 'success');  
      } catch (err) {  
        console.error(err);  
        showMessage('Failed to generate PDF. Check console for details.', 'error');  
      } finally {  
        generatePdfBtn.disabled = false;  
        generatePdfBtn.textContent = 'Generate Report PDF';  
      }  
    });  
  
    function showMessage(text, type) {  
      messageBox.textContent = text;  
      messageBox.classList.remove(  
        'hidden',  
        'bg-blue-100', 'text-blue-800',  
        'bg-green-100', 'text-green-800',  
        'bg-red-100', 'text-red-800'  
      );  
      if (type === 'info') messageBox.classList.add('bg-blue-100', 'text-blue-800');  
      if (type === 'success') messageBox.classList.add('bg-green-100', 'text-green-800');  
      if (type === 'error') messageBox.classList.add('bg-red-100', 'text-red-800');  
      messageBox.classList.remove('hidden');  
    }  
  </script>  
</body>  
</html>  
<!-- /wp:html -->  
