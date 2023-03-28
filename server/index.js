const express = require("express");
require("dotenv").config();

//require files below
const { connection } = require('./connection');
const { productRoute } = require("./routes/product.route");


const app = express();



//starting below
app.use(express.json());
app.use("/products",productRoute);



app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("connected to database");
    }
    catch(err){
        console.log("not connected to database");
    }
    console.log(`running on port ${process.env.port}`);
});

