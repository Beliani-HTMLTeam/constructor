const campaignTranslationsSheet = '2026::05.08.26 - Outdoor Sets';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "21:24",
    "name": "paragraphs"
  },
  {
    "tableRange": "25:26",
    "name": "condition"
  },
  {
    tableRange: '20:20',
    name: 'categories',
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-05' }),
  TopImageTitle_src: translateImage({ value: '20260805_01.png' }),
  // TopImage_src: getImageUrl('20260715_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-07-15' }),
  Banner_1: translateLink({ value: 'content/lp26-07-23' }),
  Banner_1_Image: translateImage({ value: '20260723b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-07-24' }),
  Banner_2_Image: translateImage({ value: '20260724b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FECD8C',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Garden dining sets',
    src: getImageUrl('20260805_Cat10.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
    background: '#FECD8C',
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
        id: '521423',
        src: getImageUrl('20260805_Pic10.png', true),
      },
      {
        id: '399733',
        src: getImageUrl('20260805_Pic11.png', true),
      },
      {
        id: '805625',
        src: getImageUrl('20260805_Pic12.png', true),
      },
      {
        id: '252681',
        src: getImageUrl('20260805_Pic13.png', true),
      },
    ],
  },
  {
    name: 'Garden chairs',
    src: getImageUrl('20260805_Cat20.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/garden-chairs/',
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
      {
        id: '714641',
        src: getImageUrl('20260805_Pic20.png', true),
      },
      {
        id: '320879',
        src: getImageUrl('20260805_Pic21.png', true),
      },
      {
        id: '726634',
        src: getImageUrl('20260805_Pic22.png', true),
      },
      {
        id: '524064',
        src: getImageUrl('20260805_Pic23.png', true),
      },
    ],
  },
  {
    name: 'Swings',
    src: getImageUrl('20260805_Cat30.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/swings/',
    background: '#FECD8C',
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
        id: '598865',
        src: getImageUrl('20260805_Pic30.png', true),
      },
      {
        id: '589248',
        src: getImageUrl('20260805_Pic31.png', true),
      },
      {
        id: '809091',
        src: getImageUrl('20260805_Pic32.png', true),
      },
      {
        id: '591677',
        src: getImageUrl('20260805_Pic33.png', true),
      },
    ],
  },
  {
    name: 'Garden storage',
    src: getImageUrl('20260805_Cat40.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-storage/',
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
      {
        id: '693412',
        src: getImageUrl('20260805_Pic40.png', true),
      },
      {
        id: '293954',
        src: getImageUrl('20260805_Pic41.png', true),
      },
      {
        id: '648548',
        src: getImageUrl('20260805_Pic42.png', true),
      },
      {
        id: '258263',
        src: getImageUrl('20260805_Pic43.png', true),
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
        name: 'Lounge sets',
        src: getImageUrl('20260805_Add1.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
      },
      {
        name: 'Outdoor kitchen',
        src: getImageUrl('20260805_Add2.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
      },
      {
        name: 'Hanging chairs',
        src: getImageUrl('20260805_Add3.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-hanging-chairs/',
      },
      {
        name: 'Balcony furniture',
        src: getImageUrl('20260805_Add4.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "46534",
  name: "Wednesday - Outdoor sets",
  date: "05.08.2026",
  issueCardId: "511351",
  lpId: "31593",
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
  figmaUrl: "https://www.figma.com/design/NXI4yKNtAma4AuFUPt0lky/",
  templates: [
    {
      background: '#FECD8C',
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
      background: '#FECD8C',
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
    },
  ],
});