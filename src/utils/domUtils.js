export function getDOMElements() {
  const selectShop = document.querySelector('#shops');
  const selectLanguage = document.querySelector('#languages');
  const selectCampaigns = document.querySelector('#campaigns');
  const selectTemplates = document.querySelector('#templates');
  const selectPurge = document.querySelector('#purge');

  return {
    selectShop,
    selectShopWrapper: selectShop?.parentElement,

    selectLanguage,
    selectLanguageWrapper: selectLanguage?.parentElement,

    selectCampaigns,
    selectCampaignsWrapper: selectCampaigns?.parentElement,

    selectTemplates,
    selectTemplatesWrapper: selectTemplates?.parentElement,

    newProducts: document.querySelector('#new_products'),
    newCampaign: document.querySelector('#new_campaign'),
    copyTemplate: document.querySelector('.copyTemplate'),
    openCampaign: document.querySelector('.openCampaign'),
    openIssue: document.querySelector('.openIssue'),
    openFigma: document.querySelector('.figmaCard'),
    openLP: document.querySelector('.openLP'),
    purgeDynamicSpreadsheet: document.querySelector('.purgeDynamicSpreadsheet'),

    tabName: document.querySelector('#tabName'),
    year: document.querySelector('#year'),

    selectPurge,
    selectPurgeWrapper: selectPurge?.parentElement,
    // Login button is handled separately in setupEventListeners
    // login: document.querySelector('#login'),
  };
}

export function createSelectOption(value, text, isDefault = false) {
  const option = document.createElement('option');
  option.value = value;
  option.textContent = text;
  if (isDefault) {
    option.defaultSelected = true;
  }
  return option;
}

export function populateSelect(selectElement, items, defaultText = 'Select option') {
  selectElement.innerHTML = '';

  // Add default option
  const defaultOption = createSelectOption('default', defaultText, true);
  selectElement.appendChild(defaultOption);

  // Add items
  items.forEach((item) => {
    const option = createSelectOption(item.value, item.text);
    selectElement.appendChild(option);
  });
}

export function toggleElementDisplay(element, show = true) {
  if (element) {
    element.style.display = show ? 'inherit' : 'none';
  }
}

export function showElements(...elements) {
  elements.forEach((element) => toggleElementDisplay(element, true));
}

export function hideElements(...elements) {
  elements.forEach((element) => toggleElementDisplay(element, false));
}
