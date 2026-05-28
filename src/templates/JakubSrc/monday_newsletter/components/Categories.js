import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { toast } from 'sonner';
import { CTA } from './CTA.js';
import { Line } from './Line.js';

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

  const styles = `background: ${background}; color: ${color}; ${category.styles || ''}`;

  const catLinkQuery = queries.categoryLinks ? queries.categoryLinks[id] : '';
  const ctaHref = category.href ?? (catLinkQuery ? add_utm(catLinkQuery) : '');
  const ctaButtonHref = (typeof category.cta === 'object' && category.cta?.href)
    ? getCategoryLink(category.cta.href)
    : ctaHref;

  const TitleElement = category?.title?.show
    ? `
    ${category.title.spaceBefore ? Space({ insideTr: true, className: category.title.spaceBefore }) : ''}
   
    <tr>
      <td>
        ${Paragraph({
          text: category.name,
          color: color,
          background: background,
          align: category.title.align ?? 'left',
          insideTable: true,
          spanStyle: `color: ${color};`,
          tableContainer: true,
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
        src: category.src,
        insideTr: true,
        tdClass: category.tdClass,
      })
    : '';

  const ParagraphElement = category?.paragraph?.show
    ? `
      ${category.paragraph.spaceBefore ? Space({ insideTr: true, className: category.paragraph.spaceBefore }) : ''}

      <tr>
        <td>
          ${Paragraph({
            text: category.paragraphText ?? queries.paragraphs[id] ?? 'Translation not found',
            align: category.paragraph.align,
            insideTable: true,
            spanStyle: `color: ${color};`,
            tableContainer: true,
          })}
        </td>
      </tr>


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
        })
      : '';

  const CTAElement = category.cta
    ? CTA({
        color: category.color ?? '#000000',
        href: ctaButtonHref,
        text: category.ctaText ?? (category.cta.phrase ? getPhrase(category.cta.phrase) : getPhrase('shop now')),
        insideTr: true,
        tdClass: 'newsletterContainer',
      })
    : '';

  return `

  <tr>
    <td>
      <table style="${styles}" cellspacing="0" cellpadding="0" border="0" width="100%">
        ${
          !category.paddingTop || category.paddingTop > 0
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
    });
  }
};

export { Categories };
