import { compress, decompress, trimUndefinedRecursively } from 'compress-json';

import { COMPRESSED_PRODUCTS_MARKER } from './constants.js';
import { safeJsonParse } from './json.js';

export function getLocalStorageUsageMB(storage = localStorage) {
  try {
    // credits to
    // https://gist.github.com/tkambler/71050d80f1a57ea83c18?permalink_comment_id=5089303#gistcomment-5089303
    return Object.keys(storage)
      .map((key) => ((storage.getItem(key) ?? '').length * 2) / 1024 / 1024)
      .reduce((sum, current) => sum + current, 0);
  } catch {
    return 0;
  }
}

export function isCompressedProducts(value) {
  return (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    value[COMPRESSED_PRODUCTS_MARKER] === true &&
    Array.isArray(value.payload)
  );
}

export function compressProductsForStorage(products) {
  try {
    trimUndefinedRecursively(products);
  } catch {
    // ignore
  }

  return {
    [COMPRESSED_PRODUCTS_MARKER]: true,
    payload: compress(products),
  };
}

export function getEntryProducts(entry) {
  const stored = entry?.products;
  if (!stored) return [];
  if (isCompressedProducts(stored)) {
    try {
      return decompress(stored.payload);
    } catch {
      return [];
    }
  }
  return stored;
}

export function getEntryStoredSizeMb(entry) {
  try {
    return (JSON.stringify(entry?.products ?? null).length * 2) / 1024 / 1024;
  } catch {
    return 0;
  }
}

export function getEntryCount(entry) {
  const metaCount = entry?.meta?.count;
  if (Number.isFinite(metaCount)) return metaCount;
  const products = getEntryProducts(entry);
  return Array.isArray(products) ? products.length : 0;
}

export function readProductsIndex(storage = localStorage) {
  const raw = storage.getItem('products');
  if (!raw) return [];
  const parsed = safeJsonParse(raw);
  if (!parsed.ok || !Array.isArray(parsed.value)) return [];
  return parsed.value;
}

export function writeProductsIndex(nextIndex, storage = localStorage) {
  storage.setItem('products', JSON.stringify(nextIndex));
}

export function estimateUncompressedMb(value) {
  try {
    return (JSON.stringify(value ?? null).length * 2) / 1024 / 1024;
  } catch {
    return 0;
  }
}
