# PDF Merger Report Creator  
#   
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>PDF & Text Merger</title>  
    <!-- Google Font: Inter -->  
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">  
    <!-- Tailwind CSS for styling -->  
    <script src="https://cdn.tailwindcss.com"></script>  
    <!-- pdf-lib: library for creating and modifying PDFs -->  
    <script src="https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js"></script>  
    <!-- Font Awesome for icons -->  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">  
    <style>  
        /* Custom styles for a better look and feel */  
        body { font-family: 'Inter', sans-serif; }  
        .file-item { transition: background-color 0.2s ease-in-out; }  
        .file-item:hover { background-color: #f9fafb; }  
        .file-input-label { transition: all 0.2s ease-in-out; }  
        .file-input-label:hover { background-color: #4f46e5; box-shadow: 0 4px 14px rgba(0,0,0,0.1); }  
        @keyframes fadeIn { from { opacity:0; transform:translateY(-10px);} to { opacity:1; transform:translateY(0);} }  
        .status-message { animation: fadeIn 0.5s ease-out; }  
        /* Style for when a file is dragged over the upload area */  
        .file-input-label.dragover { background-color: #3730a3; border-color: #a5b4fc; }  
    </style>  
</head>  
<body class="bg-gray-100 flex items-center justify-center min-h-screen p-4">  
    <div class="w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 md:p-8">  
          
        <header class="text-center mb-6">  
            <h1 class="text-3xl font-bold text-gray-800">PDF & Text Merger</h1>  
            <p class="text-gray-500 mt-2">Combine multiple PDF and .txt files into one document.</p>  
        </header>  
  
        <!-- Instructions for Word Documents -->  
        <div class="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 rounded-md mb-6">  
            <div class="flex">  
                <div class="py-1"><i class="fa-solid fa-circle-info mr-3"></i></div>  
                <div>  
                    <p class="font-bold">Have a Word document?</p>  
                    <p class="text-sm">To include a Word (.doc, .docx) file, please open it and save it as a PDF before uploading.</p>  
                </div>  
            </div>  
        </div>  
  
        <!-- File Upload Area -->  
        <div class="mb-6">  
            <label id="upload-label" for="file-upload" class="file-input-label w-full flex justify-center items-center px-4 py-6 bg-indigo-600 text-white rounded-lg shadow-md cursor-pointer">  
                <i class="fas fa-cloud-upload-alt mr-3 text-2xl"></i>  
                <span class="font-semibold">Choose Files or Drag & Drop</span>  
            </label>  
            <input id="file-upload" type="file" class="hidden" multiple accept=".pdf,.txt">  
        </div>  
  
        <!-- File List Area -->  
        <div id="file-list-container" class="mb-6 min-h-[100px] border border-gray-200 rounded-lg p-2">  
            <p id="placeholder-text" class="text-center text-gray-400 p-8">Your selected files will appear here.</p>  
            <ul id="file-list" class="space-y-2"></ul>  
        </div>  
          
        <!-- Action Buttons -->  
        <div id="action-buttons" class="flex flex-col sm:flex-row gap-4 hidden">  
            <button id="merge-btn" class="w-full sm:w-1/2 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">  
                <i class="fas fa-compress-alt mr-2"></i><span>Merge Files</span>  
            </button>  
            <button id="reset-btn" class="w-full sm:w-1/2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300">  
                <i class="fas fa-trash-alt mr-2"></i><span>Reset</span>  
            </button>  
        </div>  
  
        <!-- Status/Download Area -->  
        <div id="status-area" class="mt-6 text-center"></div>  
    </div>  
  
    <script>  
        // --- DESTRUCTURING FROM pdf-lib ---  
        const { PDFDocument, rgb, StandardFonts } = PDFLib;  
  
        // --- DOM ELEMENT REFERENCES ---  
        const fileUpload = document.getElementById('file-upload');  
        const uploadLabel = document.getElementById('upload-label');  
        const placeholderText = document.getElementById('placeholder-text');  
        const fileList = document.getElementById('file-list');  
        const actionButtons = document.getElementById('action-buttons');  
        const mergeBtn = document.getElementById('merge-btn');  
        const resetBtn = document.getElementById('reset-btn');  
        const statusArea = document.getElementById('status-area');  
          
        let selectedFiles = [];  
  
        // --- EVENT LISTENERS ---  
          
        // Drag & Drop Listeners  
        ['dragenter', 'dragover'].forEach(eventName => uploadLabel.addEventListener(eventName, e => {  
            e.preventDefault();  
            uploadLabel.classList.add('dragover');  
        }));  
        ['dragleave', 'drop'].forEach(eventName => uploadLabel.addEventListener(eventName, e => {  
            e.preventDefault();  
            uploadLabel.classList.remove('dragover');  
        }));  
        uploadLabel.addEventListener('drop', e => {  
            fileUpload.files = e.dataTransfer.files;  
            handleFileSelect();  
        });  
  
        // Click & Button Listeners  
        fileUpload.addEventListener('change', handleFileSelect);  
        mergeBtn.addEventListener('click', mergeFiles);  
        resetBtn.addEventListener('click', resetApp);  
  
        // --- CORE FUNCTIONS ---  
  
        /**  
         * Handles file selection, validates file types, and updates the UI.  
         */  
        function handleFileSelect() {  
            statusArea.innerHTML = ''; // Clear previous status messages  
            const allFiles = Array.from(fileUpload.files);  
              
            const validFiles = allFiles.filter(file =>   
                file.type === 'application/pdf' || file.type === 'text/plain'  
            );  
              
            const invalidFiles = allFiles.filter(file => !validFiles.includes(file));  
  
            if (invalidFiles.length > 0) {  
                const invalidNames = invalidFiles.map(f => f.name).join(', ');  
                showStatus(`Unsupported file(s) ignored: ${invalidNames}.`, 'error');  
            }  
              
            // Add only new, valid files to the list, preventing duplicates  
            const currentFileNames = new Set(selectedFiles.map(f => f.name));  
            const newUniqueFiles = validFiles.filter(f => !currentFileNames.has(f.name));  
            selectedFiles.push(...newUniqueFiles);  
              
            renderFileList();  
            fileUpload.value = ''; // Clear the input after processing to allow re-selecting  
        }  
  
        /**  
         * Renders the list of selected files in the UI.  
         */  
        function renderFileList() {  
            fileList.innerHTML = ''; // Clear existing list  
              
            if (selectedFiles.length === 0) {  
                placeholderText.classList.remove('hidden');  
                actionButtons.classList.add('hidden');  
                mergeBtn.disabled = true;  
                return;  
            }  
  
            placeholderText.classList.add('hidden');  
            actionButtons.classList.remove('hidden');  
            mergeBtn.disabled = false;  
  
            selectedFiles.forEach((file, index) => {  
                const li = document.createElement('li');  
                li.className = 'file-item flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg';  
                  
                // Left side: Icon and file name  
                const leftDiv = document.createElement('div');  
                leftDiv.className = 'flex items-center overflow-hidden';  
                const icon = document.createElement('i');  
                const isPdf = file.type === 'application/pdf';  
                icon.className = `fas ${isPdf ? 'fa-file-pdf text-red-500' : 'fa-file-alt text-blue-500'} text-2xl mr-3 flex-shrink-0`;  
                const nameSpan = document.createElement('span');  
                nameSpan.className = 'text-gray-700 truncate';  
                nameSpan.textContent = file.name;  
                leftDiv.append(icon, nameSpan);  
                  
                // Right side: Control buttons  
                const controlsDiv = document.createElement('div');  
                controlsDiv.className = 'flex items-center space-x-2';  
                const upBtn = createControlButton('fa-arrow-up', () => moveFile(index, -1), index === 0);  
                const downBtn = createControlButton('fa-arrow-down', () => moveFile(index, 1), index === selectedFiles.length - 1);  
                const removeBtn = createControlButton('fa-times-circle', () => removeFile(index), false, 'text-red-500 hover:text-red-700');  
                controlsDiv.append(upBtn, downBtn, removeBtn);  
  
                li.append(leftDiv, controlsDiv);  
                fileList.append(li);  
            });  
        }  
  
        /**  
         * Helper function to create a control button (up, down, remove).  
         * @param {string} iconClass - The Font Awesome icon class.  
         * @param {Function} handler - The function to call on click.  
         * @param {boolean} disabled - Whether the button should be disabled.  
         * @param {string} [colorClass='text-gray-500 hover:text-gray-800'] - Tailwind CSS classes for color.  
         * @returns {HTMLButtonElement}  
         */  
        function createControlButton(iconClass, handler, disabled, colorClass = 'text-gray-500 hover:text-gray-800') {  
            const btn = document.createElement('button');  
            btn.className = `p-2 ${colorClass} ${disabled ? 'opacity-30 cursor-not-allowed' : ''}`;  
            btn.disabled = disabled;  
            btn.innerHTML = `<i class="fas ${iconClass}"></i>`;  
            btn.addEventListener('click', handler);  
            return btn;  
        }  
  
        /**  
         * Moves a file up or down in the list.  
         * @param {number} index - The current index of the file.  
         * @param {number} direction - -1 for up, 1 for down.  
         */  
        function moveFile(index, direction) {  
            const newIndex = index + direction;  
            if (newIndex < 0 || newIndex >= selectedFiles.length) return;  
            // Swap elements in the array  
            [selectedFiles[index], selectedFiles[newIndex]] = [selectedFiles[newIndex], selectedFiles[index]];  
            renderFileList();  
        }  
  
        /**  
         * Removes a file from the list.  
         * @param {number} index - The index of the file to remove.  
         */  
        function removeFile(index) {  
            selectedFiles.splice(index, 1);  
            renderFileList();  
        }  
  
        /**  
         * Resets the application to its initial state.  
         */  
        function resetApp() {  
            selectedFiles = [];  
            fileUpload.value = '';  
            statusArea.innerHTML = '';  
            renderFileList();  
        }  
  
        /**  
         * The main function to merge all selected files into a single PDF.  
         */  
        async function mergeFiles() {  
            if (selectedFiles.length === 0) {  
                showStatus('Please select files to merge.', 'error');  
                return;  
            }  
  
            mergeBtn.disabled = true;  
            showStatus('Merging files... Please wait.', 'loading');  
  
            try {  
                const mergedPdf = await PDFDocument.create();  
  
                for (const file of selectedFiles) {  
                    if (file.type === 'application/pdf') {  
                        const pdfBytes = await file.arrayBuffer();  
                        const pdfToMerge = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });  
                        const pages = await mergedPdf.copyPages(pdfToMerge, pdfToMerge.getPageIndices());  
                        pages.forEach(page => mergedPdf.addPage(page));  
                    } else if (file.type === 'text/plain') {  
                        let page = mergedPdf.addPage();  
                        const { width, height } = page.getSize();  
                        const font = await mergedPdf.embedFont(StandardFonts.Helvetica);  
                        const fontSize = 11;  
                        const margin = 50;  
                        const text = await file.text();  
                        const lines = text.replace(/\r\n/g, '\n').split('\n');  
                        let y = height - margin;  
                          
                        for (const line of lines) {  
                             if (y < margin) {  
                                page = mergedPdf.addPage();  
                                y = page.getSize().height - margin;  
                            }  
                            page.drawText(line, { x: margin, y, font, size: fontSize, color: rgb(0, 0, 0) });  
                            y -= fontSize * 1.2; // Move down for the next line  
                        }  
                    }  
                }  
  
                const mergedPdfBytes = await mergedPdf.save();  
                downloadPdf(mergedPdfBytes, 'merged-document.pdf');  
                showStatus('Merge successful! Your download has started.', 'success');  
  
            } catch (error) {  
                console.error('Error during merge:', error);  
                showStatus('An error occurred during merging. Check console for details.', 'error');  
            } finally {  
                mergeBtn.disabled = selectedFiles.length === 0;  
            }  
        }  
  
        /**  
         * Creates a downloadable link for the generated PDF.  
         * @param {Uint8Array} bytes - The PDF content as bytes.  
         * @param {string} filename - The desired name for the downloaded file.  
         */  
        function downloadPdf(bytes, filename) {  
            const blob = new Blob([bytes], { type: 'application/pdf' });  
            const link = document.createElement('a');  
            link.href = URL.createObjectURL(blob);  
            link.download = filename;  
            document.body.append(link);  
            link.click();  
            link.remove();  
            URL.revokeObjectURL(link.href);  
        }  
  
        /**  
         * Displays a status message in the UI.  
         * @param {string} message - The message to display.  
         * @param {'loading'|'success'|'error'} type - The type of message.  
         */  
        function showStatus(message, type) {  
            const statusDiv = document.createElement('div');  
            const typeClasses = {  
                loading: 'bg-blue-100 text-blue-800',  
                success: 'bg-green-100 text-green-800',  
                error: 'bg-red-100 text-red-800'  
            };  
            const typeIcons = {  
                loading: '<i class="fas fa-spinner fa-spin mr-2"></i>',  
                success: '<i class="fas fa-check-circle mr-2"></i>',  
                error: '<i class="fas fa-exclamation-triangle mr-2"></i>'  
            };  
            statusDiv.className = `status-message p-4 rounded-lg mt-2 ${typeClasses[type]}`;  
            statusDiv.innerHTML = `${typeIcons[type]} ${message}`;  
            statusArea.innerHTML = ''; // Clear old messages  
            statusArea.append(statusDiv);  
        }  
    </script>  
</body>  
</html>  
<!-- /wp:html -->  
