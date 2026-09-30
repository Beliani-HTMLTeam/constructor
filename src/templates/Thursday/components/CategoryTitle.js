import { Paragraph } from './Paragraph.js';
import { Space } from './Space.js';

const tableAttributes = `cellspacing="0" cellpadding="0" border="0"`;
const resetStyles = `border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;`;

const CategoryTitle = ({
  title,
  config = {},
  paragraphText,
  eyebrowText,
  color = '#000000',
  background,
  align = 'left',
}) => {
  const number = config.number ?? {};
  const paragraph = config.paragraph ?? {};
  const eyebrow = config.eyebrow ?? {};

  const showNumber = Boolean(number.show && number.text);
  const showParagraph = Boolean(paragraph.show);
  const showEyebrow = Boolean(eyebrow.show && eyebrowText);

  const insetPct = config.containerPct ?? 3;
  const spacer = (width, unit = 'px') =>
    `<td width="${width}${unit === '%' ? '%' : ''}" style="width: ${width}${unit}; font-size: 0; line-height: 0;"></td>`;

  const TitleSpan = Paragraph({
    text: title,
    align,
    spanStyle: `${config.styles ?? ''} color: ${config.color ?? color};`,
    className: config.className ?? 'newsletterTitle',
  });

  const ParagraphSpan = showParagraph
    ? Paragraph({
        text: paragraph.text ?? paragraphText ?? 'Translation not found',
        align,
        spanStyle: `${paragraph.styles ?? ''} color: ${paragraph.color ?? color};`,
        className: paragraph.className ?? 'newsletterParagraph',
      })
    : '';

  // title rows + optional paragraph row, used both standalone and as the right column of the number layout
  const TextRows = `
    <tr>
      <td align="${align}" style="text-align: ${align};">${TitleSpan}</td>
    </tr>
    ${
      showParagraph
        ? `
      <tr>${Space({ className: paragraph.spaceBefore ?? 'newsletterBottom10px' })}</tr>
      <tr>
        <td align="${align}" style="text-align: ${align};">${ParagraphSpan}</td>
      </tr>
    `
        : ''
    }
  `;

  const InnerTable = showNumber
    ? `
      <table ${tableAttributes} width="100%" style="${resetStyles}">
        <tr>
          <td valign="top" align="left" style="white-space: nowrap;">
            <span class="${number.className ?? 'newsletterTitle'}" style="${number.styles ?? ''} color: ${number.color ?? color};">${number.text}</span>
          </td>
          ${spacer(number.gap ?? 20)}
          <td valign="top" align="${align}">
            <table ${tableAttributes} width="100%" style="${resetStyles}">
              ${TextRows}
            </table>
          </td>
        </tr>
      </table>
    `
    : `
      <table ${tableAttributes} width="100%" style="${resetStyles}">
        ${TextRows}
      </table>
    `;

  const EyebrowRows = showEyebrow
    ? `
      <tr>
        ${spacer(insetPct, '%')}
        <td align="${align}" style="text-align: ${align};">
          ${Paragraph({
            text: eyebrowText,
            align,
            spanStyle: `${eyebrow.styles ?? ''} color: ${eyebrow.color ?? color};`,
            className: eyebrow.className ?? 'newsletterParagraph',
          })}
        </td>
        ${spacer(insetPct, '%')}
      </tr>
      <tr><td colspan="3" class="${eyebrow.spaceAfter ?? 'newsletterBottom10px'}"></td></tr>
    `
    : '';

  return `
    <table ${tableAttributes} width="100%" style="${resetStyles} ${background ? `background-color: ${background};` : ''}">
      ${EyebrowRows}
      <tr>
        ${spacer(insetPct, '%')}
        <td align="${align}">
          ${InnerTable}
        </td>
        ${spacer(insetPct, '%')}
      </tr>
    </table>
  `;
};

export { CategoryTitle };
