import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";
import { PeakFreebieNslt } from "@/templates/PeakFreebieNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Voucher - 03.03.26 - Free vase';

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
    "tableRange": "37:38",
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
  code_href: translateLink({ value: 'content/lp26-03-03' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-03' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260303_01.png', folder: '20260303', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260303/20260303topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-03' }),
  Banner_1: translateLink({ value: 'content/lp26-02-18' }),
  Banner_1_Image: translateImage({ value: '20260218b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-12' }),
  Banner_2_Image: translateImage({ value: '20260212b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'standard',
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_cat_1__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_cat_8__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_cat_13__20260303.png', folder: '20260303', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_cat_14__20260303.png', folder: '20260303', placeholderPosition: '47' }),
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
      col: 3,
      products: [
        {
          id: '346696',
          src: getImageUrl('20260303/20260303free1.png', true),
          style: 'padding: 0 5px',
        },
        {
          id: '363524',
          src: getImageUrl('20260303/20260303free2.png', true),
          style: 'padding: 0 5px',
        },
        {
          id: '289993',
          src: getImageUrl('20260303/20260303free3.png', true),
          style: 'padding: 0 5px',
        },
      ],
    }),
    new entities.FreebieItem({
      row: 1,
      col: 3,
      products: [
        {
          id: '290098',
          src: getImageUrl('20260303/20260303free4.png', true),
          style: 'padding: 0 5px',
        },
        {
          id: '360395',
          src: getImageUrl('20260303/20260303free5.png', true),
          style: 'padding: 0 5px',
        },
        {
          id: '290336',
          src: getImageUrl('20260303/20260303free6.png', true),
          style: 'padding: 0 5px',
        },
      ],
    }),
  ],
};

export default new entities.Campaign({
  startId: "41005",
  name: "Free vase",
  date: "03.03.2026",
  issueCardId: "450410",
  lpId: "28805",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/dKotuMIXM1RYuY5Gacbinr/2026.03.03---Newsletter---Free-vase?node-id=11001-3875&p=f&t=HavVMQjv01cwWPLa-0",
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
      freebies: freebies,
      links: links,
      tableQueries: tableQueries,
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
      freebies: freebies,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});