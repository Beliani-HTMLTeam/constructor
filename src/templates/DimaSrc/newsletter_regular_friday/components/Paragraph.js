const Paragraph = ({
  text = 'Translation not found',
  color = '#000000',
  background,
  insideTr = false,
  insideTable = false,
  tableContainer = false,
  className = 'newsletterParagraph',
  spanStyle,
  align = 'left',
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  if (String(text).trim() === '') {
    text = 'Translation not found';
  }

  let html = '';

  html += `<span class="${className}" style="text-align: ${align}; ${color ? `color: ${color};` : ''} ${background ? `background-color: ${background};` : ''} ${
    spanStyle ?? ''
  }">${text}</span>`;

  if (insideTr) {
    html = `<tr><td style="text-align: ${align};">${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    // prettier-ignore
    html = `<table ${tableAttributes}><tr><td style="text-align: ${align};" ${tableContainer ? ' class="newsletterContainer"' : ''}>${html}</td></tr></table>`;
  }

  return html;
};

export { Paragraph };
