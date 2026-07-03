import { getTimerConfig,   TIMER_LANGUAGES, 
  TIMER_DEFAULTS  } from './TimerConfig.js';

export { Timer } from '../Timer.js';

// Individual timer renderers
export { TimerGif } from './TimerGif.js';
export { TimerHtml } from './TimerHtml.js';

// Timer building blocks
export { TimerStyles } from './TimerStyles.js';
export { TimerScript } from './TimerScript.js';

// Timer utilities
export { 
  getTimerLabels, 
  getTimerLabelsSync, 
  FALLBACK_TIMER_LABELS 
} from './TimerLabels.js';

export { 
  getTimerConfig, 
  TIMER_LANGUAGES, 
  TIMER_DEFAULTS 
} from './TimerConfig.js';

// Default export for convenience
export { Timer as default } from '../Timer.js';