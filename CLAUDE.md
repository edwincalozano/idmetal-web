# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Corporate website for **IDMETAL** — a Peruvian company specializing in industrial metalwork (metalmecánica), civil construction, and specialized topography based in Cajamarca, Perú. The site targets B2B clients (construction firms, mining, government).

The full product brief (content, copy, section order, image URLs) lives in `BRIEF.md`. This CLAUDE.md covers development guidance only.

---

## Tech Stack

- **Framework:** Astro 4.x (`output: 'static'` — purely static, no SSR)
- **Styles:** Tailwind CSS v3 via `@astrojs/tailwind`
- **Language:** TypeScript where relevant
- **Forms:** Web3Forms (`https://api.web3forms.com/submit`) — access key is already configured in `Contacto.astro`
- **Fonts:** Google Fonts — `Rajdhani` (headings) + `Inter` (body), loaded in `Layout.astro`
- **Icons:** Inline SVG string literals stored in component data arrays (no icon library dependency)
- **Images:** Unsplash direct URLs; never use placeholder services like `via.placeholder.com`
- **Deploy target:** Vercel

---

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run check     # Type check (astro check)
```

---

## Architecture

### Page assembly

`src/pages/index.astro` is the only page. Component render order (top → bottom):

```
Navbar → Hero → ValorPropuesta → Servicios → Proceso → Proyectos → Testimonios → Contacto → Footer
```

Each component is a self-contained `.astro` file with its own Tailwind classes and, when needed, a `<script>` tag for vanilla JS behavior.

Section anchor IDs used by nav links: `#inicio` (Hero), `#servicios` (Servicios), `#proyectos` (Proyectos), `#contacto` (Contacto). The nav also includes a `#nosotros` link that has no matching section in the current page — it is a dead link.

Local images live in `src/img/`. Use them with a root-relative path (e.g., `/src/img/fondo.png`). Unsplash URLs are used for project/testimonial imagery where no local asset exists.

### Color system — dual registration

Brand colors are registered in two places that must stay in sync:

- **CSS custom properties** in `Layout.astro` (`--idm-red`, `--idm-bg`, etc.) — use inside `<style>` blocks: `color: var(--idm-red)`
- **Tailwind tokens** in `tailwind.config.mjs` (`idm-red`, `idm-bg`, etc.) — use in component markup: `bg-idm-red`, `text-idm-text-muted`

Both approaches are already used across components. Never add raw hex values like `bg-[#E8473F]`; use the named token.

### Scroll-reveal system

`Layout.astro` defines a global `.reveal` class and an `IntersectionObserver` script. Any element with `class="reveal"` fades in + slides up when it enters the viewport. Stagger siblings with `reveal-delay-1` through `reveal-delay-4` (delays defined at 0.1 s intervals; only 4 delay levels exist). When iterating a list longer than 4, cap the index: `reveal-delay-${Math.min(i + 1, 4)}`.

### Navbar scroll state

`Navbar.astro` listens to `scroll` and toggles the `.scrolled` class on `<nav>` at `scrollY > 60`. The `.scrolled` CSS rule applies a dark frosted-glass background and reveals the tagline under the logo.

### Services tabs

`Servicios.astro` contains the tab UI and imports `Metalmecanica.astro`, `Construccion.astro`, and `Topografia.astro` as panel content. Tab switching is handled by vanilla JS in the same file: it sets `aria-selected`, toggles `hidden`, and triggers a CSS `fadeIn` animation on the active panel.

### Contact form

`Contacto.astro` submits to Web3Forms via `fetch`. On success it shows a confirmation div for 6 seconds, then hides it. On network failure it silently falls back to native form submission. The access key and honeypot (`botcheck`) field are already configured.

---

## Brand Constraints

These rules are strict — do not deviate.

### Color palette

| Token | Hex | Usage |
|---|---|---|
| `idm-red` | `#E8473F` | Primary CTA, accents |
| `idm-red-dark` | `#C93B34` | Hover state for red |
| `idm-yellow` | `#F5A623` | Secondary accent |
| `idm-yellow-dark` | `#D9901F` | Hover state for yellow |
| `idm-dark` | `#2C2C2C` | Text, headers |
| `idm-gray` | `#4A4A4A` | Subtexts, icons |
| `idm-bg` | `#0F0F0F` | Dark section backgrounds |
| `idm-surface` | `#1A1A1A` | Dark cards |
| `idm-light-bg` | `#F8F7F5` | Light section backgrounds |
| `idm-text-light` | `#E8E6E1` | Light body text on dark bg |
| `idm-text-muted` | `#9A9490` | Muted labels, captions |
| `idm-white`      | `#FFFFFF` | CSS var only — not in Tailwind config; use `text-white` / `bg-white` instead |

- No blues or greens anywhere in the UI.
- Red and yellow never appear as co-equal protagonists in the same section (together only in the logo).

### Typography

- Headings / display: `font-rajdhani` (`Rajdhani`, bold)
- Body: `font-inter` (`Inter`)
- Slogan **"LO HACEMOS MEJOR"** must appear in at least 3 strategic locations across the page.

### Animations

Vanilla JS only — no animation libraries. Use `IntersectionObserver` (`.reveal` pattern above) for scroll entry. CSS `@keyframes` for micro-animations within components.
