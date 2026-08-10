const Prices = ({ high, low = '', color, align = 'left', theme = {} }) => {
  const themeDefined = Object.keys(theme).length > 0;
  const lowPriceColor = themeDefined ? theme?.primary ?? color : color;
  const highPriceColor = themeDefined ? theme?.black ?? color : color;

  let html = '';

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices">`;

  html += `<tr><td align="${align}" style="text-align: ${align};">`;
  html += `<span style="color: ${lowPriceColor};" class="newsletterProductLowPrice">${low} </span>`;

  html += `<span style="color: ${highPriceColor};" class="newsletterProductHighPrice">${high}</span>`;

  html += `</td></tr>`;

  html += `</table>`;

  return html;
};

export { Prices };
