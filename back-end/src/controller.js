const { Source } = require('./Source');
const { Zipcode } = require('./Zipcode');
const { distance, geocode } = require('./map');
const Promise = require('bluebird');
const moment = require('moment');

const controller = {
  schedule,
  addSource,
  deleteAllZipcodes,
  deleteAllSources,
  getAllSources
};

function calculateZipcode(zipcode) {
  return new Promise((resolve, reject) => {
    geocode(zipcode)
      .then(({ origLat, origLon }) => {
        Source.find({})
          .then(sources => {
            let dbZipcode = {
              zipcode: zipcode.toString(),
              sources: []
            };
            Promise.each(sources, source => {
              return new Promise((innerResolve, innerReject) => {
                const destLat = source.latitude;
                const destLon = source.longitude;
                distance(origLat, origLon, destLat, destLon)
                  .then(distance => {
                    dbZipcode.sources.push({
                      distance,
                      source
                    });
                    innerResolve();
                  })
                  .catch(innerReject)
              });
            })
            .then(() => {
              resolve(dbZipcode)
            })
            .catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}

function groupIntoDays(dbZipcode) {
  const { sources } = dbZipcode;
  const today = moment();

  let days = [];
  for (let i = 0; i < 7; i++) {
    const date = today.add(i, 'day');

    const sourceHappensOnDate = source => {
      // THIS IS HARD
      // TODO
      // RETURNS A BOOLEAN
      return true;
    };

    days.push({
      day: moment(date).format('ddd'),
      date: moment(date).format('YYYY-MM-DD'),
      sources: sources.filter(sourceHappensOnDate)
    });
  }
  return days;
}

function filterOverlaps(days) {
  // TODO
  // THIS FUNCTION NEEDS TO
  //   FOR EVERY SOURCE THAT OVERLAPS ANOTHER SOURCES TIME WINDOW
  //     REMOVE THE FURTHER OF THE TWO
  return days;
}

function filterExtra(days) {
  // TODO
  // THIS FUNCTION WILL REMOVE SOURCES IF THERE ARE MORE THAN THREE ON A DAY
  // THIS IS SO WE DON'T OVERWHELM PEOPLE
  return days;
}

function schedule(req, res) {
  // 1. Check zipcode in DB
  // 2. If not,
  //    - Zipcode -> lat, lon
  //    - Calculate distance to all food centers
  //    - Store in DB
  // 3. For each day in the next 7 days,
  //    get all food resources available on those days
  // 4. For every overlapping time, eliminate the further one
  // 5. If there are more than 3 food kitchens, eliminate some? furthers?

  const zipcode = req.body.zipcode;

  // Look for existing Zipcode objects
  Zipcode.find({ zipcode })
    .then(dbZipcodes => {
      return new Promise((resolve, reject) => {

        // If there are none, create one
        if (dbZipcodes.length === 0) {
          calculateZipcode(zipcode)
            .then(result => {

              // Also, store it in the DB for future use
              return Zipcode.create(result)
            })
            .then(resolve)
            .catch(reject);
        } else {
          resolve(dbZipcodes[0])
        }
      });
    })
    .then(groupIntoDays)
    .then(filterOverlaps)
    .then(filterExtra)
    .then(data => {
      console.log(data);
      res.status(200).send(data)
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err)
    });
}

function addSource(req, res) {
  const body = req.body;
  const {
    username,
    password,
    source
  } = body;

  const user = username === process.env.MONGODB_USER;
  const pass = password === process.env.MONGODB_PASS;

  if (user && pass) {
    console.log(source);
    Source.create(source)
      .then(() => res.sendStatus(200))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  } else {
    res.sendStatus(403);
  }
}

function deleteAllZipcodes(req, res) {
  Zipcode.deleteMany({})
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
}

function deleteAllSources(req, res) {
  Source.deleteMany({})
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
}

function getAllSources(req, res) {
  Source.find({})
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
}

module.exports = controller;
