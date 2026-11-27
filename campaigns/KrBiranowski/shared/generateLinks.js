import { translateLink } from '@/helpers/translateLink.js';
import { translateImage } from '@/helpers/translateImage.js';
import { getImageUrl } from '@/utils/ImageManager.js';

export const generateLinks = ({
  date,
  landingPage,
  topImageTitle = '{date}_01.png',
  topImage = '{date}_topImage.jpg',
  custom = {},
}) => {
  const year = date.slice(2, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);

  const href = translateLink({
    value: landingPage ?? `content/lp${year}-${month}-${day}`,
  });

  const filename = (pattern) => pattern.replaceAll('{date}', date);

  const links = {
    TopImageTitle_href: href,
    TopImageTitle_src: translateImage({
      value: filename(topImageTitle),
    }),
    TopImage_href: href,
    TopImage_src: getImageUrl(filename(topImage), true),
    Timer_href: href,
    ...custom,
  };

  Object.keys(custom).forEach((key) => {
    if (
      key.endsWith('_href') &&
      typeof custom[key] === 'string' &&
      custom[key].startsWith('content/lp')
    ) {
      links[key] = translateLink({
        value: custom[key],
      });
    }
  });

  return links;
};
