import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::25.03.26 - Bedroom';

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
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-25' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260325_01.png', folder: '20260325', placeholderPosition: '47' }),
  // TopImage_src: getImageUrl('20260325_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-03-25' }),
  Banner_1: translateLink({ value: 'content/lp26-03-18' }),
  Banner_1_Image: translateImage({ value: '20260318b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-13' }),
  Banner_2_Image: translateImage({ value: '20260313b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'up_to',
};

const categories = [
  {
    src: getImageUrl('20260325/20260325Category10.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    background: '#F6E7E6',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: DimasTranslateImage({ value: '20260325inside.gif', folder: '20260325', placeholderPosition: '47' }),
    href: translateLink({ value: 'content/lp26-03-02' }),
    background: '#F6E7E6',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Beds',
    // src: translateImage({ value: '20260311_Pic.gif' }),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/',
    background: '#F6E7E6',
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
      // BASTON
      {
        id: '638261',
        src: getImageUrl('20260325/20260325Category11.png', true),
      },
      // LUNAN
      {
        id: '258481',
        src: getImageUrl('20260325/20260325Category12.png', true),
      },
      // HOUNOUX
      {
        id: '704329',
        src: getImageUrl('20260325/20260325Category13.png', true),
      },
      // BREUILLET
      {
        id: '686785',
        src: getImageUrl('20260325/20260325Category14.png', true),
      },
    ],
  },
  {
    name: 'Bedside tables',
    src: getImageUrl('20260325/20260325Category20.png', true),
    href: 'https://www.beliani.ch/storage/bedside-tables/',
    background: '#FFCCB7',
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
      // LEFROY
      {
        id: '609363',
        src: getImageUrl('20260325/20260325Category21.png', true),
      },
      // RONGE
      {
        id: '697713',
        src: getImageUrl('20260325/20260325Category22.png', true),
      },
      // GLASTONBURY
      {
        id: '607537',
        src: getImageUrl('20260325/20260325Category23.png', true),
      },
      //  MALAVI
      {
        id: '359307',
        src: getImageUrl('20260325/20260325Category24.png', true),
      },
    ],
  },
  {
    name: 'Armchairs',
    src: getImageUrl('20260325/20260325Category30.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/armchairs/',
    background: '#F6E7E6',
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
      // MALMOS
      {
        id: '521367',
        src: getImageUrl('20260325/20260325Category31.png', true),
      },
      // BUREA
      {
        id: '656530',
        src: getImageUrl('20260325/20260325Category32.png', true),
      },
      // SKEI
      {
        id: '678879',
        src: getImageUrl('20260325/20260325Category33.png', true),
      },
      // KAGE
      {
        id: '656549',
        src: getImageUrl('20260325/20260325Category34.png', true),
      },
    ],
  },
  {
    name: 'Lighting',
    src: getImageUrl('20260325/20260325Category40.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/lighting/',
    background: '#FFCCB7',
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
      // CELESTE
      {
        id: '370610',
        src: getImageUrl('20260325/20260325Category41.png', true),
      },
      // PORTERO
      {
        id: '689579',
        src: getImageUrl('20260325/20260325Category42.png', true),
      },
      // VALLASAN
      {
        id: '691932',
        src: getImageUrl('20260325/20260325Category43.png', true),
      },
      // TYRIA
      {
        id: '336915',
        src: getImageUrl('20260325/20260325Category44.png', true),
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
        name: 'Mattresses',
        src: getImageUrl('20260325/20260325Additional1.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/mattresses/',
      },
      {
        name: 'Blankets',
        src: getImageUrl('20260325/20260325Additional2.png', true),
        href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
      },
      {
        name: 'Mirrors',
        src: getImageUrl('20260325/20260325Additional3.png', true),
        href: 'https://www.beliani.ch/bedroom-furniture/mirrors/',
      },
      {
        name: 'Sideboards',
        src: getImageUrl('20260325/20260325Additional4.png', true),
        href: 'https://www.beliani.ch/storage/sideboards/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "41805",
  name: "Bedroom",
  date: "25.03.2026",
  issueCardId: "459320",
  lpId: "29190",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/bxKjNosAVmaqAg29vmKZgV/Newsletter-Bedroom---Wednesday-2026.03.25?node-id=0-1&t=8Uwrmpi2eavyQDkX-1",
  templates: [
    {
      background: '#F6E7E6',
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
      background: '#F6E7E6',
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