import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { ImageWithLink } from './ImageWithLink.js';

const Intro = ({
  text = 'Translation not found',
  spaceTop = 'newsletterBottom35px',
  spaceBottom = 'newsletterBottom30px',
  paragraphAlign = 'center',
  color = '#000000',
  backgroundColor,
  links = {},
  add_utm,
  getCategoryLink,
}) => {
  const hasTitleAndParagraph = Array.isArray(text) && text.length > 1;
  const hasSingleArrayValue = Array.isArray(text) && text.length === 1;

  const normalizeText = (value) => {
    if (typeof value !== 'string') return 'Translation not found';
    return String(value).trim() === '' ? 'Translation not found' : value;
  };

  const introTitle = hasTitleAndParagraph ? normalizeText(text[0]) : '';
  const introParagraph = hasTitleAndParagraph
    ? normalizeText(text[1])
    : hasSingleArrayValue
      ? normalizeText(text[0])
      : normalizeText(text);

  // outlook random white line fixes
  const sectionStyle = `${backgroundColor ? `background-color: ${backgroundColor};` : ''} color: ${color}; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`;
  const wrapperCellStyle = `padding: 0; margin: 0; font-size: 0; line-height: 0; mso-line-height-rule: exactly; ${backgroundColor ? `background-color: ${backgroundColor};` : ''}`;

  const IntroTitleElement = hasTitleAndParagraph
    ? `
    <tr><td>${Paragraph({
      text: introTitle,
      align: paragraphAlign,
      insideTable: true,
      tableContainer: true,
      className: 'newsletterIntroTitle',
      spanStyle: `color: #750000;`,
    })}</td></tr>

    ${Space({ className: 'newsletterBottom10px', insideTr: true })}
    `
    : '';

  return `
    <tr>
      <td style="${wrapperCellStyle}">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" style="${sectionStyle}">

          ${links?.IntroImage_src
            ? ImageWithLink({
              href: getCategoryLink(add_utm(links?.IntroImage_href || '#') ?? '#'),
              src: links.IntroImage_src,
              alt: 'Intro Image',
              insideTr: true,
            })
            : ''
          }

          ${Space({ className: spaceTop, insideTr: true })}

          ${IntroTitleElement}
            
          <tr><td>${Paragraph({
            text: introParagraph,
            align: paragraphAlign,
            insideTable: true,
            tableContainer: true,
            spanStyle: `color: #2B1210;`,
          })}</td></tr>
    
          ${Space({ className: spaceBottom, insideTr: true })}
        </table>
      </td>
    </tr>
  `;
};

export { Intro };
