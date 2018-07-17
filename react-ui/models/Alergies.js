const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const alergiesSchema = new Schema({
  Name: { type: String, required: true },
  Reaction: { type: String, required: true },
});

const Alergies = mongoose.model("Alergies", alergiesSchema);

module.exports = Alergies;