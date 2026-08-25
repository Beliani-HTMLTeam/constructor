const Prices = ({ high, low = '', color, align = 'left', country }) => {
  const isSwitzerland = country === 'CHDE';
  let html = '';

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices">`;

  html += `<tr><td align="${align}" style="text-align: ${align};">`;
  html += `<span style="color: ${color}" class="newsletterWednesdayProductLowPrice">${low} </span>`;

  html += `<span style="color: ${color}" class="newsletterWednesdayProductHighPrice${isSwitzerland ? 'CH' : ''}">${high}</span>`;

  html += `</td></tr>`;

  html += `</table>`;

  return html;
};

export { Prices };
