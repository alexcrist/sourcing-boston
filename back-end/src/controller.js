const model = require('./Model');

const controller = {
  getSomething,
  postSomething,
  deleteSomething
};

function getSomething(req, res) {
  res.sendStatus(200);
}

function postSomething(req, res) {
  res.sendStatus(200);
}

function deleteSomething(req, res) {
  res.sendStatus(200);
}

module.exports = controller;
