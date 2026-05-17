import type { LocalFormDefinition } from "./types";

export const signaturePageForm: LocalFormDefinition = {
  id: "signature-page",
  title: "Signature Page",
  category: "Final Report",
  description: "Scope limits, certifications, compliance notes, and final sign-off.",
  fields: [
    { id: "scopeDisclosure", label: "Scope Disclosure", kind: "textarea", required: true },
    { id: "notAppraisalDisclosure", label: "Non-Appraisal Disclosure", kind: "textarea", required: true },
    { id: "agentCertification", label: "Agent Certification", kind: "textarea", required: true },
    { id: "signatureName", label: "Signature Name", kind: "text", required: true },
    { id: "signatureDate", label: "Signature Date", kind: "date", required: true }
  ]
};
