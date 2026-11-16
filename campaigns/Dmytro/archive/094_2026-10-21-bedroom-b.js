// Campaign generated from form
const campaignTranslationsSheet = '2026::21.10.26 - Bedroom';

const tableQueries = [
  {
    tableRange: "17:18",
    name: "TopImageTitle"
  },
  {
    tableRange: '20:25',
    name: 'paragraphs',
  }
];

const links = {
  TopImageTitle_src: translateImage({ value: '20261021_01.png' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-21' }),

  Banner_1: translateLink({ value: 'content/lp26-10-14' }),
  Banner_1_Image: translateImage({ value: '20261014b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-10-09' }),
  Banner_2_Image: translateImage({ value: '20261009b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20261021_Cat01_B.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    background: '#F6E7E6',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: translateImage({ value: '20261007_InsideGif.gif' }),
    href: translateLink({ value: 'content/lp26-10-05' }),
    background: '#F6E7E6',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Beds',
    // src: translateImage({ value: '20260311_Pic.gif' }),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    background: '#F6E7E6',
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
    cta: {
      spaceBefore: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // BOUSSICOURT
      {
        id: '461458',
        src: getImageUrl('20261021_Cat11_B.png', true),
      },
      // MONTLAUR
      {
        id: '588168',
        src: getImageUrl('20261021_Cat12_B.png', true),
      },
      // SAUVIAN
      {
        id: '661137',
        src: getImageUrl('20261021_Cat13_B.png', true),
      },
      // AYETTE
      {
        id: '335418',
        src: getImageUrl('20261021_Cat14_B.png', true),
      },
    ],
  },
  {
    name: 'Storage',
    src: getImageUrl('20261021_Cat02_B.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/storage/',
    background: '#FFDED0',
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
    cta: {
      spaceBefore: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // GLASTONBURY
      {
        id: '607763',
        src: getImageUrl('20261021_Cat21_B.png', true),
      },
      // FEDRY
      {
        id: '360934',
        src: getImageUrl('20261021_Cat22_B.png', true),
      },
      // NIVO
      {
        id: '525110',
        src: getImageUrl('20261021_Cat23_B.png', true),
      },
      // KEITH
      {
        id: '571256',
        src: getImageUrl('20261021_Cat24_B.png', true),
      },
    ],
  },
  {
    name: 'Bedside Tables',
    src: getImageUrl('20261021_Cat03_B.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/storage/bedside-tables/',
    background: '#F6E7E6',
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
    cta: {
      spaceBefore: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // DORRIGO
      {
        id: '839313',
        src: getImageUrl('20261021_Cat31_B.png', true),
      },
      // GLASTONBURY
      {
        id: '607518',
        src: getImageUrl('20261021_Cat32_B.png', true),
      },
      // BLYTHE
      {
        id: '600881',
        src: getImageUrl('20261021_Cat33_B.png', true),
      },
      // SALTON
      {
        id: '562694',
        src: getImageUrl('20261021_Cat34_B.png', true),
      },
    ],
  },
  {
    name: 'Table & Bedside Lamps',
    overrides: {
      FI: "Pöytävalaisimet"
    },
    src: getImageUrl('20261021_Cat04_B.jpg', true),
    href: 'https://www.beliani.ch/bedroom-furniture/lighting/table-lamps/',
    background: '#750000',
    color: '#ffffff',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    spaceAfter: 'newsletterBottom40px',
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
    cta: {
      spaceBefore: 'newsletterBottom35px',
    },
    products: [
      // LUCHETTI
      {
        id: '358668',
        src: getImageUrl('20261021_Cat41_B.png', true),
      },
      // ARWADITO
      {
        id: '444648',
        src: getImageUrl('20261021_Cat42_B.png', true),
      },
      // BETWA
      {
        id: '620010',
        src: getImageUrl('20261021_Cat43_B.png', true),
      },
      // SIGI
      {
        id: '723347',
        src: getImageUrl('20261021_Cat44_B.png', true),
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
        name: 'Mattresses',
        src: getImageUrl('20261021_Add01_B.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
      },
      {
        name: 'Mirrors',
        src: getImageUrl('20261021_Add02_B.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/mirrors/',
      },
      {
        name: 'Rugs',
        src: getImageUrl('20261021_Add03_B.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/rugs/',
      },
      {
        name: 'Ottomans',
        src: getImageUrl('20261021_Add04_B.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/stools/ottomans/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: 49084,
  lpId: 33093,
  issueCardId: 541930,
  version: 'new',
  name: 'Bedroom B',
  date: '21.10.2026',
  figmaUrl: 'https://www.figma.com/design/LWw6hT2yHM8s6K98Yi26vH/Bedroom---Wednesday-2026.10.21?node-id=0-1&t=h0WKSnuNASUVcOB5-1',
  templates: [
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.Friday, // User should change this

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      optimizeCss: true,

    },
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.Friday, // User should change this

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
