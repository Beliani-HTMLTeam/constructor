import { Product } from '@/entities/Product.js';

const allowedSellers = [
  'Beliani UK',
  'Beliani DE',
  'Beliani FR',
  'Beliani AT',
  'Beliani SP',
  'Beliani PL',
  'Beliani NL',
  'Beliani PT',
  'Beliani IT',
  'Beliani SE',
  'Beliani HU',
  'Beliani DK',
  'Beliani CZ',
  'Beliani FI',
  'Beliani NO',
  'Beliani SK',
  'Beliani BE',
  'Beliani RO',
  'Beliani SI',
  'Beliani HR',
];

export function normalizeProducts(products) {
  const normalized = [];
  const master_products = {};

  // tldr; we need to normalize usernames to ensure consistent matching of sellers

  // after adding compression we started persisting the raw pasted JSON (to compress it),
  // so usernames now reach this step unmodified.
  // Normalizing (e.g., stripping trailing dots/whitespace) keeps seller
  // matching stable ("Beliani." vs "Beliani") and prevents dropping products.
  const normalizeUsername = (value) => String(value ?? '').replaceAll('.', '').trim();

  for (const element of products) {
    if (!('saved_params' in element)) continue;
    const username = normalizeUsername(element.saved_params.username);
    if (username === 'Beliani') {
      master_products[String(element.id)] = element;
    }
  }

  for (const element of products) {
    if (!('saved_params' in element)) continue;

    const username = normalizeUsername(element.saved_params.username);
    const saved_params = { ...element.saved_params, username };

    if (username === 'Beliani') {
      normalized.push(new Product({ ...element, saved_params, hrefs: element.ShopSAAlias }));
    }

    if (allowedSellers.includes(username)) {
      const masterKey = String(element.saved_params.master_sa ?? '');
      const masterAlias = masterKey ? master_products[masterKey]?.ShopSAAlias : undefined;
      const hrefs = masterAlias ?? element.ShopSAAlias;
      
      if (!hrefs) continue;

      normalized.push(new Product({ ...element, saved_params, hrefs }));
    }
  }

  console.log("normilize products", normalized.filter((product) => product.country === 'hr').filter((product) => product.href.hrefs['croatian'].value === ""));
  
  return normalized;
}
