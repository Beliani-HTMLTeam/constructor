export interface PricesProps {
  /** Original/strikethrough price text (styled via `.newsletterProductHighPrice`). */
  high: string;
  /** Current/sale price text (styled via `.newsletterProductLowPrice`). */
  low?: string;
  /** Text colour. */
  color: string;
  /** Cell alignment. */
  align?: string;
  /** Renders an accent-coloured "Free" label instead of `low`/`high` when true. */
  isFree?: boolean;
  /** "Free" label text. Defaults to `'Free'`. */
  freeText?: string;
  /** Accent colour for the price (and the "Free" label). Falls back to `color`. */
  priceColor?: string;
}

/** Renders a product's low/high price pair (or a "Free" label) as a single-row table. */
const Prices = ({ high, low = '', color, align = 'left', isFree = false, freeText = 'Free', priceColor }: PricesProps): string => {
  let html = '';
  const accent = priceColor ?? color;

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices">`;

  html += `<tr><td align="${align}" style="text-align: ${align};">`;

  if (isFree) {
    html += `<span style="color: ${accent}" class="newsletterProductPriceFree">${freeText}</span>`;
  } else {
    html += `<span style="color: ${accent}" class="newsletterProductPriceAccent">${low} </span>`;
    html += `<span style="color: ${color}" class="newsletterProductHighPrice">${high}</span>`;
  }

  html += `</td></tr>`;

  html += `</table>`;

  return html;
};

export { Prices };
