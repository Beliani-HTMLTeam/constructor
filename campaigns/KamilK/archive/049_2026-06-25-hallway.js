// Campaign generated from form
const campaignTranslationsSheet = '2026::25.06.26 - Hallway';

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
    name: 'paragraphs',
  },
  // {
  //   tableRange: '21:24',
  //   name: 'categories',
  // },
  {
    tableRange: '25:26',
    name: 'condition',
  },
  {
    tableRange: '15:16',
    name: 'timer',
    tableName: '2026::22.06.26 - Free Bed Linen',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-25' }),
  TopImageTitle_src: translateImage({ value: '20260625_01.png' }),

  TopImage_src: getImageUrl('20260625_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-25' }),

  Banner_1: translateLink({ value: 'content/lp26-06-18' }),
  Banner_1_Image: translateImage({ value: '20260618b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-06-17' }),
  Banner_2_Image: translateImage({ value: '20260617b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-06-22' }),

  Intro_cta_href: "https://www.beliani.ch/hallway/",
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Storage',
    src: getImageUrl('20260625_Cat00.jpg', true),
    href: 'https://www.beliani.ch/hallway/storage/',
    background: '#FFE9CC',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '60',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // LEANDRO 
      {
        id: 644443,
        src: getImageUrl('20260625_Pic01.png', true),
      },
      // DURACK
      {
        id: 708181,
        src: getImageUrl('20260625_Pic02.png', true),
      },
      // MONNAIE 
      {
        id: 553994,
        src: getImageUrl('20260625_Pic03.png', true),
      },
      // RALTSON 
      {
        id: 527307,
        src: getImageUrl('20260625_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Hallway seating',
    src: getImageUrl('20260625_Cat10.jpg', true),
    href: 'https://www.beliani.ch/hallway/hallway-seating/hallway-benches/',
    background: '#FFE6DB',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // WASHINGTON 
      {
        id: 564765,
        src: getImageUrl('20260625_Pic11.png', true),
      },
      // ARTAS 
      {
        id: 628879,
        src: getImageUrl('20260625_Pic12.png', true),
      },
      // BENDIGO 
      {
        id: 672917,
        src: getImageUrl('20260625_Pic13.png', true),
      },
      // VERGENNES 
      {
        id: 672655,
        src: getImageUrl('20260625_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Mirrors',
    src: getImageUrl('20260625_Cat20.jpg', true),
    href: 'https://www.beliani.ch/hallway/mirrors/',
    background: '#FFE9CC',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // BALEAL 
      {
        id: 439022,
        src: getImageUrl('20260625_Pic21.png', true),
      },
      // DIANCEY 
      {
        id: 448113,
        src: getImageUrl('20260625_Pic22.png', true),
      },
      // DRAVEIL 
      {
        id: 135012,
        src: getImageUrl('20260625_Pic23.png', true),
      },
      // LORENA 
      {
        id: 527345,
        src: getImageUrl('20260625_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Console Tables',
    src: getImageUrl('20260625_Cat30.jpg', true),
    href: 'https://www.beliani.ch/tables/console-tables/',
    background: '#FFE6DB',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // SELAH 
      {
        id: 553806,
        src: getImageUrl('20260625_Pic31.png', true),
      },
      // TILON 
      {
        id: 387435,
        src: getImageUrl('20260625_Pic32.png', true),
      },
      // KENDALL 
      {
        id: 652479,
        src: getImageUrl('20260625_Pic33.png', true),
      },
      // KARLO 
      {
        id: 643298,
        src: getImageUrl('20260625_Pic34.png', true),
      },
    ],
  },
];

const timer = {
  freebies: getImageUrl('20260625free.png', true),
  image: {
    "UK": "https://gen.sendtric.com/countdown/cwbwbj143h",
    "PL": "https://gen.sendtric.com/countdown/3z9mkvujgv",
    "DE": "https://gen.sendtric.com/countdown/tvglln81e9",
    "AT": "https://gen.sendtric.com/countdown/l9k52elzi6",
    "CHDE": "https://gen.sendtric.com/countdown/gnfqd8mzo7",
    "NL": "https://gen.sendtric.com/countdown/gkydzsm2es",
    "FR": "https://gen.sendtric.com/countdown/weayaappco",
    "CHFR": "https://gen.sendtric.com/countdown/murd3993wd",
    "ES": "https://gen.sendtric.com/countdown/kuzyo9zbvm",
    "PT": "https://gen.sendtric.com/countdown/oaj7ojurj2",
    "IT": "https://gen.sendtric.com/countdown/393uom6nkx",
    "DK": "https://gen.sendtric.com/countdown/dey6pg65eu",
    "NO": "https://gen.sendtric.com/countdown/e3s24mrn1x",
    "FI": "https://gen.sendtric.com/countdown/z7dmg5nxng",
    "SE": "https://gen.sendtric.com/countdown/cwmqzuqvb8",
    "CZ": "https://gen.sendtric.com/countdown/flaikkqoax",
    "SK": "https://gen.sendtric.com/countdown/fwo3m84tbv",
    "HU": "https://gen.sendtric.com/countdown/12w19hga1k",
    "RO": "https://gen.sendtric.com/countdown/kz81hkskek",
    "BENL": "https://gen.sendtric.com/countdown/di5gemz8cj",
    "BEFR": "https://gen.sendtric.com/countdown/xgbaqjb4gn"
  }
};

export default new entities.Campaign({
  startId: 45151,
  name: 'Hallway',
  date: '25.06.2026',
  issueCardId: 495541,
  lpId: 30892,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/63tl9BG4NLuZcj4p5Bbfvi/COPY-%7C-Newsletter-Hallway---Thursday-2026.06.25-FINAL--Copy-?node-id=10001-10249&t=Ec1mAZdixgwijy3C-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFE9CC',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFE9CC', // unused
        alignment: 'left',
        type: 'paragraph',
        cta: {
          show: true,
          spaceAfter: 'newsletterBottom35px',
        }
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FFE9CC',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFE9CC', // unused
        alignment: 'left',
        type: 'paragraph',
        cta: {
          show: true,
          spaceAfter: 'newsletterBottom35px',
        }
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
      },
    },
  ],
});
