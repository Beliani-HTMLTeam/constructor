import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";
import { PeakFreebieNslt } from "@/templates/PeakFreebieNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 09.06.26 - Free outdoor cushion';

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
    "tableRange": "33:35",
    "name": "condition"
  },
  {
    "tableRange": "29",
    "name": "codeCTA",
  },
  {
    "tableRange": "30",
    "name": "code",
  },
];

const links = {
  code_href: translateLink({ value: 'content/lp26-06-09' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-09' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260609_01.png', folder: '20260609', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260609/20260609topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-09' }),
  Banner_1: translateLink({ value: 'content/lp26-05-29' }),
  Banner_1_Image: translateImage({ value: '20260529b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-28' }),
  Banner_2_Image: translateImage({ value: '20260528b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'standard',
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
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_rugs.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_accessories.png', folder: 'category_tiles/ff2f00/ffffff', placeholderPosition: '67' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

const freebies = {
  options: {
    background: '#FFCCB7',
    color: '#000000',
   
  },
  items: [
    new entities.FreebieItem({
      row: 1,
      col: 2,
      products: [
        // MIRAGE
        {
          id: '613488',
          src: getImageUrl('20260609/20260609free1.png', true),
          style: 'padding: 0 5px',
        },
        // MIRAGE
        {
          id: '613526',
          src: getImageUrl('20260609/20260609free2.png', true),
          style: 'padding: 0 5px',
        }
      ],
    }),
    new entities.FreebieItem({
      row: 1,
      col: 2,
      products: [
        // VIVID
        {
          id: '613675',
          src: getImageUrl('20260609/20260609free3.png', true),
          style: 'padding: 0 5px',
        },
        // TVISTA
        {
          id: '613340',
          src: getImageUrl('20260609/20260609free4.png', true),
          style: 'padding: 0 5px',
        }
      ],
    }),
  ],
};


export default new entities.Campaign({
  startId: "44015",
  name: "Free outdoor cushion",
  date: "09.06.2026",
  issueCardId: "489180",
  lpId: "30318",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/8H7Zg03LQzIPbPa7ddnWv7/2026.06.09---Newsletter---Free-outdoor-cushion?node-id=0-1&t=hwwJe0cR1koPRDvG-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: PeakFreebieNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFCCB7",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      categoriesAdditionalSpacing: {
        top: 'newsletterBottom35px',
        bottom: 'newsletterBottom45px'
      },
      offerPart: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
      freebies: freebies,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: PeakFreebieNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFCCB7",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      categoriesAdditionalSpacing: {
        top: 'newsletterBottom35px',
        bottom: 'newsletterBottom45px'
      },
      offerPart: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "code",
      },
      links: links,
      tableQueries: tableQueries,
      freebies: freebies,
    },
  ],
});