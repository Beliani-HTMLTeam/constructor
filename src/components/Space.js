const Space = ({ className = 'newsletterBottom35px', insideTr = false, insideTable = false, background, style = {} }) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;
  let styleAttrib = '';

  const bg = background || style?.bg;
  if (bg) {
    styleAttrib += `background-color: ${bg};`;
  }

  if (style?.rounded) {
    styleAttrib += style.rounded;
  }

  let html = `<td class="${className}" ${styleAttrib ? `style="${styleAttrib}"` : ''} ${bg ? `bgcolor="${bg}"` : ''}></td>`;

  if (insideTr) {
    html = `<tr ${bg ? `style="background-color: ${bg};" bgcolor="${bg}"` : ''}>${html}</tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    // prettier-ignore
    html = `<table ${tableAttributes} style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; ${bg ? `background-color: ${bg};` : ''}" ${bg ? `bgcolor="${bg}"` : ''}><tr>${html}</tr></table>`;
  }

  return html;
};

export { Space };
