import { Line } from '@/templates/Thursday/components/Line';
import { CTA } from '../CTA';
import { ImageWithLink } from '../ImageWithLink';
import { Paragraph } from '../Paragraph';
import { Space } from '../Space';
import { WhiteLine } from '../whiteLine';
import { renderProducts } from './renderProducts';
import { category4Tiles_Grid } from '../../category/grid4tiles';
import { render } from '../../category/small-tiles';
import { AI_CTA } from '../AI_CTA';

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
  lineType = 'white',
  country
) => {
  console.log('background: ', category);

  const background = category.background || 'white';
  const color = category.color || '#000000';

  const styles = `background: ${background}; color: ${color}; ${category.styles || ''}${category.styles ? ';' : ''}`;

  const catLinkQuery = queries.categoryLinks ? queries.categoryLinks[id] : '';
  const ctaHref = category.href ?? (catLinkQuery ? add_utm(catLinkQuery) : '');

  const TitleElement = category?.title?.show
    ? `
      <tr>
        <td style="${styles} ${category.title?.align ? `text-align: ${category.title?.align};` : ""}" class="newsletterContainer40px">
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
  
      ${category.title.spaceAfter ? Space({ insideTr: true, className: category.title.spaceAfter, backgroundColor: background }) : ''}
      `
    : '';

  const ImageElement = category.src
    ? ImageWithLink({
        href: ctaHref,
        src: category.src,
        insideTr: true,
        background: background,
      })
    : '';

  const ParagraphElement = category?.paragraph?.show
    ? `
        ${category.paragraph.spaceBefore ? Space({ insideTr: true, className: category.paragraph.spaceBefore, backgroundColor: background }) : ''}
  
        <tr>
          <td style="${styles}" class="newsletterContainer">
            ${Paragraph({
              text: queries.paragraphs[id] || 'Translation not found',
              align: category.paragraph.align,
              tableContainer: true,
            })}
          </td>
        </tr>
  
        
        ${category.paragraph.spaceAfter ? Space({ insideTr: true, className: category.paragraph.spaceAfter, backgroundColor: background }) : ''}
      `
    : category?.paragraph?.spaceAfter ? Space({ insideTr: true, className: category.paragraph.spaceAfter, backgroundColor: background }) : Space({ insideTr: true, backgroundColor: background });

  const ProductsElement = category.products
    ? category.type === 'unique'
      ? await renderProducts({
          products: [
            ...category.products,
            { href: ctaHref, src: category.src1 },
            { href: ctaHref, src: category.src2 },
            { href: ctaHref, src: category.src3 },
          ],
          showPrices: category.showPrices || true,
          showName: category.showName || true,
          queries,
          categoryType: category.type,
          categoryIndex: id,
          insideContainer: category.insideContainer || false,
        })
      : category.type === 'grid4tiles'
        ? category4Tiles_Grid({
            getCategoryLink,
            getCategoryTitle,
            products: category.products,
            insideContainer: true,
            color,
            background,
            add_utm,
            country
          })
        :  category.type === 'small-tiles'
          ? render({
            tiles: category.tiles,
            color,
            getCategoryLink,
            getCategoryTitle,
            country
            })
          : await renderProducts({
              products: category.products,
              showPrices: category.showPrices || true,
              showName: category.showName || true,
              queries,
              categoryType: category.type,
              categoryIndex: id,
              insideContainer: category.insideContainer || false,
              background,
              color: category.color || '#000000',
              country, category: category
            })
    : '';

  return `
    <tr>
      <td>
        <table style="${styles}" cellspacing="0" cellpadding="0" border="0" width="100%" align="center">
          ${ImageElement}

          ${Space({ insideTr: true, className:'newsletterBottom35px' })}

          ${TitleElement}
  
          ${ProductsElement}
          
          ${category.cta?.show ? Space({ insideTr: true, className: 'newsletterBottom35px', backgroundColor: background }) : ''}

          ${category.cta.type === 'ai' && category.cta?.show ? AI_CTA({
            href: ctaHref,
            text: category.cta?.type === 'shopAll' ? getPhrase('Shop All Categories') : getPhrase('shop now'),
            insideTr: true,
            tdClass: 'newsletterContainer',
            color: category.cta?.color || color,
            background: background,
            ctaBackgroundColor: category.cta?.background || '#FFFFFF',
          })
        :''
        }
  
          ${
            category.cta.type !== 'ai' &&  category.cta?.show
              ? CTA({
                  href: ctaHref,
                  text: category.cta?.type === 'shopAll' ? getPhrase('Shop All Categories') : getPhrase('shop now'),
                  insideTr: true,
                  tdClass: 'newsletterContainer',
                  color: color,
                  background: background,
                })
              : ''
          }
  
          ${Space({ insideTr: true, className: 'newsletterBottom80px', backgroundColor: background })}
  
         
        </table>
      </td>
    </tr>
  
   
      ${
        category.line && !category.line?.show
          ? ''
          : id < categoriesLength - 1
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
