const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req,res,next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        console.log("token found");

        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user = await (await User.findById(decoded.id)).isSelected("-password");
            
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error("Not authorised, no token");
        }
    };



    if(!token){
        res.status(401);
        throw new Error("Not authroized, no token")
    }

    next();
});

module.exports = {protect};