import { PercentOffPopup } from './percentoff.js';
import { FreeGiftPopup } from './freegift.js';
import { Buy4Pay3Popup } from './buy4pay3.js';
import { CashbackPopup } from './cashback.js';
import { UpToPopup } from './upto.js';
import { DiscountPopup } from './discount.js';
import { SpecialDealPopup } from './special.js';
 
export { PercentOffPopup, FreeGiftPopup, Buy4Pay3Popup, CashbackPopup, UpToPopup, DiscountPopup, SpecialDealPopup };
export { AdventPopupShell, StandardPopup, PopupText, PopupCodes, PopupFooter, AdventConditionsBox, DEFAULT_POPUP_TEXTS } from './parts.js';
export { AdventPopupStyles } from './styles.js';
export { AdventPopupScript } from './script.js';
export { AdventConfettiScript } from './confetti.js';
export { popupsFromQueries, popupTextsFromQueries, breakBeforeNumber, DEFAULT_POPUP_FIELDS, POPUP_TEXT_QUERIES } from './fromQueries.js';

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