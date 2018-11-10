const Source = require('./Source');

const controller = {
  schedule,
  addSource
};

function schedule(req, res) {
  distance.get(
    {
      origin: 'San Francisco, CA',
      destination: 'San Diego, CA'
    },
    function(err, data) {
      if (err){
        console.error(err);
        res.status(500).send(err);
      } else {
        console.log(data);
        res.status(200).send(data);
      }
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
