import { createTemplates } from './shared/createTemplates';
import { generateLinks } from './shared/generateLinks.js';
import { createImages } from './shared/createImages';

const imageDate = '20261130';
const image = createImages(getImageUrl, imageDate);

const campaignTranslationsSheet = '2026::Voucher - 30.11.26 - Cyber Monday Start';
const dealTranslationsSheets = [campaignTranslationsSheet, '2026::Voucher - 04.12.26 - Cyber Monday Reminder'];

const palette = {
  light: '#FFFFFF',
  line: '#000000',
  text: '#000000',
  page: '#FD9000',
  cta: '#FF2F00',
  toastBg: '#FFE0D4',
};

const tableQueries = [
  ['TopImageTitle', '22:23', dealTranslationsSheets[1]],
  ['deal_1', '25:27', dealTranslationsSheets[0]],
  ['deal_2', '28:30', dealTranslationsSheets[0]],
  ['deal_3', '31:33', dealTranslationsSheets[0]],
  ['deal_condition', '34', dealTranslationsSheets[0]],
  ['deal_date', '35', dealTranslationsSheets[0]],
  ['condition', '37:39', dealTranslationsSheets[0]],
].map(([name, tableRange, tableName]) => ({
  name,
  tableRange,
  tableName,
}));

const links = generateLinks({
  date: imageDate,
  custom: {
    TopImageSubtitle_href: translateLink({
      value: 'content/lp26-11-30',
    }),
    TopImageSubtitle_src: image('{date}_top_{index}.png', {
      index: 1,
    }),
    TopImageTitle_src: null,
    TopImage_src: translateImage({
      value: `${imageDate}_Pic.jpg`,
    }),
  },
});

const lpHref = links.TopImage_href;

const TopImageTitle_data = {
  color: '#020101',
  backgroundColor: palette.page,
  type: 'twoSameLines',
  spaceAfter: false,
};

const additionalCss = `
.offerTierValue{font-size:64px;line-height:0.9;font-family:"Open Sans",sans-serif;font-weight:800;letter-spacing:-3px}
.offerTierCode{font-size:18px;line-height:1.2;font-family:"Open Sans",sans-serif;font-weight:800}
.offerTierCodePrefix{text-transform:uppercase}
.cyberMondayCategoryHeading {
  font-size: 56px !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
}

.categoryListName,
.categoryListName a {
  font-size: 30px !important;
  font-weight: 800 !important;
  line-height: 1.2 !important;
}

.categoryListCta,
.categoryListCta a {
  font-size: 20px !important;
  font-weight: 700 !important;
  line-height: 1.25 !important;
}

@media screen and (max-width:768px){
  .offerTierValue{font-size:44px}
  .cyberMondayCategoryHeading {
    font-size: 30px !important;
  }

  .categoryListName,
  .categoryListName a {
    font-size: 24px !important;
  }

  .categoryListCta,
  .categoryListCta a {
    font-size: 18px !important;
  }
}
`;

const additionalCssLp = `
#newsletter .offerTierValue{font-size:64px;line-height:0.9;font-family:"Poppins",sans-serif;font-weight:800;letter-spacing:-3px}
#newsletter .offerTierCode{font-size:18px;line-height:1.2;font-family:"Poppins",sans-serif;font-weight:800}
#newsletter .offerTierCodePrefix{text-transform:uppercase}
#newsletter .offerTierCopyIcon *{margin:0!important;padding:0!important}
#newsletter .offerTierCopyIcon img,
#newsletter .offerTierCopyIcon svg,
#newsletter .offerTierCopyIcon .blackWeekCopyImg{width:18px!important;height:18px!important;min-width:18px!important;max-width:18px!important;display:block!important}
#newsletter .offerTierCopyIcon button {
  height: 18px;
  min-height: 0;
  width: 18px;
  padding: 0;
  line-height: 0;
}

#newsletter .cyberMondayCategoryHeading {
  font-size: 56px !important;
  font-weight: 800 !important;
  line-height: 1.1 !important;
}

#newsletter .categoryListName,
#newsletter .categoryListName a {
  font-size: 30px !important;
  font-weight: 800 !important;
  line-height: 1.2 !important;
}

#newsletter .categoryListCta,
#newsletter .categoryListCta a {
  font-size: 20px !important;
  font-weight: 700 !important;
  line-height: 1.25 !important;
}

#newsletter .offerTierCopyIcon img {
  width: 18px;
  height: 18px;
}
@media screen and (max-width:768px){
	#newsletter .offerTierValue{font-size:44px}
  #newsletter .cyberMondayCategoryHeading {
    font-size: 30px !important;
  }

  #newsletter .categoryListName,
  #newsletter .categoryListName a {
    font-size: 24px !important;
  }

  #newsletter .categoryListCta,
  #newsletter .categoryListCta a {
    font-size: 18px !important;
  }
	#newsletter .offerTierCopyIcon{width:15px!important;height:15px!important;flex-basis:15px!important}
	#newsletter .offerTierCopyIcon img,
	#newsletter .offerTierCopyIcon svg,
	#newsletter .offerTierCopyIcon .blackWeekCopyImg{width:15px!important;height:15px!important;min-width:15px!important;max-width:15px!important}
}
`;

const categoryRows = [
  ['Sofas', 'https://www.beliani.ch/sofas/'],
  ['Beds', 'https://www.beliani.ch/bedroom-furniture/beds/'],
  ['Tables', 'https://www.beliani.ch/living-room-furniture/tables/'],
  ['Armchairs', 'https://www.beliani.ch/bedroom-furniture/armchairs/'],
  ['Dining Chairs', 'https://www.beliani.ch/chairs/dining-chairs/'],
  ['Table & Bedside Lamps', 'https://www.beliani.ch/lighting/table-lamps/'],
].map(([name, href], index) => [
  {
    name,
    href,
    src: image('{date}_catTile{index}.jpg', { index: index + 1 }),
  },
]);

const categories = [
  {
    type: 'offer_tiers',
    background: palette.page,
    color: palette.text,
    href: lpHref,
    paddingTop: 0,
    spaceAfter: 'newsletterBottom80px',
    offerTiers: {
      deals: ['deal_1', 'deal_2', 'deal_3'],
      conditionQuery: 'deal_condition',
      dateQuery: 'deal_date',
      valueColor: palette.text,
      highlightColor: palette.light,
      highlight: [2],
      codeColor: palette.light,
      lineColor: palette.line,
      conditionColor: palette.light,
      copyToast: {
        background: palette.toastBg,
        color: palette.text,
      },
      cta: {
        phrase: 'Get codes',
        background: palette.cta,
        color: palette.text,
      },
      spacing: {
        beforeNSLTLastLine: 50,
        beforeLPLastLine: 30,
      },
    },
  },
  {
    type: 'rowswith1category',
    displayType: 'stacked',
    background: palette.page,
    color: palette.text,
    container: 'newsletterContainer30px',
    containerPadding: 30,
    paddingTop: 0,
    paragraph: { spaceAfter: 0 },
    spaceBetweenRows: 'newsletterBottom80px',
    showTileText: true,
    tileCta: { phrase: 'Shop now' },
    tileCtaUnderline: true,
    tileStackGap: 8,
    tileTextStack: 'always',
    tileTextAlign: 'center',
    spaceBetweenText: 'newsletterBottom10px',
    heading: {
      text: 'Shop the look',
      align: 'center',
      className: 'cyberMondayCategoryHeading',
      spaceAfter: 'newsletterBottom40px',
    },
    categories: categoryRows,
  },
];

export default new entities.Campaign({
  startId: 50305,
  lpId: 33676,
  issueCardId: 545830,
  version: 'new',
  name: 'Cyber Monday Start',
  date: '30.11.2026',
  figmaUrl: 'https://www.figma.com/design/xCTuEdQ1wz0xBuxNiJX5cK/',
  templates: createTemplates({
    types,
    translationsSpreadsheet: campaignTranslationsSheet,
    categories,
    links,
    tableQueries,
    shared: {
      template: templates.Friday,
      background: palette.page,
      color: palette.text,
      footer_theme: 'peach',
      TopImageTitle_data,
    },
    newsletter: {
      css: types.CSS.NS_FRIDAY,
      additionalCss,
      optimizeCss: true,
      disableTopImageTitle: true,
    },
    landing: {
      css: types.CSS.LP_FRIDAY,
      additionalCss: additionalCssLp,
    },
  }),
});
