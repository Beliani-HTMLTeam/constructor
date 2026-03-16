// Campaign generated from form
const campaignTranslationsSheet = '2026::11.03.26 - Rugs';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20:25',
    name: 'paragraphs',
  },
  {
    tableRange: '27:28',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-11' }),
  TopImageTitle_src: translateImage({ value: '20260311_01.png' }),

  // TopImage_src: getImageUrl('20260311_Top.png', true),
  // TopImage_href: 'https://www.beliani.ch/rugs/low-pile-rugs/',

  Banner_2: translateLink({ value: 'content/lp26-03-04' }),
  Banner_2_Image: translateImage({ value: '20260304b.png' }),

  Banner_1: translateLink({ value: 'content/lp26-03-02' }),
  Banner_1_Image: translateImage({ value: '20260302b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFD2BF',
  type: 'up_to',
};

const categories = [
  {
    src: getImageUrl('20260311_Top.png', true),
    href: 'https://www.beliani.ch/rugs/low-pile-rugs/',
    background: '#FFD2BF',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: translateImage({ value: '20260311_Pic.gif' }),
    href: translateLink({ value: 'content/lp26-03-02' }),
    background: '#FFD2BF',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Low Pile Rugs',
    // src: translateImage({ value: '20260311_Pic.gif' }),
    href: 'https://www.beliani.ch/rugs/low-pile-rugs/',
    background: '#FFD2BF',
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
      // SILCHAR
      {
        id: '349767',
        src: getImageUrl('20260311_Pic01.png', true),
      },
      // TOMARZA
      {
        id: '342694',
        src: getImageUrl('20260311_Pic02.png', true),
      },
      // GARNI
      {
        id: '401141',
        src: getImageUrl('20260311_Pic03.png', true),
      },
      // BEED
      {
        id: '693680',
        src: getImageUrl('20260311_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Classic Rugs',
    src: getImageUrl('20260311_Cat10.png', true),
    href: 'https://www.beliani.ch/rugs/classic-rugs/',
    background: '#FE9C1A',
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
      // GESI II
      {
        id: '344727',
        src: getImageUrl('20260311_Pic11.png', true),
      },
      // SANGHAR
      {
        id: '689693',
        src: getImageUrl('20260311_Pic12.png', true),
      },
      // YULAFI
      {
        id: '384103',
        src: getImageUrl('20260311_Pic13.png', true),
      },
      // EZINE
      {
        id: '331236',
        src: getImageUrl('20260311_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Jute Rugs',
    src: getImageUrl('20260311_Cat20.png', true),
    href: 'https://www.beliani.ch/rugs/jute-rugs/',
    background: '#FFD2BF',
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
      // MARTS
      {
        id: '401884',
        src: getImageUrl('20260311_Pic21.png', true),
      },
      // HINGOLI
      {
        id: '693945',
        src: getImageUrl('20260311_Pic22.png', true),
      },
      // GHOTA
      {
        id: '694174',
        src: getImageUrl('20260311_Pic23.png', true),
      },
      // YENICE
      {
        id: '179390',
        src: getImageUrl('20260311_Pic24.png', true),
      },
    ],
  },
  {
    name: 'Kids Rugs',
    src: getImageUrl('20260311_Cat30.png', true),
    href: 'https://www.beliani.ch/rugs/childrens-rugs/',
    background: '#FE9C1A',
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
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // YAGCI
      {
        id: '	352289',
        src: getImageUrl('20260311_Pic31.png', true),
      },
      // BAZALETI
      {
        id: '	461457',
        src: getImageUrl('20260311_Pic32.png', true),
      },
      // SIGLI
      {
        id: '400222',
        src: getImageUrl('20260311_Pic33.png', true),
      },
      // KHARAT
      {
        id: '454697',
        src: getImageUrl('20260311_Pic34.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260311_Cat30.png', true),
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
        name: 'Sofas',
        src: getImageUrl('20260311_Pic41.png', true),
        href: 'https://www.beliani.ch/sofas/',
      },
      {
        name: 'Chairs',
        src: getImageUrl('20260311_Pic42.png', true),
        href: 'https://www.beliani.ch/chairs/',
      },
      {
        name: 'Coffee tables',
        src: getImageUrl('20260311_Pic43.png', true),
        href: 'https://www.beliani.ch/tables/coffee-tables/',
      },
      {
        name: 'Pouffes',
        src: getImageUrl('20260311_Pic44.png', true),
        href: 'https://www.beliani.ch/home-accessories/stools/pouffes/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '41581',
  name: 'Rugs',
  date: '11.03.2026',
  issueCardId: '453529',
  lpId: '29133',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/lzjW39MQk8N9fBz91Sn6bI/',
  templates: [
    {
      background: '#FFD2BF',
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
      background: '#FFD2BF',
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
