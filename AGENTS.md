# AGENTS.md

## Cursor Cloud specific instructions

### Product
This repository is a single, static personal portfolio website for "Thierno Barry" (see `README.md`). It is plain HTML/CSS/JS with **no build step, no package manager, and no dependencies**:
- `index.html` — page markup and content
- `styles.css` — styling
- `script.js` — vanilla JS (sticky header, mobile nav, scroll animations, contact-form handling)

### Running (development)
There is no dev/build tooling. Serve the repo root with any static file server and open the page, e.g.:
- `python3 -m http.server 8000` (from the repo root), then open `http://localhost:8000/`

`python3` and `node` are preinstalled in the environment; no installation is required.

### Lint / Test / Build
None are configured (no linter, no test framework, no build). Verification is done by serving the site and manually exercising the page (e.g. submitting the "Let's Connect" contact form and confirming the "Message Sent!" success state).

### Notes / gotchas
- The contact form is client-side only: on submit it shows a success message and clears fields — it does **not** POST anywhere or hit a backend.
- Fonts load from the Google Fonts CDN; without internet the page still renders using fallback fonts.
