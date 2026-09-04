import { OfferPartRenderer } from './OfferPartRenderer';
import { validateOfferPart } from './OfferPartUtils';

export const OfferPartWrapper = ({
  OfferPart,
  country,
  queries,
  links,
  getPhrase,
  type,
}) => {
  if (!validateOfferPart(OfferPart)) return '';

  return OfferPartRenderer({
    OfferPart,
    country,
    queries,
    links,
    getPhrase,
    type,
  });
};

export { OfferPartCode } from './OfferPartCode';
export { OfferPartCodes } from './OfferPartCodes';
export { OfferPartRenderer } from './OfferPartRenderer';
