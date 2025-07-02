
const Product = require("../models/Products")


const createProduct = async (req, res) => {
  try {
    const { name, price, details } = req.body;
    if (!name || !price || !details) {
      res.status(400).json({
        status: "error",
        message: "please provide all the required fields",
        data: null
      })
    }
    else {
      const product = new Product({ name, price, details })
      await product.save()
      res.json({
        status: "success",
        message: "product created successfully",
        data: product
      })
    }
  }
  catch (err) {
    res.json({
      status: "error",
      message: "failed to create product",
      data: err
    })
  }
}

const getProducts =  async (req, res) => {
  try {
    const products = await Product.find()
    res.json({
      status: "success",
      message: "successfully fetched products",
      data: products
    })
  }
  catch (err) {
    res.json({
      status: "error",
      message: "failed to fetch products",
      data: err
    })

  }
}



const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, details } = req.body;
  try {
    const product = await Product.findById(id)
    if (!product) {
      res.status(404).json({
        status: "error",
        message: "product not found",
        data: null
      })
    }
    else {
      if (!name || !price || !details) {
        res.status(400).json({
          status: "error",
          message: "please provide all the required fields",
          data: null
        })
      }
      else {
        product.name = name;
        product.price = price;
        product.details = details;
        await product.save()
        res.json({
          status: "success",
          message: "product updated successfully",
          data: product
        })
      }
    }
  }
  catch (err) {
    res.json({
      status: "error",
      message: "failed to update product",
      data: err
    })
  }
}

const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id)
    if (!product) {
      res.status(404).json({
        status: "error",
        message: "product not found",
        data: null
      })
    }
    else {
      await product.remove()
      res.json({
        status: "success",
        message: "product deleted successfully",
        data: null
      })
    }
  }
  catch (err) {
    res.json({
      status: "error",
      message: "failed to delete product",
      data: err
    })
  } 
}

module.exports = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProducts,
}




// Without Database CRUD operations

// router.get('/products', (req, res) => {
//   try {
//     res.json({
//       status: "success",
//       message: "successfully fetched products",
//       data: products
//     })
//   } catch (err) {
//     res.json({
//       status: "error",
//       message: "failed to fetch products",
//       data: err
//     })
//   }
// })

// router.post("/create/product", (req, res) => {
//   try {
//     const { name, price, details } = req.body;
//     if (!name || !price || !details) {
//       res.status(400).json({
//         status: "error",
//         message: "please provide all the required fields",
//         data: null
//       })
//     }
//     else {
//       const newProduct = {
//         id: nextID++,
//         name,
//         price,
//         details
//       }
//       products.push(newProduct)
//       res.json({
//         status: "success",
//         message: "product created successfully",
//         data: newProduct
//       })
//     }
//   } catch (err) {
//     res.json({
//       status: "error",
//       message: "failed to create product",
//       data: err
//     })
//   }
// })


// router.put("/update/product/:id", (req, res) => {
//   const { id } = req.params;
//   const { name, price, details } = req.body;
//   try {
//     const index = products.findIndex(product => product.id === id);
//     if (index === -1) {
//       res.status(404).json({
//         status: "error",
//         message: "product not found",
//         data: null
//       })
//     }
//     else {
//       if (!name || !price || !details) {
//         res.status(400).json({
//           status: "error",
//           message: "please provide all the required fields",
//           data: null
//         })
//       }
//       else {
//         products[index].name = name;
//         products[index].price = price;
//         products[index].details = details;
//         res.json({
//           status: "success",
//           message: "product updated successfully",
//           data: products[index]
//         })
//       }
//     }
//   }
//   catch {
//     res.json({
//       status: "error",
//       message: "failed to update product",
//       data: null
//     })
//   }
// })

// router.delete("/delete/product/:id", (req, res) => {
//   const { id } = req.params;
//   try {
//     const index = products.findIndex(product => product.id === id);
//     if (index === -1) {
//       res.status(404).json({
//         status: "error",
//         message: "product not found",
//         data: null
//       })
//     }
//     else {
//       products.splice(index, 1);
//       res.json({
//         status: "success",
//         message: "product deleted successfully",
//         data: null
//       })
//     }
//   }
//   catch {
//     res.json({
//       status: "error",
//       message: "failed to delete product",
//       data: null
//     })
//   }
// })


