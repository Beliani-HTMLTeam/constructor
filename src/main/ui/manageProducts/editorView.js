import { updateUsageLine, createButton } from './ui.js';
import { getEntryProducts, readProductsIndex } from './storage.js';
import { buildCampaignSection } from './editorCampaignSection.js';
import { buildJsonSection } from './editorJsonSection.js';
import { createSaveHandler } from './saveProducts.js';

export function renderEditorView({ body, subtitle, campaigns, mode, campaignId, backToList }) {
  body.innerHTML = '';
  updateUsageLine(subtitle);

  const index = readProductsIndex();
  const existingIds = new Set(index.map((x) => x?.campaign_id).filter(Boolean));

  const editorHeader = document.createElement('div');
  editorHeader.className = 'products-modal-editor-header';

  const backBtn = createButton('← Back', 'cancel-btn', backToList);
  const h3 = document.createElement('h3');
  h3.className = 'products-modal-h3';
  h3.textContent = mode === 'edit' ? `Modify products (${campaignId})` : 'Add products JSON';

  editorHeader.appendChild(backBtn);
  editorHeader.appendChild(h3);
  body.appendChild(editorHeader);

  const { textarea, refreshSizeHint } = buildJsonSection({ body });

  const { select } = buildCampaignSection({
    body,
    campaigns,
    mode,
    campaignId,
    index,
    existingIds,
    textarea,
    refreshSizeHint,
  });

  const nav = document.createElement('div');
  nav.className = 'form-nav products-modal-nav';

  const cancel = createButton('Cancel', 'cancel-btn', backToList);
  const save = createButton(
    'Save',
    'submit-btn',
    createSaveHandler({ mode, campaignId, select, textarea, backToList })
  );

  nav.appendChild(cancel);
  nav.appendChild(save);
  body.appendChild(nav);

  if (mode === 'edit') {
    const entry = index.find((x) => x?.campaign_id === campaignId);
    setTimeout(() => {
      try {
        textarea.value = JSON.stringify(getEntryProducts(entry) ?? []);
        refreshSizeHint();
      } catch {
        textarea.value = '';
        refreshSizeHint();
      }
    }, 0);
  }
}
