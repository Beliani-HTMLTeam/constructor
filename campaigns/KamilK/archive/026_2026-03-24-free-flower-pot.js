// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 24.03.26 - Free flower pot';

const tableQueries = [
  {
    tableRange: '22:23',
    name: 'TopImageTitle',
  },
  {
    name: 'offer',
    tableRange: '25:27',
  },
  {
    name: 'offer_date',
    tableRange: '29',
  },
  {
    tableRange: '31:32',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-24' }),
  TopImageTitle_src: translateImage({ value: '20260324_01.png' }),

  TopImage_src: getImageUrl('20260324_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-24' }),

  Banner_1: translateLink({ value: 'content/lp26-03-20' }),
  Banner_1_Image: translateImage({ value: '20260320b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-03-19' }),
  Banner_2_Image: translateImage({ value: '20260319b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'standard',
};

const categories = [
  // freebiesy
  // Offer Part 1
  // Offer Part 2
  // Phrase(Get Code)
  // Offer Date
  // Phrase(Choose From)
  // Produkty max 3 per linia
  {
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '#F6E7E6',
    color: '#000000',
    products: [
      // FRAXINUS
      {
        id: '589324',
        src: getImageUrl('20260324_Pic01.png', true),
      },
      // GINKGO
      {
        id: '589226',
        src: getImageUrl('20260324_Pic02.png', true),
      },
    ],
  },
  // kafelki
  {
    paragraph: {
      spaceAfter: '',
    },
    href: 'https://beliani.ch',
    paddingTop: '0',
    type: 'small-tiles',
    background: '#F6E7E6',
    color: '#000000',
    paragraph: {
      position: "afterProducts",
      spaceAfter: 'newsletterBottom35px',
    },
    spaceAfter: 'newsletterBottom35px',
    cta: {
      phrase: "Shop all categories"
    },
    tiles: {
      background: '750000',
      text: 'ffffff',
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
  startId: '42221',
  name: 'Free flower pot',
  date: '24.03.2026',
  issueCardId: '459145',
  lpId: '29399',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/5cVIPlvgWVc20unOUIWJPh/',
  templates: [
    {
      background: '#F6E7E6',
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
      background: '#F6E7E6',
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
