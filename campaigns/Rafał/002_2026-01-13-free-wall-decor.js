import { mondayRegularNslt } from '@/templates/AlexSrc/template/mondayRegularNslt';

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 13.01.26 - Free Wall Decor';

const tableQueries = [
  {
    "tableRange": "15:16",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "18",
    "name": "intro"
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
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-13' }),
  TopImageTitle_src: translateImage({ value: '20260113_01.png' }),
  TopImage_src: getImageUrl('20260113_Pic.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-13' }),
  Banner_1: translateLink({ value: 'content/lp25-12-23' }),
  Banner_1_Image: translateImage({ value: '20251223b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-18' }),
  Banner_2_Image: translateImage({ value: '20251218b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FD9000',
  type: 'up_to',
};

const categories = [
  {
    name: 'Sofas',
    src: translateImage({ value: '_cat_2_20260113.png' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: translateImage({ value: '_cat_3_20260113.png' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: translateImage({ value: '_cat_4_20260113.png' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: translateImage({ value: '_cat_5_20260113.png' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: translateImage({ value: '_cat_6_20260113.png' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: translateImage({ value: '_cat_7_20260113.png' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids',
    src: translateImage({ value: '_cat_8_20260113.png' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: translateImage({ value: '_cat_9_20260113.png' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: translateImage({ value: '_cat_10_20260113.png' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: translateImage({ value: '_cat_11_20260113.png' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: translateImage({ value: '_cat_12_20260113.png' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: translateImage({ value: '_cat_13_20260113.png' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: "39564",
  name: "Free Wall Decor",
  date: "13.01.2026",
  issueCardId: "434285",
  lpId: "28078",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "figma.com/design/nz4mr68AmIWmn11QpYuOFp/2026.01.13---Newsletter-Free-wall-decor--Copy-?m=auto&fuid=1328681953229888224",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FD9000",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FD9000",
        alignment: "",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.LP,
      background: "#FD9000",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FD9000",
        alignment: "",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});