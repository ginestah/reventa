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
