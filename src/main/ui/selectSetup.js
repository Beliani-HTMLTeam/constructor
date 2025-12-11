import { selectCampaignHandler, handleShopChange } from '@/main/events.js';
import { renderAvailableTemplates } from '@/main/renderAvailableTemplates.js';
import {
  populateSelect,
  createSelectOption,
  showElements,
  hideElements,
} from '@/utils/domUtils.js';
import { root } from '@/app.js';
import { getIframe } from '@/helpers/getIframe';

export function setupSelectCampaigns(
  elements,
  campaigns,
  setState,
  getState,
  render,
  setSelectedTemplate
) {
  const {
    selectCampaigns,
    selectTemplates,
    selectTemplatesWrapper,
    openIssue,
    openFigma,
    purgeDynamicSpreadsheet,
  } = elements;

  selectCampaigns.addEventListener('change', (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    // Show select templates after selecting campaign
    showElements(
      selectTemplates,
      selectTemplatesWrapper,
      openIssue,
      openFigma,
      purgeDynamicSpreadsheet
    );

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
  const { selectLanguage, selectShop, selectShopWrapper, openLP, openCampaign } = elements;

  selectLanguage.addEventListener('change', (ev) => {
    if (ev.target.value === 'default') {
      return;
    }

    showElements(selectShop, selectShopWrapper, openLP, openCampaign);

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

    const purgeMap = {
      header: 'https://fed2n8e59dpq.share.zrok.io/static/header/force-refresh',
      footer: 'https://fed2n8e59dpq.share.zrok.io/static/footer/force-refresh',
      templates: 'https://fed2n8e59dpq.share.zrok.io/static/templates/force-refresh',
      category_links: 'https://fed2n8e59dpq.share.zrok.io/static/category_links/force-refresh',
      category_titles: 'https://fed2n8e59dpq.share.zrok.io/static/category_titles/force-refresh',
    };

    const url = purgeMap[ev.target.value];
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
        alert(`✅ Successfully purged: ${prettierTabName}`);
      } else {
        alert(`❌ Failed to purge ${prettierTabName}: ${response.status}`);
      }
    } catch (error) {
      console.error('Error during purge:', error);
      alert(`❌ Error during purge ${prettierTabName}: ${error.message}`);
    } finally {
      ev.target.value = 'default';
    }
  });
}

function purgeInBackground(url, purgeType, selectElement) {
  const iframe = getIframe(url);
  document.body.appendChild(iframe);

  iframe.onload = function () {
    console.log('inside here');
    try {
      setTimeout(() => {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

          const visitButton = iframeDoc.querySelector('button[onclick*="onClick"]');
          console.log('onClick', visitButton);
          if (visitButton) {
            visitButton.click();
          } else {
            const buttons = iframeDoc.querySelectorAll('button');
            const visitBtn = Array.from(buttons).find(
              (btn) => btn.textContent.includes('Visit') || btn.textContent.includes('Share')
            );
            if (visitBtn) {
              visitBtn.click();
            } else {
              iframe.contentWindow.onClick && iframe.contentWindow.onClick();
            }
          }

          // const originalOnLoad = iframe.onload;
          // iframe.onload = function () {
          //   // This fires after the interstitial is bypassed and the actual purge page loads
          //   setTimeout(() => {
          //     if (document.body.contains(iframe)) {
          //       document.body.removeChild(iframe);
          //     }
          //     alert(`✅ Successfully purged: ${purgeType.replace('_', ' ')}`);
          //     selectElement.value = 'default';
          //   }, 1000);
          // };
        } catch (error) {
          console.error('Error clicking button:', error);
          // Fallback: close iframe and show alert
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
          alert(`✅ Purge request sent (interstitial bypassed): ${purgeType.replace('_', ' ')}`);
          selectElement.value = 'default';
        }
      }, 40000); // Wait 500ms for iframe to fully load
    } catch (error) {
      console.error('Error accessing iframe:', error);
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
      alert(`✅ Purge request initiated: ${purgeType.replace('_', ' ')}`);
      selectElement.value = 'default';
    }
  };
  iframe.onerror = function () {
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe);
    }
    alert(`❌ Failed to load purge page: ${purgeType.replace('_', ' ')}`);
    selectElement.value = 'default';
  };

  // Safety timeout
  // setTimeout(() => {
  //   if (document.body.contains(iframe)) {
  //     document.body.removeChild(iframe);
  //     alert(`⚠️ Purge timeout: ${purgeType.replace('_', ' ')}`);
  //     selectElement.value = 'default';
  //   }
  // }, 10000);
}
// setTimeout(() => {
//   if (document.body.contains(iframe)) {
//     document.body.removeChild(iframe);
//   }
//   alert(`✅ Successfully purged: ${purgeType.replace('_', ' ')}`);
//   selectElement.value = 'default';
// }, 1000);

// iframe.onerror = function () {
//   if (document.body.contains(iframe)) {
//     document.body.removeChild(iframe);
//   }
//   alert(`✅ Purge request sent for: ${purgeType.replace('_', ' ')}`);
//   selectElement.value = 'default';
// };

// setTimeout(() => {
//   if (document.body.contains(iframe)) {
//     document.body.removeChild(iframe);
//     alert(`✅ Purge request completed: ${purgeType.replace('_', ' ')}`);
//     selectElement.value = 'default';
//   }
// }, 5000);
