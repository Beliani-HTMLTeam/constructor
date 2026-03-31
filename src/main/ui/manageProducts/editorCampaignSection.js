import { toast } from 'sonner';
import { createButton, findCampaignLabel } from './ui.js';
import { getEntryProducts } from './storage.js';

export function buildCampaignSection({ body, campaigns, mode, campaignId, index, existingIds, textarea, refreshSizeHint }) {
  const normalizeCampaignId = (value) => String(value ?? '');

  const row = document.createElement('div');
  row.className = 'modal-row products-modal-campaign-row';

  const left = document.createElement('div');
  const lbl = document.createElement('label');
  lbl.textContent = 'Campaign';

  const select = document.createElement('select');
  select.className = 'products-modal-select';
  const def = document.createElement('option');
  def.value = 'default';
  def.textContent = 'Select Campaign';
  select.appendChild(def);

  const populate = (includeExisting = false) => {
    while (select.options.length > 1) select.remove(1);

    for (const campaign of campaigns ?? []) {
      if (!campaign || campaign.isArchive) continue;
      if (!includeExisting && existingIds.has(normalizeCampaignId(campaign.startId))) continue;
     
      const opt = document.createElement('option');
     
      opt.value = normalizeCampaignId(campaign.startId);
      opt.textContent = `${campaign.name}${campaign.date ? ` - ${campaign.date}` : ''}`;
      select.appendChild(opt);
    }
  };

  populate(false);
  if (mode === 'edit') {
    select.value = normalizeCampaignId(campaignId);
    select.disabled = true;
  }

  left.appendChild(lbl);
  left.appendChild(select);

  const right = document.createElement('div');
  const infoLbl = document.createElement('label');
  infoLbl.textContent = 'Info';

  const info = document.createElement('div');
  info.className = 'products-modal-info';
  
  const warning = document.createElement('div');
  warning.className = 'products-modal-existing-warning';
  warning.style.display = 'none';
  warning.textContent = 'This campaign already has products saved.';

  const loadBtn = createButton('Load existing products', 'cancel-btn', () => {
    const selectedCampaignId = normalizeCampaignId(select.value);
    const existingEntry = index.find((entry) => normalizeCampaignId(entry?.campaign_id) === selectedCampaignId);
  
    if (!existingEntry) return;
  
    try {
      textarea.value = JSON.stringify(getEntryProducts(existingEntry) ?? []);
      refreshSizeHint();
  
      toast.success('Loaded existing products into editor.');
    } catch {
      toast.error('Failed to load existing products.');
    }
  });
  
  loadBtn.style.display = 'none';

  const setInfo = (selectedCampaignId) => {
    const normalizedSelectedCampaignId = normalizeCampaignId(selectedCampaignId);

    if (!normalizedSelectedCampaignId || normalizedSelectedCampaignId === 'default') {
      info.textContent = 'Pick campaign to attach products to.';
      info.classList.remove('products-modal-missing');
  
      warning.style.display = 'none';
  
      loadBtn.style.display = 'none';
  
      return;
    }
  
    const { label } = findCampaignLabel(campaigns, normalizedSelectedCampaignId);
  
    info.textContent = label;
    info.classList.toggle('products-modal-missing', label === '[MISSING]');
  
    const hasRealSelection =
      normalizedSelectedCampaignId !== 'default' &&
      campaigns?.some?.((campaign) => normalizeCampaignId(campaign?.startId) === normalizedSelectedCampaignId);
    const hasExistingProducts = index.some(
      (entry) => normalizeCampaignId(entry?.campaign_id) === normalizedSelectedCampaignId
    );
    const showExisting =
      mode === 'add' &&
      hasRealSelection &&
      existingIds.has(normalizedSelectedCampaignId) &&
      hasExistingProducts;
  
    warning.style.display = showExisting ? '' : 'none';
    loadBtn.style.display = showExisting ? '' : 'none';
  };

  setInfo(mode === 'edit' ? normalizeCampaignId(campaignId) : 'default');
  select.addEventListener('change', () => setInfo(select.value));

  if (mode === 'add') {
    const toggleRow = document.createElement('div');
    toggleRow.className = 'products-modal-toggle-row';
  
    const toggleLabel = document.createElement('label');
    toggleLabel.className = 'products-modal-toggle-label';
    toggleLabel.textContent = 'Include campaigns with existing products';
  
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.addEventListener('change', () => {
      const prev = select.value;
  
      populate(toggle.checked);
  
      select.value = toggle.checked && prev && prev !== 'default' ? prev : 'default';
  
      setInfo(select.value);
    });
  
    toggleRow.appendChild(toggle);
    toggleRow.appendChild(toggleLabel);
  
    left.appendChild(toggleRow);
  }

  right.appendChild(infoLbl);
  right.appendChild(info);
  right.appendChild(warning);
  right.appendChild(loadBtn);
  
  row.appendChild(left);
  row.appendChild(right);
  
  body.appendChild(row);
  
  return { select };
}
