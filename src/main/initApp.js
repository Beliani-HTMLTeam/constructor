import JSConfetti from 'js-confetti';
import { getDOMElements } from '@/utils/domUtils.js';
import { setState, getState } from '@/main/state/appState.js';
import { initCampaigns } from '@/main/initCampaigns.js';
import { renderTemplate } from '@/main/rendering/templateRenderer.js';

import {
  setupSelectCampaigns,
  setupSelectShop,
  setupSelectLanguage,
  setupSelectTemplate, setupSelectPurge
} from '@/main/ui/selectSetup.js';

import {
  setupProductsHandler,
  setupCopyTemplateHandler,
  setupCopyAllTemplatesHandler,
  setupOpenCampaignHandler,
  setupOpenIssueHandler,
  setupOpenFigmaHandler,
  setupOpenLPHandler,
  setupNewCampaignHandler,
  setupPurgeDynamicSpreadsheetHandler,
  setupRedirectCheckHandler,
} from '@/main/ui/buttonHandlers.js';
import { createSetSelectedTemplate } from '@/main/ui/templateHelpers.js';
import { handleSlugChange } from '@/main/events.js';

export function initApp({ campaigns, shops, config }) {
  const jsConfetti = new JSConfetti();
  const domElements = getDOMElements();

  setState('config', config);
  setState('campaigns', campaigns);
  domElements.selectCampaigns.append(...initCampaigns(campaigns, config));

  setupEventListeners(domElements, campaigns, shops, jsConfetti);

  window.__openEditCurrentCampaign = () => {
    const campaign = getState('selectedCampaign');
    if (!campaign?.name) return;
    window.__formControl?.applyEditMode(campaign);
    document.getElementById('formModal').style.display = 'flex';
  };
}

function setupEventListeners(elements, campaigns, shops, jsConfetti) {
  const render = () => renderTemplate(getState, setState);

  const setSelectedTemplate = createSetSelectedTemplate(elements, setState, getState);

  setupSelectCampaigns(elements, campaigns, setState, getState, render, setSelectedTemplate);
  setupSelectShop(elements, shops, setState, getState, render);
  setupSelectLanguage(elements, setState, getState, render, handleSlugChange);
  setupSelectTemplate(elements, setState, getState, render, setSelectedTemplate);

  setupProductsHandler(elements, setState, getState);
  setupNewCampaignHandler(elements, campaigns, getState);
  setupCopyTemplateHandler(elements, getState, jsConfetti);
  setupCopyAllTemplatesHandler(elements, getState, setState);
  setupOpenCampaignHandler(elements, getState);
  setupOpenIssueHandler(elements, getState);
  setupOpenFigmaHandler(elements, getState);
  setupOpenLPHandler(elements, getState);
  setupPurgeDynamicSpreadsheetHandler(elements);
  setupRedirectCheckHandler(elements);

  setupSelectPurge(elements);
}
