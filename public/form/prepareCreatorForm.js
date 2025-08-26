import {
  createContainer,
  createInput,
  createLabel,
  createToggle,
  setupFormNavigationButton,
} from "./domUtils.js";
import { pairToggles } from "./pairTogglableInputs.js";
import { enhanceJSON } from "./enhanceJSON.js";

// prettier-ignore
const schema = [
  // page 1
  [
    [
      { name: 'newsletterId', id: 'newsletterId', type: 'number', label: 'Newsletter ID', placeholder: "35735", required: true },
      { name: 'contentPageId', id: 'contentPageId', type: 'number', label: 'Content Page ID', placeholder: "21163" },
      { name: 'issueCardId', id: 'issueCardId', type: 'number', label: 'Issue Card ID', placeholder: "5437" },
    ],
    [
      { name: 'specialLPToggle', id: 'specialLPToggle', type: 'checkbox', label: 'Special LP Ids?' },
      { name: 'specialLPIds', id: 'specialLPIds', type: 'textarea', label: 'Special LP IDs', placeholder: '{\n\t"[COUNTRY]": [LP_ID]\n\n\t<< example: >>\n\t"PL": 2137\n}', disabled: true },
    ],
    [
      { name: 'campaignName', id: 'campaignName', type: 'text', label: 'Campaign Name', placeholder: "Autumn colors", required: true },
      { name: 'campaignDate', id: 'campaignDate', type: 'date', label: 'Campaign Date', required: true },
    ],
    [
      { name: 'figmaURL', id: 'figmaURL', type: 'text', label: 'Figma URL', placeholder: "https://www.figma.com/design/...",  },
    ],
    [
      { name: 'isArchive', id: 'isArchive', type: 'checkbox', label: 'Is Archived?' },
      { name: 'optimizeImages', id: 'optimizeImages', type: 'checkbox', label: 'Optimize Images?' },
      { name: 'familyVersion', id: 'familyVersion', type: 'toggle', label: 'Family Version',
        option1: {
          label: 'NEW',
          value: 0
        },
        option2: {
          label: 'OLD',
          value: 1
        }
      },
    ],
    [
      { name: 'alarmEnabled', id: 'alarmEnabled', type: 'checkbox', label: 'Alarm Enabled?' },
      { name: 'alarmDescription', id: 'alarmDescription', type: 'text', label: 'Alarm Description', placeholder: "Check campaign banners issue status", disabled: true },
    ]
  ],
  // page2
  [
    [ { name: 'testField', id: 'testField', type: 'text', label: 'Test Field' } ]
  ]
];

const formContent = document.querySelector(".form-content");

// Add a close button to the modal header that hides the modal with id `formModal`
(() => {
  const modal = document.getElementById("formModal");
  const header = document.querySelector(".modal-header");
  if (!modal || !header) return;

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.classList.add("close-modal");

  // create inline SVG 'X' icon for close (accessible)
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("width", "18");
  svg.setAttribute("height", "18");
  svg.classList.add("svg-icon");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Close");

  const title = document.createElementNS(svgNS, "title");
  title.textContent = "Close";
  svg.appendChild(title);

  const path = document.createElementNS(svgNS, "path");
  // simple X path
  path.setAttribute("d", "M6 6 L18 18 M6 18 L18 6");
  path.setAttribute("stroke", "#222");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("fill", "none");
  svg.appendChild(path);

  closeBtn.appendChild(svg);
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  header.appendChild(closeBtn);

  // allow Escape key to close the modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });
})();

// Delegated handler: ensure any Cancel button (existing or added later) closes the modal
document.addEventListener("click", (e) => {
  const target = e.target;
  const cancel = target.closest ? target.closest(".cancel-btn") : null;
  const close = target.closest ? target.closest(".close-modal") : null;
  if (!cancel && !close) return;
  const modal = document.getElementById("formModal");
  if (modal) modal.style.display = "none";
});

schema.forEach((page, page_id) => {
  const pageSection = document.createElement("section");

  pageSection.name = `creatorpage-${page_id}`;
  pageSection.id = `creatorpage-${page_id}`;

  if (page_id > 0) {
    pageSection.classList.add("hidden");
  }

  page.forEach((row, row_id) => {
    const rowContainer = createContainer(`row-${row_id}`);

    row.forEach((field) => {
      const container = createContainer();
      let toggle, input, label;

      switch (field.type) {
        case "toggle":
          input = createToggle(field);
          break;
        case "checkbox":
          input = createInput(field);
          if (row.length === 2) {
            container.style.flex = ".47";
          }
          break;
        default:
          input = createInput(field);
      }
      label = createLabel(field);

      container.appendChild(label);
      container.appendChild(input);
      rowContainer.appendChild(container);
    });

    pageSection.appendChild(rowContainer);
  });

  if (page_id + 1 !== schema.length) {
    // show next page button
    const nav = document.createElement("div");
    nav.classList.add("form-nav");

    // back button when not the first page
    if (page_id > 0) {
      const backBtn = setupFormNavigationButton("back", page_id);
      backBtn.classList.add("back-btn");
      backBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const current = document.getElementById(`creatorpage-${page_id}`);
        if (current) current.classList.add("hidden");
      });
      nav.appendChild(backBtn);
    }

    // cancel button (persistent in nav)
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.addEventListener("click", () => {
      const modal = document.getElementById("formModal");
      if (modal) modal.style.display = "none";
    });
    nav.appendChild(cancelBtn);

    const nextBtn = setupFormNavigationButton("next", page_id);
    nextBtn.classList.add("next-btn");
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const current = document.getElementById(`creatorpage-${page_id}`);
      if (current) current.classList.add("hidden");
    });
    nav.appendChild(nextBtn);
    pageSection.appendChild(nav);
  } else if (page_id === 0) {
    // show next page button (first and only two-page case)
    const nav = document.createElement("div");
    nav.classList.add("form-nav");
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.addEventListener("click", () => {
      const modal = document.getElementById("formModal");
      if (modal) modal.style.display = "none";
    });

    const nextBtn = setupFormNavigationButton("next", page_id);
    nextBtn.classList.add("next-btn");
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const current = document.getElementById(`creatorpage-${page_id}`);
      if (current) current.classList.add("hidden");
    });
    nav.appendChild(cancelBtn);
    nav.appendChild(nextBtn);
    pageSection.appendChild(nav);
  } else {
    // last page: show back and submit
    const nav = document.createElement("div");
    nav.classList.add("form-nav");

    const backBtn = setupFormNavigationButton("back", page_id);
    backBtn.classList.add("back-btn");
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const current = document.getElementById(`creatorpage-${page_id}`);
      if (current) current.classList.add("hidden");
    });
    nav.appendChild(backBtn);

    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";
    cancelBtn.classList.add("cancel-btn");
    cancelBtn.addEventListener("click", () => {
      const modal = document.getElementById("formModal");
      if (modal) modal.style.display = "none";
    });
    nav.appendChild(cancelBtn);

    const submitBtn = document.createElement("button");
    submitBtn.type = "button";
    submitBtn.textContent = "Submit";
    submitBtn.classList.add("submit-btn");
    // simple submit behavior: collect inputs and log as form data
    submitBtn.addEventListener("click", () => {
      const inputs = formContent.querySelectorAll("input, textarea");
      const data = {};
      inputs.forEach((el) => {
        if (!el.name) return;
        if (el.type === "checkbox") {
          data[el.name] = el.checked;
          return;
        }
        data[el.name] = el.value;
      });
      // trigger a custom event with the collected data for other code to handle
      const evt = new CustomEvent("creatorFormSubmit", { detail: data });
      document.dispatchEvent(evt);
    });
    nav.appendChild(submitBtn);

    pageSection.appendChild(nav);
  }
  formContent.appendChild(pageSection);
});

pairToggles();
enhanceJSON();
