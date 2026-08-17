# Completion plan

1. Establish provenance: `miniblog` is a Next.js + Sanity blog starter with a large `.sanity-template/data/production.tar.gz`, blog/category/author components, archive/about/contact pages and GROQ/Sanity client code. Document upstream template origin and modifications actually made here.
2. Audit `.env.local.example` and `lib/sanity.js`: distinguish public Sanity project/dataset identifiers from write/preview tokens, keep privileged tokens server-side and never expose mutation credentials to the browser.
3. Inspect the 38 MB Sanity production export before public use for personal/private content, author data, licensed images or secrets. Treat it as imported content provenance, not automatically safe demo data.
4. Harden GROQ/content rendering: parameterize dynamic queries, validate slugs, render portable/rich content safely and ensure drafts/private fields do not leak through production queries.
5. Remove or replace the unused default `/api/hello` route and audit the contact page: if the contact form is nonfunctional, say so; if it submits, add server-side validation, spam/rate protection, privacy disclosure and deterministic success/error handling.
6. Define content freshness/build behavior: static generation/revalidation, preview mode if present, deleted posts and Sanity outage behavior. Do not serve stale archive/category navigation without a documented cache strategy.
7. Improve SEO/content semantics: canonical URLs, metadata/OpenGraph, sitemap/feed if actually added, structured headings and author/category relationships grounded in Sanity data.
8. Improve accessibility/performance: responsive images via Sanity image pipeline, meaningful alt text from content fields, keyboard/mobile navigation, theme-switch semantics and avoid shipping oversized template/export assets to production.
9. Add query fixtures/tests for post/category/archive/slug behavior and rendering tests for missing images/authors/drafts; CI runs lint/build/tests against mocked or read-only test content without production write tokens.
10. Rewrite README as verified Sanity blog starter documentation: provenance, content model, read/preview/write boundary, import/export caveats, setup, screenshots and exact implemented pages/features.
