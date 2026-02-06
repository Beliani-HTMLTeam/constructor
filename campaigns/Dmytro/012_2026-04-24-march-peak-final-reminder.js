import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::24.04.26 - March peak final reminder';

const tableQueries = [
  {
    "tableRange": "16:17",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "19",
    "name": "intro"
  },
  {
    "tableRange": "19:22",
    "name": "paragraphs"
  },
  {
    "tableRange": "36:38",
    "name": "condition"
  },
  {
    "tableRange": "34",
    "name": "shopall"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-24' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260424_01.png', folder: '20260424', placeholderPosition: '47' }),
  TopImage_src: DimasTranslateImage({ value: '20260424topgif.gif', folder: '20260424', placeholderPosition: '47' }),
  TopImage_href: translateLink({ value: 'content/lp26-04-24' }),
  Banner_1: translateLink({ value: 'content/lp26-04-17' }),
  Banner_1_Image: translateImage({ value: '20260417b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-16' }),
  Banner_2_Image: translateImage({ value: '20260416b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-04-24' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  background: '#750000',
  type: 'twoSameMediumLines',
  className: 'newsletterBottom20px',
};

const timer = {
  position: "insideTopImageTitle",
  background: "#750000",
  color: "#FFFFFF",
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/zv3hym7lt2",
    "CHFR": "https://gen.sendtric.com/countdown/ei1rw4rk4f",
    "FR": "https://gen.sendtric.com/countdown/os8acxyx6n",
    "DE": "https://gen.sendtric.com/countdown/v9g80j7sp1",
    "UK": "https://gen.sendtric.com/countdown/y4pzqnwo2u",
    "AT": "https://gen.sendtric.com/countdown/sm6fzik6bk",
    "ES": "https://gen.sendtric.com/countdown/i5188u5ydl",
    "PL": "https://gen.sendtric.com/countdown/uwa9nencd2",
    "NL": "https://gen.sendtric.com/countdown/yc1n751lmk",
    "PT": "https://gen.sendtric.com/countdown/f213zryq7e",
    "IT": "https://gen.sendtric.com/countdown/f74cxmr1fy",
    "SE": "https://gen.sendtric.com/countdown/5gkb8zed8e",
    "HU": "https://gen.sendtric.com/countdown/175moy1271",
    "DK": "https://gen.sendtric.com/countdown/790njwa5p1",
    "CZ": "https://gen.sendtric.com/countdown/6num6uzqmb",
    "FI": "https://gen.sendtric.com/countdown/jj5lp29o36",
    "NO": "https://gen.sendtric.com/countdown/t97tdlagp9",
    "SK": "https://gen.sendtric.com/countdown/jeuv4iktms",
    "BENL": "https://gen.sendtric.com/countdown/k1mac7vynm",
    "BEFR": "https://gen.sendtric.com/countdown/a5mcj0qh4z",
    "RO": "https://gen.sendtric.com/countdown/tq4me41420"
  },
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_cat_1__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_cat_8__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_cat_13__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_cat_14__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: "40556",
  name: "March peak final reminder",
  date: "24.04.2026",
  issueCardId: "446502",
  lpId: "28596",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/WqwPH4O2MVDRTqxVMxklwi/2026.03---March-Peak?node-id=8388-5818&t=cquZr8DrQZmAmQL3-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FF2F00",
      color: "#FFFFFF",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "twoColumnsGrid",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#750000",
        type: "timer",
        spaceWithoutCTA: "newsletterBottom20px",
      },
      intro: {
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
        alignment: "center",
        type: "paragraph"
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FF2F00",
      color: "#FFFFFF",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "twoColumnsGrid",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#750000",
        type: "timer",
        spaceWithoutCTA: "newsletterBottom20px",
      },
      intro: {
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
        alignment: "center",
        type: "paragraph"
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});