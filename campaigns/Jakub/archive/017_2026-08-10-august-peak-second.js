import { SoonEndingBanner } from "@/templates/Thursday/components/SoonEndingBanner";
const campaignTranslationsSheet = '10.08.26 - August Peak Second';

const tableQueries = [
  {
    tableRange: '17',
    name: 'paragraphs',
  },
  {
    tableRange: '18:19',
    name: 'condition',
  },
];

const links = {
  Banner_1: translateLink({ value: 'content/lp26-07-29' }),
  Banner_1_Image: translateImage({ value: '20260729b.png' }),

  Banner_2: translateLink({ value: 'content/lp26-07-31' }),
  Banner_2_Image: translateImage({ value: '20260731b.png' }),
};

const categories = [
  {
    src: translateImage({ value: '20260810_gif.gif' }),
    srcByType: {
      landing: translateImage({ value: '20260810_mp4.mp4'}),
    },
    href: translateLink({ value: 'content/lp26-08-10' }),
    paddingTop: 0,
    color: '#000000',
    tdClass: '',
    paragraph: {
      show: true,
      align: 'center',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
    background: '#F6E7E6',
    spaceAfter: '0',
    title: {
      show: false
    },
  },

  // main
  {
    name: 'Outdoor',
    nameOverrides: { fi: 'Puutarha ja parveke', hu: 'Kültéri bútorok' },
    src:  translateImage({ value: '20260810_Cat01.png' }),
    href: 'https://www.beliani.ch/outdoor-furniture',
    hrefOverrides: { no: 'https://www.beliani.no/hagemoebler/hagemobler', fi: 'https://www.beliani.fi/puutarhakalusteet/', nl: 'https://www.beliani.nl/tuinmeubelen/', benl: 'https://www.beliani.nl/tuinmeubelen/' },
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '0',
    spaceAfter: 'newsletterBottom80px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    }
  },
  {
    name: 'Living Room',
    src:  translateImage({ value: '20260810_Cat02.png' }),
    href: 'https://www.beliani.ch/living-room-furniture/',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom80px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
  },
  {
    name: 'Dining Room',
    src:  translateImage({ value: '20260810_Cat03.png' }),
    href: 'https://www.beliani.ch/dining-room-furniture',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom80px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
  },
  {
    name: 'Bedroom',
    src:  translateImage({ value: '20260810_Cat04.png' }),
    href: 'https://www.beliani.ch/bedroom-furniture/',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom80px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
  },

  {
    name: 'Bathroom',
    src:  translateImage({ value: '20260810_Cat05.png' }),
    href: 'https://www.beliani.ch/bathroom-furniture',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom80px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
  },
  {
    name: 'Office',
    nameOverrides: { nl: 'Thuiswerkplek', benl: 'Thuiswerkplek', hu: 'Otthoni iroda' },
    src:  translateImage({ value: '20260810_Cat06.png' }),
    href: 'https://www.beliani.ch/office-furniture/',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom80px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom35px',
      spaceAfter: 'newsletterBottom35px',
    },
  },
  {
    name: 'Hallway',
    src:  translateImage({ value: '20260810_Cat07.png' }),
    href: 'https://www.beliani.ch/hallway/',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom80px',
    line: {
      show: true,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom30px',
      spaceAfter: 'newsletterBottom35px',
    },
  },
  {
    name: 'Kids',
    nameOverrides: { pt: 'Quarto de crianças', se: 'Barnrum' },
    src:  translateImage({ value: '20260810_Cat08.png' }),
    href: 'https://www.beliani.ch/children-room/',
    background: '#F6E7E6',
    color: '#000000',
    type: 'grid',
    cta: true,
    paddingTop: '35',
    spaceAfter: 'newsletterBottom80px',
    line: {
      show: false,
      insideContainer: true,
      src:  'https://pictureserver.net/static/2026/footer/line.jpg',
    },
    title: {
      show: true,
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
      show: false,
      align: 'left',
      spaceBefore: 'newsletterBottom30px',
      spaceAfter: 'newsletterBottom35px',
    },
  },
];

export default new entities.Campaign({
  startId: '45051',
  name: 'PEAK August second',
  date: '10.08.2026',
  issueCardId: '501835',
  lpId: '30835',
  alarm: {
    isActive: false,
  },
  isArchive: true,
  accent: '#ffcc40',
  optimizeImg: false,
  figmaUrl: 'https://www.figma.com/design/on3nyChGqKeG9lDiP9MOh2/August-peak-2---Monday-2026.08.10?node-id=0-1&t=mqwNvtempi49ehEP-0',
  templates: [
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.Monday,
      css: types.CSS.NS,
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      line: true,
      categoryImageTdClass: 'newsletterContainer',
      soonEndingBanner: true,
    },
    {
      background: '#F6E7E6',
      color: '#000000',
      template: templates.Monday,
      css: types.CSS.LP,
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
      line: true,
      categoryImageTdClass: 'newsletterContainer',
      soonEndingBanner: true,
    },
  ],
});
