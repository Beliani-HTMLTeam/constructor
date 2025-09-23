export default new entities.Campaign({
  startId: '28817',
  name: 'January peak 2nd',
  date: '2025.01.20',
  issueCardId: '320159',
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      wrapper: types.WRAPPER,
      css: types.CSS.NS,
      template: templates.CategoriesRowsLine,
      background: '#ffe8df',
      categories: [
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250120Category1.png', true),
          },
          href: 'https://www.beliani.ch/living-room-furniture/',
          name: 'Living room',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250120Category2.png', true),
          },
          href: 'https://www.beliani.ch/dining-room-furniture/',
          name: 'Dining room',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250120Category3.png', true),
          },
          href: 'https://www.beliani.ch/bedroom-furniture/',
          name: 'Bedroom',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250120Category4.png', true),
          },
          href: 'https://www.beliani.ch/hallway/',
          name: 'Hallway',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250120Category5.png', true),
          },
          href: 'https://www.beliani.ch/office-furniture/',
          name: 'Office',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250120Category6.png', true),
          },
          href: 'https://www.beliani.ch/bathroom-furniture/',
          name: 'Bathroom',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250120Category7.png', true),
          },
          href: 'https://www.beliani.ch/children-room/',
          name: 'Kids',
          type: 'no_products',
        },
      ],
      links: [
        new entities.OriginHref({ value: 'content/lp25-01-20' }),
        new entities.SlugImage({
          value: 'https://upload.pictureserver.net/static/2025/20250120_01.png',
        }),
        new entities.OriginHref({ value: 'content/lp25-01-20' }),
        new entities.Image({
          value: 'https://upload.pictureserver.net/static/2025/20250120gif.gif',
        }),
        new entities.OriginHref({ value: 'content/lp25-01-13' }),
        new entities.Image({
          value: 'https://upload.pictureserver.net/static/2025/20250113b.png',
        }),
        new entities.OriginHref({ value: 'content/lp25-01-10' }),
        new entities.Image({
          value: 'https://upload.pictureserver.net/static/2025/20250110b.png',
        }),
      ],
      tableQueries: [
        new entities.TableQuery({
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.01.25 - January Peak 2nd!',
          tableRange: '13',
          name: 'intro',
          fallback: ['This is time limited offer. Valid only until 2nd of February.'],
        }),
        new entities.TableQuery({
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.01.25 - January Peak 2nd!',
          tableRange: '24:25',
          name: 'condition',
          fallback: [
            'All items are subject to availability. All prices are correct as of dd.mm.yyyy and are subject to change without notification.',
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        }),
      ],
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.CategoriesRowsLine,
      background: '#dbd9d7',
      css: types.CSS.LP,
      categories: [
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category1.png', true),
          },
          href: 'https://www.beliani.ch/sofas/',
          name: 'Sofas',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category2.png', true),
          },
          href: 'https://www.beliani.ch/beds/',
          name: 'Beds',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category3.png', true),
          },
          href: 'https://www.beliani.ch/armchairs/',
          name: 'Armchairs',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category4.png', true),
          },
          href: 'https://www.beliani.ch/chairs/',
          name: 'Chairs',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category5.png', true),
          },
          href: 'https://www.beliani.ch/tables/',
          name: 'Tables',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category6.png', true),
          },
          href: 'https://www.beliani.ch/storage/',
          name: 'Storage',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category7.png', true),
          },
          href: 'https://www.beliani.ch/textiles/',
          name: 'Textiles',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category8.png', true),
          },
          href: 'https://www.beliani.ch/lighting/',
          name: 'Lighting',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category9.png', true),
          },
          href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
          name: 'Bathtubs',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category10.png', true),
          },
          href: 'https://www.beliani.ch/office-furniture/desks-eng/',
          name: 'Desks',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category11.png', true),
          },
          href: 'https://www.beliani.ch/rugs/',
          name: 'Rugs',
          type: 'no_products',
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021Category12.png', true),
          },
          href: 'https://www.beliani.ch/home-accessories/',
          name: 'Accessories',
          type: 'no_products',
        },
      ],
      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp24-10-21',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021_01.jpg', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp24-10-21',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251021gif.gif', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp24-10-11',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251011b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp24-10-10',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20251010b.png', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: '20.01.25 - January Peak 2nd!',
          tableRange: '13',
          name: 'intro',
          fallback: ['This is time limited offer. Valid only until 2nd of February.'],
        },
        {
          tableId: '1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88',
          tableName: '20.01.25 - January Peak 2nd!',
          tableRange: '24:25',
          name: 'condition',
          fallback: [
            'All items are subject to availability. All prices are correct as of dd.mm.yyyy and are subject to change without notification.',
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        },
      ],
    },
  ],
});
