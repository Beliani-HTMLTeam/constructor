import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::15.05.26 - Mirrors';

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
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-15' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260515_01.png', folder: '20260515', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260515/20260515topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-15' }),
  Banner_1: translateLink({ value: 'content/lp26-05-07' }),
  Banner_1_Image: translateImage({ value: '20260507b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-06' }),
  Banner_2_Image: translateImage({ value: '20260506b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-05-11' }),
  Intro_cta_href:  "https://www.beliani.ch/home-accessories/mirrors/"
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260515/20260515free.png', true),
  background: '#FD9000',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/r04gdy33hw",
    "CHFR": "https://gen.sendtric.com/countdown/u20q1bmvpr",
    "FR": "https://gen.sendtric.com/countdown/lvaf6gyz7p",
    "DE": "https://gen.sendtric.com/countdown/haqo60w0a2",
    "UK": "https://gen.sendtric.com/countdown/uy8dvjzxv1",
    "AT": "https://gen.sendtric.com/countdown/c6gni0ga21",
    "ES": "https://gen.sendtric.com/countdown/2j9f5e40vc",
    "PL": "https://gen.sendtric.com/countdown/ighvl7imhk",
    "NL": "https://gen.sendtric.com/countdown/y8go4mgc9u",
    "PT": "https://gen.sendtric.com/countdown/6otpmp21ky",
    "IT": "https://gen.sendtric.com/countdown/55i3j88ipg",
    "SE": "https://gen.sendtric.com/countdown/k058to3hg9",
    "HU": "https://gen.sendtric.com/countdown/1paqh11kwe",
    "DK": "https://gen.sendtric.com/countdown/f3begr97vw",
    "CZ": "https://gen.sendtric.com/countdown/wj3cyn3wtq",
    "FI": "https://gen.sendtric.com/countdown/341wh8te8l",
    "NO": "https://gen.sendtric.com/countdown/n0j3ij35yc",
    "SK": "https://gen.sendtric.com/countdown/aovt8gijdh",
    "BENL": "https://gen.sendtric.com/countdown/kix416n1qt",
    "BEFR": "https://gen.sendtric.com/countdown/91e87zcxin",
    "RO": "https://gen.sendtric.com/countdown/d235tppb7z"
  },
};

const categories = [
  {
    name: 'Standing mirrors',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260515/20260515Category10.png', true),
    href: 'https://www.beliani.ch/home-accessories/mirrors/standing-mirrors/',
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
      // TORCY
      {
        id: '90242',
        src: getImageUrl('20260515/20260515Category11.png', true),
      },
      // BAGNOLET
      {
        id: '330400',
        src: getImageUrl('20260515/20260515Category12.png', true),
      },
      // BEAUVAIS
      {
        id: '360122',
        src: getImageUrl('20260515/20260515Category13.png', true),
      },
      // ANSOUIS
      {
        id: '355100',
        src: getImageUrl('20260515/20260515Category14.png', true),
      },
    ],
  },
  {
    name: 'Wall mirrors',
    background: '#FFF0EA',
    color: '#000000',
    src: getImageUrl('20260515/20260515Category20.png', true),
    href: 'https://www.beliani.ch/home-accessories/mirrors/wall-mirrors/',
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
      // ALVENA
      {
        id: '716651',
        src: getImageUrl('20260515/20260515Category21.png', true),
      },
      // PALI
      {
        id: '197493',
        src: getImageUrl('20260515/20260515Category22.png', true),
      },
      // AJACCIO
      {
        id: '138937',
        src: getImageUrl('20260515/20260515Category23.png', true),
      },
      // BESSON
      {
        id: '147812',
        src: getImageUrl('20260515/20260515Category24.png', true),
      },
    ],
  },
  {
    name: 'Bathroom mirrors',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260515/20260515Category30.png', true),
    href: 'https://www.beliani.ch/home-accessories/mirrors/bath-mirrors/',
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
      // YSER
      {
        id: '147957',
        src: getImageUrl('20260515/20260515Category31.png', true),
      },
      // ROSELL
      {
        id: '580809',
        src: getImageUrl('20260515/20260515Category32.png', true),
      },
      // ODENAS
      {
        id: '298114',
        src: getImageUrl('20260515/20260515Category33.png', true),
      },
      // COURSEULLES
      {
        id: '344270',
        src: getImageUrl('20260515/20260515Category34.png', true),
      },
    ],
  },
  {
    name: 'Makeup Mirrors',
    background: '#FFF0EA',
    color: '#000000',
    src: getImageUrl('20260515/20260515Category40.png', true),
    href: 'https://www.beliani.ch/home-accessories/mirrors/makeup-mirrors/',
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
      // CLAIRA
      {
        id: '297344',
        src: getImageUrl('20260515/20260515Category41.png', true),
      },
      // CORREZE
      {
        id: '368546',
        src: getImageUrl('20260515/20260515Category42.png', true),
      },
      // SAVOIE
      {
        id: '368133',
        src: getImageUrl('20260515/20260515Category43.png', true),
      },
      // YVELINES
      {
        id: '368237',
        src: getImageUrl('20260515/20260515Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "42925",
  name: "Mirrors",
  date: "15.05.2026",
  issueCardId: "477206",
  lpId: "29746",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/G7KNptCGlPJaJO0hvaxnVX/Newsletter-Mirrors---Friday-2026.05.15?node-id=6186-3991&t=1vk1zxXjW0IvBWC9-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFE9CC",
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
        backgroundColor: "#FD9000",
        type: "timer",
        image: "20260515free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFE9CC",
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
      background: "#FFE9CC",
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
        backgroundColor: "#FD9000",
        type: "timer",
        image: "20260515free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFE9CC",
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