import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 27.03.26 - Cashback';

const tableQueries = [
  {
    "tableRange": "22:23",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "25:31",
    "name": "offerPart"
  },
  {
    "tableRange": "36:37",
    "name": "condition"
  },
  {
    "tableRange": "30",
    "name": "codeCTA",
  },
  {
    "tableRange": "31",
    "name": "code",
  },
  {
    "tableRange": "43:44",
    "name": "timer"
   },
   {
    "tableRange": "32",
    "name": "shopall"
   }
];

const links = {
  code_href: translateLink({ value: 'content/lp26-03-27' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-27' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260327_01.png', folder: '20260327', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260327/20260327topgif.gif', true),
  TopImageVideo_src: getImageUrl('20260327/20260327topvid.mp4', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-27' }),
  TopImageVideo_href: translateLink({ value: 'content/lp26-03-27' }),
  Banner_1: translateLink({ value: 'content/lp26-03-20' }),
  Banner_1_Image: translateImage({ value: '20260320b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-19' }),
  Banner_2_Image: translateImage({ value: '20260319b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-03-24' }),
};

const TopImageTitle_data = {
  color: '#FF2F00',
  backgroundColor: '#FFCCB7',
  type: 'standardBold',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260327/20260327free.png', true),
  background: '#F6E7E6',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/zhovc6j43l",
    "CHFR": "https://gen.sendtric.com/countdown/bj3uws8nxz",
    "FR": "https://gen.sendtric.com/countdown/4796ubf1ug",
    "DE": "https://gen.sendtric.com/countdown/z1j4g03byq",
    "UK": "https://gen.sendtric.com/countdown/w6xhpgsz0v",
    "AT": "https://gen.sendtric.com/countdown/ize76j8hjr",
    "ES": "https://gen.sendtric.com/countdown/4zww8xy2gf",
    "PL": "https://gen.sendtric.com/countdown/y16f3btktm",
    "NL": "https://gen.sendtric.com/countdown/i1dydg3v8r",
    "PT": "https://gen.sendtric.com/countdown/tnsr8lury8",
    "IT": "https://gen.sendtric.com/countdown/68e4x30ohe",
    "SE": "https://gen.sendtric.com/countdown/0xvrskvk2i",
    "HU": "https://gen.sendtric.com/countdown/986loo6m0z",
    "DK": "https://gen.sendtric.com/countdown/felfd5eug0",
    "CZ": "https://gen.sendtric.com/countdown/nzzlwx1t6q",
    "FI": "https://gen.sendtric.com/countdown/xwgkfrxyz8",
    "NO": "https://gen.sendtric.com/countdown/35pbgqck2f",
    "SK": "https://gen.sendtric.com/countdown/fvsyugbfvs",
    "BENL": "https://gen.sendtric.com/countdown/4kpjk9leoj",
    "BEFR": "https://gen.sendtric.com/countdown/v37brd6fbt",
    "RO": "https://gen.sendtric.com/countdown/m56ynx8o2j"
  },
};

const categories = [
  {
    name: 'Outdoor',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260327/20260327Category1.png', true),
    href: 'https://www.beliani.ch/garden-furniture/',
    type: 'grid4tiles',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 70,
    line: {
      show: true
    },
    cta: {
      show: true,
      type: 'shopAll',
    },
    products: [
      {
        name: 'Lounge Sets',
        src: DimasTranslateImage({ value: '_lounge_sets.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
      },
      {
        name: 'Dining Sets',
        src: DimasTranslateImage({ value: '_dining_sets.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
      },
      {
        name: 'Balcony Furniture',
        src: DimasTranslateImage({ value: '_balcony_furniture.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
      },
      {
        name: 'Storage',
        src: DimasTranslateImage({ value: '_storage.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-storage/',
      },
    ],
  },
  {
    name: 'Living Room',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260327/20260327Category2.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    type: 'grid4tiles',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: true,
    },
    cta: {
      show: true,
      type: 'shopAll',
    },
    products: [
      {
        name: 'Sofas',
        src: DimasTranslateImage({ value: '_sofas.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/living-room-furniture/sofas/',
      },
      {
        name: 'Armchairs',
        src: DimasTranslateImage({ value: '_dining_sets.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
      },
      {
        name: 'Coffee Tables',
        src: DimasTranslateImage({ value: '_balcony_furniture.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/tables/coffee-tables/',
      },
      {
        name: 'Rugs',
        src: DimasTranslateImage({ value: '_storage.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/living-room-furniture/rugs/',
      },
    ],
  },
  {
    name: 'Bedroom',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260327/20260327Category3.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
    type: 'grid4tiles',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: true,
    },
    cta: {
      show: true,
      type: 'shopAll',
    },
    products: [
      {
        name: 'Beds',
        src: DimasTranslateImage({ value: '_beds.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/bedroom-furniture/beds/',
      },
      {
        name: 'Mattresses',
        src: DimasTranslateImage({ value: '_mattresses.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
      },
      {
        name: 'Bedside tables',
        src: DimasTranslateImage({ value: '_bedside_tables.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/tables/bedside-table/',
      },
      {
        name: 'Lighting',
        src: DimasTranslateImage({ value: '_lighting.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/bedroom-furniture/lighting/',
      },
    ],
  },
  {
    name: 'Dining Room',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260327/20260327Category4.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
    type: 'grid4tiles',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: true,
    },
    cta: {
      show: true,
      type: 'shopAll',
    },
    products: [
      {
        name: 'Tables',
        src: DimasTranslateImage({ value: '_tables.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/dining-room-furniture/tables/',
      },
      {
        name: 'Chairs',
        src: DimasTranslateImage({ value: '_chairs.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/dining-room-furniture/chairs/',
      },
      {
        name: 'Tableware',
        src: DimasTranslateImage({ value: '_tableware.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/dining-room-furniture/kitchenware-tableware/',
      },
      {
        name: 'Kitchen Trolleys',
        src: DimasTranslateImage({ value: '_kitchen_trolleys.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/storage/kitchen-trolleys/',
      },
    ],
  },
  {
    name: 'Bathroom',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260327/20260327Category5.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/',
    type: 'grid4tiles',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: true,
    },
    cta: {
      show: true,
      type: 'shopAll',
    },
    products: [
      {
        name: 'Bathtubs',
        src: DimasTranslateImage({ value: '_bathtubs.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/',
      },
      {
        name: 'Bathroom Fittings',
        src: DimasTranslateImage({ value: '_fittings.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/bathroom-furniture/bathroom-fittings/',
      },
      {
        name: 'Bathroom Storage',
        src: DimasTranslateImage({ value: '_storage.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/bathroom-furniture/bathroom-storage/',
      },
      {
        name: 'Mirrors',
        src: DimasTranslateImage({ value: '_mirrors.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/bathroom-furniture/mirrors/',
      },
    ],
  },
  {
    name: 'Kids Room',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260327/20260327Category6.png', true),
    href: 'https://www.beliani.ch/children-room/',
    type: 'grid4tiles',
    insideContainer: true,
    title: {
      show: true,
      align: 'center',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: true,
    },
    cta: {
      show: true,
      type: 'shopAll',
    },
    products: [
      {
        name: 'Beds',
        src: DimasTranslateImage({ value: '_beds.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/children-room/kids-beds/',
      },
      {
        name: 'Kids Chairs and Tables',
        src: DimasTranslateImage({ value: '_chairs_and_tables.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/children-room/kids-chairs/',
      },
      {
        name: 'Kids Desks',
        src: DimasTranslateImage({ value: '_desks.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/children-room/kids-desks/',
      },
      {
        name: 'Kids Décor',
        src: DimasTranslateImage({ value: '_decor.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
        href: 'https://www.beliani.ch/children-room/kids-decor/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "41837",
  name: "Cashback",
  date: "27.03.2026",
  issueCardId: "459530",
  lpId: "29209",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/qyi5hJ0Ef0Zb208jjtVwcy/CASHBACK-IDEAS?node-id=0-1&t=hWHLkVxeDi1X8OGQ-1",
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
      categories_type: 'grid4tiles',
      categories_line: 'black',
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        type: "timer",
        image: "20260327free.png",
        isWithTitles: true,
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
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
      background: "#FFCCB7",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      categories_type: 'grid4tiles',
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#F6E7E6",
        type: "timer",
        image: "20260327free.png",
        isWithTitles: true,
      },
      OfferPart: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "code",
        germanSeparatingLine: true,
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});