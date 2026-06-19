import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

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
  TopImageTitle_src:  DimasTranslateImage({ value: '20260821_01.png', folder: '20260821', placeholderPosition: '47' }),
  TopImage_src:  translateImage({ value: '20260821_gif.gif' }),
  TopImage_href: translateLink({ value: 'content/lp26-08-21' }),
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

const timer = {
  position: 'insideTopImageTitle',
  background: '#FF2F00',
  color: '#FFFFFF',
  image: {  
    "UK": "https://gen.sendtric.com/countdown/2gog4f7rkg",
  },
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_outdoor.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
    },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_sofas.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_beds.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_armchairs.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_chairs.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_tables.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_storage.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_kids.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_textiles.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_lighting.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_bathtubs.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_desks.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_rugs.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_accessories.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
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
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F6E7E6",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "twoColumnsGrid",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FF2F00",
        type: "timer",
        isWithTitles: false,
        spaceWithoutCTA: 'newsletterBottom20px',
      },
      intro: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#F6E7E6",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "twoColumnsGrid",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FF2F00",
        type: "timer",
        isWithTitles: false,
        spaceWithoutCTA: 'newsletterBottom20px',
      },
      intro: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});