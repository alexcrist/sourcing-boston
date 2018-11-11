const Source = require('./Source');
const distance = require('./distance');

const controller = {
  schedule,
  addSource
};

function schedule(req, res) {
  const orig = '';
  const dest = '';

  distance(orig, dest)
    .then((distance) => {
      console.log(distance);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
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

module.exports = controller;
