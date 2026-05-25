import { DimasTranslateImage } from "@/templates/DimaSrc/newsletter_regular_friday/components/utils/images/translateImage";

// Campaign generated from form
const campaignTranslationsSheet = '2026::Liquidator';

const tableQueries = [
  {
    "tableRange": "17",
    "name": "TopImageTitle"
  },
  {
    "tableRange": "19",
    "name": "introTitle"
  },
  {
    "tableRange": "20",
    "name": "introParagraph"
  },
  {
    "tableRange": "21",
    "name": "CTA"
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: ' ' }),
  TopImageTitle_src:  DimasTranslateImage({ value: 'liquidator_01.png', folder: 'liquidator', placeholderPosition: '49' }),
  TopImage_src: getImageUrl('liquidator/TopImage.png', true),
  TopImage_href: translateLink({ value: ' ' })
};

const TopImageTitle_data = {
  color: '#000000',
  backgroundColor: '#F6E7E6',
  type: 'oneBoldLine',
};

const categories = [
{
    type: 'liquidatorConditions',
    background: '#F6E7E6',
    color: '#000000',
    spaceAfter: 'newsletterBottom35px',
    conditions: [
      {src:  DimasTranslateImage({ value: 'condition1.png', folder: 'liquidator', placeholderPosition: '49' })},
      {src:  DimasTranslateImage({ value: 'condition2.png', folder: 'liquidator', placeholderPosition: '49' })},
      {src:  DimasTranslateImage({ value: 'condition3.png', folder: 'liquidator', placeholderPosition: '49' })},
    ],
  },
  {
    type: 'liquidatorItems',
    background: '#F6E7E6',
    color: '#000000',
    spaceAfter: 'newsletterBottom35px',
    items: [
     {src: getImageUrl('liquidator/item1.png', true)},
     {src: getImageUrl('liquidator/item2.png', true)},
     {src: getImageUrl('liquidator/item3.png', true)},
     {src: getImageUrl('liquidator/item4.png', true)},
    ],
  },
  {
    type: 'liquidatorContact',
    background: '#F6E7E6',
    color: '#000000',
    spaceBetween: 'newsletterBottom20px',
    spaceAfter: 'newsletterBottom80px',
    interested: [
      {src: DimasTranslateImage({ value: 'interested_1.png', folder: 'liquidator', placeholderPosition: '49' })},
      {src: DimasTranslateImage({ value: 'interested_2.png', folder: 'liquidator', placeholderPosition: '49' })},
      {src: DimasTranslateImage({ value: 'interested_3.png', folder: 'liquidator', placeholderPosition: '49' })},
    ],
    buttonSrc: DimasTranslateImage({ value: 'CTA.png', folder: 'liquidator', placeholderPosition: '49' }),
    buttonHref: 'https://drive.google.com/drive/folders/1DGaAS71aZM1K6m61Uzla0oRp_ntV6wna'
  },
];

export default new entities.Campaign({
  startId: "44465",
  name: "Liquidator",
  date: "29.05.2026",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: true,
  figmaUrl: "https://www.figma.com/design/HrcYW5nG24DQftfLRBP5B0/2026---Newsletter---Liquidations-Return?node-id=13023-2&p=f&t=zYldQYyiy83CWWr9-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularFridayNslt, // User should change this
      css: types.CSS.NS,
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "#F6E7E6",
      color: "#000000",
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      categories_type: 'liquidator',
      full_img_width: false,
      white_line: false,
      under_intro_line: false,
      intro: {
        titleColor: "#FF2F00",
        color: "#000000",
        backgroundColor: "#F6E7E6",
        alignment: "left",
        type: "liquidator",
        additionalClass: 'newsletterLiquidatorBold',
      },
      links: links,
      tableQueries: tableQueries,
      soonEndingBanners: false
    }
  ],
});