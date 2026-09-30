const Space = ({ className = 'newsletterBottom35px', insideTr = false, insideTable = false, backgroundColor }) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  let html = '';

  html += `<td class="${className}" ${backgroundColor ? `style="background-color: ${backgroundColor};"` : ''}></td>`;

  if (insideTr) {
    html = `<tr>${html}</tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    // prettier-ignore
    html = `<table ${tableAttributes}><tr>${html}</tr></table>`;
  }

  return html;
};

export { Space };
