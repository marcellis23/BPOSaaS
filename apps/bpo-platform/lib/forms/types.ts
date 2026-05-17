import type { ReportSection } from "../types";

export type LocalFormDefinition = Omit<ReportSection, "order" | "required">;
