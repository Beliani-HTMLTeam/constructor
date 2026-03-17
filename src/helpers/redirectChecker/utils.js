import { staticTranslations } from '@/api/translations';
import { getState } from '@/main/state/appState';
import { getQueryLink } from '../getQueryLink';

let reverseMapCache = null;

export const buildReverseMaps = () => {
  if (reverseMapCache !== null) {
    console.log('Returning cached reverse maps');
    return reverseMapCache;
  }

  if (!staticTranslations.category_links.slug) {
    console.warn('No category_links.slug found');
    reverseMapCache = {};
    return reverseMapCache;
  }

  const data = staticTranslations.category_links;
  const slugs = data.slug || [];

  reverseMapCache = {};

  slugs.forEach((sourceSlug, colIndex) => {
    if (!sourceSlug) return;

    const map = {};
    Object.keys(data).forEach((key) => {
      if (key === 'slug') return;
      const arr = data[key];
      if (Array.isArray(arr) && arr[colIndex]) {
        const value = String(arr[colIndex]).trim().toLowerCase();
        if (value) map[value] = key;
      }
    });
    reverseMapCache[sourceSlug.toLowerCase()] = map;
  });

  console.log('✅ Reverse maps built for slugs:', Object.keys(reverseMapCache));
  return reverseMapCache;
};

export const getCategoryLinkForTargetShop = (input, targetShop) => {
  const targetSlug = String(targetShop.slug).toLowerCase();
  console.log(`[Translate] Target: ${targetSlug} | Input: ${input}`);

  const data = staticTranslations.category_links;
  if (!data || !Array.isArray(data.slug)) {
    console.warn('Category translations not loaded');
    return input;
  }

  // for BE shop
  let effectiveTargetSlug = targetSlug;
  if (targetSlug === 'be') {
    const currentLang = getState('country')?.toLowerCase() || getState('language')?.toLowerCase() || 'befr';

    if (currentLang.includes('nl') || currentLang === 'benl') {
      effectiveTargetSlug = 'benl';
    } else {
      effectiveTargetSlug = 'befr';
    }
  } else if (targetSlug === 'ch' || targetSlug === 'chfr' || targetSlug === 'chde') {
    const currentLang = getState('country')?.toLowerCase() || 'chde';

    effectiveTargetSlug = currentLang.includes('fr') || currentLang === 'chfr' ? 'chfr' : 'chde';
    console.log(`[CH special] Mapped to ${effectiveTargetSlug}`);
  }

  const slugIndex = data.slug.findIndex((s) => String(s).toLowerCase() === effectiveTargetSlug);
  if (slugIndex === -1) {
    console.warn(`Slug "${effectiveTargetSlug}" not found in translation sheet`);
    return input;
  }

  let sourceSlug = 'fr'; // safe default

  const currentCountry = getState('country')?.toLowerCase();
  if (currentCountry) {
    sourceSlug = currentCountry;
    console.log(`[Source Slug] Using app state: ${sourceSlug}`);
  } else {
    try {
      const url = new URL(
        input.startsWith('http') ? input : targetShop.origin + (input.startsWith('/') ? input : '/' + input)
      );
      const domain = url.hostname.toLowerCase();
      const path = url.pathname.toLowerCase();

      const domainMap = {
        'beliani.ch': path.includes('/de/') || path.includes('/dede') ? 'chde' : 'chfr',
        'beliani.be': path.includes('/nl/') ? 'benl' : 'befr',
        'beliani.de': 'de',
        'beliani.fr': 'fr',
        'beliani.pl': 'pl',
        'beliani.es': 'es',
        'beliani.it': 'it',
        'beliani.nl': 'nl',
        'beliani.at': 'at',
        'beliani.pt': 'pt',
        'beliani.se': 'se',
        'beliani.hu': 'hu',
        'beliani.dk': 'dk',
        'beliani.cz': 'cz',
        'beliani.fi': 'fi',
        'beliani.no': 'no',
        'beliani.sk': 'sk',
        'beliani.ro': 'ro',
        'beliani.co.uk': 'uk',
      };

      const domainKey = Object.keys(domainMap).find((key) => domain.includes(key));
      if (domainKey) {
        sourceSlug = domainMap[domainKey];
        console.log(`[Source Slug] Guessed from domain+path: ${sourceSlug}`);
      }
    } catch (e) {
      console.warn('Could not detect source slug from URL: ', e);
    }
  }

  const reverseMaps = buildReverseMaps();
  const sourceReverse = reverseMaps[sourceSlug] || {};

  // Extract clean pathname
  let pathname = '/';
  try {
    const url = new URL(
      input.startsWith('http') ? input : targetShop.origin + (input.startsWith('/') ? input : '/' + input)
    );
    pathname = url.pathname;
    if (pathname !== '/' && pathname.endsWith('/')) pathname = pathname.slice(0, -1);
  } catch (e) {}

  const segments = pathname.split('/').filter(Boolean);

  if (segments.length === 0) {
    return targetShop.origin + '/';
  }

  const translatedParts = segments.map((segment) => {
    const lower = segment.toLowerCase();

    // Reverse lookup: translated → canonical English key
    let canonical = sourceReverse[lower];

    // Fallback: maybe the segment is already the English key
    if (!canonical && data[lower]) canonical = lower;

    if (!canonical) {
      console.log(`Missing in sheet: "${segment}" (from ${sourceSlug})`);
      return segment;
    }

    // Get translation for target shop
    const translation = data[canonical]?.[slugIndex];

    if (!translation || translation.trim() === '') {
      console.log(`No translation for "${canonical}" in target slug "${targetSlug}"`);
      return segment;
    }

    return translation.trim();
  });

  // Build final URL
  const finalPath = translatedParts.join('/');
  const finalUrl = new URL(targetShop.origin);
  finalUrl.pathname = finalPath ? '/' + finalPath : '/';

  const result = getQueryLink(finalUrl);
  console.log(`[Result for ${targetSlug.toUpperCase()}] ${result}`);
  return result;
};

export const checkRealRedirects = (data, urlToOriginalAndShop) => {
  const viewSuffixes = [
    '/alle+produkte',
    '/vsechny+produkty',
    '/wszystkie+produkty',
    '/all+products',
    '/tutti+i+prodotti',
    '/todos+los+productos',
    '/vsechny-produkty',
    '/wszystkie-produkty',
    '/alle-produkte',
    '/looks',
  ];

  const realRedirects = Object.entries(data)
    .filter(([_, info]) => {
      if (!info.redirected) return false;
      if (info.note?.includes('trailing slash')) return false;

      try {
        const finalUrl = new URL(info.final).pathname.toLowerCase();
        if (viewSuffixes.some((suffix) => finalUrl.endsWith(suffix))) {
          console.log(`Ignoring view-suffix redirect: ${info.original} → ${info.final}`);
          return false;
        }
      } catch {}

      return true;
    })
    .map(([originalUrl, info]) => {
      const meta = urlToOriginalAndShop.get(originalUrl) || {
        original: originalUrl,
        shopSlug: '???',
      };
      return { ...info, baseOriginal: meta.original, shop: meta.shopSlug };
    });

  return realRedirects;
};
