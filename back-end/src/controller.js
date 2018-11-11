const { Source } = require('./Source');
const { Zipcode } = require('./Zipcode');
const { distance, geocode } = require('./map');
const Promise = require('bluebird');
const moment = require('moment');
const _ = require('lodash');

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
  let date = moment();

  let days = [];
  for (let i = 0; i < 7; i++) {

    const sourceHappensOnDate = source => {
      const day = moment(date).format('ddd').toLowerCase();
      const sources = source['source']['availability'][day];
      return sources && sources.length !== 0;
    };

    days.push({
      day: moment(date).format('ddd'),
      date: moment(date).format('YYYY-MM-DD'),
      sources: sources.filter(sourceHappensOnDate)
    });

    date.add(1, 'days');
  }
  return days;
}

function convert(source) {
  return moment(source, 'HH:mmA').diff(moment().startOf('day'), 'seconds');
}

function overlap(day, source1, source2) {
  const start1 = convert(source1.source.availability[day][0]);
  const end1 = convert(source1.source.availability[day][1]);
  const start2 = convert(source2.source.availability[day][0]);
  const end2 = convert(source2.source.availability[day][1]);
  console.log(start1, end1, start2, end2);
  return (end1 > start2 && start1 < end2) || (end2 > start1 && start2 < end1);
}

function filterSources(day, sources) {
  if (!sources) {
    return sources;
  }
  for (let i = 0; i < sources.length; i++) {
    for (let j = i + 1; j < sources.length; j++) {
      if (i == j) {
        continue;
      }
      const source1 = sources[i];
      const source2 = sources[j];
      if (overlap(day, source1, source2)) {
        console.log('overlap!');
        console.log(day);
        console.log(source2);
        let index = source1.distance < source2.distance ? j : i;
        sources.splice(index, 1);
        return filterSources(sources);
      }
    }
  }
  return sources;
}

function filterOverlaps(days) {
  let filteredDays = [];
  days.forEach(day => {
    filteredSources = filterSources(day.day.toLowerCase(), day.sources);
    filteredDays.push({
      day: day.day,
      date: day.date,
      sources: filteredSources
    });
  });
  console.log('filtered', filteredDays);
  return filteredDays;
}

function threeClosestPerDay(day, date, sources) {
  const sorted = _.sortBy(sources, ({ distance, source }) => {
    return distance;
  });
  const index = sorted.length > 3 ? 3 : sorted.length;
  return sorted.splice(0, index);
}

function threeClosest(days) {
  let finalDays = [];
  days.forEach(({ day, date, sources }) => {
    const newSources = threeClosestPerDay(day, date, sources);
    finalDays.push({
      day, date, sources: newSources
    });
  });
  return finalDays;
}

function filterExtra(days) {
  // TODO - should filter to be three
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
    .then(threeClosest)
    // .then(filterOverlaps)
    // .then(filterExtra)
    .then(data => {
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
