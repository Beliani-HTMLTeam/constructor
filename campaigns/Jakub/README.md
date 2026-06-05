# Jakub's Campaigns — Handover (2026-06-05)

---

## Active Campaigns

### 012 — June Peak Third · sends 2026-06-15
**File:** `012_2026-06-15-june-peak-third.js`  
**Translation sheet:** `15.06.26 - Beliani Birthday Third`  
**IDs:** startId `44240` · issueCardId `482734` · lpId `30432`

Outdoor Beliani Birthday campaign. 14 categories: Lounge Sets, Dining Sets, Balcony Furniture, Sun Loungers, Benches, Swings, Outdoor Kitchen, Garden Storage, Parasols, Plant Pots, Fire Pits, Outdoor Rugs, Outdoor Textiles, Patio Heaters.

- First category is a **GIF** (`20260615_gif.gif`). `optimizeImg: false` — do not remove it, the GIF will get converted to WebP and break.
- The GIF paragraph uses `paragraph.textOverrides` for DE/AT/CHDE — text was too campaign-specific for the global sheet.
- `soonEndingBanner: true` on both Newsletter and Landing.
- `categoryImageTdClass: 'newsletterContainer'` on both templates.
- Banner_1 and Banner_2 have per-country overrides for **DK** (different LP and image) — requested by Justyna.
- Several categories have `nameOverrides` for specific countries (HU, FI, IT, CZ, PT).

---

### 013 — Dining Furniture · sends 2026-06-17
**File:** `013_2026-06-17-dining-furniture.js`  
**Translation sheet:** `17.06.26 - Dining Room`  
**IDs:** startId `44593` · issueCardId `492459` · lpId `30586`

- Full-width header image (no title, no CTA — decorative opener)
- **Dining Tables** — GIF + 4 products with names & prices: SAVORY (568039), CARLEA (609306), FINLEY (698563), MERE (609878)
- **Chairs** — 4 products: LYNN (92127), DALBO (575248), MINA (403755), ONECO (660718)
- **Dinnerware** — 4 products: CINNAMON (677960), NUTMEG (705507), HOPS (721933), SESAME (394733)
- **Kitchen Trolleys** — 4 products: VENETA (195790), BOVES (224105), MELE (234813), GENOA (683043)
- **"This may also interest you"** — `categorytiles` type, 4 tiles: Kitchen Knives, Pans and Pots, Glassware, Serveware

Banners use `lp26-06-04` and `lp26-06-03` (Beliani Birthday sale banners).

---

### 014 — Free Bed Linen · sends 2026-06-22
**File:** `014_2026-06-22-mon-free-bed-linen.js`  
**Translation sheet:** `22.06.26 - Free Bed Linen`  
**IDs:** startId `44817` · issueCardId `493899` · lpId `30681`

- **Deal section** (`copyCodeWeb: true`) — 4 freebie products with a `size` field (renders below the product name)
- **Intro** — after the deal section (`position: 'afterFreebies'`), left-aligned, links to living room
- 4 brand sections — PASCO, LYNWOOD, OPOCO, BRADLEY — each with 4 products and prices

Brand categories use `nameOverride` (singular) so the name is never looked up in the sheet, and `skipLinkTranslation: true` so no missing-key toasts fire.

Banners: `lp26-06-04` and `lp26-06-10`. `soon_banners: true`.

---

## Shared File Changes (experimental branch only)

Not on dev.

---

### Outlook width fixes

Outlook ignores `max-width` on tables and `width: 100%` on images, so the layout stretches to full window width. Fixed in:

- **`src/templates/JakubSrc/monday_newsletter/template.js`** — MSO conditional wrapper around the main table; `width: 100%` removed from inline style.
- **`src/templates/JakubSrc/monday_newsletter/handlers/_SoonEndingBanners.js`** — same MSO wrapper around the soon-ending banners table.
- **`src/templates/JakubSrc/monday_newsletter/components/SoonEndingBanner.js`** — image `width="100%"` → `width="650"` with `max-width: 100%` in style.
- **`src/templates/JakubSrc/monday_newsletter/components/ImageWithLink.js`** — `width="100%"` added to the `<img>` tag.

---

### Monday template changes

**`template.js`**
- `categoryImageTdClass` prop added, passed down to `CategoriesHandler`.
- `countrySlug` passed to `IntroHandler`.
- `country` passed to `SoonEndingBannersHandler`.
- `conditionOverrides` — per-country map to override `queries.condition` in the footer.

**`handlers/_Categories.js`**
- `categoryImageTdClass` support added.
- `skipLinkTranslation` — calls `getCategoryLink` with `suppressWarning: true`, no missing-key toast.
- `hrefOverrides` — per-country category link.
- `nameOverride` (singular) — static name for all countries, priority over `nameOverrides`.
- `ctaText` resolved from `cta.textOverrides[country]`.

**`handlers/_Intro.js`**
- `titleOverrides` / `titleOverride` — overrides the first line of intro text per country or for all countries.

**`handlers/_TopImageTitle.js`**
- `TopImageTitle_data.textOverrides` — overrides title text per country.

**`components/Categories.js`**
- `categoryImageTdClass` passed down to `renderCategory`, used as fallback for `tdClass` on category images.
- Paragraph text resolves `category.paragraphText` first (from `paragraph.textOverrides`), then `queries.paragraphs[id]`.
- `copyCodeWeb` and `offerTextOverrides` passed through to `renderBody`.

**`components/CopyCodeCTA.js`**
- `CopyCodeCTA` — reworked with tooltip above the icon (fade animation), `color` and `label` params. Label comes from `getPhrase('Copy code')`.
- `CopyCodeWebNotification` — new component, fixed-position notification sliding in from top-right of the window. Same params, also exported.

**`components/category/deal.js`**
- `copyCodeWeb`, `country`, `offerTextOverrides` params added.
- `offerTextOverrides` — per-country override for offer text rows, supports `ns`/`lp` sub-keys for newsletter vs landing.
- CHFR falls back to the bubble variant (`copyCode`) even when `copyCodeWeb` is set.

**`components/category/deal/offer.js`**
- `copyCodeWeb` / `showCopyCodeWeb` added throughout.
- `copyCodeColor` — from the campaign category config.
- `copyCodeLabel` — from `getPhrase('Copy code')`.
- `offerTexts` — overrides individual offer text rows, takes priority over sheet values.

**`components/category/deal/grid.js`**
- Freebie cards render `product.size` below the product name when the field is set.

---

### Other shared files

**`src/helpers/optimizeHtmlImages.js`**
- WebP exclusion changed from `.gif` extension check to `data-no-webp` attribute. GIFs are no longer skipped automatically — add `data-no-webp` to skip any image.

**`src/helpers/getCountriesWithOverrides.js`** *(new)*
- Collects all country slugs that have overrides anywhere in a template config (nameOverrides, hrefOverrides, tile hrefOverrides, intro titleOverrides, link overrides).

**`src/helpers/productLookup.js`** *(new)*
- Looks up a product name from the `localStorage` products cache by `startId` + `productId`. Handles compressed and uncompressed formats.

**`src/entities/Campaign.js`**
- `accent` field added — hex color for the campaign highlight in the selector, e.g. `accent: '#f5ba87'`.
- `optimizeImg` bug fixed — was using `||` so `optimizeImg: false` would resolve to `true`. Changed to `??`.

**`src/api/translations.js`**
- `clearQueries()` added — clears the in-memory dynamic translations cache, called after a successful purge.
- Fires `app:translations-ready` event and sets `window.__appTranslationsReady = true` once static translations are loaded.
- Leftover `console.log` calls removed.

**`src/main/handlers/handlers.js`**
- `getCategoryLink` accepts `{ suppressWarning: true }` — skips the missing-key toast, used by `skipLinkTranslation`.

**`src/templates/Thursday/components/category/small-tiles.js`** and **`src/templates/JakubSrc/monday_newsletter/components/category/small-tiles.js`**
- Import changed from relative path to `@utils/ImageManager.js` alias.

---

## Template Features Reference

### Per-country overrides in categories

```js
{
  nameOverride: 'BRAND',                        // same name for all countries, never goes to sheet
  nameOverrides: { hu: 'Székek' },              // name per country
  hrefOverrides: { de: 'https://...' },         // link per country
  skipLinkTranslation: true,                    // skip sheet link lookup, no missing-key toasts
  paragraph: { textOverrides: { de: '...' } },  // paragraph text per country
  cta: { textOverrides: { fi: 'Tutustu' } },    // CTA text per country
}
```

Name resolution order: sheet query → `nameOverride` → `nameOverrides[country]` → `getCategoryTitle` → `name`

### `categoryImageTdClass`

```js
categoryImageTdClass: 'newsletterContainer'
```
Applies a CSS class to the `<td>` of every category image. Individual categories can still override with `category.tdClass`.

### Product `size` in freebie deals

```js
{ id: '247876', src: getImageUrl('...', true), size: '155 x 220 cm' }
```
Renders below the product name.

### Copy Code — two variants

- `copyCode: true` — tooltip above the icon, anchored in the email
- `copyCodeWeb: true` — notification sliding in from top-right of the browser window

`copyCodeWeb` takes priority if both are set. Label comes from `getPhrase('Copy code')`.

### `intro.position: 'afterFreebies'`

Renders the intro after the first `type: 'deal'` category instead of after the top image.
