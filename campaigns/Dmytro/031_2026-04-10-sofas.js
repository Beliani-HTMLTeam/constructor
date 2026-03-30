import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::10.04.26 - Sofas';

const tableQueries = [
  {
    "tableRange": "15:16",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "18",
    "name": "intro"
  },
  {
    "tableRange": "21:22",
    "name": "condition"
  },
  {
    "tableRange": "28:29",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-10' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260410_01.png', folder: '20260410', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260410/20260410topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-04-10' }),
  Banner_1: translateLink({ value: 'content/lp26-04-01' }),
  Banner_1_Image: translateImage({ value: '20260401b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-02' }),
  Banner_2_Image: translateImage({ value: '20260402b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-04-06' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFDEB3',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260410/20260410free.png', true),
  background: '#FFCCB7',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/0m76ck64n0",
    "CHFR": "https://gen.sendtric.com/countdown/va01fyjuky",
    "FR": "https://gen.sendtric.com/countdown/w6b285cm1w",
    "DE": "https://gen.sendtric.com/countdown/2j0zek547q",
    "UK": "https://gen.sendtric.com/countdown/kbwfpe3yxv",
    "AT": "https://gen.sendtric.com/countdown/kxwrojbm5a",
    "ES": "https://gen.sendtric.com/countdown/aso6s68w04",
    "PL": "https://gen.sendtric.com/countdown/dlb1bp9r8l",
    "NL": "https://gen.sendtric.com/countdown/aye1b28cz6",
    "PT": "https://gen.sendtric.com/countdown/bewrh7602c",
    "IT": "https://gen.sendtric.com/countdown/ugbiwcv82g",
    "SE": "https://gen.sendtric.com/countdown/duj8u3xm90",
    "HU": "https://gen.sendtric.com/countdown/hwo5owm6mm",
    "DK": "https://gen.sendtric.com/countdown/ljmj6r7l8f",
    "CZ": "https://gen.sendtric.com/countdown/7reql3ruyn",
    "FI": "https://gen.sendtric.com/countdown/lszpqfpqcx",
    "NO": "https://gen.sendtric.com/countdown/8xksvhpd6l",
    "SK": "https://gen.sendtric.com/countdown/191d3n295t",
    "BENL": "https://gen.sendtric.com/countdown/jtjr5bkawi",
    "BEFR": "https://gen.sendtric.com/countdown/dpe4v18g4r",
    "RO": "https://gen.sendtric.com/countdown/5sj1craah5"
  },
};

const categories = [
  {
    name: 'Corner sofas',
    background: '#FFDEB3',
    color: '#000000',
    src: getImageUrl('20260410/20260410Category10.png', true),
    href: 'https://www.beliani.ch/sofas/corner-sofas/',
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
      // SIGGARD
      {
        id: '566003',
        src: getImageUrl('20260410/20260410Category11.png', true),
      },
      // RENDERS
      {
        id: '625361',
        src: getImageUrl('20260410/20260410Category12.png', true),
      },
      // LOFOTEN
      {
        id: '566668',
        src: getImageUrl('20260410/20260410Category13.png', true),
      },
      // DOLVA
      {
        id: '618670',
        src: getImageUrl('20260410/20260410Category14.png', true),
      },
    ],
  },
  {
    name: '3 seater sofas',
    background: '#FF9780',
    color: '#000000',
    src: getImageUrl('20260410/20260410Category20.png', true),
    href: 'https://www.beliani.ch/sofas/3-seater-sofas/',
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
      // VINLIDEN
      {
        id: '705353',
        src: getImageUrl('20260410/20260410Category21.png', true),
      },
      // TUVE
      {
        id: '466395',
        src: getImageUrl('20260410/20260410Category22.png', true),
      },
      // VISKAN
      {
        id: '706041',
        src: getImageUrl('20260410/20260410Category23.png', true),
      },
      // ALNOR
      {
        id: '668131',
        src: getImageUrl('20260410/20260410Category24.png', true),
      },
    ],
  },
  {
    name: 'Modular sofas',
    background: '#FFDEB3',
    color: '#000000',
    src: getImageUrl('20260410/20260410Category30.png', true),
    href: 'https://www.beliani.ch/sofas/modular-sofas/',
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
      // LEMVIG
      {
        id: '711007',
        src: getImageUrl('20260410/20260410Category31.png', true),
      },
      // UNSTAD
      {
        id: '437213',
        src: getImageUrl('20260410/20260410Category32.png', true),
      },
      // ARDAL
      {
        id: '573365',
        src: getImageUrl('20260410/20260410Category33.png', true),
      },
      // FALSTERBO
      {
        id: '499281',
        src: getImageUrl('20260410/20260410Category34.png', true),
      },
    ],
  },
  {
    name: 'Chaise lounges',
    background: '#FF9780',
    color: '#000000',
    src: getImageUrl('20260410/20260410Category40.png', true),
    href: 'https://www.beliani.ch/sofas/chaise-lounge/',
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
      // YVOIRE
      {
        id: '694651',
        src: getImageUrl('20260410/20260410Category41.png', true),
      },
      // ARCHIANE
      {
        id: '690558',
        src: getImageUrl('20260410/20260410Category42.png', true),
      },
      // NANTILLY
      {
        id: '198537',
        src: getImageUrl('20260410/20260410Category43.png', true),
      },
      // VALREAS
      {
        id: '602188',
        src: getImageUrl('20260410/20260410Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "41997",
  name: "Sofas",
  date: "10.04.2026",
  issueCardId: "460932",
  lpId: "29285",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/btOzxDWestwqueeP6fqppx/2026.04.10---Sofas?node-id=0-1&t=xiNSE7UdRB1wxaDu-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFDEB3",
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
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260410free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFDEB3",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFDEB3",
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
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260410free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFDEB3",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});