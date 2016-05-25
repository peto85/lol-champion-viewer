var ChampionService = require('../services/championService.js');

class ChampionController {

  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  registerRoutes() {
    this.router.get('/', this.getChampionList.bind(this));
    //this.router.get('/:id', this.getChampionDetails.bind(this));
  }

  getChampionList(req, res) {
    ChampionService.getChampionList()
      .then(function(result) {
        res.json(result);
      })
      .catch(function() {
        console.log('error');
      });
  }


}

module.exports = ChampionController;
