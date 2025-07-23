import SHOPS from "@config/shops.js";
import { appConfig as config } from "@utils/config.js";
import { initApp } from "@main/initApp.js";

const scope = import.meta.env.VITE_SCOPE;

const allCampaigns = import.meta.glob("/campaigns/*/*.js", { eager: true });

const userCampaigns = Object.entries(allCampaigns)
  .filter(([path]) => path.includes(`/campaigns/${scope}/`))
  .map(([, mod]) => mod);

try {
  initApp({
    campaigns: userCampaigns,
    shops: SHOPS,
    config: config,
  });
} catch (error) {
  console.log(error);
  Toastify({
    text: error.message || "Something went wrong. More details in console.",
    escapeMarkup: false,
    duration: 3000,
  }).showToast();
}
