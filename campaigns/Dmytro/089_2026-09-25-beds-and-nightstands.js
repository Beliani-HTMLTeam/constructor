// Campaign generated from form
const campaignTranslationsSheet = '2026::25.09.26 - Beds & Nightstands';

const tableQueries = [
  {
    "tableRange": "16",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "19",
    "name": "intro"
  },
  {
    "tableRange": "20:21",
    "name": "condition"
  },
  {
    "tableRange": "25:26",
    "name": "timer"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-25' }),
  TopImageTitle_src: translateImage({ value: '20260925_01.png' }),
  TopImage_src: getImageUrl('20260925_top_image.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-25' }),
  Banner_1: translateLink({ value: 'content/lp26-09-18' }),
  Banner_1_Image: translateImage({ value: '20260918b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-09-17' }),
  Banner_2_Image: translateImage({ value: '20260917b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-09-21' }),
  Intro_cta_href: "https://www.beliani.ch/bedroom-furniture/"
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#FFF4F2",
  alignment: "left",
  type: "paragraph",
  cta: {
    overrides: {
    },
    color: "#750000",
    spaceAfter: 'newsletterBottom35px',
  }
}


const TopImageTitle_data = {
  color: '#750000',
  backgroundColor: '#FFF4F2',
  type: 'standardLight',
};


const timer = {
  position: 'outsideTopImageTitle',
  deadline: '2026-08-30',
  freebies: getImageUrl('20260828free.png', true)
}

const categories = [
  {
    name: 'Beds',
    overrides: {

    },
    background: '#FFF4F2',
    color: '#000000',
    src: getImageUrl('20260925Category10.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom25px',
      color: "#750000"
    },
    numberColor: "#D6B3B3",
    paragraph: {
      show: false,
    },
    paddingTop: 30,
    line: {
      show: false
    },
    cta: {
      show: true,
      color: "#750000"
    },
    products: [
      // LUNAN
      {
        id: '676132',
        src: getImageUrl('20260925Category11.png', true),
      },
      // FLAVIGNAC
      {
        id: '820350',
        src: getImageUrl('20260925Category12.png', true),
      },
      // BAJONNA
      {
        id: '603256',
        src: getImageUrl('20260925Category13.png', true),
      },
      // BLAGNAC
      {
        id: '653984',
        src: getImageUrl('20260925Category14.png', true),
      },
    ],
  },
  {
    name: 'Mattresses',
    overrides: {

    },
    background: '#FFF4F2',
    color: '#000000',
    src: getImageUrl('20260925Category20.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom25px',
      color: "#750000"
    },
    numberColor: "#D6B3B3",
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    },
    cta: {
      show: true,
      color: "#750000"
    },
    products: [
      // MEMORY BALANCE PLUS
      {
        id: '102329',
        src: getImageUrl('20260925Category21.png', true),
      },
      // SILENT HYBRID 7 PLUS
      {
        id: '499421',
        src: getImageUrl('20260925Category22.png', true),
      },
      // SPRING CORE FIRM
      {
        id: '501013',
        src: getImageUrl('20260925Category23.png', true),
      },
      // FLEX DUO PLUS
      {
        id: '5874',
        src: getImageUrl('20260925Category24.png', true),
      },
    ],
  },
  {
    name: 'Bedside tables',
    overrides: {

    },
    background: '#FFF4F2',
    color: '#000000',
    src: getImageUrl('20260925Category30.jpg', true),
    href: 'https://www.beliani.ch/storage/bedside-tables/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom25px',
      color: "#750000"
    },
    numberColor: "#D6B3B3",
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    },
    cta: {
      show: true,
      color: "#750000"
    },
    products: [
      // COVENTRY
      {
        id: '570189',
        src: getImageUrl('20260925Category31.png', true),
      },
      // WALPOLE
      {
        id: '575724',
        src: getImageUrl('20260925Category32.png', true),
      },
      // SELAH
      {
        id: '553728',
        src: getImageUrl('20260925Category33.png', true),
      },
      // PEROTE
      {
        id: '354517',
        src: getImageUrl('20260925Category34.png', true),
      },
    ],
  },
  {
    name: 'Storage',
    overrides: {

    },
    background: '#FFF4F2',
    color: '#000000',
    src: getImageUrl('20260925Category40.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/storage/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom25px',
      color: "#750000"
    },
    numberColor: "#D6B3B3",
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    },
    cta: {
      show: true,
      color: "#750000"
    },
    products: [
      // NIVO
      {
        id: '525091',
        src: getImageUrl('20260925Category41.png', true),
      },
      // MICHIGAN
      {
        id: '384073',
        src: getImageUrl('20260925Category42.png', true),
      },
      // WALCOTT
      {
        id: '563188',
        src: getImageUrl('20260925Category43.png', true),
      },
      // KEITH
      {
        id: '691991',
        src: getImageUrl('20260925Category44.png', true),
      },
    ],
  }
];

export default new entities.Campaign({
  startId: "48021",
  name: "Beds & Nightstands",
  date: "25.09.2026",
  issueCardId: "531156",
  lpId: "32467",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/JPP7JKedYwqsHp2gIV6oKb/Newsletter-Beds---Nightstands----Up-to-XX--off---Friday-2026.09.25?node-id=0-1&t=L2AskAEJX1fTLPPv-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.AIRegularFridayNslt25_09, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFF4F2",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: '#F6E7E6',
        unitBackground: '#E3CCCC',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.AIRegularFridayNslt25_09, // User should change this
      css: types.CSS.LP,
      background: "#FFF4F2",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: '#F6E7E6',
        unitBackground: '#E3CCCC',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});