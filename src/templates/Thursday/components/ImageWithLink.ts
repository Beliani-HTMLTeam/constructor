export interface ImageWithLinkProps {
  /** Link target. */
  href: string;
  /** Image source (resolved `getImageUrl(...)`/`translateImage(...)` expression or absolute URL). */
  src: string;
  /** Image alt text. */
  alt?: string;
  /** Cell alignment, used only when `insideTr` is true. */
  align?: string;
  /** Cell vertical-alignment, used only when `insideTr` is true. */
  vAlign?: string;
  /** `vertical-align` applied to the `<img>` itself. */
  imgVAlign?: string;
  /** Wrap output in a `<tr><td>`. */
  insideTr?: boolean;
  /** CSS class for the wrapping `<td>` when `insideTr` is true. */
  tdClass?: string;
  /** Wrap output in a standalone `<table><tr><td>`. Mutually exclusive with `insideTr`. */
  insideTable?: boolean;
  /** Container class for the `insideTable` wrapper; `true` uses `'newsletterContainer'`. */
  tableContainer?: boolean | string;
  /** Open the link in a new tab. */
  targetBlank?: boolean;
  /**
   * Explicit intrinsic display width (px). Set this for assets exported at a higher
   * pixel density than their intended display size (e.g. 2x-retina CTA button PNGs) —
   * without it the browser renders the image at its native file resolution, since
   * `max-width: 100%` alone only caps growth, it never scales an oversized asset down.
   */
  width?: number | string;
  /** Explicit intrinsic display height (px). See `width`. */
  height?: number | string;
}

/**
 * Renders a single linked, lazy-loaded image. Used for category header images,
 * product images, and image-button CTAs (`category.cta.src`).
 */
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
  width,
  height,
}: ImageWithLinkProps): string => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;
  const tableContainerClass =
    (typeof tableContainer === 'string') ? tableContainer : (tableContainer ? 'newsletterContainer' : '');

  let html = '';

  const widthAttr = width !== undefined ? ` width="${width}"` : '';
  const heightAttr = height !== undefined ? ` height="${height}"` : '';

  html += `<a target="${targetBlank ? '_blank' : '_self'}" href="${href}"><img src="${src}" alt="${alt}"${widthAttr}${heightAttr} style="vertical-align: ${imgVAlign}; max-width: 100%; height: auto;" loading="lazy"></a>`;

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
