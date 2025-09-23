export default new entities.Campaign({
  date: '2025.07.25',
  issueCardId: '382447',
  name: 'Rugs',
  startId: '35476',
  figmaUrl:
    'https://www.figma.com/design/8C4T0ut0ltnwdnYd8SeHy7/2025.07.04-Bathroom--Copy-?node-id=11001-191&t=nDCiQY9vzVXN7DTT-0',
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  single_image: false,
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.fridayDziwnyNsltr,
      background: '#FEB24D',
      wrapper: types.WRAPPER,
      css: types.CSS.NS,
      intro: {
        background: '#FEB24D',
        color: '#000000',
        type: 'paragraph',
      },
      inside: {
        type: 'timer',
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20250725free.png', true),
      },
      freebies: {
        options: {
          color: '#000000',
          background: '#FEB24D',
        },
        items1: [
          {
            size: {
              row: 1,
              col: 3,
            },
            products: [
              {
                id: '629508',
                src: getImageUrl('20250725_02.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
              {
                id: '629470',
                src: getImageUrl('20250725_03.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
              {
                id: '629961',
                src: getImageUrl('20250725_04.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
            ],
          },
        ],
        items2: [
          {
            size: {
              row: 1,
              col: 3,
            },
            products: [
              {
                id: '630171',
                src: getImageUrl('20250725_09.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
              {
                id: '630094',
                src: getImageUrl('20250725_10.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
              {
                id: '629771',
                src: getImageUrl('20250725_11.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
            ],
          },
        ],
      },
      gif_src: {
        CHDE: 'https://gen.sendtric.com/countdown/ydygg6r5k5',
        CHFR: 'https://gen.sendtric.com/countdown/gysor8qt60',
        FR: 'https://gen.sendtric.com/countdown/o1l6h0d3ad',
        UK: 'https://gen.sendtric.com/countdown/bp2ykw53ni',
        DE: 'https://gen.sendtric.com/countdown/skawm9zpjy',
        AT: 'https://gen.sendtric.com/countdown/f11b7au76o',
        ES: 'https://gen.sendtric.com/countdown/gzx09t1knv',
        PL: 'https://gen.sendtric.com/countdown/as7kjmkv6j',
        NL: 'https://gen.sendtric.com/countdown/c8s1t7a0q6',
        PT: 'https://gen.sendtric.com/countdown/wczaddbgac',
        IT: 'https://gen.sendtric.com/countdown/wu4zkpivjg',
        SE: 'https://gen.sendtric.com/countdown/e9mwaauyx2',
        HU: 'https://gen.sendtric.com/countdown/tv9amywiv2',
        DK: 'https://gen.sendtric.com/countdown/bruz4pebbp',
        CZ: 'https://gen.sendtric.com/countdown/7ikmoxcj2q',
        FI: 'https://gen.sendtric.com/countdown/gl5d65rmmf',
        NO: 'https://gen.sendtric.com/countdown/rql7b7zq1l',
        SK: 'https://gen.sendtric.com/countdown/86ckyz1mo5',
        BENL: 'https://gen.sendtric.com/countdown/0i9qaf3mq4',
        BEFR: 'https://gen.sendtric.com/countdown/mk82flyxvy',
        RO: 'https://gen.sendtric.com/countdown/ab7fq2js3e',
      },
      categories: [
        {
          name: 'Dining chairs',
          background: '#FEB24D',
          color: '#000000',
          type: 'image_with_2_product',
          src: getImageUrl('20250725_05.png', true),
          href: 'https://www.beliani.ch/garden-rugs/?sort=newest',
          products: [
            {
              id: '630248', //origin.includes("HU") ? "306283" : "231605",
              src: getImageUrl('20250725_06.png', true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
            },
            {
              id: '629582',
              src: getImageUrl('20250725_07.png', true),
            },
          ],
        },
      ],
      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-25',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_title_20250725.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-21',
          },
        },
        {
          value: getImageUrl('20250725_gif.gif', true),
        },
        {
          value: getImageUrl('20250725free.png', true),
        },
        {
          value: getImageUrl('20250725_01.png', true),
        },
        {
          value: getImageUrl('20250725_08.png', true),
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-18',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250718b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-17',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250717b.png', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '18',
          name: 'intro',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '20',
          name: 'paragraph',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '21:23',
          name: 'split',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 21.07.25 - Free wall art!',
          tableRange: '10:11',
          name: 'timer',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '24',
          name: 'cta',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '27',
          name: 'categoriesLink',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '18.07.25 - Chairs!',
          tableRange: '17:22',
          name: 'categories',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '38:39',
          name: 'condition',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '11.07.25 - Beds special!',
          tableRange: '22',
          name: 'catLink',
        },
        {
          tableId: '1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4',
          tableName: 'Categories',
          tableRange: '?majorDimension=COLUMNS',
          name: 'categoriesTitles',
          tableColumns: false,
        },
        {
          tableId: '1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8',
          tableName: 'Categories',
          tableRange: '?majorDimension=COLUMNS',
          name: 'categoriesLinks',
          tableColumns: false,
        },
        {
          tableId: '1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU',
          tableName: 'Header',
          tableRange: '?majorDimension=COLUMNS',
          name: 'header',
          tableColumns: false,
        },
        {
          tableId: '1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M',
          tableName: 'Footer',
          tableRange: '?majorDimension=COLUMNS',
          name: 'footer',
          tableColumns: false,
        },
      ],
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.fridayDziwnyNsltr,
      background: '#FEB24D',
      css: types.CSS.LP,
      intro: {
        background: '#FEB24D',
        color: '#000000',
        type: 'paragraph',
      },
      inside: {
        type: 'timer',
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20250725free.png', true),
      },
      freebies: {
        options: {
          color: '#000000',
          background: '#FEB24D',
        },
        items1: [
          {
            size: {
              row: 1,
              col: 3,
            },
            products: [
              {
                id: '629508',
                src: getImageUrl('20250725_02.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
              {
                id: '629470',
                src: getImageUrl('20250725_03.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
              {
                id: '629961',
                src: getImageUrl('20250725_04.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
            ],
          },
        ],
        items2: [
          {
            size: {
              row: 1,
              col: 3,
            },
            products: [
              {
                id: '630171',
                src: getImageUrl('20250725_09.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
              {
                id: '630094',
                src: getImageUrl('20250725_10.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
              {
                id: '629771',
                src: getImageUrl('20250725_11.png', true),
                style: 'padding-right: 6px; padding-left: 6px; display:inline-flex;',
              },
            ],
          },
        ],
      },
      gif_src: {
        CHDE: 'https://gen.sendtric.com/countdown/ydygg6r5k5',
        CHFR: 'https://gen.sendtric.com/countdown/gysor8qt60',
        FR: 'https://gen.sendtric.com/countdown/o1l6h0d3ad',
        UK: 'https://gen.sendtric.com/countdown/bp2ykw53ni',
        DE: 'https://gen.sendtric.com/countdown/skawm9zpjy',
        AT: 'https://gen.sendtric.com/countdown/f11b7au76o',
        ES: 'https://gen.sendtric.com/countdown/gzx09t1knv',
        PL: 'https://gen.sendtric.com/countdown/as7kjmkv6j',
        NL: 'https://gen.sendtric.com/countdown/c8s1t7a0q6',
        PT: 'https://gen.sendtric.com/countdown/wczaddbgac',
        IT: 'https://gen.sendtric.com/countdown/wu4zkpivjg',
        SE: 'https://gen.sendtric.com/countdown/e9mwaauyx2',
        HU: 'https://gen.sendtric.com/countdown/tv9amywiv2',
        DK: 'https://gen.sendtric.com/countdown/bruz4pebbp',
        CZ: 'https://gen.sendtric.com/countdown/7ikmoxcj2q',
        FI: 'https://gen.sendtric.com/countdown/gl5d65rmmf',
        NO: 'https://gen.sendtric.com/countdown/rql7b7zq1l',
        SK: 'https://gen.sendtric.com/countdown/86ckyz1mo5',
        BENL: 'https://gen.sendtric.com/countdown/0i9qaf3mq4',
        BEFR: 'https://gen.sendtric.com/countdown/mk82flyxvy',
        RO: 'https://gen.sendtric.com/countdown/ab7fq2js3e',
      },
      categories: [
        {
          name: 'Dining chairs',
          background: '#FEB24D',
          color: '#000000',
          type: 'image_with_2_product',
          src: getImageUrl('20250725_05.png', true),
          href: 'https://www.beliani.ch/garden-rugs/?sort=newest',
          products: [
            {
              id: '630248', //origin.includes("HU") ? "306283" : "231605",
              src: getImageUrl('20250725_06.png', true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
            },
            {
              id: '629582',
              src: getImageUrl('20250725_07.png', true),
            },
          ],
        },
      ],
      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-25',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_title_20250725.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-21',
          },
        },
        {
          value: getImageUrl('20250725_gif.gif', true),
        },
        {
          value: getImageUrl('20250725free.png', true),
        },
        {
          value: getImageUrl('20250725_01.png', true),
        },
        {
          value: getImageUrl('20250725_08.png', true),
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-18',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250718b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-17',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250717b.png', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '15:16',
          name: 'tit',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '20',
          name: 'paragraph',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '18',
          name: 'intro',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '21:23',
          name: 'split',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 21.07.25 - Free wall art!',
          tableRange: '10:11',
          name: 'timer',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '24',
          name: 'cta',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '27',
          name: 'categoriesLink',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '18.07.25 - Chairs!',
          tableRange: '17:22',
          name: 'categories',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '25.07.25 - Outdoor rugs!',
          tableRange: '38:39',
          name: 'condition',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '11.07.25 - Beds special!',
          tableRange: '22',
          name: 'catLink',
        },
      ],
    },
  ],
});
