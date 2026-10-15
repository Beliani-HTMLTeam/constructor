import { StandardPopup } from './parts.js';

/**
 * SpecialDealPopup – One day. One special deal.
 * headline / Today only: / 20% OFF / selected Christmas decor / Shop now
 *
 * Props:
 *   headline – 'One day.<br />One special deal.'
 *   pre      – 'Today only:'
 *   title    – '20% OFF'
 *   subtitle – 'selected Christmas decor'
 *   link     – shows the "Shop now" link (texts.shopNow) – no "Only Today" line
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
 *   SpecialDealPopup({ id: 8, headline: 'One day.<br />One special deal.', pre: 'Today only:', title: '20% OFF', subtitle: 'selected Christmas decor', link: 'https://www.beliani.co.uk/...' })
 */
export function SpecialDealPopup(props) {
  return StandardPopup('special', props, { onlyToday: false, cta: 'shopNow' });
}