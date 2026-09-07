const campaignTranslationsSheet = '2026::Voucher - 14.09.26 - Free Vase - Tables';

const theme = {
  primary: '#FFEFD9',
  primaryText: '#ffffff',
  secondary: '#FFE6DB',
  secondaryText: '#FFCCB7',
  offerBg: '#FECD8C',
  offerTitleColor: '#750000',
  offerPrg1Color: '#000000',
  offerPrg2Color: '#000000',
  introBg: '#FFE6DB',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introBg: '#750000',
  toastBg: '#F6E7E6',
  toastText: '#000000',
  ctaPrimary: '#750000',
  ctaPrimaryText: '#ffffff',
  ctaSecondary: '#F6E7E6',
  ctaSecondaryText: '#000000',
  addColor: '#FBEFEC',
  tileText: '#5B1210',
};

const tableQueries = [
  {
    name: 'offer',
    tableRange: '25:28',
  },
  {
    name: 'offer_code',
    tableRange: '31',
  },
  {
    name: 'offer_date',
    tableRange: '30',
  },
  {
    name: 'freebies_subtitle',
    tableRange: '32',
  },
  {
    tableRange: '22:23',
    name: 'TopImageTitle',
  },
  {
    name: 'intro',
    tableRange: '33:34',
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

const catData = [
  {
    name: 'Dining Tables',
    href: 'https://www.beliani.ch/tables/dining-tables/',
    catImg: getImageUrl('20260914_Cat01_A.jpg', true),
  },
  {
    name: 'Extending Tables',
    href: 'https://www.beliani.ch/tables/extending-tables/',
    catImg: getImageUrl('20260914_Cat02_A.jpg', true),
  },
  {
    name: 'Coffee Tables',
    href: 'https://www.beliani.ch/tables/coffee-tables/',
    catImg: getImageUrl('20260914_Cat03_A.jpg', true),
  },
  {
    name: 'Side Tables',
    href: 'https://www.beliani.ch/tables/side-tables/',
    catImg: getImageUrl('20260914_Cat04_A.jpg', true),
  },
];

const prodData = [
  // Free
  [
    [
      { id: '526505', src: getImageUrl('20260914_Free01_A.png', true), useDescription: true },
      { id: '363451', src: getImageUrl('20260914_Free02_A.png', true), useDescription: true },
    ],
    [
      { id: '363076', src: getImageUrl('20260914_Free03_A.png', true), useDescription: true },
      { id: '330566', src: getImageUrl('20260914_Free04_A.png', true), useDescription: true },
    ],
  ],
  // Cat 1
  [
    { id: '824363', src: getImageUrl('20260914_Prod01_A.png', true), useDescription: true },
    { id: '579573', src: getImageUrl('20260914_Prod02_A.png', true), useDescription: true },
    { id: '153585', src: getImageUrl('20260914_Prod03_A.png', true), useDescription: true },
    { id: '568039', src: getImageUrl('20260914_Prod04_A.png', true), useDescription: true },
  ],
  // Cat 2
  [
    { id: '643816', src: getImageUrl('20260914_Prod10_A.png', true), useDescription: true },
    { id: '243817', src: getImageUrl('20260914_Prod11_A.png', true), useDescription: true },
    { id: '609175', src: getImageUrl('20260914_Prod12_A.png', true), useDescription: true },
    { id: '243831', src: getImageUrl('20260914_Prod13_A.png', true), useDescription: true },
  ],
  // Cat 3
  [
    { id: '161322', src: getImageUrl('20260914_Prod20_A.png', true), useDescription: true },
    { id: '569560', src: getImageUrl('20260914_Prod21_A.png', true), useDescription: true },
    { id: '584688', src: getImageUrl('20260914_Prod22_A.png', true), useDescription: true },
    { id: '195724', src: getImageUrl('20260914_Prod23_A.png', true), useDescription: true },
  ],
  // Cat 4
  [
    { id: '375792', src: getImageUrl('20260914_Prod30_A.png', true), useDescription: true },
    { id: '379862', src: getImageUrl('20260914_Prod31_A.png', true), useDescription: true },
    { id: '421835', src: getImageUrl('20260914_Prod32_A.png', true), useDescription: true },
    { id: '421683', src: getImageUrl('20260914_Prod33_A.png', true), useDescription: true },
  ],
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/tables/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-14-ta' }),
  TopImageTitle_src: translateImage({ value: '20260909_01_A.png' }),

  TopImage_src: getImageUrl('20260914_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-14-ta' }),

  Banner_1: translateLink({ value: 'content/lp26-09-03' }),
  Banner_1_Image: translateImage({ value: '20260903b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-09-04-ta' }),
  Banner_2_Image: translateImage({ value: '20260904b.png' }),
};

const TopImageTitle_data = {
  color: theme.white,
  backgroundColor: theme.primary,
  type: 'standard',
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
    spaceAfter: 'newsletterBottom40px',
    offerSpaceAfter: 'newsletterBottom40px',
    spaceColor: theme.primary,
    combineOfferParts: true,
    tdClass: "newsletterContainer",
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom40px',
      tdClass: "newsletterContainer30px",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    freebiesSize: 'large',
    freebies: prodData[0],
    product: {
      freebieSize: 16,
      descSize: 15,
      freebieBold: 'bold',
      align: 'center',
      priceLowSize: 16,
      priceHighSize: 15,
      lowPriceColor: theme.tileText,
      highPriceColor: theme.tileText,
      color: theme.black,
      tdClass: "newsletterContainer30px",
    }
  },

  // main
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: catData[0].catImg,
    href: catData[0].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    color: theme.black,
    type: 'grid',
    tdClass: "newsletterContainer30px",
    spaceAfter: 'newsletterBottom40px',
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom40px',
      tdClass: "newsletterContainer30px",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    paddingTop: '40',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer30px",
    },
    paragraph: {
      show: false,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer30px",
    },
    product: {
      prices: true,
      name: true,
      prodSize: 16,
      descSize: 15,
      priceLowSize: 16,
      priceHighSize: 15,
      lowPriceColor: theme.tileText,
      highPriceColor: theme.tileText,
      color: theme.black,
      tdClass: "newsletterContainer30px",
    },
    products: prodData[1],
  },
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: catData[1].catImg,
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.primary,
    color: theme.black,
    type: 'grid',
    tdClass: "newsletterContainer30px",
    spaceAfter: 'newsletterBottom40px',
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom40px',
      tdClass: "newsletterContainer30px",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer30px",
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer30px",
    },
    product: {
      prices: true,
      name: true,
      prodSize: 16,
      descSize: 15,
      priceLowSize: 16,
      priceHighSize: 15,
      lowPriceColor: theme.tileText,
      highPriceColor: theme.tileText,
      color: theme.black,
      tdClass: "newsletterContainer30px",
    },
    products: prodData[2],
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
    tdClass: "newsletterContainer30px",
    spaceAfter: 'newsletterBottom40px',
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom40px',
      tdClass: "newsletterContainer30px",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer30px",
    },
    paragraph: {
      show: false,
      align: 'left',

      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer30px",
    },
    product: {
      prices: true,
      name: true,
      prodSize: 16,
      descSize: 15,
      priceLowSize: 16,
      priceHighSize: 15,
      lowPriceColor: theme.tileText,
      highPriceColor: theme.tileText,
      color: theme.black,
      tdClass: "newsletterContainer30px",
    },
    products: prodData[3],
  },
  {
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: catData[3].catImg,
    href: catData[3].href,
    skipLinkTranslation: true,
    background: theme.primary,
    color: theme.black,
    type: 'grid',
    tdClass: "newsletterContainer30px",
    spaceAfter: 'newsletterBottom40px',
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom40px',
      tdClass: "newsletterContainer30px",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    paddingTop: '35',
    spaceAfter: 'newsletterBottom40px',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer30px",
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer30px",
    },
    product: {
      prices: true,
      name: true,
      prodSize: 16,
      descSize: 15,
      priceLowSize: 16,
      priceHighSize: 15,
      lowPriceColor: theme.tileText,
      highPriceColor: theme.tileText,
      color: theme.black,
      tdClass: "newsletterContainer30px",
    },
    products: prodData[4],
  },
];

const footerData = {
  // deliverySrc: 'Delivery src NEW',
  assemblySrc: 'Assembly src NEW',
  assemblyHref: 'Assembly href NEW',
}

export default new entities.Campaign({
  startId: '47893',
  name: 'Monday - Free Vase/Tables - A',
  date: '14.09.2026',
  issueCardId: '527531',
  lpId: '32402',
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
      template: templates.MondayNew,

      css: types.CSS.NS_AI_NEW,
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
        backgroundColor: theme.secondary,
        alignment: 'center',
        position: 'afterFreebies',
        secondaryLink: false,
        disableLine: true,
        containerClass: "newsletterContainer30px",
        paragraphSpace: 'newsletterBottom20px',
        cta: {
          variant: 'underline',
          color: theme.tileText,
          spaceBefore: 'newsletterBottom20px',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      footerOverride: footerData
    },
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayNew,

      css: types.CSS.LP_AI_NEW,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      intro: {
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'center',
        position: 'afterFreebies',
        secondaryLink: false,
        disableLine: true,
        containerClass: "newsletterContainer30px",
        paragraphSpace: 'newsletterBottom20px',
        cta: {
          variant: 'underline',
          color: theme.tileText,
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableTopImageTitle: true,
      disableKlarna: ['HR', 'SI'],
      footerOverride: footerData
    },
  ],
});
