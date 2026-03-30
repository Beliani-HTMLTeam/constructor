// Campaign generated from form
const campaignTranslationsSheet = '2026::15.04.26 - Balcony';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '26:31',
    name: 'paragraphs',
  },
  {
    tableRange: '20:25',
    name: 'categories',
  },
  {
    tableRange: '32:33',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-15' }),
  TopImageTitle_src: translateImage({ value: '20260415_01.png' }),

  // TopImage_src: getImageUrl('20260311_Top.png', true),
  // TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

  Banner_1: translateLink({ value: 'content/lp26-04-09' }),
  Banner_1_Image: translateImage({ value: '20260409b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-04-08' }),
  Banner_2_Image: translateImage({ value: '20260408b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260415_Pic.png', true),
    href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
    background: '#FFE9CC',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: translateImage({ value: '20260311_Pic.gif' }),
    href: translateLink({ value: 'content/lp26-03-02' }),
    background: '#FFE9CC',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Balcony furniture',
    // src: translateImage({ value: '20260415_Pic.gif' }),
    href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
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
      // TRESTINA
      {
        id: 198941,
        src: getImageUrl('20260415_Pic01.png', true),
      },
      // TAVOLETO
      {
        id: 702113,
        src: getImageUrl('20260415_Pic02.png', true),
      },
      // SICELLE
      {
        id: 643877,
        src: getImageUrl('20260415_Pic03.png', true),
      },
      // LAURETO
      {
        id: 414368,
        src: getImageUrl('20260415_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Chairs',
    src: getImageUrl('20260415_Cat10.png', true),
    href: 'https://www.beliani.ch/outdoor-furniture/garden-chairs/',
    background: '#FFD6C5',
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
      // BELLANO
      {
        id: 508156,
        src: getImageUrl('20260415_Pic11.png', true),
      },
      // ARICCIA
      {
        id: 708856,
        src: getImageUrl('20260415_Pic12.png', true),
      },
      // CHIEVE
      {
        id: 705870,
        src: getImageUrl('20260415_Pic13.png', true),
      },
      // SUMIRAGO
      {
        id: 700018,
        src: getImageUrl('20260415_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Rugs',
    src: getImageUrl('20260415_Cat20.png', true),
    href: 'https://www.beliani.ch/rugs/',
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
      // ERICEK
      {
        id: 424921,
        src: getImageUrl('20260415_Pic21.png', true),
      },
      // THANE
      {
        id: 504185,
        src: getImageUrl('20260415_Pic22.png', true),
      },
      // NELLORE
      {
        id: 629582,
        src: getImageUrl('20260415_Pic23.png', true),
      },
      // DADAY
      {
        id: 379583,
        src: getImageUrl('20260415_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Outdoor flooring',
    src: getImageUrl('20260415_Cat30.png', true),
    href: 'https://www.beliani.ch/garden-accessories/outdoor-flooring/',
    background: '#FFD6C5',
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
      // ACERENZA
      {
        id: 586179,
        src: getImageUrl('20260415_Pic31.png', true),
      },
      // ATELETA
      {
        id: 598143,
        src: getImageUrl('20260415_Pic32.png', true),
      },
      // ATESSA
      {
        id: 598467,
        src: getImageUrl('20260415_Pic33.png', true),
      },
      // ACCETTURA
      {
        id: 586799,
        src: getImageUrl('20260415_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260415_Cat30.png', true),
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
        name: 'Lounge sets',
        src: getImageUrl('20260415_Pic41.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
      },
      {
        name: 'Dining sets',
        src: getImageUrl('20260415_Pic42.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
      },
      {
        name: 'Parasols',
        src: getImageUrl('20260415_Pic43.png', true),
        href: 'https://www.beliani.ch/garden-furniture/parasols/',
      },
      {
        name: 'Hammocks',
        src: getImageUrl('20260415_Pic44.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/hammock/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '42669',
  name: 'Balcony',
  date: '15.04.2026',
  issueCardId: '461339',
  lpId: '29610',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/fbiXdhY7IuHBcyyYmss8fF/',
  templates: [
    {
      background: '#FFE9CC',
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
      background: '#FFE9CC',
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
