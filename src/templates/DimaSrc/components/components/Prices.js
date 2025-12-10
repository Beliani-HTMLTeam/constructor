const Prices = ({ high, low = '' }) => {
  let html = '';

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices">`;

  html += `<tr><td>`
  html += `<span class="newsletterProductLowPrice">${low} </span>`;

  html += `<span class="newsletterProductHighPrice">${high}</span>`;
  
  html += `</td></tr>`;

  html += `</table>`;

  return html;
};

export { Prices };
