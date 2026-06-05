import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::01.07.26 - Outdoor Lounge';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20:23",
    "name": "paragraphs"
  },
  {
    "tableRange": "24:25",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-07-01' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260701_01.png', folder: '20260701', placeholderPosition: '47' }),
  // TopImage_src: getImageUrl('20260701_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-07-01' }),
  Banner_1: translateLink({ value: 'content/lp26-06-18' }),
  Banner_1_Image: translateImage({ value: '20260618b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-06-24' }),
  Banner_2_Image: translateImage({ value: '20260624b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFD6C5',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Lounge Sets',
    src: getImageUrl('20260701/20260701Category10.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
    background: '#FFD6C5',
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
      // VITTORIA 
      {
        id: '517059',
        src: getImageUrl('20260701/20260701Category11.png', true),
      },
      // BARATTI 
      {
        id: '399716',
        src: getImageUrl('20260701/20260701Category12.png', true),
      },
      // ESPERIA 
      {
        id: '399232',
        src: getImageUrl('20260701/20260701Category13.png', true),
      },
      // CORINTH 
      {
        id: '294749',
        src: getImageUrl('20260701/20260701Category14.png', true),
      },
    ],
  },
  {
    name: 'Sun Loungers',
    src: getImageUrl('20260701/20260701Category20.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
    background: '#FFDEB3',
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
      // LUINO 
      {
        id: '508319',
        src: getImageUrl('20260701/20260701Category21.png', true),
      },
      // CESANA PREMIUM
      {
        id: '628535',
        src: getImageUrl('20260701/20260701Category22.png', true),
      },
      // VOLTERRA 
      {
        id: '688778',
        src: getImageUrl('20260701/20260701Category23.png', true),
      },
      // BRESCIA II
      {
        id: '525774',
        src: getImageUrl('20260701/20260701Category24.png', true),
      },
    ],
  },
  {
    name: 'Swings',
    src: getImageUrl('20260701/20260701Category30.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/swings/',
    background: '#FFD6C5',
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
      // GARBO 
      {
        id: '30184',
        src: getImageUrl('20260701/20260701Category31.png', true),
      },
      // BONAGIA 
      {
        id: '642577',
        src: getImageUrl('20260701/20260701Category32.png', true),
      },
      // NERITO 
      {
        id: '589209',
        src: getImageUrl('20260701/20260701Category33.png', true),
      },
      // APRILIA
      {
        id: '58864',
        src: getImageUrl('20260701/20260701Category34.png', true),
      },
    ],
  },
  {
    name: 'Benches',
    src: getImageUrl('20260701/20260701Category40.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/garden-benches/',
    background: '#FFDEB3',
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
      // MILAZZO 
      {
        id: '320746',
        src: getImageUrl('20260701/20260701Category41.png', true),
      },
      // SOVANA
      {
        id: '421248',
        src: getImageUrl('20260701/20260701Category42.png', true),
      },
      // ISOLELLO 
      {
        id: '640380',
        src: getImageUrl('20260701/20260701Category43.png', true),
      },
      // BELLANO 
      {
        id: '508427',
        src: getImageUrl('20260701/20260701Category44.png', true),
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
        name: 'Patio daybeds',
        src: getImageUrl('20260701/20260701Additional1.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/patio-daybeds/',
      },
      {
        name: 'Hammocks',
        src: getImageUrl('20260701/20260701Additional2.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/hammock/',
      },
      {
        name: 'Outdoor Pouffes',
        src: getImageUrl('20260701/20260701Additional3.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/outdoor-pouffes/',
      },
      {
        name: 'Hanging chairs',
        src: getImageUrl('20260701/20260701Additional4.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/garden-hanging-chairs/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "44721",
  name: "Outdoor Lounge",
  date: "01.07.2026",
  issueCardId: "496884",
  lpId: "30643",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/WkdLPSofE9SDbsUoUXG2cw/Outdoor-Lounge---Wednesday-2026.07.01?node-id=0-1&t=MDI0rvR6PBAYt0C1-1",
  templates: [
    {
      background: '#FFD6C5',
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
      background: '#FFD6C5',
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