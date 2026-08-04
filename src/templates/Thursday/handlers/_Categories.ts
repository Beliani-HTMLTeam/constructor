import { Categories } from '../components/Categories.js';
import type { CategoryConfig, ProductEntry, QueriesConfig, LinksConfig, GetProductById, RenderType } from '@/types/thursday';

export interface EnrichProductEntryProps {
  /** Product entry as authored in the campaign file. */
  product: ProductEntry;
  /** Live product lookup. */
  getProductById?: GetProductById;
  /** Resolves/decorates a product href. */
  getCategoryLink?: (href: string) => string;
}

/**
 * Resolves a single `ProductEntry` to its final render shape: decorates `href` via
 * `getCategoryLink`, and — when a live `getProductById` lookup is configured — merges
 * in server-fetched name/price/link data on top of the author-supplied `id`/`src`.
 *
 * @returns The enriched entry, or `null` if lookup fails/returns nothing.
 */
const enrichProductEntry = async ({ product, getProductById, getCategoryLink }: EnrichProductEntryProps): Promise<ProductEntry | null> => {
  try {
    if (!product) return null;

    const normalizedHref =
      product.href && typeof getCategoryLink === 'function' ? getCategoryLink(product.href) : product.href;

    if (typeof getProductById !== 'function') {
      return normalizedHref ? { ...product, href: normalizedHref } : product;
    }

    const productSrc = typeof product.src === 'object' ? product.src.src : product.src;
    const fetchedProduct = await getProductById(product.id, productSrc);
    if (!fetchedProduct) return null;

    return normalizedHref ? { ...product, ...fetchedProduct, href: normalizedHref } : { ...product, ...fetchedProduct };
  } catch (err) {
    console.error('getProductById error for', product, err);
    return null;
  }
};

export interface EnrichCategoryProductsProps {
  /** Category block as authored. */
  category: CategoryConfig;
  /** Live product lookup. */
  getProductById?: GetProductById;
  /** Resolves/decorates a product href. */
  getCategoryLink?: (href: string) => string;
}

/**
 * Enriches every product entry in a category's `products` array and `freebies` rows
 * (see `enrichProductEntry`), leaving all other category fields untouched.
 *
 * @returns The category with `products`/`freebies` enriched (nulls filtered from `products`).
 */
const enrichCategoryProducts = async ({ category, getProductById, getCategoryLink }: EnrichCategoryProductsProps): Promise<CategoryConfig> => {
  const productEntries = Array.isArray(category?.products) ? category.products : [];
  const products = await Promise.all(
    productEntries.map((product) => enrichProductEntry({ product, getProductById, getCategoryLink }))
  );

  const freebiesRows = Array.isArray(category?.freebies)
    ? category.freebies
    : Array.isArray(category?.freebies?.rows)
      ? category.freebies.rows
      : [];
  const enrichedFreebiesRows = await Promise.all(
    freebiesRows.map(async (row) => {
      if (!Array.isArray(row)) return [];

      return Promise.all(row.map((product) => enrichProductEntry({ product, getProductById, getCategoryLink })));
    })
  );

  return {
    ...category,
    products: products.filter((p): p is ProductEntry => Boolean(p)),
    freebies: category?.freebies ? enrichedFreebiesRows : category?.freebies,
  };
};

export interface NormalizeCategoryForRenderProps {
  /** Category block as authored. */
  category: CategoryConfig;
  /** Category's position in the campaign's `categories` array, used to look up per-index translation overrides. */
  index: number;
  /** Resolved translation queries (`categories`/`categoryLinks` arrays, indexed by `index`). */
  queries: QueriesConfig;
  /** Translates a category display name. */
  getCategoryTitle: (name: string) => string;
  /** Resolves/decorates a category or CTA href. */
  getCategoryLink: (href: string) => string;
  /** Appends UTM tracking parameters to a URL. */
  add_utm: (href: string) => string;
}

/**
 * Resolves the translated/linked fields a category needs at render time: `name`
 * (translation-sheet override or `getCategoryTitle`), `href` (translation-sheet link
 * override, or the category's own `href` resolved via `getCategoryLink`/`add_utm`),
 * `src` (unwraps a `{src}` object down to a plain string), and `cta` (same `src`/`href`
 * resolution, one level deeper — see `CtaConfig` in `@/types/thursday`).
 *
 * @returns The category with `name`/`href`/`src`/`cta` normalized for rendering.
 */
const normalizeCategoryForRender = ({ category, index, queries, getCategoryTitle, getCategoryLink, add_utm }: NormalizeCategoryForRenderProps): CategoryConfig => {
  const name = queries?.categories?.[index]
    ? queries.categories[index]
    : category?.name
      ? getCategoryTitle(category.name)
      : category?.name;

  let href = '';
  if (queries?.categoryLinks?.[index]) {
    href = add_utm(queries.categoryLinks[index]);
  } else if (category?.href) {
    // getCategoryLink (src/main/handlers/handlers.js) returns a URL object, not a string —
    // callers that interpolate it directly into a template literal never notice (implicit
    // toString), but the `typeof category.href === 'string'` checks downstream in this file
    // and in Categories.ts do notice, and silently fall back to '/'. Coerce explicitly.
    href = typeof category.href === 'string' ? String(getCategoryLink(category.href)) : add_utm((category.href as { href: string })?.href);
  }

  let src = category?.src;
  if (src && typeof src === 'object') {
    src = src.src;
  }

  let cta = category?.cta;
  if (cta && typeof cta === 'object' && !Array.isArray(cta)) {
    let ctaSrc = cta.src;
    if (ctaSrc && typeof ctaSrc === 'object') {
      ctaSrc = (ctaSrc as { src: string }).src;
    }

    let ctaHref: string | undefined = cta.href;
    if (ctaHref) {
      ctaHref = typeof ctaHref === 'string' ? String(getCategoryLink(ctaHref)) : add_utm((ctaHref as { href: string })?.href);
    }

    cta = {
      ...cta,
      src: ctaSrc,
      href: ctaHref,
    };
  }

  return {
    ...category,
    cta,
    href,
    name,
    src,
  };
};

export interface CategoriesHandlerProps {
  /** Category blocks to render, in order. */
  categories: CategoryConfig[];
  /** Live product lookup. */
  getProductById?: GetProductById;
  /** Resolves/decorates a category, product, or CTA href. */
  getCategoryLink: (href: string) => string;
  /** Translates a category display name. */
  getCategoryTitle: (name: string) => string;
  /** Resolved translation queries. */
  queries: QueriesConfig;
  /** Appends UTM tracking parameters to a URL. */
  add_utm: (href: string) => string;
  /** Campaign links map. */
  links: LinksConfig;
  /** Which surface is being rendered. */
  type: RenderType;
  /** Current market/language code. */
  country: string;
  /** General UI phrase lookup. */
  getPhrase: (key: string) => string;
}

/**
 * Top-level category pipeline: enriches every category's products (live lookups),
 * normalizes each category's render-time fields (translations/links), then delegates
 * to `Categories` for HTML rendering.
 *
 * @returns Concatenated HTML for all category blocks, or `''` if `categories` is empty.
 */
export const CategoriesHandler = async ({
  categories,
  getProductById,
  getCategoryLink,
  getCategoryTitle,
  queries,
  add_utm,
  links,
  type,
  country,
  getPhrase,
}: CategoriesHandlerProps): Promise<string> => {
  const safeCategories = Array.isArray(categories) ? categories : [];
  if (safeCategories.length === 0) {
    return '';
  }

  const categoriesWithProducts = await Promise.all(
    safeCategories.map((category) => enrichCategoryProducts({ category, getProductById, getCategoryLink }))
  );

  const source = categoriesWithProducts.length > 0 ? categoriesWithProducts : safeCategories;
  const categoriesForRender = source.map((category, index) =>
    normalizeCategoryForRender({
      category,
      index,
      queries,
      getCategoryTitle,
      getCategoryLink,
      add_utm,
    })
  );

  return Categories({
    getPhrase,
    getCategoryLink,
    getCategoryTitle,
    categories: categoriesForRender,
    queries,
    add_utm,
    links,
    type,
    country,
  });
};
