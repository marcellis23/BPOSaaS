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
    const clean = v.replace(/[^0-9.]/g, "");
    return parseFloat(clean) || 0;
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

  // 4. Submarket Distressed Listings Pct
  if (next.sm_distressed_total && next.sm_active_total) {
    const smDist = parseVal(next.sm_distressed_total);
    const smActive = parseVal(next.sm_active_total);
    if (smActive > 0) {
      next.sm_distressed_pct = ((smDist / smActive) * 100).toFixed(1) + "%";
    }
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
  if (!field.visibleWhen) return true;
  return field.visibleWhen.values.includes(values[field.visibleWhen.fieldId] ?? "");
}
