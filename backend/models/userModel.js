const mongoose = require('mongoose');

const dpiSchema = new mongoose.Schema({
  state: { type: String, required: true, unique: true },
  adoptionRate: { type: Number, required: true },
  year: { type: Number, required: true },
  // Add other fields as needed
});

module.exports = mongoose.model('DPIData', dpiSchema);