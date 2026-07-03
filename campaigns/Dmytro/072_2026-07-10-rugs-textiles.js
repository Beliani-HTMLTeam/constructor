import { createTimer } from "@/templates/DimaSrc/newsletter_regular_friday/utils/timerConfig";

// Campaign generated from form
const campaignTranslationsSheet = '2026::10.07.2026 - Rugs & Textiles';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20",
    "name": "intro"
  },
  {
    "tableRange": "21:22",
    "name": "condition"
  },
  {
    "tableRange": "27:28",
    "name": "timer"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-10' }),
  TopImageTitle_src: translateImage({ value: '20260710_01.png' }),
  TopImage_src: getImageUrl('20260710gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-07-10' }),
  Banner_1: translateLink({ value: 'content/lp26-07-02' }),
  Banner_1_Image: translateImage({ value: '20260702b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-07-01' }),
  Banner_2_Image: translateImage({ value: '20260701b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-07-06' }),
  Intro_cta_href:  "https://www.beliani.ch/textiles/"
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEFD9',
  type: 'twoSameLines',
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#FFEFD9",
  alignment: "left",
  type: "paragraph",
  cta: {
    overrides: {
    FI: "Tutustu valikoimaan"
    },
    spaceAfter: 'newsletterBottom35px',
  }
}


const timer = createTimer({
  deadline: '2026-07-10T23:59:00',
  freebies: getImageUrl('20260710free.png', true),
  background: '#FD9000',      // Orange background for timer section
  color: '#ffffff',           // White text for timer section
  
  // Timer numbers appearance
  timerBg: '#000000',         // Black background for timer numbers
  timerColor: '#ffffff',      // White numbers
  timerLabel: '#000000',      // Black labels (days, hours, etc.)
  isCtaVisible: true,
  isWithTitles: true,
  position: 'outsideTopImageTitle',
})

const categories = [
  {
    name: 'Rugs',
    background: '#FFEFD9',
    color: '#000000',
    src: getImageUrl('20260710Category10.jpg', true),
    href: 'https://www.beliani.ch/rugs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 60,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // DEMIRCI 
      {
        id: '305433',
        src: getImageUrl('20260710Category11.png', true),
      },
      // DEMRE 
      {
        id: '66726',
        src: getImageUrl('20260710Category12.png', true),
      },
      // BISMIL 
      {
        id: '709614',
        src: getImageUrl('20260710Category13.png', true),
      },
      // SOGUT
      {
        id: '376041',
        src: getImageUrl('20260710Category14.png', true),
      },
    ],
  },
  {
    name: 'Scatter Cushions',
    overrides: {
    
    },
    background: '#FFF5F1',
    color: '#000000',
    src: getImageUrl('20260710Category20.jpg', true),
    href: 'https://www.beliani.ch/textiles/scatter-cushions/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
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
      // INULA 
      {
        id: '356856',
        src: getImageUrl('20260710Category21.png', true),
      },
      // INCANA 
      {
        id: '356768',
        src: getImageUrl('20260710Category22.png', true),
      },
      // PLEIONE 
      {
        id: '353105',
        src: getImageUrl('20260710Category23.png', true),
      },
      // JACARANDA 
      {
        id: '348745',
        src: getImageUrl('20260710Category24.png', true),
      },
    ],
  },
  {
    name: 'Blankets & Throws',
    background: '#FFEFD9',
    color: '#000000',
    src: getImageUrl('20260710Category30.jpg', true),
    href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
    hrefOverride: {
      CZ: 'https://www.beliani.cz/textilne-doplnky/deky-a-prehozy/'
    },
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
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
      // CHAGYL 
      {
        id: '696016',
        src: getImageUrl('20260710Category31.png', true),
      },
      // VELLA
      {
        id: '560141',
        src: getImageUrl('20260710Category32.png', true),
      },
      // YERBENT 
      {
        id: '503120',
        src: getImageUrl('20260710Category33.png', true),
      },
      // DEURALI 
      {
        id: '351214',
        src: getImageUrl('20260710Category34.png', true),
      },
    ],
  },
  {
    name: 'Outdoor cushions',
    background: '#FFF5F1',
    color: '#000000',
    src: getImageUrl('20260710Category40.jpg', true),
    href: 'https://www.beliani.ch/outdoor-textiles/cushions-for-garden/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
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
      // LAGARO 
      {
        id: '194546',
        src: getImageUrl('20260710Category41.png', true),
      },
      // KASTOS 
      {
        id: '225065',
        src: getImageUrl('20260710Category42.png', true),
      },
      // ELATI 
      {
        id: '307691',
        src: getImageUrl('20260710Category43.png', true),
      },
      // SWAY 
      {
        id: '613111',
        src: getImageUrl('20260710Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "44891",
  name: "Rugs & Textiles",
  date: "10.07.2026",
  issueCardId: "501171",
  lpId: "30738",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "figma.com/design/Xk9PqwPRL6IJllmKuObwzz/Newsletter-Rugs---Textiles---Friday-2026.07.10?node-id=0-1&t=bl09s9pyziaKAyyb-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFEFD9",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#FD9000",
        type: "timer", isWithTitles: true,
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFEFD9",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#FD9000",
        type: "timer", isWithTitles: true,
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});