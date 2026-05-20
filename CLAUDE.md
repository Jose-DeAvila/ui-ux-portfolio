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
| `bun astro check` | Run Astro's type/diagnostic check           |

There is no test suite or linter configured.

## Architecture

Single-page Astro 5 portfolio. The entry point `src/pages/index.astro` composes nine section components (`Header`, `Hero`, `Projects`, `About`, `Process`, `Motivation`, `Services`, `Stack`, `Footer`) inside `src/layouts/Layout.astro`. There are no other routes.

**Layout.astro is the global shell.** It owns:

- The `<head>` (title, meta description/keywords, favicon) — edit it here, not in components.
- Tailwind v4 setup via `@import "tailwindcss"` plus `@plugin "@midudev/tailwind-animations"`, and the `@theme` block defining `--font-sans` (Inter) and the `--color-small-circle` / `--color-big-circle` custom colors.
- A `body { padding-top }` rule that compensates for the fixed `Header`, with breakpoints at 640px and 1024px. If header height changes, update these.
- An `IntersectionObserver` script that adds `animate-fade-in-up` to every `<section>` as it enters the viewport. **Every `<section>` starts at `opacity: 0`** — any new section must either be a `<section>` (so the observer reveals it) or use a different tag, otherwise it will be invisible.

**Styling.** Tailwind v4 is wired through the Vite plugin (`@tailwindcss/vite`) in `astro.config.mjs`; there is no `tailwind.config.*` file — theme tokens live in the `@theme` block inside `Layout.astro`.

**Site config.** `astro.config.mjs` sets `site: "https://maiteebatista.site"` and `base: "/"`. The site is deployed to GitHub Pages via `.github/workflows/deploy.yml` (uses `withastro/action@v3` with `bun@latest`) on every push to `main`.

**Assets.** Images and SVGs in `src/assets/` are imported by components and processed by Astro's asset pipeline. `public/` only holds `favicon.svg` (served as-is at the site root).

**TypeScript.** Extends `astro/tsconfigs/strict`.
