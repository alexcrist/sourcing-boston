const mongoose = require('mongoose');

const model = mongoose.model('Model', new mongoose.Schema({
  key: String
}));

module.exports = model;
