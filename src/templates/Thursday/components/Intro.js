import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';

const Intro = ({
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom35px',
  paragraphAlign = 'center',
  color = '#000000',
  backgroundColor,
  container,
  title,
  paragraph,
  href,
}) => {
  const hasTitleAndParagraph = Array.isArray(text) && (text.length === 2 || text.length === 3);
  const hasTwoLineTitle = Array.isArray(text) && text.length === 3;
  const hasSingleArrayValue = Array.isArray(text) && text.length === 1;

  const normalizeText = (value) => {
    if (typeof value !== 'string') return 'Translation not found';
    return String(value).trim() === '' ? 'Translation not found' : value;
  };

  const introTitle = hasTitleAndParagraph
    ? hasTwoLineTitle
      ? `${normalizeText(text[0])}<br>${normalizeText(text[1])}`
      : normalizeText(text[0])
    : '';
  const introParagraph = hasTitleAndParagraph
    ? normalizeText(text[hasTwoLineTitle ? 2 : 1])
    : hasSingleArrayValue
      ? normalizeText(text[0])
      : normalizeText(text);

  let finalIntroTitle = introTitle;
  let finalIntroParagraph = introParagraph;

  if (href) {
    const wrapLink = (content) => `<a href="${href}" target="_blank" style="color: ${color}; text-decoration: none;">${content}</a>`;
    if (finalIntroTitle) finalIntroTitle = wrapLink(finalIntroTitle);
    if (finalIntroParagraph) finalIntroParagraph = wrapLink(finalIntroParagraph);
  }

  // outlook random white line fixes
  const sectionStyle = `${backgroundColor ? `background-color: ${backgroundColor};` : ''} color: ${color}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`;
  const wrapperCellStyle = `padding: 0; margin: 0; font-size: 0; line-height: 0; mso-line-height-rule: exactly; ${backgroundColor ? `background-color: ${backgroundColor};` : ''}`;

  const IntroTitleElement = hasTitleAndParagraph
    ? `
    <tr><td>${Paragraph({
      text: finalIntroTitle,
      align: paragraphAlign,
      insideTable: true,
      tableContainer: container || true,
      className: 'newsletterIntroTitle',
      spanStyle: `${title?.styles ? `${title.styles} ` : ' '}color: ${color};`,
    })}</td></tr>

    ${Space({ insideTr: true })}
    `
    : '';

  return `
    <tr>
      <td style="${wrapperCellStyle}">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${sectionStyle}">
          ${Space({ className: spaceTop, insideTr: true })}

          ${IntroTitleElement}
            
          <tr><td>${Paragraph({
            text: finalIntroParagraph,
            align: paragraphAlign,
            insideTable: true,
            tableContainer: container || true,
            spanStyle: `${paragraph?.styles ? `${paragraph.styles} ` : ' '}color: ${color};`,
          })}</td></tr>
    
          ${Space({ className: spaceBottom, insideTr: true })}
        </table>
      </td>
    </tr>
  `;
};

export { Intro };
