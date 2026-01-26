let keydownHandler = null;
let backdropHandlerAttached = false;

export function getModalElements() {
  const modal = document.getElementById('productsModal');
  if (!modal) throw new Error('productsModal element not found in index.html');

  const body = modal.querySelector('.products-modal-body');
  const subtitle = modal.querySelector('.products-modal-subtitle');
  const header = modal.querySelector('.modal-header');

  if (!body || !subtitle || !header) throw new Error('productsModal structure is invalid');
  return { modal, body, subtitle, header };
}

export function ensureCloseButton(modal, header) {
  if (header.querySelector('.close-modal')) return;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.classList.add('close-modal');

  const closeIconImg = document.createElement('img');
  closeIconImg.src = '/icons/ep--close-bold.svg';
  closeBtn.appendChild(closeIconImg);

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  header.appendChild(closeBtn);
}

export function openModal(modal) {
  modal.style.display = 'flex';
}

export function bindCloseHandlers(modal) {
  if (keydownHandler) document.removeEventListener('keydown', keydownHandler);
  keydownHandler = (event) => {
    if (event.key === 'Escape') modal.style.display = 'none';
  };
  document.addEventListener('keydown', keydownHandler);

  if (!backdropHandlerAttached) {
    backdropHandlerAttached = true;
    modal.addEventListener('click', (event) => {
      if (event.target === modal) modal.style.display = 'none';
    });
  }
}
