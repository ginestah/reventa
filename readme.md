## Reventa

### Schemas

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema(
  {
    name: { type: String, required: true },
    photos: [{ imgURL: { type: String, required: true } }],
    description: { type: String, required: true },
    price: { type: String, required: true },
    shipping: { type: Boolean, required: true },
    contactInfo: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("products", Product);

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", User);
```

### Whimsical Diagrams

### Team Expectations

[expectations](https://docs.google.com/document/d/1N40wucCU4Yystfjp813wbzgSCg4I6vNr7_FVhVyI2ic/edit?usp=sharing)

### Overview

Reventa is a community site similar to craigslist where users can post their used furniture for resale. Everyone can view items, but in order to view contact information to contact a seller you must login to an existing account. In order to create a listing you also must be logged into an existing account.

The homepage will have the most recent listings as well as helpful links to relevant articles around home decor. From the all listings page users will be able to sort by pre-filled checkboxes or use the search box to narrow down results.

### MVP:

### Post MVPs:
