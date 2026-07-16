// Campaign generated from form
const campaignTranslationsSheet = '2026::07.08.2026 - Dining Room Sale';

const tableQueries = [
  {
    "tableRange": "16:17",
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
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-07' }),
  TopImageTitle_src: translateImage({ value: '20260807_01.png' }),
  TopImage_src: getImageUrl('20260807topimage.jpg', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-07' }),
  Banner_1: translateLink({ value: 'content/lp26-07-29' }),
  Banner_1_Image: translateImage({ value: '20260729b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-07-31' }),
  Banner_2_Image: translateImage({ value: '20260731b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-04' }),
  Intro_cta_href: "https://www.beliani.ch/dining-room-furniture/"
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#EAD9D9",
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
  backgroundColor: '#EAD9D9',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260807free.png', true),
  background: '#F6E7E6',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "UK": "https://gen.sendtric.com/countdown/z12a1da4c3",
    "PL": "https://gen.sendtric.com/countdown/uxu8813h0j",
    "DE": "https://gen.sendtric.com/countdown/144a8u8bjq",
    "AT": "https://gen.sendtric.com/countdown/w6ad0669i8",
    "CHDE": "https://gen.sendtric.com/countdown/5x52r4xard",
    "NL": "https://gen.sendtric.com/countdown/5dq7o4gb9j",
    "FR": "https://gen.sendtric.com/countdown/7p1y4otqcl",
    "CHFR": "https://gen.sendtric.com/countdown/kg1xzbm3fz",
    "ES": "https://gen.sendtric.com/countdown/04f81jefmo",
    "PT": "https://gen.sendtric.com/countdown/ek3bxdoacg",
    "IT": "https://gen.sendtric.com/countdown/sjvq8b69w6",
    "DK": "https://gen.sendtric.com/countdown/xxcnupaaan",
    "NO": "https://gen.sendtric.com/countdown/7y7v0uelp5",
    "FI": "https://gen.sendtric.com/countdown/w0mcedpk23",
    "SE": "https://gen.sendtric.com/countdown/z7qa87j0uo",
    "CZ": "https://gen.sendtric.com/countdown/wv3le7kiot",
    "SK": "https://gen.sendtric.com/countdown/kwrpaqdktz",
    "HU": "https://gen.sendtric.com/countdown/oysleeztkb",
    "RO": "https://gen.sendtric.com/countdown/oglg1l6j5k",
    "BENL": "https://gen.sendtric.com/countdown/01xbgsb0mq",
    "BEFR": "https://gen.sendtric.com/countdown/ramlcvej5k"
},
};

const categories = [
  {
    name: 'Dining tables',
    overrides: {
     
    },
    background: '#EAD9D9',
    color: '#000000',
    src: getImageUrl('20260807Category10.jpg', true),
    href: 'https://www.beliani.ch/tables/dining-tables/',
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
      // MADOX
      {
        id: '389465',
        src: getImageUrl('20260807Category11.png', true),
      },
      // OYEN
      {
        id: '568058',
        src: getImageUrl('20260807Category12.png', true),
      },
      // SAVORY
      {
        id: '567982',
        src: getImageUrl('20260807Category13.png', true),
      },
      // KARLO
      {
        id: '643222',
        src: getImageUrl('20260807Category14.png', true),
      },
    ],
  },
  {
    name: 'Chairs',
    overrides: {
    
    },
    background: '#FFEBE6',
    color: '#000000',
    src: getImageUrl('20260807Category20.jpg', true),
    href: 'https://www.beliani.ch/dining-room-furniture/chairs/',
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
      // AVA
      {
        id: '609612',
        src: getImageUrl('20260807Category21.png', true),
      },
      // MINA
      {
        id: '583491',
        src: getImageUrl('20260807Category22.png', true),
      },
      // CRAIG
      {
        id: '515774',
        src: getImageUrl('20260807Category23.png', true),
      },
      // BURGES
      {
        id: '805541',
        src: getImageUrl('20260807Category24.png', true),
      },
    ],
  },
  {
    name: 'Tableware',
    overrides: {
    
    },
    background: '#EAD9D9',
    color: '#000000',
    src: getImageUrl('20260807Category30.jpg', true),
    href: 'https://www.beliani.ch/dining-room-furniture/kitchenware-tableware/',
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
      // GALANGAL
      {
        id: '729791',
        src: getImageUrl('20260807Category31.png', true),
      },
      // NUTMEG
      {
        id: '705851',
        src: getImageUrl('20260807Category32.png', true),
      },
      // HOPS
      {
        id: '721952',
        src: getImageUrl('20260807Category33.png', true),
      },
      // CHAROLI
      {
        id: '721953',
        src: getImageUrl('20260807Category34.png', true),
      },
    ],
  },
  {
    name: 'Kitchen trolleys',
    overrides: {
    
    },
    background: '#FFEBE6',
    color: '#000000',
    src: getImageUrl('20260807Category40.jpg', true),
    href: 'https://www.beliani.ch/storage/kitchen-trolleys/',
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
      // VENETA
      {
        id: '195790',
        src: getImageUrl('20260807Category41.png', true),
      },
      // MORINO
      {
        id: '251005',
        src: getImageUrl('20260807Category42.png', true),
      },
      // TRAPANI
      {
        id: '108799',
        src: getImageUrl('20260807Category43.png', true),
      },
      // SIENA
      {
        id: '174046',
        src: getImageUrl('20260807Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "46136",
  name: "Dining Room Sale",
  date: "07.08.2026",
  issueCardId: "513178",
  lpId: "31396",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/TtjQ8ihEDFYHOkKa0LGSNl/Newsletter-Dining-Room-Sale----Up-to-50--off---Friday-2026.08.07?node-id=0-1&t=ZFtZbq8t14RyOvq5-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#EAD9D9",
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
        backgroundColor: "#F6E7E6",
        type: "timer",
        isWithTitles: true,
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
      background: "#EAD9D9",
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
        backgroundColor: "#F6E7E6",
        type: "timer",
        isWithTitles: true,
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});