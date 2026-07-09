import placeholderData from './placeholder-data/placeholder-translations.json';

const FALLBACK = placeholderData.CHDE || {};

const campaignTranslationsSheet = '2026::TEST - placeholder grassland - never fetched';

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '22:23', fallback: FALLBACK.TopImageTitle },
  { name: 'offer_date',    tableRange: '29',    fallback: FALLBACK.offer_date },
  { name: 'paragraphs',   tableRange: '33',    fallback: FALLBACK.paragraphs },
  { name: 'condition',    tableRange: '34',    fallback: FALLBACK.condition },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-01' }),
  TopImageTitle_src:  getImageUrl('topimagetitle_placeholder_grassland.png', true),

  Banner_1:       translateLink({ value: 'content/lp26-05-27' }),
  Banner_1_Image: getImageUrl('20260527b.png', true),
  Banner_2:       translateLink({ value: 'content/lp26-05-20' }),
  Banner_2_Image: getImageUrl('20260520b.png', true),
};

const BG    = '#F6E7E6';
const COLOR = '#000000';

const TopImageTitle_data = {
  color:           COLOR,
  backgroundColor: BG,
  type:            'standard',
};

const categories = [
  {
    src:        getImageUrl('placeholder_grassland.gif', true),
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
    src:        getImageUrl('placeholder_category_wide.png', true),
    href:       'https://www.beliani.ch/',
    background: BG,
    color:      COLOR,
    type:       'grid',
    cta:        true,
    paddingTop: '45',
    spaceAfter: 'newsletterBottom35px',
    name:       'Outdoor',
    title:      { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph:  { show: false },
  },
];

const COUNTRIES = ['UK', 'PL', 'DE', 'AT', 'CHDE', 'CHIT', 'CHFR',
                   'NL', 'FR', 'ES', 'PT', 'IT', 'DK', 'NO', 'FI',
                   'SE', 'CZ', 'SK', 'HU', 'BEFR', 'BENL', 'RO'];
const data = Object.fromEntries(COUNTRIES.map((c) => [c, {}]));

export default new entities.Campaign({
  startId:     '99002',
  name:        'PLACEHOLDER Monday - Grassland',
  date:        '02.01.2001',
  issueCardId: '999002',
  lpId:        '99002',
  alarm:       { isArchive: false, isActive: false },
  isArchive:   true,
  accent:      '#F6E7E6',
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
