const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MyDrsSchema = new Schema({
  Name: { type: String, required: true },
  Phone: { type: Number, required: true },
  Location: { type: String, required: true },
  Type: { type: String, required: true },
});

const MyDrs = mongoose.model("My Drs", MyDrsSchema);

module.exports = MyDrs;