import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::13.05.26 - Rugs';

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
    "tableRange": "25:26",
    "name": "condition"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-13' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260513_01.png', folder: '20260513', placeholderPosition: '47' }),
  // TopImage_src: getImageUrl('20260408_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-03-25' }),
  Banner_1: translateLink({ value: 'content/lp26-05-06' }),
  Banner_1_Image: translateImage({ value: '20260506b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-01' }),
  Banner_2_Image: translateImage({ value: '20260501b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFDCCD',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Rugs',
    src: getImageUrl('20260513/20260513Category10.png', true),
    href: 'https://www.beliani.ch/rugs/',
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
      // DUZCE
      {
        id: '350317',
        src: getImageUrl('20260513/20260513Category11.png', true),
      },
      // PERAI
      {
        id: '423713',
        src: getImageUrl('20260513/20260513Category12.png', true),
      },
      // BISMIL
      {
        id: '709444',
        src: getImageUrl('20260513/20260513Category13.png', true),
      },
      // ALKENT
      {
        id: '376321',
        src: getImageUrl('20260513/20260513Category14.png', true),
      },
    ],
  },
  {
    name: 'Outdoor rugs',
    src: getImageUrl('20260513/20260513Category20.png', true),
    href: 'https://www.beliani.ch/garden-furniture/garden-rugs/',
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
      // HISAR
      {
        id: '185913',
        src: getImageUrl('20260513/20260513Category21.png', true),
      },
      // KOTA
      {
        id: '97540',
        src: getImageUrl('20260513/20260513Category22.png', true),
      },
      // SAUGOR
      {
        id: '553444',
        src: getImageUrl('20260513/20260513Category23.png', true),
      },
      // AKSU
      {
        id: '134932',
        src: getImageUrl('20260513/20260513Category24.png', true),
      },
    ],
  },
  {
    name: 'Jute Rugs',
    src: getImageUrl('20260513/20260513Category30.png', true),
    href: 'https://www.beliani.ch/rugs/jute-rugs/',
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
      // GONDIA
      {
        id: '693700',
        src: getImageUrl('20260513/20260513Category31.png', true),
      },
      // DEMIRCI
      {
        id: '305415',
        src: getImageUrl('20260513/20260513Category32.png', true),
      },
      // AHLAT
      {
        id: '177357',
        src: getImageUrl('20260513/20260513Category33.png', true),
      },
      // SOGUT
      {
        id: '376023',
        src: getImageUrl('20260513/20260513Category34.png', true),
      },
    ],
  },
  {
    name: 'Kids Rugs',
    src: getImageUrl('20260513/20260513Category40.png', true),
    href: 'https://www.beliani.ch/rugs/childrens-rugs/',
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
      // VURGUN
      {
        id: '460514',
        src: getImageUrl('20260513/20260513Category41.png', true),
      },
      // BAIKER
      {
        id: '454752',
        src: getImageUrl('20260513/20260513Category42.png', true),
      },
      // SINGKIL
      {
        id: '395579',
        src: getImageUrl('20260513/20260513Category43.png', true),
      },
      // BUNAN
      {
        id: '396907',
        src: getImageUrl('20260513/20260513Category44.png', true),
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
        name: 'Floor Lamps',
        src: getImageUrl('20260513/20260513Additional1.png', true),
        href: 'https://www.beliani.ch/lighting/floor-lamps/',
      },
      {
        name: 'Pouffes & Stools',
        src: getImageUrl('20260513/20260513Additional2.png', true),
        href: 'https://www.beliani.ch/living-room-furniture/stools/',
      },
      {
        name: 'Baskets & Containers',
        src: getImageUrl('20260513/20260513Additional3.png', true),
        href: 'https://www.beliani.ch/storage/baskets-containers/',
      },
      {
        name: 'Textiles',
        src: getImageUrl('20260513/20260513Additional4.png', true),
        href: 'https://www.beliani.ch/textiles/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "42701",
  name: "Rugs",
  date: "13.05.2026",
  issueCardId: "469889",
  lpId: "29629",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/9H9orS5GvKaAGOeNNA89fX/2026.05.13---Newsletter---Rugs?node-id=0-1&t=GlyxvxwtyNS1zM7L-1",
  templates: [
    {
      background: '#FFDCCD',
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
      background: '#FFDCCD',
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