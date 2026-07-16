import { Paragraph } from '@/components/Paragraph.js';
import { Space } from '@/components/Space.js';
import { GetCode } from '@/components/getCode.js';
import { LandingOfferPart, NewsletterOfferPart } from './utils/offerPart/components';

export function OfferPartCode({
  country,
  isMonday = false,
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
  overrides,
}) {
  console.log('href:', href, data, isMonday, "overrides:", overrides);
  const newsletter = NewsletterOfferPart({
    country,
    isMonday,
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
    isMonday,
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
    copyCodeLabel, overrides,
    overrides: overrides?.landing || {}
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
