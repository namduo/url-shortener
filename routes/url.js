var express = require('express');
var router = express.Router();
var url = require('../models/url_model').url;



router.post("/", function(req, res, next) {
  console.log(req.body);

  url.create({
    url: req.body.url
  }, function(err, data) {
    if (!err) {
      res.status(200);
      res.json({
        message: data.randNum,
        url: data.url
      });
    }
  });

});



module.exports = router;
