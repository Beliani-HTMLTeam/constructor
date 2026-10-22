// ============================================================
// Advent popup components
//
// Usage on any page:
//   ${AdventPopupStyles()}                         – CSS (once)
//   ${AdventPopups({ popups, texts })}             – all popup templates
//   ${AdventConditionsBox()}                       – where "See conditions" text appears
//   ${AdventPopupScript()}                         – runtime (once, after the templates)
//   ${AdventConfettiScript()}                      – optional star confetti (window.AdventConfetti)
//   then in the browser: window.AdventPopup.open(id)
//
// Single popup:  ${PercentOffPopup({ id: 4, pre: 'Extra', title: '10% OFF', ... })}
// Texts from the sheet queries: popupsFromQueries / popupTextsFromQueries (fromQueries.js)
// ============================================================
import { PercentOffPopup } from './PercentOffPopup.js';
import { FreeGiftPopup } from './FreeGiftPopup.js';
import { Buy4Pay3Popup } from './Buy4Pay3Popup.js';
import { CashbackPopup } from './CashbackPopup.js';
import { UpToPopup } from './UpToPopup.js';
import { DiscountPopup } from './DiscountPopup.js';
import { SpecialDealPopup } from './SpecialDealPopup.js';
 
export { PercentOffPopup, FreeGiftPopup, Buy4Pay3Popup, CashbackPopup, UpToPopup, DiscountPopup, SpecialDealPopup };
export { AdventPopupShell, StandardPopup, PopupText, PopupCodes, PopupTiers, PopupFooter, AdventConditionsBox, DEFAULT_POPUP_TEXTS } from './parts.js';
export { AdventPopupStyles } from './styles.js';
export { AdventPopupScript } from './script.js';
export { AdventConfettiScript } from './confetti.js';
export { popupsFromQueries, popupTextsFromQueries, breakBeforeNumber, DEFAULT_POPUP_FIELDS, POPUP_TEXT_QUERIES } from './fromQueries.js';
 
// type name -> component
export const ADVENT_POPUP_TYPES = {
  percent: PercentOffPopup,
  free: FreeGiftPopup,
  buy4pay3: Buy4Pay3Popup,
  cashback: CashbackPopup,
  upto: UpToPopup,
  discount: DiscountPopup,
  special: SpecialDealPopup,
};
 
// Render one popup from a config object with a `type` field
export function AdventPopup(props) {
  const Component = ADVENT_POPUP_TYPES[props.type];
  if (!Component) {
    console.warn(`AdventPopup: unknown type "${props.type}" (popup ${props.id})`);
    return '';
  }
  return Component(props);
}
 
// Render many popups from { id: config } – e.g. one per calendar door
export function AdventPopups({ popups = {}, texts } = {}) {
  return Object.keys(popups)
    .map((id) => AdventPopup({ id, texts, ...popups[id] }))
    .join('');
}