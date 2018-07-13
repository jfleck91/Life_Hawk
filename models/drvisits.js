const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrVisitsSchema = new Schema({
  Name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reasons: { type: String, required: true },
  treatment: { type: String, required: true },
});

const DrVisits = mongoose.model("Dr Visits", DrVisitsSchema);

module.exports = DrVisits;