import { createTemplates } from './shared/createTemplates.js';
import { generateLinks } from './shared/generateLinks.js';
import { createImages } from './shared/createImages.js';
import { getCampaignInfo } from './shared/getCampaignInfo.js';
import { mapProducts } from './shared/mapProducts.js';
import { theme } from './shared/theme.js';

// Main
const campaignTranslationsSheet = '2026::16.12.26 - Home SPA';
const campaignInfo = getCampaignInfo('20261216');
const image = createImages(getImageUrl, campaignInfo.dateString, translateImage);

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '17:18' },
  { name: 'intro', tableRange: '20' },
  { name: 'paragraphs', tableRange: '21:24' },
  { name: 'condition', tableRange: '25:26' },
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
  color: theme.black,
  backgroundColor: theme.subtlePeach[100],
  type: 'twoSameLines',
};

const topImage_data = image('{date}_topImage.jpg');

const catData = [
  {
    name: 'Bathtubs',
    href: 'https://www.beliani.ch/bathroom-furniture/bathtubs-hot-tubs/',
  },
  {
    name: 'Bathroom lighting',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-lighting/',
  },
  {
    name: 'Mirrors',
    href: 'https://www.beliani.ch/bathroom-furniture/mirrors/',
  },
  {
    name: 'Bathroom accessories',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-accessories/',
  },
];

const addData = [
  {
    name: 'Basins and Accessories',
    href: 'https://www.beliani.ch/bathroom-furniture/basins/',
  },
  {
    name: 'Bathroom storage',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-storage/',
  },
  {
    name: 'Towels',
    href: 'https://www.beliani.ch/bathroom-furniture/towel/',
  },
  {
    name: 'Bath mats',
    href: 'https://www.beliani.ch/bathroom-furniture/bathroom-mats/',
  },
];

const prodData = mapProducts(image, [
  ['666475', '687843', '202262', '232789'],
  ['655014', '655052', '653433', '654216'],
  ['819887', '819338', '360194', '378034'],
  ['635163', '561281', '355889', '311897'],
]);

let categories = catData.map((cat, index) => ({
  name: cat.name,
  // nameOverride: 'PASCO',
  src: index === 0 ? null : image(`{date}_Cat{index}.jpg`, { index: index + 1 }),
  spaceBefore: false,
  href: cat.href,
  skipLinkTranslation: true,
  background: index % 2 === 0 ? theme.subtlePeach[100] : theme.cozyBrown[100],
  color: index % 2 === 0 ? theme.black : theme.white,
  type: 'grid',
  spaceAfter: 0,
  tdClass: '',
  ctaPosition: 'afterProducts',
  cta: {
    variant: 'cream',
    color: index % 2 === 0 ? theme.white : theme.cozyBrown[100],
    bg: index % 2 === 0 ? theme.cozyBrown[100] : theme.subtlePeach[100],
    borderColor: index % 2 === 0 ? theme.cozyBrown[100] : theme.subtlePeach[100],
    borderWidth: '15px 45px',
    transform: 'none',
    phrase: 'Shop now',
    spaceAfter: 'newsletterBottom35px',
    spaceBefore: 'newsletterBottom80px',
    tdClass: 'newsletterContainer',
    transform: 'none',
  },
  paddingTop: false,
  title: {
    show: true,
    position: index === 0 ? 'beforeImg' : 'afterImg',
    align: 'center',
    spaceBefore: index === 0 ? false : 'newsletterBottom35px',
    spaceAfter: 'newsletterBottom15px',
    tdClass: 'newsletterContainer',
    style: `font-weight: 600;`,
  },
  paragraph: {
    show: true,
    position: index === 0 ? 'beforeImg' : 'beforeProducts',
    align: 'center',
    spaceAfter: 'newsletterBottom35px',
  },
  product: {
    prices: true,
    align: 'center',
    background: index % 2 === 0 ? theme.subtlePeach[100] : theme.cozyBrown[100],
    color: theme.black,
    insideColor: theme.white,
    spaceBefore: index === 0 ? null : 'newsletterBottom15px',
    outsideSpace: 'newsletterBottom20px',
    spaceAfter: false,
    tdClass: 'newsletterContainer',
    lowPriceColor: theme.black,
    highPriceColor: theme.black,
    name: true,
  },
  products: prodData[index],
}));

categories = [
  ...categories,
  {
    name: 'This may also interest you',
    // src: getImageUrl('20260311_Cat30.jpg', true),
    // href: 'https://www.beliani.ch/home-accessories/kitchenware-tableware/',
    background: theme.white,
    color: '#000000',
    type: 'categorytiles',
    displayType: '2col-img',
    cta: false,
    spaceAfter: 'newsletterBottom80px',
    tileBgColor: theme.white,
    tileTextColor: theme.black,
    paddingTop: 5,
    showTileNames: true,
    tdClass: false,
    title: {
      show: true,
    },
    paragraph: { show: false },
    tile: {
      spaceBetweenTiles: 'newsletterContainer15px',
      bottomTileSpace: 'newsletterBottom15px',
    },
    tiles: addData.map((tile, index) => ({
      ...tile,
      src: image('{date}_Add{index}.jpg', {
        index: index + 1,
        translate: true,
      }),
    })),
  },
];

const timer = {
  deadline: '2026-12-07',
  utmContent: 'advent_inside_banner',
  joinTexts: true,
};

const Inside = {
  type: 'timer',
  position: 'afterTopImage',
  spaceBefore: 'newsletterBottom35px',
  spaceBeforeBackground: theme.subtlePeach[100],
  spaceAfter: 'newsletterBottom60px',
  spaceAfterBackground: theme.subtlePeach[100],
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
  shopByCategory: false,
  disableTopImageTitle: false,
  Inside,
  timer,
  intro: {
    renderImage: true,
    color: theme.black,
    backgroundColor: theme.subtlePeach[100],
    alignment: 'center',
    spaceTop: 'newsletterBottom35px',
    spaceBottom: 'newsletterBottom35px',
    paragraphSpace: 'newsletterBottom35px',
    position: 'beforeTopImage',
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
  startId: '50625',
  name: `${campaignInfo.name} - Home SPA`,
  date: campaignInfo.date,
  issueCardId: '565028',
  lpId: '33832',
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
