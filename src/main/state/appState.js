import { root } from '@/app.js';
import { SpinnerInit } from '@/helpers/spinner/spinerOptions.js';

const state = {
  queries: {},
  country: '',
  loading: false,
  ids: {},
  translations: {},
  selectedCampaign: {},
  selectedTemplates: [],
  shop: null,
};

export function setState(key, value) {
  state[key] = value;

  if (key === 'loading' && value === true) {
    root.innerHTML = '';
    SpinnerInit.spin(root);
  }

  if (key === 'loading' && value === false) {
    SpinnerInit.stop(root);
  }
}

export function getState(key) {
  if (key in state) {
    return state[key];
  } else {
    return undefined;
  }
}
