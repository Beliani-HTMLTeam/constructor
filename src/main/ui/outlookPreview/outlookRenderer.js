// Approximation of classic (Word-based) Outlook rendering for a browser iframe.
// previewDocument(html, classic, loadImages) returns a sandbox-safe HTML string:
//   classic = true  → resolves [if mso] comments as Outlook 2016+, strips CSS
//                     Word ignores, renders VML buttons, constrains image widths
//   classic = false → plain browser rendering with width media queries dropped
//                     (so a narrow preview pane doesn't switch to mobile)

const OUTLOOK_VIEWPORT_WIDTH = 650;

const blockedProperties =
  /^(?:--|align-(?:items|content|self)$|aspect-ratio$|background-image$|border-(?:.*-)?radius$|box-(?:shadow|sizing)$|column-|container|filter$|flex|float$|gap$|grid|inset|justify-|(?:min-width|min-height|max-height)$|object-|opacity$|overflow|position$|(?:row|column)-gap$|transform|transition|animation|z-index$)/i;
const modernValue =
  /(?:\b(?:var|calc|min|max|clamp|url|image-set)\s*\(|\b(?:inline-flex|inline-grid|flex|grid|contents|flow-root)\b)/i;

function previewPolicy(loadImages) {
  const imageSources = loadImages ? 'data: https:' : 'data:';
  return `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src ${imageSources}; base-uri 'none'; form-action 'none'"><meta name="referrer" content="no-referrer">`;
}

function matchesMso(condition) {
  const version = 16;
  const tokens = condition.toLowerCase().match(/\d+|[a-z][a-z0-9]*|\|\||&&|[^\s]/g) ?? [];
  let current = 0;

  function consume(...choices) {
    if (!choices.includes(tokens[current])) return false;
    current++;
    return true;
  }

  function expression() {
    let result = conjunction();
    while (consume('|', '||')) {
      const next = conjunction();
      result = result || next;
    }
    return result;
  }

  function conjunction() {
    let result = term();
    while (consume('&', '&&')) {
      const next = term();
      result = result && next;
    }
    return result;
  }

  function term() {
    const negated = consume('!');
    if (consume('(')) {
      const result = expression();
      if (!consume(')')) throw new SyntaxError('Unclosed MSO condition');
      return negated ? !result : result;
    }
    const parts = [];
    while (/^[a-z0-9]+$/.test(tokens[current] ?? '')) parts.push(tokens[current++]);
    if (!parts.length) throw new SyntaxError('Missing MSO condition');
    const result = compare(parts.join(' '));
    return negated ? !result : result;
  }

  function compare(value) {
    if (value === 'mso') return true;
    const match = /^(?:(gte|lte|gt|lt)\s+)?mso\s+(\d+)$/.exec(value);
    if (!match) return false;
    const target = Number(match[2]);
    switch (match[1]) {
      case 'gte':
        return version >= target;
      case 'lte':
        return version <= target;
      case 'gt':
        return version > target;
      case 'lt':
        return version < target;
      default:
        return version === target;
    }
  }

  try {
    const result = expression();
    return current === tokens.length && result;
  } catch (error) {
    if (error instanceof SyntaxError) return false;
    throw error;
  }
}

function resolveConditionalComments(html) {
  return html.replace(
    /<!--\s*\[if\s+([^\]]+)\]>(?:\s*<!--(?:\s*--)?>)?([\s\S]*?)(?:<!--)?<!\[endif\]\s*-->/gi,
    (_, condition, content) => (matchesMso(condition) ? content : '')
  );
}

function preserveMsoDeclarations(css) {
  // CSSOM discards unknown Office properties. Carry these through as custom properties.
  return css.replace(
    /(^|[;{])([\t\n\r ]*)(mso-(?:hide|padding-alt|text-raise|table-lspace|table-rspace))(?=\s*:)/gi,
    (_, boundary, space, name) => boundary + space + '--' + name.toLowerCase()
  );
}

function filterDeclarations(style) {
  const equivalents = {
    'mso-padding-alt': 'padding',
    'mso-text-raise': 'vertical-align',
    'mso-table-lspace': 'margin-left',
    'mso-table-rspace': 'margin-right',
  };
  const overrides = [];
  for (const property of Array.from(style)) {
    const value = style.getPropertyValue(property);
    if (property === '--mso-hide' && value.trim().toLowerCase() === 'all') {
      overrides.push(['display', 'none', 'important']);
    } else if (
      property.startsWith('--mso-') &&
      Object.prototype.hasOwnProperty.call(equivalents, property.slice(2)) &&
      !modernValue.test(value)
    ) {
      overrides.push([equivalents[property.slice(2)], value, style.getPropertyPriority(property)]);
    }
    if (blockedProperties.test(property) || modernValue.test(value)) style.removeProperty(property);
  }
  for (const translation of overrides) style.setProperty(...translation);
}

function filterStylesheet(source) {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(preserveMsoDeclarations(source));
  return Array.from(sheet.cssRules)
    .filter((rule) => rule.type === CSSRule.STYLE_RULE)
    .map((rule) => {
      filterDeclarations(rule.style);
      return rule.cssText;
    })
    .join('\n');
}

function desktopStylesheet(source) {
  // The comparison pane is narrower than a desktop Outlook message window.
  // Keep viewport-width breakpoints from switching desktop comparisons to mobile.
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(source);
  return Array.from(sheet.cssRules)
    .filter((rule) => rule.type !== CSSRule.MEDIA_RULE || !/\b(?:min-|max-)?width\b/i.test(rule.conditionText))
    .map((rule) => rule.cssText)
    .join('\n');
}

function httpsLink(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : '';
  } catch {
    return '';
  }
}

function setPreviewLink(anchor, href) {
  anchor.href = href;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
}

function normalizeMsoButtons(doc) {
  for (const anchor of doc.querySelectorAll('a[style]')) {
    const style = anchor.getAttribute('style');
    if (
      !/(?:^|;)\s*padding\s*:/i.test(style) ||
      !/(?:^|;)\s*mso-padding-alt\s*:\s*0(?:px|pt)?\s*(?=;|$)/i.test(style)
    )
      continue;
    const spacers = [...anchor.querySelectorAll('i[hidden][style]')].filter(
      (spacer) =>
        /(?:^|;)\s*mso-font-width\s*:/i.test(spacer.getAttribute('style')) &&
        /^[\s​]*$/.test(spacer.textContent)
    );
    if (spacers.length !== 2) continue;
    // The native spacer pair substitutes for CSS padding. Use padding in the preview.
    for (const spacer of spacers) spacer.remove();
    for (const span of anchor.querySelectorAll('span[style]')) {
      if (/^\s*mso-text-raise\s*:\s*[^;]+;?\s*$/i.test(span.getAttribute('style'))) {
        span.replaceWith(...span.childNodes);
      }
    }
    anchor.setAttribute(
      'style',
      style.replace(/(^|;)\s*mso-padding-alt\s*:\s*0(?:px|pt)?\s*(?=;|$)/gi, '$1') + ';white-space:nowrap'
    );
  }
}

function renderVml(doc) {
  for (const shape of Array.from(doc.getElementsByTagName('v:roundrect'))) {
    const href = httpsLink(shape.getAttribute('href'));
    const button = doc.createElement(href ? 'a' : 'div');
    if (href) {
      setPreviewLink(button, href);
      button.style.textDecoration = 'none';
      button.style.color = 'inherit';
    }
    const dimensions = doc.createElement('div');
    dimensions.style.cssText = shape.getAttribute('style') ?? '';
    button.style.width = dimensions.style.width;
    button.style.height = dimensions.style.height;
    button.style.display = 'inline-flex';
    button.style.alignItems = 'center';
    button.style.justifyContent = 'center';
    button.style.verticalAlign = 'middle';
    button.style.boxSizing = 'border-box';
    button.style.paddingInline = '10px';
    button.style.overflow = 'hidden';
    button.style.backgroundColor = shape.getAttribute('fillcolor') ?? '';
    const arc = /^([\d.]+)%$/.exec(shape.getAttribute('arcsize') ?? '');
    if (arc && dimensions.style.height.endsWith('px') && dimensions.style.width.endsWith('px')) {
      const side = Math.min(parseFloat(dimensions.style.height), parseFloat(dimensions.style.width));
      button.style.borderRadius = `${(side * Math.min(Number(arc[1]), 100)) / 200}px`;
    }
    for (const lock of Array.from(shape.getElementsByTagName('w:anchorlock'))) {
      lock.replaceWith(...lock.childNodes);
    }
    for (const center of Array.from(shape.getElementsByTagName('center'))) {
      const label = doc.createElement('span');
      label.style.cssText = center.style.cssText;
      label.style.textAlign = 'center';
      label.style.letterSpacing = 'normal';
      if (!label.style.lineHeight) label.style.lineHeight = '1.4';
      label.style.position = 'relative';
      label.style.top = '4px';
      while (center.firstChild) label.append(center.firstChild);
      center.replaceWith(label);
    }
    while (shape.firstChild) button.append(shape.firstChild);
    if (dimensions.style.height.endsWith('px')) {
      const height = parseFloat(dimensions.style.height);
      if (height >= 24) {
        const clip = doc.createElement('span');
        clip.style.cssText = 'display:block;overflow:hidden;width:100%;align-self:flex-start';
        clip.style.height = height - 5 + 'px';
        const content = doc.createElement('span');
        content.style.cssText = 'display:flex;justify-content:center;align-items:center';
        content.style.height = height + 'px';
        while (button.firstChild) content.append(button.firstChild);
        clip.append(content);
        button.append(clip);
      }
    }
    shape.replaceWith(button);
  }
  for (const background of Array.from(doc.getElementsByTagName('v:background'))) {
    const fill = background.getElementsByTagName('v:fill')[0];
    const color = fill?.getAttribute('color');
    if (color && !doc.body.style.backgroundColor) doc.body.style.backgroundColor = color;
    background.remove();
  }
}

function widthAt(value, available) {
  const match = /^(\d+(?:\.\d+)?)(px|pt|%)?$/i.exec(value.trim());
  if (!match) return null;
  const size = Number(match[1]);
  if (match[2] === '%') return Math.round((available * size) / 100);
  return Math.round(match[2]?.toLowerCase() === 'pt' ? (size * 4) / 3 : size);
}

function constrainImages(doc, viewportWidth) {
  const cellPadding = new Map();
  for (const source of doc.querySelectorAll('style')) {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(source.textContent);
    for (const rule of sheet.cssRules) {
      if (rule.type !== CSSRule.STYLE_RULE || !(rule.style.paddingLeft || rule.style.paddingRight)) continue;
      let matches;
      try {
        matches = doc.querySelectorAll(rule.selectorText);
      } catch {
        continue;
      }
      for (const cell of matches) {
        if (!['td', 'th', 'table'].includes(cell.localName)) continue;
        const sides = cellPadding.get(cell) ?? {};
        if (rule.style.paddingLeft) sides.left = rule.style.paddingLeft;
        if (rule.style.paddingRight) sides.right = rule.style.paddingRight;
        cellPadding.set(cell, sides);
      }
    }
  }
  const widths = new Map();
  for (const element of doc.body.querySelectorAll('*')) {
    if (!element.style) continue;
    const parentWidth = widths.get(element.parentElement) ?? viewportWidth;
    const attribute = element.getAttribute('width') || '';
    let declared = widthAt(element.style.width || attribute, parentWidth);
    let maximum = widthAt(element.style.maxWidth, parentWidth);
    if (element.localName === 'img') {
      if (/^\d+$/.test(attribute) && element.style.width.endsWith('%')) {
        maximum = Math.min(Number(attribute), maximum ?? parentWidth);
      } else if (declared === null && maximum && element.style.maxWidth.endsWith('%')) {
        const cell = element.closest('td, th');
        const table = element.closest('table');
        if (cell?.parentElement?.cells?.length === 1 && /^\d+$/.test(table?.getAttribute('width') ?? '')) {
          declared = maximum;
        }
      }
    }
    let available = Math.min(parentWidth, maximum ?? parentWidth, declared ?? parentWidth);
    const sides = cellPadding.get(element);
    const inset = ['td', 'th', 'table'].includes(element.localName)
      ? (widthAt(element.style.paddingLeft || sides?.left || '', available) ?? 0) +
        (widthAt(element.style.paddingRight || sides?.right || '', available) ?? 0)
      : 0;
    widths.set(element, Math.max(0, available - inset));
    const centered = element.localName === 'table' && element.getAttribute('align')?.toLowerCase() === 'center';
    const paddedFullWidth = centered && inset > 0 && element.querySelector('table[width="100%"]');
    const newsletterSection = centered && element.id === 'newsletter' && declared === null;
    if (element.localName === 'table' && (maximum > 0 || paddedFullWidth || newsletterSection)) {
      if (inset > 0 && inset < available) {
        const wrapper = doc.createElement('div');
        wrapper.style.width = available + 'px';
        wrapper.style.marginInline = 'auto';
        wrapper.style.backgroundColor = element.style.backgroundColor || element.getAttribute('bgcolor') || '';
        element.before(wrapper);
        wrapper.append(element);
        available -= inset;
        element.style.setProperty('padding-left', '0', 'important');
        element.style.setProperty('padding-right', '0', 'important');
      }
      element.width = String(available);
      element.style.width = available + 'px';
      if (centered) {
        element.style.marginInline = 'auto';
      }
    } else if (element.localName === 'img' && available > 0) {
      element.style.maxWidth = available + 'px';
      if (declared === null) continue;
      element.width = available;
      element.style.width = available + 'px';
      if (element.style.height === 'auto') element.removeAttribute('height');
      const height = widthAt(element.style.height || element.getAttribute('height') || '', available);
      if (height && declared > available) {
        element.height = Math.round((height * available) / declared);
        element.style.height = element.height + 'px';
      }
    }
  }
}

export function previewDocument(html, classic, loadImages) {
  const source = classic ? resolveConditionalComments(html) : html;
  // Office document settings are metadata. Parsing the XML as HTML can expose its text.
  const markup = source.replace(
    /<xml\b[^>]*>\s*<o:OfficeDocumentSettings\b[^>]*>[\s\S]*?<\/o:OfficeDocumentSettings>\s*<\/xml\s*>/gi,
    ''
  );
  const doc = new DOMParser().parseFromString(markup, 'text/html');
  if (classic) normalizeMsoButtons(doc);
  doc
    .querySelectorAll(
      'script, iframe, frame, object, embed, portal, link, meta, base, template, xml, o\\:OfficeDocumentSettings, o\\:PixelsPerInch'
    )
    .forEach((node) => node.remove());
  for (const element of doc.querySelectorAll('*')) {
    const localName = element.localName;
    const href =
      localName === 'a' || (classic && localName === 'v:roundrect') ? httpsLink(element.getAttribute('href')) : '';
    for (const attr of Array.from(element.attributes)) {
      if (/^(?:on|href$|xlink:href$|action$|formaction$|ping$|target$|autofocus$)/i.test(attr.name)) {
        element.removeAttribute(attr.name);
      }
    }
    if (href && localName === 'a') setPreviewLink(element, href);
    if (href && localName === 'v:roundrect') element.setAttribute('href', href);
    if (classic && element.hasAttribute('style') && element.style) {
      element.setAttribute('style', preserveMsoDeclarations(element.getAttribute('style')));
      filterDeclarations(element.style);
    }
  }
  for (const style of doc.querySelectorAll('style')) {
    const css = classic ? filterStylesheet(style.textContent) : desktopStylesheet(style.textContent);
    style.textContent = css.replace(/<\/style/gi, '\\3c /style');
  }
  if (classic) {
    renderVml(doc);
    constrainImages(doc, OUTLOOK_VIEWPORT_WIDTH);
  }
  doc.head.insertAdjacentHTML('afterbegin', previewPolicy(loadImages));
  return '<!doctype html>' + doc.documentElement.outerHTML;
}
