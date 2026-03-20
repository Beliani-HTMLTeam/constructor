import { appConfig } from '@/utils/config.js';
import { fetchSheetData } from '../google/fetchSheetData.js';

// External API URL (ZROK)
const api_url = appConfig.external_api_url;

export async function getStaticTranslation(sheet) {
  try {
    // First try external API (ZROK)
    const externalUrl = `${api_url}static/${sheet}/`;
    // console.log(`Trying external API: ${externalUrl}`);

    const externalResponse = await fetch(externalUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        skip_zrok_interstitial: 'true',
      },
    });

    if (externalResponse.ok) {
      const externalData = await externalResponse.json();
      if (externalData.code === 200 && externalData.data) {
        console.log(`${sheet} warmed up`);
        return {
          code: 200,
          data: externalData.data,
          message: `Static translation for '${sheet}' fetched from external API`,
          source: 'external',
        };
      }
    }

    console.error(`External API failed for ${sheet} (${externalResponse.status}), trying Google Sheets fallback`);

    // Fallback to Google Sheets API
    const response = await fetchSheetData('STATIC', sheet.toUpperCase());

    if (response.code === 200 && response.data) {
      return {
        code: 200,
        data: response.data,
        message: `Static translation for '${sheet}' fetched from Google Sheets (fallback)`,
        source: 'google',
      };
    }

    return {
      code: response.code || 500,
      data: {},
      message: response.message || 'Failed to fetch static translation',
      error: response.error,
      source: 'error',
    };
  } catch (error) {
    console.error(`External API connection failed for '${sheet}':`, error.message);
    console.error(`Trying Google Sheets fallback due to connection error`);

    try {
      // Fallback to Google Sheets API when external API connection fails
      const response = await fetchSheetData('STATIC', sheet.toUpperCase());

      if (response.code === 200 && response.data) {
        return {
          code: 200,
          data: response.data,
          message: `Static translation for '${sheet}' fetched from Google Sheets (fallback after connection error)`,
          source: 'google',
        };
      }

      return {
        code: response.code || 500,
        data: {},
        message: response.message || 'Failed to fetch static translation from fallback',
        error: response.error,
        source: 'error',
      };
    } catch (fallbackError) {
      console.error(`! Fallback also failed for '${sheet}':`, fallbackError);
      return {
        code: 500,
        data: {},
        message: `Error fetching '${sheet}' from both external API and Google Sheets`,
        error: fallbackError.message,
        source: 'error',
      };
    }
  }
}

export async function getDynamicTranslation(year, tab, range) {
  try {
    // First try external API (ZROK)
    const encodedTab = encodeURIComponent(String(tab));
    let externalUrl;

    if (range) {
      const encodedRange = encodeURIComponent(String(range));
      externalUrl = `${api_url}dynamic/${year}/${encodedTab}/${encodedRange}`;
    } else {
      // Fetch entire sheet
      externalUrl = `${api_url}dynamic/${year}/${encodedTab}`;
    }

    // console.log(`Trying external API: ${externalUrl}`);

    const externalResponse = await fetch(externalUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        skip_zrok_interstitial: 'true',
      },
    });

    if (externalResponse.ok) {
      const externalData = await externalResponse.json();
      if (externalData.code === 200 && externalData.data) {
        // console.log(`External API success for ${year}-${tab}${range ? `-${range}` : ''}`);
        return {
          code: 200,
          data: externalData.data,
          message: `Dynamic translation fetched from external API`,
          source: 'external',
        };
      }
    }

    console.error(
      `External API failed for ${year}-${tab}${range ? `-${range}` : ''} (${
        externalResponse.status
      }), trying Google Sheets fallback`
    );

    // Fallback to Google Sheets API
    const response = await fetchSheetData('DYNAMIC', tab, year, range);

    if (response.code === 200 && response.data) {
      return {
        code: 200,
        data: response.data,
        message: `Dynamic translation fetched from Google Sheets (fallback)`,
        source: 'google',
      };
    }

    return {
      code: response.code || 500,
      data: null,
      message: response.message || 'Failed to fetch dynamic translation',
      error: response.error,
      source: 'error',
    };
  } catch (error) {
    console.error(`External API connection failed for ${year}-${tab}${range ? `-${range}` : ''}:`, error.message);
    console.error(`Trying Google Sheets fallback due to connection error`);

    try {
      // Fallback to Google Sheets API when external API connection fails
      const response = await fetchSheetData('DYNAMIC', tab, year, range);

      if (response.code === 200 && response.data) {
        return {
          code: 200,
          data: response.data,
          message: `Dynamic translation fetched from Google Sheets (fallback after connection error)`,
          source: 'google',
        };
      }

      return {
        code: response.code || 500,
        data: null,
        message: response.message || 'Failed to fetch dynamic translation from fallback',
        error: response.error,
        source: 'error',
      };
    } catch (fallbackError) {
      console.error(`Fallback also failed for ${year}-${tab}${range ? `-${range}` : ''}:`, fallbackError);
      return {
        code: 500,
        data: null,
        message: 'Error fetching dynamic translation from both external API and Google Sheets',
        error: fallbackError.message,
        source: 'error',
      };
    }
  }
}

// Get all static translations at once
export async function getAllStaticTranslations() {
  const results = {};

  for (const sheet of ['header', 'footer', 'templates', 'category_links', 'category_titles']) {
    const response = await getStaticTranslation(sheet);
    results[sheet] = response.data || {};
  }

  return {
    code: 200,
    data: results,
    message: 'All static translations retrieved',
  };
}
