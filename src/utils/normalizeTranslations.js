import { getState } from '@/main/state/appState';

import { toast } from 'sonner';

export const normalizeTranslations = (translations, fallbacks, range) => {
  // console.log(`translations: ${translations}`);
  // console.log(`fallbacks: ${fallbacks}`);
  // console.log(`range: ${range}`);
  // console.log("\n\n");

  const config = getState('config');
  if (!config || typeof config !== 'object') {
    return toast.error('Invalid config object in app state.');
  }

  const emptyCellMessage =
    config?.emptyCell(`Cell is empty for ${range}`) || `Translation undefined for ${range}`;

  const translationsMapped = translations.map((item, idx) => {
    if (item.length !== 0) {
      return item;
    } else {
    }

    if (!fallbacks) return emptyCellMessage;

    if (fallbacks[idx]) return fallbacks[idx];

    return emptyCellMessage;
  });

  // console.log(translationsMappe

  return translationsMapped
    .flat()
    .map((t) => (config?.replaceToBrs ? t.replaceAll('\n', '<br />') : t));
};
