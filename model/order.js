const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    burger: [
      {
        Bun: Number,
        Cheese: Number,
        Aloo: Number,
        id: String,
        quantity: String,
        itemStack: Array,
      },
    ],

    mobile: {
      type: String,
      required: true,
    },
    Price: String,
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("order", OrderSchema);
