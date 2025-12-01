import { FridayEolProducts } from "@/templates/FridayEolProducts";

// Campaign generated from form
const campaignTranslationsSheet = '12.12.2025 - EOLs';

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
    "tableRange": "36:37",
    "name": "timer"
  },
  {
    "tableRange": "19",
    "name": "CTAcategory"
  },
  {
    "tableRange": "20",
    "name": "CTAintro"
  },
  {
    "tableRange": "21:26",
    "name": "categories"
  },
  {
    "tableRange": "30:31",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp2025-12-12' }),
  TopImageTitle_src: translateImage({ value: '20251212_01.png' }),
  TopImage: getImageUrl('20251212_gif.gif', true),
  TimerFrebie: getImageUrl('20251212free.png', true),
  Timer_href: translateLink({ value: 'content/lp2025-12-08' }),
  CTAcategory: translateLink({ value: 'last-pieces/' }),
  Banner_1: translateLink({ value: 'content/lp25-12-04' }),
  Banner_1_Image: translateImage({ value: '20251204b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-03' }),
  Banner_2_Image: translateImage({ value: '20251203b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#750000',
  type: 'up_to',
};

const categories = [
  {
    name: "Seating",
    background: "#750000",
    color: "#FFFFFF",
    src: getImageUrl("20251212Category1.png", true),
    href: "",
    type: "EOL",
    products: [
      {
        id: "674378",
        src: getImageUrl("20251212Category1.png", true),
      },
      {
        id: "418057",
        src: getImageUrl("20251212Category11.png", true),
      },
      {
        id: "579271",
        src: getImageUrl("20251212Category12.png", true),
      },
      {
        id: "622754",
        src: getImageUrl("20251212Category13.png", true),
      },
      {
        id: "669828",
        src: getImageUrl("20251212Category14.png", true),
      },
    ],
  },
  {
    name: "Tables & storage",
    background: "#FF2F00",
    color: "#FFFFFF",
    src: getImageUrl("20251212Category2.png", true),
    href: "",
    products: [
      {
        id: "344543",
        src: getImageUrl("20251212Category2.png", true),
      },
      {
        id: "563721",
        src: getImageUrl("20251212Category21.png", true),
      },
      {
        id: "612563",
        src: getImageUrl("20251212Category22.png", true),
      },
      {
        id: "494458",
        src: getImageUrl("20251212Category23.png", true),
      },
      {
        id: "419679",
        src: getImageUrl("20251212Category24.png", true),
      },
    ],
  },
  {
    name: "Accessories",
    background: "#750000",
    color: "#FFFFFF",
    src: getImageUrl("20251212Category3.png", true),
    href: "",
    products: [
      {
        id: "577787",
        src: getImageUrl("20251212Category3.png", true),
      },
      {
        id: "500760",
        src: getImageUrl("20251212Category31.png", true),
      },
      {
        id: "495457",
        src: getImageUrl("20251212Category32.png", true),
      },
      {
        id: "433892",
        src: getImageUrl("20251212Category33.png", true),
      },
      {
        id: "425373",
        src: getImageUrl("20251212Category34.png", true),
      },
    ],
  },
];
const timer = {
  background: "#F6E7E6",
  color: "#000000",
  "CHDE": "https://gen.sendtric.com/countdown/19awt2va48",
  "CHFR": "https://gen.sendtric.com/countdown/x95xpoe42b",
  "FR": "https://gen.sendtric.com/countdown/8gv03wv6d0",
  "DE": "https://gen.sendtric.com/countdown/lt6ni8z5dw",
  "UK": "https://gen.sendtric.com/countdown/jejab1y9ey",
  "AT": "https://gen.sendtric.com/countdown/u74b8kgvd4",
  "ES": "https://gen.sendtric.com/countdown/c4dfkf2li2",
  "PL": "https://gen.sendtric.com/countdown/ydqgrdl98q",
  "NL": "https://gen.sendtric.com/countdown/pt4ysbhdgv",
  "PT": "https://gen.sendtric.com/countdown/zgg2kirmfj",
  "IT": "https://gen.sendtric.com/countdown/fdg56wy6xh",
  "SE": "https://gen.sendtric.com/countdown/6iyzvu9he6",
  "HU": "https://gen.sendtric.com/countdown/4v0wn9w0me",
  "DK": "https://gen.sendtric.com/countdown/5jpryg8bi8",
  "CZ": "https://gen.sendtric.com/countdown/pyjwoxks2e",
  "FI": "https://gen.sendtric.com/countdown/43y1z5e5kd",
  "NO": "https://gen.sendtric.com/countdown/nlivydpwon",
  "SK": "https://gen.sendtric.com/countdown/q5iwz679y9",
  "BENL": "https://gen.sendtric.com/countdown/zggum4s6rq",
  "BEFR": "https://gen.sendtric.com/countdown/yovjvkvb8g",
  "RO": "https://gen.sendtric.com/countdown/c4svklbybh"
};

export default new entities.Campaign({
  startId: "38824",
  name: "12.12.2025 - EOLs",
  date: "12.12.2025",
  issueCardId: "424438",
  lpId: "27712",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/GODbX5SBqGXHVuBBOJacK3/Newsletter-EOLs---Friday-2025.12.12--Copy---Copy-?t=XZjqBqS7Z0q56OmW-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: FridayEolProducts, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#750000",
      color: "#FFFFFF",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        type: "",
        image: "20251212free.png",
      },
      intro: {
        color: "#FFFFFF",
        backgroundColor: "#750000",
        alignment: "center",
        type: "",
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: FridayEolProducts, // User should change this
      css: types.CSS.LP,
      background: "#750000",
      color: "#FFFFFF",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        type: "",
        image: "20251212free.png",
      },
      intro: {
        color: "#FFFFFF",
        backgroundColor: "#750000",
        alignment: "center",
        type: "",
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
  ],
});