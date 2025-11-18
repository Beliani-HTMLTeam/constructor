import { addParams } from '@/helpers/getQueryLink.js';
import { TemplateHandlers } from '@/main/handlers/handlers.js';
import { wrapTemplate } from '@/helpers/wrapTemplate.js';
import { fetchTranslations } from '@/api/fetchTranslations.js';
import { normalizeProducts } from '@/utils/normalizeProducts.js';
import { computeValue } from '@/helpers/computeValue.js';
import { getTrackingUrl } from '@/utils/getTrackingUrl.js';
import { root } from '@/app.js';
import { getState, setState } from '@/main/state/appState';

import { toast } from 'sonner';

export async function renderTemplate(getState, setState) {
  if (!getState('country')) return;

  const country = getState('country');
  const templateToRender = getState('template');
  const spreadsheet = templateToRender?.translationsSpreadsheet || null;
  const selectedCampaign = getState('selectedCampaign');

  if (!selectedCampaign) return toast.error('No campaign selected.');

  if (!templateToRender) return toast.error('No template selected.');

  // Handle translations if needed
  if (!selectedCampaign.data && templateToRender.tableQueries.length > 0) {
    try {
      setState('loading', true);

      const translationsResult = await fetchTranslations({
        tableQueries: templateToRender.tableQueries,
        tableName: spreadsheet,
      });

      const queries = {};
      for (const translation of translationsResult) {
        queries[translation.name] = translation.data;
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
    const queries = {};
    for (const translation of templateToRender.tableQueries) {
      queries[translation.name] = translation.fallback;
    }

    setState('queries', queries);
  }

  // Get country-specific data
  let slugData = {};
  if (!!selectedCampaign.data) {
    if (country in selectedCampaign.data) {
      slugData = selectedCampaign.data[country] || {};
    } else {
      return toast.error(
        `Country ${country} not found in the ${selectedCampaign.name} campaign data.`
      );
    }
  }

  // Process links and products
  const links = addParams({ links: templateToRender.links });
  const ids = getState('ids');
  const localProducts = getState('selectedCampaign').products;
  const LSProducts = localProducts || localStorage.getItem('products');
  const parsedProducts = localProducts
    ? normalizeProducts(localProducts)
    : LSProducts
    ? JSON.parse(LSProducts)
    : [];
  const campaignProducts = localProducts
    ? parsedProducts
    : parsedProducts.find((item) => item.campaign_id === getState('selectedCampaign').startId);

  // Create template handlers
  const handlers = new TemplateHandlers({
    // templates: getState('queries').templates,
    // header: getState('queries').header,
    // footer: getState('queries').footer,
    // categoriesLinks: getState('queries').categoriesLinks,
    // categoriesTitles: getState('queries').categoriesTitles,
    products: localProducts ? parsedProducts : campaignProducts?.products,
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
        Array.isArray(item)
          ? item.map((item) => computeValue({ ...item }))
          : computeValue({ ...item })
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
          ? link + '?utm_source=newsletter&utm_medium=email&utm_campaign=' + ids[country]
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

    const withStylesOrNo =
      'css' in templateToRender ? `<style>${templateToRender.css}</style>` + html : html;

    const wrappedHtml = templateToRender.wrapper
      ? wrapTemplate(templateToRender.wrapper, {
          style: templateToRender.css ?? '',
          html: html,
        })
      : withStylesOrNo;

    setState('html', wrappedHtml);

    if (withStylesOrNo.includes('undefined')) {
      if (confirm('Do you want to render template with undefined value?')) {
        return (root.innerHTML = withStylesOrNo);
      } else {
        toast.error(
          'Rendering cancelled. Check campaign file, template or products list for mistakes!'
        );
      }
    } else {
      root.innerHTML = withStylesOrNo;
    }
  } catch (error) {
    console.log(error);
    toast.error('Something went wrong. More details in console.');
  }
}
