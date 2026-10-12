import { CTA } from '../CTA.js';
import { Paragraph } from '../Paragraph.js';
import { Space } from '../Space.js';

export const render = ({
  cards = [],
  queries = {},
  getPhrase,
  renderType = 'newsletter',
  ctaHref = '#',
  catHref = 'https://www.beliani.ch/',
  theme = {},
  tdClass = 'newsletterContainer',
  getCategoryLink,
}) => {
  const cardEntries = Object.entries(queries ?? {})
    .filter(([key]) => /^card_\d+$/i.test(key))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));

  if (cardEntries.length === 0) return '';

  const cardBg = theme?.cardBg ?? '#ffffff';
  const ctaBg = theme?.cardCtaBg ?? '#ffffff';
  const ctaText = theme?.cardCtaText ?? '#000000';
  const sectionTitle = theme?.cardTitle ?? `#ffffff`;
  const discountColor = theme?.cardDiscount ?? '#000000';
  const textColor = theme?.cardText ?? '#000000';
  const codeColor = theme?.cardCode ?? '#000000';

  let html = `
  ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
  <tr>
    <td class="${tdClass}">
    ${Paragraph({
      text: queries?.card_title ?? 'Card title not found',
      spanStyle: `color: ${sectionTitle}`,
      align: 'center',
      insideTable: true,
      tableContainer: false,
      className: 'blackWeekSectionTitle',
    })}
    </td>
  </tr>

  ${Space({ insideTr: true, className: 'newsletterBottom35px' })}

  <tr>
    <td class="${tdClass}" width="100%" align="center">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100%; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
  `;

  const wrapInAnchor = (content, href, textColor) => {
    if (renderType === 'landing')
      return content;
    
    href = href ?? "#"
    
    return (`
    <a href="${href}" style="display:block;width:100%;text-decoration:none;color:${textColor};">
      ${content}
    </a>
    `)
  }

  for (let i = 0; i < cardEntries.length; i++) {
    html += `<tr>`;

    const entry = cardEntries[i];
    if (!entry) {
      html += `<td width="50%" style="width: 50%;"></td>`;
      continue;
    }

    const [key, cardData] = entry;
    const lines = Array.isArray(cardData) ? cardData : [cardData];

    const labelText = lines[0] ?? `${cardEntries[i][0]} label not found`;
    const discountText = lines[1] ?? `${cardEntries[i][0]} discount not found`;
    const subtitleText = lines[2] ?? `${cardEntries[i][0]} subtitle not found`;
    const codeText = lines[3] ?? `CODE: XXX`;

    const rawCode = String(codeText).trim();
    const code = (rawCode.split(':')[1] ?? rawCode).trim();
    const codeButton =
      renderType === 'landing' && code
        ? CTA({
            text: rawCode,
            codeValue: code,
            type: renderType,
            getPhrase,
            color: codeColor,
            className: 'blackWeekCode',
            theme,
            variant: 'plain',
          })
        : '';

      html += `
      <td width=100%" valign="top" style="width: 100%;">
        ${wrapInAnchor(`
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" bgcolor="${cardBg}" class="blackWeekCard">
          <tbody>
          ${Space({ insideTr: true, className: 'newsletterBottom45px' })}
            ${labelText ? `
            <tr>
              <td align="center" class="blackWeekTitle" style="color: ${textColor};">
                ${wrapInAnchor(labelText, ctaHref?.href, textColor)}
              </td>
            </tr>
            ` : ''}

            ${discountText ? `
            ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
            <tr>
              <td align="center" class="blackWeekDiscount" style="color: ${discountColor};">
              ${wrapInAnchor(discountText, ctaHref?.href, discountColor)}
              </td>
            </tr>
            ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
            ` : ''}

            ${subtitleText ? `
            <tr>
              <td align="center" class="blackWeekSubtitle" style="color: ${textColor};">
              ${wrapInAnchor(subtitleText, ctaHref?.href, textColor)}
              </td>
            </tr>
            ` : ''}
            
            ${renderType === 'landing'
              ? codeButton
                ?
                  `
                  ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
                  <tr>
                    <td align="center" class="blackWeekCode" style="color: ${codeColor};">
                      ${codeButton}
                    </td>
                  </tr>
                  `
                : ''
              : ''
            }
            ${Space({ insideTr: true, className: 'newsletterBottom45px' })}
          </tbody>
        </table>`, ctaHref?.href ?? "#", textColor)}
      </td>
    `

    html += `</tr>`;

    if (i < cardEntries.length - 1)
      html += Space({ insideTr: true, className: 'newsletterBottom20px' });
  }

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });

  html += `
  <tr>
    <td class="blackWeekCta" width="100%" align="center" style="background: ${ctaBg}; color: ${ctaText};">
      
      <a href="${renderType !== 'landing' ? ctaHref?.href ?? '#' : getCategoryLink(catHref)}" class="blackWeekCtaBorder" style="display: block; width: 100%; text-decoration: none; color: ${ctaText}; border-color: ${ctaBg};">
        ${renderType !== 'landing' ? getPhrase('Get codes') : getPhrase('Shop now')}
      </a>
      
    </td>
  </tr>
  ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
  `

  html += `
    <tr>
      <td align="center">
        <span>
        ${Paragraph({
          text: queries?.offer_date ?? 'Card offer date not found',
          spanStyle: `color: ${sectionTitle}`,
          align: 'center',
          insideTable: true,
          tableContainer: false,
          className: 'blackWeekDate',
        })}
        </span>
      </td>
    </tr>
  `;

  html += Space({ insideTr: true, className: 'newsletterBottom80px' });

  html += `
      </table>
    </td>
  </tr>
  `;

  return html;
};
