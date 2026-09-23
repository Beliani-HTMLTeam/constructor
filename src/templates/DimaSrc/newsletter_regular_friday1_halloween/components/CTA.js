const CTA = ({
  href,
  text,
  color = '#000000',
  align = 'center',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
  variant = 'underline',
  bg = '#750000',
  borderColor = bg,
  borderWidth = '15px 45px',
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  let html = '';

  // prettier-ignore
  html += variant === 'button'
    ? `<table role="presentation" align="${align}" cellspacing="0" cellpadding="0" border="0" style="width:auto;margin:0 auto;border-collapse:collapse;"><tr><td align="${align}" bgcolor="${bg}" style="background-color:${bg};"><a href="${href}" style="display:inline-block;color:${color} !important;background-color:${bg};text-decoration:none !important;border-style:solid;border-width:${borderWidth};border-color:${borderColor};font-size:16px;line-height:20px;font-weight:600;text-transform:uppercase;"><span style="color:${color};">${text}</span></a></td></tr></table>`
    : `<a style="color: ${color}; text-decoration: underline;" href="${href}"><span class="newsletterCta">${text}</span></a>`;

  if (insideTr) {
    html = `<tr><td ${tdClass ? `class="${tdClass}"` : ''} align=${align}>${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    // prettier-ignore
    html = `<table ${tableAttributes}><tr><td ${tableContainer ? ' class="newsletterContainer"' : ''}>${html}</td></tr></table>`;
  }

  return html;
};

export { CTA };
