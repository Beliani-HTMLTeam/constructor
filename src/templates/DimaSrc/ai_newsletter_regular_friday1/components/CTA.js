const CTA = ({
  href,
  text,
  color = '#000000',
  background,
  buttonBackground,
  align = 'center',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  let html = '';

  if (buttonBackground) {
    html = `
      <table cellspacing="0" cellpadding="0" border="0" align="${align}">
        <tr>
          <td align="center" style="background-color: ${buttonBackground}; padding: 12px 28px; border-radius: 2px;">
            <a style="color: ${color}; text-decoration: none; font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; font-weight: 600; display: inline-block;" href="${href}">
              <span class="newsletterCtaBtn" style="color: ${color}; text-decoration: none;">${text}</span>
            </a>
          </td>
        </tr>
      </table>
    `;
  } else {
    html = `<a style="color: ${color}; text-decoration: underline;" href="${href}"><span class="newsletterCta">${text}</span></a>`;
  }

  if (insideTr) {
    html = `<tr><td ${tdClass ? `class="${tdClass}"` : ''} align="${align}" style="background-color: ${background};">${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    html = `<table ${tableAttributes}><tr><td ${tableContainer ? ' class="newsletterContainer"' : ''} align="${align}" style="background-color: ${background};">${html}</td></tr></table>`;
  }

  return html;
};

export { CTA };
