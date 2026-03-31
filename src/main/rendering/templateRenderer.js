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

  // Handle translations if needed
  if (!selectedCampaign.data && templateToRender.tableQueries.length > 0) {
    try {
      setState('loading', true);

      // Check if we already have queries for this campaign and slug
      const campaignId = selectedCampaign.startId;
      const existingQueries = getQueries(campaignId, country);

      let queries;
      if (Object.keys(existingQueries).length > 0) {
        // Use cached queries
        queries = existingQueries;
        console.log(`Using cached queries for campaign ${campaignId}, slug ${country}`);
      } else {
        // Fetch new queries
        const translationsResult = await fetchTranslations({
          tableQueries: templateToRender.tableQueries,
          tableName: spreadsheet,
        });

        queries = {};
        for (const translation of translationsResult) {
          queries[translation.name] = translation.data;
        }

        // Cache queries
        setQueries(campaignId, country, queries);
        console.log(`Cached queries for campaign ${campaignId}, slug ${country}`);
      }

      setState('loading', false);
      setState('queries', queries);
    } catch (error) {
      setState('loading', false);
      console.error(error);

      toast.error('Something went wrong. More details in console.');
    }
  }

  // Handle fallback data
  if (selectedCampaign.data && templateToRender.tableQueries.length > 0) {
    const campaignId = selectedCampaign.startId;
    const existingQueries = getQueries(campaignId, country);

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
      setQueries(campaignId, country, queries);
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

    if (finalHtml.includes('undefined')) {
      if (confirm('Do you want to render template with undefined value?')) {
        root.innerHTML = finalHtml;
        return;
      } else {
        toast.error('Rendering cancelled. Check campaign file, template or products list for mistakes!');
      }
    } else {
      root.innerHTML = finalHtml;
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong. More details in console.');
  }
}
