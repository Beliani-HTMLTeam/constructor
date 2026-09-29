import LANGUAGES from '@/config/languages.js';

// older links used "type.name" and "slug.name"
const getParamHead = (param) => param.split('.')[0].toLowerCase();

const isSameLanguage = (first, second) => first.slug === second.slug && first.name === second.name;

const getShopLanguages = (shop) => (shop?.languages ?? []).map(({ language }) => language);

export const getTemplateKey = (template) => `${template.type}_${template.name}`;

export const getLanguageValue = (language) => `${language.slug}-${language.name}`;

export const templateToParam = (template) => String(template.type);

// also accepts the older "landing_Landing" links
export function paramToTemplate(param, templates) {
  if (!param) return null;

  const legacyMatch = templates.find((template) => getTemplateKey(template) === param);
  if (legacyMatch) return legacyMatch;

  const type = getParamHead(param);
  return templates.find((template) => String(template.type).toLowerCase() === type) ?? null;
}

// the language's name in config/languages.js, e.g. "UK", "BENL", "CHFR_Mattress"
export function languageToParam(languageValue, shop) {
  const language = getShopLanguages(shop).find((item) => getLanguageValue(item) === languageValue);
  if (!language) return null;

  return Object.keys(LANGUAGES).find((key) => isSameLanguage(LANGUAGES[key], language)) ?? null;
}

// also accepts the older "UK-English" and "CHFR.french" links
export function paramToLanguage(param, shop) {
  if (!param) return null;

  const languages = getShopLanguages(shop);
  const configKey = Object.keys(LANGUAGES).find((key) => key.toLowerCase() === param.toLowerCase());
  const legacySlug = getParamHead(param);

  const match =
    (configKey && languages.find((language) => isSameLanguage(LANGUAGES[configKey], language))) ??
    languages.find((language) => getLanguageValue(language) === param) ??
    languages.find((language) => language.slug.toLowerCase() === legacySlug);

  return match ? getLanguageValue(match) : null;
}
