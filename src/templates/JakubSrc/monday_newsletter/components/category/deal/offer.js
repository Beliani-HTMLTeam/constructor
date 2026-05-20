import { Paragraph } from '../../Paragraph.js';
import { CTA } from '../../CTA.js';
import { Space } from '../../Space.js';
import { CopyCodeCTA, CopyCodeWebNotification } from '../../CopyCodeCTA.js';

const renderOfferRow = (text, className = 'newsletterParagraph') => {
  return `<tr><td>${Paragraph({
    text,
    insideTable: true,
    tableContainer: true,
    className,
    align: 'center',
  })}</td></tr>`;
};

const renderOfferRows = (offerItems) => {
  let html = '';

  for (const offerItem of offerItems) {
    html += renderOfferRow(offerItem);
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  }

  return html;
};

const resolveOfferRows = ({ queries, renderType, offerTexts }) => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  const item = (i, fallback) => offerTexts?.[i] ?? offerItems[i] ?? fallback;

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

  return [item(0, 'Offer Part 1'), item(1, 'Offer Part 2')];
};

const isSixOffers = (queries) => Array.isArray(queries?.offer) && queries.offer.length === 6;

const renderSixOfferLanding = ({ queries, showCopyCode = false, showCopyCodeWeb = false, copyCodeColor }) => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  const offers = [offerItems[0] ?? 'Offer Part 1', offerItems[1] ?? 'Offer Part 2', offerItems[2] ?? 'Offer Part 3'];
  const codes = [offerItems[3] ?? 'Code: xxxxx', offerItems[4] ?? 'Code: xxxxx', offerItems[5] ?? 'Code: xxxxx'];

  let html = '';
  for (let i = 0; i < offers.length; i++) {
    html += renderOfferRow(offers[i]);
    html += Space({ insideTr: true, className: 'newsletterBottom20px' });
    if (showCopyCodeWeb) {
      const codeValue = codes[i].split(/:\s+/).slice(1).join(': ').trim() || codes[i];
      html += CopyCodeWebNotification({ text: codes[i], codeValue, color: copyCodeColor });
    } else if (showCopyCode) {
      const codeValue = codes[i].split(/:\s+/).slice(1).join(': ').trim() || codes[i];
      html += CopyCodeCTA({ text: codes[i], codeValue, color: copyCodeColor });
    } else {
      html += renderOfferRow(codes[i]);
    }
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  }

  return html;
};

const renderSixOfferNewsletter = ({ queries, links, t }) => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  const offers = [offerItems[0] ?? 'Offer Part 1', offerItems[1] ?? 'Offer Part 2', offerItems[2] ?? 'Offer Part 3'];

  let html = '';
  for (const offerItem of offers) {
    html += renderOfferRow(offerItem);
    html += Space({ insideTr: true, className: 'newsletterBottom25px' });
  }

  html += CTA({
    href: links?.TopImageTitle_href,
    text: t('Get codes'),
    color: '#000000',
    align: 'center',
    insideTr: true,
  });
  html += Space({ insideTr: true, className: 'newsletterBottom20px' });

  return html;
};

const renderCodeElement = ({ renderType, queries, links, t, showCopyCode = false, showCopyCodeWeb = false, copyCodeColor }) => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];

  if (offerItems.length === 6) {
    if (renderType === 'newsletter') {
      return CTA({
        href: links?.TopImageTitle_href,
        text: t('Get codes'),
        color: '#000000',
        align: 'center',
        insideTr: true,
      });
    }

    return '';
  }

  if (renderType === 'newsletter') {
    return CTA({
      href: links?.TopImageTitle_href,
      text: t('Get code'),
      color: '#000000',
      align: 'center',
      insideTr: true,
    });
  }

  const codeText = offerItems[2] ?? 'Code: xxxxx';
  if (showCopyCodeWeb) {
    const codeValue = codeText.split(/:\s+/).slice(1).join(': ').trim() || codeText;
    return CopyCodeWebNotification({ text: codeText, codeValue, color: copyCodeColor });
  }
  if (showCopyCode) {
    const codeValue = codeText.split(/:\s+/).slice(1).join(': ').trim() || codeText;
    return CopyCodeCTA({ text: codeText, codeValue, color: copyCodeColor });
  }
  return renderOfferRow(codeText);
};

export const renderOfferSection = ({ queries, renderType, links, getPhrase, showChooseFrom = true, showCopyCode = false, showCopyCodeWeb = false, copyCodeColor, offerTexts }) => {
  const t = getPhrase;
  const hasSixOffers = isSixOffers(queries);
  const offerItems = resolveOfferRows({ queries, renderType, offerTexts });
  let html = '';

  html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  if (hasSixOffers && renderType === 'landing') {
    html += renderSixOfferLanding({ queries, showCopyCode, showCopyCodeWeb, copyCodeColor });
  } else if (hasSixOffers && renderType === 'newsletter') {
    html += renderSixOfferNewsletter({ queries, links, t });
  } else {
    html += renderOfferRows(offerItems);
    html += renderCodeElement({ renderType, queries, links, t, showCopyCode, showCopyCodeWeb, copyCodeColor });
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  }

  html += renderOfferRow(queries?.offer_date?.[0] ?? 'Offer Date');
  html += Space({ insideTr: true, className: showChooseFrom ? 'newsletterBottom35px' : 'newsletterBottom0px' });

  if (showChooseFrom) {
    html += renderOfferRow(t('Choose from:'));
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  } else {
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  }

  return html;
};
