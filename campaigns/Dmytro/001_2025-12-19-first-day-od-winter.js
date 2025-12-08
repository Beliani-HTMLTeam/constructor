// Campaign generated from form
import { FridayEolProducts } from "@/templates/FridayEolProducts";

const campaignTranslationsSheet = '2025::19.12.25 - First Day od Winter';

const tableQueries = [
  {
    "tableRange": "15:16",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "18",
    "name": "intro"
  },
  {
    "tableRange": "32:33",
    "name": "timer"
  },
  {
    "tableRange": "27:28",
    "name": "condition"
  },
  {
    "tableRange": "19:22",
    "name": "categories"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp25-12-19' }),
  TopImageTitle_src: translateImage({ value: '20251219_01.png' }),
  TopImage_src: getImageUrl('20251219topimage.png', true),
  TopImage_href: translateLink({ value: 'content/lp25-12-19' }),
  Timer_href: translateLink({ value: 'content/lp25-12-15' }),
  CTAcategory: translateLink({ value: 'winter-essentials/' }),
  Banner_1: translateLink({ value: 'content/lp25-12-12' }),
  Banner_1_Image: translateImage({ value: '20251212b.png' }),
  Banner_2: translateLink({ value: 'content/lp25-12-11' }),
  Banner_2_Image: translateImage({ value: '20251211b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#EAD9D9',
  type: 'twoSameLines',
};

const categories = [
  {
    name: "Sofas",
    background: "#EAD9D9",
    color: "#000000",
    src: getImageUrl("20251219Category10.png", true),
    href: "https://www.beliani.ch/sofas/",
    type: "grid",
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
    products: [
      {
        id: "680479",
        src: getImageUrl("20251219Category11.png", true),
      },
      {
        id: "668244",
        src: getImageUrl("20251219Category12.png", true),
      },
      {
        id: "660205",
        src: getImageUrl("20251219Category13.png", true),
      },
      {
        id: "607441",
        src: getImageUrl("20251219Category14.png", true),
      },
    ]
  },
  {
    name: "Electric Fireplaces & Mantels",
    background: "#FCF7F6",
    color: "#000000",
    src: getImageUrl("20251219Category20.png", true),
    href: "https://www.beliani.ch/accessories-decor/electric-fireplaces-and-mantels/",
    type: "grid",
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
    products: [
      {
        id: "525548",
        src: getImageUrl("20251219Category21.png", true),
      },
      {
        id: "577789",
        src: getImageUrl("20251219Category22.png", true),
      },
      {
        id: "525435",
        src: getImageUrl("20251219Category23.png", true),
      },
      {
        id: "525339",
        src: getImageUrl("20251219Category24.png", true),
      },
    ]
  },
  {
    name: "Blankets",
    background: "#EAD9D9",
    color: "#000000",
    src: getImageUrl("20251219Category30.png", true),
    href: "https://www.beliani.ch/textiles/blankets-and-throws/",
    type: "grid",
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
    products: [
      {
        id: "569444",
        src: getImageUrl("20251219Category31.png", true),
      },
      {
        id: "572094",
        src: getImageUrl("20251219Category32.png", true),
      },
      {
        id: "291472",
        src: getImageUrl("20251219Category33.png", true),
      },
      {
        id: "571960",
        src: getImageUrl("20251219Category34.png", true),
      },
    ]
  },
  {
    name: "Lighting",
    background: "#FCF7F6",
    color: "#000000",
    src: getImageUrl("20251219Category40.png", true),
    href: "https://www.beliani.ch/lighting/",
    type: "grid",
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
    products: [
      {
        id: "676743",
        src: getImageUrl("20251219Category41.png", true),
      },
      {
        id: "494778",
        src: getImageUrl("20251219Category42.png", true),
      },
      {
        id: "442743",
        src: getImageUrl("20251219Category43.png", true),
      },
      {
        id: "681485",
        src: getImageUrl("20251219Category44.png", true),
      },
    ]
  }
];

const timer = {
  background: "#FD9000",
  color: "#000000",
  freebies: getImageUrl('20251219free.png', true),
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/k7erxwjhym",
    "CHFR": "https://gen.sendtric.com/countdown/lnm2uojhvi",
    "FR": "https://gen.sendtric.com/countdown/9nkjm4anmx",
    "DE": "https://gen.sendtric.com/countdown/pl1maw3hyu",
    "UK": "https://gen.sendtric.com/countdown/a1kph28lp2",
    "AT": "https://gen.sendtric.com/countdown/8rpdvt4xrl",
    "ES": "https://gen.sendtric.com/countdown/1kj9yv78wv",
    "PL": "https://gen.sendtric.com/countdown/kznmkteal6",
    "NL": "https://gen.sendtric.com/countdown/f5ek7coxdk",
    "PT": "https://gen.sendtric.com/countdown/zs694ljb1a",
    "IT": "https://gen.sendtric.com/countdown/agh41d2hlj",
    "SE": "https://gen.sendtric.com/countdown/0gtk95avw6",
    "HU": "https://gen.sendtric.com/countdown/gzvqb00fx3",
    "DK": "https://gen.sendtric.com/countdown/poxqoubghm",
    "CZ": "https://gen.sendtric.com/countdown/a2398fov5u",
    "FI": "https://gen.sendtric.com/countdown/gvl48nf2j8",
    "NO": "https://gen.sendtric.com/countdown/aee23xx227",
    "SK": "https://gen.sendtric.com/countdown/420vw10kiq",
    "BENL": "https://gen.sendtric.com/countdown/4tzypfq1wn",
    "BEFR": "https://gen.sendtric.com/countdown/e84vbx9yy8",
    "RO": "https://gen.sendtric.com/countdown/8m3dvjoena"
  }
  
}

export default new entities.Campaign({
  startId: "39210",
  name: "First Day od Winter",
  date: "19.12.2025",
  issueCardId: "427045",
  lpId: "27924",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  figmaUrl: "https://www.figma.com/design/jJKZ3z69hYxLn5EACZFnR4/2025.12.19--First-day-of-Winter?node-id=6186-3951&t=WmHaqU14rHcrBAIW-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#EAD9D9",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: "#000000",
        backgroundColor: "#FD9000",
        type: "timer",
        image: "20251219free.png",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#EAD9D9",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Thursday, // User should change this
      css: types.CSS.LP,
      background: "#EAD9D9",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      Inside: {
        color: "#000000",
        backgroundColor: "#FD9000",
        type: "timer",
        image: "20251219free.png",
      },
      intro: {
        color: "#000000",
        backgroundColor: "#EAD9D9",
        alignment: "left",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
      timer: timer
    },
  ],
});