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
  scope: null,
  scopes: [],
};

function getRoot() {
  return document.querySelector('#app-content');
}

function getLoader() {
  return document.querySelector('#loader');
}

const listeners = new Set();

export function subscribeState(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function setState(key, value) {
  state[key] = value;

  // Notify all state subscribers
  listeners.forEach((listener) => {
    try {
      listener(key, value, state);
    } catch (e) {
      console.error('State listener error:', e);
    }
  });

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

