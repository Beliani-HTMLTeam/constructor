export const TIMER_LANGUAGES = {
  'PL': 'polish',
  'DE': 'german',
  'AT': 'german',
  'CHDE': 'german',
  'FR': 'french',
  'CHFR': 'french',
  'IT': 'italian',
  'ES': 'spanish',
  'PT': 'portugal',
  'NL': 'dutch',
  'BENL': 'dutch',
  'BEFR': 'french',
  'UK': 'english',
  'GB': 'english',
  'DK': 'danish',
  'NO': 'norsk',
  'FI': 'finnish',
  'SE': 'swedish',
  'CZ': 'czech',
  'SK': 'slovak',
  'HU': 'Hungarian',
  'RO': 'romanian',
  'RU': 'russian',
  'UA': 'ukrainian',
  'BY': 'belarusian',
  'BG': 'bulgarian',
  'HR': 'croatian',
  'EL': 'greek',
  'RS': 'serbian',
  'SL': 'slovene',
  'TR': 'turkish',
};

export const TIMER_DEFAULTS = {
  bg: '#000000',
  color: '#ffffff',
  label: '#000000',
  background: '#ffffff',
};

export const getTimerConfig = (country, deadline, timezone, overrides = {}) => {
  const lang = TIMER_LANGUAGES[country] || 'english';
  
  return {
    deadline: overrides.deadline || deadline,
    timezone: overrides.timezone || timezone,
    lang: overrides.lang || lang,
    bg: overrides.bg || TIMER_DEFAULTS.bg,
    color: overrides.color || TIMER_DEFAULTS.color,
    label: overrides.label || TIMER_DEFAULTS.label,
    background: overrides.background || TIMER_DEFAULTS.background,
    uid: overrides.uid || 'USER_ID',
  };
};