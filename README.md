# MiniBlog — Stablo / Next.js + Sanity Experiment

Historical personal-blog / publishing experiment based on the **Stablo Next.js Minimal Blog Template**.

The repository's own Sanity template manifest identifies the source template as:

```text
Stablo Next.js Minimal Blog Template
```

with the description:

```text
Minimal blog website template built with Next.js, TailwindCSS & Sanity CMS
```

This checkout should therefore be presented as an **adapted template / CMS experiment**, not as an original blogging framework authored from scratch.

## What is implemented

The repository contains a complete Pages Router-era blog structure with routes / areas such as:

```text
/
/about
/archive
/contact
/post/...
/studio
```

and a bundled Sanity Studio / Sanity template configuration.

## Architecture

```text
Next.js 12 frontend
      |
      +-- Sanity content API
      +-- Portable Text
      +-- image helpers
      +-- SEO metadata
      +-- theme / UI components
      +-- contact form
      |
      `-- embedded Sanity Studio build
```

The production build runs a prebuild step that builds the Sanity Studio into:

```text
public/studio
```

before running `next build`.

## Tech stack

- Next.js 12
- React 18
- Sanity CMS
- `next-sanity`
- Portable Text
- Tailwind CSS
- Headless UI
- Heroicons
- Next SEO
- React Hook Form
- Web3Forms integration
- date-fns

## Sanity template metadata

`.sanity-template/manifest.json` declares:

- Vercel deployment;
- Next.js;
- Tailwind CSS;
- Sanity Studio under `/studio`;
- environment variables for Sanity project ID / dataset.

This is useful provenance and should be preserved if the project is reused.

## Environment configuration

The repository contains `.env.local.example` and expects Sanity configuration for the active dataset / project.

Review the actual source before deploying because Sanity's tooling and package APIs have changed significantly since the Next.js 12 / `next-sanity` 0.x era.

Do not commit real Sanity tokens, form credentials, or other provider secrets.

## Local development

```bash
git clone https://github.com/shikakker/miniblog.git
cd miniblog
npm install
npm run dev
```

Run the Sanity Studio development environment separately with:

```bash
npm run sanity
```

Build / start:

```bash
npm run build
npm start
```

The build process installs / builds the Studio as part of `prebuild`, so historical package-manager compatibility should be checked before relying on the current script in CI.

## Historical stack caveat

The project uses older package versions such as:

```text
next 12.1.x
next-sanity 0.5.x
Sanity v2-era tooling
```

A current revival should migrate dependencies deliberately rather than upgrading everything blindly. Sanity Studio v3+, modern Next.js routing, image APIs, and deployment configuration differ from this historical stack.

## Contact-form boundary

The package includes `use-web3forms` / React Hook Form and a dedicated contact page.

Before public deployment, verify:

- the active form endpoint / access key;
- spam protection;
- validation;
- privacy notice;
- retention of submitted contact details;
- failure / retry UX.

## Portfolio-content boundary

This repository is a template-based publishing experiment, not a canonical source of current professional biography or project claims.

Before republishing it as a personal site, verify all embedded profile copy, social links, project references, screenshots, and dates against current career materials.

## Current status

**Historical Stablo-based Next.js / Sanity blog experiment.** The repository contains a real CMS-backed blog architecture, embedded Studio, archive / post / contact pages, and SEO / theme infrastructure, while the underlying template provenance remains explicit.

## License

Verify the repository's license and the original Stablo template license / attribution requirements before redistributing derived code or design assets.