const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const productData = {
  productTitle: "İş Tulumu Bahçıvan Tip Askılı",
  selectableAttributes: [
    {
      name: "Renk",
      values: ["Siyah", "Lacivert"],
    },
    {
      name: "Beden",
      values: ["M", "L", "XL"],
    },
  ],
  productVariants: [
    {
      id: "432081",
      attributes: [
        {
          name: "Beden",
          selectable: true,
          value: "L",
        },
        {
          name: "Renk",
          selectable: true,
          value: "Siyah",
        },
      ],
      images: [
        "https://n11scdn.akamaized.net/a1/500/09/07/31/43/20981291.jpg",
        "https://n11scdn.akamaized.net/a1/500/06/23/25/42/85867976.jpg",
        "https://n11scdn.akamaized.net/a1/500/02/80/22/52/07135903.jpg",
        "https://n11scdn.akamaized.net/a1/500/08/01/96/70/10729119.jpg",
      ],
    },
    {
      id: "432110",
      attributes: [
        {
          name: "Beden",
          selectable: true,
          value: "M",
        },
        {
          name: "Renk",
          selectable: true,
          value: "Lacivert",
        },
      ],
      images: [
        "https://n11scdn.akamaized.net/a1/500/11/96/04/80/87021819.jpg",
        "https://n11scdn.akamaized.net/a1/500/06/12/21/57/46288336.jpg",
        "https://n11scdn.akamaized.net/a1/500/03/42/24/47/91287006.jpg",
        "https://n11scdn.akamaized.net/a1/500/03/59/50/58/43001440.jpg",
      ],
    },
    {
      id: "432089",
      attributes: [
        {
          name: "Beden",
          selectable: true,
          value: "L",
        },
        {
          name: "Renk",
          selectable: true,
          value: "Lacivert",
        },
      ],
      images: [
        "https://n11scdn.akamaized.net/a1/500/03/59/50/58/43001440.jpg",
        "https://n11scdn.akamaized.net/a1/500/06/12/21/57/46288336.jpg",
        "https://n11scdn.akamaized.net/a1/500/03/42/24/47/91287006.jpg",
        "https://n11scdn.akamaized.net/a1/500/11/96/04/80/87021819.jpg",
      ],
    },
    {
      id: "432111",
      attributes: [
        {
          name: "Beden",
          selectable: true,
          value: "XL",
        },
        {
          name: "Renk",
          selectable: true,
          value: "Lacivert",
        },
      ],
      images: [
        "https://n11scdn.akamaized.net/a1/500/06/12/21/57/46288336.jpg",
        "https://n11scdn.akamaized.net/a1/500/11/96/04/80/87021819.jpg",
        "https://n11scdn.akamaized.net/a1/500/03/42/24/47/91287006.jpg",
        "https://n11scdn.akamaized.net/a1/500/03/59/50/58/43001440.jpg",
      ],
    },
  ],
  baremList: [
    {
      minimumQuantity: 120,
      maximumQuantity: 599,
      price: 9.5,
    },
    {
      minimumQuantity: 600,
      maximumQuantity: 799,
      price: 8.46,
    },
    {
      minimumQuantity: 800,
      maximumQuantity: 2147483647,
      price: 7.13,
    },
  ],
};

app.use(cors());

app.get("/product-data", (req, res) => {
  res.json(productData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
