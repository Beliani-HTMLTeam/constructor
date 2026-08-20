// Campaign generated from form
const campaignTranslationsSheet = '2026::28.08.26 - Kitchen';

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
    "tableRange": "22:25",
    "name": "paragraph"
  },
  {
    "tableRange": "26:29",
    "name": "CTA"
  },
  {
    "tableRange": "30:31",
    "name": "condition"
  },
  {
    "tableRange": "36:37",
    "name": "timer"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-28' }),
  TopImageTitle_src: translateImage({ value: '20260828_01.png' }),
  TopImage_src: getImageUrl('20260828_gif_a.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-28' }),
  Banner_1: translateLink({ value: 'content/lp26-08-19' }),
  Banner_1_Image: translateImage({ value: '20260819b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-20' }),
  Banner_2_Image: translateImage({ value: '20260820b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-24' }),
  Intro_cta_href: "https://www.beliani.ch/kitchen/"
};

const intro_data = {
  color: "#FFCCB7",
  backgroundColor: "#750000",
  alignment: "left",
  type: "paragraph",
  cta: {
    background: "#F6E7E6",
    color: "#750000",
    overrides: {
      FI: "Tutustu valikoimaan"
    },
    spaceAfter: 'newsletterBottom20px',
    newsletter: {
      type: "image",
      src: 'shop_now',
    },
    landing: {
      type: "button",
      source: 'queries',
      background: "#F6E7E6",
      color: "#750000", 
    }
  }
}


const TopImageTitle_data = {
  color: '#FFCCB7',
  backgroundColor: '#750000',
  type: 'twoSameLines',
};


const timer = {
  position: 'outsideTopImageTitle',
  deadline: '2026-08-30',
  freebies: getImageUrl('20260828free.png', true)
}

const categories = [
  {
    name: 'Kitchen Accessories',
    overrides: {

    },
    background: '#ffffff',
    color: '#750000',
    // src: getImageUrl('20260814Category10.jpg', true),
    href: 'https://www.beliani.ch/kitchen/kitchen-accessories/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom10px',
    },
    paragraph: {
      show: true,
      color: "#5A4040",
      spaceAfter: "newsletterBottom30px"
    },
    paddingTop: 30,
    priceColor: '#FF2F00',
    line: {
      show: false
    },
    cta: {
      show: true,
      newsletter: {
        type: "image",
        src: `kitchen_accessories`
      },
      landing: {
        type: "button",
        source: 'queries',
        background: '#750000',
        color: '#FFFFFF',
      }
    },
    products: [
      // ELITE PRO
      {
        id: '610759',
        src: getImageUrl('20260828Category11_a.png', true),
      },
      // CASTINO
      {
        id: '802216',
        src: getImageUrl('20260828Category12_a.png', true),
      },
      // IKEDA
      {
        id: '672257',
        src: getImageUrl('20260828Category13_a.png', true),
      },
      // SAVEUR
      {
        id: '731673',
        src: getImageUrl('20260828Category14_a.png', true),
      },
    ],
  },
  {
    name: 'Tableware',
    overrides: {
      NL: "Keukengerei en servies",
      BENL: "Keukengerei en servies"
    },
    background: '#ffffff',
    color: '#750000',
    href: 'https://www.beliani.ch/kitchen/kitchenware-tableware/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom10px',
    },
    paragraph: {
      show: true,
      color: "#5A4040",
      spaceAfter: "newsletterBottom30px"
    },
    paddingTop: 0,
    priceColor: '#FF2F00',
    line: {
      show: false
    },
    cta: {
      show: true,
      newsletter: {
        type: "image",
        src: 'tableware'
      },
      landing: {
        type: "button",
        source: 'queries',
        background: '#750000',
        color: '#FFFFFF',
      }
    },
    products: [
      // HYSSOP
      {
        id: '730078',
        src: getImageUrl('20260828Category21_a.png', true),
      },
      // NUTMEG
      {
        id: '705831',
        src: getImageUrl('20260828Category22_a.png', true),
      },
      // FUSILLI
      {
        id: '452445',
        src: getImageUrl('20260828Category23_a.png', true),
      },
      // MORGANITE
      {
        id: '467639',
        src: getImageUrl('20260828Category24_a.png', true),
      },
    ],
  },
  {
    name: 'Kitchen Organisation & Storage',
    overrides: {

    },
    background: '#ffffff',
    color: '#750000',
    href: 'https://www.beliani.ch/kitchen/kitchen-organization/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom10px',
    },
    paragraph: {
      show: true,
      color: "#5A4040",
      spaceAfter: "newsletterBottom30px"
    },
    paddingTop: 0,
    priceColor: '#FF2F00',
    line: {
      show: false
    },
    cta: {
      show: true,
      newsletter: {
        type: "image",
        src: 'organization_and_storage'
      },
      landing: {
        type: "button",
        source: 'queries',
        background: '#750000',
        color: '#FFFFFF',
      }
    },
    products: [
      // ALAMO
      {
        id: '306058',
        src: getImageUrl('20260828Category31_a.png', true),
      },
      // NAVARINO
      {
        id: '197418',
        src: getImageUrl('20260828Category32_a.png', true),
      },
      // CERISE
      {
        id: '803598',
        src: getImageUrl('20260828Category33_a.png', true),
      },
      // ROWLEY
      {
        id: '593530',
        src: getImageUrl('20260828Category34_a.png', true),
      },
    ],
  },
  {
    name: 'Lighting',
    overrides: {

    },
    background: '#ffffff',
    color: '#750000',
    href: 'https://www.beliani.ch/kitchen/lighting/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom10px',
    },
    paragraph: {
      show: true,
      color: "#5A4040",
      spaceAfter: "newsletterBottom30px"
    },
    paddingTop: 0,
    priceColor: '#FF2F00',
    line: {
      show: false
    },
    cta: {
      show: true,
      newsletter: {
        type: "image",
        src: 'lighting'
      },
      landing: {
        type: "button",
        source: 'queries',
        background: '#750000',
        color: '#FFFFFF',
      }
    },
    products: [
      // ANDERSON
      {
        id: '626120',
        src: getImageUrl('20260828Category41_a.png', true),
      },
      // DORING
      {
        id: '519893',
        src: getImageUrl('20260828Category42_a.png', true),
      },
      // NYANDO
      {
        id: '681182',
        src: getImageUrl('20260828Category43_a.png', true),
      },
      // PATTANI
      {
        id: '319509',
        src: getImageUrl('20260828Category44_a.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "46801",
  name: "Kitchen_a",
  date: "28.08.2026",
  issueCardId: "521572",
  lpId: "31751",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/58iBYG9jt2Zy2r7SKLraHX/Kitchen---Friday-2026.08.28?node-id=0-1&t=NOTYPkwERIzum3GL-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.AIRegularFridayNslt1, // User should change this
      css: types.CSS.NS_AI_28_08,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#ffffffff",
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
        backgroundColor: '#750000',
        unitBackground: '#900C0C',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.AIRegularFridayNslt1, // User should change this
      css: types.CSS.LP_AI_28_08,
      background: "#ffffffff",
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
        backgroundColor: '#750000',
        unitBackground: '#900C0C',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});