// Campaign generated from form
const campaignTranslationsSheet = '26.09.25 - asdasdasd';

const tableQueries = [
  {
    tableRange: '15:16',
    name: 'TopImageTitle',
  },
  {
    tableRange: '18',
    name: 'intro',
  },
  {
    tableRange: '19:22',
    name: 'paragraphs',
  },
  {
    tableRange: '23:24',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp2025-09-26' }),
  TopImageTitle_src: translateImage({ value: '20250926_01.png' }),
  TopImage: getImageUrl('20250926_Pic.png', true),
  Banner_1: translateLink({ value: 'content/lp-placeholder-1' }),
  Banner_1_Image: translateImage({ value: 'placeholder1.png' }),
  Banner_2: translateLink({ value: 'content/lp-placeholder-2' }),
  Banner_2_Image: translateImage({ value: 'placeholder2.png' }),
};

const TopImageTitle_data = {
  color: '#333333',
  backgroundColor: '#333333',
  type: 'up_to',
};

const categories = [
  // TODO: Add categories here
];

export default new entities.Campaign({
  startId: '213123',
  name: 'asdasdasd',
  date: '26.09.2025',
  alarm: {
    isActive: true,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: null, // User should change this
      css: types.CSS.NS_OLD,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#333333',
      color: '#333333',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: null, // User should change this
      css: types.CSS.LP_OLD,
      background: '#333333',
      color: '#333333',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
