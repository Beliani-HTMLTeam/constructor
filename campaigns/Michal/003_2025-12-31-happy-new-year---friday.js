// Campaign generated from form
const campaignTranslationsSheet = '2025::31.12.25 - Happy new year';

const tableQueries = [
  {
    tableRange: "12:13",
    name: "TopImageTitle",
  },
  {
    tableRange: "15",
    name: "intro",
  },
  {
    tableRange: "28",
    name: "shopall",
  },
  {
    tableRange: "31:32",
    name: "condition",
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-31' }),
  TopImageTitle_src: translateImage({ value: '20251231_01.png' }),
  TopImage_src: getImageUrl('20251231_Pic.png', true),
  TopImage_href: translateLink({ value: 'content/lp25-12-31' }),
  ShopCTA: translateLink({ value: ' ' }),
  Banner_1: translateLink({ value: 'content/lp25-12-23' }),
  Banner_1_Image: translateImage({ value: '20251223b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-19' }),
  Banner_2_Image: translateImage({ value: '20251219b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const categories = [
  //Outdoor
    {
      name: 'Sofas',
      href: 'https://www.beliani.ch/sofas/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_1__20251231.png', true),
      },
      showWhiteLine: true,
      products: [],
    },
  //Sofas
    {
      name: 'Beds',
      href: 'https://www.beliani.ch/beds/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_2__20251231.png', true),
      },
      products: [],
    },
  //Beds
    {
      name: 'Armchairs',
      href: 'https://www.beliani.ch/armchairs/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_3__20251231.png', true),
      },
      products: [],
    },
  //Armchairs
    {
      name: 'Chairs',
      href: 'https://www.beliani.ch/chairs/',
      title: { show: true, align: 'center' },
      type: 'xmas-gift-buttons',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: false },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_4__20251231.png', true),
      },
      products: [],
    },
  //Chairs
    {
      name: 'Tables',
      href: 'https://www.beliani.ch/tables/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_5__20251231.png', true),
      },
      showWhiteLine: true,
      products: [],
    },
  //Tables
    {
      name: 'Storage',
      href: 'https://www.beliani.ch/storage/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_6__20251231.png', true),
      },
      products: [],
    },
  //Storage
    {
      name: 'Kids Room',
      href: 'https://www.beliani.ch/children-room/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_7__20251231.png', true),
      },
      products: [],
    },
  //Kids
    {
      name: 'Textiles',
      href: 'https://www.beliani.ch/textiles/',
      title: { show: true, align: 'center' },
      type: 'xmas-gift-buttons',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: false },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_8__20251231.png', true),
      },
      products: [],
    },
  //Textiles
    {
      name: 'Lighting',
      href: 'https://www.beliani.ch/lighting/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_9__20251231.png', true),
      },
      showWhiteLine: true,
      products: [],
    },
  //Lighting
    {
      name: 'Bathtubs',
      href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_10__20251231.png', true),
      },
      products: [],
    },
  //Bathtubs
    {
      name: 'Desks',
      href: 'https://www.beliani.ch/desks-eng/',
      title: { show: true, align: 'center' },
      type: 'image-4productsgrid',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: true },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_11__20251231.png', true),
      },
      products: [],
    },
  //Desks
    {
      name: 'Rugs',
      href: 'https://www.beliani.ch/rugs/',
      title: { show: true, align: 'center' },
      type: 'xmas-gift-buttons',
      background: '#750000',
      color: '#FFFFFF',
      ctaElement: { show: false },
      showParagraph: false,
      showWhiteLine: true,
      src: {
        type: "relation",
        relyOn: "slug",
        placeholderPosition: "38",
        value: getImageUrl('_cat_12__20251231.png', true),
      },
      products: [],
    },
];

export default new entities.Campaign({
  startId: "39692",
  name: "Happy New Year - Friday",
  date: "31.12.2025",
  issueCardId: "432018",
  lpId: "28154",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/1jaa1XJFokgoZsSfYgOCb1/2025.12.31---Happy-new-year?node-id=0-1&p=f&t=V9HV9oTOZ9JZdGvd-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Categories2Columns, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFE9CC",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFE9CC', // unused
        alignment: 'center',
        type: 'paragraph',
      },
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Categories2Columns, // User should change this
      css: types.CSS.LP,
      background: "#FFE9CC",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FFE9CC', // unused
        alignment: 'center',
        type: 'paragraph',
      },
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});