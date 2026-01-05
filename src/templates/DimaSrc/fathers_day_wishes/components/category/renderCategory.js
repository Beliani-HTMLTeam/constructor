import { Line } from '@/templates/Thursday/components/Line';
import { CTA } from '../CTA';
import { ImageWithLink } from '../ImageWithLink';
import { Paragraph } from '../Paragraph';
import { Space } from '../Space';
import { WhiteLine } from '../whiteLine';
import { renderProducts } from './renderProducts';

const whiteLineSrc = 'https://pictureserver.net/static/2026/footer/white_line.jpg';
const blackLineSrc = 'https://pictureserver.net/static/2026/footer/line.jpg';

export const renderCategory = async (
  category,
  id,
  categoriesLength,
  queries,
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  add_utm,
  lineType = 'white'
) => {
  const background = category.background || 'white';
  const color = category.color || '#000000';

  const styles = `background: ${background}; color: ${color}; ${category.styles || ''};`;

  const catLinkQuery = queries.categoryLinks ? queries.categoryLinks[id] : '';
  const ctaHref = category.href ?? (catLinkQuery ? add_utm(catLinkQuery) : '');

  const TitleElement = category?.title?.show
    ? `
      <tr>
        <td class="newsletterContainer">
          ${Paragraph({
            text: category.name,
            color: color,
            background: background,
            align: category.title?.align || 'center',
            tableContainer: true,
            className: 'newsletterTitle',
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
      })
    : '';

  const ParagraphElement = category?.paragraph?.show
    ? `
        ${category.paragraph.spaceBefore ? Space({ insideTr: true, className: category.paragraph.spaceBefore }) : ''}
  
        <tr>
          <td class="newsletterContainer">
            ${Paragraph({
              text: queries.paragraphs[id] || 'Translation not found',
              align: category.paragraph.align,
              tableContainer: true,
            })}
          </td>
        </tr>
  
        
        ${category.paragraph.spaceAfter ? Space({ insideTr: true, className: category.paragraph.spaceAfter }) : ''}
      `
    : Space({ insideTr: true });

  const ProductsElement = category.products
    ? category.type === 'unique'
      ? await renderProducts(
          [
            ...category.products,
            { href: ctaHref, src: category.src1 },
            { href: ctaHref, src: category.src2 },
            { href: ctaHref, src: category.src3 },
          ],
          category.showPrices || true,
          category.showName || true,
          queries,
          category.type,
          id
        )
      : await renderProducts(
          category.products,
          category.showPrices || true,
          category.showName || true,
          queries,
          category.type,
          id
        )
    : '';

  return `
    <tr>
      <td>
        <table style="${styles}" cellspacing="0" cellpadding="0" border="0" width="100%" align="center">
          ${
            !category.paddingTop || category.paddingTop > 0
              ? Space({
                  insideTr: true,
                  className: `newsletterBottom${category.paddingTop ?? (id === 0 ? 80 : 35)}px`,
                })
              : ''
          }
  
          ${TitleElement}
  
          ${ImageElement}

          ${ParagraphElement}
  
          ${ProductsElement}
          
          ${Space({ insideTr: true, className: 'newsletterBottom35px' })}
  
          ${CTA({
            href: ctaHref,
            text: getPhrase('shop now'),
            insideTr: true,
            tdClass: 'newsletterContainer',
            color: color,
          })}
  
          ${Space({ insideTr: true, className: 'newsletterBottom80px' })}
  
         
        </table>
      </td>
    </tr>
  
   
      ${
        id < categoriesLength - 1
          ? `
          ${Line({
            insideTr: true,
            src: lineType === 'white' ? whiteLineSrc : blackLineSrc,
            insideContainer: true,
          })}
    `
          : ''
      }
    `;
};
