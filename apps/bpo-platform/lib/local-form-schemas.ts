import { formCatalog, getBaseFormId } from "./form-catalog";
import { localForms, localFormsById, type LocalFormDefinition } from "./forms";

export function getLocalFormSchema(formId: string): LocalFormDefinition | undefined {
  return localFormsById.get(getBaseFormId(formId));
}

export function getAllLocalFormSchemas() {
  const catalogIds = new Set(formCatalog.map((form) => form.id));
  return localForms.filter((form) => catalogIds.has(form.id));
}
