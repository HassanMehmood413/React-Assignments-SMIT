const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // required for JSON body parsing

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/add", (req, res) => {
  const { a, b } = req.body;

  if (typeof a === "number" && typeof b === "number") {
    const sum = a + b;
    res.send(sum.toString());
  } else {
    res.status(400).json({ error: "Invalid input. 'a' and 'b' must be numbers." });
  }
});

app.post("/multiply", (req, res) => {
  const { sender, receiver, amount } = req.body;

  if (typeof sender === "string" && typeof receiver === "string" && typeof amount === "number") {
    const result = amount * 2;
    res.send(result.toString());
  } else {
    res.status(400).json({ error: "Invalid input. 'sender', 'receiver', and 'amount' must be strings and numbers." });
  }
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// CRUD operations 


let products = []
app.get('/products', (req, res) => {
  try {
    res.json({
      status: "success",
      message: "successfully fetched products",
      data: products
    })
  } catch (err) {
    res.json({
      status: "error",
      message: "failed to fetch products",
      data: err
    })
  }
})



app.post("/create/products", (req, res) => {
  try {
    const { id,name, price, quantity } = req.body;
    const newProduct = {
      id,
      name,
      price,
      quantity
    }
    products.push(newProduct);
    res.json({
      status: "success",
      message: "successfully created product",
      data: newProduct
    })
  } catch (err) {
    res.json({
      status: "error",
      message: "failed to create product",
      data: err
    })
  }
})


app.put("/update/products/:id", (req, res) => {
  try {
    const { id, name, price, quantity } = req.body;
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products[index].name = name;
      products[index].price = price;
      products[index].quantity = quantity;

      res.json({
        status: "success",
        message: "successfully updated product",
        data: products[index]
      })

    }
    else {
      res.json({
        status: "error",
        message: "failed to update product",
        data: "product not found"
      })
    }

  } catch (err) {
    res.json({
      status: "error",
      message: "failed to update product",
      data: err
    })
  }
})


app.get("/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      res.json({
        status: "success",
        message: "successfully fetched product",
        data: products[index]
      })
    } else {
      res.json({
        status: "error",
        message: "failed to fetch product",
        data: "product not found"
      })
    }
  } catch (err) {
    res.json({
      status: "error",
      message: "failed to fetch product",
      data: err
    })
  }
})


app.delete("/delete/products/:id", (req, res) => {
  try {
    const { id } = req.params;
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      res.json({
        status: "success",
        message: "successfully deleted product",
        data: products
      })
    } else {
      res.json({
        status: "error",
        message: "failed to delete product",
        data: "product not found"
      })
    }
  } catch (err) {
    res.json({
      status: "error",
      message: "failed to delete product",
      data: err
    })
  }
})  