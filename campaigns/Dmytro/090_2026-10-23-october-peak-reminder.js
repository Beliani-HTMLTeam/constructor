
// Campaign generated from form
const campaignTranslationsSheet = '2026::23.10.26 - October Peak Reminder';

const tableQueries = [
  {
    "tableRange": "20:21",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "23",
    "name": "intro"
  },
  {
    "tableRange": "24",
    "name": "categoryTitle"
  },
  {
    "tableRange": "25:26",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-10-23' }),
  TopImageTitle_src:  translateImage({ value: '20261023_01.png'}),
  TopImage_src:  translateImage({ value: '20261023_gif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp26-10-23' }),
  Banner_1: translateLink({ value: 'content/lp26-10-16' }),
  Banner_1_Image: translateImage({ value: '20261016b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-10-15' }),
  Banner_2_Image: translateImage({ value: '20261015b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-10-23' }),
  Intro_cta_href: "https://www.beliani.ch/"
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#FF2F00',
  type: 'twoSameLines',
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#FAF1F0",
  alignment: "center",
  type: "paragraph",
  cta: {
    overrides: {
    },
    spaceAfter: 'newsletterBottom35px',
  }
}

const timer ={
  position: 'insideTopImageTitle',
  deadline: '2026-10-25',
  isCtaVisible: false,
  isWithTitles: false
}

const categories = [
  {
    type: 'smallgrid',
    href: 'https://www.beliani.ch/',
    background: '#FAF1F0',
    paddingTop: 20,
    title: {
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom10px',
      color: '#750000',
      source: 'categoryTitle',
      className: 'newsletterSmallgridCategoryTitle',
    },
    cta: {
      show: true,
      type: 'shopAll',
      background: '#FAF1F0',
      color: '#000000',
      spaceBefore: 'newsletterBottom40px',
    }, 
    products: [
      {
        name: 'Sofas',
        overrides: {
        },
        src: getImageUrl('20261023Category1.png', true),
        href: 'https://www.beliani.ch/sofas/',
      },
      {
        name: 'Beds',
        overrides: {
        },
       
        src: getImageUrl('20261023Category2.png', true),
        href: 'https://www.beliani.ch/beds/',
      },
      {
        name: 'Armchairs',
        overrides: {
        },
        src: getImageUrl('20261023Category3.png', true),
        href: 'https://www.beliani.ch/armchairs/',
      },
      {
        name: 'Tables',
        overrides: {
        },
        src: getImageUrl('20261023Category4.png', true),
        href: 'https://www.beliani.ch/tables/',
      },
      {
        name: 'Chairs',
        overrides: {
        },
        src: getImageUrl('20261023Category5.png', true),
        href: 'https://www.beliani.ch/chairs/',
      },
      {
        name: 'Storage',
        overrides: {
        },
        src: getImageUrl('20261023Category6.png', true),
        href: 'https://www.beliani.ch/storage/',
      },
      {
        name: 'Desks',
        overrides: {
        },
        src: getImageUrl('20261023Category7.png', true),
        href: 'https://www.beliani.ch/desks/',
      },
      {
        name: 'Kids',
        overrides: {
        },
        src: getImageUrl('20261023Category8.png', true),
        href: 'https://www.beliani.ch/children-room/',
      },
      {
        name: 'Lighting',
        overrides: {
        },
        src: getImageUrl('20261023Category9.png', true),
        href: 'https://www.beliani.ch/lighting/',
      },
      {
        name: 'Bathtubs',
        overrides: {
        },
        src: getImageUrl('20261023Category10.png', true),
        href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
      },
      {
        name: 'Rugs',
        overrides: {
        },
        src: getImageUrl('20261023Category11.png', true),
        href: 'https://www.beliani.ch/rugs/',
      },
      {
        name: 'Accessories',
        overrides: {
        },
        src: getImageUrl('20261023Category12.png', true),
        href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
      },
    ]
  }
];

export default new entities.Campaign({
  startId: "48181",
  name: "October Peak Reminder",
  date: "23.10.2026",
  issueCardId: "534522",
  lpId: "32532",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/7ZipMeb7HcHVlUDcCyUxqf/Newsletter-October-Peak-Reminder---Monday-2026.10.23?node-id=0-1&t=OkNfpJN8pzgO23UB-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.NS_OCTOBER_REMINDER,
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
        color: "#000000",
        backgroundColor: '#FF2F00',
        unitBackground: '#ffffff',
        type: "timer",
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.LP_OCTOBER_REMINDER,
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
        color: "#000000",
        backgroundColor: '#FF2F00',
        unitBackground: '#ffffff',
        type: "timer",
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});