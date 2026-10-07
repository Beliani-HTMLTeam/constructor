const campaignTranslationsSheet = '2026::Voucher - 09.11.26 - Black Week start';

const theme = {
  primary: '#000000',
  primaryText: '#FFFFFF',
  cardBg: '#FFF4E6',
  cardCtaBg: '#FF2F00',
  cardCtaText: '#FFFFFF',
  cardText: '#0A0A0A',
  cardDiscount: '#FF2F00',
  cardCode: '#FF2F00',
};

let cardData = [
  {
    name: 'card_1',
    tableRange: '27:30',
  },
  {
    name: 'card_2',
    tableRange: '31:34',
  },
  {
    name: 'card_3',
    tableRange: '35:38',
  },
  {
    name: 'card_4',
    tableRange: '39:42',
  },
]

const tableQueries = [
  { name: 'card_title', tableRange: '26' },
  { name: 'offer_date', tableRange: '43' },
  { name: 'condition', tableRange: '44:46' },
  ...cardData,
];

const links = {
  // Intro_cta_href: 'https://www.beliani.ch/bathroom-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-11-09' }),
  TopImageTitle_src: translateImage({ value: '20260923_01.png' }),

  // TopImage_src: translateImage({ value: '20260923_topImage.png' }),
  TopImage_src: translateImage({ value: '20261109_topImage.jpg' }),
  TopImage_href: translateLink({ value: 'content/lp26-11-09' }),

  ShopNow_src: translateImage({ value: '20261109_shopNow.jpg' }),
  ShopNow_href: 'https://www.beliani.ch/',

  Banner_1: translateLink({ value: 'content/lp26-10-29' }),
  Banner_1_Image: translateImage({ value: '20261029b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-30' }),
  Banner_2_Image: translateImage({ value: '20261030b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'standard',
};

const categories = [
  {
    type: 'offer-cards',
    paddingTop: '0',
    spaceAfter: 0,
    background: theme.primary,
    title: { show: false },
    ctaHref: translateLink({ value: 'content/lp26-11-09' }),
    tdClass: `newsletterContainer`,
  },
];

export default new entities.Campaign({
  startId: '49216',
  name: 'Monday - Black Week Start',
  date: '09.11.2026',
  issueCardId: '545614',
  lpId: '33173',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: 'new',
  figmaUrl: 'https://www.figma.com/design/ivTLBnr4YDgyVtciBVAMzZ/',
  templates: [
    {
      background: theme.primary,
      color: theme.black,
      template: templates.BlackWeekFirst,

      css: types.CSS.NS_BLACK_WEEK2,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      disableTopImageTitle: true,
      shopByCategory: false,
      theme,
      intro: false,
      // disableFooterCategories: true,
      disableSoonEnding: true,
    },
    {
      background: theme.primary,
      color: theme.black,
      template: templates.BlackWeekFirst,

      css: types.CSS.LP_BLACK_WEEK2,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      disableTopImageTitle: true,
      intro: false,
      disableKlarna: ['SI', 'HR'],
      disableSoonEnding: true,
    },
  ],
});
