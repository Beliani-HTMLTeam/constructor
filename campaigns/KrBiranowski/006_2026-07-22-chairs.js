const campaignTranslationsSheet = '22.07.26 - Chairs';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20:23",
    "name": "paragraphs"
  },
  {
    "tableRange": "25:26",
    "name": "condition"
  },
  // {
  //   tableRange: '24:26',
  //   name: 'categories',
  // }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-22' }),
  TopImageTitle_src: translateImage({ value: '20260722_01.png' }),
  // TopImage_src: getImageUrl('20260722_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-07-15' }),
  Banner_1: translateLink({ value: 'content/lp26-07-10' }),
  Banner_1_Image: translateImage({ value: '20260710b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-07-15' }),
  Banner_2_Image: translateImage({ value: '20260715b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEBE2',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Fabric chairs',
    src: getImageUrl('20260722_Cat10.jpg', true),
    href: 'https://www.beliani.ch/chairs/fabric-chairs/',
    background: '#FFEBE2',
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
      // SARDOAL
      {
        id: '568475',
        src: getImageUrl('20260722_Pic11.png', true),
      },
      // RATON
      {
        id: '593052',
        src: getImageUrl('20260722_Pic12.png', true),
      },
      // MINA
      {
        id: '583587',
        src: getImageUrl('20260722_Pic13.png', true),
      },
      // ALKALI
      {
        id: '691587',
        src: getImageUrl('20260722_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Wooden chairs',
    src: getImageUrl('20260722_Cat20.jpg', true),
    href: 'https://www.beliani.ch/chairs/wooden-chairs/',
    background: '#FAF1F0',
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
      // SMILEY
      {
        id: '579953',
        src: getImageUrl('20260722_Pic21.png', true),
      },
      // YUBA
      {
        id: '344128',
        src: getImageUrl('20260722_Pic22.png', true),
      },
      // AVA
      {
        id: '674950',
        src: getImageUrl('20260722_Pic23.png', true),
      },
      // EAGAN
      {
        id: '620066',
        src: getImageUrl('20260722_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Plastic chairs',
    src: getImageUrl('20260722_Cat30.jpg', true),
    href: 'https://www.beliani.ch/chairs/plastic-chairs/',
    background: '#FFEBE2',
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
      // TAKILMA
      {
        id: '575593',
        src: getImageUrl('20260722_Pic31.png', true),
      },
      // FOMBY
      {
        id: '452873',
        src: getImageUrl('20260722_Pic32.png', true),
      },
      // NASHUA
      {
        id: '393424',
        src: getImageUrl('20260722_Pic33.png', true),
      },
      // SOMERS
      {
        id: '406885',
        src: getImageUrl('20260722_Pic34.png', true),
      },
    ],
  },
  {
    // nameOverrides: {
    //   fi: 'Aurinkovarjot, katokset ja paviljongit',
    // },
    name: 'Bar chairs',
    nameOverrides: {
      fi: 'Baarijakkarat ja -tuolit',
      uk: 'Bar Chairs and Stools'
    },
    src: getImageUrl('20260722_Cat40.jpg', true),
    href: 'https://www.beliani.ch/chairs/bar-chairs/',
    background: '#FAF1F0',
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
      // MAYETTA
      {
        id: '522491',
        src: getImageUrl('20260722_Pic41.png', true),
      },
      // AMAYA
      {
        id: '582767',
        src: getImageUrl('20260722_Pic42.png', true),
      },
      // MINA
      {
        id: '582787',
        src: getImageUrl('20260722_Pic43.png', true),
      },
      // LUANA
      {
        id: '460190',
        src: getImageUrl('20260722_Pic44.png', true),
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
        name: 'Metal Chairs',
        src: getImageUrl('20260722_Add1.png', true),
        href: 'https://www.beliani.ch/chairs/metal-chairs/',
      },
      {
        name: 'Leather Chairs',
        src: getImageUrl('20260722_Add2.png', true),
        href: 'https://www.beliani.ch/chairs/leather-chair/',
      },
      {
        name: 'Banquet Chairs',
        nameOverrides: {
          fi: 'Bankettituolit'
        },
        src: getImageUrl('20260722_Add3.png', true),
        href: 'https://www.beliani.ch/chairs/banquet-chairs/',
      },
      {
        name: 'Rattan Chairs',
        src: getImageUrl('20260722_Add4.png', true),
        href: 'https://www.beliani.ch/dining-room-furniture/chairs/rattan-chairs/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "45952",
  name: "Wednesday - Chairs",
  date: "22.07.2026",
  issueCardId: "505116",
  lpId: "31297",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/mIQ6XbRugQeOtvWMDRbDFe/",
  templates: [
    {
      background: '#FFEBE2',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '#FFEBE2',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});