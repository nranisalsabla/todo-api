const mongoose = require("mongoose");

async function connectDB() {
  try {
    const uri = "mongodb+srv://nnuranisalsabila_db_user:ran2604@gamelab-mongodb.7w1c31l.mongodb.net/"
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;