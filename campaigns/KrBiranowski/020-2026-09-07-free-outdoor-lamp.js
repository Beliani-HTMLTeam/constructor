const campaignTranslationsSheet = '2026::Voucher - 07.09.26 - Free Outdoor lamp';

const theme = {
  primary: '#750000',
  primaryText: '#ffffff',
  secondary: '#FFEBE2',
  secondaryText: '#FFCCB7',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introBg: '#750000',
  toastBg: '#F6E7E6',
  toastText: '#000000',
  ctaBg: '#F6E7E6',
  offerBg: '#ffffff',
  dealBg: '#FFEBE2',
  freebieColor: '#FFEBE2',
  offerTitleColor: '#750000',
  offerPrg1Color: '#000000',
  offerPrg2Color: '#000000',
};

const catData = [];

const prodData = [
  [
    [
      { id: '722181', src: getImageUrl('20260907_free01.png', true), exclude: ['ES', 'IT'] },
      { id: '722239', src: getImageUrl('20260907_free02.png', true), exclude: ['ES', 'IT'] },
    ],
    [
      { id: '722219', src: getImageUrl('20260907_free03.png', true), exclude: ['ES', 'IT'] },
      { id: '722200', src: getImageUrl('20260907_free04.png', true), exclude: ['ES', 'IT'] },
    ],
    [
      { id: '364571', src: getImageUrl('20260907_Free01_ESIT.png', true), visibility: ['ES', 'IT'] },
      { id: '194771', src: getImageUrl('20260907_Free02_ESIT.png', true), visibility: ['ES', 'IT'] },
    ],
    [
      { id: '232794', src: getImageUrl('20260907_Free03_ESIT.png', true), visibility: ['ES', 'IT'] },
      { id: '232377', src: getImageUrl('20260907_Free04_ESIT.png', true), visibility: ['ES', 'IT'] },
    ],
  ],
  
];

const tableQueries = [
  {
    name: 'offer',
    tableRange: '25:28',
  },
  {
    name: 'offer_date',
    tableRange: '30',
  },
  {
    name: 'offer_code',
    tableRange: '31',
  },
  {
    name: 'freebies_subtitle',
    tableRange: '32',
  },
  {
    name: 'condition',
    tableRange: '34:36',
  },
];

const links = {
  // Intro_cta_href: 'https://www.beliani.ch/bathroom-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-07' }),
  TopImageTitle_src: translateImage({ value: '20260907_01.png' }),

  TopImage_src: getImageUrl('20260907_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-07' }),

  Banner_1: translateLink({ value: 'content/lp26-08-27' }),
  Banner_1_Image: translateImage({ value: '20260827b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-08-28' }),
  Banner_2_Image: translateImage({ value: '20260828b.png' }),
};

const topImage_data = {
  ['ES']: getImageUrl('20260907_Gif_ESIT.gif', true),
  ['IT']: getImageUrl('20260907_Gif_ESIT.gif', true),
  ['default']: getImageUrl('20260907_Gif.gif', true),
}

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'standard',
};

const categories = [
  // offer
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: theme.white,
    color: theme.black,
    spaceAfter: 'newsletterBottom45px',
    cta: { variant: 'cream', color: theme.white, bg: theme.primary, borderWidth: '15px 45px', borderColor: theme.primary  },
    freebiesSize: 'large',
    combineOfferParts: false,
    freebies: prodData[0],
    product: {
      freebieSize: 16,
      freebieBold: 'bold',
      align: 'center',
      priceLowSize: 16,
      priceHighSize: 15
    }
  },
  {
    paragraph: {
      spaceAfter: '',
    },
    href: 'https://beliani.ch',
    paddingTop: '0',
    type: 'small-tiles',
    background: theme.secondary,
    color: '#000000',
    paragraph: {
      position: 'afterProducts',
      spaceAfter: 'newsletterBottom35px',
    },
    spaceAfter: 'newsletterBottom80px',
    cta: { variant: 'underline', phrase: 'Shop all categories', color: theme.black },
    tiles: {
      background: '750000',
      text: 'ffffff',
      items: [
        {
          name: 'Outdoor', // uzywane jako Alt, getCategoryTitle(name)
          href: 'https://www.beliani.ch/garden-furniture', // link do kategorii -> getCategoryLink(href)
          // src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
        },
        {
          name: 'Sofas',
          href: 'https://www.beliani.ch/sofas',
        },
        {
          name: 'Beds',
          href: 'https://www.beliani.ch/beds',
        },
        {
          name: 'Armchairs',
          href: 'https://www.beliani.ch/armchairs',
        },
        {
          name: 'Chairs',
          href: 'https://www.beliani.ch/chairs',
        },
        {
          name: 'Tables',
          href: 'https://www.beliani.ch/tables',
        },
        {
          name: 'Storage',
          href: 'https://www.beliani.ch/storage',
        },
        {
          name: 'Kids',
          href: 'https://www.beliani.ch/children-room',
        },
        {
          name: 'Textiles',
          href: 'https://www.beliani.ch/textiles',
        },
        {
          name: 'Lighting',
          href: 'https://www.beliani.ch/lighting',
        },
        {
          name: 'Bathtubs',
          href: 'https://www.beliani.ch/bathtubs-hot-tubs',
        },
        {
          name: 'Desks',
          href: 'https://www.beliani.ch/office-furniture/desks',
        },
        {
          name: 'Rugs',
          href: 'https://www.beliani.ch/rugs',
        },
        {
          name: 'Accessories',
          href: 'https://www.beliani.ch/home-accessories/accessories-decor',
        },
      ],
    },
  },
];

export default new entities.Campaign({
  startId: '47957',
  name: 'Monday - Free Outdoor lamp',
  date: '07.09.2026',
  issueCardId: '533545',
  lpId: '32446',
  // specialLpIds: {
  //   HR: '31562',
  //   SI: '31563',
  // },
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: 'new',
  figmaUrl: 'https://www.figma.com/design/ivTLBnr4YDgyVtciBVAMzZ/',
  templates: [
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayNew,

      css: types.CSS.NS_AI_NEW,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      topImage_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      disableTopImageTitle: true,
      shopByCategory: false,
      theme,
      disableFooterCategories: true,
    },
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayNew,

      css: types.CSS.LP_AI_NEW,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      topImage_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      disableTopImageTitle: true,
      disableFooterCategories: true,
      disableKlarna: ['SI', 'HR'],
    },
  ],
});
