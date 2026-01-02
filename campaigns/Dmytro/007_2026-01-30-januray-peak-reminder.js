import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::30.01.26 - Januray Peak Reminder';

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
    "tableRange": "35:36",
    "name": "condition"
  },
  { 
    "tableRange": "20:31",
    "name": "categories"
  },
  { 
    "tableRange": "32",
    "name": "shopall"
  },
  
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-30' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260130_01.png', folder: '20260130', placeholderPosition: '47'  }),
  TopImage_src: getImageUrl('20260130/20260130topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-30' }),
  Timer_href: translateLink({ value: 'content/lp26-01-30' }),
  Banner_1: translateLink({ value: 'content/lp26-01-23' }),
  Banner_1_Image: translateImage({ value: '20260123b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-22' }),
  Banner_2_Image: translateImage({ value: '20260122b.png' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#FFFFFF',
  backgroundColor: '#FF2F00',
  type: 'twoSameLines',
};

const timer = {
  position: 'insideTopImageTitle',
  background: '#FF2F00',
  color: '#FFFFFF',
  image:{
    "CHDE": "https://gen.sendtric.com/countdown/lu3jlbbtgy",
    "CHFR": "https://gen.sendtric.com/countdown/ynynpyfw6n",
    "FR": "https://gen.sendtric.com/countdown/hl29n9zf7i",
    "DE": "https://gen.sendtric.com/countdown/zt63ir44be",
    "UK": "https://gen.sendtric.com/countdown/fjpxn27xw0",
    "AT": "https://gen.sendtric.com/countdown/31vag60ozr",
    "ES": "https://gen.sendtric.com/countdown/78b3tndfn6",
    "PL": "https://gen.sendtric.com/countdown/s4wc7ip6af",
    "NL": "https://gen.sendtric.com/countdown/k89mznvlq0",
    "PT": "https://gen.sendtric.com/countdown/3tovm2twfk",
    "IT": "https://gen.sendtric.com/countdown/tgqgddb5se",
    "SE": "https://gen.sendtric.com/countdown/oadt5ptj50",
    "HU": "https://gen.sendtric.com/countdown/ipyspu24cl",
    "DK": "https://gen.sendtric.com/countdown/irs7osntx7",
    "CZ": "https://gen.sendtric.com/countdown/6mirh1o8ze",
    "FI": "https://gen.sendtric.com/countdown/1q573z127v",
    "NO": "https://gen.sendtric.com/countdown/69ae8b1pn4",
    "SK": "https://gen.sendtric.com/countdown/f97gipj429",
    "BENL": "https://gen.sendtric.com/countdown/9wjq8le1i9",
    "BEFR": "https://gen.sendtric.com/countdown/2x8er3en9y",
    "RO": "https://gen.sendtric.com/countdown/tgn1ygp9vb"
  }
};

const categories = [
  {
    name: 'Sofas',
    src: DimasTranslateImage({ value: '_cat_2__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/sofas/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Beds',
    src: DimasTranslateImage({ value: '_cat_3__20260130.png' , folder: '20260130', placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/beds/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Armchairs',
    src: DimasTranslateImage({ value: '_cat_4__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/armchairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Chairs',
    src: DimasTranslateImage({ value: '_cat_5__20260130.png', folder: '20260130' , placeholderPosition: '47' }),
    href: 'https://www.beliani.ch/chairs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Tables',
    src: DimasTranslateImage({ value: '_cat_6__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/tables/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Storage',
    src: DimasTranslateImage({ value: '_cat_7__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/storage/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Kids',
    src: DimasTranslateImage({ value: '_cat_8__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/children-room/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Textiles',
    src: DimasTranslateImage({ value: '_cat_9__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/textiles/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Lighting',
    src: DimasTranslateImage({ value: '_cat_10__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/lighting/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Bathtubs',
    src: DimasTranslateImage({ value: '_cat_11__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Desks',
    src: DimasTranslateImage({ value: '_cat_12__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/office-furniture/desks-eng/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
  {
    name: 'Rugs',
    src: DimasTranslateImage({ value: '_cat_13__20260130.png', folder: '20260130', placeholderPosition: '47'  }),
    href: 'https://www.beliani.ch/rugs/ ',
    type: 'tilesWithoutProducts', // make it by hand (of from old constructor)
  },
];

export default new entities.Campaign({
  startId: "39948",
  name: "Januray Peak Reminder",
  date: "30.01.2026",
  issueCardId: "427103",
  lpId: "28288",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/RlClvuq4PDyfjeF7VTPZf1/2026.01.30--January-Peak-reminder?node-id=17001-183&t=qZbg5HHpx1giP6ss-1",
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
      categories_type: 'twoColumnsGrid',
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
      shopCTA:{
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
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
      categories_type: 'twoColumnsGrid',
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
      shopCTA:{
        color: "#FFFFFF",
        backgroundColor: "#FF2F00",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});