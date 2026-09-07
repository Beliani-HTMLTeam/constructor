const VideoLPWithLink = ({
  href,
  src,
  alt = 'Landing Page Video',
  align = 'center',
  vAlign = 'top',
  imgVAlign = 'top',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  let html = '';

  html += `<a href="${href}"><video src="${src}" alt="${alt}" style="vertical-align: ${imgVAlign}; max-width: 100%;" loading="lazy" autoplay muted loop playsinline></a>`;

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
    html = `<table ${tableAttributes}><tr><td vAlign=${vAlign} ${tableContainer ? ' class="newsletterContainer"' : ''}>${html}</td></tr></table>`;
  }

  return html;
};

export { VideoLPWithLink };
