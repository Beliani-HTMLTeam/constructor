const campaignTranslationsSheet = 'Voucher - 20.11.25 - Black Week Categories Week 2';

const tableQueries = [
  {
    tableRange: '19:22',
    name: 'cats',
  },
  {
    tableRange: '23:26',
    name: 'categoryLinks',
  },
  {
    tableRange: '43',
    name: 'codeCTA',
  },
  {
    tableRange: '32:41',
    name: 'OfferPart',
  },
  {
    tableRange: '44:47',
    name: 'codes',
  },
  {
    tableRange: '51:52',
    name: 'condition',
  },
];

const links = {
  TopImage_href: translateLink({ value: 'content/lp25-11-20' }),
  TopImage: translateImage({ value: '20251120_gif.gif' }),
  //  translateImage({ value: '20251120_Gif.gif' }),

  Banner_1: translateLink({ value: 'content/lp25-11-13' }),
  Banner_1_Image: translateImage({ value: '20251113b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-11-12' }),
  Banner_2_Image: translateImage({ value: '20251112b.png' }),
};

const categories = [
  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Beds',
    products: [
      // AMBILLOU
      {
        id: '598905',
        src: getImageUrl('20251120_Pic01.png', true),
      },
      // ORBEY
      {
        id: '615939',
        src: getImageUrl('20251120_Pic02.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Armchairs',
    products: [
      // BJARN
      {
        id: '	428814',
        src: getImageUrl('20251120_Pic11.png', true),
      },
      // VOSS
      {
        id: '423931',
        src: getImageUrl('20251120_Pic12.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Rugs',
    products: [
      // DEMRE
      {
        id: '96639',
        src: getImageUrl('20251120_Pic21.png', true),
      },
      // GESI II
      {
        id: '174576',
        src: getImageUrl('20251120_Pic22.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Textiles',
    products: [
      // MALNI
      {
        id: '306947',
        src: getImageUrl('20251120_Pic31.png', true),
      },
      // KAWERI
      {
        id: '291483',
        src: getImageUrl('20251120_Pic32.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '38212',
  name: 'Black Week Categories Week 2',
  date: '20.11.2025',
  issueCardId: '405686',
  lpId: '27391',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/q9SlzSMHPnH6uaYsXLJf5v',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Blackweek, // User should change this
      css: types.CSS.NS_BLACK_WEEK,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#000000',
      color: '#FFFFFF',
      wrapper: types.WRAPPER,
      categories: categories,
      OfferPart: {
        color: '#FFFFFF',
        backgroundColor: '#000000',
        alignment: 'center',
        type: 'codes',
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Blackweek, // User should change this
      css: types.CSS.LP_BLACK_WEEK,
      background: '#000000',
      color: '#FFFFFF',
      translationsSpreadsheet: campaignTranslationsSheet,
      categories: categories,
      OfferPart: {
        color: '#FFFFFF',
        backgroundColor: '#000000',
        alignment: 'center',
        type: 'codes',
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

