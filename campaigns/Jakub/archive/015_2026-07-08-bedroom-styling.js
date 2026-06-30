// Campaign generated from form
const campaignTranslationsSheet = '2026::08.07.26 - Bedroom Styling';

const tableQueries = [
  {
    "tableRange": "16:17",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "19:22",
    "name": "paragraphs"
  },
  {
    "tableRange": "23:24",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-08' }),
  TopImageTitle_src: translateImage({ value: '20260708_01.png' }),
  Banner_1: translateLink({ value: 'content/lp26-07-01' }),
  Banner_1_Image: translateImage({ value: '20260701b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-06-26' }),
  Banner_2_Image: translateImage({ value: '20260626b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FED399',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Beds',
    src: getImageUrl('20260708Category10.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    background: '#FED399',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // DOSCHES
      {
        id: '670861',
        src: getImageUrl('20260708Category11.png', true),
      },
      // GONFARON
      {
        id: '610528',
        src: getImageUrl('20260708Category12.png', true),
      },
      // BOISSET
      {
        id: '447247',
        src: getImageUrl('20260708Category13.png', true),
      },
      // SALERNAS
      {
        id: '610357',
        src: getImageUrl('20260708Category14.png', true),
      },
    ],
  },
  {
    name: 'Bedside tables',
    src: getImageUrl('20260708Category20.jpg', true),
    href: 'https://www.beliani.ch/storage/bedside-tables/',
    background: '#FFCCB7',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // BLYTHE
      {
        id: '599151',
        src: getImageUrl('20260708Category21.png', true),
      },
      // CLUNES
      {
        id: '692630',
        src: getImageUrl('20260708Category22.png', true),
      },
      // NIKEA
      {
        id: '722180',
        src: getImageUrl('20260708Category23.png', true),
      },
      // COSTELLO
      {
        id: '672654',
        src: getImageUrl('20260708Category24.png', true),
      },
    ],
  },
  {
    name: 'Lighting',
    //pt:'Soluções de iluminação'
    src: getImageUrl('20260708Category30.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/lighting/',
    background: '#FED399',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // LIBERIA
      {
        id: '419977',
        src: getImageUrl('20260708Category31.png', true),
      },
      // SALZA
      {
        id: '236006',
        src: getImageUrl('20260708Category32.png', true),
      },
      // SIGI
      {
        id: '723367',
        src: getImageUrl('20260708Category33.png', true),
      },
      // LOKY
      {
        id: '728747',
        src: getImageUrl('20260708Category34.png', true),
      },
    ],
  },
  {
    name: 'Textiles',
    src: getImageUrl('20260708Category40.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/textiles/',
    background: '#FFCCB7',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // YERBENT
      {
        id: '502610',
        src: getImageUrl('20260708Category41.png', true),
      },
      // SUMNER
      {
        id: '720158',
        src: getImageUrl('20260708Category42.png', true),
      },
      // SEBRINE
      {
        id: '450818',
        src: getImageUrl('20260708Category43.png', true),
      },
      // CAESIA
      {
        id: '498543',
        src: getImageUrl('20260708Category44.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260311_Cat30.png', true),
    // href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
    background: '#FFFFFF',
    color: '#000000',
    type: 'categorytiles',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    title: {
      className: 'newsletterAditionalTitle',
      align: 'center',
      show: true,
      spaceBefore: 'newsletterBottom40px',
      // spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
    },
    tiles: [
      {
        name: 'Storage',
        src: getImageUrl('20260708Additional1.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/storage/',
      },
      {
        name: 'Rugs',
        src: getImageUrl('20260708Additional2.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/rugs/',
        hrefOverrides: { cz: 'https://www.beliani.cz/koberce/'},
      },
      {
        name: 'Mirrors',
        src: getImageUrl('20260708Additional3.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/mirrors/',
        hrefOverrides: { cz: 'https://www.beliani.cz/doplnky/zrcadla/'},
      },
      {
        name: 'Ottomans',
        src: getImageUrl('20260708Additional4.png', true),
        href: 'https://www.beliani.ch/stools/ottomans/',
        hrefOverrides: { cz: 'https://www.beliani.cz/pufy-a-taburetky/podnozky-a-taburety/', sk:'https://www.beliani.sk/pufy-a-taburetky/podnozky-a-taburetky/'},
      },
    ],
  },
];


export default new entities.Campaign({
  startId: "44859",
  name: "WED Bedroom Styling",
  date: "08.07.2026",
  issueCardId: "498452",
  lpId: "30719",
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/p4b6gwBUm2EE1PP0AP7Eqr/Newsletter-Bedroom-Styling---Wednesday-2026.07.08?node-id=0-1&p=f&t=tTInT4sRqYZwFltQ-0",
  templates: [
    {
      background: '#FED399',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '#FED399',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});