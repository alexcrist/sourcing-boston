const https = require('https');

const map = {
  distance,
  geocode
};

function distance(origLat, origLon, destLat, destLon) {
  const url = 'https://route.api.here.com/routing/7.2/calculateroute.json' +
    '?app_id=' + process.env.MAP_ID +
    '&app_code=' + process.env.MAP_CODE +
    '&waypoint0=geo!' + origLat + ',' + origLon +
    '&waypoint1=geo!' + destLat + ',' + destLon +
    '&mode=fastest;car;traffic:disabled';

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.on('data', (data) => {
        const goodData = JSON.parse(data.toString('utf8'));
        resolve(goodData.response.route[0].summary.distance);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function geocode(zipcode) {
  const url = 'https://geocoder.api.here.com/6.2/geocode.json' +
    '?app_id=' +  process.env.GEO_ID +
    '&app_code=' + process.env.GEO_CODE +
    '&searchtext=' + encodeURI('MA, ' + zipcode);

  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      res.on('data', (data) => {
        const goodData = JSON.parse(data.toString('utf8'));
        resolve({
          origLat: goodData.Response.View[0].Result[0].Location.DisplayPosition.Latitude,
          origLon: goodData.Response.View[0].Result[0].Location.DisplayPosition.Longitude
        });
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = map;
  