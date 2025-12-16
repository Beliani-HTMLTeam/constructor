// Simple frontend in-memory cache for sheets and static translations
const sheetCache = new Map();

const staticCache = {
  header: {},
  footer: {},
  templates: {},
  category_links: {},
  category_titles: {},
};

let staticLoader = null;

export function getSheet(key) {
  return sheetCache.get(key);
}

export function setSheet(key, data) {
  sheetCache.set(key, data);
}

export function clearSheets() {
  sheetCache.clear();
}

export function getSheetKeys() {
  return Array.from(sheetCache.keys());
}

export function getStatic() {
  return staticCache;
}

export function setStatic(sheet, data) {
  staticCache[sheet] = data;
}

export function clearStatic() {
  Object.keys(staticCache).forEach((k) => (staticCache[k] = {}));
}

export function registerStaticLoader(fn) {
  staticLoader = fn;
}

export async function refreshStatic() {
  if (!staticLoader) throw new Error('No static loader registered');
  clearStatic();
  await staticLoader();
}

export default {
  getSheet,
  setSheet,
  clearSheets,
  getSheetKeys,
  getStatic,
  setStatic,
  clearStatic,
  registerStaticLoader,
  refreshStatic,
};
