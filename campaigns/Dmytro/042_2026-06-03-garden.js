import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::03.06.26 - Garden';

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
    "tableRange": "26:27",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-03' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260603_01.png', folder: '20260603', placeholderPosition: '47' }),
  // TopImage_src: getImageUrl('20260408_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-03-25' }),
  Banner_1: translateLink({ value: 'content/lp26-05-28' }),
  Banner_1_Image: translateImage({ value: '20260528b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-07' }),
  Banner_2_Image: translateImage({ value: '20260507b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEB24D',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260603/20260603Category10.jpg', true),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/',
    background: '#FEB24D',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: DimasTranslateImage({ value: '20260603inside.gif', folder: '20260603', placeholderPosition: '47' }),
    href: translateLink({ value: 'content/lp26-06-01' }),
    background: '#FEB24D',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Lounge sets',
    // src: translateImage({ value: '20260311_Pic.gif' }),
    href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/lounge-sets/',
    background: '#FEB24D',
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
      // TIMOR
      {
        id: '345384',
        src: getImageUrl('20260603/20260603Category11.png', true),
      },
      // RAVELLO
      {
        id: '209992',
        src: getImageUrl('20260603/20260603Category12.png', true),
      },
      // CACCAMO
      {
        id: '724810',
        src: getImageUrl('20260603/20260603Category13.png', true),
      },
      // SEVERO
      {
        id: '455402',
        src: getImageUrl('20260603/20260603Category14.png', true),
      },
    ],
  },
  {
    name: 'Dining Sets',
    src: getImageUrl('20260603/20260603Category20.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
    background: '#FFDCCD',
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
      // COMO
      {
        id: '423185',
        src: getImageUrl('20260603/20260603Category21.png', true),
      },
      // ALIANO
      {
        id: '374902',
        src: getImageUrl('20260603/20260603Category22.png', true),
      },
      // MAUI
      {
        id: '360771',
        src: getImageUrl('20260603/20260603Category23.png', true),
      },
      // MONSANO
      {
        id: '263972',
        src: getImageUrl('20260603/20260603Category24.png', true),
      },
    ],
  },
  {
    name: 'Balcony Furniture',
    src: getImageUrl('20260603/20260603Category30.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/balcony-furniture/',
    background: '#FEB24D',
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
      // TROPEA
      {
        id: '294750',
        src: getImageUrl('20260603/20260603Category31.png', true),
      },
      // FIORI
      {
        id: '415312',
        src: getImageUrl('20260603/20260603Category32.png', true),
      },
      // PALMI
      {
        id: '257700',
        src: getImageUrl('20260603/20260603Category33.png', true),
      },
      // TERNI
      {
        id: '211913',
        src: getImageUrl('20260603/20260603Category34.png', true),
      },
    ],
  },
  {
    name: 'Outdoor kitchen',
    nameOverrides: { cz: 'abrakadabra' },
    src: getImageUrl('20260603/20260603Category40.jpg', true),
    href: 'https://www.beliani.ch/outdoor-furniture/outdoor-kitchen/',
    background: '#FFDCCD',
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
      // IVREA
      {
        id: '624580',
        src: getImageUrl('20260603/20260603Category41.png', true),
      },
      // VILAMA
      {
        id: '603544',
        src: getImageUrl('20260603/20260603Category42.png', true),
      },
      // VIGGIANO
      {
        id: '723446',
        src: getImageUrl('20260603/20260603Category43.png', true),
      },
      // IVREA
      {
        id: '624713',
        src: getImageUrl('20260603/20260603Category44.png', true),
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
        name: 'Parasols',
        nameOverrides: { cz: 'abrakadabra' },
        src: getImageUrl('20260603/20260603Additional1.png', true),
        href: 'https://www.beliani.ch/garden-furniture/parasols/',
      },
      {
        name: 'Sun Loungers',
        src: getImageUrl('20260603/20260603Additional2.png', true),
        href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
      },
      {
        name: 'Garden Storage',
        src: getImageUrl('20260603/20260603Additional3.png', true),
        href: 'https://www.beliani.ch/garden-furniture/outdoor-storage/',
      },
      {
        name: 'Outdoor lighting',
        src: getImageUrl('20260603/20260603Additional4.png', true),
        href: 'https://www.beliani.ch/garden-furniture/garden-lighting/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "43822",
  name: "Garden",
  date: "03.06.2026",
  issueCardId: "482524",
  lpId: "30218",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/Tyu1bybmv4YATHvb9oeXy4/2026.06.03---Newsletter---Garden?node-id=11001-3875&t=RFyzadnTjdHWk2al-1",
  templates: [
    {
      background: '#FEB24D',
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
      background: '#FEB24D',
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