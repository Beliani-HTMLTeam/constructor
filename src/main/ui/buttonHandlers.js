import Toastify from 'toastify-js';
import {
  openCampaignHandler,
  openIssueHandler,
  figmaCardHandler,
  openLpHandler,
} from '@/main/events.js';
import { generateLpLinks } from '@/helpers/generateLpLinks.js';
import { normalizeProducts } from '@/utils/normalizeProducts.js';
import { isQuotaExceededError } from '@/helpers/isQuotaExceededError.js';
import { openCreateCampaignModal } from '@/main/ui/createCampaign.js';

export function setupProductsHandler(elements, setState, getState) {
  const { newProducts } = elements;

  newProducts?.addEventListener('click', () => {
    const products = prompt('Provide products');
    if (!products) {
      return Toastify({
        text: 'Input incorrect',
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }

    let newProductsData;
    try {
      newProductsData = JSON.parse(products);
    } catch (error) {
      console.log(error);
      Toastify({
        text: 'Products parse error: ' + error.message,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }

    const selectedCampaign = getState('selectedCampaign');
    const prev = localStorage.getItem('products');

    try {
      const prevProducts = prev ? JSON.parse(prev) : [];
      const isProductsSetted = prevProducts.find(
        (item) => item.campaign_id === selectedCampaign.startId
      );

      const normalizedProducts = normalizeProducts(newProductsData);

      // If products already exists for selected campaign
      if (isProductsSetted) {
        const updatedProducts = prevProducts.map((item) => {
          if (item.campaign_id === selectedCampaign.startId) {
            return {
              ...item,
              products: normalizedProducts,
            };
          }
          return item;
        });

        try {
          localStorage.setItem('products', JSON.stringify(updatedProducts));
          Toastify({
            text: 'Products successfully saved.',
            escapeMarkup: false,
            duration: 3000,
          }).showToast();
        } catch (error) {
          handleStorageQuotaError(error, prevProducts, selectedCampaign, normalizedProducts);
        }
      } else {
        try {
          localStorage.setItem(
            'products',
            JSON.stringify([
              ...prevProducts,
              {
                campaign_id: selectedCampaign.startId,
                products: normalizedProducts,
              },
            ])
          );
          Toastify({
            text: 'Products successfully saved.',
            escapeMarkup: false,
            duration: 3000,
          }).showToast();
        } catch (error) {
          handleStorageQuotaError(error, prevProducts, selectedCampaign, normalizedProducts);
        }
      }
    } catch (error) {
      Toastify({
        text: 'Products error: ' + error.message,
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
  });
}

export function setupClearStorageHandler(elements) {
  const { clearStorage } = elements;

  clearStorage?.addEventListener('click', () => {
    if (confirm('All data will be removed from localstorage! Are you sure?')) {
      localStorage.clear();
      Toastify({
        text: 'Storage has been cleared.',
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
    }
  });
}

export function setupCopyTemplateHandler(elements, getState, jsConfetti) {
  const { copyTemplate } = elements;

  copyTemplate?.addEventListener('click', () => {
    const html = getState('html');
    if (!html) {
      Toastify({
        text: 'Render HTML.',
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }

    const config = getState('config');
    if (config?.confetti) {
      jsConfetti.addConfetti({
        emojiSize: 20,
        confettiNumber: 80,
      });
    }

    navigator.clipboard.writeText(html);
    Toastify({
      text: 'Template copied to clipboard',
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
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
    if (!selectedCampaign.issueCardId) {
      Toastify({
        text: 'Select campaign.',
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }
    openIssueHandler(selectedCampaign.issueCardId);
  });
}

export function setupOpenFigmaHandler(elements, getState) {
  const { openFigma } = elements;

  openFigma?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    if (!selectedCampaign.figmaUrl) {
      Toastify({
        text: 'Figma url not found.',
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }
    figmaCardHandler(selectedCampaign.figmaUrl);
  });
}

export function setupOpenLPHandler(elements, getState) {
  const { openLP } = elements;

  openLP?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    const country = getState('country');

    if (!selectedCampaign.lpId) {
      Toastify({
        text: 'You not selected campaign or not set LP id in app.js.',
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }

    const countryOrderOld = [
      'CHDE',
      'CHFR',
      'UK',
      'DE',
      'FR',
      'AT',
      'ES',
      'PL',
      'NL',
      'PT',
      'IT',
      'SE',
      'HU',
      'DK',
      'CZ',
      'FI',
      'NO',
      'SK',
      'BENL',
      'BEFR',
      'RO',
    ];

    const countryOrderNew = [
      'CHDE',
      'CHFR',
      'UK',
      'DE',
      'FR',
      'AT',
      'ES',
      'PL',
      'NL',
      'BENL',
      'BEFR',
      'PT',
      'IT',
      'SE',
      'HU',
      'DK',
      'CZ',
      'FI',
      'NO',
      'SK',
      'RO',
    ];

    const selectedCountryOrder =
      selectedCampaign.version === 'new' ? countryOrderNew : countryOrderOld;

    const lpLinks = generateLpLinks(
      selectedCampaign.lpId,
      selectedCountryOrder,
      selectedCampaign.name,
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
      if (!campaign.startId || !campaign.name) {
        Toastify({
          text: 'Campaign missing required fields',
          duration: 3000,
        }).showToast();
        return false; // signal error — keep modal open
      }

      // For now, just log the campaign to console instead of mutating files/UI
      console.log('New campaign (preview):', campaign);

      Toastify({
        text: 'Campaign preview logged to console.',
        duration: 2000,
      }).showToast();
      return true; // success — allow modal to close
    });
  });
}

// Helper function to handle storage quota errors
function handleStorageQuotaError(error, prevProducts, selectedCampaign, normalizedProducts) {
  const quotaExceededError = isQuotaExceededError(error);
  if (quotaExceededError) {
    const ids = prevProducts.map((item) => item.campaign_id);
    const deleteCampaignId = prompt(
      'Memory exceeded, please enter startId to delete: ' + ids.join(',')
    );

    if (!deleteCampaignId) {
      return;
    }

    if (!ids.includes(deleteCampaignId)) {
      Toastify({
        text: 'Invalid campaign ID!',
        escapeMarkup: false,
        duration: 3000,
      }).showToast();
      return;
    }

    const prevCampaigns = prevProducts.filter((item) => item.campaign_id !== deleteCampaignId);

    localStorage.setItem(
      'products',
      JSON.stringify([
        ...prevCampaigns,
        {
          campaign_id: selectedCampaign.startId,
          products: normalizedProducts,
        },
      ])
    );

    Toastify({
      text: 'Products successfully saved.',
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  } else {
    throw error;
  }
}
