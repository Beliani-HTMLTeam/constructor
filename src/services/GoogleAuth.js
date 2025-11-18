import generateLoginURL from '@utils/generateLoginURL.js';
import { toast } from 'sonner';

/* @deprecated This class/file is deprecated and will be removed in future versions.
We are using our API to gather translations now */

export class GoogleAuth {
  static async login() {
    window.location.href = generateLoginURL();
  }
}

const access = location.hash.split('&')[0].split('=')[1];

if (access) {
  localStorage.setItem('token', access);
  window.location.href = window.location.origin;

  toast({ message: 'Token successfully set.' });
}
