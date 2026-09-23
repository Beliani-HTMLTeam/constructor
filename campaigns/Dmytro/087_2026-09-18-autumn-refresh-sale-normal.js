// Campaign generated from form
const campaignTranslationsSheet = '2026::18.09.26 - Autumn Refresh Sale';

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
    "tableRange": "21:24",
    "name": "categories"
  },
  {
    "tableRange": "25:26",
    "name": "condition"
  },
  {
    "tableRange": "31:32",
    "name": "timer"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-18' }),
  TopImageTitle_src: translateImage({ value: '20260918_01.png' }),
  TopImage_src: getImageUrl('20260918_gif_1.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-18' }),
  Banner_1: translateLink({ value: 'content/lp26-09-11' }),
  Banner_1_Image: translateImage({ value: '20260911b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-09-10' }),
  Banner_2_Image: translateImage({ value: '20260910b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-09-14' }),
  Intro_cta_href: "https://www.beliani.ch/living-room-furniture/"
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#FFF0EA",
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
  backgroundColor: '#FFF0EA',
  type: 'twoSameLines',
};


const timer = {
  position: 'outsideTopImageTitle',
  deadline: '2026-09-20',
  freebies: getImageUrl('20260918free_normal.png', true)
}

const categories = [
  {
    name: 'Reading armchairs',
    overrides: {

    },
    background: '#FFF0EA',
    color: '#000000',
    src: getImageUrl('20260918Category10_normal.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      source: 'queries',
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
      // OTSBY 
      {
        id: '564268',
        src: getImageUrl('20260918Category11_normal.png', true),
      },
      // SKOVDE 
      {
        id: '516365',
        src: getImageUrl('20260918Category12_normal.png', true),
      },
      // AKRA
      {
        id: '686670',
        src: getImageUrl('20260918Category13_normal.png', true),
      },
      // BELLINGMO 
      {
        id: '659197',
        src: getImageUrl('20260918Category14_normal.png', true),
      },
    ],
  },
  {
    name: 'Indoor hosting',
    overrides: {
     
    },
    background: '#750000',
    color: '#ffffff',
    src: getImageUrl('20260918Category20_normal.jpg', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      source: 'queries',
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
      // LAKEVILLE 
      {
        id: '831269',
        src: getImageUrl('20260918Category21_normal.png', true),
      },
      // MOORE 
      {
        id: '633284',
        src: getImageUrl('20260918Category22_normal.png', true),
      },
      // MADOX 
      {
        id: '28028',
        src: getImageUrl('20260918Category23_normal.png', true),
      },
      // MINA 
      {
        id: '403407',
        src: getImageUrl('20260918Category24_normal.png', true),
      },
    ],
  },
  {
    name: 'Warm textiles',
    overrides: {

    },
    background: '#FFF0EA',
    color: '#000000',
    src: getImageUrl('20260918Category30_normal.jpg', true),
    href: 'https://www.beliani.ch/home-accessories/textiles/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      source: 'queries',
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
      // CHYAMA 
      {
        id: '460658',
        src: getImageUrl('20260918Category31_normal.png', true),
      },
      // VILLUR 
      {
        id: '189050',
        src: getImageUrl('20260918Category32_normal.png', true),
      },
      // JACARANDA 
      {
        id: '348997',
        src: getImageUrl('20260918Category33_normal.png', true),
      },
      // DELICE
      {
        id: '266956',
        src: getImageUrl('20260918Category34_normal.png', true),
      },
    ],
  },
  {
    name: 'Plush rugs',
    overrides: {

    },
    background: '#750000',
    color: '#ffffff',
    src: getImageUrl('20260918Category40_normal.jpg', true),
    href: 'https://www.beliani.ch/rugs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      source: 'queries',
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
      // KEVIREL 
      {
        id: '833146',
        src: getImageUrl('20260918Category41_normal.png', true),
      },
      // SAZOO 
      {
        id: '422824',
        src: getImageUrl('20260918Category42_normal.png', true),
      },
      // HARTZ
      {
        id: '817019',
        src: getImageUrl('20260918Category43_normal.png', true),
      },
      // SASNAK 
      {
        id: '423678',
        src: getImageUrl('20260918Category44_normal.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "47348",
  name: "Autumn Refresh Sale - Normal",
  date: "18.09.2026",
  issueCardId: "527721",
  lpId: "32014",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/GycpHf4xIn7EcPsjxKX7JB/Autumn-Refresh-Sale----Up-to-XX--off---Friday-2026.09.18?node-id=10006-426&t=eER7kTdOu9wTJCVA-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFF0EA",
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
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.LP,
      background: "#FFF0EA",
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
    },
  ],
});