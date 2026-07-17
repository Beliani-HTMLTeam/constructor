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
  TopImageTitle_href: translateLink({ value: 'content/timer_test' }),
  TopImageTitle_src: translateImage({ value: '20260604_01.png' }),

  TopImage_src: getImageUrl('20260604_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/timer_test' }),

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
  deadline: '2026-06-07',
};

export default new entities.Campaign({
  startId: 43373,
  name: 'Living Room WITH PROLO TIMER',
  date: '04.06.2026',
  issueCardId: 482526,
  lpId: 29961,
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
      template: templates.Thursday_ProloTimer, // User should change this
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
      template: templates.Thursday_ProloTimer, // User should change this
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
