import { ImageWithLink } from './ImageWithLink.js';
import { Space } from './Space.js';
import { Paragraph } from './Paragraph.js';
import { toast } from 'sonner';
import { CTA } from './CTA.js';
import { Line } from '../../components/components/Line.js';
import { WhiteLine } from './whiteLine.js';
import { renderProducts } from './category/renderProducts.js';
import { renderCategory } from './category/renderCategory.js';

const Categories = async ({
  getPhrase,
  getCategoryLink,
  getCategoryTitle,
  categories,
  categories_line,
  queries,
  add_utm,
  country
}) => {
  let html = '';

  if (Array.isArray(categories)) {
    for (const category of categories) {
      html += await renderCategory(
        category,
        categories.indexOf(category),
        categories.length,
        queries,
        getPhrase,
        getCategoryLink,
        getCategoryTitle,
        add_utm,
        categories_line,
        country
      );
    }
  }

  return html;
};

export { Categories };
