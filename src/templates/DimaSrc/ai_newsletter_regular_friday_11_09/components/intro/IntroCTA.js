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
      return typeof getCategoryLink === 'function'
        ? getCategoryLink(links.Intro_cta_href)
        : links.Intro_cta_href;
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
        valign="middle"
        bgcolor="${backgroundColor}"
        style="
          padding:0;
          background-color:${backgroundColor};
          text-align:center;
          vertical-align:middle;
        "
      >
        <table
          role="presentation"
          border="0"
          cellspacing="0"
          cellpadding="0"
          align="center"
          style="
            border-collapse:separate;
            mso-table-lspace:0pt;
            mso-table-rspace:0pt;
          "
        >
          <tr>
            <td
              align="center"
              style="
                padding:0;
                border-radius:25px;
                text-align:center;
                vertical-align:middle;
              "
            >
              <a
                href="${getHref()}"
                target="_blank"
                class="newsletterIntroCTA"
                style="
                  display:inline-block;
                  border-style:solid;
                  border-color:${buttonBackground};
                  border-width:15px 32px;
                  border-radius:25px;
                  background-color:${buttonBackground};
                  color:${buttonColor};
                  font-family:'Open Sans', Arial, sans-serif;
                  font-size:16px;
                  line-height:19px;
                  font-weight:700;
                  text-align:center;
                  text-decoration:none;
                  white-space:nowrap;
                  vertical-align:middle;
                  mso-line-height-rule:exactly;
                  -webkit-text-size-adjust:100%;
                  -ms-text-size-adjust:100%;
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