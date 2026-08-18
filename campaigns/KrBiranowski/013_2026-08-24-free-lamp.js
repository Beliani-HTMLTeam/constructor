const campaignTranslationsSheet = '2026::Voucher - 24.08.26 - Free lamp';

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
  toastBg: '#FBF3F0',
  toastText: '#750000',
};

const catData = [
  {
    name: 'Sofas',
    href: 'https://www.beliani.ch/living-room-furniture/sofas/',
    btnImg: '20260824_shop_sofas.png',
  },
  {
    name: 'Coffee tables',
    href: 'https://www.beliani.ch/tables/coffee-tables/',
    btnImg: '20260824_shop_coffee_tables.png',
  },
  {
    name: 'Storage',
    href: 'https://www.beliani.ch/living-room-furniture/storage/',
    btnImg: '20260824_shop_storage.png',
  },
  {
    name: 'Rugs',
    href: 'https://www.beliani.ch/living-room-furniture/rugs/',
    btnImg: '20260824_shop_rugs.png',
  },
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
    name: 'get_code',
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
  Intro_cta_href: 'https://www.beliani.ch/living-room-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-24' }),
  TopImageTitle_src: translateImage({ value: '20260824_01.png' }),

  TopImage_src: getImageUrl('20260824_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-24' }),

  Banner_1: translateLink({ value: 'content/lp26-08-12' }),
  Banner_1_Image: translateImage({ value: '20260812b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-08-13' }),
  Banner_2_Image: translateImage({ value: '20260813b.png' }),
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
    cta: { variant: 'cream', color: theme.primary },
    freebiesSize: 'large',
    freebies: [
      [
        { id: '78710', src: getImageUrl('20260824_Pic01.png', true), useDescription: true },
        { id: '192612', src: getImageUrl('20260824_Pic02.png', true), useDescription: true },
      ],
      [
        { id: '78707', src: getImageUrl('20260824_Pic03.png', true), useDescription: true },
        { id: '406012', src: getImageUrl('20260824_Pic04.png', true), useDescription: true },
      ],
    ],
  },

  // main
  {
    name: catData[0].name,
    // nameOverride: 'PASCO',
    src: getImageUrl('20260824_Cat10.jpg', true),
    href: catData[0].href,
    skipLinkTranslation: true,
    background: theme.white,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary },
    paddingTop: '45',
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
    products: [
      {
        id: '506046',
        src: getImageUrl('20260824_Pic10.png', true),
        useDescription: true,
      },
      {
        id: '618213',
        src: getImageUrl('20260824_Pic11.png', true),
        useDescription: true,
      },
      {
        id: '567128',
        src: getImageUrl('20260824_Pic12.png', true),
        useDescription: true,
      },
      {
        id: '735462',
        src: getImageUrl('20260824_Pic13.png', true),
        useDescription: true,
      },
    ],
  },
  {
    name: catData[1].name,
    // nameOverride: 'LYNWOOD',
    src: getImageUrl('20260824_Cat20.jpg', true),
    href: catData[1].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary },
    paddingTop: '35',
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
    products: [
      {
        id: '817694',
        src: getImageUrl('20260824_Pic20.png', true),
        useDescription: true,
      },
      {
        id: '649974',
        src: getImageUrl('20260824_Pic21.png', true),
        useDescription: true,
      },
      {
        id: '622259',
        src: getImageUrl('20260824_Pic22.png', true),
        useDescription: true,
      },
      {
        id: '597134',
        src: getImageUrl('20260824_Pic23.png', true),
        useDescription: true,
      },
    ],
  },
  {
    name: catData[2].name,
    // nameOverride: 'OPOCO',
    src: getImageUrl('20260824_Cat30.jpg', true),
    href: catData[2].href,
    skipLinkTranslation: true,
    background: theme.white,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary },
    paddingTop: '35',
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
    products: [
      {
        id: '645981',
        src: getImageUrl('20260824_Pic30.png', true),
        useDescription: true,
      },
      {
        id: '553767',
        src: getImageUrl('20260824_Pic31.png', true),
        useDescription: true,
      },
      {
        id: '563169',
        src: getImageUrl('20260824_Pic32.png', true),
        useDescription: true,
      },
      {
        id: '672749',
        src: getImageUrl('20260824_Pic33.png', true),
        useDescription: true,
      },
    ],
  },
  {
    name: catData[3].name,
    // nameOverride: 'BRADLEY',
    src: getImageUrl('20260824_Cat40.jpg', true),
    href: catData[3].href,
    skipLinkTranslation: true,
    background: theme.secondary,
    color: theme.black,
    type: 'grid',
    cta: { variant: 'maroon', color: theme.primary },
    paddingTop: '35',
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
    products: [
      {
        id: '425636',
        src: getImageUrl('20260824_Pic40.png', true),
        useDescription: true,
      },
      {
        id: '377164',
        src: getImageUrl('20260824_Pic41.png', true),
        useDescription: true,
      },
      {
        id: '390287',
        src: getImageUrl('20260824_Pic42.png', true),
        useDescription: true,
      },
      {
        id: '455185',
        src: getImageUrl('20260824_Pic43.png', true),
        useDescription: true,
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "47026",
  name: "Monday - Free lamp",
  date: "24.08.2026",
  issueCardId: "517340",
  lpId: "31880",
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
  figmaUrl: "https://www.figma.com/design/ivTLBnr4YDgyVtciBVAMzZ/",
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