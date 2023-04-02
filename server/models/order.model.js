const mongoose = require("mongoose");

//schema for order
const orderSchema = mongoose.Schema({
    title: {type: String, required: true},
    brand: {type: String, required: true},
    description: {type: String, required: true},
    DealPrice: {type: Number, required: true}, //M.R.P
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
    subCategory: {type: String, required: true}, // if category is electronics you subCategory could be mobile/watch/audio/
    productId: {type: String, required: true},
    qtn: {type: Number,required: true},
    userId: {type: String, required: true},
    userDetails:{
        type: Object,
        required: true,
        name:{type: String,required: true},
        contact:{type: Number,required: true},
        pincode:{type: Number,required: true},
        address:{type: String,required: true},
    }
},
{versionKey:false}
);


//template/model for creating order
const OrderModel = mongoose.model("order",orderSchema);


module.exports = {
    OrderModel
};

