// Campaign generated from form
const campaignTranslationsSheet = '2026::31.07.26 - Bathroom';

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
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-31' }),
  TopImageTitle_src: translateImage({ value: '20260731_01.png' }),
  TopImage_src: getImageUrl('20260731topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-07-31' }),
  Banner_1: translateLink({ value: 'content/lp26-07-22' }),
  Banner_1_Image: translateImage({ value: '20260722b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-07-23' }),
  Banner_2_Image: translateImage({ value: '20260723b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-07-27' }),
  Intro_cta_href:  "https://www.beliani.ch/bathroom-furniture/"
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFF4E6',
  type: 'twoSameLines',
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#FFF4E6",
  alignment: "left",
  type: "paragraph",
  cta: {
    overrides: {
    FI: "Tutustu valikoimaan"
    },
    spaceAfter: 'newsletterBottom35px',
  }
}

const timer ={
  position: 'outsideTopImageTitle',
  deadline: '2026-08-02',
  freebies: getImageUrl('20260731free.png', true)
}

const categories = [
  {
    name: 'Bathtubs',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260731Category10.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/',
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
      // LED CURACAO
      {
        id: '96886',
        src: getImageUrl('20260731Category11.png', true),
      },
      // LED CALAMA
      {
        id: '202262',
        src: getImageUrl('20260731Category12.png', true),
      },
      // LED HAVANA
      {
        id: '255049',
        src: getImageUrl('20260731Category13.png', true),
      },
      // GOCTA
      {
        id: '415073',
        src: getImageUrl('20260731Category14.png', true),
      },
    ],
  },
  {
    name: 'Basins and Accessories',
    overrides: {
      FI: "Pesualtaat ja tarvikkeet"
    },
    background: '#FBF3F3',
    color: '#000000',
    src: getImageUrl('20260731Category20.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/basins/',
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
      // MANIS
      {
        id: '511022',
        src: getImageUrl('20260731Category21.png', true),
      },
      // GELDO
      {
        id: '509817',
        src: getImageUrl('20260731Category22.png', true),
      },
      // GELDO
      {
        id: '509708',
        src: getImageUrl('20260731Category23.png', true),
      },
      // XERT
      {
        id: '510572',
        src: getImageUrl('20260731Category24.png', true),
      },
    ],
  },
  {
    name: 'Storage',
    overrides: {
      FR: "Meubles de salle de bain",
      CHFR: "Meubles de salle de bain",
      BEFR: "Meubles de salle de bain",
      SK: "Úložný nábytok do kúpeľne",
      HU: "Tárolók fürdőszobába"
    },
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260731Category30.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-storage/',
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
      // GUATAVITA
      {
        id: '660737',
        src: getImageUrl('20260731Category31.png', true),
      },
      // RUPANCO
      {
        id: '617041',
        src: getImageUrl('20260731Category32.png', true),
      },
      // OKARCHE
      {
        id: '684986',
        src: getImageUrl('20260731Category33.png', true),
      },
      // ALAMOS
      {
        id: '588904',
        src: getImageUrl('20260731Category34.png', true),
      },
    ],
  },
  {
    name: 'Accessories',
    overrides: {
      FI: "Kylpyhuonetarvikkeet",
      FR: "Accessoires de salle de bain",
      CHFR: "Accessoires de salle de bain",
      BEFR: "Accessoires de salle de bain",
      SK: "Kúpeľňové doplnky",
      HU: "Fürdőszobai kiegészítők"
    },
    background: '#FBF3F3',
    color: '#000000',
    src: getImageUrl('20260731Category40.jpg', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-accessories/',
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
      // VILCANOTA
      {
        id: '636400',
        src: getImageUrl('20260731Category41.png', true),
      },
      // KOMARI 
      {
        id: '370072',
        src: getImageUrl('20260731Category42.png', true),
      },
      // SOACHA 
      {
        id: '312858',
        src: getImageUrl('20260731Category43.png', true),
      },
      // CHARRAS 
      {
        id: '311918',
        src: getImageUrl('20260731Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "45973",
  name: "Bathroom",
  date: "31.07.2026",
  issueCardId: "510250",
  lpId: "31316",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/FieuK3VuJ8ZxPMNMRwq5bb/Newsletter-bathroom.---Friday-2026.07.31?node-id=0-1&t=JlYLDrp95793kkth-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFF4E6",
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
      background: "#FFF4E6",
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
        type: "timer",
      },
      intro:intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});