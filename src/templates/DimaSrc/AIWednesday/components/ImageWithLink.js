const ImageWithLink = ({
  href,
  src,
  alt = 'Newsletter Image',
  align = 'center',
  vAlign = 'top',
  imgVAlign = 'top',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
  targetBlank = false
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;
  const tableContainerClass =
    (typeof tableContainer === 'string') ? tableContainer : (tableContainer ? 'newsletterContainer' : '');

  let html = '';

  html += `<a target="${targetBlank ? '_blank' : '_self'}" href="${href}"><img src="${src}" alt="${alt}" style="vertical-align: ${imgVAlign}; max-width: 100%;" loading="lazy"></a>`;

  if (insideTr) {
    html = `<tr><td ${tdClass ? `class="${tdClass}"` : ''} align=${align} vAlign=${vAlign}>${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    // prettier-ignore
    html = `<table ${tableAttributes}><tr><td vAlign=${vAlign} ${tableContainerClass ? ` class="${tableContainerClass}"` : ''}>${html}</td></tr></table>`;
  }

  return html;
};

export { ImageWithLink };
