import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::24.04.26 - March peak final reminder';

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
    "tableRange": "19:22",
    "name": "paragraphs"
  },
  {
    "tableRange": "36:38",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-24' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260424_01.png', folder: '20260424', placeholderPosition: '47' }),
  TopImage_src: DimasTranslateImage({ value: '20260424topgif.gif', folder: '20260424', placeholderPosition: '47' }),
  TopImage_href: translateLink({ value: 'content/lp26-04-24' }),
  Banner_1: translateLink({ value: 'content/lp26-04-17' }),
  Banner_1_Image: translateImage({ value: '20260417b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-26' }),
  Banner_2_Image: translateImage({ value: '20260416b.png' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#FF2F00',
  type: 'twoSameLines',
  className: 'newsletterBottom20px',
};

const timer = {
  position: "insideTopImageTitle",
  background: "#FF2F00",
  color: "#FFFFFF",
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/8bk2pyk4ly",
    "CHFR": "https://gen.sendtric.com/countdown/93kw6vtw1y",
    "FR": "https://gen.sendtric.com/countdown/5ks245id4i",
    "DE": "https://gen.sendtric.com/countdown/5ok0kmw1ip",
    "UK": "https://gen.sendtric.com/countdown/98ez7dsxcn",
    "AT": "https://gen.sendtric.com/countdown/9d744in487",
    "ES": "https://gen.sendtric.com/countdown/819yjope22",
    "PL": "https://gen.sendtric.com/countdown/2hj1uykzjn",
    "NL": "https://gen.sendtric.com/countdown/2lx4mrlz02",
    "PT": "https://gen.sendtric.com/countdown/qexwbnunka",
    "IT": "https://gen.sendtric.com/countdown/c4u11b9tyj",
    "SE": "https://gen.sendtric.com/countdown/sy09n4f1zu",
    "HU": "https://gen.sendtric.com/countdown/465gaddbtn",
    "DK": "https://gen.sendtric.com/countdown/gspr8zafmf",
    "CZ": "https://gen.sendtric.com/countdown/e1r6whjnzb",
    "FI": "https://gen.sendtric.com/countdown/bhd66hbm8e",
    "NO": "https://gen.sendtric.com/countdown/l2zalslh5h",
    "SK": "https://gen.sendtric.com/countdown/pe2tjvbi2p",
    "BENL": "https://gen.sendtric.com/countdown/o7a8qtpmr9",
    "BEFR": "https://gen.sendtric.com/countdown/62bg5324tl",
    "RO": "https://gen.sendtric.com/countdown/ynxv0uy19n"
  },
};

const categories = [
  {
    name: 'Outdoor',
    src: DimasTranslateImage({ value: '_cat_1__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids Room',
    src: DimasTranslateImage({ value: '_cat_8__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_cat_13__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Accessories',
    src: DimasTranslateImage({ value: '_cat_14__20260424.png', folder: '20260424', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: "40556",
  name: "March peak final reminder",
  date: "24.04.2026",
  issueCardId: "446502",
  lpId: "28596",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/WqwPH4O2MVDRTqxVMxklwi/2026.03---March-Peak?node-id=8388-5818&t=cquZr8DrQZmAmQL3-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FF2F00",
      color: "#FFFFFF",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "twoColumnsGrid",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
        type: "timer",
      },
      intro: {
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FF2F00",
      color: "#FFFFFF",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: "twoColumnsGrid",
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
        type: "timer",
      },
      intro: {
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});