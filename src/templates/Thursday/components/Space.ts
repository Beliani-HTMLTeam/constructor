export interface SpaceProps {
  /** Spacer height CSS class. */
  className?: string;
  /** Wrap output in a `<tr>`. */
  insideTr?: boolean;
  /** Wrap output in a standalone `<table><tr>`. Mutually exclusive with `insideTr`. */
  insideTable?: boolean;
}

/** Renders an empty spacer cell, sized purely via CSS class (e.g. `'newsletterBottom35px'` maps to a fixed-height rule in the compiled email stylesheet). */
const Space = ({ className = 'newsletterBottom35px', insideTr = false, insideTable = false }: SpaceProps): string => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;

  let html = '';

  html += `<td class="${className}"></td>`;

  if (insideTr) {
    html = `<tr>${html}</tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    // prettier-ignore
    html = `<table ${tableAttributes}><tr>${html}</tr></table>`;
  }

  return html;
};

export { Space };
