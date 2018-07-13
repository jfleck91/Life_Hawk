const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myInsuranceSchema = new Schema({
  Name: { type: String, required: true },
  Type: { type: String, required: true },
  Phone: { type: Number, required: true },
  GroupNumber: { type: Number, required: true },
  IdNumber: { type: Number, required: true },
});

const Insurance = mongoose.model("My Insurance", myInsuranceSchema);

module.exports = Insurance;