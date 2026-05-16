# CMA - ACTIVE Comparison Grid  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Active Comparables Analysis</title>  
      
    <!-- Load Tailwind CSS -->  
    <script src="https://cdn.tailwindcss.com"></script>  
      
    <!-- Load jsPDF for PDF Generation -->  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
      
    <!-- Google Font: Inter -->  
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">  
  
    <script>  
        tailwind.config = {  
            theme: {  
                extend: {  
                    fontFamily: {  
                        sans: ['Inter', 'sans-serif'],  
                    },  
                    colors: {  
                        brand: {  
                            50: '#eff6ff',  
                            100: '#dbeafe',  
                            500: '#3b82f6',  
                            600: '#2563eb',  
                            700: '#1d4ed8',  
                            900: '#1e3a8a',  
                        }  
                    }  
                }  
            }  
        }  
    </script>  
  
    <style>  
        /* Custom Styles for Sticky Columns and Scroll */  
        .cma-table-wrapper {  
            overflow-x: auto;  
            position: relative;  
            border-radius: 0.75rem;  
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);  
        }  
          
        .cma-table {  
            border-collapse: separate;  
            border-spacing: 0;  
            width: 100%;  
            min-width: 1200px; /* Force scroll on small screens */  
        }  
  
        .cma-table th, .cma-table td {  
            border-bottom: 1px solid #e5e7eb;  
            border-right: 1px solid #e5e7eb;  
        }  
  
        /* Sticky Left Column (Line Item Labels) */  
        .sticky-col {  
            position: -webkit-sticky;  
            position: sticky;  
            left: 0;  
            z-index: 10;  
            background-color: #f9fafb; /* Gray-50 */  
            width: 200px;  
            min-width: 200px;  
            box-shadow: 2px 0 5px rgba(0,0,0,0.05);  
        }  
  
        .header-sticky {  
            z-index: 20; /* Higher z-index for header corner */  
        }  
          
        /* Input Styling Overrides */  
        input[type="number"]::-webkit-inner-spin-button,   
        input[type="number"]::-webkit-outer-spin-button {   
            -webkit-appearance: none;   
            margin: 0;   
        }  
          
        /* Calculated Field Styles */  
        .calc-field {  
            background-color: #fefce8; /* Yellow-50 */  
            font-weight: 600;  
            color: #1f2937;  
        }  
          
        .final-price-field {  
            background-color: #dcfce7; /* Green-100 */  
            font-weight: 800;  
            color: #166534;  
            font-size: 1.1em;  
        }  
    </style>  
</head>  
<body class="bg-gray-50 text-gray-800 font-sans p-4 md:p-8">  
  
    <div class="max-w-7xl mx-auto">  
        <!-- Header -->  
        <header class="mb-8 text-center md:text-left md:flex md:justify-between md:items-end">  
            <div>  
                <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Active Comparables Analysis</h1>  
                <p class="mt-2 text-gray-500">Enter subject property data and comparable sales to calculate adjusted values.</p>  
            </div>  
        </header>  
  
        <!-- A. Subject Property Identification (Crucial for Calculations) -->  
        <section class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">  
            <h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center">  
                <span class="bg-brand-100 text-brand-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">A</span>  
                Subject Property Identification  
            </h2>  
              
            <!-- Address Block -->  
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">  
                <div class="lg:col-span-2">  
                    <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Address</label>  
                    <input type="text" id="subject-address" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border" placeholder="123 Main St">  
                </div>  
                <div>  
                    <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">City</label>  
                    <input type="text" id="subject-city" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border" placeholder="City">  
                </div>  
                <div class="flex gap-3">  
                    <div class="w-1/2">  
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">State</label>  
                        <input type="text" id="subject-state" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border" placeholder="ST">  
                    </div>  
                    <div class="w-1/2">  
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Zip</label>  
                        <input type="text" id="subject-zip" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border" placeholder="00000">  
                    </div>  
                </div>  
            </div>  
  
            <!-- New Fields: Status, Dates, Price -->  
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5 pt-5 border-t border-gray-100">  
                <div>  
                    <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Sales Status</label>  
                    <select id="subject-status" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border">  
                        <option value="">Select Status...</option>  
                        <option value="Active">Active</option>  
                        <option value="Active Under Contract">Active Under Contract</option>  
                        <option value="Pending">Pending</option>  
                        <option value="Off-Market">Off-Market</option>  
                    </select>  
                </div>  
                <div>  
                    <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Last Sales Date</label>  
                    <input type="date" id="subject-last-date" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border">  
                </div>  
                <div>  
                    <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Last Sales Price ($)</label>  
                    <input type="number" id="subject-last-price" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2.5 border" placeholder="e.g. 450000">  
                </div>  
            </div>  
  
            <!-- Summary Field -->  
            <div>  
                <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Summary of subject property's market activity</label>  
                <textarea id="subject-activity-summary" rows="3" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2 border" placeholder="Enter notes on market activity, listing history, etc..."></textarea>  
            </div>  
  
        </section>  
  
        <!-- B. Comparable Selection -->  
        <section class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">  
            <h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center">  
                <span class="bg-brand-100 text-brand-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">B</span>  
                Comparable Selection  
            </h2>  
            <div>  
                <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Comparable Selection Narrative</label>  
                <textarea id="comp-selection-narrative" rows="3" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-2 border" placeholder="Explain the search criteria and selection process for comparables..."></textarea>  
            </div>  
        </section>  
  
        <!-- C. Active Comparables Grid -->  
        <section class="mb-8">  
            <h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center">  
                <span class="bg-brand-100 text-brand-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">C</span>  
                Active Comparables Grid  
            </h2>  
              
            <div class="cma-table-wrapper bg-white border border-gray-200">  
                <table class="cma-table">  
                    <thead>  
                        <tr class="bg-gray-800 text-white text-left text-sm uppercase tracking-wider">  
                            <th class="p-4 sticky-col header-sticky border-b-0">Feature / Field</th>  
                            <th class="p-4 w-1/5 bg-gray-700 border-gray-600">Subject Property</th>  
                            <th class="p-4 w-1/5 bg-gray-800">Active Comp 1</th>  
                            <th class="p-4 w-1/5 bg-gray-800">Active Comp 2</th>  
                            <th class="p-4 w-1/5 bg-gray-800">Active Comp 3</th>  
                        </tr>  
                    </thead>  
                    <tbody id="grid-body" class="text-sm text-gray-700">  
                        <!-- JS will inject rows here -->  
                    </tbody>  
                </table>  
            </div>  
        </section>  
  
        <!-- D. Commentary -->  
        <section class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">  
            <h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center">  
                <span class="bg-brand-100 text-brand-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">D</span>  
                Analysis & Reconciliation  
            </h2>  
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">  
                <!-- Comp 1 -->  
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">  
                    <h3 class="font-bold text-gray-900 mb-2">Comp 1 Analysis</h3>  
                    <div class="mb-3">  
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Overall Comparison</label>  
                        <select id="comp1-comparison" class="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-brand-500 focus:border-brand-500 block p-2">  
                            <option value="">Select...</option>  
                            <option value="Superior">Superior</option>  
                            <option value="Similar">Similar</option>  
                            <option value="Inferior">Inferior</option>  
                        </select>  
                    </div>  
                    <div>  
                         <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Analysis Notes</label>  
                        <textarea id="comp1-notes" rows="4" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 text-sm p-2 border" placeholder="Why is this comp superior/inferior?"></textarea>  
                    </div>  
                </div>  
                <!-- Comp 2 -->  
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">  
                    <h3 class="font-bold text-gray-900 mb-2">Comp 2 Analysis</h3>  
                    <div class="mb-3">  
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Overall Comparison</label>  
                        <select id="comp2-comparison" class="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-brand-500 focus:border-brand-500 block p-2">  
                            <option value="">Select...</option>  
                            <option value="Superior">Superior</option>  
                            <option value="Similar">Similar</option>  
                            <option value="Inferior">Inferior</option>  
                        </select>  
                    </div>  
                    <div>  
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Analysis Notes</label>  
                        <textarea id="comp2-notes" rows="4" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 text-sm p-2 border" placeholder="Why is this comp superior/inferior?"></textarea>  
                    </div>  
                </div>  
                <!-- Comp 3 -->  
                <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">  
                    <h3 class="font-bold text-gray-900 mb-2">Comp 3 Analysis</h3>  
                    <div class="mb-3">  
                         <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Overall Comparison</label>  
                         <select id="comp3-comparison" class="w-full bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-brand-500 focus:border-brand-500 block p-2">  
                            <option value="">Select...</option>  
                            <option value="Superior">Superior</option>  
                            <option value="Similar">Similar</option>  
                            <option value="Inferior">Inferior</option>  
                        </select>  
                    </div>  
                    <div>  
                        <label class="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Analysis Notes</label>  
                        <textarea id="comp3-notes" rows="4" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 text-sm p-2 border" placeholder="Why is this comp superior/inferior?"></textarea>  
                    </div>  
                </div>  
            </div>  
        </section>  
  
        <!-- E. Market Summary -->  
        <section class="bg-brand-50 rounded-xl border border-brand-100 p-6 mb-10">  
            <h2 class="text-lg font-bold text-brand-900 mb-4">Market Data Summary</h2>  
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">  
                <div class="bg-white p-3 rounded-lg shadow-sm">  
                    <span class="block text-xs text-gray-500 uppercase">Sale Price Range</span>  
                    <span id="summary-price-range" class="block text-lg font-bold text-brand-600 mt-1">-</span>  
                </div>  
                <div class="bg-white p-3 rounded-lg shadow-sm">  
                    <span class="block text-xs text-gray-500 uppercase">Adj. Price Range</span>  
                    <span id="summary-adj-price-range" class="block text-lg font-bold text-green-600 mt-1">-</span>  
                </div>  
                <div class="bg-white p-3 rounded-lg shadow-sm">  
                    <span class="block text-xs text-gray-500 uppercase">GLA Range</span>  
                    <span id="summary-gla-range" class="block text-lg font-bold text-gray-800 mt-1">-</span>  
                </div>  
                <div class="bg-white p-3 rounded-lg shadow-sm">  
                    <span class="block text-xs text-gray-500 uppercase">DOM Range</span>  
                    <span id="summary-dom-range" class="block text-lg font-bold text-gray-800 mt-1">-</span>  
                </div>  
            </div>  
        </section>  
  
        <!-- F. Active Comparables Analysis Summary -->  
        <section class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-10">  
            <h2 class="text-lg font-bold text-gray-900 mb-4 flex items-center">  
                <span class="bg-brand-100 text-brand-700 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">F</span>  
                Active Comparables Analysis Summary  
            </h2>  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">  
                <div>  
                    <label class="block text-sm font-bold text-gray-900 mb-2">Most Probable Asking Price ($)</label>  
                    <input type="number" id="probable-asking-price" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-3 border text-lg font-semibold text-green-700" placeholder="e.g. 500000">  
                </div>  
                <div>  
                    <label class="block text-sm font-bold text-gray-900 mb-2">Projected DOM</label>  
                    <input type="number" id="projected-dom" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 sm:text-sm p-3 border text-lg font-semibold text-gray-800" placeholder="e.g. 30">  
                </div>  
            </div>  
            <div class="border-t border-gray-100 pt-5">  
                <label class="block text-sm font-bold text-gray-900 mb-2">Full Summary Conclusion Analysis</label>  
                <textarea id="full-summary-analysis" rows="6" class="w-full border-gray-300 rounded-md shadow-sm focus:ring-brand-500 focus:border-brand-500 text-sm p-3 border" placeholder="Enter your final value reconciliation and conclusion..."></textarea>  
            </div>  
        </section>  
  
        <!-- Footer Actions -->  
        <div class="flex flex-col md:flex-row justify-end items-center gap-4 border-t border-gray-200 pt-8 pb-12">  
            <div id="statusMsg" class="text-sm text-gray-500 order-3 md:order-1 mr-auto"></div>  
              
            <button id="clear-form-btn" type="button" class="order-2 px-5 py-2.5 rounded-lg bg-white border border-gray-300 text-gray-700 font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition">  
                Clear Form  
            </button>  
              
            <button id="generate-pdf-btn" type="button" class="order-1 md:order-3 inline-flex items-center px-6 py-2.5 rounded-lg bg-brand-600 text-white font-medium shadow-md hover:bg-brand-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">  
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>  
                Download PDF Report  
            </button>  
        </div>  
  
    </div>  
  
<script>  
    // --- 1. CONFIGURATION ---  
    const soldCompIds = ['comp1', 'comp2', 'comp3'];  
      
    // Classes for dynamic generation  
    const INPUT_BASE = 'w-full bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-brand-500 focus:border-brand-500 block p-2 transition duration-150';  
    const SUBJ_INPUT_BASE = 'w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-brand-500 focus:border-brand-500 block p-2';  
  
    // Grid Definition  
    // Key: idBase  
    // Logic: 'calc-field' triggers recalculation on input. 'compType: calc' means read-only result field.  
    const gridConfig = [  
        // Section: Data  
        { type: 'header', label: '1. Identification & Data' },  
        { label: 'Data Source', idBase: 'data-source', subType: 'text', compType: 'text', subVal: 'N/A' },  
        { label: 'ParcelID/MLS#', idBase: 'parcel-mls', subType: 'text', compType: 'text', subVal: 'N/A' },  
        { label: 'Current Status', idBase: 'current-status', subType: 'select', compType: 'select', opts: ['Sold', 'Active', 'Active Under Contract', 'Pending', 'Off-Market'] },  
        { label: 'Address', idBase: 'address', subType: 'text', compType: 'text' },  
        { label: 'Proximity to Subject', idBase: 'proximity', subType: 'text', compType: 'text', subVal: 'N/A' },  
        { label: 'Original List Date', idBase: 'orig-list-date', subType: 'text', compType: 'date', subVal: 'N/A' },  
        { label: 'Original List Price ($)', idBase: 'orig-list-price', subType: 'text', compType: 'number', subVal: 'N/A', extra: 'data-calc="orig-price"' },  
        { label: 'Current Status Date', idBase: 'status-date', subType: 'text', compType: 'date', subVal: 'N/A' },  
        { label: 'Current List Price ($)', idBase: 'list-price', subType: 'text', compType: 'number', subVal: 'N/A', extra: 'data-calc="price"' },  
        { label: 'Days on Market', idBase: 'dom', subType: 'text', compType: 'number', subVal: 'N/A' },  
          
        // Section: Features (UPDATED)  
        { type: 'header', label: '2. Physical Characteristics' },  
        { label: 'GBA (Sq. Ft.)', idBase: 'gba', subType: 'number', compType: 'number' },  
        { label: 'GLA (Sq. Ft.)', idBase: 'gla', subType: 'number', compType: 'number', extra: 'data-calc="gla"', subId: 'subject-gla' },  
        { label: 'Lot Size', idBase: 'lot', subType: 'text', compType: 'text' },  
        { label: 'Lot Shape', idBase: 'lot-shape', subType: 'text', compType: 'text' },  
        { label: 'Property Type', idBase: 'prop-type', subType: 'select', compType: 'select', opts: ['Single Family - Detached', 'Single Family - Semidetached', 'Single Family - Townhome/Rowhome', 'Residential Condo - Low-Rise', 'Residential Condo - High Rise', 'Multifamily - Duplex', 'Multifamily - Triplex', 'Multifamily - Quadplex', 'Multifamily - 5+ Units', 'Mix-Use Building', 'Commercial', 'Vacant Land/Lot'] },  
        { label: 'Property Style', idBase: 'style', subType: 'select', compType: 'select', opts: ['Ranch', 'Colonial', 'Contemporary', 'Traditional', 'Bungalow', 'Cape Cod', 'Split Level', 'Other'] },  
        { label: 'Units', idBase: 'units', subType: 'number', compType: 'number' },  
        { label: 'Unit Mix', idBase: 'unit-mix', subType: 'text', compType: 'text' },  
        { label: 'Total Rooms', idBase: 'rooms', subType: 'number', compType: 'number' },  
        { label: 'Bedrooms', idBase: 'beds', subType: 'number', compType: 'number' },  
        { label: 'Full Baths', idBase: 'full-baths', subType: 'number', compType: 'number' },  
        { label: 'Half Baths', idBase: 'half-baths', subType: 'number', compType: 'number' },  
        { label: 'Year Built', idBase: 'year', subType: 'number', compType: 'number' },  
        { label: 'Foundation', idBase: 'foundation', subType: 'select', compType: 'select', opts: ['Slab', 'Crawl Space', 'Full Basement', 'Partial Basement', 'Pier & Beam'] },  
        { label: 'Basement (Sq. Ft.)', idBase: 'basement-sqft', subType: 'number', compType: 'number' },  
        { label: 'Garage/Parking', idBase: 'garage', subType: 'select', compType: 'select', opts: ['Attached Garage', 'Detached Garage', 'Carport', 'Driveway', 'Street', 'None'] },  
        { label: 'Parking Spaces', idBase: 'parking-spaces', subType: 'number', compType: 'number' },  
        { label: 'Fireplaces', idBase: 'fireplaces', subType: 'number', compType: 'number' },  
        { label: 'Pool/Spas', idBase: 'pool', subType: 'select', compType: 'select', opts: ['Yes', 'No'] },  
        { label: 'Utility Mix', idBase: 'utilities', subType: 'text', compType: 'text' },  
        { label: 'Condition', idBase: 'condition', subType: 'select', compType: 'select', opts: ['Excellent', 'Good', 'Average', 'Fair', 'Poor', 'Damaged', 'Vacant Land'] },  
        { label: 'Price per Sq Ft ($)', idBase: 'price-sqft', subType: 'display', subVal: '-', compType: 'calc', extraClass: 'calc-field' },  
          
        // Section: Adjustments  
        { type: 'header', label: '3. Adjustments (Enter $ Amount)' },  
        { label: 'Date/Time Adjustment', idBase: 'adj-date', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'Location', idBase: 'adj-location', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'Lot/Land Adj', idBase: 'adj-lot', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'GLA Adj. Rate ($/sf)', idBase: 'adj-gla-rate', subType: 'display', subVal: 'Calc Auto', compType: 'number', extra: 'data-adj="gla-rate"' },  
        { label: 'Bedrooms Adj.', idBase: 'adj-beds', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'Bathrooms Adj.', idBase: 'adj-baths', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'Basement Adj.', idBase: 'adj-basement', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'Garage Adj.', idBase: 'adj-garage', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'Pool Adj', idBase: 'adj-pool', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'Condition/Quality', idBase: 'adj-condition', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
        { label: 'Other', idBase: 'adj-other', subType: 'display', subVal: '-', compType: 'number', extra: 'data-adj="true"' },  
  
        // Section: Rental Analysis  
        { type: 'header', label: '4. Rental Analysis' },  
        { label: 'Rental Bracket Range', idBase: 'rent-bracket', subType: 'select', compType: 'select', opts: ['Premium Rent Range', 'Average Rent Range', 'Not Rentable'] },  
        { label: 'Est./Actual Rent ($)', idBase: 'rent', subType: 'number', compType: 'number', extra: 'data-calc="rent"' },  
        { label: 'Rent per sq ft ($)', idBase: 'rent-psf', subType: 'display', subVal: '-', compType: 'calc', extraClass: 'calc-field' },  
  
        // Section: Results  
        { type: 'header', label: '5. Calculated Results' },  
        { label: 'Unadjusted PPSF ($)', idBase: 'res-ppsf', subType: 'display', subVal: '-', compType: 'calc', extraClass: 'calc-field' },  
        { label: 'GLA Adjustment ($)', idBase: 'res-gla-adj', subType: 'display', subVal: '-', compType: 'calc', extraClass: 'calc-field' },  
        { label: 'Net Adjustment ($)', idBase: 'res-net', subType: 'display', subVal: '-', compType: 'calc', extraClass: 'calc-field' },  
        { label: 'Net Adjustment (%)', idBase: 'res-net-pct', subType: 'display', subVal: '-', compType: 'calc', extraClass: 'calc-field' },  
        { label: 'Gross Adjustment (%)', idBase: 'res-gross-pct', subType: 'display', subVal: '-', compType: 'calc', extraClass: 'calc-field' },  
        { label: 'Adjusted List Price', idBase: 'res-final-price', subType: 'display', subVal: '-', compType: 'calc', extraClass: 'final-price-field' },  
    ];  
  
    // --- 2. GRID GENERATION ---  
    function initGrid() {  
        const tbody = document.getElementById('grid-body');  
        let html = '';  
  
        gridConfig.forEach(row => {  
            if (row.type === 'header') {  
                html += `<tr><td colspan="5" class="bg-gray-100 p-3 font-bold text-gray-600 border-b border-gray-200 sticky-col z-0">${row.label}</td></tr>`;  
                return;  
            }  
  
            html += `<tr>`;  
              
            // Label Column (Sticky)  
            html += `<td class="p-3 bg-gray-50 font-medium text-gray-700 sticky-col border-r shadow-sm">${row.label}</td>`;  
              
            // Subject Column  
            html += `<td class="p-2 bg-gray-50 border-r border-gray-200">`;  
            if (row.subType === 'display') {  
                html += `<div class="text-center text-gray-400 select-none">${row.subVal}</div>`;  
            } else if (row.subType === 'select') {  
                html += createSelect(`subject-${row.idBase}`, row.opts, SUBJ_INPUT_BASE);  
            } else {  
                // If it has a specific subId (like subject-gla), use that, otherwise generate one  
                const id = row.subId || `subject-${row.idBase}`;  
                html += `<input type="${row.subType}" id="${id}" class="${SUBJ_INPUT_BASE}" placeholder="${row.subVal || ''}">`;  
            }  
            html += `</td>`;  
  
            // Comp Columns  
            soldCompIds.forEach(compId => {  
                html += `<td class="p-2 border-r border-gray-200">`;  
                const inputId = `${compId}-${row.idBase}`;  
                  
                if (row.compType === 'calc') {  
                    html += `<input type="text" id="${inputId}" class="${INPUT_BASE} ${row.extraClass || ''}" readonly tabindex="-1">`;  
                } else if (row.compType === 'select') {  
                    html += createSelect(inputId, row.opts, INPUT_BASE);  
                } else {  
                    html += `<input type="${row.compType}" id="${inputId}" class="${INPUT_BASE}" ${row.extra || ''}>`;  
                }  
                html += `</td>`;  
            });  
  
            html += `</tr>`;  
        });  
  
        tbody.innerHTML = html;  
        attachListeners();  
    }  
  
    function createSelect(id, opts, classes) {  
        let h = `<select id="${id}" class="${classes}"><option value="">Select...</option>`;  
        opts.forEach(o => h += `<option value="${o}">${o}</option>`);  
        h += `</select>`;  
        return h;  
    }  
  
    // --- 3. CALCULATION LOGIC ---  
      
    // Helpers  
    const getNum = (id) => parseFloat(document.getElementById(id)?.value) || 0;  
    const setVal = (id, val) => {  
        const el = document.getElementById(id);  
        if(el) el.value = val;  
    };  
    const fmtMoney = (n) => n.toLocaleString('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0});  
    const fmtDecimal = (n) => n.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});  
    const fmtPct = (n) => n.toFixed(1) + '%';  
  
    function calculate() {  
        const subjGLA = getNum('subject-gla');  
  
        const prices = [];  
        const adjPrices = [];  
        const glas = [];  
        const doms = [];  
  
        soldCompIds.forEach(cid => {  
            const price = getNum(`${cid}-list-price`);  
            const gla = getNum(`${cid}-gla`);  
            const dom = getNum(`${cid}-dom`);  
  
            if(price) prices.push(price);  
            if(gla) glas.push(gla);  
            if(dom) doms.push(dom);  
  
            // 1. PPSF  
            if (price && gla) {  
                const ppsfVal = fmtMoney(price / gla).replace('$','');  
                setVal(`${cid}-res-ppsf`, ppsfVal);   
                setVal(`${cid}-price-sqft`, ppsfVal);  
            } else {  
                setVal(`${cid}-res-ppsf`, '');  
                setVal(`${cid}-price-sqft`, '-');  
            }  
  
            // 1b. Rent PSF  
            const rent = getNum(`${cid}-rent`);  
            if (rent && gla) {  
                setVal(`${cid}-rent-psf`, fmtDecimal(rent / gla));  
            } else {  
                setVal(`${cid}-rent-psf`, '-');  
            }  
  
            // 2. Adjustments  
            let netAdj = 0;  
            let grossAdj = 0;  
  
            // 2a. GLA Auto-Adjustment  
            let glaAdjVal = 0;  
            const glaRate = getNum(`${cid}-adj-gla-rate`);  
            if (subjGLA > 0 && gla > 0 && glaRate !== 0) {  
                // Formula: (Subject - Comp) * Rate  
                // Example: Subj 2000, Comp 1500, Rate 50. (2000-1500)*50 = +25000 (Comp needs money to equal subject)  
                glaAdjVal = (subjGLA - gla) * glaRate;  
                setVal(`${cid}-res-gla-adj`, fmtMoney(glaAdjVal));  
            } else {  
                setVal(`${cid}-res-gla-adj`, '-');  
            }  
            netAdj += glaAdjVal;  
            grossAdj += Math.abs(glaAdjVal);  
  
            // 2b. Manual Adjustments  
            const adjInputs = document.querySelectorAll(`[id^="${cid}-adj-"][data-adj="true"]`);  
            adjInputs.forEach(input => {  
                const val = parseFloat(input.value) || 0;  
                netAdj += val;  
                grossAdj += Math.abs(val);  
            });  
  
            // 3. Results  
            setVal(`${cid}-res-net`, fmtMoney(netAdj));  
              
            if (price > 0) {  
                setVal(`${cid}-res-net-pct`, fmtPct((netAdj / price) * 100));  
                setVal(`${cid}-res-gross-pct`, fmtPct((grossAdj / price) * 100));  
                  
                const final = price + netAdj;  
                setVal(`${cid}-res-final-price`, fmtMoney(final));  
                adjPrices.push(final);  
            } else {  
                setVal(`${cid}-res-net-pct`, '');  
                setVal(`${cid}-res-gross-pct`, '');  
                setVal(`${cid}-res-final-price`, '');  
            }  
        });  
  
        updateSummary(prices, adjPrices, glas, doms);  
    }  
  
    function updateSummary(prices, adjPrices, glas, doms) {  
        const range = (arr, fmt) => {  
            if(!arr.length) return '-';  
            const min = Math.min(...arr);  
            const max = Math.max(...arr);  
            if(min === max) return fmt ? fmtMoney(min) : min;  
            return fmt ? `${fmtMoney(min)} - ${fmtMoney(max)}` : `${min} - ${max}`;  
        };  
  
        document.getElementById('summary-price-range').textContent = range(prices, true);  
        document.getElementById('summary-adj-price-range').textContent = range(adjPrices, true);  
        document.getElementById('summary-gla-range').textContent = range(glas, false);  
        document.getElementById('summary-dom-range').textContent = range(doms, false);  
    }  
  
    function attachListeners() {  
        // Listen to all inputs for calculation and saving  
        document.querySelectorAll('input, select, textarea').forEach(el => {  
            el.addEventListener('input', () => {  
                calculate();  
                saveData();  
            });  
        });  
    }  
  
    // --- 4. STORAGE & UTILS ---  
    function saveData() {  
        const data = {};  
        document.querySelectorAll('input, select, textarea').forEach(el => {  
            if (el.id && !el.readOnly && el.type !== 'hidden') {  
                data[el.id] = el.value;  
            }  
        });  
        localStorage.setItem('cma_grid_data', JSON.stringify(data));  
          
        // Optional: Visual indicator of save (subtle)  
        const status = document.getElementById('statusMsg');  
        status.textContent = 'Autosaved';  
        setTimeout(() => { if(status.textContent === 'Autosaved') status.textContent = ''; }, 2000);  
    }  
  
    function loadData() {  
        try {  
            const saved = localStorage.getItem('cma_grid_data');  
            if (saved) {  
                const data = JSON.parse(saved);  
                for (const id in data) {  
                    const el = document.getElementById(id);  
                    if (el) el.value = data[id];  
                }  
                calculate(); // Re-run calcs after loading  
            }  
        } catch (e) {  
            console.error("Error loading data", e);  
        }  
    }  
  
    function clearForm() {  
        if (!confirm("Are you sure you want to clear all data? This cannot be undone.")) return;  
          
        document.querySelectorAll('input, select, textarea').forEach(el => {  
            if (!el.readOnly && el.type !== 'hidden') {  
                el.value = '';  
            }  
        });  
          
        localStorage.removeItem('cma_grid_data');  
        calculate(); // Reset calcs  
        document.getElementById('statusMsg').textContent = 'Form cleared';  
    }  
  
    // --- 5. PDF GENERATION ---  
    async function generatePDF() {  
        const { jsPDF } = window.jspdf;  
        const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });  
        const btn = document.getElementById('generate-pdf-btn');  
        const status = document.getElementById('statusMsg');  
          
        btn.disabled = true;  
        status.textContent = "Generating PDF...";  
  
        try {  
            // Title  
            doc.setFontSize(18);  
            doc.text("Active Comparables Analysis", 14, 15);  
              
            doc.setFontSize(10);  
            const addr = document.getElementById('subject-address').value || 'Subject Property';  
            doc.text(`Subject: ${addr}`, 14, 22);  
            doc.text(`Date: ${new Date().toLocaleDateString()}`, 200, 22);  
  
            let currentY = 22;  
  
            // Subject Extra Info  
            doc.setFontSize(9);  
            const status = document.getElementById('subject-status').value;  
            const lastDate = document.getElementById('subject-last-date').value;  
            const lastPrice = document.getElementById('subject-last-price').value;  
              
            currentY += 6;  
            let infoLine = `Status: ${status || 'N/A'}`;  
            if(lastDate) infoLine += `  |  Last Sale: ${lastDate}`;  
            if(lastPrice) infoLine += `  |  Last Price: $${lastPrice}`;  
            doc.text(infoLine, 14, currentY);  
  
            // Subject Summary  
            const subjectSummary = document.getElementById('subject-activity-summary').value;  
            if(subjectSummary) {  
                currentY += 5;  
                const splitSummary = doc.splitTextToSize(`Activity Summary: ${subjectSummary}`, 270);  
                doc.text(splitSummary, 14, currentY);  
                currentY += (splitSummary.length * 4);  
            }  
  
            // NEW: Comparable Selection Narrative  
            const compSelectNarrative = document.getElementById('comp-selection-narrative').value;  
            if(compSelectNarrative) {  
                currentY += 5;  
                const splitCompNarrative = doc.splitTextToSize(`Comparable Selection: ${compSelectNarrative}`, 270);  
                doc.text(splitCompNarrative, 14, currentY);  
                currentY += (splitCompNarrative.length * 4);  
            }  
  
            // Table Config  
            let y = currentY + 8;  
            const startX = 14;  
            const colWidth = 45;  
            const labelWidth = 60;  
            const rowHeight = 7;  
              
            // Draw Headers  
            doc.setFillColor(229, 231, 235);  
            doc.rect(startX, y, labelWidth + (colWidth * 4), rowHeight, 'F');  
            doc.setFont(undefined, 'bold');  
            doc.text("Feature", startX + 2, y + 5);  
            doc.text("Subject", startX + labelWidth + 2, y + 5);  
            doc.text("Active Comp 1", startX + labelWidth + colWidth + 2, y + 5);  
            doc.text("Active Comp 2", startX + labelWidth + (colWidth * 2) + 2, y + 5);  
            doc.text("Active Comp 3", startX + labelWidth + (colWidth * 3) + 2, y + 5);  
            y += rowHeight;  
  
            doc.setFont(undefined, 'normal');  
            doc.setFontSize(9);  
  
            // Iterate Rows  
            gridConfig.forEach(row => {  
                if (y > 190) { // New Page  
                    doc.addPage();  
                    y = 20;  
                    // Redraw Headers  
                    doc.setFont(undefined, 'bold');  
                    doc.setFillColor(229, 231, 235);  
                    doc.rect(startX, y, labelWidth + (colWidth * 4), rowHeight, 'F');  
                    doc.text("Feature", startX + 2, y + 5);  
                    doc.text("Subject", startX + labelWidth + 2, y + 5);  
                    doc.text("Active Comp 1", startX + labelWidth + colWidth + 2, y + 5);  
                    doc.text("Active Comp 2", startX + labelWidth + (colWidth * 2) + 2, y + 5);  
                    doc.text("Active Comp 3", startX + labelWidth + (colWidth * 3) + 2, y + 5);  
                    y += rowHeight;  
                    doc.setFont(undefined, 'normal');  
                }  
  
                if (row.type === 'header') {  
                    doc.setFillColor(243, 244, 246);  
                    doc.rect(startX, y, labelWidth + (colWidth * 4), rowHeight, 'F');  
                    doc.setFont(undefined, 'bold');  
                    doc.text(row.label, startX + 2, y + 5);  
                    doc.setFont(undefined, 'normal');  
                } else {  
                    // Label  
                    doc.text(row.label, startX + 2, y + 5);  
                      
                    // Values helper  
                    const getText = (id) => document.getElementById(id)?.value || '';  
                      
                    // Subject Value  
                    const subjId = row.subId || `subject-${row.idBase}`;  
                    let subjText = row.subType === 'display' ? row.subVal : getText(subjId);  
                    doc.text(String(subjText).substring(0, 22), startX + labelWidth + 2, y + 5);  
  
                    // Comps  
                    soldCompIds.forEach((cid, idx) => {  
                        const val = getText(`${cid}-${row.idBase}`);  
                        doc.text(String(val).substring(0, 22), startX + labelWidth + (colWidth * (idx + 1)) + 2, y + 5);  
                    });  
                      
                    // Grid lines  
                    doc.setDrawColor(229, 231, 235); // gray-200  
                    doc.line(startX, y + rowHeight, startX + labelWidth + (colWidth * 4), y + rowHeight); // bottom border  
                }  
                y += rowHeight;  
            });  
  
            // Commentary Page  
            doc.addPage();  
            doc.setFontSize(14);  
            doc.text("Analysis & Reconciliation", 14, 20);  
            doc.setFontSize(10);  
              
            y = 30;  
            ['comp1', 'comp2', 'comp3'].forEach((cid, i) => {  
                // Get values  
                const comparison = document.getElementById(`${cid}-comparison`).value || 'Not Rated';  
                const note = document.getElementById(`${cid}-notes`).value;  
                  
                // Header  
                doc.setFont(undefined, 'bold');  
                doc.text(`Comparable ${i+1} (${comparison})`, 14, y);  
                doc.setFont(undefined, 'normal');  
                  
                // Note content  
                const splitNote = doc.splitTextToSize(note, 260); // 260mm width for A4 landscape  
                doc.text(splitNote, 14, y + 6);  
                  
                // Increment Y  
                y += 15 + (splitNote.length * 4);  
                  
                // Page break check  
                if (y > 180) {  
                    doc.addPage();  
                    y = 20;  
                }  
            });  
  
            // Active Comparables Analysis Summary  
            const probablePrice = document.getElementById('probable-asking-price').value;  
            const projectedDom = document.getElementById('projected-dom').value;  
            const fullSummary = document.getElementById('full-summary-analysis').value;  
              
            if(probablePrice || projectedDom || fullSummary) {  
                 y += 10;  
                 if (y > 170) {  
                    doc.addPage();  
                    y = 20;  
                }  
                  
                doc.setFont(undefined, 'bold');  
                doc.setFontSize(14);  
                doc.text("Active Comparables Analysis Summary", 14, y);  
                doc.setFontSize(10);  
                y += 8;  
  
                if (probablePrice || projectedDom) {  
                    doc.setFont(undefined, 'bold');  
                    let priceStr = probablePrice ? `Most Probable Asking Price: $${Number(probablePrice).toLocaleString()}` : '';  
                    let domStr = projectedDom ? `Projected DOM: ${projectedDom}` : '';  
                    let combinedStr = [priceStr, domStr].filter(Boolean).join('   |   ');  
                    doc.text(combinedStr, 14, y);  
                    doc.setFont(undefined, 'normal');  
                    y += 8;  
                }  
  
                if (fullSummary) {  
                    doc.setFont(undefined, 'bold');  
                    doc.text("Full Summary Conclusion Analysis:", 14, y);  
                    doc.setFont(undefined, 'normal');  
                    y += 6;  
                      
                    const splitSummary = doc.splitTextToSize(fullSummary, 260);  
                    doc.text(splitSummary, 14, y);  
                    y += (splitSummary.length * 4);  
                }  
            }  
  
            doc.save(`CMA_Grid_${addr.replace(/[^a-z0-9]/gi, '_')}.pdf`);  
            status.textContent = "Download Complete";  
        } catch (e) {  
            console.error(e);  
            status.textContent = "Error generating PDF";  
        } finally {  
            btn.disabled = false;  
        }  
    }  
  
    // --- INIT ---  
    window.onload = function() {  
        initGrid();  
        loadData(); // Load saved data after grid is built  
          
        document.getElementById('generate-pdf-btn').addEventListener('click', generatePDF);  
        document.getElementById('clear-form-btn').addEventListener('click', clearForm);  
    };  
  
</script>  
</body>  
</html>  
<!-- /wp:html -->  
