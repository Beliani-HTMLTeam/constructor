import { addParams } from '@/helpers/getQueryLink.js';
import { TemplateHandlers } from '@/main/handlers/handlers.js';
import { wrapTemplate } from '@/helpers/wrapTemplate.js';
import { fetchTranslations } from '@/api/fetchTranslations.js';
import { normalizeProducts } from '@/utils/normalizeProducts.js';
import { computeValue } from '@/helpers/computeValue.js';
import { getTrackingUrl } from '@/utils/getTrackingUrl.js';
import { root } from '@/app.js';
import { getState, setState } from '@/main/state/appState';

import { optimizeHtmlImages } from '@/helpers/optimizeHtmlImages.js';

import { toast } from 'sonner';
import { decompress } from 'compress-json';
import { COMPRESSED_PRODUCTS_MARKER } from '@main/ui/manageProducts/constants.js';
import { staticTranslations, setQueries, getQueries } from '@/api/translations';

export async function renderTemplate(getState, setState) {
  if (!getState('country')) return;

  const country = getState('country');
  const templateToRender = getState('template');
  const spreadsheet = templateToRender?.translationsSpreadsheet;
  const selectedCampaign = getState('selectedCampaign');

  if (!selectedCampaign) return toast.error('No campaign selected.');

  if (!templateToRender) return toast.error('No template selected.');

  if (!selectedCampaign.data && templateToRender.tableQueries.length > 0) {
    try {
      setState('loading', true);

      const campaignId = selectedCampaign.startId;
      const existingQueries = getQueries(campaignId, country);

      let queries;
      if (Object.keys(existingQueries).length > 0) {
        queries = existingQueries;
      } else {
        const translationsResult = await fetchTranslations({
          tableQueries: templateToRender.tableQueries,
          tableName: spreadsheet,
        });

        queries = {};
        for (const translation of translationsResult) {
          queries[translation.name] = translation.data;
        }

        setQueries(campaignId, country, queries);
      }

      setState('loading', false);
      setState('queries', queries);
    } catch (error) {
      setState('loading', false);
      console.error(error);

      toast.error('Something went wrong. More details in console.');
    }
  }

  if (selectedCampaign.data && templateToRender.tableQueries.length > 0) {
    const campaignId = selectedCampaign.startId;
    const existingQueries = getQueries(campaignId, country);

    let queries;
    if (Object.keys(existingQueries).length > 0) {
      queries = existingQueries;
    } else {
      queries = {};
      for (const translation of templateToRender.tableQueries) {
        queries[translation.name] = translation.fallback;
      }
      setQueries(campaignId, country, queries);
    }

    setState('queries', queries);
  }

  let slugData = {};
  if (!!selectedCampaign.data) {
    if (country in selectedCampaign.data) {
      slugData = selectedCampaign.data[country] || {};
    } else {
      return toast.error(`Country ${country} not found in the ${selectedCampaign.name} campaign data.`);
    }
  }

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

    const campaignEntry = Array.isArray(parsedIndex)
      ? parsedIndex.find((item) => String(item?.campaign_id) === String(getState('selectedCampaign').startId))
      : null;

    productsForTemplate = ensureNormalizedProducts(decompressIfNeeded(campaignEntry?.products));
  }

  const handlers = new TemplateHandlers({
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

    const html = await templateToRender.template({
      ...state,
      ...templateToRender,
      background: templateToRender.background || '#ffffff',
      country,
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
        templateToRender.type == 'newsletter'
          ? link + `${link.includes('?') ? '&' : '?'}utm_source=newsletter&utm_medium=email&utm_campaign=${ids[country]}`
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

    const withStylesOrNo = 'css' in templateToRender ? `<style>${templateToRender.css}</style>` + html : html;

    const wrappedHtml = templateToRender.wrapper
      ? wrapTemplate(templateToRender.wrapper, {
          style: templateToRender.css ?? '',
          html: html,
        })
      : withStylesOrNo;

    const finalHtml = optimizeHtmlImages(wrappedHtml, getState);

    setState('html', finalHtml);

    if (finalHtml.includes('undefined') && !window.__skipUndefinedConfirm) {
      if (confirm('Do you want to render template with undefined value?')) {
        root.innerHTML = finalHtml;
      } else {
        toast.error('Rendering cancelled. Check campaign file, template or products list for mistakes!');
      }
    } else {
      root.innerHTML = finalHtml;
    }
    window.__skipUndefinedConfirm = false;
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong. More details in console.');
  }
}

// Caller must set country in state before calling — handlers read it internally.
export async function renderTemplateHtmlForCountry({ templateToRender, selectedCampaign, ids, queries }) {
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
    try { return decompress(value.payload); } catch { return []; }
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
    } catch { parsedIndex = []; }
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

  const withStylesOrNo = 'css' in templateToRender ? `<style>${templateToRender.css}</style>` + html : html;
  return templateToRender.wrapper
    ? wrapTemplate(templateToRender.wrapper, { style: templateToRender.css ?? '', html })
    : withStylesOrNo;
}
