const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

require("dotenv").config();
const orderRoute = require("./routes/order");

// middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// routes
app.use("/api/order", orderRoute);

// connect to the database()
(async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("connected to the database"))
    .catch((error) =>
      console.log("Error in connecting to the database::", error)
    );
})();

app.listen("5050", () => {
  console.log("app is listening to the port 8080");
});
