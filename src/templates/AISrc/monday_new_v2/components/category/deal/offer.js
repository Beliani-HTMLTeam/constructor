import { Paragraph } from '../../Paragraph.js';
import { CTA } from '../../CTA.js';
import { Space } from '../../Space.js';
import { CopyCodeCTA, CopyCodeWebNotification } from '../../CopyCodeCTA.js';

const renderOfferRow = (text, className = 'newsletterParagraph', offerBg = '', color = '', container = '', Zz) => {
  const style = offerBg ? `background-color: ${offerBg};` : '';
  return `<tr><td ${style ? `style="${style}"` : ''}>${Paragraph({
    text,
    insideTable: true,
    tableContainer: true,
    containerClass: container,
    className,
    align: 'center',
    color: color,
  })}</td></tr>`;
};

const renderOfferRows = (offerItems, offerBg = '', color = '') => {
  let html = '';

  for (const offerItem of offerItems) {
    const idx = offerItems.indexOf(offerItem);
    html += renderOfferRow(offerItem, idx === 0 ? 'newsletterOfferTitle' : 'newsletterOfferParagraph', offerBg, idx === 0 ? '#750000' : color, idx === 0 ? 'newsletterContainer' : 'newsletterContainer40px',);
    html += Space({ insideTr: true, className: idx === 0 ? 'newsletterBottom15px' : 'newsletterBottom25px', bg: offerBg });
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

const renderSixOfferLanding = ({ queries, showCopyCode = false, showCopyCodeWeb = false, copyCodeColor, copyCodeLabel, variant = 'underline', bgColor, textColor }) => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];
  const offers = [offerItems[0] ?? 'Offer Part 1', offerItems[1] ?? 'Offer Part 2', offerItems[2] ?? 'Offer Part 3'];
  const codes = [offerItems[3] ?? 'Code: xxxxx', offerItems[4] ?? 'Code: xxxxx', offerItems[5] ?? 'Code: xxxxx'];

  let html = '';
  for (let i = 0; i < offers.length; i++) {
    html += renderOfferRow(offers[i]);
    html += Space({ insideTr: true, className: 'newsletterBottom20px' });
    if (showCopyCodeWeb) {
      const codeValue = codes[i].split(/:\s+/).slice(1).join(': ').trim() || codes[i];
      html += CopyCodeWebNotification({ text: codes[i], codeValue, color: copyCodeColor, label: copyCodeLabel });
    } else if (showCopyCode) {
      const codeValue = codes[i].split(/:\s+/).slice(1).join(': ').trim() || codes[i];
      html += CopyCodeCTA({ text: codes[i], codeValue, color: copyCodeColor, label: copyCodeLabel, variant, bgColor, textColor });
    } else {
      html += renderOfferRow(codes[i]);
    }
    html += Space({ insideTr: true, className: 'newsletterBottom35px' });
  }

  return html;
};

const renderSixOfferNewsletter = ({ queries, links, t, variant = 'underline', bgColor, textColor }) => {
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
    variant: variant,
    bgColor: bgColor,
    textColor: textColor,
  });
  html += Space({ insideTr: true, className: 'newsletterBottom20px' });

  return html;
};

const renderCodeElement = ({ renderType, queries, links, t, showCopyCode = false, showCopyCodeWeb = false, copyCodeColor, copyCodeLabel, offerBg = '', variant = 'underline', bgColor, textColor }) => {
  const offerItems = Array.isArray(queries?.offer) ? queries.offer : [];

  if (offerItems.length === 6) {
    if (renderType === 'newsletter') {
      return CTA({
        href: links?.TopImageTitle_href,
        text: t('Get codes'),
        color: '#000000',
        align: 'center',
        insideTr: true,
        bg: offerBg,
        variant: variant,
        bgColor: bgColor,
        textColor: textColor,
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
      bg: offerBg,
      variant: variant,
      bgColor: bgColor,
      textColor: textColor,
    });
  }

  const codeText = offerItems[2] ?? 'Code: xxxxx';
  if (showCopyCodeWeb) {
    const codeValue = codeText.split(/:\s+/).slice(1).join(': ').trim() || codeText;
    return CopyCodeWebNotification({ text: codeText, codeValue, color: copyCodeColor, label: copyCodeLabel });
  }
  if (showCopyCode) {
    const codeValue = codeText.split(/:\s+/).slice(1).join(': ').trim() || codeText;
    return CopyCodeCTA({ text: codeText, codeValue, color: copyCodeColor, label: copyCodeLabel });
  }
  return renderOfferRow(codeText);
};

export const renderOfferSection = ({ queries, renderType, links, getPhrase, showChooseFrom = true, showCopyCode = false, showCopyCodeWeb = false, copyCodeColor, offerTexts, offerBg = '', cta = {} }) => {
  const t = getPhrase;
  const copyCodeLabel = getPhrase?.('Copy code') || 'Code copied';
  const hasSixOffers = isSixOffers(queries);
  const offerItems = resolveOfferRows({ queries, renderType, offerTexts });
  let html = '';
  html += Space({ insideTr: true, className: 'newsletterBottom35px', bg: offerBg });
  if (hasSixOffers && renderType === 'landing') {
    html += renderSixOfferLanding({ queries, showCopyCode, showCopyCodeWeb, copyCodeColor, copyCodeLabel, variant: cta?.variant ?? 'underline', bgColor: cta?.bgColor, textColor: cta?.textColor });
  } else if (hasSixOffers && renderType === 'newsletter') {
    html += renderSixOfferNewsletter({ queries, links, t, variant: cta?.variant ?? 'underline', bgColor: cta?.bgColor, textColor: cta?.textColor });
  } else {
    html += renderOfferRows(offerItems, offerBg, '#2B1210');
    html += renderCodeElement({ renderType, queries, links, t, showCopyCode, showCopyCodeWeb, copyCodeColor, copyCodeLabel, offerBg, variant: cta?.variant ?? 'underline', bgColor: cta?.bgColor, textColor: cta?.textColor });
    html += Space({ insideTr: true, className: 'newsletterBottom25px', bg: offerBg });
  }

  html += renderOfferRow(queries?.offer_date?.[0] ?? 'Offer Date', 'newsletterOfferDate', offerBg, '#000000');
  html += Space({ insideTr: true, className: showChooseFrom ? 'newsletterBottom15px' : 'newsletterBottom0px', bg: offerBg });

  if (showChooseFrom) {
    html += renderOfferRow(t('Choose from:'), 'newsletterOfferChooseFrom', offerBg, '#750000');
    html += Space({ insideTr: true, className: 'newsletterBottom35px', bg: offerBg });
  } else {
    html += Space({ insideTr: true, className: 'newsletterBottom35px', bg: offerBg });
  }

  return html;
};
