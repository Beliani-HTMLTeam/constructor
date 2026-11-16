// Helpers
import { computeValue } from '@/helpers/computeValue';
import { translateLink } from '@/helpers/translateLink';
import { translateImage } from '@/helpers/translateImage';
import { getImageUrl } from '@/utils/ImageManager';

import { resolveQuery, resolveAssets } from './resolveAssets';

import lpCss from '../lp.css?inline';
import { getCategoryName } from '@/templates/DimaSrc/newsletter_regular_friday1/utils/categories';
import { resolveCategories } from './resolveCategories';

const renderIntro = (queries, includeHeader = false) => {
  console.log(queries);

  return `
<div class="lpIntro">
  ${includeHeader === true ? `<h2 class="header">${resolveQuery(queries.shop_header)[0]}</h2>` : ''}
  <span class="lpCatTitle">${resolveQuery(queries.intro)[0]}</span>
  <span class="lpCatDescription">${resolveQuery(queries.intro)[1]}</span>
</div>
  `;
};

const renderProduct = (product) => `
<article class="lpProduct"${product?.country == undefined ? " style='border: 2px solid #F00;'" : ''}>
  ${product.href ? `<a href="${product.href}" target="_blank">` : ''}
    <img src="${product.src}" alt="${product.name}" loading="lazy" />
    <div class="productInfo">
        <span class="productName">${product.name ?? ''}</span>

        <div class="prices">
          <span class="lowPrice">${product.lowPrice ?? ''}</span>

          ${product.highPrice ? `
            <del class="highPrice">${product.highPrice}</del>
          ` : ''}
        </div>
      </div>
  ${product.href ? `</a>` : ''}
</article>`;

const renderTopCategories = (images = [], categories = []) => `
  <div class="topCategories">
    ${images.map((src, index) => `
      <a href="${categories[index]?.href ?? '#'}" target="_blank">
        <img
          src="${src}"
          alt="${categories[index]?.name ?? ''}"
        >
      </a>
    `).join('')}
  </div>
`;
const renderCategory = (category, index, shopNow) => `
<section class="lpCategory" id="lp-cetegory-${index + 1}">
  <div class="lpIntro">
    <h2 class="lpCatTitle">${category.name ?? ''}</h2>
    <span class="lpCatDescription">
      ${category.description ?? ''}
    </span>
    ${category.catColors ? `
      <img
        class="lpCatColors"
        src="${category.catColors}"
        alt=""
        loading="lazy"
      >
    ` : ''}

    ${category.href ? `
      <a class="lpCta" href="${category.href}" target="_blank">
        ${shopNow}
      </a>
    `: ''}
  </div>
  ${category.src ? `
    ${category.href ? `<a href="${category.href}" target="_blank">` : ''}
      <img
        class="lpCategoryImage"
        src="${category.src}"
        alt=""
        loading="lazy"
      >
    ${category.href ? '</a>' : ''}
  ` : ''}
  <div class="lpProducts">
    ${category.products?.map(renderProduct).join('') ?? ''}
  </div>
</section>`;

export const Landing = async ({
  queries,
  props = {},
  categories = [],
  getProductById,
  getCategoryTitle,
  getCategoryLink,
  getPhrase,
}) => {
  const { images, links } = resolveAssets(props);
  const shopNow = getPhrase('Shop now');

  const resolvedCategories = await resolveCategories({
    categories,
    queries,
    getProductById,
    getCategoryTitle,
    getCategoryLink,
  });

  return `<style>${lpCss}</style>

<!-- LANDING PAGE -->
<div class="wideLanding">
${renderTopCategories(images.topCats ?? [], resolvedCategories)}
  ${renderIntro(queries, true)}
  ${resolvedCategories.map((category, index) =>
    renderCategory({
        ...category,
        src: images.cats?.[index] ?? category.src,
        catColors: images.catColors?.[index] ?? '',
      },
      index,
      shopNow
    )
  ).join('')}
</div>`;
};
