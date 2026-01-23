import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 13.02.26 - Cashback reminder';

const tableQueries = [
  {
    "tableRange": "20:21",
    "name": "TopImageTitle"
  },
  {
    "tableRange": '23:29',
    "name": 'offerPart',
  },
  {
    "tableRange": "49:50",
    "name": "condition"
  },
  { tableRange: '28', name: 'codeCTA' },
  { tableRange: '29', name: 'code' },
  {
    "tableRange": "45",
    "name": "shopall"
  },
];

const links = {
  code_href: translateLink({ value: 'content/lp26-02-06' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-13' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260213_01.png', folder: '20260213', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260213/20260213topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-13' }),
  Banner_1: translateLink({ value: 'content/lp26-02-06' }),
  Banner_1_Image: translateImage({ value: '20260206b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-05' }),
  Banner_2_Image: translateImage({ value: '20260205b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-02-13' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE6DB',
  type: 'standardBold',
};

const timer = {
  position: "insideTopImageTitle",
  background: "#FFE6DB",
  color: "#750000",
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/codc1tkvwk",
    "CHFR": "https://gen.sendtric.com/countdown/lmezsgho1n",
    "FR": "https://gen.sendtric.com/countdown/d7kmx9zlam",
    "DE": "https://gen.sendtric.com/countdown/crvmn38cpj",
    "UK": "https://gen.sendtric.com/countdown/1a7bsvveu7",
    "AT": "https://gen.sendtric.com/countdown/n642243vns",
    "ES": "https://gen.sendtric.com/countdown/qg0m88vsjm",
    "PL": "https://gen.sendtric.com/countdown/b3n1lqjrdb",
    "NL": "https://gen.sendtric.com/countdown/ou8sbjmc2r",
    "PT": "https://gen.sendtric.com/countdown/wnwk93l6xz",
    "IT": "https://gen.sendtric.com/countdown/6i9kpjmww2",
    "SE": "https://gen.sendtric.com/countdown/dkbv9bt2rc",
    "HU": "https://gen.sendtric.com/countdown/01jm66xve1",
    "DK": "https://gen.sendtric.com/countdown/iq7m9laloc",
    "CZ": "https://gen.sendtric.com/countdown/nj2cm1627j",
    "FI": "https://gen.sendtric.com/countdown/wn03qzwh4l",
    "NO": "https://gen.sendtric.com/countdown/rnrpj8hok0",
    "SK": "https://gen.sendtric.com/countdown/o32xsjys6k",
    "BENL": "https://gen.sendtric.com/countdown/yjvm0b8nwb",
    "BEFR": "https://gen.sendtric.com/countdown/wt24vd7fyl",
    "RO": "https://gen.sendtric.com/countdown/flnx7173jz"
  },
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_cat_1__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_cat_8__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_cat_13__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_cat_14__20260213.png', folder: '20260213', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: "40460",
  name: "Voucher - Cashback reminder",
  date: "13.02.2026",
  issueCardId: "444350",
  lpId: "28538",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/NNS3sizLbl2Td3ZNwnqOA4/2026.02.13--Cashback-reminder?node-id=0-1&t=XscdebWlDU0AwdvU-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
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
      Inside: {
        color: "#750000",
        backgroundColor: "#FFE6DB",
        type: "timer",
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
      template: templates.RegularFridayNslt, // User should change this
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
      Inside: {
        color: "#750000",
        backgroundColor: "#FFE6DB",
        type: "timer",
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