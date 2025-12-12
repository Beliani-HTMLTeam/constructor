import { getIframe } from '@/helpers/getIframe';
import { incrementId } from '@/helpers/incrementId.js';
import { getState, setState } from '@/main/state/appState';

import { toast } from 'sonner';

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
  const url = `https://fed2n8e59dpq.share.zrok.io/dynamic/${year}/${tabName}/force-refresh`;

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
};
