// Campaign generated from form
const campaignTranslationsSheet = '2026::02.09.26 - Outdoor Lighting & Lanterns';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20",
    "name": "subtitle"
  },
  {
    "tableRange": "21",
    "name": "intro"
  },
  {
    "tableRange": "22",
    "name": "introCTA"
  },
  {
    "tableRange": "23",
    "name": "categories"
  },
  {
    "tableRange": "24:27",
    "name": "paragraphs"
  },
  {
    "tableRange": "28",
    "name": "additionalSubtitle"
  },
  {
    "tableRange": "29:30",
    "name": "condition"
  }
];

const links = {
  TopImage_src: getImageUrl('20260902Main.jpg', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-02' }),
  Banner_1: translateLink({ value: 'content/lp26-08-20' }),
  Banner_1_Image: translateImage({ value: '20260820b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-27' }),
  Banner_2_Image: translateImage({ value: '20260827b.png' }),
  introCTA_href: "https://www.beliani.ch/garden-lighting/",
};

const Intro_data = {
  background: "#750000",
  subtitleColor: "#FFCCB7",
  titleColor: "#FFFFFF",
  paragraphColor: "#FFFFFF",
  cta: {
    background: "#FD9000",
    color: "#750000"
  }
}

const categories = [
  {
    name: 'Outdoor lamps',
    overrides: {
      HU: "Kültéri világítás"
    },
    src: getImageUrl('20260902Category10.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/garden-lighting/',
    background: '#F6E7E6',
    container: "newsletterContainer25px",
    gapBetweenHorizontal: '7_5',
    color: '#000000',
    layout: 'wednesday',
    type: 'grid',
    cta: {
      visible: true,
      text: 'Shop now',
      background: '#750000',
      color: '#F6E7E6'
    },
    paddingTop: 0,
    title: {
      position: 'beforeImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom40px',
      spaceAfter: 'newsletterBottom10px',
      color: '#750000',
      numberColor: '#FD9000'
    },
    paragraph: {
      show: false,
      position: 'beforeImg',
      align: 'center',
      spaceAfter: 'newsletterBottom25px',
    },
    product: {
      align: 'left',
      prices: true,
      name: true,
      borderWidth: 1,
      nameColor: "#750000",
      borderColor: '#FFCCB7',
      pricesColor: '#FF2F00',
      background: '#FFFFFF',
      spaceAfter: 'newsletterBottom15px',
    },
    products: [
      // TIZU
      {
        id: '562022',
        src: getImageUrl('20260902Category11.png', true),
     
      },
      // TANGON
      {
        id: '562174',
        src: getImageUrl('20260902Category12.png', true),
       
      },
      // KULSI
      {
        id: '561813',
        src: getImageUrl('20260902Category13.png', true),
  
      },
      // ROSALIE
      {
        id: '396479',
        src: getImageUrl('20260902Category14.png', true),
       
      },
    ],
  },
  {
    name: 'Outdoor Table Lamps',
    src: getImageUrl('20260902Category20.jpg', true),
    href: 'https://www.beliani.ch/garden-lighting/outdoor-table-lamps/',
    background: '#F6E7E6',
    container: "newsletterContainer25px",
    gapBetweenHorizontal: '7_5',
    color: '#000000',
    layout: 'wednesday',
    type: 'grid',
    cta: {
      visible: true,
      text: 'Shop now',
      background: '#750000',
      color: '#F6E7E6'
    },
    paddingTop: 0,
    title: {
      position: 'beforeImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom40px',
      spaceAfter: 'newsletterBottom10px',
      color: '#750000',
      numberColor: '#FD9000'
    },
    paragraph: {
      show: false,
      position: 'beforeImg',
      align: 'center',
      spaceAfter: 'newsletterBottom25px',
    },
    product: {
      align: 'left',
      prices: true,
      name: true,
      borderWidth: 1,
      nameColor: "#750000",
      borderColor: '#FFCCB7',
      pricesColor: '#FF2F00',
      background: '#FFFFFF',
      spaceAfter: 'newsletterBottom15px',
    },
    products: [
      // MODJO
      {
        id: '695472',
        src: getImageUrl('20260902Category21.png', true),
      },
      // ALVIELA
      {
        id: '559170',
        src: getImageUrl('20260902Category22.png', true),
      },
      // VOUGA
      {
        id: '559132',
        src: getImageUrl('20260902Category23.png', true),
      },
      // JOANES
      {
        id: '561206',
        src: getImageUrl('20260902Category24.png', true),
      },
    ],
  },
  {
    name: 'Outdoor Decorative Lamps',
    src: getImageUrl('20260902Category30.jpg', true),
    href: 'https://www.beliani.ch/garden-lighting/outdoor-decorative-lamps/',
    background: '#F6E7E6',
    container: "newsletterContainer25px",
    gapBetweenHorizontal: '7_5',
    color: '#000000',
    layout: 'wednesday',
    type: 'grid',
    cta: {
      visible: true,
      text: 'Shop now',
      background: '#750000',
      color: '#F6E7E6'
    },
    paddingTop: 0,
    title: {
      position: 'beforeImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom40px',
      spaceAfter: 'newsletterBottom10px',
      color: '#750000',
      numberColor: '#FD9000'
    },
    paragraph: {
      show: false,
      position: 'beforeImg',
      align: 'center',
      spaceAfter: 'newsletterBottom25px',
    },
    product: {
      align: 'left',
      prices: true,
      name: true,
      borderWidth: 1,
      nameColor: "#750000",
      borderColor: '#FFCCB7',
      pricesColor: '#FF2F00',
      background: '#FFFFFF',
      spaceAfter: 'newsletterBottom15px',
    },
    products: [
      // SABANAS
      {
        id: '588724',
        src: getImageUrl('20260902Category31.png', true),
      },
      // LAGARTO
      {
        id: '588727',
        src: getImageUrl('20260902Category32.png', true),
      },
      // VULETAS
      {
        id: '588725',
        src: getImageUrl('20260902Category33.png', true),
      },
      // LOBAINA
      {
        id: '588729',
        src: getImageUrl('20260902Category34.png', true),
      },
    ],
  },
  {
    name: 'Lanterns',
    overrides: {
      HU: "Kerti lámpások"
    },
    src: getImageUrl('20260902Category40.jpg', true),
    href: 'https://www.beliani.ch/garden-accessories/garden-lanterns/',
    background: '#F6E7E6',
    container: "newsletterContainer25px",
    gapBetweenHorizontal: '7_5',
    color: '#000000',
    layout: 'wednesday',
    type: 'grid',
    cta: {
      visible: true,
      text: 'Shop now',
      background: '#750000',
      color: '#F6E7E6'
    },
    paddingTop: 0,
    title: {
      position: 'beforeImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom40px',
      spaceAfter: 'newsletterBottom10px',
      color: '#750000',
      numberColor: '#FD9000'
    },
    paragraph: {
      show: false,
      position: 'beforeImg',
      align: 'center',
      spaceAfter: 'newsletterBottom25px',
    },
    product: {
      align: 'left',
      prices: true,
      name: true,
      borderWidth: 1,
      nameColor: "#750000",
      borderColor: '#FFCCB7',
      pricesColor: '#FF2F00',
      background: '#FFFFFF',
      spaceAfter: 'newsletterBottom15px',
    },
    products: [
      // LUMBIS
      {
        id: '325483',
        src: getImageUrl('20260902Category41.png', true),
      },
      // TAHITI
      {
        id: '113574',
        src: getImageUrl('20260902Category42.png', true),
      },
      // BINTAN
      {
        id: '199499',
        src: getImageUrl('20260902Category43.png', true),
      },
      // TONGA
      {
        id: '121559',
        src: getImageUrl('20260902Category44.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    subtitle: {
      show: true,
      color: "#FF2F00",
      spaceAfter: "newsletterBottom10px",
      className: "newsletterWednesdayAdditionalSubtitle",
    },
    // src: getImageUrl('20260311_Cat30.png', true),
    // href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
    background: '#F6E7E6',
    color: '#750000',
    type: 'newcategorytiles',
    cta: false,
    paddingTop: 80,
    spaceAfter: 0,
    title: {
      className: 'newsletterAditionalTitle',
      align: 'left',
      show: true,
      color: "#750000"
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
      background: '#FFCCB7',
      color: "#750000"
    },
    tiles: [
      {
        name: 'Outdoor cushions',
        src: getImageUrl('20260902Additional1.png', true),
        href: 'https://www.beliani.ch/outdoor-textiles/outdoor-cushions/',
      },
      {
        name: 'Blankets',
        src: getImageUrl('20260902Additional2.png', true),
        href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
        hrefOverrides: {},
      },
      {
        name: 'Fire pits',
        src: getImageUrl('20260902Additional3.png', true),
        href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
        hrefOverrides: {},
      },
      {
        name: 'Patio heaters',
        src: getImageUrl('20260902Additional4.png', true),
        href: 'https://www.beliani.ch/garden-accessories/patio-heaters/',
        hrefOverrides: {},
      },
    ],
  },
];


export default new entities.Campaign({
  startId: "46769",
  name: "Outdoor Lighting & Lanterns",
  date: "02.09.2026",
  issueCardId: "521106",
  lpId: "31730",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/zMK1zyOkjGeSLbgbrJgEa2/2026.09.02---Newsletter---Outdoor-Lighting---Lanterns?node-id=10001-5178&t=F0fZOyLW5qiiese1-1",
  templates: [
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.AIWednesday, // User should change this

      css: types.CSS.NS_AI_02_09,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      intro: Intro_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.AIWednesday, // User should change this

      css: types.CSS.LP_AI_02_09,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      intro: Intro_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});