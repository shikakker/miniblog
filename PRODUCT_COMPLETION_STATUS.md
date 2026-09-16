# Product Completion Status — miniblog

Canonical branch: `ai/product-completion/miniblog`
Product family: Sanity-backed Next.js blog plus a legacy Sanity Studio v2 authoring surface.

## T01–T10 core tasks

| ID | Status | Task / verification |
| --- | --- | --- |
| T01 | DONE | Inspected repository, web app, Studio package and Vercel build history. |
| T02 | DONE | Reproduced the production build blocker: root `prebuild` ran `npx @sanity/cli@latest` against Studio v2. |
| T03 | DONE | Decoupled the public Next.js build from the legacy Studio build. |
| T04 | DONE | Pinned Node 22 and Yarn 1.22.22 for the deployable web app. |
| T05 | DONE | Added an explicit CI-only `SANITY_OFFLINE_BUILD=true` web-build boundary; real deployments remain provider-backed by default. |
| T06 | DONE | Added regression contracts for Studio decoupling/runtime/offline-build boundaries. |
| T07 | IN PROGRESS | Permanent Quality gate added for contracts, frozen install, production audit, lint and provider-free build. |
| T08 | BLOCKED | Exact completion-branch GitHub runner evidence is not yet available. |
| T09 | BLOCKED | Exact Vercel preview is rejected before build by the account deployment-rate limit. |
| T10 | DEFERRED WITH REASON | Sanity Studio v2 modernization is a separate authoring-surface migration and is not required to make the public web build deployable. |

## I01–I10 improvements

| ID | Status | Improvement |
| --- | --- | --- |
| I01 | DONE | Removed moving `@sanity/cli@latest` from the public release path. |
| I02 | DONE | Added explicit `build:studio` command rather than hiding Studio work in `prebuild`. |
| I03 | DONE | Real web runtime still fails closed when Sanity project configuration is missing. |
| I04 | DONE | CI-only offline client returns deterministic empty CMS results and never becomes the production default. |
| I05 | DONE | Added `rel="noopener noreferrer"` to Portable Text external links. |
| I06 | IN PROGRESS | Production dependency audit is part of Quality CI; runtime migration depends on actual audit evidence. |
| I07 | IN PROGRESS | Web lint/build compatibility on Node 22 awaits an executing runner. |
| I08 | BLOCKED | Hosted Sanity-backed smoke requires an accepted Vercel preview and the configured project environment. |
| I09 | BLOCKED | Responsive/accessibility browser QA waits on hosted preview. |
| I10 | DEFERRED WITH REASON | No framework rewrite before the current public web lane is verified independently of Studio. |

## F01–F10 product features

| ID | Status | Feature / reason |
| --- | --- | --- |
| F01 | DONE | Existing Sanity-backed blog listing retained. |
| F02 | DONE | Existing archive flow retained. |
| F03 | DONE | Existing article detail/static-path flow retained. |
| F04 | DONE | Existing preview-subscription integration retained for real environments. |
| F05 | DONE | Existing Portable Text rendering retained. |
| F06 | DEFERRED WITH REASON | No auth/accounts added to a publishing template without a user requirement. |
| F07 | DEFERRED WITH REASON | No artificial dashboard/CRUD beyond the existing Sanity Studio authoring model. |
| F08 | DEFERRED WITH REASON | No AI feature added without validated publishing value. |
| F09 | DEFERRED WITH REASON | No commerce feature added to a blog template. |
| F10 | DEFERRED WITH REASON | No production promotion is performed automatically. |

## Evidence

Historical Vercel deployment `dpl_8HNx4BnS4R3vc86ZPWo9XwG2KK5f` failed before `next build`: root `prebuild` downloaded `@sanity/cli@8.0.2`, detected `sanity.json`, and aborted because Sanity Studio < v3 is unsupported. The public web release path therefore depended on an unrelated legacy authoring tool.

The completion branch removes that coupling: `build` is only `next build`; Studio has the explicit `build:studio` command using the committed Studio package. An explicit `SANITY_OFFLINE_BUILD=true` path exists only for CI compile/build verification so provider availability is not confused with source/build correctness. Without that flag, missing Sanity configuration still fails closed.

Exact completion-branch Vercel status currently says `Deployment rate limited — retry in 24 hours.`, so no preview build/browser PASS is inferred. GitHub Quality was added but no executing run was available at the time of this checkpoint.

BLOCKED ONLY BY: GitHub runner execution for install/audit/lint/build evidence; Vercel deployment capacity for exact preview/browser QA; and intended Sanity project configuration for provider-backed hosted smoke. Legacy Studio v2 modernization is tracked separately rather than blocking the public web deploy path.

Status: **PARTIAL**.
