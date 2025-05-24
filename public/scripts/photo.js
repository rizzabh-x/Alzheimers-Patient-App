const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  relation: { type: String, required: true },
  photoPath: { type: String, required: true },
});

module.exports = mongoose.model('Photo', photoSchema);
