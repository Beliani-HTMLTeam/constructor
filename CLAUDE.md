# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## What this is

Constructor is Beliani's internal toolkit for building HTML
newsletter/landing-page campaigns. A React+Vite app lets marketers pick a
template, fill in products/links/translations, and render final campaign HTML
in-browser; a small Express server proxies Google Sheets for translations and
product data.

## Commands

Package manager is **bun** (`bun.lock` is the only lockfile present; ignore the
`pnpm` mention in README.md — it's stale).

```bash
bun install         # install deps
bun run dev          # api-server (bun) + vite dev server on :5500, concurrently
bun run api           # just the Express API server (server/api-server.js)
bun run frontend      # just vite on :5000
bun run build         # vite build
bun run preview       # api-server + vite preview on :5000 (`start` is the same)
```

There is no test suite or lint script configured in package.json.

Set `VITE_SCOPE=<name>` in `.env` to scope campaign loading to one folder under
`campaigns/<name>/`. Campaigns are loaded with the glob `/campaigns/*/*.js`
([src/utils/getUserCampaigns.js](src/utils/getUserCampaigns.js)), so subfolders
like `archive/` are never loaded. Scope can also be switched at runtime in the
UI.

## Architecture

### Boot

- [src/app.jsx](src/app.jsx) — entry point. Picks the initial scope (URL
  `scope` param → `localStorage['constructor_favorite_scope']` → saved scope
  from [src/utils/scopeStorage.js](src/utils/scopeStorage.js) (IndexedDB +
  cookie) → `VITE_SCOPE`), loads that scope's campaigns sorted newest first
  (`sortCampaigns`, by `dd.mm.yyyy` date), then calls `initApp`. Also handles
  scope changes from the UI (`handleScopeChange`).
- [src/main/initApp.jsx](src/main/initApp.jsx) — seeds global state (`config`,
  `scopes`, `scope`, `campaigns`, `shops`), mounts the only React pieces
  (`UpperSelects`, `PurgeSelect`, `ProductsBadge`, from `src/main/ui/`) into
  their `*-root` containers, and wires every toolbar button through the
  `setup*Handler` functions in
  [src/main/ui/buttonHandlers.js](src/main/ui/buttonHandlers.js).
- [src/utils/config.js](src/utils/config.js) — `appConfig`: API URLs, image
  server base (`server_url`), prologistics campaign/issue URLs, and
  `emptyCell()` (the red "Cell is empty" marker rendered for missing sheet
  cells).

### Campaign → Template → Component pipeline

- **`campaigns/<Scope>/*.js`** — one file per campaign, named
  `<id>_<date>-<slug>.js`. Exports `new entities.Campaign({...})` (see
  [src/entities/Campaign.js](src/entities/Campaign.js)). A campaign has one or
  more `templates` entries (typically `Newsletter` + `Landing`), each carrying
  its own `categories`, `links`, `css`, `additionalCss`, `tableQueries`, and a
  reference to the template renderer function (e.g. `templates.Friday`).
- Campaign files rely on **auto-imported globals** — `templates`, `entities`,
  `types`, `translateImage`, `translateLink` — injected by
  `unplugin-auto-import` per [vite.config.js](vite.config.js) (only for files
  matching `campaigns/*/*.js`). `getImageUrl` comes from a second
  `AutoImport` block without that `include` limit. See `auto-imports.d.ts` for
  the generated type map. Don't add explicit imports for these in campaign
  files.
- **`src/templates/<Name>/template.js`** — the HTML-generating function
  referenced by a campaign, registered in
  [src/templates/index.js](src/templates/index.js).
- **Components:** [src/components/](src/components/) holds global components
  shared by templates (e.g. `header.js`, `footer.js`, `footer_new.js`). A
  template can keep its own versions in `src/templates/<Name>/components/`
  (e.g. [src/templates/Thursday/components/](src/templates/Thursday/components/)
  has its own `Product.js`, `CTA.js`, `Space.js`, ...). Prefer the template's
  own component when one exists. Handlers in `src/templates/<Name>/handlers/`
  (prefixed `_`) render one section each (intro, timer, top image, ...).
- **`src/entities/`** — data model classes used to construct campaigns/templates
  (`Campaign`, `NewsletterTemplate`, `TableQuery*`, `TemplateLinks`,
  `ProductInstance`, ...), registered in
  [src/entities/index.js](src/entities/index.js) as the `entities` auto-import
  global.

### Categories

A template entry's `categories` is an array of section configs. The template's
`components/Categories.js` renders them in order: background/color, title
(`name`, `title: {...}`), optional paragraph and CTA, spacing, then the body.

The body layout is picked by `category.type`: `Categories.js` dynamically
imports `./category/<type>.js` (lowercased) and calls its exported `render()`.
Unknown or missing types fall back to `./category/default.js`. Example:
`type: 'grid'` →
[src/templates/Thursday/components/category/grid.js](src/templates/Thursday/components/category/grid.js)
(2-column product grid). To add a layout, add a new file exporting `render`
in that folder. Each template has its own `category/` folder, so a type
available in `Thursday` may not exist in `Friday`.

Common category fields: `name`, `href`, `type`, `background`, `color`,
`container` (container class, default `newsletterContainer`), `spaceAfter`,
`title`, `paragraph`, `product` (per-product style: `align`, gaps, `title`,
`prices`, ...). See a recent campaign in `campaigns/KamilK/` for full examples.

### Rendering

[src/main/rendering/templateRenderer.js](src/main/rendering/templateRenderer.js)
orchestrates rendering:

1. Waits for `staticTranslations.whenReady()`, resolves translations and
   products for the selected country.
1. Builds a `TemplateHandlers` instance
   ([src/main/handlers/handlers.js](src/main/handlers/handlers.js)) exposing
   `getProductById`/`getCategoryTitle`/`getCategoryLink`/`getPhrase`/etc, and
   calls the template function.
1. Builds the CSS: template `css` + date-gated footer CSS + `additionalCss` +
   generated CTA CSS. With `optimizeCss: true` on the template entry, selectors
   not used in the HTML are purged.
1. Wraps output in the template's `wrapper` (usually `types.WRAPPER`) via
   `wrapTemplate` ([src/helpers/wrapTemplate.js](src/helpers/wrapTemplate.js)),
   which splits CSS into several `<style>` tags (`styleTags`, 8000 chars each)
   to keep Gmail happy.
1. For landing pages only, `optimizeHtmlImages` swaps image extensions to
   `.webp` (GIFs untouched), then injects the result into `#app-content`.

### Product & translation data flow

- Products come from two places, checked in order in `templateRenderer.js`:
  the selected campaign's own `products` (optionally compressed via
  `compress-json`, marked with `COMPRESSED_PRODUCTS_MARKER`), otherwise
  `localStorage['products']` — an array of `{ campaign_id, products }`, matched
  by campaign `startId`.
- [src/utils/normalizeProducts.js](src/utils/normalizeProducts.js) converts raw
  pasted product JSON (items with `saved_params`) into `Product` entities. It
  strips dots from seller usernames ("Beliani." → "Beliani"), keeps master
  `Beliani` products plus per-country sellers (`Beliani UK`, `Beliani DE`, ...),
  and merges each country product's `ShopSAAlias` links over its master's
  (`saved_params.master_sa`). Products without `saved_params` are dropped.
- Translations: `tableQueries` on a template declare Google Sheet ranges to pull
  (per campaign `translationsSpreadsheet`); `dynamicTranslations`
  ([src/api/dynamicTranslations.jsx](src/api/dynamicTranslations.jsx)) fetches
  through the Express API, results are cached per campaign+country via
  `translationCache` ([src/api/cache.js](src/api/cache.js)). Static
  (non-per-campaign) translations come from `staticTranslations`. If a campaign
  has inline `data`, its own `fallback` values are used instead of fetching.
- The Express server ([server/api-server.js](server/api-server.js)) exposes
  `/api/health`, `/api/static`, `/api/translations`,
  `/api/dynamic/:year/:sheetTab[/:range]`, and cached `/api/local/*` variants
  (`/api/local/static[/:sheet]`, `/api/local/dynamic/:year/:tab[/:range]`)
  backed by Google Sheets, plus `POST /api/local/check-redirects` for bulk URL
  redirect checking. Credentials come from `GOOGLE_CLIENT_EMAIL` /
  `GOOGLE_PRIVATE_KEY` env vars, read in `server/api/google/auth.ts`.

### Utilities (`src/utils/`)

- [types.js](src/utils/types.js) — the `types` auto-import global:
  `NEWSLETTER`/`LANDINGPAGE` template types, `CSS.*` (every base stylesheet
  imported `?inline`, e.g. `CSS.NS_FRIDAY`, `CSS.LP_FRIDAY`) and `WRAPPER`
  (the MSO-compatible email HTML shell). A new base stylesheet must be
  imported and registered here.
- [ImageManager.js](src/utils/ImageManager.js) — `getImageUrl(name, version)`
  builds `appConfig.server_url + name + '?ver=N'`. The year in `server_url` is
  replaced with the current year (or `override_year`). `version` `true`
  (default) auto-increments a per-image counter in
  `localStorage['image_versions']` to bust the CDN cache; `false` → `1`; a
  string/number is used as-is.
- [domUtils.js](src/utils/domUtils.js) — `getDOMElements()` (single lookup of
  every toolbar select/button by id/class), `populateSelect`,
  `createSelectOption`, `showElements`/`hideElements`. Elements with
  `data-soft-hide` are disabled instead of hidden, with `data-disabled-hint` as
  tooltip.
- [normalizeProducts.js](src/utils/normalizeProducts.js) — see the product
  data flow above.
- [urlState.js](src/utils/urlState.js) /
  [selectionParams.js](src/utils/selectionParams.js) — sync the selection with
  GET params (see "Previewing a live campaign").
- [getTrackingUrl.js](src/utils/getTrackingUrl.js) — UTM query string for
  newsletters; `wrapFooterUrl` adds UTMs to footer links.

### Helpers (`src/helpers/`)

- **Per-country values:** `translateImage` / `translateLink` (auto-import
  globals) produce `{ type: 'relation', relyOn, placeholderPosition, value }`
  objects. [computeValue.js](src/helpers/computeValue.js) resolves them at
  render time by inserting the country slug (`relyOn: 'slug'`) or shop origin
  (`relyOn: 'origin'`) at `placeholderPosition` in `value`.
- **Links:** [getQueryLink.js](src/helpers/getQueryLink.js) — `addParams`
  (resolves a template's `links`), `addParamsProduct`, `getQueryLink`; adds
  `utm_source=newsletter`, `utm_medium=email`, `utm_campaign=<id>` for
  newsletters only.
- **Prices:** [priceFormats.js](src/helpers/priceFormats.js) (formatter per
  shop slug), [parsePrice.js](src/helpers/parsePrice.js) (applies it to a
  product's `lowPrice`/`highPrice`; PL high price is rounded up),
  [normalizePrice.js](src/helpers/normalizePrice.js),
  [priceFree.js](src/helpers/priceFree.js).
- **Output:** [wrapTemplate.js](src/helpers/wrapTemplate.js) (wrapper, `<style>`
  chunking, white-wrapper date gate),
  [optimizeHtmlImages.js](src/helpers/optimizeHtmlImages.js) +
  [swapImage.js](src/helpers/swapImage.js) (LP `.webp` swap).
- **IDs:** [incrementIds.js](src/helpers/incrementIds.js) —
  `generateNewsletterIds` / `generateLpLinks` build per-country IDs from a base
  ID.
- **Redirect checker:** [redirectChecker/](src/helpers/redirectChecker/) — UI
  popups and mapping logic for the bulk redirect check button.
- Deprecated, don't use in new code: `optimizeImage.js` (images are optimized
  at render time now), `translateImage_old.js`.

### Dev-only file writes

The custom Vite plugin
[plugins/save-campaign-plugin.js](plugins/save-campaign-plugin.js) adds
dev-server middleware (`/api/save-campaign` POST, `/api/campaigns` GET) so the
in-app campaign creator UI
([src/main/ui/createCampaign.js](src/main/ui/createCampaign.js)) can write new
campaign files directly into `campaigns/<scope>/` from the browser during
`bun run dev`.

### State

Global app state is a simple pub/sub store: `getState`/`setState` in
[src/main/state/appState.js](src/main/state/appState.js), used throughout
instead of a framework like Redux. Templates and helpers read the current
selection from it (`shop`, `country`, `template`, `ids`, `selectedCampaign`).
Most of the UI is vanilla DOM manipulation via
[src/utils/domUtils.js](src/utils/domUtils.js).

### Path aliases

Defined in both [vite.config.js](vite.config.js) and
[jsconfig.json](jsconfig.json) (keep in sync when adding new ones): `@`, `@api`,
`@components`, `@config`, `@entities`, `@helpers`, `@main`, `@data`
(→ `src/main/data`), `@handlers` (→ `src/main/handlers`), `@services`,
`@templates`, `@utils`, `@css` (→ `src/utils/css`).

Note: `@services` points at `src/services` in `vite.config.js` and at
`src/old-api/services` in `jsconfig.json`. Neither folder exists.

## Email HTML and CSS rules

- **One class per element.** Never put two classes on one tag (e.g.
  `className: 'newsletterTitle roomTitle'`) — Outlook breaks on multiple
  classes. If an element needs a variant of an existing class, give it a single
  campaign-specific class with the full style (font-size, line-height,
  font-family, font-weight + its mobile `@media` size) in the campaign's
  `additionalCss` instead of stacking classes.
- **Base CSS** lives in `src/utils/css/newsletter/<name>.css` and
  `src/utils/css/landing/<name>.css`, registered in `types.CSS` and set per
  template entry (`css: types.CSS.NS_FRIDAY` / `types.CSS.LP_FRIDAY`). Don't
  edit base CSS for a one-campaign tweak.
- **`additionalCss`** — campaign-specific CSS, set per template entry, so the
  newsletter and the landing page each get their own string (typically
  `additionalCss` and `additionalCssLp` constants at the top of the campaign
  file). It is appended after the base CSS.
- **Fonts:** newsletters use `"Open Sans", sans-serif`, landing pages use
  `"Poppins", sans-serif`.
- **Landing page selectors** are prefixed with `#newsletter` (e.g.
  `#newsletter .roomTitle`), because the LP HTML is embedded in the shop page.
  Newsletter CSS has no prefix.
- **Mobile:** the main breakpoint is `@media screen and (max-width:768px)`.
- **Spacing and containers:** use the existing utility classes instead of
  inline padding, e.g. `newsletterBottom{10..80}px` for vertical gaps and
  `newsletterContainer`, `newsletterContainer30px`, ... for side padding.

## Date-gated header / footer / wrapper

Campaign `date` (`dd.mm.yyyy`) decides which layout renders. Cutoffs are
inclusive (`>=`); older campaigns keep the old look.

- **New header top image** — from `06.10.2026` (`shouldUseNewHeader` in
  `src/templates/{Thursday,Friday}/Header.js`, sheet key `Top image src new`).
- **New header category layout** — from `12.10.2026` (same function, second
  cutoff; `Header Category N ... new` keys).
- **White wrapper** (`#ececec` → `#ffffff`) — from `12.10.2026`
  (`isWhiteWrapperCampaign` in
  [src/helpers/wrapTemplate.js](src/helpers/wrapTemplate.js)).
- **New footer (by Dmytro)** — from `21.10.2026` (`shouldUseNewFooter` in
  [src/templates/Thursday/Footer.js](src/templates/Thursday/Footer.js); uses
  [src/components/footer_new.js](src/components/footer_new.js) and `... new`
  footer sheet keys). Friday uses it unconditionally. The matching footer CSS
  (`src/utils/css/{newsletter,landing}/footer.css`) is injected by
  `templateRenderer.js` with the same `21.10.2026` cutoff (`FOOTER_CSS_CUTOFF`)
  — keep both cutoffs in sync.

## Previewing a live campaign (agent / browser)

With `bun run dev` running, open the app on localhost (`:5500`) and select the
campaign via GET params (read in [src/utils/urlState.js](src/utils/urlState.js),
mapping helpers in
[src/utils/selectionParams.js](src/utils/selectionParams.js)):

- `scope` — folder under `campaigns/`, e.g. `KamilK`
- `campaign` — campaign `startId` (numeric field in the campaign file, e.g.
  `49505` — not the filename number)
- `template` — template type, e.g. `newsletter` / `landing`
- `shop` — shop slug
- `lang` — language key from [src/config/languages.js](src/config/languages.js),
  e.g. `UK`, `BENL`, `CHFR_Mattress`
- `view` — `mobile` for mobile preview (omit for desktop)

Example:

```text
http://localhost:5500/?scope=KamilK&campaign=49505&template=newsletter&shop=UK&lang=UK
```

`shop` is case-sensitive, as shown on the shop buttons — `shop=uk` is silently
dropped. The URL is kept in sync with the UI, so selecting things in the UI and
copying the URL also works.

**Use the user's own browser — it has the campaign's products.** Products
usually live only in the user's browser (`localStorage['products']`, see the
product data flow above). The Playwright MCP plugin runs
`npx @playwright/mcp@latest` with its own empty profile, so product tiles
render as "PRODUCT NOT FOUND [ID: ...]" / `00.00`. Connect to the user's
running Chrome instead:

1. Claude in Chrome (`mcp__claude-in-chrome__*` tools), if available.
1. Otherwise Playwright MCP in extension mode: install the "Playwright MCP
   Bridge" extension in the Chrome profile that holds the products and run a
   Playwright MCP server with `--extension` (e.g. in a project `.mcp.json`,
   below). It drives the user's real tabs, so `localStorage` is theirs. Don't
   use `--cdp-endpoint` / `--remote-debugging-port` for this: Chrome 136+
   ignores them on the default profile.
1. Before reading the render, check that the products are there (snippet
   below must return `true`). If not, switch to another Chrome profile and
   check again.
1. Fall back to a product-less preview only for checks that don't involve
   products (fonts, spacing), and say so.

```javascript
JSON.parse(localStorage.products || '[]')
  .some(e => String(e.campaign_id) === '<startId>')
```

```json
{
  "mcpServers": {
    "playwright-extension": {
      "command": "npx",
      "args": ["@playwright/mcp@latest", "--extension"]
    }
  }
}
```

**Wait before reading the render:** `staticTranslations` must finish loading
first (`staticTranslations.whenReady()` in `templateRenderer.js`); until then
the output is empty/incomplete. Progress is shown as a `toast.promise` toast
([src/api/staticTranslations.js](src/api/staticTranslations.js)): wait until
"Initializing static translations..." turns into "Translations successfully
loaded" before reading the render. If it takes longer than ~10 seconds, reload
the page.
