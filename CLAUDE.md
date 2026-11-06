# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Bun is the package manager (see `bun.lock` and the deploy workflow).

| Command         | Purpose                                       |
| --------------- | --------------------------------------------- |
| `bun install`   | Install dependencies                          |
| `bun dev`       | Start dev server at `localhost:4321`          |
| `bun build`     | Build production site to `./dist/`            |
| `bun preview`   | Preview the production build locally          |

There is no test suite or linter configured.

## Architecture

Single-page Astro 5 portfolio (Spanish, "V2" magical/pastel design). `src/pages/index.astro` composes the section components (`Header`, `Hero`, `About`, `Services`, `Projects`, `Process`, `Contact`, `Footer`) inside `src/layouts/Layout.astro`. There are no other routes.

- **Layout.astro** owns the `<head>` (SEO, Open Graph, JSON-LD, GTM, Google Fonts), renders `Background.astro` (decorative sky + sparkle container) and loads `src/scripts/effects.ts`. Edit meta tags here, not in components.
- **Styling** is one hand-written global stylesheet, `src/styles/global.css` (plain CSS with custom properties). Tailwind is no longer used by the site.
- **Content as data.** Repeated content lives in `src/data/content.ts` (nav, services, process steps, certifications) and `src/data/projects.ts` (projects, with imported images). Components map over these arrays.
- **Images** are in `src/assets/portfolio/` and rendered with `astro:assets` `<Image>`. `public/` holds `favicon.svg`, `og-image.jpg`, `robots.txt`.
- **Scroll reveal:** sections with class `reveal` start hidden and get `active` from `effects.ts` when scrolled into view.

## Contact form

`Contact.astro` + `src/scripts/contact-form.ts` POST JSON to `<contact-api-base>/api/contact`. The base URL comes from `src/config.ts` (`CONTACT_API_BASE`, overridable with the `PUBLIC_CONTACT_API_URL` env var at build time) and is exposed through `<meta name="contact-api-base">`.

The backend is **not in this repo**: it is a Vercel serverless function (`api/contact.js`, sends mail via Resend) deployed from the separate `~/Desktop/mi-portafolio` project (Vercel project `mi-portafolio`). Its `ALLOWED_ORIGINS` env var must include `https://maiteebatista.site` for CORS.

## Site config

`astro.config.mjs` sets `site: "https://maiteebatista.site"` and `base: "/"`. The site is deployed to GitHub Pages via `.github/workflows/deploy.yml` (`withastro/action@v3` with `bun@latest`) on every push to `main`.

**TypeScript.** Extends `astro/tsconfigs/strict`.
