const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DailyNumbersSchema = new Schema({
  Name: { type: String, required: true },
  BpTop: { type: Number, required: true },
  BpBottom: { type: Number, required: true },
  HeartRate: { type: Number, required: true },
  BloodSugar: { type: Number, required: true },
  Weight: { type: Number, required: true }
});

const DailyNumbers = mongoose.model("Daily Numbers", DailyNumbersSchema);

module.exports = DailyNumbers;