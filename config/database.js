const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.log("MongoDB connection error. Please make sure MongoDB is running. ");
      console.log(err);
      process.exit(1);
    });
};

module.exports = dbConnect;
