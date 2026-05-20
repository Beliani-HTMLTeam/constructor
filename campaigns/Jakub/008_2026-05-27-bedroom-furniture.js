const campaignTranslationsSheet = '27.05.26 - Bedroom';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20:24',
    name: 'paragraphs',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-27' }),
  TopImageTitle_src: translateImage({ value: '20260527_01.png' }),

  // TopImage_src: getImageUrl('20260311_Top.png', true),
  // TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

  Banner_1: translateLink({ value: 'content/lp26-05-20' }),
  Banner_1_Image: translateImage({ value: '20260520b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-14' }),
  Banner_2_Image: translateImage({ value: '20260514b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEE3BF',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260527_Top.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    background: '#FEE3BF',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Beds',
    // src: translateImage({ value: '20260527_Pic.gif' }),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    background: '#FEE3BF',
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
      // SEZANNE
      {
        id: '253177',
        src: getImageUrl('20260527_Pic01.png', true),
      },
      // VINAY 
      {
        id: '416829',
        src: getImageUrl('20260527_Pic02.png', true),
      },
      // ANTLIA 
      {
        id: '53137',
        src: getImageUrl('20260527_Pic03.png', true),
      },
      // MONPAZIER
      {
        id: '395227',
        src: getImageUrl('20260527_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Bedside tables',
    src: getImageUrl('20260527_Cat20.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/',
    background: '#750000',
    color: '#FFFFFF',
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
      // SELAH 
      {
        id: '553786',
        src: getImageUrl('20260527_Pic11.png', true),
      },
      // SHILLINGTON 
      {
        id: '565793',
        src: getImageUrl('20260527_Pic12.png', true),
      },
      // ALMO
      {
        id: '363397',
        src: getImageUrl('20260527_Pic13.png', true),
      },
      // WALPOLE 
      {
        id: '575724',
        src: getImageUrl('20260527_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Sideboards and chest of drawers',
    src: getImageUrl('20260527_Cat30.png', true),
    href: 'https://www.beliani.ch/storage/sideboards/',
    nameOverrides: { fi: 'Senkit ja lipastot'}, 
    background: '#FEE3BF',
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
      // PASCO
      {
        id: '260571',
        src: getImageUrl('20260527_Pic21.png', true),
      },
      // BRADLEY
      {
        id: '448791',
        src: getImageUrl('20260527_Pic22.png', true),
      },
      // COVENTRY 
      {
        id: '570095',
        src: getImageUrl('20260527_Pic23.png', true),
      },
      // KORVO 
      {
        id: '721075',
        src: getImageUrl('20260527_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Mirrors',
    src: getImageUrl('20260527_Cat40.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/mirrors/',
    background: '#750000',
    color: '#FFFFFF',
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
      // LARCHE 
      {
        id: '498112',
        src: getImageUrl('20260527_Pic31.png', true),
      },
      // INDRE 
      {
        id: '368063',
        src: getImageUrl('20260527_Pic32.png', true),
      },
      // BUSSY 
      {
        id: '448522',
        src: getImageUrl('20260527_Pic33.png', true),
      },
      // CASSIS 
      {
        id: '53889',
        src: getImageUrl('20260527_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260527_Cat30.png', true),
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
        name: 'Lighting',
        src: getImageUrl('20260527_Pic41.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/lighting/',
      },
      {
        name: 'Armchairs',
        src: getImageUrl('20260527_Pic42.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/armchairs/',
      },
      {
        name: 'Textiles',
        src: getImageUrl('20260527_Pic43.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/textiles/',
      },
      {
        name: 'Rugs',
        src: getImageUrl('20260527_Pic44.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/rugs/',
        hrefOverrides: { cz: 'https://www.beliani.cz/koberce/' },
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '43886',
  name: 'WED Bedroom Furniture',
  date: '27.05.2026',
  issueCardId: '481254',
  lpId: '30259',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/rxrv03byJJWMv7EGlUItE3/Bedroom---Wednesday-2026.05.27-FINAL--Copy-?node-id=0-1&t=okTjefqhEp0GybVA-1',
  templates: [
    {
      background: '#FEE3BF',
      color: '#000000',
      template: templates.Monday,

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
      background: '#FEE3BF',
      color: '#000000',
      template: templates.Monday,

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