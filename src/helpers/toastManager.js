import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default function toast({ message = null, escapeMarkup = false, duration = 3000 }) {
  if (!message) return console.warn('Toast message is empty');

  return Toastify({
    text: message,
    escapeMarkup: escapeMarkup,
    duration: duration,
  }).showToast();
}
