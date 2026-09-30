import { TIT_TopImage_Timer_Categories } from "@/templates/AlexSrc/template/TIT_TopImage_Timer_Categories";
import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";
import { FathersDayGG } from "@/templates/FathersDayGG/template/FathersDayGG";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Father\'s Day Gift Guide';

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
    "tableRange": "19:22",
    "name": "categories"
  },
  {
    "tableRange": "34:35",
    "name": "condition"
  },
  {
    "tableRange": "23:25",
    "name": "gift"
  },
  {
    "tableRange": "26",
    "name": "CTA"
  }
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp26-05-26' }),
  TopImageTitle_src:  DimasTranslateImage({ value: '_fathersday_topimage_01.png', folder: 'FathersDayGiftGuide', placeholderPosition: '58' }),
  TopImage: getImageUrl('FathersDayGiftGuide/fathersday_giftguide_topgif.gif', true),
  Banner_1: translateLink({ value: 'content/lp26-05-15' }),
  Banner_1_Image: translateImage({ value: '20260515b.png' }),
  Banner_2: translateLink({ value: 'content/lp26-05-14' }),
  Banner_2_Image: translateImage({ value: '20260514b.png' }),
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#FFEDE6',
  type: 'up_to',
};


const categories = [
  {
    title: { show: true},
    type: "test-cat",
    background: "#FFEDE6",
    color: "#000000",
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom80px`},
    href: 'https://www.beliani.ch/gift-guide/for-gamer/',
    showParagraph: false,
    showPrices: false,
    products: [
      {
        id: '123437',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic00desktop.png', true),
        getImageUrl('FathersDayGiftGuide/FFGG_Pic00mobile.png', false)
        ]
      },
      // SCHOLA
      {
        id: '663098',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic01.png', true)
        ]
      },
      // VICTORY
      {
        id: '375918',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic02.png', true)
        ]
      },
      // MARM
      {
        id: '665370',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic03.png', true)
        ]
      },
      // MARM
      {
        id: '425078',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic04.png', true)
        ]
      },
      // CAROY
      {
        id: '668168',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic05.png', true)
        ]
      },
    ]
  },
  {
    title: { show: true},
    type: "test-cat",
    background: "#FFEDE6",
    color: "#000000",
    productsAlignment: 'right',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom80px`},
    href: 'https://www.beliani.ch/gift-guide/for-book-lover/',
    showParagraph: false,
    showPrices: false,
    products: [
      {
        id: '658683',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic10desktop.png', true),
        getImageUrl('FathersDayGiftGuide/FFGG_Pic10mobile.png', false)
        ]
      },
      // ALIGIDE
      {
        id: '664507',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic11.png', true)
        ]
      },
      // CHILLY
      {
        id: '592419',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic12.png', true)
        ]
      },
      // RIMAVA
      {
        id: '374791',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic13.png', true)
        ]
      },
      // SIPPAR
      {
        id: '582900',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic14.png', true)
        ]
      },
      // CORELLA
      {
        id: '649554',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic15.png', true)
        ]
      }
    ]
  },
  {
    title: { show: true},
    type: "test-cat",
    background: "#FFEDE6",
    color: "#000000",
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom80px`},
    href: 'https://www.beliani.ch/gift-guide/for-bbq-master/',
    showParagraph: false,
    showPrices: false,
    products: [
      {
        id: '522185',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic20desktop.png', true),
        getImageUrl('FathersDayGiftGuide/FFGG_Pic20mobile.png', false)
        ]
      },
      // COSTMARY
      {
        id: '394802',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic21.png', true)
        ]
      },
      // MARAPI
      {
        id: '315877',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic22.png', true)
        ]
      },
      // RAPHANUS
      {
        id: '622813',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic23.png', true)
        ]
      },
      // IKEDA
      {
        id: '672257',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic24.png', true)
        ]
      },
      // STALETTI 
      {
        id: '522129',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic25.png', true)
        ]
      }
    ]
  }
  ,
  {
    title: { show: true},
    type: "test-cat",
    background: "#FFEDE6",
    color: "#000000",
    productsAlignment: 'right',
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom80px`},
    href: 'https://www.beliani.ch/gift-guide/gift-guide-homebody/',
    showParagraph: false,
    showPrices: false,
    products: [
      {
        id: '352959',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic30desktop.png', true),
        getImageUrl('FathersDayGiftGuide/FFGG_Pic30mobile.png', false)
        ]
      },
      // ATAI
      {
        id: '243536',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic31.png', true)
        ]
      },
      // ASLANAPA
      {
        id: '258042',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic32.png', true)
        ]
      },
      // ELGON
      {
        id: '651594',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic33.png', true)
        ]
      },
      // MANAGUA
      {
        id: '320630',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic34.png', true)
        ]
      },
      // ILEN
      {
        id: '502471',
        src: [getImageUrl('FathersDayGiftGuide/FFGG_Pic35.png', true)
        ]
      }
    ]
  },
  {
    name: "Gift Vouchers",
    href: "https://www.beliani.ch/gift-cards/",
    title: { show: true, align: "center", style: "font-weight: 400"},
    type: "image-4productsgrid",
    background: "#FFEDE6",
    color: "#000000",
    ctaElement: { show: true, spaceAfterClass: `newsletterBottom80px`},
    showParagraph: true,
    showWhiteLine: false,
    src: getImageUrl('FathersDayGiftGuide/FFGG_Cat40.png', true),
    products: [],
  }
];

export default new entities.Campaign({
  startId: "40749",
  name: "UK NL CZ HU SK FR Father's Day Gift Guide",
  date: "26.05.2026",
  issueCardId: "426351",
  lpId: "28672",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/dadYJFx6Xnjb5dCtgpgEo3/Father---Mother-Days--Copy-?node-id=11003-4567&t=v0FXRaubRQtw5STX-1",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: FathersDayGG, // User should change this
      css: types.CSS.NS_MD,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#FFEDE6",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: "#000000",
        backgroundColor: "#FFEDE6",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: FathersDayGG, // User should change this
      css: types.CSS.LP_MD,
      background: "#FFEDE6",
      color: "#000000",
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        color: "#000000",
        backgroundColor: "#FFEDE6",
        alignment: "center",
        type: "paragraph",
      },
      links: links,
      tableQueries: tableQueries,
    },
  ],
});