import { Paragraph } from '../../Paragraph.js';
import { CTA } from '../../CTA.js';
import { Space } from '../../Space.js';
import { safePhrase, safeValue } from '../../../helpers/safePhrase.js';
import type { QueriesConfig, LinksConfig, RenderType } from '@/types/thursday';

const renderOfferRow = (text: string, align: string, className = 'newsletterParagraph', color?: string): string => {
  return `<tr><td>${Paragraph({
    text,
    insideTable: true,
    tableContainer: true,
    className,
    align,
    spanStyle: color ? `color: ${color};` : undefined,
  })}</td></tr>`;
};

interface RenderOfferRowsOptions {
  headlineIndex?: number;
  /** Colour for the small tracked-out lead-in label above the headline (design: a soft peach on the maroon field). */
  labelColor?: string;
}

const renderOfferRows = (offerItems: string[], align: string, { headlineIndex, labelColor }: RenderOfferRowsOptions): string => {
  let html = '';

  offerItems.forEach((offerItem, i) => {
    // Only the explicitly nominated row reads as the headline (bigger/bolder); everything
    // else stays regular promo copy. Unset => every row renders as before (backward compat).
    const isHeadline = i === headlineIndex;
    // The row directly above the headline is the small tracked-out lead-in label
    // ("GIFT WITH PURCHASE"), which the design sets in its own accent colour.
    const isLeadInToHeadline = headlineIndex !== undefined && i === headlineIndex - 1;

    const className = isHeadline
      ? 'newsletterOfferHeadline'
      : isLeadInToHeadline
        ? 'newsletterOfferLabel'
        : 'newsletterParagraph';

    html += renderOfferRow(offerItem, align, className, isLeadInToHeadline ? labelColor : undefined);
    html += Space({ insideTr: true, className: isLeadInToHeadline ? 'newsletterBottom15px' : 'newsletterBottom35px' });
  });

  return html;
};

interface ResolveOfferRowsProps {
  queries?: QueriesConfig;
  renderType?: RenderType;
  offerTexts?: string[] | null;
}

const resolveOfferRows = ({ queries, renderType, offerTexts }: ResolveOfferRowsProps): string[] => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  const item = (i: number, fallback: string): string => offerTexts?.[i] ?? offerItems[i] ?? fallback;

  if (offerItems.length === 6) {
    if (renderType === 'newsletter') {
      return [item(0, 'Offer Part 1'), item(1, 'Offer Part 2'), item(2, 'Offer Part 3')];
    }

    return [
      item(0, 'Offer Part 1'),
      offerItems[3] ?? 'Code: xxxxx',
      item(1, 'Offer Part 2'),
      offerItems[4] ?? 'Code: xxxxx',
      item(2, 'Offer Part 3'),
      offerItems[5] ?? 'Code: xxxxx',
    ];
  }

  // Render every configured offer row rather than a hardcoded two — sheet tabs differ in how
  // many offer lines they carry (e.g. title + headline + body = 3). Still falls back to the
  // two placeholder rows when nothing is configured at all, as before.
  const rowCount = Math.max(offerItems.length, offerTexts?.length ?? 0, 2);
  return Array.from({ length: rowCount }, (_, i) => item(i, `Offer Part ${i + 1}`));
};

const isSixOffers = (queries?: QueriesConfig): boolean => Array.isArray(queries?.offer) && queries.offer.length === 6;

const renderSixOfferLanding = ({ queries, align }: { queries?: QueriesConfig; align: string }): string => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  const offers = [offerItems[0] ?? 'Offer Part 1', offerItems[1] ?? 'Offer Part 2', offerItems[2] ?? 'Offer Part 3'];
  const codes = [offerItems[3] ?? 'Code: xxxxx', offerItems[4] ?? 'Code: xxxxx', offerItems[5] ?? 'Code: xxxxx'];

  let html = '';
  for (let i = 0; i < offers.length; i++) {
    html += renderOfferRow(offers[i], align);
    html += Space({ insideTr: true, className: 'newsletterBottom20px' });
    html += renderOfferRow(codes[i], align, 'newsletterSemiBoldCode');
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  }

  return html;
};

const renderSixOfferNewsletter = ({ queries, links, t, color, align }: { queries?: QueriesConfig; links?: LinksConfig; t: (key: string) => string; color?: string; align: string }): string => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  const offers = [offerItems[0] ?? 'Offer Part 1', offerItems[1] ?? 'Offer Part 2', offerItems[2] ?? 'Offer Part 3'];

  let html = '';
  for (const offerItem of offers) {
    html += renderOfferRow(offerItem, align);
    html += Space({ insideTr: true, className: 'newsletterBottom25px' });
  }

  html += CTA({
    href: safeValue(links?.TopImageTitle_href, '', 'links.TopImageTitle_href (six-offer newsletter CTA)'),
    text: safePhrase(t, 'Get codes', 'Get codes'),
    color: color || '#000000',
    align,
    insideTr: true,
  });
  html += Space({ insideTr: true, className: 'newsletterBottom20px' });

  return html;
};

interface RenderCodeElementProps {
  renderType?: RenderType;
  queries?: QueriesConfig;
  links?: LinksConfig;
  t: (key: string) => string;
  color?: string;
  align: string;
}

const renderCodeElement = ({ renderType, queries, links, t, color, align }: RenderCodeElementProps): string => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  // Prefer the campaign sheet's own CTA wording (an `offer_cta` tableQuery, e.g. "Get the
  // code") over the generic translated phrase, which many sheets don't carry at all.
  const sheetCtaText = Array.isArray(queries?.offer_cta) ? queries.offer_cta[0] : undefined;

  if (offerItems.length === 6) {
    if (renderType === 'newsletter') {
      return CTA({
        href: safeValue(links?.TopImageTitle_href, '', 'links.TopImageTitle_href (six-offer code CTA)'),
        text: sheetCtaText || safePhrase(t, 'Get codes', 'Get codes'),
        color: color || '#000000',
        align,
        insideTr: true,
        className: 'newsletterCtaCaps',
      });
    }

    return '';
  }

  if (renderType === 'newsletter') {
    return CTA({
      href: safeValue(links?.TopImageTitle_href, '', 'links.TopImageTitle_href (offer code CTA)'),
      text: sheetCtaText || safePhrase(t, 'Get code', 'Get code'),
      color: color || '#000000',
      align,
      insideTr: true,
      className: 'newsletterCtaCaps',
    });
  }

  return renderOfferRow(offerItems[2] ?? 'Code: xxxxx', align);
};

export interface RenderChooseFromRowProps {
  getPhrase: (key: string) => string;
  /** Text colour — pass a dark colour when this renders inside a white `anotherTableForFreebies` table instead of the maroon offer field. */
  color?: string;
  align?: string;
}

/**
 * Renders the "Choose from:" row on its own, so `deal.ts` can place it inside the split
 * white freebies table (`anotherTableForFreebies`) instead of the maroon offer table.
 */
export const renderChooseFromRow = ({ getPhrase, color, align = 'center' }: RenderChooseFromRowProps): string => {
  return `<tr><td>${Paragraph({
    text: safePhrase(getPhrase, 'Choose from:', 'Choose from:'),
    insideTable: true,
    tableContainer: true,
    align,
    className: 'newsletterOfferLabel',
    spanStyle: color ? `color: ${color};` : undefined,
  })}</td></tr>`;
};

export interface RenderOfferSectionProps {
  queries?: QueriesConfig;
  renderType?: RenderType;
  links?: LinksConfig;
  getPhrase: (key: string) => string;
  /** Whether the deal category has products/freebies at all (affects the trailing spacer size). */
  showChooseFrom?: boolean;
  /**
   * Render "Choose from:" inline here, in the maroon offer table. Set to `false` when
   * `deal.ts`'s `anotherTableForFreebies` is active — it renders "Choose from:" itself,
   * inside the split white table, via {@link renderChooseFromRow}.
   */
  chooseFromInline?: boolean;
  /** Per-country offer text overrides, pre-resolved by `deal.ts`. */
  offerTexts?: string[] | null;
  color?: string;
  /** Text alignment for all offer-copy rows. Defaults to `'left'`. */
  align?: string;
  /** Which offer row renders as the big/bold headline. Unset => every row renders as plain copy (previous behaviour). */
  offerHeadlineIndex?: number;
  /** Colour for the tracked-out lead-in label above the headline. */
  offerLabelColor?: string;
  /** Colour for the validity/date row. */
  offerDateColor?: string;
}

/** Renders the offer/voucher copy + code CTA for `type: 'deal'` categories (see `deal.ts`). */
export const renderOfferSection = ({ queries, renderType, links, getPhrase, showChooseFrom = true, chooseFromInline = true, offerTexts, color, align = 'left', offerHeadlineIndex, offerLabelColor, offerDateColor }: RenderOfferSectionProps): string => {
  const t = getPhrase;
  const hasSixOffers = isSixOffers(queries);
  const offerItems = resolveOfferRows({ queries, renderType, offerTexts });
  let html = '';

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  if (hasSixOffers && renderType === 'landing') {
    html += renderSixOfferLanding({ queries, align });
  } else if (hasSixOffers && renderType === 'newsletter') {
    html += renderSixOfferNewsletter({ queries, links, t, color, align });
  } else {
    html += renderOfferRows(offerItems, align, { headlineIndex: offerHeadlineIndex, labelColor: offerLabelColor });
    html += renderCodeElement({ renderType, queries, links, t, color, align });
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  }

  html += renderOfferRow(queries?.offer_date?.[0] ?? 'Offer Date', align, 'newsletterOfferDate', offerDateColor);
  html += Space({ insideTr: true, className: showChooseFrom ? 'newsletterBottom35px' : 'newsletterBottom0px' });

  if (showChooseFrom && chooseFromInline) {
    html += renderChooseFromRow({ getPhrase: t, color, align });
    html += Space({ insideTr: true, className: 'newsletterBottom25px' });
  } else if (!showChooseFrom) {
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  }

  return html;
};
