import { StandardPopup } from './parts.js';
 
/**
 * Buy4Pay3Popup – 3. Buy 4 and pay only for 3
 * Buy 4 and pay only for 3 / when you spend min. xx / Code: XXX
 *
 * Props:
 *   title    – 'Buy 4 and<br />pay only for 3'
 *   subtitle – 'when you spend min. £200'
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
 *   Buy4Pay3Popup({ id: 5, title: 'Buy 4 and<br />pay only for 3', subtitle: 'when you spend min. £200', code: 'Code: 05advent26uk', conditions: '...' })
 */
export function Buy4Pay3Popup(props) {
  return StandardPopup('deal', props, {});
}