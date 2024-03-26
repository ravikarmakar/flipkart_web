const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: "string",
  description: "string",
  price: "number",
  category: "string",
  imageUrl: "string",
  type: "string",
  brand: "string",
  features: {
    type: Array,
  },
  offer_discount: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
