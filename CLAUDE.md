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

## Date-gated header / footer / wrapper (Thursday + Friday newsletters)

Campaign `date` (`dd.mm.yyyy`) decides which layout renders. Cutoffs are inclusive (`>=`); older campaigns keep the old look.

- **New header top image** — from `06.10.2026` (`shouldUseNewHeader` in `src/templates/{Thursday,Friday}/Header.js`, sheet key `Top image src new`).
- **New header category layout** — from `12.10.2026` (same function, second cutoff; `Header Category N ... new` keys).
- **White wrapper** (`#ececec` → `#ffffff`) — from `12.10.2026` (`isWhiteWrapperCampaign` in [src/helpers/wrapTemplate.js](src/helpers/wrapTemplate.js)).
- **New footer (by Dmytro)** — from `21.10.2026` (`shouldUseNewFooter` in [src/templates/Thursday/Footer.js](src/templates/Thursday/Footer.js); uses [src/components/footer_new.js](src/components/footer_new.js) and `... new` footer sheet keys). Friday uses it unconditionally. The matching footer CSS (`src/utils/css/{newsletter,landing}/footer.css`) is injected by `templateRenderer.js` with the same `21.10.2026` cutoff (`FOOTER_CSS_CUTOFF`) — keep both cutoffs in sync.

## Previewing a live campaign (agent / browser)

With `bun run dev` running, open the app on localhost (`:5500`) and select the campaign via GET params (read in [src/utils/urlState.js](src/utils/urlState.js), mapping helpers in [src/utils/selectionParams.js](src/utils/selectionParams.js)):

- `scope` — folder under `campaigns/`, e.g. `KamilK`
- `campaign` — campaign `startId` (numeric field in the campaign file, e.g. `49505` — not the filename number)
- `template` — template type, e.g. `newsletter` / `landing`
- `shop` — shop slug
- `lang` — language key from [src/config/languages.js](src/config/languages.js), e.g. `UK`, `BENL`, `CHFR_Mattress`
- `view` — `mobile` for mobile preview (omit for desktop)

Example: `http://localhost:5500/?scope=KamilK&campaign=49505&template=newsletter&shop=UK&lang=UK` (`shop` is case-sensitive, as shown on the shop buttons — `shop=uk` is silently dropped). The URL is kept in sync with the UI, so selecting things in the UI and copying the URL also works.

**Wait before reading the render:** `staticTranslations` must finish loading first (`staticTranslations.whenReady()` in `templateRenderer.js`); until then the output is empty/incomplete. Progress is shown as a `toast.promise` toast ([src/api/staticTranslations.js](src/api/staticTranslations.js)): wait until "Initializing static translations..." turns into "Translations successfully loaded" before reading the render. If it takes longer than ~10 seconds, reload the page.
