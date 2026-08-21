import { CTA } from '../CTA';
import { Space } from '../Space';

export const IntroCTA = ({
  cta,
  queries,
  links,
  categories,
  country,
  add_utm,
  getCategoryLink,
  shopNowPhrase,
  backgroundColor = '#FFFFFF',
  color = '#750000',
}) => {
  if (!cta) return '';

  const getHref = () => {
    if (cta.href) {
      return cta.href;
    }

    if (
      cta.hrefSource === 'queries' &&
      queries?.introCTAhref
    ) {
      return typeof add_utm === 'function'
        ? add_utm(queries.introCTAhref)
        : queries.introCTAhref;
    }

    if (links?.Intro_cta_href) {
      return getCategoryLink(
        links.Intro_cta_href
      );
    }

    if (links?.introCTA_href) {
      return links.introCTA_href;
    }

    if (links?.TopImage_href) {
      return links.TopImage_href;
    }

    const directCategory = categories?.find(
      (item) => item?.href
    );

    const nestedCategory = categories
      ?.flatMap((item) => item?.categories || [])
      .find((item) => item?.href);

    const categoryHref =
      directCategory?.href ||
      nestedCategory?.href;

    return (
      categoryHref &&
      typeof getCategoryLink === 'function'
    )
      ? getCategoryLink(categoryHref)
      : categoryHref || '#';
  };

  const getText = () => {
    return (
      cta.overrides?.[country] ||
      queries?.introCTA ||
      cta.text ||
      shopNowPhrase ||
      'Shop now'
    );
  };

  const buttonBackground =
    cta.background || '#FFCCB7';

  const buttonColor =
    cta.color || color || '#750000';

  return `
    ${
      cta.spaceBefore
        ? Space({
            insideTr: true,
            className: cta.spaceBefore,
            backgroundColor,
          })
        : ''
    }

    <tr>
      <td
        align="center"
        bgcolor="${backgroundColor}"
        style="
          background-color:${backgroundColor};
          text-align:center;
        "
      >
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          align="center"
          role="presentation"
        >
          <tr>
            <td
              align="center"
              bgcolor="${buttonBackground}"
              style="
                background-color:${buttonBackground};
                border-radius:20px;
                font-size:0;
                line-height:0;
              "
            >
              <a
                href="${getHref()}"
                target="_blank"
                style="
                  display:inline-block;
                  border-style:solid;
                  border-color:${buttonBackground};
                  border-width:10px 22px;
                  border-radius:20px;
                  background-color:${buttonBackground};
                  color:${buttonColor};
                  font-family:Arial, sans-serif;
                  font-size:13px;
                  line-height:14px;
                  font-weight:700;
                  text-align:center;
                  text-decoration:none;
                  white-space:nowrap;
                  vertical-align:middle;
                  -webkit-text-size-adjust:none;
                "
              >${getText()}</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    ${
      cta.spaceAfter
        ? Space({
            insideTr: true,
            className: cta.spaceAfter,
            backgroundColor,
          })
        : ''
    }
  `;
};