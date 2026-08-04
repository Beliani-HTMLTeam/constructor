export interface LineProps {
  /** Divider image source. */
  src?: string;
  /** Wrap output in a `<tr><td>`. */
  insideTr?: boolean;
  /** Apply the `'newsletterContainer'` class to the wrapping `<td>` when `insideTr` is true. */
  insideContainer?: boolean;
  /** Wrap output in a standalone `<table><tr><td>`. Mutually exclusive with `insideTr`. */
  insideTable?: boolean;
  /** Apply the `'newsletterContainer'` class to the `insideTable` wrapper. */
  tableContainer?: boolean;
}

/** Renders a thin horizontal divider image (used between category blocks and before the "soon ending" footer banners). */
const Line = ({
  src = 'https://pictureserver.net/static/2026/footer/line.jpg',
  insideTr = false,
  insideContainer = false,
  insideTable = false,
  tableContainer = false,
}: LineProps): string => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  let html = '';

  html += `<img src=${src} style="display:block" width="100%" alt="Line separator" />`;

  if (insideTr) {
    html = `<tr><td${insideContainer ? ' class="newsletterContainer"' : ''}>${html}</td></tr>`;
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
