// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 29.04.26 - French Day';

const tableQueries = [
  // {
  //   tableRange: '22:23',
  //   name: 'TopImageTitle',
  // },
  {
    name: 'offer',
    tableRange: '21:26',
  },
  {
    name: 'offer_date',
    tableRange: '27',
  },
  {
    tableRange: '29:30',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-29' }),
  // TopImageTitle_src: translateImage({ value: '20260324_01.png' }),

  TopImage_src: translateImage({ value: '20260429_Gif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp26-04-29' }),

  Banner_1: translateLink({ value: 'content/lp26-04-16' }),
  Banner_1_Image: translateImage({ value: '20260416b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-04-15' }),
  Banner_2_Image: translateImage({ value: '20260415b.png' }),
};

// const TopImageTitle_data = {
//   color: '#000000',
//   backgroundColor: '#FDB759',
//   type: 'standard',
// };

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
    spaceAfter: '0',
    background: '#FDB759',
    color: '#000000',
    // freebies: [[{}, {}, {}]],
  },
  // kafelki
  {
    paragraph: {
      spaceAfter: '',
    },
    href: 'https://beliani.ch',
    paddingTop: '0',
    type: 'small-tiles',
    background: '#FDB759',
    color: '#000000',
    paragraph: {
      position: 'afterProducts',
      spaceAfter: 'newsletterBottom35px',
    },
    spaceAfter: 'newsletterBottom35px',
    cta: {
      phrase: 'Shop all categories',
    },
    tiles: {
      background: '750000',
      text: 'ffffff',
      items: [
        {
          name: 'Outdoor', // uzywane jako Alt, getCategoryTitle(name)
          href: 'https://www.beliani.ch/garden-furniture', // link do kategorii -> getCategoryLink(href)
          src: translateImage({ value: '20260429outdoor.png' }),
          // src -> getImageUrl(/category_tiles/${background_color to lowercase if any letters}/${text_color to lowercase if any letters}/${slug}_${name to lowercase}, true)
        },
        {
          name: 'Sofas',
          href: 'https://www.beliani.chk/sofas',
          src: translateImage({ value: '20260429sofas.png' }),
        },
        {
          name: 'Beds',
          href: 'https://www.beliani.ch/beds',
          src: translateImage({ value: '20260429beds.png' }),
        },
        {
          name: 'Armchairs',
          href: 'https://www.beliani.ch/armchairs',
          src: translateImage({ value: '20260429armchairs.png' }),
        },
        {
          name: 'Chairs',
          href: 'https://www.beliani.ch/chairs',
          src: translateImage({ value: '20260429chairs.png' }),
        },
        {
          name: 'Tables',
          href: 'https://www.beliani.ch/tables',
          src: translateImage({ value: '20260429tables.png' }),
        },
        {
          name: 'Storage',
          href: 'https://www.beliani.ch/storage',
          src: translateImage({ value: '20260429storage.png' }),
        },
        {
          name: 'Kids',
          href: 'https://www.beliani.ch/children-room',
          src: translateImage({ value: '20260429kids.png' }),
        },
        {
          name: 'Textiles',
          href: 'https://www.beliani.ch/textiles',
          src: translateImage({ value: '20260429textiles.png' }),
        },
        {
          name: 'Lighting',
          href: 'https://www.beliani.ch/lighting',
          src: translateImage({ value: '20260429lighting.png' }),
        },
        {
          name: 'Bathtubs',
          href: 'https://www.beliani.ch/bathtubs-hot-tubs',
          src: translateImage({ value: '20260429bathtubs.png' }),
        },
        {
          name: 'Desks',
          href: 'https://www.beliani.ch/desks',
          src: translateImage({ value: '20260429desks.png' }),
        },
        {
          name: 'Rugs',
          href: 'https://www.beliani.ch/rugs',
          src: translateImage({ value: '20260429rugs.png' }),
        },
        {
          name: 'Accessories',
          href: 'https://www.beliani.ch/accessories-decor',
          src: translateImage({ value: '20260429accessories.png' }),
        },
      ],
    },
  },
];

export default new entities.Campaign({
  startId: 42861,
  name: 'French Days/Mid season sale',
  date: '29.04.2026',
  issueCardId: 464017,
  lpId: 29708,
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/yl5SkQjn8wYGkgpni272w5',
  templates: [
    {
      background: '#FDB759',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      // TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '#FDB759',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      // TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});
