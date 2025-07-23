const express = require("express");
require('dotenv').config();

const connectDB = require("./config/database");
const productRoutes = require("./routes/Productroutes");
const uploadRoutes = require("./routes/Uploadrouter")
const applyMiddleware = require("./MiddleWares/authmiddleware"); 
const authRouter = require("./routes/Authroute")

const app = express();
const port = process.env.PORT || 5000;

connectDB();

applyMiddleware(app);

app.use("/", express.static("./uploads"));
app.use("/api", productRoutes);
app.use('/',uploadRoutes)
app.use('/auth',authRouter)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});