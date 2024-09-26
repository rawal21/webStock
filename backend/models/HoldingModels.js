const {model} = require("mongoose");
const {HoldingSchema} = require("../schama/HoldingSchama");

const HoldingModels = new model("holding" ,HoldingSchema);

  module.exports = {HoldingModels}