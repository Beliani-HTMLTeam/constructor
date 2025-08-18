export default new entities.Campaign({
  date: "2025.07.18",
  issueCardId: "35124",
  name: "Chairs",
  startId: "35348",
  figmaUrl:
    "https://www.figma.com/design/nBDXtfJ5MNHDCLOp7B9G15/2025.07.18-Chairs-Moje?node-id=0-1&p=f&t=D0DITGCIu0NkFjMD-0",
  alarm: {
    isActive: false,
  },
  isArchive: false,
  optimizeImg: false,
  single_image: false,
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.mondayRegularNslt,
      background: "#FD9000",
      wrapper: types.WRAPPER,
      css: types.CSS.NS,
      intro: {
        background: "#FD9000",
        color: "#000000",
        type: "paragraph",
      },
      inside: {
        type: "timer",
        background: "#FFCCB7",
        color: "#000000",
        src: getImageUrl("20250718free.png", true),
      },
      gif_src: {
        CHDE: "https://gen.sendtric.com/countdown/0pmf5eq1tl",
        CHFR: "https://gen.sendtric.com/countdown/s263w0x8s3",
        FR: "https://gen.sendtric.com/countdown/7byrbh7mf7",
        UK: "https://gen.sendtric.com/countdown/3ldilmmhwh",
        DE: "https://gen.sendtric.com/countdown/nnn5pylp09",
        AT: "https://gen.sendtric.com/countdown/4c0wqpfe01",
        ES: "https://gen.sendtric.com/countdown/0ovhjzvqkh",
        PL: "https://gen.sendtric.com/countdown/cwxdlbea3l",
        NL: "https://gen.sendtric.com/countdown/au83vcdev2",
        PT: "https://gen.sendtric.com/countdown/we1qtm1h7p",
        IT: "https://gen.sendtric.com/countdown/mprmlmy8ub",
        SE: "https://gen.sendtric.com/countdown/k38eo3q2x3",
        HU: "https://gen.sendtric.com/countdown/q6ia6jbxaj",
        DK: "https://gen.sendtric.com/countdown/02eycb0dpp",
        CZ: "https://gen.sendtric.com/countdown/8bgx3he573",
        FI: "https://gen.sendtric.com/countdown/1hbhrpyeer",
        NO: "https://gen.sendtric.com/countdown/0owk9sv9q9",
        SK: "https://gen.sendtric.com/countdown/q4em4qjgnx",
        BENL: "https://gen.sendtric.com/countdown/dxaqav1ec8",
        BEFR: "https://gen.sendtric.com/countdown/vw9xnia13r",
        RO: "https://gen.sendtric.com/countdown/0818g48o3i",
      },
      categories: [
        {
          name: "Dining chairs",
          background: "#FD9000",
          color: "#000000",
          type: "wednesday",
          src: getImageUrl("cat_1_20250718.png", true),
          href: "https://www.beliani.ch/chairs/dining-chairs/?sort=default",
          products: [
            {
              id: "619991", //origin.includes("HU") ? "306283" : "231605",
              src: getImageUrl("product_01_20250718.png", true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
            },
            {
              id: "593071",
              src: getImageUrl("product_02_20250718.png", true),
            },
            {
              id: "619489",
              src: getImageUrl("product_03_20250718.png", true),
            },
            {
              id: "522358",
              src: getImageUrl("product_04_20250718.png", true),
            },
          ],
        },
        {
          name: "Fabric chairs",
          background: "#FD9000",
          color: "#000000",
          type: "wednesday",
          src: getImageUrl("cat_2_20250718.png", true),
          href: "https://www.beliani.ch/chairs/fabric-chairs/",
          products: [
            {
              id: "390983",
              src: getImageUrl("product_05_20250718.png", true),
            },
            {
              id: "446382",
              src: getImageUrl("product_06_20250718.png", true),
            },
            {
              id: "595710",
              src: getImageUrl("product_07_20250718.png", true),
            },
            {
              id: "391164",
              src: getImageUrl("product_08_20250718.png", true),
            },
          ],
        },
        {
          name: "Bar stools",
          background: "#FD9000",
          color: "#000000",
          type: "wednesday",
          src: getImageUrl("cat_3_20250718.png", true),
          href: "https://www.beliani.ch/chairs/bar-chairs/",
          products: [
            {
              id: "605240",
              src: getImageUrl("product_09_20250718.png", true),
            },
            {
              id: "558982",
              src: getImageUrl("product_10_20250718.png", true),
            },
            {
              id: "427207",
              src: getImageUrl("product_11_20250718.png", true),
            },
            {
              id: "580220",
              src: getImageUrl("product_12_20250718.png", true),
            },
          ],
        },
      ],
      links: [
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-07-18",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("_title_20250718.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-07-14",
          },
        },
        {
          value: getImageUrl("_title_20250718.png", true),
        },
        {
          value: getImageUrl("20250711free.png", true),
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-07-11",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250711b.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-07-10",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250710b.png", true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "16",
          name: "intro",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "Voucher - 14.07.25 - Free parasol!",
          tableRange: "10:11",
          name: "timer",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "25",
          name: "cta",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "17:22",
          name: "categories",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "39:40",
          name: "condition",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "11.07.25 - Beds special!",
          tableRange: "22",
          name: "catLink",
        },
        {
          tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
          tableName: "Categories",
          tableRange: "?majorDimension=COLUMNS",
          name: "categoriesTitles",
          tableColumns: false,
        },
        {
          tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
          tableName: "Categories",
          tableRange: "?majorDimension=COLUMNS",
          name: "categoriesLinks",
          tableColumns: false,
        },
        {
          tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
          tableName: "Header",
          tableRange: "?majorDimension=COLUMNS",
          name: "header",
          tableColumns: false,
        },
        {
          tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
          tableName: "Footer",
          tableRange: "?majorDimension=COLUMNS",
          name: "footer",
          tableColumns: false,
        },
      ],
    },
    {
      name: "Landing",
      type: types.LANDINGPAGE,
      template: templates.mondayRegularNslt,
      background: "#FD9000",
      css: types.CSS.LP,
      tit: {
        color: "#000",
        type: "twoSameLines",
      },
      intro: {
        background: "#FD9000",
        color: "#000000",
        type: "paragraph",
      },
      inside: {
        type: "timer",
        background: "#FFCCB7",
        color: "#000000",
        src: getImageUrl("20250718free.png", true),
      },
      gif_src: {
        CHDE: "https://gen.sendtric.com/countdown/0pmf5eq1tl",
        CHFR: "https://gen.sendtric.com/countdown/s263w0x8s3",
        FR: "https://gen.sendtric.com/countdown/7byrbh7mf7",
        UK: "https://gen.sendtric.com/countdown/3ldilmmhwh",
        DE: "https://gen.sendtric.com/countdown/nnn5pylp09",
        AT: "https://gen.sendtric.com/countdown/4c0wqpfe01",
        ES: "https://gen.sendtric.com/countdown/0ovhjzvqkh",
        PL: "https://gen.sendtric.com/countdown/cwxdlbea3l",
        NL: "https://gen.sendtric.com/countdown/au83vcdev2",
        PT: "https://gen.sendtric.com/countdown/we1qtm1h7p",
        IT: "https://gen.sendtric.com/countdown/mprmlmy8ub",
        SE: "https://gen.sendtric.com/countdown/k38eo3q2x3",
        HU: "https://gen.sendtric.com/countdown/q6ia6jbxaj",
        DK: "https://gen.sendtric.com/countdown/02eycb0dpp",
        CZ: "https://gen.sendtric.com/countdown/8bgx3he573",
        FI: "https://gen.sendtric.com/countdown/1hbhrpyeer",
        NO: "https://gen.sendtric.com/countdown/0owk9sv9q9",
        SK: "https://gen.sendtric.com/countdown/q4em4qjgnx",
        BENL: "https://gen.sendtric.com/countdown/dxaqav1ec8",
        BEFR: "https://gen.sendtric.com/countdown/vw9xnia13r",
        RO: "https://gen.sendtric.com/countdown/0818g48o3i",
      },
      categories: [
        {
          name: "Dining chairs",
          background: "#FD9000",
          color: "#000000",
          type: "wednesday",
          src: getImageUrl("cat_1_20250718.png", true),
          href: "https://www.beliani.ch/chairs/dining-chairs/?sort=default",
          products: [
            {
              id: "619991", //origin.includes("HU") ? "306283" : "231605",
              src: getImageUrl("product_01_20250718.png", true), //origin.includes("HU") ? getImageUrl("20250505Category11.png", true) : getImageUrl("20250505huCategory11.png", true),
            },
            {
              id: "593071",
              src: getImageUrl("product_02_20250718.png", true),
            },
            {
              id: "619489",
              src: getImageUrl("product_03_20250718.png", true),
            },
            {
              id: "522358",
              src: getImageUrl("product_04_20250718.png", true),
            },
          ],
        },
        {
          name: "Fabric chairs",
          background: "#FD9000",
          color: "#000000",
          type: "wednesday",
          src: getImageUrl("cat_2_20250718.png", true),
          href: "https://www.beliani.ch/chairs/fabric-chairs/",
          products: [
            {
              id: "390983",
              src: getImageUrl("product_05_20250718.png", true),
            },
            {
              id: "446382",
              src: getImageUrl("product_06_20250718.png", true),
            },
            {
              id: "595710",
              src: getImageUrl("product_07_20250718.png", true),
            },
            {
              id: "391164",
              src: getImageUrl("product_08_20250718.png", true),
            },
          ],
        },
        {
          name: "Bar stools",
          background: "#FD9000",
          color: "#000000",
          type: "wednesday",
          src: getImageUrl("cat_3_20250718.png", true),
          href: "https://www.beliani.ch/chairs/bar-chairs/",
          products: [
            {
              id: "605240",
              src: getImageUrl("product_09_20250718.png", true),
            },
            {
              id: "558982",
              src: getImageUrl("product_10_20250718.png", true),
            },
            {
              id: "427207",
              src: getImageUrl("product_11_20250718.png", true),
            },
            {
              id: "580220",
              src: getImageUrl("product_12_20250718.png", true),
            },
          ],
        },
      ],
      links: [
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-07-18",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("_title_20250718.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-07-14",
          },
        },
        {
          value: getImageUrl("_title_20250718.png", true),
        },
        {
          value: getImageUrl("20250711free.png", true),
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-07-11",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250711b.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp25-07-10",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "38",
            value: getImageUrl("20250710b.png", true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "13:14",
          name: "tit",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "16",
          name: "intro",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "Voucher - 14.07.25 - Free parasol!",
          tableRange: "10:11",
          name: "timer",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "25",
          name: "cta",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "17:22",
          name: "categories",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "18.07.25 - Chairs!",
          tableRange: "39:40",
          name: "condition",
        },
        {
          tableId: "1djnjfhsFX4-Fghv5cQU_UNYaEhVL9Ban4VUqIfHsWdc",
          tableName: "11.07.25 - Beds special!",
          tableRange: "22",
          name: "catLink",
        },
        {
          tableId: "1HPEr1vRHkVPJ5lp0mUbSPsOoiUnWTEQKiSiL9BWiDg4",
          tableName: "Categories",
          tableRange: "?majorDimension=COLUMNS",
          name: "categoriesTitles",
          tableColumns: false,
        },
        {
          tableId: "1g4YNCi3FzxsYpbP-BWMmz9vBJuZCz_yNIfcatqUf6O8",
          tableName: "Categories",
          tableRange: "?majorDimension=COLUMNS",
          name: "categoriesLinks",
          tableColumns: false,
        },
        {
          tableId: "1Q1tgnXS3vV8tUnTgbuw0rFE6BqqfIRg8lylQ7N2v6KU",
          tableName: "Header",
          tableRange: "?majorDimension=COLUMNS",
          name: "header",
          tableColumns: false,
        },
        {
          tableId: "1IrbxxgxlXKpr22uSfC1VVqFeNH2bZaMcSe0FW2pAu8M",
          tableName: "Footer",
          tableRange: "?majorDimension=COLUMNS",
          name: "footer",
          tableColumns: false,
        },
      ],
    },
  ],
});
