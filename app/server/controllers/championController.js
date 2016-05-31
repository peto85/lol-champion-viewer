var ChampionService = require('../services/championService.js');

class ChampionController {

  constructor(router) {
    this.router = router;
    this.registerRoutes();
  }

  // Register endpoint routes
  registerRoutes() {
    this.router.get('/', this.getChampionList.bind(this));
    this.router.get('/:id', this.getChampionDetails.bind(this));
  }

  // Get the champion list
  getChampionList(req, res) {
    ChampionService.getChampionList()
      .then(function(result) {
        res.json(result);
      })
      .catch(this.handleError);
  }

  // Get one champion details
  getChampionDetails(req, res) {
    ChampionService.getChampionDetails(req.params.id)
      .then(function(result) {
        res.json(result);
      })
      .catch(this.handleError);
  }

  handleError(reason) {
    console.log('ERORR in promise chain');
  }


}

module.exports = ChampionController;
