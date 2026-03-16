import { DimasTranslateImage } from '@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage';

// Campaign generated from form
const campaignTranslationsSheet = '2026::12.02.26 - Bathroom trends 2026';

const tableQueries = [
  {
    tableRange: '17:18',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20',
    name: 'intro',
  },
  {
    tableRange: '21:23',
    name: 'categories',
  },
  {
    tableRange: '24:26',
    name: 'paragraphs',
  },
  {
    tableRange: '30:31',
    name: 'condition',
  },
  { tableRange: '14:15', name: 'timer', tableName: '2026::Voucher - 06.02.26 - Feb Cashback' }, // translations from 06.02 but link to 13.02
  {
    tableRange: '27:29', // 2nd link is normal, without filter
    name: 'categoryLinks',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-12' }),
  TopImageTitle_src: translateImage({ value: '20260212_01.png' }),

  TopImage_src: getImageUrl('20260212_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-12' }),

  Timer_href: translateLink({ value: 'content/lp26-02-13' }),

  Banner_1: translateLink({ value: 'content/lp26-02-05' }),
  Banner_1_Image: translateImage({ value: '20260205b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-02-04' }),
  Banner_2_Image: translateImage({ value: '20260204b.png' }),
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
  // freebies: getImageUrl('20260212_Free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/dfxs6r8c4z',
    CHFR: 'https://gen.sendtric.com/countdown/6j30kzezzj',
    FR: 'https://gen.sendtric.com/countdown/vgo3pjbkn0',
    DE: 'https://gen.sendtric.com/countdown/kcd17tnhjy',
    UK: 'https://gen.sendtric.com/countdown/eofgtqh4h0',
    AT: 'https://gen.sendtric.com/countdown/u3mzg9xxdv',
    ES: 'https://gen.sendtric.com/countdown/j2slf6imza',
    PL: 'https://gen.sendtric.com/countdown/2conlmkqfr',
    NL: 'https://gen.sendtric.com/countdown/1nf3li5qr4',
    PT: 'https://gen.sendtric.com/countdown/vs6jsru5on',
    IT: 'https://gen.sendtric.com/countdown/umcpnj3l92',
    SE: 'https://gen.sendtric.com/countdown/pnly0lukor',
    HU: 'https://gen.sendtric.com/countdown/30o6dtrtaq',
    DK: 'https://gen.sendtric.com/countdown/2tl3gdfqzn',
    CZ: 'https://gen.sendtric.com/countdown/waw3kllwjq',
    FI: 'https://gen.sendtric.com/countdown/xhlx9myj9j',
    NO: 'https://gen.sendtric.com/countdown/u7f3m4zdgz',
    SK: 'https://gen.sendtric.com/countdown/c7c7i7ngcj',
    BENL: 'https://gen.sendtric.com/countdown/w8ecptax8i',
    BEFR: 'https://gen.sendtric.com/countdown/ddkgfjl039',
    RO: 'https://gen.sendtric.com/countdown/saqeadkvja',
  },
  isCtaVisible: true,
};

const categories = [
  {
    name: 'Strong finish',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260212_Cat00.png', true),
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
      // TELA
      {
        id: '567943',
        src: getImageUrl('20260212_Pic01.png', true),
      },
      // RIOJA
      {
        id: '	251112',
        src: getImageUrl('20260212_Pic02.png', true),
      },
      // MARTEL
      {
        id: '685402',
        src: getImageUrl('20260212_Pic03.png', true),
      },
      // CHIMBOTE
      {
        id: '638735',
        src: getImageUrl('20260212_Pic04.png', true),
      },
    ],
  },
  {
    name: 'Layered lighting',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260212_Cat10.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-lighting/',
    // href: 'https://www.beliani.ch/trends/woodcore/',
    // hrefSource: 'queries',
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
      // ARROS
      {
        id: '653334',
        src: getImageUrl('20260212_Pic11.png', true),
      },
      // CARRERA
      {
        id: '252598',
        src: getImageUrl('20260212_Pic12.png', true),
      },
      // ANNEMASSE
      {
        id: '359656',
        src: getImageUrl('20260212_Pic13.png', true),
      },
      // FERREIRA
      {
        id: '654825',
        src: getImageUrl('20260212_Pic14.png', true),
      },
    ],
  },
  {
    name: 'Bold colours',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260212_Cat20.png', true),
    hrefSource: 'queries',
    // href: 'https://www.beliani.ch/bathroom-furniture/bathroom-lighting/',
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
      // ATIU
      {
        id: '357898',
        src: getImageUrl('20260212_Pic21.png', true),
      },
      // BLANCARENA
      {
        id: '	432492',
        src: getImageUrl('20260212_Pic22.png', true),
      },
      // VENAS
      {
        id: '433556',
        src: getImageUrl('20260212_Pic23.png', true),
      },
      // TOLOSA
      {
        id: '433170',
        src: getImageUrl('20260212_Pic24.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '40620',
  name: 'Bathroom trends 2026',
  date: '12.02.2026',
  issueCardId: '443883',
  lpId: '28615',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl:
    'https://www.figma.com/design/QQVFGRbEOvZZHl5WPs2VLG/COPY-%7C-2026.02.12---Newsletter---Bathroom-trends?node-id=10001-4082&t=fjt0Fn9HxfHubxNh-1',
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
        // image: '20260212_Free.png',
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
        // image: '20260212_Free.png',
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
