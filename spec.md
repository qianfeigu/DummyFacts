# Fun Facts Site — Spec (current state)

## What this is
A single-page site that shows one random fun fact at a time. It has exactly one function: show the next fact. No comments, no accounts, no database, no backend.

This started from an earlier spec (中文冷知识, quote-card layout with a photo panel) but has since been simplified and changed per follow-up requests. This doc reflects what's actually built.

## Stack
Plain static site: `index.html` + `styles.css` + `app.js` + `facts.js`. No framework, no build step, no dependencies (not even a webfont — system font stack only, kept intentionally offline-capable).

## Layout
- Centered single column on a light gray (`#EDEDED`) page — no card container, no photo panel.
- Top to bottom: oversized opening quote mark (`"`), the fact text (bold, black, `clamp(22px, 2.4vw, 34px)`), then a `Next` button.
- No attribution/numbering line (explicitly removed — do not reintroduce a `#NNN` id label in the UI).
- No image/photo element anywhere on the page.

## Typography
- System font stack only: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- Weight 700 for the fact text, 400 for the button.
- English UI (`lang="en"`), page title "Fun Facts".

## Motion
- Fact-change crossfade (~250ms ease) on the quote mark + fact text together.
- Respects `prefers-reduced-motion`: swaps instantly if set.

## The one function: next fact
- `Next` button, ghost style (thin black border, transparent bg, black text; hover inverts to black bg/white text).
- Also triggers on spacebar (unless the button itself has focus, to avoid double-firing native button-space behavior).
- Logic: shuffle `FACTS` once on load, walk through in order, reshuffle when exhausted (no near-term repeats).

## Content
- `facts.js`: array of `{ id, text, source? }`.
- 151 real facts, paraphrased (not copied verbatim) from BBC Science Focus (sciencefocus.com/science/fun-facts), each tagged `source: "BBC Science Focus"`.
- No images/photos are used or referenced anywhere in the project.

## Quality floor
- Visible keyboard focus ring on the button.
- Small-screen breakpoint (≤480px) reduces padding/quote-mark size.
- `lang` attribute set, no alt-text requirements remain since there are no images.

## Deployment
- Static site, deployed to Vercel (see README.md for CLI steps).
- GitHub repo: https://github.com/qianfeigu/DummyFacts

## Explicitly out of scope / removed along the way
- No Chinese-language content (site is English-only).
- No split-panel "quote card" container or photo imagery.
- No fact numbering/attribution shown in the UI.
- No database, no external API calls, no live-fetching of facts at runtime.
