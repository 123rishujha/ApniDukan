const express = require("express");

//import/requiring files below
const { ProductModel } = require("../models/product.model"); // Product model/template

////->>> making product main productRouter variable here and calling Router method of express;
const productRoute = express.Router();



//routes starting -------------------//////////////////////////////////

//create -> post product -> admin operations
productRoute.post("/add", async (req, res) => {
  const {
    title,
    brand,
    description,
    price,
    discount,
    inStock,
    soldBy,
    imageUrls,
    rating,
    features,
    offers,
    category,
    subCategory,
  } = req.body;
  try {
    const product = new ProductModel({
      title,
      brand,
      description,
      price,
      discount,
      inStock,
      soldBy,
      imageUrls,
      rating,
      features,
      offers,
      category,
      subCategory,
    });
    const saveProduct = await product.save();
    res
      .status(200)
      .send({
        success: true,
        message: "posted successfully",
        data: saveProduct,
      });
  } catch (err) {
    res.status(400).send({ success: false, message: err });
  }
});

productRoute.get("/", async (req, res) => {
    console.log("products");
    const query = req.query
    const {sort} = req.query
  try {
    const sortOption =    sort ? { price: sort === 'asc' ? 1 : -1 } : {};
    const products = await ProductModel.find(query).sort(sortOption);
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({msg: "Something went wrong! "})
  }
});

module.exports = {
  productRoute,
};
