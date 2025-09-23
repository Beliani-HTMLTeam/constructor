const createContainer = (id) => {
  const container = document.createElement('div');
  if (id) {
    container.setAttribute('row-id', id);
    container.classList.add('modal-row');
  }
  return container;
};

const createInput = (field, hidden) => {
  // If the caller wants a hidden input, always return a hidden <input>
  if (hidden) {
    const h = document.createElement('input');
    h.type = 'hidden';
    h.name = field.name;
    h.id = field.id;
    return h;
  }

  // Support for textarea types (note: some schema entries may be misspelled 'textearea')
  if (field.type === 'textarea' || field.type === 'textearea') {
    const ta = document.createElement('textarea');
    ta.name = field.name;
    ta.id = field.id;
    ta.placeholder = field.placeholder || '';
    if (field.required) ta.required = true;
    if (field.disabled) ta.disabled = true;
    // enable vertical resize via CSS on the element
    ta.style.resize = 'vertical';
    ta.style.overflow = 'auto';
    ta.rows = field.rows || 4;
    return ta;
  }

  // Fallback: regular input
  const input = document.createElement('input');
  input.type = field.type || 'text';
  input.name = field.name;
  input.id = field.id;
  input.placeholder = field.placeholder || '';
  if (field.required) input.required = true;
  if (field.disabled) input.disabled = true;
  if (field.value) input.value = field.value;
  if (field.type === 'colorhex') {
    input.type = 'text';
    input.pattern = '#[0-9A-Fa-f]{6}';
    input.maxLength = 7;
  }
  return input;
};

const createLabel = (field) => {
  const label = document.createElement('label');
  label.htmlFor = field.id;
  label.textContent = field.label;
  return label;
};

const createOptionSpan = (option) => {
  const span = document.createElement('span');
  span.classList.add('fv-label');
  span.textContent = option.label;
  return span;
};

const createToggle = (field) => {
  // outer container
  const outer = document.createElement('div');

  // toggle wrapper
  const toggle = document.createElement('div');
  toggle.classList.add('family-version-toggle');

  // OLD label
  const oldSpan = createOptionSpan(field.option1);

  // switch (label with aria-checked)
  const switchLabel = document.createElement('label');
  switchLabel.classList.add('fv-switch');

  // Set default state based on defaultValue or option1 (NEW)
  const defaultValue = field.defaultValue !== undefined ? field.defaultValue : field.option1.value;
  const isDefaultNew = defaultValue === field.option1.value;

  switchLabel.setAttribute('aria-checked', isDefaultNew ? 'false' : 'true');
  switchLabel.tabIndex = 0;

  const hiddenCheckbox = document.createElement('input');
  hiddenCheckbox.type = 'checkbox';
  hiddenCheckbox.id = 'fv-toggle';
  hiddenCheckbox.setAttribute('aria-hidden', 'true');
  hiddenCheckbox.style.display = 'none';
  hiddenCheckbox.checked = !isDefaultNew; // checked means OLD (option2)

  const slider = document.createElement('span');
  slider.classList.add('fv-slider');

  switchLabel.appendChild(hiddenCheckbox);
  switchLabel.appendChild(slider);

  // NEW label
  const newSpan = createOptionSpan(field.option2);

  // hidden input with correct default value
  const hiddenInput = createInput(field, true);
  hiddenInput.value = defaultValue;

  toggle.appendChild(oldSpan);
  toggle.appendChild(switchLabel);
  toggle.appendChild(newSpan);
  toggle.appendChild(hiddenInput);

  // Add click handler to toggle between options
  switchLabel.addEventListener('click', function () {
    const isCurrentlyNew = hiddenInput.value == field.option1.value;

    if (isCurrentlyNew) {
      // Switch to OLD
      hiddenInput.value = field.option2.value;
      hiddenCheckbox.checked = true;
      switchLabel.setAttribute('aria-checked', 'true');
    } else {
      // Switch to NEW
      hiddenInput.value = field.option1.value;
      hiddenCheckbox.checked = false;
      switchLabel.setAttribute('aria-checked', 'false');
    }
  });

  outer.appendChild(toggle);

  return outer;
};

const setupFormNavigationButton = (action, page_id) => {
  const button = document.createElement('button');
  button.textContent = action === 'next' ? 'Next' : 'Back';
  button.addEventListener('click', () => {
    if (action === 'next') {
      const nextPage = document.getElementById(`creatorpage-${page_id + 1}`);

      if (nextPage) {
        nextPage.classList.remove('hidden');
      }
    } else {
      const prevPage = document.getElementById(`creatorpage-${page_id - 1}`);

      if (prevPage) {
        prevPage.classList.remove('hidden');
      }
    }
  });
  return button;
};

export { createContainer, createInput, createLabel, createToggle, setupFormNavigationButton };
