import {
  createContainer,
  createInput,
  createLabel,
  createToggle,
  setupFormNavigationButton,
} from './domUtils.js';
import { pairToggles } from './pairTogglableInputs.js';
import { enhanceJSON } from './enhanceJSON.js';
import { createAndSaveCampaignFile } from './createCampaignFile.js';
import { schema } from './form.schema.js';

const scope = __SCOPE__ || import.meta.env?.VITE_SCOPE;
console.log('prepareCreatorForm.js - scope:', scope); // Debug log

if (!scope) {
  console.error('VITE_SCOPE is not defined in environment variables!');
  alert('Error: User scope (VITE_SCOPE) is not configured. Please check your .env file.');
}
const formContent = document.querySelector('.form-content');

// Add a close button to the modal header that hides the modal with id `formModal`
(() => {
  const modal = document.getElementById('formModal');
  const header = document.querySelector('.modal-header');
  if (!modal || !header) return;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.classList.add('close-modal');

  const xImg = document.createElement('img');
  xImg.src = '/icons/ep--close-bold.svg';

  closeBtn.appendChild(xImg);
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  header.appendChild(closeBtn);

  // allow Escape key to close the modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') modal.style.display = 'none';
  });
})();

// Delegated handler: ensure any Cancel button (existing or added later) closes the modal
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

  // helper: render a normal row (array of field descriptors).
  // parentEl: element to append created row containers into (defaults to pageSection)
  // inGroup: when true, mark created row containers with `.form-group-row` class
  const renderRowArray = (rowArray, baseRowId, parentEl = pageSection, inGroup = false) => {
    const maxPerLine = 5;
    let startIndex = 0;
    let chunkCounter = 0;

    // center single checkbox rows only when the rowArray contains exactly one field
    // or when not rendering inside a group. This prevents pulling the first checkbox
    // out of a multi-field group row (e.g. Other Settings first row).
    if (
      rowArray.length > 0 &&
      rowArray[0].type === 'checkbox' &&
      (rowArray.length === 1 || !inGroup)
    ) {
      const singleRowContainer = createContainer(`row-${baseRowId}-${chunkCounter}`);
      // use CSS class for centering instead of inline style
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

  // now walk page entries — each entry can be a plain row (array) or a group object
  page.forEach((row, row_id) => {
    if (Array.isArray(row)) {
      renderRowArray(row, row_id);
      return;
    }

    // group object support: { type: 'group' | group: true, title: string, rows: [...] }
    if (row && (row.type === 'group' || row.group)) {
      // top gap (separate group from previous rows)
      const gap = document.createElement('div');
      gap.classList.add('form-row-gap');
      pageSection.appendChild(gap);

      // group wrapper
      const groupContainer = document.createElement('div');
      groupContainer.classList.add('form-group');

      // extract leading checkbox from group's first row if it matches *Enabled pattern
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
          // remove the field from rows so it doesn't render again
          row.rows[0].splice(0, 1);
          if (row.rows[0].length === 0) {
            row.rows.splice(0, 1);
          }
        }
      }

      // title bar: clickable label + optional checkbox on right
      const titleBar = document.createElement('div');
      titleBar.classList.add('form-group-title');

      const titleLabel = document.createElement('div');
      titleLabel.classList.add('form-group-title-label');
      titleLabel.textContent = row.title || '';
      titleBar.appendChild(titleLabel);

      // show an expand/collapse arrow on the right when there's no title checkbox
      let expandEl = null;
      if (!titleCheckboxField) {
        expandEl = document.createElement('div');
        expandEl.classList.add('form-group-expand');
        expandEl.textContent = '◀';
        titleBar.appendChild(expandEl);
      }

      // checkbox placed on title line (if found)
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

        // prevent clicks on the checkbox label/input from bubbling
        chkInput.addEventListener('click', (ev) => ev.stopPropagation());
        chkLabel.addEventListener('click', (ev) => ev.stopPropagation());

        chkContainer.appendChild(chkLabel);
        chkContainer.appendChild(chkInput);
        titleBar.appendChild(chkContainer);

        // expand/collapse controlled by checkbox state (checked && not disabled)
        const updateExpandedFromCheckbox = () => {
          const isEnabled = !!chkInput.checked && !chkInput.disabled;
          setExpanded(isEnabled);
        };

        chkInput.addEventListener('change', (ev) => {
          ev.stopPropagation();
          updateExpandedFromCheckbox();
        });

        // observe disabled attribute changes to collapse when disabled
        const mo = new MutationObserver(() => updateExpandedFromCheckbox());
        mo.observe(chkInput, {
          attributes: true,
          attributeFilter: ['disabled'],
        });

        // set initial state from checkbox
        // note: we'll call setExpanded(initialExpanded) after rows are appended
        var initialExpanded = !!chkInput.checked && !chkInput.disabled;
      } else {
        // clicking the title label toggles collapse when there's no title checkbox
        titleLabel.style.cursor = 'pointer';
        titleLabel.addEventListener('click', () => setExpanded(!expanded));
      }

      groupContainer.appendChild(titleBar);

      // top separator
      const sepTop = document.createElement('div');
      sepTop.classList.add('form-group-separator');
      groupContainer.appendChild(sepTop);

      // render internal rows into rowsWrapper
      if (Array.isArray(row.rows)) {
        row.rows.forEach((innerRow, idx) => {
          if (Array.isArray(innerRow) && innerRow.length > 0) {
            renderRowArray(innerRow, `${row_id}-${idx}`, rowsWrapper, true);
          }
        });
      }

      groupContainer.appendChild(rowsWrapper);

      // // bottom separator
      // const sepBottom = document.createElement("div");
      // sepBottom.classList.add("form-group-separator");
      // groupContainer.appendChild(sepBottom);

      pageSection.appendChild(groupContainer);

      // initial state: if we had a title checkbox use its state, otherwise expanded
      if (typeof initialExpanded !== 'undefined') {
        setExpanded(initialExpanded);
      } else {
        setExpanded(true);
      }

      return;
    }

    // fallback: try to treat as a normal row
    if (row && typeof row === 'object') {
      // if it's an object that isn't a group but contains fields, try to render as array
      if (Array.isArray(row.fields)) {
        renderRowArray(row.fields, row_id);
        return;
      }
    }

    // otherwise ignore silently
  });

  if (page_id + 1 !== schema.length) {
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
  } else if (page_id === 0) {
    const nav = document.createElement('div');

    nav.classList.add('form-nav');

    const cancelBtn = document.createElement('button');

    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('cancel-btn');

    cancelBtn.addEventListener('click', () => {
      const modal = document.getElementById('formModal');
      if (modal) modal.style.display = 'none';
    });

    const nextBtn = setupFormNavigationButton('next', page_id);

    nextBtn.classList.add('next-btn');

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const current = document.getElementById(`creatorpage-${page_id}`);

      if (current) current.classList.add('hidden');
    });

    nav.appendChild(cancelBtn);
    nav.appendChild(nextBtn);
    pageSection.appendChild(nav);
  } else {
    // last page: show back and submit
    const nav = document.createElement('div');
    nav.classList.add('form-nav');

    const backBtn = setupFormNavigationButton('back', page_id);
    backBtn.classList.add('back-btn');
    backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const current = document.getElementById(`creatorpage-${page_id}`);
      if (current) current.classList.add('hidden');
    });
    nav.appendChild(backBtn);

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
    // simple submit behavior: collect inputs and log as form data
    submitBtn.addEventListener('click', () => {
      const inputs = formContent.querySelectorAll('input, textarea');
      const data = {};

      inputs.forEach((el) => {
        if (!el.name) return;
        if (el.type === 'checkbox') {
          data[el.name] = el.checked;
          return;
        }
        data[el.name] = el.value;
      });

      // `familyVersion` comes from a hidden input and should be numeric (0 = NEW, 1 = OLD)
      if (typeof data.familyVersion !== 'undefined') {
        const num = Number(data.familyVersion);
        data.familyVersion = Number.isNaN(num) ? data.familyVersion : num;
      }

      // trigger a custom event with the collected data for other code to handle
      const evt = new CustomEvent('creatorFormSubmit', { detail: data });
      document.dispatchEvent(evt);
    });
    nav.appendChild(submitBtn);

    pageSection.appendChild(nav);
  }

  formContent.appendChild(pageSection);
});

pairToggles();
enhanceJSON();

// Handle form submission to create campaign file
document.addEventListener('creatorFormSubmit', async (event) => {
  const formData = event.detail;
  console.log('Form submitted with data:', formData);

  try {
    // Validate scope first
    if (!scope) {
      throw new Error('User scope (VITE_SCOPE) is not configured. Please check your .env file.');
    }

    // Validate required fields
    if (!formData.campaignName || !formData.campaignDate) {
      alert('Campaign Name and Date are required!');
      return;
    }

    // Create campaign file
    const { filename, path } = await createAndSaveCampaignFile(formData, scope);

    // Show success message
    const modal = document.getElementById('formModal');
    if (modal) {
      // Create success message
      const successDiv = document.createElement('div');
      successDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #4CAF50;
        color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        z-index: 10001;
        text-align: center;
        max-width: 400px;
      `;
      successDiv.innerHTML = `
        <h3>Campaign Created Successfully! ✓</h3>
        <p><strong>File:</strong> ${filename}</p>
        <p><strong>Path:</strong> ${path}</p>
        <button onclick="this.parentElement.remove()" style="
          background: white;
          color: #4CAF50;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        ">Close</button>
      `;
      document.body.appendChild(successDiv);

      // Auto-remove after 5 seconds
      setTimeout(() => {
        if (successDiv.parentElement) {
          successDiv.remove();
        }
      }, 5000);

      // Hide form modal
      modal.style.display = 'none';
    }
  } catch (error) {
    console.error('Error creating campaign file:', error);
    alert('Error creating campaign file: ' + error.message);
  }
});
