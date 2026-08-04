import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';

export interface IntroProps {
  /** Intro copy; see array-shape rules on {@link Intro}. */
  text?: string | string[];
  /** Spacer class above the section content. */
  spaceTop?: string;
  /** Spacer class below the section content. */
  spaceBottom?: string;
  /** Text alignment for title/paragraph. */
  paragraphAlign?: string;
  /** Text colour. */
  color?: string;
  /** Section background colour. */
  backgroundColor?: string;
  /** Override container CSS class for the inner paragraphs. */
  container?: string | boolean;
}

/**
 * Renders the intro/lede section. `text` may be a plain string (single paragraph, no
 * title) or an array of any length: a 1-element array renders as a single paragraph
 * (no title); a 2+ element array renders `[0]` as a bolded title above one paragraph
 * row per remaining element (`[1]`, `[2]`, ...) — e.g. a 3-element array gives a title
 * plus a subtitle-like second line plus a body paragraph, with no fixed line cap.
 */
const Intro = ({
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom35px',
  paragraphAlign = 'center',
  color = '#000000',
  backgroundColor,
  container,
}: IntroProps): string => {
  const lines = Array.isArray(text) ? text : [text];

  const normalizeText = (value: unknown): string => {
    if (typeof value !== 'string') return 'Translation not found';
    return String(value).trim() === '' ? 'Translation not found' : value;
  };

  const hasTitle = lines.length > 1;
  const introTitle = hasTitle ? normalizeText(lines[0]) : '';
  const paragraphLines = (hasTitle ? lines.slice(1) : lines).map(normalizeText);

  // outlook random white line fixes
  const sectionStyle = `${backgroundColor ? `background-color: ${backgroundColor};` : ''} color: ${color}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`;
  const wrapperCellStyle = `padding: 0; margin: 0; font-size: 0; line-height: 0; mso-line-height-rule: exactly; ${backgroundColor ? `background-color: ${backgroundColor};` : ''}`;

  const IntroTitleElement = hasTitle
    ? `
    <tr><td>${Paragraph({
      text: introTitle,
      align: paragraphAlign,
      insideTable: true,
      tableContainer: container || true,
      className: 'newsletterIntroTitle',
      spanStyle: `color: ${color};`,
    })}</td></tr>

    ${Space({ insideTr: true })}
    `
    : '';

  const ParagraphRows = paragraphLines
    .map(
      (line, i) => `
    <tr><td>${Paragraph({
      text: line,
      align: paragraphAlign,
      insideTable: true,
      tableContainer: container || true,
      spanStyle: `color: ${color};`,
    })}</td></tr>
    ${i < paragraphLines.length - 1 ? Space({ insideTr: true, className: 'newsletterBottom20px' }) : ''}
  `
    )
    .join('');

  return `
    <tr>
      <td style="${wrapperCellStyle}">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${sectionStyle}">
          ${Space({ className: spaceTop, insideTr: true })}

          ${IntroTitleElement}

          ${ParagraphRows}

          ${Space({ className: spaceBottom, insideTr: true })}
        </table>
      </td>
    </tr>
  `;
};

export { Intro };
