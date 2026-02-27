import { Paragraph } from '@/components/Paragraph.js';
import { Space } from '@/components/Space.js';
import { GetCode } from '@/components/getCode.js';
import { LandingOfferPart, NewsletterOfferPart } from './utils/offerPart/components';

export function OfferPartCode({
  isMonday = false,
  color,
  data,
  getPhrase,
  queries,
  paragraph1,
  paragraph2,
  paragraph3,
  href,
  type,
  backgroundColor,
  germanSeparatingLine
}) {
  console.log('href:', href, data, isMonday);
  const newsletter = NewsletterOfferPart({
    isMonday,
    color,
    data,
    getPhrase,
    queries,
    paragraph1,
    paragraph2,
    paragraph3,
    href,
    type,
    backgroundColor,
    germanSeparatingLine
  });
  const landing = LandingOfferPart({
    isMonday,
    color,
    data,
    getPhrase,
    queries,
    paragraph1,
    paragraph2,
    paragraph3,
    href,
    type,
    backgroundColor,
    germanSeparatingLine
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
