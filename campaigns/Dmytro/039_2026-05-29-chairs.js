import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::29.05.26 - Chairs';

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
    "tableRange": "28:29",
    "name": "timer"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-29' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260529_01.png', folder: '20260529', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260529/20260529topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-29' }),
  Banner_1: translateLink({ value: 'content/lp26-05-22' }),
  Banner_1_Image: translateImage({ value: '20260522b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-21' }),
  Banner_2_Image: translateImage({ value: '20260521b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-05-25' }),
  Intro_cta_href:  "https://www.beliani.ch/dining-room-furniture/chairs/"
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEC273',
  type: 'standard',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260529/20260529free.png', true),
  background: '#FFCCB7',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/gc0a2cz0wi",
  "CHFR": "https://gen.sendtric.com/countdown/tvgb8vi59h",
  "FR": "https://gen.sendtric.com/countdown/m333juy6j3",
  "DE": "https://gen.sendtric.com/countdown/aupee4egra",
  "UK": "https://gen.sendtric.com/countdown/0ukhqijt2y",
  "AT": "https://gen.sendtric.com/countdown/rk4s5g9njc",
  "ES": "https://gen.sendtric.com/countdown/19hz4f6rtr",
  "PL": "https://gen.sendtric.com/countdown/5vnqe8cwaz",
  "NL": "https://gen.sendtric.com/countdown/ey79ivad6p",
  "PT": "https://gen.sendtric.com/countdown/u5i590v4n7",
  "IT": "https://gen.sendtric.com/countdown/nnfx2d0hrx",
  "SE": "https://gen.sendtric.com/countdown/x6h5cwaubg",
  "HU": "https://gen.sendtric.com/countdown/7jdoe1nsvv",
  "DK": "https://gen.sendtric.com/countdown/f85d6ox86v",
  "CZ": "https://gen.sendtric.com/countdown/dexubyca4g",
  "FI": "https://gen.sendtric.com/countdown/5jmdulvxf3",
  "NO": "https://gen.sendtric.com/countdown/0g0a01ce83",
  "SK": "https://gen.sendtric.com/countdown/33w4dvupa1",
  "BENL": "https://gen.sendtric.com/countdown/8ydzalkseb",
  "BEFR": "https://gen.sendtric.com/countdown/yd613xavfo",
  "RO": "https://gen.sendtric.com/countdown/gwcjbvietr"
  },
};

const categories = [
  {
    name: 'Fabric Chairs',
    background: '#FEC273',
    color: '#000000',
    src: getImageUrl('20260529/20260529Category10.png', true),
    href: 'https://www.beliani.ch/chairs/fabric-chairs/',
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
      // MINA 
      {
        id: '403407',
        src: getImageUrl('20260529/20260529Category11.png', true),
      },
      // DAY
      {
        id: '575210',
        src: getImageUrl('20260529/20260529Category12.png', true),
      },
      // POWELL
      {
        id: '597828',
        src: getImageUrl('20260529/20260529Category13.png', true),
      },
      // BRONTE
      {
        id: '648567',
        src: getImageUrl('20260529/20260529Category14.png', true),
      },
    ],
  },
  {
    name: 'Wooden Chairs',
    background: '#FFE3D8',
    color: '#000000',
    src: getImageUrl('20260529/20260529Category20.png', true),
    href: 'https://www.beliani.ch/chairs/wooden-chairs/',
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
      // HOPE
      {
        id: '579839',
        src: getImageUrl('20260529/20260529Category21.png', true),
      },
      // CRAIG
      {
        id: '515774',
        src: getImageUrl('20260529/20260529Category22.png', true),
      },
      // YUBA
      {
        id: '519212',
        src: getImageUrl('20260529/20260529Category23.png', true),
      },
      // AVA
      {
        id: '609706',
        src: getImageUrl('20260529/20260529Category24.png', true),
      },
    ],
  },
  {
    name: 'Metal Chairs',
    background: '#FEC273',
    color: '#000000',
    src: getImageUrl('20260529/20260529Category30.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/chairs/metal-chairs/',
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
      // MAYETTA
      {
        id: '522358',
        src: getImageUrl('20260529/20260529Category31.png', true),
      },
      // CORNELL
      {
        id: '602513',
        src: getImageUrl('20260529/20260529Category32.png', true),
      },
      // RIGBY
      {
        id: '205242',
        src: getImageUrl('20260529/20260529Category33.png', true),
      },
      // CORNELL
      {
        id: '430836',
        src: getImageUrl('20260529/20260529Category34.png', true),
      },
    ],
  },
  {
    name: 'Metal Chairs',
    background: '#FFE3D8',
    color: '#000000',
    src: getImageUrl('20260529/20260529Category30.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/chairs/bar-chairs/',
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
      // AMAYA
      {
        id: '425113',
        src: getImageUrl('20260529/20260529Category41.png', true),
      },
      // ALLISON
      {
        id: '494706',
        src: getImageUrl('20260529/20260529Category42.png', true),
      },
      // CASMALIA 
      {
        id: '586379',
        src: getImageUrl('20260529/20260529Category43.png', true),
      },
      // DUBROVNIK
      {
        id: '498847',
        src: getImageUrl('20260529/20260529Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "43534",
  name: "Chairs",
  date: "29.05.2026",
  issueCardId: "481275",
  lpId: "30044",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/CV5jp8sUVSSCGJwA31bX6v/2026.05.29---Newsletter---Chairs?node-id=11001-3875&t=AyBnPtkraFr5PPc0-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FEC273",
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
        image: "20260529free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FEC273",
        alignment: "left",
        type: "paragraph",
        cta: {
          spaceAfter: 'newsletterBottom35px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FEC273",
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
        image: "20260529free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FEC273",
        alignment: "left",
        type: "paragraph",
        cta: {
          spaceAfter: 'newsletterBottom35px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});