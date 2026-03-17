import { getIframe } from '@/helpers/getIframe';
import { incrementId } from '@/helpers/incrementId.js';
import { getState, setState } from '@/main/state/appState';
import { appConfig as config } from '@/utils/config';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { TemplateHandlers } from './handlers/handlers';
import { staticTranslations } from '@/api/translations';
import { getQueryLink } from '@/helpers/getQueryLink';
import {
  foundRedirectsSwal,
  noRedirectsFoundSwal,
  redirectCheckerLoader,
} from '@/helpers/redirectChecker/redirectCheckerLoaders';
import { showMultiShopRedirectPopup } from '@/helpers/redirectChecker/resultPopup';
import { buildReverseMaps, checkRealRedirects, getCategoryLinkForTargetShop } from '@/helpers/redirectChecker/utils';

function openCampaignHandler(id) {
  const config = getState('config');

  if (!id) return toast.error('No campaign id found! Select campaign.');

  window.open(config.campaign_url + id, '_blank');
}

function openLpHandler(lpLinks, country) {
  if (!lpLinks) return toast.error('No lp links found!');

  if (!lpLinks[country]) return toast.error(`No lp links found for ${country}`);

  window.open(lpLinks[country], '_blank');
}

function openIssueHandler(id) {
  const config = getState('config');

  window.open(config.issue_url + id, '_blank');
}

function figmaCardHandler(url) {
  const config = getState('config');

  window.open(url, '_blank');
}

async function purgeDynamicSpreadsheetData(year, tabName) {
  const url = `${config.external_api_url}dynamic/${year}/${tabName}/force-refresh`;

  try {
    toast(`🔄 Purging dynamic spreadsheet...\nYear: ${year}\nTab: ${tabName}`);

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
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(`Successfully purged dynamic spreadsheet!\nYear: ${year}\nTab: ${tabName}`);
    } else {
      toast.error(`Failed to purge (${response.status}):\nYear: ${year}\nTab: ${tabName}`);
    }
  } catch (error) {
    console.error('Purge error: ', error);
    toast.error(`Error during purge:\nYear: ${year}\nTab: ${tabName}\nError: ${error.message}`);
  }
}

async function runRedirectCheck() {
  // loading modal
  const loadingSwal = redirectCheckerLoader();

  try {
    const shopLinks = Array.from(document.querySelectorAll('#app a[href*="https://www.beliani"]')).map(
      (link) => link.href
    );

    // filter out products links (containing .html) + normalize + deduplicate
    const baseCategoryLinks = [
      ...new Set(
        shopLinks.filter((href) => {
          try {
            const url = new URL(href);
            const pathnameLower = url.pathname.toLowerCase();

            const isProduct = pathnameLower.includes('.html');
            const isContentPage = pathnameLower.includes('/content/');
            const isPhp = pathnameLower.includes('.php');
            // skip if ends with .html or has .html before query string
            return !isProduct && !isContentPage && !isPhp;
          } catch {
            return false;
          }
        })
      ),
    ];

    if (baseCategoryLinks.length === 0) {
      loadingSwal.close();
      return toast.error('No category/content Beliani links found (products excluded).');
    }

    // console.log('Detected base category/content links:', baseCategoryLinks);

    const allShops = getState('shops') || [];

    if (allShops.length === 0) {
      loadingSwal.close();
      return toast.error('Shops configuration not available.');
    }

    // generate all localized versions of each base link for every shop
    const allLocalizedUrls = [];
    const urlToOriginalAndShop = new Map();

    baseCategoryLinks.forEach((baseFullUrl) => {
      let cleanCategory;

      try {
        const urlObj = new URL(baseFullUrl);
        let path = urlObj.pathname;

        if (path !== '/' && path.endsWith('/')) {
          path = path.slice(0, -1);
        }

        const nonStructuralEnds = [
          '/looks',
          '/vsechny+produkty',
          '/vsechny+produkty',
          '/wszystkie+produkty',
          '/alle+produkte',
          '/todos+los+productos',
          '/tutti+i+prodotti',
        ];

        if (nonStructuralEnds.some((suffix) => path.endsWith(suffix))) {
          path = path.substring(0, path.lastIndexOf('/'));
          if (path === '') path = '/';
        }

        cleanCategory = urlObj.origin + path;
      } catch (error) {
        console.warn('Invalid URL, skipping localization:', baseFullUrl, error);
        return;
      }

      allShops.forEach((shop) => {
        try {
          // console.log('shop', shop);
          const localized = getCategoryLinkForTargetShop(cleanCategory, shop);

          if (localized === cleanCategory && shop.slug !== new URL(baseFullUrl).host.split('.')[1].toUpperCase()) {
            return;
          }

          allLocalizedUrls.push(localized);
          urlToOriginalAndShop.set(localized, { original: baseFullUrl, baseOriginal: cleanCategory, shop: shop.slug });
        } catch (error) {
          console.warn(`Failed to localize ${cleanCategory} for shop ${shop.slug}:`, error);
        }
      });
    });

    if (allLocalizedUrls.length === 0) {
      loadingSwal.close();
      return toast.error('Could not generate any translated category links.');
    }

    console.log(
      `Checking ${allLocalizedUrls.length} localized links (${baseCategoryLinks.length} base x ${allShops.length} shops)`
    );

    const apiUrl = `${config.api_url}check-redirects`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ urls: allLocalizedUrls }),
    });

    if (!response.ok) {
      throw new Error(`API responded with ${response.status}`);
    }

    const result = await response.json();
    const checkData = result.data || {};

    console.log('Redirect check results:', checkData);

    loadingSwal.close();

    const realRedirects = checkRealRedirects(checkData, urlToOriginalAndShop);

    const totalChecked = allLocalizedUrls.length;
    const redirectedCount = realRedirects.length;

    toast.success(`Checked ${totalChecked} links → ${redirectedCount} real redirects found`);

    if (redirectedCount > 0) {
      showMultiShopRedirectPopup(realRedirects, totalChecked);
    } else {
      noRedirectsFoundSwal({ totalChecked });
    }
  } catch (error) {
    loadingSwal.close();
    console.error('Redirect check failed: ', error);
    toast.error(`Redirect check failed: ${error.message}`);
  }
}

function selectCampaignHandler(ev, campaigns) {
  const selectedCampaign = campaigns.find((campaign) => campaign.startId === ev.target.value);
  // console.log('selected Campaign', selectedCampaign);

  if (!selectedCampaign) return toast.error(`Campaign startId ${ev.target.value} not found.`);

  // Dla pewności pokaż całą kampanię w konsoli (do debugowania)
  // console.log('selectedCampaign z campaigns:', selectedCampaign);

  // Ustawienie mapy inkrementowanych ID (do "Open campaign")
  setState('ids', incrementId(selectedCampaign.startId, selectedCampaign.version || 'new'));

  // Ustawienie wybranej kampanii z najważniejszymi polami
  setState('selectedCampaign', {
    startId: selectedCampaign.startId,
    name: selectedCampaign.name,
    templates: selectedCampaign.templates,
    lpId: selectedCampaign.lpId,
    specialLpIds: selectedCampaign.specialLpIds,
    date: selectedCampaign.date, // <-- Dodaj, jeśli chcesz
    issueCardId: selectedCampaign.issueCardId, // <-- Dodaj, jeśli chcesz
    figmaUrl: selectedCampaign.figmaUrl, // <-- Dodaj, jeśli chcesz
    version: selectedCampaign.version || 'new',
    // Dodaj tutaj inne pola, których potrzebujesz!
  });

  // Zwróć całą kampanię i listę templatek
  return { selectedCampaign, templates: selectedCampaign.templates };
}

function handleSlugChange(ev) {
  const slugAndName = ev.target.value.split('-');
  setState('country', slugAndName[0]);
  setState('name', slugAndName[1]);
}

function handleShopChange(ev, shops) {
  const shop = shops.find((item) => item.shopId === ev.target.value);
  setState('shop', shop);
}

export {
  handleSlugChange,
  selectCampaignHandler,
  openCampaignHandler,
  openLpHandler,
  handleShopChange,
  openIssueHandler,
  figmaCardHandler,
  purgeDynamicSpreadsheetData,
  runRedirectCheck,
};
