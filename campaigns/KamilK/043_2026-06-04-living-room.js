// Campaign generated from form
const campaignTranslationsSheet = '2026::04.06.26 - Living Room';

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
    tableName: '2026::Voucher - 02.06.26 - Free vase',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-04' }),
  TopImageTitle_src: translateImage({ value: '20260604_01.png' }),

  TopImage_src: getImageUrl('20260604_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-04' }),

  Banner_1: translateLink({ value: 'content/lp26-05-28' }),
  Banner_1_Image: translateImage({ value: '20260528b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-27' }),
  Banner_2_Image: translateImage({ value: '20260527b.png' }),

  Intro_cta_href: "https://www.beliani.ch/living-room-furniture/",

  Timer_href: translateLink({ value: 'content/lp26-06-02' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Sofas',
    src: getImageUrl('20260604_Cat00.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/sofas/',
    background: '#EAD9D9',
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
      // TAMRE
      {
        id: 618691,
        src: getImageUrl('20260604_Pic01.png', true),
      },
      // DOLVA
      {
        id: 394648,
        src: getImageUrl('20260604_Pic02.png', true),
      },
      // BYSKE
      {
        id: 588475,
        src: getImageUrl('20260604_Pic03.png', true),
      },
      // SAVALEN
      {
        id: 122838,
        src: getImageUrl('20260604_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Armchairs',
    src: getImageUrl('20260604_Cat10.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
    background: '#F6E7E6',
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
      // DALBY
      {
        id: 588809,
        src: getImageUrl('20260604_Pic11.png', true),
      },
      // EVJE
      {
        id: 516175,
        src: getImageUrl('20260604_Pic12.png', true),
      },
      // NOLVIK
      {
        id: 597328,
        src: getImageUrl('20260604_Pic13.png', true),
      },
      // OULU
      {
        id: 496578,
        src: getImageUrl('20260604_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Coffee Tables',
    src: getImageUrl('20260604_Cat20.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/tables/coffee-tables/',
    background: '#EAD9D9',
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
      // IVINS
      {
        id: 556578,
        src: getImageUrl('20260604_Pic21.png', true),
      },
      // ROYALLA
      {
        id: 672025,
        src: getImageUrl('20260604_Pic22.png', true),
      },
      // GRANGE
      {
        id: 440792,
        src: getImageUrl('20260604_Pic23.png', true),
      },
      // DACOMA
      {
        id: 563646,
        src: getImageUrl('20260604_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Storage',
    src: getImageUrl('20260604_Cat30.jpg', true),
    href: 'https://www.beliani.ch/living-room-furniture/storage/',
    background: '#F6E7E6',
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
      // PASCO
      {
        id: 517809,
        src: getImageUrl('20260604_Pic31.png', true),
      },
      // JOSE
      {
        id: 271190,
        src: getImageUrl('20260604_Pic32.png', true),
      },
      // NEWPORT
      {
        id: 449879,
        src: getImageUrl('20260604_Pic33.png', true),
      },
      // TIMMINS
      {
        id: 556254,
        src: getImageUrl('20260604_Pic34.png', true),
      },
    ],
  },
];

const timer = {
  freebies: getImageUrl('20260604free.png', true),
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/qppru4jz44",
    "CHFR": "https://gen.sendtric.com/countdown/by0wue5y57",
    "FR": "https://gen.sendtric.com/countdown/443xr2l69b",
    "DE": "https://gen.sendtric.com/countdown/dp0j0w17iw",
    "UK": "https://gen.sendtric.com/countdown/4e4hvd00wb",
    "AT": "https://gen.sendtric.com/countdown/dmqgqrb534",
    "ES": "https://gen.sendtric.com/countdown/0nf7ptn2ew",
    "PL": "https://gen.sendtric.com/countdown/1ae8a72t45",
    "NL": "https://gen.sendtric.com/countdown/pdlw6hvl8g",
    "PT": "https://gen.sendtric.com/countdown/q2e6em9v0e",
    "IT": "https://gen.sendtric.com/countdown/313u22mxs2",
    "SE": "https://gen.sendtric.com/countdown/mnf33hasau",
    "HU": "https://gen.sendtric.com/countdown/6i9ggq0mig",
    "DK": "https://gen.sendtric.com/countdown/p07yfabdo7",
    "CZ": "https://gen.sendtric.com/countdown/8gavpmimyb",
    "FI": "https://gen.sendtric.com/countdown/7mu99di3p8",
    "NO": "https://gen.sendtric.com/countdown/x5ulbx3yac",
    "SK": "https://gen.sendtric.com/countdown/p12aoag3aj",
    "BENL": "https://gen.sendtric.com/countdown/2blhjji3yy",
    "BEFR": "https://gen.sendtric.com/countdown/hnjm7dlayy",
    "RO": "https://gen.sendtric.com/countdown/8bcn5o5fnr"
  },
};

export default new entities.Campaign({
  startId: 44176,
  name: 'Living Room',
  date: '04.06.2026',
  issueCardId: 482526,
  lpId: 30413,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/P5mOx8E0oKB4aCLawCwHkk/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#EAD9D9',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#EAD9D9', // unused
        alignment: 'left',
        type: 'paragraph',
        cta: {
          show: true,
          spaceAfter: "newsletterBottom35px",
        }
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#F6E7E6',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#EAD9D9',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#EAD9D9', // unused
        alignment: 'left',
        type: 'paragraph',
        cta: {
          show: true,
          spaceAfter: "newsletterBottom35px",
        }
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#F6E7E6',
        type: 'timer',
      },
    },
  ],
});
