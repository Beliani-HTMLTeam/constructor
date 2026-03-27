import { appConfig as config } from '@utils/config.js';
import { initApp } from '@main/initApp.js';
import { getUserCampaigns } from './utils/getUserCampaigns';

import './toast.jsx'; // Initialize React and Toaster
import { toast } from 'sonner';

import SHOPS from '@config/shops.js';

export const root = document.querySelector('#app-content');

async function initializeApp() {
  try {
    const userCampaigns = await getUserCampaigns();
    // console.log('user campaigns', userCampaigns);
    const sortedUserCampaigns = userCampaigns.sort((a, b) => {
      const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('.');
        return new Date(`${year}-${month}-${day}`);
      };
      return parseDate(b.date) - parseDate(a.date);
    });

    // console.log('sorted user campaigns', sortedUserCampaigns);

    initApp({
      campaigns: sortedUserCampaigns,
      shops: SHOPS,
      config: config,
    });
  } catch (error) {
    console.error(error);
    toast.error('Something went wrong. More details in console.');
  }
}

initializeApp();
