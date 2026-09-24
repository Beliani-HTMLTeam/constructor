const campaignTranslationsSheet = '2026::30.09.26 - Textiles';

const theme = {
  primary: '#F6E7E6',
  secondary: '#750000',

  black: '#000000',
  white: '#ffffff',

  ctaBg: '#5B1210',
  ctaText: '#ffffff',

  ctaSecondaryBg: '#F6E7E6',
  ctaSecondaryText: '#000000',

  priceHigh: '#750000',
  priceLow: '#750000',
};

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '17:18',
  },
  {
    name: 'categories',
    tableRange: '21:24',
  },
  {
    name: 'paragraphs',
    tableRange: '25:28',
  },
  {
    name: 'condition',
    tableRange: '29:30',
  },
];

const links = {
  // Intro_cta_href: 'https://www.beliani.ch/bathroom-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-30' }),
  TopImageTitle_src: translateImage({ value: '20260930_01_B.png' }),

  // TopImage_src: catData[0].catImg,
  // TopImage_href: translateLink({ value: catData[0].href }),

  Banner_1: translateLink({ value: 'content/lp26-09-18' }),
  Banner_1_Image: translateImage({ value: '20260918b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-23' }),
  Banner_2_Image: translateImage({ value: '20260923b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'twoSameLines',
};

const catBase = {
  
  skipLinkTranslation: true,
  background: theme.primary,
  color: theme.black,
  type: 'grid',
  spaceBefore: false,
  spaceAfter: 'newsletterBottom80px',
  paddingTop: false,
  ctaPosition: 'afterParagraph',
  cta: {
    variant: 'underline',
    color: theme.ctaText,
    transform: 'uppercase',
    phrase: 'Shop now',
    spaceAfter: false,
    spaceBefore: 'newsletterBottom40px',
  },
  title: {
    show: true,
    position: 'afterImg',
    align: 'center',
    spaceBefore: 'newsletterBottom35px',
    spaceAfter: 'newsletterBottom35px',
  },
  paragraph: {
    show: true,
    align: 'center',
    spaceAfter: 'newsletterBottom35px',
  },
  product: {
    name: true,
    prices: true,
    align: 'center',
    background: theme.primary,
    insideColor: theme.white,
    lowPriceColor: theme.priceLow,
    highPriceColor: theme.priceHigh,
    spaceBefore: 'newsletterBottom40px',
    spaceAfter: 'newsletterBottom25px',
    outsideSpace: 'newsletterBottom25px',
  },
};

const prodData = [
  [
    // PLEIONE
    {
      id: '353105',
      src: getImageUrl('20260930_Pic01.png', true),
    },
    // AKOLA
    {
      id: '381270',
      src: getImageUrl('20260930_Pic02.png', true),
    },
    // MORTESTI
    {
      id: '329901',
      src: getImageUrl('20260930_Pic03.png', true),
    },
    // COVASNA
    {
      id: '329708',
      src: getImageUrl('20260930_Pic04.png', true),
    },
  ],
  [
    // SENBUK
    {
      id: '395544',
      src: getImageUrl('20260930_Pic10.png', true),
    },
    // BJAS
    {
      id: '355335',
      src: getImageUrl('20260930_Pic11.png', true),
    },
    // KAWERI
    {
      id: '291472',
      src: getImageUrl('20260930_Pic12.png', true),
    },
    // KAZY
    {
      id: '502814',
      src: getImageUrl('20260930_Pic13.png', true),
    },
  ],
  [
    // PARKROSE
    {
      id: '719478',
      src: getImageUrl('20260930_Pic20.png', true),
    },
    // KRIVAN
    {
      id: '673691',
      src: getImageUrl('20260930_Pic21.png', true),
    },
    // FELDBERG
    {
      id: '258559',
      src: getImageUrl('20260930_Pic22.png', true),
    },
    // PELISTER
    {
      id: '415420',
      src: getImageUrl('20260930_Pic23.png', true),
    },
  ],
  [
    // OUED
    {
      id: '331974',
      src: getImageUrl('20260930_Pic30.png', true),
    },
    // SETTAT
    {
      id: '331900',
      src: getImageUrl('20260930_Pic31.png', true),
    },
    // LUTZ
    {
      id: '632635',
      src: getImageUrl('20260930_Pic32.png', true),
    },
    // YULLE
    {
      id: '632578',
      src: getImageUrl('20260930_Pic33.png', true),
    },
  ],
];

const catData = [
  {
    ...catBase,
    name: 'Scatter Cushions',
    href: 'https://www.beliani.ch/textiles/scatter-cushions/',
    src: getImageUrl('20260930_Cat01_B.jpg', true),
    products: prodData[0],
  },
  {
    ...catBase,
    name: 'Blankets & Throws',
    href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
    src: getImageUrl('20260930_Cat02_B.jpg', true),
    products: prodData[1],
    background: theme.secondary,
    color: theme.white,
  },
  {
    ...catBase,
    name: 'Bedding',
    href: 'https://www.beliani.ch/textiles/',
    src: getImageUrl('20260930_Cat03_B.jpg', true),
    products: prodData[2],
  },
  {
    ...catBase,
    spaceAfter: 'newsletterBottom40px',
    name: 'Floor Cushions',
    href: 'https://www.beliani.ch/textiles/floor-cushions/',
    src: getImageUrl('20260930_Cat04_B.jpg', true),
    products: prodData[3],
    background: theme.secondary,
    color: theme.white,
  },
];

const categories = [
  ...catData,
  {
    name: 'This may also interest you',
    background: theme.white,
    color: theme.black,
    type: 'categorytiles',
    cta: false,
    spaceAfter:  'newsletterBottom80px',
    tileBgColor: theme.white,
    tileTextColor: theme.tileText,
    paddingTop: 0,
    showTileNames: false,
    tdClass: "newsletterContainer",
    title: {
      className: 'newsletterAditionalTitle',
      align: 'center',
      show: true,
      spaceBefore: 'newsletterBottom40px',
      tdClass: "newsletterContainer40px",
    },
    paragraph: {
      show: false,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
    },
    tiles: [
      {
        name: 'Rain Covers',
        src: getImageUrl('20260930_Add01_B.png', true),
        href: 'https://www.beliani.ch/textiles/covers-rain-covers/',
      },
      {
        name: 'Towels',
        src: getImageUrl('20260930_Add02_B.png', true),
        href: 'https://www.beliani.ch/textiles/towels/',
      },
      {
        name: 'Kitchen Textiles',
        src: getImageUrl('20260930_Add03_B.png', true),
        href: 'https://www.beliani.ch/textiles/kitchen-textile/',
      },
      {
        name: 'Kids Textiles and Playmats',
        overrides: {
          IT: "Tessili per Bambini"},
        src: getImageUrl('20260930_Add04_B.png', true),
        href: 'https://www.beliani.ch/children-room/kids-duvet-covers-and-sheets/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '48277',
  name: 'Wednesday - Textiles - B',
  date: '30.09.2026',
  issueCardId: '533964',
  lpId: '32599',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: 'new',
  figmaUrl: 'https://www.figma.com/design/gf1AONh53zUPDsaNd6lEGa/',
  templates: [
    {
      background: theme.white,
      color: theme.black,
      template: templates.Monday,

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categoryImageTdClass: false,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
    },
    {
      background: theme.white,
      color: theme.black,
      template: templates.Monday,

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categoryImageTdClass: false,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      disableKlarna: ['SI', 'HR'],
    },
  ],
});
