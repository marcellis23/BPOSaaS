export type UserRole = "owner_admin" | "member_agent";

export type ReportStatus = "draft" | "ready_for_review" | "exported";

export type ReportType =
  | "BPO"
  | "Property Condition Report"
  | "Market Analysis Report"
  | "Valuation Support Report"
  | "Investor Due Diligence Report";

export type FieldKind = "text" | "textarea" | "select" | "number" | "date";

export type AssignmentIntent =
  | "seller_due_diligence"
  | "buyer_due_diligence"
  | "investor_analysis"
  | "professional_support"
  | "default_distressed"
  | "general_bpo";

export type PropertyType = "single_family" | "multi_unit" | "condo_townhome" | "vacant_lot" | "mixed_use" | "unknown";

export type PropertyAccess = "full_interior" | "exterior_only" | "drive_by" | "restricted" | "vacant_land";

export type PropertyCondition = "market_ready" | "average" | "needs_repairs" | "distressed" | "after_repair" | "unknown";

export type ValuationGoal =
  | "as_is"
  | "after_repair"
  | "rental_income"
  | "lot_feasibility"
  | "reconciliation"
  | "support_only";

export type FormWorkflowType = "external_wordpress" | "native_saas";

export type ReportFormStatus = "not_started" | "in_progress" | "pdf_uploaded" | "reviewed" | "included";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  organizationId: string;
}

export interface Organization {
  id: string;
  name: string;
  ownerUserId: string;
}

export interface Membership {
  id: string;
  userId: string;
  organizationId: string;
  status: "active" | "trial" | "inactive";
  plan: "owner" | "member";
}

export interface PropertyRecord {
  id: string;
  address: string;
  unit?: string;
  city: string;
  state: string;
  zip: string;
  parcelId?: string;
  propertyType?: string;
}

export interface ReportProject {
  id: string;
  organizationId: string;
  ownerUserId: string;
  propertyId: string;
  title: string;
  clientName: string;
  reportType: ReportType;
  status: ReportStatus;
  selectedSectionIds: string[];
  assignmentIntent?: AssignmentIntent;
  propertyAccess?: PropertyAccess;
  propertyCondition?: PropertyCondition;
  valuationGoal?: ValuationGoal;
  selectedFormIds?: string[];
  generatedPdfPath?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReportSection {
  id: string;
  title: string;
  category: string;
  description: string;
  order: number;
  required?: boolean;
  fields: FormField[];
}

export interface FormField {
  id: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  placeholder?: string;
  options?: string[];
}

export interface FormSubmission {
  id: string;
  reportProjectId: string;
  sectionId: string;
  values: Record<string, string>;
  updatedAt: string;
}

export interface GeneratedPdf {
  id: string;
  reportProjectId: string;
  filePath: string;
  sectionIds: string[];
  createdAt: string;
}

export interface ReportFormProgress {
  id: string;
  reportProjectId: string;
  formId: string;
  status: ReportFormStatus;
  notes?: string;
  uploadedPdfPath?: string;
  uploadedPdfName?: string;
  includedInFinal: boolean;
  displayOrder: number;
  updatedAt: string;
}

export interface AppData {
  users: User[];
  organizations: Organization[];
  memberships: Membership[];
  properties: PropertyRecord[];
  projects: ReportProject[];
  submissions: FormSubmission[];
  generatedPdfs: GeneratedPdf[];
  formProgress: ReportFormProgress[];
}
