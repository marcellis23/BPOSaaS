"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
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

export function LocalFormFields({ fields }: LocalFormFieldsProps) {
  const initialValues = useMemo(() => {
    return Object.fromEntries(fields.map(({ field, value }) => [field.id, value]));
  }, [fields]);
  const [values, setValues] = useState<Record<string, string>>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement || target instanceof HTMLSelectElement || target instanceof HTMLTextAreaElement)) return;
    if (!target.name || target.type === "file") return;
    setValues((current) => ({ ...current, [target.name]: target.value }));
  };

  return (
    <div className="mt-5 grid gap-5 md:grid-cols-4" onChange={handleChange}>
      {fields.map(({ field, value, sectionTitle }) => {
        if (!isVisible(field, values)) return null;
        return (
          <div key={field.id} className={getFieldColumnClass(field, sectionTitle)}>
            {sectionTitle ? (
              <div className={field.id === "reportTitle" ? "mb-5" : "mb-5 mt-3 border-t border-slate-200 pt-6"}>
                <h3 className="text-base font-bold text-slate-950">{sectionTitle}</h3>
              </div>
            ) : null}
            <FieldControl field={field} value={value} />
          </div>
        );
      })}
    </div>
  );
}

function getFieldColumnClass(field: FormField, sectionTitle?: string) {
  if (field.fullWidth || field.kind === "textarea" || field.kind === "repeater" || field.kind === "divider" || sectionTitle) return "md:col-span-4";
  if (field.layoutSpan === 1) return "md:col-span-1";
  if (field.layoutSpan === 2) return "md:col-span-2";
  if (field.layoutSpan === 3) return "md:col-span-3";
  return "md:col-span-2";
}

function isVisible(field: FormField, values: Record<string, string>) {
  if (!field.visibleWhen) return true;
  return field.visibleWhen.values.includes(values[field.visibleWhen.fieldId] ?? "");
}
