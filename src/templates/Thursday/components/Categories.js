import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { toast } from 'sonner';
import { CTA } from './CTA.js';
import { Line } from './Line.js';

const Categories = async ({ getPhrase, getCategoryLink, getCategoryTitle, categories, queries, add_utm }) => {
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
        add_utm
      );
    }
  }

  return html;
};

const renderCategory = async (category, id, queries, getPhrase, getCategoryLink, getCategoryTitle, add_utm) => {
  const background = category.background ?? 'white';
  const color = category.color ?? '#000000';

  const styles = `background: ${background}; color: ${color}; ${category.styles || ''}`;

  const catLinkQuery = queries.categoryLinks ? queries.categoryLinks[id] : '';
  const ctaHref = category.href ?? (catLinkQuery ? add_utm(catLinkQuery) : '');

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
            text: queries.paragraphs[id] ?? 'Translation not found',
            align: category.paragraph.align,
            insideTable: true,
            spanStyle: `color: ${color};`,
            tableContainer: true,
          })}
        </td>
      </tr>

      
      ${category.paragraph.spaceAfter ? Space({ insideTr: true, className: category.paragraph.spaceAfter }) : ''}
    `
    : Space({ insideTr: true, className: category.paragraph.spaceAfter ?? 'newsletterBottom35px' });

  const ProductsElement =
    category.products || category.tiles
      ? await renderBody({
          products: category.products,
          tiles: category.tiles,
          showPrices: category.showPrices ?? category.product?.prices ?? true,
          showNames: category.showNames ?? category.product?.name ?? true,
          align: category.product?.align ?? 'left',
          queries,
          categoryType: category.type,
          insideContainer: category.insideContainer ?? true,
          color: category.color ?? '#000000',
          id,
          imageSide: category.imageSide,
          getCategoryLink,
          getCategoryTitle,
        })
      : '';

  const CTAElement = category.cta
    ? CTA({
        color: category.color ?? '#000000',
        href: ctaHref,
        text: getPhrase('shop now'),
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

        ${ImageElement}

        ${category.title?.position === 'afterImg' ? TitleElement : ''}

        ${ParagraphElement}

        ${ProductsElement}

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
  tiles,
  showPrices,
  showNames,
  align = 'left',
  queries,
  categoryType,
  insideContainer,
  color,
  id,
  imageSide,
  getCategoryLink,
  getCategoryTitle,
}) => {
  // console.log('produkty ', products);

  const type = categoryType ? categoryType.toLowerCase() : 'default';

  try {
    const module = await import(`./category/${type}.js`);

    return module.render({
      products,
      tiles,
      showPrices,
      showNames,
      align,
      queries,
      insideContainer,
      color,
      id,
      imageSide,
      getCategoryLink,
      getCategoryTitle,
    });
  } catch (e) {
    toast.error(`Category type "${categoryType}" not found. Falling back to default renderer.`);
    console.error(e.message);

    const defaultModule = await import('./category/default.js');

    return defaultModule.render({
      products,
      showPrices,
      showNames,
      align,
      queries,
      insideContainer,
      color,
      id,
      imageSide,
    });
  }
};

export { Categories };
