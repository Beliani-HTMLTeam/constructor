import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

import SHOPS from '@config/shops.js';
import { appConfig as config } from '@utils/config.js';
import { initApp } from '@main/initApp.js';

import { getUserCampaigns } from './utils/getUserCampaigns';

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
    Toastify({
      text: error.message || 'Something went wrong. More details in console.',
      escapeMarkup: false,
      duration: 3000,
    }).showToast();
  }
}

initializeApp();
