const express = require("express");
const { getProducts, getProductById } = require("../controllers/productController");
const router = express.Router();


//fetch all products
router.route("/").get(getProducts);

//fetch product by Id
router.route("/:id").get(getProductById);

module.exports = router;