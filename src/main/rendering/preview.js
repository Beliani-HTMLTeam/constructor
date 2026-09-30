import { getState, setState } from '@/main/state/appState.js';

export const PREVIEW_MODE = { DESKTOP: 'desktop', MOBILE: 'mobile' };

// iPhone 12/13 width
export const MOBILE_PREVIEW_WIDTH = 390;

const PREVIEW_ROOT_SELECTOR = '#app-content';

// Poppins is the live pages' base font, so an explicit font-family (arial, ...) stands out in the preview
const BASE_FONT_HEAD = [
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">',
  "<style>html{font-family:'Poppins',sans-serif}</style>",
].join('');

function executeScripts(rootElement) {
  rootElement.querySelectorAll('script').forEach((oldScript) => {
    const newScript = document.createElement('script');

    for (const attribute of oldScript.attributes) {
      newScript.setAttribute(attribute.name, attribute.value);
    }

    newScript.text = oldScript.textContent || '';
    oldScript.replaceWith(newScript);
  });
}

function toFrameDocument(html) {
  const headOpeningTag = /<head[^>]*>/i;

  if (/^\s*<!doctype/i.test(html)) {
    return headOpeningTag.test(html)
      ? html.replace(headOpeningTag, (tag) => tag + BASE_FONT_HEAD)
      : BASE_FONT_HEAD + html;
  }

  return [
    '<!doctype html><html style="overflow:hidden"><head>',
    '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">',
    BASE_FONT_HEAD,
    `</head><body style="margin:0">${html}</body></html>`,
  ].join('');
}

// the iframe never scrolls itself (#app does), so its height has to follow the content
function fitFrameToContent(frame) {
  const frameDocument = frame.contentDocument;
  const frameWindow = frame.contentWindow;
  if (!frameDocument || !frameWindow) return;

  const setHeight = () => {
    frame.style.height = `${Math.ceil(frameDocument.documentElement.getBoundingClientRect().height)}px`;
  };

  setHeight();
  new frameWindow.ResizeObserver(setHeight).observe(frameDocument.documentElement);
}

function renderInFrame(root, html) {
  const frame = document.createElement('iframe');
  frame.className = 'preview-frame';
  frame.title = 'Mobile preview';
  frame.scrolling = 'no';
  frame.style.width = `${MOBILE_PREVIEW_WIDTH}px`;
  frame.addEventListener('load', () => fitFrameToContent(frame));
  frame.srcdoc = toFrameDocument(html);

  root.replaceChildren(frame);
}

function renderInline(root, html) {
  root.innerHTML = html;
  executeScripts(root);
}

// the mobile preview uses an iframe so the template's @media queries react to the phone width
export function showPreview(html, root = document.querySelector(PREVIEW_ROOT_SELECTOR)) {
  if (!root) return;

  if (getState('previewMode') === PREVIEW_MODE.MOBILE) {
    renderInFrame(root, html);
  } else {
    renderInline(root, html);
  }
}

export function setPreviewMode(mode) {
  setState('previewMode', mode);

  const renderedHtml = getState('html');
  if (renderedHtml) showPreview(renderedHtml);
}
