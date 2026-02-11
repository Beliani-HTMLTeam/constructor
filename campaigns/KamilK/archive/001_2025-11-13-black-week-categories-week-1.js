const campaignTranslationsSheet = '2025::Voucher - 13.11.25 - Black Week Categories Week 1';

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
  TopImage_href: translateLink({ value: 'content/lp25-11-13' }),
  TopImage: translateImage({ value: '20251113_gif.gif' }),
  // getImageUrl('251113tit_test.gif', true),
  //  translateImage({ value: '20251113_Gif.gif' }),

  Banner_1: translateLink({ value: 'content/lp25-11-06' }),
  Banner_1_Image: translateImage({ value: '20251106b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-11-05' }),
  Banner_2_Image: translateImage({ value: '20251105b.png' }),
};

const categories = [
  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Chairs',
    products: [
      // MELROSE
      {
        id: '450043',
        src: getImageUrl('20251113_Pic01.png', true),
      },
      // LYNN
      {
        id: '91330',
        src: getImageUrl('20251113_Pic02.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Tables',
    products: [
      // KENDALL
      {
        id: '581267',
        src: getImageUrl('20251113_Pic11.png', true),
      },
      // MADOX
      {
        id: '28026',
        src: getImageUrl('20251113_Pic12.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Storage',
    products: [
      // PASCO
      {
        id: '260509',
        src: getImageUrl('20251113_Pic21.png', true),
      },
      // ORILLA
      {
        id: '86881',
        src: getImageUrl('20251113_Pic22.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Lamps',
    products: [
      // FERGUS
      {
        id: '71103',
        src: getImageUrl('20251113_Pic31.png', true),
      },
      // STILETTO
      {
        id: '49786',
        src: getImageUrl('20251113_Pic32.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '37796',
  name: 'Black Week Categories Week 1',
  date: '13.11.2025',
  issueCardId: '405629',
  lpId: '27161',
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

