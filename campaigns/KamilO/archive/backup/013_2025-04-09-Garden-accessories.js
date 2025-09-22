export default new entities.Campaign({
  startId: "32050",
  name: "Garden accessories",
  date: "2025.04.09",
  issueCardId: "351475",
  alarm: {
    isActive: false,
    description: "Add soon ending campaigns.",
  },
  isArchive: true,
  optimizeImg: false,
  figmaUrl:
    "https://www.figma.com/design/68F9elKyEOboiWtI33XB4h/Armchair---Wednesday-2025.04.02?node-id=0-1&p=f&t=uBbBblish7lCRnsQ-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.RegularWednesdayNslt,
      css: types.CSS.NS,
      background: "#FEB24D",
      categories: [
        {
          name: "Coat stands",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          background: "#FEB24D",
          color: "#000000",
          src: getImageUrl("250409category_01.png", true),
          href: "https://www.beliani.ch/garden-accessories/fire-pits/",
          products: [
            {
              id: "301788",
              src: getImageUrl("250409product_01.png", true),
            },
            {
              id: "315858",
              src: getImageUrl("250409product_02.png", true),
            },
            {
              id: "197917",
              src: getImageUrl("250409product_03.png", true),
            },
            {
              id: "197914",
              src: getImageUrl("250409product_04.png", true),
            },
          ],
        },
        {
          name: "Sideboard",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          background: "#831A1A",
          color: "#ffffff",
          src: getImageUrl("250409category_02.png", true),
          href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
          products: [
            {
              id: "346885",
              src: getImageUrl("250409product_05.png", true),
            },
            {
              id: "261612",
              src: getImageUrl("250409product_06.png", true),
            },
            {
              id: "346544",
              src: getImageUrl("250409product_07.png", true),
            },
            {
              id: "84736",
              src: getImageUrl("250409product_08.png", true),
            },
          ],
        },
        {
          name: "Rugs",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          background: "#FEB24D",
          color: "#000000",
          src: getImageUrl("250409category_03.png", true),
          href: "https://www.beliani.ch/garden-accessories/garden-lanterns/",
          products: [
            {
              id: "121571",
              src: getImageUrl("250409product_09.png", true),
            },
            {
              id: "113587",
              src: getImageUrl("250409product_10.png", true),
            },
            {
              id: "305941",
              src: getImageUrl("250409product_11.png", true),
            },
            {
              id: "190054",
              src: getImageUrl("250409product_12.png", true),
            },
          ],
        },
        {
          name: "Mirrors",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          background: "#831A1A",
          color: "#ffffff",
          src: getImageUrl("250409category_04.png", true),
          href: "https://www.beliani.ch/outdoor-textiles/cushions-for-garden/",
          products: [
            {
              id: "225065",
              src: getImageUrl("250409product_13.png", true),
            },
            {
              id: "417925",
              src: getImageUrl("250409product_14.png", true),
            },
            {
              id: "418076",
              src: getImageUrl("250409product_15.png", true),
            },
            {
              id: "418963",
              src: getImageUrl("250409product_16.png", true),
            },
          ],
        },
      ],
      categories_add: [
        {
          background: "#ffffff",
          color: "#000000",
          href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
          src: getImageUrl("250409category_05.png", true),
        },
        {
          background: "#ffffff",
          color: "#000000",
          href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
          src: getImageUrl("250409category_06.png", true),
        },
        {
          background: "#ffffff",
          color: "#000000",
          href: "https://www.beliani.ch/garden-furniture/parasols/",
          src: getImageUrl("250409category_07.png", true),
        },
        {
          background: "#ffffff",
          color: "#000000",
          href: "https://www.beliani.ch/garden-furniture/picnic-basket/",
          src: getImageUrl("250409category_08.png", true),
        },
      ],
      wrapper: types.WRAPPER,
      links: [
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-04-09",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250409title_01.png", true),
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: getImageUrl("250319video.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-03-03",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250319inside.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-04-02",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250402b.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-03-28",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250328b.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-03-18",
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "search/lemvig/",
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "16:23",
          name: "categories",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "24",
          name: "additionalt",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "25:28",
          name: "additional",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "29",
          name: "shopnow",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "38:39",
          name: "condition",
          fallback: [
            "All items are subject to availability. All prices are correct as of dd.mm.yyyy and are subject to change without notification.",
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        },
      ],
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.RegularWednesdayNslt,
      background: "#FEB24D",
      topImageColor: "#FEB24D",
      categories: [
        {
          name: "Coat stands",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          background: "#FEB24D",
          color: "#000000",
          src: getImageUrl("250409category_01.png", true),
          href: "https://www.beliani.ch/garden-accessories/fire-pits/",
          products: [
            {
              id: "301788",
              src: getImageUrl("250409product_01.png", true),
            },
            {
              id: "315858",
              src: getImageUrl("250409product_02.png", true),
            },
            {
              id: "197917",
              src: getImageUrl("250409product_03.png", true),
            },
            {
              id: "197914",
              src: getImageUrl("250409product_04.png", true),
            },
          ],
        },
        {
          name: "Sideboard",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          background: "#831A1A",
          color: "#ffffff",
          src: getImageUrl("250409category_02.png", true),
          href: "https://www.beliani.ch/garden-accessories/pots-and-planters/",
          products: [
            {
              id: "346885",
              src: getImageUrl("250409product_05.png", true),
            },
            {
              id: "261612",
              src: getImageUrl("250409product_06.png", true),
            },
            {
              id: "346544",
              src: getImageUrl("250409product_07.png", true),
            },
            {
              id: "84736",
              src: getImageUrl("250409product_08.png", true),
            },
          ],
        },
        {
          name: "Rugs",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          background: "#FEB24D",
          color: "#000000",
          src: getImageUrl("250409category_03.png", true),
          href: "https://www.beliani.ch/garden-accessories/garden-lanterns/",
          products: [
            {
              id: "121571",
              src: getImageUrl("250409product_09.png", true),
            },
            {
              id: "113587",
              src: getImageUrl("250409product_10.png", true),
            },
            {
              id: "305941",
              src: getImageUrl("250409product_11.png", true),
            },
            {
              id: "190054",
              src: getImageUrl("250409product_12.png", true),
            },
          ],
        },
        {
          name: "Mirrors",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          background: "#831A1A",
          color: "#ffffff",
          src: getImageUrl("250409category_04.png", true),
          href: "https://www.beliani.ch/outdoor-textiles/cushions-for-garden/",
          products: [
            {
              id: "225065",
              src: getImageUrl("250409product_13.png", true),
            },
            {
              id: "417925",
              src: getImageUrl("250409product_14.png", true),
            },
            {
              id: "418076",
              src: getImageUrl("250409product_15.png", true),
            },
            {
              id: "418963",
              src: getImageUrl("250409product_16.png", true),
            },
          ],
        },
      ],
      categories_add: [
        {
          href: "https://www.beliani.ch/outdoor-furniture/lounge-sets/",
          src: getImageUrl("250409category_05.png", true),
        },
        {
          href: "https://www.beliani.ch/outdoor-furniture/garden-dining-sets/",
          src: getImageUrl("250409category_06.png", true),
        },
        {
          href: "https://www.beliani.ch/garden-furniture/parasols/",
          src: getImageUrl("250409category_07.png", true),
        },
        {
          href: "https://www.beliani.ch/garden-furniture/picnic-basket/",
          src: getImageUrl("250409category_08.png", true),
        },
      ],
      css: types.CSS.LP,
      links: [
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-04-09",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250409title_01.png", true),
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: getImageUrl("250319video.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-03-03",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("250319inside.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-04-02",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250402b.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-03-28",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250328b.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-03-18",
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "search/lemvig/",
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "13:14",
          name: "tit",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "16:23",
          name: "categories",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "24",
          name: "additionalt",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "25:28",
          name: "additional",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "29",
          name: "shopnow",
          fallback: [
            "This is time limited offer. Valid only until 27th of October.",
          ],
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "09.04.25 - Garden accessories!",
          tableRange: "38:39",
          name: "condition",
          fallback: [
            "All items are subject to availability. All prices are correct as of dd.mm.yyyy and are subject to change without notification.",
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        },
      ],
    },
  ],
});
