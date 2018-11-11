const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  availability: {
    mon: [String],
    tues: [String],
    wed: [String],
    thurs: [String],
    fri: [String],
    sat: [String],
    sun: [String]
  },
  type: String,
  latitude: Number,
  longitude: Number
});

const Source = mongoose.model('Source', sourceSchema);

module.exports = { sourceSchema, Source };
