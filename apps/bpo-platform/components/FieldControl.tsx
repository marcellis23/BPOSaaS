"use client";

import { useState } from "react";
import type { FormField } from "../lib/types";

interface FieldControlProps {
  field: FormField;
  value?: string;
}

export function FieldControl({ field, value = "" }: FieldControlProps) {
  const baseClass = "mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";
  const existingUpload = field.kind === "image" && value ? parseUploadValue(value) : null;

  if (field.kind === "divider") {
    return (
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-base font-bold text-slate-950">{field.label}</h3>
        {field.placeholder ? <p className="mt-1 text-sm leading-6 text-slate-600">{field.placeholder}</p> : null}
      </div>
    );
  }

  if (field.kind === "repeater") {
    return <RepeaterControl field={field} value={value} />;
  }

  return (
    <label className="block">
      <span className="text-sm font-medium text-slate-800">
        {field.label}
        {field.required ? <span className="text-red-600"> *</span> : null}
      </span>
      {field.kind === "textarea" ? (
        <textarea name={field.id} defaultValue={value} required={field.required} placeholder={field.placeholder} rows={4} className={baseClass} />
      ) : field.kind === "select" ? (
        <select name={field.id} defaultValue={value} required={field.required} className={baseClass}>
          <option value="">Select...</option>
          {field.options?.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.kind === "image" ? (
        <>
          <input name={field.id} required={field.required && !existingUpload} type="file" accept="image/png,image/jpeg,image/jpg" className={baseClass} />
          {existingUpload ? (
            <span className="mt-2 block rounded-md bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">
              Current image: {existingUpload.name}
            </span>
          ) : null}
          {field.placeholder ? <span className="mt-2 block text-xs text-slate-500">{field.placeholder}</span> : null}
        </>
      ) : (
        <input name={field.id} defaultValue={value} required={field.required} placeholder={field.placeholder} type={field.kind} className={baseClass} />
      )}
    </label>
  );
}

function RepeaterControl({ field, value = "" }: { field: FormField; value?: string }) {
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
    setItems([...items, { id: String(nextId) }]);
    setNextId((current) => current + 1);
  };

  const handleRemove = (idToRemove: string) => {
    setItems(items.filter((item) => item.id !== idToRemove));
  };

  return (
    <div className="mt-6">
      <input type="hidden" name={`${field.id}__items`} value={items.map((item) => item.id).join(",")} />
      <div className="border-t border-slate-200 pt-6">
        <h3 className="text-base font-bold text-slate-950">{field.label}</h3>
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
            
            <div className="flex flex-col gap-4 sm:flex-row">
              {field.fields?.map((subField) => (
                <div key={subField.id} className="flex-1">
                  <FieldControl
                    field={{
                      ...subField,
                      id: `${field.id}_${item.id}_${subField.id}`,
                    }}
                    value={savedValues[`${field.id}_${item.id}_${subField.id}`] ?? ""}
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

function parseUploadValue(value: string): { name: string } | null {
  try {
    const parsed = JSON.parse(value) as { name?: string };
    return parsed.name ? { name: parsed.name } : null;
  } catch {
    return null;
  }
}
