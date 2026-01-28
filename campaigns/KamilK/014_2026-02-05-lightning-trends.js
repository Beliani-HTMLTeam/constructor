import { DimasTranslateImage } from '@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage';

// Campaign generated from form
const campaignTranslationsSheet = '2026::05.02.26 - Lighting trends 2026';

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
    tableRange: '27:28',
    name: 'condition',
  },
  { tableRange: '15:16', name: 'timer', tableName: '2026::02.02.26 - Voucher - Free scatter cushion set' },
  {
    tableRange: '24:25', // third link is normal, without filter
    name: 'categoryLinks',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-02-05' }),
  TopImageTitle_src: translateImage({ value: '20260205_01.png' }),

  TopImage_src: getImageUrl('20260205_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-02-05' }),

  Timer_href: translateLink({ value: 'content/lp26-02-02' }),

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
  background: '#FFCCB7',
  color: '#000000',
  freebies: getImageUrl('20260205_Free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/jcwnwpmcnu',
    CHFR: 'https://gen.sendtric.com/countdown/rmtjs56z6y',
    FR: 'https://gen.sendtric.com/countdown/6y6mbxs6wr',
    DE: 'https://gen.sendtric.com/countdown/opkxilnw1j',
    UK: 'https://gen.sendtric.com/countdown/wv80nprsa0',
    AT: 'https://gen.sendtric.com/countdown/ady0vgz84k',
    ES: 'https://gen.sendtric.com/countdown/8raetqw4u5',
    PL: 'https://gen.sendtric.com/countdown/mg4wjir68x',
    NL: 'https://gen.sendtric.com/countdown/29razr9xqw',
    PT: 'https://gen.sendtric.com/countdown/cptg4nv4e6',
    IT: 'https://gen.sendtric.com/countdown/skb58t850f',
    SE: 'https://gen.sendtric.com/countdown/1xcq2gr1xa',
    HU: 'https://gen.sendtric.com/countdown/46rpjy9w4d',
    DK: 'https://gen.sendtric.com/countdown/q444e33ez9',
    CZ: 'https://gen.sendtric.com/countdown/xty48p4bxx',
    FI: 'https://gen.sendtric.com/countdown/rc064aq3ie',
    NO: 'https://gen.sendtric.com/countdown/n22zepbjkz',
    SK: 'https://gen.sendtric.com/countdown/j6v26o6g3s',
    BENL: 'https://gen.sendtric.com/countdown/iqv4xhe6kw',
    BEFR: 'https://gen.sendtric.com/countdown/e0ama1gpvd',
    RO: 'https://gen.sendtric.com/countdown/tmnoip6lx6',
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
        id: '211042',
        src: getImageUrl('20260205_Pic01.png', true),
      },
      // KIBI
      {
        id: '	494511',
        src: getImageUrl('20260205_Pic02.png', true),
      },
      // ALERO
      {
        id: '666118',
        src: getImageUrl('20260205_Pic03.png', true),
      },
      // ARAPEY
      {
        id: '585644',
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
        id: '374534',
        src: getImageUrl('20260205_Pic11.png', true),
      },
      // ANADYR
      {
        id: '686043',
        src: getImageUrl('20260205_Pic12.png', true),
      },
      // PAALA
      {
        id: '623724',
        src: getImageUrl('20260205_Pic13.png', true),
      },
      // SENGWA
      {
        id: '676800',
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
      source: 'queries',
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
        id: '689463',
        src: getImageUrl('20260205_Pic21.png', true),
      },
      // MINOTOS
      {
        id: '	655052',
        src: getImageUrl('20260205_Pic22.png', true),
      },
      // CHARGES
      {
        id: '685534',
        src: getImageUrl('20260205_Pic23.png', true),
      },
      // LUENHA
      {
        id: '676917',
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
        backgroundColor: '#FFCCB7',
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
        backgroundColor: '#FFCCB7',
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
