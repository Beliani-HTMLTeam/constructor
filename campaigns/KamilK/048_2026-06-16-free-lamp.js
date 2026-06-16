// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 16.06.26 - Free lamp';

const tableQueries = [
  {
    tableRange: '21:22',
    name: 'TopImageTitle',
  },
  {
    name: 'offer',
    tableRange: '24:26',
  },
  {
    name: 'offer_date',
    tableRange: '27',
  },
  {
    tableRange: '31:32',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-16' }),
  TopImageTitle_src: translateImage({ value: '20260616_01.png' }),

  TopImage_src: getImageUrl('20260616_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-16' }),

  Banner_1: translateLink({ value: 'content/lp26-06-05' }),
  Banner_1_Image: translateImage({ value: '20260605b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-06-04' }),
  Banner_2_Image: translateImage({ value: '20260604b.png' }),
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#750000',
  type: 'standard',
};

const categories = [
  // freebiesy
  {
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#750000',
    color: '#ffffff',
    spaceAfter: "newsletterBottom80px",
    freebies: [[
      // VALIRA white
      {
        id: 559665,
        src: getImageUrl('20260616_Pic01.png', true),
      },
      // VALIRA black
      {
        id: 559684,
        src: getImageUrl('20260616_Pic02.png', true),
      },
      // VALIRA gray
      {
        id: 559703,
        src: getImageUrl('20260616_Pic03.png', true),
      },
    ]],
  },

  {
    href: 'https://beliani.ch',
    paddingTop: '0',
    type: 'small-tiles',
    background: '#750000',
    color: '#ffffff',
    paragraph: {
      position: 'afterProducts',
      spaceAfter: 'newsletterBottom35px',
    },
    spaceAfter: 'newsletterBottom45px',
    cta: {
      phrase: 'Shop all categories',
    },
    tiles: {
      background: 'ffccb7',
      text: '750000',
      items: [
        {
          name: 'Outdoor', // uzywane jako Alt, getCategoryTitle(name)
          href: 'https://www.beliani.ch/garden-furniture', // link do kategorii -> getCategoryLink(href)
          // src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
        },
        {
          name: 'Sofas',
          href: 'https://www.beliani.chk/sofas',
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
          href: 'https://www.beliani.ch/desks',
        },
        {
          name: 'Rugs',
          href: 'https://www.beliani.ch/rugs',
        },
        {
          name: 'Accessories',
          href: 'https://www.beliani.ch/accessories-decor',
        },
      ],
    },
  },
];

export default new entities.Campaign({
  startId: '44838',
  name: 'Free Lamp',
  date: '16.06.2026',
  issueCardId: '499484',
  lpId: '30700',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/X5W0MhuVXpDarB8AYusQ7y/',
  templates: [
    {
      background: '#750000',
      color: '#ffffff',
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
      background: '#750000',
      color: '#ffffff',
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
