import { DimasTranslateImage } from '@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage';

// Campaign generated from form
const campaignTranslationsSheet = '2026::29.01.26 - Bedroom trends';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20',
    name: 'intro',
  },
  // {
  //   tableRange: '19:21',
  //   name: 'categories',
  // },
  {
    tableRange: '21:23',
    name: 'paragraphs',
  },
  {
    tableRange: '24:25',
    name: 'condition',
  },
  { tableRange: '11:12', name: 'timer', tableName: '2026::12.01.26 - January Peak Start' },
  // {
  //   tableRange: '25',
  //   name: 'categoryLinks',
  // },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-29' }),
  TopImageTitle_src: translateImage({ value: '20260129_01.png' }),

  TopImage_src: getImageUrl('20260129_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-29' }),

  Timer_href: translateLink({ value: 'content/lp26-01-12' }),

  Banner_1: translateLink({ value: 'content/lp26-01-22' }),
  Banner_1_Image: translateImage({ value: '20260122b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-01-21' }),
  Banner_2_Image: translateImage({ value: '20260121b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  isWithTitles: true,
  background: '#FF2F00',
  color: '#ffffff',
  // freebies: getImageUrl('20260129_Free.png', true),
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
    name: 'Sensory minimalism',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260129_Cat00.png', true),
    href: "https://www.beliani.ch/trends/sensory-minimalism/",
    // hrefSource: 'queries',
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
      // AMBLO
      {
        id: '445317',
        src: getImageUrl('20260129_Pic01.png', true),
      },
      // SPENCER
      {
        id: '164094',
        src: getImageUrl('20260129_Pic02.png', true),
      },
      // QUILLIEN
      {
        id: '499349',
        src: getImageUrl('20260129_Pic03.png', true),
      },
      // NAMDU
      {
        id: '351455',
        src: getImageUrl('20260129_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Woodcore',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260129_Cat10.png', true),
    href: 'https://www.beliani.ch/trends/woodcore/',
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
      // NITRA
      {
        id: '10775',
        src: getImageUrl('20260129_Pic11.png', true),
      },
      // BRADLEY
      {
        id: '624200',
        src: getImageUrl('20260129_Pic12.png', true),
      },
      // MAYENNE
      {
        id: '411621',
        src: getImageUrl('20260129_Pic13.png', true),
      },
      // TELLIKAYA
      {
        id: '627664',
        src: getImageUrl('20260129_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Retro',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260129_Cat20.png', true),
    href: 'https://www.beliani.ch/meet-beliani/retro-style-uk/',
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
      // APAYAO
      {
        id: '581973',
        src: getImageUrl('20260129_Pic21.png', true),
      },
      // NIVO
      {
        id: '524920',
        src: getImageUrl('20260129_Pic22.png', true),
      },
      // BOUSSICOURT
      {
        id: '658530',
        src: getImageUrl('20260129_Pic23.png', true),
      },
      // ZINNIA
      {
        id: '380815',
        src: getImageUrl('20260129_Pic24.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '40300',
  name: 'Bedroom trends',
  date: '29.01.2026',
  issueCardId: '436930',
  lpId: '28442',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl:
    'https://www.figma.com/design/wuGq5uJhoNuRjCkVTPoso5/COPY-%7C-2026.01.29---Newsletter---Bedroom-trends?node-id=12001-621&t=jOHhIMQPSXXeJwqD-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFE9CC',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#ffffff',
        backgroundColor: '#FF2F00',
        type: 'timer',
        image: '20260129_Free.png',
        isWithTitles: true,
        spaceAfter: 'newsletterBottom25px',
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FFE9CC',
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
      background: '#FFE9CC',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#ffffff',
        backgroundColor: '#FF2F00',
        type: 'timer',
        image: '20260129_Free.png',
        isWithTitles: true,
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FFE9CC',
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
