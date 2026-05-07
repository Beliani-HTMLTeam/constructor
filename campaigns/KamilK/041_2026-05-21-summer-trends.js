import { DimasTranslateImage } from '@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage';

// Campaign generated from form
const campaignTranslationsSheet = '2026::21.05.26 - Summer Trends';

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
  { tableRange: '15:16', name: 'timer', tableName: '2026::Voucher - 18.05.26 - Free table lamp' }, // translations from 06.02 but link to 13.02
  // {
  //   tableRange: '27:29', // 2nd link is normal, without filter
  //   name: 'categoryLinks',
  // },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-21' }),
  TopImageTitle_src: translateImage({ value: '20260521_01.png' }),

  TopImage_src: getImageUrl('20260521_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-05-21' }),

  Timer_href: translateLink({ value: 'content/lp26-05-18' }),

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
  freebies: getImageUrl('20260521free.png', true),
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/1sv2y39bqt",
    "CHFR": "https://gen.sendtric.com/countdown/ag5yi82nph",
    "FR": "https://gen.sendtric.com/countdown/6gaobuv4ox",
    "DE": "https://gen.sendtric.com/countdown/4qrml6pqnb",
    "UK": "https://gen.sendtric.com/countdown/cwex5bnr2m",
    "AT": "https://gen.sendtric.com/countdown/vgjot86e9a",
    "ES": "https://gen.sendtric.com/countdown/1lbvjmrspm",
    "PL": "https://gen.sendtric.com/countdown/midu5ltm6s",
    "NL": "https://gen.sendtric.com/countdown/bxgvt6gdm3",
    "PT": "https://gen.sendtric.com/countdown/pjeovuqouz",
    "IT": "https://gen.sendtric.com/countdown/p02zm5u18r",
    "SE": "https://gen.sendtric.com/countdown/gmzdtgahlt",
    "HU": "https://gen.sendtric.com/countdown/d2msvigjxp",
    "DK": "https://gen.sendtric.com/countdown/7rq8d5bvh3",
    "CZ": "https://gen.sendtric.com/countdown/wmfdt98qr1",
    "FI": "https://gen.sendtric.com/countdown/08mppp2fpt",
    "NO": "https://gen.sendtric.com/countdown/a9l3haa9kw",
    "SK": "https://gen.sendtric.com/countdown/n2wns38dh3",
    "BENL": "https://gen.sendtric.com/countdown/qed79mqlug",
    "BEFR": "https://gen.sendtric.com/countdown/y75e8k951i",
    "RO": "https://gen.sendtric.com/countdown/34v785z6df"
  },
  isCtaVisible: true,
};

const categories = [
  {
    name: 'Warm Neutrals',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260521_Cat00.jpg', true),
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
        src: getImageUrl('20260521_Pic01.jpg', true),
      },
      // SKOVDE
      {
        id: 515888,
        src: getImageUrl('20260521_Pic02.jpg', true),
      },
      // KOZANI
      {
        id: 363119,
        src: getImageUrl('20260521_Pic03.jpg', true),
      },
      // AMMON
      {
        id: 622070,
        src: getImageUrl('20260521_Pic04.jpg', true),
      },
    ],
  },
  {
    name: 'Cocoon Bedroom',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260521_Cat10.jpg', true),
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
        src: getImageUrl('20260521_Pic11.jpg', true),
      },
      // HUMUYA
      {
        id: 685347,
        src: getImageUrl('20260521_Pic12.jpg', true),
      },
      // VAUCLUSE
      {
        id: 579002,
        src: getImageUrl('20260521_Pic13.jpg', true),
      },
      // AVONDALE
      {
        id: 299615,
        src: getImageUrl('20260521_Pic14.jpg', true),
      },
    ],
  },
  {
    name: 'Organic Shapes',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260521_Cat20.jpg', true),
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
        src: getImageUrl('20260521_Pic21.jpg', true),
      },
      // KRIOS
      {
        id: 442761,
        src: getImageUrl('20260521_Pic22.jpg', true),
      },
      // VELTADA
      {
        id: 680133,
        src: getImageUrl('20260521_Pic23.jpg', true),
      },
      // LAMBINA
      {
        id: 708177,
        src: getImageUrl('20260521_Pic24.jpg', true),
      },
    ],
  },
  {
    name: 'Mid Century Dining Room',
    background: '#FFF4E6',
    color: '#000000',
    src: getImageUrl('20260521_Cat30.jpg', true),
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
        src: getImageUrl('20260521_Pic31.jpg', true),
      },
      // HOPS
      {
        id: 721933,
        src: getImageUrl('20260521_Pic32.jpg', true),
      },
      // ORIN
      {
        id: 398757,
        src: getImageUrl('20260521_Pic33.jpg', true),
      },
      // VERUGAL
      {
        id: 644166,
        src: getImageUrl('20260521_Pic34.jpg', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: 43694,
  name: 'Summer Trends',
  date: '21.05.2026',
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
        color: '#ffffff',
        backgroundColor: '#FF2F00',
        type: 'timer',
        // image: '20260521_Free.png',
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
        color: '#ffffff',
        backgroundColor: '#FF2F00',
        type: 'timer',
        // image: '20260521_Free.png',
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
