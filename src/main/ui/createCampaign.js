window.closeModal = function closeModal() {
  document.getElementById('formModal').style.display = 'none';
};

export function openCreateCampaignModal(selectedCampaign = null) {
  window.__formControl?.applyCreateMode(true, selectedCampaign);
  document.getElementById('formModal').style.display = 'flex';
}

export function openEditCampaignModal(campaign) {
  window.__formControl?.applyEditMode(campaign);
  document.getElementById('formModal').style.display = 'flex';
}
