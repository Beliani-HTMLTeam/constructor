import { Space } from '../components/Space.js';
import { SoonEndingBanner } from '../components/SoonEndingBanner.js';
import { Line } from '../components/Line.js';

export const SoonEndingBannersHandler = ({ links, shopLimitedTimeDeals, country }) => {

	if (["HR", "SI"].includes(country)) {
		return ``;
	}

	return `
    <!-- Soon Ending Banners -->
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
        href: links?.Banner_1,
        src: links?.Banner_1_Image,
        orderingId: '1',
      })}

      ${Space({ className: 'newsletterBottom20px', insideTr: true })}

      ${SoonEndingBanner({
        href: links?.Banner_2,
        src: links?.Banner_2_Image,
        orderingId: '2',
      })}

      ${Space({ className: 'newsletterBottom35px', insideTr: true })}
    </table>
  `;
};
