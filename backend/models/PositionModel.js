const {model} = require("mongoose");
const {PositionsSchema} = require("../schama/PositionSchema.js");

const PositionsModel = new model("position" , PositionsSchema);

module.exports = {PositionsModel}