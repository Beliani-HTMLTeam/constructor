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
  type,
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  const isVideo =
    type === 'landing' && typeof src === 'string' && /\.mp4(\?|#|$)/i.test(src);

  let html = '';

  html += isVideo
    ? `<a href="${href}"><video src="${src}" width="100%" style="vertical-align: ${imgVAlign}; max-width: 100%;" autoplay muted loop playsinline></video></a>`
    : `<a href="${href}"><img src="${src}" alt="${alt}" width="100%" style="vertical-align: ${imgVAlign}; max-width: 100%;" loading="lazy"></a>`;

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

export { ImageWithLink };
