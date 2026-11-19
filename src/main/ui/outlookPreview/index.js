import { toast } from 'sonner';
import { getState, subscribeState } from '@/main/state/appState.js';
import { previewDocument } from './outlookRenderer.js';
import './outlookPreview.css';

// Popup comparing the current render (getState('html')) as classic Outlook
// would roughly show it vs. a desktop browser. Read-only: never touches state.

const MODES = {
  outlook: 'Classic Outlook approximation',
  browser: 'Browser rendering (desktop)',
};

let modal = null;
let refs = null;
let unsubscribe = null;
let keydownHandler = null;

function buildModal() {
  const root = document.createElement('div');
  root.className = 'outlook-preview-overlay';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Outlook preview');
  root.innerHTML = `
    <div class="outlook-preview-dialog">
      <div class="outlook-preview-header">
        <div>
          <h2 class="outlook-preview-title">Outlook preview</h2>
          <p class="outlook-preview-subtitle">Approximation of Word-based (classic Outlook) rendering. Always confirm with a real test send / .EML.</p>
        </div>
        <button type="button" class="outlook-preview-close" aria-label="Close"><img src="/icons/x.svg" alt="" /></button>
      </div>
      <div class="outlook-preview-toolbar">
        <div class="outlook-preview-tabs" role="tablist">
          ${Object.entries(MODES)
            .map(
              ([key, label]) =>
                `<button type="button" role="tab" data-mode="${key}" class="outlook-preview-tab">${label}</button>`
            )
            .join('')}
        </div>
        <label class="outlook-preview-option"><input type="checkbox" class="outlook-preview-images" checked /> Load HTTPS images</label>
        <button type="button" class="outlook-preview-refresh">Refresh</button>
        <span class="outlook-preview-status" role="status"></span>
      </div>
      <div class="outlook-preview-frames">
        <iframe class="outlook-preview-frame" data-mode="outlook" title="${MODES.outlook}" sandbox="allow-popups allow-popups-to-escape-sandbox"></iframe>
        <iframe class="outlook-preview-frame" data-mode="browser" title="${MODES.browser}" sandbox="allow-popups allow-popups-to-escape-sandbox" hidden></iframe>
      </div>
    </div>
  `;

  const r = {
    images: root.querySelector('.outlook-preview-images'),
    status: root.querySelector('.outlook-preview-status'),
    tabs: [...root.querySelectorAll('.outlook-preview-tab')],
    frames: [...root.querySelectorAll('.outlook-preview-frame')],
  };

  root.querySelector('.outlook-preview-close').addEventListener('click', closeOutlookPreview);
  root.querySelector('.outlook-preview-refresh').addEventListener('click', () => renderPreviews());
  r.images.addEventListener('change', () => renderPreviews());
  r.tabs.forEach((tab) => tab.addEventListener('click', () => setMode(tab.dataset.mode)));
  root.addEventListener('click', (event) => {
    if (event.target === root) closeOutlookPreview();
  });

  document.body.appendChild(root);
  modal = root;
  refs = r;
  setMode('outlook');
}

function setMode(mode) {
  refs.tabs.forEach((tab) => tab.setAttribute('aria-selected', String(tab.dataset.mode === mode)));
  refs.frames.forEach((frame) => {
    frame.hidden = frame.dataset.mode !== mode;
  });
}

// Chrome sometimes doesn't repaint a sandboxed iframe whose srcdoc is
// reassigned (it stays blank until scrolled), e.g. after a language switch.
// Swap in a fresh iframe for every render instead of reusing the old one.
function replaceFrames(getSrcdoc) {
  refs.frames = refs.frames.map((frame) => {
    const fresh = frame.cloneNode(false);
    fresh.removeAttribute('srcdoc');
    fresh.srcdoc = getSrcdoc(frame.dataset.mode);
    frame.replaceWith(fresh);
    return fresh;
  });
}

function renderPreviews() {
  if (!refs) return;
  const html = getState('html');
  if (!html) {
    replaceFrames(() => '');
    refs.status.textContent = 'Nothing rendered yet.';
    return;
  }

  const loadImages = refs.images.checked;
  try {
    const docs = {
      outlook: previewDocument(html, true, loadImages),
      browser: previewDocument(html, false, loadImages),
    };
    replaceFrames((mode) => docs[mode]);
    const country = getState('country');
    refs.status.textContent = `Updated ${new Date().toLocaleTimeString()}${country ? ` · ${country}` : ''}`;
  } catch (error) {
    console.error('Outlook preview failed:', error);
    refs.status.textContent = 'Preview failed, see console.';
  }
}

export function openOutlookPreview() {
  if (!getState('html')) return toast.error('No HTML to preview. Render template first.');
  if (getState('template')?.type === 'landing') return toast.error('Outlook preview works only for newsletters');

  if (!modal) buildModal();
  modal.style.display = 'flex';
  document.body.classList.add('outlook-preview-open');
  renderPreviews();

  // re-render live when the campaign is re-rendered (language / shop switch) while open
  unsubscribe?.();
  unsubscribe = subscribeState((key) => {
    if (key === 'html') renderPreviews();
  });

  if (keydownHandler) document.removeEventListener('keydown', keydownHandler);
  keydownHandler = (event) => {
    if (event.key === 'Escape') closeOutlookPreview();
  };
  document.addEventListener('keydown', keydownHandler);
}

export function closeOutlookPreview() {
  if (!modal) return;
  modal.style.display = 'none';
  document.body.classList.remove('outlook-preview-open');
  unsubscribe?.();
  unsubscribe = null;
  if (keydownHandler) document.removeEventListener('keydown', keydownHandler);
  keydownHandler = null;
}
