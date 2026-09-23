const campaignTranslationsSheet = '2026::27.08.26 - End of Summer Transition';

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
    { id: '664642', src: getImageUrl('20260827_Pic10_B.png', true) },
    { id: '645146', src: getImageUrl('20260827_Pic11_B.png', true) },
    { id: '468434', src: getImageUrl('20260827_Pic12_B.png', true) },
    { id: '817632', src: getImageUrl('20260827_Pic13_B.png', true) },
  ],
  // Cat 2
  [
    { id: '395648', src: getImageUrl('20260827_Pic20_B.png', true) },
    { id: '569482', src: getImageUrl('20260827_Pic21_B.png', true) },
    { id: '358007', src: getImageUrl('20260827_Pic22_B.png', true) },
    { id: '495439', src: getImageUrl('20260827_Pic23_B.png', true) },
  ],
  // Cat 3
  [
    { id: '728766', src: getImageUrl('20260827_Pic30_B.png', true) },
    { id: '804786', src: getImageUrl('20260827_Pic31_B.png', true) },
    { id: '689025', src: getImageUrl('20260827_Pic32_B.png', true) },
    { id: '804241', src: getImageUrl('20260827_Pic33_B.png', true) },
  ],
  // Cat 4
  [
    { id: '813719', src: getImageUrl('20260827_Pic40_B.png', true) },
    { id: '676112', src: getImageUrl('20260827_Pic41_B.png', true) },
    { id: '714220', src: getImageUrl('20260827_Pic42_B.png', true) },
    { id: '133295', src: getImageUrl('20260827_Pic43_B.png', true) },
  ]
];

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
    name: 'TopImageTitle',
    tableRange: '16:17',
  },
  {
    name: 'intro',
    tableRange: '20',
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
  // main
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: getImageUrl('20260827_Cat10_B.jpg', true),
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
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    title: {
      show: true,
      color: theme.primary,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
    },
    products: prodData[0],
  },
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: getImageUrl('20260827_Cat20_B.jpg', true),
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    padding: 'newsletterContainer25px',
    prodSettings: {
      bg: theme.white,
      rounded: 'bottom',
    },
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      color: theme.primary,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
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
    name: catData[2].name,
    // nameOverride: 'OPOCO',
    src: getImageUrl('20260827_Cat30_B.jpg', true),
    href: catData[2].href,
    skipLinkTranslation: true,
    background: theme.primary,
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
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
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
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: getImageUrl('20260827_Cat40_B.jpg', true),
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
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: '35',
    title: {
      show: true,
      align: 'left',
      color: theme.primary,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
      align: 'left',
    },
    products: prodData[3],
  },
];

const timer = {
  freebies: getImageUrl('20260827free.png', true),
  deadline: '2026-08-30',
  ctaVariant: 'underline',
}

export default new entities.Campaign({
  startId: "47186",
  name: "Thursday - End of Summer - B",
  date: "27.08.2026",
  issueCardId: "521919",
  lpId: "31922",
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
      template: templates.Thursday,

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
      timer: timer,
      disableTopImageTitle: true,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'left',
        position: 'beforeTimer',
        cta: {
          show: true,
          spaceAfter: 'newsletterBottom35px',
        },
      },
      Inside: {
        color: theme.white,
        backgroundColor: theme.insideBg,
        unitBackground: theme.unitBg,
        type: 'timer',
        cta: {
          color: theme.white,
        }
      },
    },
    {
      background: theme.primary,
      color: theme.black,
      template: templates.Thursday,

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
      timer: timer,
      intro: {
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'center',
        position: 'beforeTimer',
        secondaryLink: false,
        cta: {
          show: true,
          spaceAfter: 'newsletterBottom35px',
        },
      },
      Inside: {
        color: theme.white,
        backgroundColor: theme.insideBg,
        unitBackground: theme.unitBg,
        type: 'timer',
        cta: {
          color: theme.white,
        }
      },
      disableTopImageTitle: true,
    },
  ],
});