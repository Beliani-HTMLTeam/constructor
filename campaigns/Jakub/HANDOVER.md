# Jakub's Campaigns — Handover

Last updated: 2026-06-29 · Branch: `experimental`

Status of the campaigns and the one uncommitted Thursday edit they rely on. Campaigns can be found in Jakub's archive 

---

## Open items (read first)

- **019 — Summer Garden Parties (07-15):** mostly finished but **not approved yet**. Two category titles are still open: "Fire Pits & Grills" (Figma calls it "BBQ Grills") and "Parasols" (Figma calls it "Parasols and Gazebos"). Check the final wording with **Justyna Chmielewska** and whether those titles need sheet translations.
- **020 — Chairs (07-22):** **unfinished** and not approved. Needs finishing, testing and sign-off before it can be scheduled.
- **015 — Bedroom Styling (07-08):** has a handful of per-country tile URL overrides (CZ/SK) that depend on an edit to the shared Thursday template. That edit is **not committed** — so if you want the overrides to render, you'll need to re-apply the shared-template change yourself. See [The 015 tile-URL overrides](#the-015-tile-url-overrides) below.
- **August PEAK (016 / 017 / 018):** the **landing page uses an MP4, the newsletter keeps the GIF** — wired up through `srcByType` (see [Video on the landing page](#video-on-the-landing-page)). Also: the two-line discount circles were re-rendered and re-uploaded to the file server (text centred) — double-check no country got missed.

---

## Campaigns

| #   | Send       | File                                        | Translation sheet                    | startId | issueCardId | lpId  |
| --- | ---------- | ------------------------------------------- | ------------------------------------ | ------- | ----------- | ----- |
| 015 | 2026-07-08 | `015_2026-07-08-bedroom-styling.js`       | `2026::08.07.26 - Bedroom Styling` | 44859   | 498452      | 30719 |
| 016 | 2026-08-03 | `016_2026-08-03-august-peak-start.js`     | `03.08.26 - August Peak Start`     | 44923   | 500866      | 30757 |
| 017 | 2026-08-10 | `017_2026-08-10-august-peak-second.js`    | `10.08.26 - August Peak Second`    | 45051   | 501835      | 30835 |
| 018 | 2026-08-17 | `018_2026-08-17-august-peak-third.js`     | `17.08.26 - August Peak Third`     | 45085   | 501874      | 30854 |
| 019 | 2026-07-15 | `019_2026-07-15-summer-garden-parties.js` | `15.07.26 - Summer garden parties` | 452283  | 432224      | 30222 |
| 020 | 2026-07-22 | `020_2026-07-22-chairs.js`                | `22.07.26 - Chairs`                | 456783  | 431254      | 30259 |

### 015 — Bedroom Styling (07-08)

Runs on `templates.Thursday`, not the Monday template. The Rugs, Mirrors and Ottomans tiles carry CZ/SK `hrefOverrides` that depend on the uncommitted edit in [The 015 tile-URL overrides](#the-015-tile-url-overrides).

### 016 — PEAK August Start (08-03)

The cleanest reference for the August PEAK look: GIF opener on the newsletter, MP4 on the landing page (`srcByType.landing`), 14 `grid` categories, CHDE `conditionOverrides`, `soonEndingBanner` on the newsletter only.

### 017 — PEAK August Second (08-10)

Room-based variant (Outdoor, Living Room, Dining Room, Bedroom, Bathroom, Office, Hallway, Kids). Same GIF/MP4 setup, `nameOverrides` + `hrefOverrides` on Outdoor/Office/Kids.

### 018 — PEAK August Third (08-17)

Same category structure as 016, with `nameOverrides` across many categories and the CHDE `conditionOverrides`.

### 019 — Summer Garden Parties (07-15)

Monday template. Dining sets, Outdoor kitchen, Fire Pits & Grills, Parasols, plus a closing tile row. Mostly finished; two titles still need Justyna's sign-off (see open items).

### 020 — Chairs (07-22)

Monday template. Fabric / Wooden / Plastic / Bar chairs, plus a closing tile row. Unfinished and unapproved — don't schedule it as-is.

---

## Template notes

### Video on the landing page

How the August PEAK campaigns keep the animated opener as a GIF in the newsletter but play an MP4 on the landing page. `ImageWithLink` renders a `<video>` instead of `<img>` when the template `type` is `landing` and the source is an `.mp4`, and falls back to the GIF/image otherwise. Driven from the category with `srcByType`:

```JavaScript
{
  src: translateImage({ value: '20260803_gif.gif' }),       // newsletter gets the GIF
  srcByType: { landing: translateImage({ value: '20260803_mp4.mp4' }) }, // landing autoplays the mp4
}
```

The handler picks `srcByType[type]` when present, otherwise `src`. The video is `autoplay muted loop playsinline`. This is part of the Monday template (`JakubSrc`).

---

## Uncommitted edit

One change is left in the working tree, not committed — re-apply it if you need the behaviour, and revert before committing anything else so it doesn't leak into other campaigns.

### The 015 tile-URL overrides

The Thursday template doesn't support per-country links on `categorytiles` tiles out of the box. The CZ/SK URLs on Rugs/Mirrors/Ottomans need that support added in the shared Thursday files (and remember: avoid leaving behaviour changes in Dima's shared files — revert after previewing).

**`src/templates/Thursday/handlers/_Categories.js`** — in `normalizeCategoryForRender`, take `country` and resolve each tile's `hrefOverrides[country]` into a `resolvedHref`:

```js
const countrySlug = String(country ?? '').toLowerCase();

const tilesOverride = Array.isArray(category?.tiles)
  ? category.tiles.map((tile) => {
      const hrefOverride = tile?.hrefOverrides?.[countrySlug];
      return hrefOverride ? { ...tile, resolvedHref: add_utm(hrefOverride) } : tile;
    })
  : null;

return {
  ...category,
  href,
  name,
  src,
  ...(tilesOverride !== null && { tiles: tilesOverride }),
};
```

Make sure `country` is passed into `normalizeCategoryForRender` from `CategoriesHandler` (it's already in scope).

**`src/templates/Thursday/components/category/categorytiles.js`** — prefer the resolved per-country link when one exists:

```js
const href = item.resolvedHref ?? (getCategoryLink ? getCategoryLink(item.href) : item.href);
```

The tile config in the campaign file (`hrefOverrides: { cz: '...', sk: '...' }`) is already in place; it does nothing until the template reads it. The same pattern is already committed in the Monday template, so the cleaner long-term fix is to port it into Thursday properly.
