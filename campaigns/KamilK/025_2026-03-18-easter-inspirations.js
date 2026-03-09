// Campaign generated from form
const campaignTranslationsSheet = '2026::18.03.2026_Easter inspirations';

const tableQueries = [
  {
    tableRange: '16:17',
    name: 'TopImageTitle',
  },
  {
    tableRange: '19:24',
    name: 'paragraphs',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-18' }),
  TopImageTitle_src: translateImage({ value: '20260318_01.png' }),

  // TopImage_src: getImageUrl('20260311_Top.png', true),
  // TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

  Banner_1: translateLink({ value: 'content/lp26-03-11' }),
  Banner_1_Image: translateImage({ value: '20260311b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-03-05' }),
  Banner_2_Image: translateImage({ value: '20260305b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEE3BF',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260318_Top.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
    background: '#FEE3BF',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: translateImage({ value: '20260311_Pic.gif' }),
    href: translateLink({ value: 'content/lp26-03-02' }),
    background: '#FEE3BF',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Dining room',
    // src: translateImage({ value: '20260318_Pic.gif' }),
    href: 'https://www.beliani.ch/dining-room-furniture/',
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
      // LARTO
      {
        id: '631466',
        src: getImageUrl('20260318_Pic01.png', true),
      },
      // BEED
      {
        id: '693680',
        src: getImageUrl('20260318_Pic02.png', true),
      },
      // IVERA
      {
        id: '250945',
        src: getImageUrl('20260318_Pic03.png', true),
      },
      // ISLE
      {
        id: '648853',
        src: getImageUrl('20260318_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Living room',
    src: getImageUrl('20260318_Cat10.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    background: '#FFE8DE',
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
      // SVANSELE
      {
        id: '450279',
        src: getImageUrl('20260318_Pic11.png', true),
      },
      // ANISOPTERA
      {
        id: '692629',
        src: getImageUrl('20260318_Pic12.png', true),
      },
      // ILIOS
      {
        id: '514447',
        src: getImageUrl('20260318_Pic13.png', true),
      },
      // ELLEK
      {
        id: '136600',
        src: getImageUrl('20260318_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Bedroom',
    src: getImageUrl('20260318_Cat20.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
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
      // SENNEZ
      {
        id: '92894',
        src: getImageUrl('20260318_Pic21.png', true),
      },
      // WAHOO
      {
        id: '320164',
        src: getImageUrl('20260318_Pic22.png', true),
      },
      // ALBANY
      {
        id: '594184',
        src: getImageUrl('20260318_Pic23.png', true),
      },
      // BERE
      {
        id: '696013',
        src: getImageUrl('20260318_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Easter_Accessories',
    src: getImageUrl('20260318_Cat30.png', true),
    href: 'https://www.beliani.ch/easter/',
    background: '#FFE8DE',
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
      // RUCA
      {
        id: '	250580',
        src: getImageUrl('20260318_Pic31.png', true),
      },
      // CLUSIA
      {
        id: '	252706',
        src: getImageUrl('20260318_Pic32.png', true),
      },
      // SHEER JOY
      {
        id: '409176',
        src: getImageUrl('20260318_Pic33.png', true),
      },
      // THETIDIO
      {
        id: '346621',
        src: getImageUrl('20260318_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260318_Cat30.png', true),
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
        name: 'Dinnerware',
        src: getImageUrl('20260318_Pic41.png', true),
        href: 'https://www.beliani.ch/kitchenware-tableware/dinnerware/',
      },
      {
        name: 'Floor lamps',
        src: getImageUrl('20260318_Pic42.png', true),
        href: 'https://www.beliani.ch/lighting/floor-lamps/',
      },
      {
        name: 'Sideboards',
        src: getImageUrl('20260318_Pic43.png', true),
        href: 'https://www.beliani.ch/storage/sideboards/',
      },
      {
        name: 'Glassware',
        src: getImageUrl('20260318_Pic44.png', true),
        href: 'https://www.beliani.ch/kitchenware-tableware/glassware/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '42157',
  name: 'Easter inspirations',
  date: '18.03.2026',
  issueCardId: '457326',
  lpId: '29361',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/farafPZDUpeprCmlshVBEE/',
  templates: [
    {
      background: '#FEE3BF',
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
      background: '#FEE3BF',
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
