# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Static export to /out directory
npm run deploy     # build + push to GitHub Pages via gh-pages
node src/StandardizeSpacing.js  # Normalize spacing classes across all TSX/CSS files
```

No test runner is configured. ESLint is available via `npx eslint`.

## Project Overview

WBM (Waste Be Minerals) is a marketing and investor platform for an e-waste critical-minerals company. The site is a **fully static Next.js export** deployed to GitHub Pages.

Key config constraints:
- `output: "export"` in `next.config.ts` — no server-side APIs, no `getServerSideProps`, no middleware
- `basePath: "/WBM-Investor-Access-Requirements"` — all internal links must go through Next.js `<Link>` or `router.push`; never hardcode paths without the basePath
- `images.unoptimized: true` — required for static export; never remove this

## Page Architecture

Every route follows a two-file pattern:
- `page.tsx` — sets `export const metadata`, wraps with guards if needed, re-exports the view. **Server component** (no `"use client"`).
- `view.tsx` — the actual UI. Always `"use client"`.

The home page (`src/app/page.tsx`) is an exception — it is itself a client component that composes ~15 section components from `src/components/home/`.

## Theme System

Theme is toggled via `ThemeProvider` (`src/components/ui/ThemeProvider.tsx`) and stored in `localStorage` under key `wbm-theme`.

All colors must use CSS variables — never hardcode hex values in components:

| Variable | Purpose |
|---|---|
| `--c-bg`, `--c-bg2`, `--c-bg3` | Background layers |
| `--c-fg`, `--c-fg2`, `--c-fg3` | Text / foreground |
| `--c-lime`, `--c-orange`, `--c-ice` | Brand accent colors |
| `--c-border`, `--c-glass`, `--c-card` | Surfaces |
| `--c-nav` | Navbar background |

Light/dark values are defined in `src/app/globals.css`. The `dark` class is toggled on `<html>`.

Typography: `--font-dm` (DM Sans, body) and `--font-amatic` (Amatic SC, display/headings).

## Investor-Protected Area

Routes under `/for-you/investor`, `/investor/viewer` are guarded by `<InvestorGuard>` (`src/components/investor/InvestorGuard.tsx`).

Auth is **entirely client-side** via `localStorage` (`src/lib/auth.ts`):
- Sessions last 2 hours
- Credentials are hardcoded constants in `auth.ts` — this is intentional for this demo/investor-access context
- `useSecurity` hook (`src/lib/security.ts`) blocks right-click, screenshot shortcuts, devtools, and screen focus loss on protected pages

When adding new investor-protected pages: wrap the view in `<InvestorGuard>` in `page.tsx`.

## Animation Libraries

- **Framer Motion** — page transitions, scroll-triggered reveals, entrance animations
- **GSAP** — complex timeline animations, scroll scrubbing
- **React Three Fiber + Three.js** — 3D scenes (globe, minerals)
- **`cobe`** — globe component used in `GlobalFootprint`

Background effect components live in `src/components/ui/backgrounds/` (Beams, Galaxy, Particles, SoftAurora, etc.) and are used as decorative layers behind content.

## Spacing Convention

`src/StandardizeSpacing.js` normalizes all section-level Tailwind spacing to `py-10` / `my-10` / `gap-10`. Run it after adding sections to keep vertical rhythm consistent. Do not use `py-12` through `py-64` in new section components.

## Global Layout

`src/app/layout.tsx` wraps every page with (in order): `ThemeProvider` → `CustomCursor` → `Navbar` → page content → `Footer` → `AIAgentChat`.

The `CustomCursor` replaces the native cursor (`html { cursor: none }` in globals.css) — do not set `cursor: auto` on interactive elements; use `cursor: none` or leave unset.
