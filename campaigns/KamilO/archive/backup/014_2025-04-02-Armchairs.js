export default new entities.Campaign({
  startId: '31921',
  name: 'Armchairs',
  date: '2025.04.02',
  issueCardId: '348426',
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
      template: templates.Office,
      css: types.CSS.NS,
      background: '#750000',
      categories: [
        {
          name: 'Coat stands',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#750000',
          color: '#000000',
          src: getImageUrl('250402category_01.png', true),
          href: 'https://www.beliani.ch/armchairs/fabric-armchairs/',
          products: [
            {
              id: '444121',
              src: getImageUrl('250402product_01.png', true),
            },
            {
              id: '590165',
              src: getImageUrl('250402product_02.png', true),
            },
            {
              id: '590466',
              src: getImageUrl('250402product_03.png', true),
            },
            {
              id: '403334',
              src: getImageUrl('250402product_04.png', true),
            },
          ],
        },
        {
          name: 'Sideboard',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FF2F00',
          color: '#000000',
          src: getImageUrl('250402category_02.png', true),
          href: 'https://www.beliani.ch/armchairs/hanging-chairs/',
          products: [
            {
              id: '188788',
              src: getImageUrl('250402product_05.png', true),
            },
            {
              id: '590679',
              src: getImageUrl('250402product_06.png', true),
            },
            {
              id: '356643',
              src: getImageUrl('250402product_07.png', true),
            },
            {
              id: '311722',
              src: getImageUrl('250402product_08.png', true),
            },
          ],
        },
        {
          name: 'Rugs',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#750000',
          color: '#000000',
          src: getImageUrl('250402category_03.png', true),
          href: 'https://www.beliani.ch/armchairs/rocking-chairs/',
          products: [
            {
              id: '383702',
              src: getImageUrl('250402product_09.png', true),
            },
            {
              id: '316080',
              src: getImageUrl('250402product_10.png', true),
            },
            {
              id: '138922',
              src: getImageUrl('250402product_11.png', true),
            },
            {
              id: '138924',
              src: getImageUrl('250402product_12.png', true),
            },
          ],
        },
        {
          name: 'Mirrors',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FF2F00',
          color: '#000000',
          src: getImageUrl('250402category_04.png', true),
          href: 'https://www.beliani.ch/armchairs/leather-armchairs/',
          products: [
            {
              id: '391979',
              src: getImageUrl('250402product_13.png', true),
            },
            {
              id: '516196',
              src: getImageUrl('250402product_14.png', true),
            },
            {
              id: '374343',
              src: getImageUrl('250402product_15.png', true),
            },
            {
              id: '100194',
              src: getImageUrl('250402product_16.png', true),
            },
          ],
        },
        {
          href: 'https://www.beliani.ch/tables/side-tables/',
        },
        {
          href: 'https://www.beliani.ch/rugs/',
        },
        {
          href: 'https://www.beliani.ch/textiles/scatter-cushions/',
        },
        {
          href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
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
            value: 'content/lp25-04-02',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('250402title_01.png', true),
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
            placeholderPosition: '45',
            value: getImageUrl('250319inside.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-26',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250326b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-21',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250321b.png', true),
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
          tableName: '02.04.25 - Armchairs!',
          tableRange: '14:21',
          name: 'categories',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '02.04.25 - Armchairs!',
          tableRange: '22:26',
          name: 'additional',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '02.04.25 - Armchairs!',
          tableRange: '27',
          name: 'shopnow',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '02.04.25 - Armchairs!',
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
      template: templates.Office,
      background: '#750000',
      topImageColor: '#ffffff',
      categories: [
        {
          name: 'Coat stands',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#750000',
          color: '#000000',
          src: getImageUrl('250402category_01.png', true),
          href: 'https://www.beliani.ch/armchairs/fabric-armchairs/',
          products: [
            {
              id: '444121',
              src: getImageUrl('250402product_01.png', true),
            },
            {
              id: '590165',
              src: getImageUrl('250402product_02.png', true),
            },
            {
              id: '590466',
              src: getImageUrl('250402product_03.png', true),
            },
            {
              id: '403334',
              src: getImageUrl('250402product_04.png', true),
            },
          ],
        },
        {
          name: 'Sideboard',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FF2F00',
          color: '#000000',
          src: getImageUrl('250402category_02.png', true),
          href: 'https://www.beliani.ch/armchairs/hanging-chairs/',
          products: [
            {
              id: '188788',
              src: getImageUrl('250402product_05.png', true),
            },
            {
              id: '590679',
              src: getImageUrl('250402product_06.png', true),
            },
            {
              id: '356643',
              src: getImageUrl('250402product_07.png', true),
            },
            {
              id: '311722',
              src: getImageUrl('250402product_08.png', true),
            },
          ],
        },
        {
          name: 'Rugs',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#750000',
          color: '#000000',
          src: getImageUrl('250402category_03.png', true),
          href: 'https://www.beliani.ch/armchairs/rocking-chairs/',
          products: [
            {
              id: '383702',
              src: getImageUrl('250402product_09.png', true),
            },
            {
              id: '316080',
              src: getImageUrl('250402product_10.png', true),
            },
            {
              id: '138922',
              src: getImageUrl('250402product_11.png', true),
            },
            {
              id: '138924',
              src: getImageUrl('250402product_12.png', true),
            },
          ],
        },
        {
          name: 'Mirrors',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FF2F00',
          color: '#000000',
          src: getImageUrl('250402category_04.png', true),
          href: 'https://www.beliani.ch/armchairs/leather-armchairs/',
          products: [
            {
              id: '391979',
              src: getImageUrl('250402product_13.png', true),
            },
            {
              id: '516196',
              src: getImageUrl('250402product_14.png', true),
            },
            {
              id: '374343',
              src: getImageUrl('250402product_15.png', true),
            },
            {
              id: '100194',
              src: getImageUrl('250402product_16.png', true),
            },
          ],
        },
        {
          href: 'https://www.beliani.ch/tables/side-tables/',
        },
        {
          href: 'https://www.beliani.ch/rugs/',
        },
        {
          href: 'https://www.beliani.ch/textiles/scatter-cushions/',
        },
        {
          href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
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
            value: 'content/lp25-04-02',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('250402title_01.png', true),
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
            placeholderPosition: '45',
            value: getImageUrl('250319inside.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-26',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250326b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-21',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250321b.png', true),
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
          tableName: '02.04.25 - Armchairs!',
          tableRange: '11:12',
          name: 'tit',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '02.04.25 - Armchairs!',
          tableRange: '14:21',
          name: 'categories',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '02.04.25 - Armchairs!',
          tableRange: '22:26',
          name: 'additional',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '02.04.25 - Armchairs!',
          tableRange: '27',
          name: 'shopnow',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '02.04.25 - Armchairs!',
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
