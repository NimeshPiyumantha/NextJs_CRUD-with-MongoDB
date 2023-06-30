import mongoose from "mongoose";
import { config } from "dotenv";

// dotenv configuration
config();

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_CONNECTION);

    if (connection.readyState == 1) {
      console.log("Database Connected");
    }
  } catch (errors) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
