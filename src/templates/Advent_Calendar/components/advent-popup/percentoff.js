import { StandardPopup } from './parts.js';
 
/**
 * PercentOffPopup – 1. XX% OFF
 * Extra / 10% OFF / when you spend £500 / Code: XXX
 *
 * Props:
 *   pre      – small line above:  'Extra'
 *   title    – huge deal line:    '10% OFF'
 *   subtitle – 'when you spend £500'
 *   code     – 'Code: XXX' (or an array)
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
 *   PercentOffPopup({ id: 4, pre: 'Extra', title: '10% OFF', subtitle: 'when you spend £500', code: 'Code: 04advent26uk', conditions: '...' })
 */
export function PercentOffPopup(props) {
  return StandardPopup('percent', props, {});
}