import JSConfetti from 'js-confetti';
import { getDOMElements } from '@/utils/domUtils.js';
import { setState, getState } from '@/main/state/appState.js';
import { initCampaigns } from '@/main/initCampaigns.js';
import { GoogleAuth } from '@/old-api/services/GoogleAuth.js';
import { renderTemplate } from '@/main/rendering/templateRenderer.js';
import initStaticTranslations from '@/old-api/translations-api/getTranslations';

import {
  setupSelectCampaigns,
  setupSelectShop,
  setupSelectLanguage,
  setupSelectTemplate, setupSelectPurge
} from '@/main/ui/selectSetup.js';

import {
  setupProductsHandler,
  setupClearStorageHandler,
  setupCopyTemplateHandler,
  setupOpenCampaignHandler,
  setupOpenIssueHandler,
  setupOpenFigmaHandler,
  setupOpenLPHandler,
  setupNewCampaignHandler,
  setupPurgeDynamicSpreadsheetHandler,
} from '@/main/ui/buttonHandlers.js';
import { createSetSelectedTemplate } from '@/main/ui/templateHelpers.js';
import { handleSlugChange } from '@/main/events.js';

export function initApp({ campaigns, shops, config }) {
  const jsConfetti = new JSConfetti();
  const domElements = getDOMElements();

  setState('config', config);
  domElements.selectCampaigns.append(...initCampaigns(campaigns, config));

  // Setup all event listeners
  setupEventListeners(domElements, campaigns, shops, jsConfetti);
}

function setupEventListeners(elements, campaigns, shops, jsConfetti) {
  // Login button
  // elements.login?.addEventListener('click', GoogleAuth.login);

  // Render function with state access
  const render = () => renderTemplate(getState, setState);

  // Create setSelectedTemplate function with proper dependencies
  const setSelectedTemplate = createSetSelectedTemplate(elements, setState, getState);

  // Setup select elements
  setupSelectCampaigns(elements, campaigns, setState, getState, render, setSelectedTemplate);
  setupSelectShop(elements, shops, setState, getState, render);
  setupSelectLanguage(elements, setState, getState, render, handleSlugChange);
  setupSelectTemplate(elements, setState, getState, render, setSelectedTemplate);

  // Setup button handlers
  setupProductsHandler(elements, setState, getState);
  setupClearStorageHandler(elements);
  setupNewCampaignHandler(elements, campaigns);
  setupCopyTemplateHandler(elements, getState, jsConfetti);
  setupOpenCampaignHandler(elements, getState);
  setupOpenIssueHandler(elements, getState);
  setupOpenFigmaHandler(elements, getState);
  setupOpenLPHandler(elements, getState);
  setupPurgeDynamicSpreadsheetHandler(elements);

  // Setup purge elements handlers
  setupSelectPurge(elements);
}
