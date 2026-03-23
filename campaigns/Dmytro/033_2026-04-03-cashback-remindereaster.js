import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 03.04.26 - Cashback reminder/Easter';

const tableQueries = [
  {
    "tableRange": "19:20",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "22",
    "name": "intro"
  },
  {
    "tableRange": "23:29",
    "name": "offerPart"
  },
  {
    "tableRange": "32:34",
    "name": "condition"
  },
  {
    "tableRange": "28",
    "name": "codeCTA",
  },
  {
    "tableRange": "29",
    "name": "code",
  },
  {
    "tableRange": "40:41",
    "name": "timer"
   },
];

const links = {
  code_href: translateLink({ value: 'content/lp26-04-03' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-03' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260403_01.png', folder: '20260403', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260403/20260403topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-04-03' }),
  Banner_1: translateLink({ value: 'content/lp26-03-26' }),
  Banner_1_Image: translateImage({ value: '20260326b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-25' }),
  Banner_2_Image: translateImage({ value: '20260325b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-03-30' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#FF2F00',
  backgroundColor: '#FFCCB7',
  type: 'twoSameSemiBoldLines',
};

const timer = {
  position: 'afterTilesCategories',
  freebies: getImageUrl('20260403/20260403free.png', true),
  background: '#FD9000',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/yntm1erykt",
    "CHFR": "https://gen.sendtric.com/countdown/o6d7j7n9dw",
    "FR": "https://gen.sendtric.com/countdown/qqs44wwb1h",
    "DE": "https://gen.sendtric.com/countdown/nljf153ggx",
    "UK": "https://gen.sendtric.com/countdown/k62hepmwwz",
    "AT": "https://gen.sendtric.com/countdown/vt6k7o0aer",
    "ES": "https://gen.sendtric.com/countdown/8o50gc2rma",
    "PL": "https://gen.sendtric.com/countdown/d9eyhjretq",
    "NL": "https://gen.sendtric.com/countdown/g1pkdacybr",
    "PT": "https://gen.sendtric.com/countdown/k1f23zkk7r",
    "IT": "https://gen.sendtric.com/countdown/johpaf7agi",
    "SE": "https://gen.sendtric.com/countdown/dzc378qspg",
    "HU": "https://gen.sendtric.com/countdown/t922hkc1tl",
    "DK": "https://gen.sendtric.com/countdown/x47nnaf83a",
    "CZ": "https://gen.sendtric.com/countdown/zdc1wk8opy",
    "FI": "https://gen.sendtric.com/countdown/mlug9faqgj",
    "NO": "https://gen.sendtric.com/countdown/uq457qh7ug",
    "SK": "https://gen.sendtric.com/countdown/f7sb8vbl9j",
    "BENL": "https://gen.sendtric.com/countdown/40h7smuzwa",
    "BEFR": "https://gen.sendtric.com/countdown/bo9em6cai4",
    "RO": "https://gen.sendtric.com/countdown/um9oyg4k76"
  },
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_outdoor.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_sofas.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_beds.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_armchairs.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_chairs.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_tables.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_storage.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_kids_room.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_textiles.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_lighting.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_bathtubs.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_desks.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_rugs.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_accessories.png', folder: 'category_tiles/ff2f00/regular_tiles/ffffff', placeholderPosition: '81' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];


export default new entities.Campaign({
  startId: "41869",
  name: "Cashback reminder/Easter",
  date: "03.04.2026",
  issueCardId: "459895",
  lpId: "29228",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/bYpeJjjHgtDPWQwPP9Jk9D/Newsletter-Cashback-reminder-Easter---Friday-2026.04.03?node-id=0-1&t=VvGg0bZZDkYbnJo0-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFCCB7",
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
        backgroundColor: "#FD9000",
        type: "timer",
        isWithTitles: true,
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "code",
        spaceClass: "newsletterBottom25px",
        isSpaceBetweenAllParts: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "paragraph",
        spaceBottom: "0",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFCCB7",
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
        backgroundColor: "#FD9000",
        type: "timer",
        isWithTitles: true,
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "code",
        spaceClass: "newsletterBottom25px",
        isSpaceBetweenAllParts: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "paragraph",
        spaceBottom: "0",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});