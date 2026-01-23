import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 06.02.26 - Feb Cashback';

const tableQueries = [
  {
    "tableRange": "21:22",
    "name": "TopImageTitle"
  },
  {
    "tableRange": '24:30',
    "name": 'offerPart',
  },
  {
    "tableRange": "50:51",
    "name": "condition"
  },
  {
    tableRange: '56:57',
    name: 'timer',
  },
  { tableRange: '29', name: 'codeCTA' },
  { tableRange: '30', name: 'code' },
  {
    "tableRange": "45",
    "name": "shopall"
  },
];

const links = {
  code_href: translateLink({ value: 'content/lp26-02-06' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-06' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260206_01.png', folder: '20260206', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260206/20260206topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-06' }),
  Banner_1: translateLink({ value: 'content/lp26-01-23' }),
  Banner_1_Image: translateImage({ value: '20260123b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-16' }),
  Banner_2_Image: translateImage({ value: '20260116b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-02-02' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#750000',
  backgroundColor: '#FFE6DB',
  type: 'standardBold',
};

const timer = {
  position: 'afterTilesCategories',
  isWithTitles: true,
  background: '#FD9000',
  color: '#000000',
  freebies: getImageUrl('20260206/20260206free.png', true),
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/b5na0noqta",
    "CHFR": "https://gen.sendtric.com/countdown/pmpqqy2m4l",
    "FR": "https://gen.sendtric.com/countdown/zfk0z91rd5",
    "DE": "https://gen.sendtric.com/countdown/wjia46oaks",
    "UK": "https://gen.sendtric.com/countdown/i2ox08595y",
    "AT": "https://gen.sendtric.com/countdown/pobc03x0nj",
    "ES": "https://gen.sendtric.com/countdown/9vnhbv3pqt",
    "PL": "https://gen.sendtric.com/countdown/v9rtg8l6ko",
    "NL": "https://gen.sendtric.com/countdown/kd1cqzbsdt",
    "PT": "https://gen.sendtric.com/countdown/qt4ajbxgx4",
    "IT": "https://gen.sendtric.com/countdown/4uz77b1mrz",
    "SE": "https://gen.sendtric.com/countdown/46j9k7q4k2",
    "HU": "https://gen.sendtric.com/countdown/xqbbznbx9y",
    "DK": "https://gen.sendtric.com/countdown/vax4vklue8",
    "CZ": "https://gen.sendtric.com/countdown/cw9j5ypydt",
    "FI": "https://gen.sendtric.com/countdown/4hdyapy04a",
    "NO": "https://gen.sendtric.com/countdown/rnzwjhwae5",
    "SK": "https://gen.sendtric.com/countdown/s86bcyi68k",
    "BENL": "https://gen.sendtric.com/countdown/jraerx03n8",
    "BEFR": "https://gen.sendtric.com/countdown/r8xk5smd12",
    "RO": "https://gen.sendtric.com/countdown/9xik7pkjc7"
  },
  isCtaVisible: true,
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_cat_1__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_cat_8__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_cat_13__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_cat_14__20260206.png', folder: '20260206', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: "40140",
  name: "Voucher - Feb Cashback",
  date: "06.02.2026",
  issueCardId: "440792",
  lpId: "28383",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/dXf3Lg2wzV9WtiHRSCpW9U/2026.02.06--Valentine-s-Cashback?node-id=0-1&t=gz4mfi26JUJwhNd9-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, 
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFE6DB",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: 'twoColumnsGrid',
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      shopCTA: {
        space: 80
      },
      Inside: {
        color: "#000000",
        backgroundColor: "#FD9000",
        type: "timer",
        image: "20260206free.png",
        isWithTitles: true,
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        alignment: "center",
        type: "code",
        germanSeparatingLine: true,
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, 
      css: types.CSS.LP,
      background: "#FFE6DB",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: 'twoColumnsGrid',
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      shopCTA: {
        space: 80
      },
      Inside: {
        color: "#000000",
        backgroundColor: "#FD9000",
        type: "timer",
        image: "20260206free.png",
        isWithTitles: true,
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        alignment: "center",
        type: "code",
        germanSeparatingLine: true,
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});