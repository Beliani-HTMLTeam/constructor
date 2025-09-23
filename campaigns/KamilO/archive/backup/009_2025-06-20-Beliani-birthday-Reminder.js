export default new entities.Campaign({
  startId: '34096',
  name: 'Beliani birthday Reminder',
  date: '2025.06.20',
  issueCardId: '355100',
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
      template: templates.BelianiBirthday,
      css: types.CSS.NS,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#F6E7E6',
      },
      intro: {
        background: '#FFCCB7',
        color: '#000000',
      },
      background: '#FFCCB7',
      categories: [
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_1__20250620.png', true),
            },
            href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_2__20250620.png', true),
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
              value: getImageUrl('_cat_3__20250620.png', true),
            },
            href: 'https://www.beliani.ch/beds/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_4__20250620.png', true),
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
              value: getImageUrl('_cat_5__20250620.png', true),
            },
            href: 'https://www.beliani.ch/chairs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_6__20250620.png', true),
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
              value: getImageUrl('_cat_7__20250620.png', true),
            },
            href: 'https://www.beliani.ch/storage/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_8__20250620.png', true),
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
              value: getImageUrl('_cat_9__20250620.png', true),
            },
            href: 'https://www.beliani.ch/textiles/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_10__20250620.png', true),
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
              value: getImageUrl('_cat_11__20250620.png', true),
            },
            href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_12__20250620.png', true),
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
              value: getImageUrl('_cat_13__20250620.png', true),
            },
            href: 'https://www.beliani.ch/rugs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_14__20250620.png', true),
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
            value: 'content/lp25-06-20',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_title_20250620.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-20',
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-13',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250613b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-12',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250612b.png', true),
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_top_image_gif_2025.06.20.gif', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.06.25 - Beliani Birthday Reminder!',
          tableRange: '16',
          name: 'intro',
          fallback: ['Extra 5% off everything'],
        },

        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.06.25 - Beliani Birthday Reminder!',
          tableRange: '18',
          name: 'shopall',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.06.25 - Beliani Birthday Reminder!',
          tableRange: '26:27',
          name: 'condition',
        },
      ],
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.BelianiBirthday,
      background: '#FFCCB7',

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
              value: getImageUrl('_cat_1__20250620.png', true),
            },
            href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_2__20250620.png', true),
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
              value: getImageUrl('_cat_3__20250620.png', true),
            },
            href: 'https://www.beliani.ch/beds/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_4__20250620.png', true),
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
              value: getImageUrl('_cat_5__20250620.png', true),
            },
            href: 'https://www.beliani.ch/chairs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_6__20250620.png', true),
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
              value: getImageUrl('_cat_7__20250620.png', true),
            },
            href: 'https://www.beliani.ch/storage/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_8__20250620.png', true),
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
              value: getImageUrl('_cat_9__20250620.png', true),
            },
            href: 'https://www.beliani.ch/textiles/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_10__20250620.png', true),
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
              value: getImageUrl('_cat_11__20250620.png', true),
            },
            href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_12__20250620.png', true),
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
              value: getImageUrl('_cat_13__20250620.png', true),
            },
            href: 'https://www.beliani.ch/rugs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_14__20250620.png', true),
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
            value: 'content/lp25-06-20',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_title_20250620.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-20',
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-13',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250613b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-12',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250612b.png', true),
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_top_image_gif_2025.06.20.gif', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.06.25 - Beliani Birthday Reminder!',
          tableRange: '16',
          name: 'intro',
          fallback: ['Extra 5% off everything'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.06.25 - Beliani Birthday Reminder!',
          tableRange: '13:14',
          name: 'tit',
          fallback: ['Extra 5% off everything'],
        },

        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.06.25 - Beliani Birthday Reminder!',
          tableRange: '18',
          name: 'shopall',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '20.06.25 - Beliani Birthday Reminder!',
          tableRange: '26:27',
          name: 'condition',
        },
      ],
    },
  ],
});
