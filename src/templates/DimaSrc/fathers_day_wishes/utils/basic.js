import { topImageTitleKeywords } from '../constants/basicConstants';

export function includesKeywords({ title, keywords }) {
  for (let keyword of topImageTitleKeywords) {
    if (String(title).toLowerCase().includes(keyword)) {
      return true;
    }
  }

  return false;
}
