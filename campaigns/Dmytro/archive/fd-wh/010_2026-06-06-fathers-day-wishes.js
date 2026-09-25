import { DimasTranslateImage } from "@/templates/DimaSrc/fathers_day_wishes/components/utils/images/translateImage";
import { FathersDayWishes } from "@/templates/DimaSrc/fathers_day_wishes/templates/fathersDayWishes";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Fathers Day Wishes'

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
    "name": "categories"
  },
  {
    "tableRange": "32",
    "name": "shopall"
  },
  {
    "tableRange": "38:39",
    "name": "condition"
  },
  {
    "tableRange": "33:35",
    "name": "GiftCard"
  }
];

const links = {
  // TopImageTitle_href: translateLink({ value: 'content/lp26-03-19' }),
  // TopImageTitle_src: translateImage({ value: '20260319_01.png' }),
  TopImage_src: DimasTranslateImage({
    value: '_father_day_wishes_ti.png',
    folder: 'FathersDayWishes',
    placeholderPosition: '55',
  }),
  TopImage_href: translateLink({ value: 'content/lp26-06-06' }),
  // change it
  Banner_1: translateLink({ value: 'content/lp26-05-29' }),
  Banner_1_Image: translateImage({ value: '20260529b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-28' }),
  Banner_2_Image: translateImage({ value: '20260528b.png' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#750000',
  backgroundColor: 'transparent',
  type: 'twoSameLines',
};

const GiftCard_data = {
  src: getImageUrl('FathersDayWishes/giftcard_fathersday.png'),
  href: 'https://www.beliani.ch/gift-cards/',
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
      value: '_cat_10__fathersday.png',
      folder: 'FathersDayWishes',
      placeholderPosition: '55',
    }),
    href: 'https://www.beliani.ch/lighting/all+products/',
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
  startId: '40012',
  name: "CHDE CHFR Father's Day Wishes",
  date: '06.06.2026',
  issueCardId: '426360',
  lpId: '28307',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl:
    'https://www.figma.com/design/dadYJFx6Xnjb5dCtgpgEo3/Father---Mother-Days--Copy-?node-id=11003-4567&t=v0FXRaubRQtw5STX-1',
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