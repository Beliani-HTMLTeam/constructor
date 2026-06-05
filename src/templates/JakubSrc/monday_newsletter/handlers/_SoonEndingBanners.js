import { Space } from '../components/Space.js';
import { SoonEndingBanner } from '../components/SoonEndingBanner.js';
import { Line } from '../components/Line.js';

export const SoonEndingBannersHandler = ({ links, shopLimitedTimeDeals, country }) => {
  const countrySlug = String(country ?? '').toLowerCase();

  const banner1Href = links?.Banner_1_overrides?.[countrySlug] ?? links?.Banner_1;
  const banner1Src = links?.Banner_1_Image_overrides?.[countrySlug] ?? links?.Banner_1_Image;
  const banner2Href = links?.Banner_2_overrides?.[countrySlug] ?? links?.Banner_2;
  const banner2Src = links?.Banner_2_Image_overrides?.[countrySlug] ?? links?.Banner_2_Image;

  return `
    <!-- Soon Ending Banners -->
    <!--[if mso]><table align="center" border="0" cellspacing="0" cellpadding="0" width="650"><tr><td><![endif]-->
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="newsletterContainer" style="margin: 0 auto; max-width: 650px; color: #000000; background-color:#ffffff;" id="newsletter">
      ${Line({ insideTr: true })}
      ${Space({ className: 'newsletterBottom35px', insideTr: true })}

      <tr>
        <td align="left">
          <span class="newsletterFooterTitle">${shopLimitedTimeDeals}</span>
        </td>
      </tr>

      ${Space({ className: 'newsletterBottom35px', insideTr: true })}

      ${SoonEndingBanner({
        href: banner1Href,
        src: banner1Src,
        orderingId: '1',
      })}

      ${Space({ className: 'newsletterBottom20px', insideTr: true })}

      ${SoonEndingBanner({
        href: banner2Href,
        src: banner2Src,
        orderingId: '2',
      })}

      ${Space({ className: 'newsletterBottom35px', insideTr: true })}
    </table>
    <!--[if mso]></td></tr></table><![endif]-->
  `;
};
