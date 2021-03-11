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
