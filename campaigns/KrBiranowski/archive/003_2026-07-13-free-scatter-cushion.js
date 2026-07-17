const campaignTranslationsSheet = 'Voucher - 13.07.26 - Free scatter cushion';

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '22:23',
  },
  {
    name: 'offer',
    tableRange: '25:27',
  },
  {
    name: 'offer_date',
    tableRange: '28',
  },
  {
    name: 'condition',
    tableRange: '32:33',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-13' }),
  TopImageTitle_src: translateImage({ value: '20260713_01.png' }),

  //TopImage_src: getImageUrl('20260713_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-07-13' }),

  Banner_1: translateLink({ value: 'content/lp26-07-01' }),
  Banner_1_Image: translateImage({ value: '20260701b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-07-02' }),
  Banner_2_Image: translateImage({ value: '20260702b.png' }),
};

const topImage_data = {
  ['NO']: getImageUrl('20260713_UKPLNO_Gif.gif', true),
  ['UK']: getImageUrl('20260713_UKPLNO_Gif.gif', true),
  ['PL']: getImageUrl('20260713_UKPLNO_Gif.gif', true),
  ['default']: getImageUrl('20260713_Gif.gif', true),
}

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'standard',
};

const categories = [
  // offer
  {
    copyCodeWeb: true,
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#FFCCB7',
    color: '#000000',
    spaceAfter: 'newsletterBottom45px',
    freebies: [
      [
        { id: '256792', src: getImageUrl('20260713_pic01.png', true) },
        { id: '188931', src: getImageUrl('20260713_pic02.png', true), exclude: ['NO', 'UK', 'PL'] },
        { id: '256738', src: getImageUrl('20260713_pic03.png', true) },
      ],
    ],
  },

  {
    paragraph: {
      spaceAfter: '',
    },
    href: 'https://beliani.ch',
    paddingTop: '0',
    type: 'small-tiles',
    background: '#FFCCB7',
    color: '#000000',
    paragraph: {
      position: 'afterProducts',
      spaceAfter: 'newsletterBottom35px',
    },
    spaceAfter: 'newsletterBottom80px',
    cta: {
      phrase: 'Shop all categories',
    },
    tiles: {
      background: 'ff2f00',
      text: 'ffffff',
      items: [
        {
          name: 'Outdoor', // uzywane jako Alt, getCategoryTitle(name)
          href: 'https://www.beliani.ch/garden-furniture', // link do kategorii -> getCategoryLink(href)
          // src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
        },
        {
          name: 'Sofas',
          href: 'https://www.beliani.ch/sofas',
        },
        {
          name: 'Beds',
          href: 'https://www.beliani.ch/beds',
        },
        {
          name: 'Armchairs',
          href: 'https://www.beliani.ch/armchairs',
        },
        {
          name: 'Chairs',
          href: 'https://www.beliani.ch/chairs',
        },
        {
          name: 'Tables',
          href: 'https://www.beliani.ch/tables',
        },
        {
          name: 'Storage',
          href: 'https://www.beliani.ch/storage',
        },
        {
          name: 'Kids',
          href: 'https://www.beliani.ch/children-room',
        },
        {
          name: 'Textiles',
          href: 'https://www.beliani.ch/textiles',
        },
        {
          name: 'Lighting',
          href: 'https://www.beliani.ch/lighting',
        },
        {
          name: 'Bathtubs',
          href: 'https://www.beliani.ch/bathtubs-hot-tubs',
        },
        {
          name: 'Desks',
          href: 'https://www.beliani.ch/office-furniture/desks',
        },
        {
          name: 'Rugs',
          href: 'https://www.beliani.ch/rugs',
        },
        {
          name: 'Accessories',
          href: 'https://www.beliani.ch/home-accessories/accessories-decor',
        },
      ],
    },
  },
];

export default new entities.Campaign({
  startId: '45407',
  name: 'MON Free scatter cushion',
  date: '13.07.2026',
  issueCardId: '501330',
  lpId: '31046',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  soon_banners: true,
  figmaUrl: 'https://www.figma.com/design/mn0OFp7SBH9jLeZhlRqF74/',
  accent: '#d4f5e9',
  templates: [
    {
      background: '#FFCCB7',
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
      topImage_data,
      tableQueries: tableQueries,
    },
    {
      background: '#FFCCB7',
      color: '#000000',
      template: templates.Monday,

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      topImage_data,
      tableQueries: tableQueries,
    },
  ],
});
