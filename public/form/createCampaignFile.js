export function lookupProductName(startId, productId) {
  return window.__lookupProductName?.(startId, productId) ?? null;
}

export async function createCampaignFile(formData, userScope = null) {
  if (!userScope) {
    userScope = __SCOPE__ || import.meta.env?.VITE_SCOPE;
    if (!userScope) {
      throw new Error('User scope (VITE_SCOPE) is not configured. Please check your .env file.');
    }
  }

  const getNextCampaignNumber = async (userScope) => {
    try {
      const response = await fetch(`/api/campaigns?scope=${userScope}`);
      if (response.ok) {
        const data = await response.json();
        const numbers = data.files
          .filter((filename) => filename.match(/^\d{3}_/))
          .map((filename) => {
            const match = filename.match(/^(\d{3})_/);
            return match ? parseInt(match[1]) : null;
          })
          .filter((num) => num !== null && !isNaN(num))
          .sort((a, b) => b - a);
        const nextNum = numbers.length > 0 ? numbers[0] + 1 : 1;
        return String(nextNum).padStart(3, '0');
      }
    } catch (error) {
      // fallthrough to default
    }
    return '001';
  };

  const formatNameForFilename = (name) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 30);

  const formatDateForFilename = (dateString) => new Date(dateString).toISOString().split('T')[0];

  const campaignNumber = await getNextCampaignNumber(userScope);
  const formattedDate = formatDateForFilename(formData.campaignDate);
  const formattedName = formatNameForFilename(formData.campaignName);
  const filename = `${campaignNumber}_${formattedDate}-${formattedName}.js`;

  const content = generateCampaignContent(formData, campaignNumber);

  return { filename, content, userScope };
}

const PLACEHOLDER_PRODUCTS = [
  ['442870', '231617', '214089', '101669'],
  ['515945', '597308', '618024', '403367'],
  ['575666', '424428', '569273', '575229'],
  ['428207', '512750', '101143', '171419'],
];

function buildGridCategory(_yyyymmdd, color, cat, index) {
  const bg = index % 2 === 0 ? '#fecd8c' : '#F6E7E6';
  const padding = index === 0 ? '45' : '35';
  const catNum = (index + 1) * 10;
  const fallback = PLACEHOLDER_PRODUCTS[index % PLACEHOLDER_PRODUCTS.length];
  const catProducts = Array.isArray(cat.products) && cat.products.length === 4
    ? cat.products
    : fallback.map((id) => ({ id, name: null }));
  const name = cat.name || 'Category Name';
  const href = cat.href || 'https://www.beliani.ch/';

  const productLines = catProducts.map((p, pi) => {
    const id = p.id || fallback[pi] || '';
    const comment = p.name ? `      // ${p.name}\n` : '';
    return `${comment}      {\n        id: '${id}',\n        src: getImageUrl('${_yyyymmdd}_Pic${catNum + pi + 1}.png', true), // TODO\n      }`;
  }).join(',\n');

  return `  {
    name: '${name}',
    src: getImageUrl('${_yyyymmdd}_Cat${catNum}.png', true), // TODO
    href: '${href}',
    background: '${bg}',
    color: '${color}',
    type: 'grid',
    cta: ${cat.cta !== false},
    paddingTop: '${padding}',
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
    product: {
      prices: true,
      name: true,
    },
    products: [
${productLines},
    ],
  }`;
}

function generateMondayCampaignContent(formData) {
  const {
    campaignName = 'Untitled Campaign',
    campaignDate = new Date().toISOString().split('T')[0],
    newsletterId = '',
    lpId = '',
    issueCardId = '',
    alarmEnabled = false,
    alarmDescription = '',
    isArchive = false,
    optimizeImages = false,
    soonBanners = false,
    figmaURL = '',
    background = '#FFFFFF',
    color: _color = '#000000',
  } = formData;
  const color = _color || '#000000';

  const formattedDate = new Date(campaignDate).toLocaleDateString('en-GB').replace(/\//g, '.');
  const shortDate = new Date(campaignDate)
    .toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })
    .replace(/\//g, '.');

  const [_yyyy, _mm, _dd] = (campaignDate || '').split('-');
  const _yy = (_yyyy || '').length === 4 ? _yyyy.slice(2) : (_yyyy || '');
  const _yyyymmdd = `${_yyyy || ''}${_mm || ''}${_dd || ''}`;

  const sheetName = formData.translationsSheet || `2026::${shortDate} - ${campaignName}`;
  const cssType   = formData.familyVersion === 0 ? 'types.CSS.NS' : 'types.CSS.NS_OLD';
  const cssTypeLP = formData.familyVersion === 0 ? 'types.CSS.LP' : 'types.CSS.LP_OLD';

  const userCats = Array.isArray(formData.categories) && formData.categories.length > 0
    ? formData.categories
    : [
        { name: 'Category Name', href: 'https://www.beliani.ch/' },
        { name: 'Category Name', href: 'https://www.beliani.ch/' },
        { name: 'Category Name', href: 'https://www.beliani.ch/' },
        { name: 'Category Name', href: 'https://www.beliani.ch/' },
      ];

  const gridCatsStr = userCats.map((cat, i) => buildGridCategory(_yyyymmdd, color, cat, i)).join(',\n');

  const userFreebies = Array.isArray(formData.freebies) && formData.freebies.length > 0
    ? formData.freebies
    : null;
  const freebiesStr = userFreebies
    ? userFreebies.map((f, i) => {
        const comment = f.name ? `      // ${f.name}\n` : '';
        const picNum = String(i + 1).padStart(2, '0');
        return `${comment}      {\n        id: '${f.id}',\n        src: getImageUrl('${_yyyymmdd}_pic${picNum}.png', true),\n      }`;
      }).join(',\n')
    : `      { id: '324994', src: getImageUrl('${_yyyymmdd}_pic01.png', true) },
      { id: '314370', src: getImageUrl('${_yyyymmdd}_pic02.png', true) },
      { id: '369238', src: getImageUrl('${_yyyymmdd}_pic03.png', true) },
      { id: '345545', src: getImageUrl('${_yyyymmdd}_pic04.png', true) },
      { id: '325032', src: getImageUrl('${_yyyymmdd}_pic05.png', true) },
      { id: '314272', src: getImageUrl('${_yyyymmdd}_pic06.png', true) }`;

  let content = `const campaignTranslationsSheet = '${sheetName}';

const tableQueries = [
  {
    name: 'TopImageTitle',
    tableRange: '21:22',
  },
  {
    name: 'offer',
    tableRange: '24:26',
  },
  {
    name: 'offer_date',
    tableRange: '28',
  },
  {
    name: 'intro',
    tableRange: '29:30',
  },
  {
    name: 'condition',
    tableRange: '34:35',
  },
  {
    name: 'paragraphs',
    tableRange: '35:38',
  },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' }),
  TopImageTitle_src: translateImage({ value: '${_yyyymmdd}_01.png' }),

  TopImage_src: getImageUrl('${_yyyymmdd}_Gif.gif', true),
  TopImage_href: translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' }),

  Banner_1: translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_1_Image: translateImage({ value: '{yyyymmdd}b.png' }),

  Banner_2: translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_2_Image: translateImage({ value: '{yyyymmdd}b.png' }),
};

const TopImageTitle_data = {
  color: '${color}',
  backgroundColor: '${background}',
  type: 'standard',
};

const categories = [
  // offer
  {
    paragraph: {
      spaceAfter: '',
    },
    paddingTop: '0',
    type: 'deal',
    background: '${background}',
    color: '${color}',
    spaceAfter: 'newsletterBottom45px',
    freebies: [[
${freebiesStr},
    ]],
  },

  // main
${gridCatsStr}
];

export default new entities.Campaign({
  startId: '${newsletterId}',
  name: '${campaignName}',
  date: '${formattedDate}',`;

  if (issueCardId) content += `\n  issueCardId: '${issueCardId}',`;
  if (lpId)        content += `\n  lpId: '${lpId}',`;

  content += `\n  alarm: {\n    isActive: ${alarmEnabled},`;
  if (alarmEnabled && alarmDescription) content += `\n    description: '${alarmDescription}',`;
  content += `\n  },`;

  content += `\n  isArchive: ${isArchive},\n  optimizeImg: ${optimizeImages},`;
  if (soonBanners) content += `\n  soon_banners: true,`;

  if (figmaURL)        content += `\n  figmaUrl: '${figmaURL}',`;
  if (formData.accent) content += `\n  accent: '${formData.accent}',`;

  content += `
  templates: [
    {
      background: '${background}',
      color: '${color}',
      template: templates.Monday,
      intro: {
        color: '${color}',
        backgroundColor: '#fecd8c',
        alignment: 'left',
        position: 'afterFreebies',
      },
      css: ${cssType},
      name: 'Newsletter',
      type: types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper: types.WRAPPER,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
    {
      background: '${background}',
      color: '${color}',
      template: templates.Monday,
      intro: {
        color: '${color}',
        backgroundColor: '#fecd8c',
        alignment: 'left',
        position: 'afterFreebies',
      },
      css: ${cssTypeLP},
      name: 'Landing',
      type: types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data: TopImageTitle_data,
      categories: categories,
      links: links,
      tableQueries: tableQueries,
    },
  ],
});`;

  return content;
}

function generateFridayCampaignContent(formData) {
  const {
    campaignName = 'Untitled Campaign',
    campaignDate = new Date().toISOString().split('T')[0],
    newsletterId = '',
    lpId = '',
    issueCardId = '',
    alarmEnabled = false,
    alarmDescription = '',
    isArchive = false,
    optimizeImages = true,
    figmaURL = '',
    background = '#FFFFFF',
    color = '#000000',
  } = formData;

  const formattedDate = new Date(campaignDate).toLocaleDateString('en-GB').replace(/\//g, '.');
  const shortDate = new Date(campaignDate)
    .toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })
    .replace(/\//g, '.');

  const [_yyyy, _mm, _dd] = (campaignDate || '').split('-');
  const _yy = (_yyyy || '').length === 4 ? _yyyy.slice(2) : (_yyyy || '');
  const _yyyymmdd = `${_yyyy || ''}${_mm || ''}${_dd || ''}`;

  const sheetName = formData.translationsSheet || `2026::${shortDate} - ${campaignName}`;
  const cssType   = formData.familyVersion === 0 ? 'types.CSS.NS' : 'types.CSS.NS_OLD';
  const cssTypeLP = formData.familyVersion === 0 ? 'types.CSS.LP' : 'types.CSS.LP_OLD';

  const fridayCats = Array.isArray(formData.categories) && formData.categories.length > 0
    ? formData.categories.map((cat, i) => buildGridCategory(_yyyymmdd, color, cat, i)).join(',\n')
    : null;

  let content = `const campaignTranslationsSheet = '${sheetName}';

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '17:18' },
  { name: 'paragraphs',    tableRange: '20:23' },
  { name: 'condition',     tableRange: '25:26' },
];

const links = {
  TopImageTitle_href: translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' }),
  TopImageTitle_src : translateImage({ value: '${_yyyymmdd}_01.png' }),

  Banner_1      : translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_1_Image: translateImage({ value: '{yyyymmdd}b.png' }),
  Banner_2      : translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_2_Image: translateImage({ value: '{yyyymmdd}b.png' }),
};

const TopImageTitle_data = {
  color          : '${color}',
  backgroundColor: '${background}',
  type           : 'twoSameLines',
};

const categories = [
${fridayCats ?? '  // TODO: Add categories here'}
];

export default new entities.Campaign({
  startId    : "${newsletterId}",
  name       : "${campaignName}",
  date       : "${formattedDate}",`;

  if (issueCardId) content += `\n  issueCardId: "${issueCardId}",`;
  if (lpId)        content += `\n  lpId: "${lpId}",`;

  content += `\n  alarm: {\n    isActive: ${alarmEnabled},`;
  if (alarmEnabled && alarmDescription) content += `\n    description: "${alarmDescription}",`;
  content += `\n  },`;

  content += `\n  isArchive: ${isArchive},\n  optimizeImg: ${optimizeImages},`;

  if (figmaURL) content += `\n  figmaUrl: "${figmaURL}",`;

  content += `
  templates: [
    {
      background             : "${background}",
      color                  : "${color}",
      template               : templates.RegularFridayNslt,
      css                    : ${cssType},
      name                   : "Newsletter",
      type                   : types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper                : types.WRAPPER,
      TopImageTitle_data,
      categories,
      links,
      tableQueries,
    },
    {
      background             : "${background}",
      color                  : "${color}",
      template               : templates.RegularFridayNslt,
      css                    : ${cssTypeLP},
      name                   : "Landing",
      type                   : types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data,
      categories,
      links,
      tableQueries,
    },
  ],
});`;

  return content;
}

function generateFathersDayWishesCampaignContent(formData) {
  const {
    campaignName = 'Untitled Campaign',
    campaignDate = new Date().toISOString().split('T')[0],
    newsletterId = '',
    lpId = '',
    issueCardId = '',
    alarmEnabled = false,
    alarmDescription = '',
    isArchive = false,
    optimizeImages = true,
    figmaURL = '',
    background = '#FFEDE6',
    color = '#000000',
  } = formData;

  const formattedDate = new Date(campaignDate).toLocaleDateString('en-GB').replace(/\//g, '.');
  const shortDate = new Date(campaignDate)
    .toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })
    .replace(/\//g, '.');

  const [_yyyy, _mm, _dd] = (campaignDate || '').split('-');
  const _yy = (_yyyy || '').length === 4 ? _yyyy.slice(2) : (_yyyy || '');
  const _yyyymmdd = `${_yyyy || ''}${_mm || ''}${_dd || ''}`;

  const sheetName = formData.translationsSheet || `2026::${shortDate} - ${campaignName}`;
  const cssType   = formData.familyVersion === 0 ? 'types.CSS.NS' : 'types.CSS.NS_OLD';
  const cssTypeLP = formData.familyVersion === 0 ? 'types.CSS.LP' : 'types.CSS.LP_OLD';

  const fdwCats = Array.isArray(formData.categories) && formData.categories.length > 0
    ? formData.categories.map((cat, i) => buildGridCategory(_yyyymmdd, color, cat, i)).join(',\n')
    : null;

  let content = `const campaignTranslationsSheet = '${sheetName}';

const tableQueries = [
  { name: 'TopImageTitle', tableRange: '14:15' },
  { name: 'intro',         tableRange: '17'    },
  { name: 'categories',    tableRange: '18:31' },
  { name: 'condition',     tableRange: '21:22' },
  { name: 'GiftCard',      tableRange: '18:20' },
];

const links = {
  TopImage_src : getImageUrl('${_yyyymmdd}_pic.png'),
  TopImage_href: translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' }),

  Banner_1      : translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_1_Image: translateImage({ value: '{yyyymmdd}b.png' }),
  Banner_2      : translateLink({ value: 'content/lp{yy}-{mm}-{dd}' }),
  Banner_2_Image: translateImage({ value: '{yyyymmdd}b.png' }),

  ShopCTA: translateLink({ value: ' ' }),
};

const TopImageTitle_data = {
  color          : '${color}',
  backgroundColor: 'transparent',
  type           : 'twoSameLines',
};

const GiftCard_data = {
  src       : getImageUrl('${_yyyymmdd}_giftcard.png'),
  href      : 'https://www.beliani.ch/gift-cards/',
  spaceAfter: 'newsletterBottom70px',
};

const categories = [
${fdwCats ?? '  // TODO: Add categories here'}
];

export default new entities.Campaign({
  startId    : "${newsletterId}",
  name       : "${campaignName}",
  date       : "${formattedDate}",`;

  if (issueCardId) content += `\n  issueCardId: "${issueCardId}",`;
  if (lpId)        content += `\n  lpId: "${lpId}",`;

  content += `\n  alarm: {\n    isActive: ${alarmEnabled},`;
  if (alarmEnabled && alarmDescription) content += `\n    description: "${alarmDescription}",`;
  content += `\n  },`;

  content += `\n  isArchive: ${isArchive},\n  optimizeImg: ${optimizeImages},`;

  if (figmaURL) content += `\n  figmaUrl: "${figmaURL}",`;

  content += `
  templates: [
    {
      background             : "${background}",
      color                  : "${color}",
      template               : templates.FathersDayWishes,
      css                    : ${cssType},
      name                   : "Newsletter",
      type                   : types.NEWSLETTER,
      translationsSpreadsheet: campaignTranslationsSheet,
      wrapper                : types.WRAPPER,
      TopImageTitle_data,
      GiftCard_data,
      categories,
      categories_type        : 'twoColumnsGrid',
      intro: {
        color          : "${color}",
        backgroundColor: "${background}",
        alignment      : 'center',
        type           : 'paragraph',
      },
      OfferPart: {
        color          : "${color}",
        backgroundColor: "${background}",
        alignment      : 'center',
        type           : 'giftcard',
      },
      shopCTA: {
        color          : "${color}",
        backgroundColor: "${background}",
      },
      links,
      tableQueries,
    },
    {
      background             : "${background}",
      color                  : "${color}",
      template               : templates.FathersDayWishes,
      css                    : ${cssTypeLP},
      name                   : "Landing",
      type                   : types.LANDINGPAGE,
      translationsSpreadsheet: campaignTranslationsSheet,
      TopImageTitle_data,
      GiftCard_data,
      categories,
      categories_type        : 'twoColumnsGrid',
      intro: {
        color          : "${color}",
        backgroundColor: "${background}",
        alignment      : 'center',
        type           : 'paragraph',
      },
      OfferPart: {
        color          : "${color}",
        backgroundColor: "${background}",
        alignment      : 'center',
        type           : 'giftcard',
      },
      shopCTA: {
        color          : "${color}",
        backgroundColor: "${background}",
      },
      links,
      tableQueries,
    },
  ],
});`;

  return content;
}

function generateBlankCampaignContent(formData) {
  const {
    campaignName = 'Untitled Campaign',
    campaignDate = new Date().toISOString().split('T')[0],
    newsletterId = '',
    lpId = '',
    issueCardId = '',
    alarmEnabled = false,
    alarmDescription = '',
    isArchive = false,
    optimizeImages = true,
    figmaURL = '',
  } = formData;

  const formattedDate = new Date(campaignDate).toLocaleDateString('en-GB').replace(/\//g, '.');

  let content = `export default new entities.Campaign({
  startId    : "${newsletterId}",
  name       : "${campaignName}",
  date       : "${formattedDate}",`;

  if (issueCardId) content += `\n  issueCardId: "${issueCardId}",`;
  if (lpId)        content += `\n  lpId: "${lpId}",`;

  content += `\n  alarm: {\n    isActive: ${alarmEnabled},`;
  if (alarmEnabled && alarmDescription) content += `\n    description: "${alarmDescription}",`;
  content += `\n  },`;

  content += `\n  isArchive: ${isArchive},\n  optimizeImg: ${optimizeImages},`;

  if (figmaURL) content += `\n  figmaUrl: "${figmaURL}",`;

  content += `\n  templates: [],\n});`;

  return content;
}

function generateCampaignContent(formData, campaignNumber) {
  if (formData.templateKey === 'Monday') return generateMondayCampaignContent(formData);
  if (formData.templateKey === 'Friday') return generateFridayCampaignContent(formData);
  if (formData.templateKey === 'FathersDayWishes') return generateFathersDayWishesCampaignContent(formData);
  if (formData.templateKey === 'Blank') return generateBlankCampaignContent(formData);

  const {
    campaignName = 'Untitled Campaign',
    campaignDate = new Date().toISOString().split('T')[0],
    newsletterId = '',
    lpId = '',
    issueCardId = '',
    specialLPToggle = false,
    specialLPIds = '',
    alarmEnabled = false,
    alarmDescription = '',
    isArchive = false,
    optimizeImages = true,
    figmaURL = '',
    familyVersion = 0,
    background = '#750000',
    color = '#000000',
    insideEnabled = false,
    insideColor = '#000000',
    insideBackground = '#FFFFFF',
    insideType = 'code',
    insideImage = '',
    insideTranslateImage = false,
    introEnabled = false,
    introColor = '#000000',
    introBackground = '#FFFFFF',
    introAlignment = 'left',
    introType = 'paragraph',
    offerPartEnabled = false,
    offerPartColor = '#000000',
    offerPartBackground = '#FFFFFF',
    offerPartAlignment = 'left',
    offerPartType = 'paragraph',
  } = formData;

  let parsedSpecialLPs = null;
  if (specialLPToggle && specialLPIds) {
    try {
      parsedSpecialLPs = JSON.parse(specialLPIds);
    } catch (e) {
      // skip invalid JSON
    }
  }

  const formattedDate = new Date(campaignDate).toLocaleDateString('en-GB').replace(/\//g, '.');
  const shortDate = new Date(campaignDate)
    .toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' })
    .replace(/\//g, '.');

  const _dateParts = (campaignDate || '').split('-');
  const _yyyy = _dateParts[0] || '';
  const _mm = _dateParts[1] || '';
  const _dd = _dateParts[2] || '';
  const _yy = _yyyy.length === 4 ? _yyyy.slice(2) : _yyyy;
  const _yyyymmdd = `${_yyyy}${_mm}${_dd}`;

  const defaultLinks = {
    TopImageTitle_href: `translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' })`,
    TopImageTitle_src: `translateImage({ value: '${_yyyymmdd}_01.png' })`,
    TopImage_src: `getImageUrl('${_yyyymmdd}_Pic.png', true)`,
    TopImage_href: `translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' })`,
    Banner_1: `translateLink({ value: 'content/lp{yy}-{mm}-{dd}' })`,
    Banner_1_Image: `translateImage({ value: '{yyyymmdd}b.png' })`,
    Banner_2: `translateLink({ value: 'content/lp{yy}-{mm}-{dd}' })`,
    Banner_2_Image: `translateImage({ value: '{yyyymmdd}b.png' })`,
  };

  const defaultTableQueries = [
    { tableRange: '15:16', name: 'TopImageTitle' },
    { tableRange: '18', name: 'intro' },
    { tableRange: '19:22', name: 'paragraphs' },
    { tableRange: '23:24', name: 'condition' },
  ];

  const sheetName = formData.translationsSheet || `2026::${shortDate} - ${campaignName}`;

  let campaignContent = `const campaignTranslationsSheet = '${sheetName}';

const tableQueries = ${JSON.stringify(defaultTableQueries, null, 2)};

const links = {`;

  Object.entries(defaultLinks).forEach(([key, value]) => {
    if (
      typeof value === 'string' &&
      (value.startsWith('translateLink') ||
        value.startsWith('translateImage') ||
        value.startsWith('getImageUrl'))
    ) {
      campaignContent += `\n  ${key}: ${value},`;
    } else {
      campaignContent += `\n  ${key}: '${value}',`;
    }
  });

  campaignContent += `
};

const TopImageTitle_data = {
  color: '${color}',
  backgroundColor: '${background}',
  type: 'twoSameLines',
};

const timer = {
  freebies: getImageUrl('YYYYMMDD_Free.png', true),
  // ! REMEMBER TO REPLACE THOSE URLS
  image: {
    CHDE: 'https://gen.sendtric.com/countdown/3x5402a5a5',
    CHFR: 'https://gen.sendtric.com/countdown/7d3zl0s986',
    FR: 'https://gen.sendtric.com/countdown/12rdr6dtgo',
    DE: 'https://gen.sendtric.com/countdown/sv2q3k1x3y',
    UK: 'https://gen.sendtric.com/countdown/c4cghowbf1',
    AT: 'https://gen.sendtric.com/countdown/ypa0wk4eup',
    ES: 'https://gen.sendtric.com/countdown/sehb5k3z7z',
    PL: 'https://gen.sendtric.com/countdown/zlnhbu660w',
    NL: 'https://gen.sendtric.com/countdown/mr9bn0q4c8',
    PT: 'https://gen.sendtric.com/countdown/61n8wy3y4m',
    IT: 'https://gen.sendtric.com/countdown/lxloewzogf',
    SE: 'https://gen.sendtric.com/countdown/y2imagqwpt',
    HU: 'https://gen.sendtric.com/countdown/udnrsqd4o8',
    DK: 'https://gen.sendtric.com/countdown/uvfzgmkwr6',
    CZ: 'https://gen.sendtric.com/countdown/ajq5qcnl44',
    FI: 'https://gen.sendtric.com/countdown/hgh6virvh8',
    NO: 'https://gen.sendtric.com/countdown/nfx8ncvozu',
    SK: 'https://gen.sendtric.com/countdown/x8yr4llgxx',
    BENL: 'https://gen.sendtric.com/countdown/442t1ogqur',
    BEFR: 'https://gen.sendtric.com/countdown/kgyur9di1m',
    RO: 'https://gen.sendtric.com/countdown/ke5m9a4zrx',
  },
};

const categories = [
  // TODO: Add categories here
];

export default new entities.Campaign({
  startId: "${newsletterId}",
  name: "${campaignName}",
  date: "${formattedDate}",`;

  if (issueCardId) {
    campaignContent += `\n  issueCardId: "${issueCardId}",`;
  }

  if (lpId) {
    campaignContent += `\n  lpId: "${lpId}",`;
  }

  if (specialLPToggle && parsedSpecialLPs) {
    campaignContent += `\n  specialLPIds: ${JSON.stringify(parsedSpecialLPs, null, 4).replace(/^/gm, '  ')},`;
  }

  campaignContent += `\n  alarm: {\n    isActive: ${alarmEnabled},`;

  if (alarmEnabled && alarmDescription) {
    campaignContent += `\n    description: "${alarmDescription}",`;
  }

  campaignContent += `\n  },`;

  campaignContent += `\n  isArchive: ${isArchive},\n  optimizeImg: ${optimizeImages},`;

  if (figmaURL) {
    campaignContent += `\n  figmaUrl: "${figmaURL}",`;
  }

  if (formData.accent) {
    campaignContent += `\n  accent: "${formData.accent}",`;
  }

  const cssType = familyVersion === 0 ? 'types.CSS.NS' : 'types.CSS.NS_OLD';
  const cssTypeLP = familyVersion === 0 ? 'types.CSS.LP' : 'types.CSS.LP_OLD';

  let templateComponents = [
    'TopImageTitle_data: TopImageTitle_data',
    'categories: categories',
    'timer: timer',
    'full_img_width: false',
    'white_line: false',
    'under_intro_line: false',
  ];

  if (insideEnabled) {
    templateComponents.push(`Inside: {
        color: "${insideColor}",
        backgroundColor: "${insideBackground}",
        type: "${insideType}",${
          insideImage
            ? `\n        image: "${insideImage}",${insideTranslateImage ? '\n        translateImage: true,' : ''}`
            : ''
        }
      }`);
  }

  if (introEnabled) {
    templateComponents.push(`intro: {
        color: "${introColor}",
        backgroundColor: "${introBackground}",
        alignment: "${introAlignment}",
        type: "${introType}",
      }`);
  }

  if (offerPartEnabled) {
    templateComponents.push(`OfferPart: {
        color: "${offerPartColor}",
        backgroundColor: "${offerPartBackground}",
        alignment: "${offerPartAlignment}",
        type: "${offerPartType}",
      }`);
  }

  campaignContent += `
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday,
      css: ${cssType},
      translationsSpreadsheet: campaignTranslationsSheet,
      background: "${background}",
      color: "${color}",
      wrapper: types.WRAPPER,
      ${templateComponents.join(',\n      ')},
      links: links,
      tableQueries: tableQueries,
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.Thursday,
      css: ${cssTypeLP},
      background: "${background}",
      color: "${color}",
      translationsSpreadsheet: campaignTranslationsSheet,
      ${templateComponents.join(',\n      ')},
      links: links,
      tableQueries: tableQueries,
    },
  ],
});`;

  return campaignContent;
}

export async function saveCampaignFile(filename, content, userScope) {
  try {
    const response = await fetch('/api/save-campaign', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename, content, userScope }),
    });

    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'Failed to save campaign file');
    return result.path;
  } catch (error) {
    // Fallback: browser download
    const blob = new Blob([content], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return `Downloaded: ${filename}`;
  }
}

export async function createAndSaveCampaignFile(formData, userScope = null) {
  const { filename, content, userScope: resolvedUserScope } = await createCampaignFile(formData, userScope);
  const savePath = await saveCampaignFile(filename, content, resolvedUserScope);
  return { filename, path: savePath };
}

export async function updateCampaignMetadata(formData, filename, originalCampaign = null) {
  const userScope = __SCOPE__ || import.meta.env?.VITE_SCOPE;
  if (!userScope) throw new Error('User scope (VITE_SCOPE) is not configured.');

  const readResponse = await fetch(
    `/api/read-campaign?scope=${encodeURIComponent(userScope)}&filename=${encodeURIComponent(filename)}`
  );
  if (!readResponse.ok) throw new Error('Could not read campaign file.');

  const { content } = await readResponse.json();

  const formattedDate = new Date(formData.campaignDate).toLocaleDateString('en-GB').replace(/\//g, '.');

  // Replace only inside the Campaign constructor arguments (before `templates:`)
  const startMarker = 'new entities.Campaign({';
  const endMarker = 'templates:';
  const startIdx = content.indexOf(startMarker);
  const endIdx = startIdx !== -1 ? content.indexOf(endMarker, startIdx) : -1;

  let updated = content;

  if (startIdx !== -1 && endIdx !== -1) {
    const before = content.slice(0, startIdx);
    let middle = content.slice(startIdx, endIdx);
    const after = content.slice(endIdx);

    const replaceStr = (src, key, newVal) =>
      src.replace(new RegExp(`(\\b${key}\\s*:\\s*)(['"])[^'"]*\\2`), `$1$2${newVal}$2`);

    middle = replaceStr(middle, 'name', formData.campaignName.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '\\"'));
    middle = replaceStr(middle, 'date', formattedDate);
    middle = replaceStr(middle, 'startId', formData.newsletterId);
    if (formData.issueCardId) middle = replaceStr(middle, 'issueCardId', formData.issueCardId);
    if (formData.lpId) middle = replaceStr(middle, 'lpId', formData.lpId);
    if (formData.figmaURL) middle = replaceStr(middle, 'figmaUrl', formData.figmaURL);

    middle = middle.replace(/(\bisArchive\s*:\s*)(true|false)/, `$1${!!formData.isArchive}`);
    middle = middle.replace(/(\boptimizeImg\s*:\s*)(true|false)/, `$1${!!formData.optimizeImages}`);

    if (/\bsoon_banners\s*:/.test(middle)) {
      middle = middle.replace(/(\bsoon_banners\s*:\s*)(true|false)/, `$1${!!formData.soonBanners}`);
    } else if (formData.soonBanners) {
      middle = middle.replace(/(\boptimizeImg\s*:[^\n]+)/, `$1\n  soon_banners: true,`);
    }

    if (formData.accent) {
      if (/\baccent\s*:/.test(middle)) {
        middle = replaceStr(middle, 'accent', formData.accent);
      } else {
        // Insert after optimizeImg line
        middle = middle.replace(
          /(\boptimizeImg\s*:[^\n]+)/,
          `$1\n  accent: "${formData.accent}",`
        );
      }
    }

    // alarm.isActive is nested — use full-content replacement bounded to alarm block
    updated = (before + middle + after).replace(
      /(alarm\s*:\s*\{[\s\S]*?isActive\s*:\s*)(true|false)/,
      `$1${!!formData.alarmEnabled}`
    );
  }

  // Replace translation sheet name (anywhere in the file)
  if (formData.translationsSheet) {
    updated = updated.replace(
      /(const campaignTranslationsSheet\s*=\s*)(['"])[^'"]*\2/,
      `$1$2${formData.translationsSheet.replace(/'/g, "\\'").replace(/"/g, '\\"')}$2`
    );
  }

  // Replace date-derived patterns throughout the entire file when date changed
  if (originalCampaign?.date && formData.campaignDate) {
    const oldParts = originalCampaign.date.split('.');
    if (oldParts.length === 3) {
      const [oldDD, oldMM, oldYYYY] = oldParts;
      const oldYY = oldYYYY.slice(2);
      const [newYYYY, newMM, newDD] = formData.campaignDate.split('-');
      const newYY = newYYYY.slice(2);

      const oldYYYYMMDD = `${oldYYYY}${oldMM}${oldDD}`;
      const newYYYYMMDD = `${newYYYY}${newMM}${newDD}`;
      const oldLpDate = `${oldYY}-${oldMM}-${oldDD}`;
      const newLpDate = `${newYY}-${newMM}-${newDD}`;
      const oldShortDate = `${oldDD}.${oldMM}.${oldYY}`;
      const newShortDate = `${newDD}.${newMM}.${newYY}`;

      if (oldYYYYMMDD !== newYYYYMMDD) {
        updated = updated.split(oldYYYYMMDD).join(newYYYYMMDD);
        updated = updated.split(oldLpDate).join(newLpDate);
        updated = updated.split(oldShortDate).join(newShortDate);
      }
    }
  }

  await saveCampaignFile(filename, updated, userScope);
  return filename;
}
