import { selectCampaignHandler, handleShopChange } from '@/main/events.js';
import { renderAvailableTemplates } from '@/main/renderAvailableTemplates.js';
import { populateSelect, createSelectOption, showElements, hideElements } from '@/utils/domUtils.js';
import { root } from '@/app.js';
import { getIframe } from '@/helpers/getIframe';
import { toast } from 'sonner';
import { appConfig as config } from '@/utils/config';

export function setupSelectCampaigns(elements, campaigns, setState, getState, render, setSelectedTemplate) {
  const { selectCampaigns, selectTemplates, selectTemplatesWrapper, openIssue, openFigma, purgeDynamicSpreadsheet } =
    elements;

  selectCampaigns.addEventListener('change', (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    // Show select templates after selecting campaign
    showElements(selectTemplates, selectTemplatesWrapper, openIssue, openFigma, purgeDynamicSpreadsheet);

    const { selectedCampaign, templates } = selectCampaignHandler(ev, campaigns);

    root.innerHTML = '';
    selectTemplates.innerHTML = '<option value="default">Select template</option>';
    selectTemplates.append(...renderAvailableTemplates(templates));

    setState('selectedTemplates', templates);
    setState('selectedCampaign', selectedCampaign);
    setState('optimizeImg', selectedCampaign.optimizeImg || false);
  });
}

export function setupSelectShop(elements, shops, setState, getState, render) {
  const { selectShop, selectLanguage, selectLanguageWrapper, copyTemplate } = elements;

  // Populate shop options
  const shopItems = shops.map((shop) => ({
    value: shop.shopId,
    text: shop.seller,
  }));
  populateSelect(selectShop, shopItems, 'Select shop');

  selectShop.addEventListener('change', (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    handleShopChange(ev, shops);
    const shop = getState('shop');

    // Setup language options based on selected shop
    const languageItems = shop.languages.map(({ language }) => ({
      value: `${language.slug}-${language.name}`,
      text: language.name,
    }));

    populateSelect(selectLanguage, languageItems, 'Select language');

    // Style language options
    Array.from(selectLanguage.options).forEach((option) => {
      if (option.value !== 'default') {
        option.style.textTransform = 'capitalize';
      }
    });

    showElements(selectLanguage, selectLanguageWrapper, copyTemplate);
  });
}

export function setupSelectLanguage(elements, setState, getState, render, handleSlugChange) {
  const { selectLanguage, selectShop, selectShopWrapper, openLP, openCampaign, redirectCheck } = elements;

  selectLanguage.addEventListener('change', (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    showElements(selectShop, selectShopWrapper, openLP, openCampaign, redirectCheck);

    handleSlugChange(ev);
    render();
  });
}

export function setupSelectTemplate(elements, setState, getState, render, setSelectedTemplate) {
  const { selectTemplates, selectShop, selectShopWrapper } = elements;

  selectTemplates.addEventListener('change', (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    showElements(selectShop, selectShopWrapper);

    setSelectedTemplate(ev);
    render();
  });
}

export function setupSelectPurge(elements) {
  const { selectPurge } = elements;

  selectPurge.addEventListener('change', async (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    const prettierTabName = ev.target.value.replace('_', ' ');

    const url = `${config.external_api_url}static/${ev.target.value}/force-refresh`;
    if (!url) return;

    try {
      const headers = {
        Accept: 'application/json',
        skip_zrok_interstitial: 'true',
      };

      const response = await fetch(url, {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        credentials: 'omit',
      });

      if (response.ok) {
        toast.success(`Successfully purged: ${prettierTabName}`);
      } else {
        toast.error(`Failed to purge: ${prettierTabName} (${response.status})`);
      }
    } catch (error) {
      console.error('Error during purge:', error);
      toast.error(`Error during purge ${prettierTabName}: ${error.message}`);
    } finally {
      ev.target.value = 'default';
    }
  });
}
