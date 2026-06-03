const campaignTranslationsSheet = '17.06.26 - Dining Room';

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
    tableRange: '26:27',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-17' }),
  TopImageTitle_src: translateImage({ value: '20260617_01.png' }),

  // TopImage_src: getImageUrl('20260311_Top.png', true),
  // TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

  Banner_1: translateLink({ value: 'content/lp26-06-04' }),
  Banner_1_Image: translateImage({ value: '20260604b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-06-03' }),
  Banner_2_Image: translateImage({ value: '20260603b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260617_Cat10.png', true),
    href: 'https://www.beliani.ch/tables/dining-tables/',
    background: '#FFE9CC',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
    spaceAfter: 'newsletterBottom35px',
  },
  {
    name: 'Dining Tables',
    src: translateImage({ value: '20260617_pic.gif' }),
    href: translateLink({ value: 'content/lp26-06-01' }),
    background: '#FFE9CC',
    color: '#000000',
    type: 'grid',
    cta: { href: 'https://www.beliani.ch/tables/dining-tables/' },
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
      // SAVORY 
      {
        id: '568039',
        src: getImageUrl('20260617_Pic01.png', true),
      },
      // CARLEA 
      {
        id: '609306',
        src: getImageUrl('20260617_Pic02.png', true),
      },
      // FINLEY
      {
        id: '698563',
        src: getImageUrl('20260617_Pic03.png', true),
      },
      // MERE 
      {
        id: '609878',
        src: getImageUrl('20260617_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Chairs',
    nameOverrides: { pt: 'Cadeiras de jantar' },
    src: getImageUrl('20260617_Cat20.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/chairs/dining-chairs/',
    background: '#DCBFBF',
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
      // LYNN 
      {
        id: '92127',
        src: getImageUrl('20260617_Pic11.png', true),
      },
      // DALBO 
      {
        id: '575248',
        src: getImageUrl('20260617_Pic12.png', true),
      },
      // MINA 
      {
        id: '403755',
        src: getImageUrl('20260617_Pic13.png', true),
      },
      // ONECO 
      {
        id: '660718',
        src: getImageUrl('20260617_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Dinnerware',
    src: getImageUrl('20260617_Cat30.png', true),
    href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/dinnerware/',
    background: '#FFE9CC',
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
      // CINNAMON 
      {
        id: '677960',
        src: getImageUrl('20260617_Pic21.png', true),
      },
      // NUTMEG 
      {
        id: '705507',
        src: getImageUrl('20260617_Pic22.png', true),
      },
      // HOPS 
      {
        id: '721933',
        src: getImageUrl('20260617_Pic23.png', true),
      },
      // SESAME 
      {
        id: '394733',
        src: getImageUrl('20260617_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Kitchen Trolleys',
    src: getImageUrl('20260617_Cat40.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/storage/kitchen-trolleys/',
    background: '#DCBFBF',
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
      // VENETA 
      {
        id: '195790',
        src: getImageUrl('20260617_Pic31.png', true),
      },
      // BOVES 
      {
        id: '224105',
        src: getImageUrl('20260617_Pic32.png', true),
      },
      // MELE 
      {
        id: '234813',
        src: getImageUrl('20260617_Pic33.png', true),
      },
      // GENOA 
      {
        id: '683043',
        src: getImageUrl('20260617_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260617_Cat30.png', true),
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
        name: 'Kitchen Knives',
        src: getImageUrl('20260617_Pic41.png', true),
        href: 'https://www.beliani.ch/kitchenware-tableware/kitchen-knives/',
      },
      {
        name: 'Pans and pots',
        src: getImageUrl('20260617_Pic42.png', true),
        href: 'https://www.beliani.ch/kitchenware-tableware/pots-and-pans/',
      },
      {
        name: 'Glassware',
        src: getImageUrl('20260617_Pic43.png', true),
        href: 'https://www.beliani.ch/kitchenware-tableware/glassware/',
      },
      {
        name: 'Serveware',
        src: getImageUrl('20260617_Pic44.png', true),
        href: 'https://www.beliani.ch/kitchenware-tableware/serveware/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '44593',
  name: 'WED Dining Furniture',
  date: '17.06.2026',
  issueCardId: '492459',
  lpId: '30586',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/WslIHWAtC2SD6jIuXBzrhP/Newsletter-Dining-Room---Wednesday-2026.06.17--Copy-?node-id=0-1&t=njH6ZbzKX50m1lwT-1',
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