const AdditionalImageWithLink = ({
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
  width = 295,
  height,
}) => {
  const numericWidth =
    Number.parseInt(width, 10) || 295;

  const tableAttributes = `
    cellspacing="0"
    cellpadding="0"
    border="0"
    width="100%"
    role="presentation"
  `;

  const tableContainerClass =
    typeof tableContainer === 'string'
      ? tableContainer
      : tableContainer
        ? 'newsletterContainer'
        : '';

  const heightAttribute = height
    ? `height="${height}"`
    : '';

  let html = `
    <a
      href="${href}"
      target="${targetBlank ? '_blank' : '_self'}"
      style="
        display:block;
        margin:0;
        padding:0;
        border:0;
        font-size:0;
        line-height:0;
        text-decoration:none;
      "
    >
      <img
        src="${src}"
        alt="${alt}"
        width="${numericWidth}"
        ${heightAttribute}
        style="
          display:block;
          width:100%;
          max-width:${numericWidth}px;
          height:auto;
          margin:0;
          padding:0;
          border:0;
          font-size:0;
          line-height:0;
          vertical-align:${imgVAlign};
          -ms-interpolation-mode:bicubic;
        "
      >
    </a>
  `;

  if (insideTr) {
    html = `
      <tr>
        <td
          ${tdClass ? `class="${tdClass}"` : ''}
          width="${numericWidth}"
          align="${align}"
          valign="${vAlign}"
          style="
            width:${numericWidth}px;
            padding:0;
            font-size:0;
            line-height:0;
            vertical-align:${vAlign};
          "
        >
          ${html}
        </td>
      </tr>
    `;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true.'
      );
    }

    html = `
      <table
        ${tableAttributes}
        style="
          width:100%;
          border-collapse:collapse;
          mso-table-lspace:0pt;
          mso-table-rspace:0pt;
        "
      >
        <tr>
          <td
            align="${align}"
            valign="${vAlign}"
            ${tableContainerClass
              ? `class="${tableContainerClass}"`
              : ''}
            style="
              padding:0;
              font-size:0;
              line-height:0;
            "
          >
            ${html}
          </td>
        </tr>
      </table>
    `;
  }

  return html;
};

export { AdditionalImageWithLink };