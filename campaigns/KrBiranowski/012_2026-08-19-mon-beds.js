const campaignTranslationsSheet = '2026::19.08.26 - Beds';

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
  },
  // {
  //   tableRange: '20:20',
  //   name: 'categories',
  // }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-19' }),
  TopImageTitle_src: translateImage({ value: '20260819_01.png' }),
  // TopImage_src: getImageUrl('20260715_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-07-15' }),
  Banner_1: translateLink({ value: 'content/lp26-08-12' }),
  Banner_1_Image: translateImage({ value: '20260812b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-07' }),
  Banner_2_Image: translateImage({ value: '20260807b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE0D4',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Fabric Beds',
    src: getImageUrl('20260819_Cat10.jpg', true),
    href: 'https://www.beliani.ch/beds/fabric-beds/',
    background: '#FFE0D4',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    insideBanner: {
      spaceAfter: 'newsletterBottom35px',
      link: translateLink({ value: 'content/lp26-08-03' }),
      image: translateImage({ value: '20260805_inside.gif', relyOn: 'slug' }),
    },
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
      {
        id: '667808',
        src: getImageUrl('20260819_Pic10.png', true),
      },
      {
        id: '605695',
        src: getImageUrl('20260819_Pic11.png', true),
      },
      {
        id: '588244',
        src: getImageUrl('20260819_Pic12.png', true),
      },
      {
        id: '387772',
        src: getImageUrl('20260819_Pic13.png', true),
      },
    ],
  },
  {
    name: 'Storage Beds',
    src: getImageUrl('20260819_Cat20.jpg', true),
    href: 'https://www.beliani.ch/beds/storage-beds/',
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
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      {
        id: '497279',
        src: getImageUrl('20260819_Pic20.png', true),
      },
      {
        id: '686424',
        src: getImageUrl('20260819_Pic21.png', true),
      },
      {
        id: '583928',
        src: getImageUrl('20260819_Pic22.png', true),
      },
      {
        id: '683822',
        src: getImageUrl('20260819_Pic23.png', true),
      },
    ],
  },
  {
    name: 'Wooden Beds',
    src: getImageUrl('20260819_Cat30.jpg', true),
    href: 'https://www.beliani.ch/beds/wooden-beds/',
    background: '#FFE0D4',
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
      {
        id: '521815',
        src: getImageUrl('20260819_Pic30.png', true),
      },
      {
        id: '610490',
        src: getImageUrl('20260819_Pic31.png', true),
      },
      {
        id: '461880',
        src: getImageUrl('20260819_Pic32.png', true),
      },
      {
        id: '447265',
        src: getImageUrl('20260819_Pic33.png', true),
      },
    ],
  },
  {
    name: 'Single Beds',
    src: getImageUrl('20260819_Cat40.jpg', true),
    href: 'https://www.beliani.ch/beds/single-beds/',
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
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      {
        id: '728900',
        src: getImageUrl('20260819_Pic40.png', true),
      },
      {
        id: '249451',
        src: getImageUrl('20260819_Pic41.png', true),
      },
      {
        id: '812770',
        src: getImageUrl('20260819_Pic42.png', true),
      },
      {
        id: '503715',
        src: getImageUrl('20260819_Pic43.png', true),
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
        name: 'Mattresses',
        src: getImageUrl('20260819_Add1.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
      },
      {
        name: 'Textiles',
        src: getImageUrl('20260819_Add2.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/textiles/',
      },
      {
        name: 'Storage',
        src: getImageUrl('20260819_Add3.png', true),
        href: 'https://www.beliani.ch/storage/',
      },
      {
        name: 'Rugs',
        src: getImageUrl('20260819_Add4.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/rugs/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "46961",
  name: "Wednesday - Beds",
  date: "19.08.2026",
  issueCardId: "517340",
  lpId: "31859",
  // specialLpIds: {
  //   HR: '31562',
  //   SI: '31563',
  // },
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: "new",
  figmaUrl: "https://www.figma.com/design/pux210JQBEyJqNXLIuhhS5/",
  templates: [
    {
      background: '#FFE0D4',
      color: '#000000',
      template: templates.Monday, // User should change this

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
      background: '#FFE0D4',
      color: '#000000',
      template: templates.Monday, // User should change this

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      disableKlarna: ['HR', 'SI'],
    },
  ],
});