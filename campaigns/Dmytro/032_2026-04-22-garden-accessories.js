import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::22.04.26 - Garden accessories';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20:25",
    "name": "paragraphs"
  },
  {
    "tableRange": "27:28",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-22' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260422_01.png', folder: '20260422', placeholderPosition: '47' }),
  // TopImage_src: getImageUrl('20260408_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-03-25' }),
  Banner_1: translateLink({ value: 'content/lp26-04-15' }),
  Banner_1_Image: translateImage({ value: '20260415b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-04-10' }),
  Banner_2_Image: translateImage({ value: '20260410b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FECD8C',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260422/20260422Category10.png', true),
    href: 'https://www.beliani.ch/garden-accessories/pots-and-planters/',
    background: '#FECD8C',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: DimasTranslateImage({ value: '20260422inside.gif', folder: '20260422', placeholderPosition: '47' }),
    href: translateLink({ value: 'content/lp26-03-02' }),
    background: '#FECD8C',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Plant pots',
    // src: translateImage({ value: '20260311_Pic.gif' }),
    href: 'https://www.beliani.ch/garden-accessories/pots-and-planters/',
    background: '#FECD8C',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // CAMIA
      {
        id: '346800',
        src: getImageUrl('20260422/20260422Category11.png', true),
      },
      // ASTRAS
      {
        id: '390617',
        src: getImageUrl('20260422/20260422Category12.png', true),
      },
      // DESKATI
      {
        id: '611875',
        src: getImageUrl('20260422/20260422Category13.png', true),
      },
      // OREOI
      {
        id: '405033',
        src: getImageUrl('20260422/20260422Category14.png', true),
      },
    ],
  },
  {
    name: 'Fire pits & grills',
    src: getImageUrl('20260422/20260422Category20.png', true),
    href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
    background: '#FFE6DB',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // MARAPI
      {
        id: '315877',
        src: getImageUrl('20260422/20260422Category21.png', true),
      },
      // SATAH
      {
        id: '315858',
        src: getImageUrl('20260422/20260422Category22.png', true),
      },
      // TANARA
      {
        id: '197909',
        src: getImageUrl('20260422/20260422Category23.png', true),
      },
      // KELUD
      {
        id: '85075',
        src: getImageUrl('20260422/20260422Category24.png', true),
      },
    ],
  },
  {
    name: 'Garden Ornaments',
    src: getImageUrl('20260422/20260422Category30.png', true),
    href: 'https://www.beliani.ch/garden-accessories/garden-ornaments/',
    background: '#FECD8C',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // SWALLOW
      {
        id: '585018',
        src: getImageUrl('20260422/20260422Category31.png', true),
      },
      // NOLAY
      {
        id: '558771',
        src: getImageUrl('20260422/20260422Category32.png', true),
      },
      // JEZZA
      {
        id: '638772',
        src: getImageUrl('20260422/20260422Category33.png', true),
      },
      // PEACOCK
      {
        id: '	584062',
        src: getImageUrl('20260422/20260422Category34.png', true),
      },
    ],
  },
  {
    name: 'Lanterns',
    src: getImageUrl('20260422/20260422Category40.png', true),
    href: 'https://www.beliani.ch/garden-accessories/garden-lanterns/',
    background: '#FFE6DB',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: 0,
    spaceAfter: 'newsletterBottom40px',
    title: {
      position: 'afterImg',
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: true,
      align: 'center',
      // spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
      prices: true,
      name: true,
    },
    products: [
      // MAURITIUS
      {
        id: '121578',
        src: getImageUrl('20260422/20260422Category41.png', true),
      },
      // MUZIZI
      {
        id: '697751',
        src: getImageUrl('20260422/20260422Category42.png', true),
      },
      // BORNEO
      {
        id: '106078',
        src: getImageUrl('20260422/20260422Category43.png', true),
      },
      // BALABAC
      {
        id: '407346',
        src: getImageUrl('20260422/20260422Category44.png', true),
      },
    ],
  },
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260311_Cat30.png', true),
    // href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
    background: '#FFFFFF',
    color: '#000000',
    type: 'categorytiles',
    cta: false,
    paddingTop: 0,
    spaceAfter: 0,
    title: {
      className: 'newsletterAditionalTitle',
      align: 'center',
      show: true,
      spaceBefore: 'newsletterBottom40px',
      // spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    product: {
      align: 'center',
    },
    tiles: [
      {
        name: 'Lounge sets',
        src: getImageUrl('20260422/20260422Additional1.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
      },
      {
        name: 'Dining sets',
        src: getImageUrl('20260422/20260422Additional2.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
      },
      {
        name: 'Sun loungers',
        src: getImageUrl('20260422/20260422Additional3.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
      },
      {
        name: 'Swings',
        src: getImageUrl('20260422/20260422Additional4.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/swings/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "42349",
  name: "Garden accessories",
  date: "22.04.2026",
  issueCardId: "463235",
  lpId: "29458",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/7uxkP9gas8n095r6hTVEAt/Newsletter-Garden-accessories-2026.04.22?node-id=0-1&t=YyRHzTreDV1aeDKC-1",
  templates: [
    {
      background: '#FECD8C',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '#FECD8C',
      color: '#000000',
      template: templates.Thursday, // User should change this

      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});