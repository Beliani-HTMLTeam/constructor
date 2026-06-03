import {
  openCampaignHandler,
  openIssueHandler,
  figmaCardHandler,
  openLpHandler,
  purgeDynamicSpreadsheetData,
  runRedirectCheck
} from '@/main/events.js';
import { generateLpLinks } from '@/helpers/generateLpLinks.js';
import { openCreateCampaignModal, openEditCampaignModal } from '@/main/ui/createCampaign.js';
import { openManageProductsModal } from '@/main/ui/manageProducts.js';
import { fetchTranslations } from '@/api/fetchTranslations.js';
import { setQueries, getQueries } from '@/api/translations.js';
import { renderTemplateHtmlForCountry } from '@/main/rendering/templateRenderer.js';

import { toast } from 'sonner';
import { optimizeHtmlImages } from '@/helpers/optimizeHtmlImages.js';
import { getState } from '../state/appState';

export function setupProductsHandler(elements, setState, getState) {
  const { newProducts } = elements;

  newProducts?.addEventListener('click', () => {
    openManageProductsModal({ campaigns: getState('campaigns') ?? [] });
  });
}

export function setupCopyTemplateHandler(elements, getState, jsConfetti) {
  const { copyTemplate } = elements;

  copyTemplate?.addEventListener('click', () => {
    const html = getState('html');
    if (!html) return toast.error('No HTML to copy. Render template first.');

    const finalHtml = optimizeHtmlImages(html, getState);
    navigator.clipboard.writeText(finalHtml);
    toast.success('Template copied to clipboard!');

    const config = getState('config');
    if (!config?.confetti) return;

    jsConfetti.addConfetti({
      emojiSize: 20,
      confettiNumber: 80,
    });
  });
}

export function setupOpenCampaignHandler(elements, getState) {
  const { openCampaign } = elements;

  openCampaign?.addEventListener('click', () => {
    const ids = getState('ids');
    const country = getState('country');
    openCampaignHandler(ids[country]);
  });
}

export function setupOpenIssueHandler(elements, getState) {
  const { openIssue } = elements;

  openIssue?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    if (!selectedCampaign.issueCardId) return toast.error('Issue card id not found.');

    openIssueHandler(selectedCampaign.issueCardId);
  });
}

export function setupPurgeDynamicSpreadsheetHandler(elements) {
  const { purgeDynamicSpreadsheet, tabName, year } = elements;

  purgeDynamicSpreadsheet?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    if (!selectedCampaign || !selectedCampaign.startId) {
      return toast.error('Please select a campaign first!');
    }
    const template = getState('template');
    if (!template) {
      return toast.error('Please select a template first!');
    }
    if (!template.translationsSpreadsheet) {
      return toast.error('Selected template does not have translations spreadsheet data!');
    }
    const currentYear = String(new Date().getFullYear());
    const spreadsheetRaw = template.translationsSpreadsheet.trim();
    let autoYear, autoTabName;
    if (spreadsheetRaw.includes('::')) {
      const [y, t] = spreadsheetRaw.split('::');
      autoYear = y.trim() || currentYear;
      autoTabName = t.trim();
    } else {
      autoYear = currentYear;
      autoTabName = spreadsheetRaw;
    }
    if (!autoTabName) {
      return toast.error('Invalid translations spreadsheet format!');
    }
    purgeDynamicSpreadsheetData(autoYear, autoTabName);
  });
}

export function setupRedirectCheckHandler(elements) {
  const { redirectCheck } = elements;

  redirectCheck?.addEventListener('click', () => {
    runRedirectCheck();
  });
}

export function setupOpenFigmaHandler(elements, getState) {
  const { openFigma } = elements;

  openFigma?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    if (!selectedCampaign.figmaUrl) return toast.error('Figma url not found.');

    figmaCardHandler(selectedCampaign.figmaUrl);
  });
}

export function setupOpenLPHandler(elements, getState) {
  const { openLP } = elements;

  openLP?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    const country = getState('country');

    if (!selectedCampaign.lpId)
      return toast.error('Campaign LP ID not found. Select campaign or update campaign file.');

    const countryOrderOld = [
      'CHDE',
      'CHFR',
      'UK',
      'DE',
      'FR',
      'AT',
      'ES',
      'PL',
      'NL',
      'PT',
      'IT',
      'SE',
      'HU',
      'DK',
      'CZ',
      'FI',
      'NO',
      'SK',
      'BENL',
      'BEFR',
      'RO',
    ];

    const countryOrderNew = [
      'CHDE',
      'CHFR',
      'UK',
      'DE',
      'FR',
      'AT',
      'ES',
      'PL',
      'NL',
      'BENL',
      'BEFR',
      'PT',
      'IT',
      'SE',
      'HU',
      'DK',
      'CZ',
      'FI',
      'NO',
      'SK',
      'RO',
    ];

    const selectedCountryOrder =
      selectedCampaign.version === 'new' ? countryOrderNew : countryOrderOld;

    const lpLinks = generateLpLinks(
      selectedCampaign.lpId,
      selectedCountryOrder,
      selectedCampaign.name,
      selectedCampaign.specialLpIds
    );

    openLpHandler(lpLinks, country);
  });
}

export function setupCopyAllTemplatesHandler(elements, getState, setState) {
  const { copyAllTemplates } = elements;

  copyAllTemplates?.addEventListener('click', async () => {
    const templateToRender = getState('template');
    const selectedCampaign = getState('selectedCampaign');
    const ids = getState('ids');

    if (!templateToRender) return toast.error('No template selected.');
    if (!selectedCampaign) return toast.error('No campaign selected.');
    if (!ids || Object.keys(ids).length === 0) return toast.error('No IDs found.');

    const countries = Object.keys(ids);
    const savedCountry = getState('country');

    const result = {
      type: templateToRender.type,
      campaign: selectedCampaign.name,
      date: selectedCampaign.date,
      templates: {},
    };

    const toastId = toast.loading(`Rendering 0 / ${countries.length} templates...`);

    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      toast.loading(`Rendering ${i + 1} / ${countries.length}: ${country}...`, { id: toastId });

      setState('country', country);

      try {
        const campaignId = selectedCampaign.startId;
        const existingQueries = getQueries(campaignId, country);
        let queries;

        if (Object.keys(existingQueries).length > 0) {
          queries = existingQueries;
        } else if (templateToRender.tableQueries?.length > 0) {
          if (selectedCampaign.data) {
            queries = {};
            for (const q of templateToRender.tableQueries) {
              queries[q.name] = q.fallback;
            }
          } else {
            const translationsResult = await fetchTranslations({
              tableQueries: templateToRender.tableQueries,
              tableName: templateToRender.translationsSpreadsheet,
            });
            queries = {};
            for (const t of translationsResult) {
              queries[t.name] = t.data;
            }
          }
          setQueries(campaignId, country, queries);
        } else {
          queries = {};
        }

        const html = await renderTemplateHtmlForCountry({ templateToRender, selectedCampaign, ids, queries });
        result.templates[country] = optimizeHtmlImages(html, getState);
      } catch (e) {
        console.error(`Error rendering ${country}:`, e);
        result.templates[country] = `<!-- Error rendering ${country}: ${e.message} -->`;
      }
    }

    setState('country', savedCountry);

    await navigator.clipboard.writeText(JSON.stringify(result));
    toast.success(`All ${countries.length} ${templateToRender.type} templates copied!`, { id: toastId });
  });
}

export function setupNewCampaignHandler(elements, campaigns, getState) {
  const { newCampaign } = elements;

  newCampaign?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    openCreateCampaignModal(selectedCampaign?.name ? selectedCampaign : null);
  });
}
