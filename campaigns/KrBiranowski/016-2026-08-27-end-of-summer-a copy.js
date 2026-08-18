const campaignTranslationsSheet = '2026::27.08.26 - End of Summer Transition';

const theme = {
  primary: '#750000',
  primaryText: '#ffffff',
  secondary: '#FFF5F1',
  secondaryText: '#FFCCB7',
  prodColor: '#4A4038',
  paragraphColor: '#4A4038',
  ctaText: '#FFF4E6',
  unitBg: '#AC6666',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introText: '#000000',
  introBg: '#750000',
  toastBg: '#FBF3F0',
  toastText: '#750000',
};

const catData = [
  {
    name: 'Dining Inside',
    href: 'https://www.beliani.ch/dining-room-furniture/',
  },
  {
    name: 'Cosy Textiles',
    href: 'https://www.beliani.ch/living-room-furniture/textiles/',
  },
  {
    name: 'Ambient Lighting',
    href: 'https://www.beliani.ch/lighting/',
  },
  {
    name: 'Upholstered Beds',
    href: 'https://www.beliani.ch/beds/fabric-beds/',
  },
];

const prodData = [
  // Cat 1
  [
    { id: '817632', src: getImageUrl('20260827_Pic10_A.png', true) },
    { id: '664642', src: getImageUrl('20260827_Pic11_A.png', true) },
    { id: '645146', src: getImageUrl('20260827_Pic12_A.png', true) },
    { id: '468434', src: getImageUrl('20260827_Pic13_A.png', true) },
  ],
  // Cat 2
  [
    { id: '358007', src: getImageUrl('20260827_Pic20_A.png', true) },
    { id: '395648', src: getImageUrl('20260827_Pic21_A.png', true) },
    { id: '495439', src: getImageUrl('20260827_Pic22_A.png', true) },
    { id: '569482', src: getImageUrl('20260827_Pic23_A.png', true) },
  ],
  // Cat 3
  [
    { id: '804241', src: getImageUrl('20260827_Pic30_A.png', true) },
    { id: '804786', src: getImageUrl('20260827_Pic31_A.png', true) },
    { id: '689025', src: getImageUrl('20260827_Pic32_A.png', true) },
    { id: '728766', src: getImageUrl('20260827_Pic33_A.png', true) },
  ],
  // Cat 4
  [
    { id: '813719', src: getImageUrl('20260827_Pic40_A.png', true) },
    { id: '133295', src: getImageUrl('20260827_Pic41_A.png', true) },
    { id: '714220', src: getImageUrl('20260827_Pic42_A.png', true) },
    { id: '676112', src: getImageUrl('20260827_Pic43_A.png', true) },
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
  // {
  //   name: 'offer',
  //   tableRange: '25:28',
  // },
  // {
  //   name: 'offer_date',
  //   tableRange: '29',
  // },
  // {
  //   name: 'get_code',
  //   tableRange: '30',
  // },
  // {
  //   name: 'freebies_subtitle',
  //   tableRange: '31',
  // },
  {
    name: 'intro',
    tableRange: '19:20',
  },
  // {
  //   name: 'categoryButton',
  //   tableRange: '34:37',
  // },
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
  {
    tableRange: '15:16',
    name: 'timer',
    tableName: '2026::Voucher - 24.08.26 - Free lamp',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-27' }),
  TopImageTitle_src: translateImage({ value: '20260827_01.png' }),

  TopImage_src: getImageUrl('20260827_Gif_A.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-27' }),

  Banner_1: translateLink({ value: 'content/lp26-08-13' }),
  Banner_1_Image: translateImage({ value: '20260813b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-08-24' }),

  Banner_2: translateLink({ value: 'content/lp26-08-19' }),
  Banner_2_Image: translateImage({ value: '20260819b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.primary,
  type: 'standard',
};

const categories = [
  // main
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: getImageUrl('20260827_Cat10_A.png', true),
    href: catData[0].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    rounded: 'all',
    padding: 'newsletterTop25px newsletterContainer25px',
    spaceAfter: 'newsletterBottom25px',
    paddingTop: '35',
    spaceTop: '25',
    prodSettings: prodSetData,
    color: theme.black,
    type: 'grid',
    titleFontSize: '24',
    cta: {
      variant: 'maroon',
      color: theme.ctaText,
      phrase: 'Shop now',
    },
    title: {
      show: true,
      color: theme.primary,
      align: 'center',
      position: 'inParagraph',
      spaceAfter: 'newsletterBottom10px',
    },
    paragraph: {
      show: true,
      align: 'center',
      color: theme.paragraphColor,
      spaceBefore: 'newsletterBottom25px',
      spaceAfter: 'newsletterBottom25px',
    },
    product: {
      prices: true,
      name: true,
      align: 'center',
    },
    products: prodData[0],
  },
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: getImageUrl('20260827_Cat20_A.png', true),
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    rounded: 'all',
    padding: 'newsletterContainer25px',
    spaceAfter: 'newsletterBottom25px',
    prodSettings: prodSetData,
    color: theme.black,
    type: 'grid',
    titleFontSize: '24',
    cta: {
      variant: 'maroon',
      color: theme.ctaText,
      phrase: 'Shop now',
    },
    paddingTop: '35',
    title: {
      show: true,
      color: theme.primary,
      align: 'center',
      position: 'inParagraph',
      spaceAfter: 'newsletterBottom10px',
    },
    paragraph: {
      show: true,
      align: 'center',
      color: theme.paragraphColor,
      spaceBefore: 'newsletterBottom25px',
      spaceAfter: 'newsletterBottom25px',
    },
    product: {
      prices: true,
      name: true,
      align: 'center',
    },
    products: prodData[1],
  },
  {
    name: catData[2].name,
    // nameOverride: 'OPOCO',
    src: getImageUrl('20260827_Cat30_A.png', true),
    href: catData[2].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    rounded: 'all',
    padding: 'newsletterContainer25px',
    spaceAfter: 'newsletterBottom25px',
    color: theme.black,
    prodSettings: prodSetData,
    type: 'grid',
    titleFontSize: '24',
    cta: {
      variant: 'maroon',
      color: theme.ctaText,
      phrase: 'Shop now',
    },
    paddingTop: '35',
    title: {
      show: true,
      align: 'center',
      color: theme.primary,
      position: 'inParagraph',
      spaceAfter: 'newsletterBottom10px',
    },
    paragraph: {
      show: true,
      align: 'center',
      color: theme.paragraphColor,
      spaceBefore: 'newsletterBottom25px',
      spaceAfter: 'newsletterBottom25px',
    },
    product: {
      prices: true,
      name: true,
      align: 'center',
    },
    products: prodData[2],
  },
  {
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: getImageUrl('20260827_Cat40_A.png', true),
    href: catData[3].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    rounded: 'all',
    padding: 'newsletterContainer25px',
    spaceAfter: 'newsletterBottom65px',
    color: theme.black,
    prodSettings: prodSetData,
    type: 'grid',
    titleFontSize: '24',
    cta: {
      variant: 'maroon',
      color: theme.ctaText,
      phrase: 'Shop now',
    },
    paddingTop: '35',
    title: {
      show: true,
      align: 'center',
      color: theme.primary,
      position: 'inParagraph',
      spaceAfter: 'newsletterBottom10px',
    },
    paragraph: {
      show: true,
      align: 'center',
      color: theme.paragraphColor,
      spaceBefore: 'newsletterBottom25px',
      spaceAfter: 'newsletterBottom25px',
    },
    product: {
      prices: true,
      name: true,
      align: 'center',
    },
    products: prodData[3],
  },
];

const timer = {
  freebies: getImageUrl('20260827free.png', true),
  deadline: '2026-08-30',
  ctaVariant: 'underline',
};

export default new entities.Campaign({
  startId: '47154',
  name: 'Thursday - End of Summer - A',
  date: '27.08.2026',
  issueCardId: '521919',
  lpId: '31922',
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
      template: templates.ThursdayNew,

      css: types.CSS.NS_AI_NEW,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImagePadding: 'newsletterTop55px newsletterContainer25px',
      tableQueries: tableQueries,
      timer: timer,
      disableTopImageTitle: true,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.primary,
        backgroundColor: theme.white,
        alignment: 'center',
        position: 'beforeFreebies',
        secondaryLink: false,
        paragraphColor: theme.paragraphColor,
        cta: {
          variant: 'maroon',
          color: theme.ctaText,
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      Inside: {
        color: theme.white,
        backgroundColor: theme.primary,
        unitBackground: theme.unitBg,
        type: 'timer',
        cta: {
          color: theme.white,
          textOverrides: {
            fi: 'Tilaa nyt',
          },
        },
      },
    },
    {
      background: theme.white,
      color: theme.black,
      template: templates.ThursdayNew,

      css: types.CSS.LP_AI_NEW,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImagePadding: 'newsletterTop55px newsletterContainer25px',
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      timer: timer,
      intro: {
        color: theme.primary,
        paragraphColor: theme.paragraphColor,
        backgroundColor: theme.white,
        alignment: 'center',
        position: 'beforeFreebies',
        secondaryLink: false,
        cta: {
          variant: 'maroon',
          color: theme.ctaText,
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      Inside: {
        color: theme.white,
        backgroundColor: theme.primary,
        unitBackground: theme.unitBg,
        type: 'timer',
        cta: {
          color: theme.white,
          textOverrides: {
            fi: 'Tilaa nyt',
          },
        },
      },
      disableTopImageTitle: true,
    },
  ],
});
