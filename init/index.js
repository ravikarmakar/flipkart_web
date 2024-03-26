const mongoose = require("mongoose");
const uploadData = require("./data.js");
const Product = require("../models/product");

main()
  .then(() => {
    console.log("connected to DaataBase");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Flipkart");
}

const addData = async () => {
  await Product.deleteMany({});
  await Product.insertMany(uploadData.data);
  console.log("data saved on mongoDB");
};

addData();
