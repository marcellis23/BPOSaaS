# Cost Approach Analysis Reconciliation  
<!-- wp:html -->  
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Cost Approach Add-On (Used with CMA)</title>  
    <script src="https://cdn.tailwindcss.com"></script>  
</head>  
<body class="bg-gray-50">  
  
<div class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">  
    <div class="space-y-8">  
        <div>  
            <h2 class="text-2xl font-bold text-gray-800">Cost Approach Add-On (Used with CMA)</h2>  
            <p class="mt-2 text-sm text-gray-500 italic">This Cost Approach is provided as an additional valuation method to complement the CMA. It does not replace market-based conclusions.</p>  
              
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200">  
                <div class="sm:col-span-6">  
                    <label for="subject-address" class="block text-sm font-medium text-gray-700">Subject Property Address</label>  
                    <input type="text" name="subject-address" id="subject-address" placeholder="123 Main Street" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                </div>  
                <div class="sm:col-span-2">  
                    <label for="subject-unit" class="block text-sm font-medium text-gray-700">Unit #</label>  
                    <input type="text" name="subject-unit" id="subject-unit" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                </div>  
                <div class="sm:col-span-2">  
                    <label for="subject-city" class="block text-sm font-medium text-gray-700">City</label>  
                    <input type="text" name="subject-city" id="subject-city" placeholder="Philadelphia" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                </div>  
                <div class="sm:col-span-1">  
                    <label for="subject-state" class="block text-sm font-medium text-gray-700">State</label>  
                    <input type="text" name="subject-state" id="subject-state" placeholder="PA" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                </div>  
                <div class="sm:col-span-1">  
                    <label for="subject-zip" class="block text-sm font-medium text-gray-700">Zip Code</label>  
                    <input type="text" name="subject-zip" id="subject-zip" placeholder="19103" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                </div>  
            </div>  
        </div>  
  
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">  
            <h3 class="text-lg font-semibold leading-6 text-indigo-700 border-b border-gray-200 pb-3 mb-6">Replacement Cost Estimation</h3>  
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">  
                <div>  
                    <label for="gla" class="block text-sm font-medium text-gray-700">Gross Living Area (GLA)</label>  
                    <input type="number" name="gla" id="gla" placeholder="2000" value="2000" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm bg-yellow-50 font-medium">  
                    <p class="mt-1 text-xs text-gray-500">Auto-carried from CMA.</p>  
                </div>  
                <div>  
                    <label for="cost-per-sqft" class="block text-sm font-medium text-gray-700">Cost per Sq. Ft. ($)</label>  
                    <input type="number" name="cost-per-sqft" id="cost-per-sqft" placeholder="150" value="150" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                </div>  
                <div>  
                    <label for="base-replacement-cost" class="block text-sm font-medium text-gray-700">Base Replacement Cost</label>  
                    <input type="text" name="base-replacement-cost" id="base-replacement-cost" class="mt-1 block w-full rounded-md border-green-300 shadow-sm sm:text-sm bg-green-100 font-medium" readonly>  
                </div>  
            </div>  
            <div class="mt-6">  
                <label class="block text-sm font-medium text-gray-700">Additional Structures Cost</label>  
                <div class="mt-2 grid grid-cols-2 md:grid-cols-4 gap-4">  
                    <div class="relative flex items-start">  
                        <div class="ml-3 text-sm flex-grow">  
                            <label for="garage-cost" class="font-medium text-gray-700">Garage</label>  
                            <input type="number" id="garage-cost" placeholder="e.g. 20000" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                        </div>  
                    </div>  
                    <div class="relative flex items-start">  
                        <div class="ml-3 text-sm flex-grow">  
                            <label for="deck-cost" class="font-medium text-gray-700">Porch / Deck</label>  
                            <input type="number" id="deck-cost" placeholder="e.g. 5000" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                        </div>  
                    </div>  
                    <div class="relative flex items-start">  
                        <div class="ml-3 text-sm flex-grow">  
                            <label for="basement-cost" class="font-medium text-gray-700">Basement</label>  
                            <input type="number" id="basement-cost" placeholder="e.g. 15000" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                        </div>  
                    </div>  
                    <div class="relative flex items-start">  
                        <div class="ml-3 text-sm flex-grow">  
                            <label for="outbuilding-cost" class="font-medium text-gray-700">Outbuildings</label>  
                            <input type="number" id="outbuilding-cost" placeholder="e.g. 10000" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                        </div>  
                    </div>  
                </div>  
            </div>  
             <div class="mt-6 border-t pt-4">  
                <label for="total-replacement-cost" class="block text-sm font-medium text-gray-700">Total Replacement Cost (New)</label>  
                <input type="text" name="total-replacement-cost" id="total-replacement-cost" class="mt-1 block w-full rounded-md border-green-300 shadow-sm sm:text-lg text-lg bg-green-100 font-bold" readonly>  
            </div>  
        </div>  
  
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">  
            <h3 class="text-lg font-semibold leading-6 text-indigo-700 border-b border-gray-200 pb-3 mb-6">Depreciation Estimate</h3>  
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-5">  
                <div class="sm:col-span-1">  
                    <label for="effective-age" class="block text-sm font-medium text-gray-700">Effective Age</label>  
                    <input type="number" name="effective-age" id="effective-age" placeholder="15" value="15" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm bg-yellow-50 font-medium">  
                </div>  
                <div class="sm:col-span-1">  
                    <label for="economic-life" class="block text-sm font-medium text-gray-700">Economic Life</label>  
                    <select id="economic-life" name="economic-life" class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">  
                        <option>40</option>  
                        <option selected>50</option>  
                        <option>60</option>  
                        <option>70</option>  
                    </select>  
                </div>  
                <div class="sm:col-span-1">  
                    <label for="depreciation-percent" class="block text-sm font-medium text-gray-700">Depreciation %</label>  
                    <input type="text" name="depreciation-percent" id="depreciation-percent" class="mt-1 block w-full rounded-md border-green-300 shadow-sm sm:text-sm bg-green-100 font-medium" readonly>  
                </div>  
                 <div class="sm:col-span-2">  
                    <label for="depreciation-adjustment" class="block text-sm font-medium text-gray-700">Depreciation Adj. ($)</label>  
                    <input type="text" name="depreciation-adjustment" id="depreciation-adjustment" class="mt-1 block w-full rounded-md border-green-300 shadow-sm sm:text-sm bg-green-100 font-medium" readonly>  
                 </div>  
            </div>  
             <div class="mt-6 border-t pt-4">  
                <label for="depreciated-cost" class="block text-sm font-medium text-gray-700">Depreciated Replacement Cost</label>  
                <input type="text" name="depreciated-cost" id="depreciated-cost" class="mt-1 block w-full rounded-md border-green-300 shadow-sm sm:text-lg text-lg bg-green-100 font-bold" readonly>  
            </div>  
        </div>  
  
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">  
             <h3 class="text-lg font-semibold leading-6 text-indigo-700 border-b border-gray-200 pb-3 mb-6">Land Value</h3>  
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">  
                <div>  
                    <label for="land-value" class="block text-sm font-medium text-gray-700">Estimated Land Value ($)</label>  
                    <input type="number" name="land-value" id="land-value" placeholder="80000" value="80000" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">  
                </div>  
                 <div>  
                    <label for="land-value-source" class="block text-sm font-medium text-gray-700">Source of Land Value</label>  
                    <select id="land-value-source" name="land-value-source" class="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">  
                        <option>Vacant Land Sale</option>  
                        <option>Extraction from CMA</option>  
                        <option>Other</option>  
                    </select>  
                </div>  
            </div>  
        </div>  
          
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">  
             <h3 class="text-lg font-semibold leading-6 text-indigo-700 border-b border-gray-200 pb-3 mb-6">Final Value Reconciliation</h3>  
             <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">  
                 <div>  
                    <label for="final-cost-value" class="block text-sm font-bold text-gray-800">Final Cost Approach Value</label>  
                    <input type="text" name="final-cost-value" id="final-cost-value" class="mt-1 block w-full rounded-md border-green-300 shadow-sm sm:text-xl text-xl bg-green-100 font-bold" readonly>  
                 </div>  
                 <div>  
                    <label for="cma-value" class="block text-sm font-medium text-gray-700">CMA Value (for reference)</label>  
                    <input type="text" name="cma-value" id="cma-value" placeholder="$315,000" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-xl">  
                 </div>  
             </div>  
        </div>  
  
        <div class="bg-white p-6 rounded-xl shadow-lg border border-gray-200">  
            <h3 class="text-lg font-semibold leading-6 text-indigo-700 border-b border-gray-200 pb-3 mb-6">Commentary / Narrative</h3>  
            <div>  
              <label for="commentary" class="sr-only">Commentary</label>  
              <textarea rows="5" name="commentary" id="commentary" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Explanation of cost data sources, depreciation rationale, and land valuation method..."></textarea>  
            </div>  
        </div>  
  
        <div>  
             <p class="mt-2 text-xs text-gray-500 text-center"><strong>Disclaimer:</strong> The Cost Approach is primarily used for insurance, underwriting, or new construction analysis. It may not reflect current market value.</p>  
        </div>  
  
    </div>  
</div>  
  
<script>  
    document.addEventListener('DOMContentLoaded', () => {  
        // --- SELECTORS for input fields ---  
        const glaInput = document.getElementById('gla');  
        const costPerSqftInput = document.getElementById('cost-per-sqft');  
        const garageCostInput = document.getElementById('garage-cost');  
        const deckCostInput = document.getElementById('deck-cost');  
        const basementCostInput = document.getElementById('basement-cost');  
        const outbuildingCostInput = document.getElementById('outbuilding-cost');  
        const effectiveAgeInput = document.getElementById('effective-age');  
        const economicLifeSelect = document.getElementById('economic-life');  
        const landValueInput = document.getElementById('land-value');  
          
        // --- SELECTORS for calculated (output) fields ---  
        const baseReplacementCostOutput = document.getElementById('base-replacement-cost');  
        const totalReplacementCostOutput = document.getElementById('total-replacement-cost');  
        const depreciationPercentOutput = document.getElementById('depreciation-percent');  
        const depreciationAdjOutput = document.getElementById('depreciation-adjustment'); // MODIFIED: Renamed for clarity  
        const depreciatedCostOutput = document.getElementById('depreciated-cost');  
        const finalCostValueOutput = document.getElementById('final-cost-value');  
  
        // Helper function to format numbers as US currency  
        const formatCurrency = (num) => {  
            return new Intl.NumberFormat('en-US', {  
                style: 'currency',  
                currency: 'USD',  
                minimumFractionDigits: 0,  
                maximumFractionDigits: 0  
            }).format(num);  
        };  
          
        // Main calculation function  
        function calculateCostApproach() {  
            // --- Parse all input values, defaulting to 0 if empty or invalid ---  
            const gla = parseFloat(glaInput.value) || 0;  
            const costPerSqft = parseFloat(costPerSqftInput.value) || 0;  
            const garageCost = parseFloat(garageCostInput.value) || 0;  
            const deckCost = parseFloat(deckCostInput.value) || 0;  
            const basementCost = parseFloat(basementCostInput.value) || 0;  
            const outbuildingCost = parseFloat(outbuildingCostInput.value) || 0;  
            const effectiveAge = parseInt(effectiveAgeInput.value) || 0;  
            const economicLife = parseInt(economicLifeSelect.value) || 50;  
            const landValue = parseFloat(landValueInput.value) || 0;  
              
            // B. Replacement Cost Calculation  
            const baseReplacementCost = gla * costPerSqft;  
            const totalAdditions = garageCost + deckCost + basementCost + outbuildingCost;  
            const totalReplacementCost = baseReplacementCost + totalAdditions;  
              
            baseReplacementCostOutput.value = formatCurrency(baseReplacementCost);  
            totalReplacementCostOutput.value = formatCurrency(totalReplacementCost);  
              
            // C. Depreciation Calculation  
            const depreciationPercent = (economicLife > 0) ? (effectiveAge / economicLife) : 0;  
              
            // MODIFIED: Directly calculate and set the depreciation adjustment value  
            const depreciationAdjustment = totalReplacementCost * depreciationPercent;  
            const depreciatedReplacementCost = totalReplacementCost - depreciationAdjustment;  
              
            depreciationPercentOutput.value = `${(depreciationPercent * 100).toFixed(1)}%`;  
            depreciationAdjOutput.value = formatCurrency(depreciationAdjustment); // Set the calculated value  
            depreciatedCostOutput.value = formatCurrency(depreciatedReplacementCost);  
  
            // E. Final Value Calculation  
            const finalCostValue = depreciatedReplacementCost + landValue;  
            finalCostValueOutput.value = formatCurrency(finalCostValue);  
        }  
  
        // --- Event Listeners ---  
        // List of all input elements that should trigger a recalculation  
        const inputsToWatch = [  
            glaInput, costPerSqftInput, garageCostInput, deckCostInput,   
            basementCostInput, outbuildingCostInput, effectiveAgeInput,   
            economicLifeSelect, landValueInput  
        ];  
          
        // Attach a listener to each input  
        inputsToWatch.forEach(input => {  
            input.addEventListener('input', calculateCostApproach);  
        });  
  
        // --- Initial calculation on page load ---  
        calculateCostApproach();  
    });  
</script>  
  
</body>  
</html>  
<!-- /wp:html -->  
