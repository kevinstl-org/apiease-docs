# APIEase documentation site

This workspace hosts the APIEase docs built with [Docusaurus](https://docusaurus.io/).

## Install dependencies

From the `docs/` directory:

```bash
npm install
```

## Local development

```bash
npm run start
```

The dev server opens on `http://localhost:3000` and hot-reloads as you edit Markdown or React pages.

## Build for production

```bash
npm run build
```

Static assets are written to `build/`. Serve them with any static host or the built-in preview:

```bash
npm run serve
```

## Adding content

- Docs live under `docs/docs/` and the homepage under `docs/src/pages/`.
- The sidebar is defined in `docs/sidebars.js` and references the apiease-specific pages.
- Edit links in the UI point back to this repository for easy PRs.
