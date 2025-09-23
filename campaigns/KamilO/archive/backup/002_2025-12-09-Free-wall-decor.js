export default new entities.Campaign({
  startId: '28753',
  name: 'Newsletter Free wall decor',
  date: '2025.12.09',
  issueCardId: '322376',
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/yc30oxD9wTbtNZvNvZvMfl/Free-wall-decor-(Copy)?node-id=0-1&node-type=canvas&t=S4hTJat0KKjjlJ1J-0',
  templates: [
    new entities.MondayFreebieNewsletter({
      background: '#FFCCB7',
      intro: {
        background: '#750000',
        color: '#ffffff',
      },
      offerPart: {
        type: 'code',
      },
      categories: [
        new entities.MondayCategoryProducts({
          name: 'Storage beds',
          background: '#750000',
          color: '#ffffff',
          src: getImageUrl('20251209Category1.png', true),
          href: 'https://www.beliani.ch/beds/storage-beds/',
          products: [
            new entities.ProductInstance({
              id: '564062',
              src: getImageUrl('20251209Category11.png', true),
            }),
            new entities.ProductInstance({
              id: '192890',
              src: getImageUrl('20251209Category12.png', true),
            }),
            new entities.ProductInstance({
              id: '142341',
              src: getImageUrl('20251209Category13.png', true),
            }),
            new entities.ProductInstance({
              id: '392644',
              src: getImageUrl('20251209Category14.png', true),
            }),
          ],
        }),
        new entities.MondayCategoryProducts({
          name: 'Fabric beds',
          background: '#FFCCB7',
          color: '#000000',
          type: 'monday',
          src: getImageUrl('20251209Category2.png', true),
          href: 'https://www.beliani.ch/beds/fabric-beds/',
          products: [
            new entities.ProductInstance({
              id: '565963',
              src: getImageUrl('20251209Category21.png', true),
            }),
            new entities.ProductInstance({
              id: '449153',
              src: getImageUrl('20251209Category22.png', true),
            }),
            new entities.ProductInstance({
              id: '329401',
              src: getImageUrl('20251209Category23.png', true),
            }),
            new entities.ProductInstance({
              id: '186252',
              src: getImageUrl('20251209Category24.png', true),
            }),
          ],
        }),
        new entities.MondayCategoryProducts({
          name: 'Metal beds',
          background: '#750000',
          color: '#ffffff',
          type: 'monday',
          src: getImageUrl('20251209Category3.png', true),
          href: 'https://www.beliani.ch/beds/metal-beds/',
          products: [
            new entities.ProductInstance({
              id: '136637',
              src: getImageUrl('20251209Category31.png', true),
            }),
            new entities.ProductInstance({
              id: '244594',
              src: getImageUrl('20251209Category32.png', true),
            }),
            new entities.ProductInstance({
              id: '306232',
              src: getImageUrl('20251209Category33.png', true),
            }),
            new entities.ProductInstance({
              id: '51335',
              src: getImageUrl('20251209Category34.png', true),
            }),
          ],
        }),
        new entities.MondayCategoryProducts({
          name: 'Leather beds',
          background: '#FFCCB7',
          color: '#000000',
          type: 'monday',
          src: getImageUrl('20251209Category4.png', true),
          href: 'https://www.beliani.ch/beds/leather-beds/',
          products: [
            new entities.ProductInstance({
              id: '93604',
              src: getImageUrl('20251209Category41.png', true),
            }),
            new entities.ProductInstance({
              id: '746',
              src: getImageUrl('20251209Category42.png', true),
            }),
            new entities.ProductInstance({
              id: '194963',
              src: getImageUrl('20251209Category43.png', true),
            }),
            new entities.ProductInstance({
              id: '394734',
              src: getImageUrl('20251209Category44.png', true),
            }),
          ],
        }),
      ],
      links: new entities.TemplateLinks([
        new entities.OriginHref({ value: 'content/lp24-12-09' }),
        new entities.SlugImage({
          value: 'https://upload.pictureserver.net/static/2025/20251209_01.png',
        }),
        new entities.OriginHref({ value: 'content/lp24-12-09' }),
        new entities.Image({
          value: 'https://upload.pictureserver.net/static/2025/20251209gif.gif',
        }),
        new entities.OriginHref({ value: 'content/lp24-12-05' }),
        new entities.SlugImage({
          value: 'https://upload.pictureserver.net/static/2025/20251205b.png',
        }),
        new entities.OriginHref({ value: 'content/lp24-12-04' }),
        new entities.SlugImage({
          value: 'https://upload.pictureserver.net/static/2025/20251204b.png',
        }),
      ]),
      tableQueries: [
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '20:22',
          name: 'offerPart',
        }),
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '24:25',
          name: 'intro',
        }),
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '23',
          name: 'code',
        }),
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '26:29',
          name: 'categories',
        }),
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '37:39',
          name: 'condition',
        }),
      ],
      freebies: {
        items: [
          new entities.FreebieItem({
            row: 1,
            col: 2,
            products: [
              {
                id: '113426',
                src: getImageUrl('20251209Freebie1.png', true),
                style: 'padding-right: 10px; padding-left: 60px;',
              },
              {
                id: '113443',
                src: getImageUrl('20251209Freebie2.png', true),
                style: 'padding-right: 60px; padding-left: 10px;',
              },
            ],
          }),
          new entities.FreebieItem({
            row: 1,
            col: 2,
            products: [
              {
                id: '358921',
                src: getImageUrl('20251209Freebie3.png', true),
                style: 'padding-right: 10px; padding-left: 60px;',
              },
              {
                id: '174021',
                src: getImageUrl('20251209Freebie4.png', true),
                style: 'padding-right: 60px; padding-left: 10px;',
              },
            ],
          }),
        ],
      },
    }),
    new entities.MondayFreebieLanding({
      background: '#FFCCB7',
      intro: {
        background: '#750000',
        color: '#ffffff',
      },
      offerPart: {
        type: 'code',
      },
      categories: [
        new entities.MondayCategoryProducts({
          name: 'Storage beds',
          background: '#750000',
          color: '#ffffff',
          src: getImageUrl('20251209Category1.png', true),
          href: 'https://www.beliani.ch/beds/storage-beds/',
          products: [
            new entities.ProductInstance({
              id: '564062',
              src: getImageUrl('20251209Category11.png', true),
            }),
            new entities.ProductInstance({
              id: '192890',
              src: getImageUrl('20251209Category12.png', true),
            }),
            new entities.ProductInstance({
              id: '142341',
              src: getImageUrl('20251209Category13.png', true),
            }),
            new entities.ProductInstance({
              id: '392644',
              src: getImageUrl('20251209Category14.png', true),
            }),
          ],
        }),
        new entities.MondayCategoryProducts({
          name: 'Fabric beds',
          background: '#FFCCB7',
          color: '#000000',
          type: 'monday',
          src: getImageUrl('20251209Category2.png', true),
          href: 'https://www.beliani.ch/beds/fabric-beds/',
          products: [
            new entities.ProductInstance({
              id: '565963',
              src: getImageUrl('20251209Category21.png', true),
            }),
            new entities.ProductInstance({
              id: '449153',
              src: getImageUrl('20251209Category22.png', true),
            }),
            new entities.ProductInstance({
              id: '329401',
              src: getImageUrl('20251209Category23.png', true),
            }),
            new entities.ProductInstance({
              id: '186252',
              src: getImageUrl('20251209Category24.png', true),
            }),
          ],
        }),
        new entities.MondayCategoryProducts({
          name: 'Metal beds',
          background: '#750000',
          color: '#ffffff',
          type: 'monday',
          src: getImageUrl('20251209Category3.png', true),
          href: 'https://www.beliani.ch/beds/metal-beds/',
          products: [
            new entities.ProductInstance({
              id: '136637',
              src: getImageUrl('20251209Category31.png', true),
            }),
            new entities.ProductInstance({
              id: '244594',
              src: getImageUrl('20251209Category32.png', true),
            }),
            new entities.ProductInstance({
              id: '306232',
              src: getImageUrl('20251209Category33.png', true),
            }),
            new entities.ProductInstance({
              id: '51335',
              src: getImageUrl('20251209Category34.png', true),
            }),
          ],
        }),
        new entities.MondayCategoryProducts({
          name: 'Leather beds',
          background: '#FFCCB7',
          color: '#000000',
          type: 'monday',
          src: getImageUrl('20251209Category4.png', true),
          href: 'https://www.beliani.ch/beds/leather-beds/',
          products: [
            new entities.ProductInstance({
              id: '93604',
              src: getImageUrl('20251209Category41.png', true),
            }),
            new entities.ProductInstance({
              id: '746',
              src: getImageUrl('20251209Category42.png', true),
            }),
            new entities.ProductInstance({
              id: '194963',
              src: getImageUrl('20251209Category43.png', true),
            }),
            new entities.ProductInstance({
              id: '394734',
              src: getImageUrl('20251209Category44.png', true),
            }),
          ],
        }),
      ],
      links: new entities.TemplateLinks([
        new entities.OriginHref({ value: 'content/lp24-12-09' }),
        new entities.SlugImage({
          value: 'https://upload.pictureserver.net/static/2025/20251209_01.png',
        }),
        new entities.OriginHref({ value: 'content/lp24-12-09' }),
        new entities.Image({
          value: 'https://upload.pictureserver.net/static/2025/20251209gif.gif',
        }),
        new entities.OriginHref({ value: 'content/lp24-12-05' }),
        new entities.SlugImage({
          value: 'https://upload.pictureserver.net/static/2025/20251205b.png',
        }),
        new entities.OriginHref({ value: 'content/lp24-12-04' }),
        new entities.SlugImage({
          value: 'https://upload.pictureserver.net/static/2025/20251204b.png',
        }),
      ]),
      tableQueries: [
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '20:22',
          name: 'offerPart',
        }),
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '24:25',
          name: 'intro',
        }),
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '23',
          name: 'code',
        }),
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '26:29',
          name: 'categories',
        }),
        new entities.TableQuery({
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: 'Voucher - 09.12.24 - Free wall decor!',
          tableRange: '37:39',
          name: 'condition',
        }),
      ],
      freebies: {
        items: [
          new entities.FreebieItem({
            row: 1,
            col: 2,
            products: [
              {
                id: '113426',
                src: getImageUrl('20251209Freebie1.png', true),
                style: 'padding-right: 10px; padding-left: 60px;',
              },
              {
                id: '113443',
                src: getImageUrl('20251209Freebie2.png', true),
                style: 'padding-right: 60px; padding-left: 10px;',
              },
            ],
          }),
          new entities.FreebieItem({
            row: 1,
            col: 2,
            products: [
              {
                id: '358921',
                src: getImageUrl('20251209Freebie3.png', true),
                style: 'padding-right: 10px; padding-left: 60px;',
              },
              {
                id: '174021',
                src: getImageUrl('20251209Freebie4.png', true),
                style: 'padding-right: 60px; padding-left: 10px;',
              },
            ],
          }),
        ],
      },
    }),
  ],
});
