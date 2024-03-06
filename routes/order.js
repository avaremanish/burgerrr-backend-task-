

const express = require("express");
const route = express.Router();


const controller = require("../Controller/order ")

route.post("/", controller.addOrder);

module.exports = route;