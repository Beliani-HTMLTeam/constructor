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
  TopImageTitle_href: translateLink({ value: 'content/lp26-09-11' }),
  TopImage_src: getImageUrl('20260911topimage_ai.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-09-11' }),
  Banner_1: translateLink({ value: 'content/lp26-09-04-ta' }),
  Banner_1_Image: translateImage({ value: '20260904b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-09-03' }),
  Banner_2_Image: translateImage({ value: '20260903b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-09-07' }),
  Intro_cta_href: "https://www.beliani.ch/garden-furniture/"
};

const intro_data = {
  type: 'paragraph',
  alignment: 'center',

  backgroundColor: '#FDF8F8',

  titleColor: '#750000',
  subtitleColor: '#750000',
  paragraphColor: '#000000',
  color: '#000000',

  tableContainerClass:
    'newsletterContainer30px',

  // TopImageTitle[0] becomes the main headline.
  // TopImageTitle[1] becomes the subtitle.
  useTopImageTitle: true,

  spaceTop: '0',
  spaceBottom: '0',

  cta: {
    background: '#FFCCB7',
    color: '#750000',
    spaceBefore: 'newsletterBottom20px',
    spaceAfter: 'newsletterBottom35px',
    overrides: {
      FI: "Tutustu valikoimaan"
    },
  },
};


const timer = {
  position: 'outsideTopImageTitle',
  deadline: '2026-09-13',
  freebies: getImageUrl('20260911free_new.png', true),
  overrides: {
    ES: '20260911free_new_different.png',
    IT: '20260911free_new_different.png',
  }
}

const categories = [
  {
    type: 'biggrid',
    spaceBefore: 'newsletterBottom60px',
    categories: [
      {
        name: 'Lounge sets',
        overrides: {
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category1_ai.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Dining sets',
        overrides: {
          HU: "Étkezőgarnitúrák"
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category2_ai.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Balcony furniture',
        overrides: {
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category3_ai.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Sun loungers',
        overrides: {
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category4_ai.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Outdoor kitchen',
        overrides: {
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category5_ai.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Storage',
        overrides: {
          NL: "Tuinopslag",
          BENL: "Tuinopslag",
          PT: "Arrumação de jardim",
          FI: "Ulkosäilytys"
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category6_ai.png', true),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-storage/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Parasols',
        overrides: {
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category7_ai.png', true),
        href: 'https://www.beliani.ch/garden-furniture/parasols/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Outdoor lighting',
        overrides: {
          HU: "Kültéri világítás",
          CHDE: "Beleuchtung",
          DE: "Beleuchtung",
          AT: "Beleuchtung"
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category8_ai.png', true),
        href: 'https://www.beliani.ch/garden-furniture/garden-lighting/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Garden accessories',
        overrides: {
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category9_ai.png', true),
        href: 'https://www.beliani.ch/garden-furniture/garden-accessories/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
      {
        name: 'Outdoor SPA',
        overrides: {
        },
        background: '#F9EFEE',
        color: '#750000',
        src: getImageUrl('20260911Category10_ai.png', true),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-spa/',
        title: {
          show: true,
          align: 'left',
          spaceBefore: 'newsletterBottom10px',
          spaceAfter: 'newsletterBottom10px',
          color: '#750000'
        },
        cta: {
          show: true,
          background: '#FF2F00',
          color: '#FFFFFF',
          type: 'ai',
        }, 
       
      },
    ]
  }
];

export default new entities.Campaign({
  startId: "47316",
  name: "Outdoor Final Clearance - AI",
  date: "11.09.2026",
  issueCardId: "526874",
  lpId: "31993",
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
      template: templates.AINewsletter1109, // User should change this
      css: types.CSS.NS_AI_11_09,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F9EFEE",
      color: "#750000",
      wrapper: types.WRAPPER,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: '#FFCCB7',
        unitBackground: '#FFE6DB',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
      categories_type: 'biggrid',
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.AINewsletter1109, // User should change this
      css: types.CSS.LP_AI_11_09,
      background: "#F9EFEE",
      color: "#750000",
      translationsSpreadsheet: campaignTranslationsSheet,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: '#FFCCB7',
        unitBackground: '#FFE6DB',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
      categories_type: 'biggrid',
    },
  ],
});