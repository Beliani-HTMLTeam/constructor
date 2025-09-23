import generateLoginURL from '@utils/generateLoginURL.js';
import Toastify from 'toastify-js';
export class GoogleAuth {
  static async login() {
    window.location.href = generateLoginURL();
  }
}

const access = location.hash.split('&')[0].split('=')[1];
if (access) {
  localStorage.setItem('token', access);
  window.location.href = window.location.origin;
  Toastify({
    text: 'Token successfully setted.',
    escapeMarkup: false,
    duration: 3000,
  }).showToast();
}
