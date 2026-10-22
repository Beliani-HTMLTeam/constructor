import { StandardPopup } from './parts.js';
 
/**
 * Buy4Pay3Popup – 3. Buy 4 and pay only for 3
 * Buy 4 and pay only for 3 / when you spend min. xx / Code: XXX
 *
 * Props:
 *   title    – 'Buy 4 and<br />pay only for 3'
 *   subtitle – 'when you spend min. £200'
 *   code     – 'Code: XXX'
 *   tiers    – pyramid version, each line with its own code:
 *              [{ text: '<b>Buy 2</b> products and get <b>25% off</b><br />the cheapest product',
 *                 mobileText: '<b>Buy 2</b> and get <b>25% off</b>', code: 'Code: XXX' }, ...]
 *
 * Common props:
 *   id           – popup id, used by AdventPopup.open(id) (e.g. the door number)
 *   imageDesktop – background of the whole popup on desktop (967 x 480 design, export ~1934 x 960)
 *   imageMobile  – background on mobile (257 x 460 design, export ~514 x 920, keep the top free for text)
 *   textSide     – 'right' (default) or 'left': where the text sits on desktop
 *   mobile       – optional mobile-only texts: { headline, pre, title, subtitle, code } ('' hides it on mobile)
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
 