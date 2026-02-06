// Campaign generated from form
const campaignTranslationsSheet = '2025::23.12.25 - Sit down and relax';

const tableQueries = [
  {
    tableRange: '13:14',
    name: 'TopImageTitle',
  },
  {
    tableRange: '16',
    name: 'intro',
  },
  {
    tableRange: '21:22',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-23' }),
  TopImageTitle_src: translateImage({ value: '20251223_01.png' }),

  TopImage_src: getImageUrl('20251223_Pic.png', true),
  TopImage_href: translateLink({ value: 'content/lp25-12-23' }),

  Banner_1: translateLink({ value: 'content/lp25-12-18' }),
  Banner_1_Image: translateImage({ value: '20251218b.png' }),

  Banner_2: translateLink({ value: 'content/lp25-12-17' }),
  Banner_2_Image: translateImage({ value: '20251217b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEB24D',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Sofas',
    src: getImageUrl('20251223_Cat00.png', true),
    href: 'https://www.beliani.ch/sofas/',
    background: '#FEB24D',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // LEMVIG
      {
        id: '410188',
        src: getImageUrl('20251223_Pic01.png', true),
      },
      // SIGGARD
      {
        id: '566078',
        src: getImageUrl('20251223_Pic02.png', true),
      },
      // DOLVA
      {
        id: '403961',
        src: getImageUrl('20251223_Pic03.png', true),
      },
      // LUVOS
      {
        id: '603680',
        src: getImageUrl('20251223_Pic04.png', true),
      },
    ],
  },

  {
    name: 'Armchairs',
    src: getImageUrl('20251223_Cat10.png', true),
    href: 'https://www.beliani.ch/armchairs/',
    background: '#892626',
    color: '#ffffff',
    type: 'grid',
    cta: true,
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // ABSON
      {
        id: '680210',
        src: getImageUrl('20251223_Pic11.png', true),
      },
      // SKEI
      {
        id: '463832',
        src: getImageUrl('20251223_Pic12.png', true),
      },
      // LIEKSA
      {
        id: '679442',
        src: getImageUrl('20251223_Pic13.png', true),
      },
      // HOJBY
      {
        id: '637502',
        src: getImageUrl('20251223_Pic14.png', true),
      },
    ],
  },

  {
    name: 'Beds',
    src: getImageUrl('20251223_Cat20.png', true),
    href: 'https://www.beliani.ch/beds/',
    background: '#FEB24D',
    color: '#000000',
    type: 'grid',
    cta: true,
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // CHADENET
      {
        id: '676472',
        src: getImageUrl('20251223_Pic21.png', true),
      },
      // BRUNEMONT
      {
        id: '671184',
        src: getImageUrl('20251223_Pic22.png', true),
      },
      // BAJONNA
      {
        id: '403010',
        src: getImageUrl('20251223_Pic23.png', true),
      },
      // DANNEMOIS
      {
        id: '591190',
        src: getImageUrl('20251223_Pic24.png', true),
      },
    ],
  },

  {
    name: 'Pouffes',
    src: getImageUrl('20251223_Cat30.png', true),
    href: 'https://www.beliani.ch/home-accessories/stools/',
    background: '#892626',
    color: '#ffffff',
    type: 'grid',
    cta: true,
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // TERRY
      {
        id: '628747',
        src: getImageUrl('20251223_Pic31.png', true),
      },
      // YULLE
      {
        id: '632559',
        src: getImageUrl('20251223_Pic32.png', true),
      },
      // WENONA
      {
        id: '677827',
        src: getImageUrl('20251223_Pic33.png', true),
      },
      // ALIPUR
      {
        id: '553595',
        src: getImageUrl('20251223_Pic34.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '39146',
  name: 'Sit down and relax',
  date: '23.12.2025',
  issueCardId: '427132',
  lpId: '27885',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/zSyoUbfuIVfL8INWxbl6Zz/COPY-%7C-2025.12.25--Sit-down-and-relax?node-id=9001-3963&t=BBSkbd8uOgPIYRKQ-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FEB24D',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FEC273', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#FEB24D',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#FEC273', // unused
        alignment: 'left',
        type: 'paragraph',
      },
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
