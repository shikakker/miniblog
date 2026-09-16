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
| T06 | DONE | Added regression contracts for Studio decoupling, runtime security and offline-build boundaries. |
| T07 | DONE | Migrated public runtime from Next 12.1.6 to Next 15.5.24 / React 18.2 and verified the synchronized Yarn lockfile. |
| T08 | DONE | Permanent exact-head Quality passes contracts, frozen install, production high/critical audit, zero-warning lint and provider-free production build. |
| T09 | BLOCKED | Exact final Vercel preview/browser verification. BLOCKED ONLY BY current Vercel Hobby build-rate capacity for this completion head. |
| T10 | DEFERRED WITH REASON | Sanity Studio v2 modernization is a separate authoring-surface migration and does not block the public web release lane. |

## I01–I10 improvements

| ID | Status | Improvement |
| --- | --- | --- |
| I01 | DONE | Removed moving `@sanity/cli@latest` from the public release path. |
| I02 | DONE | Added explicit `build:studio` command rather than hiding Studio work in `prebuild`. |
| I03 | DONE | Real web runtime still fails closed when Sanity project configuration is missing. |
| I04 | DONE | CI-only offline client returns deterministic empty CMS results and never becomes the production default. |
| I05 | DONE | Added `rel="noopener noreferrer"` to Portable Text external links. |
| I06 | DONE | Production audit blocks high/critical findings while moderate-only Yarn v1 findings do not create a false failure. |
| I07 | DONE | Next 15.5.24, React 18.2, ESLint 8.57.1 and `eslint-config-next` 15.5.24 verified on Node 22. |
| I08 | DONE | Legacy `eventsource` chain is explicitly pinned to 1.1.2 while `next-sanity` 0.x remains. |
| I09 | BLOCKED | Hosted Sanity-backed responsive/accessibility/browser smoke requires an exact-current preview. |
| I10 | DEFERRED WITH REASON | Legacy Sanity Studio v2 dependency modernization is isolated from the deployable public web surface. |

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
| F10 | DEFERRED WITH REASON | Production promotion requires explicit approval after exact hosted verification. |

## Verification evidence

Historical Vercel deployment `dpl_8HNx4BnS4R3vc86ZPWo9XwG2KK5f` failed before `next build` because public release invoked an incompatible modern Sanity CLI against Studio v2. That coupling is removed.

A test-first runtime contract reproduced two P0 security/release failures: the public app still used `next@^12.1.6`, and the legacy Sanity `eventsource` chain was not explicitly pinned. The guarded migration moved the public lane to Next 15.5.24 / React 18.2, synchronized `yarn.lock`, and corrected Yarn v1 audit handling so CI blocks high/critical production findings rather than failing on moderate-only output.

Guarded migration run `35098680471`, job `104802304120`, committed verified dependency state `877c14019663c8ec2b5c28f5e82a14c4d96b40e2` after contracts, production audit, zero-warning lint and provider-free build all passed.

Permanent read-only verification then passed on the current completion head `87569980f7bce82bc6e25cfc8593a69617a21d54`:

- Quality run `35099464351`, job `104804916958`: PASS;
- release contracts: PASS;
- `yarn install --frozen-lockfile --non-interactive`: PASS;
- production high/critical audit: PASS;
- zero-warning lint: PASS;
- `SANITY_OFFLINE_BUILD=true` production build: PASS.

Current Vercel commit status on the same exact head is not an application/build error: it reports `Deployment rate limited — retry in 24 hours.` The canonical connected Vercel project is `miniblog` (`prj_ibO9e8yPxsxTgGluBGKjnsDMxx2n`); its latest recorded deployment remains the historical pre-fix ERROR deployment, so no exact-current browser/runtime PASS is claimed.

Final public manifest boundary: Node `22.x`, Yarn `1.22.22`, Next `15.5.24`, React/ReactDOM `18.2.0`, `eventsource` `1.1.2`, plus patched Next/PostCSS/nanoid resolutions.

## Remaining release gate

**BLOCKED ONLY BY:**
1. Vercel Hobby build capacity for an exact-final preview/browser smoke;
2. intended Sanity project configuration/content access for a real provider-backed smoke.

The public source/build/security lane is verified. Studio v2 modernization is tracked separately and is not allowed to re-enter the public web build path.

Status: **PARTIAL — code/release lane green; exact hosted/provider verification remains external.**

No merge, production promotion, provider write, credential mutation, billing action or destructive operation has been performed automatically.
