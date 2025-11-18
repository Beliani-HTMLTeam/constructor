import { appConfig as config } from '@utils/config.js';
import { initApp } from '@main/initApp.js';
import { getUserCampaigns } from './utils/getUserCampaigns';

import './toast.jsx'; // Initialize React and Toaster
import { toast } from 'sonner';

import SHOPS from '@config/shops.js';

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
    console.error(error);
    toast.error('Something went wrong. More details in console.');
  }
}

initializeApp();
