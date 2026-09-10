const Prices = ({ high, low = '', color, align = 'left', theme = {}, settings = {} }) => {
  const themeDefined = Object.keys(theme).length > 0;
  const lowPriceColor = settings?.lowPriceColor
    ? settings?.lowPriceColor
    : themeDefined
      ? theme?.primary ?? color : color;
    const highPriceColor = settings?.highPriceColor
    ? settings?.highPriceColor
    : themeDefined
      ? theme?.black ?? color : color;

  let html = '';

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices">`;

  html += `<tr><td align="${align}" style="text-align: ${align};">`;
  html += `<span style="color: ${lowPriceColor};${settings?.priceLowSize ? `font-size:${settings?.priceLowSize}px;` : ''}" class="${settings?.prodLowClass ?? 'newsletterProductLowPrice'}">${low} </span>`;

  html += `<span style="color: ${highPriceColor};${settings?.priceHighSize ? `font-size:${settings?.priceHighSize}px;` : ''}" class="${settings?.prodLowClass ?? 'newsletterProductHighPrice'}">${high}</span>`;

  html += `</td></tr>`;

  html += `</table>`;

  return html;
};

export { Prices };
