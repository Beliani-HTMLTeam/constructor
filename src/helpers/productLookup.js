import { decompress } from 'compress-json';

const COMPRESSED_MARKER = '__compressed_products_v1';

export function lookupProductName(startId, productId) {
  if (!startId || !productId) return null;
  try {
    const raw = localStorage.getItem('products');
    if (!raw) return null;
    const index = JSON.parse(raw);
    if (!Array.isArray(index)) return null;

    const entry = index.find((e) => String(e?.campaign_id) === String(startId));
    if (!entry) return null;

    let rawProducts = entry.products;
    if (!Array.isArray(rawProducts)) {
      if (rawProducts?.[COMPRESSED_MARKER] === true && Array.isArray(rawProducts.payload)) {
        rawProducts = decompress(rawProducts.payload);
      } else {
        return null;
      }
    }

    const product = rawProducts.find(
      (p) =>
        String(p.saved_params?.username ?? '').replaceAll('.', '').trim() === 'Beliani' &&
        (String(p.id) === String(productId) ||
          String(p.saved_params?.master_sa) === String(productId))
    );
    return product?.article_name ?? null;
  } catch {
    return null;
  }
}
