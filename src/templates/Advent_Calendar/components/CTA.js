const CTA = ({
  href,
  text,
  color = '#ffffff',
  align = 'center',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
  backgroundColor = '#750000',
  // vertical and horizontal "padding" simulated with border
  paddingY = 16,
  paddingX = 32
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" role="presentation"`;
  const tableContainerClass =
    typeof tableContainer === 'string'
      ? tableContainer
      : tableContainer
        ? 'newsletterContainer'
        : '';

  // Entire button is the <a>. Spacing is created with borders (Outlook-safe)
  let html = `
    <table ${tableAttributes}>
      <tr>
        <td align="center">
          <a
            href="${href}"
            style="
              display: inline-block;
              background-color: ${backgroundColor};
              color: ${color};
              text-decoration: none;
              font-family: Arial, Helvetica, sans-serif;
              font-size: 16px;
              font-weight: bold;
              line-height: 1;
              border-top: ${paddingY}px solid ${backgroundColor};
              border-bottom: ${paddingY}px solid ${backgroundColor};
              border-left: ${paddingX}px solid ${backgroundColor};
              border-right: ${paddingX}px solid ${backgroundColor};
              border-radius: 2px;
            "
          >
            <span class="newsletterCta">${text}</span>
          </a>
        </td>
      </tr>
    </table>
  `;

  if (insideTr) {
    html = `<tr><td ${tdClass ? `class="${tdClass}"` : ''} align="${align}">${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    html = `
      <table ${tableAttributes} width="100%">
        <tr>
          <td ${tableContainerClass ? `class="${tableContainerClass}"` : ''} align="${align}">
            ${html}
          </td>
        </tr>
      </table>
    `;
  }

  return html;
};

export { CTA };