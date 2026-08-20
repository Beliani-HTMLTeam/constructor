import { Space } from './Space.js';
import { CTA } from './CTA.js';

export const ShopByCategoryHeader = ({
  title = '',
  subtitle = null,
  linkText = '',
  linkHref = '#',
  type = 'newsletter',
  theme = {},
}) => {
  const white = theme.white ?? '#ffffff';
  const black = theme.black ?? '#000000';
  const gray = theme.gray ?? '#555555';
  const primary = theme.primary ?? '#750000';

  return `
    <tr>
      <td style="background-color: ${white}; padding: 40px 20px 20px 20px;" align="center">
        <table cellspacing="0" cellpadding="0" border="0" width="100%">
          <tr>
            <td align="center">
              <span class="shopByCategoryTitle" style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Georgia, serif;' : ''} font-size: 26px; font-weight: bold; color: ${black}; display: block; text-align: center; letter-spacing: 0.5px;">
                ${title}
              </span>
            </td>
          </tr>
          ${subtitle ? `
            ${Space({ insideTr: true, className: 'newsletterBottom10px' })}
            <tr>
              <td align="center">
                <span class="shopByCategorySubtitle" style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 14px; color: ${gray}; display: block; text-align: center; line-height: 1.5;">
                  ${subtitle}
                </span>
              </td>
            </tr>
          ` : ''}
          ${linkHref && linkText ? `
            ${Space({ insideTr: true, className: 'newsletterBottom15px' })}
            <tr>
              <td align="center">
                ${type === 'newsletter'
                  ? CTA({
                      href: linkHref,
                      text: linkText,
                      variant: 'maroon',
                      type,
                      align: 'center',
                    })
                  : `<a href="${linkHref}" class="secondaryLinkMaroon" style="${type === 'newsletter' ? 'font-family: \'Open Sans\', Arial, sans-serif;' : ''} font-size: 13px; font-weight: bold; color: ${primary} !important; text-decoration: none;">${linkText}</a>`}
              </td>
            </tr>
          ` : ''}
        </table>
      </td>
    </tr>
  `;
};
