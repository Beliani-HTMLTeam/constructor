export interface CTAProps {
  /** Link target. */
  href: string;
  /** Link label text. */
  text: string;
  /** Text colour. */
  color?: string;
  /** Cell alignment, used only when `insideTr` is true. */
  align?: string;
  /** Wrap output in a `<tr><td>`. */
  insideTr?: boolean;
  /** CSS class for the wrapping `<td>` when `insideTr` is true. */
  tdClass?: string;
  /** Wrap output in a standalone `<table><tr><td>`. Mutually exclusive with `insideTr`. */
  insideTable?: boolean;
  /** Container class for the `insideTable` wrapper; `true` uses `'newsletterContainer'`. */
  tableContainer?: boolean | string;
  /** CSS class for the link label. Defaults to `'newsletterCta'`; use `'newsletterCtaCaps'` for the uppercase/tracked design style. */
  className?: string;
}

/**
 * Underlined text-link CTA (legacy/default style). For image-button CTAs use
 * `ImageWithLink` directly — category blocks pick between the two based on
 * whether `category.cta.src` is set (see `Categories.tsx` and `CtaConfig` in `@/types/thursday`).
 */
const CTA = ({
  href,
  text,
  color = '#000000',
  align = 'center',
  insideTr = false,
  tdClass,
  insideTable = false,
  tableContainer = false,
  className = 'newsletterCta',
}: CTAProps): string => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;
  const tableContainerClass =
    (typeof tableContainer === 'string') ? tableContainer : (tableContainer ? 'newsletterContainer' : '');

  let html = '';

  // prettier-ignore
  html += `<a style="color: ${color}; text-decoration: underline;" href="${href}"><span class="${className}">${text}</span></a>`;

  if (insideTr) {
    html = `<tr><td ${tdClass ? `class="${tdClass}"` : ''} align=${align}>${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    // prettier-ignore
    html = `<table ${tableAttributes}><tr><td ${tableContainerClass ? ` class="${tableContainerClass}"` : ''}>${html}</td></tr></table>`;
  }

  return html;
};

export { CTA };
