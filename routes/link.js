var express = require('express');
var router = express.Router();
var url = require('../models/url_model').url;



router.get('/:id', function (req, res, next) {

	// res.send(req.params.id);

	url.findOne({ randNum: 'localhost:3000/link/' + req.params.id })
	.exec(function(err, urls) {

		if (err) return next(err);
		console.log(urls);
		res.redirect(urls.url);
	});


});

module.exports = router;


// //to fetch the results based on the title
// router.get('/', function(req, res, next){
//     favourites.favourite.find({title: req.query.title}, function(err, data){
//         console.log('success' + data);
//         res.json(data);
//     })
// });








	//
	// console.log(router.params.id);
