import {
  openCampaignHandler,
  openIssueHandler,
  figmaCardHandler,
  openLpHandler,
  purgeDynamicSpreadsheetData,
  runRedirectCheck,
} from '@/main/events.js';
import { generateLpLinks } from '@/helpers/incrementIds.js';
import { openCreateCampaignModal } from '@/main/ui/createCampaign.js';
import { openManageProductsModal } from '@/main/ui/manageProducts.js';

import { toast } from 'sonner';
import { optimizeHtmlImages } from '@/helpers/optimizeHtmlImages.js';
import { getState } from '../state/appState';

export function setupProductsHandler(elements, setState, getState) {
  const { newProducts } = elements;

  newProducts?.addEventListener('click', () => {
    openManageProductsModal({ campaigns: getState('campaigns') ?? [] });
  });
}

const countryToLang = {
  DE: 'germanDE',
  AT: 'germanDE',
  CHDE: 'german',
  FR: 'french',
  CHFR: 'french',
  BEFR: 'french',
  UK: 'english',
  PL: 'polish',
  IT: 'italian',
  CHIT: 'italian',
  NL: 'dutch',
  BENL: 'dutch',
  SE: 'swedish',
  ES: 'spanish',
  PT: 'portugal',
  HU: 'Hungarian',
  DK: 'danish',
  CZ: 'czech',
  FI: 'finnish',
  NO: 'norsk',
  SK: 'slovak',
  RO: 'romanian',
};

function addLangToLP(html, country) {
  const lang = countryToLang[country] ?? 'english';
  return `<!-- ${lang} -->\n${html}`;
}

export function setupCopyTemplateHandler(elements, getState, jsConfetti) {
  const { copyTemplate } = elements;

  copyTemplate?.addEventListener('click', () => {
    const html = getState('html');
    if (!html) return toast.error('No HTML to copy. Render template first.');

    const template = getState('template');
    const country = getState('country');
    let finalHtml = optimizeHtmlImages(html, getState);

    if (template?.type === 'landing' && ((__SCOPE__ || import.meta.env?.VITE_SCOPE) !== "Dmytro")) finalHtml = addLangToLP(finalHtml, country);

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

    const lpLinks = generateLpLinks(
      selectedCampaign.lpId,
      selectedCampaign.version ?? 'old',
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
