// Campaign generated from form
const campaignTranslationsSheet = '2025::10.12.25 - Christmas gift guide last moment';

const tableQueries = [
  {
    tableRange: '13:14',
    name: 'TopImageTitle',
  },
  {
    tableRange: '16',
    name: 'intro',
  },
  {
    tableRange: '17',
    name: 'explore',
  },
  {
    tableRange: '18:21',
    name: 'categories',
  },
  {
    tableRange: '22:25',
    name: 'underWithPrices',
  },
  {
    tableRange: '36:37',
    name: 'condition',
  },
  {
    tableRange: '26:28',
    name: 'gift_btn_href',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-10' }),
  TopImageTitle_src: translateImage({ value: '20251210_01.png' }),

  TopImage: getImageUrl('20251210_Gif.gif', true),

  gift_btn_1_src: translateImage({ value: '20251023_Under50.png' }),
  gift_btn_2_src: translateImage({ value: '20251023_Under150.png' }),
  gift_btn_3_src: translateImage({ value: '20251023_Under250.png' }),

  Banner_1: translateLink({ value: 'content/lp25-12-04' }),
  Banner_1_Image: translateImage({ value: '20251204b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-11-07' }),
  Banner_2_Image: translateImage({ value: '20251107b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#750000',
  type: 'twoSameLines',
};

const categories = [
    // for host
    {
      name: 'For Host',
      href: 'https://www.beliani.ch/gift-guide/gift-guide-host/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      src: getImageUrl('20251023_Cat00.png', true),
      showWhiteLine: true,
      products: [],
    },
  
    // for the homebody
    {
      name: 'For the Homebody',
      href: 'https://www.beliani.ch/gift-guide/gift-guide-homebody/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      showWhiteLine: true,
      src: getImageUrl('20251023_Cat10.png', true),
      products: [],
    },
  
    // for kids
    {
      name: 'For Kids',
      href: 'https://www.beliani.ch/gift-guide/gift-guide-kids/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      showWhiteLine: true,
      src: getImageUrl('20251023_Cat20.png', true),
      products: [],
    },
  
    // Budget - Friendly
    {
      name: 'Budget - Friendly',
      href: 'https://www.beliani.ch/gift-guide/gift-guide-kids/',
      title: { show: true, align: 'center' },
      type: 'xmas-gift-buttons',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: false },
      showParagraph: false,
      showWhiteLine: true,
      // src: getImageUrl('20251023_Cat30.png', true),
      products: [],
    },
];

export default new entities.Campaign({
  startId: "38984",
  name: "Newsletter Christmas gift guide last moment",
  date: "10.12.2025",
  issueCardId: "424423",
  lpId: "27808",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "Figma newsletter link https://www.figma.com/design/UO5nL3MYnBaFi2atEGmR9N/Christmas-gift-guide-last-moment---Wednesday-2025.12.10--Copy---Copy-?node-id=0-1&t=D8RLVADYzUDisZP7-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.ThreeCategoriesUnder, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#750000",
      color: "#FFFFFF",
      wrapper: types.WRAPPER,
      intro: {
        align: 'center',
        hideCTA: true,
      },
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.ThreeCategoriesUnderLP, // User should change this
      css: types.CSS.LP,
      intro: {
        align: 'center',
        hideCTA: true,
      },
      background: "#750000",
      color: "#FFFFFF",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});