import {
  createContainer,
  createInput,
  createLabel,
  createToggle,
  setupFormNavigationButton,
} from './domUtils.js';
import { pairToggles } from './pairTogglableInputs.js';
import { enhanceJSON } from './enhanceJSON.js';
import { createAndSaveCampaignFile, updateCampaignMetadata, lookupProductName } from './createCampaignFile.js';
import { schema } from './form.schema.js';

const scope = __SCOPE__ || import.meta.env?.VITE_SCOPE;

if (!scope) {
  console.error('VITE_SCOPE is not defined in environment variables!');
  alert('Error: User scope (VITE_SCOPE) is not configured. Please check your .env file.');
}
const formContent = document.querySelector('.form-content');

let editMode = null;
let lastEditedCampaign = null;
let altBtn = null;
let deleteBtn = null;
let categoryBuilderSection = null;
let categoryList = null;
let freebiesList = null;
let freebiesGroup = null;

function debounce(fn, ms) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

function getStartId() {
  return formContent.querySelector('[name="newsletterId"]')?.value?.trim() || '';
}

function addFreebieRow(id = '', name = '') {
  if (!freebiesList) return;
  const item = document.createElement('div');
  item.classList.add('freebie-item');

  const lbl = document.createElement('label');
  lbl.textContent = 'Freebie';

  const idInput = document.createElement('input');
  idInput.type = 'text';
  idInput.placeholder = '123456';
  idInput.classList.add('freebie-id');
  idInput.value = id;

  const nameLbl = document.createElement('span');
  nameLbl.classList.add('cat-product-name');
  nameLbl.textContent = name;

  idInput.addEventListener('input', debounce(() => {
    nameLbl.textContent = lookupProductName(getStartId(), idInput.value.trim()) || '';
  }, 350));

  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.textContent = '✕';
  removeBtn.classList.add('freebie-remove-btn');
  removeBtn.addEventListener('click', () => item.remove());

  item.appendChild(lbl);
  item.appendChild(idInput);
  item.appendChild(nameLbl);
  item.appendChild(removeBtn);
  freebiesList.appendChild(item);
}

function addCategoryRow(name = '', products = [], cta = true) {
  if (!categoryList) return;
  const row = document.createElement('div');
  row.classList.add('category-row');

  // ── remove button overlay ──
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button';
  removeBtn.textContent = '✕';
  removeBtn.classList.add('cat-remove-btn');
  removeBtn.addEventListener('click', () => row.remove());
  row.appendChild(removeBtn);

  // ── name + CTA header ──
  const headerRow = document.createElement('div');
  headerRow.style.cssText = 'display:flex;gap:8px;align-items:flex-end;';

  const nameWrap = document.createElement('div');
  nameWrap.classList.add('cat-name-wrap');
  nameWrap.style.flex = '1';
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Sofas';
  nameInput.value = name;
  nameInput.classList.add('cat-name');
  nameWrap.appendChild(nameLabel);
  nameWrap.appendChild(nameInput);
  headerRow.appendChild(nameWrap);

  const ctaWrap = document.createElement('div');
  ctaWrap.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:2px;flex-shrink:0;padding-bottom:2px;';
  const ctaLabel = document.createElement('label');
  ctaLabel.textContent = 'CTA';
  ctaLabel.style.cssText = 'font-size:11px;font-weight:600;white-space:nowrap;';
  const ctaCheck = document.createElement('input');
  ctaCheck.type = 'checkbox';
  ctaCheck.classList.add('cat-cta');
  ctaCheck.checked = !!cta;
  ctaWrap.appendChild(ctaLabel);
  ctaWrap.appendChild(ctaCheck);
  headerRow.appendChild(ctaWrap);

  row.appendChild(headerRow);

  // ── products grid ──
  const productsGrid = document.createElement('div');
  productsGrid.classList.add('cat-products-grid');

  for (let p = 0; p < 4; p++) {
    const item = document.createElement('div');
    item.classList.add('cat-product-item');

    const lbl = document.createElement('label');
    lbl.textContent = `Product ${p + 1}`;

    const idInput = document.createElement('input');
    idInput.type = 'text';
    idInput.placeholder = '123456';
    idInput.classList.add('cat-product-id');
    idInput.value = products[p]?.id || '';

    const nameLbl = document.createElement('span');
    nameLbl.classList.add('cat-product-name');
    nameLbl.textContent = products[p]?.name || '';

    const doLookup = debounce(() => {
      const startId = getStartId();
      const n = lookupProductName(startId, idInput.value.trim());
      nameLbl.textContent = n || '';
    }, 350);

    idInput.addEventListener('input', doLookup);

    item.appendChild(lbl);
    item.appendChild(idInput);
    item.appendChild(nameLbl);
    productsGrid.appendChild(item);
  }

  row.appendChild(productsGrid);
  categoryList.appendChild(row);
}

// Add a close button to the modal header
(() => {
  const modal = document.getElementById('formModal');
  const header = document.querySelector('.modal-header');
  if (!modal || !header) return;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.classList.add('close-modal');

  const xImg = document.createElement('img');
  xImg.src = '/icons/ep--close-bold.svg';
  xImg.classList.add('svg-icon');

  closeBtn.appendChild(xImg);
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  header.appendChild(closeBtn);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.style.display = 'none';
  });
})();

// Delegated cancel/close handler
document.addEventListener('click', (e) => {
  const target = e.target;
  const cancel = target.closest ? target.closest('.cancel-btn') : null;
  const close = target.closest ? target.closest('.close-modal') : null;
  if (!cancel && !close) return;
  const modal = document.getElementById('formModal');
  if (modal) modal.style.display = 'none';
});

schema.forEach((page, page_id) => {
  const pageSection = document.createElement('section');

  pageSection.name = `creatorpage-${page_id}`;
  pageSection.id = `creatorpage-${page_id}`;

  if (page_id > 0) {
    pageSection.classList.add('hidden');
  }

  const renderRowArray = (rowArray, baseRowId, parentEl = pageSection, inGroup = false) => {
    const maxPerLine = 5;
    let startIndex = 0;
    let chunkCounter = 0;

    if (
      rowArray.length > 0 &&
      rowArray[0].type === 'checkbox' &&
      (rowArray.length === 1 || !inGroup)
    ) {
      const singleRowContainer = createContainer(`row-${baseRowId}-${chunkCounter}`);
      singleRowContainer.classList.add('form-row-centered');
      if (inGroup) singleRowContainer.classList.add('form-group-row');

      const container = createContainer();
      const input = createInput(rowArray[0]);
      const label = createLabel(rowArray[0]);
      container.style.flex = 'none';
      container.appendChild(label);
      container.appendChild(input);
      singleRowContainer.appendChild(container);
      parentEl.appendChild(singleRowContainer);

      startIndex = 1;
      chunkCounter++;
    }

    for (let start = startIndex; start < rowArray.length; start += maxPerLine) {
      const chunk = rowArray.slice(start, start + maxPerLine);
      const rowContainer = createContainer(`row-${baseRowId}-${chunkCounter}`);
      if (inGroup) rowContainer.classList.add('form-group-row');
      chunkCounter++;

      chunk.forEach((field) => {
        const container = createContainer();
        let input;

        switch (field.type) {
          case 'toggle':
            input = createToggle(field);
            break;
          case 'checkbox':
          case 'date':
            input = createInput(field);
            if (chunk.length === 2) container.style.flex = '.47';
            break;
          default:
            input = createInput(field);
        }

        const label = createLabel(field);
        container.appendChild(label);
        container.appendChild(input);
        rowContainer.appendChild(container);
      });

      parentEl.appendChild(rowContainer);
    }
  };

  page.forEach((row, row_id) => {
    if (Array.isArray(row)) {
      renderRowArray(row, row_id);
      return;
    }

    if (row && (row.type === 'group' || row.group)) {
      const gap = document.createElement('div');
      gap.classList.add('form-row-gap');
      pageSection.appendChild(gap);

      const groupContainer = document.createElement('div');
      groupContainer.classList.add('form-group');

      let titleCheckboxField = null;
      if (
        Array.isArray(row.rows) &&
        row.rows.length > 0 &&
        Array.isArray(row.rows[0]) &&
        row.rows[0].length > 0
      ) {
        const firstField = row.rows[0][0];
        if (
          firstField &&
          firstField.type === 'checkbox' &&
          /(?:Enabled|Toggle)$/i.test(firstField.name)
        ) {
          titleCheckboxField = firstField;
          row.rows[0].splice(0, 1);
          if (row.rows[0].length === 0) {
            row.rows.splice(0, 1);
          }
        }
      }

      const titleBar = document.createElement('div');
      titleBar.classList.add('form-group-title');

      const titleLabel = document.createElement('div');
      titleLabel.classList.add('form-group-title-label');
      titleLabel.textContent = row.title || '';
      titleBar.appendChild(titleLabel);

      let expandEl = null;
      if (!titleCheckboxField) {
        expandEl = document.createElement('div');
        expandEl.classList.add('form-group-expand');
        expandEl.textContent = '◀';
        titleBar.appendChild(expandEl);
      }

      const rowsWrapper = document.createElement('div');
      rowsWrapper.classList.add('form-group-rows');

      let expanded = true;
      const setExpanded = (val) => {
        expanded = !!val;
        if (expanded) {
          rowsWrapper.style.display = '';
          titleBar.setAttribute('aria-expanded', 'true');
          groupContainer.classList.remove('collapsed');
        } else {
          rowsWrapper.style.display = 'none';
          titleBar.setAttribute('aria-expanded', 'false');
          groupContainer.classList.add('collapsed');
        }
      };

      if (titleCheckboxField) {
        const chkContainer = document.createElement('div');
        chkContainer.classList.add('form-group-title-checkbox');

        const chkLabel = createLabel(titleCheckboxField);
        const chkInput = createInput(titleCheckboxField);

        chkInput.addEventListener('click', (ev) => ev.stopPropagation());
        chkLabel.addEventListener('click', (ev) => ev.stopPropagation());

        chkContainer.appendChild(chkLabel);
        chkContainer.appendChild(chkInput);
        titleBar.appendChild(chkContainer);

        const updateExpandedFromCheckbox = () => {
          const isEnabled = !!chkInput.checked && !chkInput.disabled;
          setExpanded(isEnabled);
        };

        chkInput.addEventListener('change', (ev) => {
          ev.stopPropagation();
          updateExpandedFromCheckbox();
        });

        const mo = new MutationObserver(() => updateExpandedFromCheckbox());
        mo.observe(chkInput, { attributes: true, attributeFilter: ['disabled'] });

        var initialExpanded = !!chkInput.checked && !chkInput.disabled;
      } else {
        titleLabel.style.cursor = 'pointer';
        titleLabel.addEventListener('click', () => setExpanded(!expanded));
      }

      groupContainer.appendChild(titleBar);

      const sepTop = document.createElement('div');
      sepTop.classList.add('form-group-separator');
      groupContainer.appendChild(sepTop);

      if (Array.isArray(row.rows)) {
        row.rows.forEach((innerRow, idx) => {
          if (Array.isArray(innerRow) && innerRow.length > 0) {
            renderRowArray(innerRow, `${row_id}-${idx}`, rowsWrapper, true);
          }
        });
      }

      groupContainer.appendChild(rowsWrapper);
      pageSection.appendChild(groupContainer);

      if (typeof initialExpanded !== 'undefined') {
        setExpanded(initialExpanded);
      } else {
        setExpanded(true);
      }

      return;
    }

    if (row && typeof row === 'object') {
      if (Array.isArray(row.fields)) {
        renderRowArray(row.fields, row_id);
        return;
      }
    }
  });

  const isLastPage = page_id === schema.length - 1;

  if (!isLastPage) {
    const nav = document.createElement('div');
    nav.classList.add('form-nav');

    if (page_id > 0) {
      const backBtn = setupFormNavigationButton('back', page_id);
      backBtn.classList.add('back-btn');
      backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = document.getElementById(`creatorpage-${page_id}`);
        if (current) current.classList.add('hidden');
      });
      nav.appendChild(backBtn);
    }

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.addEventListener('click', () => {
      const modal = document.getElementById('formModal');
      if (modal) modal.style.display = 'none';
    });
    nav.appendChild(cancelBtn);

    const nextBtn = setupFormNavigationButton('next', page_id);
    nextBtn.classList.add('next-btn');
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.getElementById(`creatorpage-${page_id}`);
      if (current) current.classList.add('hidden');
    });
    nav.appendChild(nextBtn);
    pageSection.appendChild(nav);
  } else {
    // Last page: (optional back), cancel, submit
    const nav = document.createElement('div');
    nav.classList.add('form-nav');

    if (page_id > 0) {
      const backBtn = setupFormNavigationButton('back', page_id);
      backBtn.classList.add('back-btn');
      backBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const current = document.getElementById(`creatorpage-${page_id}`);
        if (current) current.classList.add('hidden');
      });
      nav.appendChild(backBtn);
    }

    const cancelBtn = document.createElement('button');
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.addEventListener('click', () => {
      const modal = document.getElementById('formModal');
      if (modal) modal.style.display = 'none';
    });
    nav.appendChild(cancelBtn);

    const submitBtn = document.createElement('button');
    submitBtn.type = 'button';
    submitBtn.textContent = 'Submit';
    submitBtn.classList.add('submit-btn');
    submitBtn.addEventListener('click', () => {
      const inputs = formContent.querySelectorAll('input, textarea');
      const data = {};
      inputs.forEach((el) => {
        if (!el.name) return;
        if (el.type === 'checkbox') { data[el.name] = el.checked; return; }
        data[el.name] = el.value;
      });
      if (typeof data.familyVersion !== 'undefined') {
        const num = Number(data.familyVersion);
        data.familyVersion = Number.isNaN(num) ? data.familyVersion : num;
      }
      document.dispatchEvent(new CustomEvent('creatorFormSubmit', { detail: data }));
    });
    nav.appendChild(submitBtn);
    pageSection.appendChild(nav);
  }

  formContent.appendChild(pageSection);
});

// Template picker — shown in create mode before form pages
const templatePickerEl = document.createElement('div');
templatePickerEl.id = 'templatePicker';
templatePickerEl.classList.add('template-picker');
templatePickerEl.style.display = 'none';

const pickerSubtitle = document.createElement('p');
pickerSubtitle.classList.add('template-picker-subtitle');
pickerSubtitle.textContent = 'Select a template to start from:';
templatePickerEl.appendChild(pickerSubtitle);

// Builds a miniature layout wireframe from an array of row descriptors
const makeWireframe = (rows, bg = '#f5f5f5') => {
  const wrap = document.createElement('div');
  wrap.style.cssText = `background:${bg};border-radius:4px;overflow:hidden;display:flex;flex-direction:column;gap:2px;padding:4px;height:96px;margin-bottom:6px;flex-shrink:0;`;
  rows.forEach(({ h, color, cols }) => {
    if (cols) {
      const row = document.createElement('div');
      row.style.cssText = `display:grid;grid-template-columns:repeat(${cols},1fr);gap:2px;flex-shrink:0;`;
      for (let i = 0; i < cols; i++) {
        const cell = document.createElement('div');
        cell.style.cssText = `height:${h}px;background:${color || '#ccc'};border-radius:1px;`;
        row.appendChild(cell);
      }
      wrap.appendChild(row);
    } else {
      const div = document.createElement('div');
      div.style.cssText = `height:${h}px;background:${color || '#ccc'};border-radius:1px;flex-shrink:0;`;
      wrap.appendChild(div);
    }
  });
  return wrap;
};

const pickerCards = document.createElement('div');
pickerCards.classList.add('template-picker-cards');

const makePickerCard = (opt) => {
  const card = document.createElement('button');
  card.type = 'button';
  card.classList.add('template-picker-card');
  if (opt.dashed) card.style.borderStyle = 'dashed';

  if (opt.wireframe) card.appendChild(opt.wireframe());

  const nameEl = document.createElement('strong');
  nameEl.textContent = opt.label;
  const descEl = document.createElement('p');
  descEl.textContent = opt.desc;
  const byEl = document.createElement('small');
  byEl.textContent = opt.by;

  card.appendChild(nameEl);
  card.appendChild(descEl);
  card.appendChild(byEl);

  card.addEventListener('click', () => {
    const tkInput = formContent.querySelector('[name="templateKey"]');
    if (tkInput) tkInput.value = opt.value;
    templatePickerEl.style.display = 'none';
    formContent.querySelectorAll('section[id^="creatorpage-"]').forEach((p, i) => {
      p.style.display = '';
      if (i === 0) p.classList.remove('hidden');
      else p.classList.add('hidden');
    });
    const accentEl = formContent.querySelector('[name="accent"]');
    if (accentEl) {
      const accentRow = accentEl.closest('.form-group-row');
      if (accentRow) accentRow.style.display = opt.accent ? '' : 'none';
    }
    if (categoryBuilderSection) {
      const showCats = ['Monday', 'Friday', 'FathersDayWishes'].includes(opt.value);
      categoryBuilderSection.style.display = showCats ? '' : 'none';
      const isMonday = opt.value === 'Monday';
      if (freebiesGroup) freebiesGroup.style.display = isMonday ? '' : 'none';
      if (showCats && isMonday) {
        if (categoryList && categoryList.children.length === 0) {
          for (let i = 0; i < 4; i++) addCategoryRow();
        }
        if (freebiesList && freebiesList.children.length === 0) {
          for (let i = 0; i < 6; i++) addFreebieRow();
        }
      }
    }
  });

  return card;
};

[
  {
    value: 'Thursday', label: 'Thursday', desc: 'Standard newsletter', by: 'KamilK, Alex…', accent: false,
    wireframe: () => makeWireframe([
      { h: 10, color: '#750000' },
      { h: 22, color: '#b08080' },
      { h: 7,  color: '#e8b898' },
      { h: 14, cols: 2, color: '#c0a0a0' },
      { h: 14, cols: 2, color: '#c0a0a0' },
      { h: 7,  color: '#888' },
    ], '#f5f0f0'),
  },
  {
    value: 'Monday', label: 'Monday', desc: 'Newsletter with deal / freebie structure', by: 'Jakub', accent: true,
    wireframe: () => makeWireframe([
      { h: 10, color: '#3a3a39' },
      { h: 18, color: '#FFCBBF' },
      { h: 10, color: '#e09878' },
      { h: 14, cols: 3, color: '#FFCBBF' },
      { h: 12, cols: 4, color: '#fecd8c' },
      { h: 7,  color: '#888' },
    ], '#fff8f6'),
  },
  {
    value: 'Friday', label: 'Friday', desc: 'Regular Friday newsletter', by: 'Dima, KamilO…', accent: false,
    wireframe: () => makeWireframe([
      { h: 10, color: '#3a3a39' },
      { h: 22, color: '#b0b0b0' },
      { h: 7,  color: '#d8d8d8' },
      { h: 7,  color: '#d8d8d8' },
      { h: 7,  color: '#d8d8d8' },
      { h: 7,  color: '#888' },
    ], '#f8f8f8'),
  },
  {
    value: 'FathersDayWishes', label: 'FathersDayWishes', desc: "Father's / Mother's Day Wishes", by: 'Dima', accent: false,
    wireframe: () => makeWireframe([
      { h: 10, color: '#3a3a39' },
      { h: 18, color: '#f0c0b0' },
      { h: 14, cols: 4, color: '#FFEDE6' },
      { h: 14, cols: 4, color: '#FFEDE6' },
      { h: 12, color: '#f0d0c8' },
      { h: 7,  color: '#888' },
    ], '#fff5f2'),
  },
  {
    value: 'Blank', label: 'Blank', desc: 'No template — just campaign metadata', by: '', accent: false, dashed: true,
    wireframe: () => makeWireframe([
      { h: 10, color: '#e0e0e0' },
      { h: 36, color: '#eeeeee' },
      { h: 10, color: '#e0e0e0' },
      { h: 10, color: '#e0e0e0' },
      { h: 7,  color: '#d0d0d0' },
    ], '#f8f8f8'),
  },
].forEach((opt) => pickerCards.appendChild(makePickerCard(opt)));

// Edit card — shown dynamically when a campaign is already selected
const editPickerCard = document.createElement('button');
editPickerCard.type = 'button';
editPickerCard.classList.add('template-picker-card');
editPickerCard.style.cssText = 'display:none;border-style:dashed;';

const editCardPreview = document.createElement('div');
editCardPreview.style.cssText = 'height:96px;display:flex;align-items:center;justify-content:center;margin-bottom:6px;flex-shrink:0;';
const editCardIcon = document.createElement('img');
editCardIcon.src = '/icons/modified.svg';
editCardIcon.classList.add('svg-icon');
editCardIcon.style.cssText = 'width:40px;height:40px;opacity:0.45;';
editCardPreview.appendChild(editCardIcon);
editPickerCard.appendChild(editCardPreview);

const editCardName = document.createElement('strong');
editCardName.textContent = '';
const editCardDesc = document.createElement('p');
editCardDesc.textContent = 'Edit this campaign\'s metadata';
const editCardBy = document.createElement('small');
editCardBy.textContent = 'Current selection';
editPickerCard.appendChild(editCardName);
editPickerCard.appendChild(editCardDesc);
editPickerCard.appendChild(editCardBy);
editPickerCard.addEventListener('click', () => {
  if (editPickerCard._campaign) applyEditMode(editPickerCard._campaign);
});
pickerCards.appendChild(editPickerCard);

templatePickerEl.appendChild(pickerCards);
formContent.insertBefore(templatePickerEl, formContent.firstChild);

// Category builder — injected into creatorpage-1 before its nav
(() => {
  const page1 = document.getElementById('creatorpage-1');
  if (!page1) return;

  categoryBuilderSection = document.createElement('div');
  categoryBuilderSection.id = 'categoryBuilder';
  categoryBuilderSection.style.display = 'none';

  // ── Freebies section ──
  freebiesGroup = document.createElement('div');
  freebiesGroup.classList.add('form-group');

  const freebiesTitleBar = document.createElement('div');
  freebiesTitleBar.classList.add('form-group-title');
  const freebiesTitleLabel = document.createElement('div');
  freebiesTitleLabel.classList.add('form-group-title-label');
  freebiesTitleLabel.textContent = 'Freebies';
  freebiesTitleBar.appendChild(freebiesTitleLabel);
  freebiesGroup.appendChild(freebiesTitleBar);
  freebiesGroup.appendChild(Object.assign(document.createElement('div'), { className: 'form-group-separator' }));

  freebiesList = document.createElement('div');
  freebiesList.classList.add('freebies-list');
  freebiesGroup.appendChild(freebiesList);

  const freebiesAddRow = document.createElement('div');
  freebiesAddRow.classList.add('form-row-centered');
  freebiesAddRow.style.paddingTop = '8px';
  const freebiesAddBtn = document.createElement('button');
  freebiesAddBtn.type = 'button';
  freebiesAddBtn.textContent = '+ Add Freebie';
  freebiesAddBtn.classList.add('form-alt-btn');
  freebiesAddBtn.addEventListener('click', () => addFreebieRow());
  freebiesAddRow.appendChild(freebiesAddBtn);
  freebiesGroup.appendChild(freebiesAddRow);

  categoryBuilderSection.appendChild(freebiesGroup);
  categoryBuilderSection.appendChild(Object.assign(document.createElement('div'), { className: 'form-row-gap' }));

  // ── Categories section ──
  const groupEl = document.createElement('div');
  groupEl.classList.add('form-group');

  const titleBar = document.createElement('div');
  titleBar.classList.add('form-group-title');
  const titleLabel = document.createElement('div');
  titleLabel.classList.add('form-group-title-label');
  titleLabel.textContent = 'Categories';
  titleBar.appendChild(titleLabel);
  groupEl.appendChild(titleBar);
  groupEl.appendChild(Object.assign(document.createElement('div'), { className: 'form-group-separator' }));

  categoryList = document.createElement('div');
  categoryList.classList.add('form-group-rows');
  groupEl.appendChild(categoryList);

  const addRow = document.createElement('div');
  addRow.classList.add('form-row-centered');
  addRow.style.paddingTop = '8px';
  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.textContent = '+ Add Category';
  addBtn.classList.add('form-alt-btn');
  addBtn.addEventListener('click', () => addCategoryRow());
  addRow.appendChild(addBtn);
  groupEl.appendChild(addRow);

  categoryBuilderSection.appendChild(groupEl);

  const navEl = page1.querySelector('.form-nav');
  if (navEl) page1.insertBefore(categoryBuilderSection, navEl);
  else page1.appendChild(categoryBuilderSection);
})();

// Hidden input carries the chosen template key into formData
const templateKeyInput = document.createElement('input');
templateKeyInput.type = 'hidden';
templateKeyInput.name = 'templateKey';
templateKeyInput.value = 'Thursday';
formContent.appendChild(templateKeyInput);

// Persistent alt-action bar — always visible, across all pages
const modalContent = document.querySelector('#formModal .modal-content');
if (modalContent) {
  const altBar = document.createElement('div');
  altBar.classList.add('form-alt-bar');

  altBtn = document.createElement('button');
  altBtn.type = 'button';
  altBtn.classList.add('form-alt-btn');
  altBtn.style.display = 'none';

  deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.classList.add('form-alt-btn', 'form-delete-btn');
  deleteBtn.textContent = 'Delete Campaign';
  deleteBtn.style.display = 'none';
  deleteBtn.addEventListener('click', async () => {
    if (!editMode?.filename) return;
    const filename = editMode.filename;
    if (!confirm(`Delete "${filename}"? This cannot be undone.`)) return;
    try {
      const resp = await fetch('/api/delete-campaign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, userScope: scope }),
      });
      if (!resp.ok) {
        const err = await resp.json();
        throw new Error(err.error || 'Delete failed');
      }
      editMode = null;
      lastEditedCampaign = null;
      updateAltBtn();
      const modal = document.getElementById('formModal');
      if (modal) modal.style.display = 'none';
      showNotification(`Campaign deleted: ${filename}`);
    } catch (err) {
      showNotification(`Failed to delete: ${err.message}`, true);
    }
  });

  altBar.appendChild(altBtn);
  altBar.appendChild(deleteBtn);
  modalContent.appendChild(altBar);
}

pairToggles();
enhanceJSON();

// --- Helpers ---

function parseCampaignDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('.');
  if (parts.length !== 3) return '';
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}

function setModalTitle(title, subtitle) {
  const h2 = document.querySelector('#formModal h2');
  const p = document.querySelector('#formModal .modal-header p');
  if (h2) h2.textContent = title;
  if (p) p.textContent = subtitle;
}

function resetPages() {
  const pages = formContent.querySelectorAll('section[id^="creatorpage-"]');
  pages.forEach((page, i) => {
    page.style.display = '';
    if (i === 0) page.classList.remove('hidden');
    else page.classList.add('hidden');
  });
}

function setField(name, value) {
  const el = formContent.querySelector(`[name="${name}"]`);
  if (!el) return;
  if (el.type === 'checkbox') {
    el.checked = !!value;
    el.dispatchEvent(new Event('change'));
  } else {
    el.value = value ?? '';
    el.dispatchEvent(new Event('input'));
  }
}

function showNotification(message, isError = false) {
  const el = document.createElement('div');
  el.style.cssText = [
    'position:fixed', 'top:24px', 'right:24px',
    `background:${isError ? '#c0392b' : '#27ae60'}`,
    'color:#fff', 'padding:14px 20px', 'border-radius:8px',
    'font-size:14px', 'font-family:Poppins,sans-serif',
    'z-index:99999', 'box-shadow:0 4px 14px rgba(0,0,0,0.25)',
    'max-width:360px', 'line-height:1.4',
  ].join(';');
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

function updateAltBtn() {
  if (!altBtn) return;
  if (editMode !== null) {
    altBtn.textContent = 'Create New Campaign';
    altBtn.onclick = () => applyCreateMode(false);
    altBtn.style.display = '';
    if (deleteBtn) deleteBtn.style.display = '';
  } else if (lastEditedCampaign) {
    altBtn.textContent = `← Back to editing "${lastEditedCampaign.campaign.name}"`;
    altBtn.onclick = () => applyEditMode(lastEditedCampaign.campaign);
    altBtn.style.display = '';
    if (deleteBtn) deleteBtn.style.display = 'none';
  } else {
    altBtn.style.display = 'none';
    if (deleteBtn) deleteBtn.style.display = 'none';
  }
}

// --- Direct mode functions (called from createCampaign.js via window.__formControl) ---

function applyCreateMode(clearHistory, selectedCampaign = null) {
  if (clearHistory) {
    lastEditedCampaign = null;
  } else if (editMode) {
    lastEditedCampaign = editMode;
  }
  editMode = null;
  setModalTitle('New Campaign', 'Select a template to start from.');
  updateAltBtn();

  // Show template picker, hide all form pages
  const picker = document.getElementById('templatePicker');
  if (picker) picker.style.display = '';
  formContent.querySelectorAll('section[id^="creatorpage-"]').forEach((p) => {
    p.style.display = 'none';
    p.classList.add('hidden');
  });

  // Clear visible fields (leave hidden inputs alone)
  formContent.querySelectorAll('input:not([type="hidden"]), textarea').forEach((el) => {
    if (el.type === 'checkbox') { el.checked = false; el.dispatchEvent(new Event('change')); }
    else { el.value = ''; }
  });

  // Hide accent row until a template that supports it is selected
  const accentEl = formContent.querySelector('[name="accent"]');
  if (accentEl) {
    const accentRow = accentEl.closest('.form-group-row');
    if (accentRow) accentRow.style.display = 'none';
  }

  // Hide and clear the category builder
  if (categoryBuilderSection) categoryBuilderSection.style.display = 'none';
  if (categoryList) categoryList.innerHTML = '';
  if (freebiesList) freebiesList.innerHTML = '';

  // Show/hide the edit card based on whether a campaign is currently selected
  if (editPickerCard) {
    if (selectedCampaign) {
      editPickerCard._campaign = selectedCampaign;
      editCardName.textContent = selectedCampaign.name;
      editPickerCard.style.display = '';
    } else {
      editPickerCard._campaign = null;
      editPickerCard.style.display = 'none';
    }
  }
}

async function applyEditMode(campaign) {
  editMode = { campaign, filename: campaign._filename };
  setModalTitle('Edit Campaign', 'Update the campaign metadata below.');
  updateAltBtn();

  // Hide template picker, show form pages
  const picker = document.getElementById('templatePicker');
  if (picker) picker.style.display = 'none';
  resetPages();

  setField('campaignName', campaign.name);
  setField('campaignDate', parseCampaignDate(campaign.date));
  setField('newsletterId', campaign.startId);
  setField('lpId', campaign.lpId);
  setField('issueCardId', campaign.issueCardId);
  setField('figmaURL', campaign.figmaUrl);
  setField('isArchive', campaign.isArchive);
  setField('optimizeImages', campaign.optimizeImg);
  setField('soonBanners', campaign.soon_banners);
  setField('alarmEnabled', campaign.alarm?.isActive);
  setField('alarmDescription', campaign.alarm?.description);
  setField('accent', campaign.accent);

  if (scope && campaign._filename) {
    try {
      const resp = await fetch(
        `/api/read-campaign?scope=${encodeURIComponent(scope)}&filename=${encodeURIComponent(campaign._filename)}`
      );
      if (resp.ok) {
        const { content } = await resp.json();
        const match = content.match(/const campaignTranslationsSheet\s*=\s*['"]([^'"]+)['"]/);
        if (match) setField('translationsSheet', match[1]);
      }
    } catch {
      // leave the field empty if fetch fails
    }
  }

  // Hide accent row for campaigns that don't support it
  const accentEl = formContent.querySelector('[name="accent"]');
  if (accentEl) {
    const accentRow = accentEl.closest('.form-group-row');
    if (accentRow) accentRow.style.display = campaign.accent ? '' : 'none';
  }

  // Populate template settings from the first template (usually the NS one)
  const tpl = campaign.templates?.[0];
  if (tpl) {
    setField('background', tpl.background);
    setField('color', tpl.color);

    const inside = tpl.Inside ?? tpl.inside;
    setField('insideEnabled', !!inside);
    if (inside) {
      setField('insideColor', inside.color);
      setField('insideBackground', inside.backgroundColor);
      setField('insideType', inside.type);
      setField('insideImage', inside.image);
      setField('insideTranslateImage', !!inside.translateImage);
    }

    const intro = tpl.intro;
    setField('introEnabled', !!intro);
    if (intro) {
      setField('introColor', intro.color);
      setField('introBackground', intro.backgroundColor);
      setField('introAlignment', intro.alignment);
      setField('introType', intro.type);
    }

    const offerPart = tpl.OfferPart ?? tpl.offerPart;
    setField('offerPartEnabled', !!offerPart);
    if (offerPart) {
      setField('offerPartColor', offerPart.color);
      setField('offerPartBackground', offerPart.backgroundColor);
      setField('offerPartAlignment', offerPart.alignment);
      setField('offerPartType', offerPart.type);
    }

    // Populate category builder from existing categories
    const allCats = Array.isArray(tpl.categories) ? tpl.categories : [];
    const gridCats = allCats.filter((c) => c.type === 'grid');
    const dealCat = allCats.find((c) => c.type === 'deal');

    if ((gridCats.length > 0 || dealCat) && categoryBuilderSection) {
      categoryBuilderSection.style.display = '';
    }

    if (gridCats.length > 0 && categoryList) {
      categoryList.innerHTML = '';
      for (const cat of gridCats) {
        const prods = (cat.products || []).slice(0, 4).map((p) => ({
          id: String(p.id || ''),
          name: lookupProductName(campaign.startId, p.id) || '',
        }));
        addCategoryRow(cat.name || '', prods, cat.cta !== false);
      }
    }

    if (dealCat?.freebies?.[0] && freebiesList) {
      freebiesList.innerHTML = '';
      if (freebiesGroup) freebiesGroup.style.display = '';
      for (const freebie of dealCat.freebies[0]) {
        addFreebieRow(
          String(freebie.id || ''),
          lookupProductName(campaign.startId, freebie.id) || ''
        );
      }
    }
  }
}

window.__formControl = { applyCreateMode, applyEditMode };

// Set initial state: picker visible, form pages hidden
applyCreateMode(true);

// --- Submit ---

document.addEventListener('creatorFormSubmit', async (event) => {
  const formData = event.detail;

  const startId = getStartId();

  // Collect freebies
  if (freebiesList) {
    const freebies = [];
    freebiesList.querySelectorAll('.freebie-item').forEach((row) => {
      const id = (row.querySelector('.freebie-id')?.value || '').trim();
      const existingName = row.querySelector('.cat-product-name')?.textContent?.trim() || '';
      const name = existingName || (id ? lookupProductName(startId, id) : null) || null;
      if (id) freebies.push({ id, name });
    });
    if (freebies.length > 0) formData.freebies = freebies;
  }

  // Collect categories from the category builder
  if (categoryList) {
    const cats = [];
    categoryList.querySelectorAll('.category-row').forEach((row) => {
      const name = (row.querySelector('.cat-name')?.value || '').trim();
      const cta = row.querySelector('.cat-cta')?.checked ?? true;
      const products = [];
      row.querySelectorAll('.cat-product-item').forEach((item) => {
        const id = (item.querySelector('.cat-product-id')?.value || '').trim();
        const existingName = item.querySelector('.cat-product-name')?.textContent?.trim() || '';
        const prodName = existingName || (id ? lookupProductName(startId, id) : null) || null;
        products.push({ id, name: prodName });
      });
      cats.push({ name, products, cta });
    });
    if (cats.length > 0) formData.categories = cats;
  }

  try {
    if (!scope) {
      throw new Error('User scope (VITE_SCOPE) is not configured. Please check your .env file.');
    }

    if (!formData.campaignName || !formData.campaignDate) {
      alert('Campaign Name and Date are required!');
      return;
    }

    const modal = document.getElementById('formModal');

    if (editMode) {
      const filename = await updateCampaignMetadata(formData, editMode.filename, editMode.campaign);
      if (modal) modal.style.display = 'none';
      showNotification(`Campaign updated: ${filename}`);
    } else {
      const { filename, path } = await createAndSaveCampaignFile(formData, scope);
      if (modal) modal.style.display = 'none';
      showNotification(`Campaign created: ${filename} — reloading…`);
      setTimeout(() => window.location.reload(), 1500);
    }
  } catch (error) {
    console.error('Error saving campaign file:', error);
    alert('Error saving campaign file: ' + error.message);
  }
});
