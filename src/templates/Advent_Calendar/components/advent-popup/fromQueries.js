// ============================================================
// Build the popup texts from the campaign `queries`
// (Google Sheet table '2026::Advent_calendar_popups').
//
// The code keeps only what does not change per country:
// type, images, link, which sheet rows go where.
// All visible texts come from the sheet.
//
// tableQueries example:
//   { tableRange: '2',    name: 'SeeConditions', tableName: '2026::Advent_calendar_popups' },
//   { tableRange: '3',    name: 'OnlyToday',     tableName: '2026::Advent_calendar_popups' },
//   { tableRange: '4:5',  name: 'Popup1',        tableName: '2026::Advent_calendar_popups' },
//   { tableRange: '6:10', name: 'Popup2',        tableName: '2026::Advent_calendar_popups' },
//
// -> queries = {
//   SeeConditions: ['See conditions'],
//   OnlyToday: ['Only Today'],
//   Popup1: ['Christmas Decorations', 'Up to 50% OFF'],
//   Popup2: ['Extra', '10% OFF', 'when you spend €500', 'Code: XXX', 'Voucher ID: ...'],
// }
// ============================================================
import { DEFAULT_POPUP_TEXTS } from './parts.js';

// Shared texts: query name -> popup text key.
// Missing queries fall back to DEFAULT_POPUP_TEXTS.
export const POPUP_TEXT_QUERIES = {
  seeConditions: 'SeeConditions',
  onlyToday: 'OnlyToday',
  shopNow: 'ShopNow',                 // optional row (special popup CTA)
  conditionsTitle: 'ConditionsTitle', // optional row
  copied: 'CodeCopied',               // optional row (copy notification)
};

// Default meaning of the sheet rows per popup type (in row order).
// null = row is skipped (e.g. "Voucher ID: ..." note).
// Override per door with `fields: [...]`.
// Field names: headline, pre, title, subtitle, code, conditions, link, cta,
//              and mobile.<name> for a mobile-only version (e.g. 'mobile.title').
export const DEFAULT_POPUP_FIELDS = {
  percent:  ['pre', 'title', 'subtitle', 'code', null],
  upto:     ['pre', 'title'],
  free:     ['title', 'subtitle', 'code', null],
  buy4pay3: ['pre', 'title', 'subtitle', 'code', null],
  cashback: ['title', 'subtitle', 'code', null],
  discount: ['pre', 'title', 'subtitle', 'code', null],
  special:  ['headline', 'pre', 'title', 'subtitle'],
};

// One sheet cell -> trimmed string ('' when empty)
function cell(v) {
  if (Array.isArray(v)) v = v[0];
  return v == null ? '' : String(v).trim();
}

// Line breaks typed in the sheet cell (Alt+Enter) -> <br />
function nl2br(s) {
  return s.replace(/\r?\n/g, '<br />');
}

// "Up to 50% OFF" -> "Up to<br />50% OFF" (break before the first number).
// Skipped when the text already has a line break or starts with the number.
export function breakBeforeNumber(s) {
  if (!s || /<br\s*\/?>/i.test(s)) return s;
  return s.replace(/^(.*?\S)\s+([-–]?\s?[£€$]?\s?\d)/, '$1<br />$2');
}

export function popupTextsFromQueries(queries = {}, extra = {}) {
  const texts = { ...DEFAULT_POPUP_TEXTS };
  Object.keys(POPUP_TEXT_QUERIES).forEach((key) => {
    const value = cell((queries[POPUP_TEXT_QUERIES[key]] || [])[0]);
    if (value) texts[key] = value;
  });
  return { ...texts, ...extra };
}

// doors = {
//   1: { type: 'upto', imageDesktop, imageMobile, link },              // reads queries.Popup1
//   2: { type: 'percent', query: 'Popup2', fields: [...], ... },       // explicit
// }
// Everything except `query`, `fields`, `breakTitle` is passed to the popup as is
// (type, images, link, textSide, onlyToday, conditions, ...).
// Doors whose query is missing/empty are skipped (no popup for that door).
export function popupsFromQueries(queries = {}, doors = {}) {
  const popups = {};

  Object.keys(doors).forEach((door) => {
    const { query = `Popup${door}`, fields, breakTitle, ...config } = doors[door];
    const rows = queries[query];
    if (!Array.isArray(rows) || !rows.some((r) => cell(r))) {
      console.warn(`Advent popup ${door}: query "${query}" is missing or empty – popup skipped`);
      return;
    }

    const map = fields || DEFAULT_POPUP_FIELDS[config.type] || DEFAULT_POPUP_FIELDS.percent;
    const popup = { ...config };
    const mobile = { ...(config.mobile || {}) };

    map.forEach((field, i) => {
      if (!field) return;
      const value = nl2br(cell(rows[i]));
      if (!value) return;
      if (field.indexOf('mobile.') === 0) mobile[field.slice(7)] = value;
      else popup[field] = value;
    });

    // 'upto' titles get the line break before the number by default
    const doBreak = breakTitle !== undefined ? breakTitle : config.type === 'upto';
    if (doBreak && popup.title) popup.title = breakBeforeNumber(popup.title);

    if (Object.keys(mobile).length) popup.mobile = mobile;
    popups[door] = popup;
  });

  return popups;
}