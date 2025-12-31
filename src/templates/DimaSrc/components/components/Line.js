const Line = ({
  src = 'https://pictureserver.net/static/2026/footer/line.jpg',
  insideTr = false,
  insideTable = false,
  tableContainer = false,
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  let html = '';

  html += `<img src=${src} style="display:block" width="100%" alt="Line separator" />`;

  if (insideTr) {
    html = `<tr><td>${html}</td></tr>`;
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

export { Line };
