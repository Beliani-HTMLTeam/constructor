const Prices = ({
  high,
  low = '',
  color,
  align = 'left',
  lowColor = null,
  highColor = null,
  lowStyles = '',
  highStyles = '',
  className = 'newsletterProductPrices',
  lowClassName = 'newsletterProductLowPrice',
  highClassName = 'newsletterProductHighPrice',
  layout = 'inline',
  reserveHighPrice = false,
}) => {
  const lowSpan = `<span style="color: ${lowColor ?? color}; ${lowStyles}" class="${lowClassName}">${low}</span>`;
  const highSpan = `<span style="color: ${highColor ?? color}; ${highStyles}" class="${highClassName}">${high}</span>`;

  let html = `<table cellspacing="0" cellpadding="0" border="0" width="100%" class="${className}">`;

  if (layout === 'stacked') {
    html += `<tr><td align="${align}" style="text-align: ${align};">${lowSpan}</td></tr>`;

    if (high || reserveHighPrice) {
      const rowHeight = reserveHighPrice === true ? 17 : reserveHighPrice;
      const rowAttrs = rowHeight
        ? ` height="${rowHeight}" style="text-align: ${align}; height: ${rowHeight}px; line-height: ${rowHeight}px; mso-line-height-rule: exactly;"`
        : ` style="text-align: ${align};"`;

      html += `<tr><td align="${align}"${rowAttrs}>${high ? highSpan : ''}</td></tr>`;
    }
  } else {
    html += `<tr><td align="${align}" style="text-align: ${align};">${lowSpan.replace('</span>', ' </span>')}${highSpan}</td></tr>`;
  }

  html += `</table>`;

  return html;
};

export { Prices };
