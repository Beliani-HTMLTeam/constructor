import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 24.06.26 - Cashback Midsommar';

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
  code_href: translateLink({ value: 'content/lp26-06-24' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-24' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260624_01.png', folder: '20260624', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260624/20260624topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-24' }),
  Banner_1: translateLink({ value: 'content/lp26-06-04' }),
  Banner_1_Image: translateImage({ value: '20260604b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-06-10' }),
  Banner_2_Image: translateImage({ value: '20260610b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFDEB3',
  type: 'twoSameLines',
};

const OfferPart_data = {
  color: "#000000",
  backgroundColor: "#FFDEB3",
  alignment: "center",
  type: "code",
  spanStyle: 'text-decoration: underline;',
  overrides: {
    DE: {
      offerPart1: "Hol den Sommer ins Haus und sichere dir <br/>100 € auf die nächste Bestellung."
    },
    AT: {
      offerPart1: "Hol den Sommer ins Haus und sichere dir <br/>100 € auf die nächste Bestellung."
    },
    CHDE: {
      offerPart1: "Hol den Sommer ins Haus und sichere dir <br/>100 Fr. auf die nächste Bestellung."
    }
  },
}

const categories = [
  {
    name: 'Outdoor Furniture',
    overrides: {
      FI: "Puutarha ja parveke",
      PT: "Jardim e varanda"
    },
    background: '#FFDEB3',
    color: '#000000',
    src: getImageUrl('20260624/20260624Category1.jpg', true),
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
    paddingTop: 45,
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
        src: DimasTranslateImage({ value: '_lounge_sets.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/',
      },
      {
        name: 'Dining Sets',
        src: DimasTranslateImage({ value: '_dining_sets.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
      },
      {
        name: 'Balcony Furniture',
        src: DimasTranslateImage({ value: '_balcony_furniture.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
      },
      {
        name: 'Sun loungers',
        src: DimasTranslateImage({ value: '_sun_loungers.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
      },
    ],
  },
  {
    name: 'Living Room',
    background: '#FFDEB3',
    color: '#000000',
    src: getImageUrl('20260624/20260624Category2.jpg', true),
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
        src: DimasTranslateImage({ value: '_sofas.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/living-room-furniture/sofas/',
      },
      {
        name: 'Armchairs',
        src: DimasTranslateImage({ value: '_armchairs.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
      },
      {
        name: 'Coffee Tables',
        src: DimasTranslateImage({ value: '_coffee_tables.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/living-room-furniture/tables/coffee-tables/',
      },
      {
        name: 'Rugs',
        src: DimasTranslateImage({ value: '_rugs.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/living-room-furniture/rugs/',
      },
    ],
  },
  {
    name: 'Dining Room',
    background: '#FFDEB3',
    color: '#000000',
    src: getImageUrl('20260624/20260624Category3.jpg', true),
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
        src: DimasTranslateImage({ value: '_tables.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/dining-room-furniture/tables/dining-tables/',
      },
      {
        name: 'Chairs',
        src: DimasTranslateImage({ value: '_chairs.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/dining-room-furniture/chairs/',
      },
      {
        name: 'Tableware',
        src: DimasTranslateImage({ value: '_tableware.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/dining-room-furniture/kitchenware-tableware/',
      },
      {
        name: 'Lighting',
        src: DimasTranslateImage({ value: '_lighting.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/dining-room-furniture/lighting/',
      },
    ],
  },
  {
    name: 'Bedroom',
    background: '#FFDEB3',
    color: '#000000',
    src: getImageUrl('20260624/20260624Category4.jpg', true),
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
        src: DimasTranslateImage({ value: '_beds.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/bedroom-furniture/beds/',
      },
      {
        name: 'Mattresses',
        src: DimasTranslateImage({ value: '_mattresses.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
      },
      {
        name: 'Storage',
        src: DimasTranslateImage({ value: '_storage.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/bedroom-furniture/storage/',
      },
      {
        name: 'Textiles',
        src: DimasTranslateImage({ value: '_textiles.png', folder: 'category_tiles/750000/ffffff/295x80', placeholderPosition: '74' }),
        href: 'https://www.beliani.ch/bedroom-furniture/textiles/',
      },
    ],
  }
];


export default new entities.Campaign({
  startId: "44368",
  name: "Cashback Midsommar",
  date: "24.06.2026",
  issueCardId: "493990",
  lpId: "30489",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/fhsnKPwimEb40FVyjODMpg/2026.06.24---Newsletter---Cashback-Midsommar?node-id=13001-5143&t=X7MOa4gScJfnAze5-1",
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
      categories_type: 'grid4tiles',
      categories_line: 'black',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      OfferPart: OfferPart_data,
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
      categories_type: 'grid4tiles',
      categories_line: 'black',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      OfferPart: OfferPart_data,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});