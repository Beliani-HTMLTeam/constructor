import { appConfig as config } from '@utils/config.js';
import { initApp } from '@main/initApp.jsx';
import { getUserCampaigns, getAvailableScopes } from './utils/getUserCampaigns';
import { getSavedScope, saveSelectedScope } from './utils/scopeStorage';
import { getDOMElements } from './utils/domUtils';
import { setState } from './main/state/appState';
import { initCampaigns } from './main/initCampaigns';

import './toast.jsx'; // Initialize React and Toaster
import { toast } from 'sonner';

import SHOPS from '@config/shops.js';

export const root = document.querySelector('#app-content');

export function sortCampaigns(campaigns) {
  return [...(campaigns || [])].sort((a, b) => {
    const parseDate = (dateStr) => {
      if (!dateStr) return new Date(0);
      const [day, month, year] = dateStr.split('.');
      return new Date(`${year}-${month}-${day}`);
    };
    return parseDate(b.date) - parseDate(a.date);
  });
}

async function handleScopeChange(newScope) {
  try {
    await saveSelectedScope(newScope);
    if (!newScope) {
      return;
    }

    const loadPromise = (async () => {
      const rawCampaigns = await getUserCampaigns(newScope);
      const sortedCampaigns = sortCampaigns(rawCampaigns);
      return sortedCampaigns;
    })();

    toast.promise(loadPromise, {
      loading: (
        <div data-content="">
          <div data-title="">Loading campaigns...</div>
          <div data-description="">Scope: {newScope}</div>
        </div>
      ),
      success: (campaigns) => ({
        message: 'Campaigns loaded!',
        description: `Scope: ${newScope} (${campaigns.length} campaigns)`,
      }),
      error: (err) => ({
        message: 'Failed to load campaigns',
        description: `Scope: ${newScope}, error: ${err.message}`,
      }),
    });

    const sortedCampaigns = await loadPromise;
    setState('campaigns', sortedCampaigns);
  } catch (err) {
    console.error('Error switching scope:', err);
  }
}

async function initializeApp() {
  try {
    const scopes = getAvailableScopes();
    const favoriteScope = localStorage.getItem('constructor_favorite_scope');
    let initialScope = (favoriteScope && scopes.includes(favoriteScope))
      ? favoriteScope
      : await getSavedScope();

    if (!initialScope || !scopes.includes(initialScope)) {
      const envScope = import.meta.env.VITE_SCOPE;
      if (envScope && scopes.includes(envScope)) {
        initialScope = envScope;
      } else {
        initialScope = null;
      }
    }

    let initialCampaigns = [];
    if (initialScope) {
      const initialLoadPromise = (async () => {
        const userCampaigns = await getUserCampaigns(initialScope);
        return sortCampaigns(userCampaigns);
      })();

      toast.promise(initialLoadPromise, {
        loading: (
          <div data-content="">
            <div data-title="">Loading scope campaigns...</div>
            <div data-description="">Scope: {initialScope}</div>
          </div>
        ),
        success: (campaigns) => ({
          message: 'Campaigns loaded!',
          description: `Scope: ${initialScope} (${campaigns.length} campaigns)`,
        }),
        error: (err) => ({
          message: 'Failed to load scope campaigns',
          description: `Scope: ${initialScope}, error: ${err.message}`,
        }),
      });

      initialCampaigns = await initialLoadPromise;
    }

    initApp({
      scopes,
      initialScope,
      campaigns: initialCampaigns,
      shops: SHOPS,
      config: config,
      onScopeChange: handleScopeChange,
    });
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong. More details in console.');
  }
}

initializeApp();

