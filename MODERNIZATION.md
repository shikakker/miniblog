# miniblog — Modernization Roadmap

The repository is a sizeable Next.js/Sanity-based content application with components, library code, CSS, environment configuration and Sanity template metadata.

## 10 tasks

1. Identify the exact Sanity starter/template provenance and isolate original design/content/engineering changes.
2. Trace the Sanity schemas and query layer and document the actual editorial content model.
3. Audit `.env.local.example` and ensure project IDs/tokens are classified correctly as public configuration versus secrets.
4. Add runtime validation and resilient handling for missing drafts, images, slugs and malformed CMS data.
5. Add loading, empty, 404 and Sanity/network failure states across index and article routes.
6. Add tests for content mapping, slug routing and primary article rendering.
7. Review Renovate/dependency automation and add CI for lint, tests and production build.
8. Upgrade Next.js/Sanity incrementally after establishing a reproducible baseline and checking migration requirements.
9. Improve article metadata, structured data, accessibility, image performance and Core Web Vitals.
10. Rewrite the portfolio README around verified original customization and editorial/product decisions, not generic Sanity starter capabilities.

## Portfolio value

Potentially useful as a headless CMS implementation case if the original delta from the starter is clearly demonstrated.