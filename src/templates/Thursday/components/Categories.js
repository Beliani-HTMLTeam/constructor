import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { CategoryTitle } from './CategoryTitle.js';
import { toast } from 'sonner';
import { CTA } from './CTA.js';
import { Line } from './Line.js';

// category types that render on their own, without products/tiles/freebies
const STANDALONE_CATEGORY_TYPES = ['deal_new', 'rowswith3categories'];

const resolveSpaceClass = (value, fallback) => {
  const raw = value ?? fallback;

  if (raw === 0 || raw === '0' || raw === false || raw === null || raw === undefined) return null;
  if (typeof raw === 'number') return `newsletterBottom${raw}px`;

  return raw;
};

const renderSpace = (value, fallback) => {
  const className = resolveSpaceClass(value, fallback);

  return className ? Space({ insideTr: true, className }) : '';
};

const Categories = async ({ getPhrase, getCategoryLink, getCategoryTitle, categories, queries, add_utm, links, type, country }) => {
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

const renderCategory = async (category, id, queries, getPhrase, getCategoryLink, getCategoryTitle, add_utm, links, type, country) => {
  const background = category.background ?? 'white';
  const color = category.color ?? '#000000';
  const container = category.container;
  const containerClass = container ?? 'newsletterContainer';

  const styles = `background: ${background}; color: ${color}; ${category.styles || ''}`;

  const catLinkQuery = queries.categoryLinks ? queries.categoryLinks[id] : '';
  const ctaHref = category.href ?? (catLinkQuery ? add_utm(catLinkQuery) : '');

  const isCompositeTitle = Boolean(
    category?.title?.number?.show || category?.title?.paragraph?.show || category?.title?.eyebrow?.show
  );

  const eyebrowConfig = category?.title?.eyebrow;
  const eyebrowText = eyebrowConfig?.show
    ? (eyebrowConfig.text ?? getPhrase(eyebrowConfig.phrase ?? 'KEEP THE LOOK GOING'))
    : '';

  const TitleBody = isCompositeTitle
    ? CategoryTitle({
        title: category.name,
        config: category.title,
        paragraphText: queries.paragraphs?.[id],
        eyebrowText,
        color,
        align: category.title.align ?? 'left',
      })
    : Paragraph({
        text: category.name,
        color: color,
        background: background,
        align: category.title?.align ?? 'left',
        insideTable: true,
        spanStyle: `${category.title?.styles ?? ''} color: ${category.title?.color ?? color};`,
        tableContainer: category.title?.container ?? containerClass,
        className: category.title?.className ?? 'newsletterTitle',
      });

  const TitleElement = category?.title?.show
    ? `
    ${renderSpace(category.title.spaceBefore, null)}

    <tr>
      <td>
        ${TitleBody}
      </td>
    </tr>

    ${renderSpace(category.title.spaceAfter, null)}
    `
    : '';

  const ImageElement = category.src
    ? ImageWithLink({
        href: ctaHref,
        src: category.src,
        insideTr: true,
        tdClass: category.tdClass,
      })
    : '';

  const ParagraphElement = category?.paragraph?.show
    ? `
      ${renderSpace(category.paragraph.spaceBefore, null)}

      <tr>
        <td>
          ${Paragraph({
            text: category.paragraph.text ?? queries.paragraphs?.[id] ?? 'Translation not found',
            align: category.paragraph.align,
            insideTable: true,
            spanStyle: `${category.paragraph.styles ?? ''} color: ${category.paragraph.color ?? color};`,
            className: category.paragraph.className ?? 'newsletterParagraph',
            tableContainer: category.paragraph.container ?? containerClass,
          })}
        </td>
      </tr>

      
      ${renderSpace(category.paragraph.spaceAfter, null)}
    `
    : renderSpace(category.paragraph?.spaceAfter, 'newsletterBottom35px');

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
  const SpaceBeforeProducts = renderSpace(category?.spaceBeforeProducts, null);

  const isStandaloneCategory = STANDALONE_CATEGORY_TYPES.includes(String(category.type ?? '').toLowerCase());

  const ProductsElement =
    category.products || category.tiles || category.freebies || isStandaloneCategory
      ? await renderBody({
          products: category.products,
          freebies: category.freebies,
          tiles: category.tiles,
          showPrices: category.showPrices ?? category.product?.prices ?? true,
          showNames: category.showNames ?? category.product?.name ?? true,
          showTileNames: category.showTileNames ?? true,
          gapBetweenHorizontal: category.product?.gapBetweenHorizontal ?? category.gapBetweenHorizontal ?? true,
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
          add_utm,
        })
      : '';

  const CTAElement = category.cta?.show === false
    ? ''
    : category.cta
    ? `
      ${renderSpace(category.cta.spaceBefore, null)}
      ${category.cta.src
        ? ImageWithLink({
            href: ctaHref,
            src: typeof category.cta.src === 'object' ? category.cta.src.src : category.cta.src,
            insideTr: true,
            tdClass: containerClass,
          })
        : CTA({
            color: category.color ?? '#000000',
            href: ctaHref,
            text: category.cta.phrase ? getPhrase(category.cta.phrase) : getPhrase('shop now'),
            insideTr: true,
            tdClass: containerClass,
            ...(typeof category.cta === 'object' ? {
              ...category.cta,
              bg: category.cta.background ?? category.cta.bg,
              textColor: category.cta.color ?? category.cta.textColor,
              background: category.cta.containerBackground,
            } : {})
          })}

      ${renderSpace(category.cta.spaceAfter, null)}
      `
    : '';

  const ctaPositionRaw = category?.cta?.position ?? 'afterProducts';
  const ctaPosition =
    ctaPositionRaw === 'underCategoryImage' || ctaPositionRaw === 'afterCategoryImage'
      ? 'afterImg'
      : ctaPositionRaw === 'above' || ctaPositionRaw === 'beforeCategoryImage'
        ? 'beforeImg'
        : ctaPositionRaw === 'underProducts'
          ? 'afterProducts'
          : ctaPositionRaw;

  const CTABeforeImg = ctaPosition === 'beforeImg' ? CTAElement : '';
  const CTAAfterImg = ctaPosition === 'afterImg' ? CTAElement : '';
  const CTABeforeProducts = ctaPosition === 'beforeProducts' ? CTAElement : '';
  const CTAAfterProducts = ctaPosition === 'afterProducts' ? CTAElement : '';

  return `

  <tr>
    <td>
      <table style="${styles}" cellspacing="0" cellpadding="0" border="0" width="100%">
        ${renderSpace(category.paddingTop, id === 0 ? 60 : 35)}

        ${!category.title?.position || category.title?.position === 'beforeImg' ? TitleElement : ''}

        ${ParagraphBeforeImg}

        ${CTABeforeImg}

        ${ImageElement}

        ${ParagraphAfterImg}

        ${category.title?.position === 'afterImg' ? TitleElement : ''}

        ${CTAAfterImg}

        ${ParagraphBeforeProducts}

        ${SpaceBeforeProducts}

        ${CTABeforeProducts}

        ${ProductsElement}

        ${ParagraphAfterProducts}

        ${CTAAfterProducts}

        ${renderSpace(category.spaceAfter, 'newsletterBottom80px')}

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

const renderBody = async ({
  products,
  freebies,
  tiles,
  showPrices,
  showNames,
  showTileNames,
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
  add_utm,
  alignToSide = false,
}) => {
  // console.log('produkty ', products);

  const categoryTypeStr = categoryType ? categoryType.toLowerCase() : 'default';

  try {
    const module = await import(`./category/${categoryTypeStr}.js`);

    return module.render({
      products,
      freebies,
      tiles,
      showPrices,
      showNames,
      showTileNames,
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
      add_utm,
      alignToSide,
    });
  } catch (e) {
    toast.error(`Category type "${categoryType}" not found. Falling back to default renderer.`);
    console.error(e.message);

    const defaultModule = await import('./category/default.js');

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
