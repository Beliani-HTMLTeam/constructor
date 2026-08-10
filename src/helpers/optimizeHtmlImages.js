import { swapImage } from '@/helpers/swapImage.js';

let _optimizeContainer = null;

export function optimizeHtmlImages(inputHtml, getState) {
  const isNeedToOptimizeImg = getState('optimizeImg');
  console.warn("shop", getState('shop'), "isNeedToOptimizeImg", isNeedToOptimizeImg, "inputHtml", inputHtml);
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
    if (/\.svg(\?|$)/i.test(src)) return;
    if (/\.mp4(\?|$)/i.test(src)) return;

    const newSrc = swapImage({ format: '.webp', src });
    if (newSrc && newSrc !== src) img.setAttribute('src', newSrc);
  });

  const videos = container.querySelectorAll('video');
  videos.forEach((video) => {
    const src = video.getAttribute('src');
    if (!src) return;

    // Only touch videos that still use the generic host
    if (!src.includes('https://pictureserver.net/static/')) return;

    const shop = getState('shop');
    const shopSlug = (shop?.slug || '').toUpperCase();
    if (!shopSlug) return; // shop not ready yet

    const imgShops  = ['CHDE', 'CHFR', 'CHIT', 'BEFR', 'BENL', 'CH', 'DE', 'FR', 'AT', 'ES', 'PL', 'BE', 'PT'];
    const vidShops  = ['UK', 'NL', 'IT', 'HU', 'DK', 'CZ', 'SK', 'RO', 'HR', 'SI'];
    const imgfShops = ['SE', 'FI', 'NO'];

    let prefix = 'img.'; // safe default

    if (imgShops.some(code => shopSlug === code || shopSlug.startsWith(code))) {
      prefix = 'img.';
    } else if (vidShops.some(code => shopSlug === code || shopSlug.startsWith(code))) {
      prefix = 'vid.';
    } else if (imgfShops.some(code => shopSlug === code || shopSlug.startsWith(code))) {
      prefix = 'imgf.';
    }

    const newSrc = src.replace(
      'https://pictureserver.net/static/',
      `https://${prefix}pictureserver.net/static/`
    );

    if (newSrc !== src) {
      video.setAttribute('src', newSrc);
    }
  });
    const result = container.innerHTML;
  container.innerHTML = '';
  
  return result;
}
