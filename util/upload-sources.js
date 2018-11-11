var data = require('./shithole.json');
var request = require('request');

data.forEach((entry, index) => {
  console.log(index);
  console.log(entry);
  request.post('http://127.0.0.1:5000/source', { json: { source: entry }}, (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.statusCode);
    }
  });
});