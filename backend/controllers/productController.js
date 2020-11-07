const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");


//fetch all products
const getProducts = asyncHandler(async (req,res ) => {
    const products = await Product.find({});

    res.json(products);
})

//fetch product by id
const getProductById = asyncHandler(async (req,res ) => {
    const product = await Product.findById(req.params.id);

    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message:"Product not found"});
    }
})

module.exports = {getProducts,getProductById};