
// Campaign generated from form
const campaignTranslationsSheet = '2026::09.10.26 - Christmas Categories';

const tableQueries = [
  {
    "tableRange": "16:17",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "19",
    "name": "intro"
  },
  {
    "tableRange": "20:21",
    "name": "condition"
  },
  {
    "tableRange": "25:26",
    "name": "timer"
  }
];

const links = {
  TopImage_src:  translateImage({ value: '20261009_img.png' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-09' }),
  Banner_1: translateLink({ value: 'content/lp26-09-30' }),
  Banner_1_Image: translateImage({ value: '20260930b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-10-01' }),
  Banner_2_Image: translateImage({ value: '20261001b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-10-06' }),
  Intro_cta_href: "https://www.beliani.ch/christmas-shop/christmas-accessories/"
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#FF2F00',
  type: 'twoSameLines',
};

const intro_data = {
  color: "#750000",
  backgroundColor: "#F6E7E6",
  alignment: "center",
  type: "paragraph",
  cta: {
    overrides: {
    },
    spaceAfter: 'newsletterBottom35px',
  }
}

const timer ={
  position: 'outsideTopImageTitle',
  deadline: '2026-10-11',
  freebies: getImageUrl('20261009free.png', true)
}

const categories = [
  {
    type: 'smallgrid',
    background: '#F6E7E6',
    paddingTop: 20,
    title: {
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom10px',
      spaceAfter: 'newsletterBottom10px',
      color: '#000000',
      source: 'categoryTitle',
      className: 'newsletterSmallgridCategoryTitle',
    },
    subtitle: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom10px',
      color: '#750000',
      source: 'categoryTitle',
      className: 'newsletterSmallgridCategoryTitle',
    },
    cta: {
      show: true,
      type: 'shopAll',
      background: '#F6E7E6',
      color: '#750000',
    }, 
    products: [
      {
        name: 'Christmas Trees',
        overrides: {
        },
        src: getImageUrl('20261009Category1.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-tree/',
      },
      {
        name: 'Tree Decorations',
        overrides: {
        },
       
        src: getImageUrl('20261009Category2.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-tree-decorations/',
      },
      {
        name: 'Christmas Tree Collars',
        overrides: {
        },
        src: getImageUrl('20261009Category3.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-tree-collars/',
      },
      {
        name: 'Decorations',
        overrides: {
        },
        src: getImageUrl('20261009Category4.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/decorations/',
      },
      {
        name: 'LED Decor',
        overrides: {
        },
        src: getImageUrl('20261009Category5.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-outdoor-decor/',
      },
      {
        name: 'Wreaths',
        overrides: {
        },
        src: getImageUrl('20261009Category6.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-wreaths/',
      },
      {
        name: 'Garlands',
        overrides: {
        },
        src: getImageUrl('20261009Category7.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-garland/',
      },
      {
        name: 'Textiles',
        overrides: {
        },
        src: getImageUrl('20261009Category8.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-textiles/',
      },
      {
        name: 'Lights',
        overrides: {
        },
        src: getImageUrl('20261009Category9.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-lights/',
      },
      {
        name: 'Candle Holders',
        overrides: {
        },
        src: getImageUrl('20261009Category10.png', true),
        href: 'https://www.beliani.ch/christmas-shop/christmas-accessories/christmas-candle-holders/',
      }
    ]
  }
];

export default new entities.Campaign({
  startId: "48697",
  name: "Christmas Categories",
  date: "09.10.2026",
  issueCardId: "536925",
  lpId: "32850",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/wSGcDaDLdBNl14cWq3ryac/Newsletter-Christmas-Categories---Friday-2026.10.09?node-id=0-1&t=yUyEdwND6dgX3EB3-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.AIRegularFridayNslt09_10, // User should change this
      css: types.CSS.NS_AI_09_10,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F6E7E6",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#750000',
        unitBackground: '#AC6666',
        type: "timer",
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.AIRegularFridayNslt09_10, // User should change this
      css: types.CSS.LP_AI_09_10,
      background: "#F6E7E6",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#750000',
        unitBackground: '#AC6666',
        type: "timer",
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});