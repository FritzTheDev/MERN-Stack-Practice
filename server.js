'use strict'
//import dependencies
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser")

//instantiate express and router
var app = express();
var router = express.Router();

//set port to 3001
var port = process.env.API_PORT || 3001;

//configure the API to use Body Parser and JSON
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Set up CORS for middleware
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods',
  'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers' 'Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //remove cacheing so everything stays up to date.
  res.setheader('Cache-Control', 'no-cache');
  next();
});
router.get('/', function (req, res) {
  res.json({ message: 'API Initialized!'});
});
app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
