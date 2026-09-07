const campaignTranslationsSheet = '2026::09.09.26 - International Beauty Day';

const theme = {
  primary: '#750000',
  primaryText: '#ffffff',
  secondary: '#F6E7E6',
  secondaryText: '#FFCCB7',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introBg: '#750000',
  toastBg: '#F6E7E6',
  toastText: '#000000',
  ctaBg: '#F6E7E6'
};

const catData = [
  {
    name: 'Dressing Tables',
    href: 'https://www.beliani.ch/storage/dressing-tables/',
    catImg: getImageUrl('20260909_Cat10_B.jpg', true),
  },
  {
    name: 'LED Mirrors',
    href: 'https://www.beliani.ch/mirrors/bath-mirrors/?sort=newest',
    catImg: getImageUrl('20260909_Cat20_B.jpg', true),
  },
  {
    name: 'Makeup Mirrors',
    href: 'https://www.beliani.ch/mirrors/makeup-mirrors/',
    catImg: getImageUrl('20260909_Cat30_B.jpg', true),
  },
  {
    name: 'Console Tables',
    href: 'https://www.beliani.ch/tables/console-tables/',
    catImg: getImageUrl('20260909_Cat40_B.jpg', true),
  },
];

const prodData = [
  [
    {
      id: '645566',
      src: getImageUrl('20260909_Pic10.png', true),
      useDescription: true,
    },
    {
      id: '361201',
      src: getImageUrl('20260909_Pic11.png', true),
      useDescription: true,
    },
    {
      id: '361398',
      src: getImageUrl('20260909_Pic12.png', true),
      useDescription: true,
    },
    {
      id: '419679',
      src: getImageUrl('20260909_Pic13.png', true),
      useDescription: true,
    },
  ],
  [
    {
      id: '817987',
      src: getImageUrl('20260909_Pic20.png', true),
      useDescription: true,
    },
    {
      id: '818157',
      src: getImageUrl('20260909_Pic21.png', true),
      useDescription: true,
    },
    {
      id: '819402',
      src: getImageUrl('20260909_Pic22.png', true),
      useDescription: true,
    },
    {
      id: '819887',
      src: getImageUrl('20260909_Pic23.png', true),
      useDescription: true,
    },
  ],
  [
    {
      id: '368063',
      src: getImageUrl('20260909_Pic30.png', true),
      useDescription: true,
    },
    {
      id: '368202',
      src: getImageUrl('20260909_Pic31.png', true),
      useDescription: true,
    },
    {
      id: '368236',
      src: getImageUrl('20260909_Pic32.png', true),
      useDescription: true,
    },
    {
      id: '297346',
      src: getImageUrl('20260909_Pic33.png', true),
      useDescription: true,
    },
  ],
  [
    {
      id: '601034',
      src: getImageUrl('20260909_Pic40.png', true),
      useDescription: true,
    },
    {
      id: '317396',
      src: getImageUrl('20260909_Pic41.png', true),
      useDescription: true,
    },
    {
      id: '109766',
      src: getImageUrl('20260909_Pic42.png', true),
      useDescription: true,
    },
    {
      id: '138668',
      src: getImageUrl('20260909_Pic43.png', true),
      useDescription: true,
    },
  ],
];

const tableQueries = [
  {
    tableRange: '17',
    name: 'TopImageTitle',
  },
  {
    name: 'offer',
    tableRange: '27:28',
  },
  {
    name: 'offer_code',
    tableRange: '30',
  },
  {
    name: 'categories',
    tableRange: '21:22',
  },
  {
    name: 'paragraphs',
    tableRange: '23:26',
  },
  // {
  //   name: 'categoryButton',
  //   tableRange: '34:37',
  // },
  {
    name: 'condition',
    tableRange: '27:28',
  },
];

const links = {
  // Intro_cta_href: 'https://www.beliani.ch/bathroom-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-09' }),
  TopImageTitle_src: translateImage({ value: '20260909_01_B.png' }),

  // TopImage_src: catData[0].catImg,
  // TopImage_href: translateLink({ value: catData[0].href }),

  Banner_1: translateLink({ value: 'content/lp26-08-28' }),
  Banner_1_Image: translateImage({ value: '20260828b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-02' }),
  Banner_2_Image: translateImage({ value: '20260902b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.secondary,
  type: 'singleLine',
};

const categories = [
  // main
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: catData[0].catImg,
    spaceBefore: false,
    href: catData[0].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.white, bg: theme.primary },
    paddingTop: false,
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
      prices: true,
      name: true,
    },
    products: prodData[0],
  },
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: catData[1].catImg,
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.primary,
    color: theme.white,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.white, bg: theme.primary },
    paddingTop: false,
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
      prices: true,
      name: true,
    },
    products: prodData[1],
  },
  {
    name: catData[2].name,
    // nameOverride: 'OPOCO',
    src: catData[2].catImg,
    href: catData[2].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.white, bg: theme.primary },
    paddingTop: false,
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
      prices: true,
      name: true,
    },
    products: prodData[2],
  },
  {
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: catData[3].catImg,
    href: catData[3].href,
    skipLinkTranslation: true,
    background: theme.primary,
    color: theme.white,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.white, bg: theme.primary },
    paddingTop: false,
    spaceAfter: 'newsletterBottom40px',
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
      prices: true,
      name: true,
    },
    products: prodData[3],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260311_Cat30.jpg', true),
    // href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
    background: '#FFFFFF',
    color: '#000000',
    type: 'categorytiles',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    title: {
      className: 'newsletterAditionalTitle',
      align: 'center',
      show: true,
      spaceBefore: 'newsletterBottom40px',
      // spaceAfter: 'newsletterBottom35px',
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
        name: 'Pouffes & stools',
        src: getImageUrl('20260909_Add01_B.png', true),
        href: 'https://www.beliani.ch/home-accessories/stools/',
      },
      {
        name: 'Lighting',
        src: getImageUrl('20260909_Add02_B.png', true),
        href: 'https://www.beliani.ch/lighting/',
      },
      {
        name: 'Armchairs',
        src: getImageUrl('20260909_Add03_B.png', true),
        href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
      },
      {
        name: 'Chaise lounges',
        src: getImageUrl('20260909_Add04_B.png', true),
        href: 'https://www.beliani.ch/sofas/chaise-lounge/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '47829',
  name: 'Wednesday - International Beauty Day - B',
  date: '09.09.2026',
  issueCardId: '525869',
  lpId: '32358',
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
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      disableTopImageTitle: true,
    },
  ],
});
