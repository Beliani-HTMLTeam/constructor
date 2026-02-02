import { mondayRegularNslt } from "@/templates/AlexSrc/template/mondayRegularNslt";
import { ThreeProductCategory } from "@/templates/archive/ThreeProductCategory";

// Campaign generated from form
const campaignTranslationsSheet = '2026::26.01.26 - January Peak 3rd';

const tableQueries = [
  {
    tableRange: '18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '18',
    name: 'intro',
  },
  {
    tableRange: '32',
    name: 'cta',
  },
  {
    tableRange: '20:31',
    name: 'categories',
  },
  {
    tableRange: '28:29',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-26' }),
  TopImageTitle_src: translateImage({ value: '20260126_01.png' }),
  TopImage_src: translateImage({ value: '20260126_gif.gif' }),
  Banner_1: translateLink({ value: 'content/lp26-01-16' }),
  Banner_1_Image: translateImage({ value: '20260116b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-15' }),
  Banner_2_Image: translateImage({ value: '20260115b.png' }),
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#FF2F00',
  type: 'sin',
};

// const timer = {
//   freebies: getImageUrl('YYYYMMDD_Free.png', true),
//   // ! REMEMBER TO REPLACE THOSE URLS
//   image: {
//     CHDE: 'https://gen.sendtric.com/countdown/3x5402a5a5',
//     CHFR: 'https://gen.sendtric.com/countdown/7d3zl0s986',
//     FR: 'https://gen.sendtric.com/countdown/12rdr6dtgo',
//     DE: 'https://gen.sendtric.com/countdown/sv2q3k1x3y',
//     UK: 'https://gen.sendtric.com/countdown/c4cghowbf1',
//     AT: 'https://gen.sendtric.com/countdown/ypa0wk4eup',
//     ES: 'https://gen.sendtric.com/countdown/sehb5k3z7z',
//     PL: 'https://gen.sendtric.com/countdown/zlnhbu660w',
//     NL: 'https://gen.sendtric.com/countdown/mr9bn0q4c8',
//     PT: 'https://gen.sendtric.com/countdown/61n8wy3y4m',
//     IT: 'https://gen.sendtric.com/countdown/lxloewzogf',
//     SE: 'https://gen.sendtric.com/countdown/y2imagqwpt',
//     HU: 'https://gen.sendtric.com/countdown/udnrsqd4o8',
//     DK: 'https://gen.sendtric.com/countdown/uvfzgmkwr6',
//     CZ: 'https://gen.sendtric.com/countdown/ajq5qcnl44',
//     FI: 'https://gen.sendtric.com/countdown/hgh6virvh8',
//     NO: 'https://gen.sendtric.com/countdown/nfx8ncvozu',
//     SK: 'https://gen.sendtric.com/countdown/x8yr4llgxx',
//     BENL: 'https://gen.sendtric.com/countdown/442t1ogqur',
//     BEFR: 'https://gen.sendtric.com/countdown/kgyur9di1m',
//     RO: 'https://gen.sendtric.com/countdown/ke5m9a4zrx',
//   },
// };

const categories = [
  {
    name: 'Living Room',
    background: '#FF2F00',
    color: '#fff',
    src: getImageUrl('20260126Category1.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    products: [
      {
        id: '649554',
        src: getImageUrl('20260126Category11.png', true),
      },
      {
        id: '660072',
        src: getImageUrl('20260126Category12.png', true),
      },
      {
        id: '321098',
        src: getImageUrl('20260126Category13.png', true),
      },
      {
        id: '343790',
        src: getImageUrl('20260126Category14.png', true),
      },
    ],
  },
  {
    name: 'Bedroom',
    background: '#FF2F00',
    color: '#fff',
    src: getImageUrl('20260126Category2.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
    products: [
      {
        id: '448773',
        src: getImageUrl('20260126Category21.png', true),
      },
      {
        id: '467586',
        src: getImageUrl('20260126Category22.png', true),
      },
      {
        id: '673047',
        src: getImageUrl('20260126Category23.png', true),
      },
      {
        id: '553728',
        src: getImageUrl('20260126Category24.png', true),
      },
    ],
  },
  {
    name: 'Dining Room ',
    background: '#FF2F00',
    color: '#fff',
    src: getImageUrl('20260126Category3.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
    products: [
      {
        id: '450043',
        src: getImageUrl('20260126Category31.png', true),
      },
      {
        id: '398774',
        src: getImageUrl('20260126Category32.png', true),
      },
      {
        id: '494583',
        src: getImageUrl('20260126Category33.png', true),
      },
      {
        id: '628747',
        src: getImageUrl('20260126Category34.png', true),
      },
    ],
  },
  {
    name: 'Bathroom',
    background: '#FF2F00',
    color: '#fff',
    src: getImageUrl('20260126Category4.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/',
    products: [
      {
        id: '604085',
        src: getImageUrl('20260126Category41.png', true),
      },
      {
        id: '200426',
        src: getImageUrl('20260126Category42.png', true),
      },
      {
        id: '580771',
        src: getImageUrl('20260126Category43.png', true),
      },
      {
        id: '613847',
        src: getImageUrl('20260126Category44.png', true),
      },
    ],
  },
  {
    name: 'Office',
    background: '#FF2F00',
    color: '#fff',
    src: getImageUrl('20260126Category5.png', true),
    href: 'https://www.beliani.ch/office-furniture/',
    products: [
      {
        id: '582333',
        src: getImageUrl('20260126Category51.png', true),
      },
      {
        id: '639240',
        src: getImageUrl('20260126Category52.png', true),
      },
      {
        id: '519440',
        src: getImageUrl('20260126Category53.png', true),
      },
      {
        id: '613847',
        src: getImageUrl('20260126Category54.png', true),
      },
    ],
  },
  {
    name: 'Hallway ',
    background: '#FF2F00',
    color: '#fff',
    src: getImageUrl('20260126Category6.png', true),
    href: 'https://www.beliani.ch/hallway/',
    products: [
      {
        id: '517773',
        src: getImageUrl('20260126Category61.png', true),
      },
      {
        id: '678804',
        src: getImageUrl('20260126Category62.png', true),
      },
      {
        id: '641417',
        src: getImageUrl('20260126Category63.png', true),
      },
      {
        id: '613847',
        src: getImageUrl('20260126Category64.png', true),
      },
    ],
  },
];


export default new entities.Campaign({
  startId: "40236",
  name: "26.01.26 - January Peak 3rd",
  date: "26.01.2026",
  issueCardId: "427141",
  lpId: "28423",
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/IscnTTeCrR6LyoyjN6kinf/2026.01.26--3nd-peak--Copy-?node-id=0-1&p=f&t=kGu9iqkEcWw6sUuX-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: ThreeProductCategory, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FF2F00",
      color: "#ffffff",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#fff',
        backgroundColor: '#FF2F00',
        alignment: 'center',
        type: '',
      },
      // timer: timer,
      full_img_width: false,
      white_line: true,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: ThreeProductCategory, // User should change this
      css: types.CSS.LP,
      background: "#FF2F00",
      color: "#ffffff",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#fff',
        backgroundColor: '#FF2F00',
        alignment: 'center',
        type: '',
      },
      // timer: timer,
      full_img_width: false,
      soon_banners: true,
      white_line: true,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});