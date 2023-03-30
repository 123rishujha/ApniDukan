const jwt = require("jsonwebtoken");


const authorise = (req,res,next) =>{
    const sessionToken = req.session.token;
    console.log("sessionToken from middleware",sessionToken);
    if(sessionToken){
        const decoded = jwt.verify(sessionToken, 'key');
        if(decoded){
            // if(req.method=="GET"){
            //     next();
            // }else{
            //     req.body.userId = decoded.userId;
            //     next();
            // }
            req.body.userId = decoded.userId;
            next();
        }else{
            res.status(401).send({success:false,message:"Please Login first"});
        }
    }
    else{
        res.status(401).send({success:false,mesage:"You are not authorize please login"});
    }
}


module.exports={
    authorise
}

