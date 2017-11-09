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
        url: data.url,
        localHost: data.localHost + data.url
      });
    }
  });

});


// GET /url
// Return all url collection
router.get("/", function(req, res, next) {

	url.find({})
  .exec(function(err, urls) {
    if (err) return next(err);
    res.json(urls);
  });

});





// url.shorten('', function(err, url) {
//   console.log(url);
// });



module.exports = router;
