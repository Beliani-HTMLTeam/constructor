import express from 'express';
import cors from 'cors';
import { createWarmUpStatic } from './api/google/fetchTranslations.js';
import { fetchSheetData } from './api/google/fetchSheetData.js';
import { getStaticTranslation, getDynamicTranslation, getAllStaticTranslations } from './api/local/getTranslations.js';

const app = express();
const PORT = process.env.API_PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Static translations cache
let staticTranslations = {
  header: {},
  footer: {},
  templates: {},
  category_links: {},
  category_titles: {},
};

const warmUpStatic = createWarmUpStatic(staticTranslations);

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Static translations endpoint - returns all static translations
app.get('/api/static', async (req, res) => {
  try {
    // Check if we need to warm up any tabs
    const tabsToWarm = Object.keys(staticTranslations).filter(
      (tab) => Object.keys(staticTranslations[tab]).length === 0
    );

    if (tabsToWarm.length > 0) {
      // Warm up tabs sequentially
      for (const tab of tabsToWarm) {
        const response = await fetchSheetData('STATIC', tab.toUpperCase());

        if (response.code === 200 && response.data) {
          staticTranslations[tab] = response.data;
        }
      }
    }

    res.json({
      code: 200,
      data: staticTranslations,
      message: 'All static translations fetched successfully',
    });
  } catch (error) {
    console.error('Static API Error:', error);
    res.status(500).json({
      code: 500,
      error: error.message,
      message: 'Failed to fetch static translations',
    });
  }
});

// Dynamic translations endpoints
app.get('/api/dynamic/:year/:sheetTab', async (req, res) => {
  try {
    const { year, sheetTab } = req.params;

    // Fetch entire dynamic sheet for the given year and tab
    const response = await fetchSheetData('DYNAMIC', sheetTab, Number(year));

    res.status(response.code >= 200 && response.code < 300 ? 200 : response.code).json({
      code: response.code,
      data: response.data,
      message: response.message || 'Dynamic translations fetched successfully',
    });
  } catch (error) {
    console.error('Dynamic API Error:', error);
    res.status(500).json({
      code: 500,
      error: error.message,
      message: 'Failed to fetch dynamic translations',
    });
  }
});

app.get('/api/dynamic/:year/:sheetTab/:range', async (req, res) => {
  try {
    const { year, sheetTab, range } = req.params;

    // Fetch dynamic sheet and apply range slicing server-side
    const response = await fetchSheetData('DYNAMIC', sheetTab, Number(year), range);

    res.status(response.code >= 200 && response.code < 300 ? 200 : response.code).json({
      code: response.code,
      data: response.data,
      message: response.message || 'Dynamic translations with range fetched successfully',
    });
  } catch (error) {
    console.error('Dynamic Range API Error:', error);
    res.status(500).json({
      code: 500,
      error: error.message,
      message: 'Failed to fetch dynamic translations with range',
    });
  }
});

// Legacy endpoint for backward compatibility
app.get('/api/translations', async (req, res) => {
  try {
    // Warm up static translations if not already done
    if (Object.values(staticTranslations).every((tab) => Object.keys(tab).length === 0)) {
      await warmUpStatic();
    }

    res.json({
      code: 200,
      data: staticTranslations,
      message: 'Translations fetched successfully',
    });
  } catch (error) {
    console.error('Legacy API Error:', error);
    res.status(500).json({
      code: 500,
      error: error.message,
      message: 'Failed to fetch translations',
    });
  }
});

// Local API with cache and Google Sheets fallback

// Get single static translation sheet with cache and fallback
app.get('/api/local/static/:sheet', async (req, res) => {
  try {
    const { sheet } = req.params;
    const response = await getStaticTranslation(sheet);

    res.status(response.code >= 200 && response.code < 300 ? 200 : response.code).json(response);
  } catch (error) {
    console.error('Local static API Error:', error);
    res.status(500).json({
      code: 500,
      error: error.message,
      message: 'Failed to fetch static translation',
    });
  }
});

// Get all static translations with cache and fallback
app.get('/api/local/static', async (req, res) => {
  try {
    const response = await getAllStaticTranslations();
    res.json(response);
  } catch (error) {
    console.error('Local static all API Error:', error);
    res.status(500).json({
      code: 500,
      error: error.message,
      message: 'Failed to fetch all static translations',
    });
  }
});

// Get dynamic translation with cache and fallback
// Route without range (fetch entire sheet)
app.get('/api/local/dynamic/:year/:tab', async (req, res) => {
  try {
    const { year, tab } = req.params;
    const response = await getDynamicTranslation(Number(year), tab, undefined);

    res.status(response.code >= 200 && response.code < 300 ? 200 : response.code).json(response);
  } catch (error) {
    console.error('Local dynamic API Error:', error);
    res.status(500).json({
      code: 500,
      error: error.message,
      message: 'Failed to fetch dynamic translation',
    });
  }
});

// Route with range
app.get('/api/local/dynamic/:year/:tab/:range', async (req, res) => {
  try {
    const { year, tab, range } = req.params;
    const response = await getDynamicTranslation(Number(year), tab, range);

    res.status(response.code >= 200 && response.code < 300 ? 200 : response.code).json(response);
  } catch (error) {
    console.error('Local dynamic API Error:', error);
    res.status(500).json({
      code: 500,
      error: error.message,
      message: 'Failed to fetch dynamic translation',
    });
  }
});

app.listen(PORT);
