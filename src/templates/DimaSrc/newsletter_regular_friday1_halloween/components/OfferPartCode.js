import { Paragraph } from '@/components/Paragraph.js';
import { Space } from '@/components/Space.js';
import { GetCode } from '@/components/getCode.js';
import { LandingOfferPart, NewsletterOfferPart } from './utils/offerPart/components';

export function OfferPartCode({
  OfferPart,
  country,
  getPhrase,
  queries,
  href,
  type,
  data
}) {
  const copyCodeLabel = getPhrase('Copy code')
  const {
    color, overrides, backgroundColor, alignment, germanSeparatingLine, spaceClass, isSpaceBetweenAllParts, spanStyle, copyCodeColor
  } = OfferPart;

  const newsletter = NewsletterOfferPart({
    country,
    color,
    data,
    getPhrase,
    queries,
    href,
    type,
    backgroundColor,
    germanSeparatingLine,
    spaceClass,
    isSpaceBetweenAllParts,
    spanStyle,
    overrides,
  });
  const landing = LandingOfferPart({
    country,
    color,
    data,
    getPhrase,
    queries,
    href,
    type,
    backgroundColor,
    germanSeparatingLine,
    spaceClass,
    isSpaceBetweenAllParts,
    spanStyle,
    copyCodeColor,
    copyCodeLabel,
    overrides: overrides?.landing || overrides || {}
  });
  return `
      <tr>
        <td align="center" class="newsletterContainer">
          <table width="100%" cellspacing="0" cellpadding="0" border="0">
            ${type === 'newsletter' ? newsletter : landing}
          </table>
       </td>
      </tr>
  `;
}
