import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::20.03.2026 - First Day of Spring';

const tableQueries = [
  {
    "tableRange": "18:20",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "22",
    "name": "intro"
  },
  {
    "tableRange": "23:25",
    "name": "categories"
  },
  {
    "tableRange": "29",
    "name": "categoryLinks"
  },
  {
    "tableRange": "26:28",
    "name": "paragraphs"
  },
  {
    "tableRange": "33:34",
    "name": "condition"
  },
  {
    "tableRange": "40:41",
    "name": "timer"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-03-20' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260320_01.png', folder: '20260320', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260320/20260320topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-03-20' }),
  Banner_1: translateLink({ value: 'content/lp26-03-13' }),
  Banner_1_Image: translateImage({ value: '20260313b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-03-12' }),
  Banner_2_Image: translateImage({ value: '20260312b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-03-16' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FEE3BF',
  type: 'up_to_three_lines',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260320/20260320free.png', true),
  background: '#FFCCB7',
  color: '#433C3C',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/3hrbw8og25",
    "CHFR": "https://gen.sendtric.com/countdown/g71p4vmc9k",
    "FR": "https://gen.sendtric.com/countdown/988lbp4v8z",
    "DE": "https://gen.sendtric.com/countdown/mx8hemw52j",
    "UK": "https://gen.sendtric.com/countdown/as64jkiq6b",
    "AT": "https://gen.sendtric.com/countdown/dqa48o46e0",
    "ES": "https://gen.sendtric.com/countdown/x60agw7eah",
    "PL": "https://gen.sendtric.com/countdown/0dc1d9txdw",
    "NL": "https://gen.sendtric.com/countdown/9f00hn38fx",
    "PT": "https://gen.sendtric.com/countdown/1wbwvwvszf",
    "IT": "https://gen.sendtric.com/countdown/wc6ja3tpdk",
    "SE": "https://gen.sendtric.com/countdown/22ljc0gr9v",
    "HU": "https://gen.sendtric.com/countdown/9i489kdx14",
    "DK": "https://gen.sendtric.com/countdown/otnkoj8afb",
    "CZ": "https://gen.sendtric.com/countdown/d4r5k7imb9",
    "FI": "https://gen.sendtric.com/countdown/1gxiynevn7",
    "NO": "https://gen.sendtric.com/countdown/o2pd7p3w5q",
    "SK": "https://gen.sendtric.com/countdown/hjxcg4h29c",
    "BENL": "https://gen.sendtric.com/countdown/gec1ke2ruq",
    "BEFR": "https://gen.sendtric.com/countdown/ly0m7z6snp",
    "RO": "https://gen.sendtric.com/countdown/et4e1pemw2"
  }
};

const categories = [
  {
    name: 'Dopamine decor',
    background: '#FEE3BF',
    color: '#000000',
    src: getImageUrl('20260320/20260320Category10.png', true),
    href: 'https://www.beliani.ch/trends/maximalist-haven/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
     show: true,
     spaceBefore: 'newsletterBottom35px',
     spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 60,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // SAKAMI
      {
        id: '611445',
        src: getImageUrl('20260320/20260320Category11.png', true),
      },
      // ALWERO
      {
        id: '445046',
        src: getImageUrl('20260320/20260320Category12.png', true),
      },
      // BORONIA
      {
        id: '495511',
        src: getImageUrl('20260320/20260320Category13.png', true),
      },
      // ANSAR
      {
        id: '392378',
        src: getImageUrl('20260320/20260320Category14.png', true),
      },
    ],
  },
  {
    name: 'Soft geometry',
    background: '#FFCCB7',
    color: '#000000',
    src: getImageUrl('20260320/20260320Category20.png', true),
    href: 'https://www.beliani.ch/curved-furniture/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: true,
      spaceBefore: 'newsletterBottom35px',
     spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // MALANGE
      {
        id: '558527',
        src: getImageUrl('20260320/20260320Category21.png', true),
      },
      // SILCHAR 
      {
        id: '349731',
        src: getImageUrl('20260320/20260320Category22.png', true),
      },
      // LEONA
      {
        id: '597058',
        src: getImageUrl('20260320/20260320Category23.png', true),
      },
      // CALAMUS
      {
        id: '527365',
        src: getImageUrl('20260320/20260320Category24.png', true),
      },
    ],
  },
  {
    name: 'Warm wood',
    background: '#FEE3BF',
    color: '#000000',
    src: getImageUrl('20260320/20260320Category30.png', true),
    hrefSource: 'queries',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
      source: 'queries',
    },
    paragraph: {
      show: true,
      spaceBefore: 'newsletterBottom35px',
     spaceAfter: 'newsletterBottom35px',
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // LACOTA
      {
        id: '609116',
        src: getImageUrl('20260320/20260320Category31.png', true),
      },
      // MARANA
      {
        id: '372251',
        src: getImageUrl('20260320/20260320Category32.png', true),
      },
      // WAIPORI
      {
        id: '667426',
        src: getImageUrl('20260320/20260320Category33.png', true),
      },
      // ASEM
      {
        id: '325542',
        src: getImageUrl('20260320/20260320Category34.png', true),
      },
    ],
  },
];


export default new entities.Campaign({
  startId: "41549",
  name: "First Day of Spring",
  date: "20.03.2026",
  issueCardId: "458133",
  lpId: "29114",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/SLqdUKbBu607Be8gdXvF0h/20.03.2026-Newsletter-First-Day-of-Spring?node-id=0-1&t=6zqNx1CT0qXM8s7v-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FEE3BF",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#433C3C",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260320free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FEE3BF",
        alignment: "left",
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
      background: "#FEE3BF",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#433C3C",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260320free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FEE3BF",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});