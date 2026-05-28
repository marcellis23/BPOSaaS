"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import type { FormField } from "../lib/types";

interface FieldControlProps {
  field: FormField;
  value?: string;
  onChange?: (val: string) => void;
  onSelectAddress?: (addr: { address: string; city: string; state: string; zip: string }) => void;
}

const paAddressSuggestions = [
  { address: "100 S Juniper St", city: "Philadelphia", state: "PA", zip: "19107" },
  { address: "1500 John F Kennedy Blvd", city: "Philadelphia", state: "PA", zip: "19102" },
  { address: "1401 John F Kennedy Blvd", city: "Philadelphia", state: "PA", zip: "19107" },
  { address: "2301 Market St", city: "Philadelphia", state: "PA", zip: "19103" },
  { address: "2930 Chestnut St", city: "Philadelphia", state: "PA", zip: "19104" },
  { address: "1801 Oregon Ave", city: "Philadelphia", state: "PA", zip: "19145" },
  { address: "2100 N Broad St", city: "Philadelphia", state: "PA", zip: "19121" },
  { address: "4000 Monument Rd", city: "Philadelphia", state: "PA", zip: "19131" },
  { address: "5200 Lancaster Ave", city: "Philadelphia", state: "PA", zip: "19131" },
  { address: "300 E Lancaster Ave", city: "Wynnewood", state: "PA", zip: "19096" },
  { address: "600 Germantown Pike", city: "Plymouth Meeting", state: "PA", zip: "19462" },
  { address: "500 W Dekalb Pike", city: "King of Prussia", state: "PA", zip: "19406" }
];

function isCurrencyField(fieldId: string): boolean {
  const id = fieldId.toLowerCase();
  if (id.includes("segment") || id.includes("explain") || id.includes("exclude") || id.includes("summary")) {
    return false;
  }
  return (
    id.endsWith("_price") ||
    id.endsWith("_low") ||
    id.endsWith("_high") ||
    id.endsWith("_median") ||
    id.includes("rent_avg") ||
    id.includes("rent_high") ||
    id.includes("sales_low") ||
    id.includes("sales_avg") ||
    id.includes("sales_high")
  );
}

function isPercentField(fieldId: string): boolean {
  const id = fieldId.toLowerCase();
  if (id.includes("explain") || id.includes("exclude") || id.includes("summary")) {
    return false;
  }
  return (
    id.endsWith("_pct") ||
    id.endsWith("_ratio") ||
    id.includes("vacancy_rate")
  );
}

function formatCurrency(val: string): string {
  const clean = val.replace(/[^0-9]/g, "");
  if (!clean) return "";
  const num = parseInt(clean, 10);
  return "$" + num.toLocaleString();
}

function formatPercent(val: string): string {
  let clean = val.replace(/[^0-9.]/g, "");
  const parts = clean.split(".");
  if (parts.length > 2) {
    clean = parts[0] + "." + parts.slice(1).join("");
  }
  if (!clean) return "";
  if (!clean.endsWith("%")) {
    return clean + "%";
  }
  return clean;
}

function FormattedInput({
  name,
  value,
  onChange,
  onSelectAddress,
  required,
  placeholder,
  kind,
  className,
  id,
}: {
  name: string;
  value: string;
  onChange: (val: string) => void;
  onSelectAddress?: (addr: { address: string; city: string; state: string; zip: string }) => void;
  required?: boolean;
  placeholder?: string;
  kind: string;
  className: string;
  id: string;
}) {
  const [focused, setFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const isCurrency = isCurrencyField(id);
  const isPercent = isPercentField(id);
  const isAddress = id === "address" || id === "subjectAddress" || id === "propertyAddress";

  const displayValue = useMemo(() => {
    if (focused) {
      if (isCurrency) {
        return localValue.replace(/[^0-9]/g, "");
      }
      if (isPercent) {
        return localValue.replace(/%/g, "");
      }
      return localValue;
    } else {
      if (isCurrency && localValue) {
        return formatCurrency(localValue);
      }
      if (isPercent && localValue) {
        return formatPercent(localValue);
      }
      return localValue;
    }
  }, [focused, localValue, isCurrency, isPercent]);

  const suggestions = useMemo(() => {
    if (!isAddress || !localValue || !focused) return [];
    const query = localValue.toLowerCase().trim();
    if (!query) return [];
    return paAddressSuggestions.filter(item =>
      item.address.toLowerCase().includes(query)
    );
  }, [isAddress, localValue, focused]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    setLocalValue(rawVal);
    onChange(rawVal);
    if (isAddress) {
      setShowSuggestions(true);
    }
  };

  const handleFocus = () => {
    setFocused(true);
    if (isAddress && localValue) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    // Slight delay so suggestion clicks can fire
    setTimeout(() => {
      setFocused(false);
      setShowSuggestions(false);
      let finalVal = localValue.trim();
      if (isCurrency && finalVal) {
        finalVal = formatCurrency(finalVal);
      } else if (isPercent && finalVal) {
        finalVal = formatPercent(finalVal);
      }
      setLocalValue(finalVal);
      onChange(finalVal);
    }, 200);
  };

  const selectSuggestion = (item: typeof paAddressSuggestions[0]) => {
    setLocalValue(item.address);
    onChange(item.address);
    onSelectAddress?.(item);
    setShowSuggestions(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <input
        name={name}
        value={displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        placeholder={placeholder}
        type={focused && (isCurrency || isPercent) ? "number" : kind}
        className={className}
      />
      {isAddress && showSuggestions && suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border border-slate-200 bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5">
          {suggestions.map((item, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={() => selectSuggestion(item)}
                className="w-full px-4 py-2 text-left hover:bg-slate-100 focus:bg-slate-100 focus:outline-none"
              >
                <div className="font-medium text-slate-900">{item.address}</div>
                <div className="text-xs text-slate-500">{item.city}, {item.state} {item.zip}</div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function FieldControl({ field, value = "", onChange, onSelectAddress }: FieldControlProps) {
  const baseClass = "mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";
  const existingUpload = field.kind === "image" && value ? parseUploadValue(value) : null;
  const [selectedFileUrl, setSelectedFileUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (selectedFileUrl) {
      URL.revokeObjectURL(selectedFileUrl);
    }
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedFileUrl(url);
    } else {
      setSelectedFileUrl(null);
    }
  };

  useEffect(() => {
    return () => {
      if (selectedFileUrl) {
        URL.revokeObjectURL(selectedFileUrl);
      }
    };
  }, [selectedFileUrl]);

  const imageUrl = selectedFileUrl || (existingUpload?.filePath ? getUploadApiUrl(existingUpload.filePath) : null);

  if (field.kind === "divider") {
    return (
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-base font-bold text-blue-700">{field.label}</h3>
        {field.placeholder ? <p className="mt-1 text-sm leading-6 text-slate-600">{field.placeholder}</p> : null}
      </div>
    );
  }

  if (field.kind === "repeater") {
    return <RepeaterControl field={field} value={value} onChange={onChange} onSelectAddress={onSelectAddress} />;
  }

  if (field.kind === "checkboxes") {
    return <CheckboxesControl field={field} value={value} onChange={onChange} />;
  }

  const isCalculatedPct = field.id === "lu_mix_total_pct" || field.id === "occ_total_pct";
  const isReadOnly = isCalculatedPct || field.id === "ma_distressed_total" || field.id === "ma_distressed_pct" || field.id === "sm_distressed_pct";

  let computedClass = baseClass;
  if (isReadOnly) {
    computedClass += " bg-slate-100 cursor-not-allowed font-bold";
    if (isCalculatedPct) {
      if (value === "100.0%" || value === "100%") {
        computedClass += " text-green-700 bg-green-50 border-green-300";
      } else {
        computedClass += " text-red-700 bg-red-50 border-red-300";
      }
    }
  }

  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-800">
        {field.label}
        {field.required ? <span className="text-red-600"> *</span> : null}
      </span>
      {field.kind === "textarea" ? (
        <textarea
          name={field.id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={field.required}
          placeholder={field.placeholder}
          rows={4}
          className={baseClass}
        />
      ) : field.kind === "select" ? (
        <select
          name={field.id}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          required={field.required}
          className={baseClass}
        >
          <option value="">Select...</option>
          {field.options?.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.kind === "image" ? (
        <div className="space-y-2">
          <input
            name={field.id}
            required={field.required && !existingUpload}
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleFileChange}
            className={baseClass}
          />
          {imageUrl ? (
            <div className="mt-3 flex items-start gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl}
                  alt={field.label}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {selectedFileUrl ? (
                  <span className="font-semibold text-blue-600">New file selected</span>
                ) : (
                  <>
                    <span className="font-semibold text-slate-600">Currently saved:</span>
                    <p className="mt-0.5 truncate max-w-[200px]" title={existingUpload?.name}>
                      {existingUpload?.name}
                    </p>
                  </>
                )}
              </div>
            </div>
          ) : field.placeholder ? (
            <span className="mt-2 block text-xs text-slate-500">{field.placeholder}</span>
          ) : null}
        </div>
      ) : (
        <FormattedInput
          name={field.id}
          value={value}
          onChange={(newVal) => onChange?.(newVal)}
          onSelectAddress={onSelectAddress}
          required={field.required}
          placeholder={field.placeholder}
          kind={field.kind}
          className={computedClass}
          id={field.id}
        />
      )}
    </label>
  );
}

function RepeaterControl({
  field,
  value = "",
  onChange,
  onSelectAddress,
}: {
  field: FormField;
  value?: string;
  onChange?: (val: string) => void;
  onSelectAddress?: (addr: { address: string; city: string; state: string; zip: string }) => void;
}) {
  const savedValues = parseRepeaterValues(value);
  const savedItems = parseRepeaterItemIds(savedValues[`${field.id}__items`]);
  const initialItems = savedItems.length > 0
    ? savedItems
    : Array.from({ length: field.minItems || 0 }).map((_, i) => String(i));
  const [items, setItems] = useState<{ id: string }[]>(() => initialItems.map((id) => ({ id })));
  const [nextId, setNextId] = useState(() => {
    const numericIds = initialItems.map((id) => Number(id)).filter(Number.isFinite);
    return Math.max(field.minItems || 0, numericIds.length ? Math.max(...numericIds) + 1 : 0);
  });

  const handleAdd = () => {
    const newItems = [...items, { id: String(nextId) }];
    setItems(newItems);
    setNextId((current) => current + 1);
    
    // Notify parent of updated structure
    const nextVal = { ...savedValues, [`${field.id}__items`]: JSON.stringify(newItems.map(item => item.id)) };
    onChange?.(JSON.stringify(nextVal));
  };

  const handleRemove = (idToRemove: string) => {
    const newItems = items.filter((item) => item.id !== idToRemove);
    setItems(newItems);
    
    // Clean up saved sub-field values for removed item
    const nextVal = { ...savedValues };
    delete nextVal[`${field.id}__items`];
    for (const subField of field.fields ?? []) {
      delete nextVal[`${field.id}_${idToRemove}_${subField.id}`];
    }
    nextVal[`${field.id}__items`] = JSON.stringify(newItems.map(item => item.id));
    onChange?.(JSON.stringify(nextVal));
  };

  const handleSubFieldChange = (itemId: string, subFieldId: string, subVal: string) => {
    const key = `${field.id}_${itemId}_${subFieldId}`;
    const nextVal = { ...savedValues, [key]: subVal };
    nextVal[`${field.id}__items`] = JSON.stringify(items.map(item => item.id));
    onChange?.(JSON.stringify(nextVal));
  };

  return (
    <div className="mt-6">
      <input type="hidden" name={`${field.id}__items`} value={items.map((item) => item.id).join(",")} />
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-base font-bold text-blue-700">{field.label}</h3>
        {field.placeholder ? <p className="mt-1 text-sm leading-6 text-slate-600">{field.placeholder}</p> : null}
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={item.id} className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Item {index + 1}
              </h4>
              {items.length > (field.minItems || 0) ? (
                <button
                  type="button"
                  onClick={() => handleRemove(item.id)}
                  className="text-slate-400 transition hover:text-red-600"
                  title="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              ) : null}
            </div>
            
            <div className="space-y-4">
              {/* Row for standard fields */}
              {(() => {
                const rowFields = field.fields?.filter((sf) => sf.kind !== "textarea" && !sf.fullWidth) ?? [];
                if (rowFields.length === 0) return null;
                return (
                  <div className="flex flex-col gap-4 sm:flex-row">
                    {rowFields.map((subField) => (
                      <div key={subField.id} className="flex-1">
                        <FieldControl
                          field={{
                            ...subField,
                            id: `${field.id}_${item.id}_${subField.id}`,
                          }}
                          value={savedValues[`${field.id}_${item.id}_${subField.id}`] ?? ""}
                          onChange={(subVal) => handleSubFieldChange(item.id, subField.id, subVal)}
                          onSelectAddress={onSelectAddress}
                        />
                      </div>
                    ))}
                  </div>
                );
              })()}

              {/* Separate row for each full-width/textarea field */}
              {field.fields?.filter((sf) => sf.kind === "textarea" || sf.fullWidth).map((subField) => (
                <div key={subField.id} className="w-full">
                  <FieldControl
                    field={{
                      ...subField,
                      id: `${field.id}_${item.id}_${subField.id}`,
                    }}
                    value={savedValues[`${field.id}_${item.id}_${subField.id}`] ?? ""}
                    onChange={(subVal) => handleSubFieldChange(item.id, subField.id, subVal)}
                    onSelectAddress={onSelectAddress}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleAdd}
        className="mt-4 inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-2 h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
        {field.addButtonLabel || "Add Item"}
      </button>
    </div>
  );
}

function parseRepeaterValues(value: string): Record<string, string> {
  try {
    const parsed = JSON.parse(value) as unknown;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed as Record<string, string> : {};
  } catch {
    return {};
  }
}

function parseRepeaterItemIds(value?: string) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string" && item.length > 0) : [];
  } catch {
    return value.split(",").map((item) => item.trim()).filter(Boolean);
  }
}

function parseUploadValue(value: string): { name: string; filePath?: string } | null {
  try {
    const parsed = JSON.parse(value) as { name?: string; filePath?: string };
    return parsed.name ? { name: parsed.name, filePath: parsed.filePath } : null;
  } catch {
    return null;
  }
}

function getUploadApiUrl(filePath?: string) {
  if (!filePath) return "";
  const match = filePath.match(/data\/uploads\/(.+)$/);
  if (match) {
    return `/api/uploads/${match[1]}`;
  }
  return "";
}

function CheckboxesControl({
  field,
  value = "",
  onChange,
}: {
  field: FormField;
  value?: string;
  onChange?: (val: string) => void;
}) {
  const [selected, setSelected] = useState<string[]>(() =>
    value ? value.split(",").map((s) => s.trim()).filter(Boolean) : []
  );

  const toggle = (option: string) => {
    const nextSelected = selected.includes(option)
      ? selected.filter((o) => o !== option)
      : [...selected, option];
    setSelected(nextSelected);
    onChange?.(nextSelected.join(", "));
  };

  return (
    <fieldset className="block">
      <legend className="text-sm font-medium text-slate-800">
        {field.label}
        {field.required ? <span className="text-red-600"> *</span> : null}
      </legend>
      <div className="mt-3 space-y-3">
        {field.options?.map((option) => (
          <label key={option} className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggle(option)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
            />
            <span className="text-sm leading-none text-slate-700">{option}</span>
          </label>
        ))}
      </div>
      {/* Keep a hidden input so the server action saves the values seamlessly */}
      <input type="hidden" name={field.id} value={selected.join(", ")} />
    </fieldset>
  );
}
