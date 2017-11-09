var express = require('express');
var router = express.Router();
var url = require('../models/url_model').url;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
