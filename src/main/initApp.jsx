import React from 'react';
import { createRoot } from 'react-dom/client';
import JSConfetti from 'js-confetti';
import { getDOMElements } from '@/utils/domUtils.js';
import { setState, getState } from '@/main/state/appState.js';
import { UpperSelects } from '@/main/ui/UpperSelects.jsx';
import { PurgeSelect } from '@/main/ui/PurgeSelect.jsx';

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

let upperSelectsRootInstance = null;
let purgeSelectRootInstance = null;

export function initApp({ scopes, initialScope, campaigns, shops, config, onScopeChange }) {
  const jsConfetti = new JSConfetti();
  const domElements = getDOMElements();

  setState('config', config);
  setState('scopes', scopes || []);
  setState('scope', initialScope || null);
  setState('campaigns', campaigns || []);
  setState('shops', shops || []);

  // Mount React UpperSelects
  const upperSelectsContainer = document.getElementById('upper-selects-root');
  if (upperSelectsContainer) {
    if (!upperSelectsRootInstance) {
      upperSelectsRootInstance = createRoot(upperSelectsContainer);
    }
    upperSelectsRootInstance.render(<UpperSelects onScopeChange={onScopeChange} />);
  }

  // Mount React PurgeSelect
  const purgeSelectContainer = document.getElementById('purge-select-root');
  if (purgeSelectContainer) {
    if (!purgeSelectRootInstance) {
      purgeSelectRootInstance = createRoot(purgeSelectContainer);
    }
    purgeSelectRootInstance.render(<PurgeSelect />);
  }

  // Setup button handlers
  setupButtonListeners(domElements, { campaigns, jsConfetti });
}

function setupButtonListeners(elements, { campaigns, jsConfetti }) {
  setupProductsHandler(elements, setState, getState);
  // setupNewCampaignHandler(elements, campaigns);
  setupCopyTemplateHandler(elements, getState, jsConfetti);
  setupOpenCampaignHandler(elements, getState);
  setupOpenIssueHandler(elements, getState);
  setupOpenFigmaHandler(elements, getState);
  setupOpenLPHandler(elements, getState);
  setupPurgeDynamicSpreadsheetHandler(elements);
  setupRedirectCheckHandler(elements);
}
