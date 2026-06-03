import placeholderData from './placeholder-data/placeholder-translations.json';

const FALLBACK = placeholderData.CHDE || {};

const campaignTranslationsSheet = '2026::TEST - placeholder sea - never fetched';

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '22:23', fallback: FALLBACK.TopImageTitle },
  { name: 'offer_date',    tableRange: '29',    fallback: FALLBACK.offer_date },
  { name: 'paragraphs',   tableRange: '33',    fallback: FALLBACK.paragraphs },
  { name: 'condition',    tableRange: '34',    fallback: FALLBACK.condition },
];

const links = {
  Banner_1:       translateLink({ value: 'content/lp26-05-27' }),
  Banner_1_Image: getImageUrl('20260527b.png', true),
  Banner_2:       translateLink({ value: 'content/lp26-05-20' }),
  Banner_2_Image: getImageUrl('20260520b.png', true),
};

const BG    = '#f5e4c8';
const COLOR = '#000000';
const LINE  = 'https://pictureserver.net/static/2026/footer/line.jpg';

const TopImageTitle_data = {
  color:           COLOR,
  backgroundColor: BG,
  type:            'standard',
};

const categories = [
  {
    src:        getImageUrl('placeholder_sea.gif', true),
    href:       translateLink({ value: 'content/lp26-06-01' }),
    paddingTop: 0,
    tdClass:    '',
    color:      COLOR,
    background: BG,
    paragraph: {
      show:        true,
      align:       'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter:  'newsletterBottom35px',
    },
    cta:        { href: 'https://www.beliani.ch/' },
    spaceAfter: '0',
    title:      { show: false },
  },

  {
    name:       'Outdoor',
    src:        getImageUrl('placeholder2026s_summers_Pic00.png', true),
    href:       'https://www.beliani.ch/outdoor-furniture/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '45',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Sofas',
    src:        getImageUrl('placeholder2026s_summers_Pic01.png', true),
    href:       'https://www.beliani.ch/living-room-furniture/sofas/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Beds',
    src:        getImageUrl('placeholder2026s_summers_Pic02.png', true),
    href:       'https://www.beliani.ch/beds/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Armchairs',
    src:        getImageUrl('placeholder2026s_summers_Pic03.png', true),
    href:       'https://www.beliani.ch/armchairs/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Chairs',
    src:        getImageUrl('placeholder2026s_summers_Pic04.png', true),
    href:       'https://www.beliani.ch/chairs/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Tables',
    src:        getImageUrl('placeholder2026s_summers_Pic05.png', true),
    href:       'https://www.beliani.ch/tables/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Storage',
    src:        getImageUrl('placeholder2026s_summers_Pic06.png', true),
    href:       'https://www.beliani.ch/storage/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Textiles',
    src:        getImageUrl('placeholder2026s_summers_Pic07.png', true),
    href:       'https://www.beliani.ch/textiles/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Lighting',
    src:        getImageUrl('placeholder2026s_summers_Pic08.png', true),
    href:       'https://www.beliani.ch/lighting/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Bathtubs',
    src:        getImageUrl('placeholder2026s_summers_Pic09.png', true),
    href:       'https://www.beliani.ch/bathtubs-hot-tubs/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Desks',
    src:        getImageUrl('placeholder2026s_summers_Pic10.png', true),
    href:       'https://www.beliani.ch/desks-eng/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Rugs',
    src:        getImageUrl('placeholder2026s_summers_Pic11.png', true),
    href:       'https://www.beliani.ch/rugs/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    line:       { show: true, insideContainer: true, src: LINE },
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },

  {
    name:       'Accessories',
    src:        getImageUrl('placeholder2026s_summers_Pic12.png', true),
    href:       'https://www.beliani.ch/home-accessories/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom35px',
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },
];

const COUNTRIES = ['UK', 'PL', 'DE', 'AT', 'CHDE', 'CHIT', 'CHFR',
                   'NL', 'FR', 'ES', 'PT', 'IT', 'DK', 'NO', 'FI',
                   'SE', 'CZ', 'SK', 'HU', 'BEFR', 'BENL', 'RO'];
const data = Object.fromEntries(COUNTRIES.map((c) => [c, {}]));

export default new entities.Campaign({
  startId:     '99001',
  name:        'PLACEHOLDER Monday - Sea',
  date:        '01.01.2001',
  issueCardId: '999001',
  lpId:        '99001',
  alarm:       { isArchive: true, isActive: false },
  isArchive:   false,
  accent:      '#f5e4c8',
  optimizeImg: false,
  figmaUrl:    'https://www.figma.com/design/PLACEHOLDER/',
  data,
  templates: [
    {
      background: BG,
      color:      COLOR,
      template:   templates.Monday,
      css:        types.CSS.NS,
      name:       'Newsletter',
      type:       types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper:    types.WRAPPER,
      TopImageTitle_data,
      categories,
      links,
      tableQueries,
      categoryImageTdClass: 'newsletterContainer',
    },
    {
      background: BG,
      color:      COLOR,
      template:   templates.Monday,
      css:        types.CSS.LP,
      name:       'Landing',
      type:       types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data,
      categories,
      links,
      tableQueries,
      categoryImageTdClass: 'newsletterContainer',
    },
  ],
});
