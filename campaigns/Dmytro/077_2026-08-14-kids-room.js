// Campaign generated from form
const campaignTranslationsSheet = '2026::14.08.26 - Kids Room';

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
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-14' }),
  TopImageTitle_src: translateImage({ value: '20260814_01.png' }),
  TopImage_src: getImageUrl('20260814topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-08-14' }),
  Banner_1: translateLink({ value: 'content/lp26-08-07' }),
  Banner_1_Image: translateImage({ value: '20260807b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-05' }),
  Banner_2_Image: translateImage({ value: '20260805b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-11' }),
  Intro_cta_href: "https://www.beliani.ch/children-room/"
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#FFEBE2",
  alignment: "left",
  type: "paragraph",
  cta: {
    overrides: {
   
    },
    spaceAfter: 'newsletterBottom35px',
  }
}


const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEBE2',
  type: 'twoSameLines',
};


const timer ={
  position: 'outsideTopImageTitle',
  deadline: '2026-08-16',
  freebies: getImageUrl('20260814free.png', true)
}

const categories = [
  {
    name: 'Kids beds',
    overrides: {
     
    },
    background: '#FFEBE2',
    color: '#000000',
    src: getImageUrl('20260814Category10.jpg', true),
    href: 'https://www.beliani.ch/children-room/kids-beds/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 60,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // POLIGNAC
      {
        id: '812816',
        src: getImageUrl('20260814Category11.png', true),
      },
      // RUBIAN
      {
        id: '592648',
        src: getImageUrl('20260814Category12.png', true),
      },
      // COSSAYE
      {
        id: '594775',
        src: getImageUrl('20260814Category13.png', true),
      },
      // KERVAN
      {
        id: '591924',
        src: getImageUrl('20260814Category14.png', true),
      },
    ],
  },
  {
    name: 'Kids chairs and tables',
    overrides: {
    
    },
    background: '#FEE3BF',
    color: '#000000',
    src: getImageUrl('20260814Category20.jpg', true),
    href: 'https://www.beliani.ch/children-room/kids-chairs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // VEGA
      {
        id: '428625',
        src: getImageUrl('20260814Category21.png', true),
      },
      // BOO
      {
        id: '428590',
        src: getImageUrl('20260814Category22.png', true),
      },
      // WOOLI
      {
        id: '680038',
        src: getImageUrl('20260814Category23.png', true),
      },
      // ASPRIA
      {
        id: '522490',
        src: getImageUrl('20260814Category24.png', true),
      },
    ],
  },
  {
    name: 'Kids storage',
    overrides: {
    
    },
    background: '#FFEBE2',
    color: '#000000',
    src: getImageUrl('20260814Category30.jpg', true),
    href: 'https://www.beliani.ch/children-room/kids-storage/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // LACKEY
      {
        id: '575403',
        src: getImageUrl('20260814Category31.png', true),
      },
      // CANEY
      {
        id: '574639',
        src: getImageUrl('20260814Category32.png', true),
      },
      // LILOET
      {
        id: '575306',
        src: getImageUrl('20260814Category33.png', true),
      },
      // RUPERT,
      {
        id: '525454',
        src: getImageUrl('20260814Category34.png', true),
      },
    ],
  },
  {
    name: 'Kids Décor',
    overrides: {
    
    },
    background: '#FEE3BF',
    color: '#000000',
    src: getImageUrl('20260814Category40.jpg', true),
    href: 'https://www.beliani.ch/children-room/kids-decor/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // TANDA
      {
        id: '563320',
        src: getImageUrl('20260814Category41.png', true),
      },
      // YAMBA
      {
        id: '703620',
        src: getImageUrl('20260814Category42.png', true),
      },
      // VAGSOY
      {
        id: '345600',
        src: getImageUrl('20260814Category43.png', true),
      },
      // HIMBA
      {
        id: '345636',
        src: getImageUrl('20260814Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "46568",
  name: "Kids Room",
  date: "14.08.2026",
  issueCardId: "516919",
  lpId: "31616",
  alarm: {
    isActive: false,
  },
  version: "new",
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/X1cpQ18rDfJqhTlaFJtf94/Newsletter-Kids-Room---Friday-2026.08.14?node-id=0-1&t=0dPLW8ClxmsM9BEW-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFEBE2",
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
        backgroundColor: '#FD9000',
        unitBackground: '#FECD8C',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.LP,
      background: "#FFEBE2",
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
        backgroundColor: '#FD9000',
        unitBackground: '#FECD8C',
        type: 'timer',
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});