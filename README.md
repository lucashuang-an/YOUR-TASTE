# ANAN's Photographs

Photography portfolio + design system (PANA GROUND v2).

## Open locally

- Portfolio: `index.html`
- Design system: `design-system.html`
- Spec: `DESIGN.md`
- Demo (exhibition): `demo/index.html`

Images are **not** in this repository. Put your selected photos in a local folder named `精选50张/` next to `index.html` (filenames such as `P1000448.JPG`). Original camera dumps (`100_PANA`, `101_PANA`, `102_PANA`) stay local only.

## Stack

Vanilla HTML / CSS / ES modules. No build step. Serve the repo root with any static server, or open via a local preview that can load modules.

```bash
# example
python -m http.server 5173
# then open http://localhost:5173/
```

## Structure

```
index.html          # dual-column portfolio
css/styles.css
js/photos.js        # photo map (50 frames)
js/main.js
demo/index.html     # design-system demo page
DESIGN.md
design-system.html
docs/compose/       # feature specs
```
