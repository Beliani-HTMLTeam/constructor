const campaignTranslationsSheet = '2026::Voucher - 31.08.26 - Free gift';

const theme = {
  primary: '#750000',
  primaryText: '#ffffff',
  secondary: '#F6E7E6',
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
  {
    name: 'Armchairs',
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
    image: getImageUrl('20260831_Cat01_A.png', true),
  },
  {
    name: 'Bookcases & Shelving Units',
    href: 'https://www.beliani.ch/storage/bookcases-and-shelves/',
    image: getImageUrl('20260831_Cat02_A.png', true),
  },
  {
    name: 'Lighting',
    href: 'https://www.beliani.ch/lighting/',
    image: getImageUrl('20260831_Cat03_A.png', true),
  },
  {
    name: 'Textiles',
    href: 'https://www.beliani.ch/living-room-furniture/textiles/',
    image: getImageUrl('20260831_Cat04_A.png', true),
  },
];

const prodData = [
  // Free
  [
    [
      { id: '194771', src: getImageUrl('20260831_Free01_A.png', true), useDescription: true },
      { id: '368546', src: getImageUrl('20260831_Free02_A.png', true), useDescription: true },
    ],
    [
      { id: '232794', src: getImageUrl('20260831_Free03_A.png', true), useDescription: true },
      { id: '367130', src: getImageUrl('20260831_Free04_A.png', true), useDescription: true },
    ],
  ],
  // Cat 1
  [
    { id: '603406', src: getImageUrl('20260831_Prod00_A.png', true) },
    { id: '735924', src: getImageUrl('20260831_Prod01_A.png', true) },
    { id: '678325', src: getImageUrl('20260831_Prod02_A.png', true) },
    { id: '510752', src: getImageUrl('20260831_Prod03_A.png', true) },
  ],
  // Cat 2
  [
    { id: '677790', src: getImageUrl('20260831_Prod10_A.png', true) },
    { id: '562633', src: getImageUrl('20260831_Prod11_A.png', true) },
    { id: '170647', src: getImageUrl('20260831_Prod12_A.png', true) },
    { id: '646021', src: getImageUrl('20260831_Prod13_A.png', true) },
  ],
  // Cat 3
  [
    { id: '712521', src: getImageUrl('20260831_Prod20_A.png', true) },
    { id: '443153', src: getImageUrl('20260831_Prod21_A.png', true) },
    { id: '620047', src: getImageUrl('20260831_Prod22_A.png', true) },
    { id: '681561', src: getImageUrl('20260831_Prod23_A.png', true) },
  ],
  // Cat 4
  [
    { id: '358007', src: getImageUrl('20260831_Prod30_A.png', true) },
    { id: '495711', src: getImageUrl('20260831_Prod31_A.png', true) },
    { id: '395561', src: getImageUrl('20260831_Prod32_A.png', true) },
    { id: '338993', src: getImageUrl('20260831_Prod33_A.png', true) },
  ],
];

const tableQueries = [
  {
    name: 'offer',
    tableRange: '25:27',
  },
  // {
  //   name: 'get_code',
  //   tableRange: '27',
  // },
  {
    name: 'offer_date',
    tableRange: '28',
  },
  // {
  //   name: 'freebies_subtitle',
  //   tableRange: '31',
  // },
  {
    tableRange: '22:23',
    name: 'TopImageTitle',
  },
  {
    name: 'intro',
    tableRange: '29:30',
  },
  // {
  //   name: 'categoryButton',
  //   tableRange: '34:37',
  // },
  // {
  //   name: 'categories',
  //   tableRange: '21:24',
  // },
  {
    name: 'paragraphs',
    tableRange: '31:34',
  },
  {
    name: 'condition',
    tableRange: '36:38',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/',
  IntroImage_href: 'https://www.beliani.ch/',
  IntroImage_src: getImageUrl('20260831_Intro_A.png', true),
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-31' }),
  TopImageTitle_src: translateImage({ value: '20260831_01_A.png' }),

  TopImage_src: getImageUrl('20260831_static_A.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-31' }),

  Banner_1: translateLink({ value: 'content/lp26-08-19' }),
  Banner_1_Image: translateImage({ value: '20260819b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-08-24' }),

  Banner_2: translateLink({ value: 'content/lp26-08-20' }),
  Banner_2_Image: translateImage({ value: '20260820b.png' }),
};

const TopImageTitle_data = {
  color: theme.white,
  backgroundColor: theme.primary,
  type: 'standard',
};

const categories = [
  // main
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: theme.primary,
    color: theme.white,
    spaceAfter: 'newsletterBottom45px',
    freebies: prodData[0],
    ctaColor: theme.white,
  },
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: catData[0].image,
    href: catData[0].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    rounded: 'top',
    margin: 'newsletterTop35px',
    padding: 'newsletterContainer25px',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    title: {
      show: true,
      color: theme.primary,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
    },
    products: prodData[1],
  },
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: catData[1].image,
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.primary,
    padding: 'newsletterContainer25px',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    color: theme.white,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      color: theme.primary,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
    },
    products: prodData[2],
  },
  {
    name: catData[2].name,
    // nameOverride: 'OPOCO',
    src: catData[2].image,
    href: catData[2].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    padding: 'newsletterContainer25px',
    color: theme.black,
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      align: 'left',
      color: theme.primary,
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
    },
    products: prodData[3],
  },
  {
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: catData[3].image,
    href: catData[3].href,
    skipLinkTranslation: true,
    background: theme.primary,
    padding: 'newsletterContainer25px',
    color: theme.white,
    rounded: 'bottom',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      align: 'left',
      color: theme.primary,
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
    },
    products: prodData[4],
  },
];

const timer = {
  freebies: getImageUrl('20260827free.png', true),
  deadline: '2026-08-30',
  ctaVariant: 'underline',
}

export default new entities.Campaign({
  startId: '47380',
  name: 'Monday - Free Gift - A',
  date: '31.08.2026',
  issueCardId: '521620',
  lpId: '32035',
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
  figmaUrl: 'https://www.figma.com/design/pC70LMdl48JU2X9pDox3kk/',
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
      topImagePadding: 'newsletterTop55px newsletterContainer25px',
      tableQueries: tableQueries,
      disableTopImageTitle: false,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'left',
        position: 'afterFreebies',
        cta: {
          spaceAfter: 'newsletterBottom20px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
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
      topImagePadding: 'newsletterTop55px newsletterContainer25px',
      tableQueries: tableQueries,
      shopByCategory: false,
      TopImageTitle_data: TopImageTitle_data,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'left',
        position: 'afterFreebies',
        cta: {
          spaceAfter: 'newsletterBottom20px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableTopImageTitle: false,
    },
  ],
});