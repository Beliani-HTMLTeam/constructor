import { SoonEndingBanner } from "@/templates/Thursday/components/SoonEndingBanner";
const campaignTranslationsSheet = '08.06.26 - Beliani Birthday Second';

const tableQueries = [
  {
    tableRange: '6',
    name: 'TopImageTitle',
  },
  {
    name: 'offer_date',
    tableRange: '17',
  },
  {
    name: 'intro',
    tableRange: '17',
  },
  {
    tableRange: '17',
    name: 'paragraphs',
  },
  {
    tableRange: '18:19',
    name: 'condition',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-08' }),
  TopImageTitle_src: translateImage({ value: '20260608_01.png' }),

  Banner_1: translateLink({ value: 'content/lp26-05-28' }),
  Banner_1_Image: translateImage({ value: '20260528b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-05-27' }),
  Banner_2_Image: translateImage({ value: '20260527b.png' }),

  //TopImage_src: getImageUrl('20260608_Gif.gif', true),
  //TopImage_href: translateLink({ value: 'content/lp26-04-27' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FF2F00',
  type: 'singleLineBold',
};

const categories = [
  {
    src:  translateImage({ value: '20260608_gif.gif' }),
    href: translateLink({ value: 'content/lp26-06-08' }),
    paddingTop: 0,
    color: '#000000',
    paragraph: {
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
      textOverrides: {
        de:   'Nur für kurze Zeit.<br>Das Angebot gilt bis zum 21. Juni.',
        at:   'Nur für kurze Zeit.<br>Das Angebot gilt bis zum 21. Juni.',
        chde: 'Nur für kurze Zeit.<br>Das Angebot gilt bis zum 21. Juni.',
      },
    },
    cta: { href: 'https://www.beliani.ch/', textOverrides: { fi: 'Tutustu valikoimaan' } },
    background: '#FF2F00',
    spaceAfter: '0',
    title: {
      show: false
    },
  },

  // main
  {
    name: 'Outdoor',
    nameOverrides: { fi: 'Puutarha ja parveke', hu: 'Kültéri bútorok' },
    src: getImageUrl('20260608_Cat01.png', true),
    href: 'https://www.beliani.ch/outdoor-furniture',
    hrefOverrides: { no: 'https://www.beliani.no/hagemoebler/', fi: 'https://www.beliani.fi/puutarhakalusteet/', nl: 'https://www.beliani.nl/tuinmeubelen/', benl: 'https://www.beliani.nl/tuinmeubelen/' },
    background: '#FF2F00',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '45',
    spaceAfter: 'newsletterBottom35px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: false,
    },
    products: [
      {
        src:  translateImage({ value: '20260608_Pic01.png' }),
        id: '582124',
      },
      {
        src: getImageUrl('20260608_Pic02.png', true),
        id: '209992',
      },
    ],
  },
  {
    name: 'Living Room',
    src: getImageUrl('20260608_Cat02.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/',
    background: '#FF2F00',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: false,
    },
    products: [
      {
        src: getImageUrl('20260608_Pic12.png', true),
        id: '731788',
      },
      {
        src:  translateImage({ value: '20260608_Pic11.png' }),
        id: '650031',
      },
    ],
  },
  {
    name: 'Bedroom',
    src: getImageUrl('20260608_Cat03.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/',
    background: '#FF2F00',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: false,
    },
    products: [
      {
        src:  translateImage({ value: '20260608_Pic21.png' }),
        id: '691839',
      },
      {
        src: getImageUrl('20260608_Pic22.png', true),
        id: '521571',
      },
    ],
  },
  {
    name: 'Dining Room',
    src:  translateImage({ value: '20260608_Cat04.png' }),
    src: getImageUrl('20260608_Cat04.png', true),
    href: 'https://www.beliani.ch/dining-room-furniture',
    background: '#FF2F00',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: false,
    },
    products: [
      {
        src: getImageUrl('20260608_Pic32.png', true),
        id: '703664',
      },
      {
        src:  translateImage({ value: '20260608_Pic31.png' }),
        id: '620066',
      },
    ],
  },
  {
    name: 'Bathroom',
    src:  translateImage({ value: '20260608_Cat05.png' }),
    src: getImageUrl('20260608_Cat05.png', true),
    href: 'https://www.beliani.ch/bathroom-furniture',
    background: '#FF2F00',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: false,
    },
    products: [
      {
        src:  translateImage({ value: '20260608_Pic41.png' }),
        id: '580771',
      },
      {
        src: getImageUrl('20260608_Pic42.png', true),
        id: '580809',
      },
    ],
  },
  {
    name: 'Office',
    nameOverrides: { nl: 'Thuiswerkplek', benl: 'Thuiswerkplek', hu: 'Otthoni iroda' },
    src:  translateImage({ value: '20260608_Cat06.png' }),
    src: getImageUrl('20260608_Cat06.png', true),
    href: 'https://www.beliani.ch/office-furniture/',
    background: '#FF2F00',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: false,
    },
    products: [
      {
        src: getImageUrl('20260608_Pic52.png', true),
        id: '710892',
      },
      {
        src:  translateImage({ value: '20260608_Pic51.png' }),
        id: '711462',
      },
    ],
  },
  {
    name: 'Hallway',
    src:  translateImage({ value: '20260608_Cat07.png' }),
    src: getImageUrl('20260608_Cat07.png', true),
    href: 'https://www.beliani.ch/hallway/',
    background: '#FF2F00',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom30px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      prices: false,
      name: false,
    },
    products: [
      {
        src:  translateImage({ value: '20260608_Pic61.png' }),
        id: '716651',
      },
      {
        src: getImageUrl('20260608_Pic62.png', true),
        id: '714985',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '44079',
  name: 'PEAK Birthday second',
  date: '08.06.2026',
  issueCardId: '482731',
  lpId: '30356',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  accent: '#ff704c',
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/fxr4hBIlBDwZfzmCM4l8GI/Newsletter-Beliani-Birthday-Start---Monday-2026.06.01--Copy-?node-id=0-1&t=KWEIe4G753K8HxiT-1',
  templates: [
    {
      background: '#FF2F00',
      color: '#000000',
      template: templates.Monday,
      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      line: true,
      soonEndingBanner: true,
    },
    {
      background: '#FF2F00',
      color: '#000000',
      template: templates.Monday,
      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      line: true,
      soonEndingBanner: true,
    },
  ],
});
