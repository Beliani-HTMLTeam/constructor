const campaignTranslationsSheet = '15.07.26 - Summer garden parties';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20:24',
    name: 'paragraphs',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-22' }),
  TopImageTitle_src: translateImage({ value: '20260715_01.png' }),

  Banner_1: translateLink({ value: 'content/lp26-07-03' }),
  Banner_1_Image: translateImage({ value: '20260703b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-07-02' }),
  Banner_2_Image: translateImage({ value: '20260702b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE3D8',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260715_Cat10.png', true),
    href: 'https://www.beliani.ch/chairs/fabric-chairs/',
    background: '#FFE3D8',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Dining sets',
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
    background: '#FFE3D8',
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
      // AMANTEA
      {
        id: '415994',
        src: getImageUrl('20260715_Pic01.png', true),
      },
      // VERNIO
      {
        id: '16678',
        src: getImageUrl('20260715_Pic02.png', true),
      },
      // SASSARI
      {
        id: '512198',
        src: getImageUrl('20260715_Pic03.png', true),
      },
      // SUSUA/OLBIA
      {
        id: '318371',
        src: getImageUrl('20260715_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Outdoor kitchen',
    src: getImageUrl('20260715_Cat20.png', true),
    href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
    background: '#FEC273',
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
      // VENOSA
      {
        id: '618268',
        src: getImageUrl('20260715_Pic11.png', true),
      },
      // MIRADOR
      {
        id: '623173',
        src: getImageUrl('20260715_Pic12.png', true),
      },
      // BRUCOLI
      {
        id: '642348',
        src: getImageUrl('20260715_Pic13.png', true),
      },
      // VENOSA
      {
        id: '618456',
        src: getImageUrl('20260715_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Fire Pits & Grills', //Verify with Justyna - in Figma category name is "BBQ Grills"
    src: getImageUrl('20260715_Cat30.png', true),
    href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
    background: '#FFE3D8',
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
      // KAMADO
      {
        id: '650828',
        src: getImageUrl('20260715_Pic21.png', true),
      },
      // KAMADO
      {
        id: '650849',
        src: getImageUrl('20260715_Pic22.png', true),
      },
      // SATAH
      {
        id: '315858',
        src: getImageUrl('20260715_Pic23.png', true),
      },
      // KAMADO
      {
        id: '650888',
        src: getImageUrl('20260715_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Parasols', //Verify with Justyna - in Figma category name is "Parasols and Gazebos"
    src: getImageUrl('20260715_Cat40.png', true),
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
    background: '#FEC273',
    color: '#000000',
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
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // MONDELLO
      {
        id: '368940',
        src: getImageUrl('20260715_Pic31.png', true),
      },
      // TOSCANA
      {
        id: '808944',
        src: getImageUrl('20260715_Pic32.png', true),
      },
      // CALABRIA
      {
        id: '130931',
        src: getImageUrl('20260715_Pic33.png', true),
      },
      // NARO
      {
        id: '375096',
        src: getImageUrl('20260715_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
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
        name: 'Garden tables',
        src: getImageUrl('20260715_Pic41.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-tables/',
      },
      {
        name: 'Garden chairs',
        src: getImageUrl('20260715_Pic42.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-chairs/',
      },
      {
        name: 'Picnic baskets',
        src: getImageUrl('20260715_Pic43.png', true),
        href: 'https://www.beliani.ch/garden-accessories/lunch-baskets/',
      },
      {
        name: 'Lanterns',
        src: getImageUrl('20260715_Pic44.png', true),
        href: 'hhttps://www.beliani.ch/garden-accessories/garden-lanterns/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '452283',
  name: 'WED Garden Parties',
  date: '15.07.2026',
  issueCardId: '432224',
  lpId: '30222',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/rxrv03byJJWMv7EGlUItE3/Bedroom---Wednesday-2026.05.27-FINAL--Copy-?node-id=0-1&t=okTjefqhEp0GybVA-1',
  templates: [
    {
      background: '#FEE3BF',
      color: '#000000',
      template: templates.Monday,

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
      background: '#FEE3BF',
      color: '#000000',
      template: templates.Monday,

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