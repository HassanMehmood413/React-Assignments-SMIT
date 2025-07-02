const express = require("express")
const router = express.Router()

const {
    createProduct,
    getProducts,
    updateProduct,
    deleteProducts
} = require("../controller/ProductsController")



router.post("/create/products", createProduct)
router.get("/products", getProducts)
router.put("/update/products/:id", updateProduct)
router.delete("/delete/products/:id", deleteProducts)

module.exports = router