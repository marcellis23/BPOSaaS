# Session Log

This file is the project memory for implementation sessions.

At the beginning of each new session, read this file before making changes. At the end of each session, add a dated entry that explains what changed, why it changed, what was verified, and what should happen next.

## Entry Format

```md
## YYYY-MM-DD - Short Session Title

### Changes
- What changed.

### Reasons
- Why the change was made.

### Verification
- Commands, checks, or manual testing performed.

### Next Notes
- Follow-ups, risks, or decisions for the next session.
```

## 2026-05-16 - Initial BPO SaaS MVP

### Changes
- Created a standalone Next.js + TypeScript app at `apps/bpo-platform`.
- Added MVP authentication with seeded admin/member users.
- Added dashboard, report creation, report builder, admin, and PDF download routes.
- Added structured report section schemas for the first migrated BPO/PCR/MAR/CMA/report assembly workflow.
- Added local JSON-backed persistence for users, organizations, memberships, properties, report projects, submissions, and generated PDFs.
- Added server-side merged PDF generation using `pdf-lib`.
- Initialized Git locally, created the first commit, and connected/pushed the repo to `https://github.com/marcellis23/BPOSaaS.git`.

### Reasons
- The product direction was set as a Forms MVP first: support Ronald's own valuation/report production workflow, then open the same workflow to paying member agents.
- A standalone app was chosen so authenticated report creation, saved projects, and later subscriptions can live outside WordPress while existing public content remains available as marketing/education material.
- Local persistence was used for the MVP to keep the first version simple and testable before choosing a production database.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`.
- Smoke tested the app in browser: signed in, created a report, saved a Cover Page section, exported a merged PDF, and confirmed the project showed `Exported`.
- Confirmed Git remote tracking: local `main` tracks `origin/main`.

### Next Notes
- Replace MVP local JSON persistence with a production database before real member usage.
- Replace seeded email-only auth with secure authentication.
- Continue migrating original webform logic section by section, including calculations and richer PDF formatting.
- Add tests for report creation, protected routes, form saving, PDF export, and role-specific admin/member access.

## 2026-05-16 - Shared App Header and Footer

### Changes
- Added a standalone `AppFooter` component for consistent footer navigation across the app.
- Updated the root Next.js layout to render a shared header, flexible page content area, and shared footer on every route.
- Added global app frame styles so the footer stays at the bottom on short pages while content can grow naturally.

### Reasons
- The web app needs independent shared header and footer components so navigation and core layout remain consistent throughout the website/webapp.
- Keeping header/footer in the root layout avoids duplicated navigation code inside individual pages.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`.

### Next Notes
- As public marketing pages are added, keep their navigation items in the shared header/footer components or shared nav config.
- Consider adding active-link styling once more top-level sections exist.

## 2026-05-16 - Mission Homepage

### Changes
- Replaced the placeholder MVP homepage with a public mission-centered homepage.
- Added a full-bleed hero section with a real estate visual, mission copy, and calls to explore the mission or open the member workspace.
- Added homepage sections for the project mission, audiences served, and platform purpose.
- Updated public header and footer navigation to link to homepage sections.
- Configured Next.js to allow the Unsplash hero image source.

### Reasons
- The website needs to connect readers to the mission of the project before asking them to use the web app.
- The public homepage should explain the value BPO agents provide in due diligence, valuation support, and professional decision-making.
- The homepage should still provide a clear path into the authenticated report workspace for members.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`.
- Opened the homepage in the browser and visually checked the hero, mission content, navigation, and workspace CTA.

### Next Notes
- Add dedicated public pages for buyers, sellers, professionals, and agents when the homepage needs deeper education paths.
- Consider adding contact/lead capture once the public content structure is ready.

## 2026-05-16 - Static Service Information Pages

### Changes
- Added reusable public information page content and rendering components for static service pages.
- Added main public pages for Seller Services, Buyer Services, and Valuation Support Services.
- Added Seller Services subpages for Distressed Property Sellers, Mortgage Default, Inherited Property, and Private Transactions.
- Added Buyer Services subpages for Value-Focused Buyers, Short-Term Investors, Long-Term Investors, and Lot Development.
- Added Valuation Support Services subpages for Bank/AMC Valuation Support, Appraiser Support Services, Agent Support Services, and Professional Support Services.
- Updated homepage, header, and footer navigation so readers can discover the new service pages from the public site.

### Reasons
- The imported WordPress pages contained the right service structure and messaging, but needed to be rebuilt in the new app layout instead of carrying forward embedded WordPress HTML/CSS.
- Static information pages help public readers understand how BPO support applies to sellers, buyers, and professionals before they enter the member workflow.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 23 routes including all new static pages.
- Opened representative static pages in the browser and confirmed the shared layout/styling loaded correctly after restarting the dev server.

### Next Notes
- Add active navigation styling and/or dropdown navigation once the public information architecture gets larger.
- Consider adding contact/lead capture CTAs to these service pages.
- Continue refining page copy against the original WordPress content as the brand voice sharpens.

## 2026-05-16 - BPO Agents Education Page

### Changes
- Added a static `/bpo-agents` page using the imported WordPress BPO Agent page as the content guide.
- Focused the page on real estate industry change, commoditization of basic agent services, BPO mastery, and options for agents to thrive as valuation professionals.
- Added direct calls to open the member tools.
- Added `BPO Agents` to the public header navigation next to Professionals and to the public footer navigation.

### Reasons
- BPO-focused agents need a dedicated educational page that explains why the platform exists for them, not only for buyers, sellers, and outside professionals.
- The page should connect the industry shift to the value of BPO skills and the member report tools.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes including `/bpo-agents`.
- Opened `/bpo-agents` in the browser and confirmed the page content, styling, and member-tools CTA rendered correctly.

### Next Notes
- Consider adding dedicated agent training, certification prep, community, and network pages when those offerings are ready.
- Public navigation may need a mobile menu or dropdown as more public pages are added.

## 2026-05-16 - Remove Platform Navigation Item

### Changes
- Removed the `Platform` link from the public header navigation.
- Removed the `Platform` link from the public footer navigation.

### Reasons
- The public menu was getting crowded, and the requested navigation should focus on Mission, Sellers, Buyers, Professionals, and BPO Agents.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`.

### Next Notes
- If the homepage platform section remains useful, keep it as on-page content but do not expose it as a top-level navigation item.

## 2026-05-16 - Styling Check and Dev Cache Reset

### Changes
- No source styling changes were required.
- Cleared the generated `.next` directory and restarted the local Next.js dev server.

### Reasons
- The website appeared unstyled because the running dev server had stale generated chunks after prior builds/restarts, producing missing `.next` module errors and intermittent CSS loading issues.

### Verification
- Opened the homepage in the browser and confirmed Tailwind/global styles were loaded.
- Opened `/seller-services` and `/bpo-agents` and confirmed shared styling, header layout, and page content rendered correctly.

### Next Notes
- If styling appears broken during local development, stop the dev server, remove `apps/bpo-platform/.next`, and restart `npm run dev -- --port 3000`.

## 2026-05-16 - Guided BPO Report Builder Implementation Paused

### Changes
- Began implementing the streamlined BPO report creation plan inside the member SaaS app.
- Added a structured BPO form catalog based on the imported WordPress BPO Form Library.
- Added guided report intake fields for assignment intent, valuation goal, property type, access condition, and property condition.
- Added recommendation logic so new report projects can start with a suggested form package instead of forcing agents to choose from a blank list.
- Added report-level selected form IDs and per-form progress tracking to the data model.
- Added server actions to update the form package, save checklist progress, upload generated section PDFs, and include uploaded PDFs in final report assembly.
- Updated the report builder UI to show:
  - shared report/property data,
  - selected form package grouped by valuation function,
  - native MVP sections,
  - recommended form workflow cards,
  - external WordPress form links,
  - status/order/include/notes controls,
  - PDF upload controls for completed forms.
- Updated merged PDF generation so uploaded section PDFs can be copied into the final exported package before falling back to native text-section generation.

### Reasons
- BPO agents need a flexible report-building workflow because client needs, property types, access, and condition vary too much for one standard report form.
- The MVP should preserve useful existing WordPress webforms while gradually moving the workflow into the SaaS app.
- The immediate practical workflow is hybrid: choose the right forms in the SaaS, complete external forms where needed, upload generated PDFs, then merge them into one client-ready package.

### Verification
- Ran `npm run typecheck`; passed.
- Ran `npm run lint`; passed after removing an unused import.
- Ran `npm run build`; passed and generated 24 routes.
- Browser smoke testing was intentionally paused before completion at the user's request.

### Next Notes
- Resume by opening `/reports/new`, creating a test report with guided fields, and confirming the recommended form workflow appears on the report builder page.
- Test updating form checklist statuses and selected forms from the builder.
- Test uploading at least one sample PDF to a form card and exporting the merged report package.
- Current implementation is uncommitted and should be reviewed, browser-tested, then committed and pushed.

## 2026-05-17 - Guided BPO Report Builder Completed

### Changes
- Completed the browser smoke test for the guided BPO report creation workflow.
- Created a test guided BPO report from `/reports/new` using investor analysis, after-repair value, full interior access, and needs-repairs condition.
- Confirmed the report builder generated a recommended 19-form package grouped by valuation function.
- Confirmed form progress can be saved with status, display order, include toggle, and notes.
- Confirmed an uploaded-PDF state appears in the report builder and the final export can merge an uploaded section PDF into the generated report package.

### Reasons
- This verifies the streamlined workflow is usable for agents before deeper form migration continues.
- The hybrid MVP now gives agents a practical bridge from the existing WordPress form library to the SaaS report assembly workflow.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes.
- Browser-tested `/reports/new` and `/reports/[id]`.
- Verified a generated merged PDF file was created from an uploaded section PDF in local ignored storage.

### Next Notes
- Replace direct WordPress form handoffs section by section with native SaaS forms, starting with Cover Page, Front Photos, Additional Photos, PCR Exterior, and PCR Summary.
- Add a real upload E2E test once a browser/file-upload test harness is available.
- Consider improving form control accessibility by adding explicit `htmlFor`/`id` pairs to labels and controls.

## 2026-05-17 - Local Webform Transition Foundation

### Changes
- Added local form schemas for every BPO Form Library catalog item so each selected form can be opened and completed inside the SaaS app.
- Added dynamic local form routes at `/reports/[id]/forms/[formId]`.
- Added a local form save action that stores catalog form submissions in the report project and updates form progress.
- Updated the report builder so `Open form` links point to local app routes instead of the legacy WordPress website.
- Updated report builder copy and labels to describe the local app form workflow.
- Updated PDF export so final merged reports can include locally saved form pages, uploaded PDFs, or a mix of both.

### Reasons
- The project needs to transition away from using the original WordPress website as the production form workspace.
- Local app forms let member agents create and store report data inside the SaaS workflow while preserving the guided form package model.
- This gives the app a complete local webform foundation before exact legacy field groups and calculations are migrated in greater detail.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated the new `/reports/[id]/forms/[formId]` route.
- Browser-checked the report builder and confirmed `Open form` links now route locally.
- Browser-opened a local Cover Page form route.
- Verified a locally saved form submission updates the builder completion count.
- Verified final PDF export includes the selected local form package and creates a generated PDF file.

### Next Notes
- Migrate the exact field groups, copy, calculations, and client-ready formatting from the original WordPress forms into these local schemas one form at a time.
- Add direct per-form PDF generation/download from the local form page.
- Add image/file upload fields for photo-heavy forms such as Front Photos, Additional Photos, Aerial Views, and Subject Comps.

## 2026-05-17 - Individual Local Form Files

### Changes
- Split the local form schema registry into one editable file per webform under `apps/bpo-platform/lib/forms/`.
- Added `apps/bpo-platform/lib/forms/index.ts` as the central registry that imports and orders all local form definitions.
- Kept `apps/bpo-platform/lib/local-form-schemas.ts` as the small lookup layer used by routes, actions, and PDF export.
- Added `docs/FORM_LIBRARY_MAP.md` to map each BPO Form Library item to its editable file path.

### Reasons
- Each webform needs to be easy to find and edit directly in VS Code.
- Splitting form definitions prevents the local form library from becoming one oversized file as exact WordPress field groups, calculations, and formatting are migrated.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`.
- Browser-opened a local Gross Rent Multiplier form route and confirmed it rendered fields from the split form file registry.

### Next Notes
- Continue migrating exact legacy form content into the individual files listed in `docs/FORM_LIBRARY_MAP.md`.
- Add richer field types next, especially currency, percent, computed values, repeatable comparable rows, and photo uploads.

## 2026-05-17 - End-of-Night Handoff

### Current State
- The project is connected to GitHub and current through commit `43ad44a`.
- The member app can create report projects, recommend/select form packages, open local app form pages, save local form data, track progress, and export a merged PDF.
- Each local webform is now editable as its own file in `apps/bpo-platform/lib/forms/`.
- The form-to-file map is documented in `docs/FORM_LIBRARY_MAP.md`.

### Tomorrow's Goal
- Convert each original WordPress webform into a truly usable standalone SaaS webform outside WordPress.
- Work form-by-form in VS Code using the individual files in `apps/bpo-platform/lib/forms/`.
- Expand schemas beyond placeholder MVP fields to include the real WordPress field groups, copy, calculations, validation needs, and report-ready structure.
- Update the form dashboard/report builder to be more dynamic so users can choose the exact webforms needed for a report package.

### Suggested Starting Point
- Open `docs/FORM_LIBRARY_MAP.md` first.
- Start with the high-priority migration order:
  1. Cover Page
  2. Front Photos
  3. Additional Photos
  4. PCR Exterior
  5. PCR Summary
  6. Current Condition MAR
  7. Sold CMA Grid
  8. Sales Comparison Reconciliation
  9. Signature and Disclosure Page
  10. PDF Merger
- Compare each WordPress/imported form against its matching file in `apps/bpo-platform/lib/forms/`.
- After each form migration, run `npm run lint`, `npm run typecheck`, and a browser check of `/reports/[id]/forms/[formId]`.

## 2026-05-17 - Cover Page Migration, Profile Prefill, and Image PDF Support

### Changes
- Expanded the Cover Page local SaaS form from placeholder fields into a fuller standalone report cover page workflow.
- Added report title options, client goal options, state options, subject property fields, client information fields, agent information fields, brokerage information fields, subject front photo upload, agent photo upload, and brokerage logo upload.
- Added state-aware BPO/PDC disclosure generation with a federal overlay and special disclosure text for several states.
- Added agent and brokerage profile fields to the user model and seeded local users.
- Updated the dashboard with membership details, generated PDF count, editable agent profile information, editable broker information, and report deletion.
- Added profile-based field prefill so agent, prepared-by, signature, and brokerage fields can automatically use saved dashboard profile details.
- Added image field support for local forms, including JPG/PNG uploads, existing-upload display, upload preservation on later saves, and a larger Server Action body size limit.
- Added Cover Page-specific form prefill from report/project data, subject property data, and saved user profile data.
- Added `Save & download PDF` and `Save only` actions on local form pages.
- Added individual local form PDF generation, with a custom Cover Page PDF layout that includes title, subject address, client goal, disclosure box, client information, subject image, agent photo/details, and brokerage logo/details.
- Updated merged report PDF generation so saved Cover Page submissions render with the custom cover layout.
- Updated the report builder to focus on the local form library workflow instead of the older native MVP section editor.
- Added support for form instance IDs, selected-form normalization, display-order preservation, category sorting, and duplicating Additional Photos forms.
- Moved Subject Comps into the Comparable Market Analysis (CMA) grouping.
- Added `apps/bpo-platform/lib/profile-prefill.ts` as a new helper file.

### Reasons
- The Cover Page was the first high-priority WordPress form to migrate into a genuinely usable SaaS-native form.
- Agent and broker profile data needs to be saved once and reused across report forms to reduce repetitive data entry.
- Photo-heavy forms and report cover pages need image upload support before Front Photos, Additional Photos, and related addendums can be migrated properly.
- Agents need a direct way to save a form and generate a client-ready PDF for that individual form, not only export a full merged package.
- Additional Photos may need multiple copies in one report package, so the builder needed repeatable form instance support.

### Verification
- Not yet verified after these edits.
- The working tree currently has uncommitted changes across the BPO app plus a new untracked helper file.

### Next Notes
- Run `npm run lint`, `npm run typecheck`, and `npm run build` in `apps/bpo-platform`.
- Browser-test the dashboard profile save flows.
- Browser-test the Cover Page form with required fields and JPG/PNG uploads.
- Verify `Save only` returns to the local form with a saved confirmation.
- Verify `Save & download PDF` creates and downloads a Cover Page PDF with embedded images.
- Verify merged report export includes the custom Cover Page PDF layout.
- Test duplicating Additional Photos and confirm each copy can be opened, saved, ordered, and included independently.
- Commit the verified changes once the workflow is stable.

## 2026-05-17 - Internal Final PDF Merge Step

### Changes
- Removed `Merge Files to Final Report` from the selectable/recommended form package catalog.
- Added a final `Merge PDFs to final report` export card at the end of the guided builder workflow.
- Kept final PDF assembly as an export function instead of a form card.
- Updated final PDF generation to ignore legacy `merge-files-final-report` progress records if an older report still has one saved.
- Clarified export copy so users understand the final report is assembled using the guided builder display order.

### Reasons
- The PDF merger is not a user-completed report form and should not appear in the form package checklist.
- The merger belongs at the end of the workflow as the final action that assembles uploaded PDFs and saved local form pages into one client-ready PDF.
- Existing report projects may already contain a saved merger form progress item, so export should defensively skip it.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-check a guided report to confirm `Merge Files to Final Report` no longer appears in the form package list or selected form cards.
- Export a report with uploaded PDFs and confirm the merged PDF follows the display order from the guided builder.

## 2026-05-17 - Individual Agent Review Flow Cleanup

### Changes
- Removed the report-level `Mark ready for review` button from the report builder.
- Removed the per-form `Reviewed` status option from the guided builder status dropdown.
- Updated saved local forms to move directly to `included` status instead of `reviewed`.
- Removed the `ready_for_review` report status and deleted the unused mark-ready server action.
- Added compatibility handling so older local `reviewed` form progress records display as `included`.

### Reasons
- Reports are completed by individual agents, not routed through a team review workflow.
- Form progress should track whether a form is not started, in progress, uploaded, or included in the final report without an unnecessary review step.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-check the report builder to confirm no mark-ready or reviewed options remain.

## 2026-05-17 - Single Final Export Step

### Changes
- Removed the separate sidebar `Review & export` card from the report builder.
- Kept final report export only in the `Merge PDFs to final report` card at the end of the guided builder workflow.
- Removed the top report-page status/download control so the header no longer shows an exported badge with a duplicate PDF download button.

### Reasons
- The separate export card duplicated the final merge/export action.
- Report assembly should be presented as the final step of the guided builder, not as a parallel sidebar action.
- PDF download should stay attached to the final merge/export workflow instead of appearing as an extra top-level button.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-check the report builder to confirm there is only one export control.

## 2026-05-17 - Guided Builder Form Reordering

### Changes
- Added `Move up` and `Move down` controls to each guided builder form card.
- Added a server action that swaps the selected form with its neighboring form and then renumbers the display order.
- Removed the visible display-order number input from each guided builder card's progress form so status/notes saves preserve the current order.
- Removed order number fields from the Form package section so it only handles selecting forms.

### Reasons
- Manually typing order numbers is too fussy for agents building a report package.
- Ordering should happen directly where agents are reviewing the guided workflow cards.
- The Form package section should stay focused on which forms belong in the report, while ordering happens in the guided builder.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-test moving forms up and down in the guided builder and confirm export follows the new order.

## 2026-05-17 - Repeatable PDF Addendum Uploads

### Changes
- Added `Other PDF Addendum` as a selectable Addendums form package item.
- Added a local form definition for Other PDF Addendum with title and notes fields.
- Added Other PDF Addendum to the form registry and form library map.
- Generalized duplicate form handling so both Additional Photos and Other PDF Addendum can create multiple guided-builder slots.
- Preserved duplicate slots when updating the form package as long as their base form remains selected.

### Reasons
- Agents may need to attach multiple miscellaneous PDF exhibits or addendums to the final report.
- These uploaded addendums should behave like other report package items: upload a PDF, include/exclude it, move it in the final order, and merge it into the final report.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-test selecting Other PDF Addendum, adding multiple copies, uploading PDFs, moving them in the guided builder, and exporting the merged report.

## 2026-05-17 - Guided Builder Form Removal

### Changes
- Added a `Remove` control to each guided builder form card.
- Added a server action that removes the selected form instance from the report package and deletes its progress row.
- Renumbered remaining form progress display order after removal.

### Reasons
- Agents need an easy way to remove accidentally added forms, especially extra Additional Photos or Other PDF Addendum copies.
- Removal should happen directly from the guided builder where agents can see the form order and duplicates.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-test removing base forms and duplicated addendum/photo forms from the guided builder.

## 2026-05-17 - Front Photos Form Migration

### Changes
- Updated `apps/bpo-platform/lib/forms/front-photos.ts` using the WordPress Front Photos source form as the guide.
- Replaced placeholder fields with subject address fields and the eight required photo uploads:
  Subject Front, Subject Address, Subject Left Angle, Subject Right Angle, Street View Left, Street View Right, Front View Across the Street, and Street Sign.
- Reused shared state options from the Cover Page form.

### Reasons
- Front Photos is one of the high-priority addendum forms and needs to match the real WordPress workflow before agents can complete it natively in the SaaS app.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-check the Front Photos form and confirm all eight image fields render as required uploads.

## 2026-05-17 - Local Form Section Dividers

### Changes
- Added a `divider` field type for local forms.
- Updated the generic field renderer to display divider fields as section headings with optional helper text.
- Updated local form saving and PDF generation to ignore divider fields.
- Added a `Required Front Photo Set` divider between subject property details and image upload fields in the Front Photos form.

### Reasons
- Some forms need visual structure without creating fake data fields.
- Front Photos needs a clear separation between property identity fields and required image uploads.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-check the Front Photos form divider layout.

## 2026-05-17 - Shared Property Prefill

### Changes
- Added shared property field prefill on local report forms.
- Front Photos subject address, unit, city, state, ZIP, parcel ID, and property type style fields can now auto-populate from the saved report property when no saved form value exists.

### Reasons
- Agents should not need to re-enter subject property details on each local form.
- Front Photos uses the same subject property fields as the report project and should start prefilled.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Browser-check Front Photos and confirm property fields are prefilled from the report.

## 2026-05-17 - Front Photos Upload Size Limit

### Changes
- Increased the Next.js Server Actions body size limit from `15mb` to `80mb`.
- Updated the Front Photos upload divider helper text to mention JPG/PNG and resizing very large phone images if upload time is slow.

### Reasons
- The Front Photos form requires eight image uploads, and real property photos can exceed the prior `15mb` request limit.

### Verification
- Ran `npm run lint`.
- Ran `npm run typecheck`.
- Ran `npm run build`; build generated 24 routes successfully.

### Next Notes
- Retry saving the Front Photos form with the same eight images.

## 2026-05-17 - Production Deployment Planning

### Changes
- Logged architectural requirements for moving the MVP to an online production deployment environment.

### Reasons
- The current MVP relies on local JSON persistence and handles large (80MB) photo uploads directly through Next.js Server Actions. This works locally but is unsuitable for serverless/cloud environments (e.g., Vercel payload/timeout limits).

### Verification
- Documented only; no code changes required yet.

### Next Notes
- **Auth & Database:** Replace local JSON persistence and seeded auth with a production database like PostgreSQL (using Prisma or Drizzle ORM) combined with Auth.js (NextAuth).
- **File Uploads:** Replace Next.js server-side photo uploads with Direct-to-S3 (or AWS/Cloudflare/Vercel Blob) uploads using presigned URLs from the client to prevent server bottlenecks.

## 2026-05-17 - Additional Photos Migration & Repeater UI

### Changes
- Migrated the Additional Photos form (`additional-photos.ts`) to use a dynamic repeater block instead of fixed photo slots.
- Added `"repeater"` to the `FieldKind` union in `types.ts`.
- Converted `FieldControl.tsx` to a Client Component to support stateful `RepeaterControl` rendering.
- Implemented a side-by-side (50/50) flex layout for dynamically added repeater items and added a "Remove" row capability.
- Widened the local form page container (`page.tsx`) to `max-w-7xl` and fixed CSS grid logic so `repeater` and `divider` fields span the full width of the form card.

### Reasons
- BPO reports vary in photo requirements. A dynamic repeater lets agents add exactly as many additional photos as they need without being constrained by fixed slots.
- The side-by-side layout prevents the page from becoming excessively long.
- Widening the page container gives complex form fields more horizontal space to breathe.

### Next Notes
- Migrate the PCR Exterior form.

## 2026-05-17 - PCR and Construction Forms Migration

### Changes
- Migrated and made significant updates to multiple core webforms: Vacant Land Site Data, PCR - Exterior, PCR - Interior, PCR Summary, Construction Costs, and Repair/Renovation Estimate.

### Reasons
- Continuing the structured migration of the legacy WordPress form library into standalone, native Next.js SaaS webforms.

### Verification
- Manually updated and verified form schemas.

### Next Notes
- Proceed to the Comparable Market Analysis (CMA) section, starting with the Subject Comps form.

## 2026-05-17 - Code Review and Refactoring Plan

### Changes
- Performed a comprehensive code review of the recently migrated forms (`vacant-land-site-data`, `additional-photos`) and the core form rendering system (`page.tsx`, `FieldControl.tsx`, `public-pages.ts`).
- Identified five key areas for improvement: fixing a recurring type error, standardizing the form grid layout system, making the "Other" description field conditional, simplifying prefill logic, and improving data encapsulation for the repeater control.

### Reasons
- To improve overall code quality, maintainability, and type safety before migrating the next set of complex forms (like the CMA section).

### Next Notes
- Apply the suggested refactors, starting with the `visibleWhen` fix for `additional-photos.ts`.
- Continue with the CMA form migration after the refactors are complete.

## 2026-05-24 - PDF Header Overlaps, Footer Titles, and Type Blocker Fixes

### Changes
- Resolved TS compilation blocker errors in `apps/bpo-platform` by restoring `ClientRecord` interface and the `clients` DB fields, adding `layoutSpan` to `FormField`, and correcting `getPublicPage` to always return `InfoPage` (throwing error if not found).
- Fixed section header overlaps in `apps/bpo-platform/lib/pdf.ts` by dynamically using the `y` coordinate returned from `addStandardPage` to position category and description.
- Displayed section/report titles in the footers on overflow pages (and all pages) by passing the appropriate titles as `leftText` to `drawFooterPageNumbers`.
- Verified the build via `npm run build` and regenerated the test PDF at `supportdocs/sample/1047-W-Nevada-St-PCR.pdf` via script.

### Reasons
- Overlapping text is unprofessional; utilizing dynamic `y` values returned from `addStandardPage` guarantees that the category, description, and fields flow naturally.
- Putting the report/page title in the footer on overflow pages ensures readability without repeating the massive page header.
- The pre-existing type errors blocked compilation and local builds.

### Verification
- Ran `npx tsc --noEmit` and `npm run build` to confirm clean compilation.
- Regenerated the test PDF and viewed screenshots of each page to confirm zero overlaps, and verified that page titles render correctly in the footer on overflow pages.

### Next Notes
- Continue with the Comparable Market Analysis (CMA) section, starting with the Subject Comps form.
