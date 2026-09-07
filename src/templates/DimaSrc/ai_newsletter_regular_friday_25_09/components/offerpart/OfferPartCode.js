import { OfferPartCode as OfferPartCodeComponent } from '../OfferPartCode';

export const OfferPartCode = ({
  country,
  data,
  href,
  getPhrase,
  type,
  queries,
  OfferPart,
}) => {
  if (!OfferPart || OfferPart.type !== 'code') return '';

  return OfferPartCodeComponent({
    country,
    data,
    href,
    getPhrase,
    type,
    queries,
    OfferPart,
  });
};