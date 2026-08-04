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
  targetBlank = false
}: ImageWithLinkProps): string => {
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
