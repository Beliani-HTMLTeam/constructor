// Hardcoded fallback labels (used when API fails)
export const FALLBACK_TIMER_LABELS = {
  'polish': ['dni', 'h', 'min', 's'],
  'czech': ['dnů', 'hod.', 'min.', 's'],
  'danish': ['dage', 't', 'min', 's'],
  'dutch': ['dagen', 'uren', 'minuten', 'seconden'],
  'english': ['days', 'h', 'm', 's'],
  'finnish': ['päivää', 't', 'm', 's'],
  'french': ['jours', 'h', 'min', 's'],
  'german': ['Tage', 'Std.', 'Min.', 'Sek.'],
  'germanDE': ['Tage', 'Std.', 'Min.', 'Sek.'],
  'Hungarian': ['nap', 'óra', 'perc', 'másodperc'],
  'italian': ['giorni', 'h', 'm', 's'],
  'norsk': ['dager', 't', 'min', 's'],
  'portugal': ['Dias', 'h', 'min', 's'],
  'romanian': ['zile', 'h', 'm', 's'],
  'slovak': ['dní', 'hod.', 'min.', 's'],
  'spanish': ['días', 'h', 'min', 's'],
  'swedish': ['dagar', 'h', 'min', 's'],
  'belarusian': ['дні', 'г', 'хв', 'с'],
  'bulgarian': ['дни', 'ч', 'мин', 'с'],
  'croatian': ['dana', 'h', 'min', 's'],
  'greek': ['ημέρες', 'ώ', 'λεπ', 'δ'],
  'russian': ['дней', 'ч', 'мин', 'с'],
  'serbian': ['дана', 'ч', 'мин', 'с'],
  'slovene': ['dni', 'h', 'min', 's'],
  'turkish': ['gün', 's', 'dk', 'sn'],
  'ukrainian': ['днів', 'год', 'хв', 'с'],
};

export const DEFAULT_LABELS = ['days', 'h', 'm', 's'];

/**
 * Get timer labels - tries API first, falls back to hardcoded
 * @param {string} lang - Language code
 * @param {Function} fetchFn - Optional custom fetch function for testing
 * @returns {Promise<Array<string>>} - Timer labels
 */
export const getTimerLabels = async (lang, fetchFn = null) => {
  try {
    let labels = await fetchFn(lang);
    
    if (labels && Array.isArray(labels) && labels.length === 4) {
      return labels;
    }
  } catch (error) {
    console.warn(`API fetch failed for ${lang}, using fallback:`, error);
  }
  
  // Fallback to hardcoded labels
  return FALLBACK_TIMER_LABELS[lang] || DEFAULT_LABELS;
};

/**
 * Synchronous version for when you want to skip API
 */
export const getTimerLabelsSync = (lang) => {
  return FALLBACK_TIMER_LABELS[lang] || DEFAULT_LABELS;
};