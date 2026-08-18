const campaignTranslationsSheet = '2026::12.08.26 - Outdoor';

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
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-12' }),
  TopImageTitle_src: translateImage({ value: '20260812_01.png' }),
  // TopImage_src: getImageUrl('20260715_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-07-15' }),
  Banner_1: translateLink({ value: 'content/lp26-08-05' }),
  Banner_1_Image: translateImage({ value: '20260805b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-07' }),
  Banner_2_Image: translateImage({ value: '20260807b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F7EAE9',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Lounge sets',
    src: getImageUrl('20260812_Cat10.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
    background: '#F7EAE9',
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
        id: '811192',
        src: getImageUrl('20260812_Pic10.png', true),
      },
      {
        id: '695914',
        src: getImageUrl('20260812_Pic11.png', true),
      },
      {
        id: '810482',
        src: getImageUrl('20260812_Pic12.png', true),
      },
      {
        id: '815399',
        src: getImageUrl('20260812_Pic13.png', true),
      },
    ],
  },
  {
    name: 'Dining sets',
    src: getImageUrl('20260812_Cat20.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
    background: '#FFE0D9',
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
        id: '258544',
        src: getImageUrl('20260812_Pic20.png', true),
      },
      {
        id: '249032',
        src: getImageUrl('20260812_Pic21.png', true),
      },
      {
        id: '195463',
        src: getImageUrl('20260812_Pic22.png', true),
      },
      {
        id: '805583',
        src: getImageUrl('20260812_Pic23.png', true),
      },
    ],
  },
  {
    name: 'Balcony furniture',
    src: getImageUrl('20260812_Cat30.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
    background: '#F7EAE9',
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
        id: '162135',
        src: getImageUrl('20260812_Pic30.png', true),
      },
      {
        id: '263519',
        src: getImageUrl('20260812_Pic31.png', true),
      },
      {
        id: '622222',
        src: getImageUrl('20260812_Pic32.png', true),
      },
      {
        id: '385843',
        src: getImageUrl('20260812_Pic33.png', true),
      },
    ],
  },
  {
    name: 'Outdoor kitchen',
    src: getImageUrl('20260812_Cat40.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
    background: '#FFE0D9',
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
        id: '618456',
        src: getImageUrl('20260812_Pic40.png', true),
      },
      {
        id: '617701',
        src: getImageUrl('20260812_Pic41.png', true),
      },
      {
        id: '723446',
        src: getImageUrl('20260812_Pic42.png', true),
      },
      {
        id: '811703',
        src: getImageUrl('20260812_Pic43.png', true),
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
        name: 'Parasols',
        src: getImageUrl('20260812_Add1.png', true),
        href: 'https://www.beliani.ch/garden-furniture/parasols/',
      },
      {
        name: 'Fire pits & grills',
        src: getImageUrl('20260812_Add2.png', true),
        href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
      },
      {
        name: 'Garden accessories',
        src: getImageUrl('20260812_Add3.png', true),
        href: 'https://www.beliani.ch/garden-furniture/garden-accessories/',
      },
      {
        name: 'Outdoor textiles',
        src: getImageUrl('20260812_Add4.png', true),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-textiles/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "46734",
  name: "Wednesday - Outdoor",
  date: "12.08.2026",
  issueCardId: "516696",
  lpId: "31707",
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
  figmaUrl: "https://www.figma.com/design/ymF6fIzb4tAyHUaWemJNST/",
  templates: [
    {
      background: '#F7EAE9',
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
      disableKlarna: ['SI', 'HR'],
    },
    {
      background: '#F7EAE9',
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
      disableKlarna: ['SI', 'HR'],
    },
  ],
});