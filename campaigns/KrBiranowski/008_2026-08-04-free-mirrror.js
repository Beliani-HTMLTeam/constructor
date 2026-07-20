const campaignTranslationsSheet = '2026::Voucher - 04.08.26 - Free Mirror';

const tableQueries = [
  {
    "tableRange": "22:23",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "25:27",
    "name": "offer"
  },
  {
    "tableRange": "28",
    "name": "offer_date"
  },
  {
    "tableRange": "32:33",
    "name": "condition"
  },
  // {
  //   tableRange: '24:26',
  //   name: 'categories',
  // }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-04' }),
  TopImageTitle_src: translateImage({ value: '20260804_01.png' }),
  TopImage_src: getImageUrl('20260804_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-04' }),
  Banner_1: translateLink({ value: 'content/lp26-07-15' }),
  Banner_1_Image: translateImage({ value: '20260715b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-07-16' }),
  Banner_2_Image: translateImage({ value: '20260716b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
};

const categories = [
  // offer
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#F6E7E6',
    color: '#000000',
    spaceAfter: 'newsletterBottom45px',
    freebies: [
      [
        { id: '369186', src: getImageUrl('20260804_Pic01.png', true) },
        { id: '369238', src: getImageUrl('20260804_Pic02.png', true) },
        { id: '314272', src: getImageUrl('20260804_Pic03.png', true) },
        { id: '324994', src: getImageUrl('20260804_Pic04.png', true) },
        { id: '314234', src: getImageUrl('20260804_Pic05.png', true) },
        { id: '314370', src: getImageUrl('20260804_Pic06.png', true) },
      ],
    ],
  },

  {
    paragraph: {
      spaceAfter: '',
    },
    href: 'https://beliani.ch',
    paddingTop: '0',
    type: 'small-tiles',
    background: '#F6E7E6',
    color: '#000000',
    paragraph: {
      position: 'afterProducts',
      spaceAfter: 'newsletterBottom35px',
    },
    spaceAfter: 'newsletterBottom80px',
    cta: {
      phrase: 'Shop all categories',
    },
    tiles: {
      background: '9f4d4d',
      text: 'ffffff',
      items: [
        {
          name: 'Outdoor', // uzywane jako Alt, getCategoryTitle(name)
          href: 'https://www.beliani.ch/garden-furniture', // link do kategorii -> getCategoryLink(href)
          // src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
        },
        {
          name: 'Sofas',
          href: 'https://www.beliani.ch/sofas',
        },
        {
          name: 'Beds',
          href: 'https://www.beliani.ch/beds',
        },
        {
          name: 'Armchairs',
          href: 'https://www.beliani.ch/armchairs',
        },
        {
          name: 'Chairs',
          href: 'https://www.beliani.ch/chairs',
        },
        {
          name: 'Tables',
          href: 'https://www.beliani.ch/tables',
        },
        {
          name: 'Storage',
          href: 'https://www.beliani.ch/storage',
        },
        {
          name: 'Kids',
          href: 'https://www.beliani.ch/children-room',
        },
        {
          name: 'Textiles',
          href: 'https://www.beliani.ch/textiles',
        },
        {
          name: 'Lighting',
          href: 'https://www.beliani.ch/lighting',
        },
        {
          name: 'Bathtubs',
          href: 'https://www.beliani.ch/bathtubs-hot-tubs',
        },
        {
          name: 'Desks',
          href: 'https://www.beliani.ch/office-furniture/desks',
        },
        {
          name: 'Rugs',
          href: 'https://www.beliani.ch/rugs',
        },
        {
          name: 'Accessories',
          href: 'https://www.beliani.ch/home-accessories/accessories-decor',
        },
      ],
    },
  },
];

export default new entities.Campaign({
  startId: "46502",
  name: "Wednesday - Free Mirror",
  date: "04.08.2026",
  issueCardId: "510567",
  lpId: "31572",
  // specialLpIds: {
  //   HR: '31562',
  //   SI: '31563',
  // },
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/NXI4yKNtAma4AuFUPt0lky/",
  templates: [
    {
      background: '#F6E7E6',
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
      disableFooterCategories: true,
    },
    {
      background: '#F6E7E6',
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
      disableFooterCategories: true,
    },
  ],
});