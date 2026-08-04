export interface ParagraphProps {
  /** Text content (may include inline HTML). */
  text?: string;
  /** Wrap output in a `<tr><td>`. */
  insideTr?: boolean;
  /** Wrap output in a standalone `<table><tr><td>`. Mutually exclusive with `insideTr`. */
  insideTable?: boolean;
  /** Container class for the `insideTable` wrapper; `true` uses `'newsletterContainer'`. */
  tableContainer?: boolean | string;
  /** CSS class for the inner `<span>`. */
  className?: string;
  /** Extra inline CSS appended to the `<span>` style attribute (e.g. `color: ...;`). */
  spanStyle?: string;
  /** Text alignment, applied to both the `<span>` and any wrapping `<td>`. */
  align?: string;
}

/**
 * Renders a single styled text span, optionally wrapped in a `<tr>` or a standalone `<table>`.
 * Falls back to `'Translation not found'` for blank/whitespace-only text.
 */
const Paragraph = ({
  text = 'Translation not found',
  insideTr = false,
  insideTable = false,
  tableContainer = false,
  className = 'newsletterParagraph',
  spanStyle,
  align = 'left',
}: ParagraphProps): string => {
  const tableAttributes = `cellspacing="0" cellpadding="0" border="0" width="100%"`;
  const tableContainerClass =
    (typeof tableContainer === 'string') ? tableContainer : (tableContainer ? 'newsletterContainer' : '');

  if (String(text).trim() === '') {
    text = 'Translation not found';
  }

  let html = '';

  html += `<span class="${className}" style="text-align: ${align}; ${spanStyle ?? ''}">${text}</span>`;

  if (insideTr) {
    html = `<tr><td style="text-align: ${align};">${html}</td></tr>`;
  }

  if (insideTable) {
    if (insideTr) {
      throw new Error(
        'Cannot have both insideTr and insideTable set to true - its handled automatically.'
      );
    }

    // prettier-ignore
    html = `<table ${tableAttributes}><tr><td style="text-align: ${align};" ${tableContainerClass ? ` class="${tableContainerClass}"` : ''}>${html}</td></tr></table>`;
  }

  return html;
};

export { Paragraph };
