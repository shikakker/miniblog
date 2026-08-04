# MiniBlog

Next.js blog starter with a Sanity CMS studio, live preview subscriptions, SEO metadata, categories, archives, and content-driven pages.

## Features

- Homepage with featured and grid-based post lists.
- Dynamic post pages and category/archive views.
- Sanity-powered content, images, authors, and site configuration.
- Preview subscriptions for editorial workflows.
- Embedded Sanity Studio build.
- SEO and social-card metadata.
- Light/dark theme support and a contact form.

## Tech stack

- Next.js 12 and React 18
- Sanity CMS
- Tailwind CSS and Headless UI
- Portable Text
- Next SEO

## Environment

Copy the example file and set the Sanity project ID:

```bash
cp .env.local.example .env.local
```

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
```

## Getting started

```bash
yarn install
yarn dev
```

Run the Sanity studio separately with `yarn sanity`.

## Scripts

- `yarn dev` — start Next.js.
- `yarn build` — build the Sanity Studio and Next.js app.
- `yarn start` — start the production server.
- `yarn sanity` — start Sanity Studio.
- `yarn lint` — run Next.js linting.

## Status

CMS-backed blog template. Production use requires a configured Sanity project and deployment-specific form/SEO settings.
