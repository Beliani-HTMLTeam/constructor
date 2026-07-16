import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::26.06.26 - Garden Accessories';

const tableQueries = [
  {
    "tableRange": "16:17",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "18",
    "name": "intro"
  },
  {
    "tableRange": "19:22",
    "name": "paragraphs"
  },
  {
    "tableRange": "19:20",
    "name": "condition"
  },
  {
    "tableRange": "25:26",
    "name": "timer"
  },
  {
    "tableRange": "27",
    "name": "introCTA"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-26' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260626_01.png', folder: '20260626', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260626/20260626topimage.jpg', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-26' }),
  Banner_1: translateLink({ value: 'content/lp26-06-17' }),
  Banner_1_Image: translateImage({ value: '20260617b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-06-18' }),
  Banner_2_Image: translateImage({ value: '20260618b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-06-22' }),
  Intro_cta_href: "https://www.beliani.ch/garden-furniture/garden-accessories/",
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#F6E7E6",
  alignment: "left",
  type: "paragraph",
  cta: {
    overrides: {
      FI: "Tutustu valikoimaan"
    },
    spaceAfter: 'newsletterBottom35px',
  }
}

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260626/20260626free.png', true),
  background: '#FFCCB7',
  color: '#000000',
  isCtaVisible: true,
  image: {
    PL: "https://gen.sendtric.com/countdown/tnmyv1dru3",
    FR: "https://gen.sendtric.com/countdown/7quqv4l8av",
    UK: "https://gen.sendtric.com/countdown/vc6ddpbewv",
    DE: "https://gen.sendtric.com/countdown/q8cyku1vup",
    CZ: "https://gen.sendtric.com/countdown/pzq5trp1n9",
    SK: "https://gen.sendtric.com/countdown/iqhxsrcnu5",
    HU: "https://gen.sendtric.com/countdown/cg5ckn3oz2",
    IT: "https://gen.sendtric.com/countdown/830ddtdk4q",
    ES: "https://gen.sendtric.com/countdown/2lj0o000i6",
    PT: "https://gen.sendtric.com/countdown/ztnb17k032",
    NO: "https://gen.sendtric.com/countdown/q6lhx5s9rs",
    SE: "https://gen.sendtric.com/countdown/4xq5gyqdng",
    FI: "https://gen.sendtric.com/countdown/m2kd161fqo",
    DK: "https://gen.sendtric.com/countdown/3fw48i0eel",
    CHDE: "https://gen.sendtric.com/countdown/3f2dq9gvje",
    CHFR: "https://gen.sendtric.com/countdown/54mf8i79kj",
    BEFR: "https://gen.sendtric.com/countdown/hqyhv8ol1s",
    BENL: "https://gen.sendtric.com/countdown/8jgu194xyj",
    NL: "https://gen.sendtric.com/countdown/rgdyz93xjy",
    AT: "https://gen.sendtric.com/countdown/xa09rxxlyp",
    RO: "https://gen.sendtric.com/countdown/s73f97df9s",

  },
};

const categories = [
  {
    name: 'Fire pits & grills',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260626/20260626Category10.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/garden-accessories/fire-pits/',
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
      // SATAH
      {
        id: '315858',
        src: getImageUrl('20260626/20260626Category11.png', true),
      },
      // KAMADO
      {
        id: '650927',
        src: getImageUrl('20260626/20260626Category12.png', true),
      },
      // KAMADO
      {
        id: '650828',
        src: getImageUrl('20260626/20260626Category13.png', true),
      },
      // PAVLOF
      {
        id: '301788',
        src: getImageUrl('20260626/20260626Category14.png', true),
      },
    ],
  },
  {
    name: 'Plant pots',
    overrides: {
      FI: "Ulkoruukut"
    },
    background: '#FFDED0',
    color: '#000000',
    src: getImageUrl('20260626/20260626Category20.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/garden-accessories/pots-and-planters/',
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
      // CHIOS
      {
        id: '258364',
        src: getImageUrl('20260626/20260626Category21.png', true),
      },
      // DARIA 
      {
        id: '404447',
        src: getImageUrl('20260626/20260626Category22.png', true),
      },
      // EDESSA
      {
        id: '186285',
        src: getImageUrl('20260626/20260626Category23.png', true),
      },
      // CAMIA
      {
        id: '346754',
        src: getImageUrl('20260626/20260626Category24.png', true),
      },
    ],
  },
  {
    name: 'Garden Lanterns',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260626/20260626Category30.jpg', true),
    href: 'https://www.beliani.ch/garden-accessories/garden-lanterns/',
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
      // LUFUPA
      {
        id: '696990',
        src: getImageUrl('20260626/20260626Category31.png', true),
      },
      // TAHITI
      {
        id: '113587',
        src: getImageUrl('20260626/20260626Category32.png', true),
      },
      // LUSWISHI
      {
        id: '697028',
        src: getImageUrl('20260626/20260626Category33.png', true),
      },
      // TONGA
      {
        id: '121553',
        src: getImageUrl('20260626/20260626Category34.png', true),
      },
    ],
  },
  {
    name: 'Garden Ornaments',
    background: '#FFDED0',
    color: '#000000',
    src: getImageUrl('20260626/20260626Category40.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/garden-accessories/garden-ornaments/',
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
      // LARK 
      {
        id: '584780',
        src: getImageUrl('20260626/20260626Category41.png', true),
      },
      // BOWE
      {
        id: '639021',
        src: getImageUrl('20260626/20260626Category42.png', true),
        hrefOverride: {
          UK: "https://www.beliani.co.uk/garden-figurine-bowe-bear-grey-639021.html"
        }
      },
      // MONTCEL
      {
        id: '558905',
        src: getImageUrl('20260626/20260626Category43.png', true),
      },
      // OTTERUP
      {
        id: '736381',
        src: getImageUrl('20260626/20260626Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "44689",
  name: "Garden Accessories",
  date: "26.06.2026",
  issueCardId: "495693",
  lpId: "30624",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/MqBuGNaD0NSPC10PIAzMlD/Newsletter-Garden-Accessories---Friday-2026.06.26?node-id=0-1&t=lzZtYk2EfJG25SD8-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F6E7E6",
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
        image: "20260626free.png",
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
      background: "#F6E7E6",
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
        image: "20260626free.png",
        isWithTitles: true,
      },
      intro:intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});