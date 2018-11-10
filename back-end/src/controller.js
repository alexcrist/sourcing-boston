const Source = require('./Source');

const controller = {
  schedule,
  addSource
};

function schedule(req, res) {
  res.sendStatus(200);
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
  if (!(user && pass)) {
    res.sendStatus(403);
  } else {
    Source.create(source)
      .then(() => res.sendStatus(200))
      .catch(err => {
        console.error(err);
        res.status(500).send(err);
      });
  }
}

module.exports = controller;
