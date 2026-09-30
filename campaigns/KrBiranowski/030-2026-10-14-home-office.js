const campaignTranslationsSheet = '2026::14.10.26 - Home office';

const theme = {
  primary: '#FFCCB7',
  primaryText: '#ffffff',
  secondary: '#F6E7E6',
  secondaryText: '#FF2F00',
  titleText: '#750000',
  black: '#000000',
  white: '#ffffff',
  grey: '#555555',
  greyLight: '#777777',
  introBg: '#750000',
  toastBg: '#F6E7E6',
  toastText: '#000000',
  ctaPrimary: '#FF2F00',
  ctaPrimaryText: '#ffffff',
  ctaSecondary: '#750000',
  ctaSecondaryText: '#ffffff',
  addColor: '#FBEFEC',
  catText: '#750000',
};

const catData = [
  {
    name: 'Desks',
    href: 'https://www.beliani.ch/office-furniture/desks/',
    src: getImageUrl('20261014_Cat01.jpg', true),
    ctaPosition: 'afterProducts',
    insideBanner: {
      spaceBefore: false,
      spaceAfter: false,
      link: translateLink({ value: 'content/lp26-10-05' }),
      image: translateImage({ value: '20261005_inside.gif', relyOn: 'slug' }),
    },
    title: {
      spaceBefore: 'newsletterBottom35px',
    },
    product: {
      color: theme.titleText,
      lowPriceColor: theme.secondaryText,
      highPriceColor: theme.secondaryText,
    },
  },
  {
    name: 'Office Chairs',
    href: 'https://www.beliani.ch/office-furniture/office-chairs/',
    src: getImageUrl('20261014_Cat02.jpg', true),
    ctaPosition: 'afterProducts',
    product: {
      color: theme.titleText,
      lowPriceColor: theme.secondaryText,
      highPriceColor: theme.secondaryText,
    },
    title: {
      position: 'beforeImg',
    },
    paragraph: {
      position: 'beforeImg',
      spaceAfter: 'newsletterBottom20px',
    },
  },
  {
    name: 'Storage',
    href: 'https://www.beliani.ch/office-furniture/storage-units-and-cabinets/',
    src: getImageUrl('20261014_Cat03.jpg', true),
    ctaPosition: 'afterProducts',
    product: {
      color: theme.titleText,
      lowPriceColor: theme.secondaryText,
      highPriceColor: theme.secondaryText,
    },
    title: {
      position: 'beforeImg',
    },
    paragraph: {
      position: 'beforeImg',
      spaceAfter: 'newsletterBottom20px',
    },
  },
  {
    name: 'Lighting',
    href: 'https://www.beliani.ch/office-furniture/office-lamps/',
    src: getImageUrl('20261014_Cat04.jpg', true),
    ctaPosition: 'afterProducts',
    product: {
      color: theme.titleText,
      lowPriceColor: theme.secondaryText,
      highPriceColor: theme.secondaryText,
    },
    title: {
      position: 'beforeImg',
    },
    paragraph: {
      position: 'beforeImg',
      spaceAfter: 'newsletterBottom20px',
    },
  },
];

const prodData = [
  [
    {
      id: '445661',
      src: getImageUrl('20261014_Prod01.png', true),
    },
    {
      id: '702666',
      src: getImageUrl('20261014_Prod02.png', true),
    },
    {
      id: '702721',
      src: getImageUrl('20261014_Prod03.png', true),
    },
    {
      id: '818344',
      src: getImageUrl('20261014_Prod04.png', true),
    },
  ],
  [
    {
      id: '719767',
      src: getImageUrl('20261014_Prod10.png', true),
    },
    {
      id: '656152',
      src: getImageUrl('20261014_Prod11.png', true),
    },
    {
      id: '670403',
      src: getImageUrl('20261014_Prod12.png', true),
    },
    {
      id: '647861',
      src: getImageUrl('20261014_Prod13.png', true),
    },
  ],
  [
    {
      id: '828716',
      src: getImageUrl('20261014_Prod20.png', true),
    },
    {
      id: '686444',
      src: getImageUrl('20261014_Prod21.png', true),
    },
    {
      id: '645299',
      src: getImageUrl('20261014_Prod22.png', true),
    },
    {
      id: '259094',
      src: getImageUrl('20261014_Prod23.png', true),
    },
  ],
  [
    {
      id: '666782',
      src: getImageUrl('20261014_Prod30.png', true),
    },
    {
      id: '808987',
      src: getImageUrl('20261014_Prod31.png', true),
    },
    {
      id: '321675',
      src: getImageUrl('20261014_Prod32.png', true),
    },
    {
      id: '378717',
      src: getImageUrl('20261014_Prod33.png', true),
    },
  ],
];

const tableQueries = [
  {
    name: 'intro',
    tableRange: '20:22',
  },
  {
    name: 'paragraphs',
    tableRange: '23:26',
  },
  {
    name: 'categoryButton',
    tableRange: '27:30',
  },
  {
    name: 'condition',
    tableRange: '31:32',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/office-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-14' }),
  TopImageTitle_src: translateImage({ value: '20261014_01.png' }),

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

const catObj = {
  spaceBefore: false,
  skipLinkTranslation: true,
  background: theme.primary,
  color: theme.black,
  type: 'grid',
  spaceAfter: 0,
  ctaPosition: 'afterParagraph',
  tdClass: 'newsletterContainer',
  cta: {
    variant: 'maroon',
    color: theme.ctaSecondaryText,
    bg: theme.ctaSecondary,
    phrase: 'Shop now',
    spaceAfter: false,
    spaceBefore: 'newsletterBottom40px',
    tdClass: 'newsletterContainer',
    borderColor: theme.ctaSecondary,
    borderWidth: '15px 45px',
  },
  paddingTop: false,
  title: {
    show: true,
    position: 'afterImg',
    align: 'left',
    color: theme.titleText,
    spaceBefore: 'newsletterBottom40px',
    spaceAfter: 'newsletterBottom15px',
    tdClass: 'newsletterContainer',
  },
  paragraph: {
    show: true,
    align: 'left',
    spaceAfter: false,
    tdClass: 'newsletterContainer',
  },
  product: {
    prices: true,
    nameBold: 700,
    background: theme.primary,
    spaceBefore: 'newsletterBottom35px',
    spaceAfter: 'newsletterBottom25px',
    tdClass: 'newsletterContainer',
    lowPriceColor: theme.primary,
    highPriceColor: theme.primary,
    name: true,
  },
};

const categories = [
  // main
  ...catData.map((cat, idx) => ({
    ...catObj,
    ...cat,
    product: {
      ...catObj.product,
      ...cat.product,
    },
    title: {
      ...catObj.title,
      ...cat.title,
    },
    paragraph: {
      ...catObj.paragraph,
      ...cat.paragraph,
    },
    cta: {
      ...catObj.cta,
      ...cat.cta
    },
    products: prodData[idx],
  })),
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260311_Cat30.jpg', true),
    // href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
    background: '#FFFFFF',
    color: '#000000',
    type: 'categorytiles',
    displayType: '2col',
    cta: false,
    background: theme.addColor,
    spaceAfter: 'newsletterBottom80px',
    tileBgColor: theme.white,
    tileTextColor: theme.titleText,
    paddingTop: 0,
    showTileNames: true,
    tdClass: 'newsletterContainer40px',
    title: {
      className: 'newsletterAditionalTitle',
      align: 'center',
      show: true,
      spaceBefore: 'newsletterBottom40px',
      // spaceAfter: 'newsletterBottom35px',
      tdClass: 'newsletterContainer40px',
    },
    paragraph: {
      show: false,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    tiles: [
      {
        name: 'Screens & Room Dividers',
        src: getImageUrl('20261014_Add01.png', true),
        href: 'https://www.beliani.ch/office-furniture/office-desk-dividers/',
      },
      {
        name: 'Clocks',
        src: getImageUrl('20261014_Add02.png', true),
        href: 'https://www.beliani.ch/office-furniture/accessories-decor/clocks/',
      },
      {
        name: 'Bookcases & Shelving Units',
        src: getImageUrl('20261014_Add03.png', true),
        href: 'https://www.beliani.ch/office-furniture/storage/bookcases-and-shelves/',
      },
      {
        name: 'Office Accessories',
        src: getImageUrl('20261014_Add04.png', true),
        href: 'https://www.beliani.ch/office-furniture/accessories-decor/office-accessories/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '49017',
  name: 'Wednesday - Home office',
  date: '14.10.2026',
  issueCardId: '537930',
  lpId: '33047',
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
  figmaUrl: 'https://www.figma.com/design/PVSERYdvi3qMobuKMfd84A/',
  templates: [
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayAI,

      css: types.CSS.NS_AI_MON,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categoryImageTdClass: false,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      intro: {
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'left',
        spaceTop: 'newsletterBottom25px',
        spaceBottom: 'newsletterBottom25px',
        paragraphSpace: false,
        position: 'beforeFreebies',
        secondaryLink: false,
        cta: {
          variant: 'cream',
          color: theme.ctaPrimaryText,
          bg: theme.ctaPrimary,
          borderColor: theme.ctaPrimary,
          borderWidth: '15px 45px',
        },
        disableLine: true,
        containerClass: 'newsletterContainer40px',
        options: {
          linkedType: 'cta', // all, cta, title, paragraph

          align: 'left',

          headerColor: theme.secondaryText,
          headerWeight: 600,

          titleColor: theme.titleText,
          titleWeight: 600,
        },
      },
      disableTopImageTitle: true,
    },
    {
      background: theme.white,
      color: theme.black,
      template: templates.MondayAI,

      css: types.CSS.LP_AI_MON,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categoryImageTdClass: false,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      theme,
      intro: {
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.primary,
        alignment: 'left',
        spaceTop: 'newsletterBottom25px',
        spaceBottom: 'newsletterBottom25px',
        paragraphSpace: false,
        position: 'beforeCategories',
        secondaryLink: false,
        cta: {
          variant: 'cream',
          color: theme.ctaPrimaryText,
          bg: theme.ctaPrimary,
          borderColor: theme.ctaPrimary,
          borderWidth: '6px 20px',
        },
        disableLine: true,
        containerClass: 'newsletterContainer40px',
        options: {
          linkedType: 'cta', // all, cta, title, paragraph

          align: 'left',
          headerColor: theme.secondaryText,
          headerWeight: 600,

          titleColor: theme.titleText,
          titleWeight: 600,
        },
      },
      disableTopImageTitle: true,
      disableKlarna: ['SI', 'HR'],
    },
  ],
});
