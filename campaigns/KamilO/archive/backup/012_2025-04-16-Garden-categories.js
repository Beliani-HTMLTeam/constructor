export default new entities.Campaign({
  startId: '32356',
  name: 'Garden categories',
  date: '2025.04.16',
  issueCardId: '351475',
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
      template: templates.RegularWednesdayNslt,
      css: types.CSS.NS,
      background: '#F6E7E6',
      categories: [
        {
          name: 'Coat stands',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#F6E7E6',
          color: '#000000',
          src: getImageUrl('250416category_01.png', true),
          href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
          products: [
            {
              id: '376648',
              src: getImageUrl('250416product_01.png', true),
            },
            {
              id: '517212',
              src: getImageUrl('250416product_02.png', true),
            },
            {
              id: '193871',
              src: getImageUrl('250416product_03.png', true),
            },
            {
              id: '207163',
              src: getImageUrl('250416product_04.png', true),
            },
          ],
        },
        {
          name: 'Sideboard',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FFB6A6',
          color: '#000000',
          src: getImageUrl('250416category_02.png', true),
          href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
          products: [
            {
              id: '249069',
              src: getImageUrl('250416product_05.png', true),
            },
            {
              id: '569942',
              src: getImageUrl('250416product_06.png', true),
            },
            {
              id: '13573',
              src: getImageUrl('250416product_07.png', true),
            },
            {
              id: '82184',
              src: getImageUrl('250416product_08.png', true),
            },
          ],
        },
        {
          name: 'Rugs',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#F6E7E6',
          color: '#000000',
          src: getImageUrl('250416category_03.png', true),
          href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
          products: [
            {
              id: '301788',
              src: getImageUrl('250416product_09.png', true),
            },
            {
              id: '177341',
              src: getImageUrl('250416product_10.png', true),
            },
            {
              id: '310275',
              src: getImageUrl('250416product_11.png', true),
            },
            {
              id: '197909',
              src: getImageUrl('250416product_12.png', true),
            },
          ],
        },
        {
          name: 'Mirrors',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FFB6A6',
          color: '#000000',
          src: getImageUrl('250416category_04.png', true),
          href: 'https://www.beliani.ch/armchairs/hanging-chairs/',
          products: [
            {
              id: '590641',
              src: getImageUrl('250416product_13.png', true),
            },
            {
              id: '359399',
              src: getImageUrl('250416product_14.png', true),
            },
            {
              id: '263024',
              src: getImageUrl('250416product_15.png', true),
            },
            {
              id: '122470',
              src: getImageUrl('250416product_16.png', true),
            },
          ],
        },
      ],
      categories_add: [
        {
          background: '#ffffff',
          color: '#000000',
          href: 'https://www.beliani.ch/outdoor-furniture/garden-benches/',
          src: getImageUrl('250416category_05.png', true),
        },
        {
          background: '#ffffff',
          color: '#000000',
          href: 'https://www.beliani.ch/outdoor-furniture/storage-boxes/',
          src: getImageUrl('250416category_06.png', true),
        },
        {
          background: '#ffffff',
          color: '#000000',
          href: 'https://www.beliani.ch/outdoor-textiles/cushions-for-garden/',
          src: getImageUrl('250416category_07.png', true),
        },
        {
          background: '#ffffff',
          color: '#000000',
          href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
          src: getImageUrl('250416category_08.png', true),
        },
      ],
      wrapper: types.WRAPPER,
      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-16',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('250416title_01.png', true),
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('250319video.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-03',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('250319inside.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-09',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250409b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-04',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250404b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-18',
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'search/lemvig/',
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '14:21',
          name: 'categories',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '22',
          name: 'additionalt',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '23:26',
          name: 'additional',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '27',
          name: 'shopnow',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '36:37',
          name: 'condition',
          fallback: [
            'All items are subject to availability. All prices are correct as of dd.mm.yyyy and are subject to change without notification.',
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        },
      ],
    },
    {
      name: 'Landing',
      type: types.LANDINGPAGE,
      template: templates.RegularWednesdayNslt,
      background: '#F6E7E6',
      topImageColor: '#F6E7E6',
      categories: [
        {
          name: 'Coat stands',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#F6E7E6',
          color: '#000000',
          src: getImageUrl('250416category_01.png', true),
          href: 'https://www.beliani.ch/outdoor-furniture/lounge-sets/',
          products: [
            {
              id: '376648',
              src: getImageUrl('250416product_01.png', true),
            },
            {
              id: '517212',
              src: getImageUrl('250416product_02.png', true),
            },
            {
              id: '193871',
              src: getImageUrl('250416product_03.png', true),
            },
            {
              id: '207163',
              src: getImageUrl('250416product_04.png', true),
            },
          ],
        },
        {
          name: 'Sideboard',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FFB6A6',
          color: '#000000',
          src: getImageUrl('250416category_02.png', true),
          href: 'https://www.beliani.ch/outdoor-furniture/garden-dining-sets/',
          products: [
            {
              id: '249069',
              src: getImageUrl('250416product_05.png', true),
            },
            {
              id: '569942',
              src: getImageUrl('250416product_06.png', true),
            },
            {
              id: '13573',
              src: getImageUrl('250416product_07.png', true),
            },
            {
              id: '82184',
              src: getImageUrl('250416product_08.png', true),
            },
          ],
        },
        {
          name: 'Rugs',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#F6E7E6',
          color: '#000000',
          src: getImageUrl('250416category_03.png', true),
          href: 'https://www.beliani.ch/garden-accessories/fire-pits/',
          products: [
            {
              id: '301788',
              src: getImageUrl('250416product_09.png', true),
            },
            {
              id: '177341',
              src: getImageUrl('250416product_10.png', true),
            },
            {
              id: '310275',
              src: getImageUrl('250416product_11.png', true),
            },
            {
              id: '197909',
              src: getImageUrl('250416product_12.png', true),
            },
          ],
        },
        {
          name: 'Mirrors',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FFB6A6',
          color: '#000000',
          src: getImageUrl('250416category_04.png', true),
          href: 'https://www.beliani.ch/armchairs/hanging-chairs/',
          products: [
            {
              id: '590641',
              src: getImageUrl('250416product_13.png', true),
            },
            {
              id: '359399',
              src: getImageUrl('250416product_14.png', true),
            },
            {
              id: '263024',
              src: getImageUrl('250416product_15.png', true),
            },
            {
              id: '122470',
              src: getImageUrl('250416product_16.png', true),
            },
          ],
        },
      ],
      categories_add: [
        {
          background: '#ffffff',
          color: '#000000',
          href: 'https://www.beliani.ch/outdoor-furniture/garden-benches/',
          src: getImageUrl('250416category_05.png', true),
        },
        {
          background: '#ffffff',
          color: '#000000',
          href: 'https://www.beliani.ch/outdoor-furniture/storage-boxes/',
          src: getImageUrl('250416category_06.png', true),
        },
        {
          background: '#ffffff',
          color: '#000000',
          href: 'https://www.beliani.ch/outdoor-textiles/cushions-for-garden/',
          src: getImageUrl('250416category_07.png', true),
        },
        {
          background: '#ffffff',
          color: '#000000',
          href: 'https://www.beliani.ch/outdoor-furniture/sun-loungers/',
          src: getImageUrl('250416category_08.png', true),
        },
      ],
      css: types.CSS.LP,
      links: [
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-16',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('250416title_01.png', true),
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('250319video.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-03',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('250319inside.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-09',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250409b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-04-04',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '38',
            value: getImageUrl('20250404b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-18',
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'search/lemvig/',
          },
        },
      ],
      tableQueries: [
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '11:12',
          name: 'tit',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '14:21',
          name: 'categories',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '22',
          name: 'additionalt',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '23:26',
          name: 'additional',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '27',
          name: 'shopnow',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '16.04.25- Garden categories!',
          tableRange: '36:37',
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
