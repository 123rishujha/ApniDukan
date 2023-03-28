const mongoose = require("mongoose");

//schema for product
const productSchema = mongoose.Schema({

    title: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}, //M.R.P
    discount: {type: Number, required: true}, // if 0% means deal pirce -> price-(0*price)/100; (:- frontend work)
    inStock: {type: Boolean, required: true}, 
    soldBy: {type: String, required: true},
    imageUrls: {type: Array, required: true},// array of urls 
    rating: {type: Object, required: true}, // it will contain rating and count for ex-> (rating-> 4.5 and count->7); {rating:4.5,count:7}
    features: {type: Array, required: true}, // this is going to be array  ex-> (["Material: Water Resistant Strong Polyester","Dimensions: LxWxH - 11 x 6 x 18 inches"])
    offers: {type: Array, required: true}, // array for example -> (["10% Instant Discount up to INR 500 on IDBI Bank Card Trxns"])
    category: {
        type: String,
        enum: ["electronics", "clothes", "furnitures", "fitness"], // use one of these
        required: true
      },
    subCategory: {type: String, required: true} // if category is electronics you subCategory could be mobile/watch/audio/
},
{versionKey:false}
);


//template/model for creating products
const ProductModel = mongoose.model("products",productSchema);


module.exports = {
    ProductModel
};

