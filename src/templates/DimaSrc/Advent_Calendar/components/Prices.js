const Prices = ({ high, low = '', color, align = 'left' }) => {
  let html = '';

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices">`;

  html += `<tr><td align="${align}" style="text-align: ${align};">`;
  html += `<span style="color: ${color}" class="newsletterProductLowPrice">${low} </span>`;

  html += `<span style="color: ${color}" class="newsletterProductHighPrice">${high}</span>`;

  html += `</td></tr>`;

  html += `</table>`;

  return html;
};

export { Prices };
