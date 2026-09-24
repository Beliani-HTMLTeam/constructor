# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Constructor is Beliani's internal toolkit for building HTML newsletter/landing-page campaigns. A React+Vite app lets marketers pick a template, fill in products/links/translations, and render final campaign HTML in-browser; a small Express server proxies Google Sheets for translations and product data.

## Commands

Package manager is **bun** (`bun.lock` is the only lockfile present; ignore the `pnpm` mention in README.md — it's stale).

```
bun install         # install deps
bun run dev          # api-server (bun) + vite dev server on :5500, concurrently
bun run api           # just the Express API server (server/api-server.js)
bun run frontend      # just vite on :5000
bun run build         # vite build
bun run preview       # api-server + vite preview on :5000
```

There is no test suite or lint script configured in package.json.

Set `VITE_SCOPE=<name>` in `.env` to scope campaign loading to one folder under `campaigns/<name>/` (skips `archive/` subfolders). Scope can also be switched at runtime in the UI (stored via `scopeStorage`).

## Architecture

### Campaign → Template → Component pipeline

- **`campaigns/<Scope>/*.js`** — one file per campaign, named `<id>_<date>-<slug>.js`. Exports `new entities.Campaign({...})` (see [src/entities/Campaign.js](src/entities/Campaign.js)). A campaign has one or more `templates` entries (typically `Newsletter` + `Landing`), each carrying its own `categories`, `links`, `css`, `tableQueries`, and a reference to the template renderer function (e.g. `templates.Thursday`).
- Campaign files rely on **auto-imported globals** — `templates`, `entities`, `types`, `translateImage`, `translateLink`, `getImageUrl` — injected by `unplugin-auto-import` per [vite.config.js](vite.config.js) (only for files matching `campaigns/*/*.js`; see `auto-imports.d.ts` for the generated type map). Don't add explicit imports for these in campaign files.
- **`src/templates/<Name>/template.js`** — the actual HTML-generating function referenced by a campaign (registered in [src/templates/index.js](src/templates/index.js)). Templates compose smaller pieces from their own `components/` and `handlers/` folders (e.g. [src/templates/Thursday/](src/templates/Thursday/)); handlers (prefixed `_`) typically transform a `categories` entry into rendered HTML for one section (intro, timer, categories grid, top image, etc).
- **`src/entities/`** — data model classes used to construct campaigns/templates (`Campaign`, `NewsletterTemplate`, `TableQuery*`, `TemplateLinks`, `ProductInstance`, ...), registered in [src/entities/index.js](src/entities/index.js) as the `entities` auto-import global.
- **`src/main/rendering/templateRenderer.js`** — orchestrates actual rendering: resolves translations/products for the selected country, builds a `TemplateHandlers` instance ([src/main/handlers/handlers.js](src/main/handlers/handlers.js)) exposing `getProductById`/`getCategoryTitle`/`getCategoryLink`/`getPhrase`/etc, calls the template function, wraps output in the MSO-compatible email `types.WRAPPER` HTML shell, and injects it into `#app-content`.

### Product & translation data flow

- Products can come from three places, checked in order in `templateRenderer.js`: the campaign's own `data`/`products` (compressed via `compress-json`, marked with `COMPRESSED_PRODUCTS_MARKER`), or `localStorage['products']` keyed by `campaign_id`. `normalizeProducts` ([src/utils/normalizeProducts.js](src/utils/normalizeProducts.js)) migrates older shapes.
- Translations: `tableQueries` on a template declare Google Sheet ranges to pull (per campaign `translationsSpreadsheet`); `dynamicTranslations` ([src/api/dynamicTranslations.jsx](src/api/dynamicTranslations.jsx)) fetches through the Express API, results are cached per campaign+country via `translationCache` ([src/api/cache.js](src/api/cache.js)). Static (non-per-campaign) translations come from `staticTranslations`. If a campaign has inline `data`, its own `fallback` values are used instead of fetching.
- The Express server ([server/api-server.js](server/api-server.js)) exposes `/api/static`, `/api/dynamic/:year/:sheetTab[/:range]`, and cached `/api/local/*` variants backed by Google Sheets (`google-spreadsheet`/`google-auth-library`, credentials via `GOOGLE_CLIENT_EMAIL`/`GOOGLE_PRIVATE_KEY` env vars), plus `/api/local/check-redirects` for bulk URL redirect checking.

### Dev-only file writes

The custom Vite plugin [plugins/save-campaign-plugin.js](plugins/save-campaign-plugin.js) adds dev-server middleware (`/api/save-campaign` POST, `/api/campaigns` GET) so the in-app campaign creator UI ([src/main/ui/createCampaign.js](src/main/ui/createCampaign.js)) can write new campaign files directly into `campaigns/<scope>/` from the browser during `bun run dev`.

### State

Global app state is a simple pub/sub store: `getState`/`setState` in [src/main/state/appState.js](src/main/state/appState.js), used throughout instead of a framework like Redux. Most of the UI is vanilla DOM manipulation via `src/utils/domUtils.js` and handler setup functions in [src/main/ui/buttonHandlers.js](src/main/ui/buttonHandlers.js); only a couple of pieces (`UpperSelects`, `PurgeSelect`) are mounted as React components.

### Path aliases

Defined in both [vite.config.js](vite.config.js) and [jsconfig.json](jsconfig.json) (keep in sync when adding new ones): `@`, `@api`, `@components`, `@config`, `@entities`, `@helpers`, `@main`, `@data` (→ `src/main/data`), `@handlers` (→ `src/main/handlers`), `@services`, `@templates`, `@utils`, `@css` (→ `src/utils/css`).

Note: `jsconfig.json`'s `@services` points at `src/old-api/services` while `vite.config.js`'s points at `src/services` — these currently disagree.
