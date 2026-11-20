# shabbirhussain7.github.io

Personal site of Shabbir Hussain. Static HTML built with [Astro](https://astro.build); no client-side JavaScript.

## Editing

- **Content** (bio links, papers, news, software, background): `src/data/site.js`
- **Homepage text and layout**: `src/pages/index.astro`
- **Paper pages**: `src/pages/papers/[slug].astro`
- **Styles**: `src/styles/global.css`
- **Meta tags and structured data**: `src/layouts/Base.astro`
- **CV**: `main.tex`, then `npm run cv` to rebuild `public/Shabbir_Hussain_CV.pdf` (needs `pdflatex`)

## Commands

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # build to dist/
npm run cv       # compile main.tex into public/Shabbir_Hussain_CV.pdf
npm run deploy   # build and publish dist/ to the gh-pages branch
```
