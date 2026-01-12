import { mondayRegularNslt } from "@/templates/AlexSrc/template/mondayRegularNslt";

// Campaign generated from form
const campaignTranslationsSheet = '2026::19.01.26 - January Peak 2nd';

const tableQueries = [
  {
    tableRange: '16',
    name: 'TopImageTitle',
  },
  {
    tableRange: '17',
    name: 'intro',
  },
  {
    tableRange: '26',
    name: 'cta',
  },
  {
    tableRange: '18:25',
    name: 'categories',
  },
  {
    tableRange: '30:31',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-19' }),
  TopImageTitle_src: translateImage({ value: '20260119_01.png' }),
  TopImage_src: translateImage({ value: '20260119_gif.gif' }),
  Banner_1: translateLink({ value: 'content/lp26-01-12' }),
  Banner_1_Image: translateImage({ value: '20260112b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-09' }),
  Banner_2_Image: translateImage({ value: '20260109b.png' }),
};

const TopImageTitle_data = {
  color: '#fff',
  backgroundColor: '#FF2F00',
  type: 'sin',
};

const timer = {
  // freebies: getImageUrl('YYYYMMDD_Free.png', true),
  // // ! REMEMBER TO REPLACE THOSE URLS
  // image: {
  //   CHDE: 'https://gen.sendtric.com/countdown/3x5402a5a5',
  //   CHFR: 'https://gen.sendtric.com/countdown/7d3zl0s986',
  //   FR: 'https://gen.sendtric.com/countdown/12rdr6dtgo',
  //   DE: 'https://gen.sendtric.com/countdown/sv2q3k1x3y',
  //   UK: 'https://gen.sendtric.com/countdown/c4cghowbf1',
  //   AT: 'https://gen.sendtric.com/countdown/ypa0wk4eup',
  //   ES: 'https://gen.sendtric.com/countdown/sehb5k3z7z',
  //   PL: 'https://gen.sendtric.com/countdown/zlnhbu660w',
  //   NL: 'https://gen.sendtric.com/countdown/mr9bn0q4c8',
  //   PT: 'https://gen.sendtric.com/countdown/61n8wy3y4m',
  //   IT: 'https://gen.sendtric.com/countdown/lxloewzogf',
  //   SE: 'https://gen.sendtric.com/countdown/y2imagqwpt',
  //   HU: 'https://gen.sendtric.com/countdown/udnrsqd4o8',
  //   DK: 'https://gen.sendtric.com/countdown/uvfzgmkwr6',
  //   CZ: 'https://gen.sendtric.com/countdown/ajq5qcnl44',
  //   FI: 'https://gen.sendtric.com/countdown/hgh6virvh8',
  //   NO: 'https://gen.sendtric.com/countdown/nfx8ncvozu',
  //   SK: 'https://gen.sendtric.com/countdown/x8yr4llgxx',
  //   BENL: 'https://gen.sendtric.com/countdown/442t1ogqur',
  //   BEFR: 'https://gen.sendtric.com/countdown/kgyur9di1m',
  //   RO: 'https://gen.sendtric.com/countdown/ke5m9a4zrx',
  // },
};

const categories = [
  {
    name: 'Living Room',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260119Cat1.png', true),
    },
    href: 'https://www.beliani.ch/living-room-furniture/',
  },
  {
    name: 'Bedroom',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260119Cat2.png', true),
    },
    href: 'https://www.beliani.ch/bedroom-furniture/',
  },
  {
    name: 'Dining Room',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260119Cat3.png', true),
    },
    href: 'https://www.beliani.ch/dining-room-furniture/',
  },
  {
    name: 'Bathroom',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260119Cat4.png', true),
    },
    href: 'https://www.beliani.ch/bathroom-furniture/',
  },
  {
    name: 'Office',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260119Cat5.png', true),
    },
    href: 'https://www.beliani.ch/office-furniture/',
  },
  {
    name: 'Hallway',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260119Cat6.png', true),
    },
    href: 'https://www.beliani.ch/hallway/',
  },
  {
    name: 'Kids Room',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260119Cat7.png', true),
    },
    href: 'https://www.beliani.ch/children-room/',
  },
  {
    name: 'Home Accessories',
    background: '#FF2F00',
    color: '#fff',
    src: {
      type: 'relation',
      relyOn: 'slug',
      placeholderPosition: '38',
      value: getImageUrl('20260119Cat8.png', true),
    },
    href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
  },
];

export default new entities.Campaign({
  startId: '40076',
  name: 'January Peak 2nd',
  date: '19.01.2026',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/QOTwO4xoNpTFyojlKpa7A8/2026.01.19--2nd-peak--Copy-?node-id=0-1&p=f&t=zsiHiJY9jHq9XYmP-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: mondayRegularNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FF2F00',
      color: '#ffffff',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#fff',
        backgroundColor: '#FF2F00',
        alignment: 'center',
        type: '',
      },
      timer: timer,
      full_img_width: false,
      white_line: true,
      under_intro_line: false,
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: mondayRegularNslt, // User should change this
      soon_banners: true,
      css: types.CSS.LP,
      background: '#FF2F00',
      color: '#ffffff',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      intro: {
        color: '#fff',
        backgroundColor: '#FF2F00',
        alignment: 'center',
        type: '',
      },
      timer: timer,
      full_img_width: false,
      white_line: true,
      under_intro_line: false,
      soon_banners: true,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

