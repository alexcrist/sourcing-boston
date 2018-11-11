const mongoose = require('mongoose');
const { sourceSchema } = require('./Source');

const zipcodeSchema = new mongoose.Schema({
  zipcode: String,
  sources: [{
    distance: Number,
    source: sourceSchema
  }]
});

const Zipcode = mongoose.model('Zipcode', zipcodeSchema);

module.exports = { zipcodeSchema, Zipcode };
