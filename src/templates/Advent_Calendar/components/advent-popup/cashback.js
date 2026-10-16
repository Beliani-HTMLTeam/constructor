import { StandardPopup } from './parts.js';
 
/**
 * CashbackPopup – 4. XX€ Cashback
 * 50€ Cashback / when you spend min. 150€ / Code: XXX
 *
 * Props:
 *   title    – '£50<br />Cashback'
 *   subtitle – 'when you spend min. £150'
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
 *   CashbackPopup({ id: 3, title: '£50<br />Cashback', subtitle: 'when you spend min. £150', code: 'Code: 03advent26uk', conditions: '...' })
 */
export function CashbackPopup(props) {
  return StandardPopup('deal', props, {});
}