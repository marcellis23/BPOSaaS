import { additionalPhotosForm } from "./additional-photos";
import { aerialViewsForm } from "./aerial-views";
import { cmaActiveGridForm } from "./cma-active-grid";
import { cmaArvGridForm } from "./cma-arv-grid";
import { cmaSoldGridForm } from "./cma-sold-grid";
import { constructionCostsForm } from "./construction-costs";
import { costApproachForm } from "./cost-approach";
import { coverPageForm } from "./cover-page";
import { floorplansSketchesForm } from "./floorplans-sketches";
import { frontPhotosForm } from "./front-photos";
import { grossRentMultiplierForm } from "./gross-rent-multiplier";
import { marSummaryForm } from "./mar-summary";
import { marketAnalysisAfterRepairForm } from "./market-analysis-after-repair";
import { marketAnalysisAsIsForm } from "./market-analysis-asis";
import { submarketAnalysisAsIsForm } from "./submarket-analysis-asis";
import { mergeFilesFinalReportForm } from "./merge-files-final-report";
import { multiUnitApartmentForm } from "./multi-unit-apartment";
import { otherPdfAddendumForm } from "./other-pdf-addendum";
import { pcrExteriorForm } from "./pcr-exterior";
import { pcrInteriorForm } from "./pcr-interior";
import { pcrSummaryForm } from "./pcr-summary";
import { repairRenovEstimateForm } from "./repair-renov-estimate";
import { residentialValueReconciliationForm } from "./residential-value-reconciliation";
import { signaturePageForm } from "./signature-page";
import { subjectCompsForm } from "./subject-comps";
import { vacantLandSiteDataForm } from "./vacant-land-site-data";
import type { LocalFormDefinition } from "./types";

export const localForms: LocalFormDefinition[] = [
  coverPageForm,
  frontPhotosForm,
  additionalPhotosForm,
  floorplansSketchesForm,
  aerialViewsForm,
  otherPdfAddendumForm,
  subjectCompsForm,
  vacantLandSiteDataForm,
  pcrExteriorForm,
  pcrInteriorForm,
  pcrSummaryForm,
  constructionCostsForm,
  repairRenovEstimateForm,
  marketAnalysisAsIsForm,
  submarketAnalysisAsIsForm,
  marketAnalysisAfterRepairForm,
  marSummaryForm,
  multiUnitApartmentForm,
  cmaActiveGridForm,
  cmaSoldGridForm,
  cmaArvGridForm,
  residentialValueReconciliationForm,
  grossRentMultiplierForm,
  costApproachForm,
  signaturePageForm,
  mergeFilesFinalReportForm
];

export const localFormsById = new Map(localForms.map((form) => [form.id, form]));

export type { LocalFormDefinition } from "./types";
