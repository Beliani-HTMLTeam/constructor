import { handleProduct } from '@/main/handlers/index.js';
import { getQueryLink } from '@/helpers/getQueryLink.js';
import { getState } from '@/main/state/appState';
import { staticTranslations } from '@/translations-api/getTranslations';

import _templates from '@/main/data/templates.js';
import _categoriesLinks from '@/main/data/categoriesLinks.js';
import _categoriesTitles from '@/main/data/categoriesTitles.js';
import _header from '@/main/data/header.js';
import _footer from '@/main/data/footer.js';

import { toast } from 'sonner';

import prodJson from './products.example.json';

export class TemplateHandlers {
  isCalled = false;
  constructor({
    products,
    // , categoriesLinks, categoriesTitles, footer, header, templates
  }) {
    this.products = products;
    // this.categoriesLinks = categoriesLinks;
    // this.categoriesTitles = categoriesTitles;
    // this.footer = footer;
    // this.header = header;
    // this.templates = templates;
  }

  // getProductById = (productId, src, options) => {
  //   const shop = getState('shop') ?? {};
  //   const rawSeller = String(shop.seller ?? '');
  //   const seller = rawSeller.replace('Beliani.', '').toUpperCase();

  //   const DEFAULT_SHOP = { price: '00.00', oldPrice: '00.00', url: undefined };

  //   const match = prodJson[productId] ?? {
  //     name: `Product not found [id: ${productId}]`,
  //     shops: { [seller]: DEFAULT_SHOP },
  //   };

  //   const shopData = (match.shops && match.shops[seller]) ?? DEFAULT_SHOP;

  //   let product = {
  //     country: shop.slug,
  //     src,
  //     name: match.name ?? `Product not found [id: ${productId}]`,
  //     lowPrice: shopData.price,
  //     highPrice: shopData.oldPrice,
  //     href: shopData.url,
  //   };

  //   return handleProduct(product, options);
  // };

  getProductById = (productId, src, options) => {
    if (!this.isCalled && !this.products) {
      this.isCalled = true;

      return toast.error('Products not found, add products to the campaign.');
    }

    const country = getState('country');
    const shop = getState('shop');
    const languageHREF = shop.languages.find((item) => item.language.slug === country);

    let country_products = this.products?.filter(
      (product) => product.country === shop.slug.toLowerCase()
    );

    const product = country_products?.find(
      (product) => Number(product.main_id) === Number(productId)
    );

    if (!product) {
      return {
        name: `Product not found [id: ${productId}]`,
        lowPrice: '00.00',
        highPrice: '00.00',
        src: src,
      };
    }

    const href = shop.origin + product.href.hrefs[languageHREF.language.title].value + '.html';
    return handleProduct(src ? { ...product, href, src } : { ...product, href }, options);
  };

  getCategoryTitle = (column) => {
    let slug = getState('country');
    slug = String(slug).toLowerCase();

    const slugIndex = staticTranslations.category_titles.slug.findIndex((item) => item === slug);

    if (slugIndex === -1) {
      toast.error(`Nie znaleziono języka dla ${slug}`);
      return undefined;
    }

    // Case-insensitive key lookup
    const normalizedKeys = Object.keys(staticTranslations.category_titles).reduce((acc, key) => {
      acc[key.toLowerCase()] = key;
      return acc;
    }, {});
    const actualKey = normalizedKeys[column.toLowerCase()];

    if (!actualKey) {
      toast.error(`Nie znaleziono tłumaczenia dla ${column} (sprawdź wielkość liter)`);
      return undefined;
    }

    const translationsArray = staticTranslations.category_titles[actualKey];
    if (!Array.isArray(translationsArray) || translationsArray.length <= slugIndex) {
      toast.error(`Błąd w danych tłumaczeń dla ${column}`);
      return undefined;
    }

    const title = translationsArray[slugIndex];

    if (title === '' || title == null) {
      return undefined;
    }

    return title;

    // const country = getState('country');

    // const CSV_CATEGORIES = this.categoriesTitles
    //   ? this.#toCSV(this.categoriesTitles)
    //   : _categoriesTitles;
    // let country_categories = CSV_CATEGORIES.find(
    //   (category) => category.slug === country.toLowerCase()
    // );

    // if (country_categories) {
    //   return country_categories[column];
    // }
    // return undefined;
  };

  getCategoryLink = (category, options) => {
    const shop = getState('shop');
    let slug = getState('country');
    slug = String(slug).toLowerCase();

    const slugIndex = staticTranslations.category_links.slug.findIndex((item) => item === slug);

    // Case-insensitive key lookup
    const normalizedKeys = Object.keys(staticTranslations.category_links).reduce((acc, key) => {
      acc[key.toLowerCase()] = key;
      return acc;
    }, {});

    // https://www.beliani.ch/sofas/corner-sofas/ => ["sofas", "corner-sofas"]

    // eg. category === https://www.beliani.ch/sofas/corner-sofas/
    const url = new URL(category);
    const path = url.pathname;

    //  we get array of path parts without empty parts
    // (eg. instead of ["", "sofas", "corner-sofas", "" we get ["sofas", "corner-sofas"])
    const categories = path.split('/').filter((part) => part.length > 0);

    let partsTranslations = [];

    categories.forEach((item) => {
      const actualItem = normalizedKeys[item.toLowerCase()];
      if (actualItem) {
        const translation = staticTranslations.category_links[actualItem][slugIndex];
        if (translation) {
          partsTranslations.push(translation);
        } else {
          partsTranslations.push(item);
          toast.error(`Brak tłumaczenia dla '${item}' w języku ${slug}`);
        }
      } else {
        partsTranslations.push(item);
        toast.error(
          `Nie znaleziono tłumaczenia dla '${item}' kategorii!\nSprawdź szczegóły w konsoli.`
        );
        console.log('Ta część kategorii nie została znaleziona w tłumaczeniach:');
        console.log(
          'https://docs.google.com/spreadsheets/d/1Y9blxN4paEV05s6AvdWmH5fBELTUvDz3ax5skmgVrsQ/edit?gid=0#gid=0'
        );
        console.log(
          'Dodaj ją do zakładki category_links. "Statyczne" tłumaczenia są cache\'owane i może być trzeba poczekać chwilę.'
        );
      }
    });

    let translatedLink = new URL(shop.origin + partsTranslations.join('/'));

    return getQueryLink(translatedLink);

    // const shop = getState('shop');
    // const country = getState('country');

    // let new_link = new URL(shop.origin);

    // const category_url = new URL(category);
    // for (const [key, value] of category_url.searchParams.entries()) {
    //   new_link.searchParams.append(key, value);
    // }

    // const CSV_CATEGORIES = this.categoriesLinks
    //   ? this.#toCSV(this.categoriesLinks)
    //   : _categoriesLinks;
    // let country_categories = CSV_CATEGORIES.find(
    //   (category) => category.slug === country.toLowerCase()
    // );

    // const pathnames = category_url.pathname.split('/').filter((pathname) => pathname.length > 0);
    // const parsed_country_categories = [];
    // for (const category of pathnames) {
    //   const categoryCandidate = country_categories[category];
    //   if (categoryCandidate) {
    //     parsed_country_categories.push(categoryCandidate);
    //   } else {
    //     Toastify({
    //       text: `Category <a target="_blank" style="weight: semibold; color: white;" href="https://www.prologistics.info/shop_cats.php?shop_id=1">${category}</a> not found in <a href="https://docs.google.com/spreadsheets/d/1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8/edit#gid=0" target="_blank" style="weight: semibold; color: white;">data/categories/data.js</a>`,
    //       escapeMarkup: false,
    //       duration: 3000,
    //     }).showToast();
    //   }
    // }
    // new_link.pathname += parsed_country_categories.join('/');
    // if (options && options.origin === false) {
    //   const cutUrl = new URL(getQueryLink(new_link)).pathname;
    //   return cutUrl;
    // }

    // return getQueryLink(new_link);
  };

  getFooter = (column) => {
    let slug = getState('country');
    slug = String(slug).toLowerCase();

    const slugIndex = staticTranslations.footer.slug.findIndex((item) => item === slug);

    // Case-insensitive key lookup
    const normalizedKeys = Object.keys(staticTranslations.footer).reduce((acc, key) => {
      acc[key.toLowerCase()] = key;
      return acc;
    }, {});
    const actualKey = normalizedKeys[column.toLowerCase()];

    if (!actualKey) {
      toast.error(`Nie znaleziono tłumaczenia dla ${column} w stopce (sprawdź wielkość liter)`);
      return undefined;
    }

    const footer = staticTranslations.footer[actualKey][slugIndex];

    if (footer === '' || footer == null) {
      return undefined;
    }

    return footer;
    // const CSV_FOOTER = this.footer ? this.#toCSV(this.footer) : _footer;
    // let country_footer = CSV_FOOTER.find((category) => category.slug === country.toLowerCase());
    // if (country_footer) {
    //   return country_footer[column];
    // }
    // return undefined;
  };

  getPhrase = (column) => {
    let slug = getState('country');
    slug = String(slug).toLowerCase();

    const slugIndex = staticTranslations.templates.slug.findIndex((item) => item === slug);

    // Case-insensitive key lookup
    const normalizedKeys = Object.keys(staticTranslations.templates).reduce((acc, key) => {
      acc[key.toLowerCase()] = key;
      return acc;
    }, {});
    const actualKey = normalizedKeys[column.toLowerCase()];

    if (!actualKey) {
      toast.error(`Nie znaleziono tłumaczenia dla ${column} w szablonach (sprawdź wielkość liter)`);
      return undefined;
    }

    const template = staticTranslations.templates[actualKey][slugIndex];

    if (template === '' || template == null) {
      return undefined;
    }

    return template;

    // const country = getState('country');
    // const CSV_FOOTER = this.templates ? this.#toCSV(this.templates) : _templates;
    // let country_phrase = CSV_FOOTER.find((category) => category.slug === country.toLowerCase());
    // if (country_phrase) {
    //   return country_phrase[column];
    // }
    // return undefined;
  };

  getHeader = (column) => {
    let slug = getState('country');
    slug = String(slug).toLowerCase();

    const slugIndex = staticTranslations.header.slug.findIndex((item) => item === slug);

    // Case-insensitive key lookup
    const normalizedKeys = Object.keys(staticTranslations.header).reduce((acc, key) => {
      acc[key.toLowerCase()] = key;
      return acc;
    }, {});
    const actualKey = normalizedKeys[column.toLowerCase()];

    if (!actualKey) {
      toast.error(`Nie znaleziono tłumaczenia dla ${column} w nagłówku (sprawdź wielkość liter)`);
      return undefined;
    }

    const header = staticTranslations.header[actualKey][slugIndex];

    if (header === '' || header == null) {
      return undefined;
    }

    return header;

    // const CSV_FOOTER = this.header ? this.#toCSV(this.header) : _header;
    // let country_header = CSV_FOOTER.find((category) => category.slug === country.toLowerCase());
    // if (country_header) {
    //   return country_header[column];
    // }
    // return undefined;
  };

  #toCSV = (data) => {
    const [slugs, ...categoriesDB] = data;
    const csv = [];
    for (let index = 0; index < slugs.length; index++) {
      const slug = slugs[index];
      let parsed_category = {};
      for (const categoryArray of categoriesDB) {
        const key = categoryArray[0];
        parsed_category = {
          slug: slug,
          [key]: categoryArray[index],
          ...parsed_category,
        };
      }
      csv.push(parsed_category);
    }

    return csv;
  };
}
