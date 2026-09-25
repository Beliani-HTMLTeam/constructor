import { ImageWithLink } from '../ImageWithLink';

export const FreebiesItem = ({
  freebie,
  color,
  background,
}) => {
  if (!freebie) return '';

  const { href, src, name } = freebie;

  return `
    <td style="vertical-align: top; width: 33.33%; padding: 0 5px;">
      <table cellspacing="0" cellpadding="0" width="100%">
        <tbody>
          <tr>
            <td align="center">
              ${ImageWithLink({
                href: href || '#',
                src: src,
                alt: name || 'Freebie',
                insideTr: true,
              })}
            </td>
          </tr>
          ${name ? `
            <tr>
              <td align="center" style="color: ${color}; padding-top: 10px;">
                <span class="newsletterProductTitleFreebie">${name}</span>
              </td>
            </tr>
          ` : ''}
        </tbody>
      </table>
    </td>
  `;
};