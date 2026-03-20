import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::17.04.26 - Home office';

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
    "tableRange": "22:23",
    "name": "condition"
  },
  {
    "tableRange": "29:30",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-17' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260417_01.png', folder: '20260417', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260417/20260417topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-04-17' }),
  Banner_1: translateLink({ value: 'content/lp26-04-10' }),
  Banner_1_Image: translateImage({ value: '20260410b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-09' }),
  Banner_2_Image: translateImage({ value: '20260409b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-04-13' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEE3BF',
  type: 'up_to',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260417/20260417free.png', true),
  background: '#FFCCB7',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/p77733qp7t",
    "CHFR": "https://gen.sendtric.com/countdown/pxb2l62obp",
    "FR": "https://gen.sendtric.com/countdown/h0rn97wcaq",
    "DE": "https://gen.sendtric.com/countdown/94i3pxs8rp",
    "UK": "https://gen.sendtric.com/countdown/bvodnrg5pr",
    "AT": "https://gen.sendtric.com/countdown/zh5umxhy2d",
    "ES": "https://gen.sendtric.com/countdown/g3ng24xh3e",
    "PL": "https://gen.sendtric.com/countdown/5a5qkw92hz",
    "NL": "https://gen.sendtric.com/countdown/t1oj7bvy7d",
    "PT": "https://gen.sendtric.com/countdown/0vp9we4r3r",
    "IT": "https://gen.sendtric.com/countdown/mdef1m78yl",
    "SE": "https://gen.sendtric.com/countdown/7075ikt19u",
    "HU": "https://gen.sendtric.com/countdown/23ehmkdzns",
    "DK": "https://gen.sendtric.com/countdown/d2kcx1jr5u",
    "CZ": "https://gen.sendtric.com/countdown/p7i0tg8817",
    "FI": "https://gen.sendtric.com/countdown/3h904u5ix4",
    "NO": "https://gen.sendtric.com/countdown/sex5un11ra",
    "SK": "https://gen.sendtric.com/countdown/jlvdxna39b",
    "BENL": "https://gen.sendtric.com/countdown/zyvv5a3zb2",
    "BEFR": "https://gen.sendtric.com/countdown/xg5t2eetxv",
    "RO": "https://gen.sendtric.com/countdown/l6soetr901"
  },
};

const categories = [
  {
    name: 'Desks',
    background: '#FEE3BF',
    color: '#000000',
    src: getImageUrl('20260417/20260417Category10.png', true),
    href: 'https://www.beliani.ch/office-furniture/desks/',
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
      // TAVARES
      {
        id: '702760',
        src: getImageUrl('20260417/20260417Category11.png', true),
      },
      // SOLARI
      {
        id: '702666',
        src: getImageUrl('20260417/20260417Category12.png', true),
      },
      // LUCAMA
      {
        id: '682327',
        src: getImageUrl('20260417/20260417Category13.png', true),
      },
      // RONDANE
      {
        id: '713035',
        src: getImageUrl('20260417/20260417Category14.png', true),
      },
    ],
  },
  {
    name: 'Chairs',
    background: '#BA8080',
    color: '#000000',
    src: getImageUrl('20260417/20260417Category20.png', true),
    href: 'https://www.beliani.ch/office-furniture/office-chairs/',
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
      // GUNNISON
      {
        id: '704970',
        src: getImageUrl('20260417/20260417Category21.png', true),
      },
      // LUMA
      {
        id: '704463',
        src: getImageUrl('20260417/20260417Category22.png', true),
      },
      // GRANDIOSE
      {
        id: '703855',
        src: getImageUrl('20260417/20260417Category23.png', true),
      },
      // KIANA
      {
        id: '697883',
        src: getImageUrl('20260417/20260417Category24.png', true),
      },
    ],
  },
  {
    name: 'Storage',
    background: '#FEE3BF',
    color: '#000000',
    src: getImageUrl('20260417/20260417Category30.png', true),
    href: 'https://www.beliani.ch/office-furniture/storage-units-and-cabinets/',
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
      // SOLETTA
      {
        id: '706367',
        src: getImageUrl('20260417/20260417Category31.png', true),
      },
      // URIA
      {
        id: '195383',
        src: getImageUrl('20260417/20260417Category32.png', true),
      },
      // BOLSENA
      {
        id: '690955',
        src: getImageUrl('20260417/20260417Category33.png', true),
      },
      // ZEHNA
      {
        id: '686463',
        src: getImageUrl('20260417/20260417Category34.png', true),
      },
    ],
  },
  {
    name: 'Lighting',
    background: '#BA8080',
    color: '#000000',
    src: getImageUrl('20260417/20260417Category40.png', true),
    href: 'https://www.beliani.ch/office-furniture/office-lamps/',
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
      // SERPENS
      {
        id: '664318',
        src: getImageUrl('20260417/20260417Category41.png', true),
      },
      // LEONIS
      {
        id: '663423',
        src: getImageUrl('20260417/20260417Category42.png', true),
      },
      // MERAMEC
      {
        id: '35510',
        src: getImageUrl('20260417/20260417Category43.png', true),
      },
      // VELA
      {
        id: '664262',
        src: getImageUrl('20260417/20260417Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "42093",
  name: "Home office",
  date: "17.04.2026",
  issueCardId: "461535",
  lpId: "29342",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/vTBzD4za0ZjKsPLFsJ0WI1/Newsletter-template--Copy-?node-id=0-1&t=smmIGjwJVTnQImh6-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FEE3BF",
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
        image: "20260417free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FEE3BF",
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
      background: "#FEE3BF",
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
        image: "20260417free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FEE3BF",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});