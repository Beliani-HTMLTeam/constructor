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
    src: getImageUrl('20261005_Cat01.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
  },
  // Cat 2
  {
    name: 'Bedroom',
    src: getImageUrl('20261005_Cat02.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
  },
  // Cat 3
  {
    name: 'Dining room',
    src: getImageUrl('20261005_Cat03.jpg', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
  },
  // Cat 4
  {
    name: 'Bathroom',
    src: getImageUrl('20261005_Cat04.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/',
  },
  // Cat 5
  {
    name: 'Office',
    src: getImageUrl('20261005_Cat05.jpg', true),
    href: 'https://www.beliani.ch/office-furniture/',
  },
  // Cat 6
  {
    name: 'Hallway',
    src: getImageUrl('20261005_Cat06.jpg', true),
    href: 'https://www.beliani.ch/hallway/',
  },
  // Cat 7
  {
    name: 'Kids room',
    src: getImageUrl('20261005_Cat07.jpg', true),
    href: 'https://www.beliani.ch/children-room/',
  },
];

const prodData = [
  // Cat 1
  [
    { id: '429175', src: getImageUrl('20261005_Prod01.png', true) },
    { id: '676113', src: getImageUrl('20261005_Prod02.png', true) },
    { id: '830408', src: getImageUrl('20261005_Prod03.png', true) },
  ],
  // Cat 2
  [
    { id: '813845', src: getImageUrl('20261005_Prod04.png', true) },
    { id: '606489', src: getImageUrl('20261005_Prod05.png', true) },
    { id: '688012', src: getImageUrl('20261005_Prod06.png', true) },
  ],
  // Cat 3
  [
    { id: '691685', src: getImageUrl('20261005_Prod07.png', true) },
    { id: '693699', src: getImageUrl('20261005_Prod08.png', true) },
    { id: '585145', src: getImageUrl('20261005_Prod09.png', true) },
  ],
  // Cat 4
  [
    { id: '653163', src: getImageUrl('20261005_Prod10.png', true) },
    { id: '819338', src: getImageUrl('20261005_Prod11.png', true) },
    { id: '635371', src: getImageUrl('20261005_Prod12.png', true) },
  ],
  // Cat 5
  [
    { id: '811744', src: getImageUrl('20261005_Prod13.png', true) },
    { id: '334704', src: getImageUrl('20261005_Prod14.png', true) },
    { id: '695550', src: getImageUrl('20261005_Prod15.png', true) },
  ],
  // Cat 6
  [
    { id: '828183', src: getImageUrl('20261005_Prod16.png', true) },
    { id: '154135', src: getImageUrl('20261005_Prod17.png', true) },
    { id: '527288', src: getImageUrl('20261005_Prod18.png', true) },
  ],
  // Cat 7
  [
    { id: '412611', src: getImageUrl('20261005_Prod19.png', true) },
    { id: '826109', src: getImageUrl('20261005_Prod20.png', true) },
    { id: '826025', src: getImageUrl('20261005_Prod21.png', true) },
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
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-05' }),
  TopImageTitle_src: translateImage({ value: '20260827_01.png' }),

  TopImage_src: translateImage({ value: '20261005_Gif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-05' }),

  Banner_1: translateLink({ value: 'content/lp26-09-17' }),
  Banner_1_Image: translateImage({ value: '20260917b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-24' }),
  Banner_2_Image: translateImage({ value: '20260924b.png' }),
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
    type: '3prods-peak',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: 0,
    title: {
      show: true,
      color: theme.primary,
      position: 'afterImg',
      align: 'center',
      uppercase: true,
      spaceBefore: 'newsletterBottom35px',
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
      align: 'center',
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
    type: '3prods-peak',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: 0,
    title: {
      show: true,
      color: theme.primary,
      position: 'afterImg',
      align: 'center',
      uppercase: true,
      spaceBefore: 'newsletterBottom35px',
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
      align: 'center',
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
    type: '3prods-peak',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: 0,
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      uppercase: true,
      spaceBefore: 'newsletterBottom35px',
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
      align: 'center',
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
    type: '3prods-peak',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: 0,
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      uppercase: true,
      spaceBefore: 'newsletterBottom35px',
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
      align: 'center',
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
    type: '3prods-peak',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: 0,
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      uppercase: true,
      spaceBefore: 'newsletterBottom35px',
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
      align: 'center',
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
    type: '3prods-peak',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: 0,
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      uppercase: true,
      spaceBefore: 'newsletterBottom35px',
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
      align: 'center',
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
    type: '3prods-peak',
    cta: { variant: 'maroon', color: theme.primary, phrase: 'Shop now' },
    paddingTop: 0,
    title: {
      show: true,
      position: 'afterImg',
      align: 'center',
      color: theme.primary,
      uppercase: true,
      spaceBefore: 'newsletterBottom35px',
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
      align: 'center',
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
      intro: {
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'center',
        position: 'afterTopImage',
        secondaryLink: false,
        cta: {
          variant: 'underline',
          spaceAfter: 'newsletterBottomIntro35px',
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
      topImageMargin: 'newsletterTop35px',
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'center',
        position: 'afterTopImage',
        secondaryLink: false,
        cta: {
          variant: 'underline',
          spaceAfter: 'newsletterBottomIntro35px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableTopImageTitle: true,
      disableSoonEnding: true,
    },
  ],
});