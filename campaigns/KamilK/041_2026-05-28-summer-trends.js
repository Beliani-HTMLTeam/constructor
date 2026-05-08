import { DimasTranslateImage } from '@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage';

// Campaign generated from form
const campaignTranslationsSheet = '2026::28.05.26 - Summer Trends';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20',
    name: 'intro',
  },
  {
    tableRange: '21:24',
    name: 'categories',
  },
  {
    tableRange: '25:28',
    name: 'paragraphs',
  },
  {
    tableRange: '29:30',
    name: 'condition',
  },
  { tableRange: '15:16', name: 'timer', tableName: '2026::Voucher - 25.05.26 - Outdoor rug' }, // translations from 06.02 but link to 13.02
  // {
  //   tableRange: '27:29', // 2nd link is normal, without filter
  //   name: 'categoryLinks',
  // },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-28' }),
  TopImageTitle_src: translateImage({ value: '20260528_01.png' }),

  TopImage_src: getImageUrl('20260528_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-28' }),

  Timer_href: translateLink({ value: 'content/lp26-05-25' }),

  Banner_1: translateLink({ value: 'content/lp26-05-14' }),
  Banner_1_Image: translateImage({ value: '20260514b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-13' }),
  Banner_2_Image: translateImage({ value: '20260513b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFF4E6',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  isWithTitles: true,
  background: '#FF2F00',
  color: '#ffffff',
  freebies: getImageUrl('20260528free.png', true),
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/2g5l9vf7fa",
    "CHFR": "https://gen.sendtric.com/countdown/h4q487p0d7",
    "FR": "https://gen.sendtric.com/countdown/5mziwjez8w",
    "DE": "https://gen.sendtric.com/countdown/ao5flw4tdm",
    "UK": "https://gen.sendtric.com/countdown/d43ultl7xd",
    "AT": "https://gen.sendtric.com/countdown/7t8l29t47u",
    "ES": "https://gen.sendtric.com/countdown/f17ep2i0lj",
    "PL": "https://gen.sendtric.com/countdown/k2o278n9d3",
    "NL": "https://gen.sendtric.com/countdown/gm4zk9axpf",
    "PT": "https://gen.sendtric.com/countdown/c6y4z53458",
    "IT": "https://gen.sendtric.com/countdown/bpx549g98a",
    "SE": "https://gen.sendtric.com/countdown/0mvf00r1my",
    "HU": "https://gen.sendtric.com/countdown/eoq21jkexs",
    "DK": "https://gen.sendtric.com/countdown/fnkgki7g3t",
    "CZ": "https://gen.sendtric.com/countdown/v11yo51cnv",
    "FI": "https://gen.sendtric.com/countdown/fxmu12z2jw",
    "NO": "https://gen.sendtric.com/countdown/62btd0ldlr",
    "SK": "https://gen.sendtric.com/countdown/7qrz9ixme7",
    "BENL": "https://gen.sendtric.com/countdown/73eetvb09b",
    "BEFR": "https://gen.sendtric.com/countdown/fklarsogpd",
    "RO": "https://gen.sendtric.com/countdown/ng2e76iq8e"
  },
  isCtaVisible: true,
};

const categories = [
  {
    name: 'Warm Neutrals',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260528_Cat00.jpg', true),
    href: "https://www.beliani.ch/trends/cosy-neutral/",
    // hrefSource: 'queries',
    type: 'grid',
    cta: {
      show: true,
    },
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      // CAINE
      {
        id: 315442,
        src: getImageUrl('20260528_Pic01.png', true),
      },
      // SKOVDE
      {
        id: 515888,
        src: getImageUrl('20260528_Pic02.png', true),
      },
      // KOZANI
      {
        id: 363119,
        src: getImageUrl('20260528_Pic03.png', true),
      },
      // AMMON
      {
        id: 622070,
        src: getImageUrl('20260528_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Cocoon Bedroom',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260528_Cat10.jpg', true),
    href: 'https://www.beliani.ch/trends/snug-and-stylish/',
    // href: 'https://www.beliani.ch/trends/woodcore/',
    // hrefSource: 'queries',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    cta: {
      show: true,
    },
    paddingTop: 35,
    products: [
      // BIOLLET
      {
        id: 497915,
        src: getImageUrl('20260528_Pic11.png', true),
      },
      // HUMUYA
      {
        id: 685347,
        src: getImageUrl('20260528_Pic12.png', true),
      },
      // VAUCLUSE
      {
        id: 579002,
        src: getImageUrl('20260528_Pic13.png', true),
      },
      // AVONDALE
      {
        id: 299615,
        src: getImageUrl('20260528_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Organic Shapes',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260528_Cat20.jpg', true),
    // hrefSource: 'queries',
    href: 'https://www.beliani.ch/trends/artful-silhouettes/',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    cta: {
      show: true,
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      // BUREA
      {
        id: 656474,
        src: getImageUrl('20260528_Pic21.png', true),
      },
      // KRIOS
      {
        id: 442761,
        src: getImageUrl('20260528_Pic22.png', true),
      },
      // VELTADA
      {
        id: 680133,
        src: getImageUrl('20260528_Pic23.png', true),
      },
      // LAMBINA
      {
        id: 708177,
        src: getImageUrl('20260528_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Mid Century Dining Room',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260528_Cat30.jpg', true),
    // hrefSource: 'queries',
    href: 'https://www.beliani.ch/dining-room-furniture/',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    cta: {
      show: true,
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      // CORDOVA
      {
        id: 424428,
        src: getImageUrl('20260528_Pic31.png', true),
      },
      // HOPS
      {
        id: 721933,
        src: getImageUrl('20260528_Pic32.png', true),
      },
      // ORIN
      {
        id: 398757,
        src: getImageUrl('20260528_Pic33.png', true),
      },
      // VERUGAL
      {
        id: 644166,
        src: getImageUrl('20260528_Pic34.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: 43694,
  name: 'Summer Trends',
  date: '28.05.2026',
  issueCardId: 468800,
  lpId: 30128,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/B9KMLtNcAaFf0otSzcPKyw/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFF4E6',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
        // image: '20260528_Free.png',
        isWithTitles: true,
        spaceAfter: 'newsletterBottom25px',
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FFF4E6',
        alignment: 'left',
        type: 'paragraph',
        spaceBottom: 'newsletterBottom45px',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt,
      css: types.CSS.LP,
      background: '#FFF4E6',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
        // image: '20260528_Free.png',
        isWithTitles: true,
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FFF4E6',
        alignment: 'left',
        type: 'paragraph',
        spaceBottom: 'newsletterBottom45px',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
  ],
});
