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
  targetBlank = false,
  type,
  style = {},
  padding = '',
  background = '',
}) => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;
  const tableContainerClass =
    (typeof tableContainer === 'string') ? tableContainer : (tableContainer ? 'newsletterContainer' : '');

  let html = '';

  let paddingStyle = '';
  if (padding) {
    paddingStyle = `class="${padding}"`;
  }

  let styleAttrib = '';
  if (style?.bg || background) {
    styleAttrib += `background: ${style.bg || background};`;
  }

  if (style?.rounded == 'bottom') {
    styleAttrib += 'border-radius: 10px 10px 0 0;';
  }

  html += `<a target="${targetBlank ? '_blank' : '_self'}" href="${href}"><img src="${src}" alt="${alt}" style="vertical-align: ${imgVAlign}; max-width: 100%;" loading="lazy"></a>`;

  if (insideTr) {
    const tdClasses = [tdClass, padding].filter(Boolean).join(' ');
    html = `<tr><td ${tdClasses ? `class="${tdClasses}"` : ''} align=${align} vAlign=${vAlign} style="${styleAttrib}">${html}</td></tr>`;
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
