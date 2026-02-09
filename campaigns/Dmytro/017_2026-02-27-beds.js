import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::27.02.26 - Beds';

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
    "tableRange": "28:29",
    "name": "condition"
  },
  {
    "tableRange": "35:36",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-27' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260227_01.png', folder: '20260227', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260227/20260227topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-27' }),
  Banner_1: translateLink({ value: 'content/lp26-02-20' }),
  Banner_1_Image: translateImage({ value: '20260220b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-19' }),
  Banner_2_Image: translateImage({ value: '20260219b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-02-23' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEC273',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260227/20260227free.png', true),
  background: '#F6E7E6',
  color: '#000000',
  isCtaVisible: true,
  image:{
    "CHDE": "https://gen.sendtric.com/countdown/942ppg0k31",
    "CHFR": "https://gen.sendtric.com/countdown/q78gkmt26f",
    "FR": "https://gen.sendtric.com/countdown/y2ock8661g",
    "DE": "https://gen.sendtric.com/countdown/n0q620xxbl",
    "UK": "https://gen.sendtric.com/countdown/leg7xxkl3m",
    "AT": "https://gen.sendtric.com/countdown/2bfpnulnur",
    "ES": "https://gen.sendtric.com/countdown/86tbzw1o38",
    "PL": "https://gen.sendtric.com/countdown/wzday8yupc",
    "NL": "https://gen.sendtric.com/countdown/kwl57w7ygj",
    "PT": "https://gen.sendtric.com/countdown/4ryurhvxgy",
    "IT": "https://gen.sendtric.com/countdown/f26owe8fg0",
    "SE": "https://gen.sendtric.com/countdown/bq68dlvx5m",
    "HU": "https://gen.sendtric.com/countdown/hqcgl1873l",
    "DK": "https://gen.sendtric.com/countdown/rsl6ee1ml3",
    "CZ": "https://gen.sendtric.com/countdown/p9w359amzb",
    "FI": "https://gen.sendtric.com/countdown/g70e2gwy4x",
    "NO": "https://gen.sendtric.com/countdown/e6o48au8p7",
    "SK": "https://gen.sendtric.com/countdown/62k3lqu865",
    "BENL": "https://gen.sendtric.com/countdown/7hl9wsdsx7",
    "BEFR": "https://gen.sendtric.com/countdown/fjiwrt8h4i",
    "RO": "https://gen.sendtric.com/countdown/z4janvo0ir"
  },
};

const categories = [
  {
    name: 'Storage beds',
    background: '#FEC273',
    color: '#000000',
    src: getImageUrl('20260227/20260227Category10.png', true),
    href: 'https://www.beliani.ch/beds/storage-beds/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 60,
    line: {
      show: false
    },
    products: [
      // VION
      {
        id: '696242',
        src: getImageUrl('20260227/20260227Category11.png', true),
      },
      // BIZOU
      {
        id: '686233',
        src: getImageUrl('20260227/20260227Category12.png', true),
      },
      // SOUTRIN
      {
        id: '631717',
        src: getImageUrl('20260227/20260227Category13.png', true),
      },
      // CASTELNAVET
      {
        id: '604810',
        src: getImageUrl('20260227/20260227Category14.png', true),
      },
    ],
  },
  {
    name: 'Wooden beds',
    background: '#FFE3D8',
    color: '#000000',
    src: getImageUrl('20260227/20260227Category20.png', true),
    href: 'https://www.beliani.ch/beds/wooden-beds/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    products: [
      // HAILLICOURT
      {
        id: '690345',
        src: getImageUrl('20260227/20260227Category21.png', true),
      },
      // BRUNEMONT 
      {
        id: '671146',
        src: getImageUrl('20260227/20260227Category22.png', true),
      },
      // DOSCHES
      {
        id: '670961',
        src: getImageUrl('20260227/20260227Category23.png', true),
      },
      // GIULIA
      {
        id: '9982',
        src: getImageUrl('20260227/20260227Category24.png', true),
      },
    ],
  },
  {
    name: 'Fabric beds',
    background: '#FEC273',
    color: '#000000',
    src: getImageUrl('20260227/20260227Category30.png', true),
    href: 'https://www.beliani.ch/beds/fabric-beds/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    products: [
      // ARBOIS
      {
        id: '670398',
        src: getImageUrl('20260227/20260227Category31.png', true),
      },
      // VALOGNES
      {
        id: '411275',
        src: getImageUrl('20260227/20260227Category32.png', true),
      },
      // VINAY
      {
        id: '416811',
        src: getImageUrl('20260227/20260227Category33.png', true),
      },
      // SOULISSE
      {
        id: '634161',
        src: getImageUrl('20260227/20260227Category34.png', true),
      },
    ],
  },
  {
    name: 'Adjustable beds',
    background: '#FFE3D8',
    color: '#000000',
    src: getImageUrl('20260227/20260227Category40.png', true),
    href: 'https://www.beliani.ch/beds/adjustable-beds/looks/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    products: [
      // DUKE III
      {
        id: '700944',
        src: getImageUrl('20260227/20260227Category41.png', true),
      },
      // DUKE II
      {
        id: '624427',
        src: getImageUrl('20260227/20260227Category42.png', true),
      },
      // DUKE II
      {
        id: '625720',
        src: getImageUrl('20260227/20260227Category43.png', true),
      },
      // DUKE II
      {
        id: '625852',
        src: getImageUrl('20260227/20260227Category44.png', true),
      },
    ],
  },
];


export default new entities.Campaign({
  startId: "40973",
  name: "Beds",
  date: "27.02.2026",
  issueCardId: "450385",
  lpId: "28786",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/U8WTOkxCow9VAwcE728mY9/2026.02.27---Newsletter---Beds?node-id=11001-3875&t=EVgGfIL7SBUCqFTO-1",
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
        backgroundColor: "#F6E7E6",
        type: "timer",
        image: "20260227free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FEC273",
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
        backgroundColor: "#F6E7E6",
        type: "timer",
        image: "20260227free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FEC273",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});