// Campaign generated from form
const campaignTranslationsSheet = 'Voucher - 02.06.26 - Free vase';

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
    tableRange: '33:34',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-02' }),
  TopImageTitle_src: translateImage({ value: '20260602_01.png' }),

  TopImage_src: getImageUrl('20260602_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-02' }),

  Banner_1: translateLink({ value: 'content/lp26-05-28' }),
  Banner_1_Image: translateImage({ value: '20260528b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-20' }),
  Banner_2_Image: translateImage({ value: '20260520b.png' }),
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
    offerTextOverrides: {
      hu: {
        ns: [undefined, 'Ahhoz, hogy megkapd az AJÁNDÉK vázát, vásárolj legalább<br>60 000 Ft értékben, és használd a kódot a fizetésnél.'],
        lp: [undefined, 'Ahhoz, hogy megkapd az AJÁNDÉK vázát, vásárolj legalább<br>60 000 Ft értékben, és használd a kódot a fizetésnél.'],
      },
    },
    freebies: [[
      // THETIDIO 
      {
        id: '346621', 
        src: getImageUrl('20260602_Pic01.png', true),
      },
      // THEBES 
      {
        id: '361793', 
        src: getImageUrl('20260602_Pic02.png', true),
      },
      // KOROPI 
      { 
        id: '361471',
        src: getImageUrl('20260602_Pic03.png', true),
      },
      // ORESTIADA
      {
        id: '363682', 
        src: getImageUrl('20260602_Pic04.png', true),
      },
      // LARNACA
      {
        id: '108492', 
        src: getImageUrl('20260602_Pic05.png', true),
      },
      // BHATURE
      { 
        id: '330586',
        src: getImageUrl('20260602_Pic06.png', true),
      },
    ]],
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
    spaceAfter: 'newsletterBottom80px',
    cta: {
      phrase: "Shop all categories",
    },
    tiles: {
      background: 'ff2f00',
      text: '/ffffff',
      //text: 'regular_tiles/ffffff',
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
  startId: '43983',
  name: 'TUE Free Vase',
  date: '02.06.2026',
  issueCardId: '482003',
  lpId: '30299',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: 'https://www.figma.com/design/9Q9ul76wtOL4FffJLY8wrg/2026.06.02---Free-Vase-FINAL--Copy-?m=auto&t=niO7678774YZN4xK-6',
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
