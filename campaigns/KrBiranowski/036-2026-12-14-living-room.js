import { createTemplates } from './shared/createTemplates.js';
import { generateLinks } from './shared/generateLinks.js';
import { createImages } from './shared/createImages.js';
import { getCampaignInfo } from './shared/getCampaignInfo.js';
import { mapProducts } from './shared/mapProducts.js';
import { theme } from './shared/theme.js';

// Options
const campaignTranslationsSheet = '2026::14.12.26 - Living Room';
const campaignInfo = getCampaignInfo('20261214');
const image = createImages(getImageUrl, campaignInfo.dateString);

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '16:17' },
  { name: 'intro', tableRange: '19' },
  { name: 'condition', tableRange: '20:21' },
  {
    name: 'timer_title',
    tableRange: '11',
    tableName: '01.12.26 - Advent Calendar',
  },
  {
    name: 'timer',
    tableRange: '12:13',
    tableName: '01.12.26 - Advent Calendar',
  },
];

const links = generateLinks({
  date: campaignInfo.dateString,
  custom: {
    Intro_cta_href: 'https://www.beliani.ch/living-room-furniture/',
    Timer_href: 'content/lp26-12-01',
  },
});

const TopImageTitle_data = {
  color: theme.cozyBrown[100],
  backgroundColor: theme.softPeach[20],
  type: 'twoSameLines',
};

const topImage_data = image('{date}_topImage.jpg');

const catData = [
  {
    name: 'Sofas',
    href: 'https://www.beliani.ch/living-room-furniture/sofas/',
  },
  {
    name: 'Armchairs',
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/',
  },
  {
    name: 'TV stands',
    href: 'https://www.beliani.ch/storage/tv-stands/',
  },
  {
    name: 'Coffee tables',
    href: 'https://www.beliani.ch/tables/coffee-tables/',
  },
];

const prodData = mapProducts(image, [
  ['854682', '717162', '429175'],
  ['648660', '597308', '642845', '403367'],
  ['723646', '271190', '556254'],
  ['337005', '676226', '459737', '563702'],
]);

const categories = catData.map((cat, index) => ({
  name: cat.name,
  // nameOverride: 'PASCO',
  src: (index % 2 === 0 )
    ? image(`{date}_Cat{index}.jpg`, { index: index + 1 })
    : null,
  spaceBefore: false,
  href: cat.href,
  skipLinkTranslation: true,
  background: theme.softPeach[20],
  color: theme.black,
  type: (index % 2 === 0) 
    ? '3prods'
    : 'grid',
  spaceAfter: 0,
  ctaPosition: 'afterProducts',
  tdClass: 'newsletterContainer',
  gapBetweenHorizontal: [
    'newsletter3ProdsLeft10px',
    'newsletter3ProdsCenter10px',
    'newsletter3ProdsRight10px',
  ],
  cta: {
    variant: 'underline',
    color: theme.cozyBrown[100],
    phrase: 'Shop now',
    spaceAfter: 'newsletterBottom20px',
    spaceBefore: 'newsletterBottom80px',
    tdClass: 'newsletterContainer',
    transform: 'none',
  },
  paddingTop: false,
  title: {
    show: true,
    position: 'beforeImg',
    align: 'center',
    spaceBefore: false,
    spaceAfter: 'newsletterBottom35px',
    tdClass: 'newsletterContainer',
    style: `color: ${theme.cozyBrown[100]}; font-weight: 600;`,
  },
  paragraph: { show: false },
  product: {
    prices: false,
    background: theme.softPeach[20],
    spaceBefore: (index % 2 === 0)
      ? 'newsletterBottom15px'
      : false,
    outsideSpace: (index % 2 === 0)
      ? false
      : 'newsletterBottom20px',
    spaceAfter: false,
    tdClass: 'newsletterContainer35px',
    lowPriceColor: theme.black,
    highPriceColor: theme.black,
    name: false,
  },
  products: prodData[index],
}));

const timer = {
  deadline: '2026-12-07',
  utmContent: 'advent_inside_banner',
  joinTexts: true,
};

const Inside = {
  type: 'timer',
  position: 'afterTopImage',
  spaceAfter: 'newsletterBottom60px',
  spaceAfterBackground: theme.softPeach[20],
  color: theme.timerCozyBrown.color,
  backgroundColor: theme.timerCozyBrown.bg,
  unitBackground: theme.timerCozyBrown.unitBg,
};

const templateSettings = {
  background: theme.white,
  color: theme.black,
  template: templates.MondayNew,
  TopImageTitle_data,
  topImage_data,
  categoryImageTdClass: 'newsletterContainer35px',
  shopByCategory: false,
  disableTopImageTitle: false,
  Inside,
  timer,
  intro: {
    renderImage: true,
    color: theme.black,
    backgroundColor: theme.softPeach[20],
    alignment: 'center',
    spaceTop: 'newsletterBottom35px',
    spaceBottom: 'newsletterBottom35px',
    paragraphSpace: 'newsletterBottom35px',
    position: 'afterTopImage',
    secondaryLink: false,
    cta: {
      variant: 'cream',
      color: theme.white,
      phrase: 'Shop now',
      spaceBefore: 'newsletterBottom80px',
      tdClass: 'newsletterContainer',
      bg: theme.cozyBrown[100],
      borderColor: theme.cozyBrown[100],
      borderWidth: '15px 45px',
      transform: 'none',
      align: 'center',
      textOverrides: {
        fi: 'Tutustu valikoimaan',
      },
    },
    disableLine: true,
    containerClass: 'newsletterContainer',
    options: {
      titleClass: 'introTitleNormal',
      paragraphClass: 'introParagraphNormal',
    },
  },
};

export default new entities.Campaign({
  startId: '50529',
  name: `${campaignInfo.name} - Living Room`,
  date: campaignInfo.date,
  issueCardId: '564980',
  lpId: '33769',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  version: 'new',
  figmaUrl: 'https://www.figma.com/design/GGk082KcOWtb83bZnH2ChD/',
  templates: createTemplates({
    types,
    theme,
    translationsSpreadsheet: campaignTranslationsSheet,
    categories,
    links,
    tableQueries,
    shared: templateSettings,
    newsletter: {
      css: types.CSS.NS_AI_NEW,
      optimizeCss: true,
    },
    landing: {
      css: types.CSS.LP_AI_NEW,
      disableKlarna: ['SI', 'HR'],
    },
  }),
});
