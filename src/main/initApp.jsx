import React from 'react';
import { createRoot } from 'react-dom/client';
import JSConfetti from 'js-confetti';
import { getDOMElements } from '@/utils/domUtils.js';
import { setState, getState } from '@/main/state/appState.js';
import { UpperSelects } from '@/main/ui/UpperSelects';
import { PurgeSelect } from '@/main/ui/PurgeSelect';
import { ProductsBadge } from '@/main/ui/ProductsBadge';

import {
  setupProductsHandler,
  setupPreviewWidthHandler,
  setupCopyTemplateHandler,
  setupDownloadEmlHandler,
  setupOpenCampaignHandler,
  setupOpenIssueHandler,
  setupOpenFigmaHandler,
  setupOpenLPHandler,
  setupNewCampaignHandler,
  setupPurgeDynamicSpreadsheetHandler,
  setupRedirectCheckHandler,
} from '@/main/ui/buttonHandlers.js';

const reactRoots = new Map();

function mountReact(containerId, element) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (!reactRoots.has(containerId)) reactRoots.set(containerId, createRoot(container));
  reactRoots.get(containerId).render(element);
}

export function initApp({ scopes, initialScope, campaigns, shops, config, onScopeChange }) {
  const jsConfetti = new JSConfetti();
  const domElements = getDOMElements();

  setState('config', config);
  setState('scopes', scopes || []);
  setState('scope', initialScope || null);
  setState('campaigns', campaigns || []);
  setState('shops', shops || []);

  mountReact('upper-selects-root', <UpperSelects onScopeChange={onScopeChange} />);
  mountReact('purge-select-root', <PurgeSelect />);
  mountReact('products-badge-root', <ProductsBadge />);

  // Setup button handlers
  setupButtonListeners(domElements, { campaigns, jsConfetti });
}

function setupButtonListeners(elements, { campaigns, jsConfetti }) {
  setupProductsHandler(elements, setState, getState);
  setupPreviewWidthHandler(elements, setState);
  // setupNewCampaignHandler(elements, campaigns);
  setupCopyTemplateHandler(elements, getState, jsConfetti);
  setupDownloadEmlHandler(elements, getState);
  setupOpenCampaignHandler(elements, getState);
  setupOpenIssueHandler(elements, getState);
  setupOpenFigmaHandler(elements, getState);
  setupOpenLPHandler(elements, getState);
  setupPurgeDynamicSpreadsheetHandler(elements);
  setupRedirectCheckHandler(elements);
}
