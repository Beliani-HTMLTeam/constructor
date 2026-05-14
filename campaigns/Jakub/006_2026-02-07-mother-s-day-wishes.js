import { DimasTranslateImage } from "@/templates/DimaSrc/fathers_day_wishes/components/utils/images/translateImage";
import { FathersDayWishes } from "@/templates/DimaSrc/fathers_day_wishes/templates/fathersDayWishes";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Mother\'s Day Wishes'

const tableQueries = [
  {
    "tableRange": "14:15",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "17",
    "name": "intro"
  },
  {
    "tableRange": "18:31",
    "tableName": "Father's Day Wishes",
    "name": "categories"
  },
  {
    "tableRange": "21:22",
    "name": "condition"
  },
  {
    "tableRange": "18:20",
    "name": "GiftCard"
  }
];

const links = {
  // TopImageTitle_href: translateLink({ value: 'content/lp26-03-19' }),
  // TopImageTitle_src: translateImage({ value: '20260319_01.png' }),
  TopImage_src: translateImage({ value: '20260526_pic.png' }),
  TopImage_href: translateLink({ value: 'content/lp26-05-26' }), // ! jakub - remember to change this
  // change it
  Banner_1: translateLink({ value: 'content/lp26-05-15' }), // ! jakub - remember to change this
  Banner_1_Image: translateImage({ value: '20260515b.png' }), // ! jakub - remember to change this

  Banner_2: translateLink({ value: 'content/lp26-05-14' }), // ! jakub - remember to change this
  Banner_2_Image: translateImage({ value: '20260514b.png' }), // ! jakub - remember to change this
  
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#750000',
  backgroundColor: 'transparent',
  type: 'twoSameLines',
};

const GiftCard_data = {
  src: getImageUrl('20260207_giftcard.png'),
  href: 'https://www.beliani.ch/gift-cards/',
  spaceAfter: 'newsletterBottom70px',
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({
      value: '_cat_1__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/garden-furniture/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({
      value: '_cat_2__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({
      value: '_cat_3__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({
      value: '_cat_4__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({
      value: '_cat_5__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({
      value: '_cat_6__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({
      value: '_cat_7__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids',
    src: DimasTranslateImage({
      value: '_cat_8__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({
      value: '_cat_9__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({
      //value: '_cat_10__mothersday.png',
      value: '_cat_10__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({
      value: '_cat_11__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({
      value: '_cat_12__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/desks/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({
      value: '_cat_13__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/rugs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({
      value: '_cat_14__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: '38856',
  name: "Mother's Day Wishes",
  date: '26.05.2026', // ! jakub - remember to change this
  issueCardId: '426252',
  lpId: '27731',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl:
    'https://www.figma.com/design/qIOmmCoIsijKLGkeQavHaN/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: FathersDayWishes, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFEDE6',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      GiftCard_data: GiftCard_data,
      categories: categories,
      categories_type: 'twoColumnsGrid',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: '#000000',
        backgroundColor: '#FFEDE6',
        alignment: 'center',
        type: 'paragraph',
      },
      OfferPart: {
        color: '#000000',
        backgroundColor: '#FFEDE6',
        alignment: 'center',
        type: 'giftcard',
      },
      shopCTA: {
        color: '#000000',
        backgroundColor: '#FFEDE6',
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: FathersDayWishes, // User should change this
      css: types.CSS.LP,
      background: '#FFEDE6',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      GiftCard_data: GiftCard_data,
      categories: categories,
      categories_type: 'twoColumnsGrid',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: '#000000',
        backgroundColor: '#FFEDE6',
        alignment: 'center',
        type: 'paragraph',
      },
      OfferPart: {
        color: '#000000',
        backgroundColor: '#FFEDE6',
        alignment: 'center',
        type: 'giftcard',
      },
      shopCTA: {
        color: '#000000',
        backgroundColor: '#FFEDE6',
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],

});