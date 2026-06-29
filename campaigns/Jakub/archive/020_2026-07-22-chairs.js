const campaignTranslationsSheet = '22.07.26 - Chairs';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20:23',
    name: 'paragraphs',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-22' }),
  TopImageTitle_src: translateImage({ value: '20260722_01.png' }),

  Banner_1: translateLink({ value: 'content/lp26-07-10' }),
  Banner_1_Image: translateImage({ value: '20260710b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-07-09' }),
  Banner_2_Image: translateImage({ value: '20260709b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEBE2',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260722_Cat10.png', true),
    href: 'https://www.beliani.ch/chairs/fabric-chairs/',
    background: '#FFEBE2',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Fabric chairs',
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
        src: getImageUrl('20260722_Pic01.png', true),
      },
      // RATON 
      {
        id: '593052',
        src: getImageUrl('20260722_Pic02.png', true),
      },
      // MINA 
      {
        id: '583587',
        src: getImageUrl('20260722_Pic03.png', true),
      },
      // ALKALI
      {
        id: '691587',
        src: getImageUrl('20260722_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Wooden chairs',
    src: getImageUrl('20260722_Cat20.png', true),
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
        src: getImageUrl('20260722_Pic11.png', true),
      },
      // YUBA
      {
        id: '344128',
        src: getImageUrl('20260722_Pic12.png', true),
      },
      // AVA 
      {
        id: '674950',
        src: getImageUrl('20260722_Pic13.png', true),
      },
      // EAGAN 
      {
        id: '620066',
        src: getImageUrl('20260722_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Plastic chairs',
    src: getImageUrl('20260722_Cat30.png', true),
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
        src: getImageUrl('20260722_Pic21.png', true),
      },
      // FOMBY 
      {
        id: '452873',
        src: getImageUrl('20260722_Pic22.png', true),
      },
      // NASHUA
      {
        id: '393424',
        src: getImageUrl('20260722_Pic23.png', true),
      },
      // SOMERS 
      {
        id: '406885',
        src: getImageUrl('20260722_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Bar chairs',
    src: getImageUrl('20260722_Cat40.png', true),
    href: 'https://www.beliani.ch/chairs/bar-chairs/',
    background: '#FAF1F0',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    spaceAfter: 'newsletterBottom40px',
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
        src: getImageUrl('20260722_Pic31.png', true),
      },
      // AMAYA 
      {
        id: '582767',
        src: getImageUrl('20260722_Pic32.png', true),
      },
      // MINA 
      {
        id: '582787',
        src: getImageUrl('20260722_Pic33.png', true),
      },
      // LUANA 
      {
        id: '460190',
        src: getImageUrl('20260722_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
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
        src: getImageUrl('20260722_Pic41.png', true),
        href: 'https://www.beliani.ch/chairs/metal-chairs/',
      },
      {
        name: 'Leather Chairs',
        src: getImageUrl('20260722_Pic42.png', true),
        href: 'https://www.beliani.ch/chairs/leather-chair/',
      },
      {
        name: 'Banquet Chairs',
        src: getImageUrl('20260722_Pic43.png', true),
        href: 'https://www.beliani.ch/chairs/banquet-chairs/',
      },
      {
        name: 'Cantilever Chairs',
        src: getImageUrl('20260722_Pic44.png', true),
        href: 'https://www.beliani.ch/chairs/cantilever-chair/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '456783',
  name: 'WED Chairs',
  date: '22.07.2026',
  issueCardId: '431254',
  lpId: '30259',
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/rxrv03byJJWMv7EGlUItE3/Bedroom---Wednesday-2026.05.27-FINAL--Copy-?node-id=0-1&t=okTjefqhEp0GybVA-1',
  templates: [
    {
      background: '#FEE3BF',
      color: '#000000',
      template: templates.Monday,

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
      background: '#FEE3BF',
      color: '#000000',
      template: templates.Monday,

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