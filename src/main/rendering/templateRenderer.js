import { addParams } from '@/helpers/getQueryLink.js';
import { TemplateHandlers } from '@/main/handlers/handlers.js';
import { wrapTemplate, styleTags, getWrapperForCampaign, getWrapperCssForCampaign } from '@/helpers/wrapTemplate.js';
import { normalizeProducts } from '@/utils/normalizeProducts.js';
import { computeValue } from '@/helpers/computeValue.js';
import { getTrackingUrl } from '@/utils/getTrackingUrl.js';
import { root } from '@/app.jsx';
import { showPreview } from '@/main/rendering/preview.js';
import { getState, setState } from '@/main/state/appState';

import { optimizeHtmlImages } from '@/helpers/optimizeHtmlImages.js';

import { toast } from 'sonner';
import { decompress } from 'compress-json';
import { COMPRESSED_PRODUCTS_MARKER } from '@main/ui/manageProducts/constants.js';
import { dynamicTranslations, translationCache, staticTranslations } from '@/api';

let latestRenderId = 0;

const purgeCss = (html, css) => {
  const used = extractUsedSelectors(html);
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');

  const result = processCss(css, used);
  return result.replace(/\n\s*\n\s*\n/, '\n\n').trim();
};

const extractUsedSelectors = (html) => {
  const tags = new Set();
  const classes = new Set();
  const ids = new Set();
  const attributes = new Set();

  for (const match of html.matchAll(/<([a-zA-Z][\w:-]*)\b/g)) {
    tags.add(match[1].toLowerCase());
  }

  for (const match of html.matchAll(/\bclass\s*=\s*["']([^"']*)["']/gi)) {
    for (const cls of match[1].split(/\s+/)) {
      if (cls) classes.add(cls);
    }
  }

  for (const match of html.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)) {
    ids.add(match[1]);
  }

  for (const match of html.matchAll(/\s([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/g)) {
    attributes.add(match[1].toLowerCase());
  }

  return {
    tags,
    classes,
    ids,
    attributes,
  };
};

const processCss = (css, used) => {
  let output = '';
  let i = 0;

  while (i < css.length) {
    if (/\s/.test(css[i])) {
      output += css[i];
      i++;
      continue;
    }

    const openBrace = findNextOutsideQuotes(css, '{', i);
    const semicolon = findNextOutsideQuotes(css, ';', i);

    if (openBrace === -1 && semicolon === -1) {
      output += css.slice(i);
      break;
    }

    if (semicolon !== -1 && (openBrace === -1 || semicolon < openBrace)) {
      output += css.slice(i, semicolon + 1);
      i = semicolon + 1;
      continue;
    }

    const header = css.slice(i, openBrace).trim();

    const closeBrace = findMatchingBrace(css, openBrace);

    if (closeBrace === -1) {
      output += css.slice(i);
      break;
    }

    const body = css.slice(openBrace + 1, closeBrace);

    if (header.startsWith('@')) {
      if (/^@font-face\b/i.test(header)) {
        output += css.slice(i, closeBrace + 1);
        i = closeBrace + 1;
        continue;
      }

      if (/^@(-webkit-)?keyframes\b/i.test(header)) {
        output += css.slice(i, closeBrace + 1);
        i = closeBrace + 1;
        continue;
      }

      if (/^@(media|supports|container|layer|document|scope)\b/i.test(header)) {
        const cleanedBody = processCss(body, used);

        if (cleanedBody.trim()) {
          output += css.slice(i, openBrace + 1) + cleanedBody + '}';
        }

        i = closeBrace + 1;
        continue;
      }

      output += css.slice(i, closeBrace + 1);

      i = closeBrace + 1;
      continue;
    }

    if (selectorIsUsed(header, used)) {
      output += css.slice(i, openBrace + 1) + body + '}';
    }

    i = closeBrace + 1;
  }

  return output;
};

const selectorIsUsed = (selector, used) => {
  const selectors = splitSelectors(selector);

  for (const s of selectors) {
    const clean = s.trim();

    if (!clean) continue;

    if (clean === '*') {
      return true;
    }

    if (/:root\b/.test(clean)) {
      return true;
    }

    const ids = clean.match(/#[a-zA-Z_-][\w-]*/g) || [];

    for (const id of ids) {
      if (used.ids.has(id.slice(1))) {
        return true;
      }
    }

    const classes = clean.match(/\.[a-zA-Z_-][\w-]*/g) || [];

    for (const cls of classes) {
      if (used.classes.has(cls.slice(1))) {
        return true;
      }
    }

    const tags = clean.match(/(^|[\s>+~])([a-zA-Z][\w-]*)/g) || [];

    for (const tag of tags) {
      const name = tag.replace(/^[\s>+~]+/, '').toLowerCase();

      if (used.tags.has(name)) {
        return true;
      }
    }

    const attrs = clean.match(/\[\s*([a-zA-Z_:][\w:.-]*)/g) || [];

    for (const attr of attrs) {
      const name = attr.replace(/[\[\s]/g, '').toLowerCase();

      if (used.attributes.has(name)) {
        return true;
      }
    }

    if (
      /:(hover|active|focus|focus-within|focus-visible|visited|checked|disabled|enabled|selected|target|before|after)\b/i.test(
        clean
      )
    ) {
      if (ids.length || classes.length || tags.length) {
        return true;
      }
    }

    const nested = clean.match(/:(?:has|is|where|not)\(([^()]*)\)/g) || [];

    for (const n of nested) {
      if (selectorIsUsed(n.replace(/^:[^(]+\(/, '').replace(/\)$/, ''), used)) {
        return true;
      }
    }
  }

  return false;
};

const splitSelectors = (selector) => {
  const result = [];

  let start = 0;
  let depthParen = 0;
  let depthBracket = 0;
  let quote = null;

  for (let i = 0; i < selector.length; i++) {
    const char = selector[i];

    if (quote) {
      if (char === quote && selector[i - 1] !== '\\') {
        quote = null;
      }

      continue;
    }

    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }

    if (char === '(') depthParen++;
    if (char === ')') depthParen--;

    if (char === '[') depthBracket++;
    if (char === ']') depthBracket--;

    if (char === ',' && depthParen === 0 && depthBracket === 0) {
      result.push(selector.slice(start, i));
      start = i + 1;
    }
  }

  result.push(selector.slice(start));

  return result;
};

const findNextOutsideQuotes = (str, char, start) => {
  let quote = null;

  for (let i = start; i < str.length; i++) {
    const c = str[i];

    if (quote) {
      if (c === quote && str[i - 1] !== '\\') {
        quote = null;
      }

      continue;
    }

    if (c === '"' || c === "'") {
      quote = c;
      continue;
    }

    if (c === char) {
      return i;
    }
  }

  return -1;
};

const findMatchingBrace = (str, openIndex) => {
  let depth = 1;
  let quote = null;

  for (let i = openIndex + 1; i < str.length; i++) {
    const c = str[i];

    if (quote) {
      if (c === quote && str[i - 1] !== '\\') {
        quote = null;
      }

      continue;
    }

    if (c === '"' || c === "'") {
      quote = c;
      continue;
    }

    if (c === '{') depth++;

    if (c === '}') {
      depth--;

      if (depth === 0) {
        return i;
      }
    }
  }

  return -1;
};

export async function renderTemplate(getState, setState) {
  if (!getState('country')) return;
  const renderId = ++latestRenderId;
  const isStale = () => renderId !== latestRenderId;

  await staticTranslations.whenReady();
  if (isStale()) return;

  const country = getState('country');
  const templateToRender = getState('template');
  const spreadsheet = templateToRender?.translationsSpreadsheet;
  const selectedCampaign = getState('selectedCampaign');

  if (!selectedCampaign) return toast.error('No campaign selected.');

  if (!templateToRender) return toast.error('No template selected.');

  // Handle translations if needed
  if (!selectedCampaign.data && templateToRender.tableQueries.length > 0) {
    try {
      setState('loading', true);

      // Check if we already have queries for this campaign and slug
      const campaignId = selectedCampaign.startId;
      const existingQueries = translationCache.getQueries(campaignId, country);

      let queries;
      if (Object.keys(existingQueries).length > 0) {
        // Use cached queries
        queries = existingQueries;
        console.log(`Using cached queries for campaign ${campaignId}, slug ${country}`);
      } else {
        // Fetch new queries
        const translationsResult = await dynamicTranslations.fetch({
          tableQueries: templateToRender.tableQueries,
          tableName: spreadsheet,
        });

        queries = {};
        for (const translation of translationsResult) {
          queries[translation.name] = translation.data;
        }

        // Cache queries
        translationCache.setQueries(campaignId, country, queries);
        console.log(`Cached queries for campaign ${campaignId}, slug ${country}`);
      }

      if (isStale()) return;
      setState('loading', false);
      setState('queries', queries);
    } catch (error) {
      if (isStale()) return;
      setState('loading', false);
      console.error(error);

      toast.error('Something went wrong. More details in console.');
    }
  }

  // Handle fallback data
  if (selectedCampaign.data && templateToRender.tableQueries.length > 0) {
    const campaignId = selectedCampaign.startId;
    const existingQueries = translationCache.getQueries(campaignId, country);

    let queries;
    if (Object.keys(existingQueries).length > 0) {
      queries = existingQueries;
      console.log(`Using cached fallback queries for campaign ${campaignId}, slug ${country}`);
    } else {
      queries = {};
      for (const translation of templateToRender.tableQueries) {
        queries[translation.name] = translation.fallback;
      }
      // Cache fallback queries too
      translationCache.setQueries(campaignId, country, queries);
      console.log(`Cached fallback queries for campaign ${campaignId}, slug ${country}`);
    }

    setState('queries', queries);
  }

  // Get country-specific data
  let slugData = {};
  if (!!selectedCampaign.data) {
    if (country in selectedCampaign.data) {
      slugData = selectedCampaign.data[country] || {};
    } else {
      return toast.error(`Country ${country} not found in the ${selectedCampaign.name} campaign data.`);
    }
  }

  // Process links and products
  const links = addParams({ links: templateToRender.links });
  const ids = getState('ids');

  const isCompressedProducts = (value) =>
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value[COMPRESSED_PRODUCTS_MARKER] === true &&
    Array.isArray(value.payload);

  const decompressIfNeeded = (value) => {
    if (!value) return value;

    if (!isCompressedProducts(value)) return value;

    try {
      return decompress(value.payload);
    } catch {
      return [];
    }
  };

  const ensureNormalizedProducts = (value) => {
    const arr = Array.isArray(value) ? value : [];

    // check if normalization is needed
    const needsNormalize = arr.some((p) => p && typeof p === 'object' && 'saved_params' in p);

    return needsNormalize ? normalizeProducts(arr) : arr;
  };

  const localProducts = getState('selectedCampaign')?.products;
  let productsForTemplate = [];

  if (localProducts) {
    productsForTemplate = ensureNormalizedProducts(decompressIfNeeded(localProducts));
  } else {
    let parsedIndex = [];

    try {
      const rawIndex = localStorage.getItem('products');

      parsedIndex = rawIndex ? JSON.parse(rawIndex) : [];
    } catch {
      parsedIndex = [];
    }

    // cast to string to avoid type issues
    const campaignEntry = Array.isArray(parsedIndex)
      ? parsedIndex.find((item) => String(item?.campaign_id) === String(getState('selectedCampaign').startId))
      : null;

    productsForTemplate = ensureNormalizedProducts(decompressIfNeeded(campaignEntry?.products));
  }

  // Create template handlers
  const handlers = new TemplateHandlers({
    // templates: getState('queries').templates,
    // header: getState('queries').header,
    // footer: getState('queries').footer,
    // categoriesLinks: getState('queries').categoriesLinks,
    // categoriesTitles: getState('queries').categoriesTitles,
    products: productsForTemplate,
  });

  try {
    const state = {
      queries: getState('queries'),
      country: getState('country'),
      loading: getState('loading'),
      ids: getState('ids'),
      translations: getState('translations'),
      selectedCampaign: getState('selectedCampaign'),
      selectedTemplates: getState('selectedTemplates'),
      shop: getState('shop'),
    };

    if (typeof globalThis !== 'undefined') {
      globalThis.collectedCtaStyles = new Set();
    }

    const html = await templateToRender.template({
      ...state,
      ...templateToRender,
      background: templateToRender.background || '#ffffff',
      country,
      id: ids[country],
      categories: templateToRender.categories?.map((item) =>
        Array.isArray(item) ? item.map((item) => computeValue({ ...item })) : computeValue({ ...item })
      ),
      timer: computeValue(templateToRender.timer),
      type: templateToRender.type,
      getProductById: handlers.getProductById,
      getCategoryTitle: handlers.getCategoryTitle,
      getCategoryLink: handlers.getCategoryLink,
      getFooter: handlers.getFooter,
      getHeader: handlers.getHeader,
      getPhrase: handlers.getPhrase,
      add_utm: (link) =>
        templateToRender.type == 'newsletter'
          ? link +
            `${link.includes('?') ? '&' : '?'}utm_source=newsletter&utm_medium=email&utm_campaign=${ids[country]}`
          : link,
      getCampaignData: (key) => {
        if (key in slugData) {
          return slugData[key];
        } else {
          return undefined;
        }
      },
      links: links,
      utm: getTrackingUrl({ type: templateToRender.type, id: ids[country] }),
    });

    if (isStale()) return;

    let generatedCtaCss = '';
    if (typeof globalThis !== 'undefined' && globalThis.collectedCtaStyles) {
      generatedCtaCss = Array.from(globalThis.collectedCtaStyles).join('\n');
    }

    let effectiveCss =
      (templateToRender.css ?? '') +
      (templateToRender.additionalCss ? '\n' + templateToRender.additionalCss : '') +
      (generatedCtaCss ? '\n' + generatedCtaCss : '');
    const withStylesOrNo =
      'css' in templateToRender || templateToRender.additionalCss || generatedCtaCss
        ? styleTags(effectiveCss) + html
        : html;
    
    let cleaned = '';
    
    if (templateToRender?.optimizeCss)
      cleaned = purgeCss(html, effectiveCss);
    else
      cleaned = effectiveCss;

    const wrappedHtml = templateToRender.wrapper
      ? wrapTemplate(getWrapperForCampaign(templateToRender.wrapper, selectedCampaign.date), {
          style: getWrapperCssForCampaign(cleaned, selectedCampaign.date),
          html: html,
        })
      : withStylesOrNo;

    const finalHtml = optimizeHtmlImages(wrappedHtml, getState);

    setState('html', finalHtml);

    if (finalHtml.includes('undefined')) {
      if (confirm('Do you want to render template with undefined value?')) {
        showPreview(finalHtml, root);
        return;
      } else {
        toast.error('Rendering cancelled. Check campaign file, template or products list for mistakes!');
      }
    } else {
      showPreview(finalHtml, root);
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong. More details in console.');
  }
}

export async function renderTemplateHtmlForCountry({ templateToRender, selectedCampaign, ids, queries }) {
  await staticTranslations.whenReady();
  const country = getState('country');

  const isCompressedProducts = (value) =>
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value[COMPRESSED_PRODUCTS_MARKER] === true &&
    Array.isArray(value.payload);

  const decompressIfNeeded = (value) => {
    if (!value) return value;
    if (!isCompressedProducts(value)) return value;
    try {
      return decompress(value.payload);
    } catch {
      return [];
    }
  };

  const ensureNormalizedProducts = (value) => {
    const arr = Array.isArray(value) ? value : [];
    const needsNormalize = arr.some((p) => p && typeof p === 'object' && 'saved_params' in p);
    return needsNormalize ? normalizeProducts(arr) : arr;
  };

  const localProducts = selectedCampaign?.products;
  let productsForTemplate = [];

  if (localProducts) {
    productsForTemplate = ensureNormalizedProducts(decompressIfNeeded(localProducts));
  } else {
    let parsedIndex = [];
    try {
      const rawIndex = localStorage.getItem('products');
      parsedIndex = rawIndex ? JSON.parse(rawIndex) : [];
    } catch {
      parsedIndex = [];
    }
    const campaignEntry = Array.isArray(parsedIndex)
      ? parsedIndex.find((item) => String(item?.campaign_id) === String(selectedCampaign.startId))
      : null;
    productsForTemplate = ensureNormalizedProducts(decompressIfNeeded(campaignEntry?.products));
  }

  const handlers = new TemplateHandlers({ products: productsForTemplate });
  const links = addParams({ links: templateToRender.links });

  let slugData = {};
  if (selectedCampaign.data && country in selectedCampaign.data) {
    slugData = selectedCampaign.data[country] || {};
  }

  if (typeof globalThis !== 'undefined') {
    globalThis.collectedCtaStyles = new Set();
  }

  const html = await templateToRender.template({
    queries,
    country,
    loading: false,
    ids,
    translations: getState('translations'),
    selectedCampaign,
    selectedTemplates: getState('selectedTemplates'),
    shop: getState('shop'),
    ...templateToRender,
    background: templateToRender.background || '#ffffff',
    id: ids[country],
    categories: templateToRender.categories?.map((item) =>
      Array.isArray(item) ? item.map((item) => computeValue({ ...item })) : computeValue({ ...item })
    ),
    type: templateToRender.type,
    getProductById: handlers.getProductById,
    getCategoryTitle: handlers.getCategoryTitle,
    getCategoryLink: handlers.getCategoryLink,
    getFooter: handlers.getFooter,
    getHeader: handlers.getHeader,
    getPhrase: handlers.getPhrase,
    add_utm: (link) =>
      templateToRender.type === 'newsletter'
        ? link + `${link.includes('?') ? '&' : '?'}utm_source=newsletter&utm_medium=email&utm_campaign=${ids[country]}`
        : link,
    getCampaignData: (key) => (key in slugData ? slugData[key] : undefined),
    links,
    utm: getTrackingUrl({ type: templateToRender.type, id: ids[country] }),
  });

  let generatedCtaCss = '';
  if (typeof globalThis !== 'undefined' && globalThis.collectedCtaStyles) {
    generatedCtaCss = Array.from(globalThis.collectedCtaStyles).join('\n');
  }

  const effectiveCss =
    (templateToRender.css ?? '') +
    (templateToRender.additionalCss ? '\n' + templateToRender.additionalCss : '') +
    (generatedCtaCss ? '\n' + generatedCtaCss : '');
  const withStylesOrNo =
    'css' in templateToRender || templateToRender.additionalCss || generatedCtaCss
      ? styleTags(effectiveCss) + html
      : html;
  return templateToRender.wrapper
    ? wrapTemplate(getWrapperForCampaign(templateToRender.wrapper, selectedCampaign.date), {
        style: getWrapperCssForCampaign(effectiveCss, selectedCampaign.date),
        html,
      })
    : withStylesOrNo;
}
