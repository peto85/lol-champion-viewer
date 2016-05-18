var ChampionService = require('../services/championService.js');

class ChampionController {

  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/', this.getChampions.bind(this));
    //this.router.get('/:id', this.getSinglePlayer.bind(this));
  }

  getChampions(req, res) {

    var filter = req.query.filter;

    ChampionService.getChampions(filter)
      .then(function(result) {
        res.json(result);
      })
      .catch(function() {
        console.log('error');
      });
  }

}

module.exports = ChampionController;
