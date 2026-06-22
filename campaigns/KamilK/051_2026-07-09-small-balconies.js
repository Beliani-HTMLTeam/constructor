// Campaign generated from form
const campaignTranslationsSheet = '2026::09.07.2026 - Small Balconies';

const tableQueries = [
  {
    tableRange: '16:17',
    name: 'TopImageTitle',
  },
  {
    tableRange: '18',
    name: 'intro',
  },
  {
    tableRange: '27:30',
    name: 'paragraphs',
  },
  {
    tableRange: '19:22',
    name: 'categories',
  },
  {
    tableRange: '23:26',
    name: 'categoryLinks',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
  {
    tableRange: '15:16',
    name: 'timer',
    tableName: '2026::Voucher - 06.07.26 -  Free outdoor rug',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-09' }),
  TopImageTitle_src: translateImage({ value: '20260709_01.png' }),

  TopImage_src: getImageUrl('20260709_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-07-09' }),

  Banner_2: translateLink({ value: 'content/lp26-07-01' }),
  Banner_2_Image: translateImage({ value: '20260701b.png' }),

  Banner_1: translateLink({ value: 'content/lp26-07-02' }),
  Banner_1_Image: translateImage({ value: '20260702b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-07-06' }),

  Intro_cta_href: "https://www.beliani.ch/outdoor-furniture/balcony-furniture/",
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
};

const categories = [
  {
    // name: 'Storage',
    src: getImageUrl('20260709_Cat00.jpg', true),
    // href: 'https://www.beliani.ch/hallway/storage/',
    background: '#F6E7E6',
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
      // CALCIANO
      {
        id: 619833,
        src: getImageUrl('20260709_Pic01.png', true),
      },
      // TUENNO
      {
        id: 465076,
        src: getImageUrl('20260709_Pic02.png', true),
      },
      // LASCARI
      {
        id: 805500,
        src: getImageUrl('20260709_Pic03.png', true),
      },
      // JAVA
      {
        id: 218036,
        src: getImageUrl('20260709_Pic04.png', true),
      },
    ],
  },
  {
    // name: 'Hallway seating',
    src: getImageUrl('20260709_Cat10.jpg', true),
    // href: 'https://www.beliani.ch/hallway/hallway-seating/hallway-benches/',
    background: '#FFE0D4',
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
      // CIGLIANO
      {
        id: 506587,
        src: getImageUrl('20260709_Pic11.png', true),
      },
      // TRIORA/ANDALO
      {
        id: 521366,
        src: getImageUrl('20260709_Pic12.png', true),
      },
      // TRENTO
      {
        id: 198628,
        src: getImageUrl('20260709_Pic13.png', true),
      },
      // COZZANA
      {
        id: 506226,
        src: getImageUrl('20260709_Pic14.png', true),
      },
    ],
  },
  {
    // name: 'Mirrors',
    src: getImageUrl('20260709_Cat20.jpg', true),
    // href: 'https://www.beliani.ch/hallway/mirrors/',
    background: '#F6E7E6',
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
      // CAPRI
      {
        id: 126877,
        src: getImageUrl('20260709_Pic21.png', true),
      },
      // TROPEA
      {
        id: 294750,
        src: getImageUrl('20260709_Pic22.png', true),
      },
      // TRESTINA
      {
        id: 198941,
        src: getImageUrl('20260709_Pic23.png', true),
      },
      // ORTIGIA
      {
        id: 294785,
        src: getImageUrl('20260709_Pic24.png', true),
      },
    ],
  },
  {
    // name: 'Console Tables',
    src: getImageUrl('20260709_Cat30.jpg', true),
    // href: 'https://www.beliani.ch/tables/console-tables/',
    background: '#FFE0D4',
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
      // TALAMONE
      {
        id: 522681,
        src: getImageUrl('20260709_Pic31.png', true),
      },
      // AMANTEA
      {
        id: 415683,
        src: getImageUrl('20260709_Pic32.png', true),
      },
      // FIJI
      {
        id: 62184,
        src: getImageUrl('20260709_Pic33.png', true),
      },
      // LAURETO
      {
        id: 414368,
        src: getImageUrl('20260709_Pic34.png', true),
      },
    ],
  },
];

const timer = {
  freebies: getImageUrl('20260709free.png', true),
  image: {
    "UK": "https://gen.sendtric.com/countdown/l1g38i68hz",
    "PL": "https://gen.sendtric.com/countdown/s4l2nx8qyp",
    "DE": "https://gen.sendtric.com/countdown/yvoinu7u6c",
    "AT": "https://gen.sendtric.com/countdown/69l2dulwd3",
    "CHDE": "https://gen.sendtric.com/countdown/pt7ehb3m1c",
    "NL": "https://gen.sendtric.com/countdown/2cxwx342c6",
    "FR": "https://gen.sendtric.com/countdown/g0kavc4z3f",
    "CHFR": "https://gen.sendtric.com/countdown/t5g784bpc1",
    "ES": "https://gen.sendtric.com/countdown/pz49azs6bw",
    "PT": "https://gen.sendtric.com/countdown/y5czfbyly7",
    "IT": "https://gen.sendtric.com/countdown/amxabx40qh",
    "DK": "https://gen.sendtric.com/countdown/owgrgivj45",
    "NO": "https://gen.sendtric.com/countdown/mq78bm35c8",
    "FI": "https://gen.sendtric.com/countdown/57h5tkvbqu",
    "SE": "https://gen.sendtric.com/countdown/7smmxba7yk",
    "CZ": "https://gen.sendtric.com/countdown/qyarbm2gbw",
    "SK": "https://gen.sendtric.com/countdown/n6igktyn65",
    "HU": "https://gen.sendtric.com/countdown/7vm7jdzdlc",
    "RO": "https://gen.sendtric.com/countdown/ns6eeelkyy",
    "BENL": "https://gen.sendtric.com/countdown/aw5kcota23",
    "BEFR": "https://gen.sendtric.com/countdown/nz1o8pg3pa"
  }
};

export default new entities.Campaign({
  startId: 45343,
  name: 'Small Balconies',
  date: '09.07.2026',
  issueCardId: 501096,
  lpId: 31008,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/64NWUIdWAogQ9nwew1pZtb/Newsletter-Small-Balconies---Thursday-2026.07.09--Copy-?node-id=2-2429&t=5nxWaV87XKs1NHlj-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#F6E7E6',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#F6E7E6', // unused
        alignment: 'left',
        type: 'paragraph',
        cta: {
          show: true,
        spaceAfter: 'newsletterBottom35px',
        }
      },
      Inside: {
        color: '#ffffff',
        backgroundColor: '#FD9000',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#F6E7E6',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#F6E7E6', // unused
        alignment: 'left',
        type: 'paragraph',
        cta: {
          show: true,
          spaceAfter: 'newsletterBottom35px',
        }
      },
      Inside: {
        color: '#ffffff',
        backgroundColor: '#FD9000',
        type: 'timer',
      },
    },
  ],
});
