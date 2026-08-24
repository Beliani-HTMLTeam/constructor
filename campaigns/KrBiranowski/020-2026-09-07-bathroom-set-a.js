const campaignTranslationsSheet = '2026::Voucher - 07.09.26 - Free Bathroom set';

const theme = {
  primary: '#750000',
  primaryText: '#ffffff',
  secondary: '#FBF3F0',
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
    name: 'Bathtubs',
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    catImg: getImageUrl('20260907_Cat10_A2.png', true),
  },
  {
    name: 'Storage',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-storage/',
    catImg: getImageUrl('20260907_Cat20_A2.png', true),
  },
  {
    name: 'Mirrors',
    href: 'https://www.beliani.ch/mirrors/bath-mirrors/',
    catImg: getImageUrl('20260907_Cat30_A2.png', true),
  },
  {
    name: 'Lighting',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-lighting/',
    catImg: getImageUrl('20260907_Cat40_A2.png', true),
  },
];

const prodData = [
  [
    [
      { id: '316914', src: getImageUrl('20260907_Free01_A.png', true), useDescription: true },
      { id: '320374', src: getImageUrl('20260907_Free02_A.png', true), useDescription: true },
    ],
  ],
  [
    {
      id: '417123',
      src: getImageUrl('20260907_Pic01_A.png', true),
      useDescription: true,
    },
    {
      id: '96874',
      src: getImageUrl('20260907_Pic02_A.png', true),
      useDescription: true,
    },
    {
      id: '59970',
      src: getImageUrl('20260907_Pic03_A.png', true),
      useDescription: true,
    },
    {
      id: '731181',
      src: getImageUrl('20260907_Pic04_A.png', true),
      useDescription: true,
    },
  ],
  [
    {
      id: '515187',
      src: getImageUrl('20260907_Pic10_A.png', true),
      useDescription: true,
    },
    {
      id: '660887',
      src: getImageUrl('20260907_Pic11_A.png', true),
      useDescription: true,
    },
    {
      id: '723642',
      src: getImageUrl('20260907_Pic12_A.png', true),
      useDescription: true,
    },
    {
      id: '708741',
      src: getImageUrl('20260907_Pic13_A.png', true),
      useDescription: true,
    },
  ],
  [
    {
      id: '819491',
      src: getImageUrl('20260907_Pic20_A.png', true),
      useDescription: true,
    },
    {
      id: '819338',
      src: getImageUrl('20260907_Pic21_A.png', true),
      useDescription: true,
    },
    {
      id: '818093',
      src: getImageUrl('20260907_Pic22_A.png', true),
      useDescription: true,
    },
    {
      id: '817924',
      src: getImageUrl('20260907_Pic23_A.png', true),
      useDescription: true,
    },
  ],
  [
    {
      id: '589801',
      src: getImageUrl('20260907_Pic30_A.png', true),
      useDescription: true,
    },
    {
      id: '651538',
      src: getImageUrl('20260907_Pic31_A.png', true),
      useDescription: true,
    },
    {
      id: '653660',
      src: getImageUrl('20260907_Pic32_A.png', true),
      useDescription: true,
    },
    {
      id: '652896',
      src: getImageUrl('20260907_Pic33_A.png', true),
      useDescription: true,
    },
  ],
];

const tableQueries = [
  {
    name: 'offer',
    tableRange: '25:28',
  },
  {
    name: 'offer_date',
    tableRange: '29',
  },
  {
    name: 'offer_code',
    tableRange: '30',
  },
  {
    name: 'freebies_subtitle',
    tableRange: '31',
  },
  {
    name: 'intro',
    tableRange: '32:33',
  },
  {
    name: 'categoryButton',
    tableRange: '34:37',
  },
  {
    name: 'condition',
    tableRange: '39:41',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/bathroom-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-07-ta' }),
  TopImageTitle_src: translateImage({ value: '20260907_01.png' }),

  TopImage_src: getImageUrl('20260907_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-07-ta' }),

  Banner_1: translateLink({ value: 'content/lp26-08-27' }),
  Banner_1_Image: translateImage({ value: '20260827b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-08-28' }),
  Banner_2_Image: translateImage({ value: '20260828b.png' }),
};

const TopImageTitle_data = {
  color: theme.black,
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
    color: theme.primaryText,
    spaceAfter: 'newsletterBottom45px',
    cta: { variant: 'cream', color: theme.black, bg: theme.ctaBg },
    freebiesSize: 'large',
    combineOfferParts: true,
    freebies: prodData[0],
  },

  // main
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: catData[0].catImg,
    href: catData[0].href,
    skipLinkTranslation: true,
    background: theme.white,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.white, bg: theme.primary },
    paddingTop: '45',
    tdClass: 'newsletterContainer30px',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
      tdClass: 'newsletterContainer30px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: 'newsletterContainer30px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: prodData[1],
  },
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: catData[1].catImg,
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.white, bg: theme.primary },
    paddingTop: '35',
    tdClass: 'newsletterContainer30px',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: prodData[2],
  },
  {
    name: catData[2].name,
    // nameOverride: 'OPOCO',
    src: catData[2].catImg,
    href: catData[2].href,
    skipLinkTranslation: true,
    background: theme.white,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.white, bg: theme.primary },
    paddingTop: '35',
    tdClass: 'newsletterContainer30px',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: prodData[3],
  },
  {
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: catData[3].catImg,
    href: catData[3].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.white, bg: theme.primary },
    paddingTop: '35',
    tdClass: 'newsletterContainer30px',
    spaceAfter: 'newsletterBottom40px',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: prodData[4],
  },
];

export default new entities.Campaign({
  startId: '47476',
  name: 'Monday - Free Bathroom Set - A',
  date: '07.09.2026',
  issueCardId: '525572',
  lpId: '32094',
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
        backgroundColor: theme.white,
        alignment: 'center',
        position: 'afterFreebies',
        secondaryLink: false,
        cta: {
          variant: 'underline',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
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
        backgroundColor: theme.white,
        alignment: 'center',
        position: 'afterFreebies',
        secondaryLink: false,
        cta: {
          variant: 'underline',
          textOverrides: {
            fi: 'Tutustu valikoimaan',
          },
        },
      },
      disableTopImageTitle: true,
    },
  ],
});
