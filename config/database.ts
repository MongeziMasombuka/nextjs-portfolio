import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is connected...");
    return;
  }

  // Connect to MongoDB
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("Missing MONGODB_URI in environment variables");
    }

    await mongoose.connect(uri);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("MongoDB connection error: ", error);
  }
};

export default connectDB;
