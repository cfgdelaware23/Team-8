const mongoose = require('mongoose');

const codeforgoodSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  number: String,
  language: String,
  housing: String,
  assistance: String,
  insecurity: String,
});

module.exports = mongoose.model('CodeForGood', codeforgoodSchema);