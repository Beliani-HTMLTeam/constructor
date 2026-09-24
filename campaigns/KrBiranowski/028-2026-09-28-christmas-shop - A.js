const campaignTranslationsSheet = '2026::Voucher - 28.09.26 - Christmas shop is open';

const theme = {
  primary: '#FBF5F5',
  primaryText: '#ffffff',
  secondary: '#FAF1F0',
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

const catData = [
  // Cat 1
  {
    name: 'Christmas Trees',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-tree/',
    catImg: getImageUrl('20260928_Cat01.jpg', true),
  },
  // Cat 2
  {
    name: 'Tree Decorations',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-tree-decorations/',
    catImg: getImageUrl('20260928_Cat02.jpg', true),
  },
  // Cat 3
  {
    name: 'Tree Collars',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-tree-collars/',
    catImg: getImageUrl('20260928_Cat03.jpg', true),
  },
  // Cat 4
  {
    name: 'Decorations',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/decorations/',
    catImg: getImageUrl('20260928_Cat04.jpg', true),
  },
  // Cat 5
  {
    name: 'LED Decor',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-outdoor-decor/',
    catImg: getImageUrl('20260928_Cat05.jpg', true),
  },
  // Cat 6
  {
    name: 'Wreaths',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-wreaths/',
    catImg: getImageUrl('20260928_Cat06.jpg', true),
  },
  // Cat 7
  {
    name: 'Garlands',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-garland/',
    catImg: getImageUrl('20260928_Cat07.jpg', true),
  },
  // Cat 8
  {
    name: 'Christmas Textiles',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-textiles/',
    catImg: getImageUrl('20260928_Cat08.jpg', true),
  },
  // Cat 9
  {
    name: 'Lights',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-lights/',
    catImg: getImageUrl('20260928_Cat09.jpg', true),
  },
  // Cat 10
  {
    name: 'Christmas Candle Holders',
    href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-candle-holders/',
    catImg: getImageUrl('20260928_Cat10.jpg', true),
  },
];

const prodData = [
  [
    [
      { id: '571845', src: getImageUrl('20260928_Free01.png', true)},
      { id: '571807', src: getImageUrl('20260928_Free02.png', true)},
      { id: '229265', src: getImageUrl('20260928_Free03.png', true)},
    ],
    [
      { id: '336136', src: getImageUrl('20260928_Free04.png', true)},
      { id: '251828', src: getImageUrl('20260928_Free05.png', true)},
    ],
  ],
  
];

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '22:23',
  },
  {
    name: 'offer',
    tableRange: '25:28',
  },
  {
    name: 'offer_date',
    tableRange: '27',
  },
  {
    name: 'offer_code',
    tableRange: '28',
  },
  {
    name: 'intro',
    tableRange: '29:30',
  },
  {
    name: 'categories',
    tableRange: '31:40',
  },
  {
    name: 'condition',
    tableRange: '42:44',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/christmas-shop/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-28-ta' }),
  TopImageTitle_src: translateImage({ value: '20260928_01.png' }),

  TopImage_src: translateImage({ value: '20260928_topImage.jpg' }),
  TopImage_href: translateLink({ value: 'content/lp26-09-28-ta' }),

  Banner_1: translateLink({ value: 'content/lp26-09-17' }),
  Banner_1_Image: translateImage({ value: '20260917b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-18' }),
  Banner_2_Image: translateImage({ value: '20260918b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'standard_semibold_italic',
};

const catObj = {
  type: 'category-banner',
  insideContainer: true,
  title: { show: true, position: 'beforeImg', align: 'center' },
  line: { show: true, src: 'https://pictureserver.net/static/2026/footer/line.jpg' },
  skipLinkTranslation: true,
  background: theme.primary,
  color: theme.black,
  cta: {
    phrase: 'Shop now',
    position: 'afterImg',
    align: 'center',
    color: theme.black,
  },
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
    background: theme.primary,
    color: theme.black,
    spaceAfter: 'newsletterBottom50px',
    cta: false,
    gridSize: 'small',
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
  
  ...catData.map((cat, idx) => ({
    ...catObj,
    name: cat.name,
    src: cat.catImg,
    href: cat.href,
    ...(idx === catData.length - 1 ? { line: undefined } : {}),
    ...(idx === catData.length - 1 ? { spaceAfter: false } : {})
  }))
];

export default new entities.Campaign({
  startId: '48437',
  name: 'Monday - Christmas shop is open - A',
  date: '28.09.2026',
  issueCardId: '533908',
  lpId: '32690',
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
      template: templates.Monday,

      css: types.CSS.NS,
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
      intro: {
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        position: 'afterFreebies',
        secondaryLink: false,
        disableLine: true,
        spaceTop: 'newsletterBottom35px',
        spaceBottom: 'newsletterBottom45px',
        containerClass: 'newsletterContainer',
        paragraphSpace: 'newsletterBottom35px',
        cta: {
          variant: 'underline',
          align: 'center',
          color: theme.black,
          spaceAfter: 'newsletterPadding45px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableFooterCategories: true,
    },
    {
      background: theme.primary,
      color: theme.black,
      template: templates.Monday,

      css: types.CSS.LP,
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
      disableFooterCategories: true,
      intro: {
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        position: 'afterFreebies',
        secondaryLink: false,
        disableLine: true,
        spaceTop: 'newsletterBottom35px',
        spaceBottom: 'newsletterBottom45px',
        containerClass: 'newsletterContainer',
        paragraphSpace: 'newsletterBottom35px',
        cta: {
          variant: 'underline',
          align: 'center',
          color: theme.black,
          spaceAfter: 'newsletterPadding45px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableKlarna: ['SI', 'HR'],
    },
  ],
});
