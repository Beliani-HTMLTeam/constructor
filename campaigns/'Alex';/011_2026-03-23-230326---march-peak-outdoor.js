import { mondayRegularNslt } from "@/templates/AlexSrc/template/mondayRegularNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2026::23.03.26 - March peak Outdoor';

const tableQueries = [
  {
    tableRange: '16',
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
    tableRange: '19:31',
    name: 'categories',
  },
  {
    tableRange: '35:36',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-23' }),
  TopImageTitle_src: translateImage({ value: '20260323_01.png' }),
  TopImage_src: translateImage({ value: '20260323_gif.gif' }),
  Banner_1: translateLink({ value: 'content/lp26-03-13' }),
  Banner_1_Image: translateImage({ value: '20260313b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-12' }),
  Banner_2_Image: translateImage({ value: '20260312b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
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
    name: 'Lounge sets',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat1.png', true),
    },
    href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
  },
  {
    name: 'Dining sets',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat2.png', true),
    },
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
  },
  {
    name: 'Balcony furniture',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat3.png', true),
    },
    href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
  },
  {
    name: 'Sun loungers',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat4.png', true),
    },
    href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
  },
  {
    name: 'Benches',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat5.png', true),
    },
    href: 'https://www.beliani.ch/outdoor-furniture/garden-benches/',
  },
  {
    name: 'Swings',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat6.png', true),
    },
    href: 'https://www.beliani.ch/outdoor-furniture/swings/',
  },
  {
    name: 'Outdoor kitchen',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat7.png', true),
    },
    href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
  },
  {
    name: 'Storage',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat8.png', true),
    },
    href: 'https://www.beliani.ch/outdoor-furniture/storage-boxes/',
  },
  {
    name: 'Parasols',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat9.png', true),
    },
    href: 'https://www.beliani.ch/garden-furniture/parasols/',
  },
  {
    name: 'Plant pots',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat10.png', true),
    },
    href: 'https://www.beliani.ch/garden-accessories/pots-and-planters/',
  },
  {
    name: 'Fire pits',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat11.png', true),
    },
    href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
  },
  {
    name: 'Rugs',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat12.png', true),
    },
    href: 'https://www.beliani.ch/garden-furniture/garden-rugs/',
  },
  {
    name: 'Textiles',
    background: '#FFCCB7',
    color: '#000000',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260323Cat13.png', true),
    },
    href: 'https://www.beliani.ch/garden-furniture/outdoor-textiles/',
  },
];


export default new entities.Campaign({
  startId: "41101",
  name: "23.03.26 - March peak Outdoor",
  date: "23.03.2026",
  issueCardId: "446479",
  lpId: "28862",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/UoCPi4AhQ178fgzKnWASf6/2026.03---March-Peak--Copy-?node-id=13001-6572&p=f&t=cw3oTAFCZOJfT3YK-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFCCB7",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#000',
        backgroundColor: '#FFCCB7',
        alignment: 'center',
        type: '',
      },
      // timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      soon_banners: true,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFCCB7",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#000',
        backgroundColor: '#FFCCB7',
        alignment: 'center',
        type: '',
      },
      // timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      soon_banners: true,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});