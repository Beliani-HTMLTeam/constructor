const Prices = ({ high, low = '', color, align = 'left', addClass = '', priceColors = {} }) => {
  let priceColorsEnabled = false;
  if (priceColors && typeof priceColors === 'object')
    priceColorsEnabled = true;
  
  let html = '';
  let className = addClass;
  let exportPx = null;
  exportPx = className.replace(/\D/g, '');

  console.log('exportPx', exportPx);

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices">`;

  html += `<tr><td align="${align}" style="text-align: ${align}; ${exportPx !== null ? `padding-left: ${exportPx}px; padding-right: ${exportPx}px;` : ''}">`;
  html += `<span style="color: ${priceColorsEnabled && priceColors.low ? priceColors.low : color}" class="newsletterProductLowPrice">${low} </span>`;

  html += `<span style="color: ${priceColorsEnabled && priceColors.high ? priceColors.high : color}" class="newsletterProductHighPrice">${high}</span>`;

  html += `</td></tr>`;

  if (!high) {
    html += `<!--[if !mso]><!-->
    <tr class="priceHighSpacer" style="display: none;"><td style="font-size: 0; line-height: 0; padding-bottom: 14px;">&nbsp;</td></tr>
    <!--<![endif]-->`;
  }

  html += `</table>`;

  return html;
};

export { Prices };
