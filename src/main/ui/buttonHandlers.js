import {
  openCampaignHandler,
  openIssueHandler,
  figmaCardHandler,
  openLpHandler,
  purgeDynamicSpreadsheetData,
  runRedirectCheck,
} from '@/main/events.jsx';
import { generateLpLinks } from '@/helpers/incrementIds.js';
import { openCreateCampaignModal } from '@/main/ui/createCampaign.js';
import { openManageProductsModal } from '@/main/ui/manageProducts/index.js';
import { renderTemplateHtmlForCountry } from '@/main/rendering/templateRenderer.js';
import { PREVIEW_MODE, MOBILE_PREVIEW_WIDTH, setPreviewMode } from '@/main/rendering/preview.js';

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
  SI: 'slovene',
  HR: 'croatian',
};

function addLangToLP(html, country) {
  const lang = countryToLang[country] ?? 'english';
  return `<!-- ${lang} -->\n${html}`;
}

const TEMPLATE_TYPE_LABELS = { newsletter: 'NSLT', landing: 'LP', banner: 'BANNER' };
const COPIED_FEEDBACK_MS = 2200;
const PREVIEW_MODE_STORAGE_KEY = 'constructor_preview_mode';

export function setupCopyTemplateHandler(elements, getState, jsConfetti) {
  const { copyTemplate } = elements;
  const label = copyTemplate?.querySelector('.copyTemplate__label');
  const defaultLabel = label?.textContent;
  let resetFeedbackTimer = null;

  const showCopiedFeedback = (country, templateType) => {
    const typeLabel = TEMPLATE_TYPE_LABELS[templateType] ?? String(templateType).toUpperCase();
    label.textContent = `Copied ${country} ${typeLabel}`;
    copyTemplate.classList.add('is-copied');

    clearTimeout(resetFeedbackTimer);
    resetFeedbackTimer = setTimeout(() => {
      label.textContent = defaultLabel;
      copyTemplate.classList.remove('is-copied');
    }, COPIED_FEEDBACK_MS);
  };

  copyTemplate?.addEventListener('click', async () => {
    const html = getState('html');
    if (!html) return toast.error('No HTML to copy. Render template first.');

    const language = getState('selectedLanguage');
    if (!language) return toast.error('Select language to copy.');

    const template = getState('template');
    const country = getState('country');
    let finalHtml = optimizeHtmlImages(html, getState);

    const activeScope = getState('scope');
    // don't add lang comment to dmytro lps
    if (template?.type === 'landing' && activeScope !== 'Dmytro') finalHtml = addLangToLP(finalHtml, country);

    try {
      await navigator.clipboard.writeText(finalHtml);
    } catch (error) {
      console.error(error);
      return toast.error('Could not copy to clipboard.');
    }

    showCopiedFeedback(country, template?.type);

    const config = getState('config');
    if (!config?.confetti) return;

    jsConfetti.addConfetti({
      emojiSize: 20,
      confettiNumber: 80,
    });
  });
}

function readStoredPreviewMode() {
  try {
    return localStorage.getItem(PREVIEW_MODE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storePreviewMode(mode) {
  try {
    localStorage.setItem(PREVIEW_MODE_STORAGE_KEY, mode);
  } catch {
    // storage unavailable, the choice just isn't remembered
  }
}

export function setupPreviewWidthHandler(elements, setState) {
  const { previewWidth } = elements;
  if (!previewWidth) return;

  const label = previewWidth.querySelector('.fab-label');
  const validModes = Object.values(PREVIEW_MODE);

  const showMode = (mode) => {
    const isMobile = mode === PREVIEW_MODE.MOBILE;
    previewWidth.classList.toggle('is-active', isMobile);
    previewWidth.setAttribute('aria-pressed', String(isMobile));
    label.textContent = isMobile ? 'Back to desktop preview' : `Mobile preview (${MOBILE_PREVIEW_WIDTH}px)`;
  };

  let mode = readStoredPreviewMode();
  if (!validModes.includes(mode)) mode = PREVIEW_MODE.DESKTOP;

  setState('previewMode', mode);
  showMode(mode);

  previewWidth.addEventListener('click', () => {
    mode = mode === PREVIEW_MODE.MOBILE ? PREVIEW_MODE.DESKTOP : PREVIEW_MODE.MOBILE;
    storePreviewMode(mode);
    showMode(mode);
    setPreviewMode(mode);
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
