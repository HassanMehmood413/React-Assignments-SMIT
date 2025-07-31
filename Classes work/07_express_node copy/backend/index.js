const express = require("express")
const connectDB = require("../practice_backend/database/database");
const UserRouter = require("./routes/UserRoute")
const applyMiddleware = require("./middleware/middleware"); 


const app = express();
const port = process.env.PORT || 5000;

connectDB();

applyMiddleware(app);

app.use("/user", UserRouter)




app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});