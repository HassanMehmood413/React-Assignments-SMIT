const express = require("express");
const cors = require("cors");
const connectDB = require("./database");
const productRoutes = require("./routes/CRUD");

const app = express();
const port = 5000;


connectDB();

// Middlewares
app.use(cors());
app.use(express.json()); // required for JSON body parsing


app.use("/api", productRoutes);



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
