import mongoose from "mongoose";
import config from "config";

export default () => {
  const db: string = config.get("MONGO_URI");
  mongoose
    .connect(db)
    .then(() => console.log(`Connected to ${db}...`))
    .catch((err) => console.error("Could not connect to MongoDB...", err));
};
