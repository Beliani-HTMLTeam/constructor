import { getModalElements, ensureCloseButton, openModal, bindCloseHandlers } from './modal.js';
import { renderListView } from './listView.js';
import { renderEditorView } from './editorView.js';

export { getLocalStorageUsageMB } from './storage.js';

export function openManageProductsModal({ campaigns = [] } = {}) {
  const { modal, body, subtitle, header } = getModalElements();

  ensureCloseButton(modal, header);
  openModal(modal);
  bindCloseHandlers(modal);

  const openEditorView = ({ mode, campaignId } = {}) => {
    renderEditorView({
      body,
      subtitle,
      campaigns,
      mode,
      campaignId,
      backToList: () => renderListView({ body, subtitle, campaigns, openEditorView }),
    });
  };

  renderListView({ body, subtitle, campaigns, openEditorView });
}
