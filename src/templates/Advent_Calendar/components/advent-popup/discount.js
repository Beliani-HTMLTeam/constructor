import { StandardPopup } from './parts.js';
 
/**
 * DiscountPopup – 6. 10€ Discount
 * 10€ Discount / when you spend min. 100€ / Code: XXX
 *
 * Props:
 *   title    – '£10<br />Discount'
 *   subtitle – 'when you spend min. £100'
 *   code     – 'Code: XXX'
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
 *   DiscountPopup({ id: 6, title: '£10<br />Discount', subtitle: 'when you spend min. £100', code: 'Code: 06advent26uk', conditions: '...' })
 */
export function DiscountPopup(props) {
  return StandardPopup('deal', props, {});
}