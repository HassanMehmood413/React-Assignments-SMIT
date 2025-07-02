const mongoose = require("mongoose");
require("dotenv").config(); // Load .env

const connectDB = async () => {
  try {
    const Database_Url = process.env.MONGO_URI;

    await mongoose.connect(Database_Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Optional: exit app on DB failure
  }
};

module.exports = connectDB;
