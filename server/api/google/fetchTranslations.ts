import { fetchSheetData } from './fetchSheetData';

export const createWarmUpStatic = (staticTranslations) => {
  return async () => {
    const tabs = Object.keys(staticTranslations);

    await Promise.all(
      tabs.map(async (tab) => {
        let response = await fetchSheetData('STATIC', tab);

        if (response.code === 200 && response.data) {
          staticTranslations[tab] = response.data;
        }
      })
    );
  };
};
