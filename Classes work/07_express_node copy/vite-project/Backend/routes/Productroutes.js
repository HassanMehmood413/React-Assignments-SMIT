const express = require("express")
const router = express.Router()

const {
    createProduct,
    getProducts,
    updateProduct,
    deleteProducts
} = require("../controller/ProductsController")
const verifyToken = require("../MiddleWares/verify_token")



router.post("/create/products", verifyToken, createProduct)
router.get("/products", verifyToken, getProducts)
router.put("/update/products/:id", verifyToken, updateProduct)
router.delete("/delete/products/:id", verifyToken, deleteProducts)

module.exports = router