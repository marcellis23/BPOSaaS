# BPO Form Library Map

Each local BPO webform is editable as an individual TypeScript definition in `apps/bpo-platform/lib/forms/`.

The shared app route `/reports/[id]/forms/[formId]` renders these definitions, so most form edits should happen in the individual files below rather than in the route component.

| Form | Form ID | Editable File |
| --- | --- | --- |
| Cover Page | `cover-page` | `apps/bpo-platform/lib/forms/cover-page.ts` |
| Front Photos | `front-photos` | `apps/bpo-platform/lib/forms/front-photos.ts` |
| Additional Photos | `additional-photos` | `apps/bpo-platform/lib/forms/additional-photos.ts` |
| Floorplans / Sketches | `floorplans-sketches` | `apps/bpo-platform/lib/forms/floorplans-sketches.ts` |
| Aerial Views | `aerial-views` | `apps/bpo-platform/lib/forms/aerial-views.ts` |
| Subject Comps | `subject-comps` | `apps/bpo-platform/lib/forms/subject-comps.ts` |
| Vacant Land Site Data | `vacant-land-site-data` | `apps/bpo-platform/lib/forms/vacant-land-site-data.ts` |
| PCR - Exterior | `pcr-exterior` | `apps/bpo-platform/lib/forms/pcr-exterior.ts` |
| PCR - Interior | `pcr-interior` | `apps/bpo-platform/lib/forms/pcr-interior.ts` |
| PCR Summary | `pcr-summary` | `apps/bpo-platform/lib/forms/pcr-summary.ts` |
| Construction Costs | `construction-costs` | `apps/bpo-platform/lib/forms/construction-costs.ts` |
| Repair / Renovation Estimate | `repair-renov-estimate` | `apps/bpo-platform/lib/forms/repair-renov-estimate.ts` |
| Market Analysis (General) | `market-analysis-general` | `apps/bpo-platform/lib/forms/market-analysis-general.ts` |
| Market Analysis (After Repair) | `market-analysis-after-repair` | `apps/bpo-platform/lib/forms/market-analysis-after-repair.ts` |
| MAR Summary | `mar-summary` | `apps/bpo-platform/lib/forms/mar-summary.ts` |
| Multi-Unit Apartment | `multi-unit-apartment` | `apps/bpo-platform/lib/forms/multi-unit-apartment.ts` |
| CMA - ACTIVE Comp Grid | `cma-active-grid` | `apps/bpo-platform/lib/forms/cma-active-grid.ts` |
| CMA - SOLD Comp Grid | `cma-sold-grid` | `apps/bpo-platform/lib/forms/cma-sold-grid.ts` |
| CMA - ARV Comp Grid | `cma-arv-grid` | `apps/bpo-platform/lib/forms/cma-arv-grid.ts` |
| Residential Value Reconciliation | `residential-value-reconciliation` | `apps/bpo-platform/lib/forms/residential-value-reconciliation.ts` |
| Gross Rent Multiplier (GRM) | `gross-rent-multiplier` | `apps/bpo-platform/lib/forms/gross-rent-multiplier.ts` |
| Cost Approach | `cost-approach` | `apps/bpo-platform/lib/forms/cost-approach.ts` |
| Signature Page | `signature-page` | `apps/bpo-platform/lib/forms/signature-page.ts` |
| Merge Files to Final Report | `merge-files-final-report` | `apps/bpo-platform/lib/forms/merge-files-final-report.ts` |

Registry files:

- `apps/bpo-platform/lib/forms/index.ts` imports every individual form and controls their library order.
- `apps/bpo-platform/lib/local-form-schemas.ts` exposes lookup helpers used by app pages, server actions, and PDF export.
