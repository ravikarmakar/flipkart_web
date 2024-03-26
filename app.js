const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Product = require("./models/product.js");
const engine = require("ejs-mate");

const MONGO_URL = "mongodb://127.0.0.1:27017/Flipkart";

main()
  .then(() => {
    console.log("connected to DaataBase");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("i am root page");
});

app.get("/product", async (req, res) => {
  let allProduct = await Product.find({});
  res.render("products/index", { allProduct });
});

app.get("/product/:category", async (req, res) => {
  let { category } = req.params;
  const categoryProducts = await Product.find({ category: category });
  console.log(categoryProducts);
  // let allProduct = await Product.find({});
  res.render("products/product", { categoryProducts });
});

app.listen(9000, () => {
  console.log("Server listening on Port 9000");
});
