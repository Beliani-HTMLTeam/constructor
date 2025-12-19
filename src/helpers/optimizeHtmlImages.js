import { swapImage } from '@/helpers/swapImage.js';

let _optimizeContainer = null;

export function optimizeHtmlImages(inputHtml, getState) {
  const isNeedToOptimizeImg = getState('optimizeImg');
  if (!isNeedToOptimizeImg) return inputHtml;

  const isNewsletter = getState('template')?.type === 'newsletter';

  if (isNewsletter) return inputHtml;

  const container = _optimizeContainer || (_optimizeContainer = document.createElement('div'));
  container.innerHTML = inputHtml;

  const imgs = container.querySelectorAll('img');
  imgs.forEach((img) => {
    const src = img.getAttribute('src');

    // ! this prevents .gif files from being converted
    if (/\.gif(\?|$)/i.test(src)) return;

    const newSrc = swapImage({ format: '.webp', src });
    if (newSrc && newSrc !== src) img.setAttribute('src', newSrc);
  });

    const result = container.innerHTML;
  container.innerHTML = '';
  
  return result;
}
