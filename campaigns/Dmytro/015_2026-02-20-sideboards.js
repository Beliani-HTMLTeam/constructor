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
    "tableRange": "19:20",
    "name": "categories"
  },
  {
    "tableRange": "21:22",
    "name": "paragraphs"
  },
  {
    "tableRange": "23:24",
    "name": "condition"
  },
  {
    "tableRange": "32:33",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-20' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260220_01.png', folder: '20260220', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260220/20260220topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-20' }),
  Banner_1: translateLink({ value: 'content/lp26-02-13' }),
  Banner_1_Image: translateImage({ value: '20260213b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-02-12' }),
  Banner_2_Image: translateImage({ value: '20260212b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-02-16' }),
  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FD9000',
  type: 'up_to',
};

const timer = {
  freebies: getImageUrl('20260220/20260220free.png', true),
  background: '#F6E7E6',
  color: '#000000',
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/605obo1xhj",
    "CHFR": "https://gen.sendtric.com/countdown/1diq14addu",
    "FR": "https://gen.sendtric.com/countdown/ys5ae2i98a",
    "DE": "https://gen.sendtric.com/countdown/cg32a2d3cw",
    "UK": "https://gen.sendtric.com/countdown/hysxgb61an",
    "AT": "https://gen.sendtric.com/countdown/f5c5gq4tyl",
    "ES": "https://gen.sendtric.com/countdown/zswdzg9lzt",
    "PL": "https://gen.sendtric.com/countdown/mvf3djq28y",
    "NL": "https://gen.sendtric.com/countdown/bf7pvb6hdc",
    "PT": "https://gen.sendtric.com/countdown/ppwlgu8x1k",
    "IT": "https://gen.sendtric.com/countdown/43mvd1ykqz",
    "SE": "https://gen.sendtric.com/countdown/8mszeem0pe",
    "HU": "https://gen.sendtric.com/countdown/ojjia7k8cr",
    "DK": "https://gen.sendtric.com/countdown/bbywge4845",
    "CZ": "https://gen.sendtric.com/countdown/euz7xrzv0g",
    "FI": "https://gen.sendtric.com/countdown/6ck10gfp13",
    "NO": "https://gen.sendtric.com/countdown/45noxvr13a",
    "SK": "https://gen.sendtric.com/countdown/r7qo23t3n5",
    "BENL": "https://gen.sendtric.com/countdown/el531qalf3",
    "BEFR": "https://gen.sendtric.com/countdown/gu3pmiao4x",
    "RO": "https://gen.sendtric.com/countdown/6s6cva07mo"
  },
};

const categories = [
  {
    name: 'Sideboards',
    background: '#FD9000',
    color: '#000000',
    href: 'https://www.beliani.ch/storage/sideboards/',
    type: 'grid',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    products: [
      {
        id: '',
        src: getImageUrl('20260220/20260220Category10.png', true),
        type: 'full_width'
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category11.png', true),
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category12.png', true),
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category13.png', true),
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category14.png', true),
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category15.gif', true),
        type: 'full_width'
      }
    ],
  },
  {
    name: 'Chest of drawers',
    background: '#FD9000',
    color: '#000000',
    href: 'https://www.beliani.ch/storage/sideboards/',
    type: 'grid',
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    products: [
      {
        id: '',
        src: getImageUrl('20260220/20260220Category20.png', true),
        type: 'full_width'
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category21.png', true),
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category22.png', true),
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category23.png', true),
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category24.png', true),
      },
      {
        id: '',
        src: getImageUrl('20260220/20260220Category25.gif', true),
        type: 'full_width'
      }
    ],
  },
];

export default new entities.Campaign({
  startId: "40716",
  name: "Sideboards",
  date: "20.02.2026",
  issueCardId: "447435",
  lpId: "28651",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
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
        backgroundColor: "#F6E7E6",
        type: "timer",
        image: "20260220free.png",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FD9000",
        alignment: "left",
        type: "paragraph",
        cta: {
          href: 'https://www.beliani.ch/storage/sideboards/'
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
        backgroundColor: "#F6E7E6",
        type: "timer",
        image: "20260220free.png",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FD9000",
        alignment: "left",
        type: "paragraph",
        cta: {
          href: 'https://www.beliani.ch/storage/sideboards/'
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});