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
    name: 'intro',
    tableRange: '20',
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
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-30-ta' }),
  TopImageTitle_src: translateImage({ value: '20260930_01_A.png' }),

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
  background: theme.primary,
  color: theme.black,
  type: 'grid',
  skipLinkTranslation: true,
  paddingTop: false, // Space before category element (number or false)
  spaceAfter: 'newsletterBottom20px', // Space after category element
  ctaPosition: 'afterParagraph',
  tdClass: 'newsletterContainer', // Category container

  cta: {
    variant: 'maroon',
    color: theme.ctaText,
    bg: theme.ctaBg,
    borderColor: theme.ctaBg,
    borderWidth: '15px 45px',
    transform: 'uppercase',
    phrase: 'Shop now',
    spaceBefore: 'newsletterBottom40px', // Space before the CTA element
    spaceAfter: false, // Space after the CTA element
    tdClass: 'newsletterContainer', // CTA container
  },

  title: {
    show: true,
    position: 'afterImg',
    align: 'center',
    spaceBefore: 'newsletterBottom40px', // Space before the title element
    spaceAfter: 'newsletterBottom15px', // Space after the title element
    tdClass: 'newsletterContainer', // Title container
  },

  paragraph: {
    show: true,
    align: 'center',
    spaceAfter: 'newsletterBottom20px', // Space before the paragraph element
    tdClass: 'newsletterContainer40px', // Paragraph container
  },

  product: {
    name: true,
    prices: true,
    align: 'center',
    background: theme.primary,
    insideColor: theme.white, // Color of product element
    lowPriceColor: theme.priceLow,
    highPriceColor: theme.priceHigh,
    spaceBefore: 'newsletterBottom50px', // Space before the product element
    spaceAfter: 'newsletterBottom25px', // Space after the product element
    outsideSpace: 'newsletterBottom25px',  // Space outside of the product element
    tdClass: 'newsletterContainer', // Product container
    gapBetweenVertical: 'newsletterBottom15px', // Space between product name and product prices
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
    src: getImageUrl('20260930_Cat01_A.jpg', true),
    products: prodData[0],
  },
  {
    ...catBase,
    name: 'Blankets & Throws',
    href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
    src: getImageUrl('20260930_Cat02_A.jpg', true),
    products: prodData[1],
    background: theme.secondary,
    color: theme.white,

    cta: {
      ...catBase.cta,
      bg: theme.ctaSecondaryBg,
      borderColor: theme.ctaSecondaryBg,
      color: theme.ctaSecondaryText,
    },

    product: {
      ...catBase.product,
      background: theme.secondary,
      color: theme.black,
    },
  },
  {
    ...catBase,
    name: 'Bedding',
    href: 'https://www.beliani.ch/textiles/',
    src: getImageUrl('20260930_Cat03_A.jpg', true),
    products: prodData[2],
  },
  {
    ...catBase,
    name: 'Floor Cushions',
    href: 'https://www.beliani.ch/textiles/floor-cushions/',
    src: getImageUrl('20260930_Cat04_A.jpg', true),
    products: prodData[3],
    background: theme.secondary,
    color: theme.white,

    cta: {
      ...catBase.cta,
      bg: theme.ctaSecondaryBg,
      borderColor: theme.ctaSecondaryBg,
      color: theme.ctaSecondaryText,
    },

    product: {
      ...catBase.product,
      background: theme.secondary,
      color: theme.black,
    },
  },
];

const categories = [
  ...catData,
  {
    name: 'This may also interest you',
    background: theme.primary,
    color: theme.black,
    type: 'categorytiles',
    tileBgColor: theme.white,
    tileTextColor: theme.tileText,
    displayType: '2col-img', // 4col, 2col-img, 2col
    showTileNames: false, // Disable tile names
    cta: false,
    paddingTop: 0, // Space before the category element
    spaceAfter: 'newsletterBottom80px', // Space after the category element
    tdClass: 'newsletterContainer', // Category container

    title: {
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px', // Space before the title element
      className: 'newsletterAditionalTitle', // Custom title class
      tdClass: 'newsletterContainer', // Title container
      spaceAfter: 'newsletterBottom0px'
    },

    paragraph: {
      show: false,
      align: 'center',
      spaceBefore: 'newsletterBottom35px', // Space before the paragraph element
      spaceAfter: 'newsletterBottom35px', // Space after the paragraph element
    },
    product: {
      align: 'center',
    },
    tiles: [
      {
        name: 'Rain Covers',
        src: translateImage({ value: '20260930_Add01_A.png' }),
        href: 'https://www.beliani.ch/textiles/covers-rain-covers/',
      },
      {
        name: 'Towels',
        src: translateImage({ value: '20260930_Add02_A.png' }),
        href: 'https://www.beliani.ch/textiles/towels/',
      },
      {
        name: 'Kitchen Textiles',
        src: translateImage({ value: '20260930_Add03_A.png' }),
        href: 'https://www.beliani.ch/textiles/kitchen-textile/',
      },
      {
        name: 'Kids Textiles and Playmats',
        overrides: {
          IT: "Tessili per Bambini"
        },
        src: translateImage({ value: '20260930_Add04_A.png' }),
        href: 'https://www.beliani.ch/children-room/kids-duvet-covers-and-sheets/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '48053',
  name: 'Wednesday - Textiles - A',
  date: '30.09.2026',
  issueCardId: '533964',
  lpId: '32489',
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
      template: templates.MondayNewAI,

      css: types.CSS.DIMA_NS_AI_NEW,
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

      intro: {
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        spaceTop: false, // Space before the intro element
        spaceBottom: 'newsletterBottom50px', // Space after the intro element
        paragraphSpace: false, // Space after the paragraph element
        position: 'beforeFreebies',
        secondaryLink: false,
        cta: false,
        disableLine: true,
        containerClass: 'newsletterContainer40px', // Intro container
      },
    },
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayNewAI,

      css: types.CSS.DIMA_LP_AI_NEW,
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

      intro: {
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        spaceTop: false,
        paragraphSpace: false,
        position: 'beforeCategories',
        spaceBottom: 'newsletterBottom50px',
        secondaryLink: false,
        cta: false,
        disableLine: true,
        containerClass: 'newsletterContainer40px', // Intro container
      },

      disableKlarna: ['SI', 'HR'], // Disable klarna for specific countries
    },
  ],
});
