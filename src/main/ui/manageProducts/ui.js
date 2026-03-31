import { MAX_LOCAL_STORAGE_MB } from './constants.js';
import { formatMb } from './format.js';
import { getLocalStorageUsageMB } from './storage.js';

export function createButton(text, className, onClick) {
  const button = document.createElement('button');
  
  button.type = 'button';
  
  if (className) button.className = className;
  
  button.textContent = text;
  button.addEventListener('click', onClick);

  return button;
}

export function findCampaignLabel(campaigns, campaignId) {
  const targetCampaignId = String(campaignId ?? '');
  const campaign = campaigns?.find?.((campaign) => String(campaign?.startId ?? '') === targetCampaignId);

  if (!campaign) return { label: '[MISSING]', campaign: null };

  const date = campaign.date ? ` - ${campaign.date}` : '';

  return { label: `${campaign.name}${date}`, campaign };
}

export function updateUsageLine(subtitleEl) {
  const used = getLocalStorageUsageMB();

  const remaining = MAX_LOCAL_STORAGE_MB - used;
  const warn = remaining < 0.25;

  subtitleEl.textContent = `LocalStorage: ${formatMb(used)} / ${MAX_LOCAL_STORAGE_MB.toFixed(0)} MB (free: ${formatMb(
    Math.max(0, remaining)
  )} MB)`;
  subtitleEl.classList.toggle('products-modal-subtitle-warn', warn);
}
