// Main spreadsheet
const campaignTranslationsSheet = '2026::Voucher - 23.11.26 - Black Week product categories';

// Deal spreadsheets
const dealTranslationsSheets = [
  '2026::Voucher - 09.11.26 - Black Week start',
  '2026::Voucher - 11.11.26 - Black Week product categories',
];

const tableQueries = [
  ...[
    ['deal_title', '26', dealTranslationsSheets[0]],
    ['deal_img', '20:39', dealTranslationsSheets[1]],
    ['deal_codes', '40:43', dealTranslationsSheets[1]],
    ['deal_condition', '43', dealTranslationsSheets[0]],
    ['condition', '44:46', dealTranslationsSheets[0]],
  ].map(([name, tableRange, tableName]) => ({
    name,
    tableRange,
    tableName,
  })),
  { name: 'category_cta', tableRange: '51' },
];

const links = {
  TopImageTitle_type: 'image',
  TopImageTitle_src: translateImage({ value: '20261123_topImage.jpg' }),
  TopImageTitle_href: translateLink({ value: 'content/lp26-11-23' }),

  TopImage_src: translateImage({ value: '20261123_shopNow.jpg' }),
  TopImage_href: 'Home Page',
};

const additionalCss = `
.blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:400;}.newsletterTitle {font-size:34px;font-weight:800;line-height:1.2;}.frenchDaysCategoryCta {font-size: 20px !important;}.newsletterCta{font-size:30px;line-height:1.2;font-weight:700;}.roomTitle{font-size:30px;line-height:1.2;font-weight:700;}
#newsletter .blackWeekCategoryName {
  font-family: "Open Sans", sans-serif;
  font-size: 16px !important;
  font-weight: 600 !important;
}
#newsletter .blackWeekCategoryCta {
  font-family: "Open Sans", sans-serif;
  font-size: 13px !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
}
#newsletter .newsletterContainerDeal20px {
  padding-left: 20px;
  padding-right: 20px;
}
#newsletter .newsletterContainerDeal30px {
  padding-left: 30px;
  padding-right: 30px;
}
.campaignEyebrow{font-size:12px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:2px;line-height:1}
.campaignHeadline{font-size:53px;font-family:"Open Sans",sans-serif;font-weight:700;letter-spacing:-2px;line-height:1}
@media screen and (max-width:768px){.campaignHeadline{font-size:32px}.campaignInset{width:10px!important}.campaignTileLink{padding:10px!important}.newsletterTitle{font-size:20px;}.newsletterCta{font-size:18px;}.roomTitle{font-size:18px;}.blackWeekCondition{font-size:18px}.newsletterProductTitle{font-size:12px;}.newsletterProductLowPrice{font-size:12px;}.newsletterProductHighPrice{font-size:10px;} #newsletter .frenchDaysDiscount {
	font-size: 40px !important;
	font-size: clamp(32px, 12.5vw, 35px) !important;
}
#newsletter .frenchDaysCategoryName {
	font-size: 14px !important;
	font-size: clamp(14px, 3.6vw, 20px) !important;
}
#newsletter .frenchDaysCategoryCta {
	font-size: 12px !important;
	font-size: clamp(12px, 3.2vw, 16px) !important;
}
#newsletter .blackWeekCategoryGridContainer {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
#newsletter .blackWeekCategoryGrid {
  width: 100% !important;
  table-layout: fixed !important;
}
#newsletter .blackWeekCategoryGrid .newsletterCategoryGap {
  width: 5px !important;
  min-width: 5px !important;
  max-width: 5px !important;
}
#newsletter .blackWeekCategoryGrid .newsletterCategoryTile {
  width: auto !important;
  min-width: 0 !important;
}
#newsletter .blackWeekCategoryGrid img {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
}
#newsletter .blackWeekCategoryGrid .blackWeekCategoryName {
  font-size: 12px !important;
  line-height: 1.2 !important;
  white-space: normal !important;
  word-break: normal !important;
  overflow-wrap: normal !important;
  -webkit-hyphens: none !important;
  hyphens: none !important;
}
#newsletter .blackWeekCategoryGrid td.blackWeekCategoryName {
  padding-top: 10px !important;
}
#newsletter .blackWeekCategoryGrid .blackWeekCategoryCta {
  display: inline-block !important;
  padding: 4px 0 6px !important;
  font-size: 11px !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}
#newsletter .newsletterContainerDeal20px {
  padding-left: 10px;
  padding-right: 10px;
}
#newsletter .newsletterContainerDeal30px {
  padding-left: 10px;
  padding-right: 10px;
}}
`;

const additionalCssLp = `
#newsletter .blackWeekCondition{font-size:25px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:400;}#newsletter .newsletterTitle {font-size:34px;font-weight:800;line-height:1.2;}#newsletter .frenchDaysCategoryCta {font-size: 20px !important;}#newsletter .newsletterCta{font-weight:700;}#newsletter .secondaryLinkMaroon{font-size:30px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:700;}#newsletter .roomTitle{font-size:30px;line-height:1.2;font-weight:700;}
#newsletter .newsletterDealTierLabel{font-size:20px;line-height:25px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierValue{font-size:75px;line-height:80px;font-family:"Poppins",sans-serif;font-weight:700}#newsletter .newsletterDealTierOff{font-size:20px;line-height:16px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}#newsletter .newsletterDealTierNote{font-size:16px;line-height:18px;font-family:"Poppins",sans-serif}#newsletter .newsletterDealCode{font-size:16px;line-height:21px;font-family:"Poppins",sans-serif;font-weight:700;text-transform:uppercase}
#newsletter .blackWeekCategoryName {
  font-family: "Poppins", sans-serif;
  font-size: 16px !important;
  font-weight: 600 !important;
}
#newsletter .blackWeekCategoryCta {
  font-family: "Poppins", sans-serif;
  font-size: 13px !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
}
#newsletter .newsletterContainerDeal20px {
  padding-left: 20px;
  padding-right: 20px;
}
#newsletter .newsletterContainerDeal30px {
  padding-left: 30px;
  padding-right: 30px;
}
@media screen and (max-width:768px){
	#newsletter .newsletterDealCopyIcon .blackWeekCopyImg,
	#newsletter .newsletterDealCopyIcon img,
	#newsletter .newsletterDealCopyIcon svg{width:15px!important;height:15px!important;min-width:15px!important;max-width:15px!important;display:block!important}
	#newsletter .newsletterDealCopyIcon{margin-left:4px!important}
	#newsletter .newsletterDealCopyIcon *{margin-left:0!important;margin-right:0!important;padding-left:0!important;padding-right:0!important}
	#newsletter .newsletterDealCode{font-size:15px;line-height:1}
	#newsletter .newsletterDealCodeLabel{flex-basis:100%!important;margin-right:0!important;text-align:center!important}
#newsletter .newsletterTitle{font-size:20px;}#newsletter .secondaryLinkMaroon{font-size:18px;}#newsletter .roomTitle{font-size:18px;}#newsletter .newsletterProductTitle{font-size:12px;}#newsletter .newsletterProductLowPrice{font-size:12px;}#newsletter .newsletterProductHighPrice{font-size:10px;}#newsletter .newsletterDealTierValue{font-size:48px;line-height:50px}#newsletter .newsletterDealGrid{width:100%!important;max-width:100%!important;table-layout:auto!important}#newsletter .newsletterDealCell{display:block!important;width:100%!important;box-sizing:border-box!important}#newsletter .newsletterDealGapCol{display:block!important;width:100%!important;height:10px!important;line-height:10px!important;font-size:0!important}#newsletter .newsletterDealEmpty{display:none!important}#newsletter .blackWeekCondition{font-size:18px} #newsletter .frenchDaysDiscount {
	font-size: 40px !important;
	font-size: clamp(32px, 12.5vw, 35px) !important;
}
#newsletter .frenchDaysCategoryName {
	font-size: 14px !important;
	font-size: clamp(14px, 3.6vw, 20px) !important;
}
#newsletter .frenchDaysCategoryCta {
	font-size: 12px !important;
	font-size: clamp(12px, 3.2vw, 16px) !important;
}
#newsletter .blackWeekCategoryGridContainer {
  padding-left: 10px !important;
  padding-right: 10px !important;
}
#newsletter .blackWeekCategoryGrid {
  width: 100% !important;
  table-layout: fixed !important;
}
#newsletter .blackWeekCategoryGrid .newsletterCategoryGap {
  width: 5px !important;
  min-width: 5px !important;
  max-width: 5px !important;
}
#newsletter .blackWeekCategoryGrid .newsletterCategoryTile {
  width: auto !important;
  min-width: 0 !important;
}
#newsletter .blackWeekCategoryGrid img {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  height: auto !important;
}
#newsletter .blackWeekCategoryGrid .blackWeekCategoryName {
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.3 !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}
#newsletter .blackWeekCategoryGrid td.blackWeekCategoryName {
  padding-top: 10px !important;
}
#newsletter .blackWeekCategoryGrid .blackWeekCategoryCta {
  display: inline-block !important;
  padding: 4px 0 6px !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  line-height: 1.3 !important;
  word-break: normal !important;
  overflow-wrap: break-word !important;
}
#newsletter .newsletterContainerDeal20px {
  padding-left: 10px;
  padding-right: 10px;
}
#newsletter .newsletterContainerDeal30px {
  padding-left: 10px;
  padding-right: 10px;
}}
`;

const palette = {
  accent: '#FF2F00',
  dark: '#750000',
  text: '#ffffff',
  page: '#000000',
  highPrice: '#8c8c8c',
  toastBg: '#ffe0d4',
};

const date = '20261123'; // Used for image date.
const catData = [
  [
    {
      name: 'Sofas',
      href: 'https://www.beliani.ch/sofas/',
    },
    {
      name: 'Beds',
      href: 'https://www.beliani.ch/beds/',
    },
  ],
  [
    {
      name: 'Armchairs',
      href: 'https://www.beliani.ch/armchairs/',
    },
    {
      name: 'Chairs',
      href: 'https://www.beliani.ch/chairs/',
    },
  ],
  [
    {
      name: 'Tables',
      href: 'https://www.beliani.ch/tables/',
    },
    {
      name: 'Storage',
      href: 'https://www.beliani.ch/storage/',
    },
  ],
  [
    {
      name: 'Textiles',
      href: 'https://www.beliani.ch/textiles/',
    },
    {
      name: 'Lighting',
      href: 'https://www.beliani.ch/lighting/',
    },
  ],
  [
    {
      name: 'Bathtubs',
      href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
    },
    {
      name: 'Desks',
      href: 'https://www.beliani.ch/office-furniture/desks-eng/',
      overrides: {
        HR: 'Radni stolovi',
      },
    },
  ],
  [
    {
      name: 'Rugs',
      href: 'https://www.beliani.ch/rugs/',
    },
    {
      name: 'Accessories',
      overrides: {
        DACH: 'Wohnaccessoires',
        FI: 'Sisustustarvikkeet',
        HR: 'Dekoracije i dodaci za dom',
      },
      href: 'https://www.beliani.ch/accessories-decor/',
    },
  ],
];

const generateCats = () => [
  {
    type: 'rowswith2categories',
    background: palette.page,
    color: palette.text,
    paddingTop: 0,
    showTileText: true,
    tileNameColor: palette.text,
    tileCtaColor: palette.text,
    tileCta: { query: 'category_cta' },
    spaceBetweenRows: 'newsletterBottom40px',
    spaceAfter: 'newsletterBottom50px',
    container: 'newsletterContainer30px',
    containerPadding: 30,
    tileImageSize: { width: 288, height: 216 },
    tileGap: 15,
    tileTextLayout: 'inRow',
    heading: {
      phrase: 'Shop by category',
      align: 'center',
      spaceAfter: 'newsletterBottom20px',
      styles: 'text-transform: uppercase; font-weight: 700;',
    },
    categories: catData.map((row, rowIndex) =>
      row.map((tile, tileIndex) => {
        const number = rowIndex * 2 + tileIndex + 1;
        const imageNumber = String(number).padStart(2, '0');

        return {
          ...tile,
          src: getImageUrl(`${date}_category${imageNumber}.jpg`, true),
        };
      })
    ),
  },
];

const categories = [
  {
    background: '#000000',
    color: '#000000',
    type: 'black-week-extras',
    textColor: '#FFFFFF',
    href: translateLink({ value: 'content/lp26-11-23' }),
    container: 'newsletterContainerDeal30px',

    dealImgs: [
      translateImage({ value: '_black_week_extra_20.png' }),
      translateImage({ value: '_black_week_extra_15.png' }),
      translateImage({ value: '_black_week_extra_10.png' }),
      translateImage({ value: '_black_week_extra_5.png' }),
    ],
    dealTierLines: 5,
    copyToast: {
      background: palette.toastBg,
      color: '#000000',
    },

    dealBoxColor: '#FFF3E6',
    dealBoxTextColor: '#000000',
    dealValueColor: '#FF2F00',

    dealWidth: 590,
    dealGap: 10,

    paddingTop: 0,
    paragraph: { spaceAfter: 'newsletterBottom35px' },
    spaceBeforeDeal: 'newsletterBottom35px',
    spaceAfterDeal: 'newsletterBottom20px',

    spaceAfterDealLp: 'newsletterBottom35px',
    spaceAfterCodeCta: 'newsletterBottom35px',

    spaceAfterConditions: 'newsletterBottom35px',
    spaceAfter: 0,
    dealCodeBreak: ['es', 'pt', 'it', 'uk', 'befr', 'benl', 'fi', 'nl', 'no', 'si'],
  },
  ...generateCats(),
];

export default new entities.Campaign({
  startId: 50145,
  lpId: 33631,
  issueCardId: 545786,
  version: 'new',
  name: 'Black Week product categories',
  date: '23.11.2026',
  figmaUrl: 'https://www.figma.com/design/1oqoYfZf6nZgNbJ15rDv7B/',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Friday,
      css: types.CSS.NS_FRIDAY,
      optimizeCss: true,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#000000',
      color: '#ffffff',

      wrapper: types.WRAPPER,

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCss,
      footer_theme: 'black',
    },

    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.Friday,
      css: types.CSS.LP_FRIDAY,
      translationsSpreadsheet: campaignTranslationsSheet,

      background: '#000000',
      color: '#ffffff',

      categories: categories,
      links: links,
      tableQueries: tableQueries,
      additionalCss: additionalCssLp,
      footer_theme: 'black',
    },
  ],
});
