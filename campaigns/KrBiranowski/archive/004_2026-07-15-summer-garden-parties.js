const campaignTranslationsSheet = '15.07.26 - Summer garden parties';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20:23",
    "name": "paragraphs"
  },
  {
    "tableRange": "27:28",
    "name": "condition"
  },
  {
    tableRange: '24:26',
    name: 'categories',
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-15' }),
  TopImageTitle_src: translateImage({ value: '20260715_01.png' }),
  // TopImage_src: getImageUrl('20260715_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-07-15' }),
  Banner_1: translateLink({ value: 'content/lp26-07-08' }),
  Banner_1_Image: translateImage({ value: '20260708b.png' }),
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
    name: 'Dining sets',
    src: getImageUrl('20260715_Cat10.jpg', true),
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
      // spaceBefore: 'newsletterBottom35px',
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
        src: getImageUrl('20260715_Pic11.png', true),
      },
      // VERNIO
      {
        id: '16678',
        src: getImageUrl('20260715_Pic12.png', true),
      },
      // SASSARI
      {
        id: '512198',
        src: getImageUrl('20260715_Pic13.png', true),
      },
      // SUSUA/OLBIA
      {
        id: '318371',
        src: getImageUrl('20260715_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Outdoor kitchen',
    src: getImageUrl('20260715_Cat20.jpg', true),
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
      // spaceBefore: 'newsletterBottom35px',
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
        src: getImageUrl('20260715_Pic21.png', true),
      },
      // MIRADOR
      {
        id: '623173',
        src: getImageUrl('20260715_Pic22.png', true),
      },
      // BRUCOLI
      {
        id: '642348',
        src: getImageUrl('20260715_Pic23.png', true),
      },
      // VENOSA
      {
        id: '618456',
        src: getImageUrl('20260715_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Fire Pits & Grills',
    src: getImageUrl('20260715_Cat30.jpg', true),
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
      // spaceBefore: 'newsletterBottom35px',
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
        src: getImageUrl('20260715_Pic31.png', true),
      },
      // KAMADO
      {
        id: '650849',
        src: getImageUrl('20260715_Pic32.png', true),
      },
      // SATAH
      {
        id: '315858',
        src: getImageUrl('20260715_Pic33.png', true),
      },
      // KAMADO
      {
        id: '650888',
        src: getImageUrl('20260715_Pic34.png', true),
      },
    ],
  },
  {
    nameOverrides: {
      fi: 'Aurinkovarjot, katokset ja paviljongit',
    },
    name: 'Parasols, Shades & Gazebos',
    src: getImageUrl('20260715_Cat40.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
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
      // spaceBefore: 'newsletterBottom35px',
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
        src: getImageUrl('20260715_Pic41.png', true),
      },
      // TOSCANA
      {
        id: '808944',
        src: getImageUrl('20260715_Pic42.png', true),
      },
      // CALABRIA
      {
        id: '130931',
        src: getImageUrl('20260715_Pic43.png', true),
      },
      // NARO
      {
        id: '375096',
        src: getImageUrl('20260715_Pic44.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260311_Cat30.jpg', true),
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
        name: 'Garden tables',
        src: getImageUrl('20260715_Add1.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-tables/',
      },
      {
        name: 'Garden chairs',
        src: getImageUrl('20260715_Add2.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-chairs/',
      },
      {
        name: 'Picnic baskets',
        src: getImageUrl('20260715_Add3.png', true),
        href: 'https://www.beliani.ch/garden-accessories/lunch-baskets/',
      },
      {
        name: 'Lanterns',
        nameOverrides: {
          fr: 'Lanternes de jardin',
          chfr: 'Lanternes de jardin',
          befr: 'Lanternes de jardin'
        },
        src: getImageUrl('20260715_Add4.png', true),
        href: 'https://www.beliani.ch/garden-accessories/garden-lanterns/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "45824",
  name: "Summer garden parties",
  date: "15.07.2026",
  issueCardId: "503792",
  lpId: "31240",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/3sIsc4vNa69tfnqbY5EyUp/2026.07.15---Newsletter-Summer-garden-parties---Wednesday?node-id=0-1&t=hM6ldwa9cdF3Wylo-1",
  templates: [
    {
      background: '#FFE3D8',
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
      background: '#FFE3D8',
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