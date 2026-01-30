import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::18.02.26 - Garden trends';

const tableQueries = [
  {
    "tableRange": "15:16",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "18",
    "name": "intro"
  },
  {
    "tableRange": "19",
    "name": "introCTA"
  },
  {
    "tableRange": "20",
    "name": "introCTAhref"
  },
  {
    "tableRange": "21:23",
    "name": "categories"
  },
  {
    "tableRange": "24:26",
    "name": "paragraphs"
  },
  {
    "tableRange": "27:29",
    "name": "categoryLinks"
  },
  {
    "tableRange": "33:34",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-18' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260218_01.png', folder: '20260218', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260218/20260218topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-18' }),
  Banner_1: translateLink({ value: 'content/lp26-02-11' }),
  Banner_1_Image: translateImage({ value: '20260211b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-09' }),
  Banner_2_Image: translateImage({ value: '20260209b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEFD9',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Outdoor living',
    background: '#FFEFD9',
    color: '#000000',
    src: getImageUrl('20260218/20260218Category10.png', true),
    hrefSource: 'queries',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      // PONTE
      {
        id: '659979',
        src: getImageUrl('20260218/20260218Category11.png', true),
      },
      // FALIRO
      {
        id: '699013',
        src: getImageUrl('20260218/20260218Category12.png', true),
      },
      // BORNEO
      {
        id: '106078',
        src: getImageUrl('20260218/20260218Category13.png', true),
      },
      // MISSANELLO
      {
        id: '465149',
        src: getImageUrl('20260218/20260218Category14.png', true),
      },
    ],
  },
  {
    name: 'Natural materials',
    background: '#FFEFD9',
    color: '#000000',
    src: getImageUrl('20260218/20260218Category20.png', true),
    hrefSource: 'queries',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      // FANANO
      {
        id: '394496',
        src: getImageUrl('20260218/20260218Category21.png', true),
      },
      // TIMOR 
      {
        id: '458126',
        src: getImageUrl('20260218/20260218Category22.png', true),
      },
      // SCOPELLO
      {
        id: '598561',
        src: getImageUrl('20260218/20260218Category23.png', true),
      },
      // SASSARI
      {
        id: '628250',
        src: getImageUrl('20260218/20260218Category24.png', true),
      },
    ],
  },
  {
    name: 'Warm tones',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260218/20260218Category30.png', true),
    hrefSource: 'queries',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      // TREZZO
      {
        id: '504240',
        src: getImageUrl('20260218/20260218Category31.png', true),
      },
      // VULETAS
      {
        id: '588725',
        src: getImageUrl('20260218/20260218Category32.png', true),
      },
      // MURASA
      {
        id: '669235',
        src: getImageUrl('20260218/20260218Category33.png', true),
      },
      {
        id: '406595',
        src: getImageUrl('20260218/20260218Category34.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "40781",
  name: "2026.02.18 - Garden trends",
  date: "18.02.2026",
  issueCardId: "446181",
  lpId: "28691",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/H8Oh93VveYtcCkojLeLWuL/2026.02.18-Garden-trends?node-id=0-1&p=f&t=j5lBaWgI9pLYUc5Z-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, 
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFEFD9",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: "#000000",
        backgroundColor: "#FFEFD9",
        alignment: "left",
        type: "paragraph",
        cta: {
          hrefSource: 'queries',
          spaceAfter: 'newsletterBottom45px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFEFD9",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: "#000000",
        backgroundColor: "#FFEFD9",
        alignment: "left",
        type: "paragraph",
        cta: {
          hrefSource: 'queries',
          spaceAfter: 'newsletterBottom45px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});