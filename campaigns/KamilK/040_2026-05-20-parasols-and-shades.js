// Campaign generated from form
const campaignTranslationsSheet = '2026::20.05.2026 - Parasols and shades';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20:24',
    name: 'paragraphs',
  },
  // {
  //   tableRange: '20:25',
  //   name: 'categories',
  // },
  {
    tableRange: '25:26',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-20' }),
  TopImageTitle_src: translateImage({ value: '20260520_01.png' }),

  // TopImage_src: getImageUrl('20260311_Top.png', true),
  // TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

  Banner_1: translateLink({ value: 'content/lp26-05-13' }),
  Banner_1_Image: translateImage({ value: '20260513b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-07' }),
  Banner_2_Image: translateImage({ value: '20260507b.png' }),
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#750000',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260520_Pic.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/parasols/cantilever-parasols/',
    background: '#750000',
    color: '#ffffff',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  // {
  //   src: translateImage({ value: '20260311_Pic.gif' }),
  //   href: translateLink({ value: 'content/lp26-03-02' }),
  //   background: '#750000',
  //   color: '#000000',
  //   paddingTop: 35,
  //   spaceAfter: '0',
  //   title: { show: false },
  //   paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  // },
  {
    name: 'Cantilever Parasols',
    // src: translateImage({ value: '20260520_Pic.gif' }),
    href: 'https://www.beliani.ch/garden-furniture/parasols/cantilever-parasols/',
    background: '#750000',
    color: '#ffffff',
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
      // CORVAL
      {
        id: 193447,
        src: getImageUrl('20260520_Pic01.png', true),
      },
      // MONZA RED
      {
        id: 82349,
        src: getImageUrl('20260520_Pic02.png', true),
      },
      // SAVONA
      {
        id: 82345,
        src: getImageUrl('20260520_Pic03.png', true),
      },
      // MONZA BROWN
      {
        id: 82347,
        src: getImageUrl('20260520_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Market Parasols',
    src: getImageUrl('20260520_Cat10.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/parasols/market-parasols/',
    background: '#FFCCB7',
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
      // MINOA
      {
        id: 522720,
        src: getImageUrl('20260520_Pic11.png', true),
      },
      // MONDELLO
      {
        id: 369025,
        src: getImageUrl('20260520_Pic12.png', true),
      },
      // FERENTILLO
      {
        id: 116294,
        src: getImageUrl('20260520_Pic13.png', true),
      },
      // CIVETTA
      {
        id: 669447,
        src: getImageUrl('20260520_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Parasol bases',
    src: getImageUrl('20260520_Cat20.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/parasols/accessories-bases/',
    background: '#750000',
    color: '#ffffff',
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
      // CEGGIA
      {
        id: 358795,
        src: getImageUrl('20260520_Pic21.png', true),
      },
      // CECCANO
      {
        id: 618842,
        src: getImageUrl('20260520_Pic22.png', true),
      },
      // CARIA
      {
        id: 60533,
        src: getImageUrl('20260520_Pic23.png', true),
      },
      // CETO
      {
        id: 101142,
        src: getImageUrl('20260520_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Gazebos & Pergolas',
    src: getImageUrl('20260520_Cat30.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/parasols/gazebos-parasols/',
    background: '#FFCCB7',
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
      // PARGA
      {
        id: 324726,
        src: getImageUrl('20260520_Pic31.png', true),
      },
      // NARO
      {
        id: 375148,
        src: getImageUrl('20260520_Pic32.png', true),
      },
      // PORTEL
      {
        id: 193471,
        src: getImageUrl('20260520_Pic33.png', true),
      },
      // VIMINO
      {
        id: 396163,
        src: getImageUrl('20260520_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260520_Cat30.png', true),
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
        name: 'Outdoor Lighting',
        src: getImageUrl('20260520_Pic41.jpg', true),
        href: 'https://www.beliani.ch/garden-furniture/garden-lighting/',
      },
      {
        name: 'Outdoor Textiles',
        src: getImageUrl('20260520_Pic42.jpg', true),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-textiles/',
      },
      {
        name: 'Sun Loungers',
        src: getImageUrl('20260520_Pic43.jpg', true),
        href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
      },
      {
        name: 'Lounge Sets',
        src: getImageUrl('20260520_Pic44.jpg', true),
        href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/looks/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: 43598,
  name: 'Parasols and shades',
  date: '20.05.2026',
  issueCardId: 469876,
  lpId: 30090,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/fbiXdhY7IuHBcyyYmss8fF/',
  templates: [
    {
      background: '#750000',
      color: '#ffffff',
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
      background: '#750000',
      color: '#ffffff',
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
