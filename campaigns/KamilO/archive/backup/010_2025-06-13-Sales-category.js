export default new entities.Campaign({
  startId: '33872',
  name: 'Sales category ',
  date: '2025.06.13',
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
      campDate: '2025.06.13',
      template: templates.FrenchDays,
      css: types.CSS.NS,
      offerPart: {
        type: 'code',
        color: '#000000',
        background: '#F6E7E6',
      },
      intro: {
        background: '#F6E7E6',
        color: '#000000',
      },
      background: '#F6E7E6',
      categories: [
        [
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_1__13062025.png', true),
            },
            href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_2__13062025.png', true),
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
              value: getImageUrl('_cat_3__13062025.png', true),
            },
            href: 'https://www.beliani.ch/beds/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_4__13062025.png', true),
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
              value: getImageUrl('_cat_5__13062025.png', true),
            },
            href: 'https://www.beliani.ch/chairs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_6__13062025.png', true),
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
              value: getImageUrl('_cat_7__13062025.png', true),
            },
            href: 'https://www.beliani.ch/storage/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_8__13062025.png', true),
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
              value: getImageUrl('_cat_9__13062025.png', true),
            },
            href: 'https://www.beliani.ch/textiles/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_10__13062025.png', true),
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
              value: getImageUrl('_cat_11__13062025.png', true),
            },
            href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_12__13062025.png', true),
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
              value: getImageUrl('_cat_13__13062025.png', true),
            },
            href: 'https://www.beliani.ch/rugs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_14__13062025.png', true),
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
            value: 'content/lp25-06-13',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_top_image_gif_2025.06.13.gif', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-10',
          },
        },
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
            value: getImageUrl('20250606b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-05',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250605b.png', true),
          },
        },
        {
          value: getImageUrl('250613_freebis.png', true),
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 10.06.25 - Free parasol!',
          tableRange: '12:13',
          name: 'timer',
          fallback: ['Extra 5% off everything'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '13.06.25 - Beliani Birthday Sales categories!',
          tableRange: '16',
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
          tableName: '13.06.25 - Beliani Birthday Sales categories!',
          tableRange: '26:27',
          name: 'condition',
        },
      ],
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      campDate: '2025.06.13',
      template: templates.FrenchDays,
      background: '#F6E7E6',

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
              value: getImageUrl('_cat_1__13062025.png', true),
            },
            href: 'https://www.beliani.ch/garden-furniture/outdoor-furniture/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_2__13062025.png', true),
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
              value: getImageUrl('_cat_3__13062025.png', true),
            },
            href: 'https://www.beliani.ch/beds/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_4__13062025.png', true),
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
              value: getImageUrl('_cat_5__13062025.png', true),
            },
            href: 'https://www.beliani.ch/chairs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_6__13062025.png', true),
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
              value: getImageUrl('_cat_7__13062025.png', true),
            },
            href: 'https://www.beliani.ch/storage/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_8__13062025.png', true),
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
              value: getImageUrl('_cat_9__13062025.png', true),
            },
            href: 'https://www.beliani.ch/textiles/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_10__13062025.png', true),
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
              value: getImageUrl('_cat_11__13062025.png', true),
            },
            href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_12__13062025.png', true),
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
              value: getImageUrl('_cat_13__13062025.png', true),
            },
            href: 'https://www.beliani.ch/rugs/',
          },
          {
            src: {
              type: 'relation',
              relyOn: 'slug',
              placeholderPosition: '38',
              value: getImageUrl('_cat_14__13062025.png', true),
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
            value: 'content/lp25-06-13',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_top_image_gif_2025.06.13.gif', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-10',
          },
        },
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
            value: getImageUrl('20250606b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-06-05',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250605b.png', true),
          },
        },
        {
          value: getImageUrl('250613_freebis.png', true),
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 10.06.25 - Free parasol!',
          tableRange: '12:13',
          name: 'timer',
          fallback: ['Extra 5% off everything'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '13.06.25 - Beliani Birthday Sales categories!',
          tableRange: '16',
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
          tableName: '13.06.25 - Beliani Birthday Sales categories!',
          tableRange: '26:27',
          name: 'condition',
        },
      ],
    },
  ],
});
