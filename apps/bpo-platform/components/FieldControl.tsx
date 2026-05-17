import type { FormField } from "../lib/types";

interface FieldControlProps {
  field: FormField;
  value?: string;
}

export function FieldControl({ field, value = "" }: FieldControlProps) {
  const baseClass = "mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";
  const existingUpload = field.kind === "image" && value ? parseUploadValue(value) : null;

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

function parseUploadValue(value: string): { name: string } | null {
  try {
    const parsed = JSON.parse(value) as { name?: string };
    return parsed.name ? { name: parsed.name } : null;
  } catch {
    return null;
  }
}
