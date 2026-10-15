import { StandardPopup } from './parts.js';
 
/**
 * FreeGiftPopup – 2. FREE
 * Free XXX / when you spend min. xx / Code: XXX
 *
 * Props:
 *   title    – 'Free table lamp'
 *   subtitle – 'when you spend min. £300'
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
 *   FreeGiftPopup({ id: 2, title: 'Free table lamp', subtitle: 'when you spend min. £300', code: 'Code: 02advent26uk', conditions: '...' })
 */
export function FreeGiftPopup(props) {
  return StandardPopup('deal', props, {});
}