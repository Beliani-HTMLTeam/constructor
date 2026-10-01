function parseCssBlocks(css) {
  const parsedBlocks = [];
  let blockStart = 0;
  let openingBrace = -1;
  let braceDepth = 0;
  let quoteCharacter = '';
  let insideComment = false;

  for (let characterIndex = 0; characterIndex < css.length; characterIndex++) {
    const character = css[characterIndex];

    if (insideComment) {
      if (character === '*' && css[characterIndex + 1] === '/') {
        insideComment = false;
        characterIndex++;
      }
      continue;
    }

    if (quoteCharacter) {
      if (character === '\\') {
        characterIndex++;
      } else if (character === quoteCharacter) {
        quoteCharacter = '';
      }
      continue;
    }

    if (character === '/' && css[characterIndex + 1] === '*') {
      insideComment = true;
      characterIndex++;
      continue;
    }

    if (character === '"' || character === "'") {
      quoteCharacter = character;
      continue;
    }

    if (character === '{') {
      if (braceDepth === 0) openingBrace = characterIndex;
      braceDepth++;
    } else if (character === '}') {
      braceDepth--;
      if (braceDepth === 0) {
        parsedBlocks.push({
          header: css.slice(blockStart, openingBrace),
          body: css.slice(openingBrace + 1, characterIndex),
        });
        blockStart = characterIndex + 1;
      }
    } else if (character === ';' && braceDepth === 0) {
      parsedBlocks.push({ statement: css.slice(blockStart, characterIndex + 1) });
      blockStart = characterIndex + 1;
    }
  }

  if (braceDepth !== 0 || quoteCharacter || insideComment) {
    throw new Error('Invalid Thursday component CSS');
  }

  return parsedBlocks;
}

function compactCss(css) {
  let compactedCss = '';
  let quoteCharacter = '';
  let pendingSpace = false;

  for (let characterIndex = 0; characterIndex < css.length; characterIndex++) {
    const character = css[characterIndex];

    if (quoteCharacter) {
      compactedCss += character;
      if (character === '\\') {
        characterIndex++;
        compactedCss += css[characterIndex] ?? '';
      } else if (character === quoteCharacter) {
        quoteCharacter = '';
      }
      continue;
    }

    if (character === '/' && css[characterIndex + 1] === '*') {
      const commentEnd = css.indexOf('*/', characterIndex + 2);
      if (commentEnd < 0) throw new Error('Unclosed CSS comment');
      characterIndex = commentEnd + 1;
      pendingSpace = true;
      continue;
    }

    if (/\s/.test(character)) {
      pendingSpace = true;
      continue;
    }

    const needsSpace = pendingSpace && compactedCss
      && !/[{};]/.test(character) && !/[{};]$/.test(compactedCss);
    if (needsSpace) compactedCss += ' ';

    pendingSpace = false;
    compactedCss += character;
    if (character === '"' || character === "'") quoteCharacter = character;
  }

  return compactedCss;
}

function selectSelectors(selector, newsletterDocument) {
  const hasComplexSyntax = /[()\[\]\\"']/.test(selector);
  if (hasComplexSyntax) return selector;

  return selector.split(',')
    .filter(individualSelector => {
      if (individualSelector.includes(':')) return true;
      try {
        return Boolean(newsletterDocument.querySelector(individualSelector.trim()));
      } catch {
        return true;
      }
    })
    .map(individualSelector => individualSelector.trim())
    .join(',');
}

function selectRules(css, newsletterDocument) {
  return parseCssBlocks(css).map(({ header, body, statement }) => {
    if (statement) return statement;

    const selector = compactCss(header).trim();
    if (!selector) return '';

    if (/^@(media|supports|layer|container)\b/i.test(selector)) {
      const nestedRules = selectRules(body, newsletterDocument);
      return nestedRules.trim() ? `${selector}{${nestedRules}}` : '';
    }

    if (selector.startsWith('@')) return `${selector}{${body}}`;

    const matchingSelectors = selectSelectors(selector, newsletterDocument);
    return matchingSelectors ? `${matchingSelectors}{${body}}` : '';
  }).join('\n');
}

export function composeNewsletterCss({ baseCss, componentStyles, html, wrapper = '' }) {
  const outlookConditionalHtml = [...html.matchAll(/<!--\[if[^]*?\]>([^]*?)<!\[endif\]-->/gi)]
    .map(conditionalMatch => conditionalMatch[1]).join('\n');
  const newsletterDocument = new DOMParser().parseFromString(
    wrapper || '<html><body></body></html>',
    'text/html',
  );
  newsletterDocument.body.innerHTML = html + outlookConditionalHtml;

  const matchingStyles = [baseCss, ...componentStyles]
    .map(stylesheet => selectRules(stylesheet, newsletterDocument));
  return compactCss(matchingStyles.join('\n'));
}
