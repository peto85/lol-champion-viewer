var express = require('express');
var router = express.Router();

/*
  API ENDPOINTS
*/

router.get('/api', function(req, res) {
  res.send('API Home page')
});

router.use('/api/champion', require('./champion.js'));

/*
  APP ENDPOINTS
*/

/*

This is not needed - serving a static folder with an index.html does the trick

router.get('/', function(req, res) {
  res.sendFile('app.html');
});
*/

module.exports = router;
