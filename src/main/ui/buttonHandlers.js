import {
  openCampaignHandler,
  openIssueHandler,
  figmaCardHandler,
  openLpHandler,
  purgeDynamicSpreadsheetData,
} from '@/main/events.js';
import { generateLpLinks } from '@/helpers/generateLpLinks.js';
import { openCreateCampaignModal } from '@/main/ui/createCampaign.js';
import { openManageProductsModal } from '@/main/ui/manageProducts.js';

import { toast } from 'sonner';
import { optimizeHtmlImages } from '@/helpers/optimizeHtmlImages.js';

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
    const selectedTemplates = getState('selectedTemplates');
    if (!selectedTemplates || selectedTemplates.length === 0) {
      return toast.error('Please select a template first!');
    }
    const template = selectedTemplates[0];
    if (!template.translationsSpreadsheet) {
      return toast.error('Selected template does not have translations spreadsheet data!');
    }
    const spreadsheetData = template.translationsSpreadsheet.split('::');
    if (spreadsheetData.length !== 2) {
      return toast.error('Invalid translations spreadsheet format!');
    }
    const [autoYear, autoTabName] = spreadsheetData;
    purgeDynamicSpreadsheetData(autoYear, autoTabName);
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

// Setup new campaign creation handler
export function setupNewCampaignHandler(elements, campaigns) {
  const { newCampaign, selectCampaigns } = elements;

  newCampaign?.addEventListener('click', () => {
    openCreateCampaignModal((campaign) => {
      // Basic validation
      if (!campaign.startId) {
        toast.error('Campaign missing newsletter ID!');
        return false;
      }

      if (!campaign.name) {
        toast.error('Campaign missing name!');
        return false;
      }

      return true; // success — allow modal to close
    });
  });
}
