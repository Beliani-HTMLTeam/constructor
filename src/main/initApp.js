import JSConfetti from 'js-confetti';
import { getDOMElements } from '@/utils/domUtils.js';
import { setState, getState } from '@/main/state/appState.js';
import { initCampaigns } from '@/main/initCampaigns.js';
import { renderTemplate } from '@/main/rendering/templateRenderer.js';

import {
  setupSelectScopes,
  setupSelectCampaigns,
  setupSelectShop,
  setupSelectLanguage,
  setupSelectTemplate,
  setupSelectPurge,
} from '@/main/ui/selectSetup.jsx';

import {
  setupProductsHandler,
  setupCopyTemplateHandler,
  setupOpenCampaignHandler,
  setupOpenIssueHandler,
  setupOpenFigmaHandler,
  setupOpenLPHandler,
  setupNewCampaignHandler,
  setupPurgeDynamicSpreadsheetHandler,
  setupRedirectCheckHandler,
} from '@/main/ui/buttonHandlers.js';
import { createSetSelectedTemplate } from '@/main/ui/templateHelpers.js';
import { handleSlugChange } from '@/main/events.jsx';

export function initApp({ scopes, initialScope, campaigns, shops, config, onScopeChange }) {
  const jsConfetti = new JSConfetti();
  const domElements = getDOMElements();

  setState('config', config);
  setState('scopes', scopes || []);
  setState('scope', initialScope || null);
  setState('campaigns', campaigns || []);

  if (campaigns && campaigns.length > 0) {
    domElements.selectCampaigns.append(...initCampaigns(campaigns, config));
  }

  // Setup all event listeners
  setupEventListeners(domElements, { scopes, campaigns, shops, jsConfetti, onScopeChange });
}

function setupEventListeners(elements, { scopes, campaigns, shops, jsConfetti, onScopeChange }) {
  // Login button
  // elements.login?.addEventListener('click', GoogleAuth.login);

  // Render function with state access
  const render = () => renderTemplate(getState, setState);

  // Create setSelectedTemplate function with proper dependencies
  const setSelectedTemplate = createSetSelectedTemplate(elements, setState, getState);

  // Setup select elements
  setupSelectScopes(elements, scopes, setState, getState, onScopeChange);
  setupSelectCampaigns(elements, campaigns, setState, getState, render, setSelectedTemplate);
  setupSelectShop(elements, shops, setState, getState, render);
  setupSelectLanguage(elements, setState, getState, render, handleSlugChange);
  setupSelectTemplate(elements, setState, getState, render, setSelectedTemplate);

  // Setup button handlers
  setupProductsHandler(elements, setState, getState);
  setupNewCampaignHandler(elements, campaigns);
  setupCopyTemplateHandler(elements, getState, jsConfetti);
  setupOpenCampaignHandler(elements, getState);
  setupOpenIssueHandler(elements, getState);
  setupOpenFigmaHandler(elements, getState);
  setupOpenLPHandler(elements, getState);
  setupPurgeDynamicSpreadsheetHandler(elements);
  setupRedirectCheckHandler(elements);

  // Setup purge elements handlers
  setupSelectPurge(elements);
}

