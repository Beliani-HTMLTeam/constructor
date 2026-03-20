import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::08.04.26 - Textiles';

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
  TopImageTitle_href: translateLink({ value: 'content/lp26-04-08' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '20260408_01.png', folder: '20260408', placeholderPosition: '47' }),
  // TopImage_src: getImageUrl('20260408_Pic.png', true),
  // TopImage_href: translateLink({ value: 'content/lp26-03-25' }),
  Banner_1: translateLink({ value: 'content/lp26-04-01' }),
  Banner_1_Image: translateImage({ value: '20260401b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-26' }),
  Banner_2_Image: translateImage({ value: '20260326b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE8DE',
  type: 'twoSameLines',
};

const categories = [
  {
    src: getImageUrl('20260408/20260408Category10.png', true),
    href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
    background: '#FFE8DE',
    color: '#000000',
    paddingTop: 0,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    src: DimasTranslateImage({ value: '20260408inside.gif', folder: '20260408', placeholderPosition: '47' }),
    href: translateLink({ value: 'content/lp26-03-02' }),
    background: '#FFE8DE',
    color: '#000000',
    paddingTop: 35,
    spaceAfter: '0',
    title: { show: false },
    paragraph: { show: false, spaceBefore: '0', spaceAfter: '0' },
  },
  {
    name: 'Blankets',
    // src: translateImage({ value: '20260311_Pic.gif' }),
    href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
    background: '#FFE8DE',
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
      // PALHI
      {
        id: '338525',
        src: getImageUrl('20260408/20260408Category11.png', true),
      },
      // VELLA
      {
        id: '697408',
        src: getImageUrl('20260408/20260408Category12.png', true),
      },
      // SALKA
      {
        id: '501571',
        src: getImageUrl('20260408/20260408Category13.png', true),
      },
      // BARTAR
      {
        id: '338326',
        src: getImageUrl('20260408/20260408Category14.png', true),
      },
    ],
  },
  {
    name: 'Scatter cushions',
    src: getImageUrl('20260408/20260408Category20.png', true),
    href: 'https://www.beliani.ch/textiles/scatter-cushions/',
    background: '#FFA18C',
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
      // GOLDENROD
      {
        id: '382627',
        src: getImageUrl('20260408/20260408Category21.png', true),
      },
      // YUZURI
      {
        id: '387626',
        src: getImageUrl('20260408/20260408Category22.png', true),
      },
      // MARANTA
      {
        id: '697561',
        src: getImageUrl('20260408/20260408Category23.png', true),
      },
      // MADHUCA
      {
        id: '693546',
        src: getImageUrl('20260408/20260408Category24.png', true),
      },
    ],
  },
  {
    name: 'Outdoor cushions',
    src: getImageUrl('20260408/20260408Category30.png', true),
    href: 'https://www.beliani.ch/textiles/outdoor-cushions/',
    background: '#FFE8DE',
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
      // SWAY
      {
        id: '613111',
        src: getImageUrl('20260408/20260408Category31.png', true),
      },
      // SEASIDE
      {
        id: '613715',
        src: getImageUrl('20260408/20260408Category32.png', true),
      },
      // MIRAGE
      {
        id: '613526',
        src: getImageUrl('20260408/20260408Category33.png', true),
      },
      // MEADOW
      {
        id: '613185',
        src: getImageUrl('20260408/20260408Category34.png', true),
      },
    ],
  },
  {
    name: 'Kids cushions',
    src: getImageUrl('20260408/20260408Category40.png', true),
    href: 'https://www.beliani.ch/textiles/cushions-for-kids/',
    background: '#FFA18C',
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
      // WALLFLOWER
      {
        id: '458260',
        src: getImageUrl('20260408/20260408Category41.png', true),
      },
      // TALOKAN
      {
        id: '457242',
        src: getImageUrl('20260408/20260408Category42.png', true),
      },
      // GAMBIR
      {
        id: '457062',
        src: getImageUrl('20260408/20260408Category43.png', true),
      },
      // SORREL
      {
        id: '458071',
        src: getImageUrl('20260408/20260408Category44.png', true),
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
        name: 'Sofas',
        src: getImageUrl('20260408/20260408Additional1.png', true),
        href: 'https://www.beliani.ch/sofas/',
      },
      {
        name: 'Beds',
        src: getImageUrl('20260408/20260408Additional2.png', true),
        href: 'https://www.beliani.ch/beds/',
      },
      {
        name: 'Coffee tables',
        src: getImageUrl('20260408/20260408Additional3.png', true),
        href: 'https://www.beliani.ch/tables/coffee-tables/',
      },
      {
        name: 'Armchairs',
        src: getImageUrl('20260408/20260408Additional4.png', true),
        href: 'https://www.beliani.ch/armchairs/',
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "41965",
  name: "Textiles",
  date: "08.04.2026",
  issueCardId: "460901",
  lpId: "29266",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/v2R3Mj2GiDnvthE24a8Yvb/2026.04.08---Newsletter---Textiles?node-id=0-1&t=Oppk45wgEH0X7hVI-1",
  templates: [
    {
      background: '#FFE8DE',
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
      background: '#FFE8DE',
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