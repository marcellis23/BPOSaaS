import type { LocalFormDefinition } from "./types";
import { reportTitleOptions, stateOptions } from "./cover-page";

export const signaturePageForm: LocalFormDefinition = {
  id: "signature-page",
  title: "Signature Page",
  category: "Final Report",
  description: "Report context, assumptions, disclosures, certifications, compliance acknowledgements, and final sign-off.",
  fields: [
    { id: "reportContextDivider", label: "Report Context", kind: "divider", placeholder: "Identify the report, subject property, effective date, intended user, and intended use." },
    { id: "reportTitle", label: "Report Title", kind: "select", required: true, options: reportTitleOptions },
    { id: "effectiveDate", label: "Effective Date", kind: "date", required: true },
    { id: "propertyAddress", label: "Subject Property Address", kind: "text", required: true, placeholder: "123 Main St" },
    { id: "propertyUnit", label: "Unit #", kind: "text", placeholder: "Apt 2B" },
    { id: "propertyCity", label: "City", kind: "text", required: true },
    { id: "propertyState", label: "Property State", kind: "select", required: true, options: stateOptions },
    { id: "propertyZip", label: "ZIP Code", kind: "text", required: true },
    { id: "intendedUser", label: "Intended User", kind: "text", required: true, placeholder: "e.g., Property Owner, Attorney" },
    {
      id: "purpose",
      label: "Intended Use / Purpose",
      kind: "textarea",
      required: true,
      placeholder: "assist the client in estimating a probable selling price for the subject property"
    },
    {
      id: "assumptions",
      label: "Assumptions",
      kind: "repeater",
      addButtonLabel: "Add Assumption",
      fields: [
        { id: "text", label: "Assumption", kind: "textarea", placeholder: "Enter an assumption..." }
      ]
    },
    {
      id: "limitingConditions",
      label: "Limiting Conditions",
      kind: "repeater",
      addButtonLabel: "Add Limiting Condition",
      fields: [
        { id: "text", label: "Limiting Condition", kind: "textarea", placeholder: "Enter a limiting condition..." }
      ]
    },
    {
      id: "additionalDisclosures",
      label: "Additional Disclosures",
      kind: "repeater",
      addButtonLabel: "Add Disclosure",
      fields: [
        { id: "text", label: "Disclosure", kind: "textarea", placeholder: "Enter a disclosure..." }
      ]
    },
    { id: "disclosuresDivider", label: "Disclosures & Certifications", kind: "divider" },
    { id: "disclosureState", label: "Disclosure State", kind: "select", required: true, options: stateOptions },
    {
      id: "stateDisclosureText",
      label: "State-Specific Disclosure",
      kind: "textarea",
      placeholder: "Auto-fill or paste the state-specific disclosure language."
    },
    {
      id: "certificationText",
      label: "Certification Statement",
      kind: "textarea",
      required: true,
      placeholder: "I certify that this Broker's Price Opinion was prepared by me or under my direct supervision..."
    },
    {
      id: "agentInterest",
      label: "Agent Interest Disclosure",
      kind: "select",
      required: true,
      options: ["No present or prospective interest in the property", "Other - explained below"]
    },
    { id: "agentInterestNote", label: "Agent Interest Explanation", kind: "textarea", placeholder: "Use when agent interest is Other." },
    { id: "signatureDivider", label: "Compliance & Signature", kind: "divider" },
    {
      id: "mlsCompliant",
      label: "State Law / MLS Compliance",
      kind: "select",
      required: true,
      options: ["I have complied with applicable state law and MLS rules in preparing this BPO."]
    },
    {
      id: "nonLending",
      label: "Non-Lending Purpose Acknowledgement",
      kind: "select",
      required: true,
      options: ["I understand this BPO is for non-lending purposes unless otherwise permitted by law."]
    },
    { id: "licenseeName", label: "Licensee Full Name", kind: "text", required: true },
    { id: "licenseNumber", label: "License Number", kind: "text" },
    { id: "signatureDate", label: "Signature Date", kind: "date", required: true },
    { id: "signatureImage", label: "Signature Image", kind: "image", required: true, placeholder: "Upload a PNG or JPG signature image." }
  ]
};
