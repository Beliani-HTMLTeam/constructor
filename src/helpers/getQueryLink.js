import { getState } from '@/main/state/appState';
import { computeValue } from '@/helpers/computeValue.js';

import toast from '@/helpers/toastManager.js';

export function addParams({ links }) {
  const country = getState('country');
  const template = getState('template');
  const ids = getState('ids');

  const processLink = (link) => {
    if ('value' in link) {
      return link.value;
    }

    let newValue = '';
    let value = 'src' in link ? link.src : link.href;
    if (value && typeof value === 'object' && 'type' in value) {
      newValue = computeValue({ ...link });
    } else {
      newValue = { href: value };
    }

    if (newValue && typeof newValue === 'object' && 'query' in newValue) {
      try {
        const url = new URL(newValue.href);
        if (template.type === 'newsletter') {
          url.searchParams.set('utm_source', 'newsletter');
          url.searchParams.set('utm_medium', 'email');
          url.searchParams.set('utm_campaign', ids[country]);
        }
        newValue = url;
      } catch (e) {
        console.warn('Invalid URL in link processing', newValue.href, e.message);
        return newValue.href;
      }
    }

    return 'src' in newValue ? newValue.src : newValue.href;
  };

  if (Array.isArray(links)) {
    return links.map(processLink);
  }

  if (links && typeof links === 'object') {
    const result = {};
    for (const [key, value] of Object.entries(links)) {
      if (typeof value === 'string') {
        result[key] = processLink({ href: value });
      } else if (value && typeof value === 'object') {
        result[key] = processLink(value);
      } else {
        result[key] = value;
      }
    }
    return result;
  }

  return links;
}

export function addParamsProduct(product) {
  const template = getState('template');
  const country = getState('country');
  const ids = getState('ids');

  try {
    const url = new URL(product.href);
    if (template.type === 'newsletter') {
      url.searchParams.set('utm_source', 'newsletter');
      url.searchParams.set('utm_medium', 'email');
      url.searchParams.set('utm_campaign', ids[country]);
    }
    return {
      ...product,
      href: url.href,
    };
  } catch (error) {
    toast({ message: 'Product url parse error.\nCheck console for details!' });
    console.error(error.message);
    return;
  }
}

export function getQueryLink(item) {
  const template = getState('template');
  const country = getState('country');
  const ids = getState('ids');

  if (item.href === undefined) return undefined;
  if (item.href === null) return undefined;

  const queryLink = new URL(item.href);

  if (template.type === 'newsletter') {
    queryLink.searchParams.set('utm_source', 'newsletter');
    queryLink.searchParams.set('utm_medium', 'email');
    queryLink.searchParams.set('utm_campaign', ids[country]);
  }

  return queryLink;
}
