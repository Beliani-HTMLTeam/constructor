import { Line } from '@/templates/Thursday/components/Line';
import { CTA } from '../CTA';
import { ImageWithLink } from '../ImageWithLink';
import { Paragraph } from '../Paragraph';
import { Space } from '../Space';
import { WhiteLine } from '../whiteLine';
import { renderProducts } from './renderProducts';
import { category4Tiles_Grid } from '../../category/grid4tiles';
import { render } from '../../category/small-tiles';
import { Category_CTA } from '../Category_CTA';

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

  const categoryNumber = String(
    Number(id) + 1
  ).padStart(2, '0');
  
  const categoryTitle =  category.name;
  
  const titleColor =
    category.title?.color ||
    category.color ||
    '#750000';
  
  const numberColor =
    category.numberColor ||
    '#D6B3B3';

    const TitleElement = category?.title?.show
    ? `
      <tr>
        <td
          class="newsletterContainer"
          align="left"
          bgcolor="${background}"
          style="
            padding-top:0;
            padding-bottom:0;
            background-color:${background};
            color:${titleColor};
            text-align:left;
          "
        >
          <table
            role="presentation"
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
            bgcolor="${background}"
            style="
              width:100%;
              border-collapse:collapse;
              background-color:${background};
            "
          >
            <tr>
              <!-- Category number -->
              <td
                width="60"
                valign="middle"
                align="left"
                bgcolor="${background}"
                style="
                background-color:${background};
                color:${numberColor};
                  width:60px;
                  padding:0;
                "
                class="newsletterBedsAndNightstandsNumber"
              >
                ${categoryNumber}
              </td>
  
              <!-- Space between number and title -->
              <td
                width="16"
                bgcolor="${background}"
                class="newsletterCategorySpace"
                style="
                  width:16px;
                  padding:0;
                  background-color:${background};
                  font-size:0;
                  line-height:0;
                "
              >
                &nbsp;
              </td>
  
              <!-- Category title -->
              <td
                valign="middle"
                align="${
                  category.title?.align || 'left'
                }"
                bgcolor="${background}"
                style="
                text-align:${
                  category.title?.align || 'left'
                };
                background-color:${background};
                color:${titleColor};
                padding-top:15px;
                "
                class="newletterBedsAndNightstandsTitle"
              >
                ${categoryTitle}
              </td>
            </tr>
          </table>
        </td>
      </tr>
  
      ${
        category.title.spaceAfter
          ? Space({
              insideTr: true,
              className:
                category.title.spaceAfter,
              backgroundColor: background,
            })
          : ''
      }
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
              country
            })
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
                  backgroundColor: background,
                })
              : ''
          }
  
          ${TitleElement}
  
          ${ImageElement}

          ${ParagraphElement}
  
          ${ProductsElement}
          
          ${category.cta?.show ? Space({ insideTr: true, className: 'newsletterBottom35px', backgroundColor: background }) : ''}
  
          ${
            category.cta?.show
              ? Category_CTA({
                  href: ctaHref,
                  text: category.cta?.type === 'shopAll' ? getPhrase('Shop All Categories') : getPhrase('shop now'),
                  insideTr: true,
                  tdClass: 'newsletterContainer',
                  color: category.cta?.color || '#000000',
                  background: background,
                  align: category.cta?.align || 'left',
                })
              : ''
          }
  
          ${Space({ insideTr: true, className: category.paddingBottom ? `newsletterBottom${category.paddingBottom}px` : 'newsletterBottom80px', backgroundColor: background })}
  
         
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
