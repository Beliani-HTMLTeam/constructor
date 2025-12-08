/**
 * Creates a campaign file from form inputs (Browser version)
 * @param {Object} formData - Form data object with all the inputs
 * @param {string} userScope - User scope (e.g., "KamilK") from environment
 * @returns {Promise<{filename: string, content: string}>}
 */
export async function createCampaignFile(formData, userScope = null) {
  // Get user scope from environment if not provided
  if (!userScope) {
    userScope = __SCOPE__ || import.meta.env?.VITE_SCOPE;
    console.log('createCampaignFile.js - userScope:', userScope); // Debug log

    if (!userScope) {
      throw new Error('User scope (VITE_SCOPE) is not configured. Please check your .env file.');
    }
  }

  // Helper function to get next campaign number
  const getNextCampaignNumber = async (userScope) => {
    try {
      console.log(`Fetching campaigns for scope: ${userScope}`);
      // Use the new API endpoint to get campaign files
      const response = await fetch(`/api/campaigns?scope=${userScope}`);
      console.log('API response status:', response.status, response.ok);

      if (response.ok) {
        const data = await response.json();
        console.log('Campaign files from API:', data.files);

        const numbers = data.files
          .filter((filename) => filename.match(/^\d{3}_/)) // Files starting with 3 digits and underscore
          .map((filename) => {
            const match = filename.match(/^(\d{3})_/);
            const number = match ? parseInt(match[1]) : null;
            console.log(`Extracting number from: ${filename} -> ${number}`);
            return number;
          })
          .filter((num) => num !== null && !isNaN(num)) // Remove invalid numbers
          .sort((a, b) => b - a); // Sort descending

        console.log(`Found campaign numbers in ${userScope}:`, numbers);

        const nextNum = numbers.length > 0 ? numbers[0] + 1 : 1;
        console.log(`Next campaign number will be: ${nextNum}`);
        return String(nextNum).padStart(3, '0');
      } else {
        console.warn('API response not ok:', await response.text());
      }
    } catch (error) {
      console.warn('Could not fetch existing campaigns via API, using fallback', error);
    }

    // Fallback: start from 001
    return '001';
  };

  // Helper function to format campaign name for filename
  const formatNameForFilename = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 30); // Limit length
  };

  // Helper function to format date for filename (YYYY-MM-DD)
  const formatDateForFilename = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  // Generate filename
  const campaignNumber = await getNextCampaignNumber(userScope);
  const formattedDate = formatDateForFilename(formData.campaignDate);
  const formattedName = formatNameForFilename(formData.campaignName);
  const filename = `${campaignNumber}_${formattedDate}-${formattedName}.js`;

  // Generate campaign content
  const content = generateCampaignContent(formData, campaignNumber);

  return { filename, content, userScope };
}

/**
 * Generates the campaign file content
 * @param {Object} formData - Form data object
 * @param {string} campaignNumber - Campaign number (e.g., "007")
 * @returns {string} - Campaign file content
 */
function generateCampaignContent(formData, campaignNumber) {
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
    optimizeImages = false,
    figmaURL = '',
    familyVersion = 0, // 0 = NEW (default), 1 = OLD
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

  // Parse special LP IDs if provided
  let parsedSpecialLPs = null;
  if (specialLPToggle && specialLPIds) {
    try {
      parsedSpecialLPs = JSON.parse(specialLPIds);
    } catch (e) {
      console.warn('Invalid JSON in specialLPIds, skipping');
    }
  }

  // Format date for campaign object and translation sheet
  const formattedDate = new Date(campaignDate).toLocaleDateString('en-GB').replace(/\//g, '.');
  const shortDate = new Date(campaignDate)
    .toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    })
    .replace(/\//g, '.');

  // Generate automatic links structure
  // derive date parts from campaignDate (expected format YYYY-MM-DD)
  const _dateParts = (campaignDate || '').split('-');
  const _yyyy = _dateParts[0] || '';
  const _mm = _dateParts[1] || '';
  const _dd = _dateParts[2] || '';
  const _yy = _yyyy.length === 4 ? _yyyy.slice(2) : _yyyy;
  const _yyyymmdd = `${_yyyy}${_mm}${_dd}`;

  const defaultLinks = {
    // hrefs should use lpYY-MM-DD format
    TopImageTitle_href: `translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' })`,
    // image src should use YYYYMMDD*_*.png pattern
    TopImageTitle_src: `translateImage({ value: '${_yyyymmdd}_01.png' })`,

    // prettier-ignore
    TopImage_src: `getImageUrl('${_yyyymmdd}_Pic.png', true)`,
    // prettier-ignore
    TopImage_href: `translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' })`,

    Banner_1: `translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' })`,
    // Banner images intentionally left as placeholders — they are often created on other dates
    Banner_1_Image: `translateImage({ value: '{yyyymmdd}b.png' })`,

    Banner_2: `translateLink({ value: 'content/lp${_yy}-${_mm}-${_dd}' })`,
    Banner_2_Image: `translateImage({ value: '{yyyymmdd}b.png' })`,
  };

  // Generate automatic tableQueries structure
  const defaultTableQueries = [
    {
      tableRange: '15:16',
      name: 'TopImageTitle',
    },
    {
      tableRange: '18',
      name: 'intro',
    },
    {
      tableRange: '19:22',
      name: 'paragraphs',
    },
    {
      tableRange: '23:24',
      name: 'condition',
    },
  ];

  // Generate the campaign content with constants at the top
  let campaignContent = `// Campaign generated from form
const campaignTranslationsSheet = '2026::${shortDate} - ${campaignName}';

const tableQueries = ${JSON.stringify(defaultTableQueries, null, 2)};

const links = {`;

  // Add links object properties
  Object.entries(defaultLinks).forEach(([key, value], index, arr) => {
    const isLastItem = index === arr.length - 1;
    if (
      typeof value === 'string' &&
      (value.startsWith('translateLink') ||
        value.startsWith('translateImage') ||
        value.startsWith('getImageUrl'))
    ) {
      campaignContent += `
  ${key}: ${value},`;
    } else {
      campaignContent += `
  ${key}: '${value}',`;
    }
  });

  campaignContent += `
};

const TopImageTitle_data = {
  color: '${color}',
  backgroundColor: '${background}',
  type: 'up_to',
};

const categories = [
  // TODO: Add categories here
];

export default new entities.Campaign({
  startId: "${newsletterId}",
  name: "${campaignName}",
  date: "${formattedDate}",`;

  // Add issue card ID if provided
  if (issueCardId) {
    campaignContent += `
  issueCardId: "${issueCardId}",`;
  }

  // Add content page ID if provided
  if (lpId) {
    campaignContent += `
  lpId: "${lpId}",`;
  }

  // Add special LP IDs if enabled
  if (specialLPToggle && parsedSpecialLPs) {
    campaignContent += `
  specialLPIds: ${JSON.stringify(parsedSpecialLPs, null, 4).replace(/^/gm, '  ')},`;
  }

  // Add alarm configuration
  campaignContent += `
  alarm: {
    isActive: ${alarmEnabled},`;

  if (alarmEnabled && alarmDescription) {
    campaignContent += `
    description: "${alarmDescription}",`;
  }

  campaignContent += `
  },`;

  // Add other settings
  campaignContent += `
  isArchive: ${isArchive},
  optimizeImg: ${optimizeImages},`;

  // Add figma URL if provided
  if (figmaURL) {
    campaignContent += `
  figmaUrl: "${figmaURL}",`;
  }

  // Determine CSS type based on family version
  const cssType = familyVersion === 0 ? 'types.CSS.NS' : 'types.CSS.NS_OLD'; // NEW = 0, OLD = 1
  const cssTypeLP = familyVersion === 0 ? 'types.CSS.LP' : 'types.CSS.LP_OLD';

  // Build template components array
  let templateComponents = [];

  // Always include TopImageTitle and categories
  templateComponents.push('TopImageTitle_data: TopImageTitle_data');
  templateComponents.push('categories: categories');

  // Add Inside component if enabled
  if (insideEnabled) {
    templateComponents.push(`Inside: {
        color: "${insideColor}",
        backgroundColor: "${insideBackground}",
        type: "${insideType}",${
          insideImage
            ? `
        image: "${insideImage}",${
          insideTranslateImage
            ? `
        translateImage: true,`
            : ''
        }`
            : ''
        }
      }`);
  }

  // Add Intro component if enabled
  if (introEnabled) {
    templateComponents.push(`intro: {
        color: "${introColor}",
        backgroundColor: "${introBackground}",
        alignment: "${introAlignment}",
        type: "${introType}",
      }`);
  }

  // Add OfferPart component if enabled
  if (offerPartEnabled) {
    templateComponents.push(`OfferPart: {
        color: "${offerPartColor}",
        backgroundColor: "${offerPartBackground}",
        alignment: "${offerPartAlignment}",
        type: "${offerPartType}",
      }`);
  }

  // Start templates array with the new structure
  campaignContent += `
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.Thursday, // User should change this
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
      template: templates.Thursday, // User should change this
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

/**
 * Saves the campaign file to the campaigns directory via API
 * @param {string} filename - The filename
 * @param {string} content - The file content
 * @param {string} userScope - User scope for directory
 * @returns {Promise<string>} - Save path or error message
 */
export async function saveCampaignFile(filename, content, userScope) {
  try {
    const response = await fetch('/api/save-campaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filename,
        content,
        userScope,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to save campaign file');
    }

    console.log('Campaign file saved:', result.path);
    return result.path;
  } catch (error) {
    console.error('Error saving campaign file:', error);

    // Fallback to browser download if API fails
    console.log('Falling back to browser download...');
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

/**
 * Complete function to create and save campaign file
 * @param {Object} formData - Form data object
 * @param {string} userScope - User scope (will use VITE_SCOPE if not provided)
 * @returns {Promise<{filename: string, path: string}>}
 */
export async function createAndSaveCampaignFile(formData, userScope = null) {
  const {
    filename,
    content,
    userScope: resolvedUserScope,
  } = await createCampaignFile(formData, userScope);
  const savePath = await saveCampaignFile(filename, content, resolvedUserScope);

  return { filename, path: savePath };
}
