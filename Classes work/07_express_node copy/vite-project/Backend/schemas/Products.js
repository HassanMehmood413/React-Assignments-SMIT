const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  details: String
});


const productModel = mongoose.model("Products",productSchema)
module.exports = productModel