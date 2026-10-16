import { StandardPopup } from './parts.js';
 
/**
 * UpToPopup – 5. Up to XX%
 * Christmas Accessories / Up to XX% OFF (usually linked to the category)
 *
 * Props:
 *   pre      – category: 'Christmas Accessories'
 *   title    – 'Up to<br />50% OFF'
 *   link     – category URL
 *
 * Common props:
 *   id           – popup id, used by AdventPopup.open(id) (e.g. the door number)
 *   imageDesktop – right side on desktop (plain rectangle ~1050 x 960 px)
 *   imageMobile  – top on mobile (plain rectangle ~600 x 560 px)
 *   alt          – image alt text
 *   link         – image + texts become a link (new tab)
 *   conditions   – text shown under the calendar after "See conditions"
 *   onlyToday    – false hides the "Only Today" line
 *   cta          – optional underlined link text (needs link)
 *   texts        – translated shared texts (see DEFAULT_POPUP_TEXTS)
 *
 * Example:
 *   UpToPopup({ id: 1, pre: 'Textiles', title: 'Up to<br />50% OFF', link: 'https://www.beliani.co.uk/textiles/', conditions: '...' })
 */
export function UpToPopup(props) {
  return StandardPopup('upto', props, {});
}