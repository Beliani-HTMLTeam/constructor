import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::04.03.26 - Outdoor bestsellers';

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
    "tableRange": "19:26",
    "name": "categories"
  },
  {
    "tableRange": "31:32",
    "name": "condition"
  },
  {
    "tableRange": "28",
    "name": "CTA"
  },
  {
    "tableRange": "27",
    "name": "categoryLinks" // !!!!!
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-04' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260304_01.png', folder: '20260304', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260304/20260304topgif.gif', true),
  Inside_src: DimasTranslateImage({ value: '20260304inside.gif', folder: '20260304', placeholderPosition: '47' }),
  Inside_href: translateLink({ value: 'content/lp26-03-02' }),
  TopImage_href: translateLink({ value: 'content/lp26-03-04' }),
  Banner_1: translateLink({ value: 'content/lp26-02-18' }),
  Banner_1_Image: translateImage({ value: '20260218b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-25' }),
  Banner_2_Image: translateImage({ value: '20260225b.png' }),
};

const TopImageTitle_data = {
  color: '#750000',
  backgroundColor: '#FFEFD9',
  type: 'line2bigger',
};

const categories = [
  {
    name: 'Lounge sets',
    background: '#FFEFD9',
    color: '#000000',
    href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
    type: 'big-grid_line',
    title: {
      show: true,
    },
    paragraph: {
      show: false,
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    showPrices: false,
    showNames: false,
    paddingTop: 45,
    products: [
      {
        id: '517250',
        src: getImageUrl('20260304/20260304Category10.png', true),
        type: 'full_width',
      },
      {
        id: '338035',
        src: getImageUrl('20260304/20260304Category11.png', true),
      },
      {
        id: '326799',
        src: getImageUrl('20260304/20260304Category12.png', true),
      },
      {
        id: '143892',
        src: getImageUrl('20260304/20260304Category13.png', true),
      }
    ],
  },
  {
    name: 'Dining sets',
    background: '#FFEFD9',
    color: '#000000',
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
    type: 'big-grid_line',
    title: {
      show: true,
    },
    paragraph: {
      show: false,
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    showPrices: false,
    showNames: false,
    products: [
      {
        id: '555774',
        src: getImageUrl('20260304/20260304Category20.png', true),
        type: 'full_width',
      },
      {
        id: '511765',
        src: getImageUrl('20260304/20260304Category21.png', true),
      },
      {
        id: '178132',
        src: getImageUrl('20260304/20260304Category22.png', true),
      },
      {
        id: '394375',
        src: getImageUrl('20260304/20260304Category23.png', true),
      }
    ],
  },
  {
    name: 'Parasols',
    background: '#FFEFD9',
    color: '#000000',
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    type: 'big-grid_line',
    title: {
      show: true,
    },
    paragraph: {
      show: false,
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    showPrices: false,
    showNames: false,
    products: [
      {
        id: '30239',
        src: getImageUrl('20260304/20260304Category30.png', true),
        type: 'full_width',
      },
      {
        id: '522759',
        src: getImageUrl('20260304/20260304Category31.png', true),
      },
      {
        id: '30225',
        src: getImageUrl('20260304/20260304Category32.png', true),
      },
      {
        id: '368940',
        src: getImageUrl('20260304/20260304Category33.png', true),
      }
    ],
  },
  {
    name: 'Balcony furniture',
    background: '#FFEFD9',
    color: '#000000',
    href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
    type: 'big-grid_line',
    title: {
      show: true,
    },
    paragraph: {
      show: false,
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    showPrices: false,
    showNames: false,
    products: [
      {
        id: '294478',
        src: getImageUrl('20260304/20260304Category40.png', true),
        type: 'full_width',
      },
      {
        id: '126877',
        src: getImageUrl('20260304/20260304Category41.png', true),
      },
      {
        id: '198625',
        src: getImageUrl('20260304/20260304Category42.png', true),
      },
      {
        id: '294544',
        src: getImageUrl('20260304/20260304Category43.png', true),
      }
    ],
  },
  {
    name: 'Swings',
    background: '#FFEFD9',
    color: '#000000',
    href: 'https://www.beliani.ch/outdoor-furniture/swings/',
    type: 'big-grid_line',
    title: {
      show: true,
    },
    paragraph: {
      show: false,
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    showPrices: false,
    showNames: false,
    products: [
      {
        id: '591546',
        src: getImageUrl('20260304/20260304Category50.png', true),
        type: 'full_width',
      },
      {
        id: '59013',
        src: getImageUrl('20260304/20260304Category51.png', true),
      },
      {
        id: '61818',
        src: getImageUrl('20260304/20260304Category52.png', true),
      },
      {
        id: '58864',
        src: getImageUrl('20260304/20260304Category53.png', true),
      }
    ],
  },
  {
    name: 'Storage',
    background: '#FFEFD9',
    color: '#000000',
    hrefSource: 'queries',
    type: 'big-grid_line',
    title: {
      show: true,
    },
    paragraph: {
      show: false,
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    showPrices: false,
    showNames: false,
    products: [
      {
        id: '198292',
        src: getImageUrl('20260304/20260304Category60.png', true),
        type: 'full_width',
      },
      {
        id: '117104',
        src: getImageUrl('20260304/20260304Category61.png', true),
      },
      {
        id: '293954',
        src: getImageUrl('20260304/20260304Category62.png', true),
      },
      {
        id: '97803',
        src: getImageUrl('20260304/20260304Category63.png', true),
      }
    ],
  },
  {
    name: 'Fire pits & grills',
    background: '#FFEFD9',
    color: '#000000',
    href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
    type: 'big-grid_line',
    title: {
      show: true,
    },
    paragraph: {
      show: false,
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    showPrices: false,
    showNames: false,
    products: [
      {
        id: '650849',
        src: getImageUrl('20260304/20260304Category70.png', true),
        type: 'full_width',
      },
      {
        id: '301788',
        src: getImageUrl('20260304/20260304Category71.png', true),
      },
      {
        id: '85075',
        src: getImageUrl('20260304/20260304Category72.png', true),
      },
      {
        id: '315877',
        src: getImageUrl('20260304/20260304Category73.png', true),
      }
    ],
  },
  {
    name: 'Accessories',
    background: '#FFEFD9',
    color: '#000000',
    href: 'https://www.beliani.ch/garden-furniture/garden-accessories/',
    type: 'big-grid_line',
    title: {
      show: true,
    },
    paragraph: {
      show: false,
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    showPrices: false,
    showNames: false,
    products: [
      {
        id: '442053',
        src: getImageUrl('20260304/20260304Category80.png', true),
        type: 'full_width',
      },
      {
        id: '258354',
        src: getImageUrl('20260304/20260304Category81.png', true),
      },
      {
        id: '586179',
        src: getImageUrl('20260304/20260304Category82.png', true),
      },
      {
        id: '600561',
        src: getImageUrl('20260304/20260304Category83.png', true),
      }
    ],
  },
];

export default new entities.Campaign({
  startId: "41037",
  name: "Outdoor bestsellers",
  date: "04.03.2026",
  issueCardId: "451222",
  lpId: "28824",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/XvDQcyfNPx0NFBQbZk97Su/2026.03.04---Outdoor-bestsellers?node-id=0-1&t=bbsL6n9zWAGbWnaX-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.FridayLikeThursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFEFD9",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFEFD9",
        type: "running_line_gif",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFEFD9",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.FridayLikeThursday, // User should change this
      css: types.CSS.LP,
      background: "#FFEFD9",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFEFD9",
        type: "running_line_gif",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFEFD9",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});