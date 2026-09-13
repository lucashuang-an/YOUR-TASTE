---
feature: portfolio-site
status: delivered
updated: 2026-09-12
branch: master
commits: (uncommitted — working tree only)
---

# YOUR-TASTE Portfolio Site

## Report

**What was built** — A single-page English editorial portfolio for the 50 curated photos in `精选50张/`, using the YOUR-TASTE design system. Entry is `index.html` with `css/styles.css` and ES modules `js/photos.js` + `js/main.js`. Six chapters (Clay & Loom, High Country, Temple Light, Still & Form, Water & Village, Street Frame) use full-bleed / asymmetric / trio editorial rows — not a card grid. Interaction: IntersectionObserver reveals, scroll progress + chapter nav, hero micro-parallax (motion-safe), and a lightbox with prev/next/Esc/backdrop close.

**Verification** — `js/photos.js` maps 50/50 files with 0 missing (`_scripts/verify_portfolio.py`); `node --check` on both modules PASS; independent review PASS on spec compliance and correctness (no critical findings).

**Journey log**
- User chose scroll-narrative magazine flow + English-primary copy via grill.
- Avoided card-grid; layout patterns are bleed / split / asym / trio with hairlines.
- Fonts locked to Songti+Georgia / PingFang+Segoe / Consolas only.
- Review note: hero h1 is editorial copy (brand stays in chrome); acceptable deviation.

## [S1] Problem
Need a single-page photography portfolio for the curated 50 images in `精选50张/`, using the YOUR-TASTE design system. Interaction should feel like a high-end editorial scroll (magazine / long-form photo essay), not a SaaS card grid. Copy is English-primary.

## [S2] Design

### Entry & stack
- `index.html` + `css/styles.css` + `js/main.js` + `js/photos.js` at project root
- No build step; vanilla HTML/CSS/JS
- Photos referenced as `精选50张/<name>.JPG` (relative)

### IA (single page, scroll narrative)
1. **Hero** — full viewport
2. **Prologue** — manifesto + film-strip teasers
3. **Chapters** — 01 Clay & Loom · 02 High Country · 03 Temple Light · 04 Still & Form · 05 Water & Village · 06 Street Frame
4. **Colophon** — source, design system pointers

### Photo assignment
All 50 photos live in `js/photos.js` with id, file, chapter, alt, note, layout.

### Layout rules (anti-card)
Full-bleed rows, asymmetric splits, sticky/top chrome, hairline rules, whitespace. No rounded shadow card grids.

### Interaction
IO reveal; page progress + nav active state; lightbox (keyboard, Esc); `prefers-reduced-motion` respected.

### Design tokens
From DESIGN.md / design-system.html (paper, ink, terracotta, cerulean, limited fonts).

## [S3] Out of Scope
CMS, multi-page routing, i18n, animation libraries, reshuffling the 50-image selection.

## Tasks
- [x] T1: Spec + photo chapter map — acceptance: 50 photos mapped to 6 chapters (covers: S2)
- [x] T2: `index.html` + `css/styles.css` — acceptance: semantic sections, tokens, no card-grid (covers: S2)
- [x] T3: `js/main.js` + `js/photos.js` — acceptance: reveal, lightbox, reduced-motion (covers: S2; depends: T1)
- [x] T4: Verify — acceptance: 50/50 resolve; node --check PASS; review no critical (covers: S2; depends: T2, T3)
