import { getState } from '@/main/state/appState';

const free = {
  UK: 'FREE',
  PL: 'GRATIS',
  DE: 'GRATIS',
  AT: 'GRATIS',
  CHDE: 'GRATIS',
  NL: 'GRATIS',
  FR: 'GRATUITE',
  CHFR: 'GRATUITE',
  CHIT: 'GRATIS',
  BEFR: 'GRATUITE',
  BENL: 'GRATIS',
  ES: 'GRATIS',
  PT: 'GRÁTIS',
  IT: 'GRATIS',
  DK: 'GRATIS',
  NO: 'GRATIS',
  FI: 'ILMAINEN',
  SE: 'PÅ KÖPET',
  CZ: 'ZDARMA',
  SK: 'GRÁTIS',
  HU: 'AJÁNDÉK',
  RO: 'CADOU',
};

export function priceFree(product, normalPrice) {
  const country = getState('country');
  const normal_product = {
    ...product,
    lowPrice: product.lowPrice,
    highPrice: product.highPrice,
  };
  const free_product = {
    ...product,
    lowPrice: free[country],
    highPrice: product.lowPrice,
  };
  return normalPrice === true ? normal_product : free_product;
}

// export function priceFree(product) {
//   const country = getState("country")

//   return {...product, lowPrice: free[country], highPrice: product.lowPrice}
// }
