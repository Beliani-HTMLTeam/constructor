import { createTemplates } from './shared/createTemplates';
import { generateLinks } from './shared/generateLinks.js';
import { createImages } from './shared/createImages';

// Options
const campaignTranslationsSheet = '2026::07.12.26 - Gatherings';
const imageData = '20261207';
const image = createImages(getImageUrl, imageData);

const theme = {
  primary: '#FFEFD9',
  primaryText: '#ffffff',
  secondary: '#FFEFD9',
  secondaryText: '#FFCCB7',
  black: '#000000',
  white: '#ffffff',
  priceText: '#750000',

  timerBg: '#750000',
  timerColor: '#ffffff',
  unitBackground: '#AC6666',
};

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '17:18' },
  { name: 'intro', tableRange: '20' },
  { name: 'paragraphs', tableRange: '21:24' },
  { name: 'condition', tableRange: '25:26' },
  {
    name: 'timer',
    tableRange: '12:13',
    tableName: '01.12.26 - Advent Calendar',
  },
];

const links = generateLinks({
  date: imageData,
  custom: {
    Intro_cta_href: 'https://www.beliani.ch/dining-room-furniture/',
  },
});

const TopImageTitle_data = {
  color: theme.black,
  backgroundColor: theme.secondary,
  type: 'twoSameLines',
};

const topImage_data = image('{date}_topImage.jpg', {
  regional: true,
});

const catData = [
  {
    name: 'Dining tables',
    href: 'https://www.beliani.ch/dining-room-furniture/tables/dining-tables/',
  },
  {
    name: 'Dining chairs',
    href: 'https://www.beliani.ch/chairs/dining-chairs/',
  },
  {
    name: 'Tableware',
    href: 'https://www.beliani.ch/dining-room-furniture/kitchenware-tableware/',
  },
  {
    name: 'Storage',
    href: 'https://www.beliani.ch/dining-room-furniture/storage/',
  },
];

const prodData = [
  ['806107', '567830', '153563', '609953'],
  ['729868', '842599', '631562', '835266'],
  ['678038', '452784', '467639', '677960'],
  ['833872', '311036', '849552', '576378'],
].map((ids, groupIdx) =>
  ids.map((id, prodIdx) => ({
    id,
    src: image('{date}_Prod{index}.png', {
      index: groupIdx * 4 + prodIdx + 1,
    }),
  }))
);

const categories = catData.map((cat, index) => ({
  name: cat.name,
  // nameOverride: 'PASCO',
  src: image(`{date}_Cat{index}.jpg`, { index: index + 1 }),
  srcByCountry: image(`{date}_Cat{index}.jpg`, {
    index: index + 1,
    regional: true,
  }),
  spaceBefore: false,
  href: cat.href,
  skipLinkTranslation: true,
  background: theme.secondary,
  color: theme.black,
  type: 'grid',
  spaceAfter: 0,
  ctaPosition: 'afterProducts',
  tdClass: 'newsletterContainer',
  cta: {
    variant: 'underline',
    color: theme.black,
    phrase: 'Shop now',
    spaceAfter: false,
    spaceBefore: 'newsletterBottom80px',
    tdClass: 'newsletterContainer',
    transform: 'none',
  },
  paddingTop: false,
  title: {
    show: true,
    position: 'beforeImg',
    align: 'left',
    spaceBefore: false,
    spaceAfter: 'newsletterBottom35px',
    tdClass: 'newsletterContainer',
    style: 'font-weight: 600;',
  },
  paragraph: {
    show: true,
    position: 'beforeImg',
    spaceBefore: false,
    spaceAfter: 'newsletterBottom35px',
  },
  product: {
    prices: true,
    background: theme.secondary,
    spaceBefore: 'newsletterBottom35px',
    spaceAfter: 'newsletterBottom35px',
    tdClass: 'newsletterContainer',
    lowPriceColor: theme.priceText,
    highPriceColor: theme.priceText,
    name: true,
  },
  products: prodData[index],
}));

const timer = {
  deadline: '2026-12-07',
  utmContent: 'advent_inside_banner',
};

const Inside = {
  type: 'timer',
  position: 'afterIntro',
  spaceAfter: 'newsletterBottom60px',
  spaceAfterBackground: theme.secondary,
  color: theme.timerColor,
  backgroundColor: theme.timerBg,
  unitBackground: theme.unitBackground,
};

const templateSettings = {
  background: theme.white,
  color: theme.black,
  template: templates.MondayNew,
  TopImageTitle_data,
  topImage_data,
  topImageTdClass: 'newsletterContainer',
  categoryImageTdClass: 'newsletterContainer',
  shopByCategory: false,
  disableTopImageTitle: false,
  Inside,
  timer,
  intro: {
    renderImage: true,
    color: theme.black,
    backgroundColor: theme.secondary,
    alignment: 'left',
    spaceTop: 'newsletterBottom35px',
    spaceBottom: 'newsletterBottom35px',
    paragraphSpace: 'newsletterBottom35px',
    position: 'afterTopImage',
    secondaryLink: false,
    cta: {
      variant: 'underline',
      color: theme.black,
      phrase: 'Shop now',
      spaceBefore: 'newsletterBottom80px',
      tdClass: 'newsletterContainer',
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
  startId: '50401',
  name: 'Monday - Gatherings',
  date: '07.12.2026',
  issueCardId: '550456',
  lpId: '33718',
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
