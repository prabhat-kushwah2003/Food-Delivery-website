import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kushprabhat12345_db_user:vT6lbmPvSi17qJLH@cluster0.chpxaou.mongodb.net/food-del",
    )
    .then(() => console.log("DB Connected"));
};
