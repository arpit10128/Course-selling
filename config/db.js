import mongoose from "mongoose";

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection successful");
  } catch (err) {
    console.log("DB connection failed");
    console.log(err);
    process.exit(1);
  }
}

export default connectDB;
