## Reventa

![team GLO](https://res.cloudinary.com/dpbzq29kr/image/upload/c_scale,h_428/v1615237662/Image_from_iOS_qib6xu.jpg)

[deployed api with full auth/CRUD](https://reventa-server.herokuapp.com/api)
[deployed site](https://reventa.netlify.app/)

### Schemas

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    photos: [{ type: String, required: false }],
    description: { type: String, required: true },
    price: { type: String, required: true },
    shipping: { type: Boolean, required: true },
    contactInfo: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("products", Product);

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
    products: [{ type: Schema.Types.ObjectId, ref: "products" }],
    wishlist: [{ type: Schema.Types.ObjectId,ref:"products"}],
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", User);
```

### Whimsical Diagrams

[Component Heirarchy](https://res.cloudinary.com/dpbzq29kr/image/upload/v1615234934/Screen_Shot_2021-03-08_at_3.20.05_PM_dgf3pw.png)

### Team Expectations

[expectations](https://docs.google.com/document/d/1N40wucCU4Yystfjp813wbzgSCg4I6vNr7_FVhVyI2ic/edit?usp=sharing)

### Overview

Reventa is a community site similar to craigslist where users can post their used furniture for resale. Everyone can view items, but in order to view contact information to contact a seller you must login to an existing account. In order to create a listing you also must be logged into an existing account.

The homepage will have the most recent listings as well as helpful links to relevant articles around home decor. From the all listings page users will be able to sort by pre-filled checkboxes or use the search box to narrow down results.

### MVP:

[Github Project Page](https://github.com/ginestah/reventa/projects/1)

### Post MVPs:

Build Wishlist post MVP
Post MVP edit/delete restrictions for users that don’t “own” that listing
