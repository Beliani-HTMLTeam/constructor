import placeholderData from './placeholder-data/placeholder-translations.json';

const FALLBACK = placeholderData.CHDE || {};

const campaignTranslationsSheet = '2026::TEST - placeholder mountain - never fetched';

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '22:23', fallback: FALLBACK.TopImageTitle },
  { name: 'offer_date',    tableRange: '29',    fallback: FALLBACK.offer_date },
  { name: 'paragraphs',   tableRange: '33',    fallback: FALLBACK.paragraphs },
  { name: 'condition',    tableRange: '34',    fallback: FALLBACK.condition },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-01' }),
  TopImageTitle_src:  getImageUrl('topimagetitle_placeholder_timer.png', true),

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
    src:        getImageUrl('placeholder_mountain.gif', true),
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
    paddingTop: '45',
    type:       'small-tiles',
    background: BG,
    color:      COLOR,
    paragraph: {
      position:   'afterProducts',
      spaceAfter: 'newsletterBottom35px',
    },
    spaceAfter: 'newsletterBottom80px',
    cta:        { phrase: 'Shop all categories' },
    tiles: {
      background: 'ff2f00',
      text:       '/ffffff',
      items: [
        { name: 'Outdoor',     href: 'https://www.beliani.ch/garden-furniture' },
        { name: 'Sofas',       href: 'https://www.beliani.ch/sofas' },
        { name: 'Beds',        href: 'https://www.beliani.ch/beds' },
        { name: 'Armchairs',   href: 'https://www.beliani.ch/armchairs' },
        { name: 'Chairs',      href: 'https://www.beliani.ch/chairs' },
        { name: 'Tables',      href: 'https://www.beliani.ch/tables' },
        { name: 'Storage',     href: 'https://www.beliani.ch/storage' },
        { name: 'Kids',        href: 'https://www.beliani.ch/children-room' },
        { name: 'Textiles',    href: 'https://www.beliani.ch/textiles' },
        { name: 'Lighting',    href: 'https://www.beliani.ch/lighting' },
        { name: 'Bathtubs',    href: 'https://www.beliani.ch/bathtubs-hot-tubs' },
        { name: 'Desks',       href: 'https://www.beliani.ch/desks' },
        { name: 'Rugs',        href: 'https://www.beliani.ch/rugs' },
        { name: 'Accessories', href: 'https://www.beliani.ch/accessories-decor' },
      ],
    },
  },
];

const COUNTRIES = ['UK', 'PL', 'DE', 'AT', 'CHDE', 'CHIT', 'CHFR',
                   'NL', 'FR', 'ES', 'PT', 'IT', 'DK', 'NO', 'FI',
                   'SE', 'CZ', 'SK', 'HU', 'BEFR', 'BENL', 'RO'];
const data = Object.fromEntries(COUNTRIES.map((c) => [c, {}]));

export default new entities.Campaign({
  startId:     '99004',
  name:        'PLACEHOLDER Monday - Mountain',
  date:        '04.01.2001',
  issueCardId: '999004',
  lpId:        '99004',
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
