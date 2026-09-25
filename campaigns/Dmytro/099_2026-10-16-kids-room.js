// Campaign generated from form
const campaignTranslationsSheet = '2026::16.10.26 - Kids Room';

const tableQueries = [
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
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-14' }),
  TopImageTitle_src: translateImage({ value: '20261016_01.png' }),
  TopImage_src: translateImage({ value: '20261016_img.png' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-16' }),
  Banner_1: translateLink({ value: 'content/lp26-10-09' }),
  Banner_1_Image: translateImage({ value: '20261009b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-10-10' }),
  Banner_2_Image: translateImage({ value: '20261010b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-10-13' }),
  Intro_cta_href: "https://www.beliani.ch/children-room/"
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#FFEBE2",
  alignment: "left",
  type: "paragraph",
  cta: {
    overrides: {
      
    },
    spaceAfter: 'newsletterBottom35px',
  }
}


const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEBE2',
  type: 'twoSameLines',
};


const timer = {
  position: 'afterBody',
  deadline: '2026-10-18',
  freebies: getImageUrl('20261016free.png', true)
}

const categories = [
  {
    name: 'Kids beds',
    overrides: {
      UK: "Beds",
      PL: "Łóżka"
    },
    background: '#FFEBE2',
    color: '#FF2F00',
    priceColor: "#750000",
    src: getImageUrl('20261016Category10.jpg', true),
    href: 'https://www.beliani.ch/children-room/kids-beds/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // METZ
      {
        id: '392645',
        src: getImageUrl('20261016Category11.png', true),
      },
      // BONNAC
      {
        id: '467604',
        src: getImageUrl('20261016Category12.png', true),
      },
      // CHADURIE
      {
        id: '840447',
        src: getImageUrl('20261016Category13.png', true),
      },
      // ANET
      {
        id: '412748',
        src: getImageUrl('20261016Category14.png', true),
      },
    ],
  },
  {
    name: 'Kids chairs and tables',
    overrides: {
      FI: "Lasten pöydät ja tuolit",
      UK: "Chairs and Tables",
      PL: "Krzesła i stoły"
    },
    background: '#FFEBE2',
    color: '#FF2F00',
    priceColor: "#750000",
    src: getImageUrl('20261016Category20.jpg', true),
    href: 'https://www.beliani.ch/children-room/kids-chairs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // LENAH
      {
        id: '814265',
        src: getImageUrl('20261016Category21.png', true),
      },
      // ZOAR
      {
        id: '609802',
        src: getImageUrl('20261016Category22.png', true),
      },
      // FARUM
      {
        id: '511456',
        src: getImageUrl('20261016Category23.png', true),
      },
      // YALGOO
      {
        id: '593975',
        src: getImageUrl('20261016Category24.png', true),
      },
    ],
  },

  {
    name: 'Kids Décor',
    overrides: {
      UK: "Décor",
      PL: "Dekoracje"
    },
    background: '#FFEBE2',
    color: '#FF2F00',
    priceColor: "#750000",
    src: getImageUrl('20261016Category30.jpg', true),
    href: 'https://www.beliani.ch/children-room/kids-decor/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // SAMBUR
      {
        id: '345581',
        src: getImageUrl('20261016Category31.png', true),
      },
      // BONNEVAL
      {
        id: '841541',
        src: getImageUrl('20261016Category32.png', true),
      },
      // YAMBA
      {
        id: '703620',
        src: getImageUrl('20261016Category33.png', true),
      },
      // ASHANTI
      {
        id: '346182',
        src: getImageUrl('20261016Category34.png', true),
      },
    ],
  },
  {
    name: 'Kids Rugs',
    overrides: {

    },
    background: '#FFEBE2',
    color: '#FF2F00',
    priceColor: "#750000",
    src: getImageUrl('20261016Category40.jpg', true),
    href: 'https://www.beliani.ch/children-room/kids-rugs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 0,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // TORTIE
      {
        id: '833620',
        src: getImageUrl('20261016Category41.png', true),
      },
      // TATARLI
      {
        id: '459108',
        src: getImageUrl('20261016Category42.png', true),
      },
      // BADHANI
      {
        id: '454679',
        src: getImageUrl('20261016Category43.png', true),
      },
      // BARUS
      {
        id: '396274',
        src: getImageUrl('20261016Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "48889",
  name: "Kids Room",
  date: "16.10.2026",
  issueCardId: "540896",
  lpId: "32982",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/LlQueZ60iKz5AEHBljptpk/2026.10.16---Newsletter---Kids-Room?node-id=0-1&t=5gq8sUdnnOECz1VN-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt16_10, // User should change this
      css: types.CSS.NS_AI_16_10,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFEBE2",
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
        backgroundColor: '#FD9000',
        unitBackground: '#FECD8C',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
      disableTopImageTitle: true,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt16_10, // User should change this
      css: types.CSS.LP_AI_16_10,
      background: "#FFEBE2",
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
        backgroundColor: '#FD9000',
        unitBackground: '#FECD8C',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
      disableTopImageTitle: true,
    },
  ],
});