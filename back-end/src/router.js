const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/something')
  .get(controller.getSomething)
  .post(controller.postSomething)
  .delete(controller.deleteSomething);

module.exports = router;
