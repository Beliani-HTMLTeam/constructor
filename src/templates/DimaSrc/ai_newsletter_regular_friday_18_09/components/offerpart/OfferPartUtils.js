export const getOfferPartData = (queries, type) => {
  if (type === 'code') {
    return {
      offerParts: queries.offerPart || [],
      codes: null,
    };
  }
  
  if (type === 'codes') {
    return {
      offerParts: queries.offerPart || [],
      codes: queries.codes || [],
    };
  }
  
  return {
    offerParts: [],
    codes: null,
  };
};

export const validateOfferPart = (OfferPart) => {
  if (!OfferPart) return false;
  return OfferPart.type === 'code' || OfferPart.type === 'codes';
};