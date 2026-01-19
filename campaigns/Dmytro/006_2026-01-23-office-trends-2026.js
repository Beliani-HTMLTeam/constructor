import { DimasTranslateImage } from '@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage';

// Campaign generated from form
const campaignTranslationsSheet = '2026::23.01.26 - Office trends';

const tableQueries = [
  {
    tableRange: '17:28',
    name: 'TopImageTitle',
  },
  {
    tableRange: '20',
    name: 'intro',
  },
  {
    tableRange: '19:22',
    name: 'paragraphs',
  },
  {
    tableRange: '30:31',
    name: 'condition',
  },
  {
    tableRange: '21:23',
    name: 'categories',
  },
  {
    tableRange: '24:26',
    name: 'paragraphs',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-01-23' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260123_01.png', folder: '20260123', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260123/20260123topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-01-23' }),
  Banner_1: translateLink({ value: 'content/lp26-01-16' }),
  Banner_1_Image: translateImage({ value: '20260116b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-01-15' }),
  Banner_2_Image: translateImage({ value: '20260115b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE9CC',
  type: 'twoSameLines',
};

const categories = [
  {
    name: 'Character-driven workspaces',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260123/20260123Category10.png', true),
    href: 'https://www.beliani.co.uk/trends/character-driven-workspaces/',
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
        id: '684547',
        src: getImageUrl('20260123/20260123Category11.png', true),
      },
      {
        id: '259090',
        src: getImageUrl('20260123/20260123Category12.png', true),
      },
      {
        id: '645357',
        src: getImageUrl('20260123/20260123Category13.png', true),
      },
      {
        id: '678250',
        src: getImageUrl('20260123/20260123Category14.png', true),
      },
    ],
  },
  {
    name: 'Multizonal workspaces',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260123/20260123Category20.png', true),
    href: 'https://www.beliani.co.uk/trends/multizonal-workspaces/',
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
        id: '445734',
        src: getImageUrl('20260123/20260123Category21.png', true),
      },
      {
        id: '689559',
        src: getImageUrl('20260123/20260123Category22.png', true),
      },
      {
        id: '689159',
        src: getImageUrl('20260123/20260123Category23.png', true),
      },
      {
        id: '684032',
        src: getImageUrl('20260123/20260123Category24.png', true),
      },
    ],
  },
  {
    name: 'Organic brutalism',
    background: '#FFE9CC',
    color: '#000000',
    src: getImageUrl('20260123/20260123Category30.png', true),
    href: 'https://www.beliani.co.uk/trends/organic-brutalism/',
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
        id: '639214',
        src: getImageUrl('20260123/20260123Category31.png', true),
      },
      {
        id: '445191',
        src: getImageUrl('20260123/20260123Category32.png', true),
      },
      {
        id: '115409',
        src: getImageUrl('20260123/20260123Category33.png', true),
      },
      {
        id: '684338',
        src: getImageUrl('20260123/20260123Category34.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: '39916',
  name: 'Office trends 2026',
  date: '23.01.2026',
  issueCardId: '436908',
  lpId: '28269',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl:
    'https://www.figma.com/design/HZnJsGK8chYNCiUNBoqmaK/2026.01.23---Newsletter---Office-trends?node-id=10001-4082&t=GCnqQsK41Kn1fMRm-1',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: '#FFE9CC',
      color: '#000000',
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: '#000000',
        backgroundColor: '#FFE9CC',
        alignment: 'left',
        type: 'paragraph',
        additionalSpace: 'newsletterBottom10px',
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: '#FFE9CC',
      color: '#000000',
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_line: 'black',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: '#000000',
        backgroundColor: '#FFE9CC',
        alignment: 'left',
        type: 'paragraph',
        additionalSpace: 'newsletterBottom10px',
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});

