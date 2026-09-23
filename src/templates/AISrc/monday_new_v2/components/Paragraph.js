const Paragraph = ({
  text = 'Translation not found',
  insideTr = false,
  insideTable = false,
  tableContainer = false,
  className = 'newsletterParagraph',
  containerClass = '',
  spanStyle,
  align = 'left',
  color = '',
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  console.log(containerClass, 'containerClass');

  if (String(text).trim() === '') {
    text = 'Translation not found';
  }

  let html = '';

  html += `<span class="${className}" style="text-align: ${align};${color ? `color: ${color};` : ''}${spanStyle ?? ''}">${text}</span>`;

  if (insideTr) {
    html = `<tr><td style="text-align: ${align};">${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }
    let className = tableContainer
      ? containerClass.length > 0
        ? containerClass
        : 'newsletterContainer'
      : '';

    console.log(className, 'className');
    // prettier-ignore
    html = `<table ${tableAttributes}><tr><td style="text-align: ${align};" ${tableContainer ? `class="${className}"` : ''}>${html}</td></tr></table>`;
  }

  return html;
};

export { Paragraph };
