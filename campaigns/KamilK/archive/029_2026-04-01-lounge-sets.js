// Campaign generated from form
const campaignTranslationsSheet = '2026::01.04.26 - Lounge sets';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20:25',
    name: 'paragraphs',
  },
  {
    tableRange: '38:39',
    name: 'condition',
  },
  {
    tableRange: '32:37',
    name: 'categoryLinks',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-01' }),
  TopImageTitle_src: translateImage({ value: '20260401_01.png' }),

  // TopImage_src: getImageUrl('20260311_Top.png', true),
  // TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

  Banner_1: translateLink({ value: 'content/lp26-03-25' }),
  Banner_1_Image: translateImage({ value: '20260325b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-03-20' }),
  Banner_2_Image: translateImage({ value: '20260320b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEB24D',
  type: 'twoSameLines',
};

const categories = [
  // top image
  {
    src: getImageUrl('20260401_Top.png', true),
    // href: 'https://www.beliani.ch/dining-room-furniture/',
    background: '#FEB24D',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  // banerek peak
  {
    src: translateImage({ value: '20260311_Pic.gif' }),
    href: translateLink({ value: 'content/lp26-03-02' }),
    background: '#FEB24D',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },

  // START ---- regular categories
  {
    name: 'Wood',
    // src: translateImage({ value: '20260401_Pic.gif' }),
    // href: 'https://www.beliani.ch/dining-room-furniture/',
    background: '#FEB24D',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // CREMONA
      {
        id: '338111',
        src: getImageUrl('20260401_Pic01.png', true),
      },
      // MYKONOS
      {
        id: '	143892',
        src: getImageUrl('20260401_Pic02.png', true),
      },
      // FRASCATI
      {
        id: '	100801',
        src: getImageUrl('20260401_Pic03.png', true),
      },
      // PATAJA
      {
        id: '128772',
        src: getImageUrl('20260401_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Metal',
    src: getImageUrl('20260401_Cat10.png', true),
    // href: 'https://www.beliani.ch/living-room-furniture/',
    background: '#BA8080',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // CASTELLA/FRATTE
      {
        id: '522548',
        src: getImageUrl('20260401_Pic11.png', true),
      },
      // GARDA
      {
        id: '670520',
        src: getImageUrl('20260401_Pic12.png', true),
      },
      // RIMA III
      {
        id: '326799',
        src: getImageUrl('20260401_Pic13.png', true),
      },
      // TERRACINA
      {
        id: '322972',
        src: getImageUrl('20260401_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Rattan',
    src: getImageUrl('20260401_Cat20.png', true),
    // href: 'https://www.beliani.ch/bedroom-furniture/',
    background: '#FEB24D',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // VARALLO
      {
        id: '342596',
        src: getImageUrl('20260401_Pic21.png', true),
      },
      // ARDEA
      {
        id: '	190189',
        src: getImageUrl('20260401_Pic22.png', true),
      },
      // LIVADEIA
      {
        id: '506983',
        src: getImageUrl('20260401_Pic23.png', true),
      },
      // SIBARI
      {
        id: '	259633',
        src: getImageUrl('20260401_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Fabric',
    src: getImageUrl('20260401_Cat30.png', true),
    // href: 'https://www.beliani.ch/easter/',
    background: '#BA8080',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    spaceAfter: 'newsletterBottom40px',
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // BATTIFOLLO
      {
        id: '	524462',
        src: getImageUrl('20260401_Pic31.png', true),
      },
      // ROVIGO
      {
        id: '	211351',
        src: getImageUrl('20260401_Pic32.png', true),
      },
      // AREZZO
      {
        id: '320308',
        src: getImageUrl('20260401_Pic33.png', true),
      },
      // MISSANELLO
      {
        id: '465149',
        src: getImageUrl('20260401_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260401_Cat30.png', true),
    // href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
    background: '#FFFFFF',
    color: '#000000',
    type: 'categorytiles',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    title: {
      className: 'newsletterAditionalTitle',
      align: 'center',
      show: true,
      spaceBefore: 'newsletterBottom40px',
      // spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
    },
    tiles: [
      {
        name: 'Dining sets',
        src: getImageUrl('20260401_Pic41.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
      },
      {
        name: 'Sun loungers',
        src: getImageUrl('20260401_Pic42.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
      },
      {
        name: 'Benches',
        src: getImageUrl('20260401_Pic43.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-benches/',
      },
      {
        name: 'Fire pits',
        src: getImageUrl('20260401_Pic44.png', true),
        href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '42317',
  name: 'Lounge sets',
  date: '01.04.2026',
  issueCardId: '459851',
  lpId: '29439',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/aRaqFgeetkYaDbfAjXejRg/',
  templates: [
    {
      background: '#FEB24D',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '#FEB24D',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
