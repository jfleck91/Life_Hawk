const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmergencyContactsSchema = new Schema({
  Name: { type: String, required: true },
  Date: { type: Date, default: Date.now },
  Phone: { type: Number, required: true },
  Address: { type: String, required: true },
});

const emergencyContacts = mongoose.model("Emergency Contacts", EmergencyContactsSchema);

module.exports = emergencyContacts;