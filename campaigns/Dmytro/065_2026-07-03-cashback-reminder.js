import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 03.07.26 - Cashback reminder';

const tableQueries = [
  {
    "tableRange": "22:23",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "25:30",
    "name": "offerPart"
  },
  {
    "tableRange": "32:34",
    "name": "condition"
  },
  {
    "tableRange": "30",
    "name": "codeCTA",
  },
  {
    "tableRange": "28",
    "name": "code",
  }
];

const links = {
  code_href: translateLink({ value: 'content/lp26-07-03' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-03' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260703_01.png', folder: '20260703', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260703/20260703topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-07-03' }),
  Banner_1: translateLink({ value: 'content/lp26-06-26' }),
  Banner_1_Image: translateImage({ value: '20260626b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-06-25' }),
  Banner_2_Image: translateImage({ value: '20260625b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-07-03' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFDEB3',
  type: 'twoSameLines',
};

const timer = {
  position: "insideTopImageTitle",
  image: {
    UK: "https://gen.sendtric.com/countdown/a51vgq707l",
    CHDE: "https://gen.sendtric.com/countdown/zp3gl4v7v4",
    CZ: "https://gen.sendtric.com/countdown/xkzhx4dwlz",
    DK:"https://gen.sendtric.com/countdown/g3rt5mia8i",
    DE:"https://gen.sendtric.com/countdown/oow6s3jzjb",
    NL:"https://gen.sendtric.com/countdown/5osdtw6hdx",
    FI:"https://gen.sendtric.com/countdown/78rq33ycgz",
    NO:"https://gen.sendtric.com/countdown/6mb1l2qsq4",
    SE:"https://gen.sendtric.com/countdown/ab5kx7rx5z",
    PL:"https://gen.sendtric.com/countdown/jj6raoo8qm",
    PT:"https://gen.sendtric.com/countdown/ieoedf0n17",
    SK:"https://gen.sendtric.com/countdown/ru0c46okn4",
    ES:"https://gen.sendtric.com/countdown/zy9c2p0zna",
    FR:"https://gen.sendtric.com/countdown/kgehl003a8",
    HU:"https://gen.sendtric.com/countdown/8tkcegxv6p",
    IT:"https://gen.sendtric.com/countdown/7cvpulq7c1",
    BENL:"https://gen.sendtric.com/countdown/bokbx2hpv9",
    BEFR:"https://gen.sendtric.com/countdown/u44ursrnzc",
    CHFR:"https://gen.sendtric.com/countdown/5em6hpvmn0",
    AT:"https://gen.sendtric.com/countdown/9sniel8qo7",
    RO:"https://gen.sendtric.com/countdown/oazgmhksx3"
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
    src: DimasTranslateImage({ value: '_kids_room.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
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
    href: 'https://www.beliani.ch/office-furniture/desks-eng/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_rugs.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/rugs/',
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
  startId: "44753",
  name: "Cashback reminder",
  date: "03.07.2026",
  issueCardId: "496992",
  lpId: "30662",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/rhenbZcXTU31VCz7mWWyMq/2026.07.03---Newsletter---Cashback-reminder?node-id=0-1&t=YFv4zHxgfVsGhjFg-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFDEB3",
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
        backgroundColor: "#FFDEB3",
        type: "timer",
        spaceWithoutCTA: "newsletterBottom20px"
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFDEB3",
        alignment: "center",
        type: "code",
        spaceClass: "newsletterBottom35px",
        isSpaceBetweenAllParts: true,
      },
      shopCTA: {
        space: '80'
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFDEB3",
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
        backgroundColor: "#FFDEB3",
        type: "timer",
        spaceWithoutCTA: "newsletterBottom20px"
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFDEB3",
        alignment: "center",
        type: "code",
        spaceClass: "newsletterBottom35px",
        isSpaceBetweenAllParts: true,
      },
      shopCTA: {
        space: '80'
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});