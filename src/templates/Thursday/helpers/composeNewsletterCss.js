// Work on CSS text rather than CSSOM: browsers discard email-only declarations
// such as mso-hide when parsing a stylesheet through CSSStyleSheet.
function blocks(css) {
  const result = [];
  let start = 0, opening = -1, depth = 0, quote = '', comment = false;
  for (let i = 0; i < css.length; i++) {
    const char = css[i];
    if (comment) { if (char === '*' && css[i + 1] === '/') { comment = false; i++; } continue; }
    if (quote) { if (char === '\\') i++; else if (char === quote) quote = ''; continue; }
    if (char === '/' && css[i + 1] === '*') { comment = true; i++; continue; }
    if (char === '"' || char === "'") { quote = char; continue; }
    if (char === '{') { if (depth++ === 0) opening = i; }
    else if (char === '}' && --depth === 0) {
      result.push({ header: css.slice(start, opening), body: css.slice(opening + 1, i) });
      start = i + 1;
    } else if (char === ';' && depth === 0) {
      result.push({ statement: css.slice(start, i + 1) });
      start = i + 1;
    }
  }
  if (depth !== 0 || quote || comment) throw new Error('Invalid Thursday component CSS');
  return result;
}

function compact(css) {
  let result = '', quote = '', space = false;
  for (let i = 0; i < css.length; i++) {
    const char = css[i];
    if (quote) {
      result += char;
      if (char === '\\') result += css[++i] ?? '';
      else if (char === quote) quote = '';
      continue;
    }
    if (char === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2);
      if (end < 0) throw new Error('Unclosed CSS comment');
      i = end + 1; space = true; continue;
    }
    if (/\s/.test(char)) { space = true; continue; }
    if (space && result && !/[{};]/.test(char) && !/[{};]$/.test(result)) result += ' ';
    space = false;
    result += char;
    if (char === '"' || char === "'") quote = char;
  }
  return result;
}

function selectRules(css, document) {
  return blocks(css).map(({ header, body, statement }) => {
    if (statement) return statement;
    const selector = compact(header).trim();
    if (!selector) return '';
    if (/^@(media|supports|layer|container)\b/i.test(selector)) {
      const children = selectRules(body, document);
      return children.trim() ? `${selector}{${children}}` : '';
    }
    // Keep non-selector at-rules and stateful selectors conservatively.
    if (!selector.startsWith('@') && !selector.includes(':')) {
      try { if (!document.querySelector(selector)) return ''; }
      catch { return `${selector}{${body}}`; }
    }
    return `${selector}{${body}}`;
  }).join('\n');
}

export function composeNewsletterCss({ baseCss, componentStyles, html, wrapper = '' }) {
  // Conditional Outlook markup is still part of the email and needs its CSS.
  const conditionalHtml = [...html.matchAll(/<!--\[if[^]*?\]>([^]*?)<!\[endif\]-->/gi)]
    .map(match => match[1]).join('\n');
  const document = new DOMParser().parseFromString(wrapper || '<html><body></body></html>', 'text/html');
  document.body.innerHTML = html + conditionalHtml;
  return compact([baseCss, ...componentStyles.map(css => selectRules(css, document))].join('\n'));
}
