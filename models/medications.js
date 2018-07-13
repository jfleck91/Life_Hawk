const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicationsSchema = new Schema({
  Name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  Dosage: { type: String, required: true },
  Treats: { type: String, required: true }
});

const medications = mongoose.model("medications", medicationsSchema);

module.exports = medications;
