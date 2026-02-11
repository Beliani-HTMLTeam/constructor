import { formatMb } from './format.js';

export function buildJsonSection({ body }) {
  const label = document.createElement('label');
  label.textContent = 'Products JSON (paste from extension)';

  const textarea = document.createElement('textarea');
  textarea.className = 'products-modal-textarea';
  textarea.placeholder = 'Paste products JSON here…';

  const sizeHint = document.createElement('div');
  sizeHint.className = 'products-modal-sizehint';

  const refreshSizeHint = () => {
    const mb = (textarea.value.length * 2) / 1024 / 1024;
    sizeHint.textContent = `Pasted JSON size (est.): ${formatMb(mb)} MB`;
  };

  let timer;
  textarea.addEventListener('input', () => {
    textarea.classList.remove('json-invalid');
    window.clearTimeout(timer);
    timer = window.setTimeout(refreshSizeHint, 250);
  });

  body.appendChild(label);
  body.appendChild(textarea);
  body.appendChild(sizeHint);

  refreshSizeHint();
  return { textarea, refreshSizeHint };
}
