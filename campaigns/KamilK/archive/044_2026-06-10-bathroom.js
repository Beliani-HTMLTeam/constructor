// Campaign generated from form
const campaignTranslationsSheet = '2026::10.06.26 - Bathroom';

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
    tableRange: '27:28',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-10' }),
  TopImageTitle_src: translateImage({ value: '20260610_01.png' }),

  // TopImage_src: getImageUrl('20260610_Top.png', true),
  // TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

  Banner_1: translateLink({ value: 'content/lp26-06-03' }),
  Banner_1_Image: translateImage({ value: '20260603b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-28' }),
  Banner_2_Image: translateImage({ value: '20260528b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260610_Top.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/',
    background: '#F6E7E6',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: translateImage({ value: '20260610_PeakBanner.gif' }),
    href: translateLink({ value: 'content/lp26-06-01' }),
    background: '#F6E7E6',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Bathtubs',
    // src: translateImage({ value: '20260610_Pic.gif' }),
    href: 'https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/',
    background: '#F6E7E6',
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
      // CARRERA
      {
        id: '252655',
        src: getImageUrl('20260610_Pic01.png', true),
      },
      // CAYMAN
      {
        id: '310376',
        src: getImageUrl('20260610_Pic02.png', true),
      },
      // PARNAIBA
      {
        id: '666475',
        src: getImageUrl('20260610_Pic03.png', true),
      },
      // NEIVA
      {
        id: '232789',
        src: getImageUrl('20260610_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Basins and Accessories',
    src: getImageUrl('20260610_Cat10.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/basins/',
    background: '#FFDEB3',
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
      // CALIG
      {
        id: '509816',
        src: getImageUrl('20260610_Pic11.png', true),
      },
      // QUENKO
      {
        id: '614926',
        src: getImageUrl('20260610_Pic12.png', true),
      },
      // ARTAJ
      {
        id: '509578',
        src: getImageUrl('20260610_Pic13.png', true),
      },
      // TOLOSA
      {
        id: '433102',
        src: getImageUrl('20260610_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Bathroom Storage',
    src: getImageUrl('20260610_Cat20.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-storage/',
    background: '#F6E7E6',
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
      // PADUCAH
      {
        id: '515471',
        src: getImageUrl('20260610_Pic21.png', true),
      },
      // NUBES
      {
        id: '572170',
        src: getImageUrl('20260610_Pic22.png', true),
      },
      // SERRA
      {
        id: '617476',
        src: getImageUrl('20260610_Pic23.png', true),
      },
      // WAVERLY
      {
        id: '515547',
        src: getImageUrl('20260610_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Mirrors',
    src: getImageUrl('20260610_Cat30.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/mirrors/',
    background: '#FFDEB3',
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
      // MONTRESOR
      {
        id: '345527',
        src: getImageUrl('20260610_Pic31.png', true),
      },
      // LUCENAY
      {
        id: '161417',
        src: getImageUrl('20260610_Pic32.png', true),
      },
      // VIRIAT
      {
        id: '203129',
        src: getImageUrl('20260610_Pic33.png', true),
      },
      // YVELINES
      {
        id: '368237',
        src: getImageUrl('20260610_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260610_Cat30.png', true),
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
        name: 'Towels',
        src: getImageUrl('20260610_Pic41.png', true),
        href: 'https://www.beliani.ch/bathroom-furniture/towel/',
      },
      {
        name: 'Bathroom Lighting',
        src: getImageUrl('20260610_Pic42.png', true),
        href: 'https://www.beliani.ch/bathroom-furniture/bathroom-lighting/',
      },
      {
        name: 'Bathroom Accessories',
        src: getImageUrl('20260610_Pic43.png', true),
        href: 'https://www.beliani.ch/bathroom-furniture/bathroom-accessories/',
      },
      {
        name: 'Bath mats',
        src: getImageUrl('20260610_Pic44.png', true),
        href: 'https://www.beliani.ch/bathroom-furniture/bathroom-mats/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: 44400,
  name: 'Bathroom',
  date: '10.06.2026',
  issueCardId: 489196,
  lpId: 30508,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/6JnFPUO87iSU69BZFPCFfH/',
  templates: [
    {
      background: '#F6E7E6',
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
      background: '#F6E7E6',
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
