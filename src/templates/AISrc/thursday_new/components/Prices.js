const Prices = ({ high, low = '', color, align = 'left', theme = {}, style = {}, gapClass = '' }) => {
  const themeDefined = Object.keys(theme).length > 0;
  const lowPriceColor = themeDefined ? theme?.primary ?? color : color;
  const highPriceColor = themeDefined ? theme?.black ?? color : color;
  let styleAttrib = '';

  if (style?.bg) {
    styleAttrib = `background: ${style.bg};`;
  }

  switch (style.rounded) {
    case 'top':
      styleAttrib += 'border-radius: 10px 10px 0 0;';
      break;
    case 'bottom':
      styleAttrib += 'border-radius: 0 0 10px 10px;';
      break;
    case 'all':
      styleAttrib += 'border-radius: 10px;';
      break;
  }

  let html = '';

  const gapMatch = gapClass.match(/newsletterBottom(\d+)px/);
  const paddingTopValue = gapMatch ? gapMatch[1] : '10';

  html += `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="newsletterProductPrices" ${styleAttrib ? `style="${styleAttrib}"` : ''}>`;

  html += `<tr><td align="${align}" class="${gapClass}" style="text-align: ${align}; padding-top: ${Math.round(paddingTopValue/2)}px; min-height: 32px;">`;
  html += `<span style="color: ${lowPriceColor}; font-size: 13px;" class="newsletterProductLowPrice">${low} </span>`;
  html += `<span style="color: ${highPriceColor}; font-size: 13px;" class="newsletterProductHighPrice">${high}</span>`;
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
