# Gross Rent Multiplier - GRM Reconciliation  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>GRM Analysis Form - WP Optimized</title>  
    <!-- Add jsPDF for native PDF generation -->  
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>  
    <style>  
        /* Basic body reset for standalone preview */  
        body { margin: 0; padding: 20px; background-color: #e5e7eb; }  
    </style>  
</head>  
<body>  
  
<!-- GRM Form (WP-Optimized) + Auto-Save + Clear + Create PDF -->  
<section class="be-grm" data-be-grm>  
  <style>  
    .be-grm {  
      font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";  
      background: #f9fafb;  
      padding: 18px;  
      border-radius: 14px;  
      max-width: 1200px;  
      margin: 0 auto;  
    }  
    .be-grm .wrap { width: 100%; margin: 0 auto; }  
  
    .be-grm header { text-align: center; margin-bottom: 18px; }  
    .be-grm h1 { font-size: 28px; line-height: 1.2; margin: 0; font-weight: 800; color: #111827; }  
    .be-grm header p { margin: 6px 0 0; color: #6b7280; font-size: 15px; }  
  
    .be-grm .toolbar {  
      display: flex;  
      flex-wrap: wrap;  
      gap: 10px;  
      align-items: center;  
      justify-content: flex-end;  
      background: #ffffff;  
      border: 1px solid #e5e7eb;  
      border-radius: 14px;  
      padding: 12px 14px;  
      margin-bottom: 16px;  
      box-shadow: 0 6px 12px -6px rgba(0,0,0,.10);  
    }  
    .be-grm .bottom-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-bottom: 16px; }  
    .be-grm .btn {  
      border: 1px solid #d1d5db;  
      background: #fff;  
      color: #111827;  
      border-radius: 12px;  
      padding: 9px 12px;  
      font-weight: 800;  
      font-size: 13px;  
      cursor: pointer;  
      transition: transform .05s ease, box-shadow .15s ease, border-color .15s ease;  
      user-select: none;  
    }  
    .be-grm .btn:hover { border-color: #9ca3af; box-shadow: 0 6px 14px -10px rgba(0,0,0,.18); }  
    .be-grm .btn:active { transform: translateY(1px); }  
    .be-grm .btn.primary { border-color: #4f46e5; background: #4f46e5; color: #fff; }  
    .be-grm .btn.danger { border-color: #ef4444; background: #fff; color: #991b1b; }  
    .be-grm .status {  
      font-size: 12px;  
      font-weight: 800;  
      color: #6b7280;  
      display: flex;  
      align-items: center;  
      gap: 8px;  
    }  
    .be-grm .dot {  
      width: 9px; height: 9px; border-radius: 999px;  
      background: #9ca3af;  
    }  
    .be-grm .dot.saved { background: #22c55e; }  
    .be-grm .dot.dirty { background: #f59e0b; }  
  
    .be-grm .section {  
      background: #fff;  
      padding: 18px;  
      border-radius: 14px;  
      margin-bottom: 16px;  
      border-top: 4px solid #818cf8;  
      box-shadow: 0 10px 15px -3px rgba(0,0,0,.08), 0 4px 6px -4px rgba(0,0,0,.08);  
    }  
    .be-grm .section h2 { margin: 0 0 14px; font-size: 18px; color: #1f2937; font-weight: 800; }  
    .be-grm .subhead { margin: 0 0 10px; font-size: 16px; color: #4338ca; font-weight: 800; }  
  
    .be-grm label { display: block; font-size: 13px; font-weight: 650; color: #374151; margin-bottom: 6px; }  
    .be-grm input, .be-grm select, .be-grm textarea {  
      width: 100%;  
      border: 1px solid #d1d5db;  
      border-radius: 10px;  
      padding: 8px 10px;  
      font-size: 14px;  
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);  
      outline: none;  
      background: #fff;  
      transition: box-shadow .15s ease, border-color .15s ease;  
      box-sizing: border-box;  
    }  
    .be-grm input:focus, .be-grm select:focus, .be-grm textarea:focus {  
      border-color: #6366f1;  
      box-shadow: 0 0 0 3px rgba(99,102,241,.25);  
    }  
    .be-grm textarea { resize: vertical; }  
  
    .be-grm .calc { background: #fefce8; font-weight: 800; color: #1f2937; cursor: not-allowed; }  
    .be-grm .final { background: #dcfce7; font-weight: 900; font-size: 16px; color: #166534; }  
  
    .be-grm .grid { display: grid; grid-template-columns: 1fr; gap: 14px; }  
    @media (min-width: 640px) {  
      .be-grm .grid.sm2 { grid-template-columns: repeat(2, 1fr); }  
      .be-grm .grid.sm3 { grid-template-columns: repeat(3, 1fr); }  
    }  
    @media (min-width: 1024px) {  
      .be-grm .grid.lg4 { grid-template-columns: repeat(4, 1fr); }  
      .be-grm .span2 { grid-column: span 2; }  
      .be-grm .span4 { grid-column: span 4; }  
    }  
  
    .be-grm .tableWrap { overflow-x: auto; border-radius: 14px; }  
    .be-grm table {  
      width: 100%;  
      min-width: 1100px;  
      border-collapse: collapse;  
      background: #fff;  
      border-radius: 14px;  
      overflow: hidden;  
      box-shadow: 0 10px 15px -3px rgba(0,0,0,.08), 0 4px 6px -4px rgba(0,0,0,.08);  
    }  
    .be-grm th {  
      padding: 10px;  
      font-size: 12px;  
      text-transform: uppercase;  
      letter-spacing: .05em;  
      color: #fff;  
      background: #4f46e5;  
      border-right: 1px solid #4338ca;  
      white-space: nowrap;  
      text-align: left;  
    }  
    .be-grm td { padding: 8px; border-bottom: 1px solid #e5e7eb; vertical-align: top; font-size: 13px; }  
    .be-grm .sticky {  
      position: sticky; left: 0; z-index: 3;  
      background: #f3f4f6; font-weight: 800; color: #1f2937; min-width: 180px;  
    }  
    .be-grm .subjectCell { background: #eef2ff; }  
    .be-grm .unitMix { border-top: 1px dashed #d1d5db; margin-top: 8px; padding-top: 8px; }  
    .be-grm .unitGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px 10px; font-size: 12px; align-items: center; }  
    .be-grm .unitGrid input { padding: 6px 8px; font-size: 13px; }  
    .be-grm .tinyNote { font-size: 12px; text-align: center; color: #6b7280; margin-top: 6px; font-weight: 700; }  
    .be-grm .na { color: #9ca3af; text-align: center; display: block; padding: 10px 0; font-weight: 800; }  
  </style>  
  
  <div class="wrap">  
    <header>  
      <h1>Gross Rent Multiplier (GRM) Analysis</h1>  
      <p>For Income-Producing Properties</p>  
    </header>  
  
    <!-- Toolbar -->  
    <div class="toolbar" role="region" aria-label="GRM Tools">  
      <div class="status" aria-live="polite">  
        <span class="dot" data-status-dot></span>  
        <span data-status-text>Auto-save ready</span>  
      </div>  
    </div>  
  
    <!-- 1 -->  
    <section class="section">  
      <h2>1. Subject Property Rental Information</h2>  
      <div class="grid sm2 lg4">  
        <div class="span2">  
          <label>Property Address / ID</label>  
          <input type="text" data-subject="address" placeholder="123 Main St, Anytown, ST 90210">  
        </div>  
        <div>  
          <label>Property Type</label>  
          <select data-subject="type">  
            <option value="SFH">SFH</option>  
            <option value="Duplex">Duplex</option>  
            <option value="Triplex">Triplex</option>  
            <option value="Quadplex">Quadplex</option>  
            <option value="5+ Units">5+ Units</option>  
            <option value="Mixed-Use">Mixed-Use</option>  
          </select>  
        </div>  
        <div>  
          <label>Estimated Monthly Market Rent ($)</label>  
          <input type="number" min="0" data-subject="monthlyRent" placeholder="e.g., 3000">  
        </div>  
        <div class="span4">  
          <label>Gross Annual Rent (Calculated)</label>  
          <input type="text" class="calc" data-subject="annualRent" placeholder="$0" readonly>  
        </div>  
      </div>  
    </section>  
  
    <!-- 2 -->  
    <section class="section">  
      <h2>2. Comparable Rental Properties (Income &amp; Sales Data)</h2>  
  
      <div style="margin-bottom:18px;">  
        <p class="subhead">A. Active/Pending Comparables (3 entries minimum)</p>  
        <div class="tableWrap"><table data-table="active"></table></div>  
      </div>  
  
      <div>  
        <p class="subhead">B. Sold Comparables (3 entries minimum)</p>  
        <div class="tableWrap"><table data-table="sold"></table></div>  
      </div>  
    </section>  
  
    <!-- 3 -->  
    <section class="section">  
      <h2>3. Market GRM Range</h2>  
      <div class="grid sm3">  
        <div>  
          <label>Lowest GRM (from comps)</label>  
          <input type="text" class="calc" data-market="lowGrm" readonly>  
        </div>  
        <div>  
          <label>Highest GRM (from comps)</label>  
          <input type="text" class="calc" data-market="highGrm" readonly>  
        </div>  
        <div>  
          <label>Typical/Median GRM (Your Estimate)</label>  
          <input type="number" min="0" step="0.1" data-market="medianGrm" placeholder="e.g., 12.5">  
        </div>  
  
        <div style="grid-column: 1 / -1;">  
          <label>Narrative (Justification for GRM Range)</label>  
          <textarea rows="3" data-market="narrative" placeholder="Explain why this range is appropriate for the subject property's market..."></textarea>  
        </div>  
      </div>  
    </section>  
  
    <!-- 4 -->  
    <section class="section">  
      <h2>4. Subject Value Estimate (GRM Approach)</h2>  
      <div class="grid sm2 lg4">  
        <div>  
          <label>Subject Gross Annual Rent</label>  
          <input type="text" class="calc" data-value="subjectAnnual" readonly>  
        </div>  
        <div>  
          <label>Value Estimate (Low GRM)</label>  
          <input type="text" class="calc" data-value="low" readonly>  
        </div>  
        <div>  
          <label>Value Estimate (High GRM)</label>  
          <input type="text" class="calc" data-value="high" readonly>  
        </div>  
        <div>  
          <label>Reconciled GRM Value ($)</label>  
          <input type="number" min="0" class="final" data-value="reconciled" placeholder="Enter Final Value">  
        </div>  
      </div>  
    </section>  
  
    <!-- 5 -->  
    <section class="section">  
      <h2>5. Summary &amp; Reconciliation</h2>  
      <div class="grid" style="gap:12px;">  
        <div>  
          <label>GRM Value vs. Sales Comparison (CMA) Value</label>  
          <textarea rows="4" data-summary="grmVsCma" placeholder="Compare the value derived from the GRM approach with a traditional sales comparison approach..."></textarea>  
        </div>  
        <div>  
          <label>Commentary on Investor Demand, Rent Strength, and Vacancy Risk</label>  
          <textarea rows="4" data-summary="marketConditions" placeholder="Discuss current market trends for rental properties in the area..."></textarea>  
        </div>  
        <div>  
          <label>Final Reconciled Conclusion</label>  
          <textarea rows="4" data-summary="finalConclusion" placeholder="Provide a final value conclusion..."></textarea>  
        </div>  
      </div>  
    </section>  
  
    <!-- Bottom Actions -->  
    <div class="bottom-actions">  
      <button type="button" class="btn danger" data-action="clear">Clear Form</button>  
      <button type="button" class="btn primary" data-action="pdf" id="pdf-btn">Create PDF</button>  
    </div>  
  </div>  
  
  <script>  
    (function () {  
      const root = document.querySelector('[data-be-grm]');  
      if (!root) return;  
  
      const compIds = [1,2,3];  
      const propertyTypeOptions = ['SFH','Duplex','Triplex','Quadplex','5+ Units','Mixed-Use'];  
  
      const statusDot = root.querySelector('[data-status-dot]');  
      const statusText = root.querySelector('[data-status-text]');  
  
      function qs(sel) { return root.querySelector(sel); }  
      function qsa(sel) { return Array.from(root.querySelectorAll(sel)); }  
  
      function toNumber(val) {  
        const n = parseFloat(val);  
        return Number.isFinite(n) ? n : 0;  
      }  
  
      function formatCurrency(num) {  
        if (!Number.isFinite(num) || num <= 0) return '';  
        return '$' + Math.round(num).toLocaleString('en-US');  
      }  
  
      function sanitizeFilename(str) {  
        return String(str || '')  
          .replace(/\s+/g, '_')  
          .replace(/[^\w\-\.]/g, '')  
          .substring(0, 50) || 'Report';  
      }  
  
      // --------- STORAGE (AUTO-SAVE) ----------  
      const STORAGE_KEY = 'be_grm_form_v1::' + (location.pathname || 'page');  
  
      let saveTimer = null;  
      let dirty = false;  
  
      function setStatus(state, message) {  
        statusDot.classList.remove('saved','dirty');  
        if (state === 'saved') statusDot.classList.add('saved');  
        if (state === 'dirty') statusDot.classList.add('dirty');  
        statusText.textContent = message || 'Ready';  
      }  
  
      function markDirty() {  
        dirty = true;  
        setStatus('dirty', 'Unsaved changes…');  
        scheduleSave();  
      }  
  
      function scheduleSave() {  
        if (saveTimer) clearTimeout(saveTimer);  
        saveTimer = setTimeout(() => {  
          saveNow();  
        }, 600);  
      }  
  
      function collectFormData() {  
        const fields = qsa('input, select, textarea');  
        const data = {};  
        fields.forEach(el => {  
          const isCalc = el.classList.contains('calc') && el.hasAttribute('readonly');  
          if (isCalc) return;  
  
          const key =  
            el.getAttribute('data-subject') ||  
            el.getAttribute('data-market') ||  
            el.getAttribute('data-value') ||  
            el.getAttribute('data-summary') ||  
            null;  
  
          const activeComp = el.getAttribute('data-active-comp');  
          const soldComp = el.getAttribute('data-sold-comp');  
          const field = el.getAttribute('data-field');  
          const unitmix = el.getAttribute('data-unitmix');  
  
          if (key) {  
            data['k::' + key] = el.value;  
          } else if (activeComp && field) {  
            data[`a::${activeComp}::${field}`] = el.value;  
          } else if (soldComp && field) {  
            data[`s::${soldComp}::${field}`] = el.value;  
          } else if (unitmix) {  
            const group = unitmix;  
            if (!data['u::' + group]) data['u::' + group] = [];  
            data['u::' + group].push(el.value);  
          }  
        });  
        return data;  
      }  
  
      function applyFormData(data) {  
        if (!data || typeof data !== 'object') return;  
  
        qsa('input, select, textarea').forEach(el => {  
          const key =  
            el.getAttribute('data-subject') ||  
            el.getAttribute('data-market') ||  
            el.getAttribute('data-value') ||  
            el.getAttribute('data-summary') ||  
            null;  
  
          const activeComp = el.getAttribute('data-active-comp');  
          const soldComp = el.getAttribute('data-sold-comp');  
          const field = el.getAttribute('data-field');  
  
          if (key) {  
            const v = data['k::' + key];  
            if (typeof v !== 'undefined') el.value = v;  
          } else if (activeComp && field) {  
            const v = data[`a::${activeComp}::${field}`];  
            if (typeof v !== 'undefined') el.value = v;  
          } else if (soldComp && field) {  
            const v = data[`s::${soldComp}::${field}`];  
            if (typeof v !== 'undefined') el.value = v;  
          }  
        });  
  
        const unitGroups = Object.keys(data).filter(k => k.startsWith('u::'));  
        unitGroups.forEach(k => {  
          const group = k.replace('u::','');  
          const values = Array.isArray(data[k]) ? data[k] : [];  
          const inputs = qsa(`[data-unitmix="${group}"]`);  
          inputs.forEach((inp, idx) => {  
            if (typeof values[idx] !== 'undefined') inp.value = values[idx];  
          });  
        });  
      }  
  
      function saveNow() {  
        try {  
          const payload = collectFormData();  
          localStorage.setItem(STORAGE_KEY, JSON.stringify({  
            savedAt: new Date().toISOString(),  
            payload  
          }));  
          dirty = false;  
          setStatus('saved', 'Saved');  
        } catch (e) {  
          setStatus('neutral', 'Auto-save blocked');  
        }  
      }  
  
      function loadSaved() {  
        try {  
          const raw = localStorage.getItem(STORAGE_KEY);  
          if (!raw) {  
            setStatus('neutral', 'Auto-save ready');  
            return;  
          }  
          const parsed = JSON.parse(raw);  
          if (parsed && parsed.payload) {  
            applyFormData(parsed.payload);  
            setStatus('saved', 'Restored saved draft');  
          } else {  
            setStatus('neutral', 'Auto-save ready');  
          }  
        } catch (e) {  
          setStatus('neutral', 'Auto-save ready');  
        }  
      }  
  
      function clearForm() {  
        const ok = confirm('Clear all fields and delete the saved draft?');  
        if (!ok) return;  
  
        qsa('input, select, textarea').forEach(el => {  
          const isCalcReadOnly = el.classList.contains('calc') && el.hasAttribute('readonly');  
          if (isCalcReadOnly) return;  
          if (el.tagName === 'SELECT') el.selectedIndex = 0;  
          else el.value = '';  
        });  
  
        try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}  
        dirty = false;  
        setStatus('neutral', 'Cleared');  
        syncSubject();  
        updateMarketRange();  
        updateSubjectValue();  
      }  
  
      // --------- CALC LOGIC ----------  
      function subjectAnnualRent() {  
        const monthly = toNumber(qs('[data-subject="monthlyRent"]').value);  
        return monthly * 12;  
      }  
  
      function syncSubject() {  
        const annual = subjectAnnualRent();  
        const address = qs('[data-subject="address"]').value || '';  
        const type = qs('[data-subject="type"]').value || '';  
        const monthly = toNumber(qs('[data-subject="monthlyRent"]').value);  
  
        qs('[data-subject="annualRent"]').value = formatCurrency(annual);  
        qs('[data-value="subjectAnnual"]').value = formatCurrency(annual);  
  
        ['active', 'sold'].forEach(prefix => {  
          const a = qs(`[data-${prefix}-subject="address"]`);  
          const t = qs(`[data-${prefix}-subject="type"]`);  
          const m = qs(`[data-${prefix}-subject="monthlyRent"]`);  
          const ar = qs(`[data-${prefix}-subject="annualRent"]`);  
  
          if (a) a.value = address;  
          if (t) t.value = type;  
          if (m) m.value = monthly > 0 ? monthly : '';  
          if (ar) ar.value = formatCurrency(annual);  
  
          calcUnitMix(prefix, 'subject');  
        });  
  
        updateMarketRange();  
        updateSubjectValue();  
      }  
  
      function calcComp(prefix, id) {  
        const price = toNumber(qs(`[data-${prefix}-comp="${id}"][data-field="price"]`)?.value);  
        const monthly = toNumber(qs(`[data-${prefix}-comp="${id}"][data-field="monthlyRent"]`)?.value);  
        const annual = monthly * 12;  
        const grm = (price > 0 && annual > 0) ? (price / annual) : 0;  
  
        const annualEl = qs(`[data-${prefix}-comp="${id}"][data-field="annualRent"]`);  
        const grmEl = qs(`[data-${prefix}-comp="${id}"][data-field="grm"]`);  
  
        if (annualEl) annualEl.value = formatCurrency(annual);  
        if (grmEl) grmEl.value = grm > 0 ? grm.toFixed(2) : '';  
  
        calcUnitMix(prefix, id);  
        updateMarketRange();  
        updateSubjectValue();  
      }  
  
      function calcUnitMix(prefix, id) {  
        const unitInputs = qsa(`[data-unitmix="${prefix}-${id}"]`);  
        const totalUnits = unitInputs.reduce((sum, el) => sum + toNumber(el.value), 0);  
  
        const totalEl = qs(`[data-${prefix}-${id}="totalUnits"]`);  
        if (totalEl) totalEl.value = totalUnits > 0 ? totalUnits : '';  
  
        const monthlyEl = (id === 'subject')  
          ? qs(`[data-${prefix}-subject="monthlyRent"]`)  
          : qs(`[data-${prefix}-comp="${id}"][data-field="monthlyRent"]`);  
  
        const avgEl = qs(`[data-${prefix}-${id}="avgRent"]`);  
        const monthly = toNumber(monthlyEl?.value);  
  
        if (avgEl) {  
          const avg = (totalUnits > 0 && monthly > 0) ? monthly / totalUnits : 0;  
          avgEl.textContent = avg > 0 ? `Avg. Rent/Unit: ${formatCurrency(avg)}` : '';  
        }  
      }  
  
      function updateMarketRange() {  
        const grmInputs = qsa('input[data-field="grm"]');  
        const grms = grmInputs.map(i => parseFloat(i.value)).filter(v => Number.isFinite(v) && v > 0);  
  
        const low = grms.length ? Math.min(...grms) : 0;  
        const high = grms.length ? Math.max(...grms) : 0;  
  
        qs('[data-market="lowGrm"]').value = low > 0 ? low.toFixed(2) : '';  
        qs('[data-market="highGrm"]').value = high > 0 ? high.toFixed(2) : '';  
      }  
  
      function updateSubjectValue() {  
        const annual = subjectAnnualRent();  
        const lowGrm = toNumber(qs('[data-market="lowGrm"]').value);  
        const highGrm = toNumber(qs('[data-market="highGrm"]').value);  
  
        const lowValue = (annual > 0 && lowGrm > 0) ? annual * lowGrm : 0;  
        const highValue = (annual > 0 && highGrm > 0) ? annual * highGrm : 0;  
  
        qs('[data-value="low"]').value = formatCurrency(lowValue);  
        qs('[data-value="high"]').value = formatCurrency(highValue);  
      }  
  
      // --------- BUILD TABLES ----------  
      function unitMixBlock(prefix, id) {  
        return `  
          <div class="unitMix">  
            <div class="unitGrid">  
              <span>Studios:</span><input type="number" min="0" data-unitmix="${prefix}-${id}">  
              <span>1BR:</span><input type="number" min="0" data-unitmix="${prefix}-${id}">  
              <span>2BR:</span><input type="number" min="0" data-unitmix="${prefix}-${id}">  
              <span>3BR:</span><input type="number" min="0" data-unitmix="${prefix}-${id}">  
              <span>4BR+:</span><input type="number" min="0" data-unitmix="${prefix}-${id}">  
              <span>Other:</span><input type="number" min="0" data-unitmix="${prefix}-${id}">  
            </div>  
            <input type="text" class="calc" data-${prefix}-${id}="totalUnits" placeholder="Total Units" readonly style="margin-top:8px;text-align:center;">  
            <p class="tinyNote" data-${prefix}-${id}="avgRent"></p>  
          </div>  
        `;  
      }  
  
      function selectOptionsHTML(disabled, dataAttrs) {  
        const opts = propertyTypeOptions.map(v => `<option value="${v}">${v}</option>`).join('');  
        return `<select ${dataAttrs} ${disabled ? 'disabled' : ''}>${opts}</select>`;  
      }  
  
      function buildTable(prefix, priceLabel) {  
        const table = qs(`table[data-table="${prefix}"]`);  
        if (!table) return;  
  
        const thead = `  
          <thead>  
            <tr>  
              <th class="sticky">Line Item</th>  
              <th>Subject Property</th>  
              ${compIds.map(n => `<th>Comparable ${n}</th>`).join('')}  
            </tr>  
          </thead>  
        `;  
  
        const row = (label, subjectHTML, compHTMLBuilder) => `  
          <tr>  
            <td class="sticky">${label}</td>  
            <td class="subjectCell">${subjectHTML}</td>  
            ${compIds.map(id => `<td>${compHTMLBuilder(id)}</td>`).join('')}  
          </tr>  
        `;  
  
        const subjectAddress = `<input type="text" class="subjectCell" data-${prefix}-subject="address" readonly>`;  
        const subjectType = selectOptionsHTML(true, `data-${prefix}-subject="type"`);  
        const subjectMonthly = `<input type="number" min="0" class="subjectCell" data-${prefix}-subject="monthlyRent" readonly>`;  
        const subjectAnnual = `<input type="text" class="calc" data-${prefix}-subject="annualRent" readonly>`;  
        const subjectUnitMix = unitMixBlock(prefix, 'subject');  
  
        const compType = (id) => selectOptionsHTML(false, `data-${prefix}-comp="${id}" data-field="type"`);  
        const compAddress = (id) => `<input type="text" data-${prefix}-comp="${id}" data-field="address" placeholder="MLS / address">`;  
        const compPrice = (id) => `<input type="number" min="0" data-${prefix}-comp="${id}" data-field="price" placeholder="e.g., 500000">`;  
        const compUnitMix = (id) => unitMixBlock(prefix, id);  
        const compMonthly = (id) => `<input type="number" min="0" data-${prefix}-comp="${id}" data-field="monthlyRent" placeholder="e.g., 2500">`;  
        const compAnnual = (id) => `<input type="text" class="calc" data-${prefix}-comp="${id}" data-field="annualRent" readonly>`;  
        const compGrm = (id) => `<input type="text" class="calc" data-${prefix}-comp="${id}" data-field="grm" readonly>`;  
        const compNotes = (id) => `<textarea rows="4" data-${prefix}-comp="${id}" data-field="notes"></textarea>`;  
  
        const tbody = `  
          <tbody>  
            ${row('Property Type', subjectType, compType)}  
            ${row('Address / MLS #', subjectAddress, compAddress)}  
            ${row(priceLabel, `<span class="na">N/A</span>`, compPrice)}  
            ${row('Unit Mix', subjectUnitMix, compUnitMix)}  
            ${row('Monthly Rent ($)', subjectMonthly, compMonthly)}  
            ${row('Gross Annual Rent ($)', subjectAnnual, compAnnual)}  
            ${row('Calculated GRM', `<span class="na">N/A</span>`, compGrm)}  
            ${row('Notes', `<textarea rows="4" data-${prefix}-subject="notes"></textarea>`, compNotes)}  
          </tbody>  
        `;  
  
        table.innerHTML = thead + tbody;  
      }  
  
      // --------- PDF GENERATION (JSPDF) ----------  
      function createPDF() {  
        if (!window.jspdf) {  
          alert("The PDF generation library is still loading or failed to load. Please try again in a moment.");  
          return;  
        }  
  
        const btn = document.getElementById('pdf-btn');  
        const origText = btn.textContent;  
        btn.textContent = "Generating...";  
        btn.disabled = true;  
  
        setTimeout(() => {  
          try {  
            const data = collectPDFData();  
            renderGRMPDF(data);  
          } catch (e) {  
            console.error("PDF Generation Error", e);  
            alert("An error occurred generating the PDF. Please check the console.");  
          } finally {  
            btn.textContent = origText;  
            btn.disabled = false;  
          }  
        }, 100);  
      }  
  
      function collectPDFData() {  
        const data = {  
          subject: {  
            address: qs('[data-subject="address"]').value,  
            type: qs('[data-subject="type"]').value,  
            monthly: toNumber(qs('[data-subject="monthlyRent"]').value),  
            annual: subjectAnnualRent()  
          },  
          market: {  
            low: qs('[data-market="lowGrm"]').value,  
            high: qs('[data-market="highGrm"]').value,  
            median: qs('[data-market="medianGrm"]').value,  
            narrative: qs('[data-market="narrative"]').value  
          },  
          values: {  
            low: qs('[data-value="low"]').value,  
            high: qs('[data-value="high"]').value,  
            reconciled: formatCurrency(toNumber(qs('[data-value="reconciled"]').value))  
          },  
          summary: {  
            grmVsCma: qs('[data-summary="grmVsCma"]').value,  
            marketConditions: qs('[data-summary="marketConditions"]').value,  
            finalConclusion: qs('[data-summary="finalConclusion"]').value  
          },  
          activeComps: [],  
          soldComps: []  
        };  
  
        const extractComps = (prefix) => {  
          const arr = [];  
          compIds.forEach(id => {  
            const type = qs(`[data-${prefix}-comp="${id}"][data-field="type"]`)?.value || '';  
            const address = qs(`[data-${prefix}-comp="${id}"][data-field="address"]`)?.value || '';  
            const price = toNumber(qs(`[data-${prefix}-comp="${id}"][data-field="price"]`)?.value);  
            const rent = toNumber(qs(`[data-${prefix}-comp="${id}"][data-field="monthlyRent"]`)?.value);  
            const annual = qs(`[data-${prefix}-comp="${id}"][data-field="annualRent"]`)?.value || '';  
            const grm = qs(`[data-${prefix}-comp="${id}"][data-field="grm"]`)?.value || '';  
            const notes = qs(`[data-${prefix}-comp="${id}"][data-field="notes"]`)?.value || '';  
  
            if (type || address || price || rent) {  
              arr.push({ id, type, address, price, rent, annual, grm, notes });  
            }  
          });  
          return arr;  
        };  
  
        data.activeComps = extractComps('active');  
        data.soldComps = extractComps('sold');  
        return data;  
      }  
  
      function renderGRMPDF(data) {  
        const { jsPDF } = window.jspdf;  
        const doc = new jsPDF({ unit: 'pt', format: 'letter' });  
  
        const pageW = doc.internal.pageSize.getWidth();  
        const pageH = doc.internal.pageSize.getHeight();  
        const margin = 50;  
        const contentW = pageW - margin * 2;  
        let y = margin;  
  
        const setHeaderStyle = () => doc.setFont('helvetica', 'bold').setFontSize(16);  
        const setSubheaderStyle = () => doc.setFont('helvetica', 'bold').setFontSize(12);  
        const setBodyStyle = (style = 'normal') => doc.setFont('helvetica', style).setFontSize(10);  
        const setSmallStyle = () => doc.setFont('helvetica', 'normal').setFontSize(8);  
  
        const ensureSpace = (need) => {  
          if (y + need > pageH - margin) {  
            doc.addPage();  
            y = margin;  
          }  
        };  
  
        const writePara = (title, body) => {  
          if (!body) return;  
          ensureSpace(40);  
          setSubheaderStyle();  
          doc.text(title, margin, y);  
          y += 15;  
          setBodyStyle();  
          const split = doc.splitTextToSize(body, contentW);  
          ensureSpace(split.length * 12 + 10);  
          doc.text(split, margin, y);  
          y += split.length * 12 + 15;  
        };  
  
        // 1. Header  
        setHeaderStyle();  
        doc.text("Gross Rent Multiplier (GRM) Analysis", pageW / 2, y, { align: 'center' });  
        y += 15;  
        setBodyStyle();  
        doc.text(`Generated: ${new Date().toLocaleString()}`, pageW / 2, y, { align: 'center' });  
        y += 25;  
  
        // 2. Subject Property  
        setSubheaderStyle();  
        doc.text("1. Subject Property", margin, y);  
        y += 15;  
        setBodyStyle();  
        doc.text(`Address/ID: ${data.subject.address || '-'}`, margin, y);  
        doc.text(`Property Type: ${data.subject.type || '-'}`, margin + 250, y);  
        y += 15;  
        doc.text(`Monthly Rent: ${data.subject.monthly ? formatCurrency(data.subject.monthly) : '-'}`, margin, y);  
        doc.text(`Annual Rent: ${data.subject.annual ? formatCurrency(data.subject.annual) : '-'}`, margin + 250, y);  
        y += 30;  
  
        // 3. Market Range  
        setSubheaderStyle();  
        doc.text("2. Market GRM Range", margin, y);  
        y += 15;  
        setBodyStyle();  
        doc.text(`Low GRM: ${data.market.low || '-'}`, margin, y);  
        doc.text(`High GRM: ${data.market.high || '-'}`, margin + 150, y);  
        doc.text(`Median GRM: ${data.market.median || '-'}`, margin + 300, y);  
        y += 15;  
        writePara("Market GRM Narrative", data.market.narrative || 'None provided.');  
  
        // 4. Value Estimates  
        setSubheaderStyle();  
        doc.text("3. Value Estimates", margin, y);  
        y += 15;  
        setBodyStyle();  
        doc.text(`Low Estimate: ${data.values.low || '-'}`, margin, y);  
        doc.text(`High Estimate: ${data.values.high || '-'}`, margin + 180, y);  
        doc.text(`Reconciled Value: ${data.values.reconciled || '-'}`, margin + 360, y);  
        y += 30;  
  
        // 5. Comparables Function  
        const renderComps = (title, compsList, priceLabel) => {  
          ensureSpace(30);  
          setSubheaderStyle();  
          doc.text(title, margin, y);  
          y += 15;  
  
          if (compsList.length === 0) {  
            setBodyStyle('italic');  
            doc.text("No entries provided.", margin, y);  
            y += 20;  
            return;  
          }  
  
          compsList.forEach(c => {  
            ensureSpace(70);  
              
            // Draw slight boundary box  
            doc.setDrawColor(200);  
            doc.setFillColor(249, 250, 251);  
            doc.roundedRect(margin, y - 10, contentW, 65, 3, 3, 'FD');  
  
            setBodyStyle('bold');  
            doc.text(`Comp ${c.id}: ${c.address || 'Unknown Address'}`, margin + 10, y + 5);  
            y += 20;  
            setBodyStyle();  
            doc.text(`Type: ${c.type || '-'}`, margin + 10, y);  
            doc.text(`${priceLabel}: ${c.price ? formatCurrency(c.price) : '-'}`, margin + 130, y);  
            doc.text(`Rent: ${c.rent ? formatCurrency(c.rent) : '-'}`, margin + 270, y);  
            doc.text(`GRM: ${c.grm || '-'}`, margin + 400, y);  
            y += 15;  
            if (c.notes) {  
                setSmallStyle();  
                const notesStr = `Notes: ${c.notes.replace(/\n/g, ' ')}`;  
                const split = doc.splitTextToSize(notesStr, contentW - 20);  
                ensureSpace(split.length * 10 + 10);  
                doc.text(split, margin + 10, y);  
                y += split.length * 10 + 5;  
            }  
            y += 20; // Margin after block  
          });  
        };  
  
        renderComps('4. Active/Pending Comparables', data.activeComps, 'List Price');  
        renderComps('5. Sold Comparables', data.soldComps, 'Sale Price');  
  
        // 6. Summary  
        writePara("GRM Value vs. CMA Value", data.summary.grmVsCma);  
        writePara("Market Conditions & Risk", data.summary.marketConditions);  
        writePara("Final Reconciled Conclusion", data.summary.finalConclusion);  
  
        // Save Document  
        const safeName = sanitizeFilename(data.subject.address);  
        doc.save(`GRM-Analysis-${safeName}.pdf`);  
      }  
  
      // --------- LISTENERS ----------  
      function hookAutosaveListeners() {  
        const fields = qsa('input, select, textarea');  
  
        fields.forEach(el => {  
          const isCalcReadOnly = el.classList.contains('calc') && el.hasAttribute('readonly');  
          if (isCalcReadOnly) return;  
  
          const evt = (el.tagName === 'SELECT') ? 'change' : 'input';  
          el.addEventListener(evt, () => {  
            markDirty();  
          });  
        });  
  
        window.addEventListener('beforeunload', () => {  
          if (dirty) saveNow();  
        });  
      }  
  
      qs('[data-action="clear"]').addEventListener('click', clearForm);  
      qs('[data-action="pdf"]').addEventListener('click', createPDF);  
  
      buildTable('active', 'Listing Price ($)');  
      buildTable('sold', 'Sale Price ($)');  
  
      qs('[data-subject="address"]').addEventListener('input', syncSubject);  
      qs('[data-subject="type"]').addEventListener('change', syncSubject);  
      qs('[data-subject="monthlyRent"]').addEventListener('input', syncSubject);  
  
      ['active', 'sold'].forEach(prefix => {  
        compIds.forEach(id => {  
          const price = qs(`[data-${prefix}-comp="${id}"][data-field="price"]`);  
          const rent = qs(`[data-${prefix}-comp="${id}"][data-field="monthlyRent"]`);  
          if (price) price.addEventListener('input', () => calcComp(prefix, id));  
          if (rent) rent.addEventListener('input', () => calcComp(prefix, id));  
  
          qsa(`[data-unitmix="${prefix}-${id}"]`).forEach(el => {  
            el.addEventListener('input', () => calcUnitMix(prefix, id));  
          });  
  
          qsa(`[data-unitmix="${prefix}-subject"]`).forEach(el => {  
            el.addEventListener('input', () => calcUnitMix(prefix, 'subject'));  
          });  
        });  
      });  
  
      loadSaved();  
      syncSubject();  
      updateMarketRange();  
      updateSubjectValue();  
      hookAutosaveListeners();  
      saveNow();  
    })();  
  </script>  
</section>  
  
</body>  
</html>  
<!-- /wp:html -->  
