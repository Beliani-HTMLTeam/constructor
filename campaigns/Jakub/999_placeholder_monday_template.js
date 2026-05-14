import placeholderData from './placeholder-data/placeholder-translations.json';

const FALLBACK = placeholderData.CHDE || {};

const campaignTranslationsSheet = '2026::TEST - placeholder - never fetched';

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '22:23', fallback: FALLBACK.TopImageTitle },
  { name: 'offer',         tableRange: '25:27', fallback: FALLBACK.offer },
  { name: 'offer_date',    tableRange: '29',    fallback: FALLBACK.offer_date },
  { name: 'intro',         tableRange: '30:31', fallback: FALLBACK.intro },
  { name: 'code',          tableRange: '27',    fallback: FALLBACK.code },
  { name: 'condition',     tableRange: '34',    fallback: FALLBACK.condition },
  { name: 'paragraphs',    tableRange: '33',    fallback: FALLBACK.paragraphs },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-11' }),
  TopImageTitle_src : translateImage({ value: 'placeholder2026xxxx_01.png' }),

  TopImage_src : getImageUrl('placeholder2026xxxx_Gif.png', true),   //often a gif
  TopImage_href: translateLink({ value: 'content/lp26-06-01' }),

  code_href: translateLink({ value: 'content/lp26-06-01' }),

  Banner_1      : translateLink({ value: 'content/lp26-05-27' }),
  Banner_1_Image: translateImage({ value: '20260527b.png' }),
  Banner_2      : translateLink({ value: 'content/lp26-05-20' }),
  Banner_2_Image: translateImage({ value: '20260520b.png' }),
};

const TopImageTitle_data = {
  color          : '#000000',
  backgroundColor: '#FFCBBF',
  type           : 'standard',
};

const intro = {
  alignment      : 'left',
  position       : 'afterFreebies',   // or 'afterTopImage'
  color          : '#000000',
  backgroundColor: '#fecd8c',
};

const categories = [
  {
    type        : 'deal',
    copyCode    : true,   // tooltip above the icon
    copyCodeWeb : false,   // fixed notification on the right side of the screen (takes priority)
    background: '#FFCBBF',
    color     : '#000000',
    paddingTop: '0',
    spaceAfter: 'newsletterBottom45px',
    paragraph : { spaceAfter: '' },
    freebies  : [
      [
        { id: '324994', src: getImageUrl('placeholder2026xxxx_Pic01.png', true) },
        { id: '314370', src: getImageUrl('placeholder2026xxxx_Pic02.png', true) },
        { id: '314370', src: getImageUrl('placeholder2026xxxx_Pic02.png', true) },
      ],
      [
        { id: '369238', src: getImageUrl('placeholder2026xxxx_Pic01.png', true) },
        { id: '314370', src: getImageUrl('placeholder2026xxxx_Pic02.png', true) },
        { id: '369238', src: getImageUrl('placeholder2026xxxx_Pic03.png', true) },
      ],
    ],
  },

  {
    name      : 'Sofas',
    src       : getImageUrl('placeholder2026xxxx_Cat10.png', true),
    href      : 'https://www.beliani.ch/living-room-furniture/sofas/',
    background: '#fecd8c',
    color     : '#000000',
    type      : 'grid',
    cta       : true,
    paddingTop: '45',
    title     : { show: true, spaceAfter: 'newsletterBottom35px' },
    paragraph : { show: false },
    product   : { prices: true, name: true },
    products  : [
      { id: '700038', src: getImageUrl('placeholder2026xxxx_Pic11.png', true) },
      { id: '502654', src: getImageUrl('placeholder2026xxxx_Pic12.png', true) },
      { id: '621129', src: getImageUrl('placeholder2026xxxx_Pic13.png', true) },
      { id: '525622', src: getImageUrl('placeholder2026xxxx_Pic14.png', true) },
    ],
  },
];

const COUNTRIES = ['UK', 'PL', 'DE', 'AT', 'CHDE', 'CHIT', 'CHFR',
                   'NL', 'FR', 'ES', 'PT', 'IT', 'DK', 'NO', 'FI',
                   'SE', 'CZ', 'SK', 'HU', 'BEFR', 'BENL', 'RO'];
const data = Object.fromEntries(COUNTRIES.map((c) => [c, {}]));

export default new entities.Campaign({
  startId    : '43982',
  name       : 'PLACEHOLDER Monday',
  date       : '01.01.2000',
  issueCardId: '427849',
  lpId       : '30298',
  alarm      : { isArchive: false, isActive: false },
  isArchive  : false,
  accent     : '#f5ba87',
  optimizeImg: false,
  figmaUrl   : 'https://www.figma.com/design/PLACEHOLDER/',
  data,
  templates: [
    {
      background: '#FFCBBF',
      color     : '#000000',
      template  : templates.Monday,

      css                    : types.CSS.NS,
      name                   : 'Newsletter',
      type                   : types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper                : types.WRAPPER,

      TopImageTitle_data,
      intro,
      categories,
      links,
      tableQueries,
    },
    {
      background: '#FFCBBF',
      color     : '#000000',
      template  : templates.Monday,

      css                    : types.CSS.LP,
      name                   : 'Landing',
      type                   : types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      
      copyCode: { code: 'TEST1234' },

      TopImageTitle_data,
      intro,
      categories,
      links,
      tableQueries,
    },
  ],
});