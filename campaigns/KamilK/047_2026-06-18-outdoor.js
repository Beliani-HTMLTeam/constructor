// Campaign generated from form
const campaignTranslationsSheet = '2026::18.06.26 - Outdoor';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20',
    name: 'intro',
  },
  {
    tableRange: '21:24',
    name: 'paragraphs',
  },
  // {
  //   tableRange: '21:24',
  //   name: 'categories',
  // },
  {
    tableRange: '25:26',
    name: 'condition',
  },
  {
    tableRange: '11:12',
    name: 'timer',
    tableName: '2026::01.06.26 - Beliani Birthday Start	',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-18' }),
  TopImageTitle_src: translateImage({ value: '20260618_01.png' }),

  TopImage_src_1: getImageUrl('20260618_Pic.jpg', true),
  TopImage_src_2: getImageUrl('20260618_Gif.gif', true),
  
  TopImage_href: translateLink({ value: 'content/lp26-06-18' }),

  Banner_1: translateLink({ value: 'content/lp26-06-11' }),
  Banner_1_Image: translateImage({ value: '20260611b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-06-10' }),
  Banner_2_Image: translateImage({ value: '20260610b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-06-19' }),

  Intro_cta_href: "https://www.beliani.ch/garden-furniture/outdoor-furniture/",
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEE3BF',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Lounge Sets',
    src: getImageUrl('20260618_Cat00.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/',
    background: '#FEE3BF',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '60',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // NOLA
      {
        id: 639172,
        src: getImageUrl('20260618_Pic01.png', true),
      },
      // CALASCIO
      {
        id: 734183,
        src: getImageUrl('20260618_Pic02.png', true),
      },
      // MOLVENO
      {
        id: 733421,
        src: getImageUrl('20260618_Pic03.png', true),
      },
      // FIAMES
      {
        id: 704291,
        src: getImageUrl('20260618_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Garden Tables',
    src: getImageUrl('20260618_Cat10.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-tables/',
    background: '#FFCBBF',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // BINASCO
      {
        id: 702265,
        src: getImageUrl('20260618_Pic11.png', true),
      },
      // BARATTI
      {
        id: 399873,
        src: getImageUrl('20260618_Pic12.png', true),
      },
      // BELLANO
      {
        id: 508192,
        src: getImageUrl('20260618_Pic13.png', true),
      },
      // ORIA
      {
        id: 246345,
        src: getImageUrl('20260618_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Garden Chairs',
    src: getImageUrl('20260618_Cat20.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/garden-chairs/',
    background: '#FEE3BF',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // SASSARI
      {
        id: 733214,
        src: getImageUrl('20260618_Pic21.png', true),
      },
      // NARINO
      {
        id: 732928,
        src: getImageUrl('20260618_Pic22.png', true),
      },
      // CIVATE
      {
        id: 726426,
        src: getImageUrl('20260618_Pic23.png', true),
      },
      // RIFREDDO
      {
        id: 723509,
        src: getImageUrl('20260618_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Sun Loungers',
    src: getImageUrl('20260618_Cat30.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/sun-loungers/',
    background: '#FFCBBF',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // CESANA
      {
        id: 731047,
        src: getImageUrl('20260618_Pic31.png', true),
      },
      // ZERI
      {
        id: 714661,
        src: getImageUrl('20260618_Pic32.png', true),
      },
      // VOLTERRA
      {
        id: 688949,
        src: getImageUrl('20260618_Pic33.png', true),
      },
      // OSSIMO
      {
        id: 685197,
        src: getImageUrl('20260618_Pic34.png', true),
      },
    ],
  },
];

const timer = {
  // freebies: getImageUrl('20260611free.png', true),
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/rs62j73q87",
    "CHFR": "https://gen.sendtric.com/countdown/5tec14og2n",
    "FR": "https://gen.sendtric.com/countdown/ue9awznj5f",
    "DE": "https://gen.sendtric.com/countdown/2b2ryrv4ao",
    "UK": "https://gen.sendtric.com/countdown/o43jq28qm8",
    "AT": "https://gen.sendtric.com/countdown/p506t9ml5a",
    "ES": "https://gen.sendtric.com/countdown/yzjyw4wuet",
    "PL": "https://gen.sendtric.com/countdown/e7otekvplp",
    "NL": "https://gen.sendtric.com/countdown/1w4306wj5m",
    "PT": "https://gen.sendtric.com/countdown/06mhlljial",
    "IT": "https://gen.sendtric.com/countdown/1eedbmpyiz",
    "SE": "https://gen.sendtric.com/countdown/vnhqh1h0iw",
    "HU": "https://gen.sendtric.com/countdown/c26pwb5mw7",
    "DK": "https://gen.sendtric.com/countdown/p5391jgpir",
    "CZ": "https://gen.sendtric.com/countdown/hlc3hxgx04",
    "FI": "https://gen.sendtric.com/countdown/r411ru79ke",
    "NO": "https://gen.sendtric.com/countdown/flzzx8v8xp",
    "SK": "https://gen.sendtric.com/countdown/ib4v461bmi",
    "BENL": "https://gen.sendtric.com/countdown/vyfwqa8x3m",
    "BEFR": "https://gen.sendtric.com/countdown/211v45q7s4",
    "RO": "https://gen.sendtric.com/countdown/vfabyxbely"
  }
};

export default new entities.Campaign({
  startId: 44561,
  name: 'Outdoor',
  date: '18.06.2026',
  issueCardId: 492565,
  lpId: 30565,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/MwTz6sx5UwVbKpeHrsbzEO/COPY-%7C-2026.06.18---Newsletter---Outdoor--Copy-?node-id=15001-258&t=WKqJIlwWhsgtrjOm-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FEE3BF',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FEE3BF', // unused
        alignment: 'left',
        type: 'paragraph',
        cta: {
          show: true,
          spaceAfter: 'newsletterBottom35px',
        }
      },
      Inside: {
        color: '#ffffff',
        backgroundColor: '#FF2F00',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FEE3BF',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FEE3BF', // unused
        alignment: 'left',
        type: 'paragraph',
        cta: {
          show: true,
          spaceAfter: 'newsletterBottom35px',
        }
      },
      Inside: {
        color: '#ffffff',
        backgroundColor: '#FF2F00',
        type: 'timer',
      },
    },
  ],
});
