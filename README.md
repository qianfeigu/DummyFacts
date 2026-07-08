# Fun Facts

A single-page site that shows one random fun fact at a time. Plain static HTML/CSS/JS — no build step, no dependencies, no backend.

## Files
- `index.html` — page structure
- `styles.css` — all styling
- `facts.js` — the `FACTS` array (currently 151 facts, sourced/paraphrased from BBC Science Focus)
- `app.js` — shuffle-walk rotation logic, button + spacebar handling, crossfade

## Running locally
Just open `index.html` in a browser — no server required.

## Deploying

**Vercel**
```
npx vercel
```
Follow the prompts; no build settings needed (it's a static site).

**Netlify**
Drag the project folder onto https://app.netlify.com/drop, or:
```
npx netlify-cli deploy --prod
```

**GitHub Pages**
Push the repo, then in the repo's Settings → Pages, set the source to the root of the main branch.

## Adding more facts
Edit `facts.js` and add objects in the form `{ id, text, source? }` to the `FACTS` array. No other code changes needed.
