import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::16.01.26 - Dining room trends';

const tableQueries = [
  {
    tableRange: '15:16',
    name: 'TopImageTitle',
  },
  {
    tableRange: '18',
    name: 'intro',
  },
  {
    tableRange: '19:21',
    name: 'categories',
  },
  {
    tableRange: '22:24',
    name: 'paragraphs',
  },
  {
    tableRange: '29:30',
    name: 'condition',
  },
  { tableRange: '35:36', name: 'timer' },
  {
    tableRange: '25',
    name: 'categoryLinks',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-16' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260116_01.png', folder: '20260116', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260116/20260116topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-16' }),
  Timer_href: translateLink({ value: 'content/lp26-01-13' }),
  Banner_1: translateLink({ value: 'content/lp26-01-09' }),
  Banner_1_Image: translateImage({ value: '20260109b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-08' }),
  Banner_2_Image: translateImage({ value: '20260108b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFF5F1',
  type: 'twoSameLines',
};

const timer = {
  position: 'outsideTopImageTitle',
  isWithTitles: true,
  background: '#FD9000',
  color: '#000000',
  freebies: getImageUrl('20260116/20260116free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/mvd45mtrqb',
    CHFR: 'https://gen.sendtric.com/countdown/pwpk1e9a4c',
    FR: 'https://gen.sendtric.com/countdown/xyagddlkxt',
    DE: 'https://gen.sendtric.com/countdown/ddcr3kq5ej',
    UK: 'https://gen.sendtric.com/countdown/8o40p5iome',
    AT: 'https://gen.sendtric.com/countdown/zldrlky34k',
    ES: 'https://gen.sendtric.com/countdown/r9vrlc4spq',
    PL: 'https://gen.sendtric.com/countdown/v5lk7lwvd3',
    NL: 'https://gen.sendtric.com/countdown/gp908ykrf2',
    PT: 'https://gen.sendtric.com/countdown/gz7nr30sws',
    IT: 'https://gen.sendtric.com/countdown/w8l6tbr1vp',
    SE: 'https://gen.sendtric.com/countdown/871al7ahqt',
    HU: 'https://gen.sendtric.com/countdown/jp7e74449e',
    DK: 'https://gen.sendtric.com/countdown/6xzo7q45os',
    CZ: 'https://gen.sendtric.com/countdown/1gerhznpca',
    FI: 'https://gen.sendtric.com/countdown/vvh1v5vt02',
    NO: 'https://gen.sendtric.com/countdown/x46nplg4sg',
    SK: 'https://gen.sendtric.com/countdown/boyx4eypvi',
    BENL: 'https://gen.sendtric.com/countdown/19xe5g4ve6',
    BEFR: 'https://gen.sendtric.com/countdown/mwck0yjgag',
    RO: 'https://gen.sendtric.com/countdown/0dkfqae1yk',
  },
  isCtaVisible: true,
};

const categories = [
  {
    name: 'Focus on metals',
    background: '#FFF5F1',
    color: '#000000',
    src: getImageUrl('20260116/20260116Category10.png', true),
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
      {
        id: '682708',
        src: getImageUrl('20260116/20260116Category11.png', true),
      },
      {
        id: '602875',
        src: getImageUrl('20260116/20260116Category12.png', true),
      },
      {
        id: '454968',
        src: getImageUrl('20260116/20260116Category13.png', true),
      },
      {
        id: '411043',
        src: getImageUrl('20260116/20260116Category14.png', true),
      },
    ],
  },
  {
    name: 'Rounded shapes',
    background: '#FFF5F1',
    color: '#000000',
    src: getImageUrl('20260116/20260116Category20.png', true),
    href: 'https://www.beliani.ch/curved-furniture/',
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
      {
        id: '455185',
        src: getImageUrl('20260116/20260116Category21.png', true),
      },
      {
        id: '398757',
        src: getImageUrl('20260116/20260116Category22.png', true),
      },
      {
        id: '684186',
        src: getImageUrl('20260116/20260116Category23.png', true),
      },
      {
        id: '430709',
        src: getImageUrl('20260116/20260116Category24.png', true),
      },
    ],
  },
  {
    name: 'Gathering-focused atmosphere',
    background: '#FFF5F1',
    color: '#000000',
    src: getImageUrl('20260116/20260116Category30.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture/',
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
      {
        id: '690092',
        src: getImageUrl('20260116/20260116Category31.png', true),
      },
      {
        id: '665947',
        src: getImageUrl('20260116/20260116Category32.png', true),
      },
      {
        id: '631676',
        src: getImageUrl('20260116/20260116Category33.png', true),
      },
      {
        id: '684032',
        src: getImageUrl('20260116/20260116Category34.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '39788',
  name: '16.01.26 - Dining room trends',
  date: '16.01.2026',
  issueCardId: '436022',
  lpId: '28193',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl:
    'https://www.figma.com/design/Vsvj454af4Sb0tc45mLKdk/2026.01.16----Dining-room-trends-2026?node-id=11004-3902&t=Q24qzo4rNWGsa42J-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt,
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFF5F1',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#000000',
        backgroundColor: '#FD9000',
        type: 'timer',
        image: '20260116free.png',
        isWithTitles: true,
        spaceAfter: 'newsletterBottom25px',
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FFF5F1',
        alignment: 'left',
        type: 'paragraph',
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
      background: '#FFF5F1',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      Inside: {
        color: '#000000',
        backgroundColor: '#FD9000',
        type: 'timer',
        image: '20260116free.png',
        isWithTitles: true,
      },
      intro: {
        color: '#000000',
        backgroundColor: '#FFF5F1',
        alignment: 'left',
        type: 'paragraph',
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer,
    },
  ],
});


