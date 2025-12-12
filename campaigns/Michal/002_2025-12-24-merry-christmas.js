// Campaign generated from form
const campaignTranslationsSheet = '2025::24.12.25 - Merry Christmas';

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
    tableRange: "30",
    name: "shopall",
  },
  {
    tableRange: "33:34",
    name: "condition",
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-24' }),
  TopImageTitle_src: translateImage({ value: '20251224_01.png' }),
  TopImage_src: getImageUrl('20251224_Pic.png', true),
  TopImage_href: translateLink({ value: 'content/lp25-12-24' }),
  ShopCTA: translateLink({ value: ' ' }),
  Banner_1: translateLink({ value: 'content/lp25-12-17' }),
  Banner_1_Image: translateImage({ value: '20251217b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-12' }),
  Banner_2_Image: translateImage({ value: '20251212b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#750000',
  type: 'twoSameLines',
};

const categories = [
  //Outdoor
    {
      name: 'Outdoor',
      href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
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
        value: getImageUrl('_cat_1__20251224.png', true),
      },
      showWhiteLine: true,
      products: [],
    },
  //Sofas
    {
      name: 'Sofas',
      href: 'https://www.beliani.ch/sofas/',
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
        value: getImageUrl('_cat_2__20251224.png', true),
      },
      products: [],
    },
  //Beds
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
        value: getImageUrl('_cat_3__20251224.png', true),
      },
      products: [],
    },
  //Armchairs
    {
      name: 'Armchairs',
      href: 'https://www.beliani.ch/armchairs/',
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
        value: getImageUrl('_cat_4__20251224.png', true),
      },
      products: [],
    },
  //Chairs
    {
      name: 'Chairs',
      href: 'https://www.beliani.ch/chairs/',
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
        value: getImageUrl('_cat_5__20251224.png', true),
      },
      showWhiteLine: true,
      products: [],
    },
  //Tables
    {
      name: 'Tables',
      href: 'https://www.beliani.ch/tables/',
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
        value: getImageUrl('_cat_6__20251224.png', true),
      },
      products: [],
    },
  //Storage
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
        value: getImageUrl('_cat_7__20251224.png', true),
      },
      products: [],
    },
  //Kids
    {
      name: 'Kids Room',
      href: 'https://www.beliani.ch/children-room/',
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
        value: getImageUrl('_cat_8__20251224.png', true),
      },
      products: [],
    },
  //Textiles
    {
      name: 'Textiles',
      href: 'https://www.beliani.ch/textiles/',
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
        value: getImageUrl('_cat_9__20251224.png', true),
      },
      showWhiteLine: true,
      products: [],
    },
  //Lighting
    {
      name: 'Lighting',
      href: 'https://www.beliani.ch/lighting/',
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
        value: getImageUrl('_cat_10__20251224.png', true),
      },
      products: [],
    },
  //Bathtubs
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
        value: getImageUrl('_cat_11__20251224.png', true),
      },
      products: [],
    },
  //Desks
    {
      name: 'Desks',
      href: 'https://www.beliani.ch/desks-eng/',
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
        value: getImageUrl('_cat_12__20251224.png', true),
      },
      products: [],
    },
  //Rugs
    {
      name: 'Rugs',
      href: 'https://www.beliani.ch/rugs/',
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
        value: getImageUrl('_cat_13__20251224.png', true),
      },
      products: [],
    },
  //Accessories
    {
      name: 'Accessories',
      href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
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
        value: getImageUrl('_cat_14__20251224.png', true),
      },
      products: [],
    },
];

export default new entities.Campaign({
  startId: "39306",
  name: "Merry Christmas",
  date: "24.12.2025",
  issueCardId: "427111",
  lpId: "27962",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/6zsTz0B5H5i6NafAWDPmmC/Merry-Christmas---Wednesday-2025.12.24?node-id=0-1&t=sbaUMz0kmOPWHn0o-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Categories2Columns, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#750000",
      color: "#FFFFFF",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      intro: {
        color: '#FFFFFF', // unused
        backgroundColor: '#750000', // unused
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
      background: "#750000",
      color: "#FFFFFF",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      intro: {
        color: '#FFFFFF', // unused
        backgroundColor: '#750000', // unused
        alignment: 'center',
        type: 'paragraph',
      },
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});