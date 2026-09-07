const campaignTranslationsSheet = '2026::05.10.26 - October Peak Start';

const theme = {
  primary: '#FAF1F0',
  primaryText: '#ffffff',
  secondary: '#F2E6E6',
  secondaryText: '#FFCCB7',
  ctaText: '#FFF4E6',
  unitBg: '#AC6666',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introText: '#000000',
  insideBg: '#750000',
  toastBg: '#FBF3F0',
  toastText: '#750000',
};

const catData = [
  // Cat 1
  {
    name: 'Living room',
    src: getImageUrl('20260827_Cat40_B.jpg', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
  },
  // Cat 2
  {
    name: 'Bedroom',
    src: getImageUrl('20260827_Cat40_B.jpg', true),
    href: 'https://www.beliani.ch/beds/fabric-beds/',
  },
  // Cat 3
  {
    name: 'Dining room',
    src: getImageUrl('20260827_Cat40_B.jpg', true),
    href: 'https://www.beliani.ch/lighting/',
  },
  // Cat 4
  {
    name: 'Bathroom',
    src: getImageUrl('20260827_Cat40_B.jpg', true),
    href: 'https://www.beliani.ch/beds/fabric-beds/',
  },
  // Cat 5
  {
    name: 'Office',
    src: getImageUrl('20260827_Cat40_B.jpg', true),
    href: 'https://www.beliani.ch/beds/fabric-beds/',
  },
  // Cat 6
  {
    name: 'Hallway',
    src: getImageUrl('20260827_Cat40_B.jpg', true),
    href: 'https://www.beliani.ch/beds/fabric-beds/',
  },
  // Cat 7
  {
    name: 'Kids room',
    src: getImageUrl('20260827_Cat40_B.jpg', true),
    href: 'https://www.beliani.ch/beds/fabric-beds/',
  },
];

const prodData = [
  // Cat 1
  [
    { id: '664642', src: getImageUrl('20260827_Pic10_B.png', true) },
    { id: '645146', src: getImageUrl('20260827_Pic11_B.png', true) },
    { id: '468434', src: getImageUrl('20260827_Pic12_B.png', true) },
  ],
  // Cat 2
  [
    { id: '395648', src: getImageUrl('20260827_Pic20_B.png', true) },
    { id: '569482', src: getImageUrl('20260827_Pic21_B.png', true) },
    { id: '358007', src: getImageUrl('20260827_Pic22_B.png', true) },
  ],
  // Cat 3
  [
    { id: '728766', src: getImageUrl('20260827_Pic30_B.png', true) },
    { id: '804786', src: getImageUrl('20260827_Pic31_B.png', true) },
    { id: '689025', src: getImageUrl('20260827_Pic32_B.png', true) },
  ],
  // Cat 4
  [
    { id: '813719', src: getImageUrl('20260827_Pic40_B.png', true) },
    { id: '676112', src: getImageUrl('20260827_Pic41_B.png', true) },
    { id: '714220', src: getImageUrl('20260827_Pic42_B.png', true) },
  ],
  // Cat 5
  [
    { id: '813719', src: getImageUrl('20260827_Pic40_B.png', true) },
    { id: '676112', src: getImageUrl('20260827_Pic41_B.png', true) },
    { id: '714220', src: getImageUrl('20260827_Pic42_B.png', true) },
  ],
  // Cat 6
  [
    { id: '813719', src: getImageUrl('20260827_Pic40_B.png', true) },
    { id: '676112', src: getImageUrl('20260827_Pic41_B.png', true) },
    { id: '714220', src: getImageUrl('20260827_Pic42_B.png', true) },
  ],
  // Cat 7
  [
    { id: '813719', src: getImageUrl('20260827_Pic40_B.png', true) },
    { id: '676112', src: getImageUrl('20260827_Pic41_B.png', true) },
    { id: '714220', src: getImageUrl('20260827_Pic42_B.png', true) },
  ]
];

const tableQueries = [
  {
    name: 'intro',
    tableRange: '24',
  },
  {
    name: 'condition',
    tableRange: '25:26',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-27-tb' }),
  TopImageTitle_src: translateImage({ value: '20260827_01.png' }),

  TopImage_src: getImageUrl('20260827_Gif_B.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-27-tb' }),

  Banner_1: translateLink({ value: 'content/lp26-08-13' }),
  Banner_1_Image: translateImage({ value: '20260813b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-08-24' }),

  Banner_2: translateLink({ value: 'content/lp26-08-19' }),
  Banner_2_Image: translateImage({ value: '20260819b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'twoSameLines',
};

const categories = [
  // Cat 1
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: catData[0].src,
    href: catData[0].href,
    skipLinkTranslation: true,
    background: theme.primary,
    rounded: 'top',
    margin: 'newsletterTop35px',
    padding: 'newsletterContainer25px',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    color: theme.black,
    type: '3prods',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    title: {
      show: true,
      color: theme.primary,
      position: 'afterImg',
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
      align: 'left',
    },
    products: prodData[0],
  },
  // Cat 2
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: catData[1].src,
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    padding: 'newsletterContainer25px',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    color: theme.black,
    type: '3prods',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      color: theme.primary,
      position: 'afterImg',
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
      align: 'left',
    },
    products: prodData[1],
  },
  // Cat 3
  {
    name: catData[2].name,
    // nameOverride: 'OPOCO',
    src: catData[2].src,
    href: catData[2].href,
    skipLinkTranslation: true,
    background: theme.primary,
    padding: 'newsletterContainer25px',
    color: theme.black,
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    type: '3prods',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
      align: 'left',
    },
    products: prodData[2],
  },
  // Cat 4
  {
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: catData[3].src,
    href: catData[3].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    padding: 'newsletterContainer25px',
    color: theme.black,
    rounded: 'bottom',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    type: '3prods',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
      align: 'left',
    },
    products: prodData[3],
  },
  // Cat 5
  {
    name: catData[4].name,
    // nameOverride: 'BRADLEY',
    src: catData[4].src,
    href: catData[4].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    padding: 'newsletterContainer25px',
    color: theme.black,
    rounded: 'bottom',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    type: '3prods',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
      align: 'left',
    },
    products: prodData[4],
  },
  // Cat 6
  {
    name: catData[5].name,
    // nameOverride: 'BRADLEY',
    src: catData[5].src,
    href: catData[5].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    padding: 'newsletterContainer25px',
    color: theme.black,
    rounded: 'bottom',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    type: '3prods',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
      align: 'left',
    },
    products: prodData[5],
  },
  // Cat 7
  {
    name: catData[6].name,
    // nameOverride: 'BRADLEY',
    src: catData[6].src,
    href: catData[6].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    padding: 'newsletterContainer25px',
    color: theme.black,
    rounded: 'bottom',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    type: '3prods',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: true,
      align: 'left',
    },
    products: prodData[6],
  },
];

export default new entities.Campaign({
  startId: "48341",
  name: "Monday - October Peak Start",
  date: "05.10.2026",
  issueCardId: "534168",
  lpId: "32642",
  // specialLpIds: {
  //   HR: '31562',
  //   SI: '31563',
  // },
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: "new",
  figmaUrl: "https://www.figma.com/design/pC70LMdl48JU2X9pDox3kk/",
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
      topImageMargin: 'newsletterTop35px',
      tableQueries: tableQueries,
      disableTopImageTitle: true,
      shopByCategory: false,
      theme,
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
      topImageMargin: 'newsletterTop35px',
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      disableTopImageTitle: true,
    },
  ],
});