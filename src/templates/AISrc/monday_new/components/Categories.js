import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { toast } from 'sonner';
import { CTA } from './CTA.js';
import { Line } from './Line.js';
import { translateImage } from '@/helpers/translateImage.js';
import { translateLink } from '@/helpers/translateLink.js';

const Categories = async ({ getPhrase, getCategoryLink, getCategoryTitle, categories, queries, add_utm, links, type, country, categoryImageTdClass, theme = {}, disableHighPrice = false, }) => {
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
        country,
        categoryImageTdClass,
        theme,
        disableHighPrice
      );
    }
  }

  console.log('Categories HTML:', categories);

  return html;
};

const renderCategory = async (category, id, queries, getPhrase, getCategoryLink, getCategoryTitle, add_utm, links, type, country, categoryImageTdClass, theme, disableHighPrice = false) => {
  const isDeal = category.type === 'deal';
  const background = isDeal ? 'transparent' : (category.background ?? theme.white ?? 'white');
  const color = category.color ?? theme.black ?? '#000000';

  const styles = `background: ${background}; color: ${color}; ${category.styles || ''}`;

  const catLinkQuery = queries.categoryLinks ? queries.categoryLinks[id] : '';
  const ctaHref = category.href ?? (catLinkQuery ? add_utm(catLinkQuery) : '');
  const ctaButtonHref = (typeof category.cta === 'object' && category.cta?.href)
    ? getCategoryLink(category.cta.href)
    : ctaHref;

  const TitleElement = category?.title?.show !== false && category.name
    ? `
    ${category.title?.spaceBefore ? Space({ insideTr: true, className: category.title.spaceBefore }) : ''}
   
    <tr>
      <td class="newsletterContainer">
        ${Paragraph({
          text: category.name,
          color: color,
          background: background,
          align: category.title?.align ?? 'left',
          insideTable: true,
          spanStyle: `color: ${color}; font-size: 22px;`,
          tableContainer: false,
          className: category.title?.className ?? 'categoryTitle',
        })}
      </td>
    </tr>

    ${category.title?.spaceAfter ? Space({ insideTr: true, className: category.title.spaceAfter }) : Space({ insideTr: true, className: 'newsletterBottom15px' })}
    `
    : '';

  const ImageElement = category.src
    ? ImageWithLink({
        href: ctaHref,
        src: category.src,
        insideTr: true,
        tdClass: category.tdClass ?? categoryImageTdClass ?? 'newsletterContainer',
        type,
      })
    : '';

  const ParagraphElement = category?.paragraph?.show
    ? `
      ${category.paragraph.spaceBefore ? Space({ insideTr: true, className: category.paragraph.spaceBefore }) : ''}

      <tr>
        <td>
          ${Paragraph({
            text: category.paragraphText ?? queries?.paragraphs?.[id] ?? 'Translation not found',
            align: category.paragraph.align,
            insideTable: true,
            spanStyle: `color: ${color};`,
            tableContainer: true,
          })}
        </td>
      </tr>

      ${category.paragraph.spaceAfter ? Space({ insideTr: true, className: category.paragraph.spaceAfter }) : ''}
    `
    : category?.paragraph?.spaceAfter ? Space({ insideTr: true, className: category.paragraph.spaceAfter }) : '';

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

  const ctaSrc = typeof category.cta === 'object' && category.cta?.src ? category.cta.src : null;

  const ProductsElement =
    category.products || category.tiles || category.freebies
      ? await renderBody({
          products: category.products,
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
          categoryHref: ctaHref,
          getCategoryLink,
          getCategoryTitle,
          links,
          getPhrase,
          type,
          country,
          copyCode: category.copyCode,
          copyCodeWeb: category.copyCodeWeb,
          offerTextOverrides: category.offerTextOverrides,
          ctaSrc,
          theme,
          disableHighPrice,
        })
      : '';

  const insideBannerElement = category?.insideBanner
    ? `
      ${category.insideBanner?.spaceAfter ? Space({ insideTr: true, className: category.insideBanner?.spaceAfter }) : ''}
      ${category?.insideBanner?.image && category?.insideBanner?.link ? ImageWithLink({
        href: add_utm(category.insideBanner?.link.href),
        src: category.insideBanner?.image.src,
        insideTr: true,
        tdClass: category.insideBanner?.tdClass ?? categoryImageTdClass,
        type,
      }) : ''}
      ${category.insideBanner?.spaceBefore ? Space({ insideTr: true, className: category.insideBanner?.spaceBefore }) : ''}
    `
    : '';

  // Object-format cta uses categoryButton from queries; fallback is TRANSLATION NOT FOUND (not a phrase)
  const ctaText = category.ctaText
    ?? (typeof category.cta === 'object'
      ? (category.cta?.text ?? (category.cta?.phrase ? getPhrase(category.cta.phrase) : 'TRANSLATION NOT FOUND'))
      : (category.cta?.phrase ? getPhrase(category.cta.phrase) : (getPhrase('See more') ?? 'TRANSLATION NOT FOUND')));
  const ctaVariant = typeof category.cta === 'object' && category.cta?.variant ? category.cta.variant : 'maroon';

  // CTAElement only renders for non-deal categories
  const CTAElement = category.cta && !isDeal
    ? `
      ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
      ${CTA({
        color: category.color ?? '#000000',
        href: ctaButtonHref,
        text: ctaText,
        insideTr: true,
        tdClass: 'newsletterContainer',
        variant: ctaVariant,
        type: type,
        src: type !== 'landing' ? ctaSrc : null,
        align: 'center',
        theme,
      })}
    `
    : '';

  const ConditionElement = (!isDeal && category.showCondition) && queries?.condition
    ? `
      ${Space({ insideTr: true, className: 'newsletterBottom20px' })}
      <tr>
        <td align="center" class="newsletterContainer" style="text-align: center;">
          <span class="conditionText" style="font-family: 'Open Sans', Arial, sans-serif; font-size: 11px; color: #777777; line-height: 1.4; display: block;">
            ${Array.isArray(queries.condition) ? queries.condition.join('<br>') : queries.condition}
          </span>
        </td>
      </tr>
    `
    : '';

  return `
  <tr>
    <td>
      <table style="${styles}" cellspacing="0" cellpadding="0" border="0" width="100%">
        ${
          !isDeal && (!category.paddingTop || category.paddingTop > 0)
            ? Space({
                insideTr: true,
                className: `newsletterBottom${category.paddingTop ?? (id === 0 ? 45 : 35)}px`,
              })
            : ''
        }

        ${!category.title?.position || category.title?.position === 'beforeImg' ? TitleElement : ''}

        ${ParagraphBeforeImg}

        ${ImageElement}

        ${insideBannerElement}

        ${ParagraphAfterImg}

        ${category.title?.position === 'afterImg' ? TitleElement : ''}

        ${ParagraphBeforeProducts}

        ${SpaceBeforeProducts}

        ${ProductsElement}

        ${ParagraphAfterProducts}

        ${ConditionElement}

        ${CTAElement}

        ${category.spaceAfter === 0 ? '' : Space({ insideTr: true, className: category.spaceAfter ?? 'newsletterBottom60px' })}

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
  copyCode,
  copyCodeWeb,
  offerTextOverrides,
  ctaSrc,
  theme = {},
  disableHighPrice = false,
}) => {
  const categoryTypeStr = categoryType ? categoryType.toLowerCase() : 'default';

  try {
    const module = await import(`./category/${categoryTypeStr}.js`);
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
      copyCode,
      copyCodeWeb,
      ctaSrc,
      theme,
      disableHighPrice,
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
      theme,
    });
  }
};

export { Categories };
