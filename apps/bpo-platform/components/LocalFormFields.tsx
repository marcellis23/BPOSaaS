"use client";

import { useMemo, useState, useEffect } from "react";
import type { FormField } from "../lib/types";
import { FieldControl } from "./FieldControl";

interface LocalFormFieldItem {
  field: FormField;
  value: string;
  sectionTitle?: string;
}

interface LocalFormFieldsProps {
  fields: LocalFormFieldItem[];
}

function performCalculations(values: Record<string, string>): Record<string, string> {
  const next = { ...values };

  // Helper to parse float safely
  const parseVal = (v?: string) => {
    if (!v) return 0;
    const clean = v.replace(/[^0-9.-]/g, "");
    return parseFloat(clean) || 0;
  };

  const formatCurrency = (v: number) => {
    const sign = v < 0 ? "-" : "";
    return sign + "$" + Math.abs(v).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const formatNumber = (v: number) => v.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const formatRange = (values: number[], formatter: (v: number) => string) => {
    if (!values.length) return "";
    const min = Math.min(...values);
    const max = Math.max(...values);
    return min === max ? formatter(min) : `${formatter(min)} - ${formatter(max)}`;
  };

  const parseRepeaterValues = (value?: string): Record<string, string> => {
    if (!value) return {};
    try {
      const parsed = JSON.parse(value) as unknown;
      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed as Record<string, string> : {};
    } catch {
      return {};
    }
  };

  const getRepeaterItemIds = (repeaterValues: Record<string, string>, repeaterId: string) => {
    let ids: string[] = [];
    try {
      const parsed = JSON.parse(repeaterValues[`${repeaterId}__items`] ?? "[]") as unknown;
      ids = Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
    } catch {
      ids = [];
    }

    if (!ids.length) {
      ids = Object.keys(repeaterValues)
        .map((key) => key.match(new RegExp(`^${repeaterId}_([^_]+)_`))?.[1])
        .filter((item): item is string => Boolean(item));
      ids = [...new Set(ids)];
    }

    return ids;
  };

  const sumRepeaterCosts = (value: string | undefined, repeaterId: string, costFieldId = "cost") => {
    const repeaterValues = parseRepeaterValues(value);
    return Object.entries(repeaterValues).reduce((sum, [key, cost]) => {
      return key.startsWith(`${repeaterId}_`) && key.endsWith(`_${costFieldId}`) ? sum + parseVal(cost) : sum;
    }, 0);
  };

  const sumRepeaterProduct = (value: string | undefined, repeaterId: string, leftFieldId: string, rightFieldId: string) => {
    const repeaterValues = parseRepeaterValues(value);
    const ids = getRepeaterItemIds(repeaterValues, repeaterId);

    return ids.reduce((sum, itemId) => {
      const left = parseVal(repeaterValues[`${repeaterId}_${itemId}_${leftFieldId}`]);
      const right = parseVal(repeaterValues[`${repeaterId}_${itemId}_${rightFieldId}`]);
      return sum + left * right;
    }, 0);
  };

  // 1. Land Use Mix Total
  const luMixFields = ["lu_residential", "lu_multifamily", "lu_apartments", "lu_commercial", "lu_other"];
  const hasLuMixValue = luMixFields.some(f => next[f] && next[f].trim() !== "");
  if (hasLuMixValue) {
    const sum = luMixFields.reduce((acc, f) => acc + parseVal(next[f]), 0);
    next.lu_mix_total_pct = sum.toFixed(1) + "%";
  } else {
    next.lu_mix_total_pct = "";
  }

  // 2. Occupancy Mix Total
  const occMixFields = ["occ_owner", "occ_tenant", "occ_vacant"];
  const hasOccMixValue = occMixFields.some(f => next[f] && next[f].trim() !== "");
  if (hasOccMixValue) {
    const sum = occMixFields.reduce((acc, f) => acc + parseVal(next[f]), 0);
    next.occ_total_pct = sum.toFixed(1) + "%";
  } else {
    next.occ_total_pct = "";
  }

  // 3. Distressed Listings Sum (Market Area)
  const distFields = [
    "ma_distressed_reos",
    "ma_distressed_short_sales",
    "ma_distressed_probates",
    "ma_distressed_in_foreclosure",
    "ma_distressed_bankruptcies",
    "ma_distressed_hud"
  ];
  const hasDistValue = distFields.some(f => next[f] && next[f].trim() !== "");
  if (hasDistValue) {
    const sum = distFields.reduce((acc, f) => acc + parseVal(next[f]), 0);
    next.ma_distressed_total = String(sum);
    
    // Distressed Pct relative to active listings
    const activeTotal = parseVal(next.ma_active_total);
    if (activeTotal > 0) {
      next.ma_distressed_pct = ((sum / activeTotal) * 100).toFixed(1) + "%";
    }
  }

  // 4. Submarket Distressed Listings Sum / Pct
  const smDistFields = [
    "sm_distressed_reos",
    "sm_distressed_short_sales",
    "sm_distressed_probates",
    "sm_distressed_in_foreclosure",
    "sm_distressed_bankruptcies",
    "sm_distressed_hud"
  ];
  const hasSmDistValue = smDistFields.some(f => next[f] && next[f].trim() !== "");
  if (hasSmDistValue) {
    const sum = smDistFields.reduce((acc, f) => acc + parseVal(next[f]), 0);
    next.sm_distressed_total = String(sum);
  }

  if ((next.sm_distressed_total || hasSmDistValue) && next.sm_active_total) {
    const smDist = parseVal(next.sm_distressed_total);
    const smActive = parseVal(next.sm_active_total);
    if (smActive > 0) {
      next.sm_distressed_pct = ((smDist / smActive) * 100).toFixed(1) + "%";
    }
  }

  // 5. PCR Summary Feasibility Calculations
  const hasFeasibilityValue = ["feasTotalCost", "feasValueCurrent", "feasValueArv"].some(f => next[f] && next[f].trim() !== "");
  if (hasFeasibilityValue) {
    const totalCost = parseVal(next.feasTotalCost);
    const currentValue = parseVal(next.feasValueCurrent);
    const arvValue = parseVal(next.feasValueArv);
    const grossGain = arvValue - currentValue;
    const netProfit = grossGain - totalCost;
    const totalInvestment = currentValue + totalCost;
    const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;

    next.feasGrossGain = "$" + grossGain.toLocaleString(undefined, { maximumFractionDigits: 0 });
    next.feasNetProfit = "$" + netProfit.toLocaleString(undefined, { maximumFractionDigits: 0 });
    next.feasRoi = roi.toFixed(2) + "%";
  } else {
    next.feasGrossGain = "";
    next.feasNetProfit = "";
    next.feasRoi = "";
  }

  // 6. Repair Estimate - Contributory Value Assessment calculations
  const isRepairEstimateForm = next.exteriorRepairItems !== undefined || next.interiorRepairItems !== undefined || next.contributoryValue !== undefined;
  if (isRepairEstimateForm) {
    const totalExteriorCost = sumRepeaterCosts(next.exteriorRepairItems, "exteriorRepairItems");
    const totalInteriorCost = next.includeInteriorRepairs === "Yes"
      ? sumRepeaterCosts(next.interiorRepairItems, "interiorRepairItems")
      : 0;
    const totalCost = totalExteriorCost + totalInteriorCost;
    const currentValue = parseVal(next.valueCurrent);
    const afterValue = parseVal(next.valueAfterRepair);
    const totalInvestment = currentValue + totalCost;
    const grossGain = afterValue - currentValue;
    const netContributoryValue = afterValue - totalInvestment;
    const roi = totalInvestment > 0 ? (netContributoryValue / totalInvestment) * 100 : 0;

    next.totalExteriorCost = formatCurrency(totalExteriorCost);
    next.totalInteriorCost = formatCurrency(totalInteriorCost);
    next.totalCost = formatCurrency(totalCost);
    next.grossValueGain = formatCurrency(grossGain);
    next.contributoryValue = formatCurrency(netContributoryValue);
    next.roi = roi.toFixed(2) + "%";
  }

  // 7. Construction Cost Estimate - Lot Development calculations
  const isConstructionCostForm = next.costItems !== undefined || next.netProjectProfit !== undefined;
  if (isConstructionCostForm) {
    const totalCost = sumRepeaterCosts(next.costItems, "costItems");
    const currentValue = parseVal(next.valueCurrent);
    const afterValue = parseVal(next.valueAfterRepair);
    const totalInvestment = currentValue + totalCost;
    const grossGain = afterValue - currentValue;
    const netProfit = afterValue - totalInvestment;
    const roi = totalInvestment > 0 ? (netProfit / totalInvestment) * 100 : 0;

    next.totalCost = formatCurrency(totalCost);
    next.grossValueGain = formatCurrency(grossGain);
    next.netProjectProfit = formatCurrency(netProfit);
    next.roi = roi.toFixed(2) + "%";
  }

  // 8. Multi-Unit Apartment Market Assessment calculations
  const isMultiUnitApartmentForm = next.currentUnits !== undefined || next.arvUnits !== undefined || next.totalCurrentRent !== undefined;
  if (isMultiUnitApartmentForm) {
    const totalCurrentRent = sumRepeaterProduct(next.currentUnits, "currentUnits", "count", "suggestedRent");
    const totalArvRent = next.skipArvAssessment === "Yes"
      ? 0
      : sumRepeaterProduct(next.arvUnits, "arvUnits", "count", "suggestedRent");

    next.totalCurrentRent = formatCurrency(totalCurrentRent);
    next.totalArvRent = next.skipArvAssessment === "Yes" ? "N/A (ARV skipped)" : formatCurrency(totalArvRent);
  }

  // 9. Active Comparables Analysis grid calculations
  const isActiveComparablesForm = next.activeSalePriceRange !== undefined || next.activeComp1AdjustedListPrice !== undefined;
  if (isActiveComparablesForm) {
    const subjectGla = parseVal(next.subjectGla);
    const subjectListPrice = parseVal(next.subjectListPrice);
    next.subjectPriceSqft = subjectListPrice > 0 && subjectGla > 0 ? formatCurrency(subjectListPrice / subjectGla) : "";

    const priceRangeValues: number[] = [];
    const adjustedPriceRangeValues: number[] = [];
    const glaRangeValues: number[] = [];
    const domRangeValues: number[] = [];
    const manualAdjustmentFields = [
      "AdjDate",
      "AdjLocation",
      "AdjLot",
      "AdjBeds",
      "AdjBaths",
      "AdjBasement",
      "AdjGarage",
      "AdjPool",
      "AdjCondition",
      "AdjOther"
    ];

    ["activeComp1", "activeComp2", "activeComp3"].forEach((prefix) => {
      const listPrice = parseVal(next[`${prefix}ListPrice`]);
      const gla = parseVal(next[`${prefix}Gla`]);
      const dom = parseVal(next[`${prefix}Dom`]);
      const rent = parseVal(next[`${prefix}Rent`]);
      const glaRate = parseVal(next[`${prefix}AdjGlaRate`]);
      const ppsf = listPrice > 0 && gla > 0 ? listPrice / gla : 0;
      const glaAdjustment = subjectGla > 0 && gla > 0 && glaRate !== 0 ? (subjectGla - gla) * glaRate : 0;
      const manualAdjustments = manualAdjustmentFields.map((suffix) => parseVal(next[`${prefix}${suffix}`]));
      const netAdjustment = glaAdjustment + manualAdjustments.reduce((sum, value) => sum + value, 0);
      const grossAdjustment = Math.abs(glaAdjustment) + manualAdjustments.reduce((sum, value) => sum + Math.abs(value), 0);
      const adjustedListPrice = listPrice > 0 ? listPrice + netAdjustment : 0;

      next[`${prefix}PriceSqft`] = ppsf > 0 ? formatCurrency(ppsf) : "";
      next[`${prefix}UnadjustedPpsf`] = ppsf > 0 ? formatCurrency(ppsf) : "";
      next[`${prefix}RentPsf`] = rent > 0 && gla > 0 ? formatCurrency(rent / gla) : "";
      next[`${prefix}GlaAdjustment`] = glaAdjustment !== 0 ? formatCurrency(glaAdjustment) : "";
      next[`${prefix}NetAdjustment`] = netAdjustment !== 0 ? formatCurrency(netAdjustment) : "";
      next[`${prefix}NetAdjustmentPct`] = listPrice > 0 ? ((netAdjustment / listPrice) * 100).toFixed(2) + "%" : "";
      next[`${prefix}GrossAdjustmentPct`] = listPrice > 0 ? ((grossAdjustment / listPrice) * 100).toFixed(2) + "%" : "";
      next[`${prefix}AdjustedListPrice`] = adjustedListPrice > 0 ? formatCurrency(adjustedListPrice) : "";

      if (listPrice > 0) priceRangeValues.push(listPrice);
      if (adjustedListPrice > 0) adjustedPriceRangeValues.push(adjustedListPrice);
      if (gla > 0) glaRangeValues.push(gla);
      if (dom > 0) domRangeValues.push(dom);
    });

    next.activeSalePriceRange = formatRange(priceRangeValues, formatCurrency);
    next.activeAdjustedPriceRange = formatRange(adjustedPriceRangeValues, formatCurrency);
    next.activeGlaRange = formatRange(glaRangeValues, (value) => `${formatNumber(value)} sq ft`);
    next.activeDomRange = formatRange(domRangeValues, (value) => `${formatNumber(value)} days`);
  }

  // 10. Sold Comparables Analysis grid calculations
  const isSoldComparablesForm = next.soldSalePriceRange !== undefined || next.soldComp1AdjustedSalePrice !== undefined;
  if (isSoldComparablesForm) {
    const subjectGla = parseVal(next.soldSubjectGla);
    const subjectSalePrice = parseVal(next.soldSubjectSalePrice);
    next.soldSubjectPriceSqft = subjectSalePrice > 0 && subjectGla > 0 ? formatCurrency(subjectSalePrice / subjectGla) : "";

    const priceRangeValues: number[] = [];
    const adjustedPriceRangeValues: number[] = [];
    const glaRangeValues: number[] = [];
    const domRangeValues: number[] = [];
    const manualAdjustmentFields = [
      "AdjConcessions",
      "AdjFinancing",
      "AdjDate",
      "AdjLocation",
      "AdjLot",
      "AdjBeds",
      "AdjBaths",
      "AdjBasement",
      "AdjGarage",
      "AdjPool",
      "AdjCondition",
      "AdjOther"
    ];

    ["soldComp1", "soldComp2", "soldComp3"].forEach((prefix) => {
      const salePrice = parseVal(next[`${prefix}SalePrice`]);
      const originalListPrice = parseVal(next[`${prefix}OriginalListPrice`]);
      const gla = parseVal(next[`${prefix}Gla`]);
      const dom = parseVal(next[`${prefix}Dom`]);
      const rent = parseVal(next[`${prefix}Rent`]);
      const glaRate = parseVal(next[`${prefix}AdjGlaRate`]);
      const ppsf = salePrice > 0 && gla > 0 ? salePrice / gla : 0;
      const glaAdjustment = subjectGla > 0 && gla > 0 && glaRate !== 0 ? (subjectGla - gla) * glaRate : 0;
      const manualAdjustments = manualAdjustmentFields.map((suffix) => parseVal(next[`${prefix}${suffix}`]));
      const netAdjustment = glaAdjustment + manualAdjustments.reduce((sum, value) => sum + value, 0);
      const grossAdjustment = Math.abs(glaAdjustment) + manualAdjustments.reduce((sum, value) => sum + Math.abs(value), 0);
      const adjustedSalePrice = salePrice > 0 ? salePrice + netAdjustment : 0;

      next[`${prefix}ListToSaleRatio`] = salePrice > 0 && originalListPrice > 0 ? ((salePrice / originalListPrice) * 100).toFixed(1) + "%" : "";
      next[`${prefix}PriceSqft`] = ppsf > 0 ? formatCurrency(ppsf) : "";
      next[`${prefix}UnadjustedPpsf`] = ppsf > 0 ? formatCurrency(ppsf) : "";
      next[`${prefix}RentPsf`] = rent > 0 && gla > 0 ? formatCurrency(rent / gla) : "";
      next[`${prefix}GlaAdjustment`] = glaAdjustment !== 0 ? formatCurrency(glaAdjustment) : "";
      next[`${prefix}NetAdjustment`] = netAdjustment !== 0 ? formatCurrency(netAdjustment) : "";
      next[`${prefix}NetAdjustmentPct`] = salePrice > 0 ? ((netAdjustment / salePrice) * 100).toFixed(2) + "%" : "";
      next[`${prefix}GrossAdjustmentPct`] = salePrice > 0 ? ((grossAdjustment / salePrice) * 100).toFixed(2) + "%" : "";
      next[`${prefix}AdjustedSalePrice`] = adjustedSalePrice > 0 ? formatCurrency(adjustedSalePrice) : "";

      if (salePrice > 0) priceRangeValues.push(salePrice);
      if (adjustedSalePrice > 0) adjustedPriceRangeValues.push(adjustedSalePrice);
      if (gla > 0) glaRangeValues.push(gla);
      if (dom > 0) domRangeValues.push(dom);
    });

    next.soldSalePriceRange = formatRange(priceRangeValues, formatCurrency);
    next.soldAdjustedPriceRange = formatRange(adjustedPriceRangeValues, formatCurrency);
    next.soldGlaRange = formatRange(glaRangeValues, (value) => `${formatNumber(value)} sq ft`);
    next.soldDomRange = formatRange(domRangeValues, (value) => `${formatNumber(value)} days`);
  }

  // 11. Sold Comparables (After-Repair) Analysis grid calculations
  const isArvComparablesForm = next.arvSalePriceRange !== undefined || next.arvComp1AdjustedSalePrice !== undefined;
  if (isArvComparablesForm) {
    const subjectGla = parseVal(next.arvSubjectGla);
    const subjectSalePrice = parseVal(next.arvSubjectSalePrice);
    next.arvSubjectPriceSqft = subjectSalePrice > 0 && subjectGla > 0 ? formatCurrency(subjectSalePrice / subjectGla) : "";

    const priceRangeValues: number[] = [];
    const adjustedPriceRangeValues: number[] = [];
    const glaRangeValues: number[] = [];
    const domRangeValues: number[] = [];
    const manualAdjustmentFields = [
      "AdjConcessions",
      "AdjFinancing",
      "AdjDate",
      "AdjLocation",
      "AdjLot",
      "AdjBeds",
      "AdjBaths",
      "AdjBasement",
      "AdjGarage",
      "AdjPool",
      "AdjCondition",
      "AdjOther"
    ];

    ["arvComp1", "arvComp2", "arvComp3"].forEach((prefix) => {
      const salePrice = parseVal(next[`${prefix}SalePrice`]);
      const originalListPrice = parseVal(next[`${prefix}OriginalListPrice`]);
      const gla = parseVal(next[`${prefix}Gla`]);
      const dom = parseVal(next[`${prefix}Dom`]);
      const rent = parseVal(next[`${prefix}Rent`]);
      const glaRate = parseVal(next[`${prefix}AdjGlaRate`]);
      const ppsf = salePrice > 0 && gla > 0 ? salePrice / gla : 0;
      const glaAdjustment = subjectGla > 0 && gla > 0 && glaRate !== 0 ? (subjectGla - gla) * glaRate : 0;
      const manualAdjustments = manualAdjustmentFields.map((suffix) => parseVal(next[`${prefix}${suffix}`]));
      const netAdjustment = glaAdjustment + manualAdjustments.reduce((sum, value) => sum + value, 0);
      const grossAdjustment = Math.abs(glaAdjustment) + manualAdjustments.reduce((sum, value) => sum + Math.abs(value), 0);
      const adjustedSalePrice = salePrice > 0 ? salePrice + netAdjustment : 0;

      next[`${prefix}ListToSaleRatio`] = salePrice > 0 && originalListPrice > 0 ? ((salePrice / originalListPrice) * 100).toFixed(1) + "%" : "";
      next[`${prefix}PriceSqft`] = ppsf > 0 ? formatCurrency(ppsf) : "";
      next[`${prefix}UnadjustedPpsf`] = ppsf > 0 ? formatCurrency(ppsf) : "";
      next[`${prefix}RentPsf`] = rent > 0 && gla > 0 ? formatCurrency(rent / gla) : "";
      next[`${prefix}GlaAdjustment`] = glaAdjustment !== 0 ? formatCurrency(glaAdjustment) : "";
      next[`${prefix}NetAdjustment`] = netAdjustment !== 0 ? formatCurrency(netAdjustment) : "";
      next[`${prefix}NetAdjustmentPct`] = salePrice > 0 ? ((netAdjustment / salePrice) * 100).toFixed(2) + "%" : "";
      next[`${prefix}GrossAdjustmentPct`] = salePrice > 0 ? ((grossAdjustment / salePrice) * 100).toFixed(2) + "%" : "";
      next[`${prefix}AdjustedSalePrice`] = adjustedSalePrice > 0 ? formatCurrency(adjustedSalePrice) : "";

      if (salePrice > 0) priceRangeValues.push(salePrice);
      if (adjustedSalePrice > 0) adjustedPriceRangeValues.push(adjustedSalePrice);
      if (gla > 0) glaRangeValues.push(gla);
      if (dom > 0) domRangeValues.push(dom);
    });

    next.arvSalePriceRange = formatRange(priceRangeValues, formatCurrency);
    next.arvAdjustedPriceRange = formatRange(adjustedPriceRangeValues, formatCurrency);
    next.arvGlaRange = formatRange(glaRangeValues, (value) => `${formatNumber(value)} sq ft`);
    next.arvDomRange = formatRange(domRangeValues, (value) => `${formatNumber(value)} days`);
  }

  // 12. Sales Comparison Reconciliation financial calculations
  const isSalesReconciliationForm = next.reconGrossValueGain !== undefined || next.summaryFinal !== undefined;
  if (isSalesReconciliationForm) {
    const currentValue = parseVal(next.soldCurrentProbable);
    const arvValue = parseVal(next.soldArvProbable);
    const repairCost = parseVal(next.repairCost);
    const finalPrice = parseVal(next.finalPrice);
    const grossValueGain = arvValue - currentValue;
    const netContributoryValue = grossValueGain - repairCost;
    const totalInvestment = currentValue + repairCost;
    const roi = totalInvestment > 0 ? (netContributoryValue / totalInvestment) * 100 : 0;
    const addressParts = [next.address, next.unit ? `Unit ${next.unit}` : ""].filter(Boolean);

    next.reconGrossValueGain = formatCurrency(grossValueGain);
    next.reconNetContributoryValue = formatCurrency(netContributoryValue);
    next.reconRoi = roi.toFixed(2) + "%";
    next.summaryAddress = addressParts.length ? addressParts.join(", ") : "N/A";
    next.summaryAsIs = currentValue > 0 ? formatCurrency(currentValue) : "$0.00";
    next.summaryArv = arvValue > 0 ? formatCurrency(arvValue) : "$0.00";
    next.summaryFinal = finalPrice > 0 ? formatCurrency(finalPrice) : "$0.00";
  }

  // 13. Gross Rent Multiplier (GRM) Analysis calculations
  const isGrmForm = next.grmSubjectAnnualRent !== undefined || next.grmValueLow !== undefined;
  if (isGrmForm) {
    const subjectMonthlyRent = parseVal(next.grmSubjectMonthlyRent);
    const subjectAnnualRent = subjectMonthlyRent * 12;
    const subjectUnitFields = [
      "grmSubjectStudioUnits",
      "grmSubjectOneBedroomUnits",
      "grmSubjectTwoBedroomUnits",
      "grmSubjectThreeBedroomUnits",
      "grmSubjectFourPlusBedroomUnits",
      "grmSubjectOtherUnits"
    ];
    const subjectTotalUnits = subjectUnitFields.reduce((sum, field) => sum + parseVal(next[field]), 0);
    const compGrms: number[] = [];
    const unitFieldIds = ["studioUnits", "oneBedroomUnits", "twoBedroomUnits", "threeBedroomUnits", "fourPlusBedroomUnits", "otherUnits"];

    next.grmSubjectAnnualRent = subjectAnnualRent > 0 ? formatCurrency(subjectAnnualRent) : "";
    next.grmValueSubjectAnnual = subjectAnnualRent > 0 ? formatCurrency(subjectAnnualRent) : "";
    next.grmSubjectTotalUnits = subjectTotalUnits > 0 ? String(subjectTotalUnits) : "";
    next.grmSubjectAverageRentPerUnit = subjectTotalUnits > 0 && subjectMonthlyRent > 0 ? formatCurrency(subjectMonthlyRent / subjectTotalUnits) : "";

    const updateGrmComps = (repeaterId: string, priceFieldId: string) => {
      const repeaterValues = parseRepeaterValues(next[repeaterId]);
      const itemIds = getRepeaterItemIds(repeaterValues, repeaterId);

      itemIds.forEach((itemId) => {
        const key = (subFieldId: string) => `${repeaterId}_${itemId}_${subFieldId}`;
        const price = parseVal(repeaterValues[key(priceFieldId)]);
        const monthlyRent = parseVal(repeaterValues[key("monthlyRent")]);
        const annualRent = monthlyRent * 12;
        const totalUnits = unitFieldIds.reduce((sum, fieldId) => sum + parseVal(repeaterValues[key(fieldId)]), 0);
        const grm = price > 0 && annualRent > 0 ? price / annualRent : 0;

        repeaterValues[key("annualRent")] = annualRent > 0 ? formatCurrency(annualRent) : "";
        repeaterValues[key("grm")] = grm > 0 ? grm.toFixed(2) : "";
        repeaterValues[key("totalUnits")] = totalUnits > 0 ? String(totalUnits) : "";
        repeaterValues[key("averageRentPerUnit")] = totalUnits > 0 && monthlyRent > 0 ? formatCurrency(monthlyRent / totalUnits) : "";

        if (grm > 0) compGrms.push(grm);
      });

      next[repeaterId] = JSON.stringify(repeaterValues);
    };

    updateGrmComps("grmActiveComps", "listingPrice");
    updateGrmComps("grmSoldComps", "salePrice");

    const lowGrm = compGrms.length ? Math.min(...compGrms) : 0;
    const highGrm = compGrms.length ? Math.max(...compGrms) : 0;
    const lowValue = subjectAnnualRent > 0 && lowGrm > 0 ? subjectAnnualRent * lowGrm : 0;
    const highValue = subjectAnnualRent > 0 && highGrm > 0 ? subjectAnnualRent * highGrm : 0;

    next.grmLow = lowGrm > 0 ? lowGrm.toFixed(2) : "";
    next.grmHigh = highGrm > 0 ? highGrm.toFixed(2) : "";
    next.grmValueLow = lowValue > 0 ? formatCurrency(lowValue) : "";
    next.grmValueHigh = highValue > 0 ? formatCurrency(highValue) : "";
  }

  // 14. Cost Approach Add-On calculations
  const isCostApproachForm = next.baseReplacementCost !== undefined || next.finalCostValue !== undefined;
  if (isCostApproachForm) {
    const gla = parseVal(next.costGla);
    const costPerSqft = parseVal(next.costPerSqft);
    const garageCost = parseVal(next.garageCost);
    const deckCost = parseVal(next.deckCost);
    const basementCost = parseVal(next.basementCost);
    const outbuildingCost = parseVal(next.outbuildingCost);
    const effectiveAge = parseVal(next.effectiveAge);
    const economicLife = parseVal(next.economicLife) || 50;
    const landValue = parseVal(next.landValue);
    const baseReplacementCost = gla * costPerSqft;
    const totalReplacementCost = baseReplacementCost + garageCost + deckCost + basementCost + outbuildingCost;
    const depreciationRate = economicLife > 0 ? effectiveAge / economicLife : 0;
    const depreciationAdjustment = totalReplacementCost * depreciationRate;
    const depreciatedReplacementCost = totalReplacementCost - depreciationAdjustment;
    const finalCostValue = depreciatedReplacementCost + landValue;

    next.baseReplacementCost = formatCurrency(baseReplacementCost);
    next.totalReplacementCost = formatCurrency(totalReplacementCost);
    next.depreciationPercent = (depreciationRate * 100).toFixed(1) + "%";
    next.depreciationAdjustment = formatCurrency(depreciationAdjustment);
    next.depreciatedReplacementCost = formatCurrency(depreciatedReplacementCost);
    next.finalCostValue = formatCurrency(finalCostValue);
  }

  return next;
}

export function LocalFormFields({ fields }: LocalFormFieldsProps) {
  const initialValues = useMemo(() => {
    return Object.fromEntries(fields.map(({ field, value }) => [field.id, value]));
  }, [fields]);

  const [values, setValues] = useState<Record<string, string>>(() => performCalculations(initialValues));

  // Keep state in sync with props updates (e.g. if loaded from DB/prefills)
  useEffect(() => {
    setValues(performCalculations(initialValues));
  }, [initialValues]);

  const handleFieldChange = (name: string, value: string) => {
    setValues((current) => {
      const next = { ...current, [name]: value };
      return performCalculations(next);
    });
  };

  const handleSelectAddress = (addr: { address: string; city: string; state: string; zip: string }) => {
    setValues((current) => {
      const next = { ...current };
      
      // Determine field prefixes (subjectAddress vs propertyAddress vs address)
      if (current.hasOwnProperty("subjectAddress") || fields.some(f => f.field.id === "subjectAddress")) {
        next.subjectAddress = addr.address;
        next.subjectCity = addr.city;
        next.subjectState = addr.state;
        next.subjectZip = addr.zip;
      } else if (current.hasOwnProperty("soldSubjectAddress") || fields.some(f => f.field.id === "soldSubjectAddress")) {
        next.soldSubjectAddress = addr.address;
        next.soldSubjectCity = addr.city;
        next.soldSubjectState = addr.state;
        next.soldSubjectZip = addr.zip;
      } else if (current.hasOwnProperty("arvSubjectAddress") || fields.some(f => f.field.id === "arvSubjectAddress")) {
        next.arvSubjectAddress = addr.address;
        next.arvSubjectCity = addr.city;
        next.arvSubjectState = addr.state;
        next.arvSubjectZip = addr.zip;
      } else if (current.hasOwnProperty("costSubjectAddress") || fields.some(f => f.field.id === "costSubjectAddress")) {
        next.costSubjectAddress = addr.address;
        next.costSubjectCity = addr.city;
        next.costSubjectState = addr.state;
        next.costSubjectZip = addr.zip;
      } else if (current.hasOwnProperty("propertyAddress") || fields.some(f => f.field.id === "propertyAddress")) {
        next.propertyAddress = addr.address;
        next.propertyCity = addr.city;
        next.propertyState = addr.state;
        next.propertyZip = addr.zip;
      } else {
        next.address = addr.address;
        next.city = addr.city;
        next.state = addr.state;
        next.zip = addr.zip;
      }
      
      return performCalculations(next);
    });
  };

  // Real-time boundary warnings
  const validationWarnings = useMemo(() => {
    const warnings: string[] = [];
    const parsePrice = (v?: string) => {
      if (!v) return 0;
      return parseFloat(v.replace(/[^0-9.]/g, "")) || 0;
    };

    const salesLowHigh = parsePrice(values.ps_sales_low_high);
    const salesAvgLow = parsePrice(values.ps_sales_avg_low);
    const salesAvgHigh = parsePrice(values.ps_sales_avg_high);
    const salesHighLow = parsePrice(values.ps_sales_high_low);

    if (salesLowHigh && salesAvgLow && salesLowHigh > salesAvgLow) {
      warnings.push(`Low Sales Price Range High (${values.ps_sales_low_high}) exceeds Average Sales Price Range Low (${values.ps_sales_avg_low}).`);
    }
    if (salesAvgHigh && salesHighLow && salesAvgHigh > salesHighLow) {
      warnings.push(`Average Sales Price Range High (${values.ps_sales_avg_high}) exceeds High Sales Price Range Low (${values.ps_sales_high_low}).`);
    }

    const rentAvgHigh = parsePrice(values.ps_rent_avg_high);
    const rentHighLow = parsePrice(values.ps_rent_high_low);
    if (rentAvgHigh && rentHighLow && rentAvgHigh > rentHighLow) {
      warnings.push(`Average Rental Range High (${values.ps_rent_avg_high}) exceeds High Rental Range Low (${values.ps_rent_high_low}).`);
    }

    return warnings;
  }, [values]);

  return (
    <div className="space-y-6">
      {validationWarnings.length > 0 ? (
        <div className="mt-5 rounded-md border border-amber-200 bg-amber-50 p-4">
          <div className="flex gap-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-amber-800">Pricing Segmentation Validation</h3>
              <div className="mt-1 text-sm text-amber-700">
                <ul className="list-disc pl-5 space-y-1">
                  {validationWarnings.map((w, idx) => (
                    <li key={idx}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-5 grid gap-5 md:grid-cols-12">
        {fields.map(({ field, value, sectionTitle }) => {
          if (!isVisible(field, values)) return null;

          // Intercept Land Use Mix / Occupancy fields to group them into two columns
          const landUseGroupFields = [
            "lu_mix_total_pct",
            "lu_residential",
            "lu_multifamily",
            "lu_apartments",
            "lu_commercial",
            "lu_other",
            "occ_total_pct",
            "occ_owner",
            "occ_tenant",
            "occ_vacant"
          ];

          if (landUseGroupFields.includes(field.id)) {
            if (field.id !== "lu_mix_total_pct") {
              return null; // Skip rendering individual fields as they are grouped
            }

            const leftFieldItems = fields.filter(f => [
              "lu_mix_total_pct",
              "lu_residential",
              "lu_multifamily",
              "lu_apartments",
              "lu_commercial",
              "lu_other"
            ].includes(f.field.id));

            const rightFieldItems = fields.filter(f => [
              "occ_total_pct",
              "occ_owner",
              "occ_tenant",
              "occ_vacant"
            ].includes(f.field.id));

            return (
              <div key="land-use-summary-columns" className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 border border-slate-200 rounded-lg bg-slate-50/50 p-5 mt-2">
                {/* Left Column */}
                <div className="space-y-4">
                  {leftFieldItems.map((item) => (
                    <div key={item.field.id}>
                      <FieldControl
                        field={item.field}
                        value={values[item.field.id] ?? item.value}
                        onChange={(newVal) => handleFieldChange(item.field.id, newVal)}
                        onSelectAddress={handleSelectAddress}
                      />
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  {rightFieldItems.map((item) => (
                    <div key={item.field.id}>
                      <FieldControl
                        field={item.field}
                        value={values[item.field.id] ?? item.value}
                        onChange={(newVal) => handleFieldChange(item.field.id, newVal)}
                        onSelectAddress={handleSelectAddress}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={field.id} className={getFieldColumnClass(field, sectionTitle)}>
              {sectionTitle ? (
                <div className={field.id === "reportTitle" ? "mb-5" : "mb-5 mt-3 border-t border-slate-200 pt-6"}>
                  <h3 className="text-base font-bold text-blue-700">{sectionTitle}</h3>
                </div>
              ) : null}
              <FieldControl
                field={field}
                value={values[field.id] ?? value}
                onChange={(newVal) => handleFieldChange(field.id, newVal)}
                onSelectAddress={handleSelectAddress}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getFieldColumnClass(field: FormField, sectionTitle?: string) {
  if (field.fullWidth || field.kind === "textarea" || field.kind === "repeater" || field.kind === "divider" || sectionTitle) return "md:col-span-12";
  if (field.layoutSpan === 1) return "md:col-span-3"; // 25%
  if (field.layoutSpan === 2) return "md:col-span-6"; // 50%
  if (field.layoutSpan === 3) return "md:col-span-9"; // 75%
  if (field.layoutSpan === 4) return "md:col-span-12"; // 100%
  if (field.layoutSpan === 5) return "md:col-span-4"; // 33%
  return "md:col-span-6"; // default
}

function isVisible(field: FormField, values: Record<string, string>) {
  if (field.visibleWhen && !field.visibleWhen.values.includes(values[field.visibleWhen.fieldId] ?? "")) {
    return false;
  }
  if (field.visibleWhenAll?.length) {
    return field.visibleWhenAll.every((condition) => condition.values.includes(values[condition.fieldId] ?? ""));
  }
  return true;
}
