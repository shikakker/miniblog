# Product Completion Status — miniblog

Canonical branch: `ai/product-completion/miniblog`  
Draft PR: #3  
Product family: Sanity-backed Next.js blog plus a legacy Sanity Studio v2 authoring surface.

## T01–T10 core tasks

| ID | Status | Task / verification |
| --- | --- | --- |
| T01 | DONE | Inspected repository, web app, Studio package and Vercel build history. |
| T02 | DONE | Reproduced the production build blocker: root `prebuild` ran moving `@sanity/cli@latest` against Studio v2. |
| T03 | DONE | Decoupled the public Next.js build from the legacy Studio build. |
| T04 | DONE | Pinned Node 22 and Yarn 1.22.22 for the deployable web app. |
| T05 | DONE | Added explicit CI-only `SANITY_OFFLINE_BUILD=true`; real deployments remain provider-backed by default. |
| T06 | DONE | Added regression contracts for Studio decoupling, runtime security, CMS-link safety and offline-build boundaries. |
| T07 | DONE | Migrated public runtime to Next 15.5.24 / React 18.2 and verified synchronized Yarn lockfile. |
| T08 | DONE | Permanent exact-head Quality passes contracts, frozen install, production high/critical audit, zero-warning lint and provider-free production build. |
| T09 | BLOCKED | Exact final Vercel preview/browser verification: blocked by current Vercel Hobby build-rate capacity. |
| T10 | DEFERRED WITH REASON | Sanity Studio v2 modernization is a separate authoring-surface migration and does not block public web release. |

## I01–I10 improvements

| ID | Status | Improvement |
| --- | --- | --- |
| I01 | DONE | Removed moving `@sanity/cli@latest` from public release path. |
| I02 | DONE | Explicit `build:studio` command instead of hidden Studio prebuild coupling. |
| I03 | DONE | Real web runtime fails closed when Sanity project configuration is missing. |
| I04 | DONE | CI-only offline client returns deterministic empty CMS results and never becomes production default. |
| I05 | DONE | Portable Text external links use `noopener noreferrer`, and unsafe CMS href schemes are rejected before anchor rendering. |
| I06 | DONE | Production audit blocks high/critical findings while moderate-only Yarn v1 findings do not create false failure. |
| I07 | DONE | Next 15.5.24, React 18.2, ESLint 8.57.1 and matching config verified on Node 22. |
| I08 | DONE | Legacy `eventsource` chain explicitly pinned to 1.1.2 while `next-sanity` 0.x remains. |
| I09 | BLOCKED | Hosted Sanity-backed responsive/accessibility/browser smoke requires exact-current preview. |
| I10 | DEFERRED WITH REASON | Legacy Sanity Studio v2 dependency modernization remains isolated from deployable public web surface. |

## F01–F10 product features

| ID | Status | Feature / reason |
| --- | --- | --- |
| F01 | DONE | Existing Sanity-backed blog listing retained. |
| F02 | DONE | Existing archive flow retained. |
| F03 | DONE | Existing article detail/static-path flow retained. |
| F04 | DONE | Existing preview-subscription integration retained for real environments. |
| F05 | DONE | Portable Text rendering retained with safe link normalization. |
| F06 | DEFERRED WITH REASON | No auth/accounts added without user requirement. |
| F07 | DEFERRED WITH REASON | No artificial dashboard/CRUD beyond Sanity Studio authoring model. |
| F08 | DEFERRED WITH REASON | No AI feature added without validated publishing value. |
| F09 | DEFERRED WITH REASON | No commerce feature added to blog template. |
| F10 | DEFERRED WITH REASON | Production promotion requires explicit approval after hosted verification. |

## Verification evidence

Historical Vercel deployment failed because public release invoked an incompatible modern Sanity CLI against Studio v2; that coupling is removed. The public lane was migrated to Next 15.5.24 / React 18.2 with synchronized Yarn lock and permanent Quality.

### Latest Portable Text link-safety slice

The CMS renderer previously passed `props.value.href` directly to `<a>`. `noopener noreferrer` protects opener/referrer behavior but does not prevent executable schemes such as `javascript:` or opaque `data:` links from CMS content.

- `b72f30a8bc26a714b1433132179fd01780bb91ac` — behavior regression first; helper did not yet exist.
- `84eb4a35f7a893e868b995172fa8dfc256b360d2` — pure `normalizePortableTextHref` helper permits `http`, `https`, `mailto`, `tel`, site-relative paths and fragments; rejects executable/opaque/protocol-relative values.
- `8090677bb74abc6e6bccce23750fc4e18e7c7c84` — Portable Text renderer uses normalized href; invalid href becomes non-clickable content, external web links retain `_blank` + `noopener noreferrer`.
- Fresh pure behavior execution: **2/2 PASS**.
- Exact-head Quality run `35282128875`, job `105406223733`: **PASS**:
  - all Node contracts including safe-link behavior: PASS;
  - frozen Yarn install: PASS;
  - production high/critical audit: PASS;
  - zero-warning lint: PASS;
  - `SANITY_OFFLINE_BUILD=true` Next production build: PASS.

## Hosted/provider state

Canonical Vercel project `miniblog` remains connected. Exact runtime-head Vercel status for `8090677...` is still **Deployment rate limited** before application build. Real provider-backed smoke additionally requires intended Sanity configuration/content access.

## Remaining release gate

**BLOCKED ONLY BY:**
1. Vercel Hobby build capacity for exact-final preview/browser smoke;
2. intended Sanity project configuration/content access for provider-backed listing/article smoke.

## Project checkpoint

**PROJECT:** `miniblog`  
**Fixed this pass:** executable/opaque CMS links can no longer become clickable Portable Text anchors.  
**Verification:** safe-link behavior **2/2 PASS**; exact-head full Quality **PASS**; Vercel = RATE-LIMITED; provider/browser = NOT VERIFIED.  
**Git:** `ai/product-completion/miniblog`, Draft PR #3; verified runtime head `8090677...`.  
**Status:** **PARTIAL**.

No merge, production promotion, provider write, credential mutation, billing action or destructive operation has been performed automatically.
