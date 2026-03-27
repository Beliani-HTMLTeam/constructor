// Campaign generated from form
const campaignTranslationsSheet = '2026::09.04.26 - Outdoor kitchens &bbq';

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
    tableRange: '23:24',
    name: 'paragraphs',
  },
  {
    tableRange: '21:22',
    name: 'categories',
  },
  {
    tableRange: '25:26',
    name: 'condition',
  },
  {
    tableRange: '12:13',
    name: 'timer',
    tableName: '2026::Voucher - 06.04.26 - Free bathroom set	',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-09' }),
  TopImageTitle_src: translateImage({ value: '20260409_01.png' }),

  TopImage_src: getImageUrl('20260409_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-04-09' }),

  Banner_1: translateLink({ value: 'content/lp26-04-02' }),
  Banner_1_Image: translateImage({ value: '20260402b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-04-01' }),
  Banner_2_Image: translateImage({ value: '20260401b.png' }),

  Timer_href: translateLink({ value: 'content/lp26-04-06' }),
};

const TopImageTitle_data = {
  color: '#ffffff',
  backgroundColor: '#FF2F00',
  type: 'up_to',
};

const categories = [
  {
    name: 'Outdoor kitchen',
    src: translateImage({ value: '20260409_Cat00.png' }),
    href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '45',
    title: {
      show: false,
      // spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // ROCHA
      {
        id: 712958,
        src: getImageUrl('20260409_Pic01.png', true),
      },
      // VILAMA
      {
        id: 710664,
        src: getImageUrl('20260409_Pic02.png', true),
      },
      // MAENZA
      {
        id: 702114,
        src: getImageUrl('20260409_Pic03.png', true),
      },
      // BRUCOLI
      {
        id: 641797,
        src: getImageUrl('20260409_Pic04.png', true),
      },
      // IVREA
      {
        id: 624561,
        src: getImageUrl('20260409_Pic05.png', true),
      },
      // ORTISEI
      {
        id: 526547,
        src: getImageUrl('20260409_Pic06.png', true),
      },
    ],
  },
  {
    name: 'Fire pits & grills',
    src: translateImage({ value: '20260409_Cat10.png' }),
    href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
    background: '#FF2F00',
    color: '#ffffff',
    type: 'grid',
    cta: true,
    paddingTop: '0',
    title: {
      show: false,
      // spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: true,
      name: true,
    },
    products: [
      // KAMADO
      {
        id: 650927,
        src: getImageUrl('20260409_Pic11.png', true),
      },
      // MARAPI
      {
        id: 315877,
        src: getImageUrl('20260409_Pic12.png', true),
      },
      // PAVLOF
      {
        id: 301788,
        src: getImageUrl('20260409_Pic13.png', true),
      },
      // TANARA
      {
        id: 197909,
        src: getImageUrl('20260409_Pic14.png', true),
      },
      // KELUD
      {
        id: 85075,
        src: getImageUrl('20260409_Pic15.png', true),
      },
      // SHIGA
      {
        id: 86997,
        src: getImageUrl('20260409_Pic16.png', true),
      },
    ],
  },
];

const timer = {
  freebies: getImageUrl('20260409free.png', true),
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/ym7x86fwyt',
    CHFR: 'https://gen.sendtric.com/countdown/n7f2rg9pey',
    FR: 'https://gen.sendtric.com/countdown/iqnvczyqbj',
    DE: 'https://gen.sendtric.com/countdown/6w874cnwzb',
    UK: 'https://gen.sendtric.com/countdown/ri9r0ape23',
    AT: 'https://gen.sendtric.com/countdown/3f7dlac198',
    ES: 'https://gen.sendtric.com/countdown/32ri8mb96b',
    PL: 'https://gen.sendtric.com/countdown/cl3oebx6ja',
    NL: 'https://gen.sendtric.com/countdown/ojuktlt9kq',
    PT: 'https://gen.sendtric.com/countdown/xpq8za3q4c',
    IT: 'https://gen.sendtric.com/countdown/j58z6yq310',
    SE: 'https://gen.sendtric.com/countdown/n1x823sehp',
    HU: 'https://gen.sendtric.com/countdown/gcr51yjltw',
    DK: 'https://gen.sendtric.com/countdown/2kgg355fk3',
    CZ: 'https://gen.sendtric.com/countdown/fbpxvu5kzw',
    FI: 'https://gen.sendtric.com/countdown/pq4o7h6tm6',
    NO: 'https://gen.sendtric.com/countdown/xkkx74vnpx',
    SK: 'https://gen.sendtric.com/countdown/yzu1v0g41g',
    BENL: 'https://gen.sendtric.com/countdown/02ok9bpll4',
    BEFR: 'https://gen.sendtric.com/countdown/8lmini2gb2',
    RO: 'https://gen.sendtric.com/countdown/j14djtvzdd',
  },
};

export default new entities.Campaign({
  startId: '42637',
  name: 'Outdoor Kitchen',
  date: '09.04.2026',
  issueCardId: '460926',
  lpId: '29591',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/QPk6GgP2kezBzzI8OjJFSX/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#F6E7E6',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#F6E7E6', // unused
        alignment: 'left',
        type: 'paragraph',
        position: 'afterTimer',
        spaceTop: 'newsletterBottom60px',
        spaceBottom: '0',
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
      },
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: '#F6E7E6',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      timer: timer,
      intro: {
        color: '#000000', // unused
        backgroundColor: '#F6E7E6', // unused
        alignment: 'left',
        type: 'paragraph',
        position: 'afterTimer',
        spaceTop: 'newsletterBottom60px',
        spaceBottom: '0',
      },
      Inside: {
        color: '#000000',
        backgroundColor: '#FFCCB7',
        type: 'timer',
      },
    },
  ],
});
