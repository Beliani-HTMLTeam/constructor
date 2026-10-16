const campaignTranslationsSheet = '2026::Voucher - 02.11.26 - Gatherings - Free gift';

const theme = {
  // Core colors
  primary: '#FFCCB7',
  primaryText: '#ffffff',
  secondary: '#FFEFD9',
  secondaryText: '#FFCCB7',
  black: '#000000',
  white: '#ffffff',
  priceText: '#750000',

  // Toast
  toastBg: '#F6E7E6',
  toastText: '#000000',

  // Cta
  ctaPrimary: '#750000',
  ctaPrimaryText: '#ffffff',

  // Offer
  offerBg: '#FFEFD9',
  dealBg: '#FFCCB7',
  offerTitleColor: '#750000',
  offerPrg1Color: '#000000',
  offerPrg2Color: '#000000',
};

const catData = [
  {
    name: 'Dining tables',
    href: 'https://www.beliani.ch/dining-room-furniture/tables/dining-tables/',
    catImg: getImageUrl('20261102_Cat01.jpg', true),
  },
  {
    name: 'Dining chairs',
    href: 'https://www.beliani.ch/chairs/dining-chairs/',
    catImg: getImageUrl('20261102_Cat02.jpg', true),
  },
  {
    name: 'Tableware',
    href: 'https://www.beliani.ch/kitchen/kitchenware-tableware/',
    catImg: getImageUrl('20261102_Cat03.jpg', true),
  },
  {
    name: 'Lighting',
    href: 'https://www.beliani.ch/lighting/',
    catImg: getImageUrl('20261102_Cat04.jpg', true),
  },
];

const prodData = [
  [
    [
      { id: '257987', src: getImageUrl('20261102_Free01.png', true), useDescription: true },
      { id: '232377', src: getImageUrl('20261102_Free02.png', true), useDescription: true },
    ],
    [
      { id: '367111', src: getImageUrl('20261102_Free03.png', true), useDescription: true },
      { id: '232794', src: getImageUrl('20261102_Free04.png', true), useDescription: true },
    ],
  ],
  [
    {
      id: '631506',
      src: getImageUrl('20261102_Prod01.png', true),
    },
    {
      id: '153397',
      src: getImageUrl('20261102_Prod02.png', true),
    },
    {
      id: '568039',
      src: getImageUrl('20261102_Prod03.png', true),
    },
    {
      id: '398774',
      src: getImageUrl('20261102_Prod04.png', true),
    },
  ],
  [
    {
      id: '576164',
      src: getImageUrl('20261102_Prod10.png', true),
    },
    {
      id: '579688',
      src: getImageUrl('20261102_Prod11.png', true),
    },
    {
      id: '664897',
      src: getImageUrl('20261102_Prod12.png', true),
    },
    {
      id: '650449',
      src: getImageUrl('20261102_Prod13.png', true),
    },
  ],
  [
    {
      id: '705678',
      src: getImageUrl('20261102_Prod20.png', true),
    },
    {
      id: '585758',
      src: getImageUrl('20261102_Prod21.png', true),
    },
    {
      id: '468056',
      src: getImageUrl('20261102_Prod22.png', true),
    },
    {
      id: '686727',
      src: getImageUrl('20261102_Prod23.png', true),
    },
  ],
  [
    {
      id: '405978',
      src: getImageUrl('20261102_Prod30.png', true),
    },
    {
      id: '650563',
      src: getImageUrl('20261102_Prod31.png', true),
    },
    {
      id: '686727',
      src: getImageUrl('20261102_Prod32.png', true),
    },
    {
      id: '505668',
      src: getImageUrl('20261102_Prod33.png', true),
    },
  ],
];

const tableQueries = [
  {
    name: 'offer',
    tableRange: '23:24',
  },
  {
    name: 'offer_date',
    tableRange: '25',
  },
  {
    name: 'offer_code',
    tableRange: '26',
  },
  {
    name: 'freebie_teaser',
    tableRange: '27:30',
  },
  {
    name: 'intro',
    tableRange: '31:32',
  },
  {
    name: 'condition',
    tableRange: '33:35',
  },
];

const links = {
  Intro_cta_href: 'https://www.beliani.ch/dining-room-furniture/',
  TopImageTitle_href: translateLink({ value: 'content/lp26-11-02' }),
  TopImageTitle_src: translateImage({ value: '20260909_01_A.png' }),

  TopImage_src: getImageUrl('20261102_topImage.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-11-02' }),

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
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: theme.secondary,
    color: theme.black,
    spaceAfter: false,
    offerSpaceAfter: false,
    spaceColor: theme.primary,
    combineOfferParts: false,
    tdClass: 'newsletterContainer',
    offer: {
      titleSpaceBefore: 'newsletterBottom35px',
      titleSpaceAfter: 'newsletterBottom20px',

      mainTitleSpaceAfter: 'newsletterBottom20px',
      textSpaceAfter: 'newsletterBottom35px',

      dateSpaceAfter: 'newsletterBottom35px',
    },
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: 'newsletterBottom35px',
      spaceBefore: 'newsletterBottom15px',
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
      lowPriceColor: theme.priceText,
      highPriceColor: theme.priceText,
      color: theme.black,
      tdClass: "newsletterContainer30px",
    }
  },

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
    spaceAfter: 0,
    ctaPosition: 'afterProducts',
    tdClass: "newsletterContainer",
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom80px',
      tdClass: "newsletterContainer",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    paddingTop: false,
    title: {
      show: true,
      position: 'beforeImg',
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer",
      className: 'categoryTitleNormal',
    },
    paragraph: { show: false },
    product: {
      prices: true,
      background: theme.secondary,
      spaceBefore: 'newsletterBottom40px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer",
      lowPriceColor: theme.priceText,
      highPriceColor: theme.priceText,
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
    background: theme.primary,
    color: theme.black,
    type: 'grid',
    spaceAfter: 0,
    ctaPosition: 'afterProducts',
    tdClass: "newsletterContainer",
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom80px',
      tdClass: "newsletterContainer",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    paddingTop: false,
    title: {
      show: true,
      position: 'beforeImg',
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer",
      className: 'categoryTitleNormal',
    },
    paragraph: { show: false },
    product: {
      prices: true,
      background: theme.primary,
      spaceBefore: 'newsletterBottom40px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer",
      lowPriceColor: theme.priceText,
      highPriceColor: theme.priceText,
      color: theme.black,
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
    background: theme.secondary,
    color: theme.black,
    type: 'grid',
    spaceAfter: 0,
    ctaPosition: 'afterProducts',
    tdClass: "newsletterContainer",
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom80px',
      tdClass: "newsletterContainer",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    paddingTop: false,
    title: {
      show: true,
      position: 'beforeImg',
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer",
      className: 'categoryTitleNormal',
    },
    paragraph: { show: false },
    product: {
      prices: true,
      background: theme.secondary,
      spaceBefore: 'newsletterBottom40px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer",
      lowPriceColor: theme.priceText,
      highPriceColor: theme.priceText,
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
    background: theme.primary,
    color: theme.black,
    type: 'grid',
    spaceAfter: 0,
    ctaPosition: 'afterProducts',
    tdClass: "newsletterContainer",
    cta: {
      variant: 'maroon',
      color: theme.ctaPrimaryText,
      bg: theme.ctaPrimary,
      phrase: 'Shop now',
      spaceAfter: false,
      spaceBefore: 'newsletterBottom45px',
      tdClass: "newsletterContainer",
      borderColor: theme.ctaPrimary,
      borderWidth: '15px 45px',
      transform: 'uppercase',
    },
    paddingTop: false,
    title: {
      show: true,
      position: 'beforeImg',
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer",
      className: 'categoryTitleNormal',
    },
    paragraph: { show: false },
    product: {
      prices: true,
      background: theme.primary,
      spaceBefore: 'newsletterBottom40px',
      spaceAfter: 'newsletterBottom35px',
      tdClass: "newsletterContainer",
      lowPriceColor: theme.priceText,
      highPriceColor: theme.priceText,
      color: theme.black,
      name: true,
    },
    products: prodData[4],
  },
];

export default new entities.Campaign({
  startId: '49569',
  name: 'Monday - Gatherings/Free gift',
  date: '02.11.2026',
  issueCardId: '544031',
  lpId: '33360',
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
      categoryImageTdClass: false,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      disableTopImageTitle: true,
      theme,
      optimizeCss: true,
      intro: {
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'center',
        spaceTop: 'newsletterBottom35px',
        paragraphSpace: 'newsletterBottom35px',
        position: 'afterFreebies',
        secondaryLink: false,
        cta: {
          variant: 'maroon',
          color: theme.ctaPrimaryText,
          bg: theme.ctaPrimary,
          phrase: 'Shop now',
          spaceBefore: 'newsletterBottom80px',
          tdClass: "newsletterContainer",
          borderColor: theme.ctaPrimary,
          borderWidth: '15px 45px',
          transform: 'uppercase',
        },
        disableLine: true,
        containerClass: 'newsletterContainer',
        options: {
          titleClass: 'introTitleNormal',
          paragraphClass: 'introParagraphNormal',
        }
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
      categoryImageTdClass: false,
      links: links,
      tableQueries: tableQueries,
      shopByCategory: false,
      disableTopImageTitle: true,
      theme,
      intro: {
        renderImage: true,
        color: theme.black,
        backgroundColor: theme.secondary,
        alignment: 'center',
        spaceTop: 'newsletterBottom35px',
        paragraphSpace: 'newsletterBottom35px',
        position: 'afterFreebies',
        secondaryLink: false,
        cta: {
          variant: 'maroon',
          color: theme.ctaPrimaryText,
          bg: theme.ctaPrimary,
          phrase: 'Shop now',
          spaceBefore: 'newsletterBottom35px',
          tdClass: "newsletterContainer",
          borderColor: theme.ctaPrimary,
          borderWidth: '15px 45px',
          transform: 'uppercase',
        },
        disableLine: true,
        containerClass: 'newsletterContainer',
        options: {
          titleClass: 'introTitleNormal',
          paragraphClass: 'introParagraphNormal',
        }
      },
      disableKlarna: ['SI', 'HR'],
    },
  ],
});
