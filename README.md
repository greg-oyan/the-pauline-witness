# The Pauline Witness

An editorial reconstruction of Paul's authentic teaching from the strongest textual evidence.

This is a static React + Vite + TypeScript site, GitHub Pages compatible. No backend, no
external database — all content lives in `src/data/`.

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run typecheck
npm run build
npm run preview
```

## Deployment

The Vite config sets `base: './'` and the router uses `HashRouter`, so the build can be served
from any subpath (including `https://<user>.github.io/the-pauline-witness/`).

```bash
npm run build
# then publish ./dist as the Pages source
```

## Content philosophy

- Distinguish text, interpretation, and confidence level.
- Mark uncertain content explicitly via the confidence badge.
- Do not reproduce copyrighted biblical text; cite chapter and verse instead.
- Tone is editorial and restrained — not devotional, not gimmicky.

## Structure

- `src/data/` — typed content: corpus, letters, themes, evidence cards, authenticity case, caricatures, source notes.
- `src/pages/` — routed views.
- `src/components/` — `Layout`, `EvidenceCard`, `SourceDrawer`, `ConfidenceBadge`.
