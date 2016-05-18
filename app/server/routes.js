var express = require('express');
var mainRouter = express.Router();

/*
  API endpoints routing
*/
var apiRouter = express.Router();
mainRouter.use('/api', apiRouter);

// Welcome page
apiRouter.get('/', function(req, res) {
  res.send('API Home page')
});

// Champion API
var championApiRouter = express.Router();
apiRouter.use('/champion', championApiRouter);

var ChampionController = require('./controllers/championController');
var championCtrl = new ChampionController(championApiRouter);

module.exports = mainRouter;
