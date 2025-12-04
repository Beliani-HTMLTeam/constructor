import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { toast } from 'sonner';
import { CTA } from './CTA.js';

const Categories = async ({
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  categories,
  queries,
}) => {
  let html = '';

  if (Array.isArray(categories)) {
    for (const category of categories) {
      html += await renderCategory(
        category,
        categories.indexOf(category),
        queries,
        getPhrase,
        getCategoryLink,
        getCategoryTitle
      );
    }
  }

  return html;
};

const renderCategory = async (
  category,
  id,
  queries,
  getPhrase,
  getCategoryLink,
  getCategoryTitle
) => {
  const background = category.background || 'white';
  const color = category.color || '#000000';

  const styles = `background: ${background}; color: ${color}; ${category.styles || ''}`;

  const TitleElement = category?.title?.show
    ? `
    <tr>
      <td>
        ${Paragraph({
          text: category.name,
          color: color,
          background: background,
          align: 'left',
          insideTable: true,
          tableContainer: true,
          className: 'newsletterTitle',
        })}
      </td>
    </tr>

    ${
      category.title.spaceAfter
        ? Space({ insideTr: true, className: category.title.spaceAfter })
        : ''
    }
    `
    : '';

  const ImageElement = category.src
    ? ImageWithLink({
        href: category.href,
        src: category.src,
        insideTr: true,
      })
    : '';

  const ParagraphElement = category?.paragraph?.show
    ? `
      ${
        category.paragraph.spaceBefore
          ? Space({ insideTr: true, className: category.paragraph.spaceBefore })
          : ''
      }

      <tr>
        <td>
          ${Paragraph({
            text: queries.paragraphs[id] || 'Translation not found',
            align: category.paragraph.align,
            insideTable: true,
            tableContainer: true,
          })}
        </td>
      </tr>

      
      ${
        category.paragraph.spaceAfter
          ? Space({ insideTr: true, className: category.paragraph.spaceAfter })
          : ''
      }
    `
    :  Space({insideTr: true});

  const ProductsElement = category.products
    ? await renderProducts(
        category.products,
        category.showPrices || true,
        category.showName || true,
        queries,
        category.type
      )
    : '';

  return `

  <tr>
    <td>
      <table style="${styles}" cellspacing="0" cellpadding="0" border="0" width="100%">
        ${Space({ insideTr: true, className: `newsletterBottom${id === 0 ? 60 : 35}px` })}

        ${TitleElement}

        ${ImageElement}

        ${ParagraphElement}

        ${ProductsElement}

        ${CTA({
          href: category.href || '',
          text: getPhrase('shop now'),
          insideTr: true,
          tdClass: 'newsletterContainer',
        })}

        ${Space({ insideTr: true, className: 'newsletterBottom80px' })}
      </table>
    </td>
  </tr>

  `;
};

const renderProducts = async (products, showPrices, showName, queries, categoryType) => {
  // console.log('produkty ', products);

  const type = categoryType ? categoryType.toLowerCase() : 'default';

  try {
    const module = await import(`./category/${type}.js`);

    return module.render(products, showPrices, showName, queries);
  } catch (e) {
    toast.error(`Category type "${categoryType}" not found. Falling back to default renderer.`);
    console.error(e.message);

    const defaultModule = await import('./category/default.js');

    return defaultModule.render(products, showPrices, showName, queries);
  }
};

export { Categories };
