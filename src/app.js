import { appConfig as config } from '@utils/config.js';
import { initApp } from '@main/initApp.js';
import { getUserCampaigns } from './utils/getUserCampaigns';

import SHOPS from '@config/shops.js';
import toast from './helpers/toastManager.js';

export const root = document.querySelector('#app');

async function initializeApp() {
  try {
    const userCampaigns = await getUserCampaigns();

    initApp({
      campaigns: userCampaigns,
      shops: SHOPS,
      config: config,
    });
  } catch (error) {
    console.log(error);
    toast({ message: error.message || 'Something went wrong. More details in console.' });
  }
}

initializeApp();
