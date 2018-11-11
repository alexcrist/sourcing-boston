const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.route('/schedule')
  .post(controller.schedule);

router.route('/source')
  .get(controller.getAllSources)
  .post(controller.addSource)
  .delete(controller.deleteAllSources);

router.route('/zipcode')
  .delete(controller.deleteAllZipcodes);

module.exports = router;
