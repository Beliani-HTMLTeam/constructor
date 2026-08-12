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
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-04' }),
  TopImage_src: translateImage({ value: '20260904_top_image_chat.png' }),
  TopImage_href: translateLink({ value: 'content/lp26-09-04' }),
  Banner_1: translateLink({ value: 'content/lp26-08-28' }),
  Banner_1_Image: translateImage({ value: '20260828b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-27' }),
  Banner_2_Image: translateImage({ value: '20260827b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-31' }),
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#F6E7E6",
  alignment: "left",
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
    background: '#FFCCB7',
    color: '#750000',
    href: 'https://www.beliani.ch/textiles/scatter-cushions/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      color: '#750000'
    },
    paragraph: {
      show: true,
      spaceBefore: 'newsletterBottom10px',
      spaceAfter: 'newsletterBottom25px',
    },
    paddingTop:40,
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
        src: getImageUrl('20260904Category11_chat.png', true),
        background: "#FFFFFF"
      },
      // Rosea
      {
        id: '554294',
        src: getImageUrl('20260904Category12_chat.png', true),
        background: "#FFF2ED"
      },
      // Knema
      {
        id: '693337',
        src: getImageUrl('20260904Category13_chat.png', true),
        background: "#FFF2ED"
      },
      // Alstonia
      {
        id: '692859',
        src: getImageUrl('20260904Category14_chat.png', true),
        background: "#FFFFFF"
      },
    ],
  },
  {
    name: 'Rugs',
    overrides: {
    },
    background: '#750000',
    color: '#ffffff',
    href: 'https://www.beliani.ch/rugs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      color: '#ffffff'
    },
    paragraph: {
      show: true,
      spaceBefore: 'newsletterBottom10px',
      spaceAfter: 'newsletterBottom25px',
    },
    paddingTop: 40,
    line: {
      show: false
    }, showPrices: true,
    showName: true,
    cta: {
      show: true,
      color: '#750000',    type: 'ai',
    },
    product: {
      titleColor: '#750000',
      priceColor: '#FF2F00',
    },
    products: [
      // Dawa
      {
        id: '820623',
        src: getImageUrl('20260904Category21_chat.png', true),
        background: "#FFEBE6"
      },
      // Hartz
      {
        id: '821418',
        src: getImageUrl('20260904Category22_chat.png', true),
        background: "#FFFFFF"
      },
      // Vasco
      {
        id: '728746',
        src: getImageUrl('20260904Category23_chat.png', true),
        background: "#FFFFFF"
      },
      // Demirci
      {
        id: '427463',
        src: getImageUrl('20260904Category24_chat.png', true),
        background: "#FFEBE6"
      },
    ],
  },
  {
    name: 'Frames & Wall Art',
    overrides: {
    },
    background: '#FFCCB7',
    color: '#750000',
    href: 'https://www.beliani.ch/accessories-decor/wall-art-frames/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      color: '#750000'
    },
    paragraph: {
      show: true,
      spaceBefore: 'newsletterBottom10px',
      spaceAfter: 'newsletterBottom25px',
    },
    paddingTop: 40,
    line: {
      show: false
    }, showPrices: true,
    showName: true,
    cta: {
      show: true,
      color: '#750000',    type: 'ai',
    },
    product: {
      titleColor: '#750000',
      priceColor: '#FF2F00',
    },
    products: [
      // Coleraine
      {
        id: '734106',
        src: getImageUrl('20260904Category31_chat.png', true),
        background: "#FFFFFF"
      },
      // Omagh
      {
        id: '734012',
        src: getImageUrl('20260904Category32_chat.png', true),
        background: "#FFF2ED"
      },
      // Tuam
      {
        id: '734241',
        src: getImageUrl('20260904Category33_chat.png', true),
        background: "#FFF2ED"
      },
      // Wexford
      {
        id: '734184',
        src: getImageUrl('20260904Category34_chat.png', true),
        background: "#FFFFFF"
      },
    ],
  },
  {
    name: 'Mirrors',
    overrides: {
    },
    background: '#750000',
    color: '#ffffff',
    href: 'https://www.beliani.ch/home-accessories/mirrors/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      color: '#ffffff'
    },
    paragraph: {
      show: true,
      spaceBefore: 'newsletterBottom10px',
      spaceAfter: 'newsletterBottom25px',
    },
    showPrices: true,
    showName: true,
    paddingTop: 40,
    line: {
      show: false
    },
    cta: {
      show: true,
      color: '#750000',    type: 'ai',
    },
    product: {
      titleColor: '#750000',
      priceColor: '#FF2F00',
    },
    products: [
      // Anizy
      {
        id: '819658',
        src: getImageUrl('20260904Category41_chat.png', true),
        background: "#FFEBE6"
      },
      // Mancey
      {
        id: '818009',
        src: getImageUrl('20260904Category42_chat.png', true),
        background: "#FFFFFF"
      },
      // Suin
      {
        id: '818135',
        src: getImageUrl('20260904Category43_chat.png', true),
        background: "#FFFFFF"
      },
      // Tawley
      {
        id: '700343',
        src: getImageUrl('20260904Category44_chat.png', true),
        background: "#FFEBE6"
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "47252",
  name: "Home Accessories - Chat",
  date: "04.09.2026",
  issueCardId: "522965",
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
      template: templates.AIRegularFridayNslt2Chat, // User should change this
      css: types.CSS.NS_AI_04_09_CHAT,
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
      template: templates.AIRegularFridayNslt2Chat, // User should change this
      css: types.CSS.LP_AI_04_09_CHAT,
      background: "#F6E7E6",
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