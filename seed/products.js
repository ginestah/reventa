const db = require("../db/connection");
const Product = require("../models/product");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const products = [
    {
      name: "1980's Vintage Post Modern Chair",
      photos: [
        {
          imgURL:
            "https://chairish-prod.freetls.fastly.net/image/product/sized/17b86431-1c71-4766-8b73-ce841db543aa/1980s-vintage-post-modern-curvy-accent-chair-0587?aspect=fit&width=1600&height=1600",
        },
        {
          imgURL:
            "https://chairish-prod.freetls.fastly.net/image/product/master/c3fbbc29-4cd6-4c40-baa5-4685fccdf63e/1980s-vintage-post-modern-curvy-accent-chair-8689",
        },
        {
          imgURL:
            "https://chairish-prod.freetls.fastly.net/image/product/master/8100bbbc-c33e-4584-bcf0-2c5e87081062/1980s-vintage-post-modern-curvy-accent-chair-6092",
        },
      ],
      description: "super comfortable chairs",
      price: "180",
      shipping: true,
      contactInfo: "check my user acct",
    },
    {
      name: "1980's Vintages Mies Van Der Rohe Chair",
      photos: [
        {
          imgURL:
            "https://chairish-prod.freetls.fastly.net/image/product/sized/fa66fe38-e2da-43af-95f8-7770d5388503/1980s-vintage-mies-van-der-rohe-style-chair-4404?aspect=fit&width=1600&height=1600",
        },
        {
          imgURL:
            "https://chairish-prod.freetls.fastly.net/image/product/sized/fa66fe38-e2da-43af-95f8-7770d5388503/1980s-vintage-mies-van-der-rohe-style-chair-4404?aspect=fit&width=1600&height=1600",
        },
        {
          imgURL:
            "https://chairish-prod.freetls.fastly.net/image/product/sized/de9f0b18-1131-4885-8a8c-3532db5e2192/1980s-vintage-mies-van-der-rohe-style-chair-3101?aspect=fit&width=1600&height=1600",
        },
      ],
      description: "super comfortable chairs",
      price: "100",
      shipping: false,
      contactInfo: "check my user acct",
    },
    {
      name: "Sofa with Reversible Chaise",
      photos: [
        {
          imgURL:
            "https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/253000-253999/253100-253199/253180/253180_grey_fabric_reversible_sofa_chaise_signature_01.jpg?w=650&h=440&mode=pad",
        },
        {
          imgURL:
            "https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/253000-253999/253100-253199/253180/253180_grey_fabric_reversible_sofa_chaise_side_02.jpg?w=650&h=440&mode=pad",
        },
        {
          imgURL:
            "https://www.livingspaces.com/globalassets/productassets/200000-299999/250000-259999/253000-253999/253100-253199/253180/253180_grey_fabric_reversible_sofa_chaise_room_32.jpg?w=650&h=440&mode=pad",
        },
      ],
      description: "super comfortable chairs",
      price: "1800",
      shipping: true,
      contactInfo: "check my user acct",
    },
    {
      name: "Carson Carrington Klemens Round Dinning Table",
      photos: [
        {
          imgURL:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUgK3GOgZtFxpyBPTsL5koXLHoDIi8QX42BCoAc57H-TilL0Yr_eLKv6MaTgOjhAC6b7QQnfiL67CKpYl99awP3YmsPfR1RO6l2cdoPka0-BINMPY&usqp=CAY",
        },
      ],
      description: "super comfortable chairs",
      price: "1800",
      shipping: true,
      contactInfo: "check my user acct",
    },
    {
      name: "Living Room Rug",
      photos: [
        {
          imgURL:
            "https://res.litfad.com/site/img/item/2020/09/13/1716347/584x584.jpg",
        },
        {
          imgURL:
            "https://res.litfad.com/site/img/item/2020/09/14/1716340/584x584.jpg",
        },
      ],
      description: "super comfortable chairs",
      price: "1800",
      shipping: true,
      contactInfo: "check my user acct",
    },
  ];
  await Product.insertMany(products);
  console.log("Created products!");
};
const run = async () => {
  await main();
  db.close();
};

run();
