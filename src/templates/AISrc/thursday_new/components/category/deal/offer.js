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
  theme,
}) => {
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
  const offerTitle = resolveOfferText(offerTexts?.[0], 0);
  const offerPart1 = resolveOfferText(offerTexts?.[1], 1);
  const offerPart2 = resolveOfferText(offerTexts?.[2], 2);
  const codeText = offerItems[3] ?? queries?.offer?.[3] ?? '';
  const offerDate = queries?.offer_date?.[0] ?? offerItems[4] ?? '';
  const translatedGetCode = t('Get code') || missingTranslation;
  const getCodeBtnText =
    renderType === 'newsletter'
      ? translatedGetCode
      : offerItems[3].includes('xxx')
        ? `MISSING CODE`
        : offerItems[3] ?? `MISSING CODE`

  const bgColor = theme?.primary ?? '#750000';
  const textColor = theme?.primaryText ?? '#ffffff';
  const secondaryTextColor = theme?.secondaryText ?? '#FFCCB7';

  // Extract clean code value (e.g. "FreeLamp26")
  const codeValue = typeof codeText === 'string' && codeText.includes(':')
    ? codeText.split(/:\s+/).slice(1).join(': ').trim()
    : codeText || '';

  let html = '';

  html += `
    <tr>
      <td style="background-color: ${bgColor}; color: ${secondaryTextColor}; padding: 45px 20px 35px 20px;" align="center">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
          ${offerTitle ? `
            <tr>
              <td align="center" style="padding-bottom: 8px;">
                <span style="font-family: 'Open Sans', Arial, sans-serif; font-size: 15px; line-height: 1.3; text-transform: uppercase; letter-spacing: 2px; color: ${secondaryTextColor}; display: block; text-align: center;">
                  ${offerTitle}
                </span>
              </td>
            </tr>
          ` : ''}

          ${offerPart1 ? `
            <tr>
              <td align="center" style="padding-bottom: 12px;">
                <span class="introRedTitle" style="font-family: 'Open Sans', Arial, sans-serif; font-size: 38px; line-height: 1.25; color: ${textColor}; display: block; text-align: center;">
                  ${offerPart1}
                </span>
              </td>
            </tr>
          ` : ''}

          ${offerPart2 ? `
            <tr>
              <td align="center" style="padding-bottom: 28px;">
                <span class="introRedParagraph" style="font-family: 'Open Sans', Arial, sans-serif; font-size: 16px; line-height: 1.5; color: ${secondaryTextColor}; display: block; text-align: center; max-width: 520px; margin: 0 auto;">
                  ${offerPart2}
                </span>
              </td>
            </tr>
          ` : ''}

          <tr>
            <td align="center" style="padding-bottom: 24px;">
              ${CTA({
                href: links?.TopImageTitle_href || links?.TopImage_href || '#',
                text: getCodeBtnText,
                variant: 'cream',
                type: renderType,
                align: 'center',
                codeValue: codeValue,
                src: renderType === 'newsletter' ? ctaSrc : null,
                getPhrase: getPhrase,
              })}
            </td>
          </tr>

          ${offerDate ? `
            <tr>
              <td align="center">
                <span style="font-family: 'Open Sans', Arial, sans-serif; font-size: 14px; color: #ffffff; display: block; text-align: center; letter-spacing: 0.3px;">
                  ${offerDate}
                </span>
              </td>
            </tr>
          ` : ''}
        </table>
      </td>
    </tr>
  `;

  return html;
};
