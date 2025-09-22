export default new entities.Campaign({
  startId: "28593",
  name: "Advent calendar",
  date: "2025.12.04",
  issueCardId: "321293",
  alarm: {
    isActive: false,
  },
  isArchive: true,
  optimizeImg: false,
  figmaUrl:
    "https://www.figma.com/design/jGgGXGku9MNqYtIXcWPGJZ/2025.12.04-Advent-calendar-(Copy)?node-id=0-1&node-type=canvas&t=ABEh9USn5IcKQntI-0",
  templates: [
    {
      name: "Newsletter",
      type: types.NEWSLETTER,
      template: templates.AdventCalendar,
      css: types.CSS.NS,
      wrapper: types.WRAPPER,
      background: "#F7EAE9",
      links: [
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-12-04",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: getImageUrl("20251204_01.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-12-04",
          },
        },
        {
          value: "https://upload.pictureserver.net/static/2025/20251204gif.gif",
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-11-07",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: getImageUrl("20251107b.png", true),
          },
        },
        {
          query: true,
          href: {
            type: "relation",
            relyOn: "origin",
            placeholderPosition: "0",
            value: "content/lp24-11-01",
          },
        },
        {
          src: {
            type: "relation",
            relyOn: "slug",
            placeholderPosition: "45",
            value: getImageUrl("20251101b.png", true),
          },
        },
      ],
      tableQueries: [
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "04.12.24-AdventCalendar!",
          tableRange: "14",
          name: "introTitle",
          fallback: [
            "Find something new every day to make your Christmas extra special.",
          ],
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "04.12.24-AdventCalendar!",
          tableRange: "15",
          name: "introSubtitle",
          fallback: [
            "Don't miss out, each deal is available for one day only.",
          ],
        },
        {
          tableId: "1sVDViDxz4CVoDaa7di4oVC7Oa-8uyKmzhMAs9lQIV88",
          tableName: "04.12.24-AdventCalendar!",
          tableRange: "16:17",
          name: "condition",
          fallback: [
            "Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 5% additional discount on your order. The minimum order amount is €250. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 10% additional discount on your order. The minimum order amount is €500. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 15% additional discount on your order. The minimum order amount is €1000. Use the code YYY at the checkout when placing an order on www.beliani.XXX and get the 20% additional discount on your order. The minimum order amount is €2500. Only one voucher is redeemable per person and order. This voucher cannot be exchanged for cash and you can only use one voucher code per order. This offer is valid till 01.12.2025 or as long as the products are in stock. This voucher cannot be used for pending orders. This offer is not valid for resellers. All items are subject to availability. All prices are subject to change without notification.",
            'If you wish to unsubscribe from the newsletter, you can do so by clicking on the <a href="[[newsunassignurl]]"style="text-decoration:none;color:#000000;">Unsubscribe</a> link.',
          ],
        },
      ],
    },
  ],
});
