import { DimasTranslateImage } from '@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage';

// Campaign generated from form
const campaignTranslationsSheet = '2026::02.05.26 - Lighting trends 2026';

const tableQueries = [
  {
    tableRange: '15:16',
    name: 'TopImageTitle',
  },
  {
    tableRange: '17',
    name: 'intro',
  },
  {
    tableRange: '18:20',
    name: 'categories',
  },
  {
    tableRange: '21:23',
    name: 'paragraphs',
  },
  {
    tableRange: '24:25',
    name: 'condition',
  },
  { tableRange: '11:12', name: 'timer', tableName: '2026::02.02.26 - Voucher - Free scatter cushion set' },
  {
    tableRange: '24:25',
    name: 'categoryLinks',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-05' }),
  TopImageTitle_src: translateImage({ value: '20260205_01.png' }),

  TopImage_src: getImageUrl('20260205_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-05' }),

  Timer_href: translateLink({ value: 'content/lp26-01-12' }),

  Banner_1: translateLink({ value: 'content/lp26-01-23' }),
  Banner_1_Image: translateImage({ value: '20260123b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-01-16' }),
  Banner_2_Image: translateImage({ value: '20260116b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FCF7F6',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  isWithTitles: true,
  background: '#FF2F00',
  color: '#000000',
  freebies: getImageUrl('20260205_Free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/seezvzv40x',
    CHFR: 'https://gen.sendtric.com/countdown/n78bmi9l84',
    FR: 'https://gen.sendtric.com/countdown/yk1xwsgo90',
    DE: 'https://gen.sendtric.com/countdown/z9han6d5nb',
    UK: 'https://gen.sendtric.com/countdown/yzag1kfy79',
    AT: 'https://gen.sendtric.com/countdown/kuyk4or70d',
    ES: 'https://gen.sendtric.com/countdown/3f5s4hoe69',
    PL: 'https://gen.sendtric.com/countdown/nsajgvvty3',
    NL: 'https://gen.sendtric.com/countdown/yzk9vru1xw',
    PT: 'https://gen.sendtric.com/countdown/un7vka1yn7',
    IT: 'https://gen.sendtric.com/countdown/6axda0q1k7',
    SE: 'https://gen.sendtric.com/countdown/c8b5hm7yma',
    HU: 'https://gen.sendtric.com/countdown/h6dlebcyqs',
    DK: 'https://gen.sendtric.com/countdown/jo12dt83op',
    CZ: 'https://gen.sendtric.com/countdown/ojqijafwvq',
    FI: 'https://gen.sendtric.com/countdown/froalrbcx8',
    NO: 'https://gen.sendtric.com/countdown/jbgnxfwj5r',
    SK: 'https://gen.sendtric.com/countdown/xk7rmeh6tg',
    BENL: 'https://gen.sendtric.com/countdown/drfa8hn7c7',
    BEFR: 'https://gen.sendtric.com/countdown/ty8den4ws6',
    RO: 'https://gen.sendtric.com/countdown/mvohllvi78',
  },
  isCtaVisible: true,
};

const categories = [
  {
    name: 'Natural lighting',
    background: '#FCF7F6',
    color: '#000000',
    src: getImageUrl('20260205_Cat00.png', true),
    // href: "https://www.beliani.ch/trends/sensory-minimalism/",
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
      // BOMU
      {
        id: '445317',
        src: getImageUrl('20260205_Pic01.png', true),
      },
      // KIBI
      {
        id: '164094',
        src: getImageUrl('20260205_Pic02.png', true),
      },
      // ALERO
      {
        id: '499349',
        src: getImageUrl('20260205_Pic03.png', true),
      },
      // ARAPEY
      {
        id: '351455',
        src: getImageUrl('20260205_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Decorative lamps',
    background: '#FCF7F6',
    color: '#000000',
    src: getImageUrl('20260205_Cat10.png', true),
    // href: 'https://www.beliani.ch/trends/woodcore/',
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
      // MORUGA
      {
        id: '10775',
        src: getImageUrl('20260205_Pic11.png', true),
      },
      // ANADYR
      {
        id: '624200',
        src: getImageUrl('20260205_Pic12.png', true),
      },
      // PAALA
      {
        id: '411621',
        src: getImageUrl('20260205_Pic13.png', true),
      },
      // SENGWA
      {
        id: '627664',
        src: getImageUrl('20260205_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Layered lighting',
    background: '#FCF7F6',
    color: '#000000',
    src: getImageUrl('20260205_Cat20.png', true),
    href: 'https://www.beliani.ch/lighting/',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      // source: 'queries',
    },
    paragraph: {
      spaceBefore: 'newsletterBottom35px',
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    products: [
      // SAVEGRE
      {
        id: '581973',
        src: getImageUrl('20260205_Pic21.png', true),
      },
      // MINOTOS
      {
        id: '524920',
        src: getImageUrl('20260205_Pic22.png', true),
      },
      // CHARGES
      {
        id: '658530',
        src: getImageUrl('20260205_Pic23.png', true),
      },
      // LUENHA
      {
        id: '380815',
        src: getImageUrl('20260205_Pic24.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '40524',
  name: 'Lighting trends',
  date: '05.02.2026',
  issueCardId: '442418',
  lpId: '28577',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl:
    'https://www.figma.com/design/nueV29NjvFcooBPZDuOeaG/2026.02.05-Lighting-trends-2026?node-id=0-1&p=f&t=CTT86mmJtM7L5Dyx-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FCF7F6',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#000000',
        backgroundColor: '#FD9000',
        type: 'timer',
        image: '20260205_Free.png',
        isWithTitles: true,
        spaceAfter: 'newsletterBottom25px',
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FCF7F6',
        alignment: 'left',
        type: 'paragraph',
        spaceBottom: 'newsletterBottom45px',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt,
      css: types.CSS.LP,
      background: '#FCF7F6',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#000000',
        backgroundColor: '#FD9000',
        type: 'timer',
        image: '20260205_Free.png',
        isWithTitles: true,
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FCF7F6',
        alignment: 'left',
        type: 'paragraph',
        spaceBottom: 'newsletterBottom45px',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
  ],
});
