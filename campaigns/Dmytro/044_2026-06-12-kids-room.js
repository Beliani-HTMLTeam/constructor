import { DimasTranslateImage } from "@/templates/DimaSrc/fathers_day_wishes/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::12.06.26 - Kids Room';

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
    "tableRange": "21:22",
    "name": "condition"
  },
  {
    "tableRange": "27:28",
    "name": "timer"
  },
  {
    "tableRange": "29",
    "name": "introCTA"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-06-12' }),
  TopImageTitle_src: DimasTranslateImage({ value: '20260612_01.png', folder: '20260612', placeholderPosition: '47' }),
  TopImage_src: getImageUrl('20260612/20260612topgif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp26-06-12' }),
  Banner_1: translateLink({ value: 'content/lp26-06-05' }),
  Banner_1_Image: translateImage({ value: '20260605b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-06-04' }),
  Banner_2_Image: translateImage({ value: '20260604b.png' }),
  Timer_href: translateLink({ value: 'content/lp26-06-09' }),
  Intro_cta_href:  "https://www.beliani.ch/children-room/"
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFE6DB',
  type: 'standard',
};

const timer = {
  position: 'outsideTopImageTitle',
  freebies: getImageUrl('20260612/20260612free.png', true),
  background: '#FFCCB7',
  color: '#000000',
  isCtaVisible: true,
  image: {
    "CHDE": "https://gen.sendtric.com/countdown/zf0p00ilmo",
  "CHFR": "https://gen.sendtric.com/countdown/jpczgbk7pe",
  "FR": "https://gen.sendtric.com/countdown/rzca4irh3d",
  "DE": "https://gen.sendtric.com/countdown/bow0g8kybz",
  "UK": "https://gen.sendtric.com/countdown/wgo5e5oggz",
  "AT": "https://gen.sendtric.com/countdown/lpbdc46z40",
  "ES": "https://gen.sendtric.com/countdown/9b0dhj3izy",
  "PL": "https://gen.sendtric.com/countdown/ejuo23deib",
  "NL": "https://gen.sendtric.com/countdown/sq3ekizdc6",
  "PT": "https://gen.sendtric.com/countdown/boaespzbpf",
  "IT": "https://gen.sendtric.com/countdown/lnbgh621ox",
  "SE": "https://gen.sendtric.com/countdown/f1okx3yf40",
  "HU": "https://gen.sendtric.com/countdown/3mj141o0kh",
  "DK": "https://gen.sendtric.com/countdown/wmyl9z0e8d",
  "CZ": "https://gen.sendtric.com/countdown/qp831db8vf",
  "FI": "https://gen.sendtric.com/countdown/9k4sbkdud1",
  "NO": "https://gen.sendtric.com/countdown/1olrty3ke8",
  "SK": "https://gen.sendtric.com/countdown/0ha8w81ayr",
  "BENL": "https://gen.sendtric.com/countdown/zj3ouzc7ao",
  "BEFR": "https://gen.sendtric.com/countdown/68urlknlq6",
  "RO": "https://gen.sendtric.com/countdown/n9ze9fkr0f"
  },
};

const categories = [
  {
    name: 'Kids Armchairs and Chairs',
    background: '#FFE6DB',
    color: '#000000',
    src: getImageUrl('20260612/20260612Category10.png', true),
    href: 'https://www.beliani.ch/living-room-furniture/armchairs/kids-armchairs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 60,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // FARUM 
      {
        id: '580029',
        src: getImageUrl('20260612/20260612Category11.png', true),
      },
      // MARIBO 
      {
        id: '574053',
        src: getImageUrl('20260612/20260612Category12.png', true),
      },
      // BOO 
      {
        id: '428541',
        src: getImageUrl('20260612/20260612Category13.png', true),
      },
      // OMBO
      {
        id: '610643',
        src: getImageUrl('20260612/20260612Category14.png', true),
      },
    ],
  },
  {
    name: 'Kids Beds',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260612/20260612Category20.png', true),
    href: 'https://www.beliani.ch/bedroom-furniture/beds/beds-for-children/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // GRISETOT 
      {
        id: '591962',
        src: getImageUrl('20260612/20260612Category21.png', true),
      },
      // PERROS 
      {
        id: '592208',
        src: getImageUrl('20260612/20260612Category22.png', true),
      },
      // SUSVILLE 
      {
        id: '553481',
        src: getImageUrl('20260612/20260612Category23.png', true),
      },
      // KERVAN 
      {
        id: '675539',
        src: getImageUrl('20260612/20260612Category24.png', true),
      },
    ],
  },
  {
    name: 'Kids Décor',
    background: '#FFE6DB',
    color: '#000000',
    src: getImageUrl('20260612/20260612Category30.png', true),
    href: 'https://www.beliani.ch/children-room/kids-decor/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // BIOKO 
      {
        id: '438559',
        src: getImageUrl('20260612/20260612Category31.png', true),
      },
      // BANANEC 
      {
        id: '439110',
        src: getImageUrl('20260612/20260612Category32.png', true),
      },
      // BAMBI 
      {
        id: '367235',
        src: getImageUrl('20260612/20260612Category33.png', true),
      },
      // ASHANTI 
      {
        id: '346182',
        src: getImageUrl('20260612/20260612Category34.png', true),
      },
    ],
  },
  {
    name: 'Kids Rugs',
    background: '#F6E7E6',
    color: '#000000',
    src: getImageUrl('20260612/20260612Category40.png', true),
    href: 'https://www.beliani.ch/children-room/kids-rugs/',
    type: 'grid',
    insideContainer: true,
    title: {
      show: true,
      align: 'left',
      spaceAfter: 'newsletterBottom35px',
    },
    paragraph: {
     show: false,
    },
    paddingTop: 35,
    line: {
      show: false
    },
    cta: {
      show: true
    },
    products: [
      // BALABANG 
      {
        id: '395924',
        src: getImageUrl('20260612/20260612Category41.png', true),
      },
      // KHARAT 
      {
        id: '454697',
        src: getImageUrl('20260612/20260612Category42.png', true),
      },
      // JANHTO 
      {
        id: '395787',
        src: getImageUrl('20260612/20260612Category43.png', true),
      },
      // CURUP 
      {
        id: '396944',
        src: getImageUrl('20260612/20260612Category44.png', true),
      },
    ],
  },
];


export default new entities.Campaign({
  startId: "44047",
  name: "Kids Room",
  date: "12.06.2026",
  issueCardId: "489551",
  lpId: "30337",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/rqzs5emK9Pgi7ljmWczmS6/Newsletter-Kids-room---Friday-2026.06.12?node-id=0-1&t=EybGgJIme1qUjCJg-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFE6DB",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260612free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        alignment: "left",
        type: "paragraph",
        cta: {
          spaceAfter: 'newsletterBottom35px',
        }
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.LP,
      background: "#FFE6DB",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      timer: timer,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      Inside: {
        color: "#000000",
        backgroundColor: "#FFCCB7",
        type: "timer",
        image: "20260612free.png",
        isWithTitles: true,
      },
      intro: {
        color: "#000000",
        backgroundColor: "#FFE6DB",
        alignment: "left",
        type: "paragraph",
        cta: {
          spaceAfter: 'newsletterBottom35px',
        },
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});