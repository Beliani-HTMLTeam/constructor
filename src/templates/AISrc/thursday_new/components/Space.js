const Space = ({ className = 'newsletterBottom35px', insideTr = false, insideTable = false, style = {} }) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;
  let styleAttrib = '';
  
  if (style?.bg) {
    styleAttrib += `background: ${style.bg};`;
  }

  if (style?.rounded) {
    styleAttrib += style.rounded
  }

  let html = '';

  html += `<td class="${className}" style="font-size: 0; line-height: 0; mso-line-height-rule: exactly; ${styleAttrib}">&nbsp;</td>`;

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
