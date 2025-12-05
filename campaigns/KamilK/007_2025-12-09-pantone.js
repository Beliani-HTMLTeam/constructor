// Campaign generated from form
const campaignTranslationsSheet = '2025::09.12.25 - Pantone';

const tableQueries = [
  {
    tableRange: '13:14',
    name: 'TopImageTitle',
  },
  {
    tableRange: '16',
    name: 'paragraphs',
  },
  {
    tableRange: '17',
    name: 'categoryLinks',
  },
  {
    tableRange: '18:19',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-09' }),
  TopImageTitle_src: translateImage({ value: '20251209_01.png' }),

  // TopImage_src: getImageUrl('20251209_Cat00.png', true),
  // TopImage_href: translateLink({ value: 'content/lp25-12-09' }),
  
  Banner_1: translateLink({ value: 'content/lp25-12-04' }),
  Banner_1_Image: translateImage({ value: '20251204b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-03' }),
  Banner_2_Image: translateImage({ value: '20251203b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F0EFEB',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Sofas',
    src: getImageUrl('20251209_Cat00.png', true),
    // href: 'https://www.beliani.ch/sofas/',
    background: '#F0EFEB',
    color: '#000000',
    type: 'grid',
    paddingTop: 0,
    title: {
      show: false,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom70px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // DOLVA
      {
        id: '394648',
        src: getImageUrl('20251209_Pic01.png', true),
      },
      // CAFFI
      {
        id: '	407601',
        src: getImageUrl('20251209_Pic02.png', true),
      },
      // KOLSVA
      {
        id: '659921',
        src: getImageUrl('20251209_Pic03.png', true),
      },
      // ONDLE
      {
        id: '449670',
        src: getImageUrl('20251209_Pic04.png', true),
      },
      // LOEN
      {
        id: '331955',
        src: getImageUrl('20251209_Pic05.png', true),
      },
      // ELLEK
      {
        id: '136600',
        src: getImageUrl('20251209_Pic06.png', true),
      },
      // LOIRE
      {
        id: '565582',
        src: getImageUrl('20251209_Pic07.png', true),
      },
      // KOMOTINI
      {
        id: '363736',
        src: getImageUrl('20251209_Pic08.png', true),
      },
      // YERBENT
      {
        id: '502977',
        src: getImageUrl('20251209_Pic09.png', true),
      },
      // NIVALA
      {
        id: '572264',
        src: getImageUrl('20251209_Pic010.png', true),
      },
    ],
  },

];

export default new entities.Campaign({
  startId: "39114",
  name: "Pantone",
  date: "09.12.2025",
  issueCardId: "426565",
  lpId: "27866",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/zSyoUbfuIVfL8INWxbl6Zz/COPY-%7C-2025.12.25--Sit-down-and-relax?node-id=9001-3963&t=BBSkbd8uOgPIYRKQ-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F0EFEB",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      // intro: {
      //   color: '#000000', // unused
      //   backgroundColor: '#F0EFEB', // unused
      //   alignment: 'left',
      //   type: 'paragraph',
      // },
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: "#F0EFEB",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      // intro: {
      //   color: '#000000', // unused
      //   backgroundColor: '#F0EFEB', // unused
      //   alignment: 'left',
      //   type: 'paragraph',
      // },
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});