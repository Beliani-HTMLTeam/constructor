export default new entities.Campaign({
  startId: '31697',
  name: 'Power of Textiles',
  date: '2025.03.26',
  issueCardId: '346013',
  alarm: {
    isActive: false,
    description: 'Add soon ending campaigns.',
  },
  isArchive: true,
  optimizeImg: false,
  figmaUrl:
    'https://www.figma.com/design/GQ7LtFa0equQiQ58YbNNOD/2025.01.15-Gatherings?node-id=0-1&p=f&t=r2zHrS05ewvLukb0-0',
  templates: [
    {
      name: 'Newsletter',
      type: types.NEWSLETTER,
      template: templates.Office,
      css: types.CSS.NS,
      background: '#FEBC66',
      categories: [
        {
          name: 'Coat stands',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FEBC66',
          color: '#000000',
          src: getImageUrl('250326category_01.png', true),
          href: 'https://www.beliani.ch/textiles/scatter-cushions/',
          products: [
            {
              id: '380558',
              src: getImageUrl('250326product_01.png', true),
            },
            {
              id: '469183',
              src: getImageUrl('250326product_02.png', true),
            },
            {
              id: '495438',
              src: getImageUrl('250326product_03.png', true),
            },
            {
              id: '458071',
              src: getImageUrl('250326product_04.png', true),
            },
          ],
        },
        {
          name: 'Sideboard',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FF4E26',
          color: '#000000',
          src: getImageUrl('250326category_02.png', true),
          href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
          products: [
            {
              id: '569502',
              src: getImageUrl('250326product_05.png', true),
            },
            {
              id: '501589',
              src: getImageUrl('250326product_06.png', true),
            },
            {
              id: '395527',
              src: getImageUrl('250326product_07.png', true),
            },
            {
              id: '373816',
              src: getImageUrl('250326product_08.png', true),
            },
          ],
        },
        {
          name: 'Rugs',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FEBC66',
          color: '#000000',
          src: getImageUrl('250326category_03.png', true),
          href: 'https://www.beliani.ch/textiles/bed-sheets/',
          products: [
            {
              id: '301135',
              src: getImageUrl('250326product_09a.png', true),
            },
            {
              id: '361733',
              src: getImageUrl('250326product_10a.png', true),
            },
            {
              id: '362376',
              src: getImageUrl('250326product_11a.png', true),
            },
            {
              id: '301116',
              src: getImageUrl('250326product_12a.png', true),
            },
          ],
        },
        {
          name: 'Mirrors',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FF4E26',
          color: '#000000',
          src: getImageUrl('250326category_04.png', true),
          href: 'https://www.beliani.ch/textiles/towels/',
          products: [
            {
              id: '554561',
              src: getImageUrl('250326product_13a.png', true),
            },
            {
              id: '243590',
              src: getImageUrl('250326product_14a.png', true),
            },
            {
              id: '356074',
              src: getImageUrl('250326product_15a.png', true),
            },
            {
              id: '243651',
              src: getImageUrl('250326product_16a.png', true),
            },
          ],
        },
        {
          href: 'https://www.beliani.ch/rugs/all+products/',
        },
        {
          href: 'https://www.beliani.ch/sofas/',
        },
        {
          href: 'https://www.beliani.ch/beds/',
        },
        {
          href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
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
            value: 'content/lp25-03-26',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('250326title_01.png', true),
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('250122video.png', true),
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
            value: 'content/lp25-03-20',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250320b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-19',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250319b.png', true),
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
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '15:22',
          name: 'categories',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '23:27',
          name: 'additional',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '28',
          name: 'shopnow',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '37:38',
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
      background: '#FEBC66',
      topImageColor: '#000000',
      categories: [
        {
          name: 'Coat stands',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FEBC66',
          color: '#000000',
          src: getImageUrl('250326category_01.png', true),
          href: 'https://www.beliani.ch/textiles/scatter-cushions/',
          products: [
            {
              id: '380558',
              src: getImageUrl('250326product_01.png', true),
            },
            {
              id: '469183',
              src: getImageUrl('250326product_02.png', true),
            },
            {
              id: '495438',
              src: getImageUrl('250326product_03.png', true),
            },
            {
              id: '458071',
              src: getImageUrl('250326product_04.png', true),
            },
          ],
        },
        {
          name: 'Sideboard',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FF4E26',
          color: '#000000',
          src: getImageUrl('250326category_02.png', true),
          href: 'https://www.beliani.ch/textiles/blankets-and-throws/',
          products: [
            {
              id: '569502',
              src: getImageUrl('250326product_05.png', true),
            },
            {
              id: '501589',
              src: getImageUrl('250326product_06.png', true),
            },
            {
              id: '395527',
              src: getImageUrl('250326product_07.png', true),
            },
            {
              id: '373816',
              src: getImageUrl('250326product_08.png', true),
            },
          ],
        },
        {
          name: 'Rugs',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FEBC66',
          color: '#000000',
          src: getImageUrl('250326category_03.png', true),
          href: 'https://www.beliani.ch/textiles/bed-sheets/',
          products: [
            {
              id: '301135',
              src: getImageUrl('250326product_09a.png', true),
            },
            {
              id: '361733',
              src: getImageUrl('250326product_10a.png', true),
            },
            {
              id: '362376',
              src: getImageUrl('250326product_11a.png', true),
            },
            {
              id: '301116',
              src: getImageUrl('250326product_12a.png', true),
            },
          ],
        },
        {
          name: 'Mirrors',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          background: '#FF4E26',
          color: '#000000',
          src: getImageUrl('250326category_04.png', true),
          href: 'https://www.beliani.ch/textiles/towels/',
          products: [
            {
              id: '554561',
              src: getImageUrl('250326product_13a.png', true),
            },
            {
              id: '243590',
              src: getImageUrl('250326product_14a.png', true),
            },
            {
              id: '356074',
              src: getImageUrl('250326product_15a.png', true),
            },
            {
              id: '243651',
              src: getImageUrl('250326product_16a.png', true),
            },
          ],
        },
        {
          href: 'https://www.beliani.ch/rugs/all+products/',
        },
        {
          href: 'https://www.beliani.ch/sofas/',
        },
        {
          href: 'https://www.beliani.ch/beds/',
        },
        {
          href: 'https://www.beliani.ch/bathtubs-hot-tubs/',
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
            value: 'content/lp25-03-26',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('250326title_01.png', true),
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('250122video.png', true),
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
            value: 'content/lp25-03-20',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250320b.png', true),
          },
        },
        {
          query: true,
          href: {
            type: 'relation',
            relyOn: 'origin',
            placeholderPosition: '0',
            value: 'content/lp25-03-19',
          },
        },
        {
          src: {
            type: 'relation',
            relyOn: 'slug',
            placeholderPosition: '45',
            value: getImageUrl('20250319b.png', true),
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
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '11:12',
          name: 'tit',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '15:22',
          name: 'categories',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '23',
          name: 'additionalt',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '24:27',
          name: 'additional',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '28',
          name: 'shopnow',
          fallback: ['This is time limited offer. Valid only until 27th of October.'],
        },
        {
          tableId: '1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc',
          tableName: '26.03.25 - Power of textiles!',
          tableRange: '37:38',
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
