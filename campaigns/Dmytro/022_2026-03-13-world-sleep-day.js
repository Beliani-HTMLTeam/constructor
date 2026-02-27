import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::13.03.2026 - World sleep day';

const tableQueries = [
  {
    "tableRange": "17:18",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "20",
    "name": "intro"
  },
  {
    "tableRange": "21:24",
    "name": "categories"
  },
  {
    "tableRange": "25",
    "name": "CTA"
  },
  {
    "tableRange": "28:29",
    "name": "condition"
  },
  {
    "tableRange": "35:36",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-13' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260313_01.png', folder: '20260313', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260313/20260313topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-13' }),
  Banner_1: translateLink({ value: 'content/lp26-03-06' }),
  Banner_1_Image: translateImage({ value: '20260306b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-05' }),
  Banner_2_Image: translateImage({ value: '20260305b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-03-09' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFCCB7',
  type: 'up_to',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260313/20260313free.png', true),
  background: "#750000",
  color: "#FFFFFF",
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/ng4s5c29qo",
    "CHFR": "https://gen.sendtric.com/countdown/bh5x05h5ls",
    "FR": "https://gen.sendtric.com/countdown/44683u7qhq",
    "DE": "https://gen.sendtric.com/countdown/0lvo99nzpq",
    "UK": "https://gen.sendtric.com/countdown/vubh4mfxl7",
    "AT": "https://gen.sendtric.com/countdown/y9gmcrv399",
    "ES": "https://gen.sendtric.com/countdown/dams8cvnm6",
    "PL": "https://gen.sendtric.com/countdown/9c3u182nlc",
    "NL": "https://gen.sendtric.com/countdown/zgp3bksypi",
    "PT": "https://gen.sendtric.com/countdown/44ul4ke7w1",
    "IT": "https://gen.sendtric.com/countdown/42g96a2qz3",
    "SE": "https://gen.sendtric.com/countdown/vw1ocopzi8",
    "HU": "https://gen.sendtric.com/countdown/zbnw1zwrhe",
    "DK": "https://gen.sendtric.com/countdown/euq2ac630q",
    "CZ": "https://gen.sendtric.com/countdown/h46tdu9oe1",
    "FI": "https://gen.sendtric.com/countdown/h41bcw2r43",
    "NO": "https://gen.sendtric.com/countdown/erxk3qrh76",
    "SK": "https://gen.sendtric.com/countdown/gtodbb4tlr",
    "BENL": "https://gen.sendtric.com/countdown/znykur66x0",
    "BEFR": "https://gen.sendtric.com/countdown/ajcziezaqr",
    "RO": "https://gen.sendtric.com/countdown/bty6euz1az"
  }
};

const categories = [
  {
    name: 'Beds',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260313/20260313Category10.png', true),
    href: 'https://www.beliani.ch/beds/',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: false,
    },
    line: {
      show: false
    },
    paddingTop: 60,
    insideContainer: true,
    products: [
      // PEROUGES
      {
        id: '704149',
        src: getImageUrl('20260313/20260313Category11.png', true),
      },
      // VION
      {
        id: '450894',
        src: getImageUrl('20260313/20260313Category12.png', true),
      },
      // MIRABEAU
      {
        id: '686974',
        src: getImageUrl('20260313/20260313Category13.png', true),
      },
      // VINAY
      {
        id: '416811',
        src: getImageUrl('20260313/20260313Category14.png', true),
      },
    ],
  },
  {
    name: 'Mattresses',
    background: '#750000',
    color: '#FFFFFF',
    src: getImageUrl('20260313/20260313Category20.png', true),
    href: 'https://www.beliani.ch/mattresses/',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: false,
    },
    line: {
      show: false
    },
    paddingTop: 35,
    insideContainer: true,
    products: [
      // ROOMY
      {
        id: '670881',
        src: getImageUrl('20260313/20260313Category21.png', true),
      },
      // BREEZ
      {
        id: '670884',
        src: getImageUrl('20260313/20260313Category22.png', true),
      },
      // DUO
      {
        id: '5874',
        src: getImageUrl('20260313/20260313Category23.png', true),
      },
      // TREASURE
      {
        id: '495783',
        src: getImageUrl('20260313/20260313Category24.png', true),
      },
    ],
  },
  {
    name: 'Bed pillows',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260313/20260313Category30.png', true),
    href: 'https://www.beliani.ch/textiles/bed-cushions/',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: false,
    },
    line: {
      show: false
    },
    paddingTop: 35,
    insideContainer: true,
    products: [
      // ANETO
      {
        id: '673500',
        src: getImageUrl('20260313/20260313Category31.png', true),
      },
      // ATHOS
      {
        id: '651633',
        src: getImageUrl('20260313/20260313Category32.png', true),
      },
      // KANGTO
      {
        id: '233280',
        src: getImageUrl('20260313/20260313Category33.png', true),
      },
      // PELISTER
      {
        id: '189336',
        src: getImageUrl('20260313/20260313Category34.png', true),
      },
    ],
  },
  {
    name: 'Weighted blankets',
    background: '#750000',
    color: '#FFFFFF',
    src: getImageUrl('20260313/20260313Category40.png', true),
    href: 'https://www.beliani.ch/textiles/weighted-blankets/',
    type: 'grid',
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: false,
    },
    line: {
      show: false
    },
    paddingTop: 35,
    insideContainer: true,
    products: [
      // RHEA
      {
        id: '433067',
        src: getImageUrl('20260313/20260313Category41.png', true),
      },
      // CALLISTO
      {
        id: '432573',
        src: getImageUrl('20260313/20260313Category42.png', true),
      },
      // CALLISTO
      {
        id: '432552',
        src: getImageUrl('20260313/20260313Category43.png', true),
      },
      // RHEA
      {
        id: '432882',
        src: getImageUrl('20260313/20260313Category44.png', true),
      },
    ],
  },
];

export default new entities.Campaign({
  startId: "41357",
  name: "World sleep day",
  date: "13.03.2026",
  issueCardId: "455391",
  lpId: "29017",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/pkyteqGSxMlQ60nwXEnBZU/2026.03.13-Newsletter-World-sleep-day?node-id=0-1&t=fi6amR7Svm1TyjOq-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFCCB7",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#750000",
        type: "timer",
        image: "20260313free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFCCB7",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#FFFFFF",
        backgroundColor: "#750000",
        type: "timer",
        image: "20260313free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});