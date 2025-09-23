import { Product } from './Product.js';

export class Category {
  constructor({ src, href, name, type, products = [] }) {
    this.src = src;
    this.href = href;
    this.name = name;
    this.type = type;
    this.products = products.map((p) => (p instanceof Product ? p : new Product(p)));
  }

  toJSON() {
    return {
      src: this.src,
      href: this.href,
      name: this.name,
      type: this.type,
      products: this.products?.map((p) => (p?.toJSON ? p.toJSON() : p)),
    };
  }
}
