const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/schedule')
  .post(controller.schedule);

router.route('/source')
  .post(controller.addSource);

router.route('/zipcode')
  .delete(controller.deleteAllZipcodes);

module.exports = router;
