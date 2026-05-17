"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({
  children,
  name,
  value,
  variant = "primary"
}: {
  children: React.ReactNode;
  name?: string;
  value?: string;
  variant?: "primary" | "secondary" | "danger";
}) {
  const { pending } = useFormStatus();
  const classes = {
    primary: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-200",
    secondary: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus:ring-slate-200",
    danger: "bg-rose-700 text-white hover:bg-rose-800 focus:ring-rose-200"
  };

  return (
    <button
      type="submit"
      name={name}
      value={value}
      disabled={pending}
      className={`inline-flex min-h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold shadow-sm outline-none transition focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${classes[variant]}`}
    >
      {pending ? "Working..." : children}
    </button>
  );
}
