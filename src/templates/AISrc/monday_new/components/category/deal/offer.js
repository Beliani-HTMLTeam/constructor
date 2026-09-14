import { Paragraph } from '../../Paragraph.js';
import { CTA } from '../../CTA.js';
import { Space } from '../../Space.js';

export const renderOfferSection = ({
  queries,
  renderType = 'newsletter',
  links,
  getPhrase,
  offerTexts,
  ctaSrc = null,
  theme = {},
  combineOfferParts = false,
  ctaSettings = {},
  prodSettings = {},
  offerSpaceAfter = '',
  tdClass = 'newsletterContainer'
}) => {
  console.log(theme, 'theme in renderOfferSection');
  const t = getPhrase || ((s) => s);
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  const missingTranslation = 'TRANSLATION NOT FOUND';

  const resolveOfferText = (preferred, fallbackIndex) => {
    const value = preferred ?? offerItems[fallbackIndex] ?? queries?.offer?.[fallbackIndex];

    if (value == null || value === '') {
      return missingTranslation;
    }

    return value;
  };

  // Translation table mapping:
  // Row 25: Offer title (e.g. Gift with purchase) -> offerItems[0]
  // Row 26: Offer part 1 (e.g. Get a free lamp) -> offerItems[1]
  // Row 27: Offer part 2 (e.g. Choose one of four designs...) -> offerItems[2]
  // Row 28: Code: xxx -> offerItems[3]
  // Row 29: Offer date with variable -> queries.offer_date[0] / offerItems[4]
  // Row 30: Get Code -> queries.get_code[0] / offerItems[5]
  const offerTitle = offerTexts?.[0]
    ? resolveOfferText(offerTexts?.[0], 0)
    : getPhrase('Gift with purchase')
  const offerPart1 = resolveOfferText(offerTexts?.[1], 1);
  let offerPart2 = resolveOfferText(offerTexts?.[2], 2);
  const offerDate = queries?.offer_date?.[0] ?? offerItems[4] ?? '';
  const translatedGetCode = t('Get code') || missingTranslation;
  const codeRow = queries?.offer_code?.[0] ?? offerItems[3] ?? '';

  let codeText = '';

  const getCodeBtnText =
    renderType === 'newsletter'
      ? translatedGetCode
      : codeRow.includes('xxx')
        ? `MISSING CODE`
        : codeRow
          ? codeRow.split(':')[1].length > 0
            ? codeRow.split(':')[0].toUpperCase() + ':' + codeRow.split(':')[1]
            : `MISSING CODE`
          : `MISSING CODE`;

  if (combineOfferParts) {
    offerPart2 = `${offerPart2} ${resolveOfferText(offerTexts?.[3], 3)}`;
    if (getCodeBtnText !== 'MISSING CODE')
      codeText = codeRow.split(':')[1].trim();
    else
      codeText = 'xxx';
  } else {
    codeText = resolveOfferText(offerTexts?.[3], 3);
  }

  if (codeRow.length > 0 && getCodeBtnText !== 'MISSING CODE')
    codeText = codeRow.split(':')[1].trim();
  else
    codeText = 'xxx';

  const bgColor = theme?.offerBg ?? theme?.primary ?? '#750000';
  const titleColor = theme?.offerTitleColor ?? theme?.offerPrg1Color ?? '#ffffff';
  const textColor = theme?.offerPrg1Color ?? '#ffffff';
  const secondaryTextColor = theme?.offerPrg2Color ?? '#FFCCB7';

  // Extract clean code value (e.g. "FreeLamp26")
  const codeValue = typeof codeText === 'string' && codeText.includes(':')
    ? codeText.split(/:\s+/).slice(1).join(': ').trim()
    : codeText || '';

  let html = '';

  html += `
    <tr>
      <td style="background-color: ${bgColor}; color: ${titleColor};" align="center">
        <table cellspacing="0" cellpadding="0" border="0" width="100%" class="${tdClass}">
          ${Space({ insideTr: true, className: 'newsletterBottom40px' })}
          ${offerTitle ? `
            <tr>
              <td align="center">
                <span style="${renderType === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} line-height: 1.2; text-transform: uppercase; letter-spacing: 2px; color: ${titleColor}; display: block; text-align: center;">
                  ${offerTitle}
                </span>
              </td>
            </tr>
            ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
          ` : ''}

          ${offerPart1 ? `
            <tr>
              <td align="center">
                <span class="introRedTitle" style="${renderType === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} line-height: 1.2; color: ${textColor}; display: block; text-align: center;">
                  ${offerPart1}
                </span>
              </td>
            </tr>
            ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
          ` : ''}

          ${offerPart2 ? `
            <tr>
              <td align="center">
                <span class="introRedParagraph" style="${renderType === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 16px; line-height: 1.2; color: ${secondaryTextColor}; display: block; text-align: center;">
                  ${offerPart2}
                </span>
              </td>
            </tr>
            ${Space({ insideTr: true, className: ctaSettings?.spaceBefore ?? 'newsletterBottom15px' })}
          ` : ''}

          <tr>
            <td align="center">
              ${CTA({
                href: links?.TopImageTitle_href || links?.TopImage_href || '#',
                text: getCodeBtnText,
                variant: 'cream',
                type: renderType,
                align: 'center',
                codeValue: codeValue,
                src: renderType === 'newsletter' ? ctaSrc : null,
                getPhrase: getPhrase,
                color: ctaSettings?.color ?? theme?.primary ?? '#750000',
                bg: ctaSettings?.bg ?? theme?.secondary ?? '#ffe0d4',
                theme: theme,
                borderColor: ctaSettings?.borderColor ?? '',
                borderWidth: ctaSettings?.borderWidth ?? '',
                transform: ctaSettings?.transform ?? '',
              })}
            </td>
          </tr>
          ${Space({ insideTr: true, className: ctaSettings?.spaceAfter ?? 'newsletterBottom15px' })}

          ${offerDate ? `
            <tr>
              <td align="center">
                <span style="${renderType === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: ${prodSettings.freebieSize ? prodSettings.freebieSize : 14}px; color: ${textColor}; display: block; text-align: center; line-height: 1.2;">
                  ${offerDate}
                </span>
              </td>
            </tr>
            ${Space({ insideTr: true, className: offerSpaceAfter ?? '' })}
          ` : ''}
        </table>
      </td>
    </tr>
  `;

  return html;
};
