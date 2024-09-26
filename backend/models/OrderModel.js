const {model}  = require("mongoose");
const {OrderSchema} = require("../schama/OrdderSchema.js")

const OrderModel = new model("order", OrderSchema );

module.exports = {OrderModel}