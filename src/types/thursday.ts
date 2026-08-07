/**
 * Shared type definitions for the Thursday newsletter/landing-page template and its
 * components (`src/templates/Thursday/**`). Centralized here (rather than inside the
 * Thursday folder) so other templates can adopt/reuse the same shapes as they migrate.
 */

/**
 * A CTA (call-to-action) for a category block.
 *
 * Two mutually exclusive rendering modes:
 * - **Text link** (legacy/default): set `phrase` (or omit it for the "Shop now" fallback).
 *   Renders as an underlined `<a>` via the `CTA` component.
 * - **Image button**: set `src` to a resolved image expression (e.g. `getImageUrl('shop-sofas.png', true)`
 *   or an absolute `https://` URL). Renders via `ImageWithLink` instead of the text link.
 *   `href` overrides the category's own link when present; otherwise the category's
 *   resolved `ctaHref` is used as a fallback.
 */
export interface CtaConfig {
  /** Phrase key passed through `getPhrase()` for the text-link mode (e.g. 'Shop sofas'). Ignored when `src` is set. */
  phrase?: string;
  /**
   * 0-based index into the campaign's `catButtons` tableQuery for this CTA's label. Use it
   * when the sheet lists button copy only for the categories that have one — a leading
   * `deal` block has no button, so positional indexing would shift every label. Takes
   * precedence over `phrase` when the referenced entry exists.
   */
  ctaTextIndex?: number;
  /** Resolved image source expression for the image-button mode. Presence of a truthy `src` switches the CTA to image rendering. */
  src?: string;
  /** Explicit link for the CTA. Falls back to the category's own `href`/`ctaHref` when omitted. */
  href?: string;
  /** Alt text for the image-button mode. Falls back to `phrase` or `'Shop now'`. */
  alt?: string;
  /** Cell alignment for the CTA row. Defaults to `'center'`. */
  align?: string;
  /** CSS class for the CTA's wrapping `<td>`. Defaults to the category's container class. */
  tdClass?: string;
  /** Open the CTA link in a new tab (image-button mode only). */
  targetBlank?: boolean;
  /** Spacer CSS class (e.g. `'newsletterBottom20px'`) inserted before the CTA row. */
  spaceBefore?: string;
  /** Spacer CSS class inserted after the CTA row. */
  spaceAfter?: string;
  /**
   * Intrinsic display width (px) for the image-button mode. Set this when `src` points at
   * a higher-density export (e.g. a 2x-retina CTA PNG) — otherwise the browser renders it
   * at native file resolution instead of the intended on-page size.
   */
  width?: number | string;
  /** Intrinsic display height (px) for the image-button mode. See `width`. */
  height?: number | string;
}

/** Category title row configuration. */
export interface TitleConfig {
  /** Whether to render the title at all. */
  show?: boolean;
  /** Where the title sits relative to the category image. Defaults to `'beforeImg'`. */
  position?: 'beforeImg' | 'afterImg';
  /** Text alignment (e.g. `'left'`, `'center'`). */
  align?: string;
  /** Override CSS class (default `'newsletterTitle'`). */
  className?: string;
  /** Spacer class inserted before the title row. */
  spaceBefore?: string;
  /** Spacer class inserted after the title row. */
  spaceAfter?: string;
}

/** Category paragraph (description) row configuration. */
export interface ParagraphConfig {
  /** Whether to render the paragraph. When falsy, a spacer is rendered instead using `spaceAfter`. */
  show?: boolean;
  /** Text alignment. */
  align?: string;
  /** Placement relative to the category image/product grid. Defaults to `'beforeProducts'`. */
  position?:
    | 'beforeImg'
    | 'afterImg'
    | 'beforeProducts'
    | 'afterProducts'
    | 'underProducts'
    | 'underCategoryImage'
    | 'afterCategoryImage'
    | 'above';
  /** Spacer class inserted before the paragraph row. */
  spaceBefore?: string;
  /** Spacer class inserted after the paragraph row (also used as the standalone spacer size when `show` is falsy). */
  spaceAfter?: string;
}

/** Per-category product display options (as opposed to the product entries themselves). */
export interface ProductConfig {
  /** Show product prices. Defaults to `true`. */
  prices?: boolean;
  /** Show product names. Defaults to `true`. */
  name?: boolean;
  /** Text alignment for product cells. Defaults to `'left'`. */
  align?: string;
  /** Whether to insert vertical spacer rows between product name/price/image. Defaults to `true`. */
  gapBetweenVertical?: boolean | string | number;
  /** Accent colour applied to every product's price / "Free" label in this category. */
  priceColor?: string;
}

/**
 * A single product (or freebie) entry as authored in a campaign file. `id` is normally
 * an SA product number; when a live product lookup (`getProductById`) is configured,
 * `name`/`href`/`lowPrice`/`highPrice` are enriched server-side and only `id` + `src`
 * need to be supplied by the campaign author.
 */
export interface ProductEntry {
  /** SA product number, used to enrich the entry via `getProductById`. */
  id: string | number;
  /** Resolved image source expression (`getImageUrl(...)`, `translateImage(...)`, or an absolute `https://` URL). */
  src: string | { src: string };
  /** Product display name (rendered caps/bold — see `Product.ts`). Populated by enrichment if omitted. */
  name?: string;
  /** Short description line rendered between the name and the price (e.g. "Pendant lamp, white"). Author-supplied only — not part of the live `getProductById` enrichment, so it survives merging untouched. */
  description?: string;
  /** Product link. Populated by enrichment if omitted. */
  href?: string;
  /** Current/sale price string. */
  lowPrice?: string;
  /** Original/strikethrough price string. */
  highPrice?: string;
  /** When true, the price row renders a "Free" label followed by the struck-through normal price (see `Prices.ts`). */
  isFree?: boolean;
  /** Translated "Free" label for `isFree` entries (e.g. `'GRATIS'`). Set by `deal.ts` via `getPhrase`; unset falls back to the English `'Free'`. */
  freeText?: string;
  /** Accent colour for this entry's price / "Free" label. Falls back to the card's text colour. */
  priceColor?: string;
  /** Override spacer class rendered below this product. */
  spaceAfter?: string;
  /** When true, link to the category's own `href` instead of this product's `href`. */
  useCategoryLink?: boolean;
  /** Resolved at render time when `useCategoryLink` is set (see `Product.js`). */
  categoryLink?: string;
}

/** Tiles configuration for `type: 'small-tiles'` / `type: 'categorytiles'` categories. */
export interface TilesConfig {
  /** Background colour token used when auto-building tile image paths. */
  background?: string;
  /** Text colour token used when auto-building tile image paths. */
  text?: string;
  /** Horizontal padding (px) between tile pairs; also scales the row bottom spacer. */
  padding?: number;
  /** Extra path segment for auto-built tile image URLs. */
  dimensions?: string;
  /** Tile entries. `src` is auto-built from `background`/`text`/`dimensions`/`name` when omitted. */
  items: Array<{ name: string; href: string; src?: string }>;
}

/** Category renderer dispatch key — matches a file under `components/category/`. */
export type CategoryType =
  | 'grid'
  | 'deal'
  | 'categorytiles'
  | 'small-tiles'
  | 'monday'
  | 'wednesday'
  | 'mondaywithparagraph'
  | 'image'
  | 'OnlyImage'
  | 'image&cta'
  | 'no_products'
  | 'standard'
  | 'one_freebie'
  | 'image_with_2_product'
  | string;

/**
 * A single category block in a campaign's `categories` array. Consumed by `Categories`
 * (via `handlers/_Categories.js` normalization) and dispatched by category `type` to one
 * of the `components/category/*.js` renderers.
 */
export interface CategoryConfig {
  /** Category display name (translated via `getCategoryTitle`), also used as the title text. */
  name?: string;
  /** Category header image source expression. */
  src?: string | { src: string };
  /** Category link, resolved via `getCategoryLink`/`add_utm` and used as the fallback link for products/CTA. */
  href?: string | { href: string };
  /** Section background colour (CSS colour value). */
  background?: string;
  /** Section text colour (CSS colour value). */
  color?: string;
  /** Category renderer to dispatch to. Falls back to `default.js` on lookup failure. */
  type?: CategoryType;
  /** CTA configuration. `false`/`undefined` renders no CTA; an object switches between text and image rendering — see {@link CtaConfig}. */
  cta?: boolean | CtaConfig;
  /** Raw HTML override for the CTA row; takes precedence over `cta` entirely when set. */
  ctaHtml?: string;
  /** Top spacer size in px (rendered as `newsletterBottom{N}px`). Defaults to 60 for the first category, 35 otherwise. */
  paddingTop?: number | string;
  /** Bottom spacer class for the whole category block. Defaults to `'newsletterBottom80px'`. `0` disables it entirely. */
  spaceAfter?: string | 0;
  /** Title row configuration. */
  title?: TitleConfig;
  /** Paragraph row configuration. */
  paragraph?: ParagraphConfig;
  /** Product display options (prices/name/alignment). */
  product?: ProductConfig;
  /** Product entries for `grid`/`deal`/etc. renderers. */
  products?: ProductEntry[];
  /** Freebie rows for `type: 'deal'`. A flat `ProductEntry[]` on `products` is also accepted and auto-chunked by `freebiesPerRow`. */
  freebies?: ProductEntry[][] | { rows: ProductEntry[][] };
  /** Freebie columns per row for `type: 'deal'` when `freebies` config rows aren't supplied. 1, 2, or 3; defaults to 2. */
  freebiesPerRow?: number;
  /**
   * `type: 'deal'` only. Text alignment for the offer copy ("Offer Part 1", the code CTA,
   * the date, "Choose from:"). Defaults to `'left'`.
   */
  align?: string;
  /**
   * `type: 'deal'` only. Spacer class rendered before "Choose from:" inside the split white
   * table (`anotherTableForFreebies`). Defaults to `'newsletterBottom35px'`.
   */
  spaceBefore?: string;
  /**
   * `type: 'deal'` only. Which offer-copy row renders as the big/bold headline (0-based),
   * e.g. `1` for a `[lead-in, headline, body]` sheet layout. Unset => every row renders as
   * plain copy, exactly as before.
   */
  offerHeadlineIndex?: number;
  /**
   * `type: 'deal'` only. Render the freebies through the regular product-grid renderer —
   * same card layout, left-aligned name/description/price rows and container padding as a
   * `grid` category — instead of the narrow bespoke freebie card. Unset => unchanged.
   */
  freebiesLikeProducts?: boolean;
  /** `type: 'deal'` only. Colour for the tracked-out lead-in label above the offer headline. */
  offerLabelColor?: string;
  /** `type: 'deal'` only. Colour for the offer validity/date row. */
  offerDateColor?: string;
  /**
   * `type: 'deal'` only. Renders the offer's code CTA as a filled pill button (background +
   * radius + padding) instead of the legacy underlined `newsletterCtaCaps` text link. Unset =>
   * unchanged legacy behaviour — every existing `deal` campaign renders exactly as before.
   */
  codeButtonStyle?: 'filled';
  /** `type: 'deal'` only. Background colour for the filled code button (newsletter). Falls back to the category's own `color`. */
  codeButtonBackground?: string;
  /** `type: 'deal'` only. Text colour for the filled code button (newsletter). Defaults to `'#ffffff'`. */
  codeButtonColor?: string;
  /** `type: 'deal'` only. Filled code button width (px). Defaults to `230`. */
  codeButtonWidth?: number | string;
  /** `type: 'deal'` only. Filled code button height (px). Defaults to `48`. */
  codeButtonHeight?: number | string;
  /**
   * `type: 'deal'` only. Landing-page toast text shown after the "Code: xxxxx" copy button is
   * clicked (see `CopyCodeCTA`). Only takes effect once an `offer_code` tableQuery is wired in —
   * see `QueriesConfig.offer_code`. Defaults to `'Code copied'`.
   */
  copyCodeLabel?: string;
  /**
   * `type: 'deal'` only. Landing-page: use the floating corner-notification "copied" alert
   * (ported from KrBiranowski's Monday `copyCodeWeb: true` campaigns, e.g.
   * `campaigns/KrBiranowski/010_2026-08-11-free-kids.js`) instead of the default inline
   * tooltip. Only takes effect alongside `offer_code`.
   */
  copyCodeWeb?: boolean;
  /**
   * `type: 'deal'` only. When `anotherTableForFreebies` is true, background colour for the
   * split-off "Choose from:" + freebie grid table (rather than inheriting the category's
   * `background`, e.g. a maroon offer field). Defaults to `'#ffffff'`.
   */
  freebiesBackground?: string;
  /**
   * `type: 'deal'` + `freebiesLikeProducts` only. Text colour for the freebie product cards.
   * Defaults to `'#242222'` — override when `freebiesBackground` is dark, otherwise the card
   * text renders near-invisible.
   */
  freebiesTextColor?: string;
  /**
   * `type: 'deal'` only. When true, "Choose from:" and the freebie grid (and everything the
   * category renders after them — CTA, bottom spacer, divider line) move into their own
   * `<table>` with `freebiesBackground` instead of inheriting the offer section's own
   * `background` — e.g. a fully white area under a maroon offer field, with no colour strip
   * bleeding back in below it. The existing top-level `spaceAfter` (below) still applies —
   * it lands inside this table since it's left open, so there's no separate "space after"
   * field to set here. No-op (and fully backward-compatible — freebies render inside the
   * same table as before) when unset.
   */
  anotherTableForFreebies?: boolean;
  /** Tile entries for `type: 'small-tiles'`/`'categorytiles'`. */
  tiles?: TilesConfig;
  /** Divider rule rendered after the category block. */
  line?: { show?: boolean; insideContainer?: boolean; src?: string };
  /** Override container CSS class (default `'newsletterContainer'`). */
  container?: string;
  /** Extra class applied to the category image `<td>`. */
  tdClass?: string;
  /** Whether the product grid wraps in the container class. Defaults to `true`. */
  insideContainer?: boolean;
  /** Which side the big/category image sits on for asymmetric layouts (`1big-2vertical`, `4prods-cat`). */
  imageSide?: 'left' | 'right';
  /** For `deal` freebie grids: align 2-column images toward the row centre instead of stacking left-aligned. */
  alignToSide?: boolean;
  /** Horizontal gap class between product columns, or `false`/`0` to disable. */
  gapBetweenHorizontal?: boolean | string | number;
  /** Per-country offer text overrides for `type: 'deal'`, keyed by lowercase country code, each either a string or `{ ns, lp }`. */
  offerTextOverrides?: Record<string, string | string[] | { ns?: string | string[]; lp?: string | string[] }>;
  /** Per-shop name overrides (JSON-serialized as-is by the MCP generator). */
  nameOverrides?: string[];
  /** Extra inline CSS appended to the category's outer `<table>` style attribute. */
  styles?: string;
  /** `1big-2vertical` category type: additional big-image sources (`src1`/`src2`/`src3`). */
  [srcKey: `src${number}`]: string | undefined;
  /** Legacy per-category overrides, superseded by `product.prices`/`product.name`. */
  showPrices?: boolean;
  showNames?: boolean;
  spaceBeforeProducts?: string;
}

/**
 * Visual/copy configuration for the hero title overlay rendered over/near the top image.
 * Only rendered when both `links.TopImageTitle_href` and `links.TopImageTitle_src` are set.
 */
export interface TopImageTitleData {
  /** Title text colour (landing-page rendering only; the newsletter rendering is a baked image). */
  color?: string;
  /** Section background colour (landing-page rendering only). */
  backgroundColor?: string;
  /** Which two-line title layout template to use (landing-page rendering only). */
  type?:
    | 'up_to'
    | 'up_to_bigger'
    | 'line2bigger'
    | 'standard'
    | 'standard_inverted'
    | 'twoSameLines'
    | 'singleLine'
    | 'halloween';
  /** Override container CSS class. */
  container?: string;
}

/**
 * Countdown-timer / "Inside" section configuration. Rendered when `Inside.type === 'timer'`
 * and `timer.deadline` is set (see `handlers/_Timer.js`).
 */
export interface InsideConfig {
  /** Must be `'timer'` for the section to render at all. */
  type: 'timer';
  /** Timer digit/label colour. */
  color: string;
  /** Timer section background colour. */
  backgroundColor: string;
  /** Background colour for each individual time-unit box. Defaults to `backgroundColor`. */
  unitBackground?: string;
  /** Where the timer renders relative to the category list. Defaults to `'beforeCategories'`. */
  position?: 'beforeCategories' | 'afterCategories' | 'underCategories';
}

/** Countdown deadline/freebie image paired with {@link InsideConfig}. */
export interface TimerConfig {
  /** Deadline date, formatted `YYYY-MM-DD` (rendered as `${deadline}T23:59:00` in the market's own timezone). */
  deadline: string;
  /** Optional image (or `{src}` wrapper) shown below the CTA, e.g. a "choose your free gift" teaser. */
  freebies?: string | { src: string };
}

/** Intro/lede paragraph section configuration. */
export interface IntroConfig {
  /** Only `'paragraph'` is currently supported; anything else renders nothing. */
  type?: 'paragraph';
  /** Paragraph text alignment. */
  alignment?: string;
  /** Text colour. */
  color?: string;
  /** Section background colour. */
  backgroundColor?: string;
  /** Where the intro renders relative to the top image, the freebies/deal category, or the timer section. Defaults to `'afterTopImage'`. */
  position?: 'afterTopImage' | 'afterFreebies' | 'afterTimer';
  /** Spacer class before the intro text. */
  spaceTop?: string;
  /** Spacer class after the intro text. */
  spaceBottom?: string;
  /** Override container CSS class. */
  container?: string;
  /** Optional "Shop now" CTA rendered below the intro text, linking to `links.Intro_cta_href` (or the first category's link as a fallback). */
  cta?: { show?: boolean; spaceBefore?: string; spaceAfter?: string };
  /** CTA link colour, when it should differ from the intro's body `color` (e.g. an accent-coloured "Shop now"). */
  ctaColor?: string;
}

/**
 * Campaign-level `links` map. Keys are conventionally produced via `translateLink()`,
 * `translateImage()`, or `getImageUrl()` in the campaign file. Not exhaustive — any
 * additional `TopImage_src_N` (N = 1, 2, 3, ...) key is picked up automatically by
 * `handlers/_TopImage.js` and rendered in ascending numeric order after the primary image.
 */
export interface LinksConfig {
  /** Link for the hero title overlay. Also reused as the "Get code" CTA link inside `type: 'deal'` categories. */
  TopImageTitle_href?: string;
  /** Image for the hero title overlay (landing-page rendering). */
  TopImageTitle_src?: string;
  /** Link for the plain hero image. */
  TopImage_href?: string;
  /** Primary hero image source. */
  TopImage_src?: string;
  /** Link for the first "shop limited-time deals" footer banner. */
  Banner_1?: string;
  /** Image for the first footer banner. */
  Banner_1_Image?: string;
  /** Link for the second footer banner. */
  Banner_2?: string;
  /** Image for the second footer banner. */
  Banner_2_Image?: string;
  /** Link for the countdown timer section. */
  Timer_href?: string;
  /** Explicit link for the intro's "Shop now" CTA; falls back to the first category's resolved link. */
  Intro_cta_href?: string;
  /** Additional stacked hero images (`TopImage_src_1`, `TopImage_src_2`, ...), all sharing `TopImage_href`. */
  [key: string]: string | undefined;
}

/**
 * Translated copy resolved from `tableQueries`, keyed by query `name`. Each value is
 * typically an array of strings (one per configured spreadsheet row), except `categories`/
 * `categoryLinks`/`paragraphs` which are indexed in parallel with the `categories` array.
 */
export interface QueriesConfig {
  /** `[title1, title2]` for the hero title overlay. */
  TopImageTitle?: string[];
  /** Per-category translated names, indexed like `categories`. */
  categories?: string[];
  /** Per-category translated links, indexed like `categories`. */
  categoryLinks?: string[];
  /**
   * Per-category translated descriptions, indexed like `categories`. Each string may
   * contain `\n` line breaks to render as multiple stacked paragraph lines instead of
   * one — `Categories.ts` splits on `\n` before rendering, so single-line cells behave
   * exactly as before and no schema change is needed for multi-line descriptions.
   */
  paragraphs?: string[];
  /** Offer copy lines (2, 3, or 6 entries — 6 enables the multi-code "six offers" layout). */
  offer?: string[];
  /** `[validityText]` shown below the offer CTA. */
  offer_date?: string[];
  /** `[ctaLabel]` for the offer's code CTA (e.g. "Get the code"), preferred over the generic `getPhrase('Get code')`. */
  offer_cta?: string[];
  /**
   * `[rawCodeLine]` for the offer's raw sheet line, e.g. `"Code: freelampUK26"` — distinct from
   * `offer_cta` (the button's own label). Landing pages render this through the click-to-copy
   * `CopyCodeCTA` button (see `codeButtonStyle`/`deal/offer.ts`); unset => unchanged legacy
   * `offerItems[2]` text-row fallback.
   */
  offer_code?: string[];
  /** `[smallPrint]` rendered under the freebie grid, e.g. how/when the free gift is chosen. */
  free_subtitle?: string[];
  /** Per-category CTA labels ("Shop sofas", ...), indexed like `categories`. Preferred over `cta.phrase`/`getPhrase`. */
  catButtons?: string[];
  /** Small-print condition lines; also reused verbatim as the footer conditions text. */
  condition?: string[] | string;
  /**
   * Intro paragraph text. Any array length is supported (no fixed 2-line cap): a 1-item
   * array renders as a single paragraph (no title); a 2+ item array renders `[0]` as a
   * bolded title above one paragraph row per remaining item — e.g. `[title, subtitle, body]`
   * for a 3-line intro. See `Intro.ts`.
   */
  intro?: string[];
  /** `[title, subtitle]` for the countdown timer section. */
  timer?: string[];
  /** Any other named query range configured in the campaign file. */
  [key: string]: string[] | string | undefined;
}

export type RenderType = 'newsletter' | 'landing';

/**
 * Props passed to every `components/category/*.ts` renderer's `render()` function.
 * Each renderer only reads the subset it needs (see the individual file for which
 * fields actually apply) — this type is intentionally broad rather than a per-type
 * discriminated union, since the dispatch in `Categories.ts` is a dynamic `import()`
 * keyed on `category.type` and can't narrow statically.
 */
export interface CategoryRenderProps {
  products?: ProductEntry[];
  tiles?: TilesConfig;
  freebies?: ProductEntry[][] | { rows: ProductEntry[][] };
  showPrices?: boolean;
  showNames?: boolean;
  gapBetweenHorizontal?: boolean | string | number;
  gapBetweenVertical?: boolean | string | number;
  align?: string;
  queries?: QueriesConfig;
  insideContainer?: boolean;
  color?: string;
  id?: number;
  imageSide?: 'left' | 'right';
  freebiesPerRow?: number;
  categoryHref?: string;
  getCategoryLink?: (href: string) => string;
  getCategoryTitle?: (name: string) => string;
  links?: LinksConfig;
  getPhrase?: (key: string) => string;
  renderType?: RenderType;
  country?: string;
  offerTextOverrides?: CategoryConfig['offerTextOverrides'];
  category?: CategoryConfig;
  container?: string;
  alignToSide?: boolean;
}

/** Product lookup used to enrich `ProductEntry`s that only specify `id`/`src`. */
export type GetProductById = (
  id: string | number,
  src?: string
) => Promise<Partial<ProductEntry> | null>;

/** Full prop set accepted by the Thursday template function (`template.js`). */
export interface ThursdayTemplateProps {
  /** Campaign links map. */
  links: LinksConfig;
  /** Resolved translation queries. */
  queries: QueriesConfig;
  /** Shop record (origin, slug, languages) for the current market. */
  shop: { origin?: string; slug?: string };
  /** Current market/language code (e.g. `'CHDE'`, `'UK'`). */
  country: string;
  /** Which surface is being rendered. */
  type: RenderType;
  /** Campaign/newsletter DOM id, forwarded to header/footer. */
  id: string;
  /** Category blocks to render, in order. */
  categories: CategoryConfig[];
  /** Root table background colour. */
  background: string;
  /** Root table text colour. */
  color: string;
  /** Countdown timer section config. */
  Inside?: InsideConfig;
  /** Intro/lede section config. */
  intro?: IntroConfig;
  /** Countdown deadline/freebies data, paired with `Inside`. */
  timer?: TimerConfig;
  /** Hero title overlay visual config. */
  TopImageTitle_data?: TopImageTitleData;
  /** Hero image wrapper config (currently only `container`). */
  TopImage_data?: { container?: string };
  /** Header copy lookup. */
  getHeader: (key: string) => string;
  /** Footer copy lookup. */
  getFooter: (key: string) => string;
  /** Resolves/decorates a category or product href for the current market. */
  getCategoryLink: (href: string) => string;
  /** Translates a category display name. */
  getCategoryTitle: (name: string) => string;
  /** General UI phrase lookup (e.g. `'Shop now'`, `'Free'`). */
  getPhrase: (key: string) => string;
  /** Live product lookup used to enrich `ProductEntry`s that only specify `id`/`src`. */
  getProductById?: GetProductById;
  /** Appends UTM tracking parameters to a URL. */
  add_utm: (href: string) => string;
}
