import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::06.03.26 - Woman\'s Day';

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
    "tableRange": "43:44",
    "name": "timer"
  },
  {
    "tableRange": "37:38",
    "name": "condition"
  },
  {
    "tableRange": "20:33",
    "name": "categories"
  },
  {
    "tableRange": "34",
    "name": "shopall"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-06' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260306_01.png', folder: '20260306', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260306/20260306topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-06' }),
  Banner_1: translateLink({ value: 'content/lp26-02-26' }),
  Banner_1_Image: translateImage({ value: '20260226b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-27' }),
  Banner_2_Image: translateImage({ value: '20260227b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-03-03' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'twoSameLines',
};

const timer = {
  position: 'afterTilesCategories',
  freebies: getImageUrl('20260306/20260306free.png', true),
  background: "#FFCCB7",
  color: "#000000",
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/llbxdg89ua",
    "CHFR": "https://gen.sendtric.com/countdown/ydddnfq95e",
    "FR": "https://gen.sendtric.com/countdown/yhw7ngjg7t",
    "DE": "https://gen.sendtric.com/countdown/c844gqubnx",
    "UK": "https://gen.sendtric.com/countdown/y15l4te2v5",
    "AT": "https://gen.sendtric.com/countdown/m7qale6hmu",
    "ES": "https://gen.sendtric.com/countdown/v3v14hysni",
    "PL": "https://gen.sendtric.com/countdown/1lztv2negi",
    "NL": "https://gen.sendtric.com/countdown/1yjbv4zz7s",
    "PT": "https://gen.sendtric.com/countdown/q0x9j8m46z",
    "IT": "https://gen.sendtric.com/countdown/s83eaqw5h4",
    "SE": "https://gen.sendtric.com/countdown/65fvvvzhj6",
    "HU": "https://gen.sendtric.com/countdown/gbs97zyqcx",
    "DK": "https://gen.sendtric.com/countdown/bjzgw6zzn4",
    "CZ": "https://gen.sendtric.com/countdown/gcg6qla119",
    "FI": "https://gen.sendtric.com/countdown/a9uajdfyhw",
    "NO": "https://gen.sendtric.com/countdown/buyt85ke4t",
    "SK": "https://gen.sendtric.com/countdown/10w3nubh9g",
    "BENL": "https://gen.sendtric.com/countdown/pk6py6qn5j",
    "BEFR": "https://gen.sendtric.com/countdown/gsvk067fyb",
    "RO": "https://gen.sendtric.com/countdown/cbluv8amb1"
  },
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_cat_1__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts',
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_cat_8__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/lighting/all+products/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_cat_13__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', 
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_cat_14__20260306.png', folder: '20260306', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', 
  },
];

export default new entities.Campaign({
  startId: "41165",
  name: "Woman's Day",
  date: "06.03.2026",
  issueCardId: "452064",
  lpId: "28900",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/ICHyEvK0vIr3ccsBoOU224/2026.03.06---Newsletter---Women-s-Day?node-id=11001-3875&p=f&t=W6bjFZC4YgQEtB2K-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt,
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
      shopCTA: {
        space: '80'
      },
      Inside: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260306free.png",
        isWithTitles: true,
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
      template: templates.RegularFridayNslt,
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
      shopCTA: {
        space: '80'
      },
      Inside: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260306free.png",
        isWithTitles: true,
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