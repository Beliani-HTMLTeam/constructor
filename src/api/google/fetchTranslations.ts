import { fetchSheetData } from './fetchSheetData';

let staticTranslations = {
  header: {},
  footer: {},
  templates: {},
  category_links: {},
  category_titles: {},
};

const warmUpStatic = async () => {
  const tabs = Object.keys(staticTranslations);
  
  await Promise.all(
    tabs.map(async (tab) => {
      console.log(`Warming up static tab: ${tab}`);
      let response = await fetchSheetData('STATIC', tab);

      if (response.code === 200 && response.data) {
        staticTranslations[tab] = response.data;
        console.log(`Static tab ${tab} warmed up successfully.`);
      }
    })
  );

  console.log(staticTranslations);
};

export { warmUpStatic };
