import { createButton, findCampaignLabel } from './ui.js';
import { formatMb } from './format.js';
import { getEntryCount, getEntryStoredSizeMb, isCompressedProducts } from './storage.js';

export function buildEntryRow({ idx, entry, campaigns, openEditorView, onDelete }) {
  const campaignId = entry?.campaign_id;
  const { label } = findCampaignLabel(campaigns, campaignId);

  const row = document.createElement('div');
  row.className = 'products-modal-row';
  row.classList.toggle('products-modal-row-missing', label === '[MISSING]');

  const summary = document.createElement('div');
  summary.className = 'products-modal-summary';

  const summaryMain = document.createElement('div');
  summaryMain.className = 'products-modal-summary-main';
  summaryMain.textContent = `${idx + 1}. ${campaignId}: ${label}`;

  const summaryMeta = document.createElement('div');
  summaryMeta.className = 'products-modal-summary-meta';

  const itemsChip = document.createElement('span');
  itemsChip.className = 'products-modal-chip';
  itemsChip.textContent = '… items';

  const mbChip = document.createElement('span');
  mbChip.className = 'products-modal-chip products-modal-chip-mb';
  mbChip.textContent = 'Stored: … MB';

  const rawMbChip = document.createElement('span');
  rawMbChip.className = 'products-modal-chip products-modal-chip-secondary';
  rawMbChip.textContent = 'Raw: … MB';

  summaryMeta.appendChild(itemsChip);
  summaryMeta.appendChild(mbChip);
  summaryMeta.appendChild(rawMbChip);
  summary.appendChild(summaryMain);
  summary.appendChild(summaryMeta);
  row.appendChild(summary);

  setTimeout(() => {
    try {
      const productCount = getEntryCount(entry);
      const storedMb = getEntryStoredSizeMb(entry);
      const rawMb = Number.isFinite(entry?.meta?.uncompressed_mb)
        ? entry.meta.uncompressed_mb
        : entry?.products && !isCompressedProducts(entry.products)
          ? storedMb
          : null;

      itemsChip.textContent = `${productCount} items`;
      mbChip.textContent = `Stored: ${formatMb(storedMb)} MB`;

      if (rawMb !== null) {
        rawMbChip.textContent = `Raw: ${formatMb(rawMb)} MB`;
        rawMbChip.classList.remove('hidden');
      } else {
        rawMbChip.classList.add('hidden');
      }
    } catch {
      itemsChip.textContent = 'unknown items';
      mbChip.textContent = 'unknown MB';
      rawMbChip.classList.add('hidden');
    }
  }, 0);

  const actions = document.createElement('div');
  actions.className = 'products-modal-actions';

  const modifyBtn = createButton('Modify', 'cancel-btn', () => openEditorView({ mode: 'edit', campaignId }));
  const deleteBtn = createButton('Delete', 'cancel-btn products-modal-danger', () => onDelete({ campaignId }));

  actions.appendChild(modifyBtn);
  actions.appendChild(deleteBtn);
  row.appendChild(actions);

  return row;
}
