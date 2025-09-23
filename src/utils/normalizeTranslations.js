import { getState } from '@/main/state/appState';

export const normalizeTranslations = (translations, fallbacks, range) => {
  // console.log(`translations: ${translations}`);
  // console.log(`fallbacks: ${fallbacks}`);
  // console.log(`range: ${range}`);
  // console.log("\n\n");

  const config = getState('config');
  if (!config || typeof config !== 'object') {
    return Toastify({
      text: 'bledna konfiguracja',
      duration: 3000,
    });
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
