const campaignTranslationsSheet = '2026::Voucher - 31.08.26 - Free gift';

const theme = {
  primary: '#750000',
  primaryText: '#ffffff',
  secondary: '#FFF5F1',
  secondaryText: '#FFCCB7',
  offerBg: '#F6E7E6',
  prodColor: '#4A4038',
  paragraphColor: '#4A4038',
  ctaText: '#FFF4E6',
  urgent: '#FF2F00',
  accent: '#8A6B66',
  unitBg: '#AC6666',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introText: '#000000',
  introBg: '#750000',
  toastBg: '#FBF3F0',
  toastText: '#750000',
  categoryParagraph: '#5A3A36'
};

const catData = [
  {
    name: 'Armchairs',
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
    image: getImageUrl('20260831_Cat01_B.png', true),
  },
  {
    name: 'Bookcases & Shelving Units',
    href: 'https://www.beliani.ch/storage/bookcases-and-shelves/',
    image: getImageUrl('20260831_Cat02_B.png', true),
  },
  {
    name: 'Lighting',
    href: 'https://www.beliani.ch/lighting/',
    image: getImageUrl('20260831_Cat03_B.png', true),
  },
  {
    name: 'Textiles',
    href: 'https://www.beliani.ch/living-room-furniture/textiles/',
    image: getImageUrl('20260831_Cat04_B.png', true),
  },
];

const prodData = [
  // Free
  [
    [
      { id: '194771', src: getImageUrl('20260831_Free01_B.png', true), useDescription: true },
      { id: '368546', src: getImageUrl('20260831_Free02_B.png', true), useDescription: true },
    ],
    [
      { id: '232794', src: getImageUrl('20260831_Free03_B.png', true), useDescription: true },
      { id: '367130', src: getImageUrl('20260831_Free04_B.png', true), useDescription: true },
    ],
  ],
  // Cat 1
  [
    { id: '603406', src: getImageUrl('20260831_Prod00_B.png', true) },
    { id: '735924', src: getImageUrl('20260831_Prod01_B.png', true) },
    { id: '678325', src: getImageUrl('20260831_Prod02_B.png', true) },
    { id: '510752', src: getImageUrl('20260831_Prod03_B.png', true) },
  ],
  // Cat 2
  [
    { id: '677790', src: getImageUrl('20260831_Prod10_B.png', true) },
    { id: '562633', src: getImageUrl('20260831_Prod11_B.png', true) },
    { id: '170647', src: getImageUrl('20260831_Prod12_B.png', true) },
    { id: '646021', src: getImageUrl('20260831_Prod13_B.png', true) },
  ],
  // Cat 3
  [
    { id: '712521', src: getImageUrl('20260831_Prod20_B.png', true) },
    { id: '443153', src: getImageUrl('20260831_Prod21_B.png', true) },
    { id: '620047', src: getImageUrl('20260831_Prod22_B.png', true) },
    { id: '681561', src: getImageUrl('20260831_Prod23_B.png', true) },
  ],
  // Cat 4
  [
    { id: '358007', src: getImageUrl('20260831_Prod30_B.png', true) },
    { id: '495711', src: getImageUrl('20260831_Prod31_B.png', true) },
    { id: '395561', src: getImageUrl('20260831_Prod32_B.png', true) },
    { id: '338993', src: getImageUrl('20260831_Prod33_B.png', true) },
  ],
];

const prodSetData = {
  nameColor: theme.prodColor,
  bg: theme.white,
  rounded: 'bottom',
  spaceBottom: 'newsletterBottom20px',
  spaceBetween: 'newsletterContainer15px',
};

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
  IntroImage_src: getImageUrl('20260831_Intro_B.png', true),
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-31' }),
  TopImageTitle_src: translateImage({ value: '20260831_01_B.png' }),

  TopImage_src: getImageUrl('20260831_static_B.png', true),
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
    background: theme.white,
    offerBgColor: theme.offerBg,
    color: theme.primaryText,
    spaceAfter: false,
    freebiesSize: 'large',
    freebies: prodData[0],
    product: {
      prices: true,
      name: true,
      align: 'left',
      spaceAfter: 'newsletterBottom30px',
    },
    cta: {
      variant: 'button',
      bgColor: theme.urgent,
      textColor: theme.white,
      phrase: 'Get code',
    }
  },
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: catData[0].image,
    href: catData[0].href,
    skipLinkTranslation: true,
    background: theme.white,
    rounded: 'all',
    padding: 'newsletterTop25px newsletterContainer25px',
    spaceAfter: false,
    paddingTop: '30',
    spaceTop: '25',
    prodSettings: prodSetData,
    titleColor: theme.primary,
    paragraphColor: theme.categoryParagraph,
    color: theme.black,
    type: 'grid',
    tdClass: 'newsletterContainer30px',
    productsOuterBg: theme.offerBg,
    productsInnerBg: theme.white,
    productsInnerSpace: 'newsletterBottom20px',
    titleFontSize: '24',
    cta: {
      variant: 'underline',
      color: theme.urgent,
      phrase: 'Shop now',
      align: 'left',
      position: 'beforeProducts',
      spaceAfter: 'newsletterBottom15px',
    },
    title: {
      show: true,
      color: theme.primary,
      align: 'left',
      position: 'afterImg',
      spaceBefore: 'newsletterBottom15px',
    },
    paragraph: {
      show: true,
      align: 'left',
      color: theme.paragraphColor,
      spaceBefore: 'newsletterBottom5px',
      spaceAfter: 'newsletterBottom5px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
      spaceAfter: 'newsletterBottom30px',
      priceColors: {
        low: theme.urgent,
        high: theme.accent,
      },
    },
    products: prodData[1],
  },
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: catData[1].image,
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.white,
    rounded: 'all',
    padding: 'newsletterContainer25px',
    spaceAfter: false,
    prodSettings: prodSetData,
    titleColor: theme.primary,
    paragraphColor: theme.categoryParagraph,
    color: theme.black,
    type: 'grid',
    tdClass: 'newsletterContainer30px',
    productsOuterBg: theme.offerBg,
    productsInnerBg: theme.white,
    productsInnerSpace: 'newsletterBottom20px',
    titleFontSize: '24',
    cta: {
      variant: 'underline',
      color: theme.urgent,
      phrase: 'Shop now',
      align: 'left',
      position: 'beforeProducts',
      spaceAfter: 'newsletterBottom15px',
    },
    paddingTop: '30',
    title: {
      show: true,
      color: theme.primary,
      align: 'left',
      position: 'afterImg',
      spaceBefore: 'newsletterBottom15px',
    },
    paragraph: {
      show: true,
      align: 'left',
      color: theme.paragraphColor,
      spaceBefore: 'newsletterBottom5px',
      spaceAfter: 'newsletterBottom5px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
      spaceAfter: 'newsletterBottom30px',
      priceColors: {
        low: theme.urgent,
        high: theme.accent,
      },
    },
    products: prodData[2],
  },
  {
    name: catData[2].name,
    // nameOverride: 'OPOCO',
    src: catData[2].image,
    href: catData[2].href,
    skipLinkTranslation: true,
    background: theme.white,
    rounded: 'all',
    padding: 'newsletterContainer25px',
    spaceAfter: false,
    titleColor: theme.primary,
    paragraphColor: theme.categoryParagraph,
    color: theme.black,
    prodSettings: prodSetData,
    type: 'grid',
    tdClass: 'newsletterContainer30px',
    productsOuterBg: theme.offerBg,
    productsInnerBg: theme.white,
    productsInnerSpace: 'newsletterBottom20px',
    titleFontSize: '24',
    cta: {
      variant: 'underline',
      color: theme.urgent,
      phrase: 'Shop now',
      align: 'left',
      position: 'beforeProducts',
      spaceAfter: 'newsletterBottom15px',
    },
    paddingTop: '30',
    title: {
      show: true,
      align: 'left',
      color: theme.primary,
      position: 'afterImg',
      spaceBefore: 'newsletterBottom15px',
    },
    paragraph: {
      show: true,
      align: 'left',
      color: theme.paragraphColor,
      spaceBefore: 'newsletterBottom5px',
      spaceAfter: 'newsletterBottom5px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
      spaceAfter: 'newsletterBottom30px',
      priceColors: {
        low: theme.urgent,
        high: theme.accent,
      },
    },
    products: prodData[3],
  },
  {
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: catData[3].image,
    href: catData[3].href,
    skipLinkTranslation: true,
    background: theme.white,
    rounded: 'all',
    padding: 'newsletterContainer25px',
    spaceAfter: false,
    titleColor: theme.primary,
    paragraphColor: theme.categoryParagraph,
    color: theme.black,
    prodSettings: prodSetData,
    type: 'grid',
    tdClass: 'newsletterContainer30px',
    productsOuterBg: theme.offerBg,
    productsInnerBg: theme.white,
    productsInnerSpace: 'newsletterBottom20px',
    titleFontSize: '24',
    cta: {
      variant: 'underline',
      color: theme.urgent,
      phrase: 'Shop now',
      align: 'left',
      position: 'beforeProducts',
      spaceAfter: 'newsletterBottom15px',
    },
    paddingTop: '30',
    title: {
      show: true,
      align: 'left',
      color: theme.primary,
      position: 'afterImg',
      spaceBefore: 'newsletterBottom15px',
    },
    paragraph: {
      show: true,
      align: 'left',
      color: theme.paragraphColor,
      spaceBefore: 'newsletterBottom5px',
      spaceAfter: 'newsletterBottom5px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
      spaceAfter: 'newsletterBottom30px',
      priceColors: {
        low: theme.urgent,
        high: theme.accent,
      },
    },
    products: prodData[4],
  },
];

export default new entities.Campaign({
  startId: '47444',
  name: 'Monday - Free Gift - B',
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
      background: theme.white,
      color: theme.black,
      template: templates.MondayNewV2,

      css: types.CSS.NS_AI_NEW2,
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
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.offerBg,
        alignment: 'center',
        position: 'afterFreebies',
        secondaryLink: false,
        cta: {
          variant: 'button',
          bgColor: theme.primary,
          textColor: theme.white,
          spaceAfter: 'newsletterBottom55px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
    },
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayNewV2,

      css: types.CSS.LP_AI_NEW2,
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
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.offerBg,
        alignment: 'center',
        position: 'afterFreebies',
        secondaryLink: false,
        cta: {
          variant: 'button',
          bgColor: theme.urgent,
          textColor: theme.white,
          spaceAfter: 'newsletterBottom55px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableTopImageTitle: false,
    },
  ],
});
