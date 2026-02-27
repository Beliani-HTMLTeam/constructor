import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::20.02.26 - Sideboards';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20",
    "name": "intro"
  },
  {
    "tableRange": "21:22",
    "name": "categories"
  },
  {
    "tableRange": "23:24",
    "name": "paragraphs"
  },
  {
    "tableRange": "28:29",
    "name": "condition"
  },
  {
    "tableRange": "35:36",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-20' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260220_01.png', folder: '20260220', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260220/20260220topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-20' }),
  Banner_1: translateLink({ value: 'content/lp26-02-12' }),
  Banner_1_Image: translateImage({ value: '20260212b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-11' }),
  Banner_2_Image: translateImage({ value: '20260211b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-02-16' }),
  Intro_cta_href: 'https://www.beliani.ch/storage/sideboards/',
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FD9000',
  type: 'up_to',
};

const timer = {
  freebies: getImageUrl('20260220/20260220free.png', true),
  background: '#FFCCB7',
  color: '#000000',
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/eiybz5bvy7",
    "CHFR": "https://gen.sendtric.com/countdown/b7swvbjvsw",
    "FR": "https://gen.sendtric.com/countdown/5s4gdrrbc5",
    "DE": "https://gen.sendtric.com/countdown/yfqvjdwqwa",
    "UK": "https://gen.sendtric.com/countdown/0gs2hdar1a",
    "AT": "https://gen.sendtric.com/countdown/16kj8sj93q",
    "ES": "https://gen.sendtric.com/countdown/k45qwmm4x2",
    "PL": "https://gen.sendtric.com/countdown/p7tkdhvpjk",
    "NL": "https://gen.sendtric.com/countdown/wobjoyzuy9",
    "PT": "https://gen.sendtric.com/countdown/4eh5lx4m0d",
    "IT": "https://gen.sendtric.com/countdown/ahjzh91qgy",
    "SE": "https://gen.sendtric.com/countdown/l6hoenjv0l",
    "HU": "https://gen.sendtric.com/countdown/761tk0j9n5",
    "DK": "https://gen.sendtric.com/countdown/an4roj3u4o",
    "CZ": "https://gen.sendtric.com/countdown/2qdfmd4iw6",
    "FI": "https://gen.sendtric.com/countdown/q6mxnljo4c",
    "NO": "https://gen.sendtric.com/countdown/1w9cbeycpa",
    "SK": "https://gen.sendtric.com/countdown/0ek971bk4r",
    "BENL": "https://gen.sendtric.com/countdown/bxigh39mbx",
    "BEFR": "https://gen.sendtric.com/countdown/7vj5n4tnk3",
    "RO": "https://gen.sendtric.com/countdown/sptkbrhoay"
  },
};

const categories = [
  {
    name: 'Sideboards',
    background: '#FD9000',
    color: '#000000',
    href: 'https://www.beliani.ch/storage/sideboards/',
    type: 'big-grid-big',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    line: {
      show: true,
      insideContainer: true,
    },
    cta: {
      show: true,
    },
    products: [
      {
        id: '692706',
        src: getImageUrl('20260220/20260220Category11.png', true),
        type: 'full_width',
        position: 'before'
      },
      {
        id: '405227',
        src: getImageUrl('20260220/20260220Category12.png', true),
      },
      {
        id: '406663',
        src: getImageUrl('20260220/20260220Category13.png', true),
      },
      {
        id: '571580',
        src: getImageUrl('20260220/20260220Category14.png', true),
      },
      {
        id: '433322',
        src: getImageUrl('20260220/20260220Category15.png', true),
      },
      {
        id: '682708',
        src: getImageUrl('20260220/20260220Category16gif.gif', true),
        type: 'full_width',
        position: 'after'
      }
    ],
  },
  {
    name: 'Chest of drawers',
    background: '#FD9000',
    color: '#000000',
    href: 'https://www.beliani.ch/storage/sideboards/',
    type: 'big-grid-big',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    line: {
      show: true,
      insideContainer: true,
    },
    
    cta: {
      show: true,
    },
    products: [
      {
        id: '697960',
        src: getImageUrl('20260220/20260220Category21.png', true),
        type: 'full_width',
        position: 'before'
      },
      {
        id: '692046',
        src: getImageUrl('20260220/20260220Category22.png', true),
      },
      {
        id: '675520',
        src: getImageUrl('20260220/20260220Category23.png', true),
      },
      {
        id: '671645',
        src: getImageUrl('20260220/20260220Category24.png', true),
      },
      {
        id: '662699',
        src: getImageUrl('20260220/20260220Category25.png', true),
      },
      {
        id: '600977',
        src: getImageUrl('20260220/20260220Category26gif.gif', true),
        type: 'full_width',
        position: 'after'
      }
    ],
  },
];

export default new entities.Campaign({
  startId: "40845",
  name: "Sideboards",
  date: "20.02.2026",
  issueCardId: "447435",
  lpId: "28710",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/wy6BdglQibHfYbwCsgvraL/2026.02.20---Newsletter---Sideboards-and-chest-of-drawers?node-id=0-1&t=BbHDy4WB7TosgTu9-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.FridayLikeThursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FD9000",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260220free.png",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FD9000",
        alignment: "left",
        type: "paragraph",
        cta: {
          spaceAfter: 'newsletterBottom35px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.FridayLikeThursday, // User should change this
      css: types.CSS.LP,
      background: "#FD9000",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260220free.png",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FD9000",
        alignment: "left",
        type: "paragraph",
        cta: {
          spaceAfter: 'newsletterBottom35px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});