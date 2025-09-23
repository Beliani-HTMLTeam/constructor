export default new entities.Campaign({
  date: '2025.08.01',
  issueCardId: '387131',
  name: 'Product of the month',
  startId: '35734',
  lpId: '26097',
  figmaUrl:
    'https://www.figma.com/design/AEqGIkFxZbc8oL0H803qtE/2025.08.01---Product-of-the-month--Copy-?node-id=0-1&p=f&t=Eo7Zs65O7y68CFvj-0',
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
      template: templates.product_of_the_month,
      background: '#FEBC66',
      wrapper: types.WRAPPER,
      css: types.CSS.NS,
      intro: {
        background: '#FEBC66',
        color: '#000000',
        type: 'paragraph',
      },
      inside: {
        type: 'timer',
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20250801free.png', true),
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
        CHDE: 'https://gen.sendtric.com/countdown/z9mw41l0pt',
        CHFR: 'https://gen.sendtric.com/countdown/lp8pm4u3di',
        FR: 'https://gen.sendtric.com/countdown/ik1gzvl1dx',
        UK: 'https://gen.sendtric.com/countdown/emtj3c57r6',
        DE: 'https://gen.sendtric.com/countdown/cokudr8ym4',
        AT: 'https://gen.sendtric.com/countdown/xcdzlrxnvz',
        ES: 'https://gen.sendtric.com/countdown/6b1wtolgxr',
        PL: 'https://gen.sendtric.com/countdown/winmkuaw1a',
        NL: 'https://gen.sendtric.com/countdown/3jclmooh6l',
        PT: 'https://gen.sendtric.com/countdown/2u9ryp9l5w',
        IT: 'https://gen.sendtric.com/countdown/xxq1zkco8p',
        SE: 'https://gen.sendtric.com/countdown/bepezu6q90',
        HU: 'https://gen.sendtric.com/countdown/05jevpbq9r',
        DK: 'https://gen.sendtric.com/countdown/taux7anx5b',
        CZ: 'https://gen.sendtric.com/countdown/z7gnodvjwi',
        FI: 'https://gen.sendtric.com/countdown/fr504uzpn2',
        NO: 'https://gen.sendtric.com/countdown/br1d4m16jk',
        SK: 'https://gen.sendtric.com/countdown/s3179xmbmr',
        BENL: 'https://gen.sendtric.com/countdown/7s23p5jrm5',
        BEFR: 'https://gen.sendtric.com/countdown/naf6j9jr82',
        RO: 'https://gen.sendtric.com/countdown/gydgywwmke',
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
            value: 'content/lp25-08-01',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_title_20250801.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-28',
          },
        },
        {
          value: getImageUrl('top_20250801.png', true),
        },
        {
          value: getImageUrl('20250725free.png', true),
        },
        {
          value: getImageUrl('20250725_01.png', true),
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('__cat_1_20250801.png', true),
          },
        },
        {
          value: getImageUrl('_product_1_1_20250801.png', true),
        },
        {
          value: getImageUrl('_product_1_2_20250801.png', true),
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('__cat_2_20250801.png', true),
          },
        },
        {
          value: getImageUrl('_product_2_1_20250801.png', true),
        },
        {
          value: getImageUrl('_product_2_2_20250801.png', true),
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('__cat_3_20250801.png', true),
          },
        },
        {
          value: getImageUrl('_product_3_1_20250801.png', true),
        },
        {
          value: getImageUrl('_product_3_2_20250801.png', true),
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('__cat_4_20250801.png', true),
          },
        },
        {
          value: getImageUrl('_product_4_1_20250801.png', true),
        },
        {
          value: getImageUrl('_product_4_2_20250801.png', true),
        },
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
            value: getImageUrl('20250725b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-24',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250724b.png', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '01.08.25 - Product of the month: outdoor seating!',
          tableRange: '16:24',
          name: 'intro',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '01.08.25 - Product of the month: outdoor seating!',
          tableRange: '24:35',
          name: 'split',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 28.07.25 - Free picnic blankets!',
          tableRange: '12:13',
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
          tableName: '01.08.25 - Product of the month: outdoor seating!',
          tableRange: '50:51',
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
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.product_of_the_month,
      background: '#FEBC66',
      css: types.CSS.LP,
      intro: {
        background: '#FEBC66',
        color: '#000000',
        type: 'paragraph',
      },
      inside: {
        type: 'timer',
        background: '#FFCCB7',
        color: '#000000',
        src: getImageUrl('20250801free.png', true),
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
        CHDE: 'https://gen.sendtric.com/countdown/z9mw41l0pt',
        CHFR: 'https://gen.sendtric.com/countdown/lp8pm4u3di',
        FR: 'https://gen.sendtric.com/countdown/ik1gzvl1dx',
        UK: 'https://gen.sendtric.com/countdown/emtj3c57r6',
        DE: 'https://gen.sendtric.com/countdown/cokudr8ym4',
        AT: 'https://gen.sendtric.com/countdown/xcdzlrxnvz',
        ES: 'https://gen.sendtric.com/countdown/6b1wtolgxr',
        PL: 'https://gen.sendtric.com/countdown/winmkuaw1a',
        NL: 'https://gen.sendtric.com/countdown/3jclmooh6l',
        PT: 'https://gen.sendtric.com/countdown/2u9ryp9l5w',
        IT: 'https://gen.sendtric.com/countdown/xxq1zkco8p',
        SE: 'https://gen.sendtric.com/countdown/bepezu6q90',
        HU: 'https://gen.sendtric.com/countdown/05jevpbq9r',
        DK: 'https://gen.sendtric.com/countdown/taux7anx5b',
        CZ: 'https://gen.sendtric.com/countdown/z7gnodvjwi',
        FI: 'https://gen.sendtric.com/countdown/fr504uzpn2',
        NO: 'https://gen.sendtric.com/countdown/br1d4m16jk',
        SK: 'https://gen.sendtric.com/countdown/s3179xmbmr',
        BENL: 'https://gen.sendtric.com/countdown/7s23p5jrm5',
        BEFR: 'https://gen.sendtric.com/countdown/naf6j9jr82',
        RO: 'https://gen.sendtric.com/countdown/gydgywwmke',
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
            value: 'content/lp25-08-01',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('_title_20250801.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-28',
          },
        },
        {
          value: getImageUrl('top_20250801.png', true),
        },
        {
          value: getImageUrl('20250725free.png', true),
        },
        {
          value: getImageUrl('20250725_01.png', true),
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('__cat_1_20250801.png', true),
          },
        },
        {
          value: getImageUrl('_product_1_1_20250801.png', true),
        },
        {
          value: getImageUrl('_product_1_2_20250801.png', true),
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('__cat_2_20250801.png', true),
          },
        },
        {
          value: getImageUrl('_product_2_1_20250801.png', true),
        },
        {
          value: getImageUrl('_product_2_2_20250801.png', true),
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('__cat_3_20250801.png', true),
          },
        },
        {
          value: getImageUrl('_product_3_1_20250801.png', true),
        },
        {
          value: getImageUrl('_product_3_2_20250801.png', true),
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('__cat_4_20250801.png', true),
          },
        },
        {
          value: getImageUrl('_product_4_1_20250801.png', true),
        },
        {
          value: getImageUrl('_product_4_2_20250801.png', true),
        },
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
            value: getImageUrl('20250725b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-07-24',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250724b.png', true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '01.08.25 - Product of the month: outdoor seating!',
          tableRange: '13:14',
          name: 'tit',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '01.08.25 - Product of the month: outdoor seating!',
          tableRange: '16:24',
          name: 'intro',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '01.08.25 - Product of the month: outdoor seating!',
          tableRange: '24:35',
          name: 'split',
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: 'Voucher - 28.07.25 - Free picnic blankets!',
          tableRange: '12:13',
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
          tableName: '01.08.25 - Product of the month: outdoor seating!',
          tableRange: '50:51',
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
