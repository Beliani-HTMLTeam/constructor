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
  const background = settings?.background ?? '';
  const priceFontSize = Number.parseFloat(settings?.priceLowSize) || 18;
  const priceLineHeight = Math.ceil((priceFontSize * 1.2) / 4) * 4;
  const exactLineHeight = `line-height:${priceLineHeight}px;mso-line-height-rule:exactly;`;

  let html = '';

  html += `<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices"${background ? ` bgcolor="${background}"` : ''} style="border:0;mso-border-alt:none;border-collapse:collapse;border-spacing:0;mso-table-lspace:0pt;mso-table-rspace:0pt;${background ? `background-color:${background};` : ''}">`;

  html += `<tr><td align="${align}"${background ? ` bgcolor="${background}"` : ''} style="border:0;mso-border-alt:none;text-align:${align};${exactLineHeight}${background ? `background-color:${background};` : ''}">`;
  html += `<span style="color:${lowPriceColor};${settings?.priceLowSize ? `font-size:${settings?.priceLowSize}px;` : ''}${exactLineHeight}" class="${settings?.prodLowClass ?? 'newsletterProductLowPrice'}">${low} </span>`;
  html += `<span style="color: ${highPriceColor};${settings?.priceHighSize ? `font-size:${settings?.priceHighSize}px;` : ''}" class="${settings?.prodLowClass ?? 'newsletterProductHighPrice'}">${high}</span>`;

  html += `</td></tr>`;

  html += `</table>`;

  return html;
};

export { Prices };
