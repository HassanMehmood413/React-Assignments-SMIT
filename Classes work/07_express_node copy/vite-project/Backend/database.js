const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const Database_Url = "mongodb+srv://smit:smit@cluster0.0c2y.mongodb.net/test?retryWrites=true&w=majority";

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
