const mongoose = require('mongoose');

const model = mongoose.model('Source', new mongoose.Schema({
  key: String
}));

module.exports = model;
