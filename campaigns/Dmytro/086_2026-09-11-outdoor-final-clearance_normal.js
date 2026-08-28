// Campaign generated from form
const campaignTranslationsSheet = '2026::11.09.26 - Outdoor Final Clearance';

const tableQueries = [
  {
    "tableRange": "16:17",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "18",
    "name": "intro"
  },
  {
    "tableRange": "19:20",
    "name": "condition"
  },
  {
    "tableRange": "25:26",
    "name": "timer"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-11-tb' }),
  TopImageTitle_src: translateImage({ value: '20260911_01.png' }),
  TopImage_src: getImageUrl('20260911topimage_normal.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-11-tb' }),
  Banner_1: translateLink({ value: 'content/lp26-09-04-ta' }),
  Banner_1_Image: translateImage({ value: '20260904b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-09-03' }),
  Banner_2_Image: translateImage({ value: '20260903b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-09-07' }),
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#FFCCB7",
  alignment: "left",
  type: "paragraph",
  spaceBefore: 'newsletterBottom30px',
  spaceAfter: 'newsletterBottom35px',
}


const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'up_to',
};


const timer = {
  position: 'outsideTopImageTitle',
  deadline: '2026-09-13',
  freebies: getImageUrl('20260911free.png', true)
}

const categories = [
  {
    type: 'biggrid',
    spaceBefore: 'newsletterBottom60px',
    gap: 20,
    textHeight: 64,

    layout: [
      // Lounge sets
      {
        type: 'full',
        items: [0],
      },

      // Storage + Lighting
      {
        type: 'pair',
        items: [1, 2],
      },

      // Dining sets
      {
        type: 'full',
        items: [3],
      },

      // Outdoor kitchen + Accessories
      {
        type: 'pair',
        items: [4, 5],
      },

      // Sun loungers
      {
        type: 'full',
        items: [6],
      },

      // Parasols + Balcony furniture
      {
        type: 'pair',
        items: [7, 8],
      },

      // Outdoor SPA
      {
        type: 'full',
        items: [9],
      },
    ],

    categories: [
      {
        name: 'Lounge sets',
        overrides: {
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category1.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Storage',
        overrides: {
          NL: "Tuinopslag",
          BENL: "Tuinopslag"
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category2.png', true),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-storage/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Lighting',
        overrides: {
          NL: "Buitenverlichting",
          BENL: "Buitenverlichting"
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category3.png', true),
        href: 'https://www.beliani.ch/garden-furniture/garden-lighting/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Dining sets',
        overrides: {
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category4.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Outdoor kitchen',
        overrides: {
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category5.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Accessories',
        overrides: {
          NL: "Tuinaccessoires",
          BENL: "Tuinaccessoires"
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category6.png', true),
        href: 'https://www.beliani.ch/garden-furniture/garden-accessories/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Sun loungers',
        overrides: {
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category7.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Parasols',
        overrides: {
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category8.png', true),
        href: 'https://www.beliani.ch/garden-furniture/parasols/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Balcony furniture',
        overrides: {
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category9.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Outdoor SPA',
        overrides: {
        },
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20260911Category10.png', true),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-spa/',
        title: {
          show: true,
          align: 'center',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#000000'
        },
        cta: {
          show: true,
          background: '#FFCCB7',
          color: '#000000',
          type: 'ai',
        }, 
       
      },
    ]
  }
];

export default new entities.Campaign({
  startId: "47669",
  name: "Outdoor Final Clearance - Normal",
  date: "11.09.2026",
  issueCardId: "526874",
  lpId: "32253",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/gX0xIgho6JKTvSSLpo5T4B/2026.09.11---Outdoor-Final-Clearance?node-id=10034-174&p=f&t=bQPqpQiDE8uIQnu8-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.AIRegularFridayNslt11_09_normal, // User should change this
      css: types.CSS.NS_AI_11_09_NORMAL,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFCCB7",
      color: "#000000",
      wrapper: types.WRAPPER,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#750000',
        unitBackground: '#AC6666',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
      categories_type: 'biggrid',
      TopImageTitle_data: TopImageTitle_data,

    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.AIRegularFridayNslt11_09_normal, // User should change this
      css: types.CSS.LP_AI_11_09_NORMAL,
      background: "#FFCCB7",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#750000',
        unitBackground: '#AC6666',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
      categories_type: 'biggrid',
      TopImageTitle_data: TopImageTitle_data,

    },
  ],
});