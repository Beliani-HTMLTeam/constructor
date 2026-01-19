import { toast } from 'sonner';

import { parseCampaignDate } from './format.js';
import { getProductsSortOrder, setProductsSortOrder } from './state.js';
import { updateUsageLine } from './ui.js';
import { readProductsIndex, writeProductsIndex } from './storage.js';
import { buildListToolbar } from './listToolbar.js';
import { buildEntryRow } from './listRow.js';

export function renderListView({ body, subtitle, campaigns, openEditorView }) {
  body.innerHTML = '';
  updateUsageLine(subtitle);

  const index = readProductsIndex();
  const sortedIndex = [...index].sort((entryA, entryB) => {
    const campaignIdA = entryA?.campaign_id;
    const campaignIdB = entryB?.campaign_id;
    const campaignA = campaigns?.find?.((campaign) => campaign?.startId === campaignIdA);
    const campaignB = campaigns?.find?.((campaign) => campaign?.startId === campaignIdB);

    const isMissingA = !campaignA;
    const isMissingB = !campaignB;
    if (isMissingA !== isMissingB) return isMissingA ? -1 : 1;

    const dateA = parseCampaignDate(campaignA?.date);
    const dateB = parseCampaignDate(campaignB?.date);

    const timeA = dateA ? dateA.getTime() : null;
    const timeB = dateB ? dateB.getTime() : null;
    
    if (timeA === null && timeB === null) return String(campaignIdA).localeCompare(String(campaignIdB));
    if (timeA === null) return 1;
    if (timeB === null) return -1;

    return getProductsSortOrder() === 'oldest' ? timeA - timeB : timeB - timeA;
  });

  const sortSelect = document.createElement('select');
  sortSelect.className = 'products-modal-select products-modal-sort';

  const optNewest = document.createElement('option');
  optNewest.value = 'newest';
  optNewest.textContent = 'Od Najnowszych';
  
  const optOldest = document.createElement('option');
  optOldest.value = 'oldest';
  optOldest.textContent = 'Od Najstarszych';

  sortSelect.appendChild(optNewest);
  sortSelect.appendChild(optOldest);
  sortSelect.value = getProductsSortOrder();
  sortSelect.addEventListener('change', () => {
    setProductsSortOrder(sortSelect.value);
    renderListView({ body, subtitle, campaigns, openEditorView });
  });

  body.appendChild(
    buildListToolbar({
      body,
      subtitle,
      campaigns,
      openEditorView,
      renderListView,
      sortSelect,
    })
  );

  const list = document.createElement('div');
  list.className = 'products-modal-list';

  if (index.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'products-modal-empty';
    empty.textContent = 'No saved products yet. Use “Add products JSON”.';
    list.appendChild(empty);
  }

  const onDelete = ({ campaignId }) => {
    const ok = confirm(`Delete products for campaign ${campaignId}?`);
    if (!ok) return;
    try {
      const updatedIndex = readProductsIndex().filter((entry) => entry?.campaign_id !== campaignId);
      
      writeProductsIndex(updatedIndex);
      
      toast.success(`Deleted products for ${campaignId}.`);
      
      renderListView({ body, subtitle, campaigns, openEditorView });
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete. Check console for details.');
    }
  };

  for (const [idx, entry] of sortedIndex.entries()) {
    list.appendChild(buildEntryRow({ idx, entry, campaigns, openEditorView, onDelete }));
  }

  body.appendChild(list);
}
