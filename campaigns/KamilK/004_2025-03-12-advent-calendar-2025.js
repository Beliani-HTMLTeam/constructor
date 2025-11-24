// Campaign generated from form
const campaignTranslationsSheet = '03.12.25 - Advent calendar';

const tableQueries = [
  {
    tableRange: '15',
    name: 'intro',
  },
  {
    tableRange: '17:18',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-03' }),
  TopImageTitle_src: translateImage({ value: '20251203_01.png' }),

  TopImage: getImageUrl('20251203_Gif.gif', true),

  Banner_1: translateLink({ value: 'content/lp25-10-15' }),
  Banner_1_Image: translateImage({ value: '20251015b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-10-02' }),
  Banner_2_Image: translateImage({ value: '20251002b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'twoSameLines',
};

export default new entities.Campaign({
  startId: '38727',
  name: 'Advent Calendar 2025',
  date: '03.12.2025',
  issueCardId: '422465',
  lpId: '27653',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.AdventCalendar, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFCCB7',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      // categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: null, // User should change this
      css: types.CSS.LP,
      background: '#FFCCB7',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      // categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
