const campaignTranslationsSheet = 'Voucher - 27.11.25 - Black Week Categories Week 3';

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
  TopImage_href: translateLink({ value: 'content/lp25-11-27' }),
  TopImage: translateImage({ value: '20251127_gif.gif' }),
  //  translateImage({ value: '20251127_Gif.gif' }),

  Banner_1: translateLink({ value: 'content/lp25-11-20' }),
  Banner_1_Image: translateImage({ value: '20251120b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-11-19' }),
  Banner_2_Image: translateImage({ value: '20251119b.png' }),
};

const categories = [
  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Sofas',
    products: [
      // OSLO
      {
        id: '572017',
        src: getImageUrl('20251127_Pic01.png', true),
      },
      // CHEVANNES
      {
        id: '389131',
        src: getImageUrl('20251127_Pic02.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Desks',
    products: [
      // SHESLAY
      {
        id: '172216',
        src: getImageUrl('20251127_Pic11.png', true),
      },
      // KENLY
      {
        id: '354581',
        src: getImageUrl('20251127_Pic12.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Bathtubs',
    products: [
      // ANTIGUA
      {
        id: '59126',
        src: getImageUrl('20251127_Pic21.png', true),
      },
      // MEVES
      {
        id: '82000',
        src: getImageUrl('20251127_Pic22.png', true),
      },
    ],
  },

  {
    background: '#000000',
    color: '#FFFFFF',
    type: 'blackweek_toprated',
    name: 'Home Accessories',
    products: [
      // ZINNIA
      {
        id: '380815',
        src: getImageUrl('20251127_Pic31.png', true),
      },
      // LAPPAGO
      {
        id: '408278',
        src: getImageUrl('20251127_Pic32.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '38244',
  name: 'Black Week Categories Week 3',
  date: '27.11.2025',
  issueCardId: '405756',
  lpId: '27410',
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

