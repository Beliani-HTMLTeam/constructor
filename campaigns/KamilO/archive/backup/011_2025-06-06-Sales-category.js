export default new entities.Campaign({
  startId: '33607',
  name: 'Sales category ',
  date: '2025.06.06',
  issueCardId: '357113',
  alarm: {
    isActive: false,
    description: 'Add soon ending campaigns.',
  },
  isArchive: true,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/68F9elKyEOboiWtI33XB4h/Armchair---Wednesday-2025.04.02?node-id=0-1&p=f&t=uBbBblish7lCRnsQ-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      campDate: '2025.06.06',
      template: templates.FrenchDays,
      css: types.CSS.NS,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FD9000',
      },
      intro: {
        background: '#FD9000',
        color: '#000000',
      },
      background: '#FD9000',
      categories: [
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_1__06062025.png', true),
            },
            href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_2__06062025.png', true),
            },
            href: 'https://www.beliani.ch/sofas/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_3__06062025.png', true),
            },
            href: 'https://www.beliani.ch/beds/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_4__06062025.png', true),
            },
            href: 'https://www.beliani.ch/armchairs/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_5__06062025.png', true),
            },
            href: 'https://www.beliani.ch/chairs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_6__06062025.png', true),
            },
            href: 'https://www.beliani.ch/tables/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_7__06062025.png', true),
            },
            href: 'https://www.beliani.ch/storage/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_8__06062025.png', true),
            },
            href: 'https://www.beliani.ch/children-room/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_9__06062025.png', true),
            },
            href: 'https://www.beliani.ch/textiles/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_10__06062025.png', true),
            },
            href: 'https://www.beliani.ch/lighting/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_11__06062025.png', true),
            },
            href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_12__06062025.png', true),
            },
            href: 'https://www.beliani.ch/office-furniture/desks-eng/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_13__06062025.png', true),
            },
            href: 'https://www.beliani.ch/rugs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_14__06062025.png', true),
            },
            href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
          },
        ],
      ],
      wrapper: types.WRAPPER,
      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-06',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_top_image_gif_2025.06.06.gif', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-03',
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-05-28',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250528b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-05-22',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250522b.png', true),
          },
        },
        {
          value: getImageUrl('250606_freebis.png', true),
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 03.06.25 - Free desk!',
          tableRange: '12:13',
          name: 'timer',
          fallback: ['Extra 5% off everything'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '06.06.25 - Beliani Birthday Sales categories!',
          tableRange: '14',
          name: 'intro',
          fallback: ['Extra 5% off everything'],
        },

        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 30.04.25 - French Days Mid season sale!',
          tableRange: '42',
          name: 'shopall',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '06.06.25 - Beliani Birthday Sales categories!',
          tableRange: '41:42',
          name: 'condition',
        },
      ],
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      campDate: '2025.06.06',
      template: templates.FrenchDays,
      background: '#FD9000',
      background: '#FD9000',

      css: types.CSS.LP,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#FD9000',
      },
      intro: {
        background: '#FFCCB7',
        color: '#000000',
      },
      categories: [
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_1__06062025.png', true),
            },
            href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_2__06062025.png', true),
            },
            href: 'https://www.beliani.ch/sofas/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_3__06062025.png', true),
            },
            href: 'https://www.beliani.ch/beds/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_4__06062025.png', true),
            },
            href: 'https://www.beliani.ch/armchairs/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_5__06062025.png', true),
            },
            href: 'https://www.beliani.ch/chairs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_6__06062025.png', true),
            },
            href: 'https://www.beliani.ch/tables/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_7__06062025.png', true),
            },
            href: 'https://www.beliani.ch/storage/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_8__06062025.png', true),
            },
            href: 'https://www.beliani.ch/children-room/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_9__06062025.png', true),
            },
            href: 'https://www.beliani.ch/textiles/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_10__06062025.png', true),
            },
            href: 'https://www.beliani.ch/lighting/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_11__06062025.png', true),
            },
            href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_12__06062025.png', true),
            },
            href: 'https://www.beliani.ch/office-furniture/desks-eng/',
          },
        ],
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_13__06062025.png', true),
            },
            href: 'https://www.beliani.ch/rugs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_14__06062025.png', true),
            },
            href: 'https://www.beliani.ch/home-accessories/accessories-decor/',
          },
        ],
      ],

      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-06',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_top_image_gif_2025.06.06.gif', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-03',
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-05-28',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250528b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-05-22',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250522b.png', true),
          },
        },
        {
          value: getImageUrl('250606_freebis.png', true),
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 03.06.25 - Free desk!',
          tableRange: '12:13',
          name: 'timer',
          fallback: ['Extra 5% off everything'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '06.06.25 - Beliani Birthday Sales categories!',
          tableRange: '14',
          name: 'intro',
          fallback: ['Extra 5% off everything'],
        },

        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 30.04.25 - French Days Mid season sale!',
          tableRange: '42',
          name: 'shopall',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '06.06.25 - Beliani Birthday Sales categories!',
          tableRange: '41:42',
          name: 'condition',
        },
      ],
    },
  ],
});
