import { OfferPartCode } from './OfferPartCode';
import { OfferPartCodes } from './OfferPartCodes';

export const OfferPartRenderer = ({
  OfferPart,
  country,
  queries,
  links,
  getPhrase,
  type,
}) => {
  if (!OfferPart) return '';

  switch (OfferPart.type) {
    case 'code':
      return OfferPartCode({
        country,
        data: queries.offerPart,
        href: links.code_href,
        getPhrase,
        type,
        queries,
        OfferPart,
      });

    case 'codes':
      return OfferPartCodes({
        color: OfferPart.color,
        data: queries.offerPart,
        data2: queries.codes,
        href: links.code_href,
        getPhrase,
        type,
        queries,
        backgroundColor: OfferPart.backgroundColor,
      });

    default:
      return '';
  }
};