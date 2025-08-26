window.closeModal = function closeModal() {
  document.getElementById("formModal").style.display = "none";
};

export function openCreateCampaignModal() {
  document.getElementById("formModal").style.display = "flex";
}
