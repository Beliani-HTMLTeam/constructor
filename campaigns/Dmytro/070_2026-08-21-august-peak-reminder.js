
// Campaign generated from form
const campaignTranslationsSheet = '2026::21.08.26 - August Peak Reminder';

const tableQueries = [
  {
    "tableRange": "15:16",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "18",
    "name": "intro"
  },

  {
    "tableRange": "19:20",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-08-21' }),
  TopImageTitle_src:  translateImage({ value: '20260821_01.png'}),
  TopImage_src:  translateImage({ value: '20260821_gif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp26-08-21' }),
  TopImageVideo_src: translateImage({ value: '20260821_mp4.mp4' }),
  TopImageVideo_href: translateLink({ value: 'content/lp26-08-21' }),
  Banner_1: translateLink({ value: 'content/lp26-08-14' }),
  Banner_1_Image: translateImage({ value: '20260814b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-08-13' }),
  Banner_2_Image: translateImage({ value: '20260813b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-08-21' }),
  ShopCTA: translateLink({ value: ' ' })
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#FF2F00',
  type: 'twoSameMediumLines',
};

const intro_data = {
  color: "#000000",
  backgroundColor: "#F6E7E6",
  alignment: "center",
  type: "paragraph",
}

const timer ={
  position: 'insideTopImageTitle',
  deadline: '2026-08-23',
  isCtaVisible: false,
  isWithTitles: false
}

const categories = [
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
  startId: "45119",
  name: "August Peak Reminder",
  date: "21.08.2026",
  issueCardId: "501880",
  lpId: "30873",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/THJ5RoD4CL3nTHJys11GsD/August-peak-Reminder---Friday-2026.08.21?node-id=0-1&t=eAN4mhP60ixDCi6W-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F6E7E6",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: 'small-tiles',
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#FF2F00',
        unitBackground: '#FF9780',
        type: "timer",
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt1, // User should change this
      css: types.CSS.LP,
      background: "#F6E7E6",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: 'small-tiles',

      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#ffffff",
        backgroundColor: '#FF2F00',
        unitBackground: '#FF9780',
        type: "timer",
      },
      intro: intro_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});