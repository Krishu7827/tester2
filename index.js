const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect("mongodb://localhost:27017/NXM201", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
    return connection;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
};



module.exports = { connectToDatabase, mongoose };











