import {
  openCampaignHandler,
  openIssueHandler,
  figmaCardHandler,
  openLpHandler,
  purgeDynamicSpreadsheetData,
} from '@/main/events.js';
import { generateLpLinks } from '@/helpers/generateLpLinks.js';
import { normalizeProducts } from '@/utils/normalizeProducts.js';
import { isQuotaExceededError } from '@/helpers/isQuotaExceededError.js';
import { openCreateCampaignModal } from '@/main/ui/createCampaign.js';

import { toast } from 'sonner';
import { getState } from '../state/appState';
import { optimizeHtmlImages } from '@/helpers/optimizeHtmlImages.js';

export function setupProductsHandler(elements, setState, getState) {
  const { newProducts } = elements;

  newProducts?.addEventListener('click', () => {
    const products = prompt('Provide products');
    if (!products)
      return toast.error('Incorrect input! Please provide products JSON from extension.');

    let newProductsData;
    try {
      newProductsData = JSON.parse(products);
    } catch (error) {
      console.log(error);
      return toast.error('Products parse error. Check console for more details.');
    }

    const selectedCampaign = getState('selectedCampaign');
    const prev = localStorage.getItem('products');

    try {
      const prevProducts = prev ? JSON.parse(prev) : [];
      const areProductsSet = prevProducts.find(
        (item) => item.campaign_id === selectedCampaign.startId
      );

      const normalizedProducts = normalizeProducts(newProductsData);

      // If products already exists for selected campaign
      if (areProductsSet) {
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
          toast.success('Products successfully updated.');
          window.location.reload();
        } catch (error) {
          handleStorageQuotaError(error, prevProducts, selectedCampaign, normalizedProducts);
        }

        // products not set yet for selected campaign
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
          toast.success('Products successfully saved.');
          window.location.reload();
        } catch (error) {
          handleStorageQuotaError(error, prevProducts, selectedCampaign, normalizedProducts);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error('Error during saving products. Check console for more details.');
    }
  });
}

export function setupClearStorageHandler(elements) {
  const { clearStorage } = elements;

  clearStorage?.addEventListener('click', () => {
    if (confirm('All data will be removed from localstorage! Are you sure?')) {
      localStorage.clear();

      return toast.success('Storage has been cleared.');
    }
  });
}

export function setupCopyTemplateHandler(elements, getState, jsConfetti) {
  const { copyTemplate } = elements;

  copyTemplate?.addEventListener('click', () => {
    const html = getState('html');
    if (!html) return toast.error('No HTML to copy. Render template first.');

    const finalHtml = optimizeHtmlImages(html, getState);
    navigator.clipboard.writeText(finalHtml);
    toast.success('Template copied to clipboard!');

    const config = getState('config');
    if (!config?.confetti) return;

    jsConfetti.addConfetti({
      emojiSize: 20,
      confettiNumber: 80,
    });
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
    if (!selectedCampaign.issueCardId) return toast.error('Issue card id not found.');

    openIssueHandler(selectedCampaign.issueCardId);
  });
}

export function setupPurgeDynamicSpreadsheetHandler(elements) {
  const { purgeDynamicSpreadsheet, tabName, year } = elements;

  purgeDynamicSpreadsheet?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    if (!selectedCampaign || !selectedCampaign.startId) {
      return toast.error('Please select a campaign first!');
    }
    const selectedTemplates = getState('selectedTemplates');
    if (!selectedTemplates || selectedTemplates.length === 0) {
      return toast.error('Please select a template first!');
    }
    const template = selectedTemplates[0];
    if (!template.translationsSpreadsheet) {
      return toast.error('Selected template does not have translations spreadsheet data!');
    }
    const spreadsheetData = template.translationsSpreadsheet.split('::');
    if (spreadsheetData.length !== 2) {
      return toast.error('Invalid translations spreadsheet format!');
    }
    const [autoYear, autoTabName] = spreadsheetData;
    purgeDynamicSpreadsheetData(autoYear, autoTabName);
  });
}

export function setupOpenFigmaHandler(elements, getState) {
  const { openFigma } = elements;

  openFigma?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    if (!selectedCampaign.figmaUrl) return toast.error('Figma url not found.');

    figmaCardHandler(selectedCampaign.figmaUrl);
  });
}

export function setupOpenLPHandler(elements, getState) {
  const { openLP } = elements;

  openLP?.addEventListener('click', () => {
    const selectedCampaign = getState('selectedCampaign');
    const country = getState('country');

    if (!selectedCampaign.lpId)
      return toast.error('Campaign LP ID not found. Select campaign or update campaign file.');

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
      if (!campaign.startId) {
        toast.error('Campaign missing newsletter ID!');
        return false;
      }

      if (!campaign.name) {
        toast.error('Campaign missing name!');
        return false;
      }

      return true; // success — allow modal to close
    });
  });
}

// Helper function to handle storage quota errors
function handleStorageQuotaError(error, prevProducts, selectedCampaign, normalizedProducts) {
  const quotaExceededError = isQuotaExceededError(error);

  if (!quotaExceededError) throw error;

  const ids = prevProducts.map((item) => item.campaign_id);
  const deleteCampaignId = prompt(
    'Memory exceeded, please enter startId to delete: ' + ids.join(',')
  );

  if (!deleteCampaignId) return;

  if (!ids.includes(deleteCampaignId)) return toast.error('Invalid campaign ID!');

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

  toast.success('Products successfully saved.');
  window.location.reload();
}
