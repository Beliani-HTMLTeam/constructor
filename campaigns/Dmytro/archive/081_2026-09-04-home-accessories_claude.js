// Campaign generated from form
const campaignTranslationsSheet = '2026::04.09.26 - Home Accessories';

const tableQueries = [
  {
    "tableRange": "16:17",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "23",
    "name": "intro"
  },
  {
    "tableRange": "24:27",
    "name": "paragraph"
  },
  {
    "tableRange": "28:29",
    "name": "condition"
  },
  {
    "tableRange": "34:35",
    "name": "timer"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-04-ta' }),
  TopImage_src: translateImage({ value: '20260904_top_image_claude.png' }),
  TopImage_href: translateLink({ value: 'content/lp26-09-04-ta' }),
  Banner_1: translateLink({ value: 'content/lp26-08-28' }),
  Banner_1_Image: translateImage({ value: '20260828b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-27' }),
  Banner_2_Image: translateImage({ value: '20260827b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-31' }),
};

const intro_data = {
  color: "#750000",
  backgroundColor: "#FFFFFF",
  alignment: "center",
  type: "paragraph",
  tableContainerClass: "newsletterContainer55px",
}


const timer = {
  position: 'outsideTopImageTitle',
  deadline: '2026-09-06',
  freebies: getImageUrl('20260904free.png', true)
}

const categories = [
  {
    name: 'Scatter Cushions',
    overrides: {
    },
    background: '#FFFFFF',
    color: '#750000',
    src: getImageUrl('20260904Category10_claude.jpg', true),
    href: 'https://www.beliani.ch/textiles/scatter-cushions/',
    type: 'linegrid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      color: '#750000'
    },
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    },
    cta: {
      show: true,
      background: '#FF2F00',
      color: '#FFFFFF',
      type: 'ai',
    }, showPrices: true,
    showName: true,
    product: {
      titleColor: '#750000',
      priceColor: '#FF2F00',
    },
    products: [
      // INCANA
      {
        id: '356768',
        src: getImageUrl('20260904Category11_claude.png', true),
      },
      // Rosea
      {
        id: '554294',
        src: getImageUrl('20260904Category12_claude.png', true),
      },
      // Knema
      {
        id: '693337',
        src: getImageUrl('20260904Category13_claude.png', true),
      },
      // Alstonia
      {
        id: '692859',
        src: getImageUrl('20260904Category14_claude.png', true),
      },
    ],
  },
  {
    name: 'Rugs',
    overrides: {
    },
    background: '#F2E6E6',
    color: '#750000',
    src: getImageUrl('20260904Category20_claude.jpg', true),
    href: 'https://www.beliani.ch/rugs/',
    type: 'linegrid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      color: '#750000'
    },
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    }, showPrices: true,
    showName: true,
    cta: {
      show: true,
      background: '#FF2F00',
      color: '#FFFFFF',    type: 'ai',
    },
    product: {
      titleColor: '#750000',
      priceColor: '#FF2F00',
    },
    products: [
      // Dawa
      {
        id: '820623',
        src: getImageUrl('20260904Category21_claude.png', true),
      },
      // Hartz
      {
        id: '821418',
        src: getImageUrl('20260904Category22_claude.png', true),
      },
      // Vasco
      {
        id: '728746',
        src: getImageUrl('20260904Category23_claude.png', true),
      },
      // Demirci
      {
        id: '427463',
        src: getImageUrl('20260904Category24_claude.png', true),
      },
    ],
  },
  {
    name: 'Frames & Wall Art',
    overrides: {
      FI: "Taulut ja kehykset"
    },
    background: '#FFFFFF',
    color: '#750000',
    src: getImageUrl('20260904Category30_claude.jpg', true),
    href: 'https://www.beliani.ch/accessories-decor/wall-art-frames/',
    type: 'linegrid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      color: '#750000'
    },
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    }, showPrices: true,
    showName: true,
    cta: {
      show: true,
      background: '#FF2F00',
      color: '#FFFFFF',    type: 'ai',
    },
    product: {
      titleColor: '#750000',
      priceColor: '#FF2F00',
    },
    products: [
      // Coleraine
      {
        id: '734106',
        src: getImageUrl('20260904Category31_claude.png', true),
      },
      // Omagh
      {
        id: '734012',
        src: getImageUrl('20260904Category32_claude.png', true),
      },
      // Tuam
      {
        id: '734241',
        src: getImageUrl('20260904Category33_claude.png', true),
      },
      // Wexford
      {
        id: '734184',
        src: getImageUrl('20260904Category34_claude.png', true),
      },
    ],
  },
  {
    name: 'Mirrors',
    overrides: {
    },
    background: '#F2E6E6',
    color: '#750000',
    src: getImageUrl('20260904Category40_claude.jpg', true),
    href: 'https://www.beliani.ch/home-accessories/mirrors/',
    type: 'linegrid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      color: '#750000'
    },
    paragraph: {
      show: false,
    },
    showPrices: true,
    showName: true,
    paddingTop: 0,
    line: {
      show: false
    },
    cta: {
      show: true,
      background: '#FF2F00',
      color: '#FFFFFF',    type: 'ai',
    },
    product: {
      titleColor: '#750000',
      priceColor: '#FF2F00',
    },
    products: [
      // Anizy
      {
        id: '819658',
        src: getImageUrl('20260904Category43_claude.png', true),
      },
      // Mancey
      {
        id: '818009',
        src: getImageUrl('20260904Category42_claude.png', true),
      },
      // Suin
      {
        id: '818135',
        src: getImageUrl('20260904Category41_claude.png', true),
      },
      // Tawley
      {
        id: '700343',
        src: getImageUrl('20260904Category44_claude.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "46897",
  name: "Home Accessories - Claude",
  date: "04.09.2026",
  issueCardId: "522965",
  lpId: "31817",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/LsLwQchsy0yCaE2KUDj5uz/2026.09.04---Newsletter-Newsletter---Home-Accessories?node-id=0-1&t=qpMiulmQ7rLWKr6P-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.AIRegularFridayNslt2, // User should change this
      css: types.CSS.NS_AI_04_09,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFFFFF",
      color: "#750000",
      wrapper: types.WRAPPER,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#750000',
        unitBackground: '#AC6666',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.AIRegularFridayNslt2, // User should change this
      css: types.CSS.LP_AI_04_09,
      background: "#FFFFFF",
      color: "#750000",
      translationsSpreadsheet: campaignTranslationsSheet,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#750000',
        unitBackground: '#AC6666',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});