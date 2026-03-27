const state = {
  queries: {},
  country: '',
  loading: false,
  ids: {},
  translations: {},
  selectedCampaign: {},
  selectedTemplates: [],
  shop: null,
  campaigns: [],
};

function getRoot() {
  return document.querySelector('#app-content');
}

function getLoader() {
  return document.querySelector('#loader');
}

export function setState(key, value) {
  state[key] = value;

  if (key !== 'loading') return;

  const root = getRoot();
  const loader = getLoader();

  if (!loader) return;

  // cast to type jik
  if (Boolean(value)) {
    if (root) {
      root.innerHTML = '';
    }
    loader.classList.add('loader-visible');
  } else {
    loader.classList.remove('loader-visible');
  }
}

export function getState(key) {
  if (key in state) {
    return state[key];
  } else {
    return undefined;
  }
}
