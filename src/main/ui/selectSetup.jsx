import { selectCampaignHandler, handleShopChange } from '@/main/events.jsx';
import { renderAvailableTemplates } from '@/main/renderAvailableTemplates.js';
import { populateSelect, createSelectOption, showElements, hideElements } from '@/utils/domUtils.js';
import { root } from '@/app.jsx';
import { getIframe } from '@/helpers/getIframe';
import { toast } from 'sonner';
import { appConfig as config } from '@/utils/config';

export function setupSelectScopes(elements, scopes, setState, getState, onScopeChange) {
  const {
    selectScopes,
    selectCampaigns,
    selectTemplates,
    selectTemplatesWrapper,
    selectShop,
    selectShopWrapper,
    selectLanguage,
    selectLanguageWrapper,
    openIssue,
    openFigma,
    purgeDynamicSpreadsheet,
    openCampaign,
    openLP,
    copyTemplate,
    redirectCheck,
  } = elements;

  if (!selectScopes) return;

  const scopeItems = (scopes || []).map((scopeName) => ({
    value: scopeName,
    text: scopeName,
  }));
  populateSelect(selectScopes, scopeItems, 'Select Scope');

  const activeScope = getState('scope');
  if (activeScope && scopes?.includes(activeScope)) {
    selectScopes.value = activeScope;
  }

  selectScopes.addEventListener('change', async (ev) => {
    const newScope = ev.target.value;

    // Reset downstream elements and previews
    hideElements(
      selectTemplates,
      selectTemplatesWrapper,
      selectShop,
      selectShopWrapper,
      selectLanguage,
      selectLanguageWrapper,
      openIssue,
      openFigma,
      purgeDynamicSpreadsheet,
      openCampaign,
      openLP,
      copyTemplate,
      redirectCheck
    );

    if (root) {
      root.innerHTML = '';
    }

    if (selectCampaigns) {
      selectCampaigns.innerHTML = '<option value="default">Select Campaign</option>';
    }
    if (selectTemplates) {
      selectTemplates.innerHTML = '<option value="default">Select Template</option>';
    }
    if (selectShop) {
      selectShop.innerHTML = '<option value="default">Select shop</option>';
    }
    if (selectLanguage) {
      selectLanguage.innerHTML = '<option value="default">Select Language</option>';
    }

    setState('selectedCampaign', {});
    setState('selectedTemplates', []);
    setState('shop', null);
    setState('selectedLanguage', null);
    setState('country', '');
    setState('name', '');
    setState('html', '');
    setState('ids', {});

    if (newScope === 'default') {
      setState('scope', null);
      setState('campaigns', []);
      if (onScopeChange) {
        await onScopeChange(null);
      }
      return;
    }

    setState('scope', newScope);
    if (onScopeChange) {
      await onScopeChange(newScope);
    }
  });
}

export function setupSelectCampaigns(elements, campaigns, setState, getState, render, setSelectedTemplate) {
  const { selectCampaigns, selectTemplates, selectTemplatesWrapper, openIssue, openFigma, purgeDynamicSpreadsheet } =
    elements;

  selectCampaigns.addEventListener('change', (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    // Show select templates after selecting campaign
    showElements(selectTemplates, selectTemplatesWrapper, openIssue, openFigma, purgeDynamicSpreadsheet);

    const currentCampaigns = getState('campaigns') || campaigns || [];
    const { selectedCampaign, templates } = selectCampaignHandler(ev, currentCampaigns);

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
  setState('shops', shops);

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

    setState('selectedLanguage', null);

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

  setState('selectedLanguage', null);

  selectLanguage.addEventListener('change', (ev) => {
    if (ev.target.value === 'default') {
      setState('selectedLanguage', null);
      return;
    }

    setState('selectedLanguage', ev.target.value);

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

// static translations purge
export function setupSelectPurge(elements) {
  const { selectPurge } = elements;

  selectPurge.addEventListener('change', async (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    const tabName = ev.target.value;
    const prettierTabName = tabName.replace('_', ' ');

    const url = `${config.external_api_url}static/${tabName}/force-refresh`;

    const headers = {
      Accept: 'application/json',
      skip_zrok_interstitial: 'true',
    };

    const purgePromise = fetch(url, {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      credentials: 'omit',
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error(`Failed to purge (${response.status})`);
      }
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      return response;
    });

    toast.promise(purgePromise, {
      // loading can be only string | React.ReactNode
      loading: (
        <div data-content="">
          <div data-title="">Purging static spreadsheet...</div>
          <div data-description="">{prettierTabName}</div>
        </div>
      ),
      success: () => ({
        message: 'Successfully purged static spreadsheet!',
        description: prettierTabName,
      }),
      error: (err) => ({
        message: 'Error during purge',
        description: `${prettierTabName}, error: ${err.message}`,
      }),
    });

    try {
      await purgePromise;
    } catch (error) {
      console.error('Purge error: ', error);
    } finally {
      ev.target.value = 'default';
    }
  });
}
