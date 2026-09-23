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
  cta,
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

  const containerClass = typeof container === 'string' ? container : (container ? 'newsletterContainer' : '');

  // outlook random white line fixes
  const sectionStyle = `${backgroundColor ? `background-color: ${backgroundColor};` : ''} color: ${color}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`;
  const wrapperCellStyle = `padding: 0; margin: 0; font-size: 0; line-height: 0; mso-line-height-rule: exactly; ${backgroundColor ? `background-color: ${backgroundColor};` : ''}`;

  const IntroTitleElement = hasTitleAndParagraph
    ? `
    <tr ${backgroundColor ? `style="background-color: ${backgroundColor};" bgcolor="${backgroundColor}"` : ''}>
      <td align="${paragraphAlign}" ${containerClass ? `class="${containerClass}"` : ''} ${backgroundColor ? `style="background-color: ${backgroundColor};" bgcolor="${backgroundColor}"` : ''}>
        <span class="newsletterIntroTitle" style="${title?.styles ? `${title.styles} ` : ''}color: ${color}; display: block; text-align: ${paragraphAlign};">${finalIntroTitle}</span>
      </td>
    </tr>

    ${Space({ insideTr: true, className: 'newsletterBottom20px', background: backgroundColor })}
    `
    : '';

  return `
    <tr ${backgroundColor ? `style="background-color: ${backgroundColor};" bgcolor="${backgroundColor}"` : ''}>
      <td style="${wrapperCellStyle}" ${backgroundColor ? `bgcolor="${backgroundColor}"` : ''}>
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${sectionStyle}" ${backgroundColor ? `bgcolor="${backgroundColor}"` : ''}>
          ${Space({ className: spaceTop, insideTr: true, background: backgroundColor })}

          ${IntroTitleElement}
            
          <tr ${backgroundColor ? `style="background-color: ${backgroundColor};" bgcolor="${backgroundColor}"` : ''}>
            <td align="${paragraphAlign}" ${containerClass ? `class="${containerClass}"` : ''} ${backgroundColor ? `style="background-color: ${backgroundColor};" bgcolor="${backgroundColor}"` : ''}>
              <span class="newsletterParagraph" style="${paragraph?.styles ? `${paragraph.styles} ` : ''}color: ${color}; display: block; text-align: ${paragraphAlign};">${finalIntroParagraph}</span>
            </td>
          </tr>
    
          ${cta || Space({ className: spaceBottom, insideTr: true, background: backgroundColor })}
        </table>
      </td>
    </tr>
  `;
};

export { Intro };
