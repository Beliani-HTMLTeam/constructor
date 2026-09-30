import { OfferPartCodes as OfferPartCodesComponent } from '../OfferPartCodes';

export const OfferPartCodes = ({
  color,
  data,
  data2,
  href,
  getPhrase,
  type,
  queries,
  backgroundColor,
}) => {
  if (!data && !data2) return '';

  return `
    <tr>
      <td class="newsletterContainer" style="background-color: ${backgroundColor}">
        ${OfferPartCodesComponent({
          color,
          data,
          data2,
          href,
          getPhrase,
          type,
          queries,
        })}
      </td>
    </tr>
  `;
};