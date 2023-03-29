const express = require("express");
require("dotenv").config();
const session = require("express-session");

//require files below
const { connection } = require('./connection');
const { productRoute } = require("./routes/product.route");
const { userRoute } = require("./routes/user.route");
//middleware to authorize user
const { authorise } = require("./middlewares/authenticationeMiddleware");

const app = express();



//starting below
app.use(express.json());

//configaring session middlware
app.use(session({
    secret:"key",
    resave:false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use("/user",userRoute);
app.use(authorise);
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

