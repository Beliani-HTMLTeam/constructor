import { renderFreebieGrid } from './deal/grid.js';
import { renderOfferSection, renderChooseFromRow } from './deal/offer.js';
import { render as renderProductGrid } from './grid.js';
import { Paragraph } from '../Paragraph.js';
import { Space } from '../Space.js';
import { safePhrase } from '../../helpers/safePhrase.js';
import type { CategoryRenderProps, ProductEntry } from '@/types/thursday';

/** Flattens `freebies` rows (or a plain `products` list) into a single ordered list. */
const flattenFreebies = (
  freebies: CategoryRenderProps['freebies'],
  products: ProductEntry[] | undefined
): ProductEntry[] => {
  const rows = !Array.isArray(freebies) && Array.isArray(freebies?.rows)
    ? freebies.rows
    : Array.isArray(freebies)
      ? freebies
      : [];

  const fromRows = rows.flat().filter(Boolean);
  return fromRows.length > 0 ? fromRows : (Array.isArray(products) ? products : []);
};

/** Muted label colour used inside the white `anotherTableForFreebies` table — the category's own `color` is meant for the maroon offer field and would be invisible here. */
const FREEBIES_TABLE_TEXT_COLOR = '#8C837E';

/** Product-name colour for freebie cards rendered on the light split table. */
const FREEBIES_TABLE_PRODUCT_TEXT_COLOR = '#242222';

/**
 * `type: 'deal'` — the voucher/freebie offer block: offer copy + code CTA
 * (`deal/offer.ts`), followed by a "choose from" freebie grid (`deal/grid.ts`) when
 * `products`/`freebies` are supplied.
 */
export const render = ({
  freebies,
  products,
  queries,
  color,
  links,
  getPhrase,
  renderType,
  categoryHref,
  freebiesPerRow = 2,
  country,
  offerTextOverrides,
  category,
  insideContainer,
  container,
  gapBetweenHorizontal,
}: CategoryRenderProps): string => {
  const countrySlug = String(country ?? '').toLowerCase();
  const offerTextOverrideRaw = offerTextOverrides?.[countrySlug];
  const resolved = typeof offerTextOverrideRaw === 'object' && !Array.isArray(offerTextOverrideRaw)
    ? offerTextOverrideRaw[renderType === 'newsletter' ? 'ns' : 'lp']
    : offerTextOverrideRaw;
  const offerTexts = typeof resolved === 'string' ? [resolved] : (resolved ?? null);

  const hasProducts = Array.isArray(products) && products.length > 0;
  const hasFreebiesRows =
    (Array.isArray(freebies) && freebies.length > 0) ||
    (!Array.isArray(freebies) && Array.isArray(freebies?.rows) && freebies.rows.length > 0);
  const hasDealProducts = hasProducts || hasFreebiesRows;

  const align = category?.align ?? 'left';
  const useAnotherTable = Boolean(category?.anotherTableForFreebies) && hasDealProducts;
  // Small print rendered under the freebie grid, e.g. "Your lamp is chosen in a pop-up after
  // the code is entered at step 3 of checkout." Comes from its own `free_subtitle` tableQuery.
  const freeSubtitle = Array.isArray(queries?.free_subtitle) ? queries.free_subtitle[0] : undefined;

  let html = '';

  html += renderOfferSection({
    queries,
    renderType,
    links,
    getPhrase,
    showChooseFrom: hasDealProducts,
    // When splitting into a separate white table, "Choose from:" moves there too (see
    // below) instead of rendering inline in the maroon offer table.
    chooseFromInline: !useAnotherTable,
    offerTexts,
    color,
    align,
    offerHeadlineIndex: category?.offerHeadlineIndex,
    offerLabelColor: category?.offerLabelColor,
    offerDateColor: category?.offerDateColor,
    codeButtonStyle: category?.codeButtonStyle,
    codeButtonBackground: category?.codeButtonBackground,
    codeButtonColor: category?.codeButtonColor,
    codeButtonWidth: category?.codeButtonWidth,
    codeButtonHeight: category?.codeButtonHeight,
    copyCodeLabel: category?.copyCodeLabel,
    copyCodeWeb: category?.copyCodeWeb,
  });

  if (hasDealProducts) {
    // `freebiesLikeProducts` renders the freebies through the normal product-grid renderer
    // rather than the narrow bespoke freebie card, so they pick up the exact same card
    // layout, left-aligned name/description/price rows and container padding as a regular
    // `grid` category — which is what the design asks for. `isFree` swaps the price line for
    // the "Free" label (see Prices.ts). Unset => the original freebie grid, unchanged.
    const freebieGridHtml = category?.freebiesLikeProducts
      ? renderProductGrid({
          products: flattenFreebies(freebies, products).map((product) => ({
            priceColor: category?.product?.priceColor,
            ...product,
            isFree: true,
            // Same translated label the bespoke freebie grid uses below — without this the
            // card renders the hardcoded English "Free" on every market.
            freeText: getPhrase ? safePhrase(getPhrase, 'Free', 'Free') : 'Free',
          })),
          showPrices: true,
          showNames: true,
          // Mirror the regular `grid` category's own default (`Categories.ts`) rather than
          // hardcoding `false` — with `false`, `Product.ts` drops BOTH the image→name gap and
          // the card's bottom spacer, so freebie rows sit flush against each other (side
          // padding present, nothing underneath). `freebiesLikeProducts` means "render exactly
          // like a product card", and product cards have those gaps.
          gapBetweenVertical: category?.product?.gapBetweenVertical ?? true,
          gapBetweenHorizontal,
          // Respect the category's own product alignment instead of pinning to 'left', so a
          // centred freebie design isn't unreachable. Defaults to 'left' as before.
          align: category?.product?.align ?? 'left',
          insideContainer,
          container,
          color: category?.freebiesTextColor ?? FREEBIES_TABLE_PRODUCT_TEXT_COLOR,
        })
      : renderFreebieGrid({
          freebies,
          products,
          color,
          freeText: getPhrase ? safePhrase(getPhrase, 'Free', 'Free') : 'Free',
          categoryHref,
          freebiesPerRow,
        });

    // Small print under the grid — inherits the split table's own (light) background when
    // `anotherTableForFreebies` is on, so it needs the dark text colour rather than the
    // offer field's.
    const freeSubtitleHtml = freeSubtitle
      ? Space({ insideTr: true, className: 'newsletterBottom20px' }) +
        `<tr><td>${Paragraph({
          text: freeSubtitle,
          insideTable: true,
          tableContainer: true,
          align,
          className: 'newsletterFreeSubtitle',
          spanStyle: `color: ${useAnotherTable ? FREEBIES_TABLE_TEXT_COLOR : (color ?? '#000000')};`,
        })}</td></tr>`
      : '';

    if (useAnotherTable) {
      // Close the offer-copy table (maroon field, etc.) and open a fresh full-width table for
      // "Choose from:" + the freebie grid, so its background can differ from the surrounding
      // offer section — a per-tile white card isn't enough when the design wants the *whole*
      // area (gutters, "Choose from:", and everything below down to the category's own bottom
      // spacer) to read as white, with no colour bleeding back in. Deliberately left OPEN:
      // Categories.ts keeps appending into whatever table is "current" (the CTA row, the
      // spaceAfter gap, the divider line) — closing it here again would leave that trailing
      // content in a tableless/broken state, and reopening it in the category's original
      // background would put a colour strip right back under the grid, which is the exact
      // thing being fixed. Categories.ts's own closing `</table>` closes this one.
      const freebiesBackground = category?.freebiesBackground ?? '#ffffff';

      // Note: no explicit "space after" is added here for the grid's own bottom padding —
      // this table is deliberately left open (see below), so Categories.ts's existing
      // generic `category.spaceAfter` bottom-spacer (applied to every category type, not
      // just 'deal') lands inside it and already provides exactly that, for free.
      html += `
        </table>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: ${freebiesBackground};">
          ${Space({ insideTr: true, className: category?.spaceBefore ?? 'newsletterBottom35px' })}
          ${renderChooseFromRow({ getPhrase, color: FREEBIES_TABLE_TEXT_COLOR, align })}
          ${Space({ insideTr: true, className: 'newsletterBottom25px' })}
          ${freebieGridHtml}
          ${freeSubtitleHtml}
      `;
    } else {
      html += freebieGridHtml;
      html += freeSubtitleHtml;
    }
  }

  return html;
};
