const data = require('./shithole.json');
const fs = require('fs');
const https = require('https');
const Promise = require('bluebird');

let stuff = [];

Promise.each(data, source => {
  return new Promise((resolve, reject) => {
    if (!source.address) {
      resolve();
      return;
    }
  
    const url = 'https://geocoder.api.here.com/6.2/geocode.json' +
      '?app_id=' +  process.env.GEO_ID +
      '&app_code=' + process.env.GEO_CODE +
      '&searchtext=' + encodeURI(source.address);
  
    console.log('fetching...');
    https.get(url, (res) => {
      res.on('data', (data) => {
        try {
          const goodData = JSON.parse(data.toString('utf8'));
          const origLat = goodData.Response.View[0].Result[0].Location.DisplayPosition.Latitude;
          const origLon = goodData.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
          source.latitude = origLat;
          source.longitude = origLon;
          stuff.push(source);
          resolve();
        } catch (error) {
          print('error')
          print(error)
          resolve();
        }
      })
    }).on('error', (err) => {
      reject(err);
    });
  });
}).then(() => {
  fs.writeFile("./goodgood.json", JSON.stringify(stuff), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
})
}).catch(console.error);


