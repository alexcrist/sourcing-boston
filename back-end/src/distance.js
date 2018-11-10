const https = require('https');

function distance(origin, destination) {
  const url = 'https://route.api.here.com/routing/7.2/calculateroute.json' +
    '?app_id=' + process.env.MAP_ID +
    '&app_code=' + process.env.MAP_CODE +
    '&waypoint0=' + 'geo!52.5,13.4' +
    '&waypoint1=' + 'geo!52.5,13.45' +
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

module.exports = distance;
  