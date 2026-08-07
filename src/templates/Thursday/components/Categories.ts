import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { toast } from 'sonner';
import { CTA } from './CTA.js';
import { Line } from './Line.js';
import { safePhrase, safeValue } from '../helpers/safePhrase.js';
import type { CategoryConfig, QueriesConfig, LinksConfig, RenderType, CtaConfig, CategoryRenderProps } from '@/types/thursday';

export interface CategoriesProps {
  /** General UI phrase lookup (e.g. `'shop now'`, `'Free'`). */
  getPhrase: (key: string) => string;
  /** Resolves/decorates a category or product href. */
  getCategoryLink: (href: string) => string;
  /** Translates a category display name. */
  getCategoryTitle: (name: string) => string;
  /** Category blocks to render, in order. Already normalized (name/href/src/cta resolved) by `handlers/_Categories.ts`. */
  categories: CategoryConfig[];
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
}

/**
 * Renders every category block of a Thursday newsletter/landing page.
 *
 * @returns Concatenated HTML for all category blocks.
 */
const Categories = async ({ getPhrase, getCategoryLink, getCategoryTitle, categories, queries, add_utm, links, type, country }: CategoriesProps): Promise<string> => {
  let html = '';

  if (Array.isArray(categories)) {
    for (const category of categories) {
      html += await renderCategory(
        category,
        categories.indexOf(category),
        queries,
        getPhrase,
        getCategoryLink,
        getCategoryTitle,
        add_utm,
        links,
        type,
        country
      );
    }
  }

  return html;
};

const renderCategory = async (
  category: CategoryConfig,
  id: number,
  queries: QueriesConfig,
  getPhrase: (key: string) => string,
  getCategoryLink: (href: string) => string,
  getCategoryTitle: (name: string) => string,
  add_utm: (href: string) => string,
  links: LinksConfig,
  type: RenderType,
  country: string
): Promise<string> => {
  const background = category.background ?? 'white';
  const color = category.color ?? '#000000';
  const container = category.container;
  const containerClass = container ?? 'newsletterContainer';

  const styles = `background: ${background}; color: ${color}; ${category.styles || ''}`;

  const catLinkQuery = queries.categoryLinks ? queries.categoryLinks[id] : '';
  const resolvedCategoryHref = (typeof category.href === 'string' ? category.href : undefined) ?? (catLinkQuery ? add_utm(catLinkQuery) : undefined);
  // No categoryLinks entry and no category.href: fall back to "/" rather than an empty
  // href (which would render a dead/self link but silently, or "undefined" if left unguarded).
  const ctaHref = safeValue(resolvedCategoryHref, '/', `category href for "${category.name ?? `category[${id}]`}"`);

  const TitleElement = category?.title?.show
    ? `
    ${category.title.spaceBefore ? Space({ insideTr: true, className: category.title.spaceBefore }) : ''}
   
    <tr>
      <td>
        ${Paragraph({
          text: category.name,
          align: category.title.align ?? 'left',
          insideTable: true,
          spanStyle: `color: ${color};`,
          tableContainer: containerClass,
          className: category.title.className ?? 'newsletterTitle',
        })}
      </td>
    </tr>

    ${category.title.spaceAfter ? Space({ insideTr: true, className: category.title.spaceAfter }) : ''}
    `
    : '';

  const ImageElement = category.src
    ? ImageWithLink({
        href: ctaHref,
        src: typeof category.src === 'object' ? category.src.src : category.src,
        insideTr: true,
        tdClass: category.tdClass,
      })
    : '';

  // A category description can be more than one line by putting a line break in the
  // translation-sheet cell — future-proofs multi-line descriptions without any schema
  // change (single-line cells render exactly as before).
  const paragraphLines = (queries.paragraphs?.[id] ?? 'Translation not found')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const ParagraphElement = category?.paragraph?.show
    ? `
      ${category.paragraph.spaceBefore ? Space({ insideTr: true, className: category.paragraph.spaceBefore }) : ''}

      ${paragraphLines
        .map(
          (line, i) => `
        <tr>
          <td>
            ${Paragraph({
              text: line,
              align: category.paragraph?.align,
              insideTable: true,
              spanStyle: `color: ${color};`,
              tableContainer: containerClass,
            })}
          </td>
        </tr>
        ${i < paragraphLines.length - 1 ? Space({ insideTr: true, className: 'newsletterBottom10px' }) : ''}
      `
        )
        .join('')}

      ${category.paragraph.spaceAfter ? Space({ insideTr: true, className: category.paragraph.spaceAfter }) : ''}
    `
    : Space({ insideTr: true, className: category.paragraph?.spaceAfter ?? 'newsletterBottom35px' });

  const paragraphPositionRaw = category?.paragraph?.position ?? 'beforeProducts';
  const paragraphPosition =
    paragraphPositionRaw === 'underProducts'
      ? 'afterProducts'
      : paragraphPositionRaw === 'underCategoryImage' || paragraphPositionRaw === 'afterCategoryImage'
        ? 'afterImg'
        : paragraphPositionRaw === 'above'
          ? 'beforeImg'
          : paragraphPositionRaw;

  const ParagraphBeforeImg = paragraphPosition === 'beforeImg' ? ParagraphElement : '';
  const ParagraphAfterImg = paragraphPosition === 'afterImg' ? ParagraphElement : '';
  const ParagraphBeforeProducts = paragraphPosition === 'beforeProducts' ? ParagraphElement : '';
  const ParagraphAfterProducts = paragraphPosition === 'afterProducts' ? ParagraphElement : '';
  const SpaceBeforeProducts = category?.spaceBeforeProducts
    ? Space({ insideTr: true, className: category.spaceBeforeProducts })
    : '';

  const ProductsElement =
    category.products || category.tiles || category.freebies
      ? await renderBody({
          // `product.priceColor` is a per-category setting but applies per card, so fold it
          // into each entry here rather than threading it through every category renderer.
          products: category.product?.priceColor
            ? category.products?.map((p) => ({ priceColor: category.product?.priceColor, ...p }))
            : category.products,
          freebies: category.freebies,
          tiles: category.tiles,
          showPrices: category.showPrices ?? category.product?.prices ?? true,
          showNames: category.showNames ?? category.product?.name ?? true,
          gapBetweenHorizontal: category.gapBetweenHorizontal ?? true,
          gapBetweenVertical: category.product?.gapBetweenVertical ?? true,
          align: category.product?.align ?? 'left',
          queries,
          categoryType: category.type,
          insideContainer: category.insideContainer ?? true,
          color: category.color ?? '#000000',
          id,
          imageSide: category.imageSide,
          alignToSide: category.alignToSide ?? false,
          categoryHref: ctaHref,
          getCategoryLink,
          getCategoryTitle,
          links,
          getPhrase,
          type,
          country,
          offerTextOverrides: category.offerTextOverrides,
          category,
          container,
        })
      : '';

  const ctaConfig: CtaConfig | undefined =
    typeof category?.cta === 'object' && category.cta !== null ? category.cta : undefined;

  let ctaSrc = ctaConfig?.src;
  if (ctaSrc && typeof ctaSrc === 'object') {
    ctaSrc = (ctaSrc as { src: string }).src;
  }

  let ctaButtonHref: string | undefined = ctaConfig?.href;
  if (ctaButtonHref) {
    ctaButtonHref = typeof ctaButtonHref === 'object' ? add_utm((ctaButtonHref as { href: string })?.href) : ctaButtonHref;
  } else {
    ctaButtonHref = ctaHref;
  }

  const CTAElement = category.ctaHtml
    ? `<tr><td class="${containerClass}" align="center" width="100%">${category.ctaHtml}</td></tr>`
    : ctaConfig
      ? `
      ${ctaConfig.spaceBefore ? Space({ insideTr: true, className: ctaConfig.spaceBefore }) : ''}
      ${ctaSrc ? ImageWithLink({
        href: ctaButtonHref,
        src: ctaSrc,
        insideTr: true,
        tdClass: ctaConfig.tdClass ?? containerClass,
        align: ctaConfig.align ?? 'center',
        alt: ctaConfig.alt ?? 'Newsletter CTA Image',
        targetBlank: ctaConfig.targetBlank ?? false,
        width: ctaConfig.width,
        height: ctaConfig.height,
      }) : CTA({
        color: category.color ?? '#000000',
        href: safeValue(ctaButtonHref, '/', `CTA href for category "${category.name ?? ''}"`),
        // A `catButtons` tableQuery lets the campaign sheet own the per-category CTA wording
        // — most sheets carry it there rather than as a translated phrase key. Indexed by
        // the category's own `ctaTextIndex`, since the sheet only lists buttons for
        // categories that have one (a leading `deal` block has none, so plain positional
        // indexing would shift every label by one). Falls back to `cta.phrase`/"Shop now".
        text: ctaConfig.ctaTextIndex !== undefined && queries.catButtons?.[ctaConfig.ctaTextIndex]
          ? queries.catButtons[ctaConfig.ctaTextIndex]
          : ctaConfig.phrase
            ? safePhrase(getPhrase, ctaConfig.phrase, ctaConfig.phrase)
            : safePhrase(getPhrase, 'shop now', 'Shop now'),
        insideTr: true,
        tdClass: ctaConfig.tdClass ?? containerClass,
        align: ctaConfig.align ?? 'center',
        className: 'newsletterCtaCaps',
      })}
        `
      : '';

  return `

  <tr>
    <td>
      <table style="${styles}" cellspacing="0" cellpadding="0" border="0" width="100%">
        ${
          !category.paddingTop || Number(category.paddingTop) > 0
            ? Space({
                insideTr: true,
                className: `newsletterBottom${category.paddingTop ?? (id === 0 ? 60 : 35)}px`,
              })
            : ''
        }

        ${!category.title?.position || category.title?.position === 'beforeImg' ? TitleElement : ''}

        ${ParagraphBeforeImg}

        ${ImageElement}

        ${ParagraphAfterImg}

        ${category.title?.position === 'afterImg' ? TitleElement : ''}

        ${ParagraphBeforeProducts}

        ${SpaceBeforeProducts}

        ${ProductsElement}

        ${ParagraphAfterProducts}

        ${CTAElement}

        ${category.spaceAfter === 0 ? '' : Space({ insideTr: true, className: category.spaceAfter ?? 'newsletterBottom80px' })}

        ${
          category?.line?.show
            ? Line({
                insideTr: true,
                insideContainer: category?.line?.insideContainer,
                src: category?.line?.src,
              })
            : ''
        }
      </table>
    </td>
  </tr>

  `;
};

interface RenderBodyProps extends CategoryRenderProps {
  categoryType?: string;
  type?: RenderType;
}

const renderBody = async ({
  products,
  freebies,
  tiles,
  showPrices,
  showNames,
  gapBetweenHorizontal,
  gapBetweenVertical,
  align = 'left',
  queries,
  categoryType,
  insideContainer,
  color,
  id,
  imageSide,
  freebiesPerRow,
  categoryHref,
  getCategoryLink,
  getCategoryTitle,
  links,
  getPhrase,
  type,
  country,
  offerTextOverrides,
  category,
  container,
  alignToSide = false,
}: RenderBodyProps): Promise<string> => {
  // console.log('produkty ', products);

  const categoryTypeStr = categoryType ? categoryType.toLowerCase() : 'default';

  try {
    const module = await import(`./category/${categoryTypeStr}.ts`);

    return module.render({
      products,
      freebies,
      tiles,
      showPrices,
      showNames,
      gapBetweenHorizontal,
      gapBetweenVertical,
      align,
      queries,
      insideContainer,
      color,
      id,
      imageSide,
      freebiesPerRow,
      categoryHref,
      getCategoryLink,
      getCategoryTitle,
      links,
      getPhrase,
      renderType: type,
      country,
      offerTextOverrides,
      category,
      container,
      alignToSide,
    });
  } catch (e) {
    toast.error(`Category type "${categoryType}" not found. Falling back to default renderer.`);
    console.error((e as Error).message);

    const defaultModule = await import('./category/default.ts');

    return defaultModule.render({
      products,
      freebies,
      showPrices,
      showNames,
      gapBetweenHorizontal,
      gapBetweenVertical,
      align,
      queries,
      insideContainer,
      color,
      id,
      imageSide,
      freebiesPerRow,
      links,
      getPhrase,
      renderType: type,
      container,
    });
  }
};

export { Categories };
