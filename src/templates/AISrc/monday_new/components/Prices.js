const Prices = ({ high, low = '', color, align = 'left', theme = {}, lowColor = '', highColor = '', lowSize = '', highSize = '' }) => {
  const themeDefined = Object.keys(theme).length > 0;
  const lowPriceColor = lowColor
    ? lowColor
    : themeDefined
      ? theme?.primary ?? color : color;
    const highPriceColor = highColor
    ? highColor
    : themeDefined
      ? theme?.black ?? color : color;

  let html = '';

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices">`;

  html += `<tr><td align="${align}" style="text-align: ${align};">`;
  html += `<span style="color: ${lowPriceColor};${lowSize ? `font-size:${lowSize}px;` : ''}" class="newsletterProductLowPrice">${low} </span>`;

  html += `<span style="color: ${highPriceColor};${highSize ? `font-size:${highSize}px;` : ''}" class="newsletterProductHighPrice">${high}</span>`;

  html += `</td></tr>`;

  html += `</table>`;

  return html;
};

export { Prices };
